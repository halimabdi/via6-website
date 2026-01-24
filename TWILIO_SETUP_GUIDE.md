# Twilio Integration Guide - Via6 AI Labs

**Purpose:** Business phone number with SMS, voice calls, voicemail transcription, and WhatsApp automation
**Cost:** ~$2-5 USD/month + usage fees
**Integration:** n8n workflows for full automation

---

## 📞 What You'll Get with Twilio

### Phone Capabilities
1. **Business Phone Number** - Toronto area code (416, 647, 437)
2. **SMS Messaging** - Send/receive automated text messages
3. **Voice Calls** - Receive calls, forward, or handle via IVR
4. **Voicemail Transcription** - Auto-convert voicemails to text
5. **Call Recording** - Record calls with transcription
6. **WhatsApp Business** - Automated WhatsApp messages
7. **Phone Number Verification** - Verify customer phone numbers

### Automation Use Cases
- **Lead Capture**: Text number → Auto-response + CRM entry
- **Booking Confirmations**: Strategy call booked → SMS reminder
- **Emergency Support**: Urgent texts trigger immediate alerts
- **Voicemail to Email**: Missed call → Transcription to email
- **Client Updates**: Status changes → Auto SMS notification
- **2FA/Verification**: Send verification codes
- **Call Routing**: Smart IVR → Route to you or voicemail

---

## 💰 Pricing Breakdown

### Monthly Costs (USD)
```
Phone Number (Toronto): $1.00/month
SMS Outbound: $0.0079 per message
SMS Inbound: $0.0079 per message
Voice Calls Inbound: $0.013 per minute
Voice Calls Outbound: $0.013 per minute
Voicemail Transcription: $0.05 per minute
WhatsApp Messages: $0.005-0.02 per message

Estimated Monthly:
- Phone number: $1
- ~100 SMS: $1.50
- ~50 min calls: $0.65
- ~10 voicemail transcriptions: $0.50
- Buffer: $1

TOTAL: ~$5 USD/month
```

### Compared to Business Phone Services
- **RingCentral**: $20+/month
- **Grasshopper**: $26+/month
- **Google Voice Business**: $10+/month
- **Twilio**: $5/month with full automation

**Savings: $5-20/month**

---

## 🚀 Setup Guide

### Step 1: Create Twilio Account (10 min)

```bash
✅ Sign up:
1. Go to: https://www.twilio.com/try-twilio
2. Sign up with email
3. Verify your email
4. Verify your personal phone (for account security)
5. Choose: "Products & Use Cases"
   - Select: Programmable Messaging + Programmable Voice
   - Use case: "Business automation"
```

### Step 2: Buy Canadian Phone Number (5 min)

```bash
✅ In Twilio Console:
1. Phone Numbers → Buy a Number
2. Country: Canada
3. Area code: 416 (Toronto) or 647 (Toronto) or 437 (Toronto)
4. Capabilities:
   ☑ Voice
   ☑ SMS
   ☑ MMS (optional - for images)
5. Search → Select number
6. Buy Number ($1/month)

✅ Note your number: +1 (416) XXX-XXXX
```

### Step 3: Configure Phone Number for n8n (10 min)

```bash
✅ In Twilio Console:
1. Phone Numbers → Manage → Active Numbers
2. Click your new number
3. Configure:

Voice & Fax:
  - Accept Incoming: Voice Calls
  - Configure with: Webhooks, TwiML Bins, Functions, etc.
  - A CALL COMES IN: Webhook
  - URL: https://n8n.lmiatracker.com/webhook/twilio-voice
  - HTTP: POST

Messaging:
  - Configure with: Webhooks, TwiML Bins, Functions, etc.
  - A MESSAGE COMES IN: Webhook
  - URL: https://n8n.lmiatracker.com/webhook/twilio-sms
  - HTTP: POST

4. Save
```

### Step 4: Get API Credentials (5 min)

```bash
✅ In Twilio Console:
1. Dashboard → Account Info
2. Copy:
   - Account SID: ACxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
   - Auth Token: [click to reveal]

✅ Save these securely:
TWILIO_ACCOUNT_SID=ACxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
TWILIO_AUTH_TOKEN=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
TWILIO_PHONE_NUMBER=+14161234567

⚠️ IMPORTANT: Never commit these to GitHub!
Add to .env.local (already in .gitignore)
```

---

## 🤖 n8n Workflow Integrations

### Workflow 1: SMS Lead Capture
**Trigger:** Someone texts your Twilio number

**Flow:**
```
Incoming SMS → n8n Webhook
  ↓
Extract: Phone, Message, Timestamp
  ↓
Check if contact exists in Twenty CRM
  ↓
Create/Update contact
  ↓
Tag: "sms-lead"
  ↓
Send auto-response: "Thanks! We'll call you within 2 hours. Book instantly: [calendar link]"
  ↓
Slack notification: "📱 New SMS lead from [phone]"
  ↓
If message contains "urgent" → Call your phone immediately
```

**n8n Nodes:**
1. Webhook Trigger (Twilio SMS)
2. Function (parse Twilio data)
3. HTTP Request (Twenty CRM - check contact)
4. IF (contact exists?)
5. HTTP Request (create/update)
6. Set (prepare response message)
7. Twilio (send SMS response)
8. Slack (notification)
9. IF (contains "urgent"?)
10. Twilio (make outbound call to you)

**Setup in n8n:**
```javascript
// Webhook node receives Twilio data:
{
  "From": "+14161234567",
  "Body": "I need help with automation",
  "MessageSid": "SMxxxxxxxxxxxxxxxx",
  "To": "+14167654321"
}

// Auto-response via Twilio node:
{
  "to": "{{$json.From}}",
  "from": "{{$env.TWILIO_PHONE_NUMBER}}",
  "body": "Thanks for reaching out! We'll call you within 2 hours. Or book a free strategy call instantly: https://calendar.google.com/..."
}
```

---

### Workflow 2: Voicemail Transcription
**Trigger:** Incoming call to Twilio number

**Flow:**
```
Incoming Call → n8n Webhook
  ↓
Check: Are you available? (check calendar, work hours)
  ↓
IF Available:
  - Forward call to your mobile

IF Not Available:
  - Play greeting: "Thanks for calling Via6 AI Labs. Please leave a message."
  - Record voicemail
  - Transcribe to text (Twilio Transcription API)
  - Send email with transcription
  - Send SMS to you: "New voicemail from [caller]"
  - Create contact in CRM
  - Tag: "voicemail-lead"
```

**TwiML for Voicemail:**
```xml
<?xml version="1.0" encoding="UTF-8"?>
<Response>
  <Say voice="alice">
    Thank you for calling Via6 AI Labs.
    We're helping another client right now.
    Please leave a detailed message and we'll call you back within 2 hours.
  </Say>
  <Record
    action="https://n8n.lmiatracker.com/webhook/twilio-recording"
    method="POST"
    transcribe="true"
    transcribeCallback="https://n8n.lmiatracker.com/webhook/twilio-transcription"
    maxLength="120"
    playBeep="true"
  />
  <Say>We did not receive a recording. Goodbye.</Say>
</Response>
```

**n8n Nodes:**
1. Webhook (incoming call)
2. Google Calendar (check availability)
3. IF (available now?)
4. Return TwiML (forward to mobile)
5. OR Return TwiML (record voicemail)
6. Webhook (recording callback)
7. Webhook (transcription callback)
8. Gmail (send transcription email)
9. Twilio SMS (notify you)
10. HTTP Request (create CRM contact)

---

### Workflow 3: Booking Confirmation SMS
**Trigger:** Google Calendar event created (strategy call booked)

**Flow:**
```
Calendar Event Created → n8n
  ↓
Extract: Customer name, phone, booking time
  ↓
Send SMS: "Hi [Name]! Your strategy call with Via6 AI Labs is confirmed for [Date] at [Time]. Google Meet link: [URL]. Looking forward to it! - Via6 Team"
  ↓
24 hours before: Send reminder SMS
  ↓
1 hour before: Send final reminder SMS
```

**n8n Nodes:**
1. Google Calendar Trigger
2. Function (extract phone from booking form)
3. Twilio SMS (confirmation)
4. Wait (23 hours)
5. Twilio SMS (24hr reminder)
6. Wait (23 hours)
7. Twilio SMS (1hr reminder)

---

### Workflow 4: Emergency Support Hotline
**Trigger:** SMS or call with keyword "urgent" or "emergency"

**Flow:**
```
Incoming SMS/Call with "urgent"
  ↓
Immediately call your mobile phone
  ↓
Play: "You have an urgent customer request. Press 1 to connect, 2 for voicemail."
  ↓
IF Press 1: Connect to customer
IF Press 2: Route to voicemail
  ↓
Log in CRM as "urgent-support"
  ↓
Send Slack with @channel ping
```

**Use Case:**
- Client's automation is down
- Emergency technical issue
- High-value prospect needs immediate help

---

### Workflow 5: Client Status Updates via SMS
**Trigger:** CRM deal stage changes OR project milestone completed

