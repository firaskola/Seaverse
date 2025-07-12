import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowDown, ArrowRight } from "lucide-react"
import SectionHeading from "@/components/section-heading"
import WaveSeparator from "@/components/wave-separator"
import ParticleBackground from "@/components/particle-background"
import TechnologyCard from "@/components/technology-card"
import Testimonial from "@/components/testimonial"
import NewsletterSignup from "@/components/newsletter-signup"
import ScrollReveal from "@/components/scroll-reveal"
import TimelineItem from "@/components/timeline-item"
import type { Metadata } from "next"

// SEO: Homepage metadata with comprehensive keywords and Open Graph
export const metadata: Metadata = {
  title: "Seaverse | Engineering the Ocean's Future with Marine Technology & Innovation",
  description: "Discover Seaverse's pioneering marine technology solutions: REXWELD AI underwater welding, GENIX artificial ocean laboratories, spirulina biotechnology, and water quality assessment. Engineering tomorrow from the depths of today with precision, innovation, and depth.",
  keywords: [
    "marine technology",
    "underwater welding AI",
    "REXWELD AI",
    "artificial ocean laboratory",
    "GENIX ocean labs",
    "spirulina biotechnology",
    "water quality monitoring",
    "sustainable aquaculture",
    "marine innovation",
    "ocean engineering",
    "subsea robotics",
    "marine biotechnology",
    "underwater maintenance",
    "ocean technology company",
    "marine research",
    "sustainable marine solutions",
    "Karnataka marine tech",
    "India ocean technology"
  ],
  openGraph: {
    title: "Seaverse | Engineering the Ocean's Future with Marine Technology",
    description: "Pioneering marine technology solutions: underwater welding AI, artificial ocean laboratories, and sustainable marine cultivation. Discover the future of ocean engineering.",
    url: "https://seaverse.co",
    images: [
      {
        url: "/herophoto.jpeg",
        width: 1200,
        height: 630,
        alt: "Seaverse Marine Technology - Engineering the Ocean's Future",
      }
    ],
  },
  twitter: {
    title: "Seaverse | Engineering the Ocean's Future",
    description: "Pioneering marine technology: underwater welding AI, ocean laboratories, spirulina biotech & sustainable solutions.",
    images: ["/herophoto.jpeg"],
  },
  alternates: {
    canonical: "https://seaverse.co",
  },
}

