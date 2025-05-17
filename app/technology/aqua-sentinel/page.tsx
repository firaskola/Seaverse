import Image from "next/image"
import Link from "next/link"
import { Check, Mail, Phone } from "lucide-react"
import SectionHeading from "@/components/section-heading"
import WaveSeparator from "@/components/wave-separator"
import ParticleBackground from "@/components/particle-background"
import ScrollReveal from "@/components/scroll-reveal"
import RippleButton from "@/components/ripple-button"

export default function AquaSentinelPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/placeholder.svg?height=1080&width=1920" alt="AQUA SENTINEL™" fill className="object-cover" />
          <div className="absolute inset-0 bg-dark-sapphire/80" />
          <ParticleBackground count={20} />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center mt-20">
          <ScrollReveal animation="fade-up">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-space-grotesk">
              OCEAN REX MARINE ROBOTICS
            </h1>
          </ScrollReveal>
          <ScrollReveal animation="fade-up" delay={200}>
            <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto">
              Autonomous Guardians of the Deep – Seeing What the Ocean Sees, in Real Time
            </p>
          </ScrollReveal>
          <ScrollReveal animation="scale" delay={400}>
            <div className="inline-block bg-abyssal-teal/30 px-6 py-3 rounded-lg mb-8">
              <p className="text-seafoam-blue font-medium">
                "The Ocean Speaks in Data – We Built Its Perfect Interpreter."
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal animation="fade-up" delay={600}>
            <div className="flex flex-wrap justify-center gap-4">
              <RippleButton className="bg-coral-orange hover:bg-coral-orange/80 text-white">
                See Live Ocean Data
              </RippleButton>
              <RippleButton
                variant="outline"
                className="border-seafoam-blue text-seafoam-blue hover:bg-seafoam-blue hover:text-white"
                rippleColor="rgba(56, 163, 165, 0.3)"
              >
                Request a Demo Unit
              </RippleButton>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <WaveSeparator />

      {/* Problem Section */}
      <section className="py-20 bg-abyssal-teal relative">
        <ParticleBackground count={15} color="rgba(1, 46, 64, 0.2)" />
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <SectionHeading
              title="The Blind Spot Challenge"
              subtitle="We've mapped Mars more precisely than our oceans."
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal animation="fade-right">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Challenges We're Solving:</h3>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <div className="bg-dark-sapphire/50 p-2 rounded-full mr-4 mt-1">
                      <Check className="text-coral-orange h-5 w-5" />
                    </div>
                    <p className="text-white/80">Traditional ship surveys are expensive and intermittent</p>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-dark-sapphire/50 p-2 rounded-full mr-4 mt-1">
                      <Check className="text-coral-orange h-5 w-5" />
                    </div>
                    <p className="text-white/80">Satellites can't see below 10m of surface</p>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-dark-sapphire/50 p-2 rounded-full mr-4 mt-1">
                      <Check className="text-coral-orange h-5 w-5" />
                    </div>
                    <p className="text-white/80">Static buoys miss mobile biological events</p>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-6">Our Solution:</h3>
                <p className="text-white/80 mb-4">A global network of underwater sentinels that:</p>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Check className="text-seafoam-blue mr-2 flex-shrink-0" size={18} />
                    <span className="text-white/80">Patrol intelligently</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="text-seafoam-blue mr-2 flex-shrink-0" size={18} />
                    <span className="text-white/80">Recharge autonomously</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="text-seafoam-blue mr-2 flex-shrink-0" size={18} />
                    <span className="text-white/80">Deliver live, encrypted data</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="text-seafoam-blue mr-2 flex-shrink-0" size={18} />
                    <span className="text-white/80">Adapt to marine dynamics</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-left" delay={200}>
              <div className="relative">
                <div className="aspect-video relative rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="AQUA SENTINEL™ in action"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-seafoam-blue/10 rounded-full animate-pulse"></div>
                <div
                  className="absolute -top-6 -left-6 w-32 h-32 bg-coral-orange/10 rounded-full animate-pulse"
                  style={{ animationDelay: "1s" }}
                ></div>

                {/* Live metrics overlay */}
                <div className="absolute top-4 left-4 bg-dark-sapphire/80 backdrop-blur-sm p-4 rounded-lg">
                  <h4 className="text-seafoam-blue font-medium text-sm mb-2">Live Metrics</h4>
                  <div className="space-y-1 text-sm">
                    <p className="text-white">
                      Biomass: <span className="text-coral-orange">12,000 orgs/m³</span>
                    </p>
                    <p className="text-white">
                      pH: <span className="text-coral-orange">8.04</span>
                    </p>
                    <p className="text-white">
                      DO: <span className="text-coral-orange">7.1 mg/L</span>
                    </p>
                    <p className="text-white">
                      Current Speed: <span className="text-coral-orange">0.8 m/s</span>
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <WaveSeparator color="abyssal-teal" />

      {/* How It Works */}
      <section className="py-20 bg-dark-sapphire relative">
        <ParticleBackground count={10} />
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <SectionHeading
              title="How AQUA SENTINEL™ Works"
              subtitle="Cutting-edge technology for comprehensive ocean monitoring."
              centered
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <ScrollReveal animation="fade-up" delay={100}>
              <div className="bg-abyssal-teal/20 p-6 rounded-lg hover:bg-abyssal-teal/40 transition-all duration-300 hover:-translate-y-1 h-full">
                <div className="w-12 h-12 bg-seafoam-blue/20 rounded-full flex items-center justify-center mb-6">
                  <span className="text-2xl font-bold text-seafoam-blue">1</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Intelligent Hardware</h3>
                <ul className="space-y-3 text-white/80">
                  <li>• Operational Depth: Up to 6,000 meters</li>
                  <li>• Power Source: Hybrid solar + wave kinetic</li>
                  <li className="font-medium text-white">• Sensor Suite:</li>
                  <li className="ml-4">◦ LIDAR for 3D biomass mapping</li>
                  <li className="ml-4">◦ Hyperspectral & thermal cameras</li>
                  <li className="ml-4">◦ eDNA samplers for biodiversity ID</li>
                  <li className="ml-4">◦ Acoustic hydrophones for mammal & vessel detection</li>
                  <li className="ml-4">◦ pH, turbidity, salinity, DO, nitrate, ammonia sensors</li>
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={200}>
              <div className="bg-abyssal-teal/20 p-6 rounded-lg hover:bg-abyssal-teal/40 transition-all duration-300 hover:-translate-y-1 h-full">
                <div className="w-12 h-12 bg-seafoam-blue/20 rounded-full flex items-center justify-center mb-6">
                  <span className="text-2xl font-bold text-seafoam-blue">2</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">The AI Engine</h3>
                <ul className="space-y-3 text-white/80">
                  <li>• Trained on 10 million marine datasets</li>
                  <li>• Uses edge AI for anomaly detection</li>
                  <li className="font-medium text-white">• Tracks patterns:</li>
                  <li className="ml-4">◦ Illegal trawling</li>
                  <li className="ml-4">◦ Coral bleaching onset</li>
                  <li className="ml-4">◦ Harmful algal blooms (HABs)</li>
                  <li className="ml-4">◦ Methane venting from seafloor</li>
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={300}>
              <div className="bg-abyssal-teal/20 p-6 rounded-lg hover:bg-abyssal-teal/40 transition-all duration-300 hover:-translate-y-1 h-full">
                <div className="w-12 h-12 bg-seafoam-blue/20 rounded-full flex items-center justify-center mb-6">
                  <span className="text-2xl font-bold text-seafoam-blue">3</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Live Data Infrastructure</h3>
                <ul className="space-y-3 text-white/80">
                  <li>• Real-time sync with satellite uplinks</li>
                  <li>• Blockchain-based tamper-proof logs</li>
                  <li>• Compatible with global research & defense APIs</li>
                  <li>• Push alerts for seismic activity, pH crashes, or oil film detection</li>
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <WaveSeparator />

      {/* Industries We Serve */}
      <section className="py-20 bg-abyssal-teal relative">
        <ParticleBackground count={15} color="rgba(1, 46, 64, 0.2)" />
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <SectionHeading
              title="Industries We Serve"
              subtitle="Tailored solutions for various sectors requiring ocean monitoring."
            />
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={200}>
            <div className="overflow-x-auto">
              <table className="w-full bg-dark-sapphire/30 rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-dark-sapphire/50">
                    <th className="px-6 py-4 text-left text-white">Sector</th>
                    <th className="px-6 py-4 text-left text-white">Use Case</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-abyssal-teal/30">
                    <td className="px-6 py-4 text-white font-medium">Fisheries</td>
                    <td className="px-6 py-4 text-white/70">Real-time stock movement & spawning detection</td>
                  </tr>
                  <tr className="border-t border-abyssal-teal/30">
                    <td className="px-6 py-4 text-white font-medium">Oil & Gas</td>
                    <td className="px-6 py-4 text-white/70">Undersea asset health & leakage monitoring</td>
                  </tr>
                  <tr className="border-t border-abyssal-teal/30">
                    <td className="px-6 py-4 text-white font-medium">Environmental NGOs</td>
                    <td className="px-6 py-4 text-white/70">Marine protected area (MPA) surveillance</td>
                  </tr>
                  <tr className="border-t border-abyssal-teal/30">
                    <td className="px-6 py-4 text-white font-medium">Climate Scientists</td>
                    <td className="px-6 py-4 text-white/70">Carbon flux tracking, seasonal dynamics</td>
                  </tr>
                  <tr className="border-t border-abyssal-teal/30">
                    <td className="px-6 py-4 text-white font-medium">Naval & Coast Guards</td>
                    <td className="px-6 py-4 text-white/70">Threat detection, vessel pattern monitoring</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <WaveSeparator color="abyssal-teal" />

      {/* Deployment Options */}
      <section className="py-20 bg-dark-sapphire relative">
        <ParticleBackground count={10} />
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <SectionHeading
              title="Deployment Options"
              subtitle="Flexible configurations to meet your specific monitoring needs."
              centered
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <ScrollReveal animation="fade-up" delay={100}>
              <div className="bg-abyssal-teal/20 rounded-lg overflow-hidden">
                <div className="aspect-video relative">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Sentinel Pods"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-sapphire to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3">1. Sentinel Pods (Static Nodes)</h3>
                  <ul className="space-y-2 text-white/70">
                    <li>• Anchored monitoring units</li>
                    <li>• Ideal for: Offshore wind farms, coral zones</li>
                  </ul>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={200}>
              <div className="bg-abyssal-teal/20 rounded-lg overflow-hidden">
                <div className="aspect-video relative">
                  <Image src="/placeholder.svg?height=400&width=600" alt="Drone Swarms" fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-sapphire to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3">2. Drone Swarms (Mobile Fleet)</h3>
                  <ul className="space-y-2 text-white/70">
                    <li>• Patrolling AUVs (Autonomous Underwater Vehicles)</li>
                    <li>• Ideal for: Rapid response, oil spill mapping</li>
                  </ul>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={300}>
              <div className="bg-abyssal-teal/20 rounded-lg overflow-hidden">
                <div className="aspect-video relative">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Vertical Profilers"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-sapphire to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3">3. Vertical Profilers (Floaters)</h3>
                  <ul className="space-y-2 text-white/70">
                    <li>• Scans full water column from surface to seafloor</li>
                    <li>• Ideal for: Deep-sea science, defense scans</li>
                  </ul>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <WaveSeparator />

      {/* Why We're Different */}
      <section className="py-20 bg-abyssal-teal relative">
        <ParticleBackground count={15} color="rgba(1, 46, 64, 0.2)" />
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <SectionHeading
              title="Why We're Different"
              subtitle="Comparing AQUA SENTINEL™ with legacy ocean monitoring technologies."
            />
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={200}>
            <div className="overflow-x-auto">
              <table className="w-full bg-dark-sapphire/30 rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-dark-sapphire/50">
                    <th className="px-6 py-4 text-left text-white">Legacy Tech</th>
                    <th className="px-6 py-4 text-left text-white">AQUA SENTINEL™</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-abyssal-teal/30">
                    <td className="px-6 py-4 text-white/70">Data latency (hours/days)</td>
                    <td className="px-6 py-4 text-white font-medium">Real-time edge processing</td>
                  </tr>
                  <tr className="border-t border-abyssal-teal/30">
                    <td className="px-6 py-4 text-white/70">Battery-dependent units</td>
                    <td className="px-6 py-4 text-white font-medium">Self-recharging (wave + solar)</td>
                  </tr>
                  <tr className="border-t border-abyssal-teal/30">
                    <td className="px-6 py-4 text-white/70">Single-sensor design</td>
                    <td className="px-6 py-4 text-white font-medium">27+ parameters & visual cross-validation</td>
                  </tr>
                  <tr className="border-t border-abyssal-teal/30">
                    <td className="px-6 py-4 text-white/70">Manual maintenance</td>
                    <td className="px-6 py-4 text-white font-medium">18-month autonomous operations</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={300} className="mt-8">
            <div className="bg-dark-sapphire/30 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-white mb-4">Certifications:</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-center">
                  <Check className="text-coral-orange mr-2 flex-shrink-0" size={18} />
                  <span className="text-white/80">NOAA-compliant</span>
                </div>
                <div className="flex items-center">
                  <Check className="text-coral-orange mr-2 flex-shrink-0" size={18} />
                  <span className="text-white/80">NATO-ready encryption</span>
                </div>
                <div className="flex items-center">
                  <Check className="text-coral-orange mr-2 flex-shrink-0" size={18} />
                  <span className="text-white/80">Environmental data ISO standards</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <WaveSeparator color="abyssal-teal" />

      {/* Join the Network */}
      <section className="py-20 bg-dark-sapphire relative">
        <ParticleBackground count={10} />
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <SectionHeading
              title="Join the Global Ocean Intelligence Network"
              subtitle="Collaborate with us to monitor and protect our oceans."
              centered
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <ScrollReveal animation="fade-up" delay={100}>
              <div className="bg-abyssal-teal/20 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-white mb-4">For Researchers</h3>
                <div className="space-y-4">
                  <RippleButton className="w-full bg-coral-orange hover:bg-coral-orange/80 text-white">
                    Access Real-Time Data
                  </RippleButton>
                  <RippleButton
                    variant="outline"
                    className="w-full border-seafoam-blue text-seafoam-blue hover:bg-seafoam-blue hover:text-white"
                    rippleColor="rgba(56, 163, 165, 0.3)"
                  >
                    Collaborate with Ocean REX Labs
                  </RippleButton>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={200}>
              <div className="bg-abyssal-teal/20 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-white mb-4">For Governments & Defense</h3>
                <div className="space-y-4">
                  <RippleButton className="w-full bg-coral-orange hover:bg-coral-orange/80 text-white">
                    Deploy Smart Coastal Surveillance
                  </RippleButton>
                  <RippleButton
                    variant="outline"
                    className="w-full border-seafoam-blue text-seafoam-blue hover:bg-seafoam-blue hover:text-white"
                    rippleColor="rgba(56, 163, 165, 0.3)"
                  >
                    Request Strategic Data Partnership
                  </RippleButton>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={300}>
              <div className="bg-abyssal-teal/20 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-white mb-4">For Offshore Industries</h3>
                <div className="space-y-4">
                  <RippleButton className="w-full bg-coral-orange hover:bg-coral-orange/80 text-white">
                    Embed AQUA SENTINEL into Assets
                  </RippleButton>
                  <RippleButton
                    variant="outline"
                    className="w-full border-seafoam-blue text-seafoam-blue hover:bg-seafoam-blue hover:text-white"
                    rippleColor="rgba(56, 163, 165, 0.3)"
                  >
                    Receive Predictive Maintenance Alerts
                  </RippleButton>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <WaveSeparator />

      {/* Final CTA */}
      <section className="py-20 bg-abyssal-teal relative">
        <ParticleBackground count={15} color="rgba(1, 46, 64, 0.2)" />
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              "The ocean holds answers we can't afford to miss."
            </h2>
            <p className="text-xl text-white/80 mb-8">We built the machine that listens.</p>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={200} className="max-w-xl mx-auto">
            <div className="bg-dark-sapphire/30 p-6 rounded-lg">
              <div className="space-y-4">
                <div className="flex items-center justify-center">
                  <Mail className="text-coral-orange mr-3 flex-shrink-0" size={20} />
                  <span className="text-white">robotics@oceanrex.in</span>
                </div>
                <div className="flex items-center justify-center">
                  <Link href="#" className="text-seafoam-blue hover:text-coral-orange transition-colors">
                    www.oceanrex.in/marinerobotics
                  </Link>
                </div>
                <div className="flex items-center justify-center">
                  <Phone className="text-coral-orange mr-3 flex-shrink-0" size={20} />
                  <span className="text-white">+91-XXXXXXXXXX</span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={300} className="mt-8">
            <div className="flex flex-wrap justify-center gap-2">
              <span className="bg-seafoam-blue/20 text-seafoam-blue px-3 py-1 rounded-full text-sm">
                #MarineRobotics
              </span>
              <span className="bg-seafoam-blue/20 text-seafoam-blue px-3 py-1 rounded-full text-sm">#UnderwaterAI</span>
              <span className="bg-seafoam-blue/20 text-seafoam-blue px-3 py-1 rounded-full text-sm">
                #AutonomousOceanDrones
              </span>
              <span className="bg-seafoam-blue/20 text-seafoam-blue px-3 py-1 rounded-full text-sm">
                #RealTimeOceanMonitoring
              </span>
              <span className="bg-seafoam-blue/20 text-seafoam-blue px-3 py-1 rounded-full text-sm">
                #BlueTechIndia
              </span>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
