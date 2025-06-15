import Image from "next/image"
import { Quote } from "lucide-react"

interface TestimonialProps {
  quote: string
  author: string
  role: string
  company: string
  imageSrc: string
}

export default function Testimonial({ quote, author, role, company }: TestimonialProps) {
  return (
    <div className="relative group">
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent-orange/5 to-accent-orange-light/5 rounded-lg blur-xl group-hover:blur-2xl transition-all duration-300"></div>
      
      {/* Card content */}
      <div className="relative bg-dark-card/50 p-6 rounded-lg border border-dark-border/50 group-hover:border-accent-orange/30 transition-all duration-300">
        <Quote className="text-accent-orange/50 h-8 w-8 mb-4" />
        
        <blockquote className="text-gray-300 mb-6 relative">
          <p className="text-lg leading-relaxed">{quote}</p>
        </blockquote>
        
        <div className="flex items-center space-x-4">
          {/* <div className="relative h-12 w-12 rounded-full overflow-hidden border-2 border-accent-orange/30">
            <Image
              src={imageSrc}
              alt={author}
              fill
              className="object-cover"
            />
          </div> */}
          <div>
            <h4 className="text-white font-medium group-hover:text-accent-orange transition-colors duration-300">{author}</h4>
            <p className="text-gray-400 text-sm">{role}</p>
            <p className="text-gray-500 text-sm">{company}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
