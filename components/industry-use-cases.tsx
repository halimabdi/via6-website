"use client"

import { Building2, Home, FileText, HardHat, Phone, Users, Zap, Database } from "lucide-react"

const industries = [
  {
    icon: Home,
    name: "Real Estate Agents",
    tagline: "Save 20 hours/week on admin",
    problems: [
      "Leads slipping through the cracks",
      "Manual follow-ups taking forever",
      "Copy-pasting listings to 10+ sites",
      "Missed calls becoming lost deals",
    ],
    solutions: [
      {
        title: "Instant Lead Capture & Distribution",
        description: "New lead from website/Facebook → Auto-creates contact in CRM → Sends personalized SMS within 60 seconds → Notifies you on Slack/Telegram → Books showing via Cal.com link",
        roi: "Respond 95% faster, convert 3x more leads"
      },
      {
        title: "Multi-Platform Listing Distribution",
        description: "Upload listing once → AI generates optimized descriptions and social media captions → Auto-posts to Realtor.ca, Instagram, Facebook Page, your website → Schedules LinkedIn posts → MLS-ready export file generated for quick upload",
        roi: "10+ hours/week saved on listing distribution"
      },
      {
        title: "After-Hours Lead Catcher",
        description: "Missed call after 6pm → Voicemail transcribed to text → Logged in CRM → Instant SMS to lead: \"Got your message! I'll call you tomorrow at 9am\" → You get Telegram notification",
        roi: "Never lose a hot lead to competitors"
      },
    ],
  },
  {
    icon: FileText,
    name: "Immigration Consultants",
    tagline: "Eliminate repetitive paperwork",
    problems: [
      "Hours spent filling government forms",
      "Chasing clients for missing documents",
      "Manual status updates to 50+ clients",
      "Data entry across multiple portals",
    ],
    solutions: [
      {
        title: "Smart Form Pre-Population & PDF Generation",
        description: "Client data stored in your system → n8n generates pre-filled PDF forms for Express Entry, PR applications, work permits → All client information auto-populated → Review and upload to portals in minutes instead of hours of manual data entry",
        roi: "80% faster form preparation"
      },
      {
        title: "Document Collection Bot",
        description: "Client signs retainer → Automated email sequence: \"Upload passport (Day 1), education docs (Day 3), work history (Day 5)\" → Telegram reminders for missing items → All files organized in Google Drive",
        roi: "90% on-time document collection"
      },
      {
        title: "One-Click Client Status Broadcasting",
        description: "You update status once in your system → n8n instantly emails client with personalized update → Logs change in CRM with timestamp → Posts to Slack for team visibility → Client portal updated automatically",
        roi: "Update 50+ clients in 30 seconds"
      },
    ],
  },
  {
    icon: Building2,
    name: "Mortgage Brokers",
    tagline: "Close more deals with AI follow-ups",
    problems: [
      "Leads going cold from slow follow-up",
      "Juggling 20+ applications manually",
      "Rate changes requiring mass re-quotes",
      "Lost referrals from poor partner comms",
    ],
    solutions: [
      {
        title: "Lead Scoring & Auto-Routing",
        description: "New lead arrives → AI scores based on income, credit, down payment → Hot leads (8+/10) texted within 2 minutes → Warm leads enter 5-day drip campaign → Cold leads get monthly market updates",
        roi: "3x conversion on qualified leads"
      },
      {
        title: "Application Status Sync",
        description: "Update status once in your system → n8n syncs to CRM → Client gets automated email: \"Your application is now in underwriting\" → Realtor partner gets CC → Status updated across all platforms → You stay top-of-mind",
        roi: "Clients know status 24/7"
      },
      {
        title: "Rate Change Alert System",
        description: "Bank rate drops → n8n checks your pipeline → Finds 12 clients who could save money → Sends personalized emails: \"Hey John, rates dropped 0.25% - let's relock\" → Books follow-up calls automatically",
        roi: "Recover lost deals, upsell existing clients"
      },
    ],
  },
  {
    icon: HardHat,
    name: "Construction Companies",
    tagline: "Keep projects on schedule, on budget",
    problems: [
      "Field updates lost in text threads",
      "Invoice delays causing cash flow gaps",
      "Suppliers not notified of schedule changes",
      "Client approvals taking days",
    ],
    solutions: [
      {
        title: "Daily Site Report Automation",
        description: "Foreman sends photos via WhatsApp Business API → n8n extracts location, timestamp from image data → Creates report in Procore/BuilderTrend → Emails client and office → Logs in Google Sheets for invoicing",
        roi: "100% daily reporting compliance"
      },
      {
        title: "Invoice & Payment Tracking",
        description: "Project milestone hit → Auto-generates invoice → Sends to client via email → Payment reminder at 15 days → Overdue alert to you and accounting → Updates cash flow dashboard",
        roi: "Get paid 2 weeks faster"
      },
      {
        title: "Supplier & Subcontractor Coordination",
        description: "Project schedule changes → n8n notifies affected suppliers via SMS → Confirms new delivery dates → Updates shared calendar → Logs responses in project management tool",
        roi: "Eliminate costly delays"
      },
    ],
  },
  {
    icon: Phone,
    name: "Any Service Business",
    tagline: "After-hours = Always-on",
    problems: [
      "Losing leads to competitors who answer first",
      "Voicemails not checked until next morning",
      "No way to book appointments after 5pm",
      "Emergency calls going unanswered",
    ],
    solutions: [
      {
        title: "After-Hours Lead Capture",
        description: "Call comes in at 8pm → Voicemail transcribed instantly → Lead logged in CRM → Auto-SMS: \"Thanks for calling! Book here: [Cal.com link]\" → You get Telegram alert with transcript",
        roi: "Capture 100% of after-hours leads"
      },
      {
        title: "Smart Call Routing",
        description: "Caller presses 1 for emergency → n8n forwards to your cell → Presses 2 for quote → Gets SMS with booking link → Presses 3 for existing customer → Creates support ticket in your system",
        roi: "Never miss urgent calls"
      },
      {
        title: "Weekend Appointment Booking",
        description: "Customer fills form on Saturday → n8n checks your calendar availability → Auto-books slot → Sends confirmation email → Adds to Google Calendar → Reminder sent 24 hours before",
        roi: "Book leads even when you're offline"
      },
    ],
  },
  {
    icon: Users,
    name: "Lead Generation Agencies",
    tagline: "Scale to 1000+ leads/month",
    problems: [
      "Manual lead enrichment bottleneck",
      "Inconsistent handoff to sales teams",
      "Can't track which sources convert best",
      "Wasting ad spend on junk leads",
    ],
    solutions: [
      {
        title: "Lead Enrichment Pipeline",
        description: "Raw lead from ad → n8n enriches with Clearbit (company data) + Hunter.io (email) + LinkedIn (job title) → Scores lead quality → Adds to Apollo/HubSpot → Routes to right salesperson",
        roi: "10x lead quality, 50% time saved"
      },
      {
        title: "Multi-Platform Lead Aggregation",
        description: "Leads from Google Ads, Facebook, LinkedIn, cold email replies → All flow to one n8n workflow → De-duplicates contacts → Tags by source → Adds to nurture sequence → Daily report to Slack",
        roi: "Zero leads lost between platforms"
      },
      {
        title: "AI-Powered Qualification",
        description: "New lead answers 3 questions → AI analyzes responses for buying intent → High-intent leads → Instant Slack alert + SMS to sales rep → Low-intent → 30-day nurture email sequence",
        roi: "Sales team only calls qualified leads"
      },
    ],
  },
]

