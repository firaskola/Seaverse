"use client"

import type React from "react"
import { useState } from "react"
import Image from "next/image"
import emailjs from 'emailjs-com'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram, Youtube, Copy, Check } from "lucide-react"
import SectionHeading from "@/components/section-heading"
import WaveSeparator from "@/components/wave-separator"
import ParticleBackground from "@/components/particle-background"
import ScrollReveal from "@/components/scroll-reveal"

// Initialize EmailJS (you can also do this in a separate config file)
emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_USER_ID || '')

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    newsletter: false,
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")
  const [copySuccess, setCopySuccess] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (checked: boolean) => {
    setFormState((prev) => ({ ...prev, newsletter: checked }))
  }

  const handleSelectChange = (value: string) => {
    setFormState((prev) => ({ ...prev, subject: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    try {
      // Send email using EmailJS
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'service_2zzr648',
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'template_5oo3x2x',
        {
          from_name: formState.name,
          from_email: formState.email,
          subject: formState.subject,
          message: formState.message,
          newsletter_subscription: formState.newsletter ? "Yes" : "No",
          timestamp: new Date().toLocaleString(),
        },
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID || 'ayB1wjAvqz1IBOvAg'
      )

      setIsSubmitted(true)
      setFormState({
        name: "",
        email: "",
        subject: "",
        message: "",
        newsletter: false,
      })
    } catch (err) {
      console.error("Failed to send message:", err)
      setError("Failed to send message. Please try again later.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopySuccess(true)
    setTimeout(() => setCopySuccess(false), 2000)
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/images/contact.png" alt="Contact Seaverse" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-dark-surface/90 to-dark-surface/70" />
          <ParticleBackground count={20} />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center mt-20">
          <ScrollReveal animation="fade-up">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-space-grotesk bg-gradient-to-r from-accent-orange to-accent-orange-light bg-clip-text text-transparent">Contact Us</h1>
          </ScrollReveal>
          <ScrollReveal animation="fade-up" delay={200}>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">Dive into Conversation</p>
          </ScrollReveal>
        </div>
      </section>

      <WaveSeparator />

      {/* Contact Form & Info */}
      <section className="py-20 bg-dark-surface relative">
        <ParticleBackground count={15} color="rgba(255, 140, 0, 0.05)" />
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <ScrollReveal animation="fade-right">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Get in Touch</h2>

                {isSubmitted ? (
                  <div className="bg-dark-card/50 p-6 rounded-lg border border-dark-border/50 hover:border-accent-orange/30 transition-all duration-300 animate-fade-in-up">
                    <div className="flex items-center justify-center mb-4">
                      <div className="w-16 h-16 rounded-full bg-accent-orange/20 flex items-center justify-center">
                        <Check className="h-8 w-8 text-accent-orange" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-white text-center mb-2">Message Sent Successfully!</h3>
                    <p className="text-gray-300 text-center mb-6">
                      Thank you for reaching out. Our team will get back to you shortly.
                    </p>
                    <Button
                      className="w-full bg-accent-orange hover:bg-accent-orange-light text-white transition-colors duration-300"
                      onClick={() => setIsSubmitted(false)}
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="bg-dark-card/50 p-6 rounded-lg border border-dark-border/50 hover:border-accent-orange/30 transition-all duration-300">
                    {error && (
                      <div className="mb-4 p-3 bg-red-500/20 text-red-200 rounded-lg">
                        {error}
                      </div>
                    )}
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="name" className="block text-white font-medium mb-1">
                          Your Name
                        </label>
                        <Input
                          id="name"
                          name="name"
                          value={formState.name}
                          onChange={handleInputChange}
                          className="bg-dark-surface/50 border-dark-border text-white placeholder:text-gray-400 focus:border-accent-orange/50 transition-colors duration-300"
                          placeholder="John Doe"
                          required
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-white font-medium mb-1">
                          Email Address
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formState.email}
                          onChange={handleInputChange}
                          className="bg-dark-surface/50 border-dark-border text-white placeholder:text-gray-400 focus:border-accent-orange/50 transition-colors duration-300"
                          placeholder="john@example.com"
                          required
                        />
                      </div>

                      <div>
                        <label htmlFor="subject" className="block text-white font-medium mb-1">
                          Subject
                        </label>
                        <Select onValueChange={handleSelectChange} value={formState.subject}>
                          <SelectTrigger className="bg-dark-surface/50 border-dark-border text-white focus:border-accent-orange/50 transition-colors duration-300">
                            <SelectValue placeholder="Select a subject" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="general">General Inquiry</SelectItem>
                            <SelectItem value="technology">Technology Information</SelectItem>
                            <SelectItem value="partnership">Partnership Opportunity</SelectItem>
                            <SelectItem value="support">Technical Support</SelectItem>
                            <SelectItem value="careers">Careers</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-white font-medium mb-1">
                          Message
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formState.message}
                          onChange={handleInputChange}
                          className="bg-dark-surface/50 border-dark-border text-white placeholder:text-gray-400 focus:border-accent-orange/50 transition-colors duration-300 min-h-[150px]"
                          placeholder="How can we help you?"
                          required
                        />
                      </div>

                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="newsletter"
                          checked={formState.newsletter}
                          onCheckedChange={handleCheckboxChange}
                          className="border-dark-border data-[state=checked]:bg-accent-orange data-[state=checked]:border-accent-orange"
                        />
                        <label
                          htmlFor="newsletter"
                          className="text-sm text-gray-300 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Subscribe to our newsletter for updates
                        </label>
                      </div>

                      <Button
                        type="submit"
                        className="w-full bg-accent-orange hover:bg-accent-orange-light text-white transition-colors duration-300"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <span className="flex items-center">
                            <svg
                              className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              ></circle>
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              ></path>
                            </svg>
                            Sending...
                          </span>
                        ) : (
                          "Send Message"
                        )}
                      </Button>
                    </div>
                  </form>
                )}
              </div>
            </ScrollReveal>

            {/* Contact Information */}
            <ScrollReveal animation="fade-left" delay={200}>
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div className="bg-dark-card/50 p-6 rounded-lg border border-dark-border/50 hover:border-accent-orange/30 transition-all duration-300 group">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-accent-orange/10 rounded-lg group-hover:bg-accent-orange/20 transition-colors duration-300">
                        <Mail className="h-6 w-6 text-accent-orange" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white mb-1 group-hover:text-accent-orange transition-colors duration-300">Email</h3>
                        <p className="text-gray-300 mb-2">info@seaverse.com</p>
                        <button
                          onClick={() => copyToClipboard("info@seaverse.com")}
                          className="text-sm text-accent-orange hover:text-accent-orange-light transition-colors duration-300 flex items-center"
                        >
                          {copySuccess ? (
                            <>
                              <Check className="h-4 w-4 mr-1" />
                              Copied!
                            </>
                          ) : (
                            <>
                              <Copy className="h-4 w-4 mr-1" />
                              Copy
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="bg-dark-card/50 p-6 rounded-lg border border-dark-border/50 hover:border-accent-orange/30 transition-all duration-300 group">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-accent-orange/10 rounded-lg group-hover:bg-accent-orange/20 transition-colors duration-300">
                        <Phone className="h-6 w-6 text-accent-orange" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white mb-1 group-hover:text-accent-orange transition-colors duration-300">Phone</h3>
                        <p className="text-gray-300 mb-2">+91 1234567890</p>
                        <button
                          onClick={() => copyToClipboard("+91 1234567890")}
                          className="text-sm text-accent-orange hover:text-accent-orange-light transition-colors duration-300 flex items-center"
                        >
                          {copySuccess ? (
                            <>
                              <Check className="h-4 w-4 mr-1" />
                              Copied!
                            </>
                          ) : (
                            <>
                              <Copy className="h-4 w-4 mr-1" />
                              Copy
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="bg-dark-card/50 p-6 rounded-lg border border-dark-border/50 hover:border-accent-orange/30 transition-all duration-300 group">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-accent-orange/10 rounded-lg group-hover:bg-accent-orange/20 transition-colors duration-300">
                        <MapPin className="h-6 w-6 text-accent-orange" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white mb-1 group-hover:text-accent-orange transition-colors duration-300">Location</h3>
                        <p className="text-gray-300">
                          Seaverse Headquarters<br />
                          Bangalore, Karnataka<br />
                          India
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-dark-card/50 p-6 rounded-lg border border-dark-border/50 hover:border-accent-orange/30 transition-all duration-300">
                    <h3 className="text-lg font-bold text-white mb-4">Follow Us</h3>
                    <div className="flex space-x-4">
                      <a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-accent-orange/10 rounded-lg hover:bg-accent-orange/20 transition-colors duration-300"
                      >
                        <Linkedin className="h-6 w-6 text-accent-orange" />
                      </a>
                      <a
                        href="https://twitter.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-accent-orange/10 rounded-lg hover:bg-accent-orange/20 transition-colors duration-300"
                      >
                        <Twitter className="h-6 w-6 text-accent-orange" />
                      </a>
                      <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-accent-orange/10 rounded-lg hover:bg-accent-orange/20 transition-colors duration-300"
                      >
                        <Instagram className="h-6 w-6 text-accent-orange" />
                      </a>
                      <a
                        href="https://youtube.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-accent-orange/10 rounded-lg hover:bg-accent-orange/20 transition-colors duration-300"
                      >
                        <Youtube className="h-6 w-6 text-accent-orange" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <WaveSeparator />

      {/* FAQ Section */}
      <section className="py-20 bg-dark-card relative">
        <ParticleBackground count={10} color="rgba(255, 140, 0, 0.05)" />
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <SectionHeading
              title="Frequently Asked Questions"
              subtitle="Find answers to common questions about Seaverse."
              centered
            />
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={200}>
            <Accordion type="single" collapsible className="max-w-3xl mx-auto">
              {[
                {
                  question: "What services does Seaverse offer?",
                  answer:
                    "Seaverse specializes in marine technology solutions, including underwater robotics, AI-powered welding systems, water quality monitoring, and sustainable aquaculture technologies. We also offer research and development services in marine biotechnology.",
                },
                {
                  question: "How can I partner with Seaverse?",
                  answer:
                    "We welcome partnerships with organizations that share our vision for sustainable marine technology. You can reach out through our contact form, selecting 'Partnership Opportunity' as the subject. Our team will review your proposal and get back to you.",
                },
                {
                  question: "Does Seaverse offer internships or career opportunities?",
                  answer:
                    "Yes, we regularly offer internships and career opportunities for passionate individuals in marine technology, engineering, and research. Check our careers page or contact us for current openings.",
                },
                {
                  question: "How can I stay updated with Seaverse's developments?",
                  answer:
                    "You can subscribe to our newsletter through the contact form, follow us on social media, or visit our blog for regular updates on our projects, research, and innovations.",
                },
              ].map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-dark-border/50 data-[state=open]:border-accent-orange/30 transition-colors duration-300"
                >
                  <AccordionTrigger className="text-white hover:text-accent-orange transition-colors duration-300">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
