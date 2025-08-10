'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Palette, X } from 'lucide-react'
import { useTheme } from '../contexts/ThemeContext'

export default function ThemeSwitcher() {
  const [isOpen, setIsOpen] = useState(false)
  const { currentTheme, setTheme, availableThemes } = useTheme()
  
  const themes = [
    {
      id: 'cyberpunk',
      name: 'Cyberpunk 2099',
      description: 'Futuristic holographic interface',
      icon: '🤖',
      colors: ['#00d4ff', '#8b5cf6', '#ec4899'],
      preview: 'linear-gradient(135deg, #00d4ff 0%, #8b5cf6 50%, #ec4899 100%)'
    },
    {
      id: 'matrix',
      name: 'The Matrix',
      description: 'Enter the digital realm',
      icon: '💊',
      colors: ['#00ff41', '#008f11', '#39ff14'],
      preview: 'linear-gradient(135deg, #00ff41 0%, #008f11 100%)'
    },
    {
      id: 'neon',
      name: 'Electric Dreams',
      description: 'Vibrant neon energy',
      icon: '⚡',
      colors: ['#ff0080', '#00ff80', '#ffff00'],
      preview: 'linear-gradient(45deg, #ff0080 0%, #00ff80 50%, #ffff00 100%)'
    },
    {
      id: 'synthwave',
      name: 'Synthwave 80s',
      description: 'Retro futuristic vibes',
      icon: '🌆',
      colors: ['#ff6b35', '#f7931e', '#ffb3ba'],
      preview: 'linear-gradient(135deg, #ff6b35 0%, #f7931e 50%, #ffb3ba 100%)'
    },
    {
      id: 'aurora',
      name: 'Aurora Mystique',
      description: 'Ethereal aurora lights',
      icon: '🌌',
      colors: ['#00ffcc', '#a855f7', '#fbbf24'],
      preview: 'linear-gradient(135deg, #00ffcc 0%, #a855f7 50%, #fbbf24 100%)'
    }
  ]

  const getCurrentThemeId = () => {
    const name = currentTheme.name.toLowerCase()
    if (name.includes('cyberpunk')) return 'cyberpunk'
    if (name.includes('matrix')) return 'matrix'
    if (name.includes('electric') || name.includes('neon')) return 'neon'
    if (name.includes('synthwave')) return 'synthwave'
    if (name.includes('aurora')) return 'aurora'
    return 'cyberpunk'
  }
  
  const currentThemeData = themes.find(t => t.id === getCurrentThemeId())

  return (
    <>
      {/* Floating Theme Trigger */}
      <motion.div
        className="fixed bottom-6 left-6 z-50"
        initial={{ opacity: 0, scale: 0.8, x: -100 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.5, type: "spring" }}
      >
        <motion.button
          onClick={() => setIsOpen(true)}
          className="relative group flex items-center gap-3 px-4 py-3 rounded-full font-medium transition-all duration-300"
          style={{ 
            background: currentThemeData?.preview || currentTheme.effects.gradient,
            boxShadow: currentTheme.effects.shadow
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="absolute inset-0 rounded-full opacity-20" 
               style={{ background: 'rgba(255, 255, 255, 0.1)' }} />
          
          <span className="text-2xl relative z-10">
            {currentThemeData?.icon || '🎨'}
          </span>
          
          <div className="hidden md:block relative z-10">
            <div className="text-white font-bold text-sm">
              {currentTheme.name}
            </div>
            <div className="text-white/70 text-xs">
              Click to switch themes
            </div>
          </div>
          
          <Palette size={20} className="text-white relative z-10" />
          
          {/* Animated border */}
          <div className="absolute inset-0 rounded-full border-2 border-white/30 animate-pulse" />
        </motion.button>
      </motion.div>

      {/* Theme Switcher Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              className="w-full max-w-4xl max-h-[80vh] overflow-y-auto rounded-3xl border"
              style={{ 
                background: currentTheme.colors.surface,
                borderColor: currentTheme.colors.border,
                backdropFilter: 'blur(20px)'
              }}
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 50 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between p-8 border-b"
                   style={{ borderColor: currentTheme.colors.border + '30' }}>
                <div>
                  <h2 className="text-3xl font-bold mb-2"
                      style={{ 
                        color: currentTheme.colors.text,
                        fontFamily: currentTheme.typography.fontFamily,
                        fontWeight: currentTheme.typography.headingWeight
                      }}>
                    Choose Your Reality
                  </h2>
                  <p className="opacity-70"
                     style={{ color: currentTheme.colors.text }}>
                    Select a theme that matches your vibe
                  </p>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-3 rounded-full hover:bg-white/10 transition-colors"
                  style={{ color: currentTheme.colors.text }}
                >
                  <X size={24} />
                </button>
              </div>

              {/* Theme Grid */}
              <div className="p-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {themes.map((theme, index) => {
                    const isActive = theme.id === getCurrentThemeId()
                    
                    return (
                      <motion.div
                        key={theme.id}
                        className="relative group cursor-pointer"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        onClick={() => {
                          setTheme(theme.id)
                          setTimeout(() => setIsOpen(false), 300)
                        }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <div
                          className="relative overflow-hidden rounded-2xl p-6 border-2 transition-all duration-300"
                          style={{
                            background: theme.preview,
                            borderColor: isActive ? theme.colors[0] : 'rgba(255, 255, 255, 0.1)',
                            boxShadow: isActive ? `0 0 30px ${theme.colors[0]}40` : 'none'
                          }}
                        >
                          {/* Theme Preview */}
                          <div className="relative z-10 text-center">
                            <div className="text-4xl mb-4">
                              {theme.icon}
                            </div>
                            
                            <h3 className="text-xl font-bold mb-2 text-white">
                              {theme.name}
                            </h3>
                            
                            <p className="text-white/80 text-sm mb-4">
                              {theme.description}
                            </p>

                            {/* Color Palette */}
                            <div className="flex justify-center gap-2 mb-4">
                              {theme.colors.map((color, colorIndex) => (
                                <div
                                  key={colorIndex}
                                  className="w-6 h-6 rounded-full border-2 border-white/50"
                                  style={{ backgroundColor: color }}
                                />
                              ))}
                            </div>

                            {/* Active Indicator */}
                            {isActive && (
                              <motion.div
                                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-sm font-medium"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                              >
                                ✓ Active
                              </motion.div>
                            )}
                          </div>

                          {/* Hover Effect */}
                          <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          
                          {/* Animated Border */}
                          {isActive && (
                            <div className="absolute inset-0 rounded-2xl border-2 animate-pulse"
                                 style={{ borderColor: theme.colors[0] }} />
                          )}
                        </div>
                      </motion.div>
                    )
                  })}
                </div>

                {/* Footer */}
                <motion.div
                  className="text-center mt-8 pt-6 border-t"
                  style={{ 
                    borderColor: currentTheme.colors.border + '30',
                    color: currentTheme.colors.text 
                  }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  <p className="text-sm opacity-70">
                    Each theme transforms the entire experience with unique typography, effects, and interactions
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}