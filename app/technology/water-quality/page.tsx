import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Check, Download, Calendar } from "lucide-react"
import SectionHeading from "@/components/section-heading"
import WaveSeparator from "@/components/wave-separator"
import ParticleBackground from "@/components/particle-background"
import RippleButton from "@/components/ripple-button"
import ScrollReveal from "@/components/scroll-reveal"
import type { Metadata } from "next"

// SEO: Water Quality page metadata
export const metadata: Metadata = {
  title: "Water Quality Assessment Services | Marine Environmental Monitoring - Seaverse",
  description: "Professional water quality assessment and marine environmental monitoring services by Seaverse. Comprehensive testing including bathymetric surveys, sediment sampling, habitat mapping, metocean surveys, and elemental analysis. Expert marine diagnostics for fisheries, tourism, ports, and environmental protection.",
  keywords: [
    "water quality assessment",
    "marine environmental monitoring",
    "bathymetric surveys",
    "sediment sampling",
    "habitat mapping",
    "metocean surveys",
    "water column profiling",
    "marine pollution testing",
    "ocean water analysis",
    "marine ecosystem monitoring",
    "coastal water quality",
    "environmental marine services",
    "water quality testing India",
    "marine laboratory services",
    "ocean health assessment",
    "marine contamination detection"
  ],
  openGraph: {
    title: "Water Quality Assessment Services | Marine Environmental Monitoring",
    description: "Professional marine water quality assessment services: bathymetric surveys, sediment analysis, habitat mapping, and comprehensive environmental monitoring for marine ecosystems.",
    url: "https://seaverse.co/technology/water-quality",
    images: [
      {
        url: "/images/water_quality.jpg",
        width: 1200,
        height: 630,
        alt: "Seaverse Water Quality Assessment - Marine Environmental Monitoring",
      }
    ],
  },
  twitter: {
    title: "Water Quality Assessment | Marine Environmental Monitoring",
    description: "Professional marine water quality services: bathymetric surveys, sediment analysis, habitat mapping & environmental monitoring.",
    images: ["/images/water_quality.jpg"],
  },
  alternates: {
    canonical: "https://seaverse.co/technology/water-quality",
  },
}

