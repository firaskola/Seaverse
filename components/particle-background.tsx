"use client"

import { useEffect, useState } from "react"

interface ParticleBackgroundProps {
  count?: number
  color?: string
}

export default function ParticleBackground({ count = 20, color = "rgba(56, 163, 165, 0.2)" }: ParticleBackgroundProps) {
  const [particles, setParticles] = useState<
    Array<{
      id: number
      size: number
      x: number
      y: number
      duration: number
      delay: number
    }>
  >([])

  useEffect(() => {
    const newParticles = []
    for (let i = 0; i < count; i++) {
      newParticles.push({
        id: i,
        size: Math.random() * 10 + 5,
        x: Math.random() * 100,
        y: Math.random() * 100,
        duration: Math.random() * 10 + 10,
        delay: Math.random() * 5,
      })
    }
    setParticles(newParticles)
  }, [count])

  return (
    <div className="particle-container">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="particle"
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            backgroundColor: color,
            animationDuration: `${particle.duration}s`,
            animationDelay: `${particle.delay}s`,
          }}
        />
      ))}
    </div>
  )
}
