# Via6 AI Labs - Production Setup Guide

**Generated:** 2026-01-30
**Status:** Ready for final configuration

---

## ✅ Completed

1. **Umami Analytics** - Integrated into website
2. **Phone Number Support** - Added to footer (needs actual number)
3. **Google Calendar** - Booking URL updated
4. **Chatwoot Widget** - Code added (needs token)

---

## 📋 Required Information

### 1. Umami Analytics Website ID

**Steps to get it:**
```bash
# Access Umami
# URL: http://100.68.66.127:3005 (via Tailscale)
# Or setup domain: https://analytics.via6ai.com

1. Login to Umami dashboard
2. Go to Settings → Websites
3. Click "+ Add website"
4. Enter:
   - Name: Via6 AI Labs
   - Domain: via6ai.com
5. Copy the Website ID (looks like: a1b2c3d4-e5f6-7890-abcd-ef1234567890)
```

**Add to `.env` file:**
```env
NEXT_PUBLIC_UMAMI_URL=https://analytics.via6ai.com
NEXT_PUBLIC_UMAMI_WEBSITE_ID=your-website-id-here
```

---

### 2. Chatwoot Website Token

**Steps to get it:**
```bash
# Chatwoot is deployed but HTTPS not configured
# Container: chatwoot-woow4wo0k0wwgowkkwwgsoko

1. Fix HTTPS for chat.via6ai.com in Coolify
2. Access: https://chat.via6ai.com
3. Login (create admin account if first time)
4. Go to Settings → Inboxes
5. Click "+ Add Inbox"
6. Select "Website"
7. Configure:
   - Channel Name: Via6 AI Labs Website
   - Website Domain: via6ai.com
   - Widget Color: #6366f1 (primary color)
   - Welcome Heading: "Hi there! 👋"
   - Welcome Tagline: "We typically reply within minutes"
8. Click "Create Website Channel"
9. Copy the Website Token (in the installation code)
```

**Add to `.env` file:**
```env
NEXT_PUBLIC_CHATWOOT_URL=https://chat.via6ai.com
NEXT_PUBLIC_CHATWOOT_TOKEN=your-token-here
```

**Configure Chatwoot:**
- Add business hours (Mon-Fri 9am-6pm EST)
- Add canned responses:
  - `/pricing` → "Check out our pricing: https://via6ai.com/#pricing"
  - `/book` → "Book a free strategy call: https://calendar.app.google/UnyTsDBE7jnaXjkn7"
  - `/services` → "Our services: https://via6ai.com/#services"
- Set up email notifications (hello@via6ai.com)
- Enable Telegram/Slack notifications (optional)

---

### 3. Twilio Phone Number

**Steps to set up:**
```bash
1. Sign up at: https://www.twilio.com/try-twilio
2. Verify your email and phone
3. Go to Phone Numbers → Buy a Number
4. Search for:
   - Country: Canada
   - Area code: 416 (Toronto) or 647 or 437
   - Capabilities: Voice + SMS + MMS
5. Buy number ($1/month)
6. Configure webhooks:
   - SMS: https://n8n.lmiatracker.com/webhook/twilio-sms
   - Voice: https://n8n.lmiatracker.com/webhook/twilio-voice
7. Copy your number (format: +1 416 XXX-XXXX)
```

**Add to `.env` file:**
```env
NEXT_PUBLIC_PHONE_NUMBER=+1 (416) XXX-XXXX
```

**Note:** Format with parentheses and spaces for display. The `tel:` link will auto-strip formatting.

---

### 4. Twenty CRM API Access

**Steps to get API key:**
```bash
# Twenty CRM is accessible at: https://crm.via6ai.com

1. Access: https://crm.via6ai.com
2. Create admin account (if first time)
3. Complete onboarding wizard
4. Go to Settings → API & Webhooks
5. Click "Generate API Key"
6. Name it: "n8n Integration"
7. Copy the API key (keep it secret!)
```

**Configure in n8n:**
```env
TWENTY_API_URL=https://crm.via6ai.com
TWENTY_API_KEY=your-api-key-here
```

**Set up custom fields:**
- Lead Source (dropdown): website-form, chatwoot-chat, twilio-sms, referral
- Lead Score (number): 0-100
- Services Interested (multi-select): automation, web-dev, ai-agents, consulting
- Booking Date (date): when strategy call is scheduled

**Pipeline stages:**
1. New Lead
2. Qualified
3. Strategy Call Booked
4. Proposal Sent
5. Negotiation
6. Won / Lost

---

### 5. Google Search Console

**Steps to submit sitemap:**
```bash
1. Go to: https://search.google.com/search-console
2. Click "Add property"
3. Choose "Domain" (via6ai.com)
4. Verify ownership:
   - Option A: DNS TXT record
   - Option B: Upload HTML file to website
   - Option C: Google Analytics (if using GA4)

5. After verification:
   - Go to Sitemaps (left menu)
   - Enter sitemap URL: https://via6ai.com/sitemap.xml
   - Click "Submit"

6. Request indexing:
   - Go to URL Inspection
   - Enter: https://via6ai.com
   - Click "Request Indexing"
```

**Expected timeline:**
- Indexing: 1-7 days
- First rankings: 2-4 weeks
- Significant traffic: 2-3 months

---

## 🚀 Deployment Checklist

### Pre-Deploy

- [ ] Get Umami website ID
- [ ] Get Chatwoot token (fix HTTPS first)
- [ ] Set up Twilio phone number
- [ ] Get Twenty CRM API key
- [ ] Update all environment variables

