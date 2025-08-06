'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer)
          return 100
        }
        return prev + 2
      })
    }, 50)

    return () => clearInterval(timer)
  }, [])

  return (
    <motion.div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center">
        <motion.div
          className="text-6xl font-bold text-gradient mb-8"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, type: "spring" }}
        >
          BM
        </motion.div>
        
        <motion.div 
          className="w-64 h-1 bg-dark-300 rounded-full overflow-hidden mb-4"
          initial={{ width: 0 }}
          animate={{ width: 256 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <motion.div
            className="h-full bg-gradient-to-r from-cyber-blue to-cyber-purple rounded-full"
            style={{ width: `${progress}%` }}
            transition={{ duration: 0.1 }}
          />
        </motion.div>
        
        <motion.p 
          className="text-cyber-blue font-mono text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Loading Portfolio... {progress}%
        </motion.p>
      </div>
    </motion.div>
  )
}