export default function Home() {
  // SEO: JSON-LD structured data for homepage
  const homepageJsonLd = {
    "@context": "https://schema.org",
    "@type": ["Organization", "TechnologyCompany"],
    name: "Seaverse Technologies",
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
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Marine Technology Solutions",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Product",
            name: "REXWELD AI",
            description: "Advanced underwater welding technology powered by AI"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Product", 
            name: "GENIX Ocean Labs",
            description: "Artificial ocean laboratories for sustainable aquaculture"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Water Quality Assessment",
            description: "Comprehensive water quality monitoring and assessment services"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Product",
            name: "Spirulina Biotechnology",
            description: "Sustainable marine spirulina cultivation technology"
          }
        }
      ]
    }
  }

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://seaverse.co"
      }
    ]
  }

  return (
    <>
      {/* SEO: JSON-LD structured data for homepage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(homepageJsonLd),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd),
        }}
      />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden" role="banner">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="object-cover w-full h-full"
            poster="/herophoto.jpeg"
            aria-label="Seaverse marine technology hero video"
          >
            <source src="/hero.mp4" type="video/mp4" />
            {/* SEO: Fallback text for screen readers */}
            <p>Your browser does not support the video tag. Seaverse is engineering the ocean's future with marine technology.</p>
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-dark-surface/90 to-dark-surface/70" />
          <ParticleBackground count={30} color="rgba(255, 140, 0, 0.05)" />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center mt-20">
          <ScrollReveal animation="fade-up">
            {/* SEO: Proper H1 with descriptive text */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 font-space-grotesk bg-gradient-to-r from-accent-orange to-accent-orange-light bg-clip-text text-transparent">
              Engineering Tomorrow From The Depths Of Today.
            </h1>
          </ScrollReveal>
          <ScrollReveal animation="fade-up" delay={200}>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Precision. Innovation. Depth. - Pioneering marine technology solutions for underwater welding, ocean laboratories, and sustainable aquaculture.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-dark-surface relative" role="region" aria-labelledby="company-overview">
        <ParticleBackground count={15} color="rgba(255, 140, 0, 0.05)" />
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <ScrollReveal animation="fade-right">
              <div>
                {/* SEO: Proper heading hierarchy */}
                <h2 id="company-overview" className="text-3xl md:text-4xl font-bold text-white mb-6">Marine Technology Innovation</h2>
                <p className="text-gray-300 mb-6">
                  At Seaverse, we're dedicated to revolutionizing underwater technology and providing sustainable marine
                  solutions. Our innovations are designed to explore, protect, and harness the power of our
                  oceans through advanced AI and biotechnology.
                </p>
                <p className="text-gray-300 mb-6">
                  From advanced underwater welding systems like REXWELD AI to artificial ocean laboratories (GENIX), we're pushing the
                  boundaries of what's possible beneath the waves while ensuring environmental sustainability.
                </p>
                <div className="bg-dark-card/50 p-4 border-l-4 border-accent-orange rounded hover:border-accent-orange/80 transition-colors duration-300">
                  <h3 className="text-xl font-bold text-white mb-2">Our Mission</h3>
                  <p className="text-gray-300">
                    To develop sustainable marine technologies that solve critical underwater challenges while
                    preserving our ocean ecosystems for future generations through precision engineering and innovation.
                  </p>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal animation="fade-left" delay={200}>
              <div className="relative h-[400px] rounded-lg overflow-hidden group">
                {/* SEO: Optimized image with proper alt text and loading */}
                <Image
                  src="/images/aquaculture.jpg"
                  alt="Seaverse sustainable aquaculture technology and marine cultivation systems"
                  fill
                  className="object-cover rounded-lg transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-surface to-transparent" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <WaveSeparator />

      {/* Featured Projects */}
      <section className="py-20 bg-dark-card relative" role="region" aria-labelledby="featured-projects">
        <ParticleBackground count={20} color="rgba(255, 140, 0, 0.05)" />
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <SectionHeading
              title="Featured Projects"
              subtitle="Discover our innovative marine solutions that are designed to transform underwater operations and sustainable ocean cultivation."
              centered
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ScrollReveal animation="fade-up" delay={100}>
              <TechnologyCard
                title="Spirulina Biotech"
                description="Sustainable marine spirulina cultivation technology for future-proof nutrition solutions and natural antioxidants."
                imageSrc="/images/spiri.jpg"
                href="/technology/spirulina"
              />
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={200}>
              <TechnologyCard
                title="Water Quality Monitoring"
                description="Comprehensive water quality assessment services to diagnose and prevent marine environmental issues before they become critical."
                imageSrc="/images/water_quality.jpg"
                href="/technology/water-quality"
              />
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={300}>
              <TechnologyCard
                title="REXWELD AI"
                description="Advanced underwater welding technology powered by AI for precise subsea repairs and maintenance operations."
                imageSrc="/images/rexweld.jpg"
                href="/technology/rexweld-ai"
              />
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={400} className="md:col-span-2 lg:col-span-3">
              <TechnologyCard
                title="Genix Ocean Labs"
                description="Artificial ocean laboratories revolutionizing luxury aquaculture and sustainable marine research for premium species cultivation."
                imageSrc="/images/l3.jpg"
                href="/research/genix"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      <WaveSeparator />

      {/* Innovation Timeline */}
      <section className="py-20 bg-dark-surface relative overflow-hidden" role="region" aria-labelledby="innovation-timeline">
        <ParticleBackground count={10} color="rgba(255, 140, 0, 0.05)" />
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <SectionHeading
              title="Innovation Timeline"
              subtitle="Our journey of marine technology breakthroughs and milestones in underwater engineering and sustainable aquaculture."
              centered
            />
          </ScrollReveal>

          <div className="mt-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  year: 2024,
                  title: "Seaverse Founded",
                  description: "Established with a mission to revolutionize marine technology and underwater engineering solutions.",
                  color: "from-blue-500/20 to-accent-orange/20",
                },
                {
                  year: 2024,
                  title: "Ocean Rex Division",
                  description: "Specialized division focused on underwater robotics, AI systems, and subsea maintenance technology.",
                  color: "from-accent-orange/20 to-purple-500/20",
                },
                {
                  year: 2024,
                  title: "Genix Division",
                  description: "Research division focused on marine micro-organisms, biotechnology, and sustainable aquaculture systems.",
                  color: "from-purple-500/20 to-blue-500/20",
                },
                {
                  year: 2025,
                  title: "Spirulina Biotech Launch",
                  description: "Breakthrough in sustainable marine spirulina cultivation technology and natural antioxidant production.",
                  color: "from-blue-500/20 to-accent-orange/20",
                },
                {
                  year: 2026,
                  title: "REXWELD AI Prototype",
                  description: "First successful test of our AI-powered underwater welding system for subsea infrastructure maintenance.",
                  color: "from-accent-orange/20 to-purple-500/20",
                },
                {
                  year: 2026,
                  title: "Astaxanthin Production",
                  description: "Commercial production of nature's most potent antioxidant from sustainable marine algae cultivation.",
                  color: "from-purple-500/20 to-blue-500/20",
                },
              ].map((item, index) => (
                <ScrollReveal key={index} animation="fade-up" delay={index * 100}>
                  <article className="relative group">
                    {/* Year indicator */}
                    <div className="absolute -top-4 left-0 z-10">
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-accent-orange to-accent-orange-light blur-lg opacity-50"></div>
                        <span className="relative text-3xl font-bold text-white font-space-grotesk">
                          {item.year}
                        </span>
                      </div>
                    </div>

                    {/* Card */}
                    <div className={`relative h-full bg-gradient-to-br ${item.color} p-8 rounded-lg backdrop-blur-sm border border-dark-border/30 hover:border-accent-orange/30 transition-all duration-500 group-hover:scale-[1.02]`}>
                      {/* Glow effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-accent-orange/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      {/* Content */}
                      <div className="relative">
                        <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-accent-orange transition-colors duration-300">
                          {item.title}
                        </h3>
                        <p className="text-gray-300 leading-relaxed">
                          {item.description}
                        </p>
                      </div>

                      {/* Connection lines */}
                      {index < 5 && (
                        <>
                          <div className="absolute -bottom-4 left-1/2 w-px h-4 bg-gradient-to-b from-accent-orange/50 to-transparent" aria-hidden="true"></div>
                          <div className="absolute -bottom-4 left-1/2 w-4 h-px bg-gradient-to-r from-accent-orange/50 to-transparent" aria-hidden="true"></div>
                        </>
                      )}
                    </div>
                  </article>
                </ScrollReveal>
              ))}
            </div>

            {/* Floating connection lines */}
            <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
              <div className="absolute top-1/4 left-1/4 w-1/2 h-px bg-gradient-to-r from-transparent via-accent-orange/20 to-transparent"></div>
              <div className="absolute top-1/2 left-1/4 w-1/2 h-px bg-gradient-to-r from-transparent via-accent-orange/20 to-transparent"></div>
              <div className="absolute top-3/4 left-1/4 w-1/2 h-px bg-gradient-to-r from-transparent via-accent-orange/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      <WaveSeparator />

      {/* Testimonials */}
      <section className="py-20 bg-dark-card relative" role="region" aria-labelledby="testimonials">
        <ParticleBackground count={15} color="rgba(255, 140, 0, 0.05)" />
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <SectionHeading
              title="What Our Partners Say"
              subtitle="Hear from the individuals who have experienced the Seaverse difference in marine technology innovation."
              centered
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ScrollReveal animation="fade-up" delay={100}>
              <Testimonial
                quote="Seaverse's REXWELD AI technology will transform our underwater maintenance operations, reducing costs by 40% while improving safety standards significantly."
                author="Shreesha H Acharya"
                role="Founder & CEO"
                company="Seaverse Research & Development"
                imageSrc="/team/4.png"
              />
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={200}>
              <Testimonial
                quote="The Genix Ocean Labs concept is revolutionary. It has the potential to make India a global leader in sustainable aquaculture and marine biotechnology."
                author="Darshith Chandra"
                role="Executive Director"
                company="Seaverse Research & Development"
                imageSrc="/team/2.png"
              />
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={300}>
              <Testimonial
                quote="Their water quality monitoring system has been instrumental in helping us maintain optimal conditions for marine life and environmental sustainability."
                author="Sambit Singh"
                role="Chief Scientist Officer"
                company="Seaverse Research & Development"
                imageSrc="/team/3.png"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      <WaveSeparator />

      {/* Newsletter Section */}
      <section className="py-20 bg-dark-surface relative" role="region" aria-labelledby="newsletter">
        <ParticleBackground count={10} color="rgba(255, 140, 0, 0.05)" />
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <SectionHeading
              title="Stay Connected"
              subtitle="Subscribe to our newsletter for the latest updates on marine technology innovation, underwater engineering breakthroughs, and sustainable ocean solutions."
              centered
            />
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={200}>
            <div className="max-w-2xl mx-auto">
              <NewsletterSignup />
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
