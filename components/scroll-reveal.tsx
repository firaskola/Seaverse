"use client"

import type React from "react"

import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface ScrollRevealProps {
  children: ReactNode
  className?: string
  animation?: "fade-up" | "fade-right" | "fade-left" | "scale" | "rotate" | "stagger"
  threshold?: number
  delay?: number
  triggerOnce?: boolean
  rootMargin?: string
  as?: React.ElementType
}

export default function ScrollReveal({
  children,
  className,
  animation = "fade-up",
  threshold = 0.1,
  delay = 0,
  triggerOnce = true,
  rootMargin = "0px",
  as: Component = "div",
}: ScrollRevealProps) {
  const { ref, isInView } = useScrollReveal({
    threshold,
    rootMargin,
    triggerOnce,
  })

  return (
    <Component
      ref={ref}
      className={cn(`reveal-${animation}`, isInView && "is-revealed", className)}
      style={{ transitionDelay: delay ? `${delay}ms` : undefined }}
    >
      {children}
    </Component>
  )
}
