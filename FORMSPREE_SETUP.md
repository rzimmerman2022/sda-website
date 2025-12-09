# Formspree Setup - SparkData Analytics Contact Form

**Status:** 🔴 **REQUIRED BEFORE LAUNCH**
**Time to Complete:** 3 minutes (you already know Formspree from SRS!)
**Priority:** CRITICAL

---

## ✅ Why Formspree?

You're already using Formspree for Southwest Resumes, so:
- ✅ You know the platform
- ✅ Proven to work reliably
- ✅ Same familiar interface
- ✅ Fast 3-minute setup

---

## 🚀 Super Quick Setup (3 Minutes)

### Step 1: Create New Form in Formspree (1 minute)

1. **Login to Formspree:**
   ```
   Go to: https://formspree.io/login
   ```
   Use your existing account (same one as SRS)

2. **Create New Form:**
   - Click **"+ New Form"**
   - Name: **SparkData Analytics Contact**
   - Email: **ryan.zimmerman@southwestresumes.com**
   - Click **"Create Form"**

3. **Copy Your Form Endpoint:**
   You'll get a URL like: `https://formspree.io/f/YOUR_FORM_ID`

   **Copy the entire URL** - you'll need it next!

---

### Step 2: Add to Vercel Environment Variables (1 minute)

**Option A - Via Vercel Dashboard (Recommended):**

1. Go to: https://vercel.com/rzimmerman2022s-projects/sparkdata-analytics/settings/environment-variables
2. Click **"Add New"**
3. Fill in:
   - **Key:** `FORMSPREE_ENDPOINT`
   - **Value:** `https://formspree.io/f/YOUR_FORM_ID` (paste your endpoint)
   - **Environment:** Production ✅
4. Click **"Save"**

**Option B - Via CLI:**

```bash
vercel env add FORMSPREE_ENDPOINT production
# When prompted, paste: https://formspree.io/f/YOUR_FORM_ID
```

---

### Step 3: Redeploy (Automatic - Already Done!)

The code is already pushed to GitHub, so:
- ✅ Auto-deployment from GitHub is in progress
- ⏱️ Will be live in ~2 minutes

Or deploy manually:
```bash
vercel --token PvFJaCVjjqOiShWwKiY0egx9 --name sparkdata-analytics --prod --yes
```

---

### Step 4: Test the Form (1 minute)

1. **Wait for DNS:** Check if your site is live:
   ```bash
   nslookup sparkdatalab.ai
   # Should return: 76.76.21.21
   ```

2. **Test the form:**
   - Go to: https://sparkdatalab.ai/contact (or Vercel preview URL)
   - Fill out all fields
   - Click **"Send Message"**
   - ✅ Should see success message

3. **Check your email:**
   - Check: **ryan.zimmerman@southwestresumes.com**
   - Should receive form submission within 1 minute
   - Check spam folder if not in inbox

---

## 🎯 Quick Reference

### Your Formspree Dashboard
```
https://formspree.io/forms
```

### Your Form Settings
- **Name:** SparkData Analytics Contact
- **Email:** ryan.zimmerman@southwestresumes.com
- **Endpoint:** https://formspree.io/f/YOUR_FORM_ID

### Vercel Environment Variable
- **Key:** `FORMSPREE_ENDPOINT`
- **Value:** Your form endpoint URL
- **Location:** Production environment

---

## ⚙️ Formspree Settings (Optional Customizations)

After creating your form, you can customize:

