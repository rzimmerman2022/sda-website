# SparkData Analytics Website

> **Turning Complex Problems Into Actionable Intelligence**

A modern, high-performance Next.js website for SparkData Analytics - an independent research and analytics firm applying forensic-grade verification to multi-model AI analysis across medical & health, legal & forensic research, and business operations domains.

Built with Next.js 14, TypeScript, Tailwind CSS, and enterprise-grade quality controls.

---

## 🚀 Quick Start

### Prerequisites

- **Node.js** 18.x or higher
- **pnpm** 8.x or higher (recommended) or npm/yarn

### Installation

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Open browser to http://localhost:3000
```

### Build for Production

```bash
# Type check
pnpm typecheck

# Lint code
pnpm lint

# Build optimized production bundle
pnpm build

# Start production server
pnpm start
```

---

## 📁 Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Home page (/)
│   ├── services/          # Services page (/services)
│   ├── approach/          # Approach page (/approach)
│   ├── about/             # About page (/about)
│   ├── faq/               # FAQ page (/faq)
│   ├── contact/           # Contact page (/contact)
│   ├── layout.tsx         # Root layout with fonts & metadata
│   ├── globals.css        # Global styles & Tailwind imports
│   ├── sitemap.ts         # Sitemap generation
│   └── robots.ts          # Robots.txt generation
│
├── components/            # Reusable UI components
│   ├── ui/               # Design system primitives
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Input.tsx
│   │   ├── Badge.tsx
│   │   ├── Accordion.tsx
│   │   └── Container.tsx
│   └── layout/           # Layout components
│       ├── Header.tsx
│       └── Footer.tsx
│
├── lib/                  # Utilities & helpers
│   ├── utils.ts         # cn() helper for class merging
│   └── metadata.ts      # SEO metadata utilities
│
├── public/              # Static assets
│   ├── assets/
│   │   ├── logos/      # Sparky logo variants (TODO: add files)
│   │   └── images/     # Other images
│   └── robots.txt      # Static robots.txt
│
├── .env.example         # Environment variables template
└── next.config.mjs      # Next.js configuration
```

---

## 🎨 Design System

### Colors

The design system uses a professional, high-trust color palette:

| Name | Hex | Usage |
|------|-----|-------|
| **Brand Navy** | `#0B1F3F` | Primary brand color, headings, CTAs |
| **Brand Gold** | `#D4A574` | Accent color, highlights, secondary CTAs |
| **Brand Blue** | `#3B82F6` | Links, icons, trust signals |
| **Neutrals** | `#FAFAFA` - `#171717` | Text, backgrounds, borders |

### Typography

- **Font**: Inter (loaded via next/font)
- **Display**: 3.5rem - 2.25rem (display-lg, display-md, display-sm)
- **Body**: 1rem base with 1.5 line-height

### Components

All components support dark mode (via Tailwind classes), keyboard navigation (WCAG 2.2 AA), and responsive design.

See [OWNER_MANUAL.md](OWNER_MANUAL.md) for non-dev usage guide.

---

## 🔧 Configuration

### Environment Variables

Copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

Required variables:

```env
# Analytics (optional)
NEXT_PUBLIC_GA_MEASUREMENT_ID=

# Site Configuration
NEXT_PUBLIC_SITE_URL=https://sparkdatalab.ai
```

### Email/Contact Form

The contact form (`/contact`) currently uses a client-side placeholder. To enable real submissions:

1. Choose an email service (SendGrid, Resend, Mailgun, etc.)
2. Create API route at `app/api/contact/route.ts`
3. Add API keys to `.env.local`
4. Update form submission handler in `app/contact/page.tsx`

---

## 🚢 Deployment (Vercel)

### One-Click Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

### Manual Deploy

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy to preview
vercel

# Deploy to production
vercel --prod
```

### Custom Domain Setup

1. **Add domain in Vercel dashboard**: Settings → Domains → Add
2. **Configure DNS**:
   - **Apex domain** (`sparkdatalab.ai`): A record to Vercel IP or CNAME to `cname.vercel-dns.com`
   - **www subdomain**: CNAME to `cname.vercel-dns.com`
3. **Redirect www → apex** (already configured in `next.config.mjs`)
4. **Set environment variable**: `NEXT_PUBLIC_SITE_URL=https://sparkdatalab.ai`

---

## 📊 Performance

### Core Web Vitals Targets

- **LCP** (Largest Contentful Paint): < 2.5s
- **FID** (First Input Delay): < 100ms
- **CLS** (Cumulative Layout Shift): < 0.1

### Optimizations

- ✅ Next.js Image optimization (`next/image`)
- ✅ Font optimization (`next/font` with `display: swap`)
- ✅ Static generation for all pages
- ✅ Minimal JavaScript (interactive components only)
- ✅ Tailwind CSS purging
- ✅ Automatic code splitting

---

## ♿ Accessibility

This site is built to WCAG 2.2 AA standards:

- ✅ Semantic HTML5 elements
- ✅ ARIA labels where needed
- ✅ Keyboard navigation support
- ✅ Focus visible states
- ✅ Color contrast ratios > 4.5:1
- ✅ `prefers-reduced-motion` support
- ✅ Alt text for images (TODO: add when logos added)

---

## 🔍 SEO

### Features

- ✅ Unique meta tags per page
- ✅ OpenGraph + Twitter Card tags
- ✅ Canonical URLs
- ✅ Sitemap.xml (`/sitemap.xml`)
- ✅ Robots.txt (`/robots.txt`)
- ✅ Structured metadata with `next/metadata`

### Analytics Setup

To add Google Analytics:

1. Get GA4 Measurement ID
2. Add to `.env.local`: `NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX`
3. Create `app/_components/Analytics.tsx`:

```tsx
'use client';
import Script from 'next/script';

export function Analytics() {
  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
  if (!gaId) return null;

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gaId}');
        `}
      </Script>
    </>
  );
}
```

4. Add `<Analytics />` to `app/layout.tsx`

---

## 📝 Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start development server on port 3000 |
| `pnpm build` | Build optimized production bundle |
| `pnpm start` | Start production server |
| `pnpm lint` | Lint code with ESLint |
| `pnpm format` | Format code with Prettier |
| `pnpm format:check` | Check code formatting |
| `pnpm typecheck` | Run TypeScript type checking |

---

## 🛠 Adding a New Page

1. **Create page directory**: `app/new-page/`
2. **Create page component**: `app/new-page/page.tsx`

```tsx
import { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Container } from '@/components/ui/Container';
import { createPageMetadata } from '@/lib/metadata';

export const metadata: Metadata = createPageMetadata({
  title: 'Page Title',
  description: 'Page description for SEO',
  path: '/new-page',
});

export default function NewPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Container>
          <h1>New Page</h1>
        </Container>
      </main>
      <Footer />
    </>
  );
}
```

3. **Add to navigation**: Update `components/layout/Header.tsx` and `components/layout/Footer.tsx`
4. **Add to sitemap**: Update `app/sitemap.ts`

---

## 🎨 Logo Assets

**TODO**: Add Sparky logo variants to `public/assets/logos/`

See [public/assets/logos/README.md](public/assets/logos/README.md) for details.

---

## 📞 Support

For questions or issues:

- **Email**: contact@sparkdatalab.ai
- **Documentation**: See [OWNER_MANUAL.md](OWNER_MANUAL.md) for non-dev editing guide

---

## 📄 License

&copy; 2025 SparkData Analytics, LLC. All rights reserved.
