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
          <div className="absolute inset-0 bg-dark-sapphire/80" />
          <ParticleBackground count={20} />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center mt-20">
          <ScrollReveal animation="fade-up">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-space-grotesk">GENIX</h1>
          </ScrollReveal>
          <ScrollReveal animation="fade-up" delay={200}>
            <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto">
             Research Unit of Seaverse
            </p>
          </ScrollReveal>
        </div>
      </section>


      <WaveSeparator />

      {/* Research Overview */}
      <section className="py-20 bg-abyssal-teal relative">
        <ParticleBackground count={15} color="rgba(1, 46, 64, 0.2)" />
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal animation="fade-right">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Pioneering Marine Research</h2>
                <p className="text-white/80 mb-6">
                  At Seaverse, research and innovation are at the core of everything we do. Our dedicated teams work
                  tirelessly to push the boundaries of marine technology, developing solutions that address critical
                  underwater challenges while preserving our ocean ecosystems.
                </p>

                <p className="text-white/80 mb-6">
                  From artificial ocean laboratories to advanced underwater robotics, our research initiatives span a
                  wide range of disciplines, combining expertise in marine engineering, oceanography, biotechnology, and
                  artificial intelligence.
                </p>

                <div className="bg-dark-sapphire/30 p-4 border-l-4 border-coral-orange rounded">
                  <h3 className="text-xl font-bold text-white mb-2">Our Approach</h3>
                  <p className="text-white/80">
                    We believe in collaborative, interdisciplinary research that bridges the gap between scientific
                    discovery and practical application, creating technologies that make a real-world impact.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-left" delay={200}>
              <div className="relative">
                <div className="aspect-video relative rounded-lg overflow-hidden">
                  <Image
                    src="/images/ocean_lab.jpg"
                    alt="Seaverse Research Lab"
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
            </ScrollReveal>
          </div>
        </div>
      </section>

      <WaveSeparator color="abyssal-teal" />

      {/* Research Initiatives */}
      <section className="py-20 bg-dark-sapphire relative">
        <ParticleBackground count={10} />
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <SectionHeading
              title="Research Initiatives"
              subtitle="Explore our groundbreaking research programs and innovations."
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ScrollReveal animation="fade-up" delay={100}>
              <TechnologyCard
                title="Genix Ocean Laboratories"
                description="Artificial ocean laboratories revolutionizing luxury aquaculture, sustainable marine research, and astaxanthin production."
                imageSrc="/images/ocean_lab3.jpg"
                href="/research/genix"
              />
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={200}>
              <TechnologyCard
                title="Genix Carbon Solutions"
                description="Advanced marine-based carbon removal technologies including algae farms, AI-optimized kelp forests, and deep-sea CO₂ mineralization."
                imageSrc="/images/carbon_cap1.jpg"
                href="/research/genix/carbon"
              />
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={300}>
              <TechnologyCard
                title="Haematococcus pluvialis"
                description="India's first sustainable astaxanthin production from marine algae, delivering nature's most powerful antioxidant."
                imageSrc="/images/astax1.jpg"
                href="/research/genix/astaxanthin"
              />
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={400}>
              <TechnologyCard
                title="Genix Marine Restoration"
                description="Rebuilding coastal ecosystems through smart mangrove reforestation and seagrass meadow revival to create blue carbon sinks."
                imageSrc="/images/coral1.jpg"
                href="/research/marine-restoration"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      <WaveSeparator />

      {/* Featured Research */}
      <section className="py-20 bg-abyssal-teal relative">
        <ParticleBackground count={15} color="rgba(1, 46, 64, 0.2)" />
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <SectionHeading
              title="Featured Research"
              subtitle="Spotlight on our most innovative and impactful research projects."
            />
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={200}>
            <div className="bg-dark-sapphire/30 rounded-lg overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="aspect-square relative">
                  <Image
                    src="/images/ocean_lab2.jpg"
                    alt="Genix Ocean Laboratories"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-dark-sapphire/80 to-transparent"></div>
                </div>

                <div className="p-8 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold text-white mb-4">Genix: Artificial Ocean Laboratories</h3>
                  <p className="text-white/80 mb-6">
                    Our flagship research initiative, Genix is revolutionizing luxury aquaculture and caviar farming in
                    India. Launching in 2026, this pioneering ecosystem is designed to cultivate high-value marine
                    species in controlled environments that perfectly simulate ocean conditions.
                  </p>
                  <p className="text-white/80 mb-6">
                    Using AI-regulated systems to monitor and maintain optimal conditions, Genix represents the future
                    of sustainable seafood production and marine biotechnology.
                  </p>
                  <Link
                    href="/research/genix"
                    className="inline-flex items-center text-coral-orange hover:text-white transition-colors"
                  >
                    Explore Genix Research <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                  <div className="flex flex-wrap gap-4 mt-4">
                    <Link
                      href="/research/genix/astaxanthin"
                      className="inline-flex items-center text-seafoam-blue hover:text-white transition-colors"
                    >
                      Astaxanthin Production <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                    <Link
                      href="/research/genix/carbon"
                      className="inline-flex items-center text-seafoam-blue hover:text-white transition-colors"
                    >
                      Carbon Solutions <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                    <Link
                      href="/research/marine-restoration"
                      className="inline-flex items-center text-seafoam-blue hover:text-white transition-colors"
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

      <WaveSeparator color="abyssal-teal" />

      {/* Research Publications */}
      <section className="py-20 bg-dark-sapphire relative">
        <ParticleBackground count={10} />
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <SectionHeading
              title="Research Publications"
              subtitle="Scientific papers and technical reports from our research teams."
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
                  "This paper explores the technical challenges and potential benefits of creating controlled artificial ocean environments for sustainable aquaculture and marine research.",
              },
              {
                title: "AI-Driven Underwater Welding: Precision Techniques for Deep Sea Infrastructure Maintenance",
                authors: "Sharma, V., Williams, K., & Chen, L.",
                journal: "International Journal of Marine Engineering",
                year: "2023",
                abstract:
                  "A comprehensive analysis of artificial intelligence applications in underwater welding operations, with a focus on autonomous systems for deep sea infrastructure maintenance.",
              },
              {
                title: "Sustainable Spirulina Cultivation in Marine Environments: Nutritional Profile and Scalability",
                authors: "Gupta, S., Anderson, T., & Nakamura, H.",
                journal: "Algal Research",
                year: "2023",
                abstract:
                  "This study examines the nutritional benefits and commercial scalability of marine-grown spirulina compared to traditional cultivation methods.",
              },
              {
                title: "Water Quality Monitoring Systems for Coastal Ecosystems: A Comparative Analysis",
                authors: "Kumar, A., Martinez, J., & Lee, S.",
                journal: "Environmental Monitoring and Assessment",
                year: "2022",
                abstract:
                  "An evaluation of various water quality monitoring technologies and their effectiveness in detecting and preventing environmental issues in coastal regions.",
              },
            ].map((publication, index) => (
              <ScrollReveal key={index} animation="fade-up" delay={index * 100}>
                <div className="bg-abyssal-teal/20 p-6 rounded-lg hover:bg-abyssal-teal/40 transition-all duration-300">
                  <h3 className="text-xl font-bold text-white mb-2">{publication.title}</h3>
                  <p className="text-seafoam-blue mb-2">{publication.authors}</p>
                  <p className="text-white/70 mb-4">
                    <span className="italic">{publication.journal}</span>, {publication.year}
                  </p>
                  <p className="text-white/70 mb-4">{publication.abstract}</p>
                 {/* <Button
                    variant="outline"
                    className="border-seafoam-blue text-seafoam-blue hover:bg-seafoam-blue hover:text-white"
                  >
                    Dow nload PDF
                  </Button> */}
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* <ScrollReveal animation="fade-up" delay={500} className="mt-8 text-center">
            <Button className="bg-coral-orange hover:bg-coral-orange/80 text-white">View All Publications</Button>
          </ScrollReveal> */}
        </div>
      </section>

      {/* <WaveSeparator /> */}

      {/* Research Partners */}
      {/* <section className="py-20 bg-abyssal-teal relative">
        <ParticleBackground count={15} color="rgba(1, 46, 64, 0.2)" />
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <SectionHeading
              title="Research Partners"
              subtitle="Collaborating with leading institutions to advance marine science and technology."
              centered
            />
          </ScrollReveal>

          <ScrollReveal
            animation="stagger"
            className="stagger-reveal grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8"
          >
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="bg-dark-sapphire/30 p-4 rounded-lg flex items-center justify-center group hover:bg-dark-sapphire/50 transition-colors duration-300 animate-float"
                style={{ animationDelay: `${i * 0.2}s` }}
              >
                <Image
                  src={`/placeholder.svg?height=100&width=200&text=Partner ${i + 1}`}
                  alt={`Research Partner ${i + 1}`}
                  width={120}
                  height={60}
                  className="opacity-50 group-hover:opacity-100 transition-opacity duration-300 filter grayscale group-hover:grayscale-0"
                />
              </div>
            ))}
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={400} className="mt-12 text-center">
            <p className="text-white/80 mb-6 max-w-2xl mx-auto">
              Interested in collaborating with our research teams? We're always open to partnerships with academic
              institutions, industry leaders, and research organizations.
            </p>
            <Button className="bg-coral-orange hover:bg-coral-orange/80 text-white">Become a Research Partner</Button>
          </ScrollReveal>
        </div>
      </section> */}
    </>
  )
}
