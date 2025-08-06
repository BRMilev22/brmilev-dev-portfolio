'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const techCategories = [
  {
    title: 'Languages',
    color: 'from-red-500 to-orange-500',
    technologies: [
      { name: 'JavaScript', level: 95 },
      { name: 'TypeScript', level: 90 },
      { name: 'Swift', level: 85 },
      { name: 'Python', level: 80 },
      { name: 'C++', level: 75 },
      { name: 'C', level: 70 }
    ]
  },
  {
    title: 'Frontend',
    color: 'from-blue-500 to-cyan-500',
    technologies: [
      { name: 'React', level: 95 },
      { name: 'Next.js', level: 90 },
      { name: 'React Native', level: 85 },
      { name: 'Vue.js', level: 80 },
      { name: 'Angular.js', level: 75 },
      { name: 'Tailwind CSS', level: 95 }
    ]
  },
  {
    title: 'Backend & Tools',
    color: 'from-green-500 to-emerald-500',
    technologies: [
      { name: 'Node.js', level: 90 },
      { name: 'Express.js', level: 88 },
      { name: 'Firebase', level: 85 },
      { name: 'Supabase', level: 80 },
      { name: 'MySQL', level: 85 },
      { name: 'PostgreSQL', level: 80 }
    ]
  },
  {
    title: 'Mobile & Desktop',
    color: 'from-purple-500 to-pink-500',
    technologies: [
      { name: 'SwiftUI', level: 90 },
      { name: 'Expo', level: 85 },
      { name: 'Electron', level: 80 },
      { name: 'React Native', level: 85 },
      { name: 'iOS Development', level: 88 },
      { name: 'macOS Development', level: 82 }
    ]
  }
]

const tools = [
  'Vite', 'Chart.js', 'Three.js', 'JWT', 'jQuery', 'MariaDB'
]

export default function TechStack() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="tech" className="py-20 px-6 relative">
      <div className="container mx-auto" ref={ref}>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Tech <span className="text-gradient">Stack</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyber-blue to-cyber-purple mx-auto mb-6" />
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Technologies I work with to bring ideas to life
          </p>
        </motion.div>

        {/* Main Tech Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {techCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              className="glass p-6 rounded-xl hover-lift"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            >
              <div className="mb-6">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} mb-4 flex items-center justify-center`}>
                  <div className="w-6 h-6 bg-white rounded opacity-90" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.technologies.map((tech, techIndex) => (
                  <motion.div
                    key={tech.name}
                    className="space-y-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.5, delay: categoryIndex * 0.1 + techIndex * 0.05 }}
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-white/90 font-medium text-sm">{tech.name}</span>
                      <span className="text-cyber-blue text-xs font-mono">{tech.level}%</span>
                    </div>
                    <div className="w-full bg-dark-300 rounded-full h-2 overflow-hidden">
                      <motion.div
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${tech.level}%` } : { width: 0 }}
                        transition={{ duration: 1, delay: categoryIndex * 0.2 + techIndex * 0.1 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Tools */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h3 className="text-2xl font-bold text-white mb-8">
            Additional <span className="text-cyber-blue">Tools & Libraries</span>
          </h3>
          
          <div className="flex flex-wrap justify-center gap-4">
            {tools.map((tool, index) => (
              <motion.span
                key={tool}
                className="px-6 py-3 glass rounded-full text-white/80 font-medium border border-cyber-blue/30 hover:border-cyber-blue/60 hover:text-cyber-blue transition-all duration-300"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -2 }}
              >
                {tool}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Tech Philosophy */}
        <motion.div
          className="mt-20 text-center glass p-8 rounded-2xl"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <h3 className="text-2xl font-bold text-gradient mb-4">My Development Philosophy</h3>
          <p className="text-lg text-white/80 max-w-3xl mx-auto leading-relaxed">
            I believe in choosing the right tool for the job, prioritizing <span className="text-cyber-blue font-semibold">user experience</span>, 
            writing <span className="text-cyber-purple font-semibold">clean, maintainable code</span>, and staying updated with 
            the latest industry trends. My goal is to create applications that are not only technically sound but also 
            <span className="text-cyber-green font-semibold"> beautiful and intuitive</span> to use.
          </p>
        </motion.div>
      </div>
    </section>
  )
}