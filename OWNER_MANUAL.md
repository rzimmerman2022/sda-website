# Owner's Manual: Editing Your SparkData Analytics Website

> **For non-developers**: This guide shows you how to update content, change images, and manage your website without coding knowledge.

---

## 📖 Table of Contents

1. [Editing Text Content](#editing-text-content)
2. [Changing Brand Colors](#changing-brand-colors)
3. [Swapping Logos](#swapping-logos)
4. [Adding/Editing FAQ Questions](#addingediting-faq-questions)
5. [Updating Contact Information](#updating-contact-information)
6. [Adding a Service or Feature](#adding-a-service-or-feature)
7. [Deploying Changes](#deploying-changes)

---

## ✏️ Editing Text Content

### Home Page (`app/page.tsx`)

**Main Headline:**
```tsx
// Find line ~31:
<h1 className="text-display-lg font-bold text-brand-navy mb-6">
  Turning Complex Problems Into{' '}
  <span className="text-gradient">Actionable Intelligence</span>
</h1>
```

**Subheading:**
```tsx
// Find line ~35:
<p className="text-xl text-neutral-700 mb-10 leading-relaxed">
  We combine multi-model AI analysis with rigorous quality controls...
</p>
```

**How It Works Section:**
- Find line ~70 for section heading
- Lines ~84-122 contain the three step cards
- Edit text inside `<CardTitle>` and `<CardDescription>` tags

### Services Page (`app/services/page.tsx`)

**Hero Description:**
```tsx
// Find line ~40:
<p className="text-xl text-neutral-700 leading-relaxed">
  Transform complex health situations into evidence-based insights...
</p>
```

**Process Phases:**
- Find lines ~100-200
- Each `<Card>` contains one phase
- Edit `<CardTitle>` and `<CardContent>` text

### About Page (`app/about/page.tsx`)

**Ryan's Bio:**
```tsx
// Find line ~90 (Ryan Zimmerman section):
<div className="space-y-4 text-neutral-700">
  <p className="text-lg">
    Ryan founded SparkData Analytics with a vision to bridge...
  </p>
```

Edit the paragraphs within this section to update the founder bio.

**Mission Statement:**
```tsx
// Find line ~60:
<p className="text-lg text-neutral-700 leading-relaxed mb-6">
  To deliver world-class analytical insights by combining...
</p>
```

---

## 🎨 Changing Brand Colors

All colors are defined in **`tailwind.config.ts`** (lines 12-22):

```typescript
colors: {
  brand: {
    navy: '#0B1F3F',           // ← Change primary navy color
    'navy-light': '#1a3a5c',   // ← Change lighter navy variant
    gold: '#D4A574',           // ← Change accent gold color
    'gold-light': '#E5C8A3',   // ← Change lighter gold variant
    blue: '#3B82F6',           // ← Change blue accent
    'blue-light': '#60A5FA',   // ← Change lighter blue variant
  },
}
```

**To change colors:**
1. Open `tailwind.config.ts`
2. Replace hex codes (e.g., `#0B1F3F`) with your desired colors
3. Save the file
4. Restart dev server: `pnpm dev`

**Where each color is used:**
- **Navy**: Primary headings, CTAs, navigation
- **Gold**: Accent highlights, secondary buttons, badges
- **Blue**: Links, trust badges, icons

---

## 🖼️ Swapping Logos

### Step 1: Add Your Logo Files

1. Place logo files in `public/assets/logos/`:
   - `sparky-full-color.png` (or your logo name)
   - `sparky-blue-gray.png` (dark variant)
   - `sparky-outline.png` (outline/icon variant)

2. **Recommended sizes**:
   - At least 512x512px for main logos
   - PNG with transparent background

### Step 2: Update Header Logo

Open `components/layout/Header.tsx` (line ~35):

**Current (placeholder):**
```tsx
<div className="h-10 w-10 rounded-lg bg-brand-navy flex items-center justify-center">
  <span className="text-white font-bold text-xl">S</span>
</div>
```

**Replace with:**
```tsx
<Image
  src="/assets/logos/sparky-full-color.png"
  alt="SparkData Analytics Logo"
  width={40}
  height={40}
  className="h-10 w-10"
/>
```

**Add import at top of file:**
```tsx
import Image from 'next/image';
```

### Step 3: Update Footer Logo

Repeat the same process in `components/layout/Footer.tsx` (line ~32).

### Step 4: Add Favicon

1. Create a 32x32px favicon from your logo
2. Save as `public/favicon.ico`
3. Create additional sizes for Apple/Android:
   - `public/apple-touch-icon.png` (180x180)
   - `public/icon-192.png` (192x192)
   - `public/icon-512.png` (512x512)

4. Add to `app/layout.tsx` (in metadata):
```tsx
icons: {
  icon: '/favicon.ico',
  apple: '/apple-touch-icon.png',
}
```

---

## ❓ Adding/Editing FAQ Questions

Open `app/faq/page.tsx` and find the `faqs` array (line ~13):

```typescript
const faqs = [
  {
    question: 'What is SparkData Analytics?',  // ← Edit question
    answer: 'SparkData Analytics is...',       // ← Edit answer
  },
  // Add new questions here ↓
  {
    question: 'Your new question?',
    answer: 'Your new answer here.',
  },
];
```

**To add a new question:**
1. Copy an existing `{ question: '...', answer: '...' },` block
2. Paste it before the closing `];`
3. Update the question and answer text
4. Save the file

**To delete a question:**
- Remove the entire `{ question: '...', answer: '...' },` block

---

## 📞 Updating Contact Information

### Email Address

Open `components/layout/Footer.tsx` and search for `contact@sparkdatalab.ai`:

```tsx
// Line ~90 (example):
<a href="mailto:contact@sparkdatalab.ai">
  contact@sparkdatalab.ai
</a>
```

Replace with your actual email address.

Also update in `app/contact/page.tsx` (line ~120):

```tsx
<a href="mailto:contact@sparkdatalab.ai">
  contact@sparkdatalab.ai
</a>
```

### Phone Number (Optional)

If you want to add a phone number:

Open `app/contact/page.tsx` and add below the email section (line ~130):

```tsx
<div className="rounded-xl border border-neutral-200 bg-neutral-50 p-6">
  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-brand-navy">
    <Phone className="h-6 w-6 text-white" />
  </div>
  <h3 className="text-lg font-bold text-brand-navy mb-2">Call Us</h3>
  <a
    href="tel:+1234567890"
    className="text-brand-blue hover:text-brand-blue-light font-medium"
  >
    (123) 456-7890
  </a>
</div>
```

**Add import at top:**
```tsx
import { Phone } from 'lucide-react';
```

---

## ✨ Adding a Service or Feature

To add a new service card to the **Home Page** "How It Works" section:

Open `app/page.tsx` and find the grid of cards (line ~84):

**Copy this template:**
```tsx
<Card className="text-center">
  <CardHeader>
    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-brand-gold/20">
      <Star className="h-8 w-8 text-brand-navy" />
    </div>
    <CardTitle>New Service Name</CardTitle>
  </CardHeader>
  <CardContent>
    <CardDescription>
      Description of the new service goes here.
    </CardDescription>
  </CardContent>
</Card>
```

**Paste it into the grid** and customize:
1. Change icon (import from `lucide-react`)
2. Update service name in `<CardTitle>`
3. Update description in `<CardDescription>`

---

## 🚀 Deploying Changes

### Option 1: Deploy via Vercel Dashboard (Easiest)

1. **Commit changes**:
   ```bash
   git add .
   git commit -m "Updated website content"
   git push
   ```

2. Vercel will **automatically deploy** when you push to `main` branch

3. Check deployment status at [vercel.com/dashboard](https://vercel.com/dashboard)

### Option 2: Deploy via Vercel CLI

```bash
# From project root:
vercel --prod
```

### Option 3: Manual Build (Advanced)

```bash
# Build locally
pnpm build

# Deploy the .next folder to your hosting provider
```

---

## 🆘 Common Issues

### "Module not found" error after editing

**Solution**: Restart the dev server:
```bash
# Press Ctrl+C to stop
pnpm dev
```

### Colors not updating

**Solution**:
1. Clear your browser cache (Ctrl+Shift+R)
2. Restart dev server
3. Make sure you saved `tailwind.config.ts`

### Changes not showing on live site

**Solution**:
1. Make sure you committed and pushed changes
2. Check Vercel deployment logs
3. Clear browser cache

### Contact form not working

The form currently uses a placeholder. See README.md section "Email/Contact Form" for setup instructions, or contact your developer.

---

## 📞 Need Help?

If you run into issues:

1. **Check the README.md** for developer documentation
2. **Email your developer** with:
   - What you were trying to change
   - Screenshot of the error (if any)
   - The file you were editing
3. **Vercel docs**: [vercel.com/docs](https://vercel.com/docs)

---

## 🎯 Quick Reference: File Locations

| Content | File Location |
|---------|---------------|
| Home page text | `app/page.tsx` |
| Services page | `app/services/page.tsx` |
| Approach page | `app/approach/page.tsx` |
| About page | `app/about/page.tsx` |
| FAQ questions | `app/faq/page.tsx` |
| Contact form | `app/contact/page.tsx` |
| Header/nav | `components/layout/Header.tsx` |
| Footer | `components/layout/Footer.tsx` |
| Brand colors | `tailwind.config.ts` |
| Logo files | `public/assets/logos/` |

---

**Last Updated**: December 2025
**Version**: 1.0
