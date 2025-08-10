'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import ParticleBackground from '@/components/ParticleBackground'
import ThemeBackground from '@/components/ThemeBackground'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import TechStack from '@/components/TechStack'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import LoadingScreen from '@/components/LoadingScreen'
import ThemeSwitcher from '@/components/ThemeSwitcher'
import GitHubStats from '@/components/GitHubStats'
import MatrixRain from '@/components/MatrixRain'
import StructuredData from '@/components/StructuredData'
import { ThemeProvider, useTheme } from '@/contexts/ThemeContext'

function ThemedContent() {
  const { currentTheme } = useTheme()
  
  const getSpacingClass = () => {
    switch (currentTheme.layout.spacing) {
      case 'compact': return 'py-12 px-4'
      case 'spacious': return 'py-32 px-8'
      default: return 'py-20 px-6'
    }
  }

  return (
    <motion.main 
      className="relative min-h-screen overflow-x-hidden"
      style={{ 
        background: currentTheme.colors.background,
        color: currentTheme.colors.text,
        fontFamily: currentTheme.typography.fontFamily,
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <ThemeBackground />
      <ParticleBackground />
      {currentTheme.layout.backgroundPattern === 'matrix' && <MatrixRain />}
      <ThemeSwitcher />
      
      {/* SEO Content - Unique, valuable content */}
      <div className="seo-content" style={{ 
        position: 'absolute', 
        left: '-9999px', 
        top: '0',
        width: '100%',
        fontSize: '16px'
      }}>
        <h1>Boris Milev - Software Engineer Portfolio</h1>
        <p>Experienced software engineer specializing in cross-platform development, database design, and API architecture. Building scalable solutions for web and mobile platforms.</p>
        
        <h2>Development Expertise</h2>
        <p>Proven track record in delivering production-ready applications. Expertise in agile development methodologies, version control with Git, and deployment strategies using modern DevOps practices.</p>
        
        <h3>Industry Experience</h3>
        <p>Focused on creating enterprise-level solutions with emphasis on performance optimization, security best practices, and maintainable code architecture. Specialized in microservices and RESTful API development.</p>
        
        <nav>
          <h4>Portfolio Sections</h4>
          <ul>
            <li><a href="#home">Homepage - Developer Introduction</a></li>
            <li><a href="#about">About Boris Milev - Background & Education</a></li>
            <li><a href="#tech">Technology Stack - Programming Skills</a></li>
            <li><a href="#projects">Software Projects - Portfolio Gallery</a></li>
            <li><a href="#contact">Contact & Hiring Information</a></li>
          </ul>
          
          <h4>Featured Project Categories</h4>
          <ul>
            <li><a href="#projects">iOS Applications - Swift Development</a></li>
            <li><a href="#projects">Web Applications - React & Next.js</a></li>
            <li><a href="#projects">Mobile Apps - React Native</a></li>
            <li><a href="#projects">Backend APIs - Node.js & C++</a></li>
          </ul>
          
          <h4>Professional Links</h4>
          <ul>
            <li><a href="https://github.com/BRMilev22" target="_blank" rel="noopener noreferrer">GitHub - Open Source Projects</a></li>
            <li><a href="https://www.linkedin.com/in/boris-milev-792546304/" target="_blank" rel="noopener noreferrer">LinkedIn - Professional Profile</a></li>
            <li><a href="mailto:zvarazoku9@icloud.com">Email - Direct Contact</a></li>
          </ul>
        </nav>
      </div>

      <div className="relative z-10" style={{ 
        '--card-radius': currentTheme.layout.cardRadius,
        '--theme-spacing': currentTheme.layout.spacing,
        '--font-family': currentTheme.typography.fontFamily,
        '--heading-weight': currentTheme.typography.headingWeight,
        '--text-transform': currentTheme.typography.textTransform,
        '--letter-spacing': currentTheme.typography.letterSpacing
      } as React.CSSProperties}>
        <StructuredData type="person" />
        <Header />
        <Hero />
        <About />
        
        {/* GitHub Statistics */}
        <section className={getSpacingClass()}>
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl mb-16 text-center"
                  style={{
                    fontWeight: currentTheme.typography.headingWeight,
                    textTransform: currentTheme.typography.textTransform,
                    letterSpacing: currentTheme.typography.letterSpacing
                  }}>
                GitHub <span className="text-gradient">Statistics</span>
              </h2>
              <GitHubStats />
            </motion.div>
          </div>
        </section>
        
        <TechStack />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </motion.main>
  )
}

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2500)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <LoadingScreen />
  }

  return (
    <ThemeProvider>
      <ThemedContent />
    </ThemeProvider>
  )
}