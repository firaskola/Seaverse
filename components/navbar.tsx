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
  const bgPages = ['']

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
          ? "bg-dark-surface/95 backdrop-blur-md shadow-lg border-b border-dark-border" 
          : "bg-transparent",
      )}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2 group">
            <span className="text-2xl font-bold text-white font-space-grotesk group-hover:text-accent-orange transition-colors duration-300">SEAVERSE</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "text-gray-300 hover:text-accent-orange transition-colors duration-200 relative group",
                  pathname === link.href ? "text-accent-orange font-medium" : ""
                )}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-accent-orange to-accent-orange-light group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
            <Button 
              className="bg-gradient-to-r from-accent-orange to-accent-orange-light hover:from-accent-orange-dark hover:to-accent-orange text-white shadow-lg hover:shadow-accent-orange/20 transition-all duration-300"
              onClick={() => {
                window.location.href = "mailto:seaversetechnology@gmail.com?subject=Get in touch";
              }}
            >
              Get in Touch
            </Button>
          </nav>

          {/* Mobile Navigation Toggle */}
          <button
            className="md:hidden text-gray-300 hover:text-accent-orange transition-colors duration-200"
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
          "fixed inset-0 bg-dark-surface/98 z-40 transform transition-transform duration-300 md:hidden",
          isOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="flex flex-col h-full pt-20 px-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "text-gray-300 hover:text-accent-orange py-4 text-xl border-b border-dark-border/30 transition-colors duration-200",
                pathname === link.href ? "text-accent-orange font-medium" : ""
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
            <button className="w-full bg-gradient-to-r from-accent-orange to-accent-orange-light hover:from-accent-orange-dark hover:to-accent-orange text-white py-3 px-4 rounded-lg shadow-lg hover:shadow-accent-orange/20 transition-all duration-300">
              Get in Touch
            </button>
          </a>
        </div>
      </div>
    </header>
  )
}