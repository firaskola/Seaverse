import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import SectionHeading from "@/components/section-heading"
import WaveSeparator from "@/components/wave-separator"
import ParticleBackground from "@/components/particle-background"
import TechnologyCard from "@/components/technology-card"
import ScrollReveal from "@/components/scroll-reveal"

export default function ResearchPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/images/bostonlab.jpg" alt="Seaverse Research" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-dark-surface/90 to-dark-surface/70" />
          <ParticleBackground count={20} />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center mt-20">
          <ScrollReveal animation="fade-up">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-space-grotesk bg-gradient-to-r from-accent-orange to-accent-orange-light bg-clip-text text-transparent">GENIX</h1>
          </ScrollReveal>
          <ScrollReveal animation="fade-up" delay={200}>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
             The Research Unit of Seaverse
            </p>
          </ScrollReveal>
        </div>
      </section>

      <WaveSeparator />

      {/* Research Overview */}
      <section className="py-20 bg-dark-surface relative">
        <ParticleBackground count={15} color="rgba(255, 140, 0, 0.05)" />
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal animation="fade-right">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Pioneering Marine Research</h2>
                <p className="text-gray-300 mb-6">
                  At Seaverse, research and innovation are at the core of everything we do. Our teams work dedicatedly & 
                  tirelessly to push the boundaries of marine technology, developing solutions that would solve critical
                  underwater challenges while actually preserving our ocean ecosystems.
                </p>

                <p className="text-gray-300 mb-6">
                  From artificial ocean laboratories to advanced underwater robotics, our research initiatives do span to a
                  wide range of disciplines, combining expertise in marine engineering, oceanography, biotechnology, and
                  artificial intelligence.
                </p>

                <div className="bg-dark-card/50 p-4 border-l-4 border-accent-orange rounded group hover:bg-dark-card/70 transition-colors duration-300">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-accent-orange transition-colors duration-300">Our Approach</h3>
                  <p className="text-gray-300">
                    We believe that collaborative and interdisciplinary research bridges the gap between scientific
                    discovery and practical application, helping to create technologies that make a real-world impact.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-left" delay={200}>
              <div className="relative">
                <div className="aspect-video relative rounded-lg overflow-hidden border border-dark-border/50 hover:border-accent-orange/30 transition-all duration-300">
                  <Image
                    src="/images/ocean_lab.jpg"
                    alt="Seaverse Research Lab"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-accent-orange/10 rounded-full animate-pulse"></div>
                <div
                  className="absolute -top-6 -left-6 w-32 h-32 bg-accent-orange-light/10 rounded-full animate-pulse"
                  style={{ animationDelay: "1s" }}
                ></div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <WaveSeparator />

      {/* Research Initiatives */}
      <section className="py-20 bg-dark-card relative">
        <ParticleBackground count={10} color="rgba(255, 140, 0, 0.05)" />
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <SectionHeading
              title="Research Initiatives"
              subtitle="Explore our groundbreaking R&D programs and innovations."
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ScrollReveal animation="fade-up" delay={100}>
              <TechnologyCard
                title="Genix Ocean Laboratories"
                description="Artificial ocean laboratories that revolve around luxury aquaculture, sustainable marine research, and astaxanthin production."
                imageSrc="/images/ocean_lab3.jpg"
                href="/research/genix"
              />
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={200}>
              <TechnologyCard
                title="Genix Carbon Solutions"
                description="Advanced marine-friendly carbon removal technologies including algae farms, optimized kelp forests, and deep CO₂ mineralization."
                imageSrc="/images/carbon_cap1.jpg"
                href="/research/genix/carbon"
              />
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={300}>
              <TechnologyCard
                title="Haematococcus pluvialis"
                description="India's first sustainable astaxanthin production from marine algae, delivering nature's most powerful and healthy antioxidant."
                imageSrc="/images/astax1.jpg"
                href="/research/genix/astaxanthin"
              />
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={400}>
              <TechnologyCard
                title="Genix Marine Restoration"
                description="Rebuilding of coastal ecosystems through proper mangrove reforestation and seagrass meadow revivals to create blue carbon sinks."
                imageSrc="/images/coral1.jpg"
                href="/research/marine-restoration"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      <WaveSeparator />

      {/* Featured Research */}
      <section className="py-20 bg-dark-surface relative">
        <ParticleBackground count={15} color="rgba(255, 140, 0, 0.05)" />
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <SectionHeading
              title="Featured Research"
              subtitle="Spotlight on our most innovative and impactful research projects."
            />
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={200}>
            <div className="bg-dark-card/50 rounded-lg overflow-hidden border border-dark-border/50 hover:border-accent-orange/30 transition-all duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="aspect-square relative">
                  <Image
                    src="/images/ocean_lab2.jpg"
                    alt="Genix Ocean Laboratories"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-dark-surface/80 to-transparent"></div>
                </div>

                <div className="p-8 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-accent-orange transition-colors duration-300">Genix: Artificial Ocean Laboratories</h3>
                  <p className="text-gray-300 mb-6">
                    Our flagship research initiative, GENIX, is revolutionizing luxury aquaculture and caviar farming in
                    India. Launching in 2026, this pioneering ecosystem is designed to cultivate high-value marine
                    species in controlled environments that perfectly simulate ocean conditions.
                  </p>
                  <p className="text-gray-300 mb-6">
                    Using AI-regulated systems to maintain optimal conditions, GENIX represents the future
                    of sustainable seafood production and improving marine biotechnology.
                  </p>
                  <Link
                    href="/research/genix"
                    className="inline-flex items-center text-accent-orange hover:text-accent-orange-light transition-colors duration-300"
                  >
                    Explore Genix Research <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                  <div className="flex flex-wrap gap-4 mt-4">
                    <Link
                      href="/research/genix/astaxanthin"
                      className="inline-flex items-center text-gray-400 hover:text-accent-orange transition-colors duration-300"
                    >
                      Astaxanthin Production <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                    <Link
                      href="/research/genix/carbon"
                      className="inline-flex items-center text-gray-400 hover:text-accent-orange transition-colors duration-300"
                    >
                      Carbon Solutions <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                    <Link
                      href="/research/marine-restoration"
                      className="inline-flex items-center text-gray-400 hover:text-accent-orange transition-colors duration-300"
                    >
                      Marine Restoration <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <WaveSeparator />

      {/* Research Publications */}
      <section className="py-20 bg-dark-card relative">
        <ParticleBackground count={10} color="rgba(255, 140, 0, 0.05)" />
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <SectionHeading
              title="Research Publications"
              subtitle="The scientific papers and technical reports from our research teams."
            />
          </ScrollReveal>

          <div className="space-y-6">
            {[
              {
                title: "Artificial Ocean Environments: Challenges and Opportunities in Controlled Marine Cultivation",
                authors: "Patel, R., Singh, A., & Johnson, M.",
                journal: "Journal of Marine Biotechnology",
                year: "2024",
                abstract:
                  "Explores the technical challenges and potential benefits of creating controlled artificial ocean environments for sustainable aquaculture and marine research.",
              },
              {
                title: "AI-Driven Underwater Welding: Precision Techniques for Deep Sea Infrastructure Maintenance",
                authors: "Sharma, V., Williams, K., & Chen, L.",
                journal: "International Journal of Marine Engineering",
                year: "2023",
                abstract:
                  "Comprehensive analysis of applications of AI in underwater welding operations, with focus on autonomous systems for deep sea infrastructure maintenance.",
              },
              {
                title: "Sustainable Spirulina Cultivation in Marine Environments: Nutritional Profile and Scalability",
                authors: "Gupta, S., Anderson, T., & Nakamura, H.",
                journal: "Algal Research",
                year: "2023",
                abstract:
                  "Focuses on examining the nutritional benefits and commercial scalability of spirulina grown from our methods compared to traditional cultivation methods.",
              },
              {
                title: "Water Quality Monitoring Systems for Coastal Ecosystems: A Comparative Analysis",
                authors: "Kumar, A., Martinez, J., & Lee, S.",
                journal: "Environmental Monitoring and Assessment",
                year: "2023",
                abstract:
                  "In-depth comparison of various water quality monitoring systems and their effectiveness in coastal ecosystem management.",
              },
            ].map((publication, index) => (
              <ScrollReveal key={index} animation="fade-up" delay={index * 100}>
                <div className="bg-dark-surface/50 p-6 rounded-lg border border-dark-border/50 hover:border-accent-orange/30 transition-all duration-300 group">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-accent-orange transition-colors duration-300">
                    {publication.title}
                  </h3>
                  <p className="text-accent-orange mb-2">{publication.authors}</p>
                  <p className="text-gray-400 mb-2">
                    {publication.journal} ({publication.year})
                  </p>
                  <p className="text-gray-300">{publication.abstract}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
