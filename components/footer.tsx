import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-dark-surface border-t border-dark-border">
      <div className="wave-separator bg-gradient-to-r from-accent-orange to-accent-orange-light"></div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4 group">
              <span className="bg-gradient-to-r from-accent-orange to-accent-orange-light bg-clip-text text-transparent">SEAVERSE</span>
            </h3>
            <p className="text-gray-300 mb-4">Engineering the Ocean's Future with precision, innovation, and depth.</p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-accent-orange transition-colors duration-300 hover:scale-110 transform">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-accent-orange transition-colors duration-300 hover:scale-110 transform">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-accent-orange transition-colors duration-300 hover:scale-110 transform">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-accent-orange transition-colors duration-300 hover:scale-110 transform">
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-accent-orange transition-colors duration-300 hover:scale-110 transform">
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
                <Link href="/" className="text-gray-300 hover:text-accent-orange transition-colors duration-300 flex items-center group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-accent-orange mr-0 group-hover:mr-2 transition-all duration-300"></span>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/technology" className="text-gray-300 hover:text-accent-orange transition-colors duration-300 flex items-center group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-accent-orange mr-0 group-hover:mr-2 transition-all duration-300"></span>
                  Technology
                </Link>
              </li>
              <li>
                <Link href="/research" className="text-gray-300 hover:text-accent-orange transition-colors duration-300 flex items-center group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-accent-orange mr-0 group-hover:mr-2 transition-all duration-300"></span>
                  Research
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-accent-orange transition-colors duration-300 flex items-center group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-accent-orange mr-0 group-hover:mr-2 transition-all duration-300"></span>
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-accent-orange transition-colors duration-300 flex items-center group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-accent-orange mr-0 group-hover:mr-2 transition-all duration-300"></span>
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
                <Link href="/technology/rexweld-ai" className="text-gray-300 hover:text-accent-orange transition-colors duration-300 flex items-center group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-accent-orange mr-0 group-hover:mr-2 transition-all duration-300"></span>
                  REXWELD AI
                </Link>
              </li>
              <li>
                <Link href="/technology/spirulina" className="text-gray-300 hover:text-accent-orange transition-colors duration-300 flex items-center group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-accent-orange mr-0 group-hover:mr-2 transition-all duration-300"></span>
                  Spirulina Biotech
                </Link>
              </li>
              <li>
                <Link href="/research/genix" className="text-gray-300 hover:text-accent-orange transition-colors duration-300 flex items-center group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-accent-orange mr-0 group-hover:mr-2 transition-all duration-300"></span>
                  Genix Ocean Labs
                </Link>
              </li>
              <li>
                <Link
                  href="/technology/water-quality"
                  className="text-gray-300 hover:text-accent-orange transition-colors duration-300 flex items-center group"
                >
                  <span className="w-0 group-hover:w-2 h-0.5 bg-accent-orange mr-0 group-hover:mr-2 transition-all duration-300"></span>
                  Water Quality Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start group">
                <MapPin className="text-accent-orange mr-2 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" size={18} />
                <span className="text-gray-300">SEAVERSE Headquaters, Mallikatte, Kadri, Mangaluru, Karnataka 575002</span>
              </li>
              <li className="flex items-center group">
                <Mail className="text-accent-orange mr-2 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" size={18} />
                <a
                  href="mailto:seaversetechnology@gmail.com"
                  className="text-gray-300 hover:text-accent-orange transition-colors duration-300"
                >
                  seaversetechnology@gmail.com
                </a>
              </li>
              <li className="flex items-center group">
                <Phone className="text-accent-orange mr-2 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" size={18} />
                <a href="tel:+918310862870" className="text-gray-300 hover:text-accent-orange transition-colors duration-300">
                  +91 8310862870
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-dark-border mt-8 pt-8 text-center">
          <p className="text-gray-400">&copy; {new Date().getFullYear()} Seaverse. All rights reserved.</p>
          <div className="mt-2 flex justify-center space-x-4 text-sm">
            <Link href="/privacy" className="text-gray-400 hover:text-accent-orange transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-accent-orange transition-colors duration-300">
              Terms of Service
            </Link>
            <Link href="/cookies" className="text-gray-400 hover:text-accent-orange transition-colors duration-300">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
