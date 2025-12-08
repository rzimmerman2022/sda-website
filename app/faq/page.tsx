import { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Accordion } from '@/components/ui/Accordion';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { createPageMetadata } from '@/lib/metadata';
import { MessageSquare } from 'lucide-react';

export const metadata: Metadata = createPageMetadata({
  title: 'Frequently Asked Questions',
  description:
    'Get answers to common questions about SparkData Analytics services, methodology, pricing, and what to expect from our multi-model AI analysis.',
  path: '/faq',
});

const faqs = [
  {
    question: 'What is SparkData Analytics?',
    answer:
      'SparkData Analytics is an independent research organization that combines multi-model AI analysis with rigorous quality controls to transform complex problems into actionable intelligence. Our flagship service is medical and health data analysis, where we help individuals understand complex health situations through evidence-based synthesis.',
  },
  {
    question: 'Is this medical advice?',
    answer:
      'No. SparkData Analytics provides evidence synthesis and analysis for educational and informational purposes only. We are not medical professionals, and our reports do not constitute medical advice. All health-related decisions, including changes in medication, supplementation, and diet, must be made in consultation with a qualified healthcare professional. Think of us as providing research support to inform discussions with your doctor.',
  },
  {
    question: 'How is this different from just asking ChatGPT or Claude myself?',
    answer:
      'Great question! While you could ask a single AI model, our approach provides several key advantages: (1) Multi-model triangulation - we analyze your case independently across GPT-5, Claude Opus, Gemini, and Perplexity to prevent "echo chamber" errors. (2) Scientific literature integration - we cross-reference AI findings with peer-reviewed research from PubMed and clinical databases. (3) Rigorous quality controls - we use fresh chat sessions, adversarial review, and systematic verification aligned with global AI governance standards. (4) Structured methodology - our 5-phase process ensures comprehensive analysis rather than one-off queries. (5) Professional reporting - you receive a formatted evidence synthesis report designed for healthcare collaboration.',
  },
  {
    question: 'What AI models do you use?',
    answer:
      'We use multiple leading AI research platforms for independent cross-validation: OpenAI GPT-5 Pro Deep Research, Anthropic Claude Opus 4.1 Deep Research, Google Gemini 2.5 Pro Deep Research, and Perplexity AI Deep Research. For high-risk analyses, we require findings from different model families (e.g., Claude, GPT, and Gemini) to ensure architectural diversity in reasoning. We fully disclose which models were used in every report.',
  },
  {
    question: 'How do you ensure quality and accuracy?',
    answer:
      'We align with global AI governance standards including AICPA Quality Management, EU AI Act, and PCAOB guidance. Key safeguards include: (1) Fresh chat separation - reviewer agents never see builder reasoning, only factual outputs. (2) Multi-model triangulation - independent analysis across different AI platforms. (3) Scientific literature validation - all findings cross-referenced with peer-reviewed research. (4) Adversarial review - devil\'s advocate challenges when agreement exceeds 80%. (5) Risk tiering (T0-T3) - higher-risk work requires more verification layers. (6) Complete audit trails - decision logs, review reports, and model attribution for every analysis.',
  },
  {
    question: 'What is the typical timeline for an analysis?',
    answer:
      'Timeline varies based on complexity, but most medical/health data analyses take 5-7 business days from initial consultation to report delivery. This includes: intake and problem framing (1 day), literature review and data acquisition (1-2 days), multi-model AI analysis (2-3 days), triangulation and synthesis (1-2 days), and report finalization (1 day). Rush services may be available for time-sensitive situations - contact us to discuss your timeline needs.',
  },
  {
    question: 'What information do I need to provide?',
    answer:
      'The more context you provide, the better our analysis. Helpful information includes: (1) Timeline of symptoms or events, (2) Current medication and supplement regimen (with dosages), (3) Recent changes to your regimen, (4) Any lab results or medical records, (5) Photos of supplement labels or medication packaging, (6) Symptom logs with dates and severity. Don\'t worry if you don\'t have everything - we\'ll work with you to identify critical data gaps during the intake process.',
  },
  {
    question: 'How much does it cost?',
    answer:
      'Pricing varies based on scope and complexity of the analysis. A standard medical/health data analysis typically ranges from $500-$1,500. We provide transparent quotes after an initial consultation where we assess your needs. There are no hidden fees. Contact us for a personalized quote based on your specific situation.',
  },
  {
    question: 'Do you work with insurance?',
    answer:
      'Currently, we do not bill insurance directly. However, some clients have successfully submitted our reports for reimbursement under HSA/FSA accounts or out-of-network benefits. We can provide detailed invoices and documentation to support reimbursement requests. Check with your insurance provider about coverage for independent medical research or consultation services.',
  },
  {
    question: 'Can I share your report with my doctor?',
    answer:
      'Absolutely - that\'s exactly what our reports are designed for! We format our evidence synthesis to facilitate productive conversations with your healthcare team. The report includes: comprehensive case overview, research methodology disclosure, primary proposed mechanisms supported by literature, clinical considerations, and specific questions you can ask your doctor. Many clients find that bringing structured, evidence-based research helps their medical team understand complex situations more quickly.',
  },
  {
    question: 'What if you find something concerning?',
    answer:
      'If our analysis identifies potentially serious or time-sensitive findings, we clearly flag them in the report and recommend immediate medical consultation. Remember, we provide research synthesis - not medical diagnosis or treatment. Any concerning findings should be discussed with your healthcare provider as soon as possible. We can help you formulate the right questions to ask, but clinical decisions must be made by licensed medical professionals.',
  },
  {
    question: 'Do you offer services beyond medical/health analysis?',
    answer:
      'Medical and health data analysis is our flagship service and current focus. Our triangulation methodology and quality controls can be applied to other complex analytical challenges, but we\'re intentionally starting with one vertical to perfect our approach. If you have a unique analytical need, feel free to reach out - we\'re always exploring new applications for rigorous, multi-model AI analysis.',
  },
];

export default function FAQPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-b from-neutral-50 to-white py-16 lg:py-24">
          <Container size="narrow">
            <div className="text-center">
              <Badge variant="secondary" className="mb-4">
                FAQ
              </Badge>
              <h1 className="text-display-md font-bold text-brand-navy mb-6">
                Frequently Asked Questions
              </h1>
              <p className="text-xl text-neutral-700">
                Everything you need to know about SparkData Analytics, our services, and what to
                expect.
              </p>
            </div>
          </Container>
        </section>

        {/* FAQ Accordion */}
        <section className="pb-16 lg:pb-24">
          <Container size="narrow">
            <Accordion items={faqs} />
          </Container>
        </section>

        {/* Still Have Questions CTA */}
        <section className="py-16 lg:py-24 bg-neutral-50">
          <Container>
            <div className="mx-auto max-w-2xl text-center">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-brand-gold/20">
                <MessageSquare className="h-8 w-8 text-brand-navy" />
              </div>
              <h2 className="text-3xl font-bold text-brand-navy mb-4">
                Still Have Questions?
              </h2>
              <p className="text-lg text-neutral-700 mb-8">
                We&apos;re here to help. Reach out and we&apos;ll get back to you within 24-48
                hours.
              </p>
              <Button asChild size="lg">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
