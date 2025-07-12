import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Check, ArrowRight, Zap, Shield, Users, TrendingUp } from "lucide-react"
import SectionHeading from "@/components/section-heading"
import WaveSeparator from "@/components/wave-separator"
import ParticleBackground from "@/components/particle-background"
import ScrollReveal from "@/components/scroll-reveal"
import type { Metadata } from "next"

// SEO: REXWELD AI page metadata
export const metadata: Metadata = {
  title: "REXWELD AI | Advanced Underwater Welding Technology - Seaverse",
  description: "Discover REXWELD AI - revolutionary underwater welding technology by Seaverse. Advanced marine welding solutions with AI-powered precision, real-time monitoring, and automated quality control. Transforming underwater construction, ship repair, and offshore infrastructure maintenance with cutting-edge robotics.",
  keywords: [
    "REXWELD AI",
    "underwater welding technology",
    "marine welding solutions",
    "AI-powered underwater welding",
    "robotic underwater welding",
    "offshore welding automation",
    "underwater construction technology",
    "marine infrastructure repair",
    "ship repair technology",
    "underwater welding robotics",
    "AI welding systems",
    "marine welding automation",
    "underwater welding AI",
    "offshore welding solutions",
    "marine construction technology",
    "underwater welding innovation"
  ],
  openGraph: {
    title: "REXWELD AI | Advanced Underwater Welding Technology",
    description: "Revolutionary AI-powered underwater welding technology: precision robotics, real-time monitoring, and automated quality control for marine construction and offshore infrastructure.",
    url: "https://seaverse.co/technology/rexweld-ai",
    images: [
      {
        url: "/images/rexweld.jpg",
        width: 1200,
        height: 630,
        alt: "REXWELD AI - Advanced Underwater Welding Technology",
      }
    ],
  },
  twitter: {
    title: "REXWELD AI | Advanced Underwater Welding Technology",
    description: "Revolutionary AI-powered underwater welding: precision robotics, real-time monitoring & automated quality control for marine construction.",
    images: ["/images/rexweld.jpg"],
  },
  alternates: {
    canonical: "https://seaverse.co/technology/rexweld-ai",
  },
}

