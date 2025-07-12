import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Check, Zap, Waves, Wind, Sun, Battery, Leaf } from "lucide-react"
import SectionHeading from "@/components/section-heading"
import WaveSeparator from "@/components/wave-separator"
import ParticleBackground from "@/components/particle-background"
import ScrollReveal from "@/components/scroll-reveal"
import type { Metadata } from "next"

// SEO: Energy Projects page metadata
export const metadata: Metadata = {
  title: "Marine Energy Projects | Sustainable Ocean Energy Solutions - Seaverse",
  description: "Explore Seaverse's innovative marine energy projects and sustainable ocean energy solutions. Wave energy converters, tidal power systems, offshore wind integration, and marine renewable energy technologies. Leading the future of clean ocean energy generation and sustainable marine power systems.",
  keywords: [
    "marine energy projects",
    "ocean energy solutions",
    "wave energy converters",
    "tidal power systems",
    "offshore wind energy",
    "marine renewable energy",
    "sustainable ocean power",
    "marine energy technology",
    "ocean wave energy",
    "tidal energy generation",
    "offshore renewable energy",
    "marine power systems",
    "clean ocean energy",
    "sustainable marine technology",
    "ocean energy harvesting",
    "marine energy innovation"
  ],
  openGraph: {
    title: "Marine Energy Projects | Sustainable Ocean Energy Solutions",
    description: "Innovative marine energy projects: wave energy converters, tidal power systems, offshore wind integration, and sustainable ocean energy technologies.",
    url: "https://seaverse.co/technology/energy-projects",
    images: [
      {
        url: "/images/energy.jpg",
        width: 1200,
        height: 630,
        alt: "Seaverse Marine Energy Projects - Sustainable Ocean Energy Solutions",
      }
    ],
  },
  twitter: {
    title: "Marine Energy Projects | Sustainable Ocean Energy Solutions",
    description: "Innovative marine energy projects: wave energy converters, tidal power systems & sustainable ocean energy technologies.",
    images: ["/images/energy.jpg"],
  },
  alternates: {
    canonical: "https://seaverse.co/technology/energy-projects",
  },
}

