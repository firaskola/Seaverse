"use client"

import { useEffect, useRef, useState } from "react"

type ScrollRevealOptions = {
  threshold?: number
  rootMargin?: string
  triggerOnce?: boolean
}

export function useScrollReveal({
  threshold = 0.1,
  rootMargin = "0px",
  triggerOnce = false,
}: ScrollRevealOptions = {}) {
  const ref = useRef<HTMLElement>(null)
  const [isInView, setIsInView] = useState(false)
  const [hasBeenInView, setHasBeenInView] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isElementInView = entry.isIntersecting
        setIsInView(isElementInView)

        if (isElementInView && !hasBeenInView) {
          setHasBeenInView(true)
        }

        // If triggerOnce is true and the element has been in view, unobserve it
        if (triggerOnce && isElementInView) {
          observer.unobserve(element)
        }
      },
      {
        threshold,
        rootMargin,
      },
    )

    observer.observe(element)

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [threshold, rootMargin, triggerOnce, hasBeenInView])

  return { ref, isInView, hasBeenInView }
}
