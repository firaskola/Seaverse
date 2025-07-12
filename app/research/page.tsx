import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Microscope, Beaker, Leaf, Waves } from "lucide-react"
import SectionHeading from "@/components/section-heading"
import WaveSeparator from "@/components/wave-separator"
import ParticleBackground from "@/components/particle-background"
import ScrollReveal from "@/components/scroll-reveal"
import type { Metadata } from "next"

// SEO: Research page metadata
export const metadata: Metadata = {
  title: "Marine Research & Development | Ocean Science Innovation - Seaverse",
  description: "Explore Seaverse's cutting-edge marine research and development initiatives. GENIX Ocean Labs, astaxanthin biotechnology, carbon capture solutions, and marine restoration projects. Leading scientific innovation in ocean conservation, marine biotechnology, and sustainable blue economy research.",
  keywords: [
    "marine research",
    "ocean science",
    "marine biotechnology research",
    "GENIX Ocean Labs",
    "astaxanthin research",
    "marine carbon capture",
    "marine restoration research",
    "ocean conservation science",
    "marine biology research",
    "sustainable marine research",
    "blue economy research",
    "marine ecosystem research",
    "ocean technology research",
    "marine environmental science",
    "aquaculture research",
    "marine innovation"
  ],
  openGraph: {
    title: "Marine Research & Development | Ocean Science Innovation",
    description: "Cutting-edge marine research: GENIX Ocean Labs, astaxanthin biotechnology, carbon capture solutions, and marine restoration projects for sustainable ocean conservation.",
    url: "https://seaverse.co/research",
    images: [
      {
        url: "/images/ocean_lab.jpg",
        width: 1200,
        height: 630,
        alt: "Seaverse Marine Research & Development - Ocean Science Innovation",
      }
    ],
  },
  twitter: {
    title: "Marine Research & Development | Ocean Science Innovation",
    description: "Cutting-edge marine research: GENIX Ocean Labs, astaxanthin biotechnology, carbon capture & marine restoration projects.",
    images: ["/images/ocean_lab.jpg"],
  },
  alternates: {
    canonical: "https://seaverse.co/research",
  },
}

