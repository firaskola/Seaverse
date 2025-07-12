import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Check, Shield, Eye, Zap, Wifi, Database, AlertTriangle } from "lucide-react"
import SectionHeading from "@/components/section-heading"
import WaveSeparator from "@/components/wave-separator"
import ParticleBackground from "@/components/particle-background"
import ScrollReveal from "@/components/scroll-reveal"
import type { Metadata } from "next"

// SEO: Aqua Sentinel page metadata
export const metadata: Metadata = {
  title: "Aqua Sentinel | AI-Powered Marine Monitoring System - Seaverse",
  description: "Discover Aqua Sentinel - advanced AI-powered marine monitoring and surveillance system by Seaverse. Real-time ocean monitoring, underwater threat detection, marine ecosystem surveillance, and automated environmental protection. Revolutionary marine security technology for ports, offshore platforms, and coastal areas.",
  keywords: [
    "Aqua Sentinel",
    "marine monitoring system",
    "AI-powered ocean surveillance",
    "underwater threat detection",
    "marine security technology",
    "ocean monitoring sensors",
    "marine ecosystem surveillance",
    "automated marine protection",
    "underwater surveillance system",
    "marine environmental monitoring",
    "ocean security solutions",
    "marine AI technology",
    "underwater monitoring network",
    "marine threat detection",
    "ocean surveillance technology",
    "marine protection systems"
  ],
  openGraph: {
    title: "Aqua Sentinel | AI-Powered Marine Monitoring System",
    description: "Revolutionary AI-powered marine monitoring: real-time ocean surveillance, underwater threat detection, and automated environmental protection for marine ecosystems.",
    url: "https://seaverse.co/technology/aqua-sentinel",
    images: [
      {
        url: "/images/aquasen.png",
        width: 1200,
        height: 630,
        alt: "Aqua Sentinel - AI-Powered Marine Monitoring System",
      }
    ],
  },
  twitter: {
    title: "Aqua Sentinel | AI-Powered Marine Monitoring System",
    description: "Revolutionary AI-powered marine monitoring: real-time ocean surveillance, underwater threat detection & automated environmental protection.",
    images: ["/images/aquasen.png"],
  },
  alternates: {
    canonical: "https://seaverse.co/technology/aqua-sentinel",
  },
}

