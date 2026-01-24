# Via6 Website Deployment Checklist

## Pre-Deployment Checklist

### 1. Environment Setup
- [ ] Set up n8n webhook (see N8N_WEBHOOK_SETUP.md)
- [ ] Test webhook with curl/Postman
- [ ] Set up Cal.com account or self-hosted instance
- [ ] Update Cal.com URLs if using custom domain

### 2. Code Review
- [x] .gitignore added
- [x] Sitemap.ts created
- [x] Robots.txt route created
- [x] Schema markup added
- [x] Contact form connected to n8n
- [x] FAQ section added
- [x] Web development section added
- [ ] All components tested locally

### 3. SEO Setup
- [x] Meta descriptions updated
- [x] Open Graph images configured
- [x] Schema markup (Organization, LocalBusiness, Service)
- [x] Sitemap configured
- [x] Robots.txt configured
- [ ] Google Search Console verified
- [ ] Google Business Profile created
- [ ] Submit sitemap to Google

### 4. Content Review
- [x] Founding client discount mentioned
- [x] Money-back guarantee added
- [x] Canadian pricing emphasized
- [x] Web development showcased
- [x] FAQ added
- [ ] Replace placeholder Cal.com URL (if needed)
- [ ] Update GitHub/LinkedIn links

---

## Deployment Steps

### Option 1: Deploy to Coolify (Recommended)

1. **Push to GitHub:**
   ```bash
   cd /root/via6-website
   git add .
   git commit -m "Production ready: SEO, web dev section, FAQ, n8n webhook"
   git push origin main
   ```

