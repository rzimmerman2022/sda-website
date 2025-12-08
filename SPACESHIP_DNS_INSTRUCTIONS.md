# Spaceship DNS Configuration for sparkdatalab.ai

## 🌐 Setting Up Your Custom Domain

After running the deployment script, follow these steps to point sparkdatalab.ai to your Vercel site:

---

## Step-by-Step Instructions

### 1. Login to Spaceship

Go to: [spaceship.com/login](https://spaceship.com/login)

### 2. Navigate to Domain DNS Settings

```
Dashboard → Domains → sparkdatalab.ai → DNS Management
```

### 3. Delete Existing Records (If Any)

Before adding new records, **delete any existing** A or CNAME records for:
- `@` (apex/root domain)
- `www` (www subdomain)

This prevents conflicts.

### 4. Add New DNS Records

Click "Add Record" and create these two records:

#### Record 1: A Record (for sparkdatalab.ai)

| Field | Value |
|-------|-------|
| **Type** | A |
| **Host/Name** | `@` (or leave blank) |
| **Points To / Value** | `76.76.21.21` |
| **TTL** | `3600` (or Auto) |

Click **Save** or **Add Record**

#### Record 2: CNAME Record (for www.sparkdatalab.ai)

| Field | Value |
|-------|-------|
| **Type** | CNAME |
| **Host/Name** | `www` |
| **Points To / Value** | `cname.vercel-dns.com` |
| **TTL** | `3600` (or Auto) |

Click **Save** or **Add Record**

### 5. Save Changes

Make sure both records are saved and visible in your DNS records list.

---

## Alternative: Use Vercel Nameservers (Easier)

Instead of adding A and CNAME records, you can let Vercel manage DNS entirely:

### In Spaceship:

1. Go to: **Domains → sparkdatalab.ai → Nameservers**
2. Select **Custom Nameservers**
3. Replace existing nameservers with:
   ```
   ns1.vercel-dns.com
   ns2.vercel-dns.com
   ```
4. Save

**Benefit**: Vercel automatically manages SSL, redirects, and DNS updates.

---

## Verification

### Check DNS Propagation

After saving DNS records, check propagation status:

1. Go to: [whatsmydns.net](https://whatsmydns.net)
2. Enter: `sparkdatalab.ai`
3. Select: `A` record type
4. Click **Search**

You should see `76.76.21.21` appearing across different locations.

### Test Your Domain

After DNS propagates (10-30 minutes, sometimes up to 48 hours):

```bash
# Test in browser:
https://sparkdatalab.ai
https://www.sparkdatalab.ai  (should redirect to apex)

# Test in terminal:
nslookup sparkdatalab.ai
# Should return: 76.76.21.21
```

---

## Troubleshooting

### DNS Not Working After 24 Hours?

1. **Clear browser cache**: Press `Ctrl + Shift + R`
2. **Try incognito mode** to bypass cache
3. **Check Spaceship DNS settings** - verify records are saved
4. **Check Vercel domains**: Run `vercel domains ls` to see status

### SSL Certificate Not Working?

- Vercel auto-provisions SSL after DNS is verified
- Can take 5-10 minutes after DNS propagation
- Check in Vercel Dashboard → Domains → Certificate status

### www Not Redirecting to Apex?

- This is configured in `next.config.mjs` (already done!)
- Vercel handles this automatically
- Wait for DNS to fully propagate

---

## Quick Reference

**Spaceship Login**: [spaceship.com/login](https://spaceship.com/login)

**DNS Records Path**: Dashboard → Domains → sparkdatalab.ai → DNS Management

**Vercel Dashboard**: [vercel.com/dashboard](https://vercel.com/dashboard)

**DNS Checker**: [whatsmydns.net](https://whatsmydns.net)

---

## Timeline

| Step | Time |
|------|------|
| Add DNS records in Spaceship | 5 minutes |
| DNS propagation starts | Immediate |
| DNS visible globally | 10-30 minutes (up to 48 hours) |
| SSL certificate provisioned | 5-10 minutes after DNS |
| Site fully live | ~30 minutes total |

---

## Need Help?

**Spaceship Support**: [spaceship.com/support](https://spaceship.com/support)

**Vercel Support**: [vercel.com/support](https://vercel.com/support)

**Contact**: Check your Vercel dashboard for deployment logs and domain status
