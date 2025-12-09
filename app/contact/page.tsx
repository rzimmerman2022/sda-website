'use client';

import { useState, FormEvent } from 'react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { Badge } from '@/components/ui/Badge';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Mail, MessageSquare, CheckCircle } from 'lucide-react';

export default function ContactPage() {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState('submitting');

    try {
      const formData = new FormData(e.currentTarget);
      const data = {
        firstName: formData.get('firstName'),
        lastName: formData.get('lastName'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        subject: formData.get('subject'),
        message: formData.get('message')
      };

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setFormState('success');
        // Reset form
        e.currentTarget.reset();
      } else {
        console.error('Form submission error:', result.error);
        setFormState('error');
        alert(result.error || 'Failed to send message. Please try emailing us directly at contact@sparkdatalab.ai');
      }
    } catch (error) {
      console.error('Form submission failed:', error);
      setFormState('error');
      alert('Failed to send message. Please try emailing us directly at contact@sparkdatalab.ai');
    }
  };

  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="py-16 lg:py-24">
          <Container size="narrow">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="mb-4">
                Get In Touch
              </Badge>
              <h1 className="text-display-md font-bold text-brand-navy mb-6">
                Schedule a Consultation
              </h1>
              <p className="text-xl text-neutral-700">
                Not sure if we can help? Describe your situation and we&apos;ll let you know if
                our analysis is a good fit.
              </p>
            </div>

            {formState === 'success' ? (
              <div className="rounded-xl border-2 border-green-200 bg-green-50 p-8 text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                  <CheckCircle className="h-8 w-8 text-green-600" />
                </div>
                <h2 className="text-2xl font-bold text-brand-navy mb-2">Message Received!</h2>
                <p className="text-neutral-700">
                  Thank you for reaching out. We&apos;ll review your inquiry and get back to you
                  within 24-48 hours.
                </p>
              </div>
            ) : (
              <div className="grid gap-12 lg:grid-cols-5">
                {/* Contact Form */}
                <div className="lg:col-span-3">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid gap-6 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="firstName"
                          className="mb-2 block text-sm font-medium text-brand-navy"
                        >
                          First Name *
                        </label>
                        <Input
                          type="text"
                          id="firstName"
                          name="firstName"
                          required
                          placeholder="John"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="lastName"
                          className="mb-2 block text-sm font-medium text-brand-navy"
                        >
                          Last Name *
                        </label>
                        <Input
                          type="text"
                          id="lastName"
                          name="lastName"
                          required
                          placeholder="Doe"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="mb-2 block text-sm font-medium text-brand-navy"
                      >
                        Email Address *
                      </label>
                      <Input
                        type="email"
                        id="email"
                        name="email"
                        required
                        placeholder="john@example.com"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="mb-2 block text-sm font-medium text-brand-navy"
                      >
                        Phone Number (Optional)
                      </label>
                      <Input type="tel" id="phone" name="phone" placeholder="(555) 123-4567" />
                    </div>

                    <div>
                      <label
                        htmlFor="subject"
                        className="mb-2 block text-sm font-medium text-brand-navy"
                      >
                        Subject *
                      </label>
                      <Input
                        type="text"
                        id="subject"
                        name="subject"
                        required
                        placeholder="Medical data analysis inquiry"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="mb-2 block text-sm font-medium text-brand-navy"
                      >
                        Your Situation *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        placeholder="Please briefly describe your situation and what you're hoping to understand better. Include key details like timeline, symptoms, or specific questions."
                      />
                      <p className="mt-2 text-sm text-neutral-600">
                        The more context you provide, the better we can assess if our analysis is
                        right for you.
                      </p>
                    </div>

                    <div className="rounded-lg border border-neutral-200 bg-neutral-50 p-4">
                      <p className="text-sm text-neutral-700">
                        <strong>Privacy Note:</strong> Your information is confidential and will
                        only be used to respond to your inquiry. We do not share client
                        information with third parties.
                      </p>
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full sm:w-auto"
                      disabled={formState === 'submitting'}
                    >
                      {formState === 'submitting' ? 'Sending...' : 'Send Message'}
                    </Button>
                  </form>
                </div>

                {/* Contact Info Sidebar */}
                <div className="lg:col-span-2 space-y-6">
                  <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-6">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-brand-navy">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-brand-navy mb-2">Email Us</h3>
                    <p className="text-neutral-700 mb-3">
                      Prefer email? Reach out directly at:
                    </p>
                    <a
                      href="mailto:contact@sparkdatalab.ai"
                      className="text-brand-blue hover:text-brand-blue-light font-medium transition-colors"
                    >
                      contact@sparkdatalab.ai
                    </a>
                  </div>

                  <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-6">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-brand-gold">
                      <MessageSquare className="h-6 w-6 text-brand-navy" />
                    </div>
                    <h3 className="text-lg font-bold text-brand-navy mb-2">Response Time</h3>
                    <p className="text-neutral-700">
                      We typically respond to inquiries within <strong>24-48 hours</strong> during
                      business days.
                    </p>
                  </div>

                  <div className="rounded-xl border border-brand-gold/30 bg-brand-gold/5 p-6">
                    <h3 className="text-lg font-bold text-brand-navy mb-2">Not Medical Advice</h3>
                    <p className="text-sm text-neutral-700">
                      Remember: SparkData Analytics provides evidence synthesis for informational
                      purposes only. All health decisions should be made with your qualified
                      healthcare provider.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
