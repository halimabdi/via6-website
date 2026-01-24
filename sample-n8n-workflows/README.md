# Sample n8n Workflows - Via6 AI Labs

This folder contains sample n8n workflow JSON files that demonstrate the automation solutions described on the Via6 AI Labs website.

## 📋 Workflows Included

### 1. Lead Capture & Distribution (Real Estate)
**File:** `01-lead-capture-distribution.json`

**What it does:**
- Captures new leads from website/form via webhook
- Creates contact in HubSpot CRM
- Sends instant SMS to lead within 60 seconds
- Notifies team via Slack
- Sends Telegram alert to agent

**Required Setup:**
- HubSpot account (or substitute with your CRM)
- Twilio account for SMS
- Slack workspace
- Telegram bot token

**ROI:** Respond 95% faster, convert 3x more leads

---

### 2. Document Collection Bot (Immigration Consultants)
**File:** `02-document-collection-bot.json`

**What it does:**
- Runs daily at 9am via schedule trigger
- Checks Google Sheets for active clients
- Calculates days since retainer signed
- Identifies missing documents
- Sends email reminders (Day 1-3) or Telegram alerts (Day 3+)
- Updates tracking sheet with last reminder date

**Required Setup:**
- Google Sheets with client tracking data
- Gmail/SMTP for emails
- Telegram bot for urgent reminders
- Google Drive folders for document uploads

**Additional Workflow Needed:** Initial retainer trigger workflow to create client records

**ROI:** 90% on-time document collection

---

### 3. One-Click Client Status Broadcasting (Immigration Consultants)
**File:** `03-client-status-broadcasting.json`

**What it does:**
- Receives status update via webhook
- Logs change in Google Sheets with timestamp
- Updates HubSpot CRM contact
- Sends personalized email to client
- Posts update to Slack team channel
- Updates client portal via API

**Required Setup:**
- Google Sheets for status log
- HubSpot or similar CRM
- Gmail/SMTP for emails
- Slack workspace
- Client portal with API (optional)

**ROI:** Update 50+ clients in 30 seconds

---

### 4. Smart Expense Categorization Engine (Accounting Firms)
**File:** `04-expense-categorization-ai.json`

**What it does:**
- Receives receipt image via webhook
- AI extracts vendor, amount, date, category from image
- Applies custom business rules and categorization logic
- Flags outliers (>$500) for manual review
- Auto-posts approved expenses to QuickBooks
- Alerts accountant via Slack for flagged items

**Required Setup:**
- OpenAI API for image analysis
- QuickBooks account
- Google Sheets for flagged expense tracking
- Slack workspace

**ROI:** 90% reduction in manual data entry time

---

### 5. Emergency Dispatch Optimizer (HVAC/Plumbing/Electrical)
**File:** `05-emergency-dispatch-optimizer.json`

**What it does:**
- Receives emergency call details via webhook
- Checks on-call schedule in Google Sheets
- Finds available tech based on day/time
- Sends SMS to tech with job details
- Creates ticket in ServiceM8 or field service software
- Texts customer with confirmation and ETA
- Logs all emergency calls for tracking

**Required Setup:**
- Google Sheets with on-call schedule
- Twilio for SMS
- ServiceM8 or similar field service software
- Slack for dispatch alerts

**ROI:** Sub-15-minute emergency response time

---

### 6. Maintenance Request Triage (Property Management)
**File:** `06-maintenance-request-triage.json`

**What it does:**
- Tenant submits maintenance request via webhook
- AI classifies urgency (emergency/urgent/routine)
- Emergency: instant SMS to on-call manager
- Matches issue to preferred vendor by category
- Creates work order in Buildium/AppFolio
- Emails vendor with assignment details
- Emails tenant with confirmation and timeline
- Posts to Slack for team visibility

**Required Setup:**
- OpenAI API for urgency classification
- Google Sheets with vendor list
- Buildium/AppFolio property management software
- Twilio for emergency SMS
- Gmail/SMTP for emails

**ROI:** 2-hour response time for emergencies, 100% tenant notification

---

### 7. Customer Win-Back Campaign (E-commerce)
**File:** `07-customer-winback-campaign.json`

**What it does:**
- Daily scan for customers who haven't purchased in 60+ days
- Segments by purchase history and total spend
- Calculates personalized discount (10-20% based on tier)
- AI generates custom win-back email copy
- Recommends products from last purchase category
- Sends beautiful HTML email with discount code
- Tracks campaign in Google Sheets
- After 7 days no response: sends SMS with higher discount

**Required Setup:**
- Shopify store
- OpenAI API for email generation
- Gmail/SMTP for emails
- Twilio for SMS follow-up
- Google Sheets for campaign tracking

**ROI:** 15-25% win-back rate, average $150 recovered per customer

---

### 8. Insurance Verification Pre-Appointment (Healthcare)
**File:** `08-insurance-verification-automation.json`

**What it does:**
- New appointment booked triggers workflow
- Checks if insurance already verified in patient database
- Calls insurance eligibility API (Availity or similar)
- Parses copay, deductible, auth requirements
- If inactive: alerts staff via Slack for manual follow-up
- If active: sends patient SMS with copay amount
- If pre-auth required: alerts billing team
- Updates patient record with verification status

**Required Setup:**
- Google Sheets or practice management software
- Insurance eligibility API (Availity, Change Healthcare)
- Twilio for patient SMS
- Slack for staff alerts

