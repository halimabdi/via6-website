"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Calendar, Send, Mail, MapPin, CheckCircle, ExternalLink } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // TODO: Connect to n8n webhook
    // Example: await fetch('YOUR_N8N_WEBHOOK_URL', { method: 'POST', body: JSON.stringify(formData) })
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  // Cal.com booking URL - update this when you set up Cal.com
  const calComUrl = "https://cal.com/via6ai/strategy-call"

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-4xl sm:text-5xl mb-4">Let&apos;s Build Something Amazing</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Ready to automate your business? Book a free strategy call or send us a message.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Form */}
          <div className="glass rounded-2xl p-8">
            {isSubmitted ? (
              <div className="text-center py-12">
                <CheckCircle className="h-16 w-16 text-primary mx-auto mb-6" />
                <h3 className="font-display font-semibold text-2xl mb-3">Message Sent!</h3>
                <p className="text-muted-foreground">
                  We&apos;ll get back to you within 24 hours. Looking forward to chatting!
                </p>
              </div>
            ) : (
              <>
                <h3 className="font-display font-semibold text-2xl mb-6">Send us a message</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@company.com"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="company">Company</Label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Your Company Inc."
                    />
                  </div>
                  <div>
                    <Label htmlFor="service">What can we help with?</Label>
                    <select
                      id="service"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full h-10 px-3 rounded-md bg-input border border-border text-sm"
                    >
                      <option value="">Select a service...</option>
                      <option value="ai-agents">AI Agents</option>
                      <option value="n8n-automation">n8n Automation</option>
                      <option value="web-development">Web Development</option>
                      <option value="not-sure">Not Sure Yet</option>
                    </select>
                  </div>
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your project..."
                      className="w-full min-h-[120px] px-3 py-2 rounded-md bg-input border border-border text-sm resize-none"
                      required
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin mr-2" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </form>
              </>
            )}
          </div>

          {/* Cal.com Booking + Contact Info */}
          <div className="space-y-6">
            {/* Cal.com Booking Card */}
            <div className="gradient-border rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <Calendar className="h-10 w-10 text-primary" />
                <div>
                  <h3 className="font-display font-semibold text-xl">Book a Free Strategy Call</h3>
                  <p className="text-sm text-muted-foreground">30 minutes • No obligation</p>
                </div>
              </div>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Skip the back-and-forth. Pick a time that works for you and let&apos;s discuss your automation needs.
              </p>
              
              <ul className="space-y-3 mb-6">
                {[
                  "Discover automation opportunities",
                  "Get ROI projections",
                  "Custom recommendations",
                  "No sales pressure",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
              
              <Button
                asChild
                size="lg"
                className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-background"
              >
                <a href={calComUrl} target="_blank" rel="noopener noreferrer">
                  <Calendar className="mr-2 h-4 w-4" />
                  Book Your Free Call
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
              
              <p className="text-xs text-muted-foreground text-center mt-3">
                Powered by Cal.com • Pick any available slot
              </p>
            </div>

            {/* Contact Info Card */}
            <div className="glass rounded-2xl p-6">
              <h4 className="font-semibold mb-4">Or reach out directly</h4>
              <div className="space-y-3">
                <a 
                  href="mailto:hello@via6ai.com" 
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-foreground">Email</div>
                    <div className="text-sm">hello@via6ai.com</div>
                  </div>
                </a>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-foreground">Location</div>
                    <div className="text-sm">Toronto, Ontario, Canada 🇨🇦</div>
                  </div>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-border/50">
                <p className="text-xs text-muted-foreground">
                  💬 We respond to all inquiries within 24 hours on business days.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
