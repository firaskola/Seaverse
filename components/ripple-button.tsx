"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useState, useRef } from "react"
import type { ButtonProps } from "@/components/ui/button"

interface RippleButtonProps extends ButtonProps {
  rippleColor?: string
}

export default function RippleButton({
  children,
  className,
  rippleColor = "rgba(255, 255, 255, 0.7)",
  ...props
}: RippleButtonProps) {
  const [ripples, setRipples] = useState<{ id: number; x: number; y: number; size: number }[]>([])
  const buttonRef = useRef<HTMLButtonElement>(null)
  let rippleId = 0

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current) return

    const button = buttonRef.current
    const rect = button.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    // Calculate size based on button dimensions
    const size = Math.max(rect.width, rect.height) * 2

    const newRipple = {
      id: rippleId++,
      x,
      y,
      size,
    }

    setRipples((prev) => [...prev, newRipple])

    // Remove ripple after animation completes
    setTimeout(() => {
      setRipples((prev) => prev.filter((ripple) => ripple.id !== newRipple.id))
    }, 800)
  }

  return (
    <Button ref={buttonRef} className={cn("relative overflow-hidden", className)} onClick={handleClick} {...props}>
      {children}

      {/* Ripple effects */}
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="absolute rounded-full pointer-events-none animate-ripple-effect"
          style={{
            left: ripple.x,
            top: ripple.y,
            width: ripple.size,
            height: ripple.size,
            transform: "translate(-50%, -50%) scale(0)",
            backgroundColor: rippleColor,
          }}
        />
      ))}
    </Button>
  )
}
