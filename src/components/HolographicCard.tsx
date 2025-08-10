'use client'

import { useRef, useState } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

interface HolographicCardProps {
  children: React.ReactNode
  className?: string
  intensity?: number
}

export default function HolographicCard({ 
  children, 
  className = '',
  intensity = 1
}: HolographicCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x, { damping: 30, stiffness: 200, mass: 0.5 })
  const mouseYSpring = useSpring(y, { damping: 30, stiffness: 200, mass: 0.5 })

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [0, 0])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [0, 0])

  const glareX = useTransform(mouseXSpring, [-0.5, 0.5], [-100, 100])
  const glareY = useTransform(mouseYSpring, [-0.5, 0.5], [-100, 100])

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return

    const rect = ref.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    const mouseX = (e.clientX - centerX) / (rect.width / 2)
    const mouseY = (e.clientY - centerY) / (rect.height / 2)

    x.set(mouseX)
    y.set(mouseY)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    x.set(0)
    y.set(0)
  }

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  return (
    <motion.div
      ref={ref}
      className={`relative perspective-1000 ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      style={{
        transformStyle: 'preserve-3d',
      }}
    >
      <motion.div
        className="relative w-full h-full"
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        animate={{
          scale: isHovered ? 1.01 : 1
        }}
      >
        {/* Main content */}
        <div className="relative z-10 w-full h-full">
          {children}
        </div>

        {/* Holographic glare effect */}
        <motion.div
          className="absolute inset-0 pointer-events-none overflow-hidden rounded-lg"
          style={{ opacity: isHovered ? 0.6 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="absolute w-full h-full"
            style={{
              background: `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.8) 0%, rgba(0,212,255,0.4) 25%, transparent 50%)`,
              x: glareX,
              y: glareY,
              transform: 'translate(-50%, -50%)',
            }}
          />
        </motion.div>

        {/* Rainbow hologram effect */}
        <motion.div
          className="absolute inset-0 pointer-events-none overflow-hidden rounded-lg"
          style={{
            opacity: isHovered ? 0.3 : 0,
            background: `linear-gradient(45deg, 
              rgba(255,0,150,0.1) 0%,
              rgba(0,255,255,0.1) 25%,
              rgba(150,0,255,0.1) 50%,
              rgba(255,150,0,0.1) 75%,
              rgba(0,255,150,0.1) 100%
            )`,
            backgroundSize: '200% 200%',
          }}
          animate={{
            backgroundPosition: isHovered ? ['0% 0%', '100% 100%', '0% 0%'] : '0% 0%',
          }}
          transition={{
            duration: 3,
            repeat: isHovered ? Infinity : 0,
            ease: 'linear',
          }}
        />

        {/* Depth shadows */}
        <motion.div
          className="absolute inset-0 bg-black/20 rounded-lg"
          style={{
            z: -1,
            x: useTransform(mouseXSpring, [-0.5, 0.5], [10, -10]),
            y: useTransform(mouseYSpring, [-0.5, 0.5], [10, -10]),
            opacity: isHovered ? 0.8 : 0,
          }}
          transition={{ duration: 0.3 }}
        />

        {/* Simplified depth effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 rounded-lg border border-white/5"
          style={{
            z: -2,
            opacity: isHovered ? 0.3 : 0,
          }}
          transition={{ duration: 0.3 }}
        />

        {/* Subtle glow effect only */}
        {isHovered && (
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-transparent to-purple-500/10 rounded-lg pointer-events-none"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
          />
        )}
      </motion.div>
    </motion.div>
  )
}