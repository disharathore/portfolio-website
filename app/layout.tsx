import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Patrick_Hand, Fira_Code } from "next/font/google";
import SketchbookLayout from "@/components/SketchbookLayout";
import Navigation from "@/components/Navigation";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { TerminalProvider } from "@/context/TerminalContext";
// Analytics deferred via next/script in component
import { Analytics } from "@/components/Analytics";
import { PERSONAL_LINKS, SITE } from "@/lib/links";
import "./globals.css";

const DeferredEnhancements = dynamic(() => import("@/components/DeferredEnhancements"));

const patrickHand = Patrick_Hand({
  weight: "400",
  variable: "--font-hand",
  subsets: ["latin"],
  display: "swap", // Prevent FOIT for faster text rendering
});

const firaCode = Fira_Code({
  weight: "400",
  variable: "--font-code",
  subsets: ["latin"],
  display: "optional", // Fira Code is secondary (monospace only) — don't block render
});

export const metadata: Metadata = {
  // REPLACE:
title: "Disha Rathore | Software Engineer",
description: "Pre-final year CS student skilled in full-stack development, systems programming, and machine learning. Interned at DRDO, IGDTUW, and IIT Roorkee. LeetCode Knight (Top 5%).",
keywords: ["Disha Rathore", "Software Engineer", "Full Stack Developer", "Machine Learning", "DRDO", "LeetCode Knight", "DSA", "Systems Programming"],
  authors: [{ name: SITE.name, url: PERSONAL_LINKS.linkedin }],
  creator: "Disha Rathore",
  publisher: "Disha Rathore",
  metadataBase: new URL(SITE.url),
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32', type: 'image/x-icon' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE.url,
    title: "Disha Rathore | Software Engineer",
    description: "Final year CS student building production-grade full-stack platforms, AI systems, and hyperlocal marketplaces. LeetCode Knight, Top 5%.",
    siteName: "Disha Rathore Portfolio",
    images: [
      {
        url: '/resources/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Disha Rathore - Software Engineer Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Disha Rathore | Software Engineer",
    description: "Pre-final year CS student skilled in full-stack, systems programming, and ML. Interned at DRDO, IGDTUW, IIT Roorkee.",
    images: ['/resources/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* JokeAPI: dns-prefetch only (non-critical, used on-demand by terminal) */}
        <link rel="dns-prefetch" href="https://v2.jokeapi.dev" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#fdfbf7" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#1a1a1a" media="(prefers-color-scheme: dark)" />

        {/* Structured Data (JSON-LD) for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "WebSite",
                  "@id": `${SITE.url}/#website`,
                  "url": SITE.url,
                  "name": "Disha Rathore Portfolio",
                  "description": "Pre-final year CS student skilled in full-stack development, systems programming, and machine learning.",

                  "publisher": { "@id": "https://portfolio-website-hs3m.vercel.app/#person" }
                },
                {
                  "@type": "Person",
                  "@id": `${SITE.url}/#person`,
                  "name": SITE.name,
                  "url": SITE.url,
                  "jobTitle": "Software Engineer",
                  "worksFor": {
                    "@type": "Organization",
                    "name": "Seeking Opportunities"
                  },
                  "sameAs": [
                    PERSONAL_LINKS.linkedin,
                    PERSONAL_LINKS.github,
                  ]
                }
              ]
            })
          }}
        />
      </head>
      <body
        className={`${patrickHand.variable} ${firaCode.variable} antialiased`}
      >
        <Analytics />
        <ErrorBoundary>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <TerminalProvider>
              <SketchbookLayout>
                <Navigation />
                {children}
              </SketchbookLayout>
              <DeferredEnhancements />
            </TerminalProvider>
          </ThemeProvider>
        </ErrorBoundary>
      </body>
    </html>
  );
}
