'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

interface Theme {
  name: string
  description: string
  colors: {
    primary: string
    secondary: string
    accent: string
    background: string
    surface: string
    text: string
    border: string
  }
  typography: {
    fontFamily: string
    headingWeight: string
    textTransform: 'none' | 'uppercase' | 'lowercase'
    letterSpacing: string
  }
  effects: {
    glow: string
    particle: string
    gradient: string
    shadow: string
    blur: string
  }
  layout: {
    headerStyle: 'glass' | 'solid' | 'minimal' | 'retro' | 'aurora'
    cardStyle: 'glass' | 'solid' | 'outlined' | 'gradient' | 'glow'
    cardRadius: string
    spacing: 'compact' | 'normal' | 'spacious'
    animation: 'subtle' | 'moderate' | 'intense'
    particleCount: number
    backgroundPattern: 'particles' | 'matrix' | 'waves' | 'grid' | 'aurora'
    borderStyle: 'none' | 'subtle' | 'glow' | 'neon'
  }
  preview: {
    primary: string
    secondary: string
    icon: string
  }
}

const themes: Record<string, Theme> = {
  cyberpunk: {
    name: 'Cyberpunk 2099',
    description: 'Futuristic holographic interface with neon glows',
    colors: {
      primary: '#00d4ff',
      secondary: '#8b5cf6', 
      accent: '#ec4899',
      background: 'linear-gradient(135deg, #0a0a0f 0%, #1a0a2e 100%)',
      surface: 'rgba(10, 20, 40, 0.8)',
      text: '#ffffff',
      border: '#00d4ff'
    },
    typography: {
      fontFamily: "'Orbitron', 'JetBrains Mono', monospace",
      headingWeight: '700',
      textTransform: 'uppercase',
      letterSpacing: '0.05em'
    },
    effects: {
      glow: '0 0 20px #00d4ff, 0 0 40px #00d4ff, 0 0 60px #00d4ff',
      particle: '#00d4ff',
      gradient: 'linear-gradient(135deg, #00d4ff 0%, #8b5cf6 50%, #ec4899 100%)',
      shadow: '0 10px 40px rgba(0, 212, 255, 0.3)',
      blur: 'backdrop-filter: blur(20px)'
    },
    layout: {
      headerStyle: 'glass',
      cardStyle: 'glow',
      cardRadius: '1rem',
      spacing: 'normal',
      animation: 'intense',
      particleCount: 20,
      backgroundPattern: 'particles',
      borderStyle: 'glow'
    },
    preview: {
      primary: '#00d4ff',
      secondary: '#8b5cf6',
      icon: '🤖'
    }
  },
  neon: {
    name: 'Electric Dreams',
    description: 'Vibrant neon lights and electric energy',
    colors: {
      primary: '#ff0080',
      secondary: '#00ff80',
      accent: '#ffff00',
      background: 'radial-gradient(circle at 20% 80%, #120a2a 0%, #000000 50%, #2a0845 100%)',
      surface: 'rgba(255, 0, 128, 0.1)',
      text: '#ffffff',
      border: '#ff0080'
    },
    typography: {
      fontFamily: "'Rajdhani', 'Inter', sans-serif",
      headingWeight: '800',
      textTransform: 'none',
      letterSpacing: '0.02em'
    },
    effects: {
      glow: '0 0 30px #ff0080, 0 0 60px #ff0080, 0 0 90px #ff0080',
      particle: '#ff0080',
      gradient: 'linear-gradient(45deg, #ff0080 0%, #00ff80 50%, #ffff00 100%)',
      shadow: '0 15px 35px rgba(255, 0, 128, 0.4)',
      blur: 'backdrop-filter: blur(15px) saturate(180%)'
    },
    layout: {
      headerStyle: 'solid',
      cardStyle: 'gradient',
      cardRadius: '0.75rem',
      spacing: 'compact',
      animation: 'intense',
      particleCount: 30,
      backgroundPattern: 'waves',
      borderStyle: 'neon'
    },
    preview: {
      primary: '#ff0080',
      secondary: '#00ff80',
      icon: '⚡'
    }
  },
  'matrix': {
    name: 'The Matrix',
    description: 'Enter the digital realm of the Matrix',
    colors: {
      primary: '#00ff41',
      secondary: '#008f11',
      accent: '#39ff14',
      background: '#000000',
      surface: 'rgba(0, 20, 0, 0.9)',
      text: '#00ff41',
      border: '#00ff41'
    },
    typography: {
      fontFamily: "'Courier New', 'JetBrains Mono', monospace",
      headingWeight: '400',
      textTransform: 'uppercase',
      letterSpacing: '0.1em'
    },
    effects: {
      glow: '0 0 10px #00ff41, 0 0 20px #00ff41, 0 0 40px #00ff41',
      particle: '#00ff41',
      gradient: 'linear-gradient(180deg, #00ff41 0%, #008f11 100%)',
      shadow: '0 5px 25px rgba(0, 255, 65, 0.3)',
      blur: 'backdrop-filter: blur(5px)'
    },
    layout: {
      headerStyle: 'minimal',
      cardStyle: 'outlined',
      cardRadius: '0rem',
      spacing: 'compact',
      animation: 'subtle',
      particleCount: 5,
      backgroundPattern: 'matrix',
      borderStyle: 'subtle'
    },
    preview: {
      primary: '#00ff41',
      secondary: '#008f11',
      icon: '💊'
    }
  },
  synthwave: {
    name: 'Synthwave 80s',
    description: 'Retro futuristic vibes from the neon decade',
    colors: {
      primary: '#ff6b35',
      secondary: '#f7931e',
      accent: '#ffb3ba',
      background: 'linear-gradient(180deg, #2d1b69 0%, #1a0033 50%, #0f001a 100%)',
      surface: 'rgba(65, 52, 150, 0.7)',
      text: '#ffffff',
      border: '#ff6b35'
    },
    typography: {
      fontFamily: "'Righteous', 'Orbitron', sans-serif",
      headingWeight: '400',
      textTransform: 'uppercase',
      letterSpacing: '0.08em'
    },
    effects: {
      glow: '0 0 25px #ff6b35, 0 0 50px #ff6b35, 0 0 75px #ff6b35',
      particle: '#ff6b35',
      gradient: 'linear-gradient(135deg, #ff6b35 0%, #f7931e 50%, #ffb3ba 100%)',
      shadow: '0 20px 60px rgba(255, 107, 53, 0.4)',
      blur: 'backdrop-filter: blur(25px) hue-rotate(15deg)'
    },
    layout: {
      headerStyle: 'retro',
      cardStyle: 'gradient',
      cardRadius: '1.5rem',
      spacing: 'spacious',
      animation: 'moderate',
      particleCount: 15,
      backgroundPattern: 'grid',
      borderStyle: 'glow'
    },
    preview: {
      primary: '#ff6b35',
      secondary: '#f7931e',
      icon: '🌆'
    }
  },
  aurora: {
    name: 'Aurora Mystique',
    description: 'Ethereal aurora lights dancing across the digital sky',
    colors: {
      primary: '#00ffcc',
      secondary: '#a855f7',
      accent: '#fbbf24',
      background: 'radial-gradient(ellipse at top, #001a2e 0%, #000817 50%, #000000 100%)',
      surface: 'rgba(0, 26, 46, 0.6)',
      text: '#f0f9ff',
      border: '#00ffcc'
    },
    typography: {
      fontFamily: "'Poppins', 'Inter', sans-serif",
      headingWeight: '600',
      textTransform: 'none',
      letterSpacing: '0.01em'
    },
    effects: {
      glow: '0 0 40px #00ffcc, 0 0 80px #00ffcc, 0 0 120px #00ffcc',
      particle: '#00ffcc',
      gradient: 'linear-gradient(135deg, #00ffcc 0%, #a855f7 50%, #fbbf24 100%)',
      shadow: '0 25px 80px rgba(0, 255, 204, 0.2)',
      blur: 'backdrop-filter: blur(30px) brightness(110%)'
    },
    layout: {
      headerStyle: 'aurora',
      cardStyle: 'glass',
      cardRadius: '2rem',
      spacing: 'spacious',
      animation: 'moderate',
      particleCount: 25,
      backgroundPattern: 'aurora',
      borderStyle: 'subtle'
    },
    preview: {
      primary: '#00ffcc',
      secondary: '#a855f7',
      icon: '🌌'
    }
  }
}

