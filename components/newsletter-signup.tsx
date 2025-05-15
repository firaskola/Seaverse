"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Send } from "lucide-react"

export default function NewsletterSignup() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      setIsSubmitted(true)
      setEmail("")
    }, 1500)
  }

  return (
    <div className="bg-abyssal-teal/50 rounded-lg p-8 relative overflow-hidden">
      <h3 className="text-2xl font-bold text-white mb-2">Stay afloat with our latest innovations</h3>
      <p className="text-white/70 mb-6">Subscribe to our newsletter for updates on marine technology breakthroughs.</p>

      {isSubmitted ? (
        <div className="bg-seafoam-blue/20 p-4 rounded-lg text-white animate-fade-in-up">
          <p className="font-medium">Thank you for subscribing!</p>
          <p className="text-sm mt-1">We'll keep you updated with our latest news and innovations.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="relative z-10">
          <div className="flex flex-col sm:flex-row gap-3">
            <Input
              type="email"
              placeholder="Your email address"
              className="bg-dark-sapphire/50 border-abyssal-teal text-white placeholder:text-white/50"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Button type="submit" className="bg-coral-orange hover:bg-coral-orange/80 text-white" disabled={isLoading}>
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
