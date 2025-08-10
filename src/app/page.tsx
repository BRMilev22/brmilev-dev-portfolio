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