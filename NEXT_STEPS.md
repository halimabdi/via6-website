# Via6 AI Labs - Next Steps & Action Plan

**Generated:** 2026-01-24
**Status:** Ready for Production Deployment

---

## 🚨 Critical Path to Launch (1-2 Hours)

### Step 1: Google Workspace Setup (30 min)
```bash
✅ Action Items:
1. Sign up: workspace.google.com
2. Choose: Business Standard ($12 USD/month)
3. Add domain: via6ai.com
4. Verify domain (DNS TXT record)
5. Set up MX records for email
6. Create account: hello@via6ai.com
7. Configure Calendar appointment scheduling
8. Get booking URL
```

### Step 2: Update Website (15 min)
```bash
✅ Files to Update:
- components/hero-section.tsx (line 6)
- components/contact-section.tsx (line 57)
- components/pricing-section.tsx (line 6)

🔄 Replace:
https://cal.com/via6ai/strategy-call

🔄 With:
https://calendar.google.com/calendar/appointments/schedules/YOUR_ID
```

### Step 3: Create GitHub Repo (10 min)
```bash
cd /root/via6-website

# Create repo on GitHub first, then:
git remote add origin https://github.com/via6ai/via6-website.git
git add .
git commit -m "feat: initial commit - via6 ai labs website"
git branch -M main
git push -u origin main
```

### Step 4: Deploy to Coolify (20 min)
```bash
✅ In Coolify:
1. + Add Resource → Application
2. Public Repository: https://github.com/via6ai/via6-website
3. Branch: main
4. Build Pack: Docker
5. Port: 3000
6. Domain: via6ai.com
7. Environment Variables:
   - NEXT_PUBLIC_SITE_URL=https://via6ai.com
   - NEXT_PUBLIC_CAL_URL=[Google Calendar URL]
   - NEXT_PUBLIC_N8N_WEBHOOK=https://n8n.lmiatracker.com/webhook/via6-contact
   - NODE_ENV=production
8. Deploy!
```

### Step 5: Verify Production (15 min)
```bash
✅ Checklist:
□ Visit https://via6ai.com (loads correctly)
□ Test "Book Free Call" buttons (all 3 work)
□ Test contact form submission
□ Check mobile view (responsive)
□ Verify SSL certificate (green lock)
□ Test all navigation links
□ Check Google Calendar booking flow
```

### Step 6: Submit to Google (10 min)
```bash
✅ Google Search Console:
1. Add property: via6ai.com
2. Verify ownership (DNS TXT or HTML file)
3. Submit sitemap: https://via6ai.com/sitemap.xml
4. Request indexing

✅ Google Business Profile:
1. business.google.com
2. Create: Via6 AI Labs Inc.
3. Category: Software Company
4. Location: Toronto, ON
5. Add logo, photos, website
```

---

## 📋 Week 1: Core Services Deployment

### Monday: Uptime Kuma (Production)
```bash
✅ Task: Move from test to production
- Stop test container: docker stop uptime-kuma-test
- Deploy via Coolify docker-compose
- Domain: status.via6ai.com
- Add monitors:
  □ via6ai.com (HTTP, 60s)
  □ Coolify proxy (Docker, 60s)
  □ PostgreSQL (Docker, 120s)
- Create public status page
- Test alerts
```

### Tuesday: Chatwoot Deployment
```bash
✅ Task: Live chat integration
- Deploy via Coolify
- Domain: chat.via6ai.com
- PostgreSQL + Redis setup
- Create admin account
- Create "Website" inbox
- Get widget code
- Add to via6-website (app/layout.tsx)
- Create canned responses
- Set up n8n webhook
- Test chat flow
```

### Wednesday: Twenty CRM Deployment
```bash
✅ Task: Central customer database
- Deploy via Coolify
- Domain: crm.via6ai.com
- PostgreSQL setup
- Create workspace
- Configure custom fields:
  - Lead Source
  - Lead Score
  - Services Interested
  - Booking Date
- Set up pipeline stages
- Test API access
- Import any existing contacts
```

### Thursday: Analytics Setup
```bash
✅ Task: Track conversions
Option A: Umami (self-hosted)
- Deploy via Coolify
- Add tracking code to website
- Set up events

Option B: Google Analytics 4
- Create GA4 property
- Add tracking code
- Configure events
- Set up conversions

Track:
□ Page views
□ "Book Free Call" clicks
□ Contact form submissions
□ Chat widget opens
□ Time on page
```

### Friday: Testing & Optimization
```bash
✅ Task: Verify everything works
□ Test full lead capture flow
□ Test chat → CRM integration
□ Test booking → notification flow
□ Check all monitors in Uptime Kuma
□ Review analytics data
□ Fix any issues
□ Document learnings
```

---

## 🤖 Week 2: n8n Automation Workflows

### Workflow 1: Lead Capture (Form → CRM)
```
Priority: HIGH
Time: 2 hours

Flow:
Website Form → n8n Webhook → Validate → Twenty CRM
  ↓
Email Confirmation → Customer
Slack Notification → You
```

