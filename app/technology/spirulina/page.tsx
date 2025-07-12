import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import SectionHeading from "@/components/section-heading"
import WaveSeparator from "@/components/wave-separator"
import ParticleBackground from "@/components/particle-background"
import ScrollReveal from "@/components/scroll-reveal"
import type { Metadata } from "next"

// SEO: Spirulina technology page metadata
export const metadata: Metadata = {
  title: "Spirulina Biotechnology | Sustainable Marine Cultivation Technology - Seaverse",
  description: "Discover Seaverse's revolutionary spirulina biotechnology for sustainable marine cultivation. From ancient superfood to future-proof nutrition with SEABLUE® Spirulina, AZURE™ Natural Blue, and NEUTRASEA® Algae Blends. Ocean-grown spirulina with 3x higher phycocyanin than land-grown alternatives.",
  keywords: [
    "spirulina biotechnology",
    "marine spirulina cultivation",
    "SEABLUE spirulina",
    "AZURE natural blue",
    "NEUTRASEA algae blends",
    "sustainable spirulina production",
    "ocean-grown spirulina",
    "phycocyanin spirulina",
    "marine algae technology",
    "spirulina biotech India",
    "sustainable nutrition technology",
    "marine superfood cultivation",
    "algae biotechnology",
    "spirulina research development",
    "ocean laboratory spirulina",
    "marine biotechnology solutions"
  ],
  openGraph: {
    title: "Spirulina Biotechnology | Sustainable Marine Cultivation - Seaverse",
    description: "Revolutionary spirulina biotechnology: SEABLUE® ocean-grown spirulina with 3x higher phycocyanin, AZURE™ natural blue coloring, and sustainable marine cultivation technology.",
    url: "https://seaverse.co/technology/spirulina",
    images: [
      {
        url: "/images/spiri.jpg",
        width: 1200,
        height: 630,
        alt: "Seaverse Spirulina Biotechnology - Sustainable Marine Cultivation",
      }
    ],
  },
  twitter: {
    title: "Spirulina Biotechnology | Sustainable Marine Cultivation",
    description: "Revolutionary ocean-grown spirulina with 3x higher phycocyanin. Sustainable marine biotechnology for future nutrition.",
    images: ["/images/spiri.jpg"],
  },
  alternates: {
    canonical: "https://seaverse.co/technology/spirulina",
  },
}

