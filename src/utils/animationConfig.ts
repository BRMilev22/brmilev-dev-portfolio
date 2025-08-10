// Optimized animation configurations based on performance level
import { Variants } from 'framer-motion'

export const getAnimationConfig = (intensity: 'subtle' | 'moderate' | 'intense') => {
  const configs = {
    subtle: {
      duration: 0.3,
      stiffness: 100,
      damping: 15,
      mass: 0.8,
    },
    moderate: {
      duration: 0.6,
      stiffness: 300,
      damping: 25,
      mass: 1,
    },
    intense: {
      duration: 0.8,
      stiffness: 400,
      damping: 30,
      mass: 1.2,
    },
  }
  
  return configs[intensity] || configs.moderate
}

export const fadeInVariants: Variants = {
  hidden: { 
    opacity: 0,
    y: 20,
  },
  visible: (intensity: 'subtle' | 'moderate' | 'intense' = 'moderate') => {
    const config = getAnimationConfig(intensity)
    return {
      opacity: 1,
      y: 0,
      transition: {
        duration: config.duration,
        ease: 'easeOut',
      },
    }
  },
}

export const slideUpVariants: Variants = {
  hidden: { 
    opacity: 0,
    y: 50,
  },
  visible: (intensity: 'subtle' | 'moderate' | 'intense' = 'moderate') => {
    const config = getAnimationConfig(intensity)
    return {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: config.stiffness,
        damping: config.damping,
        mass: config.mass,
      },
    }
  },
}

export const staggerContainer: Variants = {
  hidden: {},
  visible: (intensity: 'subtle' | 'moderate' | 'intense' = 'moderate') => {
    const config = getAnimationConfig(intensity)
    const staggerDelay = intensity === 'subtle' ? 0.05 : 
                        intensity === 'moderate' ? 0.1 : 0.15
    
    return {
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: config.duration * 0.2,
      },
    }
  },
}

export const scaleVariants: Variants = {
  hidden: { 
    scale: 0.8,
    opacity: 0,
  },
  visible: (intensity: 'subtle' | 'moderate' | 'intense' = 'moderate') => {
    const config = getAnimationConfig(intensity)
    return {
      scale: 1,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: config.stiffness,
        damping: config.damping,
        duration: config.duration,
      },
    }
  },
}

// Reduced motion for performance
export const reduceMotionConfig = {
  initial: false,
  animate: false,
  exit: false,
  transition: { duration: 0 },
}