**Flow:**
```
CRM Deal Status → "In Progress"
  ↓
Send SMS: "Good news! Your automation project has started. We'll send you updates every Friday. Questions? Reply to this number."
  ↓
Every Friday at 5pm:
  - Check project status
  - Send update SMS
  ↓
Project Complete:
  - Send SMS: "Your automation is live! Login: [link]. We'll call you Monday to review. Thank you!"
```

**Client Touchpoints:**
- Project started → SMS
- Week 1 update → SMS
- Week 2 update → SMS
- Project completed → SMS
- Follow-up → Call

---

### Workflow 6: SMS Lead Qualification
**Trigger:** New SMS conversation

**Flow:**
```
Person texts: "I'm interested in automation"
  ↓
Auto-respond: "Great! Quick questions to help us prepare:
1. What's your industry?
2. What takes the most time?
3. When's a good time to call?"
  ↓
Store responses in CRM
  ↓
Calculate lead score
  ↓
If hot lead (score >20):
  - Immediately notify you
  - Send priority booking link

If warm lead:
  - Schedule follow-up call

If cold lead:
  - Add to nurture sequence
```

---

### Workflow 7: WhatsApp Automation (Advanced)
**Trigger:** WhatsApp message to Twilio number

**Setup Required:**
1. Request WhatsApp access (Twilio sandbox for testing)
2. Get approved for WhatsApp Business API
3. Configure WhatsApp webhook

**Flow:**
```
WhatsApp Message → n8n
  ↓
Auto-respond with interactive buttons:
  [ Book Call ] [ View Pricing ] [ Chat Live ]
  ↓
Track button clicks → CRM
  ↓
Route to appropriate workflow
```

**WhatsApp Benefits:**
- Higher open rates (98% vs 20% email)
- Rich media (images, videos, PDFs)
- Two-way conversations
- International reach
- Popular in many countries

---

## 🔧 Advanced Features

### Call Recording & Transcription

**Use Case:** Record strategy calls for:
- Note-taking automation
- Client reference
- Training material
- Quality assurance

**Setup:**
```xml
<Response>
  <Say>This call may be recorded for quality assurance.</Say>
  <Dial record="record-from-answer-dual">
    <Number>+1234567890</Number>
  </Dial>
</Response>
```

**n8n Integration:**
1. Twilio sends recording URL to webhook
2. Download audio file
3. Transcribe with Whisper AI or Twilio transcription
4. Store in Google Drive
5. Send summary email
6. Add notes to CRM

---

### Interactive Voice Response (IVR)

**Use Case:** Route calls based on customer input

**Example Menu:**
```xml
<Response>
  <Gather numDigits="1" action="/webhook/ivr-response">
    <Say>
      Welcome to Via6 AI Labs.
      Press 1 for sales.
      Press 2 for support.
      Press 3 to schedule a call.
      Press 0 to leave a voicemail.
    </Say>
  </Gather>
</Response>
```

**n8n Workflow:**
1. Webhook receives digit pressed
2. Route based on input:
   - 1 → Forward to your phone
   - 2 → Check if support ticket exists, route accordingly
   - 3 → SMS calendar link
   - 0 → Voicemail

---

### SMS Campaigns (Careful - Permission Required!)

**Legal Requirements:**
- ✅ Only text people who opted in
- ✅ Include opt-out instructions
- ✅ Respect do-not-call lists
- ⚠️ Canadian Anti-Spam Law (CASL) compliance

**Use Case:** Send booking reminders, updates, promotions (to opted-in contacts)

**Example:**
```
Send to: Contacts tagged "sms-opt-in"
Message: "Hi [Name]! Quick reminder: Your automation project kicks off Monday. Excited to work with you! Reply STOP to unsubscribe."
```

---

### Two-Factor Authentication (2FA)

**Use Case:** Verify customer phone numbers or send login codes

**Flow:**
```
User signs up → Request phone verification
  ↓
Generate 6-digit code
  ↓
Send SMS: "Your Via6 AI Labs verification code: 123456"
  ↓
User enters code
  ↓
Verify & activate account
```

**n8n Implementation:**
```javascript
// Generate code
const code = Math.floor(100000 + Math.random() * 900000);

// Store in database with expiry (5 minutes)
// Send via Twilio
// Verify when user submits
```

---

## 📊 Twilio Dashboard & Monitoring

### Key Metrics to Track

**In Twilio Console:**
- Total calls (inbound/outbound)
- Call duration
- SMS sent/received
- Failed messages
- Cost per day/week/month

**In n8n:**
- Response time to SMS
- Voicemail → Follow-up time
- Call abandonment rate
- SMS opt-out rate