### Email Notifications
- ✅ Email subject line
- ✅ Reply-to address (already set to sender's email)
- ✅ CC/BCC additional recipients

### Spam Protection
- ✅ reCAPTCHA v3 (recommended if you get spam)
- ✅ Honeypot field (already included)
- ✅ Block specific domains

### Form Analytics
- ✅ View submission count
- ✅ Export submissions as CSV
- ✅ Webhook integrations

---

## 🧪 Testing Checklist

After setup, verify:

- [ ] Form endpoint added to Vercel environment variables
- [ ] Site redeployed (automatic or manual)
- [ ] DNS propagated (sparkdatalab.ai resolves)
- [ ] Form submits without errors
- [ ] Email received at ryan.zimmerman@southwestresumes.com
- [ ] Reply-to address is correct (sender's email)
- [ ] Success message displays
- [ ] Form resets after submission

---

## 🆚 Formspree vs Others

| Feature | Formspree | Web3Forms | Resend |
|---------|-----------|-----------|--------|
| **You already use it** | ✅ Yes (SRS) | No | No |
| Setup Time | 3 min | 5 min | 15 min |
| Free Tier | 50/month | 1000/month | 100/day |
| Custom Domain Email | Yes (paid) | No | Yes |
| Familiar Interface | ✅ Yes | No | No |
| **Recommendation** | ✅ **USE THIS** | Alternative | Long-term |

**Why Formspree for you:**
- You already know it from SRS
- Proven reliability
- Fastest setup (3 min vs 5-15 min)
- Same account for both businesses

---

## 📊 Free Plan Limits

**Formspree Free:**
- 50 submissions/month
- Unlimited forms
- Email notifications
- Spam filtering
- File uploads (10MB)

**If you exceed 50/month:**
- Upgrade to $10/month for 1000 submissions
- Or create separate form per month (free workaround)

**Expected volume for SparkData:**
- Likely 5-20 submissions/month initially
- Free plan should be sufficient

---

## 🔧 Troubleshooting

### Form Submission Fails

**Check:**
1. Formspree endpoint added to Vercel?
   - Go to: https://vercel.com/rzimmerman2022s-projects/sparkdata-analytics/settings/environment-variables
   - Verify `FORMSPREE_ENDPOINT` exists in Production

2. Correct endpoint format?
   - Should be: `https://formspree.io/f/YOUR_FORM_ID`
   - NOT: `https://formspree.io/ryan.zimmerman@...`

3. Site redeployed after adding env var?
   - Redeploy: `vercel --prod --yes`

### Email Not Received

**Check:**
1. Spam folder
2. Formspree dashboard for submissions
3. Email address correct in Formspree settings

### Error: "Formspree endpoint not configured"

**Fix:**
```bash
# Add environment variable:
vercel env add FORMSPREE_ENDPOINT production
# Paste your endpoint when prompted

# Redeploy:
vercel --token PvFJaCVjjqOiShWwKiY0egx9 --name sparkdata-analytics --prod --yes
```

---

## ✅ Success Criteria

**Form is working when:**
- ✅ No console errors on form submission
- ✅ Success message displays
- ✅ Email received within 1-2 minutes
- ✅ Form data correct in email
- ✅ Reply-to works (can reply directly to sender)

---

## 🎯 TL;DR - 3-Minute Setup

```bash
# 1. Login to Formspree (1 min)
https://formspree.io/login

# 2. Create form "SparkData Analytics Contact" (1 min)
# Copy endpoint: https://formspree.io/f/YOUR_FORM_ID

# 3. Add to Vercel (1 min)
https://vercel.com/.../settings/environment-variables
Key: FORMSPREE_ENDPOINT
Value: https://formspree.io/f/YOUR_FORM_ID
Environment: Production

# 4. Test (auto-deployed already)
https://sparkdatalab.ai/contact
```

**Done!** ✅

---

## 📞 Support

**Formspree:**
- Dashboard: https://formspree.io/forms
- Docs: https://help.formspree.io/
- Support: support@formspree.io

**Vercel:**
- Dashboard: https://vercel.com/rzimmerman2022s-projects/sparkdata-analytics
- Env Vars: https://vercel.com/rzimmerman2022s-projects/sparkdata-analytics/settings/environment-variables

---

## ✅ Sign-Off

**Once completed:**
- [ ] Formspree form created
- [ ] Endpoint added to Vercel
- [ ] Site deployed
- [ ] Form tested
- [ ] Email received

**Status:** 🟢 Ready for Launch

**Last Updated:** 2025-12-08
**Setup Time:** 3 minutes
**Difficulty:** Easy (you already know Formspree!)

---

**Ready? Let's do this! It'll take 3 minutes and then your contact form is LIVE! 🚀**
