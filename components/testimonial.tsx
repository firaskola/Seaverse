import Image from "next/image"
import { cn } from "@/lib/utils"

interface TestimonialProps {
  quote: string
  author: string
  role: string
  company: string
  imageSrc: string
  className?: string
}

export default function Testimonial({ quote, author, role, company, imageSrc, className }: TestimonialProps) {
  return (
    <div className={cn("bg-abyssal-teal/30 p-6 rounded-lg shadow-lg", className)}>
      <div className="flex items-center mb-4">
        {/* <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
          <Image src={imageSrc || "/placeholder.svg"} alt={author} fill className="object-cover" />
        </div> */}
        <div>
          <h4 className="text-lg font-bold text-white">{author}</h4>
          <p className="text-seafoam-blue">
            {role}, {company}
          </p>
        </div>
      </div>
      <blockquote className="text-white/80 italic">"{quote}"</blockquote>
    </div>
  )
}
