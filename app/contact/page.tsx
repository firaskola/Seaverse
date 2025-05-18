"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormState({
        name: "",
        email: "",
        subject: "",
        message: "",
        newsletter: false,
      })
    }, 1500)
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
          <div className="absolute inset-0 bg-dark-sapphire/80" />
          <ParticleBackground count={20} />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center mt-20">
          <ScrollReveal animation="fade-up">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-space-grotesk">Contact Us</h1>
          </ScrollReveal>
          <ScrollReveal animation="fade-up" delay={200}>
            <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto">Dive into Conversation</p>
          </ScrollReveal>
        </div>
      </section>

      <WaveSeparator />

      {/* Contact Form & Info */}
      <section className="py-20 bg-abyssal-teal relative">
        <ParticleBackground count={15} color="rgba(1, 46, 64, 0.2)" />
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <ScrollReveal animation="fade-right">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Get in Touch</h2>

                {isSubmitted ? (
                  <div className="bg-seafoam-blue/20 p-6 rounded-lg animate-fade-in-up">
                    <div className="flex items-center justify-center mb-4">
                      <div className="w-16 h-16 rounded-full bg-seafoam-blue/30 flex items-center justify-center">
                        <Check className="h-8 w-8 text-white" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-white text-center mb-2">Message Sent Successfully!</h3>
                    <p className="text-white/80 text-center mb-6">
                      Thank you for reaching out. Our team will get back to you shortly.
                    </p>
                    <Button
                      className="w-full bg-coral-orange hover:bg-coral-orange/80 text-white"
                      onClick={() => setIsSubmitted(false)}
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="bg-dark-sapphire/30 p-6 rounded-lg shadow-lg">
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
                          className="bg-dark-sapphire/50 border-abyssal-teal text-white placeholder:text-white/50"
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
                          className="bg-dark-sapphire/50 border-abyssal-teal text-white placeholder:text-white/50"
                          placeholder="john@example.com"
                          required
                        />
                      </div>

                      <div>
                        <label htmlFor="subject" className="block text-white font-medium mb-1">
                          Subject
                        </label>
                        <Select onValueChange={handleSelectChange} value={formState.subject}>
                          <SelectTrigger className="bg-dark-sapphire/50 border-abyssal-teal text-white">
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
                          className="bg-dark-sapphire/50 border-abyssal-teal text-white placeholder:text-white/50 min-h-[150px]"
                          placeholder="How can we help you?"
                          required
                        />
                      </div>

                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="newsletter"
                          checked={formState.newsletter}
                          onCheckedChange={handleCheckboxChange}
                        />
                        <label
                          htmlFor="newsletter"
                          className="text-sm text-white/80 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Subscribe to our newsletter for updates
                        </label>
                      </div>

                      <Button
                        type="submit"
                        className="w-full bg-coral-orange hover:bg-coral-orange/80 text-white"
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

                <div className="bg-dark-sapphire/30 p-6 rounded-lg shadow-lg mb-8">
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <MapPin className="text-coral-orange mr-3 mt-1 flex-shrink-0" size={20} />
                      <div>
                        <h3 className="text-lg font-bold text-white mb-1">SEAVERSE RESEARCH & DEVELOPMENT</h3>
                        <p className="text-white/70">
                         
                          Kuloor
                          <br />
                          Mangaluru, Karnataka 575013
                          <br />
                          India
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <MapPin className="text-coral-orange mr-3 mt-1 flex-shrink-0" size={20} />
                      <div>
                        <h3 className="text-lg font-bold text-white mb-1">Headquarters</h3>
                        <p className="text-white/70">
                          Mallikatte, Kadri
                          <br />
                          Mangaluru, Karnataka 575002
                          <br />
                          India
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <Mail className="text-coral-orange mr-3 mt-1 flex-shrink-0" size={20} />
                      <div>
                        <h3 className="text-lg font-bold text-white mb-1">Email</h3>
                        <div className="flex items-center">
                          <a
                            href="mailto:contact@seaverse.in"
                            className="text-white/70 hover:text-coral-orange transition-colors"
                          >
                            contact@seaverse.in
                          </a>
                          <button
                            onClick={() => copyToClipboard("contact@seaverse.in")}
                            className="ml-2 text-seafoam-blue hover:text-coral-orange transition-colors"
                            aria-label="Copy email address"
                          >
                            {copySuccess ? <Check size={16} /> : <Copy size={16} />}
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <Phone className="text-coral-orange mr-3 mt-1 flex-shrink-0" size={20} />
                      <div>
                        <h3 className="text-lg font-bold text-white mb-1">Phone</h3>
                        <a href="tel:+919876543210" className="text-white/70 hover:text-coral-orange transition-colors">
                          +91 9876 543 210
                        </a>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-white mb-3">Office Hours</h3>
                      <p className="text-white/70">
                        Monday - Friday: 9:00 AM - 6:00 PM (IST)
                        <br />
                        Saturday: 10:00 AM - 2:00 PM (IST)
                        <br />
                        Sunday: Closed
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-white mb-3">Connect With Us</h3>
                      <div className="flex space-x-4">
                        <a href="#" className="text-seafoam-blue hover:text-coral-orange transition-colors">
                          <Linkedin size={20} />
                          <span className="sr-only">LinkedIn</span>
                        </a>
                        <a href="#" className="text-seafoam-blue hover:text-coral-orange transition-colors">
                          <Twitter size={20} />
                          <span className="sr-only">Twitter</span>
                        </a>
                        <a href="#" className="text-seafoam-blue hover:text-coral-orange transition-colors">
                          <Instagram size={20} />
                          <span className="sr-only">Instagram</span>
                        </a>
                        <a href="#" className="text-seafoam-blue hover:text-coral-orange transition-colors">
                          <Youtube size={20} />
                          <span className="sr-only">YouTube</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <ScrollReveal animation="fade-up" delay={300}>
                  <div className="bg-dark-sapphire/30 p-6 rounded-lg shadow-lg">
                    <h3 className="text-lg font-bold text-white mb-3">Location</h3>
                    <div className="aspect-video relative rounded-lg overflow-hidden mb-4">
                      <Image
                        src="/placeholder.svg?height=400&width=600&text=Map"
                        alt="Office Location Map"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <Button className="w-full bg-seafoam-blue hover:bg-seafoam-blue/80 text-white">
                      Get Directions

                  </div>
                </ScrollReveal> */}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <WaveSeparator color="abyssal-teal" />

      {/* FAQ Section */}
      <section className="py-20 bg-dark-sapphire relative">
        <ParticleBackground count={10} />
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <SectionHeading
              title="Frequently Asked Questions"
              subtitle="Find answers to common questions about Seaverse and our services."
              centered
            />
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={200} className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {[
                {
                  question: "What industries does Seaverse serve?",
                  answer:
                    "Seaverse provides marine technology solutions for a wide range of industries including oil & gas, maritime infrastructure, aquaculture, environmental monitoring, defense, and research institutions. Our technologies are designed to address critical underwater challenges across these sectors.",
                },
                {
                  question: "How can I request a demo of your technologies?",
                  answer:
                    "You can request a demo by filling out our contact form and selecting 'Technology Information' as the subject. Our team will reach out to schedule a personalized demonstration based on your specific interests and requirements.",
                },
                {
                  question: "Where are your offices located?",
                  answer:
                    "Our headquarters is located in Bengaluru, India. We also have research facilities and partner locations in various coastal regions to support our marine technology development and testing.",
                },
                {
                  question: "Do you offer internship or job opportunities?",
                  answer:
                    "Yes, we regularly offer internships and employment opportunities for talented individuals passionate about marine technology, engineering, oceanography, and related fields. Please visit our Careers page or contact us with your resume and area of interest.",
                },
                {
                  question: "Can Seaverse technologies be customized for specific applications?",
                  answer:
                    "Absolutely. Many of our technologies can be tailored to meet specific industry requirements and operational conditions. Our engineering team works closely with clients to understand their unique challenges and develop customized solutions.",
                },
              ].map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-abyssal-teal/20 rounded-lg overflow-hidden"
                >
                  <AccordionTrigger className="px-6 py-4 text-white hover:text-coral-orange transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-white/70">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            {/* <div className="mt-8 text-center">
              <p className="text-white/80 mb-4">Still have questions?</p>
              <Button className="bg-coral-orange hover:bg-coral-orange/80 text-white">Contact Our Support Team</Button>
            </div> */}
          </ScrollReveal>
        </div>
      </section>

      <WaveSeparator />

      {/* Support Options */}
      <section className="py-20 bg-abyssal-teal relative">
        <ParticleBackground count={15} color="rgba(1, 46, 64, 0.2)" />
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <SectionHeading title="Support Options" subtitle="Different ways to get in touch based on your needs." />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ScrollReveal animation="fade-up" delay={100}>
              <div className="bg-dark-sapphire/30 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-white mb-3">Technical Support</h3>
                <p className="text-white/70 mb-4">For assistance with our technologies and products.</p>
                <p className="text-white/70 mb-2">
                  <span className="text-seafoam-blue">Email:</span> seaversetechnology@gmail.com
                </p>
                <p className="text-white/70 mb-4">
                  <span className="text-seafoam-blue">Response Time:</span> Within 24 hours
                </p>
                {/* <Button
                  variant="outline"
                  className="w-full border-seafoam-blue text-seafoam-blue hover:bg-seafoam-blue hover:text-white"
                >
                  Contact Support
                </Button> */}
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={200}>
              <div className="bg-dark-sapphire/30 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-white mb-3">Business Inquiries</h3>
                <p className="text-white/70 mb-4">For partnerships, investments, and business opportunities.</p>
                <p className="text-white/70 mb-2">
                  <span className="text-seafoam-blue">Email:</span> shreeshaachar233@gmail.com
                </p>
                <p className="text-white/70 mb-4">
                  <span className="text-seafoam-blue">Response Time:</span> Within 48 hours
                </p>
                {/* <Button
                  variant="outline"
                  className="w-full border-seafoam-blue text-seafoam-blue hover:bg-seafoam-blue hover:text-white"
                >
                  Business Contact
                </Button> */}
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={300}>
              <div className="bg-dark-sapphire/30 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-white mb-3">Media Contacts</h3>
                <p className="text-white/70 mb-4">For press inquiries, interviews, and media resources.</p>
                <p className="text-white/70 mb-2">
                  <span className="text-seafoam-blue">Email:</span> seaversetechnology@gmail.com
                </p>
                <p className="text-white/70 mb-4">
                  <span className="text-seafoam-blue">Response Time:</span> Within 24-48 hours
                </p>
                {/* <Button
                  variant="outline"
                  className="w-full border-seafoam-blue text-seafoam-blue hover:bg-seafoam-blue hover:text-white"
                >
                  Media Contact
                </Button> */}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  )
}
