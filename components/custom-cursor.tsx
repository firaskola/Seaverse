"use client"

import { useEffect, useState } from "react"

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [ripples, setRipples] = useState<{ id: number; x: number; y: number }[]>([])
  const [isVisible, setIsVisible] = useState(false)
  let rippleId = 0

  useEffect(() => {
    const updateCursorPosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
      setIsVisible(true)
    }

    const handleClick = (e: MouseEvent) => {
      const newRipple = {
        id: rippleId++,
        x: e.clientX,
        y: e.clientY,
      }

      setRipples((prev) => [...prev, newRipple])

      setTimeout(() => {
        setRipples((prev) => prev.filter((ripple) => ripple.id !== newRipple.id))
      }, 1000)
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    const handleMouseEnter = () => {
      setIsVisible(true)
    }

    window.addEventListener("mousemove", updateCursorPosition)
    window.addEventListener("click", handleClick)
    document.addEventListener("mouseleave", handleMouseLeave)
    document.addEventListener("mouseenter", handleMouseEnter)

    return () => {
      window.removeEventListener("mousemove", updateCursorPosition)
      window.removeEventListener("click", handleClick)
      document.removeEventListener("mouseleave", handleMouseLeave)
      document.removeEventListener("mouseenter", handleMouseEnter)
    }
  }, [])

  // Don't render on mobile devices
  if (typeof window !== "undefined" && window.innerWidth <= 768) {
    return null
  }

  return (
    <>
      <div
        className={`custom-cursor bg-seafoam-blue/30 backdrop-blur-sm ${isVisible ? "opacity-100" : "opacity-0"}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />
      {ripples.map((ripple) => (
        <div
          key={ripple.id}
          className="cursor-ripple"
          style={{
            left: `${ripple.x}px`,
            top: `${ripple.y}px`,
          }}
        />
      ))}
    </>
  )
}
