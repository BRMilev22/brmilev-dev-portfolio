'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Github, Linkedin, Mail, Heart, Code, Coffee } from 'lucide-react'

export default function Footer() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Tech Stack', href: '#tech' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ]

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/BRMilev22',
      label: 'GitHub'
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/boris-milev-792546304/',
      label: 'LinkedIn'
    },
    {
      icon: Mail,
      href: 'mailto:zvarazoku9@icloud.com',
      label: 'Email'
    }
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="relative py-16 px-6 border-t border-white/10">
      <div className="container mx-auto" ref={ref}>
        {/* Main Footer Content */}
        <motion.div
          className="grid md:grid-cols-3 gap-12 mb-12"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          {/* Brand Section */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="text-3xl font-bold text-gradient">BM</div>
            <p className="text-white/70 leading-relaxed">
              Full-Stack Developer passionate about creating innovative solutions 
              with modern technologies and beautiful user experiences.
            </p>
            <div className="flex items-center gap-2 text-sm text-white/60">
              <MapPin size={16} />
              <span>Burgas, Bulgaria</span>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold text-white mb-6">Quick Links</h3>
            <nav className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className="block text-white/70 hover:text-cyber-blue transition-colors duration-300"
                  whileHover={{ x: 5 }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection(link.href)
                  }}
                >
                  {link.name}
                </motion.a>
              ))}
              
              {/* Additional links */}
              <motion.a
                href="/sitemap.xml"
                className="block text-white/70 hover:text-cyber-blue transition-colors duration-300 text-sm"
                whileHover={{ x: 5 }}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                target="_blank"
                rel="noopener noreferrer"
              >
                Sitemap
              </motion.a>
              
              <motion.a
                href="https://github.com/BRMilev22"
                className="block text-white/70 hover:text-cyber-blue transition-colors duration-300 text-sm"
                whileHover={{ x: 5 }}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.5, delay: 0.9 }}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub Profile
              </motion.a>
            </nav>
          </motion.div>

          {/* Connect Section */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-xl font-semibold text-white mb-6">Let&apos;s Connect</h3>
            <p className="text-white/70 mb-6">
              Follow me on social media or send me an email to start a conversation.
            </p>
            
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 glass rounded-full hover:neon-blue transition-all duration-300 hover-lift"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>

            {/* Availability Status */}
            <motion.div
              className="flex items-center gap-2 mt-6 p-3 glass rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-green-400 text-sm font-medium">Available for work</span>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.div
          className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-8"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={isInView ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        />

        {/* Bottom Section */}
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between gap-6"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          {/* Copyright */}
          <div className="text-white/60 text-sm text-center md:text-left">
            <p>
              © {currentYear} Boris Milev. All rights reserved. 
              <span className="hidden md:inline"> • Student at VSCPI Burgas</span>
            </p>
          </div>

          {/* Made with love */}
          <motion.div
            className="flex items-center gap-2 text-white/60 text-sm"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <span>Made with</span>
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              <Heart size={16} className="text-red-500 fill-current" />
            </motion.div>
            <span>and</span>
            <Coffee size={16} className="text-amber-500" />
            <span>using</span>
            <Code size={16} className="text-cyber-blue" />
          </motion.div>
        </motion.div>

        {/* Back to top */}
        <motion.button
          onClick={() => scrollToSection('#home')}
          className="fixed bottom-8 right-8 p-3 glass rounded-full hover:neon-blue transition-all duration-300 hover-lift z-40"
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <motion.div
            animate={{ y: [0, -3, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            ↑
          </motion.div>
        </motion.button>
      </div>
    </footer>
  )
}

function MapPin({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}