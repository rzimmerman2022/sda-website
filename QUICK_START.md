# 🚀 Quick Start - Deploy SparkData Analytics to sparkdatalab.ai

## ✅ What's Already Done

- ✅ **Code pushed to GitHub**: https://github.com/rzimmerman2022/sda-website
- ✅ **Build verified**: All pages working, zero errors
- ✅ **Documentation complete**: README, Owner's Manual, Deployment Guide

---

## 🎯 What You Need to Do (10 minutes)

### **Option 1: Automated Script (Easiest)**

**Double-click this file:**
```
deploy-to-vercel.bat
```

The script will:
1. Install Vercel CLI (if needed)
2. Open browser for Vercel login (use your GitHub account)
3. Deploy your site automatically
4. Add sparkdatalab.ai as custom domain

**Then follow the on-screen instructions for DNS setup.**

---

### **Option 2: Manual Steps**

If you prefer to see each step:

```bash
# 1. Install Vercel CLI
npm install -g vercel

# 2. Login to Vercel
vercel login
# (Browser opens - login with GitHub, email, or GitLab)

# 3. Deploy to production
cd "c:\Projects\SDA - Website"
vercel --prod

# 4. Add custom domains
vercel domains add sparkdatalab.ai
vercel domains add www.sparkdatalab.ai
```

---

## 🌐 DNS Setup (5 minutes)

After deployment, configure DNS at Spaceship:

### Quick Steps:

1. **Login**: [spaceship.com/login](https://spaceship.com/login)

2. **Navigate**: Domains → sparkdatalab.ai → DNS Management

3. **Add Records**:

   **Record 1 (A Record):**
   - Type: `A`
   - Host: `@`
   - Value: `76.76.21.21`
   - TTL: `3600`

   **Record 2 (CNAME):**
   - Type: `CNAME`
   - Host: `www`
   - Value: `cname.vercel-dns.com`
   - TTL: `3600`

4. **Save** and wait 10-30 minutes

**Detailed DNS instructions**: See [SPACESHIP_DNS_INSTRUCTIONS.md](SPACESHIP_DNS_INSTRUCTIONS.md)

---

## 🎉 Verifying Deployment

After DNS propagates (10-30 min):

```bash
# Check your live site:
https://sparkdatalab.ai

# Verify DNS:
nslookup sparkdatalab.ai
# Should show: 76.76.21.21

# Check deployment status:
vercel ls
```

---

## 📞 About Vercel Account

**Do I need to create a Vercel account first?**

**No!** When you run `vercel login`, you can:
- Login with **GitHub** (recommended - instant access)
- Login with **email** (creates account automatically)
- Login with **GitLab** or **Bitbucket**

**It's free** for this project (Vercel's Hobby plan includes everything you need).

**What happens:**
1. You run `vercel login`
2. Browser opens to vercel.com
3. Click "Continue with GitHub" (easiest)
4. Authorize Vercel
5. Done! You now have a Vercel account

---

## 🔄 Future Updates

After initial deployment, updates are automatic:

```bash
# Make changes to your code
# Then:
git add .
git commit -m "Updated homepage"
git push

# Vercel automatically deploys!
# Visit sparkdatalab.ai to see changes
```

---

## 📊 Post-Launch Checklist

After site is live:

- [ ] Visit https://sparkdatalab.ai and verify all pages load
- [ ] Test mobile responsiveness (phone/tablet)
- [ ] Run Lighthouse audit (Chrome DevTools → Lighthouse)
- [ ] Add Sparky logo files to `/public/assets/logos/`
- [ ] Configure contact form email (see README.md)
- [ ] Submit sitemap to Google Search Console
- [ ] Set up Google Analytics (optional)

---

## 🆘 Troubleshooting

### Vercel login fails?
- Make sure you have a GitHub account
- Try different browser
- Use email login instead

### DNS not working?
- Wait 24 hours for propagation
- Check [whatsmydns.net](https://whatsmydns.net)
- Verify records in Spaceship dashboard

### Build fails on Vercel?
- Check build logs in Vercel dashboard
- Verify `npm run build` works locally
- Contact support or check README.md

---

## 📚 Documentation

| File | Purpose |
|------|---------|
| [QUICK_START.md](QUICK_START.md) | This file - deployment guide |
| [README.md](README.md) | Developer documentation |
| [OWNER_MANUAL.md](OWNER_MANUAL.md) | Content editing guide (non-technical) |
| [DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md) | Detailed deployment reference |
| [SPACESHIP_DNS_INSTRUCTIONS.md](SPACESHIP_DNS_INSTRUCTIONS.md) | Spaceship DNS setup |
| [PROJECT_SUMMARY.md](PROJECT_SUMMARY.md) | Project overview + TODO list |

---

## ✨ Ready to Deploy!

**Estimated time to go live**: 15-20 minutes

**Next step**:
1. Double-click [deploy-to-vercel.bat](deploy-to-vercel.bat)
2. OR run the manual commands above

**Your site will be live at**: https://sparkdatalab.ai

🎉 **Let's launch!**
