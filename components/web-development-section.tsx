import { Code, Smartphone, Zap, Shield, TrendingUp, Boxes } from "lucide-react"

export function WebDevelopmentSection() {
  const services = [
    {
      icon: Code,
      title: "Landing Pages & Marketing Sites",
      description: "High-converting pages built for speed and SEO",
      price: "$1,500 - $2,500 CAD",
      features: ["Next.js 14 + React", "Tailwind CSS styling", "SEO optimized", "Mobile responsive", "Analytics integrated"]
    },
    {
      icon: Boxes,
      title: "SaaS Applications & MVPs",
      description: "Full-stack web apps with modern architecture",
      price: "$8,000 - $25,000 CAD",
      features: ["Next.js 14 App Router", "PostgreSQL + Prisma", "Authentication (Auth0/Clerk)", "Stripe integration", "Admin dashboards"]
    },
    {
      icon: Smartphone,
      title: "E-commerce & Stores",
      description: "Custom or Shopify stores with automation",
      price: "$4,000 - $12,000 CAD",
      features: ["Shopify customization", "Payment processing", "Inventory automation", "Order workflows", "Email marketing"]
    }
  ]

  const techStack = [
    { category: "Frontend", tech: ["Next.js 14", "React 18", "TypeScript", "Tailwind CSS", "Framer Motion"] },
    { category: "Backend", tech: ["Node.js", "PostgreSQL", "Redis", "Prisma", "tRPC"] },
    { category: "Services", tech: ["Supabase", "Vercel", "Coolify", "Cloudflare", "Stripe"] },
    { category: "Automation", tech: ["n8n", "Zapier", "Webhooks", "Cron jobs", "API integrations"] }
  ]

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
            Build Fast,{" "}
            <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
              Scale Faster
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            We build modern web applications with automation built-in from day one.
            Your competitors use legacy stacks. You'll use cutting-edge tech.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {services.map((service, i) => (
            <div key={i} className="gradient-border rounded-2xl p-8 hover:scale-105 transition-transform">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-secondary to-primary flex items-center justify-center mb-6">
                <service.icon className="h-6 w-6 text-background" />
              </div>
              <h3 className="font-display font-semibold text-xl mb-2">{service.title}</h3>
              <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{service.description}</p>
              <div className="text-primary font-bold mb-6">{service.price}</div>
              <ul className="space-y-2 border-t border-border/50 pt-4">
                {service.features.map((feature, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Why Different */}
        <div className="glass rounded-2xl p-8 mb-12">
          <h3 className="font-display font-semibold text-2xl mb-8 text-center">Why Our Web Apps Are Different</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <Zap className="h-8 w-8 text-secondary mb-4" />
              <h4 className="font-semibold mb-2">Automation-First Architecture</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Every app we build has automation built-in. Workflows, webhooks, cron jobs—all integrated from day one.
              </p>
            </div>
            <div>
              <Shield className="h-8 w-8 text-secondary mb-4" />
              <h4 className="font-semibold mb-2">Production-Ready Code</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                TypeScript, proper error handling, monitoring, logging. We build for scale, not just for launch.
              </p>
            </div>
            <div>
              <TrendingUp className="h-8 w-8 text-secondary mb-4" />
              <h4 className="font-semibold mb-2">SEO & Performance Optimized</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Server-side rendering, image optimization, meta tags, sitemaps. Your site will rank and load fast.
              </p>
            </div>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="gradient-border rounded-2xl p-8">
          <h3 className="font-display font-semibold text-2xl mb-8 text-center">Our Tech Stack</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {techStack.map((stack, i) => (
              <div key={i}>
                <div className="text-sm font-semibold text-primary mb-3">{stack.category}</div>
                <ul className="space-y-2">
                  {stack.tech.map((tech, j) => (
                    <li key={j} className="text-sm text-muted-foreground flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-secondary" />
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-8 p-4 bg-secondary/10 rounded-lg border border-secondary/20">
            <p className="text-center text-sm">
              <span className="font-semibold text-secondary">💡 Bundle & Save:</span>
              <span className="text-muted-foreground ml-2">Combine web development + automation and get 15% off total project cost</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
