'use client'

import { useEffect, useRef } from 'react'
import { useTheme } from '../contexts/ThemeContext'

export default function ThemeBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { currentTheme } = useTheme()
  
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    
    let animationFrameId: number
    
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      drawPattern()
    }
    
    const drawPattern = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      switch (currentTheme.layout.backgroundPattern) {
        case 'matrix':
          drawMatrixPattern()
          break
        case 'waves':
          drawWavePattern()
          break
        case 'grid':
          drawGridPattern()
          break
        case 'aurora':
          drawAuroraPattern()
          break
        default:
          // particles pattern is handled by ParticleBackground
          break
      }
    }
    
    const drawMatrixPattern = () => {
      const fontSize = 14
      const columns = Math.floor(canvas.width / fontSize)
      const drops: number[] = Array(columns).fill(0)
      
      const animate = () => {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)'
        ctx.fillRect(0, 0, canvas.width, canvas.height)
        
        ctx.fillStyle = currentTheme.colors.primary
        ctx.font = `${fontSize}px monospace`
        
        for (let i = 0; i < drops.length; i++) {
          const text = String.fromCharCode(0x30A0 + Math.random() * 96)
          ctx.fillText(text, i * fontSize, drops[i] * fontSize)
          
          if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0
          }
          drops[i]++
        }
        
        animationFrameId = requestAnimationFrame(animate)
      }
      
      animate()
    }
    
    const drawWavePattern = () => {
      let time = 0
      
      const animate = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        
        const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
        gradient.addColorStop(0, currentTheme.colors.primary + '10')
        gradient.addColorStop(0.5, currentTheme.colors.secondary + '15')
        gradient.addColorStop(1, currentTheme.colors.accent + '10')
        
        ctx.strokeStyle = gradient
        ctx.lineWidth = 2
        
        for (let i = 0; i < 3; i++) {
          ctx.beginPath()
          for (let x = 0; x < canvas.width; x += 10) {
            const y = canvas.height / 2 + 
              Math.sin((x * 0.01) + (time * 0.02) + (i * 2)) * (50 + i * 20)
            if (x === 0) {
              ctx.moveTo(x, y)
            } else {
              ctx.lineTo(x, y)
            }
          }
          ctx.stroke()
        }
        
        time++
        animationFrameId = requestAnimationFrame(animate)
      }
      
      animate()
    }
    
    const drawGridPattern = () => {
      const gridSize = 50
      const lineOpacity = '08'
      
      ctx.strokeStyle = currentTheme.colors.primary + lineOpacity
      ctx.lineWidth = 1
      
      // Vertical lines
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, canvas.height)
        ctx.stroke()
      }
      
      // Horizontal lines
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(canvas.width, y)
        ctx.stroke()
      }
      
      // Add glowing intersections
      ctx.fillStyle = currentTheme.colors.primary + '20'
      for (let x = 0; x < canvas.width; x += gridSize) {
        for (let y = 0; y < canvas.height; y += gridSize) {
          if (Math.random() > 0.98) {
            ctx.beginPath()
            ctx.arc(x, y, 2, 0, Math.PI * 2)
            ctx.fill()
          }
        }
      }
    }
    
    const drawAuroraPattern = () => {
      let time = 0
      
      const animate = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        
        const imageData = ctx.createImageData(canvas.width, canvas.height)
        const data = imageData.data
        
        for (let x = 0; x < canvas.width; x += 2) {
          for (let y = 0; y < canvas.height; y += 2) {
            const value = Math.sin(x * 0.01 + time * 0.02) * 
                         Math.cos(y * 0.01 + time * 0.03) * 
                         Math.sin((x + y) * 0.008 + time * 0.01)
            
            if (value > 0.3) {
              const index = (y * canvas.width + x) * 4
              const intensity = (value - 0.3) * 100
              
              data[index] = parseInt(currentTheme.colors.primary.slice(1, 3), 16) * (intensity / 255)
              data[index + 1] = parseInt(currentTheme.colors.secondary.slice(1, 3), 16) * (intensity / 255)
              data[index + 2] = parseInt(currentTheme.colors.accent.slice(1, 3), 16) * (intensity / 255)
              data[index + 3] = intensity * 0.5
            }
          }
        }
        
        ctx.putImageData(imageData, 0, 0)
        time++
        animationFrameId = requestAnimationFrame(animate)
      }
      
      animate()
    }
    
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)
    
    return () => {
      window.removeEventListener('resize', resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [currentTheme])
  
  // Only render if the theme uses a special background pattern
  if (currentTheme.layout.backgroundPattern === 'particles') {
    return null
  }
  
  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      style={{ 
        background: 'transparent',
        opacity: 0.6
      }}
    />
  )
}