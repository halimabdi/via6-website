import { Button } from "@/components/ui/button"
import { ArrowRight, Clock, TrendingUp, Zap, MapPin } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  const calComUrl = "https://cal.com/via6ai/strategy-call"
  
  return (
    <section className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/20 mb-8">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm text-muted-foreground">Now accepting clients for Q1 2026</span>
          </div>

          {/* Headline */}
          <h1 className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl mb-6 text-balance">
            AI Agents That Work{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              While You Sleep
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto text-pretty leading-relaxed">
            We build intelligent automation systems that eliminate manual work, connect your tools, and scale your business. 
            <span className="text-foreground font-medium"> Toronto-based. Results-obsessed.</span>
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground group">
              <a href={calComUrl} target="_blank" rel="noopener noreferrer">
                Book Free Strategy Call <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="glass border-white/10 bg-transparent">
              <Link href="#services">See How It Works</Link>
            </Button>
          </div>

          {/* Trust Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {[
              { icon: Clock, label: "200+ hrs saved", sublabel: "Per client monthly" },
              { icon: Zap, label: "99.9% uptime", sublabel: "Monitored 24/7" },
              { icon: TrendingUp, label: "3x ROI", sublabel: "Average first year" },
              { icon: MapPin, label: "Toronto 🇨🇦", sublabel: "Canadian incorporated" },
            ].map((stat, i) => (
              <div key={i} className="glass gradient-border p-6 rounded-xl">
                <stat.icon className="h-6 w-6 text-primary mb-3 mx-auto" />
                <div className="font-display font-semibold text-lg mb-1">{stat.label}</div>
                <div className="text-sm text-muted-foreground">{stat.sublabel}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
