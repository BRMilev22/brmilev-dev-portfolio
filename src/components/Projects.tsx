'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState, useMemo } from 'react'
import { ExternalLink, Github, Smartphone, Globe, Monitor, Database, Play } from 'lucide-react'
import { useImagePreloader } from '../hooks/useImagePreloader'
// import Image from 'next/image' // Removed for performance

const projects = [
  {
    id: 1,
    title: 'DreamWeaver',
    description: 'AI-powered story generation iOS app with SwiftUI, Supabase, and Mistral AI. Features user profiles, story management, and beautiful UI.',
    image: '/projects/DreamWeaver/images/story-screen.png',
    images: [
      '/projects/DreamWeaver/images/story-screen.png',
      '/projects/DreamWeaver/images/generated-story-screen.png',
      '/projects/DreamWeaver/images/meet-your-characters.png',
      '/projects/DreamWeaver/images/choose-plot.png',
      '/projects/DreamWeaver/images/generate-title-screen.png',
      '/projects/DreamWeaver/images/generate-titles-animation.png',
      '/projects/DreamWeaver/images/generating-characters-animation.png',
      '/projects/DreamWeaver/images/generating-story-animation.png',
      '/projects/DreamWeaver/images/reading-tab.png',
      '/projects/DreamWeaver/images/story-generation-animation.png'
    ],
    technologies: ['SwiftUI', 'Supabase', 'Mistral AI', 'iOS'],
    category: 'Mobile',
    icon: Smartphone,
    github: 'https://github.com/BRMilev22/DreamWeaver',
    type: 'iOS App',
    year: '2024'
  },
  {
    id: 2,
    title: 'MoodyChat',
    description: 'Revolutionary iOS chat app with emotion-based UI adaptation. Features liquid glass aesthetics and AI-powered mood detection.',
    image: '/projects/MoodyChat/images/mood-detected-happy-chat.png',
    images: [
      '/projects/MoodyChat/images/mood-detected-happy-chat.png',
      '/projects/MoodyChat/images/mood-detected-angry-chat.png',
      '/projects/MoodyChat/images/neutral-chat.png',
      '/projects/MoodyChat/images/sad-chat.png',
      '/projects/MoodyChat/images/logo.png',
      '/projects/MoodyChat/images/logo-dark.png',
      '/projects/MoodyChat/images/welcome-image-excited.png',
      '/projects/MoodyChat/images/welcome-image-love.png',
      '/projects/MoodyChat/images/welcome-image-peaceful.png'
    ],
    technologies: ['SwiftUI', 'OLLAMA', 'CoreML', 'Combine'],
    category: 'Mobile',
    icon: Smartphone,
    github: 'https://github.com/BRMilev22/MoodyChat',
    type: 'iOS App',
    year: '2024'
  },
  {
    id: 3,
    title: 'Abandoned Explorer',
    description: 'Full-stack iOS app and API for discovering abandoned locations. Features real-time chat, groups, and comprehensive backend.',
    image: '/projects/abandoned-explorer/images/main-screen.png',
    images: [
      '/projects/abandoned-explorer/images/main-screen.png',
      '/projects/abandoned-explorer/images/discover-screen-1.png',
      '/projects/abandoned-explorer/images/location-detail.png',
      '/projects/abandoned-explorer/images/discover-screen2.png',
      '/projects/abandoned-explorer/images/feed-view.png',
      '/projects/abandoned-explorer/images/notifications.png',
      '/projects/abandoned-explorer/images/profile-screen-user.png',
      '/projects/abandoned-explorer/images/admin-panel.png',
      '/projects/abandoned-explorer/images/main-screen-zoomed-out.png'
    ],
    technologies: ['SwiftUI', 'Node.js', 'MySQL', 'MapKit'],
    category: 'Full-Stack',
    icon: Globe,
    github: 'https://github.com/BRMilev22/abandoned-explorer',
    type: 'iOS + API',
    year: '2024'
  },
  {
    id: 4,
    title: 'BookBite',
    description: 'Restaurant reservation system with C++ backend, Node.js frontend, and native iOS app. Email confirmations and admin panel.',
    image: '/projects/bookbite/images/main-page.png',
    images: [
      '/projects/bookbite/images/main-page.png',
      '/projects/bookbite/images/restaurants-page.png',
      '/projects/bookbite/images/restaurants-mobile.png',
      '/projects/bookbite/images/restaurant-details.png',
      '/projects/bookbite/images/restaurant-reviews.png',
      '/projects/bookbite/images/make-reservation.png',
      '/projects/bookbite/images/make-reservation-mobile.png',
      '/projects/bookbite/images/make-reservation-dark-mobile.png',
      '/projects/bookbite/images/my-reservations-page.png',
      '/projects/bookbite/images/my-reservations-mobile.png',
      '/projects/bookbite/images/my-reservation-dark-mobile.png',
      '/projects/bookbite/images/payment-dark-mobile.png',
      '/projects/bookbite/images/admin-dashboard.png',
      '/projects/bookbite/images/admin-manage-restaurants.png',
      '/projects/bookbite/images/admin-manage-users.png',
      '/projects/bookbite/images/avaliable-tables.png',
      '/projects/bookbite/images/confirm-reservation-email.png',
      '/projects/bookbite/images/account-confirmation-email.png',
      '/projects/bookbite/images/reservation-confirmed-email.png'
    ],
    technologies: ['C++', 'SwiftUI', 'Node.js', 'MySQL'],
    category: 'Web',
    icon: Globe,
    github: 'https://github.com/BRMilev22/BookBite',
    type: 'Web App',
    year: '2024'
  },
  {
    id: 5,
    title: 'AudioRescue',
    description: 'macOS menu bar app fixing MacBook audio issues. One-click CoreAudio restart with notifications and launch-at-login.',
    image: null,
    images: [],
    technologies: ['Swift', 'macOS', 'AppleScript', 'Menu Bar'],
    category: 'Desktop',
    icon: Monitor,
    github: 'https://github.com/BRMilev22/AudioRescue',
    type: 'macOS App',
    year: '2024'
  },
  {
    id: 6,
    title: 'Tasty',
    description: 'React Native meal planning app with AI recommendations, barcode scanning, and inventory management. TypeScript and Firebase.',
    image: '/projects/tasty/images/dashboard.png',
    images: [
      '/projects/tasty/images/dashboard.png',
      '/projects/tasty/images/suggested-meal-detail-screen.png',
      '/projects/tasty/images/user-inventory.png',
      '/projects/tasty/images/bracode-scanning.png',
      '/projects/tasty/video/demo-video.mp4'
    ],
    technologies: ['React Native', 'TypeScript', 'Firebase', 'Expo'],
    category: 'Mobile',
    icon: Smartphone,
    github: 'https://github.com/BRMilev22/tasty',
    type: 'React Native',
    year: '2024'
  },
  {
    id: 7,
    title: 'ChemEco',
    description: 'Environmental reporting system with React Native mobile app, Node.js API, and web dashboard. Full localization in Bulgarian.',
    image: '/projects/chemeco/images/main-screen.PNG',
    images: [
      '/projects/chemeco/images/main-screen.PNG',
      '/projects/chemeco/images/map-of-reports.PNG',
      '/projects/chemeco/images/map-of-reports-satelite.PNG',
      '/projects/chemeco/images/profile-screen.PNG',
      '/projects/chemeco/images/report.PNG',
      '/projects/chemeco/images/report-down-part.PNG',
      '/projects/chemeco/images/welcome-screen.PNG'
    ],
    technologies: ['React Native', 'Node.js', 'MySQL', 'TypeScript'],
    category: 'Mobile',
    icon: Smartphone,
    github: 'https://github.com/BRMilev22/eccc',
    type: 'React Native',
    year: '2024'
  },
  {
    id: 8,
    title: 'Live Weather Dashboard',
    description: 'Modern weather dashboard with real-time data, interactive charts, and glassmorphism design. React, TypeScript, and Chart.js.',
    image: '/projects/live-weather-dashboard/images/demo-image.png',
    images: [
      '/projects/live-weather-dashboard/images/demo-image.png',
      '/projects/live-weather-dashboard/images/add-location.png'
    ],
    technologies: ['React', 'TypeScript', 'Chart.js', 'Tailwind'],
    category: 'Web',
    icon: Globe,
    github: 'https://github.com/BRMilev22/live-weather-dashboard',
    type: 'Web App',
    year: '2024'
  },
  {
    id: 9,
    title: 'AutoDB',
    description: 'Auto parts inventory management system with React frontend, Node.js backend, and MySQL database. Complete CRUD operations.',
    image: '/projects/autodb/images/sc1.png',
    images: [
      '/projects/autodb/images/sc1.png',
      '/projects/autodb/images/sc2.png',
      '/projects/autodb/images/sc3.png',
      '/projects/autodb/images/sc4.png'
    ],
    technologies: ['React', 'Node.js', 'MySQL', 'Bootstrap'],
    category: 'Web',
    icon: Database,
    github: 'https://github.com/BRMilev22/autodb',
    type: 'Web App',
    year: '2024'
  },
  {
    id: 10,
    title: 'Dragomanski Website',
    description: 'Modern construction company website built with Next.js, TypeScript, and Tailwind CSS. Responsive design with animations.',
    image: '/projects/smdragomanski-website/images/main-page.png',
    images: [
      '/projects/smdragomanski-website/images/main-page.png',
      '/projects/smdragomanski-website/images/main-page-our-services.png',
      '/projects/smdragomanski-website/images/about-us-in-main-page.png',
      '/projects/smdragomanski-website/images/main-page-product-showcase.png',
      '/projects/smdragomanski-website/images/main-page-contact-us.png',
      '/projects/smdragomanski-website/images/promo-on-main-page.png',
      '/projects/smdragomanski-website/images/promotions.png',
      '/projects/smdragomanski-website/images/stores.png',
      '/projects/smdragomanski-website/images/profile-and-order-screen.png'
    ],
    technologies: ['Next.js', 'TypeScript', 'Tailwind', 'Framer Motion'],
    category: 'Web',
    icon: Globe,
    github: 'https://github.com/BRMilev22/dragomanski-website',
    type: 'Website',
    year: '2024'
  }
]

