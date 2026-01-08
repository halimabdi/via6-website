import { Search, FileText, Hammer, Rocket } from "lucide-react"

export function ProcessSection() {
  const steps = [
    {
      icon: Search,
      title: "Discovery",
      description: "We analyze your workflows to identify automation opportunities and ROI potential.",
    },
    {
      icon: FileText,
      title: "Proposal",
      description: "Receive a detailed roadmap with timeline, costs, and expected outcomes.",
    },
    {
      icon: Hammer,
      title: "Build",
      description: "Our team builds and tests your automation with regular check-ins.",
    },
    {
      icon: Rocket,
      title: "Launch",
      description: "Go live with full training, documentation, and ongoing support.",
    },
  ]

  return (
    <section id="process" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-4xl sm:text-5xl mb-4">Our Process</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            From idea to implementation in 4 simple steps
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <div key={i} className="relative">
              <div className="glass rounded-xl p-6 h-full">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4">
                  <step.icon className="h-6 w-6 text-background" />
                </div>
                <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center">
                  <span className="font-display font-bold text-sm">{i + 1}</span>
                </div>
                <h3 className="font-display font-semibold text-xl mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 -right-3 w-6 h-0.5 bg-gradient-to-r from-primary to-transparent" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
