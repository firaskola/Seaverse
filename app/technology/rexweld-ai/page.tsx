import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import SectionHeading from "@/components/section-heading"
import WaveSeparator from "@/components/wave-separator"
import ParticleBackground from "@/components/particle-background"

export default function RexweldAIPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/placeholder.svg?height=1080&width=1920" alt="REXWELD AI" fill className="object-cover" />
          <div className="absolute inset-0 bg-dark-sapphire/80" />
          <ParticleBackground count={20} />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center mt-20">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-space-grotesk">REXWELD AI</h1>
          <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto">The Future of Underwater Welding</p>
          <div className="inline-block bg-abyssal-teal/30 px-6 py-3 rounded-lg">
            <p className="text-seafoam-blue font-medium">"Intelligent. Resilient. Subsea Precision."</p>
          </div>
        </div>
      </section>

      <WaveSeparator />

      {/* Overview Section */}
      <section className="py-20 bg-abyssal-teal relative">
        <ParticleBackground count={15} color="rgba(1, 46, 64, 0.2)" />
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">What is REXWELD AI?</h2>
              <p className="text-white/80 mb-6">
                REXWELD AI is Seaverse's groundbreaking underwater welding robot, developed under the Ocean Rex sector
                to redefine how critical subsea infrastructure is maintained and repaired. Powered by advanced AI
                algorithms, machine vision, and autonomous navigation, REXWELD AI performs inspection, damage detection,
                and precision welding operations beneath the ocean's surface—even in the harshest environments.
              </p>
              <p className="text-white/80 mb-6">
                It is purpose-built for applications in oil refineries, subsea pipelines, offshore drilling rigs, and
                marine industrial installations.
              </p>

              <div className="bg-dark-sapphire/30 p-4 rounded-lg">
                <h3 className="text-xl font-bold text-white mb-3">Core Capabilities</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="text-coral-orange mr-2 mt-1 flex-shrink-0" size={18} />
                    <div>
                      <span className="font-bold text-white">Smart Inspection</span>
                      <p className="text-white/70 text-sm">
                        Real-time data collection and visual analysis using AI-powered sensors and imaging systems.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-coral-orange mr-2 mt-1 flex-shrink-0" size={18} />
                    <div>
                      <span className="font-bold text-white">Crack Detection</span>
                      <p className="text-white/70 text-sm">
                        Machine learning models trained to identify microfractures, corrosion, and potential points of
                        failure.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-coral-orange mr-2 mt-1 flex-shrink-0" size={18} />
                    <div>
                      <span className="font-bold text-white">Automated Welding</span>
                      <p className="text-white/70 text-sm">
                        High-precision welding arm with intelligent motion control and corrosion-resistant design.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-coral-orange mr-2 mt-1 flex-shrink-0" size={18} />
                    <div>
                      <span className="font-bold text-white">Deep-Sea Durability</span>
                      <p className="text-white/70 text-sm">
                        Engineered to operate in extreme underwater conditions, with pressure resistance and thermal
                        stability.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-coral-orange mr-2 mt-1 flex-shrink-0" size={18} />
                    <div>
                      <span className="font-bold text-white">Remote Access</span>
                      <p className="text-white/70 text-sm">
                        Encrypted control system for real-time remote operations, monitoring, and diagnostics from
                        control hubs.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square relative rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=600&width=600"
                  alt="REXWELD AI System"
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
          </div>
        </div>
      </section>

      <WaveSeparator color="abyssal-teal" />

      {/* Technical Highlights */}
      <section className="py-20 bg-dark-sapphire relative">
        <ParticleBackground count={10} />
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Technical Highlights"
            subtitle="Cutting-edge features that make REXWELD AI a revolutionary underwater welding system."
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "AI Vision System",
                description: "Deep learning analytics for real-time underwater assessment and decision-making.",
              },
              {
                title: "Robotic Arm",
                description: "Multi-axis control system for precise welding operations in challenging conditions.",
              },
              {
                title: "Autonomous Navigation",
                description: "Advanced obstacle avoidance technology for safe underwater maneuvering.",
              },
              {
                title: "Structural Health Monitoring",
                description: "Real-time assessment of underwater infrastructure integrity.",
              },
              {
                title: "Subsea GPS & Sensor Fusion",
                description: "Precise positioning technology for accurate underwater operations.",
              },
              {
                title: "Corrosion & Pressure Resistant Shell",
                description: "Titanium composite construction capable of withstanding extreme depths.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-abyssal-teal/20 p-6 rounded-lg hover:bg-abyssal-teal/40 transition-all duration-300 hover:-translate-y-1"
              >
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-white/70">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="inline-block bg-abyssal-teal/30 px-6 py-4 rounded-lg">
              <p className="text-white font-medium">Operates up to 3,000 meters underwater</p>
            </div>
          </div>
        </div>
      </section>

      <WaveSeparator />

      {/* Applications */}
      <section className="py-20 bg-abyssal-teal relative">
        <ParticleBackground count={15} color="rgba(1, 46, 64, 0.2)" />
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Applications"
            subtitle="Industries and scenarios where REXWELD AI delivers transformative results."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-dark-sapphire/30 rounded-lg overflow-hidden">
              <div className="aspect-video relative">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Oil & Gas Sector"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-sapphire to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">Oil & Gas Sector</h3>
                <p className="text-white/70">
                  Subsea pipeline repairs, leak prevention, and maintenance of underwater extraction equipment.
                </p>
              </div>
            </div>

            <div className="bg-dark-sapphire/30 rounded-lg overflow-hidden">
              <div className="aspect-video relative">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Maritime Refineries"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-sapphire to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">Maritime Refineries</h3>
                <p className="text-white/70">
                  Maintenance of submerged mechanical structures and critical infrastructure components.
                </p>
              </div>
            </div>

            <div className="bg-dark-sapphire/30 rounded-lg overflow-hidden">
              <div className="aspect-video relative">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Underwater Infrastructure"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-sapphire to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">Underwater Infrastructure</h3>
                <p className="text-white/70">
                  Bridges, ports, turbines, and energy platforms requiring precision underwater maintenance.
                </p>
              </div>
            </div>

            <div className="bg-dark-sapphire/30 rounded-lg overflow-hidden">
              <div className="aspect-video relative">
                <Image src="/placeholder.svg?height=400&width=600" alt="Military Use" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-sapphire to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">Military Use</h3>
                <p className="text-white/70">
                  Stealth repairs for classified underwater defense installations and naval equipment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WaveSeparator color="abyssal-teal" />

      {/* Project Status */}
      <section className="py-20 bg-dark-sapphire relative">
        <ParticleBackground count={10} />
        <div className="container mx-auto px-4">
          <div className="bg-abyssal-teal/20 rounded-lg p-8 max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">Project Status</h2>

            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-white font-medium">Current Status:</span>
                <span className="bg-seafoam-blue/20 text-seafoam-blue px-3 py-1 rounded-full text-sm">
                  Design Phase
                </span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-white font-medium">Expected Development:</span>
                <span className="text-white/80">2026</span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-white font-medium">Expected Launch:</span>
                <span className="text-white/80">2027-2028</span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-white font-medium">Sector:</span>
                <span className="text-white/80">Ocean Rex – Advanced Marine Robotics</span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-white font-medium">Lead Division:</span>
                <span className="text-white/80">Seaverse R&D</span>
              </div>
            </div>

            {/* <div className="mt-8 text-center">
              <Button className="bg-coral-orange hover:bg-coral-orange/80 text-white">Request Demo</Button>
            </div> */}
          </div>
        </div>
      </section>

      <WaveSeparator />

      {/* Collaborate */}
      <section className="py-20 bg-abyssal-teal relative">
        <ParticleBackground count={15} color="rgba(1, 46, 64, 0.2)" />
        <div className="container mx-auto px-4 text-center">
          <SectionHeading
            title="Collaborate With Us"
            subtitle="We invite global partners, defense contractors, energy companies, and offshore specialists to collaborate with us in final-stage development and deployment of REXWELD AI."
            centered
          />

          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Together, let's shape the next generation of underwater maintenance and innovation.
          </p>

          {/* <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-coral-orange hover:bg-coral-orange/80 text-white">Become a Partner</Button>
            <Button
              variant="outline"
              className="border-seafoam-blue text-seafoam-blue hover:bg-seafoam-blue hover:text-white"
            >
              Contact R&D Team
            </Button>
          </div> */}
        </div>
      </section>
    </>
  )
}