const categories = ['All', 'Mobile', 'Web', 'Full-Stack', 'Desktop']

// Helper function to check if file is a video
const isVideoFile = (url: string) => {
  return /\.(mp4|mov|webm|avi)$/i.test(url)
}

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Get all unique image URLs for preloading
  const allImageUrls = useMemo(() => {
    const urls = new Set<string>()
    projects.forEach(project => {
      if (project.image) urls.add(project.image)
      project.images?.forEach(img => urls.add(img))
    })
    return Array.from(urls)
  }, [])

  // Preload all images
  const { loadedImages, isLoading: imagesLoading } = useImagePreloader(allImageUrls)

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

  return (
    <section id="projects" className="py-20 px-6 relative">
      {/* Image preloading indicator */}
      {imagesLoading && (
        <div className="fixed top-4 right-4 z-50 glass px-4 py-2 rounded-full text-sm text-cyber-blue">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 border border-cyber-blue border-t-transparent rounded-full animate-spin"></div>
            Loading images...
          </div>
        </div>
      )}
      
      <div className="container mx-auto" ref={ref}>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyber-blue to-cyber-purple mx-auto mb-6" />
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            A showcase of my recent work spanning mobile, web, and desktop applications
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-cyber-blue to-cyber-purple text-white'
                  : 'glass text-white/70 hover:text-cyber-blue'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="glass rounded-xl overflow-hidden hover-lift group cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onClick={() => setSelectedProject(project)}
              layout
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden bg-dark-200">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className={`w-full h-full group-hover:scale-110 transition-transform duration-300 ${
                      // Mobile screenshots - fit and center with dark background
                      project.category === 'Mobile' || project.type.includes('iOS') || project.type.includes('React Native') || project.image?.includes('mobile')
                        ? 'object-contain bg-dark-300' 
                        // Web screenshots - fit and center (changed from cover to contain for better display)
                        : 'object-contain bg-dark-200'
                    } ${
                      loadedImages.has(project.image) ? 'opacity-100' : 'opacity-0'
                    }`}
                    style={{ 
                      transition: 'opacity 0.3s ease',
                      opacity: loadedImages.has(project.image) ? 1 : 0
                    }}
                    onError={(e) => {
                      e.currentTarget.style.display = 'none'
                    }}
                  />
                ) : null}
                {/* Fallback icon - always visible as background */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <project.icon size={48} className="text-cyber-blue opacity-30" />
                </div>
                <div className="absolute top-4 right-4 z-20 flex flex-col gap-2 items-end">
                  <span className="px-3 py-1 bg-cyber-blue/20 backdrop-blur-sm rounded-full text-xs font-medium text-cyber-blue border border-cyber-blue/30">
                    {project.type}
                  </span>
                  {project.images && project.images.length > 1 && (
                    <span className="px-2 py-1 bg-cyber-purple/20 backdrop-blur-sm rounded-full text-xs font-medium text-cyber-purple border border-cyber-purple/30">
                      📷 {project.images.length}
                    </span>
                  )}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-white group-hover:text-cyber-blue transition-colors">
                    {project.title}
                  </h3>
                  <span className="text-xs text-white/50 font-mono">{project.year}</span>
                </div>

                <p className="text-white/70 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-dark-200 rounded text-xs text-cyber-blue font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-dark-200 rounded text-xs text-white/50 font-medium">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                {/* Links */}
                <div className="flex items-center gap-3">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-white/70 hover:text-cyber-blue transition-colors text-sm font-medium"
                    whileHover={{ x: 5 }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Github size={16} />
                    Code
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Project Modal */}
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="glass max-w-2xl w-full max-h-[80vh] overflow-y-auto rounded-2xl"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-80 bg-dark-200">
                {/* Image Gallery */}
                {selectedProject.images && selectedProject.images.length > 0 ? (
                  <>
                    {isVideoFile(selectedProject.images[currentImageIndex]) ? (
                      <video
                        src={selectedProject.images[currentImageIndex]}
                        controls
                        autoPlay
                        muted
                        loop
                        className="w-full h-full object-contain p-4 bg-gradient-to-br from-dark-200 to-dark-300"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none'
                        }}
                      />
                    ) : (
                      <img
                        src={selectedProject.images[currentImageIndex]}
                        alt={`${selectedProject.title} - Image ${currentImageIndex + 1}`}
                        className={`w-full h-full transition-opacity duration-300 ${
                          // Mobile screenshots - contain and center with padding
                          selectedProject.category === 'Mobile' || selectedProject.type.includes('iOS') || selectedProject.type.includes('React Native') || selectedProject.images[currentImageIndex].includes('mobile')
                            ? 'object-contain p-4 bg-gradient-to-br from-dark-200 to-dark-300'
                            // Web screenshots - contain to show full page
                            : 'object-contain p-2 bg-dark-200'
                        } ${
                          loadedImages.has(selectedProject.images[currentImageIndex]) ? 'opacity-100' : 'opacity-50'
                        }`}
                        onError={(e) => {
                          e.currentTarget.style.display = 'none'
                        }}
                      />
                    )}
                    
                    {/* Navigation arrows for multiple images */}
                    {selectedProject.images.length > 1 && (
                      <>
                        <button
                          onClick={() => setCurrentImageIndex(
                            currentImageIndex > 0 ? currentImageIndex - 1 : selectedProject.images.length - 1
                          )}
                          className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 glass rounded-full hover:bg-white/10 transition-colors text-white z-10"
                        >
                          ←
                        </button>
                        <button
                          onClick={() => setCurrentImageIndex(
                            currentImageIndex < selectedProject.images.length - 1 ? currentImageIndex + 1 : 0
                          )}
                          className="absolute right-16 top-1/2 transform -translate-y-1/2 p-2 glass rounded-full hover:bg-white/10 transition-colors text-white z-10"
                        >
                          →
                        </button>
                        
                        {/* Image counter */}
                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 px-3 py-1 glass rounded-full text-xs text-white z-10">
                          {currentImageIndex + 1} / {selectedProject.images.length}
                        </div>
                      </>
                    )}
                  </>
                ) : (
                  /* Fallback for projects without images */
                  <div className="absolute inset-0 flex items-center justify-center">
                    <selectedProject.icon size={64} className="text-cyber-blue opacity-30" />
                  </div>
                )}
                
                <button
                  onClick={() => {
                    setSelectedProject(null)
                    setCurrentImageIndex(0)
                  }}
                  className="absolute top-4 right-4 p-2 glass rounded-full hover:bg-white/10 transition-colors text-white z-10"
                >
                  ×
                </button>
              </div>

              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-3xl font-bold text-gradient">
                    {selectedProject.title}
                  </h3>
                  <span className="px-3 py-1 bg-cyber-blue/20 rounded-full text-sm font-medium text-cyber-blue">
                    {selectedProject.type}
                  </span>
                </div>

                <p className="text-white/80 text-lg mb-6 leading-relaxed">
                  {selectedProject.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-dark-200 rounded-full text-sm text-cyber-blue font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <motion.a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyber-blue to-cyber-purple rounded-full font-semibold text-white hover:shadow-lg transition-all"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github size={20} />
                    View Code
                  </motion.a>
                </div>

                {/* Image thumbnails */}
                {selectedProject.images && selectedProject.images.length > 1 && (
                  <div className="mt-6 pt-6 border-t border-white/10">
                    <h4 className="text-sm font-medium text-white/70 mb-3">
                      Gallery ({selectedProject.images.length} {
                        selectedProject.images.some(img => isVideoFile(img)) ? 'items' : 'images'
                      })
                    </h4>
                    <div className="flex gap-2 overflow-x-auto pb-2">
                      {selectedProject.images.map((image, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentImageIndex(index)}
                          className={`relative flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                            currentImageIndex === index
                              ? 'border-cyber-blue shadow-lg shadow-cyber-blue/25'
                              : 'border-white/20 hover:border-white/40'
                          }`}
                        >
                          {isVideoFile(image) ? (
                            <div className="relative w-full h-full bg-dark-300 flex items-center justify-center">
                              <Play size={24} className="text-cyber-blue" />
                              <div className="absolute inset-0 bg-gradient-to-br from-cyber-blue/10 to-cyber-purple/10" />
                            </div>
                          ) : (
                            <img
                              src={image}
                              alt={`${selectedProject.title} thumbnail ${index + 1}`}
                              className={`w-full h-full transition-opacity duration-200 ${
                                selectedProject.category === 'Mobile' || selectedProject.type.includes('iOS') || selectedProject.type.includes('React Native') || image.includes('mobile')
                                  ? 'object-contain bg-dark-300'
                                  : 'object-contain bg-dark-200'
                              } ${
                                loadedImages.has(image) ? 'opacity-100' : 'opacity-50'
                              }`}
                            />
                          )}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          {[
            { number: '10', label: 'Projects Completed' },
            { number: '100+', label: 'Screenshots' },
            { number: '5', label: 'Categories Covered' },
            { number: '100%', label: 'Open Source' }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center glass p-6 rounded-xl"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
            >
              <div className="text-2xl md:text-3xl font-bold text-gradient mb-2">
                {stat.number}
              </div>
              <div className="text-white/70 text-sm font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}