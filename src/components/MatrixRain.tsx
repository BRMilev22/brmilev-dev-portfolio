'use client'

import { useEffect, useRef } from 'react'
import { useTheme } from '../contexts/ThemeContext'

interface Drop {
  x: number
  y: number
  speed: number
  chars: string[]
  opacity: number
}

export default function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { currentTheme } = useTheme()
  
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    
    let animationFrameId: number
    const drops: Drop[] = []
    
    // Matrix characters - mix of code symbols and Japanese katakana
    const matrixChars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZアイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン{}[]()<>/\\|=+-*&^%$#@!~`'
    
    const fontSize = 14
    const columns = Math.floor(window.innerWidth / fontSize)
    
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    
    // Initialize drops
    for (let i = 0; i < columns; i++) {
      drops.push({
        x: i * fontSize,
        y: Math.random() * -2000,
        speed: Math.random() * 3 + 1,
        chars: [],
        opacity: Math.random() * 0.5 + 0.3
      })
    }
    
    const animate = () => {
      // Fade effect for trails
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      
      ctx.font = `${fontSize}px monospace`
      
      drops.forEach((drop, index) => {
        // Generate new character
        if (Math.random() > 0.98) {
          drop.chars.push(matrixChars[Math.floor(Math.random() * matrixChars.length)])
          if (drop.chars.length > 20) {
            drop.chars.shift()
          }
        }
        
        // Draw the trail
        drop.chars.forEach((char, charIndex) => {
          const charY = drop.y - (charIndex * fontSize)
          const charOpacity = drop.opacity * ((drop.chars.length - charIndex) / drop.chars.length)
          
          if (charY > 0 && charY < canvas.height + fontSize) {
            // Use theme colors
            const intensity = charOpacity
            let color = currentTheme.colors.primary
            
            if (currentTheme.name === 'Matrix Code') {
              color = '#00ff41'
            } else if (currentTheme.name === 'Cyberpunk') {
              color = charIndex === 0 ? '#00d4ff' : '#00d4ff'
            } else if (currentTheme.name === 'Neon Dreams') {
              color = charIndex === 0 ? '#ff0080' : '#00ff80'
            } else if (currentTheme.name === 'Synthwave') {
              color = charIndex === 0 ? '#ff6b35' : '#f7931e'
            }
            
            // Brightest character at the tip
            if (charIndex === 0) {
              ctx.shadowColor = color
              ctx.shadowBlur = 10
              ctx.fillStyle = color
            } else {
              ctx.shadowBlur = 0
              ctx.fillStyle = color + Math.floor(intensity * 255).toString(16).padStart(2, '0')
            }
            
            ctx.fillText(char, drop.x, charY)
          }
        })
        
        // Move drop
        drop.y += drop.speed
        
        // Reset drop when it goes off screen
        if (drop.y > canvas.height + 200) {
          drop.y = Math.random() * -1000
          drop.chars = []
          drop.speed = Math.random() * 3 + 1
          drop.opacity = Math.random() * 0.5 + 0.3
        }
      })
      
      animationFrameId = requestAnimationFrame(animate)
    }
    
    resizeCanvas()
    animate()
    
    const handleResize = () => {
      resizeCanvas()
      // Reinitialize drops for new screen size
      drops.length = 0
      const newColumns = Math.floor(window.innerWidth / fontSize)
      for (let i = 0; i < newColumns; i++) {
        drops.push({
          x: i * fontSize,
          y: Math.random() * -2000,
          speed: Math.random() * 3 + 1,
          chars: [],
          opacity: Math.random() * 0.5 + 0.3
        })
      }
    }
    
    window.addEventListener('resize', handleResize)
    
    return () => {
      window.removeEventListener('resize', handleResize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [currentTheme])
  
  // Only show matrix rain for specific themes
  if (!['matrix', 'cyberpunk', 'neon'].includes(currentTheme.name.toLowerCase().replace(' ', ''))) {
    return null
  }
  
  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none opacity-30"
      style={{ mixBlendMode: 'screen' }}
    />
  )
}