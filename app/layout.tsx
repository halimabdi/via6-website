import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Via6 AI Labs | AI Agents & Automation Experts | Toronto",
  description: "Toronto-based AI automation agency. We build intelligent AI agents and n8n workflows that eliminate manual work, connect your tools, and scale your business. Free strategy call.",
  keywords: "n8n automation Toronto, AI agents, workflow automation, business automation, Toronto tech agency, n8n agency Canada",
  authors: [{ name: "Via6 AI Labs Inc." }],
  metadataBase: new URL("https://via6ai.com"),
  openGraph: {
    title: "Via6 AI Labs | AI Agents & Automation Experts",
    description: "We build AI agents that work while you sleep. Toronto-based automation experts.",
    url: "https://via6ai.com",
    siteName: "Via6 AI Labs",
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Via6 AI Labs | AI Agents & Automation",
    description: "We build AI agents that work while you sleep.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/apple-icon.png",
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
      </head>
      <body className="antialiased">{children}</body>
    </html>
  )
}
