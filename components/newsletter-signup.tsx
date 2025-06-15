"use client"
import React, { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Send, CheckCircle, AlertCircle, Mail } from "lucide-react"
import emailjs from '@emailjs/browser'

export default function NewsletterSignup() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const formRef = useRef<HTMLFormElement>(null)

  useEffect(() => {
    emailjs.init('ayB1wjAvqz1IBOvAg')
  }, [])

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(email)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")

    if (!validateEmail(email)) {
      setStatus("error")
      return
    }

    try {
      const templateParams = {
        subscriber_email: email,
        subscription_type: "Newsletter",
        timestamp: new Date().toLocaleString()
      }
      
      const result = await emailjs.send(
        'service_2zzr648',
        'template_qeoo1re',
        templateParams
      )

      if (result.status === 200) {
        console.log('Email successfully sent!', result)
        setStatus("success")
        setEmail("")
        setTimeout(() => setStatus("idle"), 5000)
      } else {
        throw new Error(`EmailJS returned status ${result.status}`)
      }
      
    } catch (error: any) {
      console.error('EmailJS error:', error)
      setStatus("error")
    }
  }
  
  return (
    <div className="w-full max-w-2xl mx-auto">
      <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-accent-orange/20 to-accent-orange-light/20 rounded-lg blur-xl"></div>
          <div className="relative flex flex-col sm:flex-row gap-4 p-1 bg-dark-card/50 rounded-lg border border-dark-border/50">
            <div className="flex-1 relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pl-10 bg-dark-surface/50 border-dark-border/50 text-white placeholder:text-gray-400 focus:border-accent-orange/50 focus:ring-accent-orange/20"
                required
              />
            </div>
            <Button
              type="submit"
              disabled={status === "loading"}
              className="bg-gradient-to-r from-accent-orange to-accent-orange-light hover:from-accent-orange-dark hover:to-accent-orange text-white shadow-lg hover:shadow-accent-orange/20 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === "loading" ? "Subscribing..." : "Subscribe"}
            </Button>
          </div>
        </div>

        {status === "success" && (
          <p className="text-accent-orange text-sm text-center">Thank you for subscribing!</p>
        )}
        {status === "error" && (
          <p className="text-red-400 text-sm text-center">Please enter a valid email address.</p>
        )}
      </form>

      <p className="text-gray-400 text-sm text-center mt-4">
        Stay updated with our latest innovations and marine technology breakthroughs.
      </p>
    </div>
  )
}