export default function SpirulinaPage() {
  // SEO: JSON-LD structured data for Spirulina products and technology
  const spirulinaProductsJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "SEABLUE® Spirulina Biotechnology",
    description: "Revolutionary ocean-grown spirulina cultivation technology with 3x higher phycocyanin than land-grown alternatives",
    brand: {
      "@type": "Brand",
      name: "Seaverse Technologies"
    },
    manufacturer: {
      "@type": "Organization",
      name: "Seaverse Technologies",
      url: "https://seaverse.co"
    },
    category: "Marine Biotechnology",
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "USD",
      seller: {
        "@type": "Organization",
        name: "Seaverse Technologies"
      }
    },
    hasVariant: [
      {
        "@type": "Product",
        name: "SEABLUE® Spirulina",
        description: "Ocean-grown spirulina with 3x higher phycocyanin, available in powder, tablets, and protein crisps"
      },
      {
        "@type": "Product", 
        name: "AZURE™ Natural Blue",
        description: "Plant-based food coloring that replaces synthetic FD&C Blue #1, heat stable and pH-resistant"
      },
      {
        "@type": "Product",
        name: "NEUTRASEA® Algae Blends",
        description: "Spirulina blends with chlorella, marine collagen, and lion's mane for specialized applications"
      }
    ]
  }

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://seaverse.co"
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Technology",
        item: "https://seaverse.co/technology"
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Spirulina Biotechnology",
        item: "https://seaverse.co/technology/spirulina"
      }
    ]
  }

  return (
    <>
      {/* SEO: JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(spirulinaProductsJsonLd),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd),
        }}
      />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden" role="banner">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/spirubread.jpg" 
            alt="Seaverse Spirulina Biotechnology - Sustainable Marine Cultivation Technology" 
            fill 
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark-surface/90 to-dark-surface/70" />
          <ParticleBackground count={20} />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center mt-20">
          <ScrollReveal animation="fade-up">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-space-grotesk bg-gradient-to-r from-accent-orange to-accent-orange-light bg-clip-text text-transparent">
              PROJECT SPIRULINA
            </h1>
          </ScrollReveal>
          <ScrollReveal animation="fade-up" delay={200}>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              From Ancient Superfood to Future-Proof Nutrition Technology
            </p>
          </ScrollReveal>
        </div>
      </section>

      <WaveSeparator />

      {/* The Spirulina Story */}
      <section className="py-20 bg-dark-surface relative" role="region" aria-labelledby="spirulina-story">
        <ParticleBackground count={15} color="rgba(255, 140, 0, 0.05)" />
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal animation="fade-right">
              <div>
                <h2 id="spirulina-story" className="text-3xl font-bold text-accent-orange mb-6">The Story of Spirulina: Nature's Ancient Superfood</h2>
                <div className="bg-dark-card/50 p-6 rounded-lg border border-dark-border/50 hover:border-accent-orange/30 transition-all duration-300 mb-6">
                  <h3 className="text-2xl font-bold text-accent-orange mb-3">The OG Superfood – Now, Smarter Than Ever</h3>
                  <p className="text-gray-300">
                    Transforming Earth's most nutrient-dense organism, formerly fed to Aztec warriors and investigated by NASA for space flight, to meet current challenges through advanced marine biotechnology.
                  </p>
                </div>

                <h3 className="text-xl font-bold text-accent-orange mb-4">What is Spirulina?</h3>
                <p className="text-gray-300 mb-4">
                  <em>A 3.5 billion year old cyanobacterium that:</em>
                </p>

                <ul className="space-y-4 mb-6" role="list">
                  {[
                    "Contains 60-70% complete protein (compared to 20% in beef)",
                    "Brings 40x more iron than spinach",
                    "Provides 100+ bioavailable nutrients"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start group">
                      <div className="p-2 bg-accent-orange/10 rounded-lg mr-3 group-hover:bg-accent-orange/20 transition-colors duration-300">
                        <Check className="text-accent-orange" size={18} aria-hidden="true" />
                      </div>
                      <span className="text-gray-300 group-hover:text-white transition-colors duration-300">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="bg-dark-card/50 p-4 rounded-lg border border-dark-border/50 hover:border-accent-orange/30 transition-all duration-300">
                  <p className="text-accent-orange italic">
                    "The French called it 'the food of the future' in the 1970s... they just didn't have our marine technology to scale
                    it out properly."
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-left" delay={200}>
              <div className="relative">
                <div className="aspect-square relative rounded-lg overflow-hidden border border-dark-border/50 hover:border-accent-orange/30 transition-all duration-300">
                  <Image
                    src="/images/greenbread.jpg"
                    alt="Spirulina microscope view - marine biotechnology cultivation"
                    fill
                    className="object-cover"
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-accent-orange/10 rounded-full animate-pulse" aria-hidden="true"></div>
                <div
                  className="absolute -top-6 -left-6 w-32 h-32 bg-accent-orange/10 rounded-full animate-pulse"
                  style={{ animationDelay: "1s" }}
                  aria-hidden="true"
                ></div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <WaveSeparator />

      {/* Our Spirulina Products */}
      <section className="py-20 bg-dark-card relative" role="region" aria-labelledby="spirulina-products">
        <ParticleBackground count={10} color="rgba(255, 140, 0, 0.05)" />
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <SectionHeading
              title="Our Spirulina Products"
              subtitle="Innovative marine biotechnology solutions for various nutritional and industrial applications."
              centered
            />
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={200}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "SEABLUE® Spirulina",
                  subtitle: "The world's cleanest blue-green algae",
                  image: "/images/blue2.jpg",
                  features: [
                    "Grown in solar-powered oceanic pods",
                    "3x higher in phycocyanin than land-grown",
                    "Available in powder, tablets and protein crisps"
                  ]
                },
                {
                  title: "AZURE™ Natural Blue",
                  subtitle: "Plant-based food coloring, that's actually healthy",
                  image: "/images/blue.jpg",
                  features: [
                    "Replaces synthetic FD&C Blue #1",
                    "Used in ice creams, candies, beverages",
                    "Heat stable and pH-resistant"
                  ]
                },
                {
                  title: "NEUTRASEA® Algae Blends",
                  subtitle: '"A water-growing multivitamin"',
                  image: "/images/biotech.jpg",
                  features: [
                    "Spirulina + chlorella for detox",
                    "Spirulina + marine collagen for beauty",
                    "Spirulina + lion's mane for focus"
                  ]
                }
              ].map((product, index) => (
                <article key={index} className="bg-dark-surface/50 rounded-lg overflow-hidden border border-dark-border/50 hover:border-accent-orange/30 transition-all duration-300 group">
                  <div className="aspect-video relative">
                    <Image
                      src={product.image}
                      alt={`${product.title} - ${product.subtitle}`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-surface to-transparent"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent-orange transition-colors duration-300">{product.title}</h3>
                    <p className="text-gray-300 mb-4">{product.subtitle}</p>
                    <ul className="space-y-3" role="list">
                      {product.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <div className="p-1.5 bg-accent-orange/10 rounded-lg mr-3 group-hover:bg-accent-orange/20 transition-colors duration-300">
                            <Check className="text-accent-orange" size={16} aria-hidden="true" />
                          </div>
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <WaveSeparator />

      {/* Why Our Spirulina Wins */}
      <section className="py-20 bg-dark-surface relative" role="region" aria-labelledby="spirulina-comparison">
        <ParticleBackground count={15} color="rgba(255, 140, 0, 0.05)" />
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <SectionHeading
              title="Why Our Spirulina Wins"
              subtitle="Comparison between traditional farming methods and our innovative marine biotechnology approach."
            />
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={200}>
            <div className="overflow-x-auto">
              <table className="w-full bg-dark-card/50 rounded-lg overflow-hidden border border-dark-border/50" role="table" aria-label="Spirulina cultivation comparison">
                <thead>
                  <tr className="bg-dark-surface/50">
                    <th className="px-6 py-4 text-left text-white" scope="col">Traditional Farms</th>
                    <th className="px-6 py-4 text-left text-white" scope="col">SEAVERSE Ocean-Grown</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      traditional: "Grows in concrete tanks",
                      seaverse: "Cultivated in mineral-rich seawater"
                    },
                    {
                      traditional: "Risk of heavy metals",
                      seaverse: "Lab-tested purity guaranteed"
                    },
                    {
                      traditional: "4 harvests per year",
                      seaverse: "12 continuous harvests"
                    },
                    {
                      traditional: "Earthy taste",
                      seaverse: "Mild and nutty flavor profile"
                    }
                  ].map((row, index) => (
                    <tr key={index} className="border-t border-accent-orange/30 hover:bg-dark-surface/30 transition-colors duration-300">
                      <td className="px-6 py-4 text-gray-300">{row.traditional}</td>
                      <td className="px-6 py-4 text-accent-orange font-medium">{row.seaverse}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <WaveSeparator />

      {/* Where We're Scaling */}
      <section className="py-20 bg-dark-surface relative" role="region" aria-labelledby="scaling-strategy">
        <ParticleBackground count={10} color="rgba(255, 140, 0, 0.05)" />
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <SectionHeading
              title="Where We Will Be Scaling?"
              subtitle="Our global expansion strategy for sustainable spirulina cultivation technology."
            />
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={200}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-accent-orange mb-6">Current Sites</h3>
                <div className="space-y-6">
                  <div className="bg-dark-surface/50 p-6 rounded-lg border border-accent-orange">
                    <h4 className="text-xl font-bold text-white mb-2">Mangalore, IN</h4>
                    <p className="text-gray-300">Advanced technology-based spirulina cultivation setup with marine biotechnology integration</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-accent-orange mb-6">2026 Launches</h3>
                <div className="space-y-6">
                  <div className="bg-dark-surface/50 p-6 rounded-lg border border-accent-orange">
                    <h4 className="text-xl font-bold text-white mb-2">Norway</h4>
                    <p className="text-gray-300">Arctic-grown spirulina with higher Omega-3 content for premium markets</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <WaveSeparator />

      {/* Who Needs This */}
      <section className="py-20 bg-dark-surface relative" role="region" aria-labelledby="target-markets">
        <ParticleBackground count={15} color="rgba(255, 140, 0, 0.05)" />
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <SectionHeading
              title="Who Needs This?"
              subtitle="Target markets and applications for our spirulina biotechnology products."
            />
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={200}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-accent-orange mb-6">B2B Partners</h3>
                <div className="space-y-4">
                  <article className="bg-dark-surface/50 p-4 rounded-lg">
                    <h4 className="text-lg font-bold text-white mb-2">Food Brands</h4>
                    <p className="text-gray-300">"Could make your protein bars 300% more sustainable"</p>
                  </article>

                  <article className="bg-dark-surface/50 p-4 rounded-lg">
                    <h4 className="text-lg font-bold text-white mb-2">Beauty Companies</h4>
                    <p className="text-gray-300">"Can swap synthetic blue pigments for our AZURE™"</p>
                  </article>

                  <article className="bg-dark-surface/50 p-4 rounded-lg">
                    <h4 className="text-lg font-bold text-white mb-2">Governments</h4>
                    <p className="text-gray-300">"Can reduce the burden of school meals for $0.02/serving"</p>
                  </article>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-accent-orange mb-6">Direct Consumers</h3>
                <div className="space-y-4">
                  <article className="bg-dark-surface/50 p-4 rounded-lg">
                    <h4 className="text-lg font-bold text-white mb-2">Biohackers</h4>
                    <p className="text-gray-300">"An original smart nootropic"</p>
                  </article>

                  <article className="bg-dark-surface/50 p-4 rounded-lg">
                    <h4 className="text-lg font-bold text-white mb-2">Vegan Athletes</h4>
                    <p className="text-gray-300">"Complete protein intake without bloating"</p>
                  </article>

                  <article className="bg-dark-surface/50 p-4 rounded-lg">
                    <h4 className="text-lg font-bold text-white mb-2">Eco-Parents</h4>
                    <p className="text-gray-300">"A hidden vegetarian boost for picky eaters"</p>
                  </article>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <WaveSeparator />

      {/* Try the Difference */}
      <section className="py-20 bg-dark-surface relative" role="region" aria-labelledby="try-spirulina">
        <ParticleBackground count={10} color="rgba(255, 140, 0, 0.05)" />
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal>
            <SectionHeading
              title="Try the Difference"
              subtitle="Experience the quality and benefits of our ocean-grown spirulina biotechnology products."
              centered
            />
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={200}>
            <div className="grid grid-cols-1 md:grid-cols-1 gap-8 max-w-3xl mx-auto">
              <div className="bg-dark-surface/50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-white mb-4">For Businesses</h3>
                <div className="space-y-4">
                  <a href="mailto:seaversetechnology@gmail.com?subject=Spirulina Products Sample Request" className="w-full">
                    <Button className="w-full bg-accent-orange hover:bg-accent-orange/80 text-white">
                     Request Sample Kit
                   </Button>
                  </a>
                  <Button
                    variant="outline"
                    className="w-full border-accent-orange text-accent-orange hover:bg-accent-orange hover:text-white"
                    aria-label="Download spirulina biotechnology white paper"
                  >
                    White Paper Download
                  </Button>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <p className="text-gray-300 text-lg font-medium max-w-2xl mx-auto">
                "This is not just algae. It is one of the most efficient nutrition systems ever designed through marine biotechnology, and we're just getting started."
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
