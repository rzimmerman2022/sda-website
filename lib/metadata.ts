import { Metadata } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://sparkdatalab.ai';

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'SparkData Analytics — Turning Complex Problems Into Actionable Intelligence',
    template: '%s | SparkData Analytics',
  },
  description:
    'We combine multi-model AI analysis with rigorous quality controls to transform ambiguous challenges into clear, evidence-based insights.',
  keywords: [
    'data analytics',
    'AI analysis',
    'multi-model AI',
    'evidence synthesis',
    'medical data analysis',
    'health analytics',
    'research intelligence',
  ],
  authors: [{ name: 'Ryan Zimmerman', url: siteUrl }],
  creator: 'SparkData Analytics',
  publisher: 'SparkData Analytics',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'SparkData Analytics',
    title: 'SparkData Analytics — Turning Complex Problems Into Actionable Intelligence',
    description:
      'We combine multi-model AI analysis with rigorous quality controls to transform ambiguous challenges into clear, evidence-based insights.',
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'SparkData Analytics',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SparkData Analytics — Turning Complex Problems Into Actionable Intelligence',
    description:
      'We combine multi-model AI analysis with rigorous quality controls to transform ambiguous challenges into clear, evidence-based insights.',
    images: [`${siteUrl}/og-image.png`],
  },
  alternates: {
    canonical: siteUrl,
  },
};

interface PageMetadataParams {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
}

export function createPageMetadata({
  title,
  description,
  path = '',
  keywords = [],
}: PageMetadataParams): Metadata {
  const url = `${siteUrl}${path}`;
  const baseKeywords = Array.isArray(defaultMetadata.keywords)
    ? defaultMetadata.keywords
    : defaultMetadata.keywords
    ? [defaultMetadata.keywords]
    : [];

  return {
    title,
    description,
    keywords: [...baseKeywords, ...keywords],
    openGraph: {
      title,
      description,
      url,
      type: 'website',
      siteName: 'SparkData Analytics',
      images: [
        {
          url: `${siteUrl}/og-image.png`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`${siteUrl}/og-image.png`],
    },
    alternates: {
      canonical: url,
    },
  };
}
