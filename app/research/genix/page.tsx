import Image from "next/image"
import { Check } from "lucide-react"
import SectionHeading from "@/components/section-heading"
import WaveSeparator from "@/components/wave-separator"
import ParticleBackground from "@/components/particle-background"
import ScrollReveal from "@/components/scroll-reveal"
import RippleButton from "@/components/ripple-button"
import TechnologyCard from "@/components/technology-card"
import { Mail, Phone } from "lucide-react"

export default function GenixPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/oceanlabo.jpg"
            alt="Genix Ocean Laboratories"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark-surface/90 to-dark-surface/70" />
          <ParticleBackground count={20} color="rgba(255, 140, 0, 0.05)" />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center mt-20">
          <ScrollReveal animation="fade-up">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-space-grotesk bg-gradient-to-r from-accent-orange to-accent-orange-light bg-clip-text text-transparent">GENIX</h1>
          </ScrollReveal>
          <ScrollReveal animation="fade-up" delay={200}>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">Artificial Ocean Laboratories</p>
          </ScrollReveal>
          <ScrollReveal animation="scale" delay={400}>
            <div className="inline-block bg-dark-card/50 px-6 py-3 rounded-lg border border-dark-border/50 hover:border-accent-orange/30 transition-all duration-300">
              <p className="text-accent-orange font-medium">
                Revolutionizing Proficient Aquaculture & Caviar Farming in India (Launching 2026)
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <WaveSeparator />

      {/* Overview Section */}
      <section className="py-20 bg-dark-surface relative">
        <ParticleBackground count={15} color="rgba(255, 140, 0, 0.05)" />
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal animation="fade-right">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">The Future of Aquaculture, Begins Here</h2>
                <p className="text-gray-300 mb-6">
                  At GENIX, the research arm of SEAVERSE, we redefine the boundaries of marine science and food
                  innovation. In 2026, we would proudly launch India's first Artificial Ocean Laboratory, a pioneering
                  ecosystem designed to cultivate high-valued marine species.
                </p>

                <ScrollReveal animation="stagger" className="stagger-reveal space-y-2 mb-6">
                  <div className="flex items-center group">
                    <div className="w-6 h-6 rounded-full bg-accent-orange/10 flex items-center justify-center mr-3 group-hover:bg-accent-orange/20 transition-colors duration-300">
                      <Check className="text-accent-orange" size={14} />
                    </div>
                    <span className="text-gray-300 group-hover:text-white transition-colors duration-300">Atlantic Salmon</span>
                  </div>
                  <div className="flex items-center group">
                    <div className="w-6 h-6 rounded-full bg-accent-orange/10 flex items-center justify-center mr-3 group-hover:bg-accent-orange/20 transition-colors duration-300">
                      <Check className="text-accent-orange" size={14} />
                    </div>
                    <span className="text-gray-300 group-hover:text-white transition-colors duration-300">Bluefin & Yellowfin Tuna</span>
                  </div>
                  <div className="flex items-center group">
                    <div className="w-6 h-6 rounded-full bg-accent-orange/10 flex items-center justify-center mr-3 group-hover:bg-accent-orange/20 transition-colors duration-300">
                      <Check className="text-accent-orange" size={14} />
                    </div>
                    <span className="text-gray-300 group-hover:text-white transition-colors duration-300">Beluga & Siberian Sturgeon (for Caviar Production)</span>
                  </div>
                  <div className="flex items-center group">
                    <div className="w-6 h-6 rounded-full bg-accent-orange/10 flex items-center justify-center mr-3 group-hover:bg-accent-orange/20 transition-colors duration-300">
                      <Check className="text-accent-orange" size={14} />
                    </div>
                    <span className="text-gray-300 group-hover:text-white transition-colors duration-300">Other premium marine finfish species</span>
                  </div>
                </ScrollReveal>

                <ScrollReveal animation="fade-up" delay={400}>
                  <div className="bg-dark-card/50 p-4 rounded-lg border border-dark-border/50 hover:border-accent-orange/30 transition-all duration-300">
                    <h3 className="text-xl font-bold text-white mb-3">Vision</h3>
                    <p className="text-gray-300">
                      To make India a global hub for sustainable high-end seafood and ethical caviar production,
                      which is engineered through controlled ocean simulation and advanced biotechnology.
                    </p>
                  </div>
                </ScrollReveal>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-left" delay={200}>
              <div className="relative">
                <div className="aspect-square relative rounded-lg overflow-hidden border border-dark-border/50 hover:border-accent-orange/30 transition-all duration-300">
                  <Image
                    src="/images/l1.jpg"
                    alt="Genix Ocean Laboratory"
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

      {/* Unique Features */}
      <section className="py-20 bg-dark-card relative">
        <ParticleBackground count={10} color="rgba(255, 140, 0, 0.05)" />
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <SectionHeading
              title="What Makes This Project Unique?"
              subtitle="The groundbreaking features that set Genix apart from conventional aquaculture."
              centered
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Artificial Ocean Ecosystem",
                description:
                  "A fully monitored, AI regulated environment that mimics real ocean conditions like salinity, pH, light, and temperature — enabling tropical and cold species to thrive in the inlands of India.",
              },
              {
                title: "Luxury Aquaculture R&D",
                description:
                  "A sole Indian laboratory dedicated to luxury aquaculture, precision breeding, and bio-secure marine hatcheries.",
              },
              {
                title: "Caviar Production in India",
                description:
                  "Introducing India's first ethical caviar production ecosystem using sustainable sturgeon farming methods, which opens new export and pharmaceutical markets.",
              },
              {
                title: "AI & Robotics Integration",
                description:
                  "Machine vision systems for fish health monitoring, smart feeding, and behavioral analysis for optimized growth cycles.",
              },
            ].map((feature, index) => (
              <ScrollReveal key={index} animation="fade-up" delay={index * 100}>
                <div className="bg-dark-surface/50 p-6 rounded-lg border border-dark-border/50 hover:border-accent-orange/30 transition-all duration-300 hover:-translate-y-1 group">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent-orange transition-colors duration-300">{feature.title}</h3>
                  <p className="text-gray-300 group-hover:text-white transition-colors duration-300">{feature.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <WaveSeparator />

      {/* Species Table */}
      <section className="py-20 bg-dark-surface relative">
        <ParticleBackground count={15} color="rgba(255, 140, 0, 0.05)" />
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <SectionHeading
              title="Species We Will Cultivate"
              subtitle="Premium marine species with high market value and export potential."
            />
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={200}>
            <div className="overflow-x-auto">
              <table className="w-full bg-dark-card/50 rounded-lg overflow-hidden border border-dark-border/50">
                <thead>
                  <tr className="bg-dark-surface/50">
                    <th className="px-6 py-4 text-left text-white">Species</th>
                    <th className="px-6 py-4 text-left text-white">Application</th>
                    <th className="px-6 py-4 text-left text-white">Export Potential</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-accent-orange/30 hover:bg-dark-surface/30 transition-colors duration-300">
                    <td className="px-6 py-4 text-white font-medium"> Atlantic Salmon</td>
                    <td className="px-6 py-4 text-gray-300">Premium meat</td>
                    <td className="px-6 py-4 text-gray-300">Europe, Japan, UAE</td>
                  </tr>
                  <tr className="border-t border-accent-orange/30 hover:bg-dark-surface/30 transition-colors duration-300">
                    <td className="px-6 py-4 text-white font-medium">Bluefin Tuna</td>
                    <td className="px-6 py-4 text-gray-300">Sashimi graded seafood</td>
                    <td className="px-6 py-4 text-gray-300">East Asia, US</td>
                  </tr>
                  <tr className="border-t border-accent-orange/30 hover:bg-dark-surface/30 transition-colors duration-300">
                    <td className="px-6 py-4 text-white font-medium">Sturgeon</td>
                    <td className="px-6 py-4 text-gray-300">Caviar production</td>
                    <td className="px-6 py-4 text-gray-300">United Kingdom, Netherlands</td>
                  </tr>
                  <tr className="border-t border-accent-orange/30 hover:bg-dark-surface/30 transition-colors duration-300">
                    <td className="px-6 py-4 text-white font-medium">Yellowtail Kingfish</td>
                    <td className="px-6 py-4 text-gray-300">Gourmet cuisine</td>
                    <td className="px-6 py-4 text-gray-300">Australia, The Middle East</td>
                  </tr>
                  <tr className="border-t border-accent-orange/30 hover:bg-dark-surface/30 transition-colors duration-300">
                    <td className="px-6 py-4 text-white font-medium">Other luxury marine finfish</td>
                    <td className="px-6 py-4 text-gray-300">Pharma-grade proteins</td>
                    <td className="px-6 py-4 text-gray-300">Global Needs</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <WaveSeparator />

      {/* Infrastructure */}
      <section className="py-20 bg-dark-card relative">
        <ParticleBackground count={10} color="rgba(255, 140, 0, 0.05)" />
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <SectionHeading
              title="Infrastructure Highlights (2026 Onwards)"
              subtitle="A state of the art facility designed for premium marine species cultivation."
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Artificial Ocean Tanks",
                description: "Large-scale recirculating marine systems",
              },
              {
                title: "Integrated Hatcheries",
                description: "Genetic purity and protective breeding",
              },
              {
                title: "Water Treatment Systems",
                description: "Dynamic biofiltration and UV sterilization",
              },
              {
                title: "Cold & Warm Zone Labs",
                description: "Species-specific ocean microclimates",
              },
              {
                title: "Caviar Harvesting Unit",
                description: "Non-lethal and ethical extraction technologies",
              },
              {
                title: "Research & Development Center",
                description: "Advanced breeding and genetic research",
              },
            ].map((item, index) => (
              <ScrollReveal key={index} animation="fade-up" delay={index * 100}>
                <div className="bg-dark-surface/50 p-6 rounded-lg border border-dark-border/50 hover:border-accent-orange/30 transition-all duration-300 group">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent-orange transition-colors duration-300">{item.title}</h3>
                  <p className="text-gray-300 group-hover:text-white transition-colors duration-300">{item.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <WaveSeparator />

      {/* Sustainability */}
      <section className="py-20 bg-dark-surface relative">
        <ParticleBackground count={10} color="rgba(255, 140, 0, 0.05)" />
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal animation="fade-right" className="order-2 lg:order-1">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Sustainability Meets Innovation</h2>
                <p className="text-gray-300 mb-6">We aim to eliminate:</p>

                <ScrollReveal animation="stagger" className="stagger-reveal space-y-3 mb-6">
                  <div className="flex items-start">
                    <Check className="text-accent-orange mr-2 mt-1 flex-shrink-0" size={18} />
                    <span className="text-gray-300">Overfishing of wild high-value species</span>
                  </div>
                  <div className="flex items-start">
                    <Check className="text-accent-orange mr-2 mt-1 flex-shrink-0" size={18} />
                    <span className="text-gray-300">Unsustainable seafood imports</span>
                  </div>
                  <div className="flex items-start">
                    <Check className="text-accent-orange mr-2 mt-1 flex-shrink-0" size={18} />
                    <span className="text-gray-300">Marine ecosystem damage from uncontrolled farming</span>
                  </div>
                </ScrollReveal>

                <p className="text-gray-300 font-medium">
                  Every fish that we produce is ethical, traceable, and of the highest international standard.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-left" delay={200} className="order-1 lg:order-2">
              <div className="relative">
                <div className="aspect-video relative rounded-lg overflow-hidden">
                  <Image
                    src="/images/l2.jpg"
                    alt="Sustainable Aquaculture"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <WaveSeparator />

      {/* Target Outcomes */}
      <section className="py-20 bg-dark-surface relative">
        <ParticleBackground count={10} color="rgba(255, 140, 0, 0.05)" />
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <SectionHeading
              title="Target Outcomes"
              subtitle="Strategic goals and expected impact of the Genix Ocean Laboratories."
              centered
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: "Export Leadership",
                description: "Make India a leading exporter of sustainable caviar and exotic seafood.",
              },
              {
                title: "Import Reduction",
                description: "Reduce reliance on imported salmon and tuna, which benefits the economy as well.",
              },
              {
                title: "Revenue Generation",
                description: "Generate multi-crore revenue from gourmet markets.",
              },
              {
                title: "Research Leadership",
                description: "Establish GENIX as Asia's top marine innovation lab.",
              },
            ].map((outcome, index) => (
              <ScrollReveal key={index} animation="fade-up" delay={index * 100}>
                <div className="bg-dark-card/50 p-6 rounded-lg border border-dark-border/50 hover:border-accent-orange/30 transition-all duration-300 hover:-translate-y-1 group">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent-orange transition-colors duration-300">{outcome.title}</h3>
                  <p className="text-gray-300 group-hover:text-white transition-colors duration-300">{outcome.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <WaveSeparator />

      {/* Timeline */}
      <section className="py-20 bg-dark-surface relative">
        <ParticleBackground count={15} color="rgba(255, 140, 0, 0.05)" />
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <SectionHeading title="Timeline" subtitle="Our roadmap for bringing Genix Ocean Laboratories to life." />
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={200}>
            <div className="overflow-x-auto">
              <table className="w-full bg-dark-card/50 rounded-lg overflow-hidden border border-dark-border/50">
                <thead>
                  <tr className="bg-dark-surface/50">
                    <th className="px-6 py-4 text-left text-white">Phase</th>
                    <th className="px-6 py-4 text-left text-white">Timeline</th>
                    <th className="px-6 py-4 text-left text-white">Milestone</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      phase: "Infrastructure Planning",
                      timeline: "Q4 2025",
                      milestone: "Layout, species licensing, partnerships",
                    },
                    {
                      phase: "Construction & Prototyping",
                      timeline: "Q1–Q2 2026",
                      milestone: "Tank setup, artificial ocean simulation",
                    },
                    {
                      phase: "Hatchery & Trial Cultivation",
                      timeline: "Q3 2026",
                      milestone: "First species introduced",
                    },
                    {
                      phase: "Caviar System Activation",
                      timeline: "Q4 2026",
                      milestone: "First ethical harvests",
                    },
                    {
                      phase: "Beginning of Exports",
                      timeline: "Early 2027",
                      milestone: "Global shipping, luxury markets entry",
                    },
                  ].map((item, index) => (
                    <tr key={index} className="border-t border-accent-orange/30 hover:bg-dark-surface/30 transition-colors duration-300">
                      <td className="px-6 py-4 text-white font-medium">{item.phase}</td>
                      <td className="px-6 py-4 text-gray-300">{item.timeline}</td>
                      <td className="px-6 py-4 text-gray-300">{item.milestone}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <WaveSeparator />

      {/* Genix Research Areas */}
      <section className="py-20 bg-dark-surface relative">
        <ParticleBackground count={10} color="rgba(255, 140, 0, 0.05)" />
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <SectionHeading
              title="Genix Research Areas"
              subtitle="Explore our specialized research initiatives within the Genix program."
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ScrollReveal animation="fade-up" delay={100}>
              <TechnologyCard
                title="Haematococcus pluvialis"
                description="India's first sustainable astaxanthin production from marine algae, which delivers nature's most powerful antioxidant."
                imageSrc="/images/astax2.jpg"
                href="/research/genix/astaxanthin"
              />
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={200}>
              <TechnologyCard
                title="Carbon Solutions"
                description="Next-gen marine-based carbon removal technologies, which help the ocean fight climate change intelligently."
                imageSrc="/images/carbon_cap1.jpg"
                href="/research/genix/carbon"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      <WaveSeparator />

      {/* Contact Section */}
      <section className="py-20 bg-dark-surface relative">
        <ParticleBackground count={10} color="rgba(255, 140, 0, 0.05)" />
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal>
            <SectionHeading
              title="Join Our Research Initiative"
              subtitle="Partner with us to shape the future of sustainable aquaculture"
              centered
            />
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={200}>
            <div className="max-w-2xl mx-auto">
              <div className="bg-dark-card/50 p-8 rounded-lg border border-dark-border/50 hover:border-accent-orange/30 transition-all duration-300">
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