export default function AquaSentinelPage() {
  // SEO: JSON-LD structured data for Aqua Sentinel product
  const aquaSentinelProductJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Aqua Sentinel",
    description: "Advanced AI-powered marine monitoring and surveillance system for ocean security and environmental protection",
    brand: {
      "@type": "Brand",
      name: "Seaverse Technologies"
    },
    manufacturer: {
      "@type": "Organization",
      name: "Seaverse Technologies",
      url: "https://seaverse.co"
    },
    category: "Marine Security Technology",
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "USD",
      seller: {
        "@type": "Organization",
        name: "Seaverse Technologies"
      }
    },
    additionalProperty: [
      {
        "@type": "PropertyValue",
        name: "Technology Type",
        value: "AI-Powered Marine Monitoring"
      },
      {
        "@type": "PropertyValue",
        name: "Application",
        value: "Ocean Surveillance & Environmental Protection"
      },
      {
        "@type": "PropertyValue",
        name: "Key Features",
        value: "Real-time monitoring, Threat detection, Automated alerts"
      }
    ]
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
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Technology",
        item: "https://seaverse.co/technology"
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Aqua Sentinel",
        item: "https://seaverse.co/technology/aqua-sentinel"
      }
    ]
  }

  return (
    <>
      {/* SEO: JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(aquaSentinelProductJsonLd),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd),
        }}
      />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden" role="banner">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/aqua_senti.jpg"
            alt="Aqua Sentinel - AI-Powered Marine Monitoring and Surveillance System"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark-surface/90 to-dark-surface/70" />
          <ParticleBackground count={20} />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center mt-20">
          <ScrollReveal animation="fade-up">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-space-grotesk bg-gradient-to-r from-accent-orange to-accent-orange-light bg-clip-text text-transparent">
              AQUA SENTINEL
            </h1>
          </ScrollReveal>
          <ScrollReveal animation="fade-up" delay={200}>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              AI-Powered Marine Monitoring & Surveillance Technology - Guardian of the Ocean
            </p>
          </ScrollReveal>
        </div>
      </section>

      <WaveSeparator />

      {/* Introduction */}
      <section className="py-20 bg-dark-surface relative" role="region" aria-labelledby="aqua-sentinel-intro">
        <ParticleBackground count={15} color="rgba(255, 140, 0, 0.05)" />
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal animation="fade-right">
              <div>
                <h2 id="aqua-sentinel-intro" className="text-3xl font-bold text-accent-orange mb-6">The Ocean's Digital Guardian</h2>
                <div className="bg-dark-card/50 p-6 rounded-lg border border-dark-border/50 hover:border-accent-orange/30 transition-all duration-300 mb-6">
                  <h3 className="text-2xl font-bold text-accent-orange mb-3">
                    The Challenge: Blind Spots in Ocean Monitoring
                  </h3>
                  <p className="text-gray-300">
                    Traditional marine monitoring systems are limited, expensive, and often fail to provide real-time insights 
                    into ocean conditions. Critical threats to marine ecosystems and infrastructure go undetected until it's too late.
                  </p>
                </div>

                <div className="bg-dark-card/50 p-6 rounded-lg border border-dark-border/50 hover:border-accent-orange/30 transition-all duration-300">
                  <h3 className="text-2xl font-bold text-accent-orange mb-3">
                    The Solution: AI-Powered Ocean Intelligence
                  </h3>
                  <p className="text-gray-300">
                    Aqua Sentinel deploys advanced AI algorithms, underwater sensors, and real-time analytics to create 
                    a comprehensive marine monitoring network that protects ocean ecosystems and marine infrastructure 24/7.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-left" delay={200}>
              <div className="relative">
                <div className="aspect-video relative rounded-lg overflow-hidden border border-dark-border/50 hover:border-accent-orange/30 transition-all duration-300">
                  <Image
                    src="/images/aquasen2.png"
                    alt="Aqua Sentinel underwater monitoring sensors - marine surveillance technology"
                    fill
                    className="object-cover"
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-accent-orange/10 rounded-full animate-pulse" aria-hidden="true"></div>
                <div
                  className="absolute -top-6 -left-6 w-32 h-32 bg-accent-orange/10 rounded-full animate-pulse"
                  style={{ animationDelay: "1s" }}
                  aria-hidden="true"
                ></div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <WaveSeparator />

      {/* Key Features */}
      <section className="py-20 bg-dark-card relative" role="region" aria-labelledby="aqua-sentinel-features">
        <ParticleBackground count={10} color="rgba(255, 140, 0, 0.05)" />
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <SectionHeading
              title="Advanced Monitoring Capabilities"
              subtitle="Comprehensive AI-powered features that revolutionize marine monitoring and ocean surveillance technology."
              centered
            />
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={200}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Eye className="text-accent-orange" size={40} />,
                  title: "Real-Time Ocean Surveillance",
                  description: "Continuous monitoring of marine environments with advanced computer vision and sensor networks."
                },
                {
                  icon: <Shield className="text-accent-orange" size={40} />,
                  title: "Threat Detection & Alerts",
                  description: "Automated detection of environmental threats, pollution events, and security breaches in marine areas."
                },
                {
                  icon: <Zap className="text-accent-orange" size={40} />,
                  title: "AI-Powered Analytics",
                  description: "Machine learning algorithms analyze patterns and predict potential marine environmental issues."
                },
                {
                  icon: <Wifi className="text-accent-orange" size={40} />,
                  title: "Wireless Sensor Network",
                  description: "Distributed underwater sensors communicate via advanced wireless protocols for comprehensive coverage."
                },
                {
                  icon: <Database className="text-accent-orange" size={40} />,
                  title: "Data Integration Platform",
                  description: "Centralized platform integrating multiple data sources for comprehensive marine intelligence."
                },
                {
                  icon: <AlertTriangle className="text-accent-orange" size={40} />,
                  title: "Emergency Response System",
                  description: "Automated emergency protocols and rapid response coordination for marine incidents."
                }
              ].map((feature, index) => (
                <article key={index} className="bg-dark-surface/50 p-6 rounded-lg border border-dark-border/50 hover:border-accent-orange/30 transition-all duration-300 hover:-translate-y-1 group">
                  <div className="flex items-center justify-center w-16 h-16 bg-accent-orange/10 rounded-full mb-4 group-hover:bg-accent-orange/20 transition-colors duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-accent-orange mb-3 group-hover:text-accent-orange transition-colors duration-300">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </article>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <WaveSeparator />

      {/* Monitoring Capabilities */}
      <section className="py-20 bg-dark-surface relative" role="region" aria-labelledby="monitoring-capabilities">
        <ParticleBackground count={15} color="rgba(255, 140, 0, 0.05)" />
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <SectionHeading
              title="What Aqua Sentinel Monitors"
              subtitle="Comprehensive marine monitoring capabilities covering all aspects of ocean health and security."
            />
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={200}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-accent-orange mb-6">Environmental Monitoring</h3>
                <div className="space-y-4">
                  {[
                    "Water quality parameters (pH, dissolved oxygen, temperature)",
                    "Pollution detection and source identification",
                    "Marine life behavior and migration patterns",
                    "Coral reef health and bleaching events",
                    "Harmful algal bloom detection and prediction",
                    "Microplastic contamination levels"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start">
                      <div className="p-2 bg-accent-orange/10 rounded-lg mr-3">
                        <Check className="text-accent-orange" size={18} aria-hidden="true" />
                      </div>
                      <span className="text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-accent-orange mb-6">Security & Infrastructure</h3>
                <div className="space-y-4">
                  {[
                    "Unauthorized vessel detection and tracking",
                    "Pipeline and cable integrity monitoring",
                    "Underwater infrastructure inspection",
                    "Marine traffic analysis and collision prevention",
                    "Illegal fishing activity detection",
                    "Port and harbor security surveillance"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start">
                      <div className="p-2 bg-accent-orange/10 rounded-lg mr-3">
                        <Check className="text-accent-orange" size={18} aria-hidden="true" />
                      </div>
                      <span className="text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <WaveSeparator />

      {/* Applications */}
      <section className="py-20 bg-dark-card relative" role="region" aria-labelledby="applications">
        <ParticleBackground count={10} color="rgba(255, 140, 0, 0.05)" />
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <SectionHeading
              title="Applications & Use Cases"
              subtitle="Industries and scenarios where Aqua Sentinel transforms marine monitoring and security operations."
              centered
            />
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={200}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Marine Protected Areas",
                  description: "Comprehensive monitoring and protection of marine reserves, national parks, and conservation areas.",
                  image: "/images/coral1.jpg"
                },
                {
                  title: "Offshore Energy Platforms",
                  description: "Security monitoring and environmental compliance for oil rigs, wind farms, and renewable energy installations.",
                  image: "/images/energy1.png"
                },
                {
                  title: "Ports & Harbors",
                  description: "Security surveillance, traffic management, and environmental monitoring for commercial ports and harbors.",
                  image: "/images/oceanlabo.jpg"
                },
                {
                  title: "Aquaculture Operations",
                  description: "Fish farm monitoring, water quality control, and disease outbreak prevention in marine aquaculture.",
                  image: "/images/aquaculture.jpg"
                },
                {
                  title: "Coastal Tourism Areas",
                  description: "Beach safety monitoring, water quality assessment, and tourist area security surveillance.",
                  image: "/images/blue3.jpg"
                },
                {
                  title: "Research Institutions",
                  description: "Long-term marine research data collection, ecosystem studies, and climate change monitoring.",
                  image: "/images/ocean_lab.jpg"
                }
              ].map((application, index) => (
                <article key={index} className="bg-dark-surface/50 rounded-lg overflow-hidden border border-dark-border/50 hover:border-accent-orange/30 transition-all duration-300 group">
                  <div className="aspect-video relative">
                    <Image
                      src={application.image}
                      alt={`Aqua Sentinel application in ${application.title} - marine monitoring technology`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-surface to-transparent"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-accent-orange mb-3 group-hover:text-accent-orange transition-colors duration-300">{application.title}</h3>
                    <p className="text-gray-300">{application.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <WaveSeparator />

      {/* Benefits */}
      <section className="py-20 bg-dark-surface relative" role="region" aria-labelledby="benefits">
        <ParticleBackground count={15} color="rgba(255, 140, 0, 0.05)" />
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <SectionHeading
              title="Why Choose Aqua Sentinel?"
              subtitle="Advantages and benefits of implementing AI-powered marine monitoring technology in your operations."
            />
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={200}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Proactive Protection",
                  description: "Early detection and prevention of marine threats before they become critical environmental or security issues.",
                  benefits: [
                    "24/7 automated monitoring",
                    "Predictive threat analysis",
                    "Rapid response capabilities"
                  ]
                },
                {
                  title: "Cost-Effective Operations",
                  description: "Significant reduction in monitoring costs compared to traditional manual inspection and surveillance methods.",
                  benefits: [
                    "Reduced operational expenses",
                    "Lower maintenance requirements",
                    "Scalable deployment options"
                  ]
                },
                {
                  title: "Data-Driven Insights",
                  description: "Comprehensive analytics and reporting provide actionable insights for informed decision-making.",
                  benefits: [
                    "Real-time data visualization",
                    "Historical trend analysis",
                    "Predictive modeling capabilities"
                  ]
                },
                {
                  title: "Regulatory Compliance",
                  description: "Automated compliance monitoring and reporting for environmental regulations and marine safety standards.",
                  benefits: [
                    "Automated compliance reporting",
                    "Audit trail documentation",
                    "Regulatory alert systems"
                  ]
                }
              ].map((benefit, index) => (
                <article key={index} className="bg-dark-card/50 p-6 rounded-lg border border-dark-border/50 hover:border-accent-orange/30 transition-all duration-300 group">
                  <h3 className="text-xl font-bold text-accent-orange mb-4 group-hover:text-accent-orange transition-colors duration-300">{benefit.title}</h3>
                  <p className="text-gray-300 mb-4">{benefit.description}</p>
                  <ul className="space-y-2" role="list">
                    {benefit.benefits.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <div className="p-1.5 bg-accent-orange/10 rounded-lg mr-3 group-hover:bg-accent-orange/20 transition-colors duration-300">
                          <Check className="text-accent-orange" size={16} aria-hidden="true" />
                        </div>
                        <span className="text-gray-300 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <WaveSeparator />

      {/* Get Started */}
      <section className="py-20 bg-dark-surface relative" role="region" aria-labelledby="get-started">
        <ParticleBackground count={10} color="rgba(255, 140, 0, 0.05)" />
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal>
            <SectionHeading
              title="Ready to Deploy Aqua Sentinel?"
              subtitle="Contact us to learn more about implementing AI-powered marine monitoring technology in your operations."
              centered
            />
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={200}>
            <div className="max-w-2xl mx-auto">
              <div className="bg-dark-card/50 p-8 rounded-lg border border-dark-border/50 hover:border-accent-orange/30 transition-all duration-300">
                <h3 className="text-2xl font-bold text-accent-orange mb-6">Start Marine Monitoring Today</h3>
                <div className="space-y-4">
                  <a href="mailto:seaversetechnology@gmail.com?subject=Aqua Sentinel Marine Monitoring System Inquiry" className="w-full">
                    <Button className="w-full bg-accent-orange hover:bg-accent-orange/80 text-white">
                      Request System Demo
                    </Button>
                  </a>
                  <Button
                    variant="outline"
                    className="w-full border-accent-orange text-accent-orange hover:bg-accent-orange hover:text-white"
                    aria-label="Download Aqua Sentinel system specifications"
                  >
                    Download System Specs
                  </Button>
                </div>
                <p className="text-gray-300 mt-6 text-sm">
                  Protect your marine environment with intelligent monitoring technology
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
