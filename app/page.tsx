import { HeroSection } from "@/components/hero-section"
import { ProblemSolutionSection } from "@/components/problem-solution-section"
import { ServicesSection } from "@/components/services-section"
import { IndustryUseCases } from "@/components/industry-use-cases"
import { WebDevelopmentSection } from "@/components/web-development-section-new"
import { ProcessSection } from "@/components/process-section"
import { PricingSection } from "@/components/pricing-section"
import { FAQSection } from "@/components/faq-section"
import { AboutSection } from "@/components/about-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"

export default function HomePage() {
  return (
    <main className="relative min-h-screen bg-background overflow-x-hidden">
      {/* Floating orbs background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-float" />
        <div className="absolute bottom-40 right-20 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[120px] animate-float-delayed" />
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-accent/10 rounded-full blur-[100px] animate-float" />
      </div>

      {/* Grid background */}
      <div className="fixed inset-0 grid-bg pointer-events-none" />

      {/* Content */}
      <div className="relative z-10">
        <Navigation />
        <HeroSection />
        <ProblemSolutionSection />
        <ServicesSection />
        <IndustryUseCases />
        <WebDevelopmentSection />
        <ProcessSection />
        <PricingSection />
        <FAQSection />
        <AboutSection />
        <ContactSection />
        <Footer />
      </div>
    </main>
  )
}