export default function RexweldAIPage() {
  // SEO: JSON-LD structured data for REXWELD AI product
  const rexweldAIProductJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "REXWELD AI",
    description: "Advanced AI-powered underwater welding technology for marine construction and offshore infrastructure",
    brand: {
      "@type": "Brand",
      name: "Seaverse Technologies"
    },
    manufacturer: {
      "@type": "Organization",
      name: "Seaverse Technologies",
      url: "https://seaverse.co"
    },
    category: "Marine Technology",
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
        value: "AI-Powered Underwater Welding"
      },
      {
        "@type": "PropertyValue",
        name: "Application",
        value: "Marine Construction & Offshore Infrastructure"
      },
      {
        "@type": "PropertyValue",
        name: "Key Features",
        value: "Real-time monitoring, Automated quality control, Precision robotics"
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
        name: "REXWELD AI",
        item: "https://seaverse.co/technology/rexweld-ai"
      }
    ]
  }

  return (
    <>
      {/* SEO: JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(rexweldAIProductJsonLd),
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
            src="/images/rexweld.jpg"
            alt="REXWELD AI - Advanced Underwater Welding Technology System"
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
              REXWELD AI
            </h1>
          </ScrollReveal>
          <ScrollReveal animation="fade-up" delay={200}>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              The Future of Underwater Welding Technology - AI-Powered Marine Construction
            </p>
          </ScrollReveal>
        </div>
      </section>

      <WaveSeparator />

      {/* Introduction */}
      <section className="py-20 bg-dark-surface relative" role="region" aria-labelledby="rexweld-intro">
        <ParticleBackground count={15} color="rgba(255, 140, 0, 0.05)" />
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal animation="fade-right">
              <div>
                <h2 id="rexweld-intro" className="text-3xl font-bold text-accent-orange mb-6">Welding Where Humans Can't Go</h2>
                <div className="bg-dark-card/50 p-6 rounded-lg border border-dark-border/50 hover:border-accent-orange/30 transition-all duration-300 mb-6">
                  <h3 className="text-2xl font-bold text-accent-orange mb-3">
                    The Problem: Traditional Underwater Welding is Dangerous and Expensive
                  </h3>
                  <p className="text-gray-300">
                    Current underwater welding operations require highly skilled divers working in hazardous conditions, 
                    with limited precision and high costs. REXWELD AI revolutionizes this process with autonomous, 
                    AI-powered underwater welding technology that delivers superior results safely and efficiently.
                  </p>
                </div>

                <div className="bg-dark-card/50 p-6 rounded-lg border border-dark-border/50 hover:border-accent-orange/30 transition-all duration-300">
                  <h3 className="text-2xl font-bold text-accent-orange mb-3">
                    The Solution: AI-Powered Precision Underwater Welding
                  </h3>
                  <p className="text-gray-300">
                    REXWELD AI combines advanced robotics, artificial intelligence, and marine engineering to perform 
                    underwater welding operations with unprecedented precision, safety, and quality control in marine environments.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-left" delay={200}>
              <div className="relative">
                <div className="aspect-video relative rounded-lg overflow-hidden border border-dark-border/50 hover:border-accent-orange/30 transition-all duration-300">
                  <Image
                    src="/images/rex1.jpg"
                    alt="REXWELD AI underwater welding robot in action - marine construction technology"
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
      <section className="py-20 bg-dark-card relative" role="region" aria-labelledby="rexweld-features">
        <ParticleBackground count={10} color="rgba(255, 140, 0, 0.05)" />
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <SectionHeading
              title="Revolutionary Features"
              subtitle="Advanced AI-powered underwater welding technology capabilities that transform marine construction and infrastructure maintenance."
              centered
            />
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={200}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: <Zap className="text-accent-orange" size={40} />,
                  title: "AI-Powered Precision",
                  description: "Advanced machine learning algorithms ensure perfect weld quality and consistency in underwater environments."
                },
                {
                  icon: <Shield className="text-accent-orange" size={40} />,
                  title: "Real-Time Monitoring",
                  description: "Continuous quality control and safety monitoring throughout the underwater welding process."
                },
                {
                  icon: <Users className="text-accent-orange" size={40} />,
                  title: "Autonomous Operation",
                  description: "Fully automated underwater welding operations reducing human risk and increasing efficiency."
                },
                {
                  icon: <TrendingUp className="text-accent-orange" size={40} />,
                  title: "Cost Effective",
                  description: "Significantly reduces operational costs compared to traditional underwater welding methods."
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

      {/* Technical Specifications */}
      <section className="py-20 bg-dark-surface relative" role="region" aria-labelledby="technical-specs">
        <ParticleBackground count={15} color="rgba(255, 140, 0, 0.05)" />
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <SectionHeading
              title="Technical Specifications"
              subtitle="Advanced technical capabilities and specifications of REXWELD AI underwater welding technology."
            />
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={200}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-accent-orange mb-6">System Capabilities</h3>
                <div className="space-y-4">
                  {[
                    "Operating depth: Up to 300 meters",
                    "Welding accuracy: ±0.1mm precision",
                    "Multiple welding processes: TIG, MIG, Stick",
                    "Real-time quality monitoring and control",
                    "Automated defect detection and correction",
                    "Remote operation and monitoring capabilities"
                  ].map((spec, index) => (
                    <div key={index} className="flex items-start">
                      <div className="p-2 bg-accent-orange/10 rounded-lg mr-3">
                        <Check className="text-accent-orange" size={18} aria-hidden="true" />
                      </div>
                      <span className="text-gray-300">{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-accent-orange mb-6">AI & Control Systems</h3>
                <div className="space-y-4">
                  {[
                    "Advanced computer vision for weld path planning",
                    "Machine learning for quality prediction",
                    "Adaptive welding parameters optimization",
                    "Predictive maintenance algorithms",
                    "Integration with existing marine systems",
                    "Cloud-based data analytics and reporting"
                  ].map((spec, index) => (
                    <div key={index} className="flex items-start">
                      <div className="p-2 bg-accent-orange/10 rounded-lg mr-3">
                        <Check className="text-accent-orange" size={18} aria-hidden="true" />
                      </div>
                      <span className="text-gray-300">{spec}</span>
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
              title="Applications"
              subtitle="Industries and use cases where REXWELD AI transforms underwater welding operations."
              centered
            />
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={200}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Offshore Oil & Gas",
                  description: "Pipeline repairs, platform maintenance, and underwater infrastructure welding for offshore energy operations.",
                  image: "/images/rex2.jpg"
                },
                {
                  title: "Ship Repair & Maintenance",
                  description: "Hull repairs, propeller welding, and underwater vessel maintenance without dry-docking requirements.",
                  image: "/images/rex3.jpg"
                },
                {
                  title: "Marine Construction",
                  description: "Bridge construction, port infrastructure, and underwater structural welding for marine projects.",
                  image: "/images/rex4.webp"
                },
                {
                  title: "Underwater Pipelines",
                  description: "Pipeline installation, repair, and maintenance for underwater utility and transportation systems.",
                  image: "/images/rex5.jpg"
                },
                {
                  title: "Renewable Energy",
                  description: "Offshore wind farm installation, maintenance, and underwater cable welding for renewable energy projects.",
                  image: "/images/rex6.jpg"
                },
                {
                  title: "Naval & Defense",
                  description: "Military vessel repairs, submarine maintenance, and underwater defense infrastructure welding.",
                  image: "/images/weld.jpg"
                }
              ].map((application, index) => (
                <article key={index} className="bg-dark-surface/50 rounded-lg overflow-hidden border border-dark-border/50 hover:border-accent-orange/30 transition-all duration-300 group">
                  <div className="aspect-video relative">
                    <Image
                      src={application.image}
                      alt={`REXWELD AI application in ${application.title} - underwater welding technology`}
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
              title="Why Choose REXWELD AI?"
              subtitle="Advantages and benefits of implementing AI-powered underwater welding technology in your marine operations."
            />
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={200}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Enhanced Safety",
                  description: "Eliminates human risk in hazardous underwater welding environments while maintaining superior quality standards.",
                  benefits: [
                    "Zero risk to human divers",
                    "Reduced insurance costs",
                    "Improved workplace safety records"
                  ]
                },
                {
                  title: "Superior Quality",
                  description: "AI-powered precision ensures consistent, high-quality welds that exceed traditional underwater welding standards.",
                  benefits: [
                    "Consistent weld quality",
                    "Real-time defect detection",
                    "Automated quality documentation"
                  ]
                },
                {
                  title: "Cost Efficiency",
                  description: "Significant reduction in operational costs compared to traditional underwater welding methods and techniques.",
                  benefits: [
                    "Lower operational costs",
                    "Reduced project timelines",
                    "Minimal equipment maintenance"
                  ]
                },
                {
                  title: "Operational Flexibility",
                  description: "24/7 operation capability with remote monitoring and control for maximum operational efficiency.",
                  benefits: [
                    "Continuous operation capability",
                    "Remote monitoring and control",
                    "Adaptable to various environments"
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
              title="Ready to Transform Your Underwater Operations?"
              subtitle="Contact us to learn more about implementing REXWELD AI technology in your marine welding operations."
              centered
            />
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={200}>
            <div className="max-w-2xl mx-auto">
              <div className="bg-dark-card/50 p-8 rounded-lg border border-dark-border/50 hover:border-accent-orange/30 transition-all duration-300">
                <h3 className="text-2xl font-bold text-accent-orange mb-6">Get REXWELD AI for Your Operations</h3>
                <div className="space-y-4">
                  <a href="mailto:seaversetechnology@gmail.com?subject=REXWELD AI Technology Inquiry" className="w-full">
                    <Button className="w-full bg-accent-orange hover:bg-accent-orange/80 text-white">
                      Request Demo
                    </Button>
                  </a>
                  <Button
                    variant="outline"
                    className="w-full border-accent-orange text-accent-orange hover:bg-accent-orange hover:text-white"
                    aria-label="Download REXWELD AI technical specifications"
                  >
                    Download Technical Specs
                  </Button>
                </div>
                <p className="text-gray-300 mt-6 text-sm">
                  Join the future of underwater welding with REXWELD AI technology
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
