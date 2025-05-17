import Image from "next/image"
import SectionHeading from "@/components/section-heading"
import WaveSeparator from "@/components/wave-separator"
import ParticleBackground from "@/components/particle-background"
import ScrollReveal from "@/components/scroll-reveal"
import TimelineItem from "@/components/timeline-item"

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/placeholder.svg?height=1080&width=1920" alt="About Seaverse" fill className="object-cover" />
          <div className="absolute inset-0 bg-dark-sapphire/80" />
          <ParticleBackground count={20} />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center mt-20">
          <ScrollReveal animation="fade-up">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-space-grotesk">About Seaverse</h1>
          </ScrollReveal>
          <ScrollReveal animation="fade-up" delay={200}>
            <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto">
              Engineering the Ocean's Future with Precision, Innovation, and Depth
            </p>
          </ScrollReveal>
        </div>
      </section>

      <WaveSeparator />

     {/* Our Story */}
<section className="py-20 bg-abyssal-teal relative">
  <ParticleBackground count={15} color="rgba(1, 46, 64, 0.2)" />
  <div className="container mx-auto px-4">
    <ScrollReveal>
      <SectionHeading title="Our Story" subtitle="The journey that led to Seaverse's founding and growth." />
    </ScrollReveal>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <ScrollReveal animation="fade-right">
        <div>
          <p className="text-white/80 mb-6">
            SEAVERSE was founded in 2024 by Shreesha H Acharya, a mechatronics engineer and entrepreneur with a deep passion for the ocean and a mind wired for innovation. What started as a dream to merge marine science with advanced technology has evolved into one of the most ambitious marine Research & technology ventures of our time.
          </p>

          <p className="text-white/80 mb-6">
            With a clear mission to harness the power of the ocean through sustainability, biotechnology, and robotics, SEAVERSE has become a pioneering force in the blue economy. From AI-powered underwater bots to algae-based nutraceutical breakthroughs, every project we build is rooted in scientific precision, environmental responsibility, and a bold drive to reimagine the relationship between humanity and the sea.
          </p>

          <div className="bg-dark-sapphire/30 p-4 border-l-4 border-coral-orange rounded">
            <h3 className="text-xl font-bold text-white mb-2">Our Ocean Philosophy</h3>
            <p className="text-white/80">
              For us, the ocean is not just water — it's the future. And with every wave we study, every lab we launch, and every species we protect, we move closer to a world where innovation and ecology thrive together.
            </p>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal animation="fade-left" delay={200}>
        <div className="relative">
          <div className="aspect-video relative rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="SEAVERSE Founder Shreesha H Acharya"
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-seafoam-blue/10 rounded-full animate-pulse"></div>
          <div
            className="absolute -top-6 -left-6 w-32 h-32 bg-coral-orange/10 rounded-full animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>
      </ScrollReveal>
    </div>
  </div>
