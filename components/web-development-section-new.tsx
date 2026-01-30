import { Code, Smartphone, Zap, Shield, TrendingUp, Boxes, CheckCircle, BarChart3, Sparkles, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"

export function WebDevelopmentSection() {
  const services = [
    {
      icon: Globe,
      title: "Business Websites & Landing Pages",
      description: "Professional websites that generate leads and build credibility",
      price: "$1,500 - $4,500 CAD",
      timeline: "2-4 weeks",
      features: [
        "Custom design (not templates)",
        "Mobile-responsive & fast loading",
        "SEO optimized (rank on Google)",
        "Contact forms with automation",
        "Analytics & tracking setup",
        "Content management system",
        "SSL certificate & hosting included"
      ],
      ideal: "Startups, consultants, service businesses"
    },
    {
      icon: BarChart3,
      title: "Lead Generation Websites",
      description: "Marketing-focused sites designed to convert visitors into customers",
      price: "$3,500 - $8,000 CAD",
      timeline: "3-6 weeks",
      features: [
        "Conversion-optimized design",
        "A/B testing ready",
        "Calendar booking integration",
        "Lead capture & nurture automation",
        "Email marketing setup",
        "CRM integration (Pipedrive, HubSpot)",
        "Performance tracking dashboard"
      ],
      ideal: "Agencies, B2B services, coaching"
    },
    {
      icon: Smartphone,
      title: "E-commerce Stores",
      description: "Online stores that sell 24/7 with automation built-in",
      price: "$5,000 - $15,000 CAD",
      timeline: "6-10 weeks",
      features: [
        "Shopify or custom platform",
        "Payment processing (Stripe, PayPal)",
        "Inventory management",
        "Order automation workflows",
        "Customer email sequences",
        "Abandoned cart recovery",
        "Shipping integrations"
      ],
      ideal: "Product businesses, retail, DTC brands"
    },
    {
      icon: Boxes,
      title: "SaaS Applications & Web Apps",
      description: "Full-stack applications with user accounts, subscriptions, and more",
      price: "$10,000 - $35,000+ CAD",
      timeline: "8-16 weeks",
      features: [
        "User authentication & accounts",
        "Database design & setup",
        "Subscription billing (Stripe)",
        "Admin dashboard & analytics",
        "API development",
        "Third-party integrations",
        "Automated workflows & notifications"
      ],
      ideal: "Tech startups, SaaS companies, platforms"
    }
  ]

  const whyDifferent = [
    {
      icon: Sparkles,
      title: "Automation Built-In From Day One",
      description: "Unlike traditional agencies, we build automation into every site. Contact forms trigger workflows, bookings sync to your CRM, emails send automatically. Your website works for you 24/7."
    },
    {
      icon: TrendingUp,
      title: "SEO & Performance Obsessed",
      description: "We don't just build pretty websites—we build websites that rank and convert. Server-side rendering, image optimization, schema markup, and fast load times are standard on every project."
    },
    {
      icon: Shield,
      title: "Production-Ready Code",
      description: "TypeScript for type safety, proper error handling, monitoring, and logging. We build for scale from day one, so your site doesn't break when traffic spikes."
    },
    {
      icon: Zap,
      title: "Modern Tech Stack (Not WordPress)",
      description: "We use Next.js, React, and modern frameworks—not bloated WordPress. Faster load times, better security, easier to maintain, and built for the future."
    }
  ]

  const portfolio = {
    project: "Via6 AI Labs Website",
    description: "This very website you're on right now",
    tech: ["Next.js 14", "React", "TypeScript", "Tailwind CSS", "Docker"],
    features: [
      "Sub-2 second load time",
      "100/100 Lighthouse performance score",
      "SEO optimized (sitemap, schema markup)",
      "Google Calendar booking integration",
      "Contact form with n8n automation",
      "Responsive design (mobile, tablet, desktop)",
      "Deployed on self-hosted infrastructure"
    ],
    buildTime: "Built in 2 weeks",
    highlight: "This site is our portfolio—if you like what you see, we can build similar for you."
  }

  const techStack = [
    {
      category: "Frontend",
      tech: ["Next.js 14 (App Router)", "React 18", "TypeScript", "Tailwind CSS", "Framer Motion"],
      why: "Fast, modern, SEO-friendly"
    },
    {
      category: "Backend",
      tech: ["Node.js", "PostgreSQL", "Redis", "Prisma ORM", "REST/GraphQL APIs"],
      why: "Scalable & reliable"
    },
    {
      category: "Hosting & Infrastructure",
      tech: ["Vercel", "Coolify (self-hosted)", "Cloudflare CDN", "Docker", "Linux servers"],
      why: "Fast, secure, cost-effective"
    },
    {
      category: "Integrations",
      tech: ["Stripe (payments)", "Auth0 (authentication)", "n8n (automation)", "Google Workspace", "CRM platforms"],
      why: "Everything connected"
    }
  ]

  const process = [
    { step: "1", title: "Discovery Call (Free)", description: "We discuss your goals, target audience, and requirements. No sales pressure." },
    { step: "2", title: "Proposal & Quote", description: "Detailed scope, timeline, and fixed pricing. You know exactly what you're getting." },
    { step: "3", title: "Design Phase", description: "Mockups and wireframes for your approval before we write any code." },
    { step: "4", title: "Development", description: "We build your site with weekly progress updates. You can see it live as we work." },
    { step: "5", title: "Testing & Launch", description: "Thorough testing on all devices. We handle domain, SSL, and deployment." },
    { step: "6", title: "Training & Support", description: "We train you on managing your site and provide 30 days of free support." }
  ]

  const calComUrl = "https://calendar.app.google/UnyTsDBE7jnaXjkn7"

  return (
    <section id="web-development" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background/50 to-background">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-secondary/20 mb-6">
            <Code className="h-4 w-4 text-secondary" />
            <span className="text-sm text-muted-foreground">Modern Web Development</span>
          </div>
          <h2 className="font-display font-bold text-4xl sm:text-5xl mb-4">
            Websites That Actually{" "}
            <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
              Work For You
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            No WordPress bloat. No template limitations. Just fast, modern websites built with automation,
            designed to generate leads, and optimized to rank on Google.
            <span className="block mt-2 text-foreground font-medium">
              Transparent pricing. Fixed deadlines. Results guaranteed.
            </span>
          </p>
        </div>

        {/* Portfolio Showcase - Via6 Website */}
        <div className="gradient-border rounded-2xl p-8 mb-16 bg-gradient-to-br from-secondary/5 to-primary/5">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-secondary to-primary flex items-center justify-center">
              <Sparkles className="h-6 w-6 text-background" />
            </div>
            <div>
              <h3 className="font-display font-semibold text-2xl">{portfolio.project}</h3>
              <p className="text-sm text-muted-foreground">{portfolio.description}</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-muted-foreground mb-4">{portfolio.highlight}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {portfolio.tech.map((tech, i) => (
                  <span key={i} className="px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 text-xs font-medium text-secondary">
                    {tech}
                  </span>
                ))}
              </div>
              <p className="text-sm text-primary font-semibold">{portfolio.buildTime}</p>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-sm">Features:</h4>
              <ul className="space-y-2">
                {portfolio.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Service Packages */}
        <div className="mb-16">
          <h3 className="font-display font-semibold text-3xl mb-8 text-center">What We Build</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, i) => (
              <div key={i} className="glass rounded-2xl p-8 hover:shadow-xl transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-secondary to-primary flex items-center justify-center">
                    <service.icon className="h-6 w-6 text-background" />
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-primary font-bold">{service.price}</div>
                    <div className="text-xs text-muted-foreground">{service.timeline}</div>
                  </div>
                </div>

                <h4 className="font-display font-semibold text-xl mb-2">{service.title}</h4>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{service.description}</p>

                <div className="mb-4 p-3 rounded-lg bg-muted/30 border border-border/50">
                  <p className="text-xs text-muted-foreground">
                    <span className="font-medium text-foreground">Ideal for:</span> {service.ideal}
                  </p>
                </div>

                <div className="border-t border-border/50 pt-4">
                  <p className="text-xs font-semibold text-muted-foreground mb-3">What's Included:</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-secondary flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why Different */}
        <div className="mb-16">
          <h3 className="font-display font-semibold text-3xl mb-8 text-center">
            Why We're Not Like Other Web Agencies
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {whyDifferent.map((item, i) => (
              <div key={i} className="gradient-border rounded-xl p-6">
                <item.icon className="h-8 w-8 text-secondary mb-4" />
                <h4 className="font-semibold text-lg mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="glass rounded-2xl p-8 mb-16">
          <h3 className="font-display font-semibold text-2xl mb-8 text-center">Our Tech Stack</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {techStack.map((stack, i) => (
              <div key={i}>
                <div className="text-sm font-semibold text-primary mb-2">{stack.category}</div>
                <div className="text-xs text-muted-foreground mb-3 italic">{stack.why}</div>
                <ul className="space-y-2">
                  {stack.tech.map((tech, j) => (
                    <li key={j} className="text-sm text-muted-foreground flex items-start gap-2">
                      <div className="w-1 h-1 rounded-full bg-secondary mt-1.5 flex-shrink-0" />
                      <span>{tech}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Process */}
        <div className="mb-16">
          <h3 className="font-display font-semibold text-3xl mb-8 text-center">Our Process</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {process.map((item, i) => (
              <div key={i} className="glass rounded-xl p-6">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-secondary to-primary flex items-center justify-center mb-4 text-background font-bold">
                  {item.step}
                </div>
                <h4 className="font-semibold mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="gradient-border rounded-2xl p-8 text-center">
          <h3 className="font-display font-semibold text-2xl mb-4">
            Ready to Build Your Website?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Book a free 30-minute strategy call. We'll discuss your project, answer your questions,
            and give you a detailed quote with no obligation.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="bg-gradient-to-r from-secondary to-primary hover:opacity-90 text-background">
              <a href={calComUrl} target="_blank" rel="noopener noreferrer">
                <Code className="mr-2 h-4 w-4" />
                Book Free Strategy Call
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="#contact">
                Or Send Us a Message
              </a>
            </Button>
          </div>
          <p className="text-xs text-muted-foreground mt-4">
            💯 30-day money-back guarantee • No hidden fees • Transparent pricing
          </p>
        </div>

      </div>
    </section>
  )
}
