import Link from 'next/link';
import { Container } from '@/components/ui/Container';

const navigation = {
  main: [
    { name: 'Services', href: '/services' },
    { name: 'Approach', href: '/approach' },
    { name: 'About', href: '/about' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Contact', href: '/contact' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
  ],
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-neutral-200 bg-neutral-50">
      <Container>
        <div className="py-12 lg:py-16">
          {/* Main footer content */}
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Brand section */}
            <div className="lg:col-span-1">
              <Link href="/" className="inline-flex items-center gap-3 group">
                <div className="h-10 w-10 rounded-lg bg-brand-navy flex items-center justify-center">
                  <span className="text-white font-bold text-xl">S</span>
                </div>
                <span className="text-xl font-bold text-brand-navy">SparkData Analytics</span>
              </Link>
              <p className="mt-4 text-sm text-neutral-600 max-w-md">
                Turning complex problems into actionable intelligence through multi-model AI
                analysis and rigorous quality controls.
              </p>
            </div>

            {/* Navigation links */}
            <div className="lg:col-span-2">
              <div className="grid gap-8 sm:grid-cols-2">
                <div>
                  <h3 className="text-sm font-semibold text-brand-navy mb-4">Navigation</h3>
                  <ul className="space-y-3">
                    {navigation.main.map((item) => (
                      <li key={item.name}>
                        <Link
                          href={item.href}
                          className="text-sm text-neutral-600 hover:text-brand-navy transition-colors"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-brand-navy mb-4">Legal</h3>
                  <ul className="space-y-3">
                    {navigation.legal.map((item) => (
                      <li key={item.name}>
                        <Link
                          href={item.href}
                          className="text-sm text-neutral-600 hover:text-brand-navy transition-colors"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-12 pt-8 border-t border-neutral-200">
            <div className="flex flex-col gap-3">
              <p className="text-xs text-neutral-600 leading-relaxed">
                <strong>Privacy by design:</strong> We de-identify your data before any AI analysis. Raw personally identifiable information (PII/PHI) is never sent directly to external LLMs.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-xs text-neutral-500">
                  &copy; {currentYear} SparkData Analytics, LLC. All rights reserved.
                </p>
                <p className="text-xs text-neutral-500">
                  Independent Research & Analytics — Evidence Synthesis Across Domains
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
