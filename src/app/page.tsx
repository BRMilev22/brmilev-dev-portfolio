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
      
      {/* SEO Content - Visible but minimal styling */}
      <div className="seo-content">
        <h1 className="seo-h1">Boris Milev - Full-Stack Developer & Software Engineer</h1>
        <div className="seo-description">
          <p>Welcome to the portfolio of Boris Milev, a passionate full-stack developer and software engineer from Bulgaria. I am currently studying at the Vocational School for Computer Programming and Innovation (VSCPI) in Burgas, Bulgaria.</p>
          
          <h2>About Boris Milev - Full-Stack Developer</h2>
          <p>I specialize in creating innovative mobile and web applications using modern technologies including Swift, React Native, Next.js, TypeScript, JavaScript, Python, C++, and Node.js. My expertise spans iOS development, web development, and full-stack solutions with custom APIs.</p>
          
          <h3>Technical Skills and Expertise</h3>
          <p>My technical skills include Swift iOS development, React Native cross-platform apps, Next.js web applications, custom Node.js APIs, C++ backend development with Crow framework, Python scripting, TypeScript development, and MySQL database design. I have experience with Firebase, Supabase, and various modern development tools.</p>
          
          <h3>Software Development Projects Portfolio</h3>
          <p>I have completed over 10 major projects including DreamWeaver (AI-powered story generation iOS app), BookBite (restaurant reservation system with C++ API), MoodyChat (emotion-responsive chat interface), ChemEco (environmental reporting system), Abandoned Explorer (location discovery app), and many more innovative solutions.</p>
          
          <h3>Professional Experience and Services</h3>
          <p>As a student developer, I focus on creating user-centered solutions that solve real-world problems. I believe in writing clean, maintainable code and delivering high-quality applications. I am available for freelance work, internships, and collaboration opportunities.</p>
          
          <nav className="seo-nav">
            <h4>Navigation</h4>
            <ul>
              <li><a href="#home">Home - Boris Milev Portfolio</a></li>
              <li><a href="#about">About Me - Full-Stack Developer</a></li>
              <li><a href="#tech">Technology Stack - Skills</a></li>
              <li><a href="#projects">Projects Portfolio - Software Development</a></li>
              <li><a href="#contact">Contact Information - Hire Me</a></li>
            </ul>
            
            <h4>External Resources</h4>
            <ul>
              <li><a href="https://github.com/BRMilev22" target="_blank" rel="noopener noreferrer">GitHub Profile - Boris Milev</a></li>
              <li><a href="https://www.linkedin.com/in/boris-milev-792546304/" target="_blank" rel="noopener noreferrer">LinkedIn Profile - Boris Milev</a></li>
              <li><a href="mailto:zvarazoku9@icloud.com">Email Contact - Software Developer</a></li>
              <li><a href="/sitemap.xml" target="_blank" rel="noopener noreferrer">Site Map</a></li>
            </ul>
          </nav>
        </div>
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