const integrations = [
  { name: "Telegram", description: "Get instant alerts, run commands, update deals via chat" },
  { name: "Slack", description: "Team notifications, approvals, status updates in your workspace" },
  { name: "WhatsApp", description: "Client communication, photo submissions, appointment confirmations" },
  { name: "SMS/Twilio", description: "2-way texting, appointment reminders, lead capture responses" },
  { name: "Google Workspace", description: "Sheets, Drive, Calendar, Gmail - all synced automatically" },
  { name: "Databases", description: "PostgreSQL, MySQL, Airtable - custom databases for your exact needs" },
  { name: "400+ Apps", description: "HubSpot, Salesforce, Mailchimp, Stripe, QuickBooks, and more" },
]

export function IndustryUseCases() {
  return (
    <section id="use-cases" className="py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full glass border border-primary/20 text-primary text-sm font-medium mb-6">
            Industry Solutions
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Built for{" "}
            <span className="gradient-text">Toronto Businesses</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Real automation examples from industries we serve. Stop wasting time on repetitive tasks
            - see exactly how n8n can transform your workflow in minutes, not months.
          </p>
        </div>

        {/* Industry Cards */}
        <div className="space-y-16">
          {industries.map((industry, idx) => (
            <div
              key={industry.name}
              className="glass rounded-2xl p-8 border border-white/10 hover:border-primary/30 transition-all"
            >
              {/* Industry Header */}
              <div className="flex items-start gap-4 mb-8">
                <div className="p-3 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/30">
                  <industry.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">{industry.name}</h3>
                  <p className="text-muted-foreground">{industry.tagline}</p>
                </div>
              </div>

              {/* Problems */}
              <div className="mb-8">
                <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                  Common Pain Points
                </h4>
                <div className="grid sm:grid-cols-2 gap-3">
                  {industry.problems.map((problem, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <span className="text-red-400 mt-1">✗</span>
                      <span className="text-sm text-muted-foreground">{problem}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Solutions */}
              <div className="space-y-6">
                <h4 className="text-sm font-semibold text-primary uppercase tracking-wider">
                  n8n Automation Solutions
                </h4>
                {industry.solutions.map((solution, i) => (
                  <div
                    key={i}
                    className="p-5 rounded-xl bg-gradient-to-br from-background/50 to-background/30 border border-white/5"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <h5 className="font-semibold text-foreground">{solution.title}</h5>
                      <span className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 whitespace-nowrap ml-4">
                        {solution.roi}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {solution.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Integration Capabilities */}
        <div className="mt-24 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/20 mb-6">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Connects Everything You Use</span>
          </div>

          <h3 className="text-3xl font-bold mb-6">
            400+ Integrations <span className="gradient-text">Out of the Box</span>
          </h3>

          <p className="text-muted-foreground mb-12 max-w-2xl mx-auto">
            n8n connects with virtually any tool you're already using. If it has an API,
            we can automate it. No coding required (but we can code custom solutions when needed).
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {integrations.map((integration, i) => (
              <div
                key={i}
                className="p-5 rounded-xl glass border border-white/10 hover:border-primary/30 transition-all text-left group"
              >
                <div className="flex items-start gap-3">
                  <Database className="w-5 h-5 text-primary mt-0.5 group-hover:scale-110 transition-transform" />
                  <div>
                    <h4 className="font-semibold text-sm mb-1">{integration.name}</h4>
                    <p className="text-xs text-muted-foreground">{integration.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 p-8 rounded-2xl glass border border-primary/20 max-w-3xl mx-auto">
            <p className="text-lg mb-6">
              <strong className="text-foreground">Don't see your industry?</strong>{" "}
              <span className="text-muted-foreground">
                We've automated workflows for accounting firms, dental offices, marketing agencies,
                e-commerce stores, and more. If you have repetitive tasks, we can automate them.
              </span>
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary hover:bg-primary/90 text-primary-foreground font-medium transition-colors"
            >
              Discuss Your Use Case
              <span>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
