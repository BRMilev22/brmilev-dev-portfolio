'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Github, Linkedin, Mail } from 'lucide-react'
import Image from 'next/image'

const roles = [
  'Full-Stack Developer',
  'iOS Developer', 
  'UI/UX Enthusiast',
  'Swift Expert',
  'React Specialist'
]

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const role = roles[currentRole]
    let timeout: NodeJS.Timeout

    if (!isDeleting) {
      if (displayText.length < role.length) {
        timeout = setTimeout(() => {
          setDisplayText(role.slice(0, displayText.length + 1))
        }, 100)
      } else {
        timeout = setTimeout(() => setIsDeleting(true), 2000)
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1))
        }, 50)
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

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-6 py-20">
      {/* Background Grid */}
      <div className="absolute inset-0 cyber-grid opacity-20" />
      
      <div className="container mx-auto text-center relative z-10">
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative inline-block">
            <div className="w-48 h-48 mx-auto mb-8 relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyber-blue to-cyber-purple animate-pulse" />
              <div className="absolute inset-2 rounded-full overflow-hidden border-4 border-white/10">
                <Image
                  src="/me.jpg"
                  alt="Boris Milev"
                  width={192}
                  height={192}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="space-y-6 mb-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold">
            <span className="text-white">Hi, I'm </span>
            <span className="text-gradient">Boris Milev</span>
          </h1>
          
          <div className="text-2xl md:text-3xl font-medium h-12 flex items-center justify-center">
            <span className="text-cyber-blue font-mono">
              {displayText}
              <span className="animate-pulse">|</span>
            </span>
          </div>

          <p className="text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
            Born April 8th, 2008. Student at VSCPI (Vocational School for Computer Programming and Innovation) 
            in Burgas, Bulgaria. I prioritize modern UI/UX and create cutting-edge applications 
            with the latest technologies.
          </p>
        </motion.div>

        <motion.div
          className="flex items-center justify-center space-x-6 mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <motion.a
            href="https://github.com/BRMilev22"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 glass rounded-full hover:neon-blue transition-all duration-300 hover-lift"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github size={24} />
          </motion.a>
          
          <motion.a
            href="https://www.linkedin.com/in/boris-milev-792546304/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 glass rounded-full hover:neon-blue transition-all duration-300 hover-lift"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Linkedin size={24} />
          </motion.a>
          
          <motion.a
            href="mailto:zvarazoku9@icloud.com"
            className="p-3 glass rounded-full hover:neon-blue transition-all duration-300 hover-lift"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Mail size={24} />
          </motion.a>
        </motion.div>

        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          <motion.button
            onClick={scrollToProjects}
            className="px-8 py-4 bg-gradient-to-r from-cyber-blue to-cyber-purple rounded-full font-semibold text-white hover:shadow-2xl hover:shadow-cyber-blue/25 transition-all duration-300 hover-lift"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View My Work
          </motion.button>
          
          <p className="text-cyber-green font-mono text-sm">
            💼 Available for work
          </p>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1 }}
        >
          <motion.div
            className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div
              className="w-1 h-3 bg-cyber-blue rounded-full mt-2"
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}