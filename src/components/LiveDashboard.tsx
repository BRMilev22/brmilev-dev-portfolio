'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Activity, GitBranch, Coffee, Zap, Code, Calendar, Clock, TrendingUp } from 'lucide-react'

interface DashboardStats {
  linesOfCode: number
  projectsCompleted: number
  githubContributions: number
  coffeeConsumed: number
  currentStreak: number
  totalCommits: number
  languagesUsed: string[]
  lastActiveTime: string
}

export default function LiveDashboard() {
  const [stats, setStats] = useState<DashboardStats>({
    linesOfCode: 15420,
    projectsCompleted: 10,
    githubContributions: 247,
    coffeeConsumed: 127,
    currentStreak: 23,
    totalCommits: 342,
    languagesUsed: ['TypeScript', 'Swift', 'Python', 'C++'],
    lastActiveTime: 'Just now'
  })

  const [isLive, setIsLive] = useState(true)

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setStats(prev => ({
        ...prev,
        linesOfCode: prev.linesOfCode + Math.floor(Math.random() * 10),
        githubContributions: prev.githubContributions + (Math.random() > 0.7 ? 1 : 0),
        coffeeConsumed: prev.coffeeConsumed + (Math.random() > 0.9 ? 1 : 0),
        lastActiveTime: Math.random() > 0.5 ? 'Just now' : '2m ago'
      }))
      
      setIsLive(prev => !prev)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const dashboardItems = [
    {
      label: 'Lines of Code',
      value: stats.linesOfCode.toLocaleString(),
      icon: Code,
      color: 'from-cyber-blue to-blue-400',
      trend: '+127 today'
    },
    {
      label: 'Projects Done',
      value: stats.projectsCompleted,
      icon: GitBranch,
      color: 'from-cyber-purple to-purple-400',
      trend: 'Portfolio v1.0'
    },
    {
      label: 'GitHub Streak',
      value: `${stats.currentStreak} days`,
      icon: Activity,
      color: 'from-green-400 to-emerald-500',
      trend: 'Personal record!'
    },
    {
      label: 'Coffee Consumed',
      value: stats.coffeeConsumed,
      icon: Coffee,
      color: 'from-amber-400 to-orange-500',
      trend: '+3 today ☕'
    },
    {
      label: 'Total Commits',
      value: stats.totalCommits,
      icon: TrendingUp,
      color: 'from-cyber-pink to-pink-400',
      trend: '+12 this week'
    },
    {
      label: 'Last Active',
      value: stats.lastActiveTime,
      icon: Clock,
      color: 'from-cyan-400 to-blue-500',
      trend: 'Coding now'
    }
  ]

  return (
    <motion.div
      className="glass p-6 rounded-2xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="relative">
            <Zap size={24} className="text-cyber-blue" />
            <motion.div
              className={`absolute -top-1 -right-1 w-3 h-3 rounded-full ${
                isLive ? 'bg-green-400' : 'bg-green-400/50'
              }`}
              animate={{
                scale: isLive ? [1, 1.2, 1] : 1,
                opacity: isLive ? [1, 0.7, 1] : 0.7
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
          <div>
            <h3 className="text-lg font-bold text-white">Live Dashboard</h3>
            <p className="text-sm text-white/60">Real-time developer stats</p>
          </div>
        </div>
        
        <motion.div
          className="flex items-center gap-2 px-3 py-1 bg-green-400/20 rounded-full"
          animate={{ opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-2 h-2 bg-green-400 rounded-full" />
          <span className="text-xs font-medium text-green-400">LIVE</span>
        </motion.div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {dashboardItems.map((item, index) => (
          <motion.div
            key={item.label}
            className="relative overflow-hidden bg-gradient-to-br from-white/5 to-white/10 rounded-xl p-4 border border-white/10"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 * index }}
            whileHover={{ scale: 1.02, y: -2 }}
          >
            {/* Background Gradient */}
            <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-10`} />
            
            {/* Icon */}
            <div className="relative mb-3">
              <item.icon size={20} className="text-white/80" />
            </div>
            
            {/* Value */}
            <div className="relative">
              <div className="text-lg font-bold text-white mb-1">
                {item.value}
              </div>
              <div className="text-xs text-white/60 font-medium mb-2">
                {item.label}
              </div>
              <div className="text-xs text-cyber-blue font-medium">
                {item.trend}
              </div>
            </div>

            {/* Animated border */}
            <div className="absolute inset-0 rounded-xl opacity-0 hover:opacity-100 transition-opacity">
              <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${item.color} p-[1px]`}>
                <div className="w-full h-full bg-dark-200/50 rounded-xl" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* GitHub-style Activity Graph */}
      <motion.div
        className="mt-6 p-4 bg-dark-200/30 rounded-xl border border-white/10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <div className="flex items-center justify-between mb-3">
          <h4 className="text-sm font-medium text-white/80">Coding Activity</h4>
          <span className="text-xs text-white/50">{stats.githubContributions} contributions this year</span>
        </div>
        
        <div className="flex gap-1">
          {Array.from({ length: 52 }, (_, week) => (
            <div key={week} className="flex flex-col gap-1">
              {Array.from({ length: 7 }, (_, day) => {
                const intensity = Math.random()
                return (
                  <motion.div
                    key={day}
                    className={`w-2 h-2 rounded-sm ${
                      intensity > 0.8 ? 'bg-cyber-blue' :
                      intensity > 0.6 ? 'bg-cyber-blue/70' :
                      intensity > 0.4 ? 'bg-cyber-blue/50' :
                      intensity > 0.2 ? 'bg-cyber-blue/30' :
                      'bg-white/10'
                    }`}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: (week * 7 + day) * 0.01 }}
                    whileHover={{ scale: 1.2 }}
                  />
                )
              })}
            </div>
          ))}
        </div>
        
        <div className="flex items-center justify-between mt-2 text-xs text-white/50">
          <span>Less</span>
          <div className="flex gap-1">
            <div className="w-2 h-2 bg-white/10 rounded-sm" />
            <div className="w-2 h-2 bg-cyber-blue/30 rounded-sm" />
            <div className="w-2 h-2 bg-cyber-blue/50 rounded-sm" />
            <div className="w-2 h-2 bg-cyber-blue/70 rounded-sm" />
            <div className="w-2 h-2 bg-cyber-blue rounded-sm" />
          </div>
          <span>More</span>
        </div>
      </motion.div>

      {/* Tech Stack Usage */}
      <motion.div
        className="mt-4 flex flex-wrap gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        {stats.languagesUsed.map((lang, index) => (
          <motion.span
            key={lang}
            className="px-2 py-1 bg-gradient-to-r from-cyber-blue/20 to-cyber-purple/20 rounded-full text-xs font-medium text-cyber-blue border border-cyber-blue/30"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.3 + index * 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            {lang}
          </motion.span>
        ))}
      </motion.div>
    </motion.div>
  )
}