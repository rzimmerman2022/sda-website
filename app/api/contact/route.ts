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

    if (response.ok) {
      return NextResponse.json({
        success: true,
        message: 'Thank you for your message. We will respond within 24-48 hours.'
      });
    } else {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Form submission failed');
    }

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to send message. Please try emailing us directly at contact@sparkdatalab.ai' },
      { status: 500 }
    );
  }
}
