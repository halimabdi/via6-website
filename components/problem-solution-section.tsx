import { X, Check } from "lucide-react"

export function ProblemSolutionSection() {
  const problems = [
    "Manual data entry eating 20+ hours/week",
    "Missed follow-ups losing potential revenue",
    "Repetitive tasks draining team energy",
    "No visibility into workflow bottlenecks",
  ]

  const solutions = [
    "AI agents handle data entry automatically",
    "Automated follow-ups never miss a lead",
    "Team focuses on high-value work only",
    "Real-time dashboards show everything",
  ]

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-4xl sm:text-5xl mb-4">
            Stop Losing Money to{" "}
            <span className="bg-gradient-to-r from-destructive to-destructive/60 bg-clip-text text-transparent">
              Manual Work
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Your competition is automating. Are you falling behind?
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Problems */}
          <div className="space-y-4">
            <h3 className="font-display font-semibold text-2xl mb-6 flex items-center gap-2">
              <X className="h-6 w-6 text-destructive" />
              Without Automation
            </h3>
            {problems.map((problem, i) => (
              <div key={i} className="glass border border-destructive/20 rounded-lg p-6">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <X className="h-3 w-3 text-destructive" />
                  </div>
                  <p className="text-foreground leading-relaxed">{problem}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Solutions */}
          <div className="space-y-4">
            <h3 className="font-display font-semibold text-2xl mb-6 flex items-center gap-2">
              <Check className="h-6 w-6 text-primary" />
              With Via6 AI
            </h3>
            {solutions.map((solution, i) => (
              <div key={i} className="gradient-border rounded-lg p-6">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="h-3 w-3 text-primary" />
                  </div>
                  <p className="text-foreground leading-relaxed">{solution}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