interface ThemeContextType {
  currentTheme: Theme
  setTheme: (themeName: string) => void
  availableThemes: string[]
  isTransitioning: boolean
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

interface ThemeProviderProps {
  children: ReactNode
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [currentThemeName, setCurrentThemeName] = useState('cyberpunk')
  const [isTransitioning, setIsTransitioning] = useState(false)

  const setTheme = (themeName: string) => {
    console.log('setTheme called with:', themeName)
    console.log('Available themes:', Object.keys(themes))
    console.log('Current theme:', currentThemeName)
    
    if (themes[themeName] && themeName !== currentThemeName) {
      console.log('Theme switching to:', themeName)
      setIsTransitioning(true)
      
      // Immediate theme change for better responsiveness
      setCurrentThemeName(themeName)
      
      // Smooth transition effect  
      setTimeout(() => setIsTransitioning(false), 500)
    } else {
      console.log('Theme not changed. Reason:', !themes[themeName] ? 'Theme not found' : 'Same theme')
    }
  }

  // Initialize with default theme (disable time-based for now)
  useEffect(() => {
    // Just set the initial theme once
    if (currentThemeName === 'cyberpunk') {
      console.log('Setting initial theme to cyberpunk')
    }
  }, [])

  // Apply theme to CSS variables
  useEffect(() => {
    const theme = themes[currentThemeName]
    if (!theme) return
    
    const root = document.documentElement
    
    console.log('Applying theme CSS variables:', currentThemeName, theme)

    // Color variables
    root.style.setProperty('--color-primary', theme.colors.primary)
    root.style.setProperty('--color-secondary', theme.colors.secondary)
    root.style.setProperty('--color-accent', theme.colors.accent)
    root.style.setProperty('--color-background', theme.colors.background)
    root.style.setProperty('--color-surface', theme.colors.surface)
    root.style.setProperty('--color-text', theme.colors.text)
    root.style.setProperty('--color-border', theme.colors.border)
    
    // Typography variables
    root.style.setProperty('--font-family', theme.typography.fontFamily)
    root.style.setProperty('--heading-weight', theme.typography.headingWeight)
    root.style.setProperty('--text-transform', theme.typography.textTransform)
    root.style.setProperty('--letter-spacing', theme.typography.letterSpacing)
    
    // Effect variables
    root.style.setProperty('--effect-glow', theme.effects.glow)
    root.style.setProperty('--effect-particle', theme.effects.particle)
    root.style.setProperty('--effect-gradient', theme.effects.gradient)
    root.style.setProperty('--effect-shadow', theme.effects.shadow)
    root.style.setProperty('--effect-blur', theme.effects.blur)
    
    // Layout variables
    root.style.setProperty('--card-radius', theme.layout.cardRadius)
    root.style.setProperty('--card-style', theme.layout.cardStyle)
    root.style.setProperty('--particle-count', theme.layout.particleCount.toString())
    root.style.setProperty('--header-style', theme.layout.headerStyle)
    root.style.setProperty('--spacing-mode', theme.layout.spacing)
    root.style.setProperty('--animation-mode', theme.layout.animation)
    root.style.setProperty('--background-pattern', theme.layout.backgroundPattern)
    root.style.setProperty('--border-style', theme.layout.borderStyle)
    
    // Ensure all CSS variables are properly applied
    console.log('Setting CSS variables on document.documentElement:', {
      '--color-primary': theme.colors.primary,
      '--color-secondary': theme.colors.secondary,
      '--color-accent': theme.colors.accent
    })
    
    console.log('Applied CSS variables:', {
      primary: theme.colors.primary,
      secondary: theme.colors.secondary,
      accent: theme.colors.accent
    })
  }, [currentThemeName])

  const value = {
    currentTheme: themes[currentThemeName],
    setTheme,
    availableThemes: Object.keys(themes),
    isTransitioning
  }

  return (
    <ThemeContext.Provider value={value}>
      <div 
        className={`theme-transition ${isTransitioning ? 'transitioning' : ''}`}
        style={{
          transition: isTransitioning ? 
            'all 0.8s cubic-bezier(0.4, 0, 0.2, 1), background 1.2s ease, color 0.6s ease, font-family 0.3s ease' : 
            'none'
        }}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  )
}