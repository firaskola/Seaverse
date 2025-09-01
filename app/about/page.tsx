import Image from "next/image"
import SectionHeading from "@/components/section-heading"
import WaveSeparator from "@/components/wave-separator"
import ParticleBackground from "@/components/particle-background"
import ScrollReveal from "@/components/scroll-reveal"
import TimelineItem from "@/components/timeline-item"
import type { Metadata } from "next"

// SEO: About page metadata with comprehensive information
export const metadata: Metadata = {
  title: "About Seaverse | Marine Technology Innovation Team & Company Story",
  description: "Learn about Seaverse's mission to engineer the ocean's future through precision, innovation, and depth. Meet our expert team of marine technology pioneers, including Shreesha H Acharya (Founder & CEO), and discover our journey in underwater robotics, ocean laboratories, and sustainable marine solutions.",
  keywords: [
    "about Seaverse",
    "marine technology company",
    "Shreesha H Acharya",
    "underwater robotics team",
    "ocean engineering company",
    "marine innovation team",
    "Seaverse founders",
    "marine technology experts",
    "Karnataka marine tech",
    "sustainable ocean solutions",
    "REXWELD AI team",
    "GENIX ocean labs team",
    "marine biotechnology experts",
    "ocean engineering professionals",
    "underwater welding specialists"
  ],
  openGraph: {
    title: "About Seaverse | Marine Technology Innovation Team",
    description: "Meet the expert team behind Seaverse's revolutionary marine technology solutions. From underwater robotics to sustainable ocean cultivation, discover our mission and the people engineering the ocean's future.",
    url: "https://seaverse.co/about",
    images: [
      {
        url: "/Seaverse_new_logo.png",
        width: 1200,
        height: 630,
        alt: "Seaverse Team - Marine Technology Experts",
      }
    ],
  },
  twitter: {
    title: "About Seaverse | Marine Technology Team",
    description: "Meet the experts behind revolutionary marine technology: underwater robotics, ocean labs & sustainable solutions.",
    images: ["/Seaverse_new_logo.png"],
  },
  alternates: {
    canonical: "https://seaverse.co/about",
  },
}

