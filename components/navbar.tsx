"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Pages where navbar should always have background
  const bgPages = ['/technology']

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Technology", href: "/technology" },
    { name: "Research", href: "/research" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        (scrolled || bgPages.includes(pathname)) 
          ? "bg-dark-sapphire/80 backdrop-blur-md shadow-lg" 
          : "bg-transparent",
      )}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-white font-space-grotesk">SEAVERSE</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "text-white/80 hover:text-coral-orange transition-colors duration-200",
                  pathname === link.href ? "text-coral-orange font-medium" : ""
                )}
              >
                {link.name}
              </Link>
            ))}
            <Button 
              className="bg-coral-orange hover:bg-coral-orange/80 text-white"
              onClick={() => {
                window.location.href = "mailto:seaversetechnology@gmail.com?subject=Get in touch";
              }}
            >
              Get in Touch
            </Button>
          </nav>

          {/* Mobile Navigation Toggle */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={cn(
          "fixed inset-0 bg-dark-sapphire z-40 transform transition-transform duration-300 md:hidden",
          isOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="flex flex-col h-full pt-20 px-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "text-white/80 hover:text-coral-orange py-4 text-xl border-b border-abyssal-teal/30",
                pathname === link.href ? "text-coral-orange font-medium" : ""
              )}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <a 
            href="mailto:seaversetechnology@gmail.com?subject=Get in touch" 
            className="block w-full mt-8"
          >
            <button className="w-full bg-coral-orange hover:bg-coral-orange/80 text-white py-2 px-4 rounded">
              Get in Touch
            </button>
          </a>
        </div>
      </div>
    </header>
  )
}