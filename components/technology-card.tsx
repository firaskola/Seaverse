import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface TechnologyCardProps {
  title: string
  description: string
  imageSrc: string
  href: string
  className?: string
}

export default function TechnologyCard({ title, description, imageSrc, href, className }: TechnologyCardProps) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-lg bg-dark-card/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border border-dark-border/50 hover:border-accent-orange/30",
        className,
      )}
    >
      <div className="aspect-video relative overflow-hidden">
        <Image
          src={imageSrc || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-dark-bg/50 to-transparent" />
      </div>

      <div className="p-6 relative z-10">
        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-accent-orange transition-colors duration-300">{title}</h3>
        <p className="text-gray-300 mb-4">{description}</p>

        <Link 
          href={href} 
          className="inline-flex items-center text-accent-orange hover:text-accent-orange-light transition-colors group/link"
        >
          Learn More 
          <ArrowRight className="ml-2 h-4 w-4 transform group-hover/link:translate-x-1 transition-transform duration-300" />
        </Link>
      </div>

      {/* Hover effect overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent-orange/5 to-accent-orange/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Glow effect */}
      <div className="absolute inset-0 bg-accent-orange/0 group-hover:bg-accent-orange/5 transition-colors duration-300 blur-xl" />
    </div>
  )
}
