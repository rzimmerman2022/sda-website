# Credentials Guide for AI Models

**Last Updated:** 2025-12-08
**Purpose:** Guide future AI models on using project credentials

---

## 🔐 Credential Files

All credentials are stored in `.env.*.local` files which are:
- ✅ **Gitignored** (never committed to version control)
- ✅ **Documented** with troubleshooting notes
- ✅ **Ready to use** for deployments and DNS management

---

## 1️⃣ Vercel Deployment Token

**File:** [.env.vercel.local](.env.vercel.local)

### Token Value
```
VERCEL_TOKEN=PvFJaCVjjqOiShWwKiY0egx9
```

### How to Use

**✅ CORRECT - Use --token flag directly:**
```bash
cd "c:\Projects\SDA - Website"
vercel --token PvFJaCVjjqOiShWwKiY0egx9 --name sparkdata-analytics --prod --yes
```

**❌ WRONG - Environment variables don't work:**
```bash
# These all FAIL on Windows:
export VERCEL_TOKEN=xxx        # Bash - doesn't work
set VERCEL_TOKEN=xxx           # CMD - doesn't work
$env:VERCEL_TOKEN=xxx          # PowerShell - doesn't work
```

### Critical Requirements

1. **Always use `--name` flag:** Project folder "SDA - Website" has spaces/uppercase
   ```bash
   --name sparkdata-analytics
   ```

2. **Full deployment command:**
   ```bash
   vercel --token PvFJaCVjjqOiShWwKiY0egx9 --name sparkdata-analytics --prod --yes
   ```

3. **Adding domains:**
   ```bash
   vercel domains add sparkdatalab.ai --token PvFJaCVjjqOiShWwKiY0egx9
   vercel domains add www.sparkdatalab.ai --token PvFJaCVjjqOiShWwKiY0egx9
   ```

### Account Information
- **Account:** ryan.zimmerman@southwestresumes.com
- **Organization:** rzimmerman2022s-projects
- **Project:** sparkdata-analytics
- **GitHub:** https://github.com/rzimmerman2022/sda-website

---

## 2️⃣ Spaceship DNS API

**File:** [.env.spaceship.local](.env.spaceship.local)

### Domain History

- **Domain:** sparkdatalab.ai
- **Previous Registrar:** Wix
- **Current Registrar:** Spaceship
- **Transfer Method:** EPP authorization code from Wix
- **Status:** Transfer complete, DNS fully managed at Spaceship

### Dashboard Login Credentials
```
Email: rzimmerman2018@gmail.com
Password: Welectric9191!
Dashboard: https://spaceship.com/login
```

**When to use dashboard:**
- Manual DNS record changes
- Domain management tasks
- Viewing billing and account settings
- Troubleshooting when API is unavailable

### API Credentials (for automated access)
```
SPACESHIP_API_KEY=CzoHGOwSXsejPTWnBqmq
SPACESHIP_API_SECRET=k9GdSkqSnaKn1YxeSDMLCS3d4OA51ZdzIYyUWfjAiaq5Pp1GI1FfYovJBvmw1e8t
```

### How to Use

**✅ CORRECT Endpoint Format:**
```bash
# GET DNS records
curl -X GET "https://spaceship.dev/api/v1/dns/records/sparkdatalab.ai?take=50&skip=0" \
  -H "X-API-Key: CzoHGOwSXsejPTWnBqmq" \
  -H "X-API-Secret: k9GdSkqSnaKn1YxeSDMLCS3d4OA51ZdzIYyUWfjAiaq5Pp1GI1FfYovJBvmw1e8t" \
  -H "Accept: application/json"
```

**✅ UPDATE DNS records (use PUT to replace all):**
```bash
curl -X PUT "https://spaceship.dev/api/v1/dns/records/sparkdatalab.ai" \
  -H "X-API-Key: CzoHGOwSXsejPTWnBqmq" \
  -H "X-API-Secret: k9GdSkqSnaKn1YxeSDMLCS3d4OA51ZdzIYyUWfjAiaq5Pp1GI1FfYovJBvmw1e8t" \
  -H "Content-Type: application/json" \
  -d '{
    "items": [
      {
        "name": "@",
        "type": "A",
        "address": "76.76.21.21",
        "ttl": 3600,
        "group": {"type": "custom"}
      },
      {
        "name": "www",
        "type": "CNAME",
        "cname": "cname.vercel-dns.com",
        "ttl": 3600,
        "group": {"type": "custom"}
      }
    ]
  }'
```

### Critical Field Names (by Record Type)

**VERY IMPORTANT - Field names vary by DNS record type:**

| Record Type | Field Name | Example Value |
|-------------|------------|---------------|
| A           | `address`  | `"76.76.21.21"` |
| CNAME       | `cname`    | `"cname.vercel-dns.com"` |
| TXT         | `value`    | `"verification-string"` |
| MX          | `exchange` + `preference` | See API docs |

**All records must include:**
```json
"group": {"type": "custom"}
```

### Common Mistakes to Avoid

❌ **Wrong Endpoint (404 error):**
```
/v1/domains/sparkdatalab.ai/dns/records     ← WRONG
/v1/domains/sparkdatalab.ai/dns-records     ← WRONG
```

✅ **Correct Endpoint:**
```
/v1/dns/records/sparkdatalab.ai             ← CORRECT
```

❌ **Wrong Field Names:**
```json
{"type": "A", "value": "76.76.21.21"}       ← WRONG (A records don't use "value")
{"type": "CNAME", "value": "example.com"}   ← WRONG (CNAME records don't use "value")
```

