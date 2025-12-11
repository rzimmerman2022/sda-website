import { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { createPageMetadata } from '@/lib/metadata';
import { Shield, GitCompare, Eye, CheckCircle, AlertTriangle, ArrowRight } from 'lucide-react';

export const metadata: Metadata = createPageMetadata({
  title: 'Our Approach: The Triangulation Methodology',
  description:
    'Learn how SparkData Analytics uses multi-model AI triangulation and rigorous quality controls to prevent echo chambers and deliver reliable insights.',
  path: '/approach',
  keywords: [
    'triangulation methodology',
    'multi-model AI',
    'quality controls',
    'AICPA QM',
    'EU AI Act',
    'evidence synthesis',
  ],
});

export default function ApproachPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-b from-neutral-50 to-white py-16 lg:py-24">
          <Container>
            <div className="mx-auto max-w-3xl text-center">
              <Badge variant="secondary" className="mb-4">
                Our Core Philosophy
              </Badge>
              <h1 className="text-display-md font-bold text-brand-navy mb-6">
                The Triangulation Methodology
              </h1>
              <p className="text-xl text-neutral-700 leading-relaxed">
                A single data point or model output is a vector, not a conclusion. True insight is
                achieved by synthesizing information from multiple, disparate sources.
              </p>
            </div>
          </Container>
        </section>

        {/* Three Pillars */}
        <section className="py-16 lg:py-24">
          <Container>
            <div className="mx-auto max-w-3xl text-center mb-12">
              <h2 className="text-3xl font-bold text-brand-navy mb-4">
                Three Pillars of Evidence
              </h2>
              <p className="text-lg text-neutral-600">
                Every analysis rests on the triangulation of these three independent information
                sources.
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-brand-gold/20 mx-auto">
                    <span className="text-3xl font-bold text-brand-gold">01</span>
                  </div>
                  <CardTitle className="text-center">Client-Provided Data</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-neutral-600 mb-4 font-semibold">
                    The &quot;Ground Truth&quot;
                  </p>
                  <p className="text-neutral-700 text-sm">
                    Subjective experiences, timelines, symptom logs, medication/supplement
                    regimens, and known variables. This is the foundation — your lived experience
                    and documented data.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-brand-blue/20 mx-auto">
                    <span className="text-3xl font-bold text-brand-blue">02</span>
                  </div>
                  <CardTitle className="text-center">Scientific Literature</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-neutral-600 mb-4 font-semibold">
                    The &quot;Established Knowledge&quot;
                  </p>
                  <p className="text-neutral-700 text-sm">
                    Peer-reviewed research from PubMed, clinical trials, pharmacological databases,
                    and evidence-based summaries. This grounds our analysis in validated science.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-brand-navy/20 mx-auto">
                    <span className="text-3xl font-bold text-brand-navy">03</span>
                  </div>
                  <CardTitle className="text-center">Multi-Model AI Synthesis</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-neutral-600 mb-4 font-semibold">
                    The &quot;Computational Engine&quot;
                  </p>
                  <p className="text-neutral-700 text-sm">
                    Multiple deep learning models (GPT, Claude, Gemini, Perplexity) analyze complex
                    interactions and generate hypotheses at a scale impossible through manual
                    research.
                  </p>
                </CardContent>
              </Card>
            </div>
          </Container>
        </section>

        {/* Why Multi-Model */}
        <section className="bg-neutral-50 py-16 lg:py-24">
          <Container>
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
              <div>
                <h2 className="text-3xl font-bold text-brand-navy mb-6">
                  Why Multi-Model AI Matters
                </h2>
                <div className="space-y-4 text-neutral-700">
                  <p className="text-lg">
                    AI language models have a well-documented behavioral pattern:{' '}
                    <strong>sycophancy</strong>. When one model reviews another&apos;s work (or its
                    own), it tends to agree rather than critically evaluate.
                  </p>
                  <p>
                    This creates &quot;hallucinated consensus&quot; — false confidence when
                    multiple models miss the same blind spots or echo each other&apos;s flaws.
                  </p>
                  <p>
                    <strong>Our solution:</strong> Independent analysis across different model
                    families, fresh chat sessions for each role, and adversarial review when
                    agreement exceeds 80%.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex gap-4 items-start">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-100 flex-shrink-0">
                    <AlertTriangle className="h-5 w-5 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-brand-navy mb-1">
                      The Problem: Echo Chambers
                    </h3>
                    <p className="text-sm text-neutral-700">
                      Single-model analysis or models reviewing each other leads to reinforcement
                      of errors and missed edge cases.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 flex-shrink-0">
                    <GitCompare className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-brand-navy mb-1">
                      The Solution: Independent Verification
                    </h3>
                    <p className="text-sm text-neutral-700">
                      Each AI platform analyzes your case independently. No platform sees
                      another&apos;s reasoning — only raw data and test outputs.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 flex-shrink-0">
                    <Eye className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-brand-navy mb-1">
                      The Result: Higher Confidence
                    </h3>
                    <p className="text-sm text-neutral-700">
                      When multiple independent models converge on the same finding, we have real
                      evidence. When they diverge, we dig deeper.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Quality Controls */}
        <section className="py-16 lg:py-24">
          <Container>
            <div className="mx-auto max-w-3xl text-center mb-12">
              <h2 className="text-3xl font-bold text-brand-navy mb-4">
                Gold Standard Quality Controls
              </h2>
              <p className="text-lg text-neutral-600">
                While AI governance is still evolving, we&apos;ve chosen to align with emerging
                global standards now rather than wait for regulations to force compliance.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <Shield className="h-6 w-6 text-brand-blue" />
                    <CardTitle className="text-lg">AICPA QM Aligned</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-neutral-700">
                    Risk-based quality management with documented verification, continuous
                    monitoring, and structured decision logging. Model scorecards track performance
                    over time.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <CheckCircle className="h-6 w-6 text-brand-blue" />
                    <CardTitle className="text-lg">EU AI Act Compliant</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-neutral-700">
                    Technical documentation of all AI decisions, structured logging with JSON
                    schemas, human oversight gates, and full transparency on models used.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <Eye className="h-6 w-6 text-brand-blue" />
                    <CardTitle className="text-lg">PCAOB Guidance</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-neutral-700">
                    Adversarial review protocols, professional skepticism enforcement, complete
                    audit trails, and devil&apos;s advocate challenges when needed.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <GitCompare className="h-6 w-6 text-brand-blue" />
                    <CardTitle className="text-lg">Fresh Chat Separation</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-neutral-700">
                    Reviewer agents never see Builder agents&apos; reasoning. Only factual outputs
                    (test results, diffs) are shared — never prose explanations or summaries.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <AlertTriangle className="h-6 w-6 text-brand-gold" />
                    <CardTitle className="text-lg">Risk Tiering (T0-T3)</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-neutral-700">
                    Every analysis is risk-assessed. Higher-risk work requires more verification
                    layers, different model families, and additional specialized review lenses.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <CheckCircle className="h-6 w-6 text-brand-gold" />
                    <CardTitle className="text-lg">Audit Trail</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-neutral-700">
                    Decision logs capture model attribution, risk tier, metrics, and human
                    overrides. Review reports document findings across multiple perspectives.
                  </p>
                </CardContent>
              </Card>
            </div>
          </Container>
        </section>

        {/* Data Privacy Section */}
        <section className="bg-gradient-to-b from-blue-50 to-white py-16 lg:py-24">
          <Container>
            <div className="mx-auto max-w-4xl">
              <div className="text-center mb-12">
                <Badge variant="secondary" className="mb-4">
                  Privacy & Security
                </Badge>
                <h2 className="text-3xl font-bold text-brand-navy mb-4">
                  How We Use AI Without Exposing Your Identity
                </h2>
                <p className="text-lg text-neutral-700">
                  AI is powerful—but only if it respects privacy. Our pipeline is built so that your identity stays protected while your data is still useful for analysis.
                </p>
              </div>

              <div className="space-y-8">
                {/* De-Identification */}
                <div className="bg-white rounded-2xl border-2 border-blue-200 p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 flex-shrink-0">
                      <Shield className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-brand-navy mb-2">
                        1. De-Identification Before Any AI Call
                      </h3>
                      <p className="text-neutral-700 mb-4">
                        Before any information touches an AI model, we run it through a privacy layer that:
                      </p>
                    </div>
                  </div>
                  <ul className="space-y-3 ml-16">
                    <li className="flex gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-neutral-700">
                        <strong>Removes direct identifiers</strong> – names, emails, phone numbers, full street addresses, account numbers, medical record numbers, etc.
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-neutral-700">
                        <strong>Generalizes or masks quasi-identifiers</strong> – e.g., exact dates of birth become age ranges (&quot;mid-40s&quot;), specific locations become regions (&quot;Phoenix metro area&quot;), and employer names may become generic (&quot;mid-size tech company&quot;).
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-neutral-700">
                        <strong>Replaces entities with neutral labels</strong> – &quot;Ryan Zimmerman&quot; → &quot;Subject A&quot;, &quot;Dr. Smith&quot; → &quot;Clinician 1&quot;, &quot;Mayo Clinic – Phoenix&quot; → &quot;Hospital X&quot;.
                      </span>
                    </li>
                  </ul>
                  <p className="text-neutral-700 mt-4 ml-16 italic text-sm">
                    Only the pseudonymous labels go to the AI models. The mapping back to real-world identities stays inside SparkData&apos;s secure environment and never leaves our systems.
                  </p>
                </div>

                {/* Data Minimization */}
                <div className="bg-white rounded-2xl border-2 border-blue-200 p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 flex-shrink-0">
                      <Eye className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-brand-navy mb-2">
                        2. Data Minimization by Design
                      </h3>
                      <p className="text-neutral-700">
                        We don&apos;t send your entire life story to an AI model. For each question, we:
                      </p>
                    </div>
                  </div>
                  <ul className="space-y-3 ml-16">
                    <li className="flex gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-neutral-700">
                        Extract only the <strong>minimum necessary snippet</strong> (e.g., just the relevant lab set or just the last 90 days of regimen changes)
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-neutral-700">
                        Strip out identifiers, and
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-neutral-700">
                        Pass that de-identified slice into multiple models for analysis
                      </span>
                    </li>
                  </ul>
                  <p className="text-neutral-700 mt-4 ml-16 text-sm">
                    This is aligned with emerging privacy standards for AI: use the smallest possible dataset, de-identify it, and document what was sent.
                  </p>
                </div>

                {/* No Training */}
                <div className="bg-white rounded-2xl border-2 border-blue-200 p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 flex-shrink-0">
                      <AlertTriangle className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-brand-navy mb-2">
                        3. No Training on Your Data
                      </h3>
                      <p className="text-neutral-700">
                        Our policy is simple:
                      </p>
                    </div>
                  </div>
                  <ul className="space-y-3 ml-16">
                    <li className="flex gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-neutral-700">
                        We <strong>do not use your case data to train our own models</strong> without explicit, separate consent.
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-neutral-700">
                        When we use third-party AI providers, we select configurations/offerings that <strong>contractually prohibit training</strong> their foundation models on your prompts and files, wherever that option is available.
                      </span>
                    </li>
                  </ul>
                </div>

                {/* You Stay in Control */}
                <div className="bg-white rounded-2xl border-2 border-blue-200 p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 flex-shrink-0">
                      <CheckCircle className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-brand-navy mb-2">
                        4. You Stay in Control
                      </h3>
                      <p className="text-neutral-700">
                        We can:
                      </p>
                    </div>
                  </div>
                  <ul className="space-y-3 ml-16">
                    <li className="flex gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-neutral-700">
                        Show you exactly what de-identified data was sent to AI models for your case
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-neutral-700">
                        Delete analysis artifacts on request (subject to legal/record-keeping obligations)
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-neutral-700">
                        Keep your contact and billing information in a separate, access-controlled system from your research dossier
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* How We Prevent Failures */}
        <section className="bg-gradient-to-b from-neutral-50 to-white py-16 lg:py-24">
          <Container size="narrow">
            <h2 className="text-3xl font-bold text-brand-navy mb-8 text-center">
              How We Prevent AI Echo Chamber Failures
            </h2>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-gold flex-shrink-0 mt-1">
                  <CheckCircle className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-brand-navy mb-1">Fresh Chat Sessions</h3>
                  <p className="text-neutral-700">
                    Each review role gets a completely fresh chat session. The Reviewer never sees
                    the Builder&apos;s reasoning — only the code diff, original requirements, and
                    actual test outputs.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-blue flex-shrink-0 mt-1">
                  <CheckCircle className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-brand-navy mb-1">Different Model Families</h3>
                  <p className="text-neutral-700">
                    For high-risk work, we require analysis from different model families (e.g.,
                    Claude, GPT, and Gemini) to ensure architectural diversity in reasoning.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-gold flex-shrink-0 mt-1">
                  <CheckCircle className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-brand-navy mb-1">
                    Devil&apos;s Advocate Review
                  </h3>
                  <p className="text-neutral-700">
                    When agreement exceeds 80% across reviewers, we trigger an adversarial review
                    to challenge the consensus and look for missed edge cases.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-blue flex-shrink-0 mt-1">
                  <CheckCircle className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-brand-navy mb-1">
                    Only Tool Outputs Are Shared
                  </h3>
                  <p className="text-neutral-700">
                    We never share prior chat logs, AI-generated summaries, or
                    &quot;explanations&quot;. Only factual data: test results, lint output, actual
                    diffs, and source requirements.
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* CTA */}
        <section className="bg-brand-navy py-16 lg:py-24">
          <Container>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold text-white mb-6">
                Experience the Difference Rigor Makes
              </h2>
              <p className="text-xl text-neutral-200 mb-8">
                When you need reliable insights from complex data, our triangulation methodology
                ensures you get evidence-based clarity, not hallucinated consensus.
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
                  <Link href="/services">View Our Services</Link>
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
