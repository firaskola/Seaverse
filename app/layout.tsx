import type React from "react"
import type { Metadata } from "next"
import { Outfit, Space_Grotesk } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import CustomCursor from "@/components/custom-cursor"
import ProgressIndicator from "@/components/progress-indicator"
import Script from "next/script"

// SEO: Optimized font loading with preload and display swap for performance
const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
  preload: true,
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
  preload: true,
})

// SEO: Comprehensive metadata with Open Graph, Twitter Cards, and all essential SEO tags
export const metadata: Metadata = {
  title: {
    default: "Seaverse | Engineering the Ocean's Future with Precision, Innovation & Depth",
    template: "%s | Seaverse - Marine Technology & Ocean Innovation"
  },
  description: "Seaverse is a pioneering marine technology company specializing in underwater welding robotics (REXWELD AI), artificial ocean laboratories (GENIX), spirulina biotechnology, water quality assessment, and sustainable marine cultivation. Engineering the ocean's future through precision, innovation, and depth.",
  keywords: [
    "marine technology",
    "underwater welding",
    "ocean robotics",
    "REXWELD AI",
    "artificial ocean laboratory",
    "GENIX",
    "spirulina biotechnology",
    "water quality assessment",
    "sustainable aquaculture",
    "marine innovation",
    "ocean engineering",
    "subsea technology",
    "marine biotechnology",
    "caviar production",
    "astaxanthin",
    "carbon capture",
    "marine restoration",
    "Seaverse",
    "Karnataka India",
    "Mangalore marine tech"
  ],
  authors: [{ name: "Seaverse Technologies", url: "https://seaverse.co" }],
  creator: "Seaverse Technologies",
  publisher: "Seaverse Technologies",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://seaverse.co",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://seaverse.co",
    siteName: "Seaverse",
    title: "Seaverse | Engineering the Ocean's Future with Marine Technology",
    description: "Pioneering marine technology company specializing in underwater robotics, artificial ocean laboratories, and sustainable marine cultivation. Discover REXWELD AI, GENIX Ocean Labs, and cutting-edge biotechnology solutions.",
    images: [
      {
        url: "/Seaverse_new_logo.png",
        width: 1200,
        height: 630,
        alt: "Seaverse - Marine Technology & Ocean Innovation",
        type: "image/png",
      },
      {
        url: "/herophoto.jpeg",
        width: 1200,
        height: 630,
        alt: "Seaverse Ocean Technology Laboratory",
        type: "image/jpeg",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@seaverse",
    creator: "@seaverse",
    title: "Seaverse | Engineering the Ocean's Future",
    description: "Pioneering marine technology: underwater robotics, ocean laboratories, sustainable aquaculture & biotechnology solutions.",
    images: ["/Seaverse_new_logo.png"],
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  icons: {
    icon: [
      { url: "/favicon.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/favicon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
  category: "technology",
}

// SEO: JSON-LD Structured Data for Organization and Website
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Seaverse Technologies",
  alternateName: "Seaverse",
  url: "https://seaverse.co",
  logo: "https://seaverse.co/Seaverse_new_logo.png",
  description: "Pioneering marine technology company specializing in underwater welding robotics, artificial ocean laboratories, and sustainable marine cultivation.",
  foundingDate: "2024",
  founder: {
    "@type": "Person",
    name: "Shreesha H Acharya"
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Mangalore",
    addressRegion: "Karnataka",
    addressCountry: "India"
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-8310862870",
    email: "seaversetechnology@gmail.com",
    contactType: "customer service"
  },
  sameAs: [
    "https://linkedin.com/company/seaverse",
    "https://twitter.com/seaverse"
  ],
  areaServed: "Worldwide",
  knowsAbout: [
    "Marine Technology",
    "Underwater Robotics",
    "Ocean Engineering",
    "Sustainable Aquaculture",
    "Marine Biotechnology"
  ]
}

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Seaverse",
  url: "https://seaverse.co",
  description: "Engineering the Ocean's Future with Precision, Innovation & Depth",
  publisher: {
    "@type": "Organization",
    name: "Seaverse Technologies"
  },
  potentialAction: {
    "@type": "SearchAction",
    target: "https://seaverse.co/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${spaceGrotesk.variable}`}>
      <head>
        {/* SEO: Preload critical fonts for performance */}
        <link
          rel="preload"
          href="/Seaverse_new_logo.png"
          as="image"
          type="image/png"
        />
        
        {/* SEO: JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteJsonLd),
          }}
        />
        
        {/* SEO: Additional meta tags for better indexing */}
        <meta name="theme-color" content="#ff8c00" />
        <meta name="msapplication-TileColor" content="#ff8c00" />
        <meta name="format-detection" content="telephone=no" />
        <link rel="canonical" href="https://seaverse.co" />
      </head>
      <body>
        {/* SEO: Google Analytics 4 - Replace GA_MEASUREMENT_ID with actual ID */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GA_MEASUREMENT_ID');
          `}
        </Script>

        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <ProgressIndicator />
          <CustomCursor />
          <Navbar />
          {/* SEO: Semantic HTML structure with main landmark */}
          <main className="min-h-screen" role="main">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
