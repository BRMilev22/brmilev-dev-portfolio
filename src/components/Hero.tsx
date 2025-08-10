'use client'

import React from 'react'
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion'
import { useEffect, useState, useRef } from 'react'
import { Github, Linkedin, Mail, ChevronDown, Sparkles, Zap, Code2, Rocket, Eye } from 'lucide-react'
import Image from 'next/image'
import { useTheme } from '../contexts/ThemeContext'
import MagneticButton from './MagneticButton'

const roles = [
  { text: 'Full-Stack Developer', icon: Code2, color: '#00d4ff' },
  { text: 'iOS Developer', icon: Sparkles, color: '#8b5cf6' }, 
  { text: 'UI/UX Enthusiast', icon: Zap, color: '#ec4899' },
  { text: 'Swift Expert', icon: Code2, color: '#00ff80' },
  { text: 'React Specialist', icon: Sparkles, color: '#ffb3ba' }
]

const stats = [
  { number: '10+', label: 'Projects Built', desc: 'Full-stack applications' },
  { number: '5+', label: 'Tech Stacks', desc: 'Mastered completely' },
  { number: '2+', label: 'Years Coding', desc: 'Continuous learning' },
  { number: '100%', label: 'Passion Driven', desc: 'Love what I do' }
]

export default function Hero() {
  const { currentTheme } = useTheme()
  const [currentRole, setCurrentRole] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)
  const heroRef = useRef<HTMLElement>(null)

  // Simple mouse tracking for position only
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  // Typing animation
  useEffect(() => {
    const role = roles[currentRole]
    let timeout: NodeJS.Timeout

    if (!isDeleting) {
      if (displayText.length < role.text.length) {
        timeout = setTimeout(() => {
          setDisplayText(role.text.slice(0, displayText.length + 1))
        }, 80)
      } else {
        timeout = setTimeout(() => setIsDeleting(true), 3000)
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1))
        }, 40)
      } else {
        setIsDeleting(false)
        setCurrentRole((prev) => (prev + 1) % roles.length)
      }
    }

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, currentRole])

  const scrollToProjects = () => {
    const element = document.querySelector('#projects')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const discoverProjects = () => {
    const projects = document.querySelectorAll('[data-project-card]')
    projects.forEach((project, index) => {
      setTimeout(() => {
        project.classList.add('animate-pulse')
        setTimeout(() => project.classList.remove('animate-pulse'), 1000)
      }, index * 200)
    })
    scrollToProjects()
  }

  return (
    <section 
      ref={heroRef}
      id="home" 
      className="relative min-h-screen flex items-center justify-center px-6 py-20 perspective-2000 overflow-hidden"
    >
      {/* Interactive Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="cyber-grid opacity-10" />
        
        {/* Floating Background Elements */}
        <motion.div
          className="absolute top-20 left-20 w-20 h-20 rounded-full opacity-20"
          style={{
            background: currentTheme.effects.gradient,
            scale: isHovered ? 1.2 : 1
          }}
          animate={{
            y: [-20, 20, -20],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute bottom-32 right-32 w-16 h-16 rounded-lg opacity-15"
          style={{
            background: currentTheme.colors.secondary,
          }}
          animate={{
            x: [-30, 30, -30],
            rotate: [0, -180, -360]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
      
      <div className="container mx-auto text-center relative z-10">
        {/* Profile Section */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
        >
          <div className="relative inline-block transform-3d">
            {/* Profile Image with 3D Effects */}
            <motion.div 
              className="w-64 h-64 mx-auto mb-8 relative"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Animated Rings */}
              <motion.div 
                className="absolute inset-0 rounded-full border-2 opacity-50"
                style={{ borderColor: currentTheme.colors.primary }}
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              />
              <motion.div 
                className="absolute inset-4 rounded-full border-2 opacity-30"
                style={{ borderColor: currentTheme.colors.secondary }}
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              />
              
              {/* Holographic Effect */}
              <div 
                className="absolute inset-6 rounded-full overflow-hidden border-4 border-white/20"
                style={{ 
                  background: `conic-gradient(from 0deg, ${currentTheme.colors.primary}20, transparent, ${currentTheme.colors.secondary}20, transparent, ${currentTheme.colors.accent}20)`,
                  boxShadow: currentTheme.effects.shadow
                }}
              >
                <Image
                  src="/me.jpg"
                  alt="Boris Milev"
                  width={256}
                  height={256}
                  className="w-full h-full object-cover rounded-full"
                  priority
                />
                
                {/* Interactive Glow */}
                <motion.div 
                  className="absolute inset-0 rounded-full"
                  style={{ 
                    background: `radial-gradient(circle at 50% 50%, ${currentTheme.colors.primary}40 0%, transparent 60%)`,
                    opacity: isHovered ? 0.8 : 0.3
                  }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
            
            {/* Floating Skills Icons */}
            {roles.slice(0, 3).map((role, index) => {
              const angle = (index * 120) * (Math.PI / 180)
              const radius = 140
              const x = Math.cos(angle) * radius
              const y = Math.sin(angle) * radius
              
              return (
                <motion.div
                  key={index}
                  className="absolute w-12 h-12 rounded-xl flex items-center justify-center border border-white/20 cursor-pointer"
                  style={{
                    left: '50%',
                    top: '50%',
                    marginLeft: x - 24,
                    marginTop: y - 24,
                    background: currentTheme.colors.surface,
                    boxShadow: `0 0 20px ${role.color}40`
                  }}
                  animate={{
                    rotate: [0, 360],
                    y: [0, -10, 0]
                  }}
                  transition={{
                    rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                    y: { duration: 3, repeat: Infinity, delay: index * 0.5 }
                  }}
                  whileHover={{ 
                    scale: 1.3, 
                    boxShadow: `0 0 30px ${role.color}80`,
                    z: 50 
                  }}
                >
                  <role.icon 
                    size={20} 
                    style={{ color: role.color }}
                  />
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Interactive Name & Title */}
        <motion.div
          className="space-y-8 mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <motion.h1 
            className="text-6xl md:text-8xl font-bold leading-tight flex flex-col items-center"
            style={{ 
              fontFamily: currentTheme.typography.fontFamily,
              fontWeight: currentTheme.typography.headingWeight,
              textTransform: currentTheme.typography.textTransform,
              letterSpacing: currentTheme.typography.letterSpacing
            }}
            whileHover={{ scale: 1.02 }}
          >
            <motion.span 
              className="block"
              style={{ color: currentTheme.colors.text }}
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              HI, I'M
            </motion.span>
            <motion.span 
              className="text-gradient block cursor-pointer"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              whileHover={{ 
                textShadow: `0 0 20px ${currentTheme.colors.primary}80`,
                scale: 1.05
              }}
            >
              BORIS MILEV
            </motion.span>
          </motion.h1>
          
          {/* Dynamic Role Display */}
          <motion.div 
            className="text-2xl md:text-4xl font-medium h-16 flex items-center justify-center"
            style={{ fontFamily: currentTheme.typography.fontFamily }}
          >
            <motion.div
              className="flex items-center gap-4 px-8 py-4 rounded-2xl border"
              style={{
                background: currentTheme.colors.surface,
                borderColor: roles[currentRole].color + '40',
                boxShadow: `0 0 30px ${roles[currentRole].color}30`
              }}
              key={currentRole}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                {React.createElement(roles[currentRole].icon, {
                  size: 32,
                  style: { color: roles[currentRole].color }
                })}
              </motion.div>
              
              <span style={{ color: roles[currentRole].color }}>
                {displayText}
                <motion.span
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  |
                </motion.span>
              </span>
            </motion.div>
          </motion.div>

          <motion.p 
            className="text-xl max-w-3xl mx-auto leading-relaxed"
            style={{ color: currentTheme.colors.text + 'CC' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            Born April 8th, 2008. Student at VSCPI (Vocational School for Computer Programming and Innovation) 
            in Burgas, Bulgaria. I prioritize modern UI/UX and create cutting-edge applications 
            with the latest technologies.
          </motion.p>
        </motion.div>

        {/* Interactive Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center p-6 rounded-2xl border cursor-pointer group"
              style={{
                background: currentTheme.colors.surface,
                borderColor: currentTheme.colors.border + '40'
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
              whileHover={{ 
                scale: 1.05,
                borderColor: currentTheme.colors.primary + '80',
                boxShadow: `0 10px 30px ${currentTheme.colors.primary}30`
              }}
            >
              <motion.div
                className="text-3xl font-bold mb-2 text-gradient"
                whileHover={{ scale: 1.1 }}
              >
                {stat.number}
              </motion.div>
              <div 
                className="text-sm font-medium mb-1"
                style={{ color: currentTheme.colors.text }}
              >
                {stat.label}
              </div>
              <div 
                className="text-xs opacity-70"
                style={{ color: currentTheme.colors.text }}
              >
                {stat.desc}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Interactive Social Links */}
        <motion.div
          className="flex items-center justify-center gap-8 mb-16"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {[
            { icon: Github, href: 'https://github.com/BRMilev22', label: 'GitHub' },
            { icon: Linkedin, href: 'https://www.linkedin.com/in/boris-milev-792546304/', label: 'LinkedIn' },
            { icon: Mail, href: 'mailto:zvarazoku9@icloud.com', label: 'Email' }
          ].map((social, index) => (
            <MagneticButton
              key={social.label}
              className="group relative p-4 rounded-2xl border transition-all duration-300"
              style={{
                background: currentTheme.colors.surface,
                borderColor: currentTheme.colors.border + '40'
              }}
              onClick={() => window.open(social.href, '_blank')}
              strength={0.4}
            >
              <motion.div
                whileHover={{ rotate: 360, scale: 1.2 }}
                transition={{ duration: 0.6 }}
              >
                <social.icon 
                  size={28} 
                  style={{ color: currentTheme.colors.primary }}
                />
              </motion.div>
              
              {/* Tooltip */}
              <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 px-3 py-1 rounded-lg text-xs opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                   style={{ 
                     background: currentTheme.colors.surface,
                     color: currentTheme.colors.text,
                     border: `1px solid ${currentTheme.colors.border}40`
                   }}>
                {social.label}
              </div>
            </MagneticButton>
          ))}
        </motion.div>

        {/* Interactive CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <MagneticButton
            onClick={discoverProjects}
            className="group relative px-10 py-5 rounded-full font-bold text-lg transition-all duration-500 overflow-hidden"
            style={{
              background: currentTheme.effects.gradient,
              color: '#ffffff'
            }}
            strength={0.3}
          >
            <span className="relative z-10 flex items-center gap-3">
              <Rocket size={24} />
              Discover My Projects
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.div>
            </span>
            
            {/* Animated background */}
            <motion.div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
              style={{ 
                background: `linear-gradient(45deg, ${currentTheme.colors.primary}, ${currentTheme.colors.secondary}, ${currentTheme.colors.accent})`
              }}
            />
          </MagneticButton>
          
          <MagneticButton
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 rounded-full font-semibold border-2 transition-all duration-300 group"
            style={{
              borderColor: currentTheme.colors.primary,
              color: currentTheme.colors.primary
            }}
            strength={0.2}
          >
            <span className="flex items-center gap-2">
              <Eye size={20} />
              Learn More About Me
            </span>
          </MagneticButton>
        </motion.div>

        {/* Status Indicator */}
        <motion.div
          className="flex items-center justify-center gap-3 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <motion.div
            className="w-3 h-3 rounded-full"
            style={{ background: currentTheme.colors.accent }}
            animate={{ scale: [1, 1.3, 1], opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <span 
            className="text-sm font-medium"
            style={{ color: currentTheme.colors.text + 'AA' }}
          >
            💼 Available for freelance work & collaboration
          </span>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.5 }}
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <motion.div
            className="flex flex-col items-center gap-2 text-center group"
            whileHover={{ scale: 1.1 }}
          >
            <span 
              className="text-xs font-medium opacity-70 group-hover:opacity-100 transition-opacity"
              style={{ color: currentTheme.colors.text }}
            >
              Scroll to explore
            </span>
            <motion.div
              className="w-6 h-10 border-2 rounded-full flex justify-center relative overflow-hidden"
              style={{ borderColor: currentTheme.colors.primary + '60' }}
              animate={{ 
                borderColor: [
                  currentTheme.colors.primary + '40',
                  currentTheme.colors.primary + '80',
                  currentTheme.colors.primary + '40'
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <motion.div
                className="w-1 h-3 rounded-full mt-2"
                style={{ background: currentTheme.colors.primary }}
                animate={{ y: [0, 16, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>
            <ChevronDown 
              size={16} 
              style={{ color: currentTheme.colors.primary }}
              className="opacity-70 group-hover:opacity-100 transition-opacity" 
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}