2. **In Coolify:**
   - New Application → GitHub
   - Repository: halimabdi/via6-website
   - Branch: main
   - Build Pack: Dockerfile (auto-detected)
   - Domain: via6ai.com, www.via6ai.com
   - Port: 3000
   - SSL: Enable (Let's Encrypt automatic)

3. **Add Environment Variables:**
   ```
   NEXT_PUBLIC_N8N_WEBHOOK=https://n8n.lmiatracker.com/webhook/via6-contact
   NEXT_PUBLIC_CAL_URL=https://cal.com/via6ai/strategy-call
   NEXT_PUBLIC_SITE_URL=https://via6ai.com
   ```

4. **Deploy!**

### Option 2: Test Locally First

```bash
cd /root/via6-website

# Install dependencies
npm install

# Build
npm run build

# Test production build
npm start

# Visit http://localhost:3000
```

---

## DNS Configuration

Point your domain to Coolify server:

```
Type: A
Name: @
Value: YOUR_SERVER_IP
TTL: 300

Type: A
Name: www
Value: YOUR_SERVER_IP
TTL: 300
```

**For Cal.com subdomain (if self-hosting):**
```
Type: A
Name: cal
Value: YOUR_SERVER_IP
TTL: 300
```

---

## Post-Deployment Checklist

### 1. Test Website

- [ ] Visit https://via6ai.com
- [ ] Test all navigation links
- [ ] Submit contact form (check n8n receives it)
- [ ] Click Cal.com booking button
- [ ] Test on mobile device
- [ ] Test on different browsers (Chrome, Firefox, Safari)
- [ ] Check page load speed (Google PageSpeed Insights)

### 2. SEO Setup

**Google Search Console:**
1. Go to search.google.com/search-console
2. Add property: via6ai.com
3. Verify ownership:
   - DNS TXT record, OR
   - HTML file upload, OR
   - Google Analytics (if installed)
4. Submit sitemap: https://via6ai.com/sitemap.xml
5. Request indexing for homepage

**Google Business Profile:**
1. Go to business.google.com
2. Add Business:
   - Name: Via6 AI Labs Inc.
   - Category: Software Company
   - Address: Toronto, ON (or specify)
   - Website: https://via6ai.com
3. Verify (phone/postcard)
4. Add photos: logo, team, office
5. Add business hours
6. Add description

**Schema Validation:**
1. Go to search.google.com/test/rich-results
2. Enter: https://via6ai.com
3. Verify schema markup is detected
4. Fix any errors

### 3. Analytics Setup (Optional)

**Google Analytics 4:**
1. Create GA4 property
2. Get measurement ID
3. Add to website (via environment variable)
4. Verify tracking

**Plausible Analytics (Privacy-Friendly Alternative):**
1. Sign up at plausible.io
2. Add tracking script
3. Monitor traffic without cookies

### 4. Monitoring Setup

**Uptime Monitoring:**
- UptimeRobot (free): uptimerobot.com
- Pingdom
- Betterstack

**Error Monitoring (Optional):**
- Sentry.io for error tracking
- LogRocket for session replay

### 5. Marketing Setup

**Email List (for lead magnet later):**
- ConvertKit
- Mailchimp
- Buttondown

**Social Media:**
- [ ] Create LinkedIn company page
- [ ] Create Twitter/X account
- [ ] Link social profiles on website

### 6. Directory Listings

Submit to these directories for backlinks + SEO:

**Free Directories:**
- [ ] Clutch.co
- [ ] GoodFirms
- [ ] Google Business Profile
- [ ] Yelp for Business
- [ ] Yellow Pages Canada
- [ ] Crunchbase
- [ ] Product Hunt (for tools/products)

**Niche Directories:**
- [ ] n8n Community Showcase
- [ ] Indie Hackers
- [ ] Built with Next.js showcase

---

## Week 1 After Launch

### Content Creation

**Blog Posts (SEO + Authority):**
1. "n8n vs Zapier: The Real Cost Comparison"
2. "Top 5 Workflows Every Toronto Business Needs"
3. "How to Choose an Automation Agency"
4. "Building Your First n8n Workflow"
5. "Next.js 14 Performance Optimization Guide"

**Lead Magnet:**
- Create "10 Workflows That Save 20+ Hours/Week" PDF
- Add download form to website
- Connect to email list

**Sample Portfolio:**
- Build 3 example workflows
- Document with screenshots
- Add to website as case studies

### Outreach

**Local Toronto:**
- Join Toronto tech Slack groups
- Attend tech meetups (MeetUp.com)
- Post on r/toronto, r/TorontoJobs (if allowed)

**Online:**
- Post on Indie Hackers
- Share on LinkedIn
- Answer automation questions on Reddit/X

### Paid Ads (Optional)

**Google Ads:**
- Target: "n8n automation Toronto", "workflow automation"
- Budget: $20-50/day
- Landing page: Homepage or service page

**LinkedIn Ads:**
- Target: Toronto businesses, decision makers
- Campaign: Promote free strategy call

---

## Long-Term (Month 1-3)

- [ ] Publish 2-4 blog posts monthly
- [ ] Get first 3-5 clients
- [ ] Create real case studies
- [ ] Start collecting testimonials
- [ ] Build email list (100+ subscribers)
- [ ] Rank for "n8n automation Toronto" (SEO)
- [ ] Get featured in local press/podcasts
- [ ] Contribute to n8n open source (GitHub)

---

## Troubleshooting

**Website not loading?**
- Check Coolify deployment logs
- Verify DNS records propagated (nslookup via6ai.com)
- Check SSL certificate issued

**Contact form not working?**
- Check browser console for errors
- Test n8n webhook directly with curl
- Check CORS settings

**SEO not working?**
- Be patient (indexing takes 1-2 weeks)
- Submit sitemap to Google Search Console
- Check robots.txt allows crawling
- Verify schema markup with Google test tool

---

## Files Reference

**Created/Modified Files:**
- `.gitignore` - Prevents committing sensitive files
- `app/sitemap.ts` - XML sitemap for search engines
- `app/robots.txt/route.ts` - Crawler instructions
- `components/schema-markup.tsx` - Structured data
- `components/faq-section.tsx` - FAQ section
- `components/web-development-section.tsx` - Web dev showcase
- `components/contact-section.tsx` - Updated with n8n webhook
- `app/layout.tsx` - Added schema markup + updated meta
- `app/page.tsx` - Added new sections
- `.env.example` - Environment variable template

**Documentation:**
- `N8N_WEBHOOK_SETUP.md` - Webhook configuration guide
- `DEPLOYMENT_CHECKLIST.md` - This file
- `VIA6_WEBSITE_REVIEW_AND_IMPROVEMENTS.md` - Complete analysis

---

## Next Steps

1. **This Week:** Deploy, set up SEO basics
2. **Week 2:** Create content, build portfolio
3. **Week 3:** Start outreach, get first clients
4. **Month 2:** Scale with ads, testimonials, case studies

Good luck! 🚀

Questions? hello@via6ai.com
