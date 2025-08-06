'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import ParticleBackground from '@/components/ParticleBackground'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import TechStack from '@/components/TechStack'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import LoadingScreen from '@/components/LoadingScreen'

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
    <motion.main 
      className="relative min-h-screen bg-black text-white overflow-x-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <ParticleBackground />
      
      <div className="relative z-10">
        <Header />
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </motion.main>
  )
}