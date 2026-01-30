import { Bot, Workflow, Code2, Server, Globe, Code, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function ServicesSection() {
  const services = [
    {
      icon: Bot,
      title: "AI Agents & Automation",
      description: "Intelligent AI agents that handle customer service, data processing, and decision-making autonomously using Claude, GPT-4, and custom LLMs.",
      features: ["24/7 autonomous operation", "Natural language understanding", "Multi-platform integration"],
      href: "#contact",
    },
    {
      icon: Workflow,
      title: "No-Code Automation",
      description: "Build powerful automations without writing code using n8n, Make, Zapier. Connect 1000+ apps and automate repetitive tasks in hours, not weeks.",
      features: ["400+ app integrations", "Visual workflow builder", "Self-hosted or cloud options"],
      href: "#contact",
    },
    {
      icon: Code2,
      title: "Custom Code & APIs",
      description: "When no-code isn't enough, we build custom Python, Node.js, and TypeScript automations, APIs, and integrations tailored to your exact needs.",
      features: ["Custom API development", "Complex data transformations", "Scalable microservices"],
      href: "#contact",
    },
    {
      icon: Server,
      title: "Server & Infrastructure Setup",
      description: "Complete server provisioning, configuration, and management. Choose self-hosted on your servers or let us manage everything for you.",
      features: ["Linux server setup & hardening", "Docker & containerization", "Automated backups & monitoring"],
      href: "#contact",
    },
    {
      icon: Globe,
      title: "App & Web Hosting",
      description: "Deploy your apps with self-hosted infrastructure or fully managed hosting. Includes SSL, monitoring, automated backups, and 99.9% uptime.",
      features: ["Self-hosted or managed options", "Git-to-production deployment", "Automatic SSL & monitoring"],
      href: "#contact",
    },
    {
      icon: Code,
      title: "Web & SaaS Development",
      description: "Modern web applications and SaaS products built with Next.js, React, and TypeScript. From landing pages to full-stack applications.",
      features: ["Lightning-fast Next.js 14", "Mobile-first responsive design", "SEO optimized & accessible"],
      href: "#contact",
    },
  ]

  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-4xl sm:text-5xl mb-4">Complete Technology Solutions</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            From servers to SaaS: automation, infrastructure, and development services that scale with your business
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((service, i) => (
            <div
              key={i}
              className="gradient-border rounded-xl p-8 hover:scale-[1.02] transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <service.icon className="h-6 w-6 text-background" />
              </div>
              <h3 className="font-display font-semibold text-2xl mb-3">{service.title}</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed text-pretty">{service.description}</p>
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link href={service.href}>
                <Button variant="ghost" size="sm" className="group-hover:translate-x-1 transition-transform">
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          ))}
        </div>

        {/* Hosting Options: Self-Hosted vs Managed */}
        <div className="glass rounded-2xl p-8 mb-16 max-w-5xl mx-auto">
          <h3 className="font-display font-semibold text-2xl mb-6 text-center">Choose Your Hosting Model</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border border-primary/20 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Server className="h-6 w-6 text-primary" />
                <div>
                  <h4 className="font-semibold text-lg">Self-Hosted</h4>
                  <p className="text-sm text-muted-foreground">You own the infrastructure</p>
                </div>
              </div>
              <ul className="space-y-3 mb-6">
                {[
                  "Full control & data ownership",
                  "Lower long-term costs ($10-50/mo)",
                  "No vendor lock-in",
                  "Unlimited apps & users",
                  "We set up, you maintain (or we can)",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <ArrowRight className="h-3 w-3 text-primary" />
                    </div>
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="text-sm text-muted-foreground">
                <strong>Best for:</strong> Cost-conscious businesses, technical teams, agencies managing multiple clients
              </div>
            </div>

            <div className="border border-secondary/20 rounded-xl p-6 bg-secondary/5">
              <div className="flex items-center gap-3 mb-4">
                <Globe className="h-6 w-6 text-secondary" />
                <div>
                  <h4 className="font-semibold text-lg">Fully Managed</h4>
                  <p className="text-sm text-muted-foreground">We host & manage everything</p>
                </div>
              </div>
              <ul className="space-y-3 mb-6">
                {[
                  "100% hands-off infrastructure",
                  "24/7 monitoring & maintenance",
                  "Automatic updates & security patches",
                  "Priority support included",
                  "Predictable monthly pricing",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                      <ArrowRight className="h-3 w-3 text-secondary" />
                    </div>
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="text-sm text-muted-foreground">
                <strong>Best for:</strong> Businesses wanting hassle-free hosting, startups without dev teams, focus on growth not infrastructure
              </div>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground mb-4">
              Not sure which option is right for you? We'll help you choose based on your needs and budget.
            </p>
            <Link href="#contact">
              <Button variant="outline">Discuss Your Needs</Button>
            </Link>
          </div>
        </div>

        {/* Why Self-Hosted / No-Code vs Custom comparison */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* n8n vs Zapier */}
          <div className="glass rounded-2xl p-8">
            <h3 className="font-display font-semibold text-xl mb-6 text-center">Why Self-Hosted Automation?</h3>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <div className="font-semibold mb-4 text-primary text-sm">Self-Hosted (n8n)</div>
                <ul className="space-y-3">
                  {[
                    "Your data stays on your servers",
                    "No per-task pricing limits",
                    "Advanced conditional logic",
                    "Code when you need it",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <ArrowRight className="h-3 w-3 text-primary" />
                      </div>
                      <span className="text-xs">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="font-semibold mb-4 text-muted-foreground text-sm">Cloud-Only (Zapier)</div>
                <ul className="space-y-3">
                  {["Data on their servers", "$30-600/month at scale", "Limited customization", "No-code only"].map(
                    (item, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <div className="w-5 h-5 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                          <span className="text-xs text-muted-foreground">—</span>
                        </div>
                        <span className="text-xs text-muted-foreground">{item}</span>
                      </li>
                    ),
                  )}
                </ul>
              </div>
            </div>
          </div>

          {/* Self-Hosted vs Cloud Platforms */}
          <div className="glass rounded-2xl p-8">
            <h3 className="font-display font-semibold text-xl mb-6 text-center">Why Self-Hosted Deployment?</h3>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <div className="font-semibold mb-4 text-primary text-sm">Self-Hosted PaaS</div>
                <ul className="space-y-3">
                  {[
                    "Unlimited apps on your server",
                    "$10-50/month total cost",
                    "Full control & customization",
                    "No vendor lock-in",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <ArrowRight className="h-3 w-3 text-primary" />
                      </div>
                      <span className="text-xs">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="font-semibold mb-4 text-muted-foreground text-sm">Cloud Platforms</div>
                <ul className="space-y-3">
                  {["$20+ per project", "$150-500+ at scale", "Limited backend options", "Proprietary platform"].map(
                    (item, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <div className="w-5 h-5 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                          <span className="text-xs text-muted-foreground">—</span>
                        </div>
                        <span className="text-xs text-muted-foreground">{item}</span>
                      </li>
                    ),
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-muted-foreground mb-6">Need a custom solution combining multiple services?</p>
          <Link href="#contact">
            <Button size="lg" className="bg-gradient-to-r from-primary to-secondary">
              Discuss Your Project
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