**Add to Uptime Kuma:**
- Monitor: Twilio webhook endpoints
- Alert: If webhook fails
- Track: 99.9% uptime goal

---

## 🔐 Security Best Practices

### Protect Your Credentials

```bash
✅ DO:
- Store in .env.local (not committed to Git)
- Use Coolify secrets for production
- Rotate auth token every 90 days
- Enable two-factor auth on Twilio account
- Use subaccounts for different environments (dev/prod)

❌ DON'T:
- Hardcode credentials in code
- Share auth token publicly
- Use same credentials for testing and production
- Disable webhook validation
```

### Validate Twilio Webhooks

**Prevent fake requests:**

```javascript
// n8n Function node
const crypto = require('crypto');

const twilioSignature = $headers['x-twilio-signature'];
const url = $env.N8N_WEBHOOK_URL;
const params = $json;

// Validate signature
const isValid = twilio.validateRequest(
  $env.TWILIO_AUTH_TOKEN,
  twilioSignature,
  url,
  params
);

if (!isValid) {
  throw new Error('Invalid Twilio signature');
}

return { validated: true };
```

---

## 📱 Add to Via6ai Website

### Display Phone Number

**Update components/contact-section.tsx:**

```tsx
<div className="flex items-center gap-3">
  <Phone className="h-5 w-5 text-teal-400" />
  <div>
    <p className="text-sm text-gray-400">Call or Text</p>
    <a
      href="tel:+14161234567"
      className="text-lg font-medium hover:text-teal-400 transition-colors"
    >
      +1 (416) 123-4567
    </a>
  </div>
</div>

<p className="text-sm text-gray-400 mt-2">
  💬 Text us for instant response (replies within minutes)
</p>
```

**Update components/footer.tsx:**

```tsx
<div className="space-y-2">
  <h4 className="font-semibold">Contact</h4>
  <div className="space-y-1 text-sm text-gray-400">
    <p>📧 hello@via6ai.com</p>
    <p>📱 +1 (416) 123-4567</p>
    <p>📍 Toronto, ON, Canada</p>
  </div>
</div>
```

---

## 🎯 Use Cases for Via6ai

### 1. **Lead Capture Enhancement**
**Before:** Contact form only
**After:** Contact form + phone + SMS + chat
**Benefit:** Capture leads who prefer calling/texting (30-40% of people)

### 2. **Booking Confirmations**
**Before:** Calendar email only
**After:** Email + SMS confirmation + reminders
**Benefit:** Reduce no-shows by 50%

### 3. **Emergency Support**
**Before:** No urgent channel
**After:** Text "URGENT" → immediate response
**Benefit:** High-value clients get immediate help

### 4. **Client Communication**
**Before:** Email updates only
**After:** SMS updates for time-sensitive info
**Benefit:** 98% open rate vs 20% email

### 5. **Showcase Automation**
**Add to /automation page:**
```
📞 Phone Automation Active
- Auto-responses: 47 messages today
- Voicemails transcribed: 3 this week
- Avg response time: <2 minutes
- Calls routed: 12 this month
```

---

## 🚀 Implementation Timeline

### Week 1: Setup
- [ ] Create Twilio account
- [ ] Buy Toronto phone number
- [ ] Configure webhooks
- [ ] Test SMS send/receive
- [ ] Add phone to website
- [ ] Update business cards, email signature

### Week 2: Basic Automation
- [ ] SMS lead capture workflow
- [ ] Auto-response workflow
- [ ] Booking confirmation SMS
- [ ] Voicemail transcription
- [ ] Test all workflows

### Week 3: Advanced Features
- [ ] Call forwarding with IVR
- [ ] Recording + transcription
- [ ] Emergency hotline
- [ ] Client status updates
- [ ] Integration with CRM

### Week 4: Optimization
- [ ] Analytics dashboard
- [ ] Response time tracking
- [ ] A/B test auto-responses
- [ ] Add to public automation showcase
- [ ] Monitor costs

---

## 💡 Pro Tips

### Optimize SMS Costs

**Best Practices:**
```
✅ DO:
- Use SMS for time-sensitive info only
- Keep messages <160 characters (1 SMS unit)
- Use URL shorteners (bit.ly, etc.)
- Consolidate multiple updates into one message
- Use email for long-form content

Example Good SMS:
"Hi John! Your automation is live. Login: bit.ly/via6-login Questions? Call us!"
(98 characters = 1 SMS unit = $0.0079)

Example Bad SMS:
"Hello John, this is Via6 AI Labs. Your automation project has been completed and deployed to production. You can now login at https://very-long-url.com/client-portal/login?token=xyz123. If you have any questions or concerns, please don't hesitate to reach out to us..."
(280 characters = 2 SMS units = $0.0158)
```