**ROI:** 80% reduction in appointment-day insurance issues, $50/hour staff time saved

---

## 🚀 How to Import These Workflows

1. **Download the JSON file** you want to use
2. **Open your n8n instance** (cloud or self-hosted)
3. **Click "+" to create new workflow**
4. **Click the 3 dots menu** → "Import from File"
5. **Select the downloaded JSON file**
6. **Configure credentials** for each node (HubSpot, Twilio, Slack, etc.)
7. **Update environment variables** (phone numbers, sheet IDs, etc.)
8. **Test the workflow** with sample data
9. **Activate** when ready!

---

## 🔧 Environment Variables to Set

Create these environment variables in your n8n instance:

```bash
# Common
FROM_EMAIL=your-email@company.com
PHONE_NUMBER=+1-416-XXX-XXXX

# Twilio
TWILIO_PHONE=+1-XXX-XXX-XXXX

# Telegram
TELEGRAM_CHAT_ID=your-chat-id
TELEGRAM_BOT_TOKEN=your-bot-token

# Slack
SLACK_CHANNEL=#notifications

# Google Sheets
GOOGLE_SHEET_ID=your-sheet-id

# Client Portal (optional)
CLIENT_PORTAL_URL=https://portal.yourcompany.com

# Healthcare (for insurance verification)
PRACTICE_NPI=your-npi-number
PRACTICE_PHONE=+1-XXX-XXX-XXXX
ON_CALL_MANAGER_PHONE=+1-XXX-XXX-XXXX

# E-commerce
STORE_URL=https://yourstore.com

# Slack Channels (multiple workflows)
SLACK_ACCOUNTING_CHANNEL=#accounting
SLACK_DISPATCH_CHANNEL=#dispatch
SLACK_MAINTENANCE_CHANNEL=#maintenance
SLACK_BILLING_CHANNEL=#billing
SLACK_FRONT_DESK_CHANNEL=#front-desk
```

---

## 📝 Required Credentials

You'll need to set up these credential types in n8n:

**Essential (used by most workflows):**
- **Google Sheets OAuth2** (for data tracking)
- **Gmail SMTP** or **Generic SMTP** (for emails)
- **Slack API** (for team notifications)
- **Twilio API** (for SMS)

**CRM & Business Software:**
- **HubSpot API** (or your CRM alternative)
- **QuickBooks OAuth2** (for accounting workflows)
- **Shopify API** (for e-commerce workflows)
- **Buildium API** or **AppFolio API** (for property management)
- **ServiceM8 API** (for field service workflows)

**AI & External APIs:**
- **OpenAI API** (for AI-powered workflows)
- **Availity API** or **Change Healthcare** (for insurance verification)

**Optional:**
- **Telegram Bot** (for Telegram notifications)
- **HTTP Header Auth** (for client portal API)

---

## ⚠️ Important Notes

### **These are TEMPLATES, not production-ready workflows**

Before using in production:

1. **Add error handling** - Use Error Trigger nodes to catch failures
2. **Add rate limiting** - Prevent API abuse with throttle nodes
3. **Validate data** - Add IF nodes to check for required fields
4. **Test thoroughly** - Run with test data before going live
5. **Monitor execution** - Set up alerts for failed workflows
6. **Secure sensitive data** - Use environment variables, never hardcode credentials

### **API Limitations**

- **Government portals** (IRCC, Express Entry) have NO APIs - cannot be automated directly
- **MLS systems** vary by region - most don't have public APIs
- **Facebook Marketplace** has no official API for posting
- **WhatsApp** requires Business API account (not regular WhatsApp)

### **Database Requirements**

For Document Collection Bot and similar multi-day workflows:
- Use **Google Sheets** as simple database (free, easy)
- Or use **Airtable** for more features
- Or use **PostgreSQL/MySQL** for production scale

---

## 🎯 Use Case Accuracy

These workflows reflect **ACCURATE** implementations of the use cases on the Via6 AI Labs website.

**We have removed misleading claims like:**
- ❌ "Auto-fill government forms" → ✅ "Generate pre-filled PDFs"
- ❌ "Check IRCC system daily" → ✅ "Manual status update → auto-broadcast"
- ❌ "Post to MLS automatically" → ✅ "Generate MLS-ready export file"

**All workflows use:**
- ✅ Public APIs and webhooks
- ✅ Established n8n nodes
- ✅ Proven integration patterns
- ✅ Realistic automation capabilities

---

## 💡 Customization Ideas

**Extend these workflows by:**
- Adding AI scoring with OpenAI node
- Enriching leads with Clearbit/Hunter.io
- Creating custom dashboards in Google Sheets
- Integrating with your specific CRM
- Adding SMS confirmation workflows
- Building client-facing forms with Typeform/JotForm

---

## 📞 Need Help?

**Via6 AI Labs** can help you:
- Customize these workflows for your business
- Set up n8n (cloud or self-hosted)
- Build completely custom automations
- Integrate with your existing tools
- Train your team on n8n

**Book a free strategy call:** https://cal.com/via6ai/strategy-call

---

## 📜 License

These workflow templates are provided as examples and learning resources.
Feel free to use and modify them for your business.

**Credit appreciated but not required.**

Made with ❤️ by **Via6 AI Labs** - Toronto, Canada 🇨🇦