**n8n Nodes:**
1. Webhook Trigger
2. Function (validate data)
3. HTTP Request (Twenty CRM - check if exists)
4. IF (contact exists?)
5. HTTP Request (create OR update contact)
6. Function (calculate lead score)
7. IF (score > 15 = hot lead?)
8. Slack Notification
9. Gmail/SendGrid (confirmation email)

**Test:**
- Submit contact form
- Check email received
- Check Slack ping
- Verify contact in CRM

---

### Workflow 2: Chat → CRM Integration
```
Priority: HIGH
Time: 2 hours

Flow:
Chatwoot Message → n8n Webhook → Extract Info → Twenty CRM
  ↓
Keyword Detection → Auto-tag → Slack Alert (if urgent)
```

**Keyword Triggers:**
- "pricing" → Tag: interested-in-pricing
- "urgent" → Tag: hot-lead + immediate Slack ping
- "n8n" → Tag: n8n-automation

**Test:**
- Send chat message with "pricing"
- Check CRM tag added
- Send "urgent" message
- Verify Slack alert

---

### Workflow 3: Post-Booking Automation
```
Priority: HIGH
Time: 3 hours

Flow:
Google Calendar Event Created → n8n → Extract Attendee
  ↓
Twenty CRM (update stage) → Send Pre-Call Questionnaire
  ↓
Schedule Reminders (24hr, 1hr) → Slack Notification
```

**Emails to Send:**
1. Immediate: Confirmation + pre-call questionnaire
2. 24 hours before: Reminder + prep tips
3. 1 hour before: Final reminder + Meet link

**Test:**
- Book test appointment
- Check CRM updated
- Verify emails sent
- Check Slack notification

---

### Workflow 4: Auto-Qualification
```
Priority: MEDIUM
Time: 2 hours

Flow:
CRM Contact Created/Updated → n8n → Calculate Score
  ↓
Score Based On:
- Source: Form (+5), Chat (+3), Referral (+10)
- Engagement: Viewed pricing (+10), Multiple visits (+5)
- Intent: Asked about service (+7), Mentioned budget (+12)
- Company: 10+ employees (+8)

Tags:
- >25 points: hot-lead
- 15-24: warm-lead
- <15: cold-lead

Actions:
- Hot lead → Immediate Slack + phone alert + priority follow-up
- Warm lead → Slack notification + 24hr follow-up
- Cold lead → Email nurture sequence
```

**Test:**
- Create contact with high score data
- Verify "hot-lead" tag
- Check Slack alert

---

### Workflow 5: Client Onboarding
```
Priority: MEDIUM
Time: 3 hours

Flow:
CRM Deal → Status "Won" → n8n Webhook
  ↓
Generate Invoice (Invoice Ninja) → Send Welcome Email
  ↓
Schedule Kickoff Call → Create Slack Channel
```

**Welcome Email Includes:**
- Payment link
- Contract to sign
- Project timeline
- What to prepare
- Team introductions
- Next steps

**Test:**
- Mark test deal as "Won"
- Check invoice generated
- Verify email sent
- Check Slack channel created

---

### Workflow 6: Weekly Metrics Report
```
Priority: LOW
Time: 2 hours

Trigger: Every Monday 9am

Collect Data From:
- Umami/GA4: Traffic, conversions
- Chatwoot: Conversations, response time
- Twenty CRM: Leads, pipeline value, deals
- Google Calendar: Calls booked
- Uptime Kuma: Service uptime

Generate:
- HTML email with metrics
- Slack post with summary
- Dashboard update (optional)
```

---

## 💼 Week 3: Business Operations

### Invoice Ninja Setup
```bash
Priority: MEDIUM
Time: 2 hours

✅ Deployment:
- Deploy via Coolify
- Domain: invoices.via6ai.com
- PostgreSQL database

✅ Configuration:
- Company: Via6 AI Labs Inc.
- Logo: /logo.svg
- Colors: Teal (#00D4AA), Purple (#6366F1)
- Tax: HST 13% (Ontario)
- Currency: CAD

✅ Products:
- Single Workflow: $497 CAD
- Professional Package: $5,997 CAD
- Landing Page: $497 CAD
- SaaS Application: Starting at $2,497 CAD
- Consulting: $147/hr CAD

✅ Payment:
- Connect Stripe
- Test invoice generation
- Test payment flow
```

---

### Public Automation Showcase
```bash
Priority: MEDIUM
Time: 4 hours

✅ Create /automation Page:
- Real-time metrics dashboard
- Active workflows display
- Embed Uptime Kuma status
- Lead counter
- Hours saved calculator
- Workflow success rates

Purpose: Show visitors automation working in real-time
```

**Metrics to Display:**
```javascript
🤖 Automation at Work (Live)

Active Workflows: 12
Messages Handled Today: 47
Leads Processed This Week: 23
Hours Saved This Month: 156
System Uptime: 99.96%

This Week:
- 23 conversations started
- 8 strategy calls booked
- 12 leads auto-qualified
- 5 proposals generated
- <2 min avg response time

[View Live Status →]
```

