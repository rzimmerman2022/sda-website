import { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { createPageMetadata } from '@/lib/metadata';
import { PrecisionProtocolDiagram } from '@/components/about/PrecisionProtocolDiagram';
import { Target, Shield, ArrowRight, FileText, Database, CheckCircle, FileCheck, AlertTriangle, BookOpen } from 'lucide-react';

export const metadata: Metadata = createPageMetadata({
  title: 'About SparkData Analytics',
  description:
    'We provide the Trust Layer between you and AI. Combining multi-model synthesis with audit-grade quality controls to turn complex questions into clear, evidence-based insights.',
  path: '/about',
});

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-b from-neutral-50 to-white py-16 lg:py-24">
          <Container>
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
              {/* Left Column - Text Content */}
              <div>
                <Badge variant="secondary" className="mb-4">
                  About Us
                </Badge>
                <h1 className="text-display-md font-bold text-brand-navy mb-6">
                  Bridging the Gap Between AI Potential and Human Trust
                </h1>
                <div className="space-y-4 text-lg text-neutral-700 leading-relaxed mb-8">
                  <p>
                    We apply forensic-grade verification to multi-model AI so you can use it for real decisions—not just chat.
                  </p>
                  <div className="bg-brand-navy text-white rounded-2xl p-6 space-y-3">
                    <p className="text-xl font-bold">
                      Raw AI models deal in probability.
                    </p>
                    <p className="text-xl font-bold">
                      We deal in evidence.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" variant="primary">
                    <Link href="/contact">
                      Schedule a Consultation
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <Link href="/approach">View Our Methodology</Link>
                  </Button>
                </div>
                <div className="mt-8 flex flex-wrap gap-6 text-sm text-neutral-600">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-brand-gold rounded-full"></div>
                    <span>4+ AI models</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-brand-gold rounded-full"></div>
                    <span>3 verification layers</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-brand-gold rounded-full"></div>
                    <span>5-7 day turnaround</span>
                  </div>
                </div>
              </div>

              {/* Right Column - Diagram */}
              <div className="flex justify-center lg:justify-end">
                <PrecisionProtocolDiagram />
              </div>
            </div>
          </Container>
        </section>

        {/* What We Do */}
        <section className="py-12 lg:py-16">
          <Container>
            <div className="mx-auto max-w-3xl mb-12 text-center">
              <h2 className="text-3xl font-bold text-brand-navy mb-4">What We Do</h2>
              <p className="text-lg text-neutral-700 leading-relaxed mb-4">
                We help you use AI for the things that actually matter. When you have a question that is too complex for a quick Google search and too important to leave to a single chatbot answer, we step in.
              </p>
              <p className="text-lg text-neutral-700 leading-relaxed">
                Our workflow bridges the gap between &quot;chatbot conversation&quot; and &quot;clinical precision&quot;:
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <div className="bg-white rounded-xl border-2 border-neutral-200 p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-navy/10">
                    <FileText className="h-6 w-6 text-brand-navy" />
                  </div>
                  <h3 className="text-xl font-bold text-brand-navy">Intake & Framing</h3>
                </div>
                <p className="text-neutral-700">
                  We take your complex history—data, timeline, key questions—and structure it into a clear research problem.
                </p>
              </div>

              <div className="bg-white rounded-xl border-2 border-neutral-200 p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-gold/20">
                    <Database className="h-6 w-6 text-brand-navy" />
                  </div>
                  <h3 className="text-xl font-bold text-brand-navy">Evidence-Driven Analysis</h3>
                </div>
                <p className="text-neutral-700">
                  We harness multiple leading AI models, but we anchor them to the highest standards in each domain—peer-reviewed literature, clinical data, and domain-appropriate references.
                </p>
              </div>

              <div className="bg-white rounded-xl border-2 border-neutral-200 p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-blue/20">
                    <CheckCircle className="h-6 w-6 text-brand-blue" />
                  </div>
                  <h3 className="text-xl font-bold text-brand-navy">Triangulation & Synthesis</h3>
                </div>
                <p className="text-neutral-700">
                  Independent analyses are compared, challenged, and cross-checked. We look for where models and sources converge, where they diverge, and why.
                </p>
              </div>

              <div className="bg-white rounded-xl border-2 border-neutral-200 p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-gold/20">
                    <FileCheck className="h-6 w-6 text-brand-navy" />
                  </div>
                  <h3 className="text-xl font-bold text-brand-navy">Deliverable</h3>
                </div>
                <p className="text-neutral-700">
                  You receive a professional, structured report. Not just an answer—a roadmap for data-driven conversations with your advisors, whether that&apos;s your doctor, attorney, or executive team.
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* Where We Apply This */}
        <section className="bg-neutral-50 py-12 lg:py-16">
          <Container size="narrow">
            <h2 className="text-3xl font-bold text-brand-navy mb-6 text-center">
              Where We Apply This
            </h2>
            <div className="space-y-4 text-neutral-700 text-lg">
              <p className="font-semibold text-brand-navy">
                SparkData is a methodology-first, verticals-second company.
              </p>
              <p>
                We apply our research framework to any domain where decisions are complex, evidence is scattered, and stakes are high. Our current verticals include:
              </p>
              <ul className="list-disc pl-8 space-y-2">
                <li>
                  <strong>Medical & Health Analysis</strong> (flagship): Untangling complex regimens, symptoms, and treatment options. We don&apos;t replace your doctor—we organize scattered data into clear evidence so you can have higher-quality conversations with your care team.
                </li>
                <li>
                  <strong>Legal & Forensic Research</strong>: Evidence synthesis for complex cases, document analysis, and multi-source fact verification.
                </li>
                <li>
                  <strong>Business Operations & Strategy</strong>: Market research, competitive intelligence, and evidence-based decision support.
                </li>
              </ul>
              <p className="italic">
                Different verticals. Same spine: AI + Evidence + Structure.
              </p>
            </div>
          </Container>
        </section>

        {/* The Challenge */}
        <section className="py-12 lg:py-16">
          <Container size="narrow">
            <h2 className="text-3xl font-bold text-brand-navy mb-6 text-center">
              The Challenge: Conversation vs. Precision
            </h2>
            <div className="space-y-4 text-neutral-700 text-lg">
              <p>
                Modern AI models are incredible at conversation. They are optimized to be helpful, fluent, and engaging. For everyday questions, that&apos;s perfect. But for high-stakes analysis, &quot;helpful&quot; isn&apos;t always enough. A conversational model may:
              </p>
              <ul className="list-disc pl-8 space-y-2">
                <li>Smooth over conflicts to avoid friction,</li>
                <li>Agree with a flawed premise just to keep the dialogue flowing, or</li>
                <li>Sound more certain than the underlying evidence justifies.</li>
              </ul>
              <p className="font-semibold text-brand-navy">
                We don&apos;t see this as a malice issue—it&apos;s an optimization issue. Standard AI is optimized for engagement. SparkData is optimized for precision.
              </p>
            </div>
          </Container>
        </section>

        {/* The Precision Protocol */}
        <section className="bg-gradient-to-b from-neutral-50 to-white py-12 lg:py-16">
          <Container>
            <div className="mx-auto max-w-3xl mb-12 text-center">
              <h2 className="text-3xl font-bold text-brand-navy mb-4">
                Our Solution: The Precision Protocol
              </h2>
              <p className="text-lg text-neutral-700 mb-2">
                We built a system that lets you benefit from the incredible speed and reach of AI, without worrying about its &quot;soft edges.&quot;
              </p>
              <p className="text-sm font-mono text-neutral-500 tracking-wider">
                A REPEATABLE, DOCUMENTED PROTOCOL FOR AUDIT-READY AI ANALYSIS
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {/* Card 1 - Independence by Design */}
              <div className="relative bg-white rounded-2xl border-2 border-neutral-300 p-8 overflow-hidden">
                {/* Large Background Number */}
                <div className="absolute top-0 right-0 text-[12rem] font-bold text-neutral-100 leading-none select-none pointer-events-none">
                  01
                </div>

                {/* ACTIVE Badge */}
                <div className="relative mb-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-700 text-white rounded-full text-xs font-semibold">
                    <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                    ACTIVE
                  </div>
                </div>

                <h3 className="relative text-xl font-bold text-brand-navy mb-4">
                  Independence by Design
                </h3>
                <p className="relative text-neutral-700 text-sm leading-relaxed">
                  We run multiple leading models (GPT-class, Claude-class, Gemini-class) in isolation. They don&apos;t see each other&apos;s reasoning or conclusions. When they agree, it&apos;s because the underlying evidence is strong—not because they&apos;re echoing each other.
                </p>
              </div>

              {/* Card 2 - Structured Verification */}
              <div className="relative bg-white rounded-2xl border-2 border-neutral-300 p-8 overflow-hidden">
                {/* Large Background Number */}
                <div className="absolute top-0 right-0 text-[12rem] font-bold text-amber-100 leading-none select-none pointer-events-none">
                  02
                </div>

                {/* ACTIVE Badge */}
                <div className="relative mb-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-600 text-white rounded-full text-xs font-semibold">
                    <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                    ACTIVE
                  </div>
                </div>

                <h3 className="relative text-xl font-bold text-brand-navy mb-4">
                  Structured Verification
                </h3>
                <p className="relative text-neutral-700 text-sm leading-relaxed">
                  We use a blind review process. When a finding is checked, the reviewing system sees only the relevant data and the claim to evaluate—not the previous narrative. This forces a fresh look at the facts. When agreement is suspiciously high, we trigger a devil&apos;s-advocate review to challenge the consensus and find what everyone might be missing.
                </p>
              </div>

              {/* Card 3 - Anchoring to Authority */}
              <div className="relative bg-white rounded-2xl border-2 border-neutral-300 p-8 overflow-hidden">
                {/* Large Background Number */}
                <div className="absolute top-0 right-0 text-[12rem] font-bold text-blue-100 leading-none select-none pointer-events-none">
                  03
                </div>

                {/* ACTIVE Badge */}
                <div className="relative mb-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-600 text-white rounded-full text-xs font-semibold">
                    <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                    ACTIVE
                  </div>
                </div>

                <h3 className="relative text-xl font-bold text-brand-navy mb-4">
                  Anchoring to Authority
                </h3>
                <p className="relative text-neutral-700 text-sm leading-relaxed">
                  We ground every AI insight in external reality. By systematically checking outputs against established sources (peer-reviewed studies, clinical data, technical standards), we work to ensure the results are not just plausible, but as strong as the current evidence allows.
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* Standards-Aligned Governance */}
        <section className="py-12 lg:py-16">
          <Container>
            <div className="mx-auto max-w-3xl text-center mb-12">
              <h2 className="text-3xl font-bold text-brand-navy mb-4">
                Standards-Aligned Governance
              </h2>
              <p className="text-lg text-neutral-700">
                We believe the future of AI is safe, transparent, and regulated—and we&apos;d rather build for that future now. Our operations align with the highest emerging global standards:
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-brand-navy/10">
                  <Shield className="h-8 w-8 text-brand-navy" />
                </div>
                <h3 className="text-lg font-bold text-brand-navy mb-2">
                  AICPA Quality Management
                </h3>
                <p className="text-sm text-neutral-700">
                  (Risk-based verification, monitoring, and documentation)
                </p>
              </div>

              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-brand-gold/20">
                  <BookOpen className="h-8 w-8 text-brand-navy" />
                </div>
                <h3 className="text-lg font-bold text-brand-navy mb-2">
                  EU AI Act Principles
                </h3>
                <p className="text-sm text-neutral-700">
                  (Technical documentation, logging, and human oversight)
                </p>
              </div>

              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-brand-blue/20">
                  <Target className="h-8 w-8 text-brand-blue" />
                </div>
                <h3 className="text-lg font-bold text-brand-navy mb-2">
                  PCAOB-Style Expectations
                </h3>
                <p className="text-sm text-neutral-700">
                  (Professional skepticism and complete audit trails)
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* Founder Section */}
        <section className="py-12 lg:py-16">
          <Container>
            <div className="grid gap-12 lg:grid-cols-3 lg:gap-16 items-center">
              {/* Headshot */}
              <div className="flex justify-center">
                <div className="w-full max-w-sm rounded-2xl overflow-hidden border-4 border-brand-gold/30 shadow-xl">
                  <img
                    src="/ryan-zimmerman-headshot.jpg"
                    alt="Ryan Zimmerman, CEO of SparkData Analytics"
                    className="w-full h-auto block"
                  />
                </div>
              </div>

              {/* Bio */}
              <div className="lg:col-span-2 space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-brand-navy mb-4">
                    Leadership
                  </h2>
                  <h3 className="text-xl font-semibold text-brand-navy mb-4">
                    Ryan Zimmerman – Founder & CEO
                  </h3>
                  <div className="space-y-4 text-neutral-700">
                    <p>
                      Ryan founded SparkData with a background in systems engineering, data analysis, and biophysics. He saw a growing gap between how powerful AI had become and how casually it was being used for serious questions.
                    </p>
                  </div>
                </div>

                <div className="rounded-2xl border-2 border-brand-gold/30 bg-gradient-to-br from-brand-navy to-brand-navy-light p-8 text-white space-y-4">
                  <blockquote className="text-lg italic">
                    &quot;I love this technology. I genuinely believe it can solve problems we used to think were impossible.
                  </blockquote>
                  <blockquote className="text-lg italic">
                    But I also watched the industry race to make models more &apos;friendly&apos; and conversational. Models like GPT-4o showed how quickly the world can fall in love with personality. That&apos;s great for everyday use—but for high-stakes analysis, you don&apos;t need a friend. You need a fact-checker.
                  </blockquote>
                  <blockquote className="text-lg italic">
                    If we want to use these tools for serious things, we need a layer of rigor on top of them—a way to bridge the gap between the &apos;chat&apos; interface everyone loves and the &apos;clinical precision&apos; everyone needs.
                  </blockquote>
                  <blockquote className="text-lg italic">
                    That&apos;s what SparkData is. It&apos;s the infrastructure that lets us unlock the full potential of AI—without flying blind.&quot;
                  </blockquote>
                  <p className="font-semibold pt-4">— Ryan Zimmerman, CEO</p>
                </div>

                <div className="bg-brand-gold/10 border-2 border-brand-gold/30 rounded-xl p-6">
                  <p className="text-lg font-semibold text-brand-navy italic text-center">
                    Ryan&apos;s philosophy defines SparkData&apos;s culture: AI is the engine. We build the steering, brakes, and instrumentation.
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Disclaimer */}
        <section className="bg-neutral-50 py-12 lg:py-16">
          <Container size="narrow">
            <div className="bg-white border-2 border-brand-navy/20 rounded-2xl p-8">
              <div className="flex items-start gap-4 mb-4">
                <AlertTriangle className="h-6 w-6 text-brand-navy flex-shrink-0 mt-1" />
                <h2 className="text-2xl font-bold text-brand-navy">Important Disclaimer</h2>
              </div>
              <div className="space-y-4 text-neutral-700 leading-relaxed">
                <p>
                  SparkData Analytics is an independent research and analytics firm. We provide evidence synthesis and analysis for educational and informational purposes only. We are not a substitute for professional medical, legal, financial, or other licensed advice. Our reports do not constitute diagnosis, treatment plans, legal opinions, or investment advice.
                </p>
                <p>
                  All decisions—especially in areas like health, law, and finance—must be made in consultation with appropriately qualified and licensed professionals who know your specific situation.
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* CTA */}
        <section className="bg-brand-navy py-12 lg:py-16">
          <Container>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold text-white mb-6">
                Ready to Experience Precision Analysis?
              </h2>
              <p className="text-xl text-neutral-200 mb-8">
                Discover how our multi-model methodology and evidence-based approach can help you turn complex questions into clear, actionable insights.
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
                  <Link href="/approach">View Our Methodology</Link>
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
