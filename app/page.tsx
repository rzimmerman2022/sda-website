import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/Card';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import {
  CheckCircle,
  Shield,
  Sparkles,
  ArrowRight,
  Database,
  Brain,
  FileText,
} from 'lucide-react';

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-neutral-50 to-white py-20 lg:py-32">
          <Container>
            <div className="mx-auto max-w-4xl text-center">
              <Badge variant="secondary" className="mb-6">
                Multi-Model AI · Rigorous Quality Controls
              </Badge>
              <h1 className="text-display-lg font-bold text-brand-navy mb-6">
                Turning Complex Problems Into{' '}
                <span className="text-gradient">Actionable Intelligence</span>
              </h1>
              <p className="text-xl text-neutral-700 mb-10 leading-relaxed">
                We combine multi-model AI analysis with rigorous quality controls to transform
                ambiguous challenges into clear, evidence-based insights.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Button asChild size="lg">
                  <Link href="/services">
                    Explore Our Services <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/approach">Our Methodology</Link>
                </Button>
              </div>
            </div>
          </Container>
        </section>

        {/* Trust Bar */}
        <section className="border-y border-neutral-200 bg-white py-8">
          <Container>
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-neutral-600">
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-brand-blue" />
                <span className="font-medium">AICPA QM Aligned</span>
              </div>
              <div className="hidden sm:block h-6 w-px bg-neutral-300" />
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-brand-blue" />
                <span className="font-medium">EU AI Act Aligned</span>
              </div>
              <div className="hidden sm:block h-6 w-px bg-neutral-300" />
              <div className="flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-brand-blue" />
                <span className="font-medium">Independent Research & Analytics</span>
              </div>
            </div>
          </Container>
        </section>

        {/* How It Works */}
        <section className="py-20 lg:py-28">
          <Container>
            <div className="mx-auto max-w-3xl text-center mb-16">
              <h2 className="text-display-sm font-bold text-brand-navy mb-4">
                Rigorous Analysis, Clear Results
              </h2>
              <p className="text-lg text-neutral-600">
                Our three-step process ensures every insight is validated, evidence-based, and
                actionable.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-brand-navy/10">
                    <Database className="h-8 w-8 text-brand-navy" />
                  </div>
                  <CardTitle>1. You Bring Complexity</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Share your data, timeline, and key questions. We work with ambiguous,
                    multifaceted challenges that require deep analysis.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-brand-gold/20">
                    <Brain className="h-8 w-8 text-brand-navy" />
                  </div>
                  <CardTitle>2. We Apply Rigor</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Multi-model AI analysis cross-validated with scientific literature. Multiple
                    verification layers prevent echo chambers.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-brand-blue/10">
                    <FileText className="h-8 w-8 text-brand-blue" />
                  </div>
                  <CardTitle>3. You Get Clarity</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Comprehensive evidence synthesis to inform your decisions. Structured findings,
                    action plans, and key questions answered.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </Container>
        </section>

        {/* Flagship Service */}
        <section className="bg-gradient-to-b from-white to-neutral-50 py-20 lg:py-28">
          <Container>
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
              <div>
                <Badge variant="secondary" className="mb-4">
                  Flagship Service
                </Badge>
                <h2 className="text-display-sm font-bold text-brand-navy mb-6">
                  Medical & Health Analysis
                </h2>
                <p className="text-lg text-neutral-700 mb-6">
                  Our flagship vertical: Transform complex health situations into evidence-based insights you can bring to your medical team.
                </p>
                <ul className="space-y-4 mb-8">
                  {[
                    'Multi-model AI synthesis (GPT-5, Claude Opus, Gemini, Perplexity)',
                    'Scientific literature triangulation (PubMed, clinical trials, pharmacology)',
                    'Supplement interactions & medication conflict analysis',
                    'Comprehensive evidence reports for patient-doctor discussions',
                  ].map((item, index) => (
                    <li key={index} className="flex gap-3">
                      <CheckCircle className="h-6 w-6 text-brand-gold flex-shrink-0 mt-0.5" />
                      <span className="text-neutral-700">{item}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild size="lg" variant="primary">
                  <Link href="/services">
                    Learn More <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
              </div>

              <div className="relative">
                <div className="rounded-2xl border-2 border-brand-gold/20 bg-white p-8 shadow-xl">
                  <h3 className="text-xl font-bold text-brand-navy mb-4">What You Receive:</h3>
                  <div className="space-y-4">
                    <div className="border-l-4 border-brand-gold pl-4">
                      <h4 className="font-semibold text-brand-navy mb-1">
                        Comprehensive Data Analysis
                      </h4>
                      <p className="text-sm text-neutral-600">
                        Full ingredient/mechanism review of all relevant substances
                      </p>
                    </div>
                    <div className="border-l-4 border-brand-blue pl-4">
                      <h4 className="font-semibold text-brand-navy mb-1">
                        Multi-Platform AI Synthesis
                      </h4>
                      <p className="text-sm text-neutral-600">
                        Cross-validated findings from 4+ leading AI research platforms
                      </p>
                    </div>
                    <div className="border-l-4 border-brand-gold pl-4">
                      <h4 className="font-semibold text-brand-navy mb-1">
                        Scientific Literature Review
                      </h4>
                      <p className="text-sm text-neutral-600">
                        Evidence from peer-reviewed research and clinical databases
                      </p>
                    </div>
                    <div className="border-l-4 border-brand-blue pl-4">
                      <h4 className="font-semibold text-brand-navy mb-1">
                        Evidence-Based Report
                      </h4>
                      <p className="text-sm text-neutral-600">
                        Structured findings + action plan + questions for your doctor
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Methodology Preview */}
        <section className="py-20 lg:py-28">
          <Container>
            <div className="mx-auto max-w-3xl text-center mb-16">
              <h2 className="text-display-sm font-bold text-brand-navy mb-4">
                Why Triangulation Matters
              </h2>
              <p className="text-lg text-neutral-600">
                A single data point or model output is a vector, not a conclusion. True insight
                requires synthesis from multiple sources.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              <div className="text-center">
                <div className="mb-4 text-4xl font-bold text-brand-gold">01</div>
                <h3 className="text-xl font-bold text-brand-navy mb-3">
                  Client-Provided Data
                </h3>
                <p className="text-neutral-600">
                  The &quot;Ground Truth&quot; - your experience, timeline, and known variables
                </p>
              </div>

              <div className="text-center">
                <div className="mb-4 text-4xl font-bold text-brand-blue">02</div>
                <h3 className="text-xl font-bold text-brand-navy mb-3">Scientific Literature</h3>
                <p className="text-neutral-600">
                  The &quot;Established Knowledge&quot; - peer-reviewed research and clinical trials
                </p>
              </div>

              <div className="text-center">
                <div className="mb-4 text-4xl font-bold text-brand-navy">03</div>
                <h3 className="text-xl font-bold text-brand-navy mb-3">Multi-Model AI</h3>
                <p className="text-neutral-600">
                  The &quot;Computational Engine&quot; - cross-validated AI analysis at scale
                </p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <Button asChild size="lg" variant="outline">
                <Link href="/approach">Explore Our Methodology</Link>
              </Button>
            </div>
          </Container>
        </section>

        {/* Final CTA */}
        <section className="bg-brand-navy py-20 lg:py-28">
          <Container>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-display-sm font-bold text-white mb-6">
                Ready to Turn Complexity Into Clarity?
              </h2>
              <p className="text-xl text-neutral-200 mb-10">
                Whether you&apos;re navigating a complex health situation or exploring other
                analytical challenges, we&apos;re here to help.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Button asChild size="xl" variant="secondary">
                  <Link href="/contact">Schedule a Consultation</Link>
                </Button>
                <Button asChild size="xl" variant="outline" className="border-white text-white hover:bg-white hover:text-brand-navy">
                  <Link href="/faq">Common Questions</Link>
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
