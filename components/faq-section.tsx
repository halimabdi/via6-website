"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: "What's the difference between n8n and Zapier?",
      answer: "n8n is self-hosted, giving you complete data control and no per-task pricing limits. You pay once for setup, not per automation execution. Zapier is cloud-only with expensive per-task pricing that scales poorly. n8n also supports advanced logic, custom code, and 400+ integrations."
    },
    {
      question: "How long does it take to build an automation workflow?",
      answer: "Simple workflows (2-3 apps) take 1-3 days. Medium complexity (5-7 apps with logic) takes 1-2 weeks. Complex enterprise workflows take 2-4 weeks. Our Sprint package delivers 1-2 production workflows in 1-2 weeks with full documentation and training."
    },
    {
      question: "Do I need technical knowledge to use the automations you build?",
      answer: "No! We build everything, document it thoroughly, and train your team. You'll understand what's happening without needing to code. We also provide ongoing support to handle any technical issues or changes."
    },
    {
      question: "What apps and services can you integrate?",
      answer: "n8n supports 400+ integrations including: CRMs (Salesforce, HubSpot), databases (PostgreSQL, MySQL, MongoDB), spreadsheets (Google Sheets, Airtable), communication (Slack, Email, SMS), e-commerce (Shopify, WooCommerce), and more. If an app has an API, we can integrate it."
    },
    {
      question: "How much can I actually save with automation?",
      answer: "On average, our clients save 40-200 hours per month. At $25-50/hour labor cost, that's $1,000-10,000/month in savings. Most clients see ROI within 2-4 months. We'll calculate your specific ROI during the free strategy call."
    },
    {
      question: "Is my data safe with n8n automations?",
      answer: "Yes! n8n can be self-hosted on your own servers, meaning your data never leaves your infrastructure. We can also deploy on secure cloud providers with encryption at rest and in transit. We follow security best practices and can work within your compliance requirements."
    },
    {
      question: "What happens if something breaks?",
      answer: "We include error monitoring in all workflows. You'll get instant notifications if something fails. Our retainer clients get priority support to fix issues fast. We also build failsafes and fallback logic to minimize disruption."
    },
    {
      question: "Can you integrate with our custom/legacy systems?",
      answer: "Yes! If your system has an API (REST, SOAP, GraphQL), we can integrate it. For systems without APIs, we can often build workarounds using database connections, file transfers, or RPA (robotic process automation)."
    },
    {
      question: "Do you only work with Toronto businesses?",
      answer: "No! While we're based in Toronto and love supporting Canadian businesses, we work with clients globally. All our services are available remotely, and we communicate via Slack, Zoom, and email."
    },
    {
      question: "What if I only need one simple automation?",
      answer: "Perfect! Our Single Workflow package starts at $497 CAD for simple automations. During your free strategy call, we'll assess if your use case is a good fit and give you an accurate quote."
    }
  ]

  return (
    <section id="faq" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-4xl sm:text-5xl mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about our automation services
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="glass rounded-xl overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-primary/5 transition-colors"
              >
                <span className="font-semibold pr-8">{faq.question}</span>
                <ChevronDown
                  className={`h-5 w-5 text-primary flex-shrink-0 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-5 text-muted-foreground leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center glass rounded-xl p-6">
          <p className="text-muted-foreground mb-3">
            Still have questions? <span className="text-foreground font-medium">Let's chat!</span>
          </p>
          <a
            href="mailto:hello@via6ai.com"
            className="text-primary hover:underline font-medium"
          >
            hello@via6ai.com
          </a>
        </div>
      </div>
    </section>
  )
}
