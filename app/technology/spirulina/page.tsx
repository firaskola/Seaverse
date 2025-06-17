import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import SectionHeading from "@/components/section-heading"
import WaveSeparator from "@/components/wave-separator"
import ParticleBackground from "@/components/particle-background"
import ScrollReveal from "@/components/scroll-reveal"

export default function SpirulinaPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/images/spirubread.jpg" alt="Spirulina Biotech" fill className="object-cover" />
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
              From Ancient Superfood to Future-Proof Nutrition
            </p>
          </ScrollReveal>
        </div>
      </section>

      <WaveSeparator />

      {/* The Spirulina Story */}
      <section className="py-20 bg-dark-surface relative">
        <ParticleBackground count={15} color="rgba(255, 140, 0, 0.05)" />
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal animation="fade-right">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">The Spirulina Story: Nature's Oldest Superfood</h2>
                <div className="bg-dark-card/50 p-6 rounded-lg border border-dark-border/50 hover:border-accent-orange/30 transition-all duration-300 mb-6">
                  <h3 className="text-2xl font-bold text-white mb-3">The Original Superfood – Now Smarter Than Ever</h3>
                  <p className="text-gray-300">
                    Fed to Aztec warriors, studied by NASA for space travel – we're reinventing Earth's most
                    nutrient-dense organism for modern challenges.
                  </p>
                </div>

                <h3 className="text-xl font-bold text-white mb-4">What is Spirulina?</h3>
                <p className="text-gray-300 mb-4">
                  <em>A 3.5-billion-year-old cyanobacterium that:</em>
                </p>

                <ul className="space-y-4 mb-6">
                  {[
                    "Contains 60-70% complete protein (vs. 20% in beef)",
                    "Packs 40x more iron than spinach",
                    "Delivers 100+ bioavailable nutrients"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start group">
                      <div className="p-2 bg-accent-orange/10 rounded-lg mr-3 group-hover:bg-accent-orange/20 transition-colors duration-300">
                        <Check className="text-accent-orange" size={18} />
                      </div>
                      <span className="text-gray-300 group-hover:text-white transition-colors duration-300">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="bg-dark-card/50 p-4 rounded-lg border border-dark-border/50 hover:border-accent-orange/30 transition-all duration-300">
                  <p className="text-accent-orange italic">
                    "The French called it 'the food of the future' in the 1970s... they just didn't have our tech to scale
                    it properly."
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-left" delay={200}>
              <div className="relative">
                <div className="aspect-square relative rounded-lg overflow-hidden border border-dark-border/50 hover:border-accent-orange/30 transition-all duration-300">
                  <Image
                    src="/images/greenbread.jpg"
                    alt="Spirulina microscope view"
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

      {/* Our Spirulina Products */}
      <section className="py-20 bg-dark-card relative">
        <ParticleBackground count={10} color="rgba(255, 140, 0, 0.05)" />
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <SectionHeading
              title="Our Spirulina Products"
              subtitle="Innovative marine-based nutrition solutions for various applications."
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
                    "Grown in: Solar-powered ocean pods",
                    "Key Benefit: 3x higher phycocyanin (anti-inflammatory compound) than land-grown",
                    "Forms: Powder, tablets, protein crisps"
                  ]
                },
                {
                  title: "AZURE™ Natural Blue",
                  subtitle: "Plant-based food coloring that's actually healthy",
                  image: "/images/blue.jpg",
                  features: [
                    "Replaces: Synthetic FD&C Blue #1",
                    "Used in: Ice creams, candies, beverages",
                    "Why Chefs Love It: Stable at high heat, pH-resistant"
                  ]
                },
                {
                  title: "NEUTRASEA® Algae Blends",
                  subtitle: '"The multivitamin that grows on water"',
                  image: "/images/biotech.jpg",
                  features: [
                    "Spirulina + chlorella for detox",
                    "Spirulina + marine collagen for beauty",
                    "Spirulina + lion's mane for focus"
                  ]
                }
              ].map((product, index) => (
                <div key={index} className="bg-dark-surface/50 rounded-lg overflow-hidden border border-dark-border/50 hover:border-accent-orange/30 transition-all duration-300 group">
                  <div className="aspect-video relative">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-surface to-transparent"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent-orange transition-colors duration-300">{product.title}</h3>
                    <p className="text-gray-300 mb-4">{product.subtitle}</p>
                    <ul className="space-y-3">
                      {product.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <div className="p-1.5 bg-accent-orange/10 rounded-lg mr-3 group-hover:bg-accent-orange/20 transition-colors duration-300">
                            <Check className="text-accent-orange" size={16} />
                          </div>
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <WaveSeparator />

      {/* Why Our Spirulina Wins */}
      <section className="py-20 bg-dark-surface relative">
        <ParticleBackground count={15} color="rgba(255, 140, 0, 0.05)" />
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <SectionHeading
              title="Why Our Spirulina Wins"
              subtitle="A comparison between traditional farming methods and our innovative ocean-grown approach."
            />
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={200}>
            <div className="overflow-x-auto">
              <table className="w-full bg-dark-card/50 rounded-lg overflow-hidden border border-dark-border/50">
                <thead>
                  <tr className="bg-dark-surface/50">
                    <th className="px-6 py-4 text-left text-white">Traditional Farms</th>
                    <th className="px-6 py-4 text-left text-white">SEAVERSE Ocean-Grown</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      traditional: "Grows in concrete tanks",
                      seaverse: "Thrives in mineral-rich seawater"
                    },
                    {
                      traditional: "Risk of heavy metals",
                      seaverse: "Lab-tested purity guarantee"
                    },
                    {
                      traditional: "4 harvests/year",
                      seaverse: "12 continuous harvests"
                    },
                    {
                      traditional: "Earthy taste",
                      seaverse: "Mild, nutty flavor profile"
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
      <section className="py-20 bg-dark-surface relative">
        <ParticleBackground count={10} color="rgba(255, 140, 0, 0.05)" />
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <SectionHeading
              title="Where We Will Be Scaling"
              subtitle="Our global expansion strategy for sustainable spirulina cultivation."
            />
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={200}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Current Sites</h3>
                <div className="space-y-6">
                  <div className="bg-dark-surface/50 p-6 rounded-lg">
                    <h4 className="text-xl font-bold text-white mb-2">Manglore</h4>
                    <p className="text-gray-300">Advance Technology based Spirulina Cultivation setup</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-6">2026 Launches</h3>
                <div className="space-y-6">
                  <div className="bg-dark-surface/50 p-6 rounded-lg">
                    <h4 className="text-xl font-bold text-white mb-2">Norway</h4>
                    <p className="text-gray-300">Arctic-grown spirulina (higher Omega-3s)</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <WaveSeparator />

      {/* Who Needs This */}
      <section className="py-20 bg-dark-surface relative">
        <ParticleBackground count={15} color="rgba(255, 140, 0, 0.05)" />
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <SectionHeading
              title="Who Needs This"
              subtitle="Target markets and applications for our spirulina products."
            />
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={200}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">B2B Partners</h3>
                <div className="space-y-4">
                  <div className="bg-dark-surface/50 p-4 rounded-lg">
                    <h4 className="text-lg font-bold text-white mb-2">Food Brands</h4>
                    <p className="text-gray-300">"Make your protein bars 300% more sustainable"</p>
                  </div>

                  <div className="bg-dark-surface/50 p-4 rounded-lg">
                    <h4 className="text-lg font-bold text-white mb-2">Beauty Companies</h4>
                    <p className="text-gray-300">"Swap synthetic blue pigments for our AZURE™"</p>
                  </div>

                  <div className="bg-dark-surface/50 p-4 rounded-lg">
                    <h4 className="text-lg font-bold text-white mb-2">Governments</h4>
                    <p className="text-gray-300">"Fortify school meals for $0.02/serving"</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Direct Consumers</h3>
                <div className="space-y-4">
                  <div className="bg-dark-surface/50 p-4 rounded-lg">
                    <h4 className="text-lg font-bold text-white mb-2">Biohackers</h4>
                    <p className="text-gray-300">"The original nootropic"</p>
                  </div>

                  <div className="bg-dark-surface/50 p-4 rounded-lg">
                    <h4 className="text-lg font-bold text-white mb-2">Vegan Athletes</h4>
                    <p className="text-gray-300">"Complete protein without the bloat"</p>
                  </div>

                  <div className="bg-dark-surface/50 p-4 rounded-lg">
                    <h4 className="text-lg font-bold text-white mb-2">Eco-Parents</h4>
                    <p className="text-gray-300">"Hidden veggie boost for picky eaters"</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <WaveSeparator />

      {/* Collaborations */}
      <section className="py-20 bg-dark-surface relative">
        <ParticleBackground count={10} color="rgba(255, 140, 0, 0.05)" />
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <SectionHeading
              title="Collaborations Driving Change"
              subtitle="Strategic partnerships advancing spirulina innovation and applications."
              centered
            />
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={200}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-dark-surface/50 p-6 rounded-lg hover:bg-dark-surface/30 transition-all duration-300 hover:-translate-y-1">
                <h3 className="text-xl font-bold text-white mb-3">With NASA</h3>
                <p className="text-gray-300">Testing our space-grown strain for Mars missions</p>
              </div>

              <div className="bg-dark-surface/50 p-6 rounded-lg hover:bg-dark-surface/30 transition-all duration-300 hover:-translate-y-1">
                <h3 className="text-xl font-bold text-white mb-3">With UNICEF</h3>
                <p className="text-gray-300">Combating childhood anemia in Malawi</p>
              </div>

              <div className="bg-dark-surface/50 p-6 rounded-lg hover:bg-dark-surface/30 transition-all duration-300 hover:-translate-y-1">
                <h3 className="text-xl font-bold text-white mb-3">With L'Oréal</h3>
                <p className="text-gray-300">Replacing microplastics in cosmetics with algae beads</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <WaveSeparator />

      {/* The Proof */}
      <section className="py-20 bg-dark-surface relative">
        <ParticleBackground count={15} color="rgba(255, 140, 0, 0.05)" />
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <SectionHeading
              title="The Proof"
              subtitle="Clinical evidence and customer testimonials supporting our spirulina products."
            />
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={200}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Clinical Highlights</h3>
                <div className="space-y-6">
                  <div className="bg-dark-surface/50 p-6 rounded-lg">
                    <div className="flex items-center mb-4">
                      <div className="w-16 h-16 rounded-full bg-accent-orange/20 flex items-center justify-center mr-4">
                        <span className="text-2xl font-bold text-accent-orange">12%</span>
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-white">Faster Recovery</h4>
                        <p className="text-gray-300 text-sm">University of Tokyo study</p>
                      </div>
                    </div>
                    <p className="text-gray-300">
                      Athletes supplementing with our spirulina showed 12% faster recovery times after intense training.
                    </p>
                  </div>

                  <div className="bg-dark-surface/50 p-6 rounded-lg">
                    <div className="flex items-center mb-4">
                      <div className="w-16 h-16 rounded-full bg-accent-orange/20 flex items-center justify-center mr-4">
                        <span className="text-2xl font-bold text-accent-orange">37%</span>
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-white">Allergy Reduction</h4>
                        <p className="text-gray-300 text-sm">Brazilian clinical trial</p>
                      </div>
                    </div>
                    <p className="text-gray-300">
                      Participants experienced a 37% reduction in allergy symptoms when taking our spirulina daily.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Customers Love</h3>
                <div className="space-y-6">
                  <div className="bg-dark-surface/50 p-6 rounded-lg">
                    <div className="flex items-start mb-4">
                      <div>
                        <h4 className="text-lg font-bold text-white">Sarah K.</h4>
                        <p className="text-accent-orange text-sm">Fitness Coach</p>
                      </div>
                    </div>
                    <p className="text-gray-300 italic">
                      "I've tried every spirulina on the market, and SEABLUE is in a different league. No fishy taste, and
                      my clients actually stick with it because it's so easy to use."
                    </p>
                  </div>

                  <div className="bg-dark-surface/50 p-6 rounded-lg">
                    <div className="flex items-start mb-4">
                      <div>
                        <h4 className="text-lg font-bold text-white">Michael T.</h4>
                        <p className="text-accent-orange text-sm">Pastry Chef</p>
                      </div>
                    </div>
                    <p className="text-gray-300 italic">
                      "AZURE has revolutionized my desserts. Finally, a natural blue that doesn't break down during baking
                      and actually adds nutritional value."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <WaveSeparator />

      {/* Try the Difference */}
      <section className="py-20 bg-dark-surface relative">
        <ParticleBackground count={10} color="rgba(255, 140, 0, 0.05)" />
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal>
            <SectionHeading
              title="Try the Difference"
              subtitle="Experience the superior quality and benefits of our ocean-grown spirulina products."
              centered
            />
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={200}>
            <div className="grid grid-cols-1 md:grid-cols-1 gap-8 max-w-3xl mx-auto">
              <div className="bg-dark-surface/50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-white mb-4">For Businesses</h3>
                <div className="space-y-4">
                  <a href="mailto:seaversetechnology@gmail.com?subject=Order Spirulina Products" className="w-full">
                    <Button className="w-full bg-accent-orange hover:bg-accent-orange/80 text-white">
                     Request Sample Kit
                   </Button>
                  </a>
                  <Button
                    variant="outline"
                    className="w-full border-accent-orange text-accent-orange hover:bg-accent-orange hover:text-white"
                  >
                    White Paper Download
                  </Button>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <p className="text-gray-300 text-lg font-medium max-w-2xl mx-auto">
                "This isn't just algae. It's the most efficient nutrition system ever designed – and we're just getting
                started."
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
