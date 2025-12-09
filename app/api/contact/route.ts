import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, phone, subject, message } = body;

    // Validate required fields
    if (!firstName || !lastName || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // For now, we'll use Resend (modern email API for Next.js)
    // TODO: Set up Resend account and add RESEND_API_KEY to environment variables
    // For immediate deployment, we'll log to console and send success
    // This should be replaced with actual Resend integration before production

    const emailData = {
      from: `${firstName} ${lastName} <${email}>`,
      to: 'ryan.zimmerman@southwestresumes.com',
      replyTo: email,
      subject: `SparkData Contact: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1e3a8a;">New Contact Form Submission</h2>

          <div style="background: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 8px 0;"><strong>Name:</strong> ${firstName} ${lastName}</p>
            <p style="margin: 8px 0;"><strong>Email:</strong> ${email}</p>
            ${phone ? `<p style="margin: 8px 0;"><strong>Phone:</strong> ${phone}</p>` : ''}
            <p style="margin: 8px 0;"><strong>Subject:</strong> ${subject}</p>
          </div>

          <div style="margin: 20px 0;">
            <h3 style="color: #1e3a8a;">Message:</h3>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>

          <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 30px 0;" />

          <p style="color: #6b7280; font-size: 12px;">
            Sent from SparkData Analytics contact form<br />
            ${new Date().toLocaleString('en-US', {
              dateStyle: 'full',
              timeStyle: 'long',
              timeZone: 'America/New_York'
            })}
          </p>
        </div>
      `,
      text: `
New Contact Form Submission

Name: ${firstName} ${lastName}
Email: ${email}
${phone ? `Phone: ${phone}` : ''}
Subject: ${subject}

Message:
${message}

---
Sent from SparkData Analytics contact form
${new Date().toLocaleString()}
      `.trim()
    };

    // Log for debugging (remove in production)
    console.log('Contact form submission:', emailData);

    // TODO: Uncomment when Resend is set up
    // const { Resend } = await import('resend');
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send(emailData);

    // Using Formspree.io (same service as Southwest Resumes)
    const formspreeEndpoint = process.env.FORMSPREE_ENDPOINT || process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;

    if (!formspreeEndpoint) {
      throw new Error('Formspree endpoint not configured');
    }

    const response = await fetch(formspreeEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        name: `${firstName} ${lastName}`,
        email: email,
        phone: phone || '',
        subject: subject,
        message: message,
        _replyto: email,
        _subject: `SparkData Contact: ${subject}`
      })
    });

    const result = await response.json();

    if (response.ok) {
      return NextResponse.json({
        success: true,
        message: 'Thank you for your message. We will respond within 24-48 hours.'
      });
    } else {
      throw new Error('Form submission failed');
    }

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to send message. Please try emailing us directly at contact@sparkdatalab.ai' },
      { status: 500 }
    );
  }
}