---

## 🎯 Week 4: Marketing & Growth

### Content Creation
```bash
✅ Blog Setup:
- Create /app/blog directory
- Add blog layout
- Create first 3 posts:
  1. "5 n8n Workflows Every Business Needs"
  2. "n8n vs Zapier: Real Cost Comparison"
  3. "How We Automated Our Agency (Meta)"

✅ SEO:
- Submit sitemap
- Build 5 backlinks
- Get first Google Business reviews
- Monitor keyword rankings

✅ Testimonials:
- Create testimonials section component
- Reach out to network for early reviews
- Add to homepage
```

### Testing & Optimization
```bash
✅ Full Funnel Test:
□ Visit website as stranger
□ Browse services
□ Start chat conversation
□ Submit contact form
□ Book strategy call
□ Check all notifications received
□ Verify CRM records created
□ Test reminder emails

✅ Performance:
□ Run Lighthouse audit (target: >90)
□ Check Core Web Vitals
□ Optimize images if needed
□ Test on mobile devices
□ Fix any issues

✅ Conversion Optimization:
□ A/B test CTA button text
□ Track conversion rates
□ Optimize form fields
□ Improve chat responses
```

---

## 📊 Success Metrics & KPIs

### Week 1
- [ ] Website deployed and live
- [ ] All services running (Chatwoot, CRM, Uptime Kuma)
- [ ] First lead captured via form
- [ ] First chat conversation
- [ ] Zero downtime

### Month 1
- [ ] 500+ website visitors
- [ ] 15-25 strategy calls booked
- [ ] 3-5 paying clients
- [ ] $15,000-25,000 CAD revenue
- [ ] 3+ testimonials collected
- [ ] 5+ Google Business reviews

### Month 3
- [ ] 1,000+ website visitors/month
- [ ] 30-50 strategy calls/month
- [ ] 6-15 new clients/month
- [ ] $30,000-75,000 CAD/month revenue
- [ ] Page 1 Google ranking for "n8n automation Toronto"
- [ ] 10+ testimonials
- [ ] 15+ Google Business reviews

---

## 🚀 Quick Reference Commands

### Local Development
```bash
cd /root/via6-website
npm install
npm run dev
# Visit: http://localhost:3000
```

### Production Build
```bash
npm run build
npm start
# Test production build
```

### Git Operations
```bash
# Push changes
git add .
git commit -m "feat: description"
git push

# Coolify auto-deploys on push
```

### Docker Operations
```bash
# Check running containers
docker ps

# Check Uptime Kuma
docker logs uptime-kuma-test --tail 50

# Restart service
docker restart [container-name]
```

### Coolify Operations
```bash
# Access via Tailscale
http://100.68.66.127:8010

# Check deployment logs
# (via Coolify UI)
```

---

## 📞 Support & Resources

### Documentation
- **CLAUDE.md** - Complete development guide
- **PROJECT_REVIEW.md** - Comprehensive review
- **DEPLOYMENT_CHECKLIST.md** - Pre-deploy verification
- **COOLIFY_SETUP.md** - Deployment guide

### External Docs
- Next.js: https://nextjs.org/docs
- Tailwind CSS: https://tailwindcss.com
- Coolify: https://coolify.io/docs
- n8n: https://docs.n8n.io
- Twenty CRM: https://twenty.com/developers
- Chatwoot: https://www.chatwoot.com/docs

### Tools
- Google Workspace: https://workspace.google.com
- Invoice Ninja: https://invoiceninja.com
- Uptime Kuma: https://github.com/louislam/uptime-kuma

---

## ✅ Pre-Launch Checklist

### Code
- [x] Website built and tested locally
- [x] All components working
- [x] Mobile responsive
- [x] SEO implemented (schema, sitemap, metadata)
- [x] Dockerfile configured
- [ ] Calendar URLs updated (Google Workspace)
- [ ] Environment variables set
- [ ] Contact form tested

### Services
- [ ] Google Workspace configured
- [ ] Uptime Kuma deployed (production)
- [ ] Chatwoot deployed
- [ ] Twenty CRM deployed
- [ ] Analytics configured
- [ ] Invoice Ninja deployed (optional for launch)

### Content
- [x] All sections complete
- [x] 18 use cases documented
- [x] 8 n8n workflows created
- [x] Pricing finalized
- [x] FAQ written
- [ ] Testimonials added (post-launch)

### Marketing
- [ ] GitHub repo created
- [ ] Google Search Console setup
- [ ] Google Business Profile created
- [ ] Social media announcement prepared
- [ ] Email signature updated

### Automation
- [ ] Lead capture workflow (form → CRM)
- [ ] Chat integration (Chatwoot → CRM)
- [ ] Post-booking workflow (Calendar → email)
- [ ] Monitoring alerts configured

---

**Status:** Ready to execute
**Timeline:** 1-4 weeks to full automation stack
**Priority:** Get website live this week, then build automation stack

**Next Action:** Configure Google Workspace → Update calendar URLs → Push to GitHub → Deploy!
