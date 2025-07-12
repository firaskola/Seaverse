"use client"

import type React from "react"
import { useState } from "react"
import emailjs from 'emailjs-com'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Copy, Check } from "lucide-react"

// Initialize EmailJS
emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_USER_ID || '')

export default function ContactForm() {
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

  if (isSubmitted) {
    return (
      <div className="bg-dark-card/50 p-6 rounded-lg border border-dark-border/50 hover:border-accent-orange/30 transition-all duration-300 animate-fade-in-up">
        <div className="flex items-center justify-center mb-4">
          <div className="w-16 h-16 rounded-full bg-accent-orange/20 flex items-center justify-center">
            <Check className="h-8 w-8 text-accent-orange" />
          </div>
        </div>
        <h3 className="text-xl font-bold text-white text-center mb-2">Message Sent Successfully!</h3>
        <p className="text-gray-300 text-center mb-6">
          Thank you for reaching out. Our marine technology team will get back to you shortly.
        </p>
        <Button
          className="w-full bg-accent-orange hover:bg-accent-orange-light text-white transition-colors duration-300"
          onClick={() => setIsSubmitted(false)}
        >
          Send Another Message
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="bg-dark-card/50 p-6 rounded-lg border border-dark-border/50 hover:border-accent-orange/30 transition-all duration-300" role="form" aria-label="Contact Seaverse form">
      {error && (
        <div className="mb-4 p-3 bg-red-500/20 text-red-200 rounded-lg" role="alert">
          {error}
        </div>
      )}
      <div className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-white font-medium mb-1">
            Your Name *
          </label>
          <Input
            id="name"
            name="name"
            value={formState.name}
            onChange={handleInputChange}
            className="bg-dark-surface/50 border-dark-border text-white placeholder:text-gray-400 focus:border-accent-orange/50 transition-colors duration-300"
            placeholder="John Doe"
            required
            aria-required="true"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-white font-medium mb-1">
            Email Address *
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
            aria-required="true"
          />
        </div>

        <div>
          <label htmlFor="subject" className="block text-white font-medium mb-1">
            Subject *
          </label>
          <Select onValueChange={handleSelectChange} value={formState.subject} required>
            <SelectTrigger className="bg-dark-surface/50 border-dark-border text-white focus:border-accent-orange/50 transition-colors duration-300" aria-label="Select inquiry subject">
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
            Message *
          </label>
          <Textarea
            id="message"
            name="message"
            value={formState.message}
            onChange={handleInputChange}
            className="bg-dark-surface/50 border-dark-border text-white placeholder:text-gray-400 focus:border-accent-orange/50 transition-colors duration-300 min-h-[150px]"
            placeholder="How can we help you with marine technology solutions?"
            required
            aria-required="true"
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
            Subscribe to our newsletter for marine technology updates
          </label>
        </div>

        <Button
          type="submit"
          className="w-full bg-accent-orange hover:bg-accent-orange-light text-white transition-colors duration-300"
          disabled={isSubmitting}
          aria-label={isSubmitting ? "Sending message..." : "Send message to Seaverse"}
        >
          {isSubmitting ? (
            <span className="flex items-center">
              <svg
                className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                aria-hidden="true"
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
  )
} 