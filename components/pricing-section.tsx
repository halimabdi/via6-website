import { Button } from "@/components/ui/button"
import { Check, Star, Sparkles } from "lucide-react"
import Link from "next/link"

export function PricingSection() {
  const calComUrl = "https://cal.com/via6ai/strategy-call"
  
  const plans = [
    {
      name: "Free Audit",
      price: "$0",
      description: "Discover your automation potential",
      features: [
        "30-minute strategy call",
        "Workflow analysis",
        "ROI projections",
        "Custom recommendations",
        "No obligation",
      ],
      cta: "Book Free Call",
      ctaLink: calComUrl,
      external: true,
      popular: false,
    },
    {
      name: "Sprint",
      price: "$1,997",
      period: "CAD",
      description: "Get your first automation live",
      features: [
        "1-2 production workflows",
        "1-2 week delivery",
        "Full documentation",
        "Team training",
        "14-day support",
      ],
      cta: "Get Started",
      ctaLink: "#contact",
      external: false,
      popular: true,
    },
    {
      name: "Retainer",
      price: "$997",
      period: "CAD/month",
      description: "Ongoing optimization & scaling",
      features: [
        "Ongoing development",
        "Priority support",
        "Monthly strategy calls",
        "Performance monitoring",
        "Cancel anytime",
      ],
      cta: "Let's Talk",
      ctaLink: calComUrl,
      external: true,
      popular: false,
    },
  ]

  const additionalServices = [
    { name: "Single Workflow", price: "$497 - $997 CAD", note: "Perfect for testing the waters" },
    { name: "Multi-Workflow Package (3-5)", price: "$3,500 - $5,500 CAD", note: "" },
    { name: "Custom AI Agent", price: "$2,500 - $8,000 CAD", note: "" },
  ]

  const webDevPricing = [
    { name: "Landing Page", price: "$1,500 - $2,500 CAD" },
    { name: "Small Business Site (5-10 pages)", price: "$2,500 - $5,000 CAD" },
    { name: "E-commerce Store", price: "$4,000 - $12,000 CAD" },
    { name: "Web Application / MVP", price: "$8,000 - $25,000 CAD" },
  ]

  return (
    <section id="pricing" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="font-display font-bold text-4xl sm:text-5xl mb-4">
            Transparent, <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Canadian-Friendly</span> Pricing
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            No hidden fees. All prices in Canadian dollars. 100% money-back guarantee.
          </p>
        </div>

        {/* Single Workflow Callout */}
        <div className="max-w-xl mx-auto mb-12">
          <div className="glass rounded-xl p-4 border border-primary/30 text-center">
            <div className="flex items-center justify-center gap-2 mb-1">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Just need one workflow?</span>
            </div>
            <p className="text-foreground">
              Single Workflow: <span className="font-bold">$497 - $997 CAD</span>
              <span className="text-muted-foreground ml-1">(depends on complexity)</span>
            </p>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
          {plans.map((plan, i) => (
            <div key={i} className={`relative rounded-2xl p-8 ${plan.popular ? "gradient-border scale-105" : "glass"}`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-primary to-secondary text-xs font-semibold flex items-center gap-1 text-background">
                  <Star className="h-3 w-3 fill-current" />
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className="font-display font-semibold text-2xl mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="font-display font-bold text-4xl">{plan.price}</span>
                  {plan.period && <span className="text-sm text-muted-foreground">{plan.period}</span>}
                </div>
                <p className="text-sm text-muted-foreground">{plan.description}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                asChild
                className={`w-full ${plan.popular ? "bg-primary hover:bg-primary/90 text-primary-foreground" : ""}`}
                variant={plan.popular ? "default" : "outline"}
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

        {/* Additional Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-8">
          {/* Custom Projects */}
          <div className="glass rounded-2xl p-6">
            <h3 className="font-display font-semibold text-lg mb-4">Custom & Larger Projects</h3>
            <div className="space-y-3">
              {additionalServices.map((service, index) => (
                <div key={index} className="flex justify-between items-start py-2 border-b border-border/30 last:border-0">
                  <div>
                    <span className="text-sm">{service.name}</span>
                    {service.note && (
                      <span className="text-xs text-muted-foreground block">{service.note}</span>
                    )}
                  </div>
                  <span className="text-sm text-primary font-medium whitespace-nowrap ml-4">{service.price}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Web Development */}
          <div className="glass rounded-2xl p-6">
            <h3 className="font-display font-semibold text-lg mb-4">Web Development</h3>
            <div className="space-y-3">
              {webDevPricing.map((service, index) => (
                <div key={index} className="flex justify-between items-center py-2 border-b border-border/30 last:border-0">
                  <span className="text-sm">{service.name}</span>
                  <span className="text-sm text-primary font-medium whitespace-nowrap ml-4">{service.price}</span>
                </div>
              ))}
            </div>
            <div className="mt-4 p-3 bg-secondary/10 rounded-lg">
              <p className="text-xs text-center">
                <span className="text-secondary font-semibold">Bundle & Save:</span>
                <span className="text-muted-foreground ml-1">15% off when combining web + automation</span>
              </p>
            </div>
          </div>
        </div>

        {/* Hourly Rate */}
        <div className="text-center mb-8">
          <p className="text-muted-foreground text-sm">
            <span className="text-foreground font-medium">Hourly Rate:</span> $75 - $95 CAD/hour for consulting, training, or smaller tasks (min 2-hour blocks)
          </p>
        </div>

        {/* Bottom CTA */}
        <div className="text-center glass rounded-xl p-6 max-w-xl mx-auto">
          <p className="text-sm text-muted-foreground mb-3">
            <span className="text-foreground font-medium">Not sure what you need?</span> Book a free strategy call. 
            We&apos;ll assess your situation and give an honest recommendation.
          </p>
          <Button asChild variant="outline" size="sm">
            <a href={calComUrl} target="_blank" rel="noopener noreferrer">
              Book Free Strategy Call
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
