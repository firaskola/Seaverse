import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Check, Download, Calendar } from "lucide-react"
import SectionHeading from "@/components/section-heading"
import WaveSeparator from "@/components/wave-separator"
import ParticleBackground from "@/components/particle-background"
import RippleButton from "@/components/ripple-button"

export default function WaterQualityPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Water Quality Assessment"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-dark-sapphire/80" />
          <ParticleBackground count={20} />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center mt-20">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-space-grotesk">
            SEAVERSE Water Quality Assessment Services
          </h1>
          <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto">
            The Ocean's Doctors – Diagnosing Hidden Water Problems Before They Become Emergencies
          </p>
        </div>
      </section>

      <WaveSeparator />

      {/* Introduction */}
      <section className="py-20 bg-abyssal-teal relative">
        <ParticleBackground count={15} color="rgba(1, 46, 64, 0.2)" />
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Meet Your Water's New Best Friend</h2>
              <div className="bg-dark-sapphire/30 p-6 rounded-lg mb-6">
                <h3 className="text-2xl font-bold text-white mb-3">
                  Your Water Is Talking. We Help You Understand It.
                </h3>
                <p className="text-white/80">
                  We translate the ocean's complex language into simple, actionable insights – so you can make smarter
                  decisions about the water you depend on.
                </p>
              </div>

              <p className="text-white/80 mb-6">
                Our comprehensive water quality assessment services provide detailed analysis and monitoring of marine
                environments, helping you identify potential issues before they become critical problems.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button className="bg-coral-orange hover:bg-coral-orange/80 text-white">Request Consultation</Button>
                {/* <Button
                  variant="outline"
                  className="border-seafoam-blue text-seafoam-blue hover:bg-seafoam-blue hover:text-white"
                >
                  Request Consultation
                </Button> */}
              </div>
            </div>

            <div className="relative">
              <div className="aspect-video relative rounded-lg overflow-hidden">
                <Image
                  src="/images/sci2.jpg"
                  alt="Water Quality Assessment"
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

      {/* Services */}
      <section className="py-20 bg-dark-sapphire relative">
        <ParticleBackground count={10} />
        <div className="container mx-auto px-4">
          <SectionHeading
            title="The Services You Need"
            subtitle="Comprehensive water quality assessment services explained in simple terms."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Bathymetric Surveys",
                description: "The ocean's depth chart – we map the underwater terrain so you don't hit surprises.",
              },
              {
                title: "Sediment Sampling",
                description: "Checking the ocean's 'dirt' – because what's buried often tells the real story.",
              },
              {
                title: "Habitat Mapping",
                description: "Underwater neighborhood watch – we identify who lives where and how they're doing.",
              },
              {
                title: "Metocean Surveys",
                description: "The ocean's weather report – currents, waves, and how they move problems around.",
              },
              {
                title: "Water-Column Profiling",
                description: "A full-body scan for your bay – checking health at every depth.",
              },
              {
                title: "Nutrient & Chlorophyll Analysis",
                description: "Algae's grocery list – we measure what's feeding those dangerous blooms.",
              },
              {
                title: "Elemental Analysis",
                description: "Toxic metal detective work – finding hidden poisons in parts per billion.",
              },
              {
                title: "Particle Size Analysis",
                description: "The ocean's sandbox report – because grain size affects everything.",
              },
              {
                title: "Organic Compound Characterization",
                description: "Chemical fingerprinting – spotting oil spills, sewage, and industrial runoff.",
              },
              {
                title: "Core-Logging",
                description: "The ocean's history book – reading sediment layers like tree rings.",
              },
              {
                title: "Radiochemistry",
                description: "Nuclear age verification – tracking radioactive particles from accidents or waste.",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-abyssal-teal/20 p-6 rounded-lg hover:bg-abyssal-teal/40 transition-all duration-300 hover:-translate-y-1"
              >
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-white/70">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WaveSeparator />

      {/* Why This Matters */}
      <section className="py-20 bg-abyssal-teal relative">
        <ParticleBackground count={15} color="rgba(1, 46, 64, 0.2)" />
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Why This Matters to You"
            subtitle="How our water quality assessment services benefit different stakeholders."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-dark-sapphire/30 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-white mb-4">Fishery Manager</h3>
              <p className="text-white/70 mb-4">"We'll tell you why your catch is declining before it's too late."</p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="text-coral-orange mr-2 mt-1 flex-shrink-0" size={16} />
                  <span className="text-white/70 text-sm">Early detection of harmful algal blooms</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-coral-orange mr-2 mt-1 flex-shrink-0" size={16} />
                  <span className="text-white/70 text-sm">Monitoring of dissolved oxygen levels</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-coral-orange mr-2 mt-1 flex-shrink-0" size={16} />
                  <span className="text-white/70 text-sm">
                    Identification of pollution sources affecting fish stocks
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-dark-sapphire/30 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-white mb-4">Tourism Operator</h3>
              <p className="text-white/70 mb-4">"Know your water is safe before TripAdvisor does."</p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="text-coral-orange mr-2 mt-1 flex-shrink-0" size={16} />
                  <span className="text-white/70 text-sm">Regular beach and water quality certifications</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-coral-orange mr-2 mt-1 flex-shrink-0" size={16} />
                  <span className="text-white/70 text-sm">Predictive modeling for potential contamination events</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-coral-orange mr-2 mt-1 flex-shrink-0" size={16} />
                  <span className="text-white/70 text-sm">Rapid response testing during environmental incidents</span>
                </li>
              </ul>
            </div>

            <div className="bg-dark-sapphire/30 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-white mb-4">Port Engineer</h3>
              <p className="text-white/70 mb-4">"Avoid million-dollar dredging mistakes with better sediment data."</p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="text-coral-orange mr-2 mt-1 flex-shrink-0" size={16} />
                  <span className="text-white/70 text-sm">Detailed sediment composition analysis</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-coral-orange mr-2 mt-1 flex-shrink-0" size={16} />
                  <span className="text-white/70 text-sm">Contaminant mapping for disposal planning</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-coral-orange mr-2 mt-1 flex-shrink-0" size={16} />
                  <span className="text-white/70 text-sm">Hydrodynamic modeling for sedimentation prediction</span>
                </li>
              </ul>
            </div>

            <div className="bg-dark-sapphire/30 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-white mb-4">Environmentalist</h3>
              <p className="text-white/70 mb-4">"Get the hard proof you need to hold polluters accountable."</p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="text-coral-orange mr-2 mt-1 flex-shrink-0" size={16} />
                  <span className="text-white/70 text-sm">Forensic water quality analysis</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-coral-orange mr-2 mt-1 flex-shrink-0" size={16} />
                  <span className="text-white/70 text-sm">Chemical fingerprinting of contaminant sources</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-coral-orange mr-2 mt-1 flex-shrink-0" size={16} />
                  <span className="text-white/70 text-sm">
                    Expert testimony and documentation for legal proceedings
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <WaveSeparator color="abyssal-teal" />

      {/* How It Works */}
      <section className="py-20 bg-dark-sapphire relative">
        <ParticleBackground count={10} />
        <div className="container mx-auto px-4">
          <SectionHeading
            title="How It Works (No PhD Required)"
            subtitle="Our simple, straightforward process for water quality assessment."
            centered
          />

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-6 top-0 bottom-0 w-1 bg-seafoam-blue/30 md:left-1/2 md:-ml-0.5"></div>

              <div className="space-y-12">
                {[
                  {
                    title: "You Share Your Concern",
                    description: '"Is my harbor contaminated? Why are fish disappearing?"',
                    icon: "1",
                  },
                  {
                    title: "We Design a Tailored Check-Up",
                    description: "Based on your budget and worries – no unnecessary tests.",
                    icon: "2",
                  },
                  {
                    title: "Our Tech Does the Work",
                    description: "From drones to lab robots – we minimize boat time and costs.",
                    icon: "3",
                  },
                  {
                    title: "You Get Plain-English Results",
                    description: "With clear recommendations, not just data tables.",
                    icon: "4",
                  },
                ].map((step, index) => (
                  <div key={index} className="relative">
                    <div className={`flex items-center ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                      <div className="flex-1 md:w-1/2"></div>

                      <div className="z-10 flex items-center justify-center w-12 h-12 rounded-full bg-seafoam-blue text-dark-sapphire font-bold text-lg">
                        {step.icon}
                      </div>

                      <div className="flex-1 md:w-1/2"></div>
                    </div>

                    <div
                      className={`relative ${index % 2 === 0 ? "md:ml-auto md:pl-16" : "md:mr-auto md:pr-16"} md:w-1/2 mt-4 md:mt-0`}
                    >
                      <div className="bg-abyssal-teal/20 p-6 rounded-lg">
                        <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                        <p className="text-white/70">{step.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <WaveSeparator />

      {/* Real Problems */}
      {/* <section className="py-20 bg-abyssal-teal relative">
        <ParticleBackground count={15} color="rgba(1, 46, 64, 0.2)" />
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Real Problems We've Solved"
            subtitle="Case studies showcasing our water quality assessment expertise."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-dark-sapphire/30 rounded-lg overflow-hidden">
              <div className="aspect-video relative">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Coastal Resort Case Study"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-sapphire to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">Coastal Resort Mystery Solved</h3>
                <p className="text-white/70 mb-4">
                  A luxury resort in Goa was experiencing periodic beach discoloration. Our water quality assessment
                  identified an upstream agricultural runoff issue that was causing harmful algal blooms.
                </p> */}
                {/* <div className="flex justify-between items-center">
                  <span className="text-seafoam-blue">Tourism Sector</span>
                  <Link href="#" className="text-coral-orange hover:text-white inline-flex items-center">
                    Read Full Case Study <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div> */}
              {/* </div>
            </div>

            <div className="bg-dark-sapphire/30 rounded-lg overflow-hidden">
              <div className="aspect-video relative">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Fishery Decline Case Study"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-sapphire to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">Fishery Decline Investigation</h3>
                <p className="text-white/70 mb-4">
                  A commercial fishery in Kerala experienced a 40% decline in catch over two years. Our comprehensive
                  water quality assessment revealed subtle changes in water temperature and oxygen levels affecting fish
                  migration patterns.
                </p> */}
                {/* <div className="flex justify-between items-center">
                  <span className="text-seafoam-blue">Fisheries Sector</span>
                  <Link href="#" className="text-coral-orange hover:text-white inline-flex items-center">
                    Read Full Case Study <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div> */}
              {/* </div>
            </div>
          </div>
        </div>
      </section>*/}

      <WaveSeparator color="abyssal-teal" /> 

      {/* Our Promise */}
      <section className="py-20 bg-dark-sapphire relative">
        <ParticleBackground count={10} />
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Our Promise"
            subtitle="What sets our water quality assessment services apart."
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-abyssal-teal/20 p-6 rounded-lg hover:bg-abyssal-teal/40 transition-all duration-300 hover:-translate-y-1">
              <h3 className="text-xl font-bold text-white mb-3">No Jargon</h3>
              <p className="text-white/70">Reports you can actually understand</p>
            </div>

            <div className="bg-abyssal-teal/20 p-6 rounded-lg hover:bg-abyssal-teal/40 transition-all duration-300 hover:-translate-y-1">
              <h3 className="text-xl font-bold text-white mb-3">No Surprises</h3>
              <p className="text-white/70">Fixed-price packages</p>
            </div>

            <div className="bg-abyssal-teal/20 p-6 rounded-lg hover:bg-abyssal-teal/40 transition-all duration-300 hover:-translate-y-1">
              <h3 className="text-xl font-bold text-white mb-3">No Delay</h3>
              <p className="text-white/70">Most results in 72 hours</p>
            </div>
          </div>

          {/* <div className="mt-12 text-center">
            <h3 className="text-xl font-bold text-white mb-6">Certified By</h3>
            <div className="flex flex-wrap justify-center gap-8">
              {Array.from({ length: 3 }).map((_, i) => (
                <div
                  key={i}
                  className="bg-abyssal-teal/20 p-4 rounded-lg flex items-center justify-center group hover:bg-abyssal-teal/40 transition-colors duration-300"
                >
                  <Image
                    src={`/placeholder.svg?height=60&width=120&text=Certification ${i + 1}`}
                    alt={`Certification ${i + 1}`}
                    width={120}
                    height={60}
                    className="opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              ))}
            </div>
          </div> */}
        </div>
      </section>

      <WaveSeparator />

      {/* Call to Action */}
      <section className="py-20 bg-abyssal-teal relative">
        <ParticleBackground count={15} color="rgba(1, 46, 64, 0.2)" />
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Ready for Peace of Mind?"
            subtitle="Take the next step toward understanding and protecting your water."
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-dark-sapphire/30 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-white mb-4">For the Cautious</h3>
              <Button
                variant="outline"
                className="w-full border-seafoam-blue text-seafoam-blue hover:bg-seafoam-blue hover:text-white"
              >
                <Download className="mr-2 h-4 w-4" />
                Download Warning Guide
              </Button>
            </div>

            <div className="bg-dark-sapphire/30 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-white mb-4">For the Decisive</h3>
<a href="mailto:seaversetechnology@gmail.com?subject=15-Minute%20Consultation">
  <RippleButton>
    <Calendar className="mr-2 h-4 w-4" />
    Book a 15-Minute Consult
  </RippleButton>
</a>

            </div>

            <div className="bg-dark-sapphire/30 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-white mb-4">For the Skeptical</h3>
              <Button
                variant="outline"
                className="w-full border-seafoam-blue text-seafoam-blue hover:bg-seafoam-blue hover:text-white"
              >
                See Live Data from Our Buoys
              </Button>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-white/80 text-lg font-medium max-w-2xl mx-auto">
              "You wouldn't ignore strange symptoms in your body. Don't ignore them in your water."
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
