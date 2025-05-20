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
          <div className="absolute inset-0 bg-dark-sapphire/70" />
          <ParticleBackground count={30} />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center mt-20">
          <ScrollReveal animation="fade-up">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 font-space-grotesk">
             Engineering Tomorrow From The Depths Of Today.
            </h1>
          </ScrollReveal>
          <ScrollReveal animation="fade-up" delay={200}>
            <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto">Precision. Innovation. Depth.</p>
          </ScrollReveal>
          {/* <ScrollReveal animation="scale" delay={400}>
            <Button size="lg" className="bg-coral-orange hover:bg-coral-orange/80 text-white animate-float btn-ripple">
              Dive Deeper
            </Button>
          </ScrollReveal>

          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ArrowDown className="text-white/70 h-8 w-8" />
          </div> */}
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
                  solutions. Our innovations are designed to explore, protect, and harness the power of our
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
                  src="/images/aquaculture.jpg"
                  alt="aquaculture"
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

      {/* Featured Projects */}
      <section className="py-20 bg-abyssal-teal relative">
        <ParticleBackground count={20} color="rgba(1, 46, 64, 0.2)" />
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
                  year: 2024,
                  title: "Seaverse Founded",
                  description: "Established with a mission to revolutionize marine technology.",
                },
                {
                  year: 2024,
                  title: "Ocean Rex Division Launched",
                  description: "Specialized division focused on underwater robotics and AI systems.",
                },
                 {
                  year: 2024,
                  title: "Genix Division Lauched",
                  description: "Specialized division focused on research of marine micro-organisms and biotechnology.",
                },
                {
                  year: 2025,
                  title: "Spirulina Biotech Development",
                  description: "Breakthrough in sustainable marine spirulina cultivation technology.",
                },
                {
                  year: 2026,
                  title: "REXWELD AI Prototype",
                  description: "First successful test of our AI-powered underwater welding system.",
                },
                {
                  year: 2026,
                  title: "Production of Astaxanthin",
                  description: "Natures most potent antioxidant.",
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
                author="Lakshmish Bhandary"
                role="Director"
                company="Seaverse Research & Development"
                imageSrc="/placeholder.svg?height=200&width=200"
              />
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={300}>
              <Testimonial
                quote="Seaverse's water quality monitoring services will provide us with critical insights that helped prevent a major environmental incident."
                author="Rhythm Sardana"
                role="Head of Communication & Science Outreach"
                company="Seaverse Research & Development"
                imageSrc="/placeholder.svg?height=200&width=200"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* <WaveSeparator color="abyssal-teal" /> */}

      {/* Global Partners */}
      {/* <section className="py-20 bg-dark-sapphire relative">
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

      */}

    {/* Newsletter & Latest News */}
<section className="py-20 bg-dark-sapphire relative">
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
            <div className="bg-dark-sapphire/30 p-8 rounded-lg text-center">
              <div className="flex flex-col items-center justify-center h-full">
                <svg className="w-12 h-12 text-seafoam-blue mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h4 className="text-xl font-bold text-white mb-2">Exciting Updates Coming Soon</h4>
                <p className="text-white/70">
                  We're preparing some groundbreaking announcements about our marine technology innovations. Stay tuned!
                </p>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </div>
  </div>
</section>
    </>
  )
}
