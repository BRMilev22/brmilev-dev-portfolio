'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Mail, MapPin, Calendar, Coffee, Github, Linkedin } from 'lucide-react'

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'zvarazoku9@icloud.com',
      href: 'mailto:zvarazoku9@icloud.com',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Burgas, Bulgaria',
      href: null,
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Calendar,
      label: 'Born',
      value: 'April 8th, 2008',
      href: null,
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Coffee,
      label: 'Status',
      value: 'Available for work',
      href: null,
      color: 'from-orange-500 to-red-500'
    }
  ]

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/BRMilev22',
      color: 'hover:text-white'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/boris-milev-792546304/',
      color: 'hover:text-blue-400'
    },
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:zvarazoku9@icloud.com',
      color: 'hover:text-red-400'
    }
  ]

  return (
    <section id="contact" className="py-20 px-6 relative">
      <div className="container mx-auto" ref={ref}>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyber-blue to-cyber-purple mx-auto mb-6" />
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            I&apos;m always open to discussing new opportunities, interesting projects, or just having a chat about technology
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Info Cards */}
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.label}
                className={`glass p-6 rounded-xl hover-lift group ${info.href ? 'cursor-pointer' : ''}`}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                onClick={() => info.href && window.open(info.href, '_blank')}
              >
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${info.color} mb-4 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <info.icon size={24} className="text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{info.label}</h3>
                <p className="text-white/70 text-sm">{info.value}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Main Contact Section */}
          <motion.div
            className="glass p-8 md:p-12 rounded-2xl text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-cyber-blue to-cyber-purple rounded-full flex items-center justify-center">
                <Mail size={32} className="text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gradient mb-4">
                Let&apos;s Work Together
              </h3>
              <p className="text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
                I&apos;m currently available for freelance work, internships, or full-time opportunities. 
                Whether you have a project in mind or just want to connect, I&apos;d love to hear from you!
              </p>
            </motion.div>

            {/* Email CTA */}
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <motion.a
                href="mailto:zvarazoku9@icloud.com"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyber-blue to-cyber-purple rounded-full font-semibold text-white text-lg hover:shadow-2xl hover:shadow-cyber-blue/25 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail size={20} />
                Send me an email
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex items-center justify-center gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 glass rounded-full text-white/70 ${social.color} transition-all duration-300 hover-lift`}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </motion.div>

            {/* Availability Status */}
            <motion.div
              className="mt-8 pt-8 border-t border-white/10"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <div className="flex items-center justify-center gap-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="text-green-400 font-medium">Available for new opportunities</span>
              </div>
              <p className="text-white/60 text-sm mt-2">
                Currently looking for internships and freelance projects
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}