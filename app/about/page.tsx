import { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { createPageMetadata } from '@/lib/metadata';
import {
  Target,
  Shield,
  ArrowRight,
  FileText,
  Database,
  CheckCircle,
  FileCheck,
  AlertTriangle,
  BookOpen,
  AlertCircle,
  TrendingUp,
  Users,
  Lock,
  EyeOff,
  Server,
  FileSearch,
  Activity,
} from 'lucide-react';

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
      <main className="flex-1 font-sans text-slate-900 selection:bg-brand-gold/30">
        {/* Hero - Split Layout */}
        <section className="relative overflow-hidden bg-white py-24 lg:py-32">
          {/* Subtle background pattern */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  'radial-gradient(circle at 1px 1px, rgb(11, 31, 63) 1px, transparent 0)',
                backgroundSize: '40px 40px',
              }}
            />
          </div>

          <Container>
            <div className="relative grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
              {/* Left: Content */}
              <div className="text-left">
                <div className="mb-6 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 border border-neutral-200">
                  <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-neutral-500">
                    About Us
                  </span>
                </div>

                <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-brand-navy mb-6 leading-[1.1] tracking-tight">
                  Bridging the Gap Between AI Potential and Human Trust
                </h1>

                <p className="text-xl text-neutral-600 leading-relaxed mb-8 max-w-2xl font-normal">
                  We apply forensic-grade verification to multi-model AI so you can use it for
                  real decisions—not just chat.
                </p>

                <div className="mb-8 p-6 rounded-xl bg-brand-navy text-white shadow-xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-4 opacity-10">
                    <Shield className="w-24 h-24" />
                  </div>
                  <p className="text-2xl font-semibold leading-relaxed tracking-tight relative z-10">
                    Raw AI models deal in probability.
                    <br />
                    <span className="text-brand-gold">We deal in evidence.</span>
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 mb-10">
                  <Button asChild size="lg" variant="primary" className="font-bold shadow-md hover:shadow-lg transition-all">
                    <Link href="/contact">
                      Schedule a Consultation <ArrowRight className="h-5 w-5 ml-2" />
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="font-bold border-2">
                    <Link href="/approach">View Our Methodology</Link>
                  </Button>
                </div>

                {/* Metrics Strip */}
                <div className="flex flex-wrap gap-x-8 gap-y-4 text-sm font-semibold text-neutral-600 border-t border-neutral-200 pt-6">
                  <div className="flex items-center gap-2.5">
                    <div className="w-2 h-2 rounded-full bg-brand-gold" />
                    <span>4+ AI models</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <div className="w-2 h-2 rounded-full bg-brand-gold" />
                    <span>3 verification layers</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <div className="w-2 h-2 rounded-full bg-brand-gold" />
                    <span>5–7 day turnaround</span>
                  </div>
                  <div className="flex items-center gap-2 text-brand-navy font-bold bg-brand-navy/5 px-3 py-1 rounded-full border border-brand-navy/10">
                    <Lock className="w-3.5 h-3.5" />
                    <span className="tracking-tight">PII-Protected</span>
                  </div>
                </div>
              </div>

              {/* Right: Visual Diagram */}
              <div className="relative">
                <div className="relative rounded-2xl border border-neutral-200 bg-white p-8 shadow-2xl">
                  {/* Trust Badge Header */}
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                    <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-navy text-white text-[11px] font-bold shadow-lg border border-brand-navy tracking-wider uppercase">
                      <Shield className="h-3 w-3" />
                      <span>Audit-Grade Verification</span>
                    </div>
                  </div>

                  {/* Precision Protocol Visual */}
                  <div className="space-y-5 pt-4">
                    <div className="text-center">
                      <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-neutral-50 text-xs font-bold text-brand-navy border border-neutral-200 shadow-sm tracking-wide uppercase">
                        Your Complex Question
                        <Lock className="h-3 w-3 text-neutral-400" />
                      </div>
                    </div>

                    <div className="flex justify-center">
                      <div className="w-px h-6 bg-neutral-200" />
                    </div>

                    {/* Multi-Model Layer */}
                    <div className="rounded-xl border border-brand-navy/10 bg-brand-navy/5 p-6 relative">
                      {/* Corner badges for confidence */}
                      <div className="absolute -top-2.5 -right-2.5 flex items-center gap-1 px-2.5 py-1 rounded-full bg-brand-gold text-white text-[10px] font-bold shadow-md tracking-wider uppercase">
                        <CheckCircle className="h-3 w-3" />
                        Proprietary
                      </div>

                      <div className="text-center mb-5">
                        <span className="text-[11px] text-brand-navy tracking-[0.15em] font-bold uppercase">
                          Precision Protocol™
                        </span>
                      </div>

                      {/* Model Grid with enhanced design */}
                      <div className="grid grid-cols-3 gap-3 mb-4">
                        {['OpenAI ChatGPT', 'Anthropic Claude', 'Google Gemini'].map((model) => (
                          <div key={model} className="rounded-lg bg-white border border-neutral-200 p-3 text-center shadow-sm relative group">
                            <div className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-green-500 border-2 border-white" />
                            <div className="text-xs font-bold text-brand-navy mb-0.5 leading-tight">{model}</div>
                            <div className="text-[9px] text-neutral-400 font-medium uppercase tracking-wider">Isolated</div>
                          </div>
                        ))}
                      </div>

                      {/* Add Proprietary Models Row */}
                      <div className="grid grid-cols-2 gap-3 mb-5">
                        <div className="rounded-lg bg-brand-gold/10 border border-brand-gold/20 p-3 text-center relative">
                          <div className="text-xs font-bold text-brand-navy mb-0.5">SparkData ML</div>
                          <div className="text-[9px] text-brand-navy/60 font-medium uppercase tracking-wider">Custom Trained</div>
                        </div>
                        <div className="rounded-lg bg-brand-blue/10 border border-brand-blue/20 p-3 text-center relative">
                          <div className="text-xs font-bold text-brand-navy mb-0.5">Perplexity</div>
                          <div className="text-[9px] text-brand-navy/60 font-medium uppercase tracking-wider">Research</div>
                        </div>
                      </div>

                      <div className="text-center mb-4">
                        <div className="inline-flex items-center gap-3 px-3 py-1 rounded-full bg-white border border-neutral-200 shadow-sm">
                          <span className="text-[10px] font-bold text-neutral-500 uppercase tracking-wider">Blind Review + Triangulation</span>
                        </div>
                      </div>

                      <div className="rounded-lg bg-white border border-brand-navy/10 p-4 text-center shadow-sm">
                        <div className="text-xs font-bold text-brand-navy mb-1 flex items-center justify-center gap-2">
                          <Database className="h-3.5 w-3.5 text-brand-gold" />
                          Evidence Anchor
                        </div>
                        <div className="text-[10px] text-neutral-500 font-medium uppercase tracking-wide">
                          PubMed · UpToDate · Domain Standards
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-center">
                      <div className="w-px h-6 bg-neutral-200" />
                    </div>

                    <div className="text-center">
                      <div className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-brand-navy text-sm font-bold text-white shadow-lg hover:shadow-xl transition-shadow tracking-wide uppercase">
                        <CheckCircle className="h-4 w-4 text-brand-gold" />
                        Verified Evidence Report
                      </div>
                    </div>
                  </div>
                </div>

                {/* Enhanced decorative elements */}
                <div className="absolute -top-12 -right-12 w-64 h-64 bg-brand-gold/10 rounded-full blur-3xl -z-10" />
                <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-brand-blue/10 rounded-full blur-3xl -z-10" />
              </div>
            </div>
          </Container>
        </section>

        {/* NEW SECTION: Data Sovereignty & Privacy - PROMINENT */}
        <section className="bg-neutral-50 py-20 border-y border-neutral-200">
          <Container>
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-neutral-200 mb-4 shadow-sm">
                  <Lock className="w-3 h-3 text-brand-navy" />
                  <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-navy">
                    Privacy First
                  </span>
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-brand-navy mb-4 tracking-tight">
                  Data Protection & Privacy
                </h2>
                <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                  We know your case details are deeply personal—especially in health contexts. Our workflow is designed to protect that from the start.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl border border-neutral-200 shadow-sm hover:border-brand-navy/20 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-brand-navy/5 rounded-lg">
                      <EyeOff className="w-5 h-5 text-brand-navy" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-brand-navy mb-2">Minimal necessary detail</h3>
                      <p className="text-neutral-600 text-sm leading-relaxed">
                        We focus on the clinical and technical signals needed for analysis, not unnecessary identifiers.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl border border-neutral-200 shadow-sm hover:border-brand-navy/20 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-brand-navy/5 rounded-lg">
                      <FileSearch className="w-5 h-5 text-brand-navy" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-brand-navy mb-2">De-identification by default</h3>
                      <p className="text-neutral-600 text-sm leading-relaxed">
                        Wherever possible, names, addresses, and other direct identifiers are removed or generalized before data is sent to AI systems.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl border border-neutral-200 shadow-sm hover:border-brand-navy/20 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-brand-navy/5 rounded-lg">
                      <Server className="w-5 h-5 text-brand-navy" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-brand-navy mb-2">No training on your case</h3>
                      <p className="text-neutral-600 text-sm leading-relaxed">
                        Your analysis is used to help you; it is not used to train public models.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl border border-neutral-200 shadow-sm hover:border-brand-navy/20 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-brand-navy/5 rounded-lg">
                      <Activity className="w-5 h-5 text-brand-navy" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-brand-navy mb-2">Full transparency</h3>
                      <p className="text-neutral-600 text-sm leading-relaxed">
                        We make it clear which tools are used, what they see, and what they do not see.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 text-center">
                <Link href="/privacy" className="text-sm font-bold text-brand-navy hover:text-brand-gold transition-colors inline-flex items-center gap-1">
                  View our Data & Privacy Practices <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </Container>
        </section>

        {/* Where We Apply This - Bento Grid */}
        <section className="bg-white py-20 lg:py-28">
          <Container>
            <h2 className="text-3xl lg:text-4xl font-bold text-brand-navy mb-12 text-center tracking-tight">
              Where We Apply This
            </h2>

            <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
              {/* Large card - Methodology First */}
              <div className="lg:row-span-2 rounded-2xl bg-brand-navy p-8 lg:p-10 text-white shadow-xl relative overflow-hidden flex flex-col justify-between">
                <div className="absolute top-0 right-0 p-8 opacity-5">
                  <Target className="w-64 h-64 text-white" />
                </div>

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="p-2 bg-white/10 rounded-lg backdrop-blur-sm">
                      <Target className="h-6 w-6 text-brand-gold" />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-gold">
                      Methodology First
                    </span>
                  </div>

                  <div className="space-y-6">
                    <p className="text-2xl font-bold leading-tight">
                      SparkData is a methodology-first, verticals-second company.
                    </p>
                    <p className="text-lg text-neutral-300 leading-relaxed">
                      Our Precision Protocol is domain-agnostic by design. We built a rigorous system
                      for handling high-stakes questions—then applied it to specific verticals where
                      the need is most acute.
                    </p>
                  </div>
                </div>

                <div className="relative z-10 pt-8 mt-8 border-t border-white/10">
                  <p className="text-lg italic font-serif text-brand-gold/90">
                    Different verticals. Same spine: AI + Evidence + Structure.
                  </p>
                </div>
              </div>

              {/* Health Vertical */}
              <div className="rounded-2xl bg-white border border-neutral-200 p-8 shadow-sm hover:shadow-lg transition-all group hover:border-brand-navy/30">
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-brand-blue/5 rounded-xl group-hover:bg-brand-blue/10 transition-colors">
                    <TrendingUp className="h-6 w-6 text-brand-blue" />
                  </div>
                  <div className="px-2.5 py-1 rounded-full bg-neutral-100 border border-neutral-200">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-500">Flagship</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-brand-navy mb-3">
                  Health & Medical Analysis
                </h3>

                <p className="text-neutral-600 leading-relaxed">
                  We help you untangle complex regimens and symptoms. We don&apos;t replace your
                  doctor—we organize your data and the evidence so you can have clearer, more focused conversations with your care team.
                </p>
              </div>

              {/* Career Services */}
              <div className="rounded-2xl bg-white border border-neutral-200 p-8 shadow-sm hover:shadow-lg transition-all group hover:border-brand-navy/30">
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-brand-gold/10 rounded-xl group-hover:bg-brand-gold/20 transition-colors">
                    <Users className="h-6 w-6 text-brand-navy" />
                  </div>
                  <div className="px-2.5 py-1 rounded-full bg-neutral-100 border border-neutral-200">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-500">Vertical</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-brand-navy mb-1">
                  Career Services
                </h3>
                <p className="text-[11px] font-bold uppercase tracking-widest text-neutral-500 mb-4">
                  Southwest Resume Services
                </p>

                <p className="text-neutral-600 leading-relaxed">
                  The same methodology powers our career services vertical. We use multi-model analysis and evidence-backed testing to optimize resumes and positioning for real-world hiring pipelines.
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* The Challenge - Split View */}
        <section className="bg-neutral-50 py-20 lg:py-28 border-y border-neutral-200">
          <Container size="narrow">
            <h2 className="text-3xl lg:text-4xl font-bold text-brand-navy mb-12 text-center tracking-tight">
              The Challenge: Conversation vs. Precision
            </h2>

            <div className="grid gap-8 lg:grid-cols-2 mb-12">
              {/* Left: Standard AI */}
              <div className="rounded-xl bg-neutral-100/50 border border-neutral-200 p-8">
                <div className="flex items-center gap-3 mb-6">
                  <AlertCircle className="h-5 w-5 text-neutral-400" />
                  <h4 className="text-lg font-bold text-neutral-500 uppercase tracking-wide">Standard AI</h4>
                </div>
                <p className="text-neutral-500 mb-6 leading-relaxed">
                  Modern AI models are incredible at conversation. They are optimized to be
                  helpful, fluent, and engaging. But for high-stakes analysis, that&apos;s not
                  always enough.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="h-4 w-4 text-orange-400 flex-shrink-0 mt-1" />
                    <span className="text-neutral-500 text-sm font-medium">
                      Smooths over conflicts to avoid friction
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="h-4 w-4 text-orange-400 flex-shrink-0 mt-1" />
                    <span className="text-neutral-500 text-sm font-medium">
                      Agrees with flawed premises to keep dialogue flowing
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="h-4 w-4 text-orange-400 flex-shrink-0 mt-1" />
                    <span className="text-neutral-500 text-sm font-medium">
                      Sounds more certain than evidence justifies
                    </span>
                  </div>
                </div>
              </div>

              {/* Right: SparkData */}
              <div className="rounded-xl bg-white border-2 border-brand-navy p-8 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-brand-navy/5 rounded-bl-full -z-10" />

                <div className="flex items-center gap-3 mb-6">
                  <CheckCircle className="h-6 w-6 text-brand-navy" />
                  <h4 className="text-xl font-bold text-brand-navy uppercase tracking-wide">SparkData Precision</h4>
                </div>
                <p className="text-brand-navy/80 mb-6 leading-relaxed font-medium">
                  We built a system optimized for precision, not engagement. Our Precision Protocol
                  enforces rigor at every step.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-brand-navy flex-shrink-0 mt-0.5" />
                    <span className="text-brand-navy font-bold text-sm">
                      Challenges consensus with devil&apos;s-advocate review
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-brand-navy flex-shrink-0 mt-0.5" />
                    <span className="text-brand-navy font-bold text-sm">
                      Tests claims independently before acceptance
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-brand-navy flex-shrink-0 mt-0.5" />
                    <span className="text-brand-navy font-bold text-sm">
                      Anchors conclusions to strongest available evidence
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-xl bg-brand-navy/5 border border-brand-navy/10 p-8 text-center max-w-2xl mx-auto">
              <p className="text-lg font-bold text-brand-navy leading-relaxed">
                We don&apos;t see this as a malice issue—it&apos;s an optimization issue.
                <br />
                <span className="text-neutral-600 font-medium mt-2 block">
                  Standard AI is optimized for engagement. SparkData is optimized for precision.
                </span>
              </p>
            </div>
          </Container>
        </section>

        {/* Our Solution: Precision Protocol */}
        <section className="bg-white py-20 lg:py-28">
          <Container>
            <div className="mx-auto max-w-3xl mb-16 text-center">
              <h2 className="text-3xl lg:text-4xl font-bold text-brand-navy mb-4 tracking-tight">
                Our Solution: The Precision Protocol
              </h2>
              <div className="flex justify-center mb-6">
                <span className="text-[11px] font-bold text-neutral-400 uppercase tracking-[0.2em] border border-neutral-200 rounded-full px-4 py-1.5 bg-neutral-50">
                  A Repeatable, Documented Protocol
                </span>
              </div>
              <p className="text-lg text-neutral-600 leading-relaxed">
                We built a system that lets you benefit from the incredible speed and reach of AI,
                without worrying about its &quot;soft edges.&quot;
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3 lg:gap-12 relative">
              {/* Connecting line */}
              <div className="hidden lg:block absolute top-12 left-0 right-0 h-px bg-gradient-to-r from-brand-navy/10 via-brand-gold/30 to-brand-blue/10" />

              <div className="relative bg-white rounded-xl border border-neutral-200 p-8 shadow-sm hover:shadow-xl transition-all duration-300 group">
                <div className="absolute top-0 right-4 text-8xl font-bold text-neutral-100 leading-none pointer-events-none group-hover:text-brand-navy/5 transition-colors">
                  01
                </div>
                <div className="flex items-center gap-2 mb-6 relative">
                  <div className="w-2 h-2 rounded-full bg-brand-navy" />
                  <span className="text-[10px] font-bold text-brand-navy uppercase tracking-widest">
                    Active
                  </span>
                </div>
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-brand-navy mb-3">
                    Independence by Design
                  </h3>
                  <p className="text-neutral-600 leading-relaxed text-sm">
                    We run multiple leading models (OpenAI ChatGPT, Anthropic Claude, Google Gemini) in
                    isolation. They don&apos;t see each other&apos;s reasoning or conclusions.
                    When they agree, it&apos;s because the underlying evidence is strong.
                  </p>
                </div>
              </div>

              <div className="relative bg-white rounded-xl border border-neutral-200 p-8 shadow-sm hover:shadow-xl transition-all duration-300 group">
                <div className="absolute top-0 right-4 text-8xl font-bold text-neutral-100 leading-none pointer-events-none group-hover:text-brand-gold/10 transition-colors">
                  02
                </div>
                <div className="flex items-center gap-2 mb-6 relative">
                  <div className="w-2 h-2 rounded-full bg-brand-gold" />
                  <span className="text-[10px] font-bold text-brand-gold uppercase tracking-widest">
                    Active
                  </span>
                </div>
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-brand-navy mb-3">
                    Structured Verification
                  </h3>
                  <p className="text-neutral-600 leading-relaxed text-sm">
                    We use a blind review process. When a finding is checked, the reviewing
                    system sees only the relevant data and the claim to evaluate—not the previous
                    narrative. This forces a fresh look at the facts.
                  </p>
                </div>
              </div>

              <div className="relative bg-white rounded-xl border border-neutral-200 p-8 shadow-sm hover:shadow-xl transition-all duration-300 group">
                <div className="absolute top-0 right-4 text-8xl font-bold text-neutral-100 leading-none pointer-events-none group-hover:text-brand-blue/10 transition-colors">
                  03
                </div>
                <div className="flex items-center gap-2 mb-6 relative">
                  <div className="w-2 h-2 rounded-full bg-brand-blue" />
                  <span className="text-[10px] font-bold text-brand-blue uppercase tracking-widest">
                    Active
                  </span>
                </div>
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-brand-navy mb-3">
                    Anchoring to Authority
                  </h3>
                  <p className="text-neutral-600 leading-relaxed text-sm">
                    We ground every AI insight in external reality. By systematically checking
                    outputs against established sources (peer-reviewed studies, clinical data),
                    we work to ensure the results are not just plausible, but accurate.
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Standards-Aligned Governance */}
        <section className="py-20 lg:py-28 bg-white">
          <Container>
            <div className="mx-auto max-w-3xl text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-brand-navy mb-6 tracking-tight">
                Standards-Aligned Governance
              </h2>
              <p className="text-lg text-neutral-600 leading-relaxed">
                We believe the future of AI is safe, transparent, and regulated—and we&apos;d rather build for that future now. Our operations align with the highest emerging global standards:
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              <div className="text-center p-6 rounded-xl bg-neutral-50 border border-neutral-100">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-brand-navy/10">
                  <Shield className="h-8 w-8 text-brand-navy" />
                </div>
                <h3 className="text-lg font-bold text-brand-navy mb-3">
                  AICPA Quality Management
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  (Risk-based verification, monitoring, and documentation)
                </p>
              </div>

              <div className="text-center p-6 rounded-xl bg-neutral-50 border border-neutral-100">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-brand-gold/20">
                  <BookOpen className="h-8 w-8 text-brand-navy" />
                </div>
                <h3 className="text-lg font-bold text-brand-navy mb-3">
                  EU AI Act Principles
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  (Technical documentation, logging, and human oversight)
                </p>
              </div>

              <div className="text-center p-6 rounded-xl bg-neutral-50 border border-neutral-100">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-brand-blue/20">
                  <Target className="h-8 w-8 text-brand-blue" />
                </div>
                <h3 className="text-lg font-bold text-brand-navy mb-3">
                  PCAOB-Style Expectations
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  (Professional skepticism and complete audit trails)
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* Leadership Section - Editorial Style */}
        <section className="py-20 lg:py-28 bg-neutral-50 border-t border-neutral-200">
          <Container>
            <div className="grid gap-12 lg:grid-cols-12 items-start">
              {/* Headshot & Bio Column */}
              <div className="lg:col-span-4">
                <div className="relative mb-8">
                  <div className="rounded-xl overflow-hidden shadow-xl">
                    <img
                      src="/ryan-zimmerman-headshot.jpg"
                      alt="Ryan Zimmerman, CEO of SparkData Analytics"
                      className="w-full h-auto block transition-all duration-500"
                    />
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-brand-navy mb-1">
                  Ryan Zimmerman
                </h2>
                <p className="text-xs font-bold text-neutral-500 uppercase tracking-widest mb-6">Founder & CEO</p>

                <div className="space-y-3 text-sm text-neutral-600 border-t border-neutral-200 pt-6">
                  <p className="font-bold text-brand-navy">Background</p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-brand-gold" />
                      Systems engineering & data analysis
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-brand-gold" />
                      Biophysics & decision support
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-brand-gold" />
                      Founded SparkData & Southwest Resume
                    </li>
                  </ul>
                </div>
              </div>

              {/* Quote & Philosophy Column */}
              <div className="lg:col-span-8 lg:pl-12 flex flex-col justify-between h-full">
                <div className="mb-12">
                  <div className="text-5xl text-brand-gold mb-6 font-serif italic opacity-40">&ldquo;</div>
                  <div className="space-y-6 text-xl lg:text-2xl leading-relaxed font-serif italic text-brand-navy/90">
                    <p>
                      I love this technology. I genuinely believe it can solve problems we used to think were impossible.
                    </p>
                    <p>
                      But I also watched the industry race to make models more &lsquo;friendly&rsquo; and conversational. Models like GPT-4o showed how quickly the world can fall in love with personality. That&rsquo;s great for everyday use—but for forensic analysis or health data, you don&rsquo;t need a friend. You need a fact-checker.
                    </p>
                    <p>
                      If we want to use these tools for serious things, we need a layer of rigor on top of them—a way to bridge the gap between the &lsquo;chat&rsquo; interface everyone loves and the &lsquo;clinical precision&rsquo; everyone needs.
                    </p>
                    <p className="font-sans font-bold not-italic text-brand-navy relative">
                      That&rsquo;s what SparkData is. It&rsquo;s the infrastructure that lets us unlock the full potential of AI—without flying blind.
                      <span className="text-3xl text-brand-gold font-serif italic opacity-40 absolute -right-6 -bottom-4">&rdquo;</span>
                    </p>
                  </div>
                  <div className="mt-8 flex items-center gap-4">
                    <div className="h-px flex-1 bg-neutral-200" />
                    <span className="text-xs font-bold text-neutral-400 uppercase tracking-widest">Ryan Zimmerman, CEO</span>
                  </div>
                </div>

                {/* Philosophy callout box */}
                <div className="rounded-lg bg-white border border-brand-navy/10 p-6 shadow-sm flex items-center gap-4">
                  <div className="p-3 bg-brand-navy/5 rounded-full">
                    <Target className="w-5 h-5 text-brand-navy" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-brand-navy uppercase tracking-wide mb-1">Core Philosophy</p>
                    <p className="text-neutral-600 font-medium italic font-serif">
                      AI is the engine. We build the steering, brakes, and instrumentation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Disclaimer */}
        <section className="bg-white py-16 border-t border-neutral-100">
          <Container size="narrow">
            <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-8">
              <div className="flex items-start gap-4 mb-4">
                <AlertTriangle className="h-5 w-5 text-neutral-400 flex-shrink-0 mt-1" />
                <h2 className="text-sm font-bold text-neutral-600 uppercase tracking-wide">
                  Important Disclaimer
                </h2>
              </div>
              <div className="space-y-4 text-neutral-500 text-sm leading-relaxed pl-9">
                <p>
                  SparkData Analytics is an independent research organization providing evidence
                  synthesis for educational and informational purposes only. We are not a
                  substitute for professional medical, legal, financial, or other licensed advice.
                  Our reports do not constitute diagnosis, treatment plans, legal opinions, or
                  investment advice.
                </p>
                <p>
                  All decisions – especially in areas like health, law, and finance – must be made
                  in consultation with appropriately qualified professionals.
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* CTA */}
        <section className="bg-brand-navy py-20 lg:py-28 text-center">
          <Container>
            <div className="mx-auto max-w-3xl">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6 tracking-tight">
                Ready to Experience Precision Analysis?
              </h2>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed font-light max-w-2xl mx-auto">
                Discover how our multi-model methodology and evidence-based approach can help you
                turn complex questions into clear, actionable insights.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center sm:gap-6">
                <Button
                  asChild
                  size="lg"
                  variant="secondary"
                  className="group hover:scale-105 transition-transform font-bold"
                >
                  <Link href="/contact">
                    Schedule a Consultation
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform ml-2" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-white text-white hover:bg-white hover:text-brand-navy transition-all font-bold"
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
