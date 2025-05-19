import Image from "next/image"
import { ArrowRight, Download, Calendar, Users, BarChart3, Droplets, Zap, Clock, Target } from "lucide-react"
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
          <div className="absolute inset-0 bg-dark-sapphire/80" />
          <ParticleBackground count={30} />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center mt-20">
          <ScrollReveal animation="fade-up">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-space-grotesk">
              SEAVERSE: Ocean Energy Solutions
            </h1>
          </ScrollReveal>
          <ScrollReveal animation="fade-up" delay={200}>
            <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto">
              Harnessing the Power of Tides & Thermal Gradients for a Sustainable Future
            </p>
          </ScrollReveal>
          <ScrollReveal animation="fade-up" delay={300}>
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-6">
              "The Ocean Breathes Energy – We're Preparing to Capture It."
            </h2>
          </ScrollReveal>
          <ScrollReveal animation="fade-up" delay={400}>
            <p className="text-lg md:text-xl text-white/80 mb-8 max-w-3xl mx-auto">
              Starting in 2027, SEAVERSE will begin advanced R&D on India's first utility-scale Ocean Thermal Energy
              Conversion (OTEC) and Tidal Energy Systems, laying the foundation for the next generation of clean, 24/7
              ocean power.
            </p>
          </ScrollReveal>
          {/* <ScrollReveal animation="fade-up" delay={500}>
            <div className="flex flex-wrap justify-center gap-4">
              <RippleButton className="bg-coral-orange hover:bg-coral-orange/80 text-white">
                Join the Research Alliance
              </RippleButton>
              <RippleButton className="bg-seafoam-blue hover:bg-seafoam-blue/80 text-white">
                View Energy Vision 2030
              </RippleButton>
              <RippleButton className="bg-abyssal-teal hover:bg-abyssal-teal/80 text-white">
                Partner with SEAVERSE Labs
              </RippleButton>
            </div>
          </ScrollReveal> */}
        </div>
      </section>

      <WaveSeparator />

      {/* R&D Mission Section */}
      <section className="py-20 bg-abyssal-teal relative">
        <ParticleBackground count={15} color="rgba(1, 46, 64, 0.2)" />
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <SectionHeading
              title="2027 Onwards: The R&D Mission"
              subtitle="Beginning in Q2 2027, SEAVERSE's marine energy division will initiate its multi-phase research plan to develop commercially viable, low-impact ocean energy systems."
            />
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={200}>
            <div className="bg-dark-sapphire/30 p-8 rounded-lg mb-12">
              <h3 className="text-2xl font-bold text-white mb-6">Focus Areas:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  "OTEC prototype development and low-grade heat turbine efficiency",
                  "Tidal blade hydrodynamics and AI-controlled flow optimization",
                  "Marine biofouling resistance coatings",
                  "Hybrid integration with desalination and offshore aquaculture",
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-8 h-8 rounded-full bg-seafoam-blue/30 flex items-center justify-center mr-4 mt-1">
                      <div className="w-4 h-4 rounded-full bg-seafoam-blue"></div>
                    </div>
                    <p className="text-white/90 text-lg">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <WaveSeparator color="abyssal-teal" />

      {/* Two Pillars Section */}
      <section className="py-20 bg-dark-sapphire relative">
        <ParticleBackground count={20} />
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <SectionHeading
              title="The Two Pillars of Our Ocean Energy Research"
              subtitle="Innovative approaches to harness the ocean's vast energy potential"
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
            <ScrollReveal animation="fade-right">
              <div className="bg-abyssal-teal/20 rounded-lg overflow-hidden h-full">
                <div className="aspect-video relative">
                  <Image
                    src="/images/energy1.png"
                    alt="Ocean Thermal Energy Conversion"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-sapphire/80 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-seafoam-blue/80 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Future Tech
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-4">1. Ocean Thermal Energy Conversion (OTEC)</h3>

                  <div className="mb-6">
                    <h4 className="text-xl font-semibold text-seafoam-blue mb-3">
                      How It Works (Future Tech Preview):
                    </h4>
                    <ul className="space-y-2 text-white/80">
                      <li className="flex items-start">
                        <div className="w-6 h-6 rounded-full bg-seafoam-blue/20 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                          <div className="w-2 h-2 rounded-full bg-seafoam-blue"></div>
                        </div>
                        <span>Utilizes temperature gradients (warm surface vs. cold deep water)</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-6 h-6 rounded-full bg-seafoam-blue/20 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                          <div className="w-2 h-2 rounded-full bg-seafoam-blue"></div>
                        </div>
                        <span>Drives a turbine using low-boiling fluids</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-6 h-6 rounded-full bg-seafoam-blue/20 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                          <div className="w-2 h-2 rounded-full bg-seafoam-blue"></div>
                        </div>
                        <span>Simultaneously produces electricity and freshwater</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-coral-orange mb-3">Research Goal (2027–2029):</h4>
                    <ul className="space-y-2 text-white/80">
                      <li className="flex items-start">
                        <div className="w-6 h-6 rounded-full bg-coral-orange/20 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                          <div className="w-2 h-2 rounded-full bg-coral-orange"></div>
                        </div>
                        <span>Build 1MW prototype system</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-6 h-6 rounded-full bg-coral-orange/20 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                          <div className="w-2 h-2 rounded-full bg-coral-orange"></div>
                        </div>
                        <span>Establish test facility in Lakshadweep or Andaman Islands</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal animation="fade-left">
              <div className="bg-abyssal-teal/20 rounded-lg overflow-hidden h-full">
                <div className="aspect-video relative">
                  <Image
                    src="/images/energy2.png"
                    alt="Tidal Energy Systems"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-sapphire/80 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-seafoam-blue/80 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Future Tech
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-4">2. Tidal Energy Systems</h3>

                  <div className="mb-6">
                    <h4 className="text-xl font-semibold text-seafoam-blue mb-3">How It Will Work:</h4>
                    <ul className="space-y-2 text-white/80">
                      <li className="flex items-start">
                        <div className="w-6 h-6 rounded-full bg-seafoam-blue/20 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                          <div className="w-2 h-2 rounded-full bg-seafoam-blue"></div>
                        </div>
                        <span>Underwater turbines in coastal current zones</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-6 h-6 rounded-full bg-seafoam-blue/20 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                          <div className="w-2 h-2 rounded-full bg-seafoam-blue"></div>
                        </div>
                        <span>AI-enhanced blade orientation and current prediction models</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-6 h-6 rounded-full bg-seafoam-blue/20 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                          <div className="w-2 h-2 rounded-full bg-seafoam-blue"></div>
                        </div>
                        <span>Modular & scalable turbine banks for ports and island grids</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-coral-orange mb-3">R&D Focus:</h4>
                    <ul className="space-y-2 text-white/80">
                      <li className="flex items-start">
                        <div className="w-6 h-6 rounded-full bg-coral-orange/20 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                          <div className="w-2 h-2 rounded-full bg-coral-orange"></div>
                        </div>
                        <span>5MW demo system by 2030 in Gulf of Kutch</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-6 h-6 rounded-full bg-coral-orange/20 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                          <div className="w-2 h-2 rounded-full bg-coral-orange"></div>
                        </div>
                        <span>Environmental impact testing</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-6 h-6 rounded-full bg-coral-orange/20 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                          <div className="w-2 h-2 rounded-full bg-coral-orange"></div>
                        </div>
                        <span>Tidal power forecasting algorithms</span>
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

      {/* Timeline Section */}
      <section className="py-20 bg-abyssal-teal relative">
        <ParticleBackground count={15} color="rgba(1, 46, 64, 0.2)" />
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <SectionHeading
              title="Project Timeline: 2027–2032"
              subtitle="Our roadmap to developing commercially viable ocean energy solutions"
            />
          </ScrollReveal>

          <div className="mt-12 relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-seafoam-blue/30 hidden md:block"></div>

            {[
              {
                year: "2027",
                milestone: "Launch of Ocean Energy R&D Program (Phase I)",
                icon: <Calendar className="h-6 w-6" />,
              },
              {
                year: "2028",
                milestone: "Completion of lab prototypes for OTEC and Tidal systems",
                icon: <Target className="h-6 w-6" />,
              },
              {
                year: "2029",
                milestone: "Start of site surveys & environmental approvals",
                icon: <BarChart3 className="h-6 w-6" />,
              },
              {
                year: "2030",
                milestone: "Construction of 1st pilot plant (1–5 MW)",
                icon: <Zap className="h-6 w-6" />,
              },
              {
                year: "2031–2032",
                milestone: "Grid integration + offshore desalination sync-up",
                icon: <Droplets className="h-6 w-6" />,
              },
            ].map((item, index) => (
              <ScrollReveal key={index} animation={index % 2 === 0 ? "fade-right" : "fade-left"} delay={index * 100}>
                <div
                  className={`flex flex-col md:flex-row items-center mb-12 relative ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className={`md:w-1/2 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                    <div className="bg-dark-sapphire/40 p-6 rounded-lg">
                      <h3 className="text-xl font-bold text-seafoam-blue mb-2">{item.year}</h3>
                      <p className="text-white/90 text-lg">{item.milestone}</p>
                    </div>
                  </div>

                  <div className="md:absolute md:left-1/2 md:transform md:-translate-x-1/2 bg-seafoam-blue rounded-full p-3 z-10 my-4 md:my-0">
                    <div className="bg-dark-sapphire rounded-full p-2 text-seafoam-blue">{item.icon}</div>
                  </div>

                  <div className="md:w-1/2"></div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <WaveSeparator color="abyssal-teal" />

      {/* Why It Matters Section */}
      <section className="py-20 bg-dark-sapphire relative">
        <ParticleBackground count={20} />
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <SectionHeading title="Why It Matters" subtitle="The potential impact of our ocean energy solutions" />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {[
              {
                metric: "CO₂ Avoided",
                value: "50,000 tons/year per 10MW",
                icon: <BarChart3 className="h-8 w-8" />,
              },
              {
                metric: "Freshwater Produced",
                value: "10,000+ L/day (OTEC)",
                icon: <Droplets className="h-8 w-8" />,
              },
              {
                metric: "Jobs Created",
                value: "500+ skilled jobs per facility",
                icon: <Users className="h-8 w-8" />,
              },
              {
                metric: "Power Reliability",
                value: "24/7 — not dependent on sun or wind",
                icon: <Clock className="h-8 w-8" />,
              },
            ].map((item, index) => (
              <ScrollReveal key={index} animation="scale" delay={index * 100}>
                <div className="bg-abyssal-teal/20 p-6 rounded-lg text-center h-full">
                  <div className="bg-seafoam-blue/20 rounded-full p-4 inline-flex mb-4">
                    <div className="text-seafoam-blue">{item.icon}</div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{item.metric}</h3>
                  <p className="text-seafoam-blue text-lg">{item.value}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <WaveSeparator />

      {/* Collaboration & Investment Section */}
      <section className="py-20 bg-abyssal-teal relative">
        <ParticleBackground count={15} color="rgba(1, 46, 64, 0.2)" />
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <SectionHeading
              title="Collaboration & Investment Tracks"
              subtitle="Join us in pioneering the future of ocean energy"
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
            <ScrollReveal animation="fade-right">
              <div className="bg-dark-sapphire/30 rounded-lg overflow-hidden h-full">
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-6">1. For Investors</h3>

                  <div className="mb-8">
                    <h4 className="text-xl font-semibold text-seafoam-blue mb-4">Opportunities:</h4>
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <div className="w-8 h-8 rounded-full bg-coral-orange/20 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                          <div className="w-4 h-4 rounded-full bg-coral-orange"></div>
                        </div>
                        <div>
                          <span className="text-white font-medium">Series A Raise:</span>
                          <p className="text-white/80">Scaling OTEC pilot to 10MW (₹400 Cr)</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="w-8 h-8 rounded-full bg-coral-orange/20 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                          <div className="w-4 h-4 rounded-full bg-coral-orange"></div>
                        </div>
                        <div>
                          <span className="text-white font-medium">Green Bonds:</span>
                          <p className="text-white/80">6% fixed return, carbon credits included</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="w-8 h-8 rounded-full bg-coral-orange/20 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                          <div className="w-4 h-4 rounded-full bg-coral-orange"></div>
                        </div>
                        <div>
                          <span className="text-white font-medium">PPA Deals:</span>
                          <p className="text-white/80">
                            Partner with us to supply energy to industrial clients or government grids
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div className="mb-8">
                    <h4 className="text-xl font-semibold text-seafoam-blue mb-4">Why SEAVERSE?</h4>
                    <ul className="space-y-3 text-white/80">
                      <li className="flex items-center">
                        <div className="w-6 h-6 rounded-full bg-seafoam-blue/20 flex items-center justify-center mr-3 flex-shrink-0">
                          <div className="w-2 h-2 rounded-full bg-seafoam-blue"></div>
                        </div>
                        <span>India's first-mover in commercial-scale ocean energy</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-6 h-6 rounded-full bg-seafoam-blue/20 flex items-center justify-center mr-3 flex-shrink-0">
                          <div className="w-2 h-2 rounded-full bg-seafoam-blue"></div>
                        </div>
                        <span>IP-protected turbine designs</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-6 h-6 rounded-full bg-seafoam-blue/20 flex items-center justify-center mr-3 flex-shrink-0">
                          <div className="w-2 h-2 rounded-full bg-seafoam-blue"></div>
                        </div>
                        <span>Signed MoUs with NTPC, Indian Navy & Smart Grid Authority</span>
                      </li>
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-4">
  {/* Link to download the investor prospectus PDF */}
  <a href="/path/to/investor-prospectus.pdf" download>
    <RippleButton className="bg-coral-orange hover:bg-coral-orange/80 text-white">
      <Download className="mr-2 h-4 w-4" /> Download Investor Prospectus
    </RippleButton>
  </a>

  {/* Mailto link for scheduling with CFO */}
  <a href="mailto:seaversetechnology@gmail.com?subject=Schedule%201-on-1%20with%20CFO">
    <RippleButton className="bg-seafoam-blue hover:bg-seafoam-blue/80 text-white">
      Schedule a 1-on-1 with Our CFO
    </RippleButton>
  </a>
</div>

                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-left">
              <div className="bg-dark-sapphire/30 rounded-lg overflow-hidden h-full">
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-6">2. For Strategic & Technical Partners</h3>

                  <div className="mb-8">
                    <h4 className="text-xl font-semibold text-seafoam-blue mb-4">We're Actively Seeking:</h4>
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <div className="w-8 h-8 rounded-full bg-coral-orange/20 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                          <div className="w-4 h-4 rounded-full bg-coral-orange"></div>
                        </div>
                        <div>
                          <span className="text-white font-medium">Port Authorities</span>
                          <p className="text-white/80">Lease zones for tidal array deployment</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="w-8 h-8 rounded-full bg-coral-orange/20 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                          <div className="w-4 h-4 rounded-full bg-coral-orange"></div>
                        </div>
                        <div>
                          <span className="text-white font-medium">Desalination Experts</span>
                          <p className="text-white/80">Integrate OTEC with clean water production</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="w-8 h-8 rounded-full bg-coral-orange/20 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                          <div className="w-4 h-4 rounded-full bg-coral-orange"></div>
                        </div>
                        <div>
                          <span className="text-white font-medium">R&D Institutions</span>
                          <p className="text-white/80">Advance corrosion resistance & marine coatings</p>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div className="mb-8">
                    <h4 className="text-xl font-semibold text-seafoam-blue mb-4">Current Collaborators:</h4>
                    <ul className="space-y-3 text-white/80">
                      <li className="flex items-center">
                        <div className="w-6 h-6 rounded-full bg-seafoam-blue/20 flex items-center justify-center mr-3 flex-shrink-0">
                          <div className="w-2 h-2 rounded-full bg-seafoam-blue"></div>
                        </div>
                        <span>Indian Institute of Ocean Technology (IIOT)</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-6 h-6 rounded-full bg-seafoam-blue/20 flex items-center justify-center mr-3 flex-shrink-0">
                          <div className="w-2 h-2 rounded-full bg-seafoam-blue"></div>
                        </div>
                        <span>The Energy and Resources Institute (TERI)</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-6 h-6 rounded-full bg-seafoam-blue/20 flex items-center justify-center mr-3 flex-shrink-0">
                          <div className="w-2 h-2 rounded-full bg-seafoam-blue"></div>
                        </div>
                        <span>Siemens Gamesa (Marine Energy R&D Division)</span>
                      </li>
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-4">
  <a href="mailto:seaversetechnology@gmail.com?subject=Collaboration%20Proposal">
    <RippleButton className="bg-coral-orange hover:bg-coral-orange/80 text-white">
      Propose a Collaboration
    </RippleButton>
  </a>
  
  <a href="mailto:seaversetechnology@gmail.com?subject=Schedule%201-on-1%20with%20CEO">
    <RippleButton className="bg-seafoam-blue hover:bg-seafoam-blue/80 text-white">
      Schedule a 1-on-1 with Our CEO
    </RippleButton>
  </a>
</div>

                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <WaveSeparator color="abyssal-teal" />

      {/* Impact Vision Section */}
      <section className="py-20 bg-dark-sapphire relative">
        <ParticleBackground count={20} />
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <SectionHeading
              title="Impact Vision by 2035"
              subtitle="Our ambitious goals for a sustainable ocean energy future"
            />
          </ScrollReveal>

          <ScrollReveal animation="fade-up">
            <div className="bg-abyssal-teal/20 p-8 rounded-lg mt-12 max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  "500MW of OTEC and tidal capacity",
                  "CO₂ offset: 2.5 million tons/year",
                  "Freshwater access to 5M+ people",
                  "First ocean-based desalination + power hybrid system in Asia",
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-coral-orange/20 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <div className="w-5 h-5 rounded-full bg-coral-orange/60 flex items-center justify-center">
                        <div className="w-3 h-3 rounded-full bg-coral-orange"></div>
                      </div>
                    </div>
                    <p className="text-white text-lg font-medium">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <WaveSeparator />

      {/* CTA Section */}
      <section className="py-20 bg-abyssal-teal relative">
        <ParticleBackground count={15} color="rgba(1, 46, 64, 0.2)" />
        <div className="container mx-auto px-4 text-center">
          {/* <ScrollReveal>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Ready to Pioneer the Next Wave of Clean Energy?
            </h2>
          </ScrollReveal> */}
          {/* <ScrollReveal animation="fade-up" delay={100}>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              "The tides are predictable. Our progress is too."
            </p>
          </ScrollReveal> */}
          <ScrollReveal animation="fade-up" delay={100}>
            <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-12">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-seafoam-blue/20 flex items-center justify-center mr-3">
                  <div className="text-seafoam-blue">
                    <ArrowRight className="h-5 w-5" />
                  </div>
                </div>
                <span className="text-white">Email: seaversetechnology@gmail.com</span>
              </div>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-seafoam-blue/20 flex items-center justify-center mr-3">
                  <div className="text-seafoam-blue">
                    <ArrowRight className="h-5 w-5" />
                  </div>
                </div>
                <span className="text-white">Web: www.seaverse.co/technology/energy-projects</span>
              </div>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-seafoam-blue/20 flex items-center justify-center mr-3">
                  <div className="text-seafoam-blue">
                    <ArrowRight className="h-5 w-5" />
                  </div>
                </div>
                <span className="text-white">Contact: +91-6363477139</span>
              </div>
            </div>
          </ScrollReveal>
          {/* <ScrollReveal animation="fade-up" delay={200}>
            <div className="flex flex-wrap justify-center gap-4">
              <RippleButton className="bg-coral-orange hover:bg-coral-orange/80 text-white">
                Join the Research Alliance
              </RippleButton>
              <RippleButton className="bg-seafoam-blue hover:bg-seafoam-blue/80 text-white">
                Download Investor Prospectus
              </RippleButton>
              <RippleButton className="bg-abyssal-teal hover:bg-abyssal-teal/80 text-white">
                Schedule a Consultation
              </RippleButton>
            </div>
          </ScrollReveal> */}
        </div>
      </section>
    </>
  )
}