✅ **Correct Field Names:**
```json
{"type": "A", "address": "76.76.21.21"}             ← CORRECT
{"type": "CNAME", "cname": "cname.vercel-dns.com"}  ← CORRECT
```

### Rate Limits
- **300 requests** per user per domain within 300 seconds
- Long operations return HTTP 202 with `spaceship-async-operationid` header

---

## 3️⃣ Current DNS Configuration

**Domain:** sparkdatalab.ai

**Current Records:**
```
Type: A       Name: @     Value: 76.76.21.21              TTL: 3600
Type: CNAME   Name: www   Value: cname.vercel-dns.com    TTL: 3600
Type: TXT     Name: @     Value: google-site-verification=ax_ZVK5Q6cb6ESQRp5iEYmP-KcixwYZFBc-mPuuz744
```

**To verify current DNS:**
```bash
curl -X GET "https://spaceship.dev/api/v1/dns/records/sparkdatalab.ai?take=50&skip=0" \
  -H "X-API-Key: CzoHGOwSXsejPTWnBqmq" \
  -H "X-API-Secret: k9GdSkqSnaKn1YxeSDMLCS3d4OA51ZdzIYyUWfjAiaq5Pp1GI1FfYovJBvmw1e8t" \
  -H "Accept: application/json"
```

---

## 4️⃣ Quick Reference Commands

### Deploy to Vercel
```bash
cd "c:\Projects\SDA - Website"
vercel --token PvFJaCVjjqOiShWwKiY0egx9 --name sparkdata-analytics --prod --yes
```

### Get Current DNS Records
```bash
curl -X GET "https://spaceship.dev/api/v1/dns/records/sparkdatalab.ai?take=50&skip=0" \
  -H "X-API-Key: CzoHGOwSXsejPTWnBqmq" \
  -H "X-API-Secret: k9GdSkqSnaKn1YxeSDMLCS3d4OA51ZdzIYyUWfjAiaq5Pp1GI1FfYovJBvmw1e8t" \
  -H "Accept: application/json"
```

### Add New DNS Record (Example: Add A record for subdomain)
```bash
# First, get all existing records, then PUT with the new record included
# Always include ALL records in the PUT request (it replaces everything)
```

### Check Site Status
```bash
curl -I https://sparkdatalab.ai
curl -I https://www.sparkdatalab.ai
curl -I https://sparkdata-analytics-jegvqqvg3-rzimmerman2022s-projects.vercel.app
```

---

## 5️⃣ Troubleshooting Guide

### Vercel Issues

**Problem:** "The specified token is not valid"
- **Cause:** Using environment variables instead of --token flag
- **Solution:** Use `--token` directly in command

**Problem:** "Project names can be up to 100 characters long and must be lowercase"
- **Cause:** Project folder has spaces/uppercase ("SDA - Website")
- **Solution:** Use `--name sparkdata-analytics` flag

### Spaceship API Issues

**Problem:** "Unable to find a requested resource"
- **Cause:** Wrong endpoint format
- **Solution:** Use `/v1/dns/records/{domain}` NOT `/v1/domains/{domain}/dns/records`

**Problem:** "The cname field is required" or "The address field is required"
- **Cause:** Using wrong field names for record type
- **Solution:**
  - A records → use `"address"`
  - CNAME records → use `"cname"`
  - TXT records → use `"value"`

**Problem:** "The user's request was not properly authorized"
- **Cause:** Wrong API key/secret or missing headers
- **Solution:** Verify both `X-API-Key` and `X-API-Secret` headers are present

---

## 6️⃣ Security Best Practices

1. ✅ **Never commit `.env.*.local` files** (already gitignored)
2. ✅ **Never print credentials in logs** (use `--token` in commands, not echo)
3. ✅ **Store credentials in .env files** (not in code or scripts)
4. ✅ **Document usage patterns** (for future AI models)
5. ✅ **Rotate credentials** if accidentally exposed

---

## 7️⃣ Resources

- **Vercel Documentation:** https://vercel.com/docs
- **Vercel CLI Docs:** https://vercel.com/docs/cli
- **Spaceship API Docs:** https://docs.spaceship.dev/
- **Spaceship API (Apiary):** https://spaceshipapi.docs.apiary.io/
- **DNS Propagation Checker:** https://dnschecker.org

---

## 8️⃣ For Future AI Models

### When deploying:
1. Read [.env.vercel.local](.env.vercel.local) for full troubleshooting notes
2. Use `--token` flag directly (don't use environment variables)
3. Always include `--name sparkdata-analytics` flag
4. Test with `--yes` flag to avoid prompts

### When managing DNS:
1. Read [.env.spaceship.local](.env.spaceship.local) for full API documentation
2. Use correct endpoint: `/v1/dns/records/{domain}`
3. Use correct field names based on record type (address/cname/value)
4. Always include `"group": {"type": "custom"}` in records
5. Use PUT to replace ALL records at once (not POST for individual)

### Current Project Status:
- ✅ **Deployed:** Site is live at https://sparkdatalab.ai
- ✅ **Auto-deploy:** GitHub pushes to `main` auto-deploy via Vercel
- ✅ **DNS:** Configured and propagated
- ✅ **SSL:** Auto-provisioned by Vercel
- ✅ **CDN:** Global edge network active

---

**Last Deployment:** 2025-12-08
**Deployed By:** Claude Sonnet 4.5
**Status:** ✅ PRODUCTION LIVE
