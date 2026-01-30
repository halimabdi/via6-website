import { Button } from "@/components/ui/button"
import { Check, Star, Sparkles, Server, Zap } from "lucide-react"
import Link from "next/link"

export function PricingSection() {
  const calComUrl = "https://calendar.app.google/UnyTsDBE7jnaXjkn7"

  const plans = [
    {
      name: "Free Audit",
      price: "$0",
      description: "Discover your automation potential",
      features: [
        "30-minute strategy call",
        "Process analysis & ROI projections",
        "No-code vs custom recommendations",
        "Infrastructure assessment",
        "No obligation",
      ],
      cta: "Book Free Audit",
      ctaLink: calComUrl,
      external: true,
      popular: false,
      badge: null,
    },
    {
      name: "Quick Start",
      price: "$1,997",
      period: "CAD",
      description: "Get your first automation live fast",
      features: [
        "1-2 production workflows",
        "1-2 week delivery",
        "Full documentation & training",
        "Integration with existing tools",
        "14 days post-launch support",
      ],
      cta: "Start Automating",
      ctaLink: "#contact",
      external: false,
      popular: true,
      badge: "Most Popular",
    },
    {
      name: "Full Stack Setup",
      price: "$4,997",
      period: "CAD",
      description: "Complete infrastructure + automation",
      features: [
        "Server setup (self-hosted or managed)",
        "Deployment platform (Coolify/Docker)",
        "3-5 production workflows",
        "Database & monitoring setup",
        "30 days support & optimization",
      ],
      cta: "Build Your Stack",
      ctaLink: "#contact",
      external: false,
      popular: false,
      badge: "Best Value",
    },
  ]

  const extraPlans = [
    {
      name: "Custom Development",
      price: "Starting at $7,997",
      period: "CAD",
      description: "Full SaaS, web apps, or complex systems",
      features: [
        "Custom web/SaaS application",
        "Next.js + PostgreSQL + Auth",
        "Payment processing (Stripe)",
        "Admin dashboard & APIs",
        "Hosting & deployment included",
        "60 days support & bug fixes",
      ],
      cta: "Discuss Your Project",
      ctaLink: calComUrl,
      external: true,
    },
    {
      name: "Retainer",
      price: "$997 - $2,997",
      period: "CAD/month",
      description: "Ongoing development & support",
      features: [
        "10-30 hours/month development",
        "Priority support (4 hour response)",
        "Monthly strategy calls",
        "Performance monitoring",
        "Cancel anytime (30 days notice)",
      ],
      cta: "Start Retainer",
      ctaLink: calComUrl,
      external: true,
    },
  ]

  const aLaCarteServices = {
    infrastructure: [
      { name: "Server Setup & Hardening", price: "$497" },
      { name: "Coolify/Docker Deployment Setup", price: "$497" },
      { name: "Database Setup (PostgreSQL/MySQL/Redis)", price: "$297" },
      { name: "Backup Automation Setup", price: "$197" },
      { name: "Monitoring Setup (Uptime Kuma)", price: "$197" },
      { name: "SSL & Domain Configuration", price: "$97" },
    ],
    hosting: [
      { name: "Fully Managed Hosting", price: "$297-997/mo", note: "We host & maintain everything" },
      { name: "Self-Hosted Setup (one-time)", price: "$497", note: "You maintain after setup" },
      { name: "App Deployment (per app)", price: "$97-297", note: "Depends on complexity" },
      { name: "Monthly Maintenance", price: "$297/mo", note: "Updates, monitoring, support" },
    ],
    automation: [
      { name: "Simple Workflow (2-5 steps)", price: "$497" },
      { name: "Medium Workflow (6-15 steps)", price: "$997" },
      { name: "Complex Workflow (15+ steps)", price: "$1,997" },
      { name: "Workflow Maintenance", price: "$97-297/mo" },
    ],
  }

  const webDevPricing = [
    { name: "Landing Page", price: "$1,500 - $2,500" },
    { name: "Business Website", price: "$2,500 - $4,500" },
    { name: "E-commerce Store", price: "$5,000 - $15,000" },
    { name: "SaaS Application", price: "$10,000 - $35,000+" },
  ]

  return (
    <section id="pricing" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-secondary/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-display font-bold text-4xl sm:text-5xl mb-4">
            Transparent, <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Canadian-Friendly</span> Pricing
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            No hidden fees. All prices in Canadian dollars. 100% money-back guarantee on all projects.
          </p>
        </div>

        {/* Main Pricing Tiers */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
          {plans.map((plan, i) => (
            <div key={i} className={`relative rounded-2xl p-8 ${plan.popular ? "gradient-border scale-105 shadow-xl" : "glass"}`}>
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-primary to-secondary text-xs font-semibold flex items-center gap-1 text-background shadow-lg">
                  {plan.popular && <Star className="h-3 w-3 fill-current" />}
                  {plan.badge}
                </div>
              )}

              <div className="mb-6">
                <h3 className="font-display font-semibold text-2xl mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="font-display font-bold text-4xl">{plan.price}</span>
                  {plan.period && <span className="text-sm text-muted-foreground">/{plan.period}</span>}
                </div>
                <p className="text-sm text-muted-foreground">{plan.description}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                asChild
                className={`w-full ${plan.popular ? "bg-gradient-to-r from-primary to-secondary hover:opacity-90" : ""}`}
                variant={plan.popular ? "default" : "outline"}
                size="lg"
              >
                {plan.external ? (
                  <a href={plan.ctaLink} target="_blank" rel="noopener noreferrer">{plan.cta}</a>
                ) : (
                  <Link href={plan.ctaLink}>{plan.cta}</Link>
                )}
              </Button>
            </div>
          ))}
        </div>

        {/* Extra Plans Row */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-16">
          {extraPlans.map((plan, i) => (
            <div key={i} className="glass rounded-2xl p-8">
              <div className="mb-6">
                <h3 className="font-display font-semibold text-2xl mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="font-display font-bold text-3xl">{plan.price}</span>
                  {plan.period && <span className="text-sm text-muted-foreground">/{plan.period}</span>}
                </div>
                <p className="text-sm text-muted-foreground">{plan.description}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                asChild
                variant="outline"
                className="w-full"
                size="lg"
              >
                {plan.external ? (
                  <a href={plan.ctaLink} target="_blank" rel="noopener noreferrer">{plan.cta}</a>
                ) : (
                  <Link href={plan.ctaLink}>{plan.cta}</Link>
                )}
              </Button>
            </div>
          ))}
        </div>

        {/* À La Carte Services */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="text-center mb-8">
            <h3 className="font-display font-semibold text-3xl mb-2">À La Carte Services</h3>
            <p className="text-muted-foreground">Need something specific? Pick individual services.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Infrastructure */}
            <div className="glass rounded-xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <Server className="h-5 w-5 text-primary" />
                <h4 className="font-semibold text-lg">Infrastructure</h4>
              </div>
              <div className="space-y-3">
                {aLaCarteServices.infrastructure.map((service, index) => (
                  <div key={index} className="flex justify-between items-start py-2 border-b border-border/30 last:border-0">
                    <span className="text-sm">{service.name}</span>
                    <span className="text-sm text-primary font-medium whitespace-nowrap ml-4">{service.price}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Hosting */}
            <div className="glass rounded-xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="h-5 w-5 text-primary" />
                <h4 className="font-semibold text-lg">Hosting</h4>
              </div>
              <div className="space-y-3">
                {aLaCarteServices.hosting.map((service, index) => (
                  <div key={index} className="py-2 border-b border-border/30 last:border-0">
                    <div className="flex justify-between items-start">
                      <span className="text-sm">{service.name}</span>
                      <span className="text-sm text-primary font-medium whitespace-nowrap ml-4">{service.price}</span>
                    </div>
                    {service.note && (
                      <p className="text-xs text-muted-foreground mt-1">{service.note}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Automation */}
            <div className="glass rounded-xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <Zap className="h-5 w-5 text-primary" />
                <h4 className="font-semibold text-lg">Automation</h4>
              </div>
              <div className="space-y-3">
                {aLaCarteServices.automation.map((service, index) => (
                  <div key={index} className="flex justify-between items-start py-2 border-b border-border/30 last:border-0">
                    <span className="text-sm">{service.name}</span>
                    <span className="text-sm text-primary font-medium whitespace-nowrap ml-4">{service.price}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Web Development Pricing */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="glass rounded-2xl p-8">
            <h3 className="font-display font-semibold text-2xl mb-6 text-center">Web & SaaS Development</h3>
            <div className="space-y-3">
              {webDevPricing.map((service, index) => (
                <div key={index} className="flex justify-between items-center py-3 border-b border-border/30 last:border-0">
                  <span className="text-sm font-medium">{service.name}</span>
                  <span className="text-sm text-primary font-semibold whitespace-nowrap ml-4">{service.price} CAD</span>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg">
              <p className="text-sm text-center">
                <span className="font-semibold">Bundle & Save:</span>
                <span className="text-muted-foreground ml-2">15% off when combining web development + automation</span>
              </p>
            </div>
          </div>
        </div>

        {/* Hourly Rate */}
        <div className="text-center mb-12">
          <div className="inline-block glass rounded-xl px-6 py-4">
            <p className="text-sm text-muted-foreground">
              <span className="text-foreground font-semibold">Hourly Consulting:</span> $97 CAD/hour
              <span className="mx-2">•</span>
              <span className="text-muted-foreground">2-hour minimum for ad-hoc work</span>
            </p>
          </div>
        </div>

        {/* How We Work - Process & Payment */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="glass rounded-2xl p-8">
            <h3 className="font-display font-semibold text-2xl mb-6 text-center">How We Work</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Process */}
              <div>
                <h4 className="font-semibold text-lg mb-4 text-primary">Professional Process</h4>
                <ol className="space-y-3 text-sm">
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary font-semibold">1</span>
                    <span><strong>Free Discovery Call</strong> - Understand your needs (30 min)</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary font-semibold">2</span>
                    <span><strong>Detailed Quote</strong> - Clear deliverables & timeline</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary font-semibold">3</span>
                    <span><strong>Service Agreement</strong> - E-signature (legally binding)</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary font-semibold">4</span>
                    <span><strong>50% Deposit</strong> - Project starts within 2-3 days</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary font-semibold">5</span>
                    <span><strong>Build & Deliver</strong> - Regular updates & reviews</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary font-semibold">6</span>
                    <span><strong>Final Payment</strong> - 50% on completion & handoff</span>
                  </li>
                </ol>
              </div>

              {/* Payment & Terms */}
              <div>
                <h4 className="font-semibold text-lg mb-4 text-secondary">Payment & Terms</h4>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-secondary flex-shrink-0 mt-0.5" />
                    <span><strong>Payment Methods:</strong> Interac e-Transfer to payments@via6ai.com (zero fees), Credit Card, Wire Transfer</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-secondary flex-shrink-0 mt-0.5" />
                    <span><strong>Deposit:</strong> 50% upfront to reserve timeline and cover initial work</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-secondary flex-shrink-0 mt-0.5" />
                    <span><strong>Balance:</strong> 50% due upon project completion and approval</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-secondary flex-shrink-0 mt-0.5" />
                    <span><strong>Revisions:</strong> 2 rounds included per deliverable</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-secondary flex-shrink-0 mt-0.5" />
                    <span><strong>Support:</strong> 14-60 days post-launch (tier-dependent)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-secondary flex-shrink-0 mt-0.5" />
                    <span><strong>Guarantee:</strong> 100% money-back if not satisfied</span>
                  </li>
                </ul>
                <div className="mt-4 p-3 bg-secondary/10 rounded-lg">
                  <p className="text-xs text-muted-foreground">
                    <strong className="text-foreground">All prices in CAD.</strong> HST applies for Canadian clients. Legally binding contracts with every project.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center glass rounded-2xl p-8 max-w-2xl mx-auto border border-primary/20">
          <Sparkles className="h-8 w-8 text-primary mx-auto mb-4" />
          <h3 className="font-display font-semibold text-2xl mb-3">Not Sure What You Need?</h3>
          <p className="text-muted-foreground mb-6">
            Book a free 30-minute strategy call. We'll assess your needs, provide honest recommendations,
            and create a custom quote with no obligation.
          </p>
          <Button asChild size="lg" className="bg-gradient-to-r from-primary to-secondary">
            <a href={calComUrl} target="_blank" rel="noopener noreferrer">
              Book Free Strategy Call
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