export default function EnergyProjectsPage() {
  // SEO: JSON-LD structured data for Marine Energy Projects
  const energyProjectsServiceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Marine Energy Projects",
    description: "Comprehensive marine energy solutions including wave energy converters, tidal power systems, and offshore renewable energy technologies",
    provider: {
      "@type": "Organization",
      name: "Seaverse Technologies",
      url: "https://seaverse.co"
    },
    serviceType: "Marine Renewable Energy",
    areaServed: "Worldwide",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Marine Energy Solutions",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Wave Energy Converters",
            description: "Advanced wave energy harvesting systems for sustainable ocean power generation"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Tidal Power Systems",
            description: "Tidal energy generation technology for consistent renewable power"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Offshore Wind Integration",
            description: "Marine wind energy systems and offshore wind farm development"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Marine Energy Storage",
            description: "Ocean-based energy storage solutions for renewable power systems"
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
        name: "Energy Projects",
        item: "https://seaverse.co/technology/energy-projects"
      }
    ]
  }

  return (
    <>
      {/* SEO: JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(energyProjectsServiceJsonLd),
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
            src="/images/energy.jpg"
            alt="Seaverse Marine Energy Projects - Sustainable Ocean Energy Solutions"
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
              MARINE ENERGY PROJECTS
            </h1>
          </ScrollReveal>
          <ScrollReveal animation="fade-up" delay={200}>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Harnessing the Ocean's Power - Sustainable Marine Energy Solutions for the Future
            </p>
          </ScrollReveal>
        </div>
      </section>

      <WaveSeparator />

      {/* Introduction */}
      <section className="py-20 bg-dark-surface relative" role="region" aria-labelledby="energy-intro">
        <ParticleBackground count={15} color="rgba(255, 140, 0, 0.05)" />
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal animation="fade-right">
              <div>
                <h2 id="energy-intro" className="text-3xl font-bold text-accent-orange mb-6">Powering the Future with Ocean Energy</h2>
                <div className="bg-dark-card/50 p-6 rounded-lg border border-dark-border/50 hover:border-accent-orange/30 transition-all duration-300 mb-6">
                  <h3 className="text-2xl font-bold text-accent-orange mb-3">
                    The Ocean: Earth's Largest Untapped Energy Source
                  </h3>
                  <p className="text-gray-300">
                    The ocean contains immense energy potential through waves, tides, currents, and thermal gradients. 
                    Our marine energy projects harness these natural forces to create sustainable, reliable renewable energy 
                    solutions that can power coastal communities and offshore operations.
                  </p>
                </div>

                <div className="bg-dark-card/50 p-6 rounded-lg border border-dark-border/50 hover:border-accent-orange/30 transition-all duration-300">
                  <h3 className="text-2xl font-bold text-accent-orange mb-3">
                    Our Mission: Clean Energy from the Sea
                  </h3>
                  <p className="text-gray-300">
                    We develop cutting-edge marine energy technologies that convert ocean forces into clean electricity, 
                    reducing dependence on fossil fuels while providing sustainable power solutions for marine industries, 
                    coastal communities, and offshore operations.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-left" delay={200}>
              <div className="relative">
                <div className="aspect-video relative rounded-lg overflow-hidden border border-dark-border/50 hover:border-accent-orange/30 transition-all duration-300">
                  <Image
                    src="/images/energy1.png"
                    alt="Marine energy harvesting systems - wave and tidal power technology"
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

      {/* Energy Technologies */}
      <section className="py-20 bg-dark-card relative" role="region" aria-labelledby="energy-technologies">
        <ParticleBackground count={10} color="rgba(255, 140, 0, 0.05)" />
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <SectionHeading
              title="Marine Energy Technologies"
              subtitle="Innovative systems that harness the ocean's natural forces to generate clean, sustainable energy."
              centered
            />
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={200}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Waves className="text-accent-orange" size={40} />,
                  title: "Wave Energy Converters",
                  description: "Advanced systems that capture energy from ocean waves and convert it into electricity through innovative mechanical and hydraulic systems."
                },
                {
                  icon: <Zap className="text-accent-orange" size={40} />,
                  title: "Tidal Power Systems",
                  description: "Harness the predictable power of tides with underwater turbines and tidal barrages for consistent renewable energy generation."
                },
                {
                  icon: <Wind className="text-accent-orange" size={40} />,
                  title: "Offshore Wind Integration",
                  description: "Combine offshore wind farms with marine energy systems for hybrid renewable energy solutions with enhanced reliability."
                },
                {
                  icon: <Sun className="text-accent-orange" size={40} />,
                  title: "Ocean Thermal Energy",
                  description: "Utilize temperature differences in ocean water to generate power through Ocean Thermal Energy Conversion (OTEC) systems."
                },
                {
                  icon: <Battery className="text-accent-orange" size={40} />,
                  title: "Marine Energy Storage",
                  description: "Underwater energy storage systems that provide grid stability and energy security for marine renewable energy projects."
                },
                {
                  icon: <Leaf className="text-accent-orange" size={40} />,
                  title: "Hybrid Energy Systems",
                  description: "Integrated marine energy solutions combining multiple renewable sources for maximum efficiency and reliability."
                }
              ].map((technology, index) => (
                <article key={index} className="bg-dark-surface/50 p-6 rounded-lg border border-dark-border/50 hover:border-accent-orange/30 transition-all duration-300 hover:-translate-y-1 group">
                  <div className="flex items-center justify-center w-16 h-16 bg-accent-orange/10 rounded-full mb-4 group-hover:bg-accent-orange/20 transition-colors duration-300">
                    {technology.icon}
                  </div>
                  <h3 className="text-xl font-bold text-accent-orange mb-3 group-hover:text-accent-orange transition-colors duration-300">{technology.title}</h3>
                  <p className="text-gray-300">{technology.description}</p>
                </article>
                ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <WaveSeparator />

      {/* Current Projects */}
      <section className="py-20 bg-dark-surface relative" role="region" aria-labelledby="current-projects">
        <ParticleBackground count={15} color="rgba(255, 140, 0, 0.05)" />
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <SectionHeading
              title="Current Marine Energy Projects"
              subtitle="Ongoing initiatives and developments in sustainable ocean energy generation and marine power systems."
            />
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={200}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Coastal Wave Energy Farm",
                  description: "Development of a 50MW wave energy farm off the coast of Karnataka, India, utilizing advanced wave energy converters to power coastal communities.",
                  image: "/images/energy2.png",
                  features: [
                    "50MW total capacity",
                    "Powers 15,000 homes",
                    "Reduces CO2 emissions by 75,000 tons annually",
                    "Creates 200 local jobs"
                  ]
                },
                {
                  title: "Tidal Energy Research Station",
                  description: "Pilot tidal energy project studying optimal turbine placement and energy generation patterns in high-tide coastal areas.",
                  image: "/images/energy3.jpeg",
                  features: [
                    "Advanced tidal turbine testing",
                    "Real-time energy monitoring",
                    "Environmental impact assessment",
                    "Technology optimization research"
                  ]
                },
                {
                  title: "Offshore Wind-Wave Hybrid",
                  description: "Innovative hybrid system combining offshore wind turbines with wave energy converters for enhanced power generation efficiency.",
                  image: "/images/energy1.png",
                  features: [
                    "Dual energy source utilization",
                    "Increased energy reliability",
                    "Reduced installation costs",
                    "Enhanced grid stability"
                  ]
                },
                {
                  title: "Marine Energy Storage Hub",
                  description: "Underwater energy storage facility that stores excess renewable energy and provides grid balancing services for marine energy systems.",
                  image: "/images/energy.jpg",
                  features: [
                    "100MWh storage capacity",
                    "Grid stabilization services",
                    "Renewable energy integration",
                    "24/7 power availability"
                  ]
                }
              ].map((project, index) => (
                <article key={index} className="bg-dark-card/50 rounded-lg overflow-hidden border border-dark-border/50 hover:border-accent-orange/30 transition-all duration-300 group">
                <div className="aspect-video relative">
                  <Image
                      src={project.image}
                      alt={`${project.title} - marine energy project`}
                    fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-surface to-transparent"></div>
                </div>
                <div className="p-6">
                    <h3 className="text-xl font-bold text-accent-orange mb-3 group-hover:text-accent-orange transition-colors duration-300">{project.title}</h3>
                    <p className="text-gray-300 mb-4">{project.description}</p>
                    <ul className="space-y-2" role="list">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <div className="p-1.5 bg-accent-orange/10 rounded-lg mr-3 group-hover:bg-accent-orange/20 transition-colors duration-300">
                            <Check className="text-accent-orange" size={16} aria-hidden="true" />
                        </div>
                          <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
              </div>
            </ScrollReveal>
                  </div>
      </section>

      <WaveSeparator />

      {/* Benefits & Impact */}
      <section className="py-20 bg-dark-card relative" role="region" aria-labelledby="benefits-impact">
        <ParticleBackground count={10} color="rgba(255, 140, 0, 0.05)" />
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <SectionHeading
              title="Environmental & Economic Benefits"
              subtitle="The positive impact of marine energy projects on environment, economy, and sustainable development."
              centered
            />
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={200}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "Carbon Reduction",
                  value: "1M+ tons",
                  description: "CO2 emissions prevented annually through our marine energy projects"
                },
                {
                  title: "Clean Energy",
                  value: "500+ MW",
                  description: "Total renewable energy capacity from ocean-based power generation"
                },
                {
                  title: "Job Creation",
                  value: "2,000+",
                  description: "Direct and indirect jobs created in marine energy sector"
                },
                {
                  title: "Communities Powered",
                  value: "150,000",
                  description: "Homes powered by sustainable marine energy solutions"
                }
              ].map((benefit, index) => (
                <article key={index} className="bg-dark-surface/50 p-6 rounded-lg border border-dark-border/50 hover:border-accent-orange/30 transition-all duration-300 text-center group">
                  <div className="text-3xl font-bold text-accent-orange mb-2 group-hover:scale-110 transition-transform duration-300">{benefit.value}</div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent-orange transition-colors duration-300">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </article>
              ))}
              </div>
            </ScrollReveal>
        </div>
      </section>

      <WaveSeparator />

      {/* Applications */}
      <section className="py-20 bg-dark-surface relative" role="region" aria-labelledby="applications">
        <ParticleBackground count={15} color="rgba(255, 140, 0, 0.05)" />
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <SectionHeading
              title="Marine Energy Applications"
              subtitle="Diverse applications and use cases for sustainable ocean energy solutions across industries."
            />
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={200}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Coastal Communities",
                  description: "Providing reliable, clean energy to coastal towns and cities through wave and tidal power systems.",
                  benefits: [
                    "Reduced electricity costs",
                    "Energy independence",
                    "Job creation in renewable sector",
                    "Improved energy security"
                  ]
                  },
                  {
                  title: "Offshore Operations",
                  description: "Powering offshore oil platforms, research stations, and marine facilities with sustainable energy.",
                  benefits: [
                    "Reduced operational costs",
                    "Lower carbon footprint",
                    "Enhanced energy reliability",
                    "Regulatory compliance"
                  ]
                  },
                  {
                  title: "Island Nations",
                  description: "Comprehensive marine energy solutions for island communities with limited grid connectivity.",
                  benefits: [
                    "Complete energy independence",
                    "Reduced fuel imports",
                    "Sustainable development",
                    "Climate resilience"
                  ]
                  },
                  {
                  title: "Industrial Applications",
                  description: "Large-scale marine energy systems for energy-intensive industries and manufacturing facilities.",
                  benefits: [
                    "Stable energy supply",
                    "Cost-effective power",
                    "Sustainability goals achievement",
                    "Competitive advantage"
                  ]
                }
              ].map((application, index) => (
                <article key={index} className="bg-dark-card/50 p-6 rounded-lg border border-dark-border/50 hover:border-accent-orange/30 transition-all duration-300 group">
                  <h3 className="text-xl font-bold text-accent-orange mb-4 group-hover:text-accent-orange transition-colors duration-300">{application.title}</h3>
                  <p className="text-gray-300 mb-4">{application.description}</p>
                  <ul className="space-y-2" role="list">
                    {application.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-start">
                        <div className="p-1.5 bg-accent-orange/10 rounded-lg mr-3 group-hover:bg-accent-orange/20 transition-colors duration-300">
                          <Check className="text-accent-orange" size={16} aria-hidden="true" />
                        </div>
                        <span className="text-gray-300 text-sm">{benefit}</span>
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
              title="Ready to Harness Ocean Energy?"
              subtitle="Contact us to explore marine energy solutions for your organization and join the sustainable energy revolution."
              centered
            />
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={200}>
            <div className="max-w-2xl mx-auto">
              <div className="bg-dark-card/50 p-8 rounded-lg border border-dark-border/50 hover:border-accent-orange/30 transition-all duration-300">
                <h3 className="text-2xl font-bold text-accent-orange mb-6">Start Your Marine Energy Project</h3>
                <div className="space-y-4">
                  <a href="mailto:seaversetechnology@gmail.com?subject=Marine Energy Projects Consultation Request" className="w-full">
                    <Button className="w-full bg-accent-orange hover:bg-accent-orange/80 text-white">
                      Request Consultation
                    </Button>
                  </a>
                  <Button
                    variant="outline"
                    className="w-full border-accent-orange text-accent-orange hover:bg-accent-orange hover:text-white"
                    aria-label="Download marine energy projects portfolio"
                  >
                    Download Project Portfolio
                  </Button>
                </div>
                <p className="text-gray-300 mt-6 text-sm">
                  Join the future of sustainable energy with ocean-powered solutions
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
