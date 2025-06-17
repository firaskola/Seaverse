import Image from "next/image"
import Link from "next/link"
import { Check, Mail, Phone, Shield, Activity, Zap, Database, Globe, BarChart3 } from "lucide-react"
import SectionHeading from "@/components/section-heading"
import WaveSeparator from "@/components/wave-separator"
import ParticleBackground from "@/components/particle-background"
import ScrollReveal from "@/components/scroll-reveal"
import RippleButton from "@/components/ripple-button"

export default function AquaSentinelPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/images/aquasen.png" alt="AQUA SENTINEL™" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-dark-surface/90 to-dark-surface/70" />
          <ParticleBackground count={20} color="rgba(255, 140, 0, 0.05)" />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center mt-20">
          <ScrollReveal animation="fade-up">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-space-grotesk bg-gradient-to-r from-accent-orange to-accent-orange-light bg-clip-text text-transparent">
              AQUA SENTINEL™
            </h1>
            <p className="text-2xl md:text-3xl text-accent-orange mb-4">
              Autonomous Guardians of the Ocean
            </p>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={200}>
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-6">
              Real-time Ocean Intelligence Network
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              A fleet of AI-powered underwater sentinels providing continuous monitoring and protection of marine ecosystems.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <WaveSeparator />

      {/* Problem Section */}
      <section className="py-20 bg-dark-surface relative">
        <ParticleBackground count={15} color="rgba(255, 140, 0, 0.05)" />
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <SectionHeading
              title="The Challenge"
              subtitle="Traditional ocean monitoring methods are limited by human constraints and technological barriers."
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <ScrollReveal animation="fade-up" delay={100}>
              <div className="bg-dark-card/50 p-6 rounded-lg border border-dark-border/50 hover:border-accent-orange/30 transition-all duration-300 group">
                <div className="flex items-center justify-center mb-4">
                  <Shield className="h-8 w-8 text-accent-orange" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent-orange transition-colors duration-300">Limited Coverage</h3>
                <p className="text-gray-300">
                  Traditional monitoring methods can only cover a fraction of the ocean's vast expanse, leaving critical areas unmonitored.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={200}>
              <div className="bg-dark-card/50 p-6 rounded-lg border border-dark-border/50 hover:border-accent-orange/30 transition-all duration-300 group">
                <div className="flex items-center justify-center mb-4">
                  <Activity className="h-8 w-8 text-accent-orange" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent-orange transition-colors duration-300">Reactive Response</h3>
                <p className="text-gray-300">
                  Current systems often detect issues too late, leading to irreversible damage to marine ecosystems.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={300}>
              <div className="bg-dark-card/50 p-6 rounded-lg border border-dark-border/50 hover:border-accent-orange/30 transition-all duration-300 group">
                <div className="flex items-center justify-center mb-4">
                  <Zap className="h-8 w-8 text-accent-orange" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent-orange transition-colors duration-300">High Costs</h3>
                <p className="text-gray-300">
                  Manual monitoring and maintenance of ocean observation systems require significant resources and manpower.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <WaveSeparator />

      {/* How It Works */}
      <section className="py-20 bg-dark-card relative">
        <ParticleBackground count={10} color="rgba(255, 140, 0, 0.05)" />
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
              <div className="bg-dark-surface/50 p-6 rounded-lg border border-dark-border/50 hover:border-accent-orange/30 transition-all duration-300 hover:-translate-y-1 h-full group">
                <div className="w-12 h-12 bg-accent-orange/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-accent-orange/20 transition-colors duration-300">
                  <span className="text-2xl font-bold text-accent-orange">1</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-accent-orange transition-colors duration-300">Intelligent Hardware</h3>
                <ul className="space-y-3 text-gray-300">
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
              <div className="bg-dark-surface/50 p-6 rounded-lg border border-dark-border/50 hover:border-accent-orange/30 transition-all duration-300 hover:-translate-y-1 h-full group">
                <div className="w-12 h-12 bg-accent-orange/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-accent-orange/20 transition-colors duration-300">
                  <span className="text-2xl font-bold text-accent-orange">2</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-accent-orange transition-colors duration-300">The AI Engine</h3>
                <ul className="space-y-3 text-gray-300">
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
              <div className="bg-dark-surface/50 p-6 rounded-lg border border-dark-border/50 hover:border-accent-orange/30 transition-all duration-300 hover:-translate-y-1 h-full group">
                <div className="w-12 h-12 bg-accent-orange/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-accent-orange/20 transition-colors duration-300">
                  <span className="text-2xl font-bold text-accent-orange">3</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-accent-orange transition-colors duration-300">Live Data Infrastructure</h3>
                <ul className="space-y-3 text-gray-300">
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
      <section className="py-20 bg-dark-surface relative">
        <ParticleBackground count={15} color="rgba(255, 140, 0, 0.05)" />
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <SectionHeading
              title="Industries We Serve"
              subtitle="Tailored solutions for various sectors requiring ocean monitoring."
            />
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={200}>
            <div className="overflow-x-auto">
              <table className="w-full bg-dark-card/50 rounded-lg overflow-hidden border border-dark-border/50">
                <thead>
                  <tr className="bg-dark-surface/50">
                    <th className="px-6 py-4 text-left text-white">Sector</th>
                    <th className="px-6 py-4 text-left text-white">Use Case</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      sector: "Marine Conservation",
                      useCase: "Real-time monitoring of protected areas and wildlife"
                    },
                    {
                      sector: "Aquaculture",
                      useCase: "Early warning system for disease outbreaks and water quality"
                    },
                    {
                      sector: "Oil & Gas",
                      useCase: "Pipeline integrity monitoring and spill detection"
                    },
                    {
                      sector: "Maritime Security",
                      useCase: "Detection of unauthorized vessels and activities"
                    },
                    {
                      sector: "Research",
                      useCase: "Continuous data collection for marine studies"
                    }
                  ].map((row, index) => (
                    <tr key={index} className="border-t border-accent-orange/30 hover:bg-dark-surface/30 transition-colors duration-300">
                      <td className="px-6 py-4 text-gray-300">{row.sector}</td>
                      <td className="px-6 py-4 text-accent-orange font-medium">{row.useCase}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <WaveSeparator />

      {/* Deployment Options */}
      <section className="py-20 bg-dark-card relative">
        <ParticleBackground count={10} color="rgba(255, 140, 0, 0.05)" />
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
              <div className="bg-dark-surface/50 rounded-lg overflow-hidden group hover:-translate-y-1 transition-all duration-300">
                <div className="aspect-video relative">
                  <Image
                    src="/images/po.jpeg"
                    alt="Sentinel Pods"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-surface to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent-orange transition-colors duration-300">1. Sentinel Pods (Static Nodes)</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Anchored monitoring units</li>
                    <li>• Ideal for: Offshore wind farms, coral zones</li>
                  </ul>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={200}>
              <div className="bg-dark-surface/50 rounded-lg overflow-hidden group hover:-translate-y-1 transition-all duration-300">
                <div className="aspect-video relative">
                  <Image 
                    src="/images/swarndrones.jpg" 
                    alt="Drone Swarms" 
                    fill 
                    className="object-cover transition-transform duration-500 group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-surface to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent-orange transition-colors duration-300">2. Drone Swarms (Mobile Fleet)</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Patrolling AUVs (Autonomous Underwater Vehicles)</li>
                    <li>• Ideal for: Rapid response, oil spill mapping</li>
                  </ul>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={300}>
              <div className="bg-dark-surface/50 rounded-lg overflow-hidden group hover:-translate-y-1 transition-all duration-300">
                <div className="aspect-video relative">
                  <Image
                    src="/images/vertical.png"
                    alt="Vertical Profilers"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-surface to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent-orange transition-colors duration-300">3. Vertical Profilers (Floaters)</h3>
                  <ul className="space-y-2 text-gray-300">
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
      <section className="py-20 bg-dark-card relative">
        <ParticleBackground count={15} color="rgba(255, 140, 0, 0.05)" />
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <SectionHeading
              title="Why We're Different"
              subtitle="Comparing AQUA SENTINEL™ with legacy ocean monitoring technologies."
            />
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={200}>
            <div className="overflow-x-auto">
              <table className="w-full bg-dark-surface/50 rounded-lg overflow-hidden border border-dark-border/50">
                <thead>
                  <tr className="bg-dark-surface/50">
                    <th className="px-6 py-4 text-left text-white">Legacy Tech</th>
                    <th className="px-6 py-4 text-left text-white">AQUA SENTINEL™</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-accent-orange/30">
                    <td className="px-6 py-4 text-gray-300">Data latency (hours/days)</td>
                    <td className="px-6 py-4 text-white font-medium">Real-time edge processing</td>
                  </tr>
                  <tr className="border-t border-accent-orange/30">
                    <td className="px-6 py-4 text-gray-300">Battery-dependent units</td>
                    <td className="px-6 py-4 text-white font-medium">Self-recharging (wave + solar)</td>
                  </tr>
                  <tr className="border-t border-accent-orange/30">
                    <td className="px-6 py-4 text-gray-300">Single-sensor design</td>
                    <td className="px-6 py-4 text-white font-medium">27+ parameters & visual cross-validation</td>
                  </tr>
                  <tr className="border-t border-accent-orange/30">
                    <td className="px-6 py-4 text-gray-300">Manual maintenance</td>
                    <td className="px-6 py-4 text-white font-medium">18-month autonomous operations</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={300} className="mt-8">
            <div className="bg-dark-surface/50 p-6 rounded-lg border border-dark-border/50 hover:border-accent-orange/30 transition-all duration-300">
              <h3 className="text-xl font-bold text-white mb-4">Certifications:</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-center group">
                  <Check className="text-accent-orange mr-2 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" size={18} />
                  <span className="text-gray-300 group-hover:text-white transition-colors duration-300">NOAA-compliant</span>
                </div>
                <div className="flex items-center group">
                  <Check className="text-accent-orange mr-2 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" size={18} />
                  <span className="text-gray-300 group-hover:text-white transition-colors duration-300">NATO-ready encryption</span>
                </div>
                <div className="flex items-center group">
                  <Check className="text-accent-orange mr-2 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" size={18} />
                  <span className="text-gray-300 group-hover:text-white transition-colors duration-300">Environmental data ISO standards</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <WaveSeparator />

      {/* Join the Network */}
      <section className="py-20 bg-dark-card relative">
        <ParticleBackground count={10} color="rgba(255, 140, 0, 0.05)" />
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
              <div className="bg-dark-surface/50 p-6 rounded-lg border border-dark-border/50 hover:border-accent-orange/30 transition-all duration-300 group">
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-accent-orange transition-colors duration-300">For Researchers</h3>
                <div className="space-y-4">
                  <RippleButton className="w-full bg-accent-orange hover:bg-accent-orange/80 text-white">
                    Access Real-Time Data
                  </RippleButton>
                  <RippleButton
                    variant="outline"
                    className="w-full border-accent-orange text-accent-orange hover:bg-accent-orange hover:text-white"
                    rippleColor="rgba(255, 140, 0, 0.3)"
                  >
                    Collaborate with Ocean REX Labs
                  </RippleButton>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={200}>
              <div className="bg-dark-surface/50 p-6 rounded-lg border border-dark-border/50 hover:border-accent-orange/30 transition-all duration-300 group">
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-accent-orange transition-colors duration-300">For Governments & Defense</h3>
                <div className="space-y-4">
                  <RippleButton className="w-full bg-accent-orange hover:bg-accent-orange/80 text-white">
                    Deploy Smart Coastal Surveillance
                  </RippleButton>
                  <RippleButton
                    variant="outline"
                    className="w-full border-accent-orange text-accent-orange hover:bg-accent-orange hover:text-white"
                    rippleColor="rgba(255, 140, 0, 0.3)"
                  >
                    Request Strategic Data Partnership
                  </RippleButton>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={300}>
              <div className="bg-dark-surface/50 p-6 rounded-lg border border-dark-border/50 hover:border-accent-orange/30 transition-all duration-300 group">
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-accent-orange transition-colors duration-300">For Offshore Industries</h3>
                <div className="space-y-4">
                  <RippleButton className="w-full bg-accent-orange hover:bg-accent-orange/80 text-white">
                    Embed AQUA SENTINEL into Assets
                  </RippleButton>
                  <RippleButton
                    variant="outline"
                    className="w-full border-accent-orange text-accent-orange hover:bg-accent-orange hover:text-white"
                    rippleColor="rgba(255, 140, 0, 0.3)"
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
      <section className="py-20 bg-dark-card relative">
        <ParticleBackground count={15} color="rgba(255, 140, 0, 0.05)" />
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              "The ocean holds answers we can't afford to miss."
            </h2>
            <p className="text-xl text-gray-300 mb-8">We built the machine that listens.</p>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={200} className="max-w-xl mx-auto">
            <div className="bg-dark-surface/50 p-6 rounded-lg border border-dark-border/50 hover:border-accent-orange/30 transition-all duration-300">
              <div className="space-y-4">
                <div className="flex items-center justify-center group">
                  <Mail className="text-accent-orange mr-3 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" size={20} />
                  <a href="mailto:seaversetechnology@gmail.com" className="text-gray-300 hover:text-accent-orange transition-colors duration-300">
                    seaversetechnology@gmail.com
                  </a>
                </div>
                <div className="flex items-center justify-center">
                  <Link href="#" className="text-accent-orange hover:text-accent-orange/80 transition-colors">
                    www.seaverse.co/technology/aqua-sentinel
                  </Link>
                </div>
                <div className="flex items-center justify-center group">
                  <Phone className="text-accent-orange mr-3 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" size={20} />
                  <a href="tel:+916363477139" className="text-gray-300 hover:text-accent-orange transition-colors duration-300">
                    +91 63634 77139
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
