import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Check, Download, Calendar } from "lucide-react"
import SectionHeading from "@/components/section-heading"
import WaveSeparator from "@/components/wave-separator"
import ParticleBackground from "@/components/particle-background"
import RippleButton from "@/components/ripple-button"
import ScrollReveal from "@/components/scroll-reveal"

export default function WaterQualityPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/sci2.jpg"
            alt="Water Quality Assessment"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark-surface/90 to-dark-surface/70" />
          <ParticleBackground count={20} />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center mt-20">
          <ScrollReveal animation="fade-up">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-space-grotesk bg-gradient-to-r from-accent-orange to-accent-orange-light bg-clip-text text-transparent">
              SEAVERSE Water Quality Assessment Services
            </h1>
          </ScrollReveal>
          <ScrollReveal animation="fade-up" delay={200}>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              The Ocean's Doctors – Diagnosing Hidden Water Problems Before They Become Emergencies
            </p>
          </ScrollReveal>
        </div>
      </section>

      <WaveSeparator />

      {/* Introduction */}
      <section className="py-20 bg-dark-surface relative">
        <ParticleBackground count={15}  />
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal animation="fade-right">
              <div>
                <h2 className="text-3xl font-bold text-accent-orange mb-6">Meet Your Water's New Best Friend</h2>
                <div className="bg-dark-card/50 p-6 rounded-lg border border-dark-border/50 hover:border-accent-orange/30 transition-all duration-300 mb-6">
                  <h3 className="text-2xl font-bold text-white mb-3">
                    Your Water Is Talking. We Help You Understand It.
                  </h3>
                  <p className="text-gray-300">
                    We translate the complex language of the ocean into simple and actionable insights, so you can make smarter
                    decisions about the water you depend on.
                  </p>
                </div>

                <p className="text-gray-300 mb-6">
                  Our comprehensive water quality assessment services provide detailed analysis and monitoring of marine
                  environments, helping you identify potential issues before they become critical problems.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-left" delay={200}>
              <div className="relative">
                <div className="aspect-video relative rounded-lg overflow-hidden border border-dark-border/50 hover:border-accent-orange/30 transition-all duration-300">
                  <Image
                    src="/images/sci2.jpg"
                    alt="Water Quality Assessment"
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

      {/* Services */}
      <section className="py-20 bg-dark-card relative">
        <ParticleBackground count={10}  />
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <SectionHeading
              title="The Services You Need"
              subtitle="Comprehensive water quality assessment services, explained in simple terms."
            />
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={200}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Bathymetric Surveys",
                  description: "A depth chart of the ocean – we map the underwater terrain so you don't hit surprises.",
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
                  description: "The ocean's weather report – tides, currents, waves, and how they move problems around.",
                },
                {
                  title: "Water-Column Profiling",
                  description: "A full body scan for your bay – checking health at every depth.",
                },
                {
                  title: "Nutrient & Chlorophyll Analysis",
                  description: "An algae's grocery list – measuring what's feeding those dangerous blooms.",
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
                  title: "Core Logging",
                  description: "The ocean's history book – reading sediment layers like tree rings.",
                },
                {
                  title: "Radiochemistry",
                  description: "Nuclear age verification – tracking radioactive particles from accidents or waste.",
                },
              ].map((service, index) => (
                <div
                  key={index}
                  className="bg-dark-surface/50 p-6 rounded-lg border border-dark-border/50 hover:border-accent-orange/30 transition-all duration-300 hover:-translate-y-1 group"
                >
                  <h3 className="text-xl font-bold text-accent-orange mb-3 group-hover:text-accent-orange transition-colors duration-300">{service.title}</h3>
                  <p className="text-gray-300">{service.description}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <WaveSeparator />

      {/* Why This Matters */}
      <section className="py-20 bg-dark-surface relative">
        <ParticleBackground count={15}  />
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <SectionHeading
              title="Why This Matters to You?"
              subtitle="How our water quality assessment services benefit different stakeholders."
            />
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={200}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Fishery Manager",
                  subtitle: "We'll tell you why your catch is declining, before it's too late.",
                  features: [
                    "Early detection of harmful algal blooms",
                    "Monitoring dissolved oxygen levels",
                    "Identification of pollution sources that affect fish stocks"
                  ]
                },
                {
                  title: "Tourism Operator",
                  subtitle: "Know that your water is safe before TripAdvisor does.",
                  features: [
                    "Regular beach and water quality certifications",
                    "Predictive modeling for potential contamination events",
                    "Rapid response testing during environmental incidents"
                  ]
                },
                {
                  title: "Port Engineer",
                  subtitle: "Avoid million dollar dredging mistakes with better sediment data.",
                  features: [
                    "Detailed sediment composition analysis",
                    "Contaminant mapping for disposal planning",
                    "A Hydrodynamic model for sedimentation prediction"
                  ]
                },
                {
                  title: "Environmentalist",
                  subtitle: "Get the hard proof you need, to hold polluters accountable.",
                  features: [
                    "Forensic water quality analysis",
                    "Chemical fingerprinting of contaminant sources",
                    "Expert testimony and documentation for legal proceedings"
                  ]
                }
              ].map((stakeholder, index) => (
                <div key={index} className="bg-dark-card/50 p-6 rounded-lg border border-dark-border/50 hover:border-accent-orange/30 transition-all duration-300 group">
                  <h3 className="text-xl font-bold text-accent-orange mb-4 group-hover:text-accent-orange transition-colors duration-300">{stakeholder.title}</h3>
                  <p className="text-gray-300 mb-4">{stakeholder.subtitle}</p>
                  <ul className="space-y-3">
                    {stakeholder.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <div className="p-1.5 bg-accent-orange/10 rounded-lg mr-3 group-hover:bg-accent-orange/20 transition-colors duration-300">
                          <Check className="text-accent-orange" size={16} />
                        </div>
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <WaveSeparator />

      {/* How We Work */}
      <section className="py-20 bg-dark-card relative">
        <ParticleBackground count={10}  />
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <SectionHeading
              title="How We Work?"
              subtitle="Our proven process for delivering accurate and actionable water quality assessments."
              centered
            />
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={200}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                {
                  title: "Assessment",
                  description: "We analyze the needs of your water quality and then, design a comprehensive testing plan."
                },
                {
                  title: "Analysis",
                  description: "Our experts conduct thorough testing and data collection using advanced equipment."
                },
                {
                  title: "Action",
                  description: "We provide clear and actionable insights and recommendations for improvement."
                }
              ].map((step, index) => (
                <div key={index} className="bg-dark-surface/50 p-6 rounded-lg border border-dark-border/50 hover:border-accent-orange/30 transition-all duration-300 group">
                  <div className="w-12 h-12 bg-accent-orange/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-accent-orange/20 transition-colors duration-300">
                    <span className="text-accent-orange font-bold text-xl">{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-bold text-accent-orange mb-3 group-hover:text-accent-orange transition-colors duration-300">{step.title}</h3>
                  <p className="text-gray-300">{step.description}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <WaveSeparator />

      {/* Get Started */}
      <section className="py-20 bg-dark-surface relative">
        <ParticleBackground count={15}  />
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal>
            <SectionHeading
              title="Ready to Get Started?"
              subtitle="Contact us today to schedule your water quality assessment."
              centered
            />
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={200}>
            <div className="max-w-2xl mx-auto">
              <div className="bg-dark-card/50 p-8 rounded-lg border border-dark-border/50 hover:border-accent-orange/30 transition-all duration-300">
                <h3 className="text-2xl font-bold text-accent-orange mb-6">Schedule Your Assessment</h3>
                <div className="space-y-4">
                  <Button className="w-full bg-accent-orange hover:bg-accent-orange/80 text-white">
                    Request Consultation
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full border-accent-orange text-accent-orange hover:bg-accent-orange hover:text-white"
                  >
                    Download Brochure
                  </Button>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
