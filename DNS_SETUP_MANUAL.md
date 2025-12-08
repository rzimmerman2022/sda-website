# DNS Setup - Final Step to Go Live! 🌐

## ⚠️ API Limitation

The Spaceship API key doesn't have DNS management permissions enabled, so we need to configure DNS manually. **This takes 2 minutes!**

---

## 🎯 What You Need to Do

Add **2 DNS records** at Spaceship to point your domain to Vercel.

---

## 📋 Step-by-Step Instructions

### **STEP 1: Login to Spaceship**
Go to: **https://www.spaceship.com/domains**

### **STEP 2: Select Your Domain**
- Click on **"sparkdatalab.ai"**
- Look for **"DNS"** or **"Manage DNS"** or **"DNS Records"** button
- Click it

### **STEP 3: Add Record #1 - Root Domain (A Record)**

Click **"Add Record"** or **"Add DNS Record"**

Fill in:
```
Type:  A
Name:  @    (or leave blank if it says "sparkdatalab.ai")
Value: 76.76.21.21
TTL:   3600 (or Auto/1 hour)
```

Click **"Save"** or **"Add"**

### **STEP 4: Add Record #2 - WWW Subdomain (CNAME)**

Click **"Add Record"** again

Fill in:
```
Type:  CNAME
Name:  www
Value: cname.vercel-dns.com
TTL:   3600 (or Auto/1 hour)
```

Click **"Save"** or **"Add"**

### **STEP 5: Save Changes**
- Make sure both records are saved
- You should see them listed in your DNS records table

---

## ✅ After You Add the Records

### What Your DNS Should Look Like:

| Type  | Name/Host | Value/Points To      | TTL  |
|-------|-----------|----------------------|------|
| A     | @         | 76.76.21.21          | 3600 |
| CNAME | www       | cname.vercel-dns.com | 3600 |

### Wait for DNS Propagation
- **Time:** 10-30 minutes (sometimes up to 2 hours)
- **What's happening:** Your DNS changes are spreading to DNS servers worldwide

### Check if It's Working:

**Option 1 - Online Checker:**
Visit: https://dnschecker.org/#A/sparkdatalab.ai

**Option 2 - Command Line:**
```bash
nslookup sparkdatalab.ai
```
Should return: `76.76.21.21`

---

## 🎉 Once DNS Propagates

Visit these URLs - they'll all show your live SparkData Analytics website:
- ✅ **https://sparkdatalab.ai**
- ✅ **https://www.sparkdatalab.ai**
- ✅ **https://sparkdata-analytics-jegvqqvg3-rzimmerman2022s-projects.vercel.app**

---

## 💡 Common Issues

### "This site can't be reached"
- **Reason:** DNS hasn't propagated yet
- **Solution:** Wait another 15-30 minutes and try again

### "ERR_NAME_NOT_RESOLVED"
- **Reason:** DNS records not added correctly
- **Solution:** Double-check both records are saved in Spaceship

### Only www.sparkdatalab.ai works (not sparkdatalab.ai)
- **Reason:** A record (@) is missing or incorrect
- **Solution:** Verify the A record points to 76.76.21.21

### Only sparkdatalab.ai works (not www)
- **Reason:** CNAME record is missing or incorrect
- **Solution:** Verify CNAME for "www" points to cname.vercel-dns.com

---

## 🔒 Security Features (Automatic)

Once DNS propagates, Vercel automatically:
- ✅ Provisions SSL/TLS certificates (HTTPS)
- ✅ Forces HTTPS redirects
- ✅ Renews certificates automatically
- ✅ Enables HTTP/2 and modern protocols

---

## 📊 Deployment Summary

✅ **Vercel Deployment:** Complete
✅ **GitHub Integration:** Active (auto-deploys on push)
✅ **Custom Domains:** Added to Vercel
✅ **API Credentials:** Secured in `.env.*.local` files
⏳ **DNS Configuration:** In progress (needs 2 records added)

---

## 🎯 After DNS Is Live

### Monitor Your Site:
- **Vercel Dashboard:** https://vercel.com/rzimmerman2022s-projects/sparkdata-analytics
- **GitHub Repo:** https://github.com/rzimmerman2022/sda-website

### Future Updates:
1. Push code to GitHub `main` branch
2. Vercel automatically builds and deploys
3. Changes live in ~2 minutes

### Analytics (Optional):
Enable Vercel Analytics in your dashboard for visitor insights

---

## 📞 Need Help?

If DNS doesn't work after 2 hours:
1. Verify both records are saved in Spaceship
2. Check for any "pending" or "error" status in Spaceship DNS
3. Try deleting and re-adding the records
4. Contact Spaceship support if records won't save

---

**You're almost there! Just add those 2 DNS records and grab a coffee. Your site will be live in 15-30 minutes! ☕**
