import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import SectionHeading from "@/components/section-heading"
import WaveSeparator from "@/components/wave-separator"
import ParticleBackground from "@/components/particle-background"

export default function SpirulinaPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/images/spirubread.jpg" alt="Spirulina Biotech" fill className="object-cover" />
          <div className="absolute inset-0 bg-dark-sapphire/80" />
          <ParticleBackground count={20} />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center mt-20">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-space-grotesk">
            PROJECT SPIRULINA
          </h1>
          <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto">
            From Ancient Superfood to Future-Proof Nutrition
          </p>
        </div>
      </section>

      <WaveSeparator />

      {/* The Spirulina Story */}
      <section className="py-20 bg-abyssal-teal relative">
        <ParticleBackground count={15} color="rgba(1, 46, 64, 0.2)" />
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">The Spirulina Story: Nature's Oldest Superfood</h2>
              <div className="bg-dark-sapphire/30 p-6 rounded-lg mb-6">
                <h3 className="text-2xl font-bold text-white mb-3">The Original Superfood – Now Smarter Than Ever</h3>
                <p className="text-white/80">
                  Fed to Aztec warriors, studied by NASA for space travel – we're reinventing Earth's most
                  nutrient-dense organism for modern challenges.
                </p>
              </div>

              <h3 className="text-xl font-bold text-white mb-4">What is Spirulina?</h3>
              <p className="text-white/80 mb-4">
                <em>A 3.5-billion-year-old cyanobacterium that:</em>
              </p>

              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <Check className="text-coral-orange mr-2 mt-1 flex-shrink-0" size={18} />
                  <span className="text-white/80">Contains 60-70% complete protein (vs. 20% in beef)</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-coral-orange mr-2 mt-1 flex-shrink-0" size={18} />
                  <span className="text-white/80">Packs 40x more iron than spinach</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-coral-orange mr-2 mt-1 flex-shrink-0" size={18} />
                  <span className="text-white/80">Delivers 100+ bioavailable nutrients</span>
                </li>
              </ul>

              <div className="bg-seafoam-blue/20 p-4 rounded-lg">
                <p className="text-white/90 italic">
                  "The French called it 'the food of the future' in the 1970s... they just didn't have our tech to scale
                  it properly."
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square relative rounded-lg overflow-hidden">
                <Image
                  src="/images/greenbread.jpg"
                  alt="Spirulina microscope view"
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
          </div>
        </div>
      </section>

      <WaveSeparator color="abyssal-teal" />

      {/* Our Spirulina Products */}
      <section className="py-20 bg-dark-sapphire relative">
        <ParticleBackground count={10} />
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Our Spirulina Products"
            subtitle="Innovative marine-based nutrition solutions for various applications."
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-abyssal-teal/20 rounded-lg overflow-hidden">
              <div className="aspect-video relative">
                <Image
                  src="/images/blue2.jpg"
                  alt="SEABLUE Spirulina"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-sapphire to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">SEABLUE® Spirulina</h3>
                <p className="text-white/70 mb-4">The world's cleanest blue-green algae</p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <Check className="text-coral-orange mr-2 mt-1 flex-shrink-0" size={16} />
                    <span className="text-white/70 text-sm">Grown in: Solar-powered ocean pods</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-coral-orange mr-2 mt-1 flex-shrink-0" size={16} />
                    <span className="text-white/70 text-sm">
                      Key Benefit: 3x higher phycocyanin (anti-inflammatory compound) than land-grown
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-coral-orange mr-2 mt-1 flex-shrink-0" size={16} />
                    <span className="text-white/70 text-sm">Forms: Powder, tablets, protein crisps</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-abyssal-teal/20 rounded-lg overflow-hidden">
              <div className="aspect-video relative">
                <Image
                  src="/images/blue.jpg"
                  alt="AZURE Natural Blue"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-sapphire to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">AZURE™ Natural Blue</h3>
                <p className="text-white/70 mb-4">Plant-based food coloring that's actually healthy</p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <Check className="text-coral-orange mr-2 mt-1 flex-shrink-0" size={16} />
                    <span className="text-white/70 text-sm">Replaces: Synthetic FD&C Blue #1</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-coral-orange mr-2 mt-1 flex-shrink-0" size={16} />
                    <span className="text-white/70 text-sm">Used in: Ice creams, candies, beverages</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-coral-orange mr-2 mt-1 flex-shrink-0" size={16} />
                    <span className="text-white/70 text-sm">Why Chefs Love It: Stable at high heat, pH-resistant</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-abyssal-teal/20 rounded-lg overflow-hidden">
              <div className="aspect-video relative">
                <Image
                  src="/images/biotech.jpg"
                  alt="NEUTRASEA Algae Blends"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-sapphire to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">NEUTRASEA® Algae Blends</h3>
                <p className="text-white/70 mb-4">"The multivitamin that grows on water"</p>
                <p className="text-white/70 mb-2">Combinations:</p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <Check className="text-coral-orange mr-2 mt-1 flex-shrink-0" size={16} />
                    <span className="text-white/70 text-sm">Spirulina + chlorella for detox</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-coral-orange mr-2 mt-1 flex-shrink-0" size={16} />
                    <span className="text-white/70 text-sm">Spirulina + marine collagen for beauty</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-coral-orange mr-2 mt-1 flex-shrink-0" size={16} />
                    <span className="text-white/70 text-sm">Spirulina + lion's mane for focus</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WaveSeparator />

      {/* Why Our Spirulina Wins */}
      <section className="py-20 bg-abyssal-teal relative">
        <ParticleBackground count={15} color="rgba(1, 46, 64, 0.2)" />
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Why Our Spirulina Wins"
            subtitle="A comparison between traditional farming methods and our innovative ocean-grown approach."
          />

          <div className="overflow-x-auto">
            <table className="w-full bg-dark-sapphire/30 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-dark-sapphire/50">
                  <th className="px-6 py-4 text-left text-white">Traditional Farms</th>
                  <th className="px-6 py-4 text-left text-white">SEAVERSE Ocean-Grown</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-abyssal-teal/30">
                  <td className="px-6 py-4 text-white/70">Grows in concrete tanks</td>
                  <td className="px-6 py-4 text-white font-medium">Thrives in mineral-rich seawater</td>
                </tr>
                <tr className="border-t border-abyssal-teal/30">
                  <td className="px-6 py-4 text-white/70">Risk of heavy metals</td>
                  <td className="px-6 py-4 text-white font-medium">Lab-tested purity guarantee</td>
                </tr>
                <tr className="border-t border-abyssal-teal/30">
                  <td className="px-6 py-4 text-white/70">4 harvests/year</td>
                  <td className="px-6 py-4 text-white font-medium">12 continuous harvests</td>
                </tr>
                <tr className="border-t border-abyssal-teal/30">
                  <td className="px-6 py-4 text-white/70">Earthy taste</td>
                  <td className="px-6 py-4 text-white font-medium">Mild, nutty flavor profile</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* <div className="mt-12 bg-dark-sapphire/30 rounded-lg overflow-hidden">
            <div className="aspect-video relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <Button className="bg-coral-orange hover:bg-coral-orange/80 text-white">
                  Watch: "A Day in Our Algae Atoll"
                </Button>
              </div>
            </div>
          </div> */}
        </div>
      </section>

      <WaveSeparator color="abyssal-teal" />

      {/* Where We're Scaling */}
      <section className="py-20 bg-dark-sapphire relative">
        <ParticleBackground count={10} />
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Where We Will Be Scaling"
            subtitle="Our global expansion strategy for sustainable spirulina cultivation."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Current Sites</h3>
              <div className="space-y-6">
                <div className="bg-abyssal-teal/20 p-6 rounded-lg">
                  <h4 className="text-xl font-bold text-white mb-2">Manglore</h4>
                  <p className="text-white/70">Advance Technology based Spirulina Cultivation setup</p>
                </div>

                {/* <div className="bg-abyssal-teal/20 p-6 rounded-lg">
                  <h4 className="text-xl font-bold text-white mb-2">Namibia</h4>
                  <p className="text-white/70">Desert-to-sea system using coastal fog</p>
                </div> */}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-6">2026 Launches</h3>
              <div className="space-y-6">
                {/* <div className="bg-abyssal-teal/20 p-6 rounded-lg">
                  <h4 className="text-xl font-bold text-white mb-2">Brazil</h4>
                  <p className="text-white/70">Amazon basin freshwater pods</p>
                </div> */}

                <div className="bg-abyssal-teal/20 p-6 rounded-lg">
                  <h4 className="text-xl font-bold text-white mb-2">Norway</h4>
                  <p className="text-white/70">Arctic-grown spirulina (higher Omega-3s)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WaveSeparator />

      {/* Who Needs This */}
      <section className="py-20 bg-abyssal-teal relative">
        <ParticleBackground count={15} color="rgba(1, 46, 64, 0.2)" />
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Who Needs This"
            subtitle="Target markets and applications for our spirulina products."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">B2B Partners</h3>
              <div className="space-y-4">
                <div className="bg-dark-sapphire/30 p-4 rounded-lg">
                  <h4 className="text-lg font-bold text-white mb-2">Food Brands</h4>
                  <p className="text-white/70">"Make your protein bars 300% more sustainable"</p>
                </div>

                <div className="bg-dark-sapphire/30 p-4 rounded-lg">
                  <h4 className="text-lg font-bold text-white mb-2">Beauty Companies</h4>
                  <p className="text-white/70">"Swap synthetic blue pigments for our AZURE™"</p>
                </div>

                <div className="bg-dark-sapphire/30 p-4 rounded-lg">
                  <h4 className="text-lg font-bold text-white mb-2">Governments</h4>
                  <p className="text-white/70">"Fortify school meals for $0.02/serving"</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Direct Consumers</h3>
              <div className="space-y-4">
                <div className="bg-dark-sapphire/30 p-4 rounded-lg">
                  <h4 className="text-lg font-bold text-white mb-2">Biohackers</h4>
                  <p className="text-white/70">"The original nootropic"</p>
                </div>

                <div className="bg-dark-sapphire/30 p-4 rounded-lg">
                  <h4 className="text-lg font-bold text-white mb-2">Vegan Athletes</h4>
                  <p className="text-white/70">"Complete protein without the bloat"</p>
                </div>

                <div className="bg-dark-sapphire/30 p-4 rounded-lg">
                  <h4 className="text-lg font-bold text-white mb-2">Eco-Parents</h4>
                  <p className="text-white/70">"Hidden veggie boost for picky eaters"</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WaveSeparator color="abyssal-teal" />

      {/* Collaborations */}
      <section className="py-20 bg-dark-sapphire relative">
        <ParticleBackground count={10} />
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Collaborations Driving Change"
            subtitle="Strategic partnerships advancing spirulina innovation and applications."
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-abyssal-teal/20 p-6 rounded-lg hover:bg-abyssal-teal/40 transition-all duration-300 hover:-translate-y-1">
              <h3 className="text-xl font-bold text-white mb-3">With NASA</h3>
              <p className="text-white/70">Testing our space-grown strain for Mars missions</p>
            </div>

            <div className="bg-abyssal-teal/20 p-6 rounded-lg hover:bg-abyssal-teal/40 transition-all duration-300 hover:-translate-y-1">
              <h3 className="text-xl font-bold text-white mb-3">With UNICEF</h3>
              <p className="text-white/70">Combating childhood anemia in Malawi</p>
            </div>

            <div className="bg-abyssal-teal/20 p-6 rounded-lg hover:bg-abyssal-teal/40 transition-all duration-300 hover:-translate-y-1">
              <h3 className="text-xl font-bold text-white mb-3">With L'Oréal</h3>
              <p className="text-white/70">Replacing microplastics in cosmetics with algae beads</p>
            </div>
          </div>

          {/* <div className="mt-8 text-center">
            <Button className="bg-coral-orange hover:bg-coral-orange/80 text-white">Contact BioTech Team</Button>
          </div> */}
        </div>
      </section>

      <WaveSeparator />

      {/* The Proof */}
      <section className="py-20 bg-abyssal-teal relative">
        <ParticleBackground count={15} color="rgba(1, 46, 64, 0.2)" />
        <div className="container mx-auto px-4">
          <SectionHeading
            title="The Proof"
            subtitle="Clinical evidence and customer testimonials supporting our spirulina products."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Clinical Highlights</h3>
              <div className="space-y-6">
                <div className="bg-dark-sapphire/30 p-6 rounded-lg">
                  <div className="flex items-center mb-4">
                    <div className="w-16 h-16 rounded-full bg-seafoam-blue/20 flex items-center justify-center mr-4">
                      <span className="text-2xl font-bold text-seafoam-blue">12%</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white">Faster Recovery</h4>
                      <p className="text-white/70 text-sm">University of Tokyo study</p>
                    </div>
                  </div>
                  <p className="text-white/70">
                    Athletes supplementing with our spirulina showed 12% faster recovery times after intense training.
                  </p>
                </div>

                <div className="bg-dark-sapphire/30 p-6 rounded-lg">
                  <div className="flex items-center mb-4">
                    <div className="w-16 h-16 rounded-full bg-seafoam-blue/20 flex items-center justify-center mr-4">
                      <span className="text-2xl font-bold text-seafoam-blue">37%</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white">Allergy Reduction</h4>
                      <p className="text-white/70 text-sm">Brazilian clinical trial</p>
                    </div>
                  </div>
                  <p className="text-white/70">
                    Participants experienced a 37% reduction in allergy symptoms when taking our spirulina daily.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Customers Love</h3>
              <div className="space-y-6">
                <div className="bg-dark-sapphire/30 p-6 rounded-lg">
                  <div className="flex items-start mb-4">
                   
                    <div>
                      <h4 className="text-lg font-bold text-white">Sarah K.</h4>
                      <p className="text-seafoam-blue text-sm">Fitness Coach</p>
                    </div>
                  </div>
                  <p className="text-white/70 italic">
                    "I've tried every spirulina on the market, and SEABLUE is in a different league. No fishy taste, and
                    my clients actually stick with it because it's so easy to use."
                  </p>
                </div>

                <div className="bg-dark-sapphire/30 p-6 rounded-lg">
                  <div className="flex items-start mb-4">
                    {/* <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                      <Image src="/placeholder.svg?height=100&width=100" alt="Customer" fill className="object-cover" />
                    </div> */}
                    <div>
                      <h4 className="text-lg font-bold text-white">Michael T.</h4>
                      <p className="text-seafoam-blue text-sm">Pastry Chef</p>
                    </div>
                  </div>
                  <p className="text-white/70 italic">
                    "AZURE has revolutionized my desserts. Finally, a natural blue that doesn't break down during baking
                    and actually adds nutritional value."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WaveSeparator color="abyssal-teal" />

      {/* Try the Difference */}
      <section className="py-20 bg-dark-sapphire relative">
        <ParticleBackground count={10} />
        <div className="container mx-auto px-4 text-center">
          <SectionHeading
            title="Try the Difference"
            subtitle="Experience the superior quality and benefits of our ocean-grown spirulina products."
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-1 gap-8 max-w-3xl mx-auto">
            <div className="bg-abyssal-teal/20 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-white mb-4">For Businesses</h3>
              <div className="space-y-4">
                <a href="mailto:seaversetechnology@gmail.com?subject=Order Spirulina Products" className="w-full">
                  <Button className="w-full bg-coral-orange hover:bg-coral-orange/80 text-white">
                   Request Sample Kit
                 </Button>
                </a>
                <Button
                  variant="outline"
                  className="w-full border-seafoam-blue text-seafoam-blue hover:bg-seafoam-blue hover:text-white"
                >
                  White Paper Download
                </Button>
              </div>
            </div>

            {/* <div className="bg-abyssal-teal/20 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-white mb-4">For Consumers</h3>
              <Button className="w-full bg-coral-orange hover:bg-coral-orange/80 text-white">Shop Now</Button>
            </div> */}
          </div>

          <div className="mt-12">
            <p className="text-white/80 text-lg font-medium max-w-2xl mx-auto">
              "This isn't just algae. It's the most efficient nutrition system ever designed – and we're just getting
              started."
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
