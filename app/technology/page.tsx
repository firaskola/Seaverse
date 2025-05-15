import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import SectionHeading from "@/components/section-heading"
import WaveSeparator from "@/components/wave-separator"
import ParticleBackground from "@/components/particle-background"
import TechnologyCard from "@/components/technology-card"
import NewsletterSignup from "@/components/newsletter-signup"
import ScrollReveal from "@/components/scroll-reveal"

export default function TechnologyPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Ocean Rex Technology"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-dark-sapphire/80" />
          <ParticleBackground count={20} />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center mt-20">
          <ScrollReveal animation="fade-up">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-space-grotesk">
              Ocean Rex: Subsea Innovation
            </h1>
          </ScrollReveal>
          <ScrollReveal animation="fade-up" delay={200}>
            <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto">
              Cutting-edge marine technology solutions for the world's most challenging underwater environments.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <WaveSeparator />

      {/* Current Technologies Section */}
      <section className="py-20 bg-abyssal-teal relative">
        <ParticleBackground count={15} color="rgba(1, 46, 64, 0.2)" />
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <SectionHeading
              title="Current Technologies"
              subtitle="Explore our innovative marine technology solutions designed to transform underwater operations."
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ScrollReveal animation="fade-up" delay={100}>
              <TechnologyCard
                title="REXWELD AI"
                description="Advanced underwater welding technology powered by AI for precise subsea repairs and maintenance."
                imageSrc="/placeholder.svg?height=400&width=600"
                href="/technology/rexweld-ai"
              />
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={200}>
              <TechnologyCard
                title="Spirulina Biotech"
                description="Sustainable marine spirulina cultivation technology for future-proof nutrition solutions."
                imageSrc="/placeholder.svg?height=400&width=600"
                href="/technology/spirulina"
              />
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={300} className="md:col-span-2">
              <TechnologyCard
                title="Water Quality Monitoring"
                description="Comprehensive water quality assessment services to diagnose and prevent marine environmental issues."
                imageSrc="/placeholder.svg?height=400&width=600"
                href="/technology/water-quality"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      <WaveSeparator color="abyssal-teal" />

      {/* Upcoming Technologies */}
      <section className="py-20 bg-dark-sapphire relative">
        <ParticleBackground count={10} />
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <SectionHeading
              title="Upcoming Technologies"
              subtitle="A glimpse into the future of marine innovation at Seaverse."
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item, index) => (
              <ScrollReveal key={item} animation="scale" delay={index * 100}>
                <div className="bg-abyssal-teal/20 rounded-lg overflow-hidden relative group">
                  <div className="aspect-video relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-24 h-24 rounded-full bg-seafoam-blue/20 flex items-center justify-center animate-pulse">
                        <div className="w-16 h-16 rounded-full bg-seafoam-blue/30 flex items-center justify-center">
                          <div className="w-8 h-8 rounded-full bg-seafoam-blue/50"></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2">Coming Soon</h3>
                    <p className="text-white/70">
                      Our R&D team is working on groundbreaking marine technology solutions.
                    </p>
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-dark-sapphire/80 to-transparent"></div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal animation="fade-up" delay={400} className="mt-12">
            <NewsletterSignup />
          </ScrollReveal>
        </div>
      </section>

      <WaveSeparator />

      {/* Case Studies */}
      <section className="py-20 bg-abyssal-teal relative">
        <ParticleBackground count={15} color="rgba(1, 46, 64, 0.2)" />
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <SectionHeading
              title="Case Studies"
              subtitle="Real-world applications of our marine technology solutions."
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <ScrollReveal animation="fade-right">
              <div className="bg-dark-sapphire/30 rounded-lg overflow-hidden">
                <div className="aspect-video relative">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Offshore Platform Maintenance"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">Offshore Platform Maintenance</h3>
                  <p className="text-white/70 mb-4">
                    How REXWELD AI transformed underwater repairs for a major oil company, reducing downtime by 60%.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-seafoam-blue">Oil & Gas Industry</span>
                    <Link href="#" className="text-coral-orange hover:text-white inline-flex items-center">
                      View Case Study <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-left">
              <div className="bg-dark-sapphire/30 rounded-lg overflow-hidden">
                <div className="aspect-video relative">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Coastal Water Quality Monitoring"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">Coastal Water Quality Monitoring</h3>
                  <p className="text-white/70 mb-4">
                    How our comprehensive water quality assessment helped a coastal resort prevent an environmental
                    crisis.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-seafoam-blue">Tourism & Hospitality</span>
                    <Link href="#" className="text-coral-orange hover:text-white inline-flex items-center">
                      View Case Study <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal animation="fade-up" delay={300} className="mt-12 text-center">
            <Button className="bg-coral-orange hover:bg-coral-orange/80 text-white btn-ripple">
              Explore All Case Studies
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
