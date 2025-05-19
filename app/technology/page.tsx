import Image from "next/image"
import Link from "next/link"
import SectionHeading from "@/components/section-heading"
import WaveSeparator from "@/components/wave-separator"
import ParticleBackground from "@/components/particle-background"
import TechnologyCard from "@/components/technology-card"
import NewsletterSignup from "@/components/newsletter-signup"
import ScrollReveal from "@/components/scroll-reveal"
import RippleButton from "@/components/ripple-button"

export default function TechnologyPage() {
  return (
    <>
        {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/whale.png"
            alt="Ocean Rex Technology "
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-dark-sapphire/80" />
          <ParticleBackground count={20} />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center mt-20">
          <ScrollReveal animation="fade-up">
           <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 font-rubik-glitch">
             OCEAN REX
            </h1>
          </ScrollReveal>
          <ScrollReveal animation="fade-up" delay={200}>
           <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto font-vt323">
            Cutting-edge marine technology solutions...
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
              title="Our Technologies"
              subtitle="Explore our innovative marine technology solutions designed to transform underwater operations."
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ScrollReveal animation="fade-up" delay={400}>
              <TechnologyCard
                title="AQUA SENTINEL"
                description="Autonomous underwater drones providing 24/7 insights on ocean life, climate shifts, and ecological risks in real time."
                imageSrc="/images/aqua_senti.jpg"
                href="/technology/aqua-sentinel"
              />
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={400}>
              <TechnologyCard
                title="Spirulina Biotech"
                description="Sustainable marine spirulina cultivation technology for future-proof nutrition solutions."
                imageSrc="/images/spiri.jpg"
                href="/technology/spirulina"
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
            {[
              {
                title: "Nano Bots Swarms",
                description:
                  "Microplastic cleanup technology using nano bot swarms will be tested in Mediterranean Sea field trials",
              },
              {
                title: "Biorock Coral Restoration",
                description:
                  "Revolutionary coral reef restoration using advanced biorock technology and mineral accretion",
              },
              {
                title: "Marine Data Nexus",
                description:
                  "Global ocean intelligence platform aggregating real-time marine data from satellites, drones, and sensors",
              },
            ].map((item, index) => (
              <ScrollReveal key={index} animation="scale" delay={index * 100}>
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
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-white/70">{item.description}</p>
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

      {/* Energy Projects Section */}
      <section className="py-20 bg-abyssal-teal relative">
        <ParticleBackground count={15} color="rgba(1, 46, 64, 0.2)" />
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <SectionHeading
              title="Energy Projects"
              subtitle="Pioneering sustainable ocean energy solutions for a cleaner future."
            />
          </ScrollReveal>

          <ScrollReveal animation="fade-up">
            <div className="bg-dark-sapphire/30 rounded-lg overflow-hidden">
              <div className="aspect-video relative">
                <Image
                  src="/images/energy.jpg"
                  alt="Ocean Energy Solutions"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-sapphire/90 to-transparent" />
              </div>
              <div className="p-8 relative">
                <h3 className="text-2xl font-bold text-white mb-4">SEAVERSE Ocean Energy Solutions</h3>
                <p className="text-white/80 mb-6 text-lg max-w-3xl">
                  Starting in 2027, SEAVERSE will begin advanced R&D on India's first utility-scale Ocean Thermal Energy
                  Conversion (OTEC) and Tidal Energy Systems, laying the foundation for the next generation of clean,
                  24/7 ocean power.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="/technology/energy-projects">
                    <RippleButton className="bg-coral-orange hover:bg-coral-orange/80 text-white">
                      Explore Ocean Energy Solutions
                    </RippleButton>
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <WaveSeparator color="abyssal-teal" />

      {/* Case Studies */}
      <section className="py-20 bg-dark-sapphire relative">
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
              <div className="bg-abyssal-teal/30 rounded-lg overflow-hidden">
                <div className="aspect-video relative">
                  <Image
                    src="/images/weld.jpg"
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
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-left">
              <div className="bg-abyssal-teal/30 rounded-lg overflow-hidden">
                <div className="aspect-video relative">
                  <Image
                    src="/images/quality_check.jpg"
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
