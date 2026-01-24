export function SchemaMarkup() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Via6 AI Labs Inc.",
    "url": "https://via6ai.com",
    "logo": "https://via6ai.com/logo.svg",
    "description": "Toronto-based AI automation agency specializing in n8n workflow automation and AI agents",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Toronto",
      "addressRegion": "ON",
      "addressCountry": "CA"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "hello@via6ai.com",
      "contactType": "Customer Service",
      "availableLanguage": ["en"]
    },
    "sameAs": [
      "https://github.com/halimabdi"
    ]
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "AI Automation & Workflow Automation",
    "provider": {
      "@type": "Organization",
      "name": "Via6 AI Labs Inc."
    },
    "areaServed": {
      "@type": "Country",
      "name": "Canada"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "AI Automation Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "n8n Workflow Automation",
            "description": "Custom workflow automation using n8n connecting 400+ integrations"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AI Agents Development",
            "description": "Custom AI agents for customer service, data processing, and automation"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Web Development",
            "description": "Modern web applications built with Next.js"
          }
        }
      ]
    }
  }

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Via6 AI Labs",
    "image": "https://via6ai.com/logo.svg",
    "@id": "https://via6ai.com",
    "url": "https://via6ai.com",
    "telephone": "",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "",
      "addressLocality": "Toronto",
      "addressRegion": "ON",
      "postalCode": "",
      "addressCountry": "CA"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 43.6532,
      "longitude": -79.3832
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "17:00"
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
    </>
  )
}
