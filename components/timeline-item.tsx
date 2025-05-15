"use client"

import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface TimelineItemProps {
  children: ReactNode
  className?: string
  index: number
}

export default function TimelineItem({ children, className, index }: TimelineItemProps) {
  const { ref, isInView } = useScrollReveal({
    threshold: 0.5,
    rootMargin: "-100px 0px -100px 0px",
    triggerOnce: false,
  })

  return (
    <div
      ref={ref}
      className={cn("timeline-item", isInView && "is-revealed", !isInView && "is-exiting", className)}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {children}
    </div>
  )
}
