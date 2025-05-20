"use client"
import React, { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Send, CheckCircle, AlertCircle } from "lucide-react"
import emailjs from '@emailjs/browser'

export default function NewsletterSignup() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
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
    
    if (!validateEmail(email)) {
      setError("Please enter a valid email address")
      return
    }

    setIsLoading(true)
    setError("")
    
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
        setIsSubmitted(true)
        setEmail("")
        setTimeout(() => setIsSubmitted(false), 5000)
      } else {
        throw new Error(`EmailJS returned status ${result.status}`)
      }
      
    } catch (error: any) {
      console.error('EmailJS error:', error)
      setError(error.message ) 
      // || "Failed to send subscription. Please check your email and try again."
    } finally {
      setIsLoading(false)
    }
  }
  
  return (
    <div className="bg-abyssal-teal/50 rounded-lg p-8 relative overflow-hidden">
      <h3 className="text-2xl font-bold text-white mb-2">Stay afloat with our latest innovations</h3>
      <p className="text-white/70 mb-6">Subscribe to our newsletter for updates on marine technology breakthroughs.</p>
      
      {error && (
        <div className="bg-red-500/20 border border-red-500 rounded-lg p-4 flex items-start space-x-3 mb-6 animate-fade-in">
          <AlertCircle className="h-5 w-5 text-red-400 mt-0.5 flex-shrink-0" />
          <p className="text-white text-sm">{error}</p>
        </div>
      )}
      
      {isSubmitted ? (
        <div className="bg-seafoam-blue/20 p-4 rounded-lg text-white animate-fade-in-up flex items-start space-x-3">
          <CheckCircle className="h-5 w-5 text-seafoam-blue mt-0.5 flex-shrink-0" />
          <div>
            <p className="font-medium">Thank you for subscribing!</p>
            <p className="text-sm mt-1">We'll keep you updated with our latest news and innovations.</p>
          </div>
        </div>
      ) : (
        <form ref={formRef} onSubmit={handleSubmit} className="relative z-10">
          <div className="flex flex-col sm:flex-row gap-3">
            <Input
              type="email"
              name="subscriber_email"
              placeholder="Your email address"
              className="bg-dark-sapphire/50 border-abyssal-teal text-white placeholder:text-white/50"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Button 
              type="submit" 
              className="bg-coral-orange hover:bg-coral-orange/80 text-white" 
              disabled={isLoading}
            >
              {isLoading ? (
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
                  Subscribing...
                </span>
              ) : (
                <span className="flex items-center">
                  Subscribe <Send className="ml-2 h-4 w-4" />
                </span>
              )}
            </Button>
          </div>
          
          {/* Hidden fields for additional EmailJS data */}
          <input type="hidden" name="subscription_type" value="Newsletter" />
          <input type="hidden" name="timestamp" value={new Date().toLocaleString()} />
        </form>
      )}
      
      {/* Particle effect */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 10 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-seafoam-blue/10 animate-float"
            style={{
              width: `${Math.random() * 20 + 10}px`,
              height: `${Math.random() * 20 + 10}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 10 + 10}s`,
            }}
          />
        ))}
      </div>
    </div>
  )
}