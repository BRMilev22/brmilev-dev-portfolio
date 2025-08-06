'use client'

import { useEffect, useRef } from 'react'

interface Particle {
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  opacity: number
  color: string
}

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    
    let animationFrameId: number
    const particles: Particle[] = []
    const colors = ['#00d4ff', '#8b5cf6', '#ec4899', '#10b981']
    
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    
    const createParticle = (): Particle => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 2 + 0.5,
      speedX: (Math.random() - 0.5) * 0.5,
      speedY: (Math.random() - 0.5) * 0.5,
      opacity: Math.random() * 0.5 + 0.1,
      color: colors[Math.floor(Math.random() * colors.length)]
    })
    
    // Initialize particles (reduced from 100 to 20 for performance)
    for (let i = 0; i < 20; i++) {
      particles.push(createParticle())
    }
    
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      particles.forEach((particle, index) => {
        // Update position
        particle.x += particle.speedX
        particle.y += particle.speedY
        
        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1
        
        // Draw particle
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = particle.color
        ctx.globalAlpha = particle.opacity
        ctx.fill()
        
        // Draw connections (optimized - only check next particles to avoid duplicates)
        for (let i = index + 1; i < particles.length; i++) {
          const otherParticle = particles[i]
          const dx = particle.x - otherParticle.x
          const dy = particle.y - otherParticle.y
          const distance = Math.sqrt(dx * dx + dy * dy)
          
          if (distance < 80) {
            ctx.beginPath()
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(otherParticle.x, otherParticle.y)
            ctx.strokeStyle = particle.color
            ctx.globalAlpha = (80 - distance) / 80 * 0.05
            ctx.lineWidth = 0.3
            ctx.stroke()
          }
        }
      })
      
      animationFrameId = requestAnimationFrame(animate)
    }
    
    resizeCanvas()
    animate()
    
    window.addEventListener('resize', resizeCanvas)
    
    return () => {
      window.removeEventListener('resize', resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])
  
  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      style={{ background: 'transparent' }}
    />
  )
}