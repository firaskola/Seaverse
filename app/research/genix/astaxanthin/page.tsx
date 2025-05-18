import Link from "next/link"
import Image from "next/image"
import { Check } from "lucide-react"
import SectionHeading from "@/components/section-heading"
import WaveSeparator from "@/components/wave-separator"
import ParticleBackground from "@/components/particle-background"
import ScrollReveal from "@/components/scroll-reveal"
import RippleButton from "@/components/ripple-button"

export default function AstaxanthinPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/astax2.jpg"
            alt="Haematococcus pluvialis"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-dark-sapphire/80" />
          <ParticleBackground count={20} />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center mt-20">
          <ScrollReveal animation="fade-up">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-space-grotesk">
              GENIX Haematococcus pluvialis
            </h1>
          </ScrollReveal>
          <ScrollReveal animation="fade-up" delay={200}>
            <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto">
              Harnessing the Ocean's Most Powerful Antioxidant – Grown Sustainably in India
            </p>
          </ScrollReveal>
          <ScrollReveal animation="scale" delay={400}>
            <div className="inline-block bg-abyssal-teal/30 px-6 py-3 rounded-lg mb-8">
              <p className="text-seafoam-blue font-medium">"Nature's Red Gold – Now Brewed, Not Fished."</p>
            </div>
          </ScrollReveal>
          <ScrollReveal animation="fade-up" delay={600}>
            <div className="flex flex-wrap justify-center gap-4">
              <RippleButton className="bg-coral-orange hover:bg-coral-orange/80 text-white">
                Request Sample Kit
              </RippleButton>
              <RippleButton
                variant="outline"
                className="border-seafoam-blue text-seafoam-blue hover:bg-seafoam-blue hover:text-white"
                rippleColor="rgba(56, 163, 165, 0.3)"
              >
                See Live Reactor Feed
              </RippleButton>
              <RippleButton
                variant="outline"
                className="border-seafoam-blue text-seafoam-blue hover:bg-seafoam-blue hover:text-white"
                rippleColor="rgba(56, 163, 165, 0.3)"
              >
                Investor Brief Download
              </RippleButton>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <WaveSeparator />

      {/* Why Astaxanthin */}
      <section className="py-20 bg-abyssal-teal relative">
        <ParticleBackground count={15} color="rgba(1, 46, 64, 0.2)" />
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <SectionHeading title="Why Astaxanthin?" subtitle="The antioxidant that makes antioxidants look lazy." />
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal animation="fade-right">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Scientifically Backed Benefits:</h3>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center">
                    <Check className="text-coral-orange mr-2 flex-shrink-0" size={18} />
                    <span className="text-white/80">6000x more powerful than Vitamin C</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="text-coral-orange mr-2 flex-shrink-0" size={18} />
                    <span className="text-white/80">550x more effective than Green Tea EGCG</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="text-coral-orange mr-2 flex-shrink-0" size={18} />
                    <span className="text-white/80 font-medium">Clinically shown to:</span>
                  </div>
                  <div className="flex items-center ml-6">
                    <div className="w-6 h-6 bg-seafoam-blue/20 rounded-full flex items-center justify-center mr-2">
                      <span className="text-seafoam-blue">✓</span>
                    </div>
                    <span className="text-white/80">Improve UV protection by 40%</span>
                  </div>
                  <div className="flex items-center ml-6">
                    <div className="w-6 h-6 bg-seafoam-blue/20 rounded-full flex items-center justify-center mr-2">
                      <span className="text-seafoam-blue">✓</span>
                    </div>
                    <span className="text-white/80">Boost muscle recovery by 35%</span>
                  </div>
                  <div className="flex items-center ml-6">
                    <div className="w-6 h-6 bg-seafoam-blue/20 rounded-full flex items-center justify-center mr-2">
                      <span className="text-seafoam-blue">✓</span>
                    </div>
                    <span className="text-white/80">Support vision and cognitive clarity</span>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-4">But Here's the Problem:</h3>
                <div className="space-y-3 bg-dark-sapphire/30 p-4 rounded-lg">
                  <div className="flex items-start">
                    <div className="bg-dark-sapphire/50 p-1 rounded-full mr-3 mt-1">
                      <span className="text-coral-orange text-sm">•</span>
                    </div>
                    <p className="text-white/80">Over 90% of global supply is synthetic (petroleum-based)</p>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-dark-sapphire/50 p-1 rounded-full mr-3 mt-1">
                      <span className="text-coral-orange text-sm">•</span>
                    </div>
                    <p className="text-white/80">Wild-salmon derived sources are unsustainable</p>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-dark-sapphire/50 p-1 rounded-full mr-3 mt-1">
                      <span className="text-coral-orange text-sm">•</span>
                    </div>
                    <p className="text-white/80">India imports 100% of what it consumes — at a premium</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-left" delay={200}>
              <div className="relative">
                <div className="aspect-square relative rounded-lg overflow-hidden">
                  <Image
                    src="/images/astax2.jpg"
                    alt="Haematococcus pluvialis microscope view"
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

      {/* Our Solution */}
      <section className="py-20 bg-dark-sapphire relative">
        <ParticleBackground count={10} />
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <SectionHeading
              title="Our Solution: Ocean-Grown Purity"
              subtitle="Sustainable, high-quality astaxanthin production in India."
              centered
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <ScrollReveal animation="fade-up" delay={100}>
              <div className="bg-abyssal-teal/20 p-6 rounded-lg hover:bg-abyssal-teal/40 transition-all duration-300 hover:-translate-y-1 h-full">
                <div className="w-12 h-12 bg-seafoam-blue/20 rounded-full flex items-center justify-center mb-6">
                  <span className="text-2xl font-bold text-seafoam-blue">1</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Strains Engineered for India</h3>
                <ul className="space-y-3 text-white/80">
                  <li>• Heat-tolerant Haematococcus pluvialis thriving at 38°C</li>
                  <li>• CRISPR-assisted selection yields 2x pigment density</li>
                  <li>• Adapted to both coastal and high-altitude climates</li>
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={200}>
              <div className="bg-abyssal-teal/20 p-6 rounded-lg hover:bg-abyssal-teal/40 transition-all duration-300 hover:-translate-y-1 h-full">
                <div className="w-12 h-12 bg-seafoam-blue/20 rounded-full flex items-center justify-center mb-6">
                  <span className="text-2xl font-bold text-seafoam-blue">2</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Closed-Loop Solar Bioreactors</h3>
                <ul className="space-y-3 text-white/80">
                  <li>• Powered by India's largest solar parks</li>
                  <li>• Zero freshwater use — brackish & saline adaptation</li>
                  <li>• Fully automated, AI-regulated growth cycles</li>
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={300}>
              <div className="bg-abyssal-teal/20 p-6 rounded-lg hover:bg-abyssal-teal/40 transition-all duration-300 hover:-translate-y-1 h-full">
                <div className="w-12 h-12 bg-seafoam-blue/20 rounded-full flex items-center justify-center mb-6">
                  <span className="text-2xl font-bold text-seafoam-blue">3</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Full-Spectrum Astaxanthin Offerings</h3>
                <div className="overflow-x-auto">
                  <table className="w-full bg-dark-sapphire/30 rounded-lg overflow-hidden mb-4">
                    <thead>
                      <tr className="bg-dark-sapphire/50">
                        <th className="px-4 py-2 text-left text-white">Form</th>
                        <th className="px-4 py-2 text-left text-white">Use Case</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-t border-abyssal-teal/30">
                        <td className="px-4 py-2 text-white font-medium">Oleoresin (10%)</td>
                        <td className="px-4 py-2 text-white/70">Capsules, tablets, oil blends</td>
                      </tr>
                      <tr className="border-t border-abyssal-teal/30">
                        <td className="px-4 py-2 text-white font-medium">Beadlets (5%)</td>
                        <td className="px-4 py-2 text-white/70">Functional foods, gummies</td>
                      </tr>
                      <tr className="border-t border-abyssal-teal/30">
                        <td className="px-4 py-2 text-white font-medium">Water-dispersible</td>
                        <td className="px-4 py-2 text-white/70">Cosmetics, skincare emulsions</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="bg-dark-sapphire/30 p-3 rounded-lg">
                  <p className="text-white font-medium">Purity Benchmark:</p>
                  <div className="flex items-center mt-2">
                    <Check className="text-coral-orange mr-2 flex-shrink-0" size={18} />
                    <span className="text-white/80">
                      <span className="text-seafoam-blue font-medium">98% trans-isomer content</span> (Versus 75–80% in
                      synthetic)
                    </span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <WaveSeparator />

      {/* Why India? Why Now? */}
      <section className="py-20 bg-abyssal-teal relative">
        <ParticleBackground count={15} color="rgba(1, 46, 64, 0.2)" />
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <SectionHeading
              title="Why India? Why Now?"
              subtitle="The perfect timing for local astaxanthin production."
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ScrollReveal animation="fade-right">
              <div className="bg-dark-sapphire/30 p-6 rounded-lg">
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
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Market Timing</h3>
                <ul className="space-y-3 text-white/80">
                  <li>• $250M+ Indian demand by 2025</li>
                  <li>• No local producers until GENIX</li>
                  <li>• 40% cost edge over Chinese imports</li>
                  <li>• Surging wellness + vegan + clean-label demand</li>
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-left" delay={200}>
              <div className="bg-dark-sapphire/30 p-6 rounded-lg">
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
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Strategic Production Zones</h3>
                <ul className="space-y-3 text-white/80">
                  <li>• Gujarat: Solar-powered growth parks</li>
                  <li>• Tamil Nadu: Proximity to seafood waste for nutrient feed</li>
                  <li>• Himachal Pradesh: High-altitude biostress tanks for pigment optimization</li>
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <WaveSeparator color="abyssal-teal" />

      {/* GENIX Advantages */}
      <section className="py-20 bg-dark-sapphire relative">
        <ParticleBackground count={10} />
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <SectionHeading
              title="GENIX Advantages vs Traditional Producers"
              subtitle="How our production methods outperform the competition."
              centered
            />
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={200}>
            <div className="overflow-x-auto">
              <table className="w-full bg-abyssal-teal/20 rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-dark-sapphire/50">
                    <th className="px-6 py-4 text-left text-white">Feature</th>
                    <th className="px-6 py-4 text-left text-white">Others</th>
                    <th className="px-6 py-4 text-left text-white">GENIX India</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-abyssal-teal/30">
                    <td className="px-6 py-4 text-white font-medium">CO₂ Footprint</td>
                    <td className="px-6 py-4 text-white/70">8 kg CO₂/kg</td>
                    <td className="px-6 py-4 text-white font-medium">0.5 kg CO₂/kg</td>
                  </tr>
                  <tr className="border-t border-abyssal-teal/30">
                    <td className="px-6 py-4 text-white font-medium">Production Time</td>
                    <td className="px-6 py-4 text-white/70">6 weeks</td>
                    <td className="px-6 py-4 text-white font-medium">3 weeks</td>
                  </tr>
                  <tr className="border-t border-abyssal-teal/30">
                    <td className="px-6 py-4 text-white font-medium">Contamination Risk</td>
                    <td className="px-6 py-4 text-white/70">Solvent residues</td>
                    <td className="px-6 py-4 text-white font-medium">Solvent-free</td>
                  </tr>
                  <tr className="border-t border-abyssal-teal/30">
                    <td className="px-6 py-4 text-white font-medium">Yield Efficiency</td>
                    <td className="px-6 py-4 text-white/70">Moderate</td>
                    <td className="px-6 py-4 text-white font-medium">AI-optimized maximum yield</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={300} className="mt-8">
            <div className="bg-dark-sapphire/30 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-white mb-4">Certifications:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="flex items-center">
                  <Check className="text-coral-orange mr-2 flex-shrink-0" size={18} />
                  <span className="text-white/80">USP/EP pharma-grade</span>
                </div>
                <div className="flex items-center">
                  <Check className="text-coral-orange mr-2 flex-shrink-0" size={18} />
                  <span className="text-white/80">Vegan Society Certified</span>
                </div>
                <div className="flex items-center">
                  <Check className="text-coral-orange mr-2 flex-shrink-0" size={18} />
                  <span className="text-white/80">Halal & Kosher Compliant</span>
                </div>
                <div className="flex items-center">
                  <Check className="text-coral-orange mr-2 flex-shrink-0" size={18} />
                  <span className="text-white/80">Made in India, Made for the World</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <WaveSeparator />

      {/* Who We Serve */}
      <section className="py-20 bg-abyssal-teal relative">
        <ParticleBackground count={15} color="rgba(1, 46, 64, 0.2)" />
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <SectionHeading
              title="Who We Serve"
              subtitle="Our products cater to a wide range of industries and consumers."
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ScrollReveal animation="fade-right">
              <div className="bg-dark-sapphire/30 p-6 rounded-lg">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
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
                    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
                    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
                    <path d="M4 22h16" />
                    <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
                    <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
                    <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
                  </svg>
                  B2B Clients
                </h3>
                <ul className="space-y-4 text-white/80">
                  <li className="flex items-start">
                    <div className="bg-dark-sapphire/50 p-1 rounded-full mr-3 mt-1">
                      <span className="text-coral-orange text-sm">•</span>
                    </div>
                    <div>
                      <span className="text-white font-medium">Nutraceutical Brands:</span>
                      <p>"Ocean-to-capsule traceability"</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-dark-sapphire/50 p-1 rounded-full mr-3 mt-1">
                      <span className="text-coral-orange text-sm">•</span>
                    </div>
                    <div>
                      <span className="text-white font-medium">Cosmetics Firms:</span>
                      <p>Replace synthetic red dyes with bio-pigment</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-dark-sapphire/50 p-1 rounded-full mr-3 mt-1">
                      <span className="text-coral-orange text-sm">•</span>
                    </div>
                    <div>
                      <span className="text-white font-medium">Aquafeed Manufacturers:</span>
                      <p>Natural pigmentation for farmed fish</p>
                    </div>
                  </li>
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-left" delay={200}>
              <div className="bg-dark-sapphire/30 p-6 rounded-lg">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
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
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                  Health Consumers
                </h3>
                <ul className="space-y-4 text-white/80">
                  <li className="flex items-start">
                    <div className="bg-dark-sapphire/50 p-1 rounded-full mr-3 mt-1">
                      <span className="text-coral-orange text-sm">•</span>
                    </div>
                    <p>Biohackers & Longevity Enthusiasts</p>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-dark-sapphire/50 p-1 rounded-full mr-3 mt-1">
                      <span className="text-coral-orange text-sm">•</span>
                    </div>
                    <p>Athletes & Fitness Brands</p>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-dark-sapphire/50 p-1 rounded-full mr-3 mt-1">
                      <span className="text-coral-orange text-sm">•</span>
                    </div>
                    <p>Natural Beauty & Skincare Advocates</p>
                  </li>
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <WaveSeparator color="abyssal-teal" />

      {/* Project Timeline */}
      <section className="py-20 bg-dark-sapphire relative">
        <ParticleBackground count={10} />
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <SectionHeading
              title="Project Timeline"
              subtitle="Our roadmap for astaxanthin production in India."
              centered
            />
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={200} className="max-w-3xl mx-auto">
            <div className="overflow-x-auto">
              <table className="w-full bg-abyssal-teal/20 rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-dark-sapphire/50">
                    <th className="px-6 py-4 text-left text-white">Year</th>
                    <th className="px-6 py-4 text-left text-white">Milestone</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-abyssal-teal/30">
                    <td className="px-6 py-4 text-white font-medium">2024 Q3</td>
                    <td className="px-6 py-4 text-white/80">Pilot reactors live – 500 kg/month</td>
                  </tr>
                  <tr className="border-t border-abyssal-teal/30">
                    <td className="px-6 py-4 text-white font-medium">2025</td>
                    <td className="px-6 py-4 text-white/80">Scale-up to 5 tons/month across 3 states</td>
                  </tr>
                  <tr className="border-t border-abyssal-teal/30">
                    <td className="px-6 py-4 text-white font-medium">2026</td>
                    <td className="px-6 py-4 text-white/80">
                      Launch of GENIX Nutraceuticals IPO + 20% global market share target
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <WaveSeparator />

      {/* Get Involved */}
      <section className="py-20 bg-abyssal-teal relative">
        <ParticleBackground count={15} color="rgba(1, 46, 64, 0.2)" />
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <SectionHeading
              title="Get Involved"
              subtitle="Join us in revolutionizing astaxanthin production in India."
              centered
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <ScrollReveal animation="fade-up" delay={100}>
              <div className="bg-dark-sapphire/30 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-white mb-4">For Buyers</h3>
                <div className="space-y-4">
                  <RippleButton className="w-full bg-coral-orange hover:bg-coral-orange/80 text-white">
                    Get a Sample Kit
                  </RippleButton>
                  <RippleButton
                    variant="outline"
                    className="w-full border-seafoam-blue text-seafoam-blue hover:bg-seafoam-blue hover:text-white"
                    rippleColor="rgba(56, 163, 165, 0.3)"
                  >
                    Download Technical Dossier
                  </RippleButton>
                  <RippleButton
                    variant="outline"
                    className="w-full border-seafoam-blue text-seafoam-blue hover:bg-seafoam-blue hover:text-white"
                    rippleColor="rgba(56, 163, 165, 0.3)"
                  >
                    Request Bulk Pricing
                  </RippleButton>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={200}>
              <div className="bg-dark-sapphire/30 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-white mb-4">For Investors</h3>
                <div className="space-y-4">
                  <RippleButton className="w-full bg-coral-orange hover:bg-coral-orange/80 text-white">
                    Access Astaxanthin Market Report
                  </RippleButton>
                  <RippleButton
                    variant="outline"
                    className="w-full border-seafoam-blue text-seafoam-blue hover:bg-seafoam-blue hover:text-white"
                    rippleColor="rgba(56, 163, 165, 0.3)"
                  >
                    Join Our 2025 Pre-IPO Round
                  </RippleButton>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={300}>
              <div className="bg-dark-sapphire/30 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-white mb-4">For Farmers & Innovators</h3>
                <div className="space-y-4">
                  <RippleButton className="w-full bg-coral-orange hover:bg-coral-orange/80 text-white">
                    Join Our Contract Algae Farming Program
                  </RippleButton>
                  <RippleButton
                    variant="outline"
                    className="w-full border-seafoam-blue text-seafoam-blue hover:bg-seafoam-blue hover:text-white"
                    rippleColor="rgba(56, 163, 165, 0.3)"
                  >
                    Partner on Genetic R&D & Bioreactor Licensing
                  </RippleButton>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <WaveSeparator color="abyssal-teal" />

      {/* Footer CTA */}
      <section className="py-20 bg-dark-sapphire relative">
        <ParticleBackground count={10} />
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              "Harnessing India's sun, science, and sea to grow the world's most powerful antioxidant — ethically."
            </h2>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={200} className="max-w-xl mx-auto">
            <div className="bg-abyssal-teal/30 p-6 rounded-lg mt-8">
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
                  <span className="text-white">astaxanthin@genix.in</span>
                </div>
                <div className="flex items-center justify-center">
                  <Link href="#" className="text-seafoam-blue hover:text-coral-orange transition-colors">
                    www.genix.in/astaxanthin-india
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={300} className="mt-8">
            <div className="flex flex-wrap justify-center gap-2">
              <span className="bg-seafoam-blue/20 text-seafoam-blue px-3 py-1 rounded-full text-sm">
                #AstaxanthinIndia
              </span>
              <span className="bg-seafoam-blue/20 text-seafoam-blue px-3 py-1 rounded-full text-sm">
                #NaturalAntioxidants
              </span>
              <span className="bg-seafoam-blue/20 text-seafoam-blue px-3 py-1 rounded-full text-sm">
                #HaematococcusPluvialis
              </span>
              <span className="bg-seafoam-blue/20 text-seafoam-blue px-3 py-1 rounded-full text-sm">#AlgaeBiotech</span>
              <span className="bg-seafoam-blue/20 text-seafoam-blue px-3 py-1 rounded-full text-sm">#CleanLabel</span>
              <span className="bg-seafoam-blue/20 text-seafoam-blue px-3 py-1 rounded-full text-sm">#MadeInIndia</span>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
