import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowDown, ArrowRight } from "lucide-react"
import SectionHeading from "@/components/section-heading"
import WaveSeparator from "@/components/wave-separator"
import ParticleBackground from "@/components/particle-background"
import TechnologyCard from "@/components/technology-card"
import Testimonial from "@/components/testimonial"
import NewsletterSignup from "@/components/newsletter-signup"
import ScrollReveal from "@/components/scroll-reveal"
import TimelineItem from "@/components/timeline-item"

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="object-cover w-full h-full"
            poster="/herophoto.jpeg"
          >
            <source src="/hero.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-dark-surface/90 to-dark-surface/70" />
          <ParticleBackground count={30} color="rgba(255, 140, 0, 0.05)" />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center mt-20">
          <ScrollReveal animation="fade-up">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 font-space-grotesk bg-gradient-to-r from-accent-orange to-accent-orange-light bg-clip-text text-transparent">
              Engineering Tomorrow From The Depths Of Today.
            </h1>
          </ScrollReveal>
          <ScrollReveal animation="fade-up" delay={200}>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">Precision. Innovation. Depth.</p>
          </ScrollReveal>
          {/* <ScrollReveal animation="scale" delay={400}>
            <Button size="lg" className="bg-accent-orange hover:bg-accent-orange/80 text-white animate-float btn-ripple">
              Dive Deeper
            </Button>
          </ScrollReveal> */}

          {/* <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ArrowDown className="text-white/70 h-8 w-8" />
          </div> */}
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-dark-surface relative">
        <ParticleBackground count={15} color="rgba(255, 140, 0, 0.05)" />
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <ScrollReveal animation="fade-right">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Marine Technology</h2>
                <p className="text-gray-300 mb-6">
                  At Seaverse, we're dedicated to revolutionizing underwater technology and sustainable marine
                  solutions. Our innovations are designed to explore, protect, and harness the power of our
                  oceans.
                </p>
                <p className="text-gray-300 mb-6">
                  From advanced underwater welding systems to artificial ocean laboratories, we're pushing the
                  boundaries of what's possible beneath the waves.
                </p>
                <div className="bg-dark-card/50 p-4 border-l-4 border-accent-orange rounded hover:border-accent-orange/80 transition-colors duration-300">
                  <h3 className="text-xl font-bold text-white mb-2">Our Mission</h3>
                  <p className="text-gray-300">
                    To develop sustainable marine technologies that solve critical underwater challenges while
                    preserving our ocean ecosystems for future generations.
                  </p>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal animation="fade-left" delay={200}>
              <div className="relative h-[400px] rounded-lg overflow-hidden group">
                <Image
                  src="/images/aquaculture.jpg"
                  alt="aquaculture"
                  fill
                  className="object-cover rounded-lg transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-surface to-transparent" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <WaveSeparator />

      {/* Featured Projects */}
      <section className="py-20 bg-dark-card relative">
        <ParticleBackground count={20} color="rgba(255, 140, 0, 0.05)" />
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <SectionHeading
              title="Featured Projects"
              subtitle="Discover our innovative marine solutions designed to transform underwater operations and sustainable ocean cultivation."
              centered
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ScrollReveal animation="fade-up" delay={100}>
              <TechnologyCard
                title="Spirulina Biotech"
                description="Sustainable marine spirulina cultivation technology for future-proof nutrition solutions."
                imageSrc="/images/spiri.jpg"
                href="/technology/spirulina"
              />
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={200}>
              <TechnologyCard
                title="Water Quality Monitoring"
                description="Comprehensive water quality assessment services to diagnose and prevent marine environmental issues."
                imageSrc="/images/water_quality.jpg"
                href="/technology/water-quality"
              />
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={300}>
              <TechnologyCard
                title="REXWELD AI"
                description="Advanced underwater welding technology powered by AI for precise subsea repairs and maintenance."
                imageSrc="/images/rexweld.jpg"
                href="/technology/rexweld-ai"
              />
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={400} className="md:col-span-2 lg:col-span-3">
              <TechnologyCard
                title="Genix Ocean Labs"
                description="Artificial ocean laboratories revolutionizing luxury aquaculture and sustainable marine research."
                imageSrc="/images/l3.jpg"
                href="/research/genix"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      <WaveSeparator />

      {/* Innovation Timeline */}
      <section className="py-20 bg-dark-surface relative overflow-hidden">
        <ParticleBackground count={10} color="rgba(255, 140, 0, 0.05)" />
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <SectionHeading
              title="Innovation Timeline"
              subtitle="Our journey of marine technology breakthroughs and milestones."
              centered
            />
          </ScrollReveal>

          <div className="mt-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  year: 2024,
                  title: "Seaverse Founded",
                  description: "Established with a mission to revolutionize marine technology.",
                  color: "from-blue-500/20 to-accent-orange/20",
                },
                {
                  year: 2024,
                  title: "Ocean Rex Division",
                  description: "Specialized division focused on underwater robotics and AI systems.",
                  color: "from-accent-orange/20 to-purple-500/20",
                },
                {
                  year: 2024,
                  title: "Genix Division",
                  description: "Specialized division focused on research of marine micro-organisms and biotechnology.",
                  color: "from-purple-500/20 to-blue-500/20",
                },
                {
                  year: 2025,
                  title: "Spirulina Biotech",
                  description: "Breakthrough in sustainable marine spirulina cultivation technology.",
                  color: "from-blue-500/20 to-accent-orange/20",
                },
                {
                  year: 2026,
                  title: "REXWELD AI Prototype",
                  description: "First successful test of our AI-powered underwater welding system.",
                  color: "from-accent-orange/20 to-purple-500/20",
                },
                {
                  year: 2026,
                  title: "Astaxanthin Production",
                  description: "Natures most potent antioxidant.",
                  color: "from-purple-500/20 to-blue-500/20",
                },
              ].map((item, index) => (
                <ScrollReveal key={index} animation="fade-up" delay={index * 100}>
                  <div className="relative group">
                    {/* Year indicator */}
                    <div className="absolute -top-4 left-0 z-10">
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-accent-orange to-accent-orange-light blur-lg opacity-50"></div>
                        <span className="relative text-3xl font-bold text-white font-space-grotesk">
                          {item.year}
                        </span>
                      </div>
                    </div>

                    {/* Card */}
                    <div className={`relative h-full bg-gradient-to-br ${item.color} p-8 rounded-lg backdrop-blur-sm border border-dark-border/30 hover:border-accent-orange/30 transition-all duration-500 group-hover:scale-[1.02]`}>
                      {/* Glow effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-accent-orange/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      {/* Content */}
                      <div className="relative">
                        <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-accent-orange transition-colors duration-300">
                          {item.title}
                        </h3>
                        <p className="text-gray-300 leading-relaxed">
                          {item.description}
                        </p>
                      </div>

                      {/* Connection lines */}
                      {index < 5 && (
                        <>
                          <div className="absolute -bottom-4 left-1/2 w-px h-4 bg-gradient-to-b from-accent-orange/50 to-transparent"></div>
                          <div className="absolute -bottom-4 left-1/2 w-4 h-px bg-gradient-to-r from-accent-orange/50 to-transparent"></div>
                        </>
                      )}
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            {/* Floating connection lines */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-1/4 left-1/4 w-1/2 h-px bg-gradient-to-r from-transparent via-accent-orange/20 to-transparent"></div>
              <div className="absolute top-1/2 left-1/4 w-1/2 h-px bg-gradient-to-r from-transparent via-accent-orange/20 to-transparent"></div>
              <div className="absolute top-3/4 left-1/4 w-1/2 h-px bg-gradient-to-r from-transparent via-accent-orange/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      <WaveSeparator />

      {/* Testimonials */}
      <section className="py-20 bg-dark-card relative">
        <ParticleBackground count={15} color="rgba(255, 140, 0, 0.05)" />
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <SectionHeading
              title="What Our Partners Say"
              subtitle="Hear from the organizations and individuals who have experienced the Seaverse difference."
              centered
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ScrollReveal animation="fade-up" delay={100}>
              <Testimonial
                quote="Seaverse's REXWELD AI technology will transform our underwater maintenance operations, reducing costs by 40% while improving safety standards."
                author="Shreesha H Acharya"
                role="Founder & CEO"
                company="Seaverse Research & Development"
                imageSrc="/placeholder.svg?height=200&width=200"
              />
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={200}>
              <Testimonial
                quote="The Genix Ocean Labs concept is revolutionary. It has the potential to make India a global leader in sustainable luxury aquaculture."
                author="Darshithchandra"
                role="Associate Director"
                company="Seaverse Research & Development"
                imageSrc="/placeholder.svg?height=200&width=200"
              />
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={300}>
              <Testimonial
                quote="Their water quality monitoring system has been instrumental in helping us maintain optimal conditions for our marine life."
                author="Sambit Singh"
                role="Chief Scientist Officer"
                company="Seaverse Research & Development"
                imageSrc="/placeholder.svg?height=200&width=200"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      <WaveSeparator />

      {/* Newsletter Section */}
      <section className="py-20 bg-dark-surface relative">
        <ParticleBackground count={10} color="rgba(255, 140, 0, 0.05)" />
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <SectionHeading
              title="Stay Connected"
              subtitle="Subscribe to our newsletter for the latest updates on marine technology and innovation."
              centered
            />
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={200}>
            <div className="max-w-2xl mx-auto">
              <NewsletterSignup />
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
