# Via6 AI Labs - Complete Development Guide

**Project:** Via6 AI Labs Website & Automation Platform
**Status:** Production-Ready (95%) - Cal.com configuration pending
**Last Updated:** 2026-01-24
**Tech Lead:** Claude Sonnet 4.5

---

## 📋 Table of Contents

1. [Project Overview](#project-overview)
2. [Architecture](#architecture)
3. [Tech Stack](#tech-stack)
4. [Component Structure](#component-structure)
5. [Integration Plan](#integration-plan)
6. [Development Workflow](#development-workflow)
7. [Deployment Guide](#deployment-guide)
8. [Service Configuration](#service-configuration)
9. [n8n Automation Workflows](#n8n-automation-workflows)
10. [Next Steps](#next-steps)

---

## 📊 Project Overview

### Mission
Via6 AI Labs is a Toronto-based AI automation and web development agency specializing in n8n workflows, custom web applications, and business process automation.

### Website Goals
1. **Lead Generation:** Convert visitors into strategy call bookings
2. **Expertise Showcase:** Demonstrate automation capabilities through working examples
3. **Client Education:** Provide value through workflow templates and use cases
4. **Professional Presence:** Establish credibility as automation experts

### Current Status

**✅ Completed:**
- Next.js 14 website with modern UI
- 8 production-ready n8n workflow templates
- Comprehensive SEO implementation (schema, sitemap, metadata)
- Mobile-responsive design
- 14 documentation files
- Dockerfile for production deployment

**⚠️ Pending:**
- Cal.com booking URL configuration (or Google Workspace Calendar)
- Contact form webhook testing
- Analytics setup (Umami/GA4)
- GitHub repository creation
- Production deployment to Coolify

**🔄 In Progress:**
- Chatwoot live chat integration
- Twenty CRM setup
- Uptime Kuma monitoring
- Full automation stack deployment

---

## 🏗️ Architecture

### Complete Platform Stack

```
┌─────────────────────────────────────────────────────────────┐
│                    VIA6 AI LABS PLATFORM                     │
└─────────────────────────────────────────────────────────────┘

┌───────────────────────┐
│  FRONTEND LAYER       │
│  ─────────────────    │
│  via6ai.com           │ ← Next.js 14 Website (this repo)
│  ├─ Hero Section      │
│  ├─ Services          │
│  ├─ Use Cases         │
│  ├─ Pricing           │
│  ├─ Contact Form      │
│  └─ Chatwoot Widget   │ ← Live chat (coming soon)
└───────────────────────┘
          ↓
┌───────────────────────┐
│  BOOKING LAYER        │
│  ─────────────────    │
│  Google Workspace     │ ← Calendar appointment scheduling
│  └─ Strategy Calls    │    (replacing Cal.com plan)
└───────────────────────┘
          ↓
┌───────────────────────┐
│  AUTOMATION LAYER     │
│  ─────────────────    │
│  n8n Workflows        │
│  ├─ Lead Capture      │ ← Form → n8n → CRM
│  ├─ Auto-Qualify      │ ← Score leads based on behavior
│  ├─ Post-Booking      │ ← Calendar event → email sequence
│  ├─ Chatwoot → CRM   │ ← Chat messages → lead records
│  └─ Client Onboarding│ ← Deal won → invoice + project
└───────────────────────┘
          ↓
┌───────────────────────┐
│  DATA LAYER           │
│  ─────────────────    │
│  Twenty CRM           │ ← Central customer database
│  └─ crm.via6ai.com    │
└───────────────────────┘
          ↓
┌───────────────────────┐
│  SUPPORT LAYER        │
│  ─────────────────    │
│  Chatwoot             │ ← Live chat support
│  └─ chat.via6ai.com   │
└───────────────────────┘
          ↓
┌───────────────────────┐
│  BUSINESS OPS LAYER   │
│  ─────────────────    │
│  Invoice Ninja        │ ← Billing & payments
│  └─ invoices.via6ai.com│
└───────────────────────┘
          ↓
┌───────────────────────┐
│  MONITORING LAYER     │
│  ─────────────────    │
│  Uptime Kuma          │ ← Service health monitoring
│  └─ status.via6ai.com │
│                       │
│  Umami Analytics      │ ← Website analytics
│  └─ Traffic tracking  │
└───────────────────────┘

All services deployed on Coolify (self-hosted)
```

---

## 🛠️ Tech Stack

### Frontend (This Repository)

| Technology | Version | Purpose |
|------------|---------|---------|
| **Next.js** | 14.2.21 | React framework with App Router |
| **React** | 18.3.1 | UI library |
| **TypeScript** | 5.x | Type safety |
| **Tailwind CSS** | 4.1.9 | Styling (latest v4) |
| **shadcn/ui** | Latest | Component library (Radix UI based) |
| **Lucide React** | 0.454.0 | Icon library |
| **React Hook Form** | 7.60.0 | Form validation |
| **Zod** | 3.25.76 | Schema validation |
| **Framer Motion** | *(via Tailwind Animate)* | Animations |

### Infrastructure

| Service | Technology | Domain | Status |
|---------|-----------|--------|--------|
| **Website** | Next.js 14 | via6ai.com | 🔄 Ready to deploy |
| **Monitoring** | Uptime Kuma | status.via6ai.com | ✅ Deployed (test) |
| **Live Chat** | Chatwoot | chat.via6ai.com | 📋 Planned |
| **CRM** | Twenty | crm.via6ai.com | 📋 Planned |
| **Invoicing** | Invoice Ninja | invoices.via6ai.com | 📋 Planned |
| **Automation** | n8n | n8n.lmiatracker.com | ✅ Running |
| **Email** | Google Workspace | hello@via6ai.com | 📋 To configure |
| **Phone/SMS** | Twilio | +1 (416) XXX-XXXX | 📋 To configure |
| **Analytics** | Umami | (embedded) | 📋 To add |

### Deployment

| Component | Technology | Notes |
|-----------|-----------|-------|
| **Hosting** | Coolify on Hetzner | Self-hosted platform |
| **Reverse Proxy** | Traefik | Auto-configured by Coolify |
| **SSL** | Let's Encrypt | Auto-renewed |
| **Container** | Docker | Dockerfile included |
| **CI/CD** | Coolify Git Integration | Auto-deploy on push |

---

## 📁 Component Structure

### Main Components (`/components`)

```
components/
├── navigation.tsx           # Header with responsive menu
├── hero-section.tsx         # Hero + primary CTA
├── problem-solution-section.tsx # Pain points addressed
├── services-section.tsx     # n8n automation services
├── industry-use-cases.tsx   # 18 use cases, 6 industries
├── web-development-section.tsx # Web dev offerings
├── process-section.tsx      # 4-step process
├── pricing-section.tsx      # 3 pricing tiers (CAD)
├── faq-section.tsx          # 10 FAQs
├── about-section.tsx        # Founding client positioning
├── contact-section.tsx      # Form + booking CTA
├── footer.tsx               # Footer links + branding
├── schema-markup.tsx        # SEO structured data
└── theme-provider.tsx       # Dark mode support
```

### UI Components (`/components/ui`)

60+ shadcn/ui components (Radix UI primitives):
- Forms: Button, Input, Textarea, Select, Checkbox, etc.
- Overlays: Dialog, Popover, Dropdown, Sheet
- Data: Table, Card, Badge, Avatar
- Navigation: Tabs, Accordion, Breadcrumb
- Feedback: Toast, Alert, Progress, Skeleton

### App Structure (`/app`)

```
app/
├── layout.tsx              # Root layout with metadata
├── page.tsx                # Homepage (all sections)
├── globals.css             # Tailwind + custom styles
├── sitemap.ts              # Dynamic XML sitemap
├── robots.txt/route.ts     # SEO crawler config
├── icon.tsx                # Dynamic favicon
├── apple-icon.tsx          # Apple touch icon
└── opengraph-image.tsx     # OG image generator
```

### Key Features Per Component

#### Navigation
- Responsive hamburger menu
- Smooth scroll to sections
- "Book Free Call" CTA button
- Mobile-optimized

#### Hero Section
- Animated background (floating orbs)
- Clear value proposition
- Dual CTAs (primary + secondary)
- Founding client badge (20% discount)

#### Services Section
- n8n automation focus
- n8n vs Zapier comparison table
- Clear benefit statements
- Industry-specific examples

#### Industry Use Cases
- 6 industries (Real Estate, Immigration, Healthcare, etc.)
- 18 specific automations
- Tabs + accordion UI (mobile-friendly)
- Technical accuracy: 100%

#### Pricing Section
- 3 tiers: Single Workflow, Professional, Enterprise
- CAD pricing (Canadian market)
- Clear deliverables
- Money-back guarantee
- Founding client discount

#### Contact Section
- n8n webhook-powered form
- Google Calendar booking card
- Input validation (Zod schema)
- Loading states + error handling

---

## 🔗 Integration Plan

### Phase 1: Core Website (Current)
- ✅ Next.js website built
- ⚠️ Google Workspace Calendar (replacing Cal.com)
- ⚠️ Contact form webhook (to be tested)
- 📋 Umami analytics (to add)

### Phase 2: Lead Capture & Management
- 📋 Chatwoot live chat widget
- 📋 Twenty CRM deployment
- 📋 n8n workflow: Form → CRM
- 📋 n8n workflow: Chat → CRM
- 📋 n8n workflow: Calendar → CRM

### Phase 3: Automation Intelligence
- 📋 Lead scoring workflow (behavior-based)
- 📋 Auto-qualification (hot/warm/cold tagging)
- 📋 Post-booking automation (pre-call questionnaire)
- 📋 Chatwoot smart responses (keyword triggers)

### Phase 4: Business Operations
- 📋 Invoice Ninja deployment
- 📋 Client onboarding workflow (deal won → invoice)
- 📋 Project management integration
- 📋 Monitoring & alerting (Uptime Kuma)

### Phase 5: Marketing & Growth
- 📋 Blog section (Next.js /blog)
- 📋 Weekly reporting automation (metrics email)
- 📋 Public automation showcase (/automation page)
- 📋 Client testimonials section

---

## 🔧 Development Workflow

### Local Development

```bash
# Clone repository
git clone https://github.com/via6ai/via6-website.git
cd via6-website

# Install dependencies
npm install

# Create environment file
cp .env.example .env.local

# Edit .env.local with actual values:
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_N8N_WEBHOOK=https://your-n8n.com/webhook/via6-contact
NEXT_PUBLIC_CAL_URL=https://calendar.google.com/calendar/appointments/...
# (Or Cal.com URL if using Cal.com)

# Run development server
npm run dev

# Open browser
open http://localhost:3000
```

### Building for Production

```bash
# Build
npm run build

# Test production build locally
npm start

# Open browser
open http://localhost:3000
```

### Code Quality

```bash
# Type checking
npx tsc --noEmit

# Linting
npm run lint

# Format (if Prettier configured)
npm run format
```

---

## 🚀 Deployment Guide

### Coolify Deployment

#### Prerequisites
1. Coolify server running
2. Domain DNS configured
3. GitHub repository created
4. Environment variables prepared

#### Step 1: Create GitHub Repository

```bash
cd /root/via6-website

# Initialize git (if not already)
git init

# Add remote
git remote add origin https://github.com/via6ai/via6-website.git

# Add all files
git add .

# Commit
git commit -m "Initial commit: Via6 AI Labs website"

# Push to GitHub
git push -u origin main
```

#### Step 2: Deploy to Coolify

1. **In Coolify Dashboard:**
   - Click "+ Add Resource"
   - Select "Application" → "Public Repository"
   - Repository URL: `https://github.com/via6ai/via6-website`
   - Branch: `main`

2. **Build Configuration:**
   - Build Pack: Docker (auto-detected from Dockerfile)
   - Port: 3000
   - Health Check: `/`

3. **Environment Variables:**
   ```
   NEXT_PUBLIC_SITE_URL=https://via6ai.com
   NEXT_PUBLIC_N8N_WEBHOOK=https://n8n.lmiatracker.com/webhook/via6-contact
   NEXT_PUBLIC_CAL_URL=https://calendar.google.com/calendar/appointments/...
   NODE_ENV=production
   ```

4. **Domain Configuration:**
   - Add domain: `via6ai.com`
   - Add domain: `www.via6ai.com` (redirect to main)
   - SSL: Auto-configured by Coolify

5. **Deploy:**
   - Click "Deploy"
   - Wait for build completion (~3-5 minutes)
   - Visit https://via6ai.com

#### Step 3: Post-Deployment Verification

```bash
# Check if site is live
curl -I https://via6ai.com

# Test contact form (from server)
curl -X POST https://via6ai.com/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@test.com","message":"Test"}'

# Check SSL certificate
openssl s_client -connect via6ai.com:443 -servername via6ai.com < /dev/null
```

#### Step 4: Submit to Google

1. **Google Search Console:**
   - Add property: via6ai.com
   - Verify domain (TXT record)
   - Submit sitemap: https://via6ai.com/sitemap.xml

2. **Google Business Profile:**
   - Create listing for "Via6 AI Labs Inc."
   - Location: Toronto, ON
   - Category: Software Company / Business Automation Service

---

## ⚙️ Service Configuration

### Google Workspace Business Standard ($12/month)

**What You Get:**
- Professional email: hello@via6ai.com, info@via6ai.com
- Google Calendar with appointment scheduling
- Google Meet (150 participants + recording)
- 2 TB storage per user
- Shared drives, Docs, Sheets, Slides

**Setup Steps:**
1. Sign up at workspace.google.com
2. Choose Business Standard plan
3. Add domain: via6ai.com
4. Verify domain ownership (TXT record)
5. Set up MX records for email
6. Configure SPF, DKIM, DMARC
7. Create email accounts
8. Set up Google Calendar appointment scheduling

**Calendar Booking Page:**
1. Google Calendar → Create → Appointment schedule
2. Name: "30-Minute Strategy Call"
3. Duration: 30 minutes
4. Location: Google Meet (auto-generated)
5. Availability: Set working hours
6. Booking form: Name, Email, "What services interest you?"
7. Get booking link
8. Update website CTAs with link

**Replace Cal.com URLs in:**
- `components/hero-section.tsx:6`
- `components/contact-section.tsx:57`
- `components/pricing-section.tsx:6`

---

### Chatwoot (Free, Self-Hosted)

**Deployment:**
- Domain: chat.via6ai.com
- Deploy via Coolify docker-compose
- PostgreSQL + Redis included

**Configuration:**
1. Create admin account
2. Create inbox for "Website"
3. Get widget code
4. Add to via6ai website (app/layout.tsx)
5. Set up canned responses
6. Configure webhooks to n8n

**Widget Integration:**

```typescript
// app/layout.tsx (after <body> tag)
<Script id="chatwoot-widget">
  {`
    (function(d,t) {
      var BASE_URL="https://chat.via6ai.com";
      var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
      g.src=BASE_URL+"/packs/js/sdk.js";
      g.defer = true;
      g.async = true;
      s.parentNode.insertBefore(g,s);
      g.onload=function(){
        window.chatwootSDK.run({
          websiteToken: 'YOUR_WEBSITE_TOKEN',
          baseUrl: BASE_URL
        })
      }
    })(document,"script");
  `}
</Script>
```

**Canned Responses:**
- `/pricing` → Show pricing page link
- `/book` → Show calendar link
- `/n8n` → n8n vs Zapier comparison link

---

### Twenty CRM (Free, Self-Hosted)

**Deployment:**
- Domain: crm.via6ai.com
- Deploy via Coolify docker-compose
- PostgreSQL database

**Setup:**
1. Create workspace
2. Import contacts (if any)
3. Create custom fields:
   - Lead Source (website/chat/referral)
   - Lead Score (number)
   - Services Interested (multi-select)
   - Booking Date (date)
4. Set up pipeline stages:
   - New Lead
   - Qualified
   - Strategy Call Booked
   - Proposal Sent
   - Negotiation
   - Won / Lost
5. Configure webhooks (for n8n integration)

---

### Uptime Kuma (Free, Self-Hosted)

**Status:** ✅ Deployed (test instance running)

**Monitors to Add:**
1. Via6ai.com (HTTP, 60s interval)
2. Chatwoot (HTTP, 60s)
3. Twenty CRM (HTTP, 120s)
4. Coolify proxy (Docker container, 60s)
5. PostgreSQL (Docker container, 120s)

**Public Status Page:**
- URL: status.via6ai.com/status/via6ai
- Shows: Via6ai website, Chatwoot, CRM
- Hides: Internal services (databases, Redis)

**Embed on Website:**
```html
<!-- Add to /automation page -->
<iframe
  src="https://status.via6ai.com/status/via6ai"
  width="100%"
  height="400px"
  frameborder="0">
</iframe>
```

---

### Invoice Ninja (Free, Self-Hosted)

**Deployment:**
- Domain: invoices.via6ai.com
- Deploy via Coolify
- PostgreSQL database

**Configuration:**
1. Create company profile (Via6 AI Labs Inc.)
2. Set up via6ai branding (logo, colors)
3. Configure tax settings (HST for Ontario)
4. Create invoice templates
5. Connect Stripe for payments
6. Set up recurring invoices

**Products/Services to Add:**
- Single Workflow Automation ($497 CAD)
- Professional Automation Package ($5,997 CAD)
- Landing Page ($497 CAD)
- SaaS Application (Starting at $2,497 CAD)
- Hourly Consulting ($147/hr CAD)

---

## 🤖 n8n Automation Workflows

### Workflow 1: Lead Capture (Form → CRM)

**Trigger:** Website contact form submission

**Steps:**
1. Webhook receives form data
2. Validate data (email format, required fields)
3. Check if contact exists in Twenty CRM
4. If new: Create contact
5. If existing: Update contact
6. Add tag: "website-form"
7. Calculate lead score based on:
   - Service interest (+10 for Professional tier)
   - Company field filled (+5)
   - Message length (>50 chars = +5)
8. Send Slack notification if score >15 (hot lead)
9. Send confirmation email to customer
10. Send internal notification email

**n8n Nodes:**
- Webhook (trigger)
- Function (data validation)
- HTTP Request (Twenty CRM API - check contact)
- IF (contact exists?)
- HTTP Request (Create contact)
- HTTP Request (Update contact)
- Function (calculate lead score)
- IF (score > 15?)
- Slack (send notification)
- Gmail/SMTP (send confirmation)
- Gmail/SMTP (send internal alert)

---

### Workflow 2: Chat → CRM Integration

**Trigger:** Chatwoot conversation created/updated

**Steps:**
1. Webhook from Chatwoot
2. Extract visitor info (name, email, conversation content)
3. Check keywords:
   - "pricing" → Tag: interested-in-pricing
   - "urgent" → Tag: hot-lead
   - "n8n" → Tag: n8n-automation
4. Create/update contact in Twenty CRM
5. Add conversation notes to CRM
6. If urgent keyword: Send Slack ping
7. Track in analytics

---

### Workflow 3: Post-Booking Automation

**Trigger:** Google Calendar event created

**Steps:**
1. Google Calendar Trigger (new event)
2. Extract attendee info
3. Create/update contact in Twenty CRM
4. Move to "Strategy Call Booked" stage
5. Send pre-call questionnaire (Google Form link)
6. Schedule reminder emails:
   - 24 hours before
   - 1 hour before
7. Send internal Slack notification
8. Add to email nurture sequence

---

### Workflow 4: Lead Scoring & Auto-Qualification

**Trigger:** New contact created in CRM OR contact updated

**Steps:**
1. Trigger on contact change
2. Calculate score based on:
   - **Source:** Website form (+5), Chat inquiry (+3), Referral (+10)
   - **Engagement:** Viewed pricing (+10), Multiple page visits (+5)
   - **Intent:** Asked about specific service (+7), Mentioned budget (+12)
   - **Company:** 10+ employees (+8), Known industry (+5)
3. Tag based on score:
   - >25 points: "hot-lead"
   - 15-24: "warm-lead"
   - <15: "cold-lead"
4. If hot lead:
   - Immediate Slack notification with phone alert
   - Assign to sales (you)
   - Priority follow-up within 2 hours
5. If warm lead:
   - Standard Slack notification
   - Follow-up within 24 hours
6. If cold lead:
   - Add to email nurture sequence
   - Follow-up within 1 week

---

### Workflow 5: Client Onboarding (Deal Won → Setup)

**Trigger:** Twenty CRM deal moved to "Won" stage

**Steps:**
1. CRM webhook (deal won)
2. Extract client info
3. Generate invoice in Invoice Ninja
4. Send invoice + contract via email
5. Create project workspace (if using project management tool)
6. Send welcome email with:
   - Payment link
   - Contract to sign
   - Project timeline
   - What to prepare
   - Team introductions
7. Schedule kickoff call
8. Add to "Active Clients" email list
9. Create Slack channel: #client-[company-name]
10. Set up weekly status update automation

---

### Workflow 6: Weekly Metrics Report

**Trigger:** Schedule (every Monday 9am)

**Steps:**
1. Schedule Trigger
2. Fetch data from multiple sources:
   - Umami: Website traffic, conversions
   - Chatwoot: Conversations, response time
   - Twenty CRM: New leads, pipeline value, deals closed
   - Google Calendar: Strategy calls booked
   - Uptime Kuma: Service uptime percentages
3. Calculate metrics:
   - Conversion rate (visitors → calls)
   - Lead quality (hot/warm/cold distribution)
   - Revenue pipeline
   - Average response time
4. Generate beautiful HTML email
5. Send to your email
6. Post summary to Slack #metrics channel
7. Update dashboard on website (/automation page)

---

## 📝 Next Steps

### Immediate (Before Production Deploy)

- [ ] **Configure Google Workspace** ($12/month)
  - [ ] Sign up for Business Standard
  - [ ] Add via6ai.com domain
  - [ ] Verify ownership (DNS TXT record)
  - [ ] Set up MX records
  - [ ] Configure SPF, DKIM, DMARC
  - [ ] Create hello@via6ai.com
  - [ ] Set up Calendar appointment scheduling
  - [ ] Get booking URL

- [ ] **Update Website with Calendar Link**
  - [ ] Replace Cal.com URLs in 3 components
  - [ ] Test booking flow end-to-end
  - [ ] Verify Google Meet link generation

- [ ] **Test Contact Form**
  - [ ] Verify n8n webhook endpoint works
  - [ ] Create simple n8n workflow (webhook → email)
  - [ ] Test form submission
  - [ ] Confirm email received

- [ ] **Create GitHub Repository**
  - [ ] Create repo: via6ai/via6-website
  - [ ] Push code
  - [ ] Add README
  - [ ] Add secrets for environment variables

- [ ] **Deploy to Coolify**
  - [ ] Connect GitHub repo
  - [ ] Configure environment variables
  - [ ] Set domain: via6ai.com
  - [ ] Deploy
  - [ ] Verify live site

- [ ] **Post-Deploy Verification**
  - [ ] Test all CTAs
  - [ ] Test booking flow
  - [ ] Test contact form
  - [ ] Check mobile view
  - [ ] Verify SSL certificate

### Week 1: Core Services

- [ ] **Deploy Uptime Kuma to Coolify** (move from test)
  - [ ] Add monitors for all services
  - [ ] Create public status page
  - [ ] Add badge to website footer

- [ ] **Deploy Chatwoot**
  - [ ] Set up via Coolify docker-compose
  - [ ] Configure inbox
  - [ ] Add widget to website
  - [ ] Create canned responses
  - [ ] Test chat functionality

- [ ] **Deploy Twenty CRM**
  - [ ] Set up via Coolify
  - [ ] Create workspace
  - [ ] Configure custom fields
  - [ ] Set up pipeline stages
  - [ ] Test API access

- [ ] **Add Analytics**
  - [ ] Deploy Umami OR add GA4
  - [ ] Track pageviews
  - [ ] Track button clicks
  - [ ] Track form submissions
  - [ ] Set up conversion goals

### Week 2: Automation Workflows

- [ ] **Create Lead Capture Workflow**
  - [ ] Website form → n8n → Twenty CRM
  - [ ] Email confirmation to customer
  - [ ] Slack notification for new leads
  - [ ] Test end-to-end

- [ ] **Create Chatwoot Integration**
  - [ ] Chatwoot webhook → n8n
  - [ ] Chat → CRM contact creation
  - [ ] Keyword detection (pricing, urgent)
  - [ ] Auto-tagging in CRM

- [ ] **Create Post-Booking Workflow**
  - [ ] Google Calendar → n8n
  - [ ] Calendar event → CRM update
  - [ ] Pre-call questionnaire email
  - [ ] Reminder sequence (24hr, 1hr)
  - [ ] Slack notification

- [ ] **Create Lead Scoring Workflow**
  - [ ] Behavior tracking
  - [ ] Score calculation
  - [ ] Auto-tagging (hot/warm/cold)
  - [ ] Priority alerts for hot leads

### Week 3: Business Operations

- [ ] **Deploy Invoice Ninja**
  - [ ] Set up via Coolify
  - [ ] Configure company branding
  - [ ] Add products/services
  - [ ] Connect Stripe
  - [ ] Create invoice templates

- [ ] **Create Client Onboarding Workflow**
  - [ ] CRM deal won → n8n
  - [ ] Generate invoice
  - [ ] Send welcome email
  - [ ] Schedule kickoff
  - [ ] Create project workspace

- [ ] **Set Up Monitoring & Alerts**
  - [ ] Uptime Kuma for all services
  - [ ] n8n workflow failure alerts
  - [ ] Form submission failures
  - [ ] Chat response time monitoring

### Week 4: Marketing & Growth

- [ ] **Create /automation Showcase Page**
  - [ ] Live metrics dashboard
  - [ ] Active workflows display
  - [ ] Uptime status embed
  - [ ] Real-time lead count
  - [ ] Hours saved counter

- [ ] **Set Up Weekly Reporting**
  - [ ] Automated metrics email
  - [ ] Slack dashboard updates
  - [ ] Performance tracking

- [ ] **SEO & Content**
  - [ ] Submit sitemap to Google
  - [ ] Create Google Business Profile
  - [ ] Write first blog post
  - [ ] Add workflow visual diagrams

- [ ] **Client Acquisition**
  - [ ] Test full funnel (visitor → booking → client)
  - [ ] Optimize conversion points
  - [ ] Create email nurture sequences
  - [ ] Set up remarketing (optional)

---

## 🎯 Success Metrics

### Website Performance
- **Page Load Time:** <2 seconds
- **Lighthouse Score:** >90 (all categories)
- **Mobile Usability:** 100%
- **SEO Score:** 100

### Lead Generation
- **Traffic Goal:** 1,000 visitors/month (Month 3)
- **Conversion Rate:** 3-5% (visitors → strategy calls)
- **Strategy Calls:** 30-50/month
- **Close Rate:** 20-30% (calls → clients)

### Automation Performance
- **Workflow Uptime:** >99.5%
- **Lead Response Time:** <2 minutes (via Chatwoot)
- **Email Open Rate:** >25%
- **Form Abandonment:** <10%

### Business Goals
- **First Client:** Within 2 weeks of launch
- **Monthly Revenue:** $30,000 CAD (by Month 3)
- **Client Testimonials:** 3-5 (by Month 2)
- **Google Reviews:** 5+ (by Month 3)

---

## 📚 Documentation References

### Existing Documentation
1. `README.md` - Project overview & quick start
2. `PROJECT_REVIEW.md` - Comprehensive project review (5/5 stars)
3. `DEPLOYMENT_CHECKLIST.md` - Pre-deploy verification
4. `COOLIFY_SETUP.md` - Coolify deployment guide
5. `N8N_WEBHOOK_SETUP.md` - Webhook configuration
6. `USE_CASE_REVISIONS_SUMMARY.md` - Technical accuracy audit
7. `NEW_WORKFLOWS_SUMMARY.md` - Workflow library documentation
8. `sample-n8n-workflows/README.md` - Workflow setup guide

### External Resources
- **Next.js Docs:** https://nextjs.org/docs
- **Tailwind CSS v4:** https://tailwindcss.com
- **shadcn/ui:** https://ui.shadcn.com
- **Coolify Docs:** https://coolify.io/docs
- **n8n Docs:** https://docs.n8n.io
- **Twenty CRM:** https://twenty.com/developers
- **Chatwoot API:** https://www.chatwoot.com/docs/product/channels/api/client-apis

---

## 🤝 Contributing

This is a private project for Via6 AI Labs. All development is internal.

**For Claude/AI Assistants:**
- Follow Next.js 14 best practices (App Router, Server Components)
- Maintain TypeScript strict mode
- Keep components focused and reusable
- Document complex logic with comments
- Test all integrations end-to-end
- Update this CLAUDE.md when architecture changes

---

## 📄 License

Proprietary - Via6 AI Labs Inc. All rights reserved.

---

**Last Updated:** 2026-01-24
**Next Review:** After production deployment
**Maintained By:** Claude Sonnet 4.5 + Via6 AI Labs Team
