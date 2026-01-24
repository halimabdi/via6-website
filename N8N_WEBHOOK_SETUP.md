# n8n Webhook Setup for Contact Form

## Quick Setup (5 minutes)

### Step 1: Create Webhook in n8n

1. Open your n8n instance: https://n8n.lmiatracker.com
2. Create New Workflow → Name it "Via6 Contact Form"
3. Add **Webhook** trigger node:
   - HTTP Method: POST
   - Path: `via6-contact`
   - Respond: Immediately
   - Response Code: 200

### Step 2: Process the Form Data

Add one of these notification methods:

**Option A: Email Notification**
1. Add **Send Email** node after webhook
2. Configure:
   - To: hello@via6ai.com
   - Subject: `New Contact: {{$json.name}}`
   - Body:
   ```
   New contact form submission from via6ai.com

   Name: {{$json.name}}
   Email: {{$json.email}}
   Company: {{$json.company}}
   Service: {{$json.service}}
   Message: {{$json.message}}

   Submitted: {{$json.timestamp}}
   ```

**Option B: Slack Notification**
1. Add **Slack** node after webhook
2. Configure:
   - Channel: #leads or #via6-contacts
   - Message:
   ```
   🎯 New Contact Form Submission

   👤 *{{$json.name}}* ({{$json.email}})
   🏢 Company: {{$json.company}}
   💼 Interested in: {{$json.service}}

   📝 Message:
   {{$json.message}}

   🔗 Respond: <mailto:{{$json.email}}|Send Email>
   ```

**Option C: Both + Save to Database**
1. Email node
2. Slack node
3. **PostgreSQL** node (to save all leads)

### Step 3: Get Webhook URL

After saving the workflow, activate it and copy the webhook URL:
```
https://n8n.lmiatracker.com/webhook/via6-contact
```

### Step 4: Update Website

The contact form is already configured to use:
```
https://n8n.lmiatracker.com/webhook/via6-contact
```

To use a different URL, set environment variable in Coolify:
```
NEXT_PUBLIC_N8N_WEBHOOK=https://your-n8n.com/webhook/your-path
```

### Step 5: Test It

1. Deploy the website
2. Fill out the contact form
3. Submit
4. Check your email/Slack for the notification

---

## Advanced Setup (Optional)

### Add Lead Scoring

After webhook node, add **Code** node:

```javascript
const formData = $input.item.json

// Simple lead scoring
let score = 0

// Has company name
if (formData.company) score += 20

// Interested in specific service
if (formData.service && formData.service !== 'not-sure') score += 30

// Long message (more engaged)
if (formData.message && formData.message.length > 100) score += 20

// Email domain scoring
const emailDomain = formData.email.split('@')[1]
if (emailDomain !== 'gmail.com' && emailDomain !== 'yahoo.com') {
  score += 30 // Business email
}

return {
  ...formData,
  leadScore: score,
  priority: score >= 70 ? 'High' : score >= 40 ? 'Medium' : 'Low'
}
```

Then route high-priority leads differently (immediate notification vs daily digest).

### Add to CRM

Add **HTTP Request** or CRM-specific node to save lead to:
- HubSpot
- Salesforce
- Pipedrive
- Google Sheets
- Airtable

### Auto-Response Email

Add **Send Email** node to send confirmation to the visitor:

```
To: {{$json.email}}
Subject: Thanks for reaching out to Via6 AI Labs!

Hi {{$json.name}},

Thanks for your interest in Via6 AI Labs!

We received your message and will get back to you within 24 hours.

In the meantime, feel free to:
- Book a free strategy call: https://cal.com/via6ai/strategy-call
- Check out our blog: https://via6ai.com/blog

Best,
Via6 AI Labs Team
hello@via6ai.com
```

### Spam Protection

Add **Code** node after webhook to filter spam:

```javascript
const data = $input.item.json

// Block if no email
if (!data.email || !data.email.includes('@')) {
  throw new Error('Invalid email')
}

// Block if no name
if (!data.name || data.name.length < 2) {
  throw new Error('Invalid name')
}

// Block common spam keywords
const spamKeywords = ['viagra', 'casino', 'lottery', 'crypto', 'bitcoin']
const message = (data.message || '').toLowerCase()
if (spamKeywords.some(keyword => message.includes(keyword))) {
  throw new Error('Spam detected')
}

return data
```

---

## Workflow Template

Here's a complete n8n workflow JSON you can import:

```json
{
  "name": "Via6 Contact Form",
  "nodes": [
    {
      "parameters": {
        "httpMethod": "POST",
        "path": "via6-contact",
        "responseMode": "onReceived",
        "responseCode": 200
      },
      "name": "Webhook",
      "type": "n8n-nodes-base.webhook",
      "position": [250, 300]
    },
    {
      "parameters": {
        "fromEmail": "noreply@via6ai.com",
        "toEmail": "hello@via6ai.com",
        "subject": "=New Via6 Contact: {{$json[\"name\"]}}",
        "text": "=Name: {{$json[\"name\"]}}\nEmail: {{$json[\"email\"]}}\nCompany: {{$json[\"company\"]}}\nService: {{$json[\"service\"]}}\n\nMessage:\n{{$json[\"message\"]}}\n\nSubmitted: {{$json[\"timestamp\"]}}"
      },
      "name": "Send Email",
      "type": "n8n-nodes-base.emailSend",
      "position": [450, 300]
    }
  ],
  "connections": {
    "Webhook": {
      "main": [[{"node": "Send Email", "type": "main", "index": 0}]]
    }
  }
}
```

---

## Monitoring

### Check Webhook Logs

In n8n:
1. Go to Executions tab
2. Filter by "Via6 Contact Form" workflow
3. See all submissions, errors, and success rates

### Set Up Alerts

Create a separate workflow:
1. **Schedule** trigger (every hour)
2. **n8n** node to check executions
3. If errors > 0, send alert to Slack/Email

---

## Troubleshooting

**Form submits but no notification?**
- Check n8n workflow is activated
- Check executions tab for errors
- Verify webhook URL matches environment variable

**CORS errors in browser?**
- n8n webhook should automatically allow CORS
- If not, add CORS headers in webhook node settings

**Getting spam submissions?**
- Add the spam filter code node (see above)
- Add reCAPTCHA to the contact form (frontend)

---

## Cost

n8n is self-hosted and free. No per-execution costs like Zapier.

This webhook will handle unlimited contact form submissions at $0 cost.

---

Questions? Email hello@via6ai.com