</section>

      <WaveSeparator color="abyssal-teal" />

      {/* Timeline
      <section className="py-20 bg-dark-sapphire relative">
        <ParticleBackground count={10} />
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <SectionHeading title="Our Journey" subtitle="Key milestones in Seaverse's evolution." centered />
          </ScrollReveal>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-seafoam-blue/30"></div>

            <div className="space-y-16">
              {[
                {
                  year: 2020,
                  title: "Seaverse Founded",
                  description: "Established with a mission to revolutionize marine technology.",
                },
                {
                  year: 2021,
                  title: "First Research Grant",
                  description: "Secured major funding for underwater welding technology research.",
                },
                {
                  year: 2022,
                  title: "Ocean Rex Division Launched",
                  description: "Specialized division focused on underwater robotics and AI systems.",
                },
                {
                  year: 2023,
                  title: "Spirulina Biotech Development",
                  description: "Breakthrough in sustainable marine spirulina cultivation technology.",
                },
                {
                  year: 2024,
                  title: "REXWELD AI Prototype",
                  description: "First successful test of our AI-powered underwater welding system.",
                },
                {
                  year: 2025,
                  title: "Genix Ocean Labs Planning",
                  description: "Initiated development of artificial ocean laboratories.",
                },
              ].map((item, index) => (
                <TimelineItem
                  key={index}
                  index={index}
                  className={`relative ${index % 2 === 0 ? "ml-auto pl-8" : "mr-auto pr-8"} w-full md:w-1/2`}
                >
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-coral-orange border-4 border-dark-sapphire z-10"></div>

                  <div className="bg-abyssal-teal/30 p-6 rounded-lg hover:bg-abyssal-teal/50 transition-colors duration-300">
                    <span className="inline-block px-3 py-1 bg-seafoam-blue/20 text-seafoam-blue rounded-full text-sm font-medium mb-3">
                      {item.year}
                    </span>
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-white/70">{item.description}</p>
                  </div>
                </TimelineItem>
              ))}
            </div>
          </div>
        </div>
      </section> */}

      <WaveSeparator />

      
      {/* <WaveSeparator color="abyssal-teal" /> */}

      {/* Company Values */}
      <section className="py-20 bg-dark-sapphire relative">
        <ParticleBackground count={10} />
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <SectionHeading
              title="Company Values"
              subtitle="The core principles that guide our work and innovation."
              centered
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Innovation",
                description: "Pushing the boundaries of marine technology through continuous research and development.",
              },
              {
                title: "Sustainability",
                description:
                  "Developing solutions that protect and preserve our ocean ecosystems for future generations.",
              },
              {
                title: "Precision",
                description:
                  "Delivering accurate technology that performs in the most challenging underwater environments.",
              },
              {
                title: "Collaboration",
                description: "Working with partners across industries to solve complex marine challenges together.",
              },
            ].map((value, index) => (
              <ScrollReveal key={index} animation="fade-up" delay={index * 100}>
                <div className="bg-abyssal-teal/20 p-6 rounded-lg hover:bg-abyssal-teal/40 transition-all duration-300 hover:-translate-y-1 group">
                  <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                  <p className="text-white/70">{value.description}</p>

                  <div className="mt-4 h-1 bg-seafoam-blue/30 rounded-full overflow-hidden">
                    <div className="h-full bg-coral-orange w-0 group-hover:w-full transition-all duration-700"></div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <WaveSeparator />
              {/* Meet the Team */}
      <section className="py-20 bg-abyssal-teal relative">
        <ParticleBackground count={15} color="rgba(1, 46, 64, 0.2)" />
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <SectionHeading
              title="Meet the Team"
              subtitle="The innovative minds behind Seaverse's marine technology solutions."
              centered
            />
          </ScrollReveal>

          <ScrollReveal animation="fade-up" className="mb-12">
            <h3 className="text-2xl font-bold text-white mb-6">Ocean Rex Team</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {Array.from({ length: 4 }).map((_, i) => (
                <ScrollReveal key={i} animation="scale" delay={i * 100}>
                  <div className="group relative">
                    <div className="aspect-square relative rounded-full overflow-hidden mb-4 transform transition-transform duration-300 group-hover:scale-105">
                      <Image
                        src={`/placeholder.svg?height=300&width=300&text=Team Member ${i + 1}`}
                        alt={`Team Member ${i + 1}`}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-dark-sapphire/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>

                    <div className="text-center">
                      <h4 className="text-lg font-bold text-white">Dr. Jane Smith</h4>
                      <p className="text-seafoam-blue">Marine Engineer</p>
                    </div>

                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-dark-sapphire/90 p-4 rounded-lg max-w-[90%]">
                        <h4 className="text-lg font-bold text-white mb-2">Dr. Jane Smith</h4>
                        <p className="text-seafoam-blue mb-2">Marine Engineer</p>
                        <p className="text-white/70 text-sm">
                          Specializes in underwater robotics and AI-driven marine systems. PhD from MIT with 15 years of
                          industry experience.
                        </p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </ScrollReveal>

          {/* <ScrollReveal animation="fade-up" delay={200}>
            <h3 className="text-2xl font-bold text-white mb-6">Genix Team</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {Array.from({ length: 4 }).map((_, i) => (
                <ScrollReveal key={i} animation="scale" delay={i * 100}>
                  <div className="group relative">
                    <div className="aspect-square relative rounded-full overflow-hidden mb-4 transform transition-transform duration-300 group-hover:scale-105">
                      <Image
                        src={`/placeholder.svg?height=300&width=300&text=Team Member ${i + 5}`}
                        alt={`Team Member ${i + 5}`}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-dark-sapphire/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>

                    <div className="text-center">
                      <h4 className="text-lg font-bold text-white">Dr. Rajiv Patel</h4>
                      <p className="text-seafoam-blue">Marine Biologist</p>
                    </div>

                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-dark-sapphire/90 p-4 rounded-lg max-w-[90%]">
                        <h4 className="text-lg font-bold text-white mb-2">Dr. Rajiv Patel</h4>
                        <p className="text-seafoam-blue mb-2">Marine Biologist</p>
                        <p className="text-white/70 text-sm">
                          Expert in aquaculture and sustainable marine farming. Leads research on artificial ocean
                          environments and luxury species cultivation.
                        </p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </ScrollReveal> */}
        </div>
      </section>

      {/* Awards & Recognition */}
      {/* <section className="py-20 bg-abyssal-teal relative">
        <ParticleBackground count={15} color="rgba(1, 46, 64, 0.2)" />
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <SectionHeading
              title="Awards & Recognition"
              subtitle="Celebrating our achievements and industry acknowledgments."
            />
          </ScrollReveal>

          <div className="space-y-8">
            <ScrollReveal animation="fade-up">
              <div className="bg-dark-sapphire/30 p-6 rounded-lg">
                <h3 className="text-2xl font-bold text-white mb-4">2024</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <ScrollReveal animation="fade-right" delay={100}>
                    <div className="flex items-start">
                      <div className="mr-4 text-coral-orange">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-award"
                        >
                          <circle cx="12" cy="8" r="6" />
                          <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-white">Marine Technology Innovation Award</h4>
                        <p className="text-white/70">Recognized for breakthrough underwater welding technology.</p>
                      </div>
                    </div>
                  </ScrollReveal>

                  <ScrollReveal animation="fade-left" delay={100}>
                    <div className="flex items-start">
                      <div className="mr-4 text-coral-orange">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-medal"
                        >
                          <path d="M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15" />
                          <path d="M11 12 5.12 2.2" />
                          <path d="m13 12 5.88-9.8" />
                          <path d="M8 7h8" />
                          <circle cx="12" cy="17" r="5" />
                          <path d="M12 18v-2h-.5" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-white">Sustainable Ocean Business Award</h4>
                        <p className="text-white/70">For our spirulina cultivation technology.</p>
                      </div>
                    </div>
                  </ScrollReveal>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={200}>
              <div className="bg-dark-sapphire/30 p-6 rounded-lg">
                <h3 className="text-2xl font-bold text-white mb-4">2023</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <ScrollReveal animation="fade-right" delay={100}>
                    <div className="flex items-start">
                      <div className="mr-4 text-coral-orange">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-trophy"
                        >
                          <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
                          <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
                          <path d="M4 22h16" />
                          <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
                          <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
                          <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-white">Best Marine Tech Startup</h4>
                        <p className="text-white/70">Awarded by the National Maritime Foundation.</p>
                      </div>
                    </div>
                  </ScrollReveal>

                  <ScrollReveal animation="fade-left" delay={100}>
                    <div className="flex items-start">
                      <div className="mr-4 text-coral-orange">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-lightbulb"
                        >
                          <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
                          <path d="M9 18h6" />
                          <path d="M10 22h4" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-white">Innovation in Ocean Conservation</h4>
                        <p className="text-white/70">For our water quality monitoring technology.</p>
                      </div>
                    </div>
                  </ScrollReveal>
                </div>
              </div>
            </ScrollReveal> */}
{/* 
            <ScrollReveal animation="fade-up" delay={300}>
              <div className="bg-dark-sapphire/30 p-6 rounded-lg">
                <h3 className="text-2xl font-bold text-white mb-4">2022</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <ScrollReveal animation="fade-right" delay={100}>
                    <div className="flex items-start">
                      <div className="mr-4 text-coral-orange">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-star"
                        >
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-white">Excellence in Marine Engineering</h4>
                        <p className="text-white/70">Recognized by the Institute of Marine Engineers.</p>
                      </div>
                    </div>
                  </ScrollReveal>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section> */}
    </>
  )
}