export default function AboutPage() {
  // SEO: JSON-LD structured data for About page and team
  const aboutPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About Seaverse",
    url: "https://seaverse.co/about",
    description: "Learn about Seaverse's mission to engineer the ocean's future through marine technology innovation",
    mainEntity: {
      "@type": "Organization",
      name: "Seaverse Technologies"
    }
  }

  const teamJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Seaverse Technologies",
    employee: [
      {
        "@type": "Person",
        name: "Shreesha H Acharya",
        jobTitle: "Founder & CEO",
        description: "Visionary entrepreneur with a background in AI, robotics, and startup leadership. Leads with innovation and strategic foresight."
      },
      {
        "@type": "Person", 
        name: "Lakshmish Bhandary",
        jobTitle: "Managing Director",
        description: "Experienced in operations and business development. Oversees strategic execution and organizational growth."
      },
      {
        "@type": "Person",
        name: "Darshith Chandra", 
        jobTitle: "Executive Director",
        description: "Plays a key role in project management and coordination and also bridges engineering with execution."
      },
      {
        "@type": "Person",
        name: "Sambit Singh",
        jobTitle: "Chief Scientist Officer @ Genix", 
        description: "Experienced as a project scientist for marine living resources and ecology."
      },
      {
        "@type": "Person",
        name: "Rhythm Sardana",
        jobTitle: "Head of Communication and Science Outreach",
        description: "Drives science communication and outreach strategy. Passionate about tech literacy and public engagement."
      },
      {
        "@type": "Person",
        name: "Rachana JG",
        jobTitle: "Chief AI Officer",
        description: "Leads AI strategy and development, driving innovation in marine technology through artificial intelligence."
      },
      {
        "@type": "Person",
        name: "RAJ GUPTA",
        jobTitle: "TECH HEAD & AI PROJECTS LEAD",
        description: "Leading technical initiatives and AI projects, driving innovation in marine technology through cutting-edge artificial intelligence solutions."
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
        name: "About",
        item: "https://seaverse.co/about"
      }
    ]
  }

  return (
    <>
      {/* SEO: JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(aboutPageJsonLd),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(teamJsonLd),
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
            src="/images/about.jpg" 
            alt="About Seaverse" 
            fill 
            className="object-cover" 
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark-surface/90 to-dark-surface/70" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center mt-20">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-space-grotesk bg-gradient-to-r from-accent-orange to-accent-orange-light bg-clip-text text-transparent">
            About Us
          </h1>
        </div>
      </section>

      <WaveSeparator />

      {/* Our Story */}
      <section className="py-20 bg-dark-surface relative" role="region" aria-labelledby="our-story">
        <ParticleBackground count={15} color="rgba(255, 140, 0, 0.05)" />
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <SectionHeading title="Our Story" subtitle="The journey that led to Seaverse's founding and growth in marine technology innovation." />
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal animation="fade-right">
              <div>
                <p className="text-gray-300 mb-6">
                  SEAVERSE was founded in 2024 by Shreesha H Acharya, an entrepreneur with a deep passion for the ocean and a mind wired for innovation. What started as a dream to merge marine science with advanced technology has evolved into one of the most ambitious marine research & technology ventures of our time.
                </p>

                <p className="text-gray-300 mb-6">
                  With a clear mission to harness the power of the ocean through sustainability, biotechnology, and robotics, SEAVERSE has become a pioneering force in the marine economy. From AI-powered underwater bots to nutraceutical algae breakthroughs, every project we build is rooted in scientific precision, environmental responsibility, and a bold drive to reimagine the relationship between humanity and the ocean.
                </p>

                <div className="bg-dark-card/50 p-4 border-l-4 border-accent-orange rounded group hover:bg-dark-card/70 transition-colors duration-300">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-accent-orange transition-colors duration-300">Our Ocean Philosophy</h3>
                  <p className="text-gray-300">
                    For us, the ocean is not just water — it's the future. And with every wave we study, every lab we launch, and every species we protect, we move closer to a world where innovation and ecology thrive together.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-left" delay={200}>
              <div className="relative">
                <div className="aspect-video relative rounded-lg overflow-hidden border border-dark-border/50 hover:border-accent-orange/30 transition-all duration-300 flex items-center justify-center bg-black">
                  <Image
                    src="/Seaverse_new_logo.png"
                    alt="Seaverse Company Logo - Marine Technology Innovation"
                    width={400}
                    height={200}
                    className="object-contain"
                    loading="lazy"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-accent-orange/10 rounded-full animate-pulse" aria-hidden="true"></div>
                <div
                  className="absolute -top-6 -left-6 w-32 h-32 bg-accent-orange-light/10 rounded-full animate-pulse"
                  style={{ animationDelay: "1s" }}
                  aria-hidden="true"
                ></div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <WaveSeparator />

      {/* Company Values */}
      <section className="py-20 bg-dark-card relative" role="region" aria-labelledby="company-values">
        <ParticleBackground count={10} color="rgba(255, 140, 0, 0.05)" />
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <SectionHeading
              title="Company Values"
              subtitle="The core principles that guide our marine technology work and innovation."
              centered
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Innovation",
                description: "Pushing the boundaries of marine technology through meticulous research and development.",
              },
              {
                title: "Sustainability",
                description:
                  "Developing proactive solutions to preserve our ocean ecosystems for future generations.",
              },
              {
                title: "Precision",
                description:
                  "Delivering accurate technology that performs in challenging underwater environments.",
              },
              {
                title: "Collaboration",
                description: "Working with partners across industries to solve complex marine challenges together.",
              },
            ].map((value, index) => (
              <ScrollReveal key={index} animation="fade-up" delay={index * 100}>
                <article className="bg-dark-surface/50 p-6 rounded-lg border border-dark-border/50 hover:border-accent-orange/30 transition-all duration-300 hover:-translate-y-1 group">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent-orange transition-colors duration-300">{value.title}</h3>
                  <p className="text-gray-300">{value.description}</p>

                  <div className="mt-4 h-1 bg-dark-border/30 rounded-full overflow-hidden">
                    <div className="h-full bg-accent-orange w-0 group-hover:w-full transition-all duration-700"></div>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <WaveSeparator />

      {/* Meet the Team */}
      <section className="py-20 bg-dark-surface relative" role="region" aria-labelledby="team">
        <ParticleBackground count={15} color="rgba(255, 140, 0, 0.05)" />
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <SectionHeading
              title="MEET THE CORE MEMBERS"
              subtitle="The innovative minds behind Seaverse's marine technology solutions."
              centered
            />
          </ScrollReveal>

          <ScrollReveal animation="fade-up" className="mb-12">
            <div className="grid grid-cols-7 gap-4 justify-items-center">
              {[
                {
                  name: "Shreesha H Acharya",
                  title: "Founder & CEO",
                  bio: "Visionary entrepreneur with a background in AI, robotics, and startup leadership. Leads with innovation and strategic foresight.",
                  image: "/team/4.png"
                },
                {
                  name: "Lakshmish Bhandary",
                  title: "Managing Director",
                  bio: "Experienced in operations and business development. Oversees strategic execution and organizational growth.",
                  image: "/team/5.png"
                },
                {
                  name: "Darshith Chandra",
                  title: "Executive Director",
                  bio: "Plays a key role in project management and coordination and also bridges engineering with execution.",
                  image: "/team/2.png"
                },
                {
                  name: "Sambit Singh",
                  title: "Chief Scientist Officer @ Genix",
                  bio: "Experienced as a project scientist for marine living resources and ecology.",
                  image: "/team/3.png"
                },
                {
                  name: "Rhythm Sardana",
                  title: "Head of Communication and Science Outreach",
                  bio: "Drives science communication and outreach strategy. Passionate about tech literacy and public engagement.",
                  image: "/team/1.png"
                },
                {
                  name: "Rachana JG",
                  title: "Chief AI Officer",
                  bio: "Leads AI strategy and development, driving innovation in marine technology through artificial intelligence.",
                  image: "/team/6.jpeg"
                },
                {
                  name: "Raj Gupts",
                  title: "Tech Lead & AI Projects Lead",
                  bio: "Leading technical initiatives and AI projects, driving innovation in marine technology through cutting-edge artificial intelligence solutions.",
                  image: "/team/7.png"
                },
              ].map((member, i) => (
                <ScrollReveal key={i} animation="scale" delay={i * 100}>
                  <article className="bg-dark-card/50 rounded-lg overflow-hidden border border-dark-border/50 hover:border-accent-orange/30 transition-all duration-300 group h-[260px] w-full flex flex-col items-center justify-start cursor-pointer transform hover:scale-105 hover:h-[360px] max-h-[410px] relative">
                    <div className="aspect-square relative min-h-[120px] max-h-[120px] w-full flex-shrink-0">
                      <Image
                        src={member.image}
                        alt={`${member.name} - ${member.title} at Seaverse Marine Technology`}
                        width={400}
                        height={400}
                        className="object-contain w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500 bg-black"
                        loading="lazy"
                        sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 16vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-dark-surface/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div className="p-4 flex-1 flex flex-col items-center justify-center w-full">
                      <h3 className="text-lg font-bold text-white mb-1 group-hover:text-accent-orange transition-colors duration-300 text-center">{member.name}</h3>
                      <p className="text-accent-orange text-sm mb-2 text-center">{member.title}</p>
                      <p className="text-gray-400 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 h-0 group-hover:h-auto overflow-hidden flex-1 text-center mt-2">{member.bio}</p>
                    </div>
                  </article>
                </ScrollReveal>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