### Deploy

```bash
cd /root/via6-website

# Create production .env file
cat > .env.production << 'EOF'
NEXT_PUBLIC_N8N_WEBHOOK=https://n8n.lmiatracker.com/webhook/via6-contact
NEXT_PUBLIC_CAL_URL=https://calendar.app.google/UnyTsDBE7jnaXjkn7
NEXT_PUBLIC_SITE_URL=https://via6ai.com
NEXT_PUBLIC_CHATWOOT_URL=https://chat.via6ai.com
NEXT_PUBLIC_CHATWOOT_TOKEN=your-actual-token
NEXT_PUBLIC_UMAMI_URL=https://analytics.via6ai.com
NEXT_PUBLIC_UMAMI_WEBSITE_ID=your-actual-website-id
NEXT_PUBLIC_PHONE_NUMBER=+1 (416) XXX-XXXX
EOF

# Test build locally
npm run build
npm start

# If successful, commit and push
git add .
git commit -m "feat: production ready - analytics, chat, phone number integrated"
git push origin main

# Deploy via Coolify (auto-deploys on push)
```

### Post-Deploy

- [ ] Test website loads: https://via6ai.com
- [ ] Test Umami tracking (check dashboard for pageviews)
- [ ] Test Chatwoot widget (bottom-right chat bubble)
- [ ] Test phone number link (click to call)
- [ ] Test contact form submission
- [ ] Test booking calendar link
- [ ] Submit sitemap to Google Search Console
- [ ] Create Google Business Profile

---

## 🔧 Environment Variable Summary

**File: `.env.production` (on Coolify)**
```env
# Contact & Booking
NEXT_PUBLIC_N8N_WEBHOOK=https://n8n.lmiatracker.com/webhook/via6-contact
NEXT_PUBLIC_CAL_URL=https://calendar.app.google/UnyTsDBE7jnaXjkn7
NEXT_PUBLIC_PHONE_NUMBER=+1 (416) XXX-XXXX

# Site Configuration
NEXT_PUBLIC_SITE_URL=https://via6ai.com

# Live Chat
NEXT_PUBLIC_CHATWOOT_URL=https://chat.via6ai.com
NEXT_PUBLIC_CHATWOOT_TOKEN=[GET FROM CHATWOOT]

# Analytics
NEXT_PUBLIC_UMAMI_URL=https://analytics.via6ai.com
NEXT_PUBLIC_UMAMI_WEBSITE_ID=[GET FROM UMAMI]
```

---

## 🐛 Troubleshooting

### Umami not tracking

**Check:**
```bash
# Verify script loads
curl -I https://analytics.via6ai.com/script.js

# Check browser console for errors
# Should see: umami.track(...) calls
```

**Fix:** Ensure `NEXT_PUBLIC_UMAMI_WEBSITE_ID` is set correctly.

---

### Chatwoot widget not appearing

**Check:**
```bash
# 1. HTTPS working?
curl -I https://chat.via6ai.com

# 2. Token correct?
# Check browser console for errors

# 3. Widget enabled?
# Login to Chatwoot → Settings → Inboxes → Your Inbox → Check "Widget Enabled"
```

**Fix Chatwoot HTTPS:**
```bash
# In Coolify:
1. Go to Chatwoot application
2. Domains & URLs → Add domain: chat.via6ai.com
3. Enable SSL (Let's Encrypt automatic)
4. Wait 2-3 minutes for certificate
5. Test: curl -I https://chat.via6ai.com (should return 200)
```

---

### Phone number not clickable

**Check:** Environment variable format is correct: `+1 (416) XXX-XXXX`

**Note:** The code automatically strips formatting for `tel:` links.

---

### Contact form not working

**Test n8n webhook:**
```bash
curl -X POST https://n8n.lmiatracker.com/webhook/via6-contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "company": "Test Co",
    "message": "Test message"
  }'
```

**Expected:** HTTP 200 response

**If failed:** Check n8n workflow is activated and webhook URL is correct.

---

## 📈 Success Metrics

**Week 1 targets:**
- [ ] 100+ website visitors
- [ ] 10+ Umami tracked sessions
- [ ] 3+ Chatwoot conversations
- [ ] 1+ phone calls/SMS
- [ ] 2-5 contact form submissions
- [ ] 5+ booking calendar clicks

**Track in:**
- Umami dashboard: Pageviews, referrers, popular pages
- Chatwoot: Conversations, response time
- n8n: Form submissions, workflow executions
- Google Search Console: Impressions, clicks

---

## 🎯 Next Steps

1. **Fix Chatwoot HTTPS** (highest priority)
   - Enable domain in Coolify
   - Get SSL certificate
   - Test accessibility

2. **Get All Tokens/IDs**
   - Umami website ID
   - Chatwoot token
   - Twenty CRM API key (for n8n later)

3. **Set Up Twilio** (optional but recommended)
   - Buy Toronto phone number
   - Configure webhooks
   - Add to website

4. **Deploy to Production**
   - Update .env with all values
   - Commit changes
   - Push to GitHub
   - Verify Coolify auto-deploys

5. **Submit to Google**
   - Verify domain ownership
   - Submit sitemap
   - Request indexing

6. **Monitor & Optimize**
   - Check analytics daily
   - Respond to chats within minutes
   - Test all forms weekly
   - Review Search Console monthly

---

**Questions?** Review this guide step-by-step. Each section has detailed instructions.

**Stuck?** Check the Troubleshooting section or review service logs in Coolify.

---

**Last Updated:** 2026-01-30
**Next Review:** After production deployment
