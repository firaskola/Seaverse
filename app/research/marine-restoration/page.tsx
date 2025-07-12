import Image from "next/image"
import {
  TreePine,
  Leaf,
  Fish,
  MapPin,
  Users,
  BarChart3,
  Globe,
  Award,
  Building,
  School,
  Smartphone,
  Mail,
  Phone,
} from "lucide-react"
import SectionHeading from "@/components/section-heading"
import WaveSeparator from "@/components/wave-separator"
import ParticleBackground from "@/components/particle-background"
import ScrollReveal from "@/components/scroll-reveal"
import RippleButton from "@/components/ripple-button"

export default function MarineRestorationPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/indoor.jpg"
            alt="GENIX Marine Restoration"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark-surface/90 to-dark-surface/70" />
          <ParticleBackground count={20} color="rgba(255, 140, 0, 0.05)" />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center mt-20">
          <ScrollReveal animation="fade-up">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-space-grotesk bg-gradient-to-r from-accent-orange to-accent-orange-light bg-clip-text text-transparent">
              GENIX Marine Restoration
            </h1>
            <p className="text-2xl md:text-3xl text-accent-orange mb-4">
              Rebuilding Coastal Ecosystems – One Root at a Time
            </p>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={200}>
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-6">
              Nature's Coastal Guardians – Restore & Thrive.
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              We're merging science and community standards to restore mangrove forests and seagrass meadows, protect coastlines,
              and create the largest blue carbon sinks in South Asia.
            </p>
          </ScrollReveal>

          {/* <ScrollReveal animation="fade-up" delay={300}>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <RippleButton className="bg-coral-orange hover:bg-coral-orange/80 text-white">Track a Tree</RippleButton>
              <RippleButton className="bg-seafoam-blue hover:bg-seafoam-blue/80 text-white">
                Sponsor a Seagrass Acre
              </RippleButton>
              <RippleButton className="bg-abyssal-teal hover:bg-abyssal-teal/80 text-white">
                Join Our Mission
              </RippleButton>
            </div>
          </ScrollReveal> */}

          <ScrollReveal animation="fade-up" delay={400}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-dark-card/50 backdrop-blur-sm p-6 rounded-lg border border-dark-border/50 hover:border-accent-orange/30 transition-all duration-300 group">
                <div className="flex items-center justify-center mb-3">
                  <BarChart3 className="h-8 w-8 text-accent-orange" />
                </div>
                <div className="text-2xl font-bold text-white group-hover:text-accent-orange transition-colors duration-300">CO₂ Sequestered</div>
                <div className="text-accent-orange text-lg">
                  <span className="font-mono">125,487</span> tons
                </div>
                <div className="text-gray-400 text-sm">Live Counter</div>
              </div>

              <div className="bg-dark-card/50 backdrop-blur-sm p-6 rounded-lg border border-dark-border/50 hover:border-accent-orange/30 transition-all duration-300 group">
                <div className="flex items-center justify-center mb-3">
                  <Fish className="h-8 w-8 text-accent-orange" />
                </div>
                <div className="text-2xl font-bold text-white group-hover:text-accent-orange transition-colors duration-300">Supported fish species</div>
                <div className="text-accent-orange text-lg">80,000+</div>
              </div>

              <div className="bg-dark-card/50 backdrop-blur-sm p-6 rounded-lg border border-dark-border/50 hover:border-accent-orange/30 transition-all duration-300 group">
                <div className="flex items-center justify-center mb-3">
                  <MapPin className="h-8 w-8 text-accent-orange" />
                </div>
                <div className="text-2xl font-bold text-white group-hover:text-accent-orange transition-colors duration-300">Sites Restored</div>
                <div className="text-accent-orange text-lg">12</div>
                <div className="text-gray-400 text-sm">and growing</div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <WaveSeparator />

      {/* What We Do Section */}
      <section className="py-20 bg-dark-surface relative">
        <ParticleBackground count={15} color="rgba(255, 140, 0, 0.05)" />
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <SectionHeading title="What We Do" subtitle="Restoring coastal ecosystems through innovative approaches" />
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-12">
            {/* Smart Mangrove Reforestation */}
            <ScrollReveal animation="fade-right">
              <div className="bg-dark-card/50 rounded-lg overflow-hidden border border-dark-border/50 hover:border-accent-orange/30 transition-all duration-300 group">
                <div className="aspect-video relative">
                  <Image
                    src="/images/Mangroves.jpg"
                    alt="Smart Mangrove Reforestation"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-surface to-transparent"></div>
                  <div className="absolute bottom-4 left-4 bg-accent-orange text-white px-3 py-1 rounded-full text-sm font-medium">
                    1
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white flex items-center mb-4 group-hover:text-accent-orange transition-colors duration-300">
                    Smart Mangrove Reforestation
                  </h3>
                  <p className="text-gray-300 mb-6">We're on course to rebuild India's natural sea walls — smartly and swiftly.</p>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-accent-orange mb-3">Our Approach:</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start group/item">
                        <div className="bg-accent-orange/10 p-2 rounded-full mr-3 mt-1 group-hover/item:bg-accent-orange/20 transition-colors duration-300">
                          <Leaf className="h-4 w-4 text-accent-orange" />
                        </div>
                        <div>
                          <span className="text-white font-medium group-hover/item:text-accent-orange transition-colors duration-300">AI-Powered Planting Drones</span>
                          <span className="text-gray-300"> – 10x faster than manual seeding</span>
                        </div>
                      </li>
                      <li className="flex items-start group/item">
                        <div className="bg-accent-orange/10 p-2 rounded-full mr-3 mt-1 group-hover/item:bg-accent-orange/20 transition-colors duration-300">
                          <Leaf className="h-4 w-4 text-accent-orange" />
                        </div>
                        <div>
                          <span className="text-white font-medium group-hover/item:text-accent-orange transition-colors duration-300">Climatically Tough Species</span>
                          <span className="text-gray-300"> – Engineered to survive saltwater, floods</span>
                        </div>
                      </li>
                      <li className="flex items-start group/item">
                        <div className="bg-accent-orange/10 p-2 rounded-full mr-3 mt-1 group-hover/item:bg-accent-orange/20 transition-colors duration-300">
                          <Leaf className="h-4 w-4 text-accent-orange" />
                        </div>
                        <div>
                          <span className="text-white font-medium group-hover/item:text-accent-orange transition-colors duration-300">Hydrogelic Root Boosters</span>
                          <span className="text-gray-300"> – To speed up survival and growth</span>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-accent-orange mb-3">Results:</h4>
                    <ul className="space-y-3">
                      <li className="flex items-center group/item">
                        <div className="bg-accent-orange/10 p-1 rounded-full mr-3 group-hover/item:bg-accent-orange/20 transition-colors duration-300">
                          <div className="h-4 w-4 flex items-center justify-center text-accent-orange font-bold">✓</div>
                        </div>
                        <span className="text-gray-300 group-hover/item:text-white transition-colors duration-300">200% faster growth rates</span>
                      </li>
                      <li className="flex items-center group/item">
                        <div className="bg-accent-orange/10 p-1 rounded-full mr-3 group-hover/item:bg-accent-orange/20 transition-colors duration-300">
                          <div className="h-4 w-4 flex items-center justify-center text-accent-orange font-bold">✓</div>
                        </div>
                        <span className="text-gray-300 group-hover/item:text-white transition-colors duration-300">A single Mangrove captures 12x more CO₂ than typical trees</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-accent-orange mb-3">Active Restoration Zones:</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-dark-surface/50 px-3 py-1 rounded-full text-gray-300 hover:text-white transition-colors duration-300">Sundarbans, WB</span>
                      <span className="bg-dark-surface/50 px-3 py-1 rounded-full text-gray-300 hover:text-white transition-colors duration-300">
                        Gulf of Kutch, GJ
                      </span>
                      <span className="bg-dark-surface/50 px-3 py-1 rounded-full text-gray-300 hover:text-white transition-colors duration-300">Andaman Islands</span>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Seagrass Meadow Revival */}
            <ScrollReveal animation="fade-left">
              <div className="bg-dark-card/50 rounded-lg overflow-hidden border border-dark-border/50 hover:border-accent-orange/30 transition-all duration-300 group">
                <div className="aspect-video relative">
                  <Image
                    src="/images/seagrass.webp"
                    alt="Seagrass Meadow Revival"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-surface to-transparent"></div>
                  <div className="absolute bottom-4 left-4 bg-accent-orange text-white px-3 py-1 rounded-full text-sm font-medium">
                    2
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white flex items-center mb-4 group-hover:text-accent-orange transition-colors duration-300">
                    Seagrass Meadow Revival
                  </h3>
                  <p className="text-gray-300 mb-6">The lungs of our shallow seas, rebuilt blade by blade.</p>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-accent-orange mb-3">How We Do It:</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start group/item">
                        <div className="bg-accent-orange/10 p-2 rounded-full mr-3 mt-1 group-hover/item:bg-accent-orange/20 transition-colors duration-300">
                          <Leaf className="h-4 w-4 text-accent-orange" />
                        </div>
                        <div>
                          <span className="text-white font-medium group-hover/item:text-accent-orange transition-colors duration-300">Robotic Seed Dispersal</span>
                          <span className="text-gray-300"> – Precision planting to be done in-depth</span>
                        </div>
                      </li>
                      <li className="flex items-start group/item">
                        <div className="bg-accent-orange/10 p-2 rounded-full mr-3 mt-1 group-hover/item:bg-accent-orange/20 transition-colors duration-300">
                          <Leaf className="h-4 w-4 text-accent-orange" />
                        </div>
                        <div>
                          <span className="text-white font-medium group-hover/item:text-accent-orange transition-colors duration-300">3D-Printed Limestone Beds</span>
                          <span className="text-gray-300"> – Anchors growth and to simulate natural reefs</span>
                        </div>
                      </li>
                      <li className="flex items-start group/item">
                        <div className="bg-accent-orange/10 p-2 rounded-full mr-3 mt-1 group-hover/item:bg-accent-orange/20 transition-colors duration-300">
                          <Leaf className="h-4 w-4 text-accent-orange" />
                        </div>
                        <div>
                          <span className="text-white font-medium group-hover/item:text-accent-orange transition-colors duration-300">Smart Monitoring Systems</span>
                          <span className="text-gray-300"> – Real-time growth and tracking health repository</span>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-accent-orange mb-3">Impact:</h4>
                    <ul className="space-y-3">
                      <li className="flex items-center group/item">
                        <div className="bg-accent-orange/10 p-1 rounded-full mr-3 group-hover/item:bg-accent-orange/20 transition-colors duration-300">
                          <div className="h-4 w-4 flex items-center justify-center text-accent-orange font-bold">✓</div>
                        </div>
                        <span className="text-gray-300 group-hover/item:text-white transition-colors duration-300">35x more carbon disposal than tropical forests</span>
                      </li>
                      <li className="flex items-center group/item">
                        <div className="bg-accent-orange/10 p-1 rounded-full mr-3 group-hover/item:bg-accent-orange/20 transition-colors duration-300">
                          <div className="h-4 w-4 flex items-center justify-center text-accent-orange font-bold">✓</div>
                        </div>
                        <span className="text-gray-300 group-hover/item:text-white transition-colors duration-300">Critical nursery habitats for helping marine life</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-accent-orange mb-3">Current Projects:</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-dark-surface/50 px-3 py-1 rounded-full text-gray-300 hover:text-white transition-colors duration-300">Gulf of Mannar</span>
                      <span className="bg-dark-surface/50 px-3 py-1 rounded-full text-gray-300 hover:text-white transition-colors duration-300">Lakshadweep</span>
                      <span className="bg-dark-surface/50 px-3 py-1 rounded-full text-gray-300 hover:text-white transition-colors duration-300">Andaman Sea</span>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <WaveSeparator />

      {/* Why Invest in Blue Carbon */}
      <section className="py-20 bg-dark-card relative">
        <ParticleBackground count={10} color="rgba(255, 140, 0, 0.05)" />
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <SectionHeading
              title="Why Invest in Blue Carbon?"
              subtitle="The environmental and economic benefits of coastal ecosystem restoration"
            />
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={200}>
            <div className="overflow-x-auto mt-12">
              <table className="w-full border-collapse">
                <thead>
                  <tr>
                    <th className="text-left p-4 bg-dark-surface/30 text-white rounded-tl-lg">Metric</th>
                    <th className="text-left p-4 bg-dark-surface/30 text-white">Mangroves</th>
                    <th className="text-left p-4 bg-dark-surface/30 text-white rounded-tr-lg">Seagrass</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-accent-orange/30">
                    <td className="p-4 text-accent-orange font-medium">CO₂ Capturing</td>
                    <td className="p-4 text-white">1,000 tons/ha (25 yrs)</td>
                    <td className="p-4 text-white">35,000 tons/km²</td>
                  </tr>
                  <tr className="border-b border-accent-orange/30">
                    <td className="p-4 text-accent-orange font-medium">Flood Protection</td>
                    <td className="p-4 text-white">$300K/km/year saved</td>
                    <td className="p-4 text-white">90% erosion reduction</td>
                  </tr>
                  <tr>
                    <td className="p-4 text-accent-orange font-medium rounded-bl-lg">Biodiversity Boost</td>
                    <td className="p-4 text-white">5x fish stocks</td>
                    <td className="p-4 text-white rounded-br-lg">Compatible coral nursery zones</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={300}>
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-white mb-4">Accreditations & Certifications:</h3>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center bg-dark-surface/20 px-4 py-2 rounded-lg">
                  <Award className="h-5 w-5 text-accent-orange mr-2" />
                  <span className="text-white">Verified Carbon Standard (VCS)</span>
                </div>
                <div className="flex items-center bg-dark-surface/20 px-4 py-2 rounded-lg">
                  <Award className="h-5 w-5 text-accent-orange mr-2" />
                  <span className="text-white">Gold Standard Blue Carbon (Mikoko Pamoja Certified)</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <WaveSeparator />

      {/* How You Can Partner */}
      <section className="py-20 bg-dark-surface relative">
        <ParticleBackground count={15} color="rgba(255, 140, 0, 0.05)" />
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <SectionHeading title="How You Can Partner" subtitle="Join our healthy mission to restore coastal ecosystems" />
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
            {/* For Corporates */}
            <ScrollReveal animation="fade-up" delay={100}>
              <div className="bg-dark-card/50 rounded-lg overflow-hidden h-full">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <Building className="h-6 w-6 text-accent-orange mr-2" />
                    <h3 className="text-xl font-bold text-white">For Corporates (CSR / ESG)</h3>
                  </div>

                  <div className="space-y-6">
                    <div className="bg-dark-surface/20 p-4 rounded-lg">
                      <h4 className="text-lg font-semibold text-white mb-2">Adopt a Mangrove</h4>
                      <p className="text-accent-orange font-medium mb-1">₹4,000/tree ($50)</p>
                      <p className="text-gray-300 text-sm">Blockchain growth tracking as well as employee branding</p>
                    </div>

                    <div className="bg-dark-surface/20 p-4 rounded-lg">
                      <h4 className="text-lg font-semibold text-white mb-2">Seagrass Sponsorship</h4>
                      <p className="text-accent-orange font-medium mb-1">₹20L/acre ($25K)</p>
                      <p className="text-gray-300 text-sm">Corporate naming rights and CO₂ credit packages</p>
                    </div>

                    {/* <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Trusted By:</h4>
                      <ul className="space-y-3">
                        <li className="flex items-center">
                          <div className="bg-coral-orange/20 p-1 rounded-full mr-3">
                            <div className="h-4 w-4 flex items-center justify-center text-coral-orange font-bold">
                              ✓
                            </div>
                          </div>
                          <span className="text-white">Tata Steel – 10,000 trees restored in Odisha</span>
                        </li>
                        <li className="flex items-center">
                          <div className="bg-coral-orange/20 p-1 rounded-full mr-3">
                            <div className="h-4 w-4 flex items-center justify-center text-coral-orange font-bold">
                              ✓
                            </div>
                          </div>
                          <span className="text-white">UNDP India – Seagrass training for local youth in Kerala</span>
                        </li>
                      </ul>
                    </div> */}
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* For Governments */}
            <ScrollReveal animation="fade-up" delay={200}>
              <div className="bg-dark-card/50 rounded-lg overflow-hidden h-full">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <Globe className="h-6 w-6 text-accent-orange mr-2" />
                    <h3 className="text-xl font-bold text-white">For Governments</h3>
                  </div>

                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="bg-accent-orange/10 p-2 rounded-full mr-3 mt-1">
                        <div className="h-4 w-4 flex items-center justify-center text-accent-orange font-bold">•</div>
                      </div>
                      <span className="text-white">Build marine restoration hubs</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-accent-orange/10 p-2 rounded-full mr-3 mt-1">
                        <div className="h-4 w-4 flex items-center justify-center text-accent-orange font-bold">•</div>
                      </div>
                      <span className="text-white">Integrate eco-tourism with and for citizen science</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-accent-orange/10 p-2 rounded-full mr-3 mt-1">
                        <div className="h-4 w-4 flex items-center justify-center text-accent-orange font-bold">•</div>
                      </div>
                      <span className="text-white"> Produce compliance with COP/NDC targets</span>
                    </li>
                  </ul>

                  {/* <div className="mt-8">
                    <Image
                      src="/placeholder.svg?height=200&width=300"
                      alt="Government Partnership"
                      width={300}
                      height={200}
                      className="rounded-lg w-full object-cover"
                    />
                  </div> */}
                </div>
              </div>
            </ScrollReveal>

            {/* For Scientists */}
            <ScrollReveal animation="fade-up" delay={300}>
              <div className="bg-dark-card/50 rounded-lg overflow-hidden h-full">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <Users className="h-6 w-6 text-accent-orange mr-2" />
                    <h3 className="text-xl font-bold text-white">For Scientists</h3>
                  </div>

                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="bg-accent-orange/10 p-2 rounded-full mr-3 mt-1">
                        <div className="h-4 w-4 flex items-center justify-center text-accent-orange font-bold">•</div>
                      </div>
                      <span className="text-white">Access to 10+ years of biodiversity & growth data</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-accent-orange/10 p-2 rounded-full mr-3 mt-1">
                        <div className="h-4 w-4 flex items-center justify-center text-accent-orange font-bold">•</div>
                      </div>
                      <span className="text-white">Partnership in marine genotypical research</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-accent-orange/10 p-2 rounded-full mr-3 mt-1">
                        <div className="h-4 w-4 flex items-center justify-center text-accent-orange font-bold">•</div>
                      </div>
                      <span className="text-white">Seed bank access across 120+ coastal strains</span>
                    </li>
                  </ul>

                  <div className="mt-8">
                    {/* <RippleButton className="w-full bg-seafoam-blue hover:bg-seafoam-blue/80 text-white">
                      Apply to Partner or Co-Develop
                    </RippleButton> */}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <WaveSeparator />

      {/* Impact Amplifiers */}
      <section className="py-20 bg-dark-card relative">
        <ParticleBackground count={10} color="rgba(255, 140, 0, 0.05)" />
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <SectionHeading
              title="Impact Amplifiers"
              subtitle="How we have maximized the impact of our restoration efforts"
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <ScrollReveal animation="fade-right" delay={100}>
              <div className="bg-dark-surface/20 p-6 rounded-lg flex items-start">
                <div className="bg-accent-orange/20 p-3 rounded-full mr-4">
                  <Users className="h-6 w-6 text-accent-orange" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">500+ Women Empowered</h3>
                  <p className="text-gray-300">
                    Coastal nursery co-operatives, that provide sustainable livelihoods for local communities
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-left" delay={150}>
              <div className="bg-dark-surface/20 p-6 rounded-lg flex items-start">
                <div className="bg-accent-orange/20 p-3 rounded-full mr-4">
                  <Award className="h-6 w-6 text-accent-orange" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Verified Carbon Credits</h3>
                  <p className="text-gray-300">
                    Sellings to tech firms, airlines and crypto platforms allow to generate sustainable revenue
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-right" delay={200}>
              <div className="bg-dark-surface/20 p-6 rounded-lg flex items-start">
                <div className="bg-accent-orange/20 p-3 rounded-full mr-4">
                  <School className="h-6 w-6 text-accent-orange" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Blue Schools Program</h3>
                  <p className="text-gray-300">
                    Teaching ocean ecology to 10,000+ children would help to build the next generation of ocean stewards
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-left" delay={250}>
              <div className="bg-dark-surface/20 p-6 rounded-lg flex items-start">
                <div className="bg-accent-orange/20 p-3 rounded-full mr-4">
                  <Smartphone className="h-6 w-6 text-accent-orange" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Track & Trace App</h3>
                  <p className="text-gray-300">
                    To monitor the growth, offset impact, and biodiversity changes live through our mobile application
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <WaveSeparator />

      {/* Get Involved Today */}
      <section className="py-20 bg-dark-surface relative">
        <ParticleBackground count={15} color="rgba(255, 140, 0, 0.05)" />
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <SectionHeading
              title="Get Involved Today"
              subtitle="Join our mission to restore coastal ecosystems"
              centered
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <ScrollReveal animation="fade-up" delay={100}>
              <div className="bg-dark-card/50 p-6 rounded-lg text-center">
                <Building className="h-12 w-12 text-accent-orange mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-4">For Companies</h3>
                <div className="space-y-4">
                  <RippleButton className="w-full bg-accent-orange hover:bg-accent-orange/80 text-white">
                    Calculate Your Blue Carbon Footprint
                  </RippleButton>
                  <RippleButton className="w-full bg-dark-surface hover:bg-dark-surface/80 text-white border border-accent-orange">
                    Get Impact ROI Report
                  </RippleButton>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={200}>
              <div className="bg-dark-card/50 p-6 rounded-lg text-center">
                <Globe className="h-12 w-12 text-accent-orange mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-4">For NGOs</h3>
                <div className="space-y-4">
                  <RippleButton className="w-full bg-accent-orange hover:bg-accent-orange/80 text-white">
                    Request Training Toolkit
                  </RippleButton>
                  <RippleButton className="w-full bg-dark-surface hover:bg-dark-surface/80 text-white border border-accent-orange">
                    Join Community Partnership Network
                  </RippleButton>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={300}>
              <div className="bg-dark-card/50 p-6 rounded-lg text-center">
                <Users className="h-12 w-12 text-accent-orange mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-4">For Volunteers</h3>
                <div className="space-y-4">
                  <RippleButton className="w-full bg-accent-orange hover:bg-accent-orange/80 text-white">
                    Join Our Mangrove Camps
                  </RippleButton>
                  <RippleButton className="w-full bg-dark-surface hover:bg-dark-surface/80 text-white border border-accent-orange">
                    Host a Blue Cleanup Day
                  </RippleButton>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <WaveSeparator />

      {/* Project Goals */}
      <section className="py-20 bg-dark-card relative">
        <ParticleBackground count={10} color="rgba(255, 140, 0, 0.05)" />
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <SectionHeading
              title="Project Goals by 2028"
              subtitle="Our ambitious targets for coastal ecosystem restoration"
            />
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={200}>
            <div className="overflow-x-auto mt-12">
              <table className="w-full border-collapse">
                <thead>
                  <tr>
                    <th className="text-left p-4 bg-dark-surface/30 text-white rounded-tl-lg">Target</th>
                    <th className="text-left p-4 bg-dark-surface/30 text-white rounded-tr-lg">Value</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-accent-orange/30">
                    <td className="p-4 text-accent-orange font-medium">Mangroves Planted</td>
                    <td className="p-4 text-white">1 Million</td>
                  </tr>
                  <tr className="border-b border-accent-orange/30">
                    <td className="p-4 text-accent-orange font-medium">Seagrass Restored</td>
                    <td className="p-4 text-white">200+ Acres</td>
                  </tr>
                  <tr className="border-b border-accent-orange/30">
                    <td className="p-4 text-accent-orange font-medium">CO₂ Sequestered</td>
                    <td className="p-4 text-white">100,000+ Tons</td>
                  </tr>
                  <tr>
                    <td className="p-4 text-accent-orange font-medium rounded-bl-lg">Jobs Created</td>
                    <td className="p-4 text-white rounded-br-lg">2,000+ Coastal Livelihoods</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <WaveSeparator />

      {/* Contact Section */}
      <section className="py-20 bg-dark-card relative">
        <ParticleBackground count={15} color="rgba(255, 140, 0, 0.05)" />
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal>
            <SectionHeading
              title="Join Our Restoration Mission"
              subtitle="Partner with us to restore and protect our coastal ecosystems"
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
                    +91 8310862870
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <WaveSeparator />

      {/* Footer CTA */}
      <section className="py-20 bg-dark-surface relative">
        <ParticleBackground count={15} color="rgba(255, 140, 0, 0.05)" />
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal animation="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              "We're not just planting trees — we're engineering tomorrow's coastline."
            </h2>

            <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-8">
              <a
                href="mailto:seaverseresearch@gmail.com"
                className="flex items-center text-white hover:text-accent-orange transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                seaverseresearch@gmail.com
              </a>

              <a
                href="https://www.seaverse.co/research/marine-restoration"
                className="flex items-center text-white hover:text-accent-orange transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                  />
                </svg>
                www.seaverse.co/research/marine-restoration
              </a>

              <a
                href="tel:+916363477139"
                className="flex items-center text-white hover:text-accent-orange transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                +91-6363477139
              </a>
            </div>

            {/* <div className="mt-12">
              <RippleButton className="bg-coral-orange hover:bg-coral-orange/80 text-white px-8 py-3 text-lg">
                Join Our Mission Today
              </RippleButton>
            </div> */}
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
