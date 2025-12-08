# SparkData Analytics - Deployment Guide

## 🚀 Quick Deploy to Vercel

### Prerequisites
- GitHub account
- Vercel account (free tier is fine)

### Steps

#### 1. Push to GitHub

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: SparkData Analytics website"

# Create repo on GitHub, then:
git remote add origin https://github.com/YOUR_USERNAME/sparkdata-website.git
git branch -M main
git push -u origin main
```

#### 2. Deploy to Vercel

**Option A: Via Vercel Dashboard**

1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import your GitHub repository
4. Vercel will auto-detect Next.js settings
5. Click "Deploy"

**Option B: Via CLI**

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel

# Deploy to production
vercel --prod
```

#### 3. Add Custom Domain (sparkdatalab.ai)

**In Vercel Dashboard:**

1. Go to Project Settings → Domains
2. Add `sparkdatalab.ai`
3. Add `www.sparkdatalab.ai`

**In Your Domain Registrar (e.g., GoDaddy, Namecheap):**

Configure DNS:

| Type | Name | Value |
|------|------|-------|
| A | @ | 76.76.21.21 |
| CNAME | www | cname.vercel-dns.com |

Or use Vercel's nameservers (recommended):

1. Vercel will provide nameservers (ns1.vercel-dns.com, ns2.vercel-dns.com)
2. Update nameservers in your domain registrar
3. Wait 24-48 hours for DNS propagation

**Redirect www → apex** (already configured in `next.config.mjs`):
- Visitors to `www.sparkdatalab.ai` will automatically redirect to `sparkdatalab.ai`

#### 4. Add Environment Variables

In Vercel Dashboard → Project → Settings → Environment Variables:

```
NEXT_PUBLIC_SITE_URL=https://sparkdatalab.ai
```

Optional (for analytics):
```
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

#### 5. Enable SSL

Vercel automatically provisions free SSL certificates via Let's Encrypt. No action needed!

---

## 🔧 Post-Deployment Checklist

### SEO & Performance

- [ ] Verify sitemap: `https://sparkdatalab.ai/sitemap.xml`
- [ ] Verify robots.txt: `https://sparkdatalab.ai/robots.txt`
- [ ] Run Lighthouse audit (should be 90+ on all metrics)
- [ ] Test mobile responsiveness on real devices
- [ ] Check page load speed on 3G network

### Analytics & Monitoring

- [ ] Set up Google Analytics (optional)
- [ ] Submit sitemap to Google Search Console
- [ ] Submit sitemap to Bing Webmaster Tools
- [ ] Set up Vercel Analytics (built-in, free)

### Content & Assets

- [ ] Add Sparky logo files to `public/assets/logos/`
- [ ] Create 1200x630 OG image for social sharing
- [ ] Test all internal links
- [ ] Proofread all pages for typos
- [ ] Test contact form (once email service is configured)

### Social Media

- [ ] Test social media preview on:
  - Twitter/X Card Validator
  - Facebook Sharing Debugger
  - LinkedIn Post Inspector

---

## 📊 Monitoring & Maintenance

### Check These Monthly

1. **Core Web Vitals** (Vercel Analytics or Google Search Console)
2. **Broken links** (use tool like Broken Link Checker)
3. **Dependencies** (`npm outdated` to check for updates)
4. **SSL certificate** (Vercel auto-renews, but verify)

### Updating Content

See [OWNER_MANUAL.md](OWNER_MANUAL.md) for non-dev content editing guide.

### Updating Dependencies

```bash
# Check for outdated packages
npm outdated

# Update Next.js
npm install next@latest react@latest react-dom@latest

# Update all dependencies (careful!)
npm update

# Test after updates
npm run build
npm run lint
npm run typecheck
```

---

## 🆘 Troubleshooting

### Build Fails on Vercel

**Error**: "Module not found"

**Solution**:
1. Check `package.json` has all dependencies
2. Delete `node_modules` and `.next` folders locally
3. Run `npm install` and `npm run build` locally
4. If local build works, push again

**Error**: Type errors during build

**Solution**:
1. Run `npm run typecheck` locally
2. Fix TypeScript errors
3. Push fixes

### Domain Not Working

**Error**: DNS_PROBE_FINISHED_NXDOMAIN

**Solution**:
1. Verify DNS settings in domain registrar
2. Wait 24-48 hours for DNS propagation
3. Use [whatsmydns.net](https://whatsmydns.net) to check propagation status

### Slow Page Load

**Solution**:
1. Run Lighthouse audit
2. Optimize images (use WebP format, compress to < 100KB)
3. Check for large JavaScript bundles
4. Enable Vercel Edge Network (automatic)

---

## 🔐 Security Best Practices

### Do This Now

- [ ] Never commit `.env` files to git (already in `.gitignore`)
- [ ] Use environment variables for API keys
- [ ] Enable Vercel's "Deploy Protection" for staging branches
- [ ] Review Vercel Security settings

### Regular Maintenance

- [ ] Update dependencies monthly
- [ ] Monitor Vercel security alerts
- [ ] Review access logs for suspicious activity

---

## 📞 Support Resources

- **Vercel Docs**: [vercel.com/docs](https://vercel.com/docs)
- **Next.js Docs**: [nextjs.org/docs](https://nextjs.org/docs)
- **Vercel Support**: [vercel.com/support](https://vercel.com/support)

---

## ✅ Deployment Complete!

Once deployed, your site will be live at:
- **Production**: `https://sparkdatalab.ai`
- **Vercel URL**: `https://sparkdata-analytics.vercel.app` (backup URL)

Every push to `main` branch will automatically deploy to production.

**Estimated Time**:
- Initial deployment: 2-3 minutes
- DNS propagation: 24-48 hours (for custom domain)

---

**Last Updated**: December 2025
