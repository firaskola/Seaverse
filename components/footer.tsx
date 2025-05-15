import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-dark-sapphire border-t border-abyssal-teal/30">
      <div className="wave-separator bg-abyssal-teal"></div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">SEAVERSE</h3>
            <p className="text-white/70 mb-4">Engineering the Ocean's Future with precision, innovation, and depth.</p>
            <div className="flex space-x-4">
              <Link href="#" className="text-seafoam-blue hover:text-coral-orange transition-colors">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-seafoam-blue hover:text-coral-orange transition-colors">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-seafoam-blue hover:text-coral-orange transition-colors">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-seafoam-blue hover:text-coral-orange transition-colors">
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="#" className="text-seafoam-blue hover:text-coral-orange transition-colors">
                <Youtube size={20} />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-white/70 hover:text-coral-orange transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/technology" className="text-white/70 hover:text-coral-orange transition-colors">
                  Technology
                </Link>
              </li>
              <li>
                <Link href="/research" className="text-white/70 hover:text-coral-orange transition-colors">
                  Research
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white/70 hover:text-coral-orange transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/70 hover:text-coral-orange transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Technologies */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Our Technologies</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/technology/rexweld-ai" className="text-white/70 hover:text-coral-orange transition-colors">
                  REXWELD AI
                </Link>
              </li>
              <li>
                <Link href="/technology/spirulina" className="text-white/70 hover:text-coral-orange transition-colors">
                  Spirulina Biotech
                </Link>
              </li>
              <li>
                <Link href="/research/genix" className="text-white/70 hover:text-coral-orange transition-colors">
                  Genix Ocean Labs
                </Link>
              </li>
              <li>
                <Link
                  href="/technology/water-quality"
                  className="text-white/70 hover:text-coral-orange transition-colors"
                >
                  Water Quality Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="text-seafoam-blue mr-2 mt-1 flex-shrink-0" size={18} />
                <span className="text-white/70">SEAVERSE R&D Campus, Bengaluru, India</span>
              </li>
              <li className="flex items-center">
                <Mail className="text-seafoam-blue mr-2 flex-shrink-0" size={18} />
                <a
                  href="mailto:contact@seaverse.in"
                  className="text-white/70 hover:text-coral-orange transition-colors"
                >
                  contact@seaverse.in
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="text-seafoam-blue mr-2 flex-shrink-0" size={18} />
                <a href="tel:+919876543210" className="text-white/70 hover:text-coral-orange transition-colors">
                  +91 9876 543 210
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-abyssal-teal/30 mt-8 pt-8 text-center text-white/50">
          <p>&copy; {new Date().getFullYear()} Seaverse. All rights reserved.</p>
          <div className="mt-2 flex justify-center space-x-4 text-sm">
            <Link href="/privacy" className="hover:text-coral-orange transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-coral-orange transition-colors">
              Terms of Service
            </Link>
            <Link href="/cookies" className="hover:text-coral-orange transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
