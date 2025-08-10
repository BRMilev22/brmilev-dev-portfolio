'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Code, Palette, Rocket, Users } from 'lucide-react'

const highlights = [
  {
    icon: Code,
    title: 'Clean Code',
    description: 'Writing maintainable, scalable, and efficient code following best practices'
  },
  {
    icon: Palette,
    title: 'Modern UI/UX',
    description: 'Creating beautiful, intuitive interfaces with attention to user experience'
  },
  {
    icon: Rocket,
    title: 'Latest Tech',
    description: 'Always staying updated with cutting-edge technologies and frameworks'
  },
  {
    icon: Users,
    title: 'Team Player',
    description: 'Collaborative approach to development with excellent communication skills'
  }
]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-20 px-6 relative">
      <div className="container mx-auto" ref={ref}>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyber-blue to-cyber-purple mx-auto" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="space-y-4 text-lg text-white/80 leading-relaxed">
              <p>
                I&apos;m a passionate <span className="text-cyber-blue font-semibold">Full-Stack Developer</span> currently 
                studying at the Vocational School for Computer Programming and Innovation (VSCPI) in Burgas, Bulgaria. 
                At just 16 years old, I&apos;ve already built an impressive portfolio of projects spanning mobile, web, and desktop development.
              </p>
              
              <p>
                My journey in programming started with a curiosity about how technology works, and it has evolved into 
                a deep passion for creating <span className="text-cyber-purple font-semibold">innovative solutions</span> that 
                solve real-world problems. I specialize in modern UI/UX design and prioritize creating applications that 
                are not only functional but also beautiful and intuitive.
              </p>
              
              <p>
                When I&apos;m not coding, I&apos;m constantly learning new technologies, contributing to open-source projects, 
                and exploring the latest trends in software development. I believe in the power of 
                <span className="text-cyber-green font-semibold"> continuous learning</span> and staying ahead of the curve 
                in this rapidly evolving field. Check out my <a href="#projects" className="text-cyber-blue hover:underline">latest projects</a> to see these technologies in action.
              </p>
            </div>

            <motion.div
              className="flex flex-wrap gap-3 pt-4"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {['Problem Solver', 'UI/UX Enthusiast', 'Tech Explorer', 'Open Source'].map((trait, index) => (
                <span
                  key={trait}
                  className="px-4 py-2 glass rounded-full text-sm font-medium text-cyber-blue border border-cyber-blue/30"
                >
                  {trait}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* Highlights Grid */}
          <motion.div
            className="grid grid-cols-2 gap-6"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                className="glass p-6 rounded-xl hover-lift"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-cyber-blue mb-4">
                  <highlight.icon size={32} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {highlight.title}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  {highlight.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {[
            { number: '10+', label: 'Projects Built' },
            { number: '15+', label: 'Technologies' },
            { number: '2+', label: 'Years Coding' },
            { number: '100%', label: 'Passion' }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center glass p-6 rounded-xl"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
            >
              <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">
                {stat.number}
              </div>
              <div className="text-white/70 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}