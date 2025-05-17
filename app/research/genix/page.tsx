import Image from "next/image"
import { Check } from "lucide-react"
import SectionHeading from "@/components/section-heading"
import WaveSeparator from "@/components/wave-separator"
import ParticleBackground from "@/components/particle-background"
import ScrollReveal from "@/components/scroll-reveal"
import RippleButton from "@/components/ripple-button"
import TechnologyCard from "@/components/technology-card"

export default function GenixPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Genix Ocean Laboratories"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-dark-sapphire/80" />
          <ParticleBackground count={20} />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center mt-20">
          <ScrollReveal animation="fade-up">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-space-grotesk">GENIX</h1>
          </ScrollReveal>
          <ScrollReveal animation="fade-up" delay={200}>
            <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto">Artificial Ocean Laboratories</p>
          </ScrollReveal>
          <ScrollReveal animation="scale" delay={400}>
            <div className="inline-block bg-abyssal-teal/30 px-6 py-3 rounded-lg">
              <p className="text-seafoam-blue font-medium">
                Revolutionizing Luxury Aquaculture & Caviar Farming in India (Launching 2026)
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <WaveSeparator />

      {/* Overview Section */}
      <section className="py-20 bg-abyssal-teal relative">
        <ParticleBackground count={15} color="rgba(1, 46, 64, 0.2)" />
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal animation="fade-right">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">The Future of Aquaculture Begins Here</h2>
                <p className="text-white/80 mb-6">
                  At GENIX, the research arm of SEAVERSE, we're redefining the boundaries of marine science and food
                  innovation. In 2026, we proudly launch India's first Artificial Ocean Laboratory, a pioneering
                  ecosystem designed to cultivate high-value, luxury marine species such as:
                </p>

                <ScrollReveal animation="stagger" className="stagger-reveal space-y-2 mb-6">
                  <div className="flex items-center">
                    <Check className="text-coral-orange mr-2 flex-shrink-0" size={18} />
                    <span className="text-white/80">Atlantic Salmon</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="text-coral-orange mr-2 flex-shrink-0" size={18} />
                    <span className="text-white/80">Bluefin & Yellowfin Tuna</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="text-coral-orange mr-2 flex-shrink-0" size={18} />
                    <span className="text-white/80">Beluga & Siberian Sturgeon (for Caviar Production)</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="text-coral-orange mr-2 flex-shrink-0" size={18} />
                    <span className="text-white/80">Other premium marine finfish species</span>
                  </div>
                </ScrollReveal>

                <ScrollReveal animation="fade-up" delay={400}>
                  <div className="bg-dark-sapphire/30 p-4 rounded-lg">
                    <h3 className="text-xl font-bold text-white mb-3">Vision</h3>
                    <p className="text-white/70">
                      To make India a global hub for sustainable high-end seafood and ethical caviar production,
                      engineered through controlled ocean simulation and advanced biotechnology.
                    </p>
                  </div>
                </ScrollReveal>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-left" delay={200}>
              <div className="relative">
                <div className="aspect-square relative rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=600&width=600"
                    alt="Genix Ocean Laboratory"
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

      {/* Unique Features */}
      <section className="py-20 bg-dark-sapphire relative">
        <ParticleBackground count={10} />
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <SectionHeading
              title="What Makes This Project Unique?"
              subtitle="Groundbreaking features that set Genix apart from conventional aquaculture."
              centered
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Artificial Ocean Ecosystem",
                description:
                  "A fully monitored, AI-regulated environment that mimics real ocean conditions — salinity, pH, light, and temperature — enabling tropical and cold-water species to thrive in inland India.",
              },
              {
                title: "Luxury Aquaculture R&D",
                description:
                  "The first-of-its-kind Indian laboratory dedicated to luxury aquaculture, precision breeding, and bio-secure marine hatcheries.",
              },
              {
                title: "Caviar Production in India",
                description:
                  "Introducing India's first ethical caviar production ecosystem using sustainable sturgeon farming methods — opening new export and pharmaceutical markets.",
              },
              {
                title: "AI & Robotics Integration",
                description:
                  "Machine vision systems for fish health monitoring, smart feeding, and behavioral analysis for optimized growth cycles.",
              },
            ].map((feature, index) => (
              <ScrollReveal key={index} animation="fade-up" delay={index * 100}>
                <div className="bg-abyssal-teal/20 p-6 rounded-lg hover:bg-abyssal-teal/40 transition-all duration-300 hover:-translate-y-1">
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-white/70">{feature.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <WaveSeparator />

      {/* Species Table */}
      <section className="py-20 bg-abyssal-teal relative">
        <ParticleBackground count={15} color="rgba(1, 46, 64, 0.2)" />
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <SectionHeading
              title="Species We Will Cultivate"
              subtitle="Premium marine species with high market value and export potential."
            />
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={200}>
            <div className="overflow-x-auto">
              <table className="w-full bg-dark-sapphire/30 rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-dark-sapphire/50">
                    <th className="px-6 py-4 text-left text-white">Species</th>
                    <th className="px-6 py-4 text-left text-white">Application</th>
                    <th className="px-6 py-4 text-left text-white">Export Potential</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-abyssal-teal/30">
                    <td className="px-6 py-4 text-white font-medium">Atlantic Salmon</td>
                    <td className="px-6 py-4 text-white/70">Premium meat</td>
                    <td className="px-6 py-4 text-white/70">Europe, Japan, UAE</td>
                  </tr>
                  <tr className="border-t border-abyssal-teal/30">
                    <td className="px-6 py-4 text-white font-medium">Bluefin Tuna</td>
                    <td className="px-6 py-4 text-white/70">Sashimi-grade seafood</td>
                    <td className="px-6 py-4 text-white/70">East Asia, US</td>
                  </tr>
                  <tr className="border-t border-abyssal-teal/30">
                    <td className="px-6 py-4 text-white font-medium">Sturgeon</td>
                    <td className="px-6 py-4 text-white/70">Caviar production</td>
                    <td className="px-6 py-4 text-white/70">Luxury hotels, gourmet markets</td>
                  </tr>
                  <tr className="border-t border-abyssal-teal/30">
                    <td className="px-6 py-4 text-white font-medium">Yellowtail Kingfish</td>
                    <td className="px-6 py-4 text-white/70">Gourmet cuisine</td>
                    <td className="px-6 py-4 text-white/70">Australia, Middle East</td>
                  </tr>
                  <tr className="border-t border-abyssal-teal/30">
                    <td className="px-6 py-4 text-white font-medium">Other luxury marine finfish</td>
                    <td className="px-6 py-4 text-white/70">Pharma-grade proteins</td>
                    <td className="px-6 py-4 text-white/70">Global</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <WaveSeparator color="abyssal-teal" />

      {/* Infrastructure */}
      <section className="py-20 bg-dark-sapphire relative">
        <ParticleBackground count={10} />
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <SectionHeading
              title="Infrastructure Highlights (2026 Onwards)"
              subtitle="State-of-the-art facilities designed for premium marine species cultivation."
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Artificial Ocean Tanks",
                description: "Large-scale recirculating marine systems (RAS)",
              },
              {
                title: "Integrated Hatcheries",
                description: "Genetic purity and disease-resistance breeding",
              },
              {
                title: "Water Treatment Systems",
                description: "Real-time biofiltration and UV sterilization",
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
                title: "Genetic & Nutrition Lab",
                description: "Fish nutrition R&D and enzyme analysis",
              },
            ].map((item, index) => (
              <ScrollReveal key={index} animation="fade-up" delay={index * 100}>
                <div className="bg-abyssal-teal/20 p-6 rounded-lg hover:bg-abyssal-teal/40 transition-all duration-300 hover:-translate-y-1">
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-white/70">{item.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <WaveSeparator />

      {/* Sustainability */}
      <section className="py-20 bg-abyssal-teal relative">
        <ParticleBackground count={15} color="rgba(1, 46, 64, 0.2)" />
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal animation="fade-right" className="order-2 lg:order-1">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Sustainability Meets Innovation</h2>
                <p className="text-white/80 mb-6">We aim to eliminate:</p>

                <ScrollReveal animation="stagger" className="stagger-reveal space-y-3 mb-6">
                  <div className="flex items-start">
                    <Check className="text-coral-orange mr-2 mt-1 flex-shrink-0" size={18} />
                    <span className="text-white/80">Overfishing of wild high-value species</span>
                  </div>
                  <div className="flex items-start">
                    <Check className="text-coral-orange mr-2 mt-1 flex-shrink-0" size={18} />
                    <span className="text-white/80">Unsustainable seafood imports</span>
                  </div>
                  <div className="flex items-start">
                    <Check className="text-coral-orange mr-2 mt-1 flex-shrink-0" size={18} />
                    <span className="text-white/80">Marine ecosystem damage from uncontrolled farming</span>
                  </div>
                </ScrollReveal>

                <p className="text-white/80 font-medium">
                  Every fish we produce is ethical, traceable, and of the highest international standard.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-left" delay={200} className="order-1 lg:order-2">
              <div className="relative">
                <div className="aspect-video relative rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
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

      <WaveSeparator color="abyssal-teal" />

      {/* Target Outcomes */}
      <section className="py-20 bg-dark-sapphire relative">
        <ParticleBackground count={10} />
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
                description: "Reduce reliance on imported salmon and tuna.",
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
                <div className="bg-abyssal-teal/20 p-6 rounded-lg hover:bg-abyssal-teal/40 transition-all duration-300 hover:-translate-y-1">
                  <h3 className="text-xl font-bold text-white mb-3">{outcome.title}</h3>
                  <p className="text-white/70">{outcome.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <WaveSeparator />

      {/* Timeline */}
      <section className="py-20 bg-abyssal-teal relative">
        <ParticleBackground count={15} color="rgba(1, 46, 64, 0.2)" />
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <SectionHeading title="Timeline" subtitle="Our roadmap for bringing Genix Ocean Laboratories to life." />
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={200}>
            <div className="overflow-x-auto">
              <table className="w-full bg-dark-sapphire/30 rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-dark-sapphire/50">
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
                      phase: "Exports Begin",
                      timeline: "Early 2027",
                      milestone: "Global shipping, luxury markets entry",
                    },
                  ].map((item, index) => (
                    <tr key={index} className="border-t border-abyssal-teal/30">
                      <td className="px-6 py-4 text-white font-medium">{item.phase}</td>
                      <td className="px-6 py-4 text-white/70">{item.timeline}</td>
                      <td className="px-6 py-4 text-white/70">{item.milestone}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <WaveSeparator color="abyssal-teal" />

      {/* Genix Research Areas */}
      <section className="py-20 bg-dark-sapphire relative">
        <ParticleBackground count={10} />
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
                description="India's first sustainable astaxanthin production from marine algae, delivering nature's most powerful antioxidant."
                imageSrc="/placeholder.svg?height=400&width=600"
                href="/research/genix/astaxanthin"
              />
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={200}>
              <TechnologyCard
                title="Carbon Solutions"
                description="Next-generation marine-based carbon removal technologies helping the ocean fight climate change intelligently."
                imageSrc="/placeholder.svg?height=400&width=600"
                href="/research/genix/carbon"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      <WaveSeparator />

      {/* Collaborate */}
      <section className="py-20 bg-dark-sapphire relative">
        <ParticleBackground count={10} />
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal>
            <SectionHeading
              title="Want to Collaborate or Invest?"
              subtitle="Be part of India's greatest aquaculture breakthrough."
              centered
            />
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={200}>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              Reach out to GENIX today and let's build the future of ocean farming together.
            </p>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={300}>
            <div className="flex flex-wrap justify-center gap-4">
              <RippleButton className="bg-coral-orange hover:bg-coral-orange/80 text-white">
                Contact GENIX Team
              </RippleButton>
              <RippleButton
                variant="outline"
                className="border-seafoam-blue text-seafoam-blue hover:bg-seafoam-blue hover:text-white"
                rippleColor="rgba(56, 163, 165, 0.3)"
              >
                Download Investor Deck
              </RippleButton>
            </div>
          </ScrollReveal>

          <ScrollReveal
            animation="stagger"
            className="stagger-reveal mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto"
          >
            <div className="bg-abyssal-teal/20 p-4 rounded-lg">
              <p className="text-white/70 mb-2">Email</p>
              <p className="text-white font-medium">genix@seaverse.in</p>
            </div>

            <div className="bg-abyssal-teal/20 p-4 rounded-lg">
              <p className="text-white/70 mb-2">Website</p>
              <p className="text-white font-medium">www.seaverse.in/genix</p>
            </div>

            <div className="bg-abyssal-teal/20 p-4 rounded-lg">
              <p className="text-white/70 mb-2">Headquarters</p>
              <p className="text-white font-medium">SEAVERSE R&D Campus, Bengaluru</p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
