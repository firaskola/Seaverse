import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import SectionHeading from "@/components/section-heading"
import WaveSeparator from "@/components/wave-separator"
import ParticleBackground from "@/components/particle-background"
import ScrollReveal from "@/components/scroll-reveal"

export default function RexweldAIPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/images/rex4.webp" alt="REXWELD AI" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-dark-surface/90 to-dark-surface/70" />
          <ParticleBackground count={20} />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center mt-20">
          <ScrollReveal animation="fade-up">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-space-grotesk bg-gradient-to-r from-accent-orange to-accent-orange-light bg-clip-text text-transparent">REXWELD AI</h1>
          </ScrollReveal>
          <ScrollReveal animation="fade-up" delay={200}>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">The Future of Underwater Welding</p>
          </ScrollReveal>
          <ScrollReveal animation="fade-up" delay={300}>
            <div className="inline-block bg-dark-card/50 px-6 py-3 rounded-lg border border-dark-border/50 hover:border-accent-orange/30 transition-all duration-300">
              <p className="text-accent-orange font-medium">"Intelligent. Resilient. Precision."</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <WaveSeparator />

      {/* Overview Section */}
      <section className="py-20 bg-dark-surface relative">
        <ParticleBackground count={15}  />
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal animation="fade-right">
              <div>
                <h2 className="text-3xl font-bold text-accent-orange mb-6">What is REXWELD AI?</h2>
                <p className="text-gray-300 mb-6">
                  REXWELD AI is Seaverse's groundbreaking underwater welding robot, developed under the Ocean Rex sector
                  to redefine exactly how critical subsea infrastructure is maintained and repaired. Powered by advanced AI
                  algorithms, machine vision, and autonomous navigation, REXWELD AI performs inspection, damage detection,
                  and precision welding operations beneath the ocean's surface, even in the harshest environments.
                </p>
                <p className="text-gray-300 mb-6">
                  Its purpose is built for applications in oil refineries, subsea pipelines, offshore drilling rigs, and
                  marine industrial installations.
                </p>

                <div className="bg-dark-card/50 p-6 rounded-lg border border-dark-border/50 hover:border-accent-orange/30 transition-all duration-300">
                  <h3 className="text-xl font-bold text-accent-orange mb-4">Core Capabilities</h3>
                  <ul className="space-y-4">
                    {[
                      {
                        title: "Smart Inspection",
                        description: "Real time data collection and visual analysis using AI-powered sensors and imaging systems."
                      },
                      {
                        title: "Crack Detection",
                        description: "Machine learning models that are trained to identify microfractures, corrosion, and potential points of failure."
                      },
                      {
                        title: "Automated Welding",
                        description: "High precision welding arm with intelligent motion control and corrosion resistant design."
                      },
                      {
                        title: "Deep-Sea Durability",
                        description: "Engineered to operate in extreme underwater conditions, with pressure resistance and thermal stability."
                      },
                      {
                        title: "Remote Access",
                        description: "Encrypted control system for real time remote operations, monitoring, and diagnostics from control hubs."
                      }
                    ].map((item, index) => (
                      <li key={index} className="flex items-start group">
                        <div className="p-2 bg-accent-orange/10 rounded-lg mr-3 group-hover:bg-accent-orange/20 transition-colors duration-300">
                          <Check className="text-accent-orange" size={18} />
                        </div>
                        <div>
                          <span className="font-bold text-white group-hover:text-accent-orange transition-colors duration-300">{item.title}</span>
                          <p className="text-gray-300 text-sm mt-1">
                            {item.description}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-left" delay={200}>
              <div className="relative">
                <div className="aspect-square relative rounded-lg overflow-hidden border border-dark-border/50 hover:border-accent-orange/30 transition-all duration-300">
                  <Image
                    src="/images/rex2.jpg"
                    alt="REXWELD AI System"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-accent-orange/10 rounded-full animate-pulse"></div>
                <div
                  className="absolute -top-6 -left-6 w-32 h-32 bg-accent-orange/10 rounded-full animate-pulse"
                  style={{ animationDelay: "1s" }}
                ></div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <WaveSeparator />

      {/* Technical Highlights */}
      <section className="py-20 bg-dark-card relative">
        <ParticleBackground count={10}  />
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <SectionHeading
              title="Technical Highlights"
              subtitle="The absolute features that make REXWELD AI a revolutionary underwater welding system."
              centered
            />
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={200}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "AI Vision System",
                  description: "Deep learning analytics for dynamic underwater assessment and decision-making.",
                },
                {
                  title: "Robotic Arm",
                  description: "Multi-axis control system for precise welding operations in challenging conditions.",
                },
                {
                  title: "Autonomous Navigation",
                  description: "Advanced obstacle avoidance technology for safely maneuvering underwater.",
                },
                {
                  title: "Structural Health Monitoring",
                  description: "Dynamic assessment of underwater infrastructure integrity.",
                },
                {
                  title: "Subsea GPS & Sensor Fusion",
                  description: "Precise positioning technology for accurate underwater operations.",
                },
                {
                  title: "Corrosion & Pressure Resistant Shell",
                  description: "Titanium composite construction, capable of withstanding extreme depths.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-dark-surface/50 p-6 rounded-lg border border-dark-border/50 hover:border-accent-orange/30 transition-all duration-300 hover:-translate-y-1 group"
                >
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent-orange transition-colors duration-300">{item.title}</h3>
                  <p className="text-gray-300">{item.description}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={300}>
            <div className="mt-12 text-center">
              <div className="inline-block bg-dark-card/50 px-6 py-4 rounded-lg border border-dark-border/50 hover:border-accent-orange/30 transition-all duration-300">
                <p className="text-accent-orange font-medium">Operates up to 3,000 meters underwater</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <WaveSeparator />

      {/* Applications */}
      <section className="py-20 bg-dark-surface relative">
        <ParticleBackground count={15}  />
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <SectionHeading
              title="Applications"
              subtitle="The industries and scenarios, where REXWELD AI delivers transformative results."
            />
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={200}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Oil & Gas Sector",
                  description: "Subsea pipeline repairs, leak prevention, and maintenance of underwater extraction equipment.",
                  image: "/images/rex1.jpg"
                },
                {
                  title: "Maritime Refineries",
                  description: "Maintenance of submerged mechanical structures and critical infrastructure components.",
                  image: "/images/rex6.jpg"
                },
                {
                  title: "Underwater Infrastructure",
                  description: "Bridges, ports, turbines, and energy platforms requiring precise underwater maintenance.",
                  image: "/images/rex5.jpg"
                },
                {
                  title: "Military Use",
                  description: "Defense applications including underwater vessel maintenance and infrastructure protection.",
                  image: "/images/rex3.jpg"
                }
              ].map((item, index) => (
                <div key={index} className="bg-dark-card/50 rounded-lg overflow-hidden border border-dark-border/50 hover:border-accent-orange/30 transition-all duration-300 group">
                  <div className="aspect-video relative">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-surface to-transparent"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent-orange transition-colors duration-300">{item.title}</h3>
                    <p className="text-gray-300">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <WaveSeparator />

      {/* Project Status */}
      <section className="py-20 bg-dark-card relative">
        <ParticleBackground count={10}  />
        <div className="container mx-auto px-4">
          <div className="bg-dark-surface/50 rounded-lg p-8 max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">Project Status</h2>

            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-white font-medium">Current Status:</span>
                <span className="bg-accent-orange/20 text-accent-orange px-3 py-1 rounded-full text-sm">
                  Design Phase
                </span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-white font-medium">Expected Development:</span>
                <span className="text-gray-300">2026</span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-white font-medium">Expected Launch:</span>
                <span className="text-gray-300">2027-2028</span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-white font-medium">Sector:</span>
                <span className="text-gray-300">Ocean Rex – Advanced Marine Robotics</span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-white font-medium">Lead Division:</span>
                <span className="text-gray-300">Seaverse R&D</span>
              </div>
            </div>

            {/* <div className="mt-8 text-center">
              <Button className="bg-accent-orange hover:bg-accent-orange/80 text-white">Request Demo</Button>
            </div> */}
          </div>
        </div>
      </section>

      <WaveSeparator />

      {/* Collaborate */}
      <section className="py-20 bg-dark-surface relative">
        <ParticleBackground count={15}  />
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal>
            <SectionHeading
              title="Collaborate With Us"
              subtitle="We invite global partners, defense contractors, energy companies, and offshore specialists to collaborate with us in final-stage development and deployment of REXWELD AI."
              centered
            />
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={200}>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Together, let's shape the next generation of underwater maintenance and innovation.
            </p>
          </ScrollReveal>

          {/* <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-accent-orange hover:bg-accent-orange/80 text-white">Become a Partner</Button>
            <Button
              variant="outline"
              className="border-accent-orange text-accent-orange hover:bg-accent-orange hover:text-white"
            >
              Contact R&D Team
            </Button>
          </div> */}
        </div>
      </section>
    </>
  )
}
