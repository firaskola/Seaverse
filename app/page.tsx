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
      {/* Hero Section photo needs to be changed */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="object-cover w-full h-full"
            poster="/placeholder.svg?height=1080&width=1920"
          >
            <source src="/videos/ocean-background.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-dark-sapphire/70" />
          <ParticleBackground count={30} />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center mt-20">
          <ScrollReveal animation="fade-up">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 font-space-grotesk">
              Engineering the Ocean's Future
            </h1>
          </ScrollReveal>
          <ScrollReveal animation="fade-up" delay={200}>
            <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto">Precision. Innovation. Depth.</p>
          </ScrollReveal>
          <ScrollReveal animation="scale" delay={400}>
            <Button size="lg" className="bg-coral-orange hover:bg-coral-orange/80 text-white animate-float btn-ripple">
              Dive Deeper
            </Button>
          </ScrollReveal>

          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ArrowDown className="text-white/70 h-8 w-8" />
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-dark-sapphire relative">
        <ParticleBackground count={15} />
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <ScrollReveal animation="fade-right">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Marine Technology</h2>
                <p className="text-white/80 mb-6">
                  At Seaverse, we're dedicated to revolutionizing underwater technology and sustainable marine
                  solutions. Our cutting-edge innovations are designed to explore, protect, and harness the power of our
                  oceans.
                </p>
                <p className="text-white/80 mb-6">
                  From advanced underwater welding systems to artificial ocean laboratories, we're pushing the
                  boundaries of what's possible beneath the waves.
                </p>
                <div className="bg-abyssal-teal/30 p-4 border-l-4 border-coral-orange rounded">
                  <h3 className="text-xl font-bold text-white mb-2">Our Mission</h3>
                  <p className="text-white/80">
                    To develop sustainable marine technologies that solve critical underwater challenges while
                    preserving our ocean ecosystems for future generations.
                  </p>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal animation="fade-left" delay={200}>
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=800&width=600"
                  alt="Deep sea vessel"
                  fill
                  className="object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-sapphire to-transparent" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <WaveSeparator />

      {/* Featured Technologies */}
      <section className="py-20 bg-abyssal-teal relative">
        <ParticleBackground count={20} color="rgba(1, 46, 64, 0.2)" />
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <SectionHeading
              title="Featured Technologies"
              subtitle="Discover our innovative marine solutions designed to transform underwater operations and sustainable ocean cultivation."
              centered
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                title="Genix Ocean Labs"
                description="Artificial ocean laboratories revolutionizing luxury aquaculture and sustainable marine research."
                imageSrc="/placeholder.svg?height=400&width=600"
                href="/research/genix"
              />
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={300}>
              <TechnologyCard
                title="Spirulina Biotech"
                description="Sustainable marine spirulina cultivation technology for future-proof nutrition solutions."
                imageSrc="/placeholder.svg?height=400&width=600"
                href="/technology/spirulina"
              />
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={400} className="md:col-span-2 lg:col-span-3">
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

      {/* Innovation Timeline */}
      <section className="py-20 bg-dark-sapphire relative overflow-hidden">
        <ParticleBackground count={10} />
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <SectionHeading
              title="Innovation Timeline"
              subtitle="Our journey of marine technology breakthroughs and milestones."
              centered
            />
          </ScrollReveal>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-seafoam-blue/30"></div>

            <div className="space-y-16">
              {[
                {
                  year: 2020,
                  title: "Seaverse Founded",
                  description: "Established with a mission to revolutionize marine technology.",
                },
                {
                  year: 2022,
                  title: "Ocean Rex Division Launched",
                  description: "Specialized division focused on underwater robotics and AI systems.",
                },
                {
                  year: 2023,
                  title: "Spirulina Biotech Development",
                  description: "Breakthrough in sustainable marine spirulina cultivation technology.",
                },
                {
                  year: 2024,
                  title: "REXWELD AI Prototype",
                  description: "First successful test of our AI-powered underwater welding system.",
                },
                {
                  year: 2025,
                  title: "Genix Ocean Labs Planning",
                  description: "Initiated development of artificial ocean laboratories.",
                },
                {
                  year: 2026,
                  title: "Genix Launch",
                  description: "Official launch of India's first Artificial Ocean Laboratory.",
                },
              ].map((item, index) => (
                <TimelineItem
                  key={index}
                  index={index}
                  className={`relative ${index % 2 === 0 ? "ml-auto pl-8" : "mr-auto pr-8"} w-full md:w-1/2`}
                >
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-coral-orange border-4 border-dark-sapphire z-10"></div>

                  <div className="bg-abyssal-teal/30 p-6 rounded-lg hover:bg-abyssal-teal/50 transition-colors duration-300">
                    <span className="inline-block px-3 py-1 bg-seafoam-blue/20 text-seafoam-blue rounded-full text-sm font-medium mb-3">
                      {item.year}
                    </span>
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-white/70">{item.description}</p>
                  </div>
                </TimelineItem>
              ))}
            </div>
          </div>
        </div>
      </section>

      <WaveSeparator />

      {/* Testimonials */}
      <section className="py-20 bg-abyssal-teal relative">
        <ParticleBackground count={15} color="rgba(1, 46, 64, 0.2)" />
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
                quote="Seaverse's REXWELD AI technology has transformed our underwater maintenance operations, reducing costs by 40% while improving safety standards."
                author="Rajiv Sharma"
                role="Operations Director"
                company="Indian Oil Corporation"
                imageSrc="/placeholder.svg?height=200&width=200"
              />
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={200}>
              <Testimonial
                quote="The Genix Ocean Labs concept is revolutionary. It has the potential to make India a global leader in sustainable luxury aquaculture."
                author="Dr. Meera Patel"
                role="Marine Biologist"
                company="National Institute of Oceanography"
                imageSrc="/placeholder.svg?height=200&width=200"
              />
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={300}>
              <Testimonial
                quote="Seaverse's water quality monitoring services provided us with critical insights that helped prevent a major environmental incident."
                author="James Chen"
                role="Environmental Compliance Manager"
                company="Pacific Marine Group"
                imageSrc="/placeholder.svg?height=200&width=200"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      <WaveSeparator color="abyssal-teal" />

      {/* Global Partners */}
      <section className="py-20 bg-dark-sapphire relative">
        <ParticleBackground count={10} />
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <SectionHeading
              title="Global Partners"
              subtitle="Collaborating with leading organizations to advance marine technology and sustainable ocean solutions."
              centered
            />
          </ScrollReveal>

          <ScrollReveal animation="stagger" className="stagger-reveal">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className="bg-abyssal-teal/20 p-4 rounded-lg flex items-center justify-center group hover:bg-abyssal-teal/40 transition-colors duration-300 animate-float"
                  style={{ animationDelay: `${i * 0.2}s` }}
                >
                  <Image
                    src={`/placeholder.svg?height=100&width=200&text=Partner ${i + 1}`}
                    alt={`Partner ${i + 1}`}
                    width={120}
                    height={60}
                    className="opacity-50 group-hover:opacity-100 transition-opacity duration-300 filter grayscale group-hover:grayscale-0"
                  />
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <WaveSeparator />

      {/* Newsletter & Latest News */}
      <section className="py-20 bg-abyssal-teal relative">
        <ParticleBackground count={15} color="rgba(1, 46, 64, 0.2)" />
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ScrollReveal animation="fade-right">
              <NewsletterSignup />
            </ScrollReveal>

            <ScrollReveal animation="fade-left">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Latest News & Insights</h3>

                <div className="space-y-6">
                  {[
                    {
                      title: "REXWELD AI Development Milestone Reached",
                      date: "May 10, 2025",
                      excerpt:
                        "Our underwater welding technology achieves new precision benchmarks in deep-sea testing.",
                    },
                    {
                      title: "Genix Ocean Labs Secures Major Investment",
                      date: "April 28, 2025",
                      excerpt:
                        "Strategic partnership accelerates development of India's first artificial ocean laboratory.",
                    },
                    {
                      title: "Spirulina Biotech Expands to International Markets",
                      date: "April 15, 2025",
                      excerpt: "Seaverse's sustainable marine cultivation technology gains global recognition.",
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="bg-dark-sapphire/30 p-4 rounded-lg hover:bg-dark-sapphire/50 transition-colors duration-300"
                    >
                      <span className="text-seafoam-blue text-sm">{item.date}</span>
                      <h4 className="text-lg font-bold text-white mt-1 mb-2">{item.title}</h4>
                      <p className="text-white/70 text-sm mb-3">{item.excerpt}</p>
                      <Link href="#" className="text-coral-orange hover:text-white text-sm inline-flex items-center">
                        Read More <ArrowRight className="ml-1 h-3 w-3" />
                      </Link>
                    </div>
                  ))}
                </div>

                <div className="mt-6 text-center">
                  <Button
                    variant="outline"
                    className="border-seafoam-blue text-seafoam-blue hover:bg-seafoam-blue hover:text-white btn-ripple"
                  >
                    View All News
                  </Button>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  )
}
