# Coolify Deployment Guide

## Prerequisites

- Hetzner server with Coolify installed
- Domain: via6ai.com (DNS pointed to your server)
- GitHub repo with this code

## 1. Deploy Via6 Website

### In Coolify:

1. **New Resource** → **Application** → **GitHub**
2. Select your repository
3. Coolify will auto-detect the Dockerfile
4. Configure:
   - **Name:** via6-website
   - **Domain:** via6ai.com
   - **Port:** 3000
   - **SSL:** Let's Encrypt (automatic)
5. Click **Deploy**

### DNS Setup:

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

## 2. Deploy Cal.com (Self-Hosted)

### In Coolify:

1. **New Resource** → **Service** → Search **"Cal.com"**
2. Click **Deploy**
3. Configure:
   - **Domain:** cal.via6ai.com
   - **SSL:** Let's Encrypt
4. Wait for deployment (~5 min)

### DNS Setup:

```
Type: A
Name: cal
Value: YOUR_SERVER_IP
TTL: 300
```

### Cal.com Configuration:

1. Visit `cal.via6ai.com` and create admin account
2. Connect Google Calendar:
   - Settings → Calendars → Connect
   - Authorize Google
3. Create Event Type:
   - **Name:** Strategy Call
   - **Duration:** 30 minutes
   - **URL:** /strategy-call
4. Set Availability:
   - Settings → Availability
   - Set your working hours (e.g., Mon-Fri 9am-5pm EST)

### Update Website URLs:

After Cal.com is live, update the booking URL in:

```bash
# In your local repo
sed -i 's|cal.com/via6ai/strategy-call|cal.via6ai.com/strategy-call|g' components/*.tsx
git add .
git commit -m "Update Cal.com URL"
git push
```

Coolify will auto-redeploy.

## 3. n8n Webhook for Contact Form

### Create n8n Workflow:

1. In your n8n instance, create new workflow
2. Add **Webhook** trigger node:
   - Method: POST
   - Path: `/via6-contact`
3. Add **Send Email** node (or Slack, Notion, etc.)
4. Copy the webhook URL

### Update Contact Form:

In `components/contact-section.tsx`:

```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  setIsSubmitting(true)
  
  try {
    await fetch('https://your-n8n.com/webhook/via6-contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    })
    setIsSubmitted(true)
  } catch (error) {
    console.error('Form submission failed:', error)
  }
  
  setIsSubmitting(false)
}
```

## 4. Environment Variables (Optional)

If you want to use environment variables for URLs:

### In Coolify:

Add to your application environment:

```
NEXT_PUBLIC_CAL_URL=https://cal.via6ai.com/strategy-call
NEXT_PUBLIC_N8N_WEBHOOK=https://your-n8n.com/webhook/via6-contact
```

### In Code:

```typescript
const calComUrl = process.env.NEXT_PUBLIC_CAL_URL || "https://cal.com/via6ai/strategy-call"
```

## Troubleshooting

### Build fails

```bash
# Check Coolify logs
# Common issues:
# - Node version mismatch (use Node 20)
# - Missing dependencies (npm install)
```

### SSL not working

- Verify DNS is pointed correctly
- Wait 5-10 minutes for Let's Encrypt
- Check Coolify proxy logs

### Cal.com not loading

- Ensure database is running (PostgreSQL)
- Check Cal.com container logs in Coolify
- Verify environment variables

## Maintenance

### Update Website

```bash
git pull
# Make changes
git add .
git commit -m "Update"
git push
# Coolify auto-deploys
```

### Update Cal.com

In Coolify → Services → Cal.com → **Update** (pulls latest image)

---

**Support:** hello@via6ai.com
