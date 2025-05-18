import Image from "next/image"
import Link from "next/link"
import { Check } from "lucide-react"
import SectionHeading from "@/components/section-heading"
import WaveSeparator from "@/components/wave-separator"
import ParticleBackground from "@/components/particle-background"
import ScrollReveal from "@/components/scroll-reveal"
import RippleButton from "@/components/ripple-button"

export default function CarbonSolutionsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/carbon_cap1.jpg"
            alt="GENIX Carbon Solutions"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-dark-sapphire/80" />
          <ParticleBackground count={20} />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center mt-20">
          <ScrollReveal animation="fade-up">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-space-grotesk">
              GENIX Carbon Solutions
            </h1>
          </ScrollReveal>
          <ScrollReveal animation="fade-up" delay={200}>
            <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto">
              "The Ocean Absorbs 30% of CO₂ – We Help It Capture Even More."
            </p>
          </ScrollReveal>
          <ScrollReveal animation="fade-up" delay={400}>
            <p className="text-lg text-white/80 mb-8 max-w-3xl mx-auto">
              From scalable algae farms to AI-optimized kelp forests, GENIX delivers nature-aligned, tech-empowered
              carbon removal. Our mission: help the ocean fight climate change — intelligently.
            </p>
          </ScrollReveal>
          <ScrollReveal animation="fade-up" delay={600}>
            <div className="flex flex-wrap justify-center gap-4">
              {/* <RippleButton className="bg-coral-orange hover:bg-coral-orange/80 text-white">
                Explore Our Solutions
              </RippleButton> */}
              {/* <RippleButton
                variant="outline"
                className="border-seafoam-blue text-seafoam-blue hover:bg-seafoam-blue hover:text-white"
                rippleColor="rgba(56, 163, 165, 0.3)"
              >
                Book a Demo with Our Climate Team
              </RippleButton> */}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <WaveSeparator />

      {/* The Problem We Solve */}
      <section className="py-20 bg-abyssal-teal relative">
        <ParticleBackground count={15} color="rgba(1, 46, 64, 0.2)" />
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <SectionHeading
              title="The Problem We Solve"
              subtitle="Carbon capture is broken — either it's too small, too slow, or too expensive."
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal animation="fade-right">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Traditional methods are:</h3>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <div className="bg-dark-sapphire/50 p-2 rounded-full mr-4 mt-1">
                      <Check className="text-coral-orange h-5 w-5" />
                    </div>
                    <p className="text-white/80">Land-based and vulnerable to wildfires</p>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-dark-sapphire/50 p-2 rounded-full mr-4 mt-1">
                      <Check className="text-coral-orange h-5 w-5" />
                    </div>
                    <p className="text-white/80">Industrial, with energy-heavy footprints</p>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-dark-sapphire/50 p-2 rounded-full mr-4 mt-1">
                      <Check className="text-coral-orange h-5 w-5" />
                    </div>
                    <p className="text-white/80">Ocean-based, but severely underdeveloped</p>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-4">
                  GENIX Carbon Solutions delivers next-gen marine-based carbon removal that is:
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Check className="text-seafoam-blue mr-2 flex-shrink-0" size={18} />
                    <span className="text-white/80">Scalable</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="text-seafoam-blue mr-2 flex-shrink-0" size={18} />
                    <span className="text-white/80">Affordable</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="text-seafoam-blue mr-2 flex-shrink-0" size={18} />
                    <span className="text-white/80">Permanently impactful</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-left" delay={200}>
              <div className="bg-dark-sapphire/30 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-white mb-4">Stat Highlight Block:</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-abyssal-teal/20 p-4 rounded-lg text-center">
                    <div className="text-3xl font-bold text-coral-orange mb-2">3x</div>
                    <p className="text-white/80">more efficient than forests</p>
                  </div>
                  <div className="bg-abyssal-teal/20 p-4 rounded-lg text-center">
                    <div className="text-3xl font-bold text-coral-orange mb-2">50%</div>
                    <p className="text-white/80">cheaper than industrial DAC</p>
                  </div>
                  <div className="bg-abyssal-teal/20 p-4 rounded-lg text-center">
                    <div className="text-3xl font-bold text-coral-orange mb-2">100%</div>
                    <p className="text-white/80">Verified Carbon Standards</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <WaveSeparator color="abyssal-teal" />

      {/* Our Carbon Capture Portfolio */}
      <section className="py-20 bg-dark-sapphire relative">
        <ParticleBackground count={10} />
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <SectionHeading
              title="Our Carbon Capture Portfolio"
              subtitle="Innovative solutions for effective carbon sequestration."
              centered
            />
          </ScrollReveal>

          <div className="space-y-16 mt-12">
            <ScrollReveal animation="fade-up" delay={100}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="relative">
                  <div className="aspect-video relative rounded-lg overflow-hidden">
                    <Image src="/images/algae_lock.jpg" alt="ALGAELOCK™" fill className="object-cover" />
                  </div>
                  <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-seafoam-blue/10 rounded-full animate-pulse"></div>
                </div>

                <div>
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-seafoam-blue/20 rounded-full flex items-center justify-center mr-4">
                      <span className="text-2xl font-bold text-seafoam-blue">1</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white">ALGAELOCK™</h3>
                  </div>
                  <p className="text-white/80 mb-4">Industrial-scale algae farms engineered for CO₂ drawdown</p>
                  <ul className="space-y-3 text-white/80 mb-6">
                    <li className="flex items-start">
                      <Check className="text-coral-orange mr-2 mt-1 flex-shrink-0" size={18} />
                      <span>Grows genetically-optimized super spirulina</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-coral-orange mr-2 mt-1 flex-shrink-0" size={18} />
                      <span>Captures CO₂ via enhanced photosynthesis</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-coral-orange mr-2 mt-1 flex-shrink-0" size={18} />
                      <span>Biomass is sunk deep for permanent sequestration</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-coral-orange mr-2 mt-1 flex-shrink-0" size={18} />
                      <span>Produces high-protein byproducts for animal feed</span>
                    </li>
                  </ul>
                  <div className="bg-abyssal-teal/20 p-4 rounded-lg">
                    <h4 className="text-lg font-bold text-white mb-2">Outputs:</h4>
                    <div className="flex items-center">
                      <Check className="text-seafoam-blue mr-2 flex-shrink-0" size={18} />
                      <span className="text-white/80">Certified carbon credits</span>
                    </div>
                    <div className="flex items-center mt-2">
                      <Check className="text-seafoam-blue mr-2 flex-shrink-0" size={18} />
                      <span className="text-white/80">Revenue from biomass and food markets</span>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={200}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="order-2 lg:order-1">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-seafoam-blue/20 rounded-full flex items-center justify-center mr-4">
                      <span className="text-2xl font-bold text-seafoam-blue">2</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white">KELP FORGE™</h3>
                  </div>
                  <p className="text-white/80 mb-4">AI-managed kelp forests optimized for carbon and biodiversity</p>
                  <ul className="space-y-3 text-white/80 mb-6">
                    <li className="flex items-start">
                      <Check className="text-coral-orange mr-2 mt-1 flex-shrink-0" size={18} />
                      <span>Biodegradable underwater "kelp pods" grow rapidly</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-coral-orange mr-2 mt-1 flex-shrink-0" size={18} />
                      <span>AI + satellite systems monitor and maximize growth</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-coral-orange mr-2 mt-1 flex-shrink-0" size={18} />
                      <span>Kelp harvested for biochar and regenerative soil use</span>
                    </li>
                  </ul>
                  <div className="bg-abyssal-teal/20 p-4 rounded-lg">
                    <h4 className="text-lg font-bold text-white mb-2">Co-Benefits:</h4>
                    <div className="flex items-center">
                      <Check className="text-seafoam-blue mr-2 flex-shrink-0" size={18} />
                      <span className="text-white/80">Restores marine life</span>
                    </div>
                    <div className="flex items-center mt-2">
                      <Check className="text-seafoam-blue mr-2 flex-shrink-0" size={18} />
                      <span className="text-white/80">Reduces coastal erosion</span>
                    </div>
                    <div className="flex items-center mt-2">
                      <Check className="text-seafoam-blue mr-2 flex-shrink-0" size={18} />
                      <span className="text-white/80">Creates blue jobs in rural shores</span>
                    </div>
                  </div>
                </div>

                <div className="relative order-1 lg:order-2">
                  <div className="aspect-video relative rounded-lg overflow-hidden">
                    <Image
                      src="/images/kelp.jpg"
                      alt="KELP FORGE™"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-seafoam-blue/10 rounded-full animate-pulse"></div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={300}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="relative">
                  <div className="aspect-video relative rounded-lg overflow-hidden">
                    <Image
                      src="/images/forest_cap.jpg"
                      alt="ABYSS STORAGE™"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="absolute -top-6 -right-6 w-48 h-48 bg-seafoam-blue/10 rounded-full animate-pulse"></div>
                </div>

                <div>
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-seafoam-blue/20 rounded-full flex items-center justify-center mr-4">
                      <span className="text-2xl font-bold text-seafoam-blue">3</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white">ABYSS STORAGE™</h3>
                  </div>
                  <p className="text-white/80 mb-4">Deep-sea CO₂ mineralization in basalt rock formations</p>
                  <ul className="space-y-3 text-white/80 mb-6">
                    <li className="flex items-start">
                      <Check className="text-coral-orange mr-2 mt-1 flex-shrink-0" size={18} />
                      <span>Injects compressed CO₂ into underwater basalt</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-coral-orange mr-2 mt-1 flex-shrink-0" size={18} />
                      <span>Reacts with rock to form stable carbonate minerals</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-coral-orange mr-2 mt-1 flex-shrink-0" size={18} />
                      <span>Converts in &lt;2 years — with zero leakage</span>
                    </li>
                  </ul>
                  <div className="bg-abyssal-teal/20 p-4 rounded-lg">
                    <h4 className="text-lg font-bold text-white mb-2">Why It Matters:</h4>
                    <div className="flex items-center">
                      <Check className="text-seafoam-blue mr-2 flex-shrink-0" size={18} />
                      <span className="text-white/80">Largest-scale marine sequestration method</span>
                    </div>
                    <div className="flex items-center mt-2">
                      <Check className="text-seafoam-blue mr-2 flex-shrink-0" size={18} />
                      <span className="text-white/80">Ideal for oil/gas decommissioning zones</span>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <WaveSeparator />

      {/* Why GENIX Stands Out */}
      <section className="py-20 bg-abyssal-teal relative">
        <ParticleBackground count={15} color="rgba(1, 46, 64, 0.2)" />
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <SectionHeading
              title="Why GENIX Stands Out"
              subtitle="Comparing our carbon capture solutions with alternatives."
            />
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={200}>
            <div className="overflow-x-auto">
              <table className="w-full bg-dark-sapphire/30 rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-dark-sapphire/50">
                    <th className="px-6 py-4 text-left text-white">Solution</th>
                    <th className="px-6 py-4 text-left text-white">CO₂/Year</th>
                    <th className="px-6 py-4 text-left text-white">Cost/Ton</th>
                    <th className="px-6 py-4 text-left text-white">Co-Benefits</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-abyssal-teal/30">
                    <td className="px-6 py-4 text-white font-medium">ALGAELOCK™</td>
                    <td className="px-6 py-4 text-white/70">100K tons/site</td>
                    <td className="px-6 py-4 text-white/70">$120</td>
                    <td className="px-6 py-4 text-white/70">Protein byproduct</td>
                  </tr>
                  <tr className="border-t border-abyssal-teal/30">
                    <td className="px-6 py-4 text-white font-medium">KELP FORGE™</td>
                    <td className="px-6 py-4 text-white/70">50K tons/km²</td>
                    <td className="px-6 py-4 text-white/70">$90</td>
                    <td className="px-6 py-4 text-white/70">Habitat restoration</td>
                  </tr>
                  <tr className="border-t border-abyssal-teal/30">
                    <td className="px-6 py-4 text-white font-medium">ABYSS STORAGE™</td>
                    <td className="px-6 py-4 text-white/70">1M+ tons/site</td>
                    <td className="px-6 py-4 text-white/70">$150</td>
                    <td className="px-6 py-4 text-white/70">Permanent, secure</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={300} className="mt-8">
            <div className="bg-dark-sapphire/30 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-white mb-4">All solutions are certified under:</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-center">
                  <Check className="text-coral-orange mr-2 flex-shrink-0" size={18} />
                  <span className="text-white/80">Verra Carbon Standard</span>
                </div>
                <div className="flex items-center">
                  <Check className="text-coral-orange mr-2 flex-shrink-0" size={18} />
                  <span className="text-white/80">Ocean CDR Accreditation</span>
                </div>
                <div className="flex items-center">
                  <Check className="text-coral-orange mr-2 flex-shrink-0" size={18} />
                  <span className="text-white/80">UNEP Blue Carbon Protocol</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <WaveSeparator color="abyssal-teal" />

      {/* Who Uses GENIX Carbon Solutions */}
      <section className="py-20 bg-dark-sapphire relative">
        <ParticleBackground count={10} />
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <SectionHeading
              title="Who Uses GENIX Carbon Solutions?"
              subtitle="Our carbon capture technologies serve diverse stakeholders."
              centered
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <ScrollReveal animation="fade-up" delay={100}>
              <div className="bg-abyssal-teal/20 p-6 rounded-lg hover:bg-abyssal-teal/40 transition-all duration-300 hover:-translate-y-1 h-full">
                <div className="w-12 h-12 bg-seafoam-blue/20 rounded-full flex items-center justify-center mb-6">
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
                    className="text-seafoam-blue"
                  >
                    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
                    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
                    <path d="M4 22h16" />
                    <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
                    <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
                    <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Corporate Clients</h3>
                <ul className="space-y-3 text-white/80">
                  <li>• Meet science-based net-zero targets</li>
                  <li>• Secure long-term carbon credits</li>
                  <li>• Build climate-positive branding</li>
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={200}>
              <div className="bg-abyssal-teal/20 p-6 rounded-lg hover:bg-abyssal-teal/40 transition-all duration-300 hover:-translate-y-1 h-full">
                <div className="w-12 h-12 bg-seafoam-blue/20 rounded-full flex items-center justify-center mb-6">
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
                    className="text-seafoam-blue"
                  >
                    <path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
                    <path d="M17 18h1" />
                    <path d="M12 18h1" />
                    <path d="M7 18h1" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Governments</h3>
                <ul className="space-y-3 text-white/80">
                  <li>• Fulfill national NDCs via blue carbon</li>
                  <li>• Launch ocean job schemes & regenerative shorelines</li>
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={300}>
              <div className="bg-abyssal-teal/20 p-6 rounded-lg hover:bg-abyssal-teal/40 transition-all duration-300 hover:-translate-y-1 h-full">
                <div className="w-12 h-12 bg-seafoam-blue/20 rounded-full flex items-center justify-center mb-6">
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
                    className="text-seafoam-blue"
                  >
                    <path d="M12 2v20" />
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Investors</h3>
                <ul className="space-y-3 text-white/80">
                  <li>• Gain first-mover access to marine carbon markets</li>
                  <li>• IP access: algae strains, kelp genomics, robotic planters</li>
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <WaveSeparator />

      {/* Case Study */}
      <section className="py-20 bg-abyssal-teal relative">
        <ParticleBackground count={15} color="rgba(1, 46, 64, 0.2)" />
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <SectionHeading
              title="Case Study: ALGAELOCK in Norway"
              subtitle="Real-world implementation of our carbon capture technology."
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal animation="fade-right">
              <div>
                <div className="bg-dark-sapphire/30 p-6 rounded-lg mb-6">
                  <h3 className="text-xl font-bold text-white mb-3">Client: North Sea Energy Consortium</h3>
                  <p className="text-white/80">Challenge: Offset 500K tons CO₂ annually from oil rigs</p>
                </div>

                <h3 className="text-xl font-bold text-white mb-4">GENIX Deployment:</h3>
                <ul className="space-y-3 text-white/80 mb-6">
                  <li className="flex items-start">
                    <div className="bg-dark-sapphire/50 p-1 rounded-full mr-3 mt-1">
                      <span className="text-coral-orange text-sm">•</span>
                    </div>
                    <p>12 algae pods encircling platform perimeters</p>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-dark-sapphire/50 p-1 rounded-full mr-3 mt-1">
                      <span className="text-coral-orange text-sm">•</span>
                    </div>
                    <p>Real-time AI monitoring & biomass sinking</p>
                  </li>
                </ul>

                <h3 className="text-xl font-bold text-white mb-4">Results:</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Check className="text-seafoam-blue mr-2 flex-shrink-0" size={18} />
                    <span className="text-white/80">520,000 tons verified CO₂ removed</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="text-seafoam-blue mr-2 flex-shrink-0" size={18} />
                    <span className="text-white/80">$8M revenue from biomass protein</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="text-seafoam-blue mr-2 flex-shrink-0" size={18} />
                    <span className="text-white/80">30% increase in fish biomass near site</span>
                  </div>
                </div>

                {/* <div className="mt-6">
                  <RippleButton className="bg-coral-orange hover:bg-coral-orange/80 text-white">
                    Download Full Case Study
                  </RippleButton>
                </div> */}
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-left" delay={200}>
              <div className="relative">
                <div className="aspect-video relative rounded-lg overflow-hidden">
                  <Image
                    src="/images/algae_lock.jpg"
                    alt="ALGAELOCK in Norway"
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

      {/* Get Involved */}
      <section className="py-20 bg-dark-sapphire relative">
        <ParticleBackground count={10} />
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <SectionHeading
              title="Get Involved"
              subtitle="Join us in our mission to leverage the ocean for carbon capture."
              centered
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <ScrollReveal animation="fade-up" delay={100}>
              <div className="bg-abyssal-teal/20 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-white mb-4">For Corporate Buyers</h3>
                <div className="space-y-4">
                  <RippleButton className="w-full bg-coral-orange hover:bg-coral-orange/80 text-white">
                    Calculate Your Offset Needs
                  </RippleButton>
                  <RippleButton
                    variant="outline"
                    className="w-full border-seafoam-blue text-seafoam-blue hover:bg-seafoam-blue hover:text-white"
                    rippleColor="rgba(56, 163, 165, 0.3)"
                  >
                    Pre-Purchase 2026 Removal Credits
                  </RippleButton>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={200}>
              <div className="bg-abyssal-teal/20 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-white mb-4">For Scientists & Innovators</h3>
                <div className="space-y-4">
                  <RippleButton className="w-full bg-coral-orange hover:bg-coral-orange/80 text-white">
                    Access Open-Source Growth Models
                  </RippleButton>
                  <RippleButton
                    variant="outline"
                    className="w-full border-seafoam-blue text-seafoam-blue hover:bg-seafoam-blue hover:text-white"
                    rippleColor="rgba(56, 163, 165, 0.3)"
                  >
                    Submit Research Proposals
                  </RippleButton>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={300}>
              <div className="bg-abyssal-teal/20 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-white mb-4">For Site Partners</h3>
                <div className="space-y-4">
                  <RippleButton className="w-full bg-coral-orange hover:bg-coral-orange/80 text-white">
                    Join Our Coastal Community Program
                  </RippleButton>
                  <RippleButton
                    variant="outline"
                    className="w-full border-seafoam-blue text-seafoam-blue hover:bg-seafoam-blue hover:text-white"
                    rippleColor="rgba(56, 163, 165, 0.3)"
                  >
                    License ALGAELOCK For Your Region
                  </RippleButton>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <WaveSeparator />

      {/* Closing CTA */}
      <section className="py-20 bg-abyssal-teal relative">
        <ParticleBackground count={15} color="rgba(1, 46, 64, 0.2)" />
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              "The ocean has always captured carbon. We're just helping it do it better."
            </h2>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={200} className="max-w-xl mx-auto">
            <div className="bg-dark-sapphire/30 p-6 rounded-lg mt-8">
              <div className="space-y-4">
                <div className="flex items-center justify-center">
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
                    className="text-coral-orange mr-3"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  <span className="text-white">seaverseresearch@gmail.com</span>
                </div>
                <div className="flex items-center justify-center">
                  <Link href="#" className="text-seafoam-blue hover:text-coral-orange transition-colors">
                    www.seaverse.co/research/genix/carbon
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={300} className="mt-8">
            <div className="flex flex-wrap justify-center gap-2">
              <span className="bg-seafoam-blue/20 text-seafoam-blue px-3 py-1 rounded-full text-sm">Blue Carbon</span>
              <span className="bg-seafoam-blue/20 text-seafoam-blue px-3 py-1 rounded-full text-sm">
                Algae Carbon Capture
              </span>
              <span className="bg-seafoam-blue/20 text-seafoam-blue px-3 py-1 rounded-full text-sm">Ocean CDR</span>
              <span className="bg-seafoam-blue/20 text-seafoam-blue px-3 py-1 rounded-full text-sm">
                Kelp Sequestration
              </span>
              <span className="bg-seafoam-blue/20 text-seafoam-blue px-3 py-1 rounded-full text-sm">
                Carbon Credits
              </span>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
