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
          <div className="absolute inset-0 bg-gradient-to-b from-dark-sapphire/90 to-dark-sapphire/70" />
          <ParticleBackground count={20} />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center mt-20">
          <ScrollReveal animation="fade-up">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-space-grotesk">
              GENIX Marine Restoration
            </h1>
            <p className="text-2xl md:text-3xl text-seafoam-blue mb-4">
              Rebuilding Coastal Ecosystems – One Root at a Time
            </p>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={200}>
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-6">
              Nature's Coastal Guardians – Restored & Thriving.
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
              We're merging science and community to restore mangrove forests and seagrass meadows, protect coastlines,
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
              <div className="bg-dark-sapphire/50 backdrop-blur-sm p-6 rounded-lg border border-seafoam-blue/30">
                <div className="flex items-center justify-center mb-3">
                  <BarChart3 className="h-8 w-8 text-seafoam-blue" />
                </div>
                <div className="text-2xl font-bold text-white">CO₂ Sequestered</div>
                <div className="text-seafoam-blue text-lg">
                  <span className="font-mono">125,487</span> tons
                </div>
                <div className="text-white/60 text-sm">Live counter</div>
              </div>

              <div className="bg-dark-sapphire/50 backdrop-blur-sm p-6 rounded-lg border border-seafoam-blue/30">
                <div className="flex items-center justify-center mb-3">
                  <Fish className="h-8 w-8 text-seafoam-blue" />
                </div>
                <div className="text-2xl font-bold text-white">Fish species supported</div>
                <div className="text-seafoam-blue text-lg">80,000+</div>
              </div>

              <div className="bg-dark-sapphire/50 backdrop-blur-sm p-6 rounded-lg border border-seafoam-blue/30">
                <div className="flex items-center justify-center mb-3">
                  <MapPin className="h-8 w-8 text-seafoam-blue" />
                </div>
                <div className="text-2xl font-bold text-white">Sites restored</div>
                <div className="text-seafoam-blue text-lg">12</div>
                <div className="text-white/60 text-sm">and growing</div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <WaveSeparator />

      {/* What We Do Section */}
      <section className="py-20 bg-abyssal-teal relative">
        <ParticleBackground count={15} color="rgba(1, 46, 64, 0.2)" />
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <SectionHeading title="What We Do" subtitle="Restoring coastal ecosystems through innovative approaches" />
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-12">
            {/* Smart Mangrove Reforestation */}
            <ScrollReveal animation="fade-right">
              <div className="bg-dark-sapphire/30 rounded-lg overflow-hidden">
                <div className="aspect-video relative">
                  <Image
                    src="/images/Mangroves.jpg"
                    alt="Smart Mangrove Reforestation"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-sapphire to-transparent"></div>
                  <div className="absolute bottom-4 left-4 bg-coral-orange text-white px-3 py-1 rounded-full text-sm font-medium">
                    1
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white flex items-center mb-4">
                  
                    Smart Mangrove Reforestation
                  </h3>
                  <p className="text-white/80 mb-6">We're rebuilding India's natural sea walls — smarter and faster.</p>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-seafoam-blue mb-3">Our Approach:</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <div className="bg-seafoam-blue/20 p-2 rounded-full mr-3 mt-1">
                          <Leaf className="h-4 w-4 text-seafoam-blue" />
                        </div>
                        <div>
                          <span className="text-white font-medium">AI-Powered Planting Drones</span>
                          <span className="text-white/70"> – 10x faster than manual seeding</span>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-seafoam-blue/20 p-2 rounded-full mr-3 mt-1">
                          <Leaf className="h-4 w-4 text-seafoam-blue" />
                        </div>
                        <div>
                          <span className="text-white font-medium">Climate-Resilient Species</span>
                          <span className="text-white/70"> – Engineered to survive saltwater, floods</span>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-seafoam-blue/20 p-2 rounded-full mr-3 mt-1">
                          <Leaf className="h-4 w-4 text-seafoam-blue" />
                        </div>
                        <div>
                          <span className="text-white font-medium">Hydrogel Root Boosters</span>
                          <span className="text-white/70"> – Speed up survival and growth</span>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-seafoam-blue mb-3">Results:</h4>
                    <ul className="space-y-3">
                      <li className="flex items-center">
                        <div className="bg-coral-orange/20 p-1 rounded-full mr-3">
                          <div className="h-4 w-4 flex items-center justify-center text-coral-orange font-bold">✓</div>
                        </div>
                        <span className="text-white">200% faster growth rates</span>
                      </li>
                      <li className="flex items-center">
                        <div className="bg-coral-orange/20 p-1 rounded-full mr-3">
                          <div className="h-4 w-4 flex items-center justify-center text-coral-orange font-bold">✓</div>
                        </div>
                        <span className="text-white">1 Mangrove captures 12x more CO₂ than typical trees</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-seafoam-blue mb-3">Active Restoration Zones:</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-dark-sapphire/50 px-3 py-1 rounded-full text-white/80">Sundarbans, WB</span>
                      <span className="bg-dark-sapphire/50 px-3 py-1 rounded-full text-white/80">
                        Gulf of Kutch, GJ
                      </span>
                      <span className="bg-dark-sapphire/50 px-3 py-1 rounded-full text-white/80">Andaman Islands</span>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Seagrass Meadow Revival */}
            <ScrollReveal animation="fade-left">
              <div className="bg-dark-sapphire/30 rounded-lg overflow-hidden">
                <div className="aspect-video relative">
                  <Image
                    src="/images/seagrass.webp"
                    alt="Seagrass Meadow Revival"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-sapphire to-transparent"></div>
                  <div className="absolute bottom-4 left-4 bg-seafoam-blue text-white px-3 py-1 rounded-full text-sm font-medium">
                    2
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white flex items-center mb-4">

                    Seagrass Meadow Revival
                  </h3>
                  <p className="text-white/80 mb-6">The lungs of our shallow seas, rebuilt blade by blade.</p>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-seafoam-blue mb-3">How We Do It:</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <div className="bg-seafoam-blue/20 p-2 rounded-full mr-3 mt-1">
                          <Leaf className="h-4 w-4 text-seafoam-blue" />
                        </div>
                        <div>
                          <span className="text-white font-medium">Robotic Seed Dispersal</span>
                          <span className="text-white/70"> – Precision planting at depth</span>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-seafoam-blue/20 p-2 rounded-full mr-3 mt-1">
                          <Leaf className="h-4 w-4 text-seafoam-blue" />
                        </div>
                        <div>
                          <span className="text-white font-medium">3D-Printed Limestone Beds</span>
                          <span className="text-white/70"> – Anchor growth, simulate natural reefs</span>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-seafoam-blue/20 p-2 rounded-full mr-3 mt-1">
                          <Leaf className="h-4 w-4 text-seafoam-blue" />
                        </div>
                        <div>
                          <span className="text-white font-medium">Natural Grazing</span>
                          <span className="text-white/70"> – Goat partnerships to curb invasive algae</span>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-seafoam-blue mb-3">Why It Matters:</h4>
                    <ul className="space-y-3">
                      <li className="flex items-center">
                        <div className="bg-coral-orange/20 p-1 rounded-full mr-3">
                          <div className="h-4 w-4 flex items-center justify-center text-coral-orange font-bold">✓</div>
                        </div>
                        <span className="text-white">
                          1 hectare seagrass = 30x more carbon storage than a rainforest
                        </span>
                      </li>
                      <li className="flex items-center">
                        <div className="bg-coral-orange/20 p-1 rounded-full mr-3">
                          <div className="h-4 w-4 flex items-center justify-center text-coral-orange font-bold">✓</div>
                        </div>
                        <span className="text-white">Supports over 200 invertebrate species</span>
                      </li>
                      <li className="flex items-center">
                        <div className="bg-coral-orange/20 p-1 rounded-full mr-3">
                          <div className="h-4 w-4 flex items-center justify-center text-coral-orange font-bold">✓</div>
                        </div>
                        <span className="text-white">1 hectare = home for 80,000+ fish</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-seafoam-blue mb-3">Flagship Project:</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-dark-sapphire/50 px-3 py-1 rounded-full text-white/80">
                        Palk Bay, Tamil Nadu — 50 acres by 2025
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <WaveSeparator color="abyssal-teal" />

      {/* Why Invest in Blue Carbon */}
      <section className="py-20 bg-dark-sapphire relative">
        <ParticleBackground count={10} />
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
                    <th className="text-left p-4 bg-abyssal-teal/30 text-white rounded-tl-lg">Metric</th>
                    <th className="text-left p-4 bg-abyssal-teal/30 text-white">Mangroves</th>
                    <th className="text-left p-4 bg-abyssal-teal/30 text-white rounded-tr-lg">Seagrass</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-abyssal-teal/20">
                    <td className="p-4 text-seafoam-blue font-medium">CO₂ Capture</td>
                    <td className="p-4 text-white">1,000 tons/ha (25 yrs)</td>
                    <td className="p-4 text-white">35,000 tons/km²</td>
                  </tr>
                  <tr className="border-b border-abyssal-teal/20">
                    <td className="p-4 text-seafoam-blue font-medium">Flood Protection</td>
                    <td className="p-4 text-white">$300K/km/year saved</td>
                    <td className="p-4 text-white">90% erosion reduction</td>
                  </tr>
                  <tr>
                    <td className="p-4 text-seafoam-blue font-medium rounded-bl-lg">Biodiversity Boost</td>
                    <td className="p-4 text-white">5x fish stocks</td>
                    <td className="p-4 text-white rounded-br-lg">Coral-compatible nursery zones</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={300}>
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-white mb-4">Accreditations & Certifications:</h3>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center bg-abyssal-teal/20 px-4 py-2 rounded-lg">
                  <Award className="h-5 w-5 text-seafoam-blue mr-2" />
                  <span className="text-white">Verified Carbon Standard (VCS)</span>
                </div>
                <div className="flex items-center bg-abyssal-teal/20 px-4 py-2 rounded-lg">
                  <Award className="h-5 w-5 text-seafoam-blue mr-2" />
                  <span className="text-white">Gold Standard Blue Carbon (Mikoko Pamoja Certified)</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <WaveSeparator />

      {/* How You Can Partner */}
      <section className="py-20 bg-abyssal-teal relative">
        <ParticleBackground count={15} color="rgba(1, 46, 64, 0.2)" />
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <SectionHeading title="How You Can Partner" subtitle="Join our mission to restore coastal ecosystems" />
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
            {/* For Corporates */}
            <ScrollReveal animation="fade-up" delay={100}>
              <div className="bg-dark-sapphire/30 rounded-lg overflow-hidden h-full">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <Building className="h-6 w-6 text-coral-orange mr-2" />
                    <h3 className="text-xl font-bold text-white">For Corporates (CSR / ESG)</h3>
                  </div>

                  <div className="space-y-6">
                    <div className="bg-abyssal-teal/20 p-4 rounded-lg">
                      <h4 className="text-lg font-semibold text-white mb-2">Adopt-a-Mangrove</h4>
                      <p className="text-seafoam-blue font-medium mb-1">₹4,000/tree ($50)</p>
                      <p className="text-white/80 text-sm">Blockchain growth tracking + employee branding</p>
                    </div>

                    <div className="bg-abyssal-teal/20 p-4 rounded-lg">
                      <h4 className="text-lg font-semibold text-white mb-2">Seagrass Sponsorship</h4>
                      <p className="text-seafoam-blue font-medium mb-1">₹20L/acre ($25K)</p>
                      <p className="text-white/80 text-sm">Corporate naming rights + CO₂ credit packages</p>
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
              <div className="bg-dark-sapphire/30 rounded-lg overflow-hidden h-full">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <Globe className="h-6 w-6 text-seafoam-blue mr-2" />
                    <h3 className="text-xl font-bold text-white">For Governments</h3>
                  </div>

                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="bg-seafoam-blue/20 p-2 rounded-full mr-3 mt-1">
                        <div className="h-4 w-4 flex items-center justify-center text-seafoam-blue font-bold">•</div>
                      </div>
                      <span className="text-white">Build turnkey marine restoration hubs</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-seafoam-blue/20 p-2 rounded-full mr-3 mt-1">
                        <div className="h-4 w-4 flex items-center justify-center text-seafoam-blue font-bold">•</div>
                      </div>
                      <span className="text-white">Integrate eco-tourism and citizen science</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-seafoam-blue/20 p-2 rounded-full mr-3 mt-1">
                        <div className="h-4 w-4 flex items-center justify-center text-seafoam-blue font-bold">•</div>
                      </div>
                      <span className="text-white">Enhance compliance with COP/NDC targets</span>
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
              <div className="bg-dark-sapphire/30 rounded-lg overflow-hidden h-full">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <Users className="h-6 w-6 text-coral-orange mr-2" />
                    <h3 className="text-xl font-bold text-white">For Scientists</h3>
                  </div>

                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="bg-coral-orange/20 p-2 rounded-full mr-3 mt-1">
                        <div className="h-4 w-4 flex items-center justify-center text-coral-orange font-bold">•</div>
                      </div>
                      <span className="text-white">Access to 10+ years of biodiversity & growth data</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-coral-orange/20 p-2 rounded-full mr-3 mt-1">
                        <div className="h-4 w-4 flex items-center justify-center text-coral-orange font-bold">•</div>
                      </div>
                      <span className="text-white">Partnership in marine genotype research</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-coral-orange/20 p-2 rounded-full mr-3 mt-1">
                        <div className="h-4 w-4 flex items-center justify-center text-coral-orange font-bold">•</div>
                      </div>
                      <span className="text-white">Seed bank access (120+ coastal strains)</span>
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

      <WaveSeparator color="abyssal-teal" />

      {/* Impact Amplifiers */}
      <section className="py-20 bg-dark-sapphire relative">
        <ParticleBackground count={10} />
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <SectionHeading
              title="Impact Amplifiers"
              subtitle="How we maximize the impact of our restoration efforts"
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <ScrollReveal animation="fade-right" delay={100}>
              <div className="bg-abyssal-teal/20 p-6 rounded-lg flex items-start">
                <div className="bg-coral-orange/20 p-3 rounded-full mr-4">
                  <Users className="h-6 w-6 text-coral-orange" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">500+ Women Empowered</h3>
                  <p className="text-white/80">
                    Coastal nursery co-operatives providing sustainable livelihoods for local communities
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-left" delay={150}>
              <div className="bg-abyssal-teal/20 p-6 rounded-lg flex items-start">
                <div className="bg-coral-orange/20 p-3 rounded-full mr-4">
                  <Award className="h-6 w-6 text-coral-orange" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Verified Carbon Credits</h3>
                  <p className="text-white/80">
                    Sell to tech firms, airlines, crypto platforms to generate sustainable revenue
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-right" delay={200}>
              <div className="bg-abyssal-teal/20 p-6 rounded-lg flex items-start">
                <div className="bg-coral-orange/20 p-3 rounded-full mr-4">
                  <School className="h-6 w-6 text-coral-orange" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Blue Schools Program</h3>
                  <p className="text-white/80">
                    Teaching ocean ecology to 10,000+ schoolchildren to build the next generation of ocean stewards
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-left" delay={250}>
              <div className="bg-abyssal-teal/20 p-6 rounded-lg flex items-start">
                <div className="bg-coral-orange/20 p-3 rounded-full mr-4">
                  <Smartphone className="h-6 w-6 text-coral-orange" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Track & Trace App</h3>
                  <p className="text-white/80">
                    Monitor growth, offset impact, and biodiversity changes live through our mobile application
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <WaveSeparator />

      {/* Get Involved Today */}
      <section className="py-20 bg-abyssal-teal relative">
        <ParticleBackground count={15} color="rgba(1, 46, 64, 0.2)" />
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
              <div className="bg-dark-sapphire/30 p-6 rounded-lg text-center">
                <Building className="h-12 w-12 text-coral-orange mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-4">For Companies</h3>
                <div className="space-y-4">
                  <RippleButton className="w-full bg-coral-orange hover:bg-coral-orange/80 text-white">
                    Calculate Your Blue Carbon Footprint
                  </RippleButton>
                  <RippleButton className="w-full bg-dark-sapphire hover:bg-dark-sapphire/80 text-white border border-coral-orange">
                    Get Impact ROI Report
                  </RippleButton>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={200}>
              <div className="bg-dark-sapphire/30 p-6 rounded-lg text-center">
                <Globe className="h-12 w-12 text-seafoam-blue mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-4">For NGOs</h3>
                <div className="space-y-4">
                  <RippleButton className="w-full bg-seafoam-blue hover:bg-seafoam-blue/80 text-white">
                    Request Training Toolkit
                  </RippleButton>
                  <RippleButton className="w-full bg-dark-sapphire hover:bg-dark-sapphire/80 text-white border border-seafoam-blue">
                    Join Community Partnership Network
                  </RippleButton>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={300}>
              <div className="bg-dark-sapphire/30 p-6 rounded-lg text-center">
                <Users className="h-12 w-12 text-coral-orange mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-4">For Volunteers</h3>
                <div className="space-y-4">
                  <RippleButton className="w-full bg-coral-orange hover:bg-coral-orange/80 text-white">
                    Join Our Mangrove Camps
                  </RippleButton>
                  <RippleButton className="w-full bg-dark-sapphire hover:bg-dark-sapphire/80 text-white border border-coral-orange">
                    Host a Blue Cleanup Day
                  </RippleButton>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <WaveSeparator color="abyssal-teal" />

      {/* Project Goals */}
      <section className="py-20 bg-dark-sapphire relative">
        <ParticleBackground count={10} />
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
                    <th className="text-left p-4 bg-abyssal-teal/30 text-white rounded-tl-lg">Target</th>
                    <th className="text-left p-4 bg-abyssal-teal/30 text-white rounded-tr-lg">Value</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-abyssal-teal/20">
                    <td className="p-4 text-seafoam-blue font-medium">Mangroves Planted</td>
                    <td className="p-4 text-white">1 Million</td>
                  </tr>
                  <tr className="border-b border-abyssal-teal/20">
                    <td className="p-4 text-seafoam-blue font-medium">Seagrass Restored</td>
                    <td className="p-4 text-white">200+ Acres</td>
                  </tr>
                  <tr className="border-b border-abyssal-teal/20">
                    <td className="p-4 text-seafoam-blue font-medium">CO₂ Sequestered</td>
                    <td className="p-4 text-white">100,000+ Tons</td>
                  </tr>
                  <tr>
                    <td className="p-4 text-seafoam-blue font-medium rounded-bl-lg">Jobs Created</td>
                    <td className="p-4 text-white rounded-br-lg">2,000+ Coastal Livelihoods</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <WaveSeparator />

      {/* Footer CTA */}
      <section className="py-20 bg-abyssal-teal relative">
        <ParticleBackground count={15} color="rgba(1, 46, 64, 0.2)" />
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal animation="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              "We're not just planting trees — we're engineering tomorrow's coastline."
            </h2>

            <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-8">
              <a
                href="mailto:seaverseresearch@gmail.com"
                className="flex items-center text-white hover:text-seafoam-blue transition-colors"
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
                className="flex items-center text-white hover:text-seafoam-blue transition-colors"
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
                className="flex items-center text-white hover:text-seafoam-blue transition-colors"
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
