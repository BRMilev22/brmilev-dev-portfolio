'use client'

import { useEffect, useRef, useState, useMemo } from 'react'
import { useTheme } from '../contexts/ThemeContext'

interface Particle {
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  opacity: number
  color: string
  mass: number
  charge: number
  trail: Array<{ x: number; y: number; opacity: number }>
}

interface Mouse {
  x: number
  y: number
  isActive: boolean
  magneticField: number
}

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouseRef = useRef<Mouse>({ x: 0, y: 0, isActive: false, magneticField: 0 })
  const [isVisible, setIsVisible] = useState(true)
  const { currentTheme } = useTheme()
  
  // Optimized particle configuration based on theme
  const particleConfig = useMemo(() => ({
    count: currentTheme.layout.particleCount,
    colors: [currentTheme.colors.primary, currentTheme.colors.secondary, currentTheme.colors.accent],
    connectionDistance: currentTheme.layout.animation === 'subtle' ? 80 : 
                      currentTheme.layout.animation === 'moderate' ? 100 : 120,
    trailLength: currentTheme.layout.animation === 'subtle' ? 3 : 
                currentTheme.layout.animation === 'moderate' ? 5 : 8,
    showTrails: currentTheme.layout.animation !== 'subtle'
  }), [currentTheme])
  
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    
    let animationFrameId: number
    const particles: Particle[] = []
    const mouse = mouseRef.current
    let lastFrameTime = 0
    const targetFPS = 60
    const frameInterval = 1000 / targetFPS
    
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    
    const createParticle = (): Particle => ({
      x: Math.random() * canvas.width || 0,
      y: Math.random() * canvas.height || 0,
      size: Math.max(0.5, Math.random() * 2 + 1),
      speedX: (Math.random() - 0.5) * 1.5,
      speedY: (Math.random() - 0.5) * 1.5,
      opacity: Math.max(0.1, Math.random() * 0.6 + 0.3),
      color: particleConfig.colors[Math.floor(Math.random() * particleConfig.colors.length)] || '#00d4ff',
      mass: Math.max(0.1, Math.random() * 0.3 + 0.3),
      charge: Math.random() > 0.5 ? 1 : -1,
      trail: []
    })
    
    // Initialize particles based on theme configuration
    for (let i = 0; i < particleConfig.count; i++) {
      particles.push(createParticle())
    }
    
    // Mouse event listeners
    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX
      mouse.y = e.clientY
      mouse.isActive = true
      mouse.magneticField = 150
    }
    
    const handleMouseLeave = () => {
      mouse.isActive = false
      mouse.magneticField = 0
    }
    
    canvas.addEventListener('mousemove', handleMouseMove)
    canvas.addEventListener('mouseleave', handleMouseLeave)
    
    const animate = (currentTime: number) => {
      // Frame rate limiting
      if (currentTime - lastFrameTime < frameInterval) {
        animationFrameId = requestAnimationFrame(animate)
        return
      }
      lastFrameTime = currentTime
      
      // Clear canvas efficiently
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      particles.forEach((particle, index) => {
        // Add current position to trail (only if trails are enabled)
        if (particleConfig.showTrails) {
          particle.trail.push({ x: particle.x, y: particle.y, opacity: particle.opacity })
          if (particle.trail.length > particleConfig.trailLength) {
            particle.trail.shift()
          }
        }
        
        // Physics: Gravitational attraction to mouse
        if (mouse.isActive) {
          const dx = mouse.x - particle.x
          const dy = mouse.y - particle.y
          const distance = Math.sqrt(dx * dx + dy * dy)
          
          if (distance < mouse.magneticField && distance > 0.1) {
            const force = (mouse.magneticField - distance) / mouse.magneticField * 0.003 * particle.charge
            const normalizedDx = dx / distance
            const normalizedDy = dy / distance
            
            if (isFinite(normalizedDx) && isFinite(normalizedDy)) {
              particle.speedX += normalizedDx * force
              particle.speedY += normalizedDy * force
            }
          }
        }
        
        // Apply physics: momentum and damping
        particle.x += particle.speedX || 0
        particle.y += particle.speedY || 0
        particle.speedX = (particle.speedX || 0) * 0.99 // Damping
        particle.speedY = (particle.speedY || 0) * 0.99 // Damping
        
        // Ensure positions remain finite
        if (!isFinite(particle.x)) particle.x = Math.random() * canvas.width
        if (!isFinite(particle.y)) particle.y = Math.random() * canvas.height
        
        // Elastic collision with edges
        if (particle.x < 0 || particle.x > canvas.width) {
          particle.speedX *= -0.8
          particle.x = Math.max(0, Math.min(canvas.width, particle.x))
        }
        if (particle.y < 0 || particle.y > canvas.height) {
          particle.speedY *= -0.8
          particle.y = Math.max(0, Math.min(canvas.height, particle.y))
        }
        
        // Draw particle trail (only if enabled and exists)
        if (particleConfig.showTrails && particle.trail.length > 0) {
          particle.trail.forEach((point, trailIndex) => {
            if (isFinite(point.x) && isFinite(point.y)) {
              const trailOpacity = Math.max(0, (trailIndex / particle.trail.length) * particle.opacity * 0.2)
              const trailRadius = Math.max(0.1, particle.size * (trailIndex / particle.trail.length) * 0.5)
              
              ctx.beginPath()
              ctx.arc(point.x, point.y, trailRadius, 0, Math.PI * 2)
              ctx.fillStyle = particle.color
              ctx.globalAlpha = trailOpacity
              ctx.fill()
            }
          })
        }
        
        // Draw main particle (simplified for performance)
        const pulseIntensity = particleConfig.showTrails ? 0.3 : 0.1
        const pulse = Math.sin(currentTime * 0.001 + index) * pulseIntensity + 1
        const radius = Math.max(0.1, particle.size * pulse) // Ensure radius is never 0 or negative
        
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, radius, 0, Math.PI * 2)
        
        // Simple fill or gradient based on performance setting
        if (particleConfig.showTrails && radius > 0.1) {
          const gradient = ctx.createRadialGradient(
            particle.x, particle.y, 0,
            particle.x, particle.y, radius
          )
          gradient.addColorStop(0, particle.color)
          gradient.addColorStop(1, particle.color + '00')
          ctx.fillStyle = gradient
        } else {
          ctx.fillStyle = particle.color
        }
        
        ctx.globalAlpha = particle.opacity
        ctx.fill()
        
        // Draw magnetic connections (optimized)
        for (let i = index + 1; i < particles.length; i++) {
          const otherParticle = particles[i]
          const dx = particle.x - otherParticle.x
          const dy = particle.y - otherParticle.y
          const distance = Math.sqrt(dx * dx + dy * dy)
          
          if (distance < particleConfig.connectionDistance) {
            // Optimized connection rendering
            const connectionStrength = (particleConfig.connectionDistance - distance) / particleConfig.connectionDistance
            const baseOpacity = connectionStrength * 0.1
            
            ctx.beginPath()
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(otherParticle.x, otherParticle.y)
            
            // Use simple gradient only for intense animations
            if (particleConfig.showTrails) {
              const lineGradient = ctx.createLinearGradient(
                particle.x, particle.y,
                otherParticle.x, otherParticle.y
              )
              lineGradient.addColorStop(0, particle.color)
              lineGradient.addColorStop(1, otherParticle.color)
              ctx.strokeStyle = lineGradient
            } else {
              ctx.strokeStyle = particle.color
            }
            
            ctx.globalAlpha = baseOpacity
            ctx.lineWidth = connectionStrength * 1.5
            ctx.stroke()
          }
        }
      })
      
      // Draw magnetic field visualization around mouse (simplified)
      if (mouse.isActive && particleConfig.showTrails) {
        ctx.beginPath()
        ctx.arc(mouse.x, mouse.y, mouse.magneticField, 0, Math.PI * 2)
        ctx.strokeStyle = currentTheme.colors.primary
        ctx.globalAlpha = 0.05
        ctx.lineWidth = 1
        ctx.stroke()
      }
      
      animationFrameId = requestAnimationFrame(animate)
    }
    
    resizeCanvas()
    animate()
    
    window.addEventListener('resize', resizeCanvas)
    
    // Visibility optimization
    const handleVisibilityChange = () => {
      setIsVisible(!document.hidden)
      if (document.hidden) {
        cancelAnimationFrame(animationFrameId)
      } else {
        animate()
      }
    }
    
    document.addEventListener('visibilitychange', handleVisibilityChange)
    
    return () => {
      window.removeEventListener('resize', resizeCanvas)
      canvas.removeEventListener('mousemove', handleMouseMove)
      canvas.removeEventListener('mouseleave', handleMouseLeave)
      document.removeEventListener('visibilitychange', handleVisibilityChange)
      cancelAnimationFrame(animationFrameId)
    }
  }, [particleConfig, currentTheme])
  
  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      style={{ 
        background: 'transparent',
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 0.3s ease'
      }}
    />
  )
}