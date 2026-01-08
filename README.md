# Via6 AI Labs Website

Toronto-based AI automation agency website built with Next.js 14, Tailwind CSS v4, and shadcn/ui.

**Live:** https://via6ai.com

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS v4 + shadcn/ui
- **Language:** TypeScript
- **Fonts:** Clash Display + Satoshi (via Fontshare)
- **Booking:** Cal.com

## Getting Started

### Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Deployment (Coolify on Hetzner)

1. Push to your Git repository
2. In Coolify → New Application → Connect repo
3. Coolify auto-detects the Dockerfile
4. Set domain: `via6ai.com`
5. Deploy!

## Cal.com Setup

### Option 1: Cal.com Cloud (Quick Start)

1. Sign up at [cal.com](https://cal.com)
2. Create event type: "30-min Strategy Call"
3. Set your availability
4. Update `calComUrl` in these files:
   - `components/hero-section.tsx`
   - `components/contact-section.tsx`
   - `components/pricing-section.tsx`

### Option 2: Self-Hosted Cal.com (Recommended)

1. In Coolify → New Service → Search "Cal.com"
2. Deploy
3. Point `cal.via6ai.com` to it
4. Configure and connect your Google Calendar
5. Update `calComUrl` to `https://cal.via6ai.com/strategy-call`

## Configuration

### Update Cal.com URL

Search for `cal.com/via6ai/strategy-call` and replace with your actual Cal.com URL:

```bash
# Find all files with the placeholder
grep -r "cal.com/via6ai" --include="*.tsx"
```

### Connect Contact Form to n8n

In `components/contact-section.tsx`, update the `handleSubmit` function:

```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  setIsSubmitting(true)
  
  await fetch('YOUR_N8N_WEBHOOK_URL', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
  })
  
  setIsSubmitting(false)
  setIsSubmitted(true)
}
```

## Project Structure

```
via6-website/
├── app/
│   ├── layout.tsx          # Root layout + SEO
│   ├── page.tsx             # Homepage
│   └── globals.css          # Theme + custom styles
├── components/
│   ├── ui/                  # shadcn/ui components
│   ├── navigation.tsx       # Header with logo
│   ├── hero-section.tsx     # Hero + Cal.com CTA
│   ├── problem-solution-section.tsx
│   ├── services-section.tsx # Services + n8n vs Zapier
│   ├── process-section.tsx  # 4-step process
│   ├── pricing-section.tsx  # CAD pricing + Cal.com
│   ├── about-section.tsx
│   ├── contact-section.tsx  # Form + Cal.com booking
│   └── footer.tsx
├── public/
│   ├── logo-full.png        # Main logo
│   ├── logo-variations.png  # Logo variations
│   └── favicon.svg          # Favicon
├── Dockerfile               # For Coolify
└── package.json
```

## Brand

- **Domain:** via6ai.com
- **Email:** hello@via6ai.com
- **Booking:** cal.com/via6ai (or cal.via6ai.com)
- **Colors:** Teal #00D4AA, Purple #6366F1, Navy #0D2137

## License

Private - Via6 AI Labs Inc.