export default function ResearchPage() {
  // SEO: JSON-LD structured data for Research organization
  const researchOrganizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "ResearchOrganization",
    name: "Seaverse Research & Development",
    description: "Leading marine research organization focused on ocean science innovation, marine biotechnology, and sustainable blue economy research",
    url: "https://seaverse.co/research",
    parentOrganization: {
      "@type": "Organization",
      name: "Seaverse Technologies",
      url: "https://seaverse.co"
    },
    department: [
      {
        "@type": "ResearchProject",
        name: "GENIX Ocean Labs",
        description: "Advanced marine biotechnology and ocean laboratory research facility",
        url: "https://seaverse.co/research/genix"
      },
      {
        "@type": "ResearchProject",
        name: "Astaxanthin Biotechnology",
        description: "Research and development of marine-derived astaxanthin for health and nutrition applications",
        url: "https://seaverse.co/research/genix/astaxanthin"
      },
      {
        "@type": "ResearchProject",
        name: "Marine Carbon Capture",
        description: "Innovative carbon sequestration solutions using marine ecosystems and biotechnology",
        url: "https://seaverse.co/research/genix/carbon"
      },
      {
        "@type": "ResearchProject",
        name: "Marine Restoration",
        description: "Ecosystem restoration and conservation projects for marine environmental protection",
        url: "https://seaverse.co/research/marine-restoration"
      }
    ],
    areaServed: "Worldwide",
    knowsAbout: [
      "Marine Biotechnology",
      "Ocean Conservation",
      "Sustainable Aquaculture",
      "Marine Ecosystem Restoration",
      "Blue Economy Research"
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
        name: "Research",
        item: "https://seaverse.co/research"
      }
    ]
  }

  return (
    <>
      {/* SEO: JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(researchOrganizationJsonLd),
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
            src="/images/ocean_lab.jpg"
            alt="Seaverse Marine Research & Development - Ocean Science Innovation Laboratory"
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
              MARINE RESEARCH & DEVELOPMENT
            </h1>
          </ScrollReveal>
          <ScrollReveal animation="fade-up" delay={200}>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Pioneering Ocean Science Innovation for a Sustainable Blue Economy
            </p>
          </ScrollReveal>
        </div>
      </section>

      <WaveSeparator />

      {/* Introduction */}
      <section className="py-20 bg-dark-surface relative" role="region" aria-labelledby="research-intro">
        <ParticleBackground count={15} color="rgba(255, 140, 0, 0.05)" />
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <SectionHeading
              title="Advancing Marine Science Through Innovation"
              subtitle="Our research initiatives drive breakthrough discoveries in marine biotechnology, ocean conservation, and sustainable blue economy solutions."
              centered
            />
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={200}>
            <div className="max-w-4xl mx-auto">
              <div className="bg-dark-card/50 p-8 rounded-lg border border-dark-border/50 hover:border-accent-orange/30 transition-all duration-300">
                <h3 className="text-2xl font-bold text-accent-orange mb-4">Our Research Mission</h3>
                <p className="text-gray-300 mb-6">
                  At Seaverse, we believe that the ocean holds the key to solving many of humanity's greatest challenges. 
                  Our research and development initiatives focus on unlocking the potential of marine ecosystems through 
                  cutting-edge biotechnology, innovative conservation methods, and sustainable resource utilization.
                </p>
                <p className="text-gray-300">
                  From developing revolutionary marine biotechnology products to pioneering ecosystem restoration techniques, 
                  our research drives real-world solutions that benefit both marine environments and human communities.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <WaveSeparator />

      {/* Research Areas */}
      <section className="py-20 bg-dark-card relative" role="region" aria-labelledby="research-areas">
        <ParticleBackground count={10} color="rgba(255, 140, 0, 0.05)" />
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <SectionHeading
              title="Our Research Areas"
              subtitle="Comprehensive marine research programs addressing critical challenges in ocean science and biotechnology."
              centered
            />
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={200}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: <Microscope className="text-accent-orange" size={40} />,
                  title: "Marine Biotechnology",
                  description: "Advanced research in marine organisms for pharmaceutical, nutritional, and industrial applications."
                },
                {
                  icon: <Beaker className="text-accent-orange" size={40} />,
                  title: "Ocean Chemistry",
                  description: "Understanding marine chemical processes and developing solutions for ocean acidification and pollution."
                },
                {
                  icon: <Leaf className="text-accent-orange" size={40} />,
                  title: "Ecosystem Restoration",
                  description: "Innovative approaches to restore and protect marine ecosystems and biodiversity."
                },
                {
                  icon: <Waves className="text-accent-orange" size={40} />,
                  title: "Blue Economy",
                  description: "Sustainable economic development through responsible use of ocean resources and technologies."
                }
              ].map((area, index) => (
                <article key={index} className="bg-dark-surface/50 p-6 rounded-lg border border-dark-border/50 hover:border-accent-orange/30 transition-all duration-300 hover:-translate-y-1 group">
                  <div className="flex items-center justify-center w-16 h-16 bg-accent-orange/10 rounded-full mb-4 group-hover:bg-accent-orange/20 transition-colors duration-300">
                    {area.icon}
                  </div>
                  <h3 className="text-xl font-bold text-accent-orange mb-3 group-hover:text-accent-orange transition-colors duration-300">{area.title}</h3>
                  <p className="text-gray-300">{area.description}</p>
                </article>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <WaveSeparator />

      {/* Featured Research Projects */}
      <section className="py-20 bg-dark-surface relative" role="region" aria-labelledby="featured-projects">
        <ParticleBackground count={15} color="rgba(255, 140, 0, 0.05)" />
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <SectionHeading
              title="Featured Research Projects"
              subtitle="Groundbreaking initiatives that are transforming marine science and ocean conservation."
            />
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={200}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "GENIX Ocean Labs",
                  description: "State-of-the-art marine biotechnology research facility developing innovative solutions for sustainable aquaculture, marine pharmaceuticals, and ocean conservation.",
                  image: "/images/ocean_lab2.jpg",
                  link: "/research/genix",
                  category: "Marine Biotechnology"
                },
                {
                  title: "Astaxanthin Research Program",
                  description: "Advanced research into marine-derived astaxanthin for health, nutrition, and pharmaceutical applications with focus on sustainable production methods.",
                  image: "/images/astax1.jpg",
                  link: "/research/genix/astaxanthin",
                  category: "Biotechnology"
                },
                {
                  title: "Marine Carbon Capture Initiative",
                  description: "Innovative carbon sequestration solutions using marine ecosystems, algae biotechnology, and ocean-based carbon storage systems.",
                  image: "/images/carbon_cap1.jpg",
                  link: "/research/genix/carbon",
                  category: "Climate Science"
                },
                {
                  title: "Marine Ecosystem Restoration",
                  description: "Comprehensive restoration projects for coral reefs, mangroves, and seagrass ecosystems using advanced marine biology and conservation techniques.",
                  image: "/images/Mangroves.jpg",
                  link: "/research/marine-restoration",
                  category: "Conservation"
                }
              ].map((project, index) => (
                <article key={index} className="bg-dark-card/50 rounded-lg overflow-hidden border border-dark-border/50 hover:border-accent-orange/30 transition-all duration-300 group">
                  <div className="aspect-video relative">
                    <Image
                      src={project.image}
                      alt={`${project.title} - marine research project`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-surface to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-accent-orange/80 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-accent-orange mb-3 group-hover:text-accent-orange transition-colors duration-300">{project.title}</h3>
                    <p className="text-gray-300 mb-4">{project.description}</p>
                    <Link 
                      href={project.link}
                      className="inline-flex items-center text-accent-orange hover:text-accent-orange/80 transition-colors duration-300 font-medium"
                      aria-label={`Learn more about ${project.title}`}
                    >
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <WaveSeparator />

      {/* Research Impact */}
      <section className="py-20 bg-dark-card relative" role="region" aria-labelledby="research-impact">
        <ParticleBackground count={10} color="rgba(255, 140, 0, 0.05)" />
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <SectionHeading
              title="Research Impact & Achievements"
              subtitle="Measuring the real-world impact of our marine research initiatives on ocean conservation and sustainable development."
              centered
            />
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={200}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "Research Publications",
                  value: "50+",
                  description: "Peer-reviewed scientific publications in leading marine science journals"
                },
                {
                  title: "Active Projects",
                  value: "25+",
                  description: "Ongoing research projects across marine biotechnology and conservation"
                },
                {
                  title: "Collaborations",
                  value: "15+",
                  description: "International partnerships with leading marine research institutions"
                },
                {
                  title: "Conservation Impact",
                  value: "1000+ hectares",
                  description: "Marine ecosystems under active restoration and protection programs"
                }
              ].map((impact, index) => (
                <article key={index} className="bg-dark-surface/50 p-6 rounded-lg border border-dark-border/50 hover:border-accent-orange/30 transition-all duration-300 text-center group">
                  <div className="text-3xl font-bold text-accent-orange mb-2 group-hover:scale-110 transition-transform duration-300">{impact.value}</div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent-orange transition-colors duration-300">{impact.title}</h3>
                  <p className="text-gray-300">{impact.description}</p>
                </article>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <WaveSeparator />

      {/* Call to Action */}
      <section className="py-20 bg-dark-surface relative" role="region" aria-labelledby="research-cta">
        <ParticleBackground count={15} color="rgba(255, 140, 0, 0.05)" />
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal>
            <SectionHeading
              title="Join Our Research Mission"
              subtitle="Collaborate with us to advance marine science and create sustainable solutions for ocean conservation."
              centered
            />
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={200}>
            <div className="max-w-2xl mx-auto">
              <div className="bg-dark-card/50 p-8 rounded-lg border border-dark-border/50 hover:border-accent-orange/30 transition-all duration-300">
                <h3 className="text-2xl font-bold text-accent-orange mb-6">Partner with Our Research Team</h3>
                <p className="text-gray-300 mb-6">
                  Whether you're a researcher, institution, or organization interested in marine science, 
                  we welcome collaborations that advance our understanding and protection of ocean ecosystems.
                </p>
                <div className="space-y-4">
                  <Link 
                    href="/contact"
                    className="inline-block w-full bg-accent-orange hover:bg-accent-orange/80 text-white px-6 py-3 rounded-lg transition-colors duration-300 font-medium"
                  >
                    Collaborate with Us
                  </Link>
                  <Link 
                    href="#"
                    className="inline-block w-full border border-accent-orange text-accent-orange hover:bg-accent-orange hover:text-white px-6 py-3 rounded-lg transition-colors duration-300 font-medium"
                    aria-label="Download research collaboration opportunities"
                  >
                    Download Research Portfolio
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