export default function WaterQualityPage() {
  // SEO: JSON-LD structured data for Water Quality services
  const waterQualityServicesJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Water Quality Assessment Services",
    description: "Comprehensive marine water quality assessment and environmental monitoring services",
    provider: {
      "@type": "Organization",
      name: "Seaverse Technologies",
      url: "https://seaverse.co"
    },
    serviceType: "Marine Environmental Monitoring",
    areaServed: "Worldwide",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Water Quality Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Bathymetric Surveys",
            description: "Underwater terrain mapping and depth analysis"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Sediment Sampling",
            description: "Marine sediment analysis and contamination assessment"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Habitat Mapping",
            description: "Marine ecosystem identification and health assessment"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Water Column Profiling",
            description: "Comprehensive water quality analysis at multiple depths"
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
        name: "Water Quality Assessment",
        item: "https://seaverse.co/technology/water-quality"
      }
    ]
  }

  return (
    <>
      {/* SEO: JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(waterQualityServicesJsonLd),
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
            src="/images/water_quality.jpg"
            alt="Seaverse Water Quality Assessment - Marine Environmental Monitoring Services"
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
              SEAVERSE Water Quality Assessment Services
            </h1>
          </ScrollReveal>
          <ScrollReveal animation="fade-up" delay={200}>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              The Ocean's Doctors – Diagnosing Hidden Water Problems Before They Become Emergencies
            </p>
          </ScrollReveal>
        </div>
      </section>

      <WaveSeparator />

      {/* Introduction */}
      <section className="py-20 bg-dark-surface relative" role="region" aria-labelledby="water-quality-intro">
        <ParticleBackground count={15}  />
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal animation="fade-right">
              <div>
                <h2 id="water-quality-intro" className="text-3xl font-bold text-accent-orange mb-6">Meet Your Water's New Best Friend</h2>
                <div className="bg-dark-card/50 p-6 rounded-lg border border-dark-border/50 hover:border-accent-orange/30 transition-all duration-300 mb-6">
                  <h3 className="text-2xl font-bold text-white mb-3">
                    Your Water Is Talking. We Help You Understand It.
                  </h3>
                  <p className="text-gray-300">
                    We translate the complex language of the ocean into simple and actionable insights, so you can make smarter
                    decisions about the water you depend on through advanced marine monitoring technology.
                  </p>
                </div>

                <p className="text-gray-300 mb-6">
                  Our comprehensive water quality assessment services provide detailed analysis and monitoring of marine
                  environments, helping you identify potential issues before they become critical problems using cutting-edge diagnostic tools.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-left" delay={200}>
              <div className="relative">
                <div className="aspect-video relative rounded-lg overflow-hidden border border-dark-border/50 hover:border-accent-orange/30 transition-all duration-300">
                  <Image
                    src="/images/sci2.jpg"
                    alt="Water Quality Assessment Laboratory - Marine Environmental Testing"
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

      {/* Services */}
      <section className="py-20 bg-dark-card relative" role="region" aria-labelledby="water-quality-services">
        <ParticleBackground count={10}  />
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <SectionHeading
              title="The Services You Need"
              subtitle="Comprehensive water quality assessment services for marine environmental monitoring and protection."
            />
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={200}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Bathymetric Surveys",
                  description: "Underwater terrain mapping – we chart the ocean floor so you don't encounter surprises during marine operations.",
                },
                {
                  title: "Sediment Sampling",
                  description: "Marine sediment analysis – examining the ocean floor tells the real environmental story.",
                },
                {
                  title: "Habitat Mapping",
                  description: "Underwater ecosystem monitoring – we identify marine life and assess their health status.",
                },
                {
                  title: "Metocean Surveys",
                  description: "Ocean weather monitoring – tracking tides, currents, waves, and their environmental impact.",
                },
                {
                  title: "Water-Column Profiling",
                  description: "Comprehensive marine health assessment – checking water quality at every depth level.",
                },
                {
                  title: "Nutrient & Chlorophyll Analysis",
                  description: "Algae bloom prediction – measuring nutrients that feed harmful marine algae blooms.",
                },
                {
                  title: "Elemental Analysis",
                  description: "Heavy metal detection – finding toxic contamination in parts per billion concentration.",
                },
                {
                  title: "Particle Size Analysis",
                  description: "Sediment grain analysis – because particle size affects marine ecosystem health.",
                },
                {
                  title: "Organic Compound Characterization",
                  description: "Chemical fingerprinting – detecting oil spills, sewage, and industrial contamination.",
                },
                {
                  title: "Core Logging",
                  description: "Environmental history analysis – reading sediment layers like geological time records.",
                },
                {
                  title: "Radiochemistry",
                  description: "Radioactive contamination detection – tracking nuclear particles from accidents or waste disposal.",
                },
              ].map((service, index) => (
                <article
                  key={index}
                  className="bg-dark-surface/50 p-6 rounded-lg border border-dark-border/50 hover:border-accent-orange/30 transition-all duration-300 hover:-translate-y-1 group"
                >
                  <h3 className="text-xl font-bold text-accent-orange mb-3 group-hover:text-accent-orange transition-colors duration-300">{service.title}</h3>
                  <p className="text-gray-300">{service.description}</p>
                </article>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <WaveSeparator />

      {/* Why This Matters */}
      <section className="py-20 bg-dark-surface relative" role="region" aria-labelledby="stakeholder-benefits">
        <ParticleBackground count={15}  />
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <SectionHeading
              title="Why This Matters to You?"
              subtitle="How our water quality assessment services benefit different marine industry stakeholders."
            />
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={200}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Fishery Manager",
                  subtitle: "We'll tell you why your catch is declining, before it's too late.",
                  features: [
                    "Early detection of harmful algal blooms",
                    "Monitoring dissolved oxygen levels",
                    "Identification of pollution sources affecting fish stocks"
                  ]
                },
                {
                  title: "Tourism Operator",
                  subtitle: "Know that your water is safe before visitors notice problems.",
                  features: [
                    "Regular beach and water quality certifications",
                    "Predictive modeling for potential contamination events",
                    "Rapid response testing during environmental incidents"
                  ]
                },
                {
                  title: "Port Engineer",
                  subtitle: "Avoid million dollar dredging mistakes with better sediment data.",
                  features: [
                    "Detailed sediment composition analysis",
                    "Contaminant mapping for disposal planning",
                    "Hydrodynamic modeling for sedimentation prediction"
                  ]
                },
                {
                  title: "Environmentalist",
                  subtitle: "Get the hard proof you need to hold polluters accountable.",
                  features: [
                    "Forensic water quality analysis",
                    "Chemical fingerprinting of contaminant sources",
                    "Expert testimony and documentation for legal proceedings"
                  ]
                }
              ].map((stakeholder, index) => (
                <article key={index} className="bg-dark-card/50 p-6 rounded-lg border border-dark-border/50 hover:border-accent-orange/30 transition-all duration-300 group">
                  <h3 className="text-xl font-bold text-accent-orange mb-4 group-hover:text-accent-orange transition-colors duration-300">{stakeholder.title}</h3>
                  <p className="text-gray-300 mb-4">{stakeholder.subtitle}</p>
                  <ul className="space-y-3" role="list">
                    {stakeholder.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <div className="p-1.5 bg-accent-orange/10 rounded-lg mr-3 group-hover:bg-accent-orange/20 transition-colors duration-300">
                          <Check className="text-accent-orange" size={16} aria-hidden="true" />
                        </div>
                        <span className="text-gray-300 text-sm">{feature}</span>
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

      {/* How We Work */}
      <section className="py-20 bg-dark-card relative" role="region" aria-labelledby="assessment-process">
        <ParticleBackground count={10}  />
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <SectionHeading
              title="How We Work?"
              subtitle="Our proven process for delivering accurate and actionable water quality assessments."
              centered
            />
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={200}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                {
                  title: "Assessment",
                  description: "We analyze your water quality needs and design a comprehensive testing plan tailored to your specific requirements."
                },
                {
                  title: "Analysis",
                  description: "Our marine experts conduct thorough testing and data collection using advanced environmental monitoring equipment."
                },
                {
                  title: "Action",
                  description: "We provide clear, actionable insights and recommendations for marine environmental improvement and protection."
                }
              ].map((step, index) => (
                <article key={index} className="bg-dark-surface/50 p-6 rounded-lg border border-dark-border/50 hover:border-accent-orange/30 transition-all duration-300 group">
                  <div className="w-12 h-12 bg-accent-orange/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-accent-orange/20 transition-colors duration-300">
                    <span className="text-accent-orange font-bold text-xl">{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-bold text-accent-orange mb-3 group-hover:text-accent-orange transition-colors duration-300">{step.title}</h3>
                  <p className="text-gray-300">{step.description}</p>
                </article>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <WaveSeparator />

      {/* Get Started */}
      <section className="py-20 bg-dark-surface relative" role="region" aria-labelledby="get-started">
        <ParticleBackground count={15}  />
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal>
            <SectionHeading
              title="Ready to Get Started?"
              subtitle="Contact us today to schedule your comprehensive water quality assessment and marine environmental monitoring."
              centered
            />
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={200}>
            <div className="max-w-2xl mx-auto">
              <div className="bg-dark-card/50 p-8 rounded-lg border border-dark-border/50 hover:border-accent-orange/30 transition-all duration-300">
                <h3 className="text-2xl font-bold text-accent-orange mb-6">Schedule Your Assessment</h3>
                <div className="space-y-4">
                  <a href="mailto:seaversetechnology@gmail.com?subject=Water Quality Assessment Consultation Request" className="w-full">
                    <Button className="w-full bg-accent-orange hover:bg-accent-orange/80 text-white">
                      Request Consultation
                    </Button>
                  </a>
                  <Button
                    variant="outline"
                    className="w-full border-accent-orange text-accent-orange hover:bg-accent-orange hover:text-white"
                    aria-label="Download water quality assessment brochure"
                  >
                    Download Brochure
                  </Button>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
