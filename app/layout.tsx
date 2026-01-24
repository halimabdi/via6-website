import type { Metadata } from "next"
import "./globals.css"
import { SchemaMarkup } from "@/components/schema-markup"

export const metadata: Metadata = {
  title: "Via6 AI Labs | AI Automation & Web Development | Toronto",
  description: "Toronto-based AI automation agency. We build n8n workflows, AI agents, and Next.js web apps that eliminate manual work and scale your business. Founding client pricing available.",
  keywords: "n8n automation Toronto, AI agents, workflow automation, Next.js development Toronto, web development Toronto, business automation, n8n agency Canada, automation agency Toronto",
  authors: [{ name: "Via6 AI Labs Inc." }],
  metadataBase: new URL("https://via6ai.com"),
  openGraph: {
    title: "Via6 AI Labs | AI Automation & Web Development Experts",
    description: "We build n8n workflows, AI agents, and modern web apps. Toronto-based automation & development agency.",
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
    title: "Via6 AI Labs | AI Automation & Web Development",
    description: "We build n8n workflows, AI agents, and modern web apps that scale your business.",
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
      <body className="antialiased">{children}</body>
    </html>
  )
}
