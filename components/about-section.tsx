import { MapPin, Award, Users } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-display font-bold text-4xl sm:text-5xl mb-6">
              Built in Toronto,{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                For the World
              </span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              We're a Canadian-incorporated agency bringing world-class AI automation to businesses that want to scale
              smarter, not harder.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our team combines deep technical expertise with a practical understanding of business operations. We don't
              just build automation—we build systems that make your team more effective and your business more
              profitable.
            </p>
          </div>

          <div className="space-y-6">
            <div className="glass rounded-xl p-6">
              <MapPin className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-display font-semibold text-xl mb-2">Toronto-Based</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Proudly serving Canadian businesses with local support and understanding of the Canadian market.
              </p>
            </div>

            <div className="glass rounded-xl p-6">
              <Award className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-display font-semibold text-xl mb-2">Canadian Incorporated</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Fully registered Canadian business operating with transparency and accountability.
              </p>
            </div>

            <div className="glass rounded-xl p-6">
              <Users className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-display font-semibold text-xl mb-2">Partnership Approach</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We're not just vendors—we're partners invested in your long-term success and growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
