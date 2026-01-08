import { Bot, Workflow, Code, ArrowRight } from "lucide-react"

export function ServicesSection() {
  const services = [
    {
      icon: Bot,
      title: "AI Agents",
      description: "Custom AI agents that handle customer service, data processing, and decision-making autonomously.",
      features: ["24/7 operation", "Natural language understanding", "Multi-platform integration"],
    },
    {
      icon: Workflow,
      title: "n8n Automation",
      description: "Advanced workflow automation connecting your entire tech stack for seamless operations.",
      features: ["400+ integrations", "Complex logic flows", "Error handling & monitoring"],
    },
    {
      icon: Code,
      title: "Web Development",
      description: "Modern web applications built with Next.js, optimized for performance and user experience.",
      features: ["Lightning-fast load times", "Mobile-first design", "SEO optimized"],
    },
  ]

  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-4xl sm:text-5xl mb-4">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            End-to-end automation solutions tailored to your business needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {services.map((service, i) => (
            <div key={i} className="gradient-border rounded-xl p-8 hover:scale-[1.02] transition-transform">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-6">
                <service.icon className="h-6 w-6 text-background" />
              </div>
              <h3 className="font-display font-semibold text-2xl mb-3">{service.title}</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* n8n vs Zapier comparison */}
        <div className="glass rounded-2xl p-8 max-w-3xl mx-auto">
          <h3 className="font-display font-semibold text-2xl mb-6 text-center">Why n8n over Zapier?</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="font-semibold mb-4 text-primary">n8n (Our Choice)</div>
              <ul className="space-y-3">
                {[
                  "Self-hosted for data control",
                  "No per-task pricing limits",
                  "Advanced conditional logic",
                  "Code when you need it",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <ArrowRight className="h-3 w-3 text-primary" />
                    </div>
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="font-semibold mb-4 text-muted-foreground">Zapier</div>
              <ul className="space-y-3">
                {["Cloud-only solution", "Expensive at scale", "Limited customization", "No-code only"].map(
                  (item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                        <span className="text-xs text-muted-foreground">—</span>
                      </div>
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </li>
                  ),
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
