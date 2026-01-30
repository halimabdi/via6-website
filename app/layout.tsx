import type { Metadata } from "next"
import Script from "next/script"
import "./globals.css"
import { SchemaMarkup } from "@/components/schema-markup"

export const metadata: Metadata = {
  title: "Via6 AI Labs | Complete Automation & Infrastructure Solutions | Toronto",
  description: "From servers to SaaS: AI agents, no-code automation, custom development, server infrastructure, and app hosting. Self-hosted or fully managed. Toronto-based technology partner serving Canadian businesses.",
  keywords: "n8n automation Toronto, AI agents, workflow automation, server setup Canada, self-hosted infrastructure, Docker deployment, Coolify hosting, custom API development, Next.js development Toronto, web development Toronto, business automation, automation agency Toronto, managed hosting Canada, PostgreSQL setup, Linux server management, full-stack automation",
  authors: [{ name: "Via6 AI Labs Inc." }],
  metadataBase: new URL("https://via6ai.com"),
  openGraph: {
    title: "Via6 AI Labs | Complete Automation & Infrastructure Solutions",
    description: "AI agents, automation, custom development, server infrastructure & hosting. Self-hosted or fully managed. Complete technology partner for Canadian businesses.",
    url: "https://via6ai.com",
    siteName: "Via6 AI Labs",
    locale: "en_CA",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Via6 AI Labs"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Via6 AI Labs | Complete Automation & Infrastructure Solutions",
    description: "From servers to SaaS: AI agents, automation, development, infrastructure & hosting. Self-hosted or fully managed.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: '/icon.tsx', sizes: '32x32', type: 'image/png' },
      { url: '/logo-icon.svg', sizes: 'any', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.tsx',
    other: [
      {
        rel: 'apple-touch-icon',
        url: '/apple-icon.tsx',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link
          href="https://api.fontshare.com/v2/css?f[]=clash-display@400,500,600,700&f[]=satoshi@400,500,700&display=swap"
          rel="stylesheet"
        />
        <SchemaMarkup />
      </head>
      <body className="antialiased">
        {children}

        {/* Umami Analytics */}
        {process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID && (
          <Script
            async
            src={`${process.env.NEXT_PUBLIC_UMAMI_URL || 'http://100.68.66.127:3005'}/script.js`}
            data-website-id={process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID}
            strategy="afterInteractive"
          />
        )}

        {/* Chatwoot Live Chat Widget */}
        {process.env.NEXT_PUBLIC_CHATWOOT_TOKEN && process.env.NEXT_PUBLIC_CHATWOOT_TOKEN !== 'REPLACE_WITH_YOUR_TOKEN' && (
          <Script id="chatwoot-widget" strategy="lazyOnload">
          {`
            (function(d,t) {
              var BASE_URL="${process.env.NEXT_PUBLIC_CHATWOOT_URL || 'https://chat.via6ai.com'}";
              var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
              g.src=BASE_URL+"/packs/js/sdk.js";
              g.defer = true;
              g.async = true;
              s.parentNode.insertBefore(g,s);
              g.onload=function(){
                window.chatwootSDK.run({
                  websiteToken: '${process.env.NEXT_PUBLIC_CHATWOOT_TOKEN || 'REPLACE_WITH_YOUR_TOKEN'}',
                  baseUrl: BASE_URL
                })
              }
            })(document,"script");
          `}
          </Script>
        )}
      </body>
    </html>
  )
}
