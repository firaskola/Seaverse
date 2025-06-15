import Image from "next/image"
import { ArrowRight, Download, Calendar, Users, BarChart3, Droplets, Zap, Clock, Target, Mail, Phone } from "lucide-react"
import SectionHeading from "@/components/section-heading"
import WaveSeparator from "@/components/wave-separator"
import ParticleBackground from "@/components/particle-background"
import ScrollReveal from "@/components/scroll-reveal"
import RippleButton from "@/components/ripple-button"

export default function EnergyProjectsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/energy3.jpeg"
            alt="SEAVERSE Ocean Energy Solutions"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark-surface/90 to-dark-surface/70" />
          <ParticleBackground count={30} color="rgba(255, 140, 0, 0.05)" />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center mt-20">
          <ScrollReveal animation="fade-up">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-space-grotesk bg-gradient-to-r from-accent-orange to-accent-orange-light bg-clip-text text-transparent">
              SEAVERSE: Ocean Energy Solutions
            </h1>
          </ScrollReveal>
          <ScrollReveal animation="fade-up" delay={200}>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Harnessing the Power of Tides & Thermal Gradients for a Sustainable Future
            </p>
          </ScrollReveal>
          <ScrollReveal animation="fade-up" delay={300}>
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-6">
              "The Ocean Breathes Energy – We're Preparing to Capture It."
            </h2>
          </ScrollReveal>
          <ScrollReveal animation="fade-up" delay={400}>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Starting in 2027, SEAVERSE will begin advanced R&D on India's first utility-scale Ocean Thermal Energy
              Conversion (OTEC) and Tidal Energy Systems, laying the foundation for the next generation of clean, 24/7
              ocean power.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <WaveSeparator />

      {/* R&D Mission Section */}
      <section className="py-20 bg-dark-surface relative">
        <ParticleBackground count={15} color="rgba(255, 140, 0, 0.05)" />
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <SectionHeading
              title="2027 Onwards: The R&D Mission"
              subtitle="Beginning in Q2 2027, SEAVERSE's marine energy division will initiate its multi-phase research plan to develop commercially viable, low-impact ocean energy systems."
            />
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={200}>
            <div className="bg-dark-card/50 p-8 rounded-lg border border-dark-border/50 hover:border-accent-orange/30 transition-all duration-300 mb-12">
              <h3 className="text-2xl font-bold text-white mb-6">Focus Areas:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  "OTEC prototype development and low-grade heat turbine efficiency",
                  "Tidal blade hydrodynamics and AI-controlled flow optimization",
                  "Marine biofouling resistance coatings",
                  "Hybrid integration with desalination and offshore aquaculture",
                ].map((item, index) => (
                  <div key={index} className="flex items-start group">
                    <div className="w-8 h-8 rounded-full bg-accent-orange/10 flex items-center justify-center mr-4 mt-1 group-hover:bg-accent-orange/20 transition-colors duration-300">
                      <div className="w-4 h-4 rounded-full bg-accent-orange"></div>
                    </div>
                    <p className="text-gray-300 group-hover:text-white transition-colors duration-300 text-lg">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <WaveSeparator />

      {/* Two Pillars Section */}
      <section className="py-20 bg-dark-card relative">
        <ParticleBackground count={20} color="rgba(255, 140, 0, 0.05)" />
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <SectionHeading
              title="The Two Pillars of Our Ocean Energy Research"
              subtitle="Innovative approaches to harness the ocean's vast energy potential"
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
            <ScrollReveal animation="fade-right">
              <div className="bg-dark-surface/50 rounded-lg overflow-hidden h-full border border-dark-border/50 hover:border-accent-orange/30 transition-all duration-300 group">
                <div className="aspect-video relative">
                  <Image
                    src="/images/energy1.png"
                    alt="Ocean Thermal Energy Conversion"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-surface/80 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-accent-orange/80 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Future Tech
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-accent-orange transition-colors duration-300">1. Ocean Thermal Energy Conversion (OTEC)</h3>

                  <div className="mb-6">
                    <h4 className="text-xl font-semibold text-accent-orange mb-3">
                      How It Works (Future Tech Preview):
                    </h4>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-start group/item">
                        <div className="w-6 h-6 rounded-full bg-accent-orange/10 flex items-center justify-center mr-3 mt-1 flex-shrink-0 group-hover/item:bg-accent-orange/20 transition-colors duration-300">
                          <div className="w-2 h-2 rounded-full bg-accent-orange"></div>
                        </div>
                        <span className="group-hover/item:text-white transition-colors duration-300">Utilizes temperature gradients (warm surface vs. cold deep water)</span>
                      </li>
                      <li className="flex items-start group/item">
                        <div className="w-6 h-6 rounded-full bg-accent-orange/10 flex items-center justify-center mr-3 mt-1 flex-shrink-0 group-hover/item:bg-accent-orange/20 transition-colors duration-300">
                          <div className="w-2 h-2 rounded-full bg-accent-orange"></div>
                        </div>
                        <span className="group-hover/item:text-white transition-colors duration-300">Drives a turbine using low-boiling fluids</span>
                      </li>
                      <li className="flex items-start group/item">
                        <div className="w-6 h-6 rounded-full bg-accent-orange/10 flex items-center justify-center mr-3 mt-1 flex-shrink-0 group-hover/item:bg-accent-orange/20 transition-colors duration-300">
                          <div className="w-2 h-2 rounded-full bg-accent-orange"></div>
                        </div>
                        <span className="group-hover/item:text-white transition-colors duration-300">Simultaneously produces electricity and freshwater</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-accent-orange mb-3">Research Goal (2027–2029):</h4>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-start group/item">
                        <div className="w-6 h-6 rounded-full bg-accent-orange/10 flex items-center justify-center mr-3 mt-1 flex-shrink-0 group-hover/item:bg-accent-orange/20 transition-colors duration-300">
                          <div className="w-2 h-2 rounded-full bg-accent-orange"></div>
                        </div>
                        <span className="group-hover/item:text-white transition-colors duration-300">Build 1MW prototype system</span>
                      </li>
                      <li className="flex items-start group/item">
                        <div className="w-6 h-6 rounded-full bg-accent-orange/10 flex items-center justify-center mr-3 mt-1 flex-shrink-0 group-hover/item:bg-accent-orange/20 transition-colors duration-300">
                          <div className="w-2 h-2 rounded-full bg-accent-orange"></div>
                        </div>
                        <span className="group-hover/item:text-white transition-colors duration-300">Establish test facility in Lakshadweep or Andaman Islands</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal animation="fade-left">
              <div className="bg-dark-surface/50 rounded-lg overflow-hidden h-full border border-dark-border/50 hover:border-accent-orange/30 transition-all duration-300 group">
                <div className="aspect-video relative">
                  <Image
                    src="/images/energy2.png"
                    alt="Tidal Energy Systems"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-surface/80 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-accent-orange/80 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Future Tech
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-accent-orange transition-colors duration-300">2. Tidal Energy Systems</h3>

                  <div className="mb-6">
                    <h4 className="text-xl font-semibold text-accent-orange mb-3">How It Will Work:</h4>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-start group/item">
                        <div className="w-6 h-6 rounded-full bg-accent-orange/10 flex items-center justify-center mr-3 mt-1 flex-shrink-0 group-hover/item:bg-accent-orange/20 transition-colors duration-300">
                          <div className="w-2 h-2 rounded-full bg-accent-orange"></div>
                        </div>
                        <span className="group-hover/item:text-white transition-colors duration-300">Underwater turbines in coastal current zones</span>
                      </li>
                      <li className="flex items-start group/item">
                        <div className="w-6 h-6 rounded-full bg-accent-orange/10 flex items-center justify-center mr-3 mt-1 flex-shrink-0 group-hover/item:bg-accent-orange/20 transition-colors duration-300">
                          <div className="w-2 h-2 rounded-full bg-accent-orange"></div>
                        </div>
                        <span className="group-hover/item:text-white transition-colors duration-300">AI-enhanced blade orientation and current prediction models</span>
                      </li>
                      <li className="flex items-start group/item">
                        <div className="w-6 h-6 rounded-full bg-accent-orange/10 flex items-center justify-center mr-3 mt-1 flex-shrink-0 group-hover/item:bg-accent-orange/20 transition-colors duration-300">
                          <div className="w-2 h-2 rounded-full bg-accent-orange"></div>
                        </div>
                        <span className="group-hover/item:text-white transition-colors duration-300">Modular & scalable turbine banks for ports and island grids</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-accent-orange mb-3">R&D Focus:</h4>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-start group/item">
                        <div className="w-6 h-6 rounded-full bg-accent-orange/10 flex items-center justify-center mr-3 mt-1 flex-shrink-0 group-hover/item:bg-accent-orange/20 transition-colors duration-300">
                          <div className="w-2 h-2 rounded-full bg-accent-orange"></div>
                        </div>
                        <span className="group-hover/item:text-white transition-colors duration-300">5MW demo system by 2030 in Gulf of Kutch</span>
                      </li>
                      <li className="flex items-start group/item">
                        <div className="w-6 h-6 rounded-full bg-accent-orange/10 flex items-center justify-center mr-3 mt-1 flex-shrink-0 group-hover/item:bg-accent-orange/20 transition-colors duration-300">
                          <div className="w-2 h-2 rounded-full bg-accent-orange"></div>
                        </div>
                        <span className="group-hover/item:text-white transition-colors duration-300">Environmental impact testing</span>
                      </li>
                      <li className="flex items-start group/item">
                        <div className="w-6 h-6 rounded-full bg-accent-orange/10 flex items-center justify-center mr-3 mt-1 flex-shrink-0 group-hover/item:bg-accent-orange/20 transition-colors duration-300">
                          <div className="w-2 h-2 rounded-full bg-accent-orange"></div>
                        </div>
                        <span className="group-hover/item:text-white transition-colors duration-300">Tidal power forecasting algorithms</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <WaveSeparator />

      {/* Innovation Timeline */}
      <section className="py-20 bg-dark-surface relative">
        <ParticleBackground count={15} color="rgba(255, 140, 0, 0.05)" />
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <SectionHeading
              title="Our Innovation Timeline"
              subtitle="A journey of continuous advancement in ocean energy technology"
            />
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={200}>
            <div className="relative mt-12">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-accent-orange/20"></div>

              {/* Timeline items */}
              <div className="space-y-12">
                {[
                  {
                    year: "2027",
                    title: "Phase 1: Research & Development",
                    description: "Establish R&D facilities and begin prototype development",
                    icon: <Calendar className="w-6 h-6" />
                  },
                  {
                    year: "2028",
                    title: "Phase 2: Prototype Testing",
                    description: "Deploy and test 1MW OTEC prototype in controlled environment",
                    icon: <Target className="w-6 h-6" />
                  },
                  {
                    year: "2029",
                    title: "Phase 3: Pilot Deployment",
                    description: "Launch first commercial-scale OTEC plant in Lakshadweep",
                    icon: <Zap className="w-6 h-6" />
                  },
                  {
                    year: "2030",
                    title: "Phase 4: Expansion",
                    description: "Deploy 5MW tidal energy system in Gulf of Kutch",
                    icon: <BarChart3 className="w-6 h-6" />
                  }
                ].map((item, index) => (
                  <div key={index} className="relative">
                    {/* Timeline dot */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-accent-orange"></div>
                    
                    {/* Content */}
                    <div className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                      <div className="w-1/2 px-8">
                        <div className="bg-dark-card/50 p-6 rounded-lg border border-dark-border/50 hover:border-accent-orange/30 transition-all duration-300 group">
                          <div className="flex items-center mb-4">
                            <div className="w-12 h-12 rounded-full bg-accent-orange/10 flex items-center justify-center mr-4 group-hover:bg-accent-orange/20 transition-colors duration-300">
                              {item.icon}
                            </div>
                            <div>
                              <span className="text-accent-orange font-bold text-xl">{item.year}</span>
                              <h3 className="text-xl font-bold text-white group-hover:text-accent-orange transition-colors duration-300">{item.title}</h3>
                            </div>
                          </div>
                          <p className="text-gray-300 group-hover:text-white transition-colors duration-300">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <WaveSeparator />

      {/* Contact Section */}
      <section className="py-20 bg-dark-card relative">
        <ParticleBackground count={10} color="rgba(255, 140, 0, 0.05)" />
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal>
            <SectionHeading
              title="Join Our Energy Revolution"
              subtitle="Partner with us to shape the future of ocean energy"
              centered
            />
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={200}>
            <div className="max-w-2xl mx-auto">
              <div className="bg-dark-surface/50 p-8 rounded-lg border border-dark-border/50 hover:border-accent-orange/30 transition-all duration-300">
                <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
                <div className="space-y-4">
                  <a href="mailto:seaversetechnology@gmail.com" className="flex items-center justify-center text-gray-300 hover:text-accent-orange transition-colors duration-300">
                    <Mail className="mr-2 h-5 w-5" />
                    seaversetechnology@gmail.com
                  </a>
                  <a href="tel:+1234567890" className="flex items-center justify-center text-gray-300 hover:text-accent-orange transition-colors duration-300">
                    <Phone className="mr-2 h-5 w-5" />
                    +1 (234) 567-890
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
