'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, Terminal, Zap, User, Briefcase, Mail, FileText, Github, ExternalLink, Palette } from 'lucide-react'
import { useTheme } from '../contexts/ThemeContext'

interface Command {
  id: string
  label: string
  description: string
  icon: any
  action: () => void
  keywords: string[]
  category: string
}

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [selectedIndex, setSelectedIndex] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)

  // Get theme context safely
  const themeContext = useTheme()
  const { setTheme, availableThemes } = themeContext || { 
    setTheme: () => {}, 
    availableThemes: ['cyberpunk', 'neon', 'matrix', 'synthwave', 'aurora'] 
  }

const commands: Command[] = [
  {
    id: 'projects',
    label: 'View Projects',
    description: 'Browse all 10 development projects',
    icon: Briefcase,
    action: () => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }),
    keywords: ['projects', 'work', 'portfolio', 'apps'],
    category: 'Navigation'
  },
  {
    id: 'about',
    label: 'About Boris',
    description: 'Learn about Boris Milev',
    icon: User,
    action: () => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }),
    keywords: ['about', 'bio', 'information', 'boris'],
    category: 'Navigation'
  },
  {
    id: 'contact',
    label: 'Contact',
    description: 'Get in touch with Boris',
    icon: Mail,
    action: () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }),
    keywords: ['contact', 'email', 'hire', 'reach out'],
    category: 'Navigation'
  },
  {
    id: 'github',
    label: 'GitHub Profile',
    description: 'Visit Boris on GitHub',
    icon: Github,
    action: () => window.open('https://github.com/BRMilev22', '_blank'),
    keywords: ['github', 'code', 'repositories', 'source'],
    category: 'Social'
  },
  {
    id: 'linkedin',
    label: 'LinkedIn Profile',
    description: 'Connect on LinkedIn',
    icon: ExternalLink,
    action: () => window.open('https://www.linkedin.com/in/boris-milev-792546304/', '_blank'),
    keywords: ['linkedin', 'professional', 'network', 'connect'],
    category: 'Social'
  },
  {
    id: 'email',
    label: 'Send Email',
    description: 'Open email to Boris',
    icon: Mail,
    action: () => window.open('mailto:zvarazoku9@icloud.com', '_blank'),
    keywords: ['email', 'message', 'contact', 'hire'],
    category: 'Action'
  },
  {
    id: 'theme-cyberpunk',
    label: 'Cyberpunk Theme',
    description: 'Switch to cyberpunk theme',
    icon: Palette,
    action: () => {
      console.log('Switching to cyberpunk theme')
      setTheme('cyberpunk')
    },
    keywords: ['theme', 'cyberpunk', 'blue', 'dark'],
    category: 'Theme'
  },
  {
    id: 'theme-neon',
    label: 'Neon Dreams Theme',
    description: 'Switch to neon theme',
    icon: Palette,
    action: () => {
      console.log('Switching to neon theme')
      setTheme('neon')
    },
    keywords: ['theme', 'neon', 'pink', 'bright'],
    category: 'Theme'
  },
  {
    id: 'theme-matrix',
    label: 'Matrix Code Theme',
    description: 'Switch to matrix theme',
    icon: Palette,
    action: () => {
      console.log('Switching to matrix theme')
      setTheme('matrix')
    },
    keywords: ['theme', 'matrix', 'green', 'code'],
    category: 'Theme'
  },
  {
    id: 'theme-synthwave',
    label: 'Synthwave Theme',
    description: 'Switch to synthwave theme',
    icon: Palette,
    action: () => {
      console.log('Switching to synthwave theme')
      setTheme('synthwave')
    },
    keywords: ['theme', 'synthwave', 'retro', '80s'],
    category: 'Theme'
  },
  {
    id: 'theme-aurora',
    label: 'Aurora Theme',
    description: 'Switch to aurora theme',
    icon: Palette,
    action: () => {
      console.log('Switching to aurora theme')
      setTheme('aurora')
    },
    keywords: ['theme', 'aurora', 'northern', 'lights'],
    category: 'Theme'
  }
]

  const filteredCommands = commands.filter(command =>
    command.label.toLowerCase().includes(query.toLowerCase()) ||
    command.description.toLowerCase().includes(query.toLowerCase()) ||
    command.keywords.some(keyword => keyword.toLowerCase().includes(query.toLowerCase()))
  )

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setIsOpen(true)
        setTimeout(() => inputRef.current?.focus(), 100)
      }
      
      if (e.key === 'Escape') {
        setIsOpen(false)
        setQuery('')
        setSelectedIndex(0)
      }

      if (isOpen) {
        if (e.key === 'ArrowDown') {
          e.preventDefault()
          setSelectedIndex(prev => Math.min(prev + 1, filteredCommands.length - 1))
        }
        
        if (e.key === 'ArrowUp') {
          e.preventDefault()
          setSelectedIndex(prev => Math.max(prev - 1, 0))
        }
        
        if (e.key === 'Enter' && filteredCommands[selectedIndex]) {
          e.preventDefault()
          filteredCommands[selectedIndex].action()
          setIsOpen(false)
          setQuery('')
          setSelectedIndex(0)
        }
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, filteredCommands, selectedIndex])

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen])

  const groupedCommands = filteredCommands.reduce((acc, command) => {
    if (!acc[command.category]) {
      acc[command.category] = []
    }
    acc[command.category].push(command)
    return acc
  }, {} as Record<string, Command[]>)

  return (
    <>
      {/* Command Palette Trigger Hint */}
      <motion.div
        className="fixed bottom-6 right-6 z-40 glass px-4 py-2 rounded-full cursor-pointer group"
        onClick={() => setIsOpen(true)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2 }}
      >
        <div className="flex items-center gap-2 text-sm text-cyber-blue">
          <Terminal size={16} />
          <span className="hidden md:inline">Press</span>
          <kbd className="px-2 py-1 bg-dark-200 rounded text-xs font-mono">⌘K</kbd>
          <span className="hidden md:inline">for commands</span>
        </div>
      </motion.div>

      {/* Command Palette Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-start justify-center p-4 bg-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              className="w-full max-w-2xl mt-[15vh] glass-dark rounded-2xl overflow-hidden border border-cyber-blue/30"
              initial={{ opacity: 0, y: -50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -50, scale: 0.95 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center gap-3 p-4 border-b border-white/10">
                <Search size={20} className="text-cyber-blue" />
                <input
                  ref={inputRef}
                  type="text"
                  placeholder="Type a command or search..."
                  className="flex-1 bg-transparent text-white placeholder-white/50 outline-none text-lg"
                  value={query}
                  onChange={(e) => {
                    setQuery(e.target.value)
                    setSelectedIndex(0)
                  }}
                />
                <div className="flex gap-1">
                  <kbd className="px-2 py-1 bg-dark-200 rounded text-xs font-mono text-white/70">ESC</kbd>
                </div>
              </div>

              {/* Commands */}
              <div className="max-h-96 overflow-y-auto">
                {Object.entries(groupedCommands).map(([category, categoryCommands]) => (
                  <div key={category} className="p-2">
                    <div className="px-3 py-2 text-xs font-medium text-white/50 uppercase tracking-wider">
                      {category}
                    </div>
                    {categoryCommands.map((command, index) => {
                      const globalIndex = filteredCommands.indexOf(command)
                      return (
                        <motion.div
                          key={command.id}
                          className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-all ${
                            selectedIndex === globalIndex
                              ? 'bg-cyber-blue/20 border border-cyber-blue/30'
                              : 'hover:bg-white/5'
                          }`}
                          onClick={() => {
                            command.action()
                            setIsOpen(false)
                            setQuery('')
                            setSelectedIndex(0)
                          }}
                          whileHover={{ x: 4 }}
                        >
                          <div className={`p-2 rounded-lg ${
                            selectedIndex === globalIndex
                              ? 'bg-cyber-blue/30'
                              : 'bg-white/10'
                          }`}>
                            <command.icon size={16} className="text-white" />
                          </div>
                          <div className="flex-1">
                            <div className="font-medium text-white">{command.label}</div>
                            <div className="text-sm text-white/60">{command.description}</div>
                          </div>
                          <div className="text-xs text-white/40">
                            {selectedIndex === globalIndex && '↵'}
                          </div>
                        </motion.div>
                      )
                    })}
                  </div>
                ))}
                
                {filteredCommands.length === 0 && (
                  <div className="p-8 text-center text-white/50">
                    <Zap size={32} className="mx-auto mb-2 opacity-50" />
                    <div>No commands found</div>
                    <div className="text-sm">Try searching for "projects" or "contact"</div>
                  </div>
                )}
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between p-3 border-t border-white/10 text-xs text-white/40">
                <div>Navigate with ↑↓ arrows</div>
                <div className="flex gap-4">
                  <span>↵ to select</span>
                  <span>ESC to close</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}