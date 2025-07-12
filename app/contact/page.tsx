import Image from "next/image"
import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram, Youtube } from "lucide-react"
import SectionHeading from "@/components/section-heading"
import WaveSeparator from "@/components/wave-separator"
import ParticleBackground from "@/components/particle-background"
import ScrollReveal from "@/components/scroll-reveal"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import ContactForm from "@/components/contact-form"
import type { Metadata } from "next"

// SEO: Contact page metadata with comprehensive information
export const metadata: Metadata = {
  title: "Contact Seaverse | Get in Touch with Marine Technology Experts",
  description: "Contact Seaverse for marine technology solutions, underwater robotics, ocean laboratories, and sustainable aquaculture. Reach our expert team in Mangalore, Karnataka for partnerships, support, and innovation collaboration. Email: seaversetechnology@gmail.com, Phone: +91 8310862870",
  keywords: [
    "contact Seaverse",
    "marine technology contact",
    "underwater robotics support",
    "ocean engineering consultation",
    "Seaverse Mangalore contact",
    "marine technology partnership",
    "REXWELD AI support",
    "GENIX ocean labs contact",
    "water quality assessment inquiry",
    "marine biotechnology consultation",
    "Karnataka marine tech company",
    "Seaverse customer support",
    "marine innovation partnership",
    "ocean technology collaboration"
  ],
  openGraph: {
    title: "Contact Seaverse | Marine Technology Experts",
    description: "Get in touch with Seaverse's marine technology team. Contact us for underwater robotics, ocean laboratories, and sustainable marine solutions. Located in Mangalore, Karnataka.",
    url: "https://seaverse.co/contact",
    images: [
      {
        url: "/images/contact.png",
        width: 1200,
        height: 630,
        alt: "Contact Seaverse - Marine Technology Company",
      }
    ],
  },
  twitter: {
    title: "Contact Seaverse | Marine Technology",
    description: "Get in touch with marine technology experts for underwater robotics, ocean labs & sustainable solutions.",
    images: ["/images/contact.png"],
  },
  alternates: {
    canonical: "https://seaverse.co/contact",
  },
}

export default function ContactPage() {
  // SEO: JSON-LD structured data for contact page and organization
  const contactPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Seaverse",
    url: "https://seaverse.co/contact",
    description: "Contact Seaverse for marine technology solutions and partnerships",
    mainEntity: {
      "@type": "Organization",
      name: "Seaverse Technologies",
      telephone: ["+91-8310862870", "+91-6363477139"],
      email: ["seaversetechnology@gmail.com", "seaverseresearch@gmail.com"],
      address: {
        "@type": "PostalAddress",
        streetAddress: "Kuloor, Mangaluru",
        addressLocality: "Mangalore",
        addressRegion: "Karnataka",
        postalCode: "575013",
        addressCountry: "India"
      }
    }
  }

  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Seaverse Technologies",
    url: "https://seaverse.co",
    logo: "https://seaverse.co/Seaverse_new_logo.png",
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+91-8310862870",
        email: "seaversetechnology@gmail.com",
        contactType: "customer service",
        areaServed: "Worldwide",
        availableLanguage: "English"
      },
      {
        "@type": "ContactPoint", 
        telephone: "+91-6363477139",
        email: "seaverseresearch@gmail.com",
        contactType: "technical support",
        areaServed: "Worldwide",
        availableLanguage: "English"
      }
    ],
    address: [
      {
        "@type": "PostalAddress",
        streetAddress: "Kuloor, Mangaluru",
        addressLocality: "Mangalore",
        addressRegion: "Karnataka",
        postalCode: "575013",
        addressCountry: "India"
      },
      {
        "@type": "PostalAddress",
        streetAddress: "Mallikatte, Kadri, Mangaluru",
        addressLocality: "Mangalore", 
        addressRegion: "Karnataka",
        postalCode: "575002",
        addressCountry: "India"
      }
    ],
    sameAs: [
      "https://linkedin.com/company/seaverse",
      "https://twitter.com/seaverse",
      "https://instagram.com/seaverse",
      "https://youtube.com/@seaverse"
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
        name: "Contact",
        item: "https://seaverse.co/contact"
      }
    ]
  }

  return (
    <>
      {/* SEO: JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(contactPageJsonLd),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationJsonLd),
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
            src="/images/contact.png" 
            alt="Contact Seaverse - Marine Technology Company" 
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
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-space-grotesk bg-gradient-to-r from-accent-orange to-accent-orange-light bg-clip-text text-transparent">Contact Us</h1>
          </ScrollReveal>
          <ScrollReveal animation="fade-up" delay={200}>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Dive into Conversation - Connect with our marine technology experts
            </p>
          </ScrollReveal>
        </div>
      </section>

      <WaveSeparator />

      {/* Contact Form & Info */}
      <section className="py-20 bg-dark-surface relative" role="region" aria-labelledby="contact-form">
        <ParticleBackground count={15} color="rgba(255, 140, 0, 0.05)" />
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <ScrollReveal animation="fade-right">
              <div>
                <h2 id="contact-form" className="text-3xl font-bold text-white mb-6">Get in Touch</h2>
                <ContactForm />
              </div>
            </ScrollReveal>

            {/* Contact Information */}
            <ScrollReveal animation="fade-left" delay={200}>
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <address className="bg-dark-card/50 p-6 rounded-lg border border-dark-border/50 hover:border-accent-orange/30 transition-all duration-300 group not-italic">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-accent-orange/10 rounded-lg group-hover:bg-accent-orange/20 transition-colors duration-300">
                        <Mail className="h-6 w-6 text-accent-orange" aria-hidden="true" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white mb-1 group-hover:text-accent-orange transition-colors duration-300">Email</h3>
                        <p className="text-gray-300 mb-1">
                          <a href="mailto:seaversetechnology@gmail.com" className="hover:text-accent-orange transition-colors">
                            seaversetechnology@gmail.com
                          </a>
                        </p>
                        <p className="text-gray-300 mb-2">
                          <a href="mailto:seaverseresearch@gmail.com" className="hover:text-accent-orange transition-colors">
                            seaverseresearch@gmail.com
                          </a>
                        </p>
                      </div>
                    </div>
                  </address>

                  <address className="bg-dark-card/50 p-6 rounded-lg border border-dark-border/50 hover:border-accent-orange/30 transition-all duration-300 group not-italic">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-accent-orange/10 rounded-lg group-hover:bg-accent-orange/20 transition-colors duration-300">
                        <Phone className="h-6 w-6 text-accent-orange" aria-hidden="true" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white mb-1 group-hover:text-accent-orange transition-colors duration-300">Phone</h3>
                        <p className="text-gray-300 mb-1">
                          <a href="tel:+916363477139" className="hover:text-accent-orange transition-colors">
                            +91 6363477139
                          </a>
                        </p>
                        <p className="text-gray-300 mb-2">
                          <a href="tel:+918310862870" className="hover:text-accent-orange transition-colors">
                            +91 8310862870
                          </a>
                        </p>
                      </div>
                    </div>
                  </address>

                  <address className="bg-dark-card/50 p-6 rounded-lg border border-dark-border/50 hover:border-accent-orange/30 transition-all duration-300 group not-italic">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-accent-orange/10 rounded-lg group-hover:bg-accent-orange/20 transition-colors duration-300">
                        <MapPin className="h-6 w-6 text-accent-orange" aria-hidden="true" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white mb-1 group-hover:text-accent-orange transition-colors duration-300">Locations</h3>
                        <div className="space-y-2">
                          <div>
                            <p className="text-white font-medium">Main Office</p>
                            <p className="text-gray-300">Kuloor, Mangaluru</p>
                            <p className="text-gray-300">Karnataka 575013, India</p>
                          </div>
                          <div>
                            <p className="text-white font-medium">Research Lab</p>
                            <p className="text-gray-300">Mallikatte, Kadri, Mangaluru</p>
                            <p className="text-gray-300">Karnataka 575002, India</p>
                      </div>
                    </div>
                  </div>
                    </div>
                  </address>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <WaveSeparator />

      {/* Social Media */}
      <section className="py-20 bg-dark-card relative" role="region" aria-labelledby="social-media">
        <ParticleBackground count={10} color="rgba(255, 140, 0, 0.05)" />
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <SectionHeading
              title="Follow Our Journey"
              subtitle="Stay connected with our latest marine technology developments and research breakthroughs."
              centered
            />
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={200}>
            <div className="flex justify-center space-x-6">
              {[
                { icon: Linkedin, href: "https://linkedin.com/company/seaverse", label: "LinkedIn" },
                { icon: Twitter, href: "https://twitter.com/seaverse", label: "Twitter" },
                { icon: Instagram, href: "https://instagram.com/seaverse", label: "Instagram" },
                { icon: Youtube, href: "https://youtube.com/@seaverse", label: "YouTube" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-dark-surface/50 rounded-lg border border-dark-border/50 hover:border-accent-orange/30 transition-all duration-300 group"
                  aria-label={`Follow Seaverse on ${social.label}`}
                >
                  <social.icon className="h-6 w-6 text-gray-300 group-hover:text-accent-orange transition-colors duration-300" />
                </a>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <WaveSeparator />

      {/* FAQ Section */}
      <section className="py-20 bg-dark-surface relative" role="region" aria-labelledby="faq">
        <ParticleBackground count={15} color="rgba(255, 140, 0, 0.05)" />
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <SectionHeading
              title="Frequently Asked Questions"
              subtitle="Common questions about our marine technology solutions and services."
              centered
            />
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={200}>
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {[
                  {
                    question: "What marine technology services does Seaverse offer?",
                    answer: "Seaverse provides comprehensive marine technology solutions including underwater robotics (REXWELD AI), ocean laboratories (GENIX), marine monitoring systems (Aqua Sentinel), water quality assessment, spirulina biotechnology, and sustainable energy projects."
                  },
                  {
                    question: "How can I partner with Seaverse for marine projects?",
                    answer: "We welcome partnerships with organizations interested in marine technology innovation. Contact us through our form above or email seaversetechnology@gmail.com to discuss collaboration opportunities in research, development, or implementation of marine solutions."
                  },
                  {
                    question: "Where is Seaverse located?",
                    answer: "Seaverse is headquartered in Mangalore, Karnataka, India, with our main office in Kuloor and research laboratory in Mallikatte, Kadri. We serve clients worldwide with our marine technology solutions."
                  },
                  {
                    question: "What is the typical response time for inquiries?",
                    answer: "We typically respond to inquiries within 24-48 hours during business days. For urgent technical support or partnership discussions, please call us directly at +91 6363477139 or +91 8310862870."
                  },
                  {
                    question: "Does Seaverse provide technical support for your products?",
                    answer: "Yes, we provide comprehensive technical support for all our marine technology solutions. Our expert team offers installation guidance, maintenance support, and ongoing technical assistance to ensure optimal performance of our systems."
                  }
                ].map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="bg-dark-card/50 border border-dark-border/50 rounded-lg px-6 hover:border-accent-orange/30 transition-all duration-300">
                    <AccordionTrigger className="text-left text-white hover:text-accent-orange transition-colors duration-300">
                      {faq.question}
                  </AccordionTrigger>
                    <AccordionContent className="text-gray-300 pt-2">
                      {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
