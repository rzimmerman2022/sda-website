import { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { createPageMetadata } from '@/lib/metadata';
import { Target, Shield, TrendingUp, Users, ArrowRight } from 'lucide-react';

export const metadata: Metadata = createPageMetadata({
  title: 'About SparkData Analytics',
  description:
    'Learn about our mission to deliver world-class analytical insights through cutting-edge AI technology and rigorous quality controls.',
  path: '/about',
});

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-b from-neutral-50 to-white py-16 lg:py-24">
          <Container size="narrow">
            <div className="text-center">
              <Badge variant="secondary" className="mb-4">
                About Us
              </Badge>
              <h1 className="text-display-md font-bold text-brand-navy mb-6">
                Turning Complexity Into Clarity
              </h1>
              <p className="text-xl text-neutral-700 leading-relaxed">
                SparkData Analytics was founded on a simple belief: in an era of powerful AI
                tools, the organizations that combine cutting-edge technology with rigorous
                quality controls will earn trust and deliver real value.
              </p>
            </div>
          </Container>
        </section>

        {/* Mission */}
        <section className="py-16 lg:py-24">
          <Container>
            <div className="mx-auto max-w-3xl">
              <div className="mb-12 flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-gold/20">
                  <Target className="h-7 w-7 text-brand-navy" />
                </div>
                <h2 className="text-3xl font-bold text-brand-navy">Our Mission</h2>
              </div>
              <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                To deliver world-class analytical insights by combining cutting-edge AI technology
                with rigorous quality controls that exceed enterprise and regulatory standards.
              </p>
              <p className="text-lg text-neutral-700 leading-relaxed">
                We don&apos;t just use AI — we verify it, cross-check it, and hold it to the same
                standards that global regulators are developing for high-stakes AI applications.
              </p>
            </div>
          </Container>
        </section>

        {/* Our Commitment */}
        <section className="bg-neutral-50 py-16 lg:py-24">
          <Container>
            <div className="mx-auto max-w-3xl text-center mb-12">
              <h2 className="text-3xl font-bold text-brand-navy mb-4">Our Commitment</h2>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-brand-navy/10">
                  <Shield className="h-8 w-8 text-brand-navy" />
                </div>
                <h3 className="text-lg font-bold text-brand-navy mb-2">
                  Transparency in Methodology
                </h3>
                <p className="text-sm text-neutral-700">
                  We disclose which AI models we use, how we verify outputs, and what limitations
                  exist in our analyses.
                </p>
              </div>

              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-brand-gold/20">
                  <TrendingUp className="h-8 w-8 text-brand-navy" />
                </div>
                <h3 className="text-lg font-bold text-brand-navy mb-2">
                  Compliance with Global Standards
                </h3>
                <p className="text-sm text-neutral-700">
                  We align with AICPA QM, EU AI Act, and PCAOB guidance — not because we have to,
                  but because it&apos;s the right approach.
                </p>
              </div>

              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-brand-blue/20">
                  <Users className="h-8 w-8 text-brand-blue" />
                </div>
                <h3 className="text-lg font-bold text-brand-navy mb-2">
                  Client Empowerment
                </h3>
                <p className="text-sm text-neutral-700">
                  Our goal is to give you evidence-based insights that help you make informed
                  decisions with your healthcare providers.
                </p>
              </div>

              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-brand-gold/20">
                  <Target className="h-8 w-8 text-brand-navy" />
                </div>
                <h3 className="text-lg font-bold text-brand-navy mb-2">
                  Continuous Improvement
                </h3>
                <p className="text-sm text-neutral-700">
                  We track model performance through scorecards, learn from every analysis, and
                  evolve our methods as the field advances.
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* Founder Section */}
        <section className="py-16 lg:py-24">
          <Container>
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
              <div>
                <h2 className="text-3xl font-bold text-brand-navy mb-4">
                  Leadership: Ryan Zimmerman, CEO
                </h2>
                <div className="space-y-4 text-neutral-700">
                  <p className="text-lg">
                    Ryan founded SparkData Analytics with a vision to bridge the gap between
                    powerful AI capabilities and the rigorous quality controls needed for
                    high-stakes analysis.
                  </p>
                  <p>
                    Recognizing that AI governance was evolving faster than most organizations
                    could adapt, Ryan chose a proactive approach: study the emerging frameworks
                    from AICPA, the EU AI Act, and PCAOB, and build those best practices into
                    operations from day one.
                  </p>
                  <p>
                    This commitment to transparency, verification, and continuous improvement
                    defines SparkData&apos;s culture and methodology.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border-2 border-brand-gold/30 bg-gradient-to-br from-brand-navy to-brand-navy-light p-8 text-white">
                <blockquote className="text-xl italic mb-4">
                  &quot;When there are no clear rules, follow the people who are building them. We
                  chose to align with global AI governance standards not because we have to, but
                  because it&apos;s the right way to use these powerful tools responsibly.&quot;
                </blockquote>
                <p className="font-semibold">— Ryan Zimmerman, CEO</p>
              </div>
            </div>
          </Container>
        </section>

        {/* Why Now */}
        <section className="bg-gradient-to-b from-neutral-50 to-white py-16 lg:py-24">
          <Container size="narrow">
            <h2 className="text-3xl font-bold text-brand-navy mb-6 text-center">
              Why We Built This Now
            </h2>
            <div className="space-y-4 text-neutral-700 text-lg">
              <p>
                AI governance is still evolving. Many organizations are taking a &quot;wait and
                see&quot; approach — waiting for regulations to force compliance before adapting.
              </p>
              <p>
                We believe there&apos;s a better path: study what the best organizations and
                regulatory bodies are doing, and build those practices into operations now.
              </p>
              <p>
                By aligning with emerging standards from the start, we&apos;re not just preparing
                for the future — we&apos;re building trust through transparency, verification, and
                accountability today.
              </p>
            </div>
          </Container>
        </section>

        {/* CTA */}
        <section className="bg-brand-navy py-16 lg:py-24">
          <Container>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold text-white mb-6">
                Ready to Experience Rigorous Analysis?
              </h2>
              <p className="text-xl text-neutral-200 mb-8">
                Discover how our triangulation methodology and quality controls can help you turn
                complex problems into actionable intelligence.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Button asChild size="lg" variant="secondary">
                  <Link href="/contact">
                    Get Started <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-brand-navy"
                >
                  <Link href="/approach">Learn Our Methodology</Link>
                </Button>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