### Improve Response Rates

**SMS Best Practices:**
- Personalize with name
- Keep it conversational
- Include clear CTA
- Send during business hours (9am-6pm EST)
- Avoid weekends unless urgent
- Test different message formats

**Response Time Goals:**
- Automated response: <30 seconds
- Human follow-up: <2 hours during business hours
- Emergency: <5 minutes

### Compliance Checklist

```
✅ CASL Compliance (Canada):
- [ ] Only text opted-in contacts
- [ ] Include company name in messages
- [ ] Provide clear opt-out instructions
- [ ] Honor opt-outs within 10 days
- [ ] Keep records of consent

✅ TCPA Compliance (USA):
- [ ] Written consent for automated calls/texts
- [ ] Don't call before 8am or after 9pm local time
- [ ] Maintain internal Do-Not-Call list
- [ ] Include opt-out in every message

Example Compliant Message:
"Via6 AI Labs: Your call is confirmed for Mon 2pm. Reply STOP to unsubscribe."
```

---

## 📊 Expected ROI

### Costs
```
Twilio Phone Number: $1/month
~100 SMS messages: $1.50/month
~50 minutes calls: $0.65/month
Transcriptions: $0.50/month

Total: ~$4-5/month
```

### Benefits
```
Capture 20% more leads: +$10,000/month revenue
Reduce no-shows 50%: +$5,000/month revenue
Faster response time: Higher conversion (+10%)
Client satisfaction: Better retention

ROI: $15,000+ revenue from $5 investment
= 3,000x return
```

### Time Saved
```
Manual call handling: 2 hours/week → 0 minutes (automated)
Voicemail listening: 1 hour/week → 5 minutes (transcription)
SMS follow-ups: 3 hours/week → 0 minutes (automated)
Booking confirmations: 1 hour/week → 0 minutes (automated)

Total: 7 hours/week = 28 hours/month saved
= $4,116/month in time savings (at $147/hr rate)
```

---

## 🎓 Learning Resources

### Twilio Documentation
- Programmable SMS: https://www.twilio.com/docs/sms
- Programmable Voice: https://www.twilio.com/docs/voice
- TwiML Reference: https://www.twilio.com/docs/voice/twiml
- n8n Twilio Node: https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.twilio/

### Templates & Examples
- Twilio Quickstarts: https://www.twilio.com/docs/quickstart
- n8n Twilio Templates: https://n8n.io/workflows?search=twilio
- Voice IVR Examples: https://www.twilio.com/docs/voice/tutorials

### Support
- Twilio Support: https://support.twilio.com
- n8n Community: https://community.n8n.io
- Via6 AI Labs docs: /root/via6-website/CLAUDE.md

---

## ✅ Pre-Launch Checklist

### Account Setup
- [ ] Twilio account created
- [ ] Phone number purchased (+1 416/647/437)
- [ ] Credentials saved securely
- [ ] Billing configured (credit card)
- [ ] Billing alerts set ($10, $25, $50)

### Website Integration
- [ ] Phone number added to contact page
- [ ] Phone number added to footer
- [ ] "Text us" CTA added
- [ ] Click-to-call link (tel:) added
- [ ] Mobile tested

### n8n Workflows
- [ ] SMS lead capture (webhook configured)
- [ ] Auto-response (tested)
- [ ] Voicemail transcription (TwiML configured)
- [ ] Booking confirmations (tested)
- [ ] CRM integration (tested)

### Testing
- [ ] Send test SMS to Twilio number
- [ ] Receive auto-response
- [ ] Call Twilio number
- [ ] Leave voicemail
- [ ] Verify transcription received
- [ ] Check CRM contact created
- [ ] Verify Slack notifications

### Monitoring
- [ ] Add Twilio webhooks to Uptime Kuma
- [ ] Configure cost alerts
- [ ] Set up weekly usage reports
- [ ] Test emergency escalation

### Compliance
- [ ] Privacy policy updated (SMS disclosure)
- [ ] Terms of service updated (SMS consent)
- [ ] Opt-out instructions in auto-response
- [ ] CASL compliance verified

---

## 🚀 Ready to Launch!

**Next Steps:**
1. Sign up for Twilio
2. Buy Canadian phone number
3. Configure webhooks in n8n
4. Test SMS workflow
5. Add phone to website
6. Launch! 📱

**This adds another powerful automation showcase to your stack!**

---

**Created:** 2026-01-24
**Last Updated:** 2026-01-24
**Maintained By:** Claude Sonnet 4.5
