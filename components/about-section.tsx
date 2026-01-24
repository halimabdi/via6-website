import { MapPin, Award, Users } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-display font-bold text-4xl sm:text-5xl mb-6">
              New Company,{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Proven Expertise
              </span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Via6 AI Labs is a new Canadian agency, which means you get founding client benefits:
              direct access to the founder, priority treatment, and discounted rates.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We're building our reputation one satisfied client at a time. Your success is our success,
              and we'll go above and beyond to earn your testimonial.
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <span className="text-sm font-semibold text-primary">💯 100% Money-Back Guarantee</span>
            </div>
          </div>

          <div className="space-y-6">
            <div className="gradient-border rounded-xl p-6">
              <MapPin className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-display font-semibold text-xl mb-2">Toronto-Based 🇨🇦</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Proudly Canadian-incorporated. We understand the Canadian market and serve businesses locally and globally.
              </p>
            </div>

            <div className="gradient-border rounded-xl p-6">
              <Award className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-display font-semibold text-xl mb-2">Founding Client Benefits</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                20% off for early clients, white-glove service, and direct access. No account managers, just results.
              </p>
            </div>

            <div className="gradient-border rounded-xl p-6">
              <Users className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-display font-semibold text-xl mb-2">Results-Obsessed</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We're building our portfolio. That means you get our absolute best work and attention.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
