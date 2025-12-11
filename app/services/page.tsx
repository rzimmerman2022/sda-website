import { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { createPageMetadata } from '@/lib/metadata';
import {
  ArrowRight,
  CheckCircle,
  FileSearch,
  Database,
  GitCompare,
  FileText,
  AlertCircle,
} from 'lucide-react';

export const metadata: Metadata = createPageMetadata({
  title: 'Medical & Health Analysis Services — SparkData Analytics',
  description:
    'Our flagship vertical: Transform complex health situations into evidence-based insights through multi-model AI analysis and scientific literature triangulation.',
  path: '/services',
  keywords: [
    'medical data analysis',
    'health analytics',
    'supplement interactions',
    'medication conflict analysis',
    'AI health research',
    'evidence synthesis',
  ],
});

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-b from-neutral-50 to-white py-16 lg:py-24">
          <Container>
            <div className="mx-auto max-w-3xl text-center">
              <Badge variant="secondary" className="mb-4">
                Flagship Service
              </Badge>
              <h1 className="text-display-md font-bold text-brand-navy mb-6">
                Medical & Health Analysis
              </h1>
              <p className="text-xl text-neutral-700 leading-relaxed mb-4">
                Transform complex health situations into evidence-based insights you can bring to your medical team.
              </p>
              <p className="text-sm text-neutral-600 italic">
                Part of SparkData&apos;s multi-domain research and analytics services
              </p>
            </div>
          </Container>
        </section>

        {/* What We Do */}
        <section className="py-16 lg:py-24">
          <Container>
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
              <div>
                <h2 className="text-3xl font-bold text-brand-navy mb-6">What We Do</h2>
                <div className="space-y-4 text-neutral-700">
                  <p className="text-lg">
                    We analyze complex health situations using multi-model AI combined with
                    scientific literature to help you understand:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex gap-3">
                      <CheckCircle className="h-6 w-6 text-brand-gold flex-shrink-0 mt-0.5" />
                      <span>
                        <strong>Supplement Interactions:</strong> How new or existing supplements
                        might interact with each other or medications
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle className="h-6 w-6 text-brand-gold flex-shrink-0 mt-0.5" />
                      <span>
                        <strong>Medication Conflicts:</strong> Potential pharmacological
                        interactions and mechanism analysis
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle className="h-6 w-6 text-brand-gold flex-shrink-0 mt-0.5" />
                      <span>
                        <strong>Unexplained Symptoms:</strong> Data-driven hypothesis generation
                        based on timeline and regimen changes
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle className="h-6 w-6 text-brand-gold flex-shrink-0 mt-0.5" />
                      <span>
                        <strong>Evidence Synthesis:</strong> Comprehensive reports combining
                        multiple AI platforms and peer-reviewed research
                      </span>
                    </li>
                  </ul>
                  <p className="text-sm bg-blue-50 border-l-4 border-blue-600 p-4 rounded mt-6">
                    <strong>Privacy first:</strong> All AI analysis is performed on de-identified case data. We remove direct identifiers and use neutral labels before sending any information to AI research platforms.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-brand-navy to-brand-navy-light rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Important Disclaimer</h3>
                <div className="flex gap-3 mb-4">
                  <AlertCircle className="h-6 w-6 flex-shrink-0 mt-0.5" />
                  <p className="text-neutral-100">
                    SparkData Analytics is an <strong>independent research and analytics firm</strong>.
                    We provide evidence synthesis and analysis for educational and informational
                    purposes only. This service focuses on medical and health-related data and is not a substitute for care from a licensed healthcare provider.
                  </p>
                </div>
                <p className="text-neutral-200 text-sm">
                  This is <strong>not medical advice</strong>. All health-related decisions,
                  including changes in medication, supplementation, and diet, must be made in
                  consultation with a qualified healthcare professional who knows your specific situation.
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* Process */}
        <section className="bg-neutral-50 py-16 lg:py-24">
          <Container>
            <div className="mx-auto max-w-3xl text-center mb-12">
              <h2 className="text-3xl font-bold text-brand-navy mb-4">Our 5-Phase Process</h2>
              <p className="text-lg text-neutral-600">
                Each analysis follows a rigorous, systematic approach to ensure comprehensive and
                accurate results.
              </p>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-gold/20 flex-shrink-0">
                      <FileSearch className="h-6 w-6 text-brand-navy" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">
                        Phase 1: Intake & Problem Framing
                      </CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-neutral-700">
                    We gather all relevant data: timeline of events, supplement/medication regimen,
                    symptom logs, lab values, and medical reports. The goal is to distill your
                    narrative into a precise, analyzable research question.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-blue/20 flex-shrink-0">
                      <Database className="h-6 w-6 text-brand-blue" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">
                        Phase 2: Data Acquisition & Literature Review
                      </CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-neutral-700">
                    Systematic search across PubMed, Google Scholar, and evidence-based databases
                    (Examine.com) for pharmacology, mechanisms of action, pharmacokinetics, and
                    documented side effects for every relevant substance.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-gold/20 flex-shrink-0">
                      <GitCompare className="h-6 w-6 text-brand-navy" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">
                        Phase 3: Multi-Model AI Analysis
                      </CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-neutral-700 mb-3">
                    Your case is analyzed independently across multiple leading AI research
                    platforms:
                  </p>
                  <ul className="space-y-2 text-neutral-700">
                    <li className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-brand-blue" />
                      OpenAI GPT-5 Pro Deep Research
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-brand-blue" />
                      Anthropic Claude Opus 4.1 Deep Research
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-brand-blue" />
                      Google Gemini 2.5 Pro Deep Research
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-brand-blue" />
                      Perplexity AI Deep Research
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-blue/20 flex-shrink-0">
                      <CheckCircle className="h-6 w-6 text-brand-blue" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">
                        Phase 4: Triangulation & Synthesis
                      </CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-neutral-700">
                    Cross-validation of findings across all platforms. Iterative fact-checking and
                    verification of primary sources. Synthesis using rigorous analytical
                    frameworks to identify convergent evidence and data gaps.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-gold/20 flex-shrink-0">
                      <FileText className="h-6 w-6 text-brand-navy" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">Phase 5: Report Delivery</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-neutral-700">
                    You receive a comprehensive HTML report including: clinical presentation
                    summary, primary proposed mechanisms, timeline analysis, contributing factors,
                    evidence-based corrections, suggested clinical considerations, critical data
                    gaps, and key questions for your medical team.
                  </p>
                </CardContent>
              </Card>
            </div>
          </Container>
        </section>

        {/* What You Receive */}
        <section className="py-16 lg:py-24">
          <Container>
            <div className="mx-auto max-w-3xl text-center mb-12">
              <h2 className="text-3xl font-bold text-brand-navy mb-4">What You Receive</h2>
              <p className="text-lg text-neutral-600">
                A comprehensive, professionally-formatted evidence synthesis report designed for
                collaboration with your healthcare providers.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-xl border-2 border-brand-gold/30 bg-white p-6">
                <h3 className="text-xl font-bold text-brand-navy mb-3">
                  Comprehensive Case Overview
                </h3>
                <p className="text-neutral-700">
                  Subject profile, presenting symptoms, key timeline, baseline regimen, and peak
                  biomarker data organized for clinical review.
                </p>
              </div>

              <div className="rounded-xl border-2 border-brand-blue/30 bg-white p-6">
                <h3 className="text-xl font-bold text-brand-navy mb-3">Research Methodology</h3>
                <p className="text-neutral-700">
                  Full transparency on AI platforms used, cross-validation approach, and evidence
                  synthesis methodology with proper disclosure statements.
                </p>
              </div>

              <div className="rounded-xl border-2 border-brand-gold/30 bg-white p-6">
                <h3 className="text-xl font-bold text-brand-navy mb-3">
                  Primary Proposed Mechanisms
                </h3>
                <p className="text-neutral-700">
                  Detailed explanation of the most likely pharmacological or physiological
                  contributors supported by literature and timeline correlation.
                </p>
              </div>

              <div className="rounded-xl border-2 border-brand-blue/30 bg-white p-6">
                <h3 className="text-xl font-bold text-brand-navy mb-3">
                  Clinical Considerations
                </h3>
                <p className="text-neutral-700">
                  Suggested immediate actions, critical data gaps to address, and specific
                  questions formulated for your doctor appointments.
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* CTA */}
        <section className="bg-brand-navy py-16 lg:py-24">
          <Container>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold text-white mb-6">
                Ready to Get Evidence-Based Clarity?
              </h2>
              <p className="text-xl text-neutral-200 mb-8">
                Whether you&apos;re dealing with unexplained symptoms, medication concerns, or
                complex supplement interactions, we&apos;re here to help you understand the data.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Button asChild size="lg" variant="secondary">
                  <Link href="/contact">
                    Schedule a Consultation <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-brand-navy"
                >
                  <Link href="/approach">Learn About Our Methodology</Link>
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
