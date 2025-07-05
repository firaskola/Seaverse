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
          <Image src="/images/about.jpg" alt="About Seaverse" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-dark-surface/90 to-dark-surface/70" />
          <ParticleBackground count={20} />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center mt-20">
          <ScrollReveal animation="fade-up">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-space-grotesk bg-gradient-to-r from-accent-orange to-accent-orange-light bg-clip-text text-transparent">About Seaverse</h1>
          </ScrollReveal>
          <ScrollReveal animation="fade-up" delay={200}>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Engineering the Ocean's Future with Precision, Innovation, and Depth
            </p>
          </ScrollReveal>
        </div>
      </section>

      <WaveSeparator />

      {/* Our Story */}
      <section className="py-20 bg-dark-surface relative">
        <ParticleBackground count={15} color="rgba(255, 140, 0, 0.05)" />
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <SectionHeading title="Our Story" subtitle="The journey that led to Seaverse's founding and growth." />
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
                <div className="aspect-video relative rounded-lg overflow-hidden border border-dark-border/50 hover:border-accent-orange/30 transition-all duration-300">
                  <Image
                    src="/Seaverse.png"
                    alt="SEAVERSE Founder Shreesha H Acharya"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-accent-orange/10 rounded-full animate-pulse"></div>
                <div
                  className="absolute -top-6 -left-6 w-32 h-32 bg-accent-orange-light/10 rounded-full animate-pulse"
                  style={{ animationDelay: "1s" }}
                ></div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <WaveSeparator />

      {/* Company Values */}
      <section className="py-20 bg-dark-card relative">
        <ParticleBackground count={10} color="rgba(255, 140, 0, 0.05)" />
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
                <div className="bg-dark-surface/50 p-6 rounded-lg border border-dark-border/50 hover:border-accent-orange/30 transition-all duration-300 hover:-translate-y-1 group">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent-orange transition-colors duration-300">{value.title}</h3>
                  <p className="text-gray-300">{value.description}</p>

                  <div className="mt-4 h-1 bg-dark-border/30 rounded-full overflow-hidden">
                    <div className="h-full bg-accent-orange w-0 group-hover:w-full transition-all duration-700"></div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <WaveSeparator />

      {/* Meet the Team */}
      <section className="py-20 bg-dark-surface relative">
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
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {[
                {
                  name: "Shreesha H Acharya",
                  title: "Founder & CEO",
                  bio: "Visionary entrepreneur with a background in AI, robotics, and startup leadership. Leads with innovation and strategic foresight.",
                  image: "/team/4.jpg"
                },
                {
                  name: "Lakshmish Bhandary",
                  title: "Managing Director",
                  bio: "Experienced in operations and business development. Oversees strategic execution and organizational growth.",
                  image: "/team/5.jpg"
                },
                {
                  name: "Darshith Chandra",
                  title: "Executive Director",
                  bio: "Plays a key role in project management and coordination and also bridges engineering with execution.",
                  image: "/team/2.jpg"
                },
                {
                  name: "Sambit Singh",
                  title: "Chief Scientist Officer @ Genix",
                  bio: "Experienced as a project scientist for marine living resources and ecology.",
                  image: "/team/3.jpeg"
                },
                {
                  name: "Rhythm Sardana",
                  title: "Head of Communication and Science Outreach",
                  bio: "Drives science communication and outreach strategy. Passionate about tech literacy and public engagement.",
                  image: "/team/1.jpeg"
                },
              ].map((member, i) => (
                <ScrollReveal key={i} animation="scale" delay={i * 100}>
                  <div className="bg-dark-card/50 rounded-lg overflow-hidden border border-dark-border/50 hover:border-accent-orange/30 transition-all duration-300 group">
                    <div className="aspect-square relative">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-dark-surface/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-bold text-white mb-1 group-hover:text-accent-orange transition-colors duration-300">{member.name}</h3>
                      <p className="text-accent-orange text-sm mb-2">{member.title}</p>
                      <p className="text-gray-400 text-sm">{member.bio}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
