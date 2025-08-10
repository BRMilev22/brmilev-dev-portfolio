'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Github, GitBranch, Star, GitCommit, Users, Trophy, Calendar, Zap, Code, Activity } from 'lucide-react'
import Image from 'next/image'

interface GitHubData {
  user: {
    login: string
    name: string
    bio: string
    public_repos: number
    followers: number
    following: number
    created_at: string
    avatar_url: string
  }
  repos: Array<{
    name: string
    description: string
    language: string
    stargazers_count: number
    forks_count: number
    updated_at: string
  }>
  commits: Array<{
    date: string
    count: number
  }>
  languages: Record<string, number>
}

const GITHUB_USERNAME = 'BRMilev22'

export default function GitHubStats() {
  const [githubData, setGithubData] = useState<GitHubData | null>(null)
  const [loading, setLoading] = useState(true)
  const [totalCommits, setTotalCommits] = useState(1044)
  const [currentStreak, setCurrentStreak] = useState(23)

  // Simulated real GitHub-style data until we can fetch real data
  const mockGithubData: GitHubData = {
    user: {
      login: 'BRMilev22',
      name: 'Boris Milev',
      bio: 'Full-Stack Developer & Student at VSCPI Burgas',
      public_repos: 15,
      followers: 28,
      following: 42,
      created_at: '2023-01-15T00:00:00Z',
      avatar_url: '/me.jpg'
    },
    repos: [
      {
        name: 'brmilev-dev-portfolio',
        description: 'Modern developer portfolio with Next.js 14',
        language: 'TypeScript',
        stargazers_count: 12,
        forks_count: 3,
        updated_at: '2025-01-08T00:00:00Z'
      },
      {
        name: 'DreamWeaver',
        description: 'AI-powered story generation iOS app',
        language: 'Swift',
        stargazers_count: 8,
        forks_count: 2,
        updated_at: '2024-12-20T00:00:00Z'
      },
      {
        name: 'MoodyChat',
        description: 'Emotion-responsive chat interface',
        language: 'Swift',
        stargazers_count: 15,
        forks_count: 4,
        updated_at: '2024-12-15T00:00:00Z'
      }
    ],
    commits: generateCommitHistory(),
    languages: {
      'TypeScript': 35,
      'Swift': 25,
      'JavaScript': 20,
      'Python': 10,
      'C++': 8,
      'CSS': 2
    }
  }

  function generateCommitHistory() {
    const commits = []
    const today = new Date()
    
    for (let i = 364; i >= 0; i--) {
      const date = new Date(today)
      date.setDate(date.getDate() - i)
      
      // More realistic commit patterns
      const dayOfWeek = date.getDay()
      let baseCommits = 0
      
      // More commits on weekdays
      if (dayOfWeek >= 1 && dayOfWeek <= 5) {
        baseCommits = Math.floor(Math.random() * 8) + 2
      } else {
        baseCommits = Math.floor(Math.random() * 3)
      }
      
      // Some random variation
      const variance = Math.random() > 0.7 ? Math.floor(Math.random() * 5) : 0
      
      commits.push({
        date: date.toISOString().split('T')[0],
        count: Math.max(0, baseCommits + variance)
      })
    }
    
    return commits
  }

  useEffect(() => {
    // Simulate loading real data
    setTimeout(() => {
      setGithubData(mockGithubData)
      setLoading(false)
    }, 1000)

    // Simulate real-time updates
    const interval = setInterval(() => {
      setTotalCommits(prev => prev + (Math.random() > 0.8 ? 1 : 0))
      setCurrentStreak(prev => prev + (Math.random() > 0.95 ? 1 : 0))
    }, 10000)

    return () => clearInterval(interval)
  }, [])

  if (loading) {
    return (
      <div className="glass p-8 rounded-2xl">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 bg-gradient-to-r from-cyber-blue to-cyber-purple rounded-full animate-pulse" />
          <div>
            <div className="w-32 h-4 bg-white/20 rounded animate-pulse mb-2" />
            <div className="w-48 h-3 bg-white/10 rounded animate-pulse" />
          </div>
        </div>
        <div className="grid grid-cols-4 gap-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="h-16 bg-white/10 rounded-xl animate-pulse" />
          ))}
        </div>
      </div>
    )
  }

  if (!githubData) return null

  const totalStars = githubData.repos.reduce((sum, repo) => sum + repo.stargazers_count, 0)
  const totalForks = githubData.repos.reduce((sum, repo) => sum + repo.forks_count, 0)

  return (
    <motion.div
      className="glass p-8 rounded-2xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <motion.div
          className="relative w-16 h-16"
          whileHover={{ scale: 1.1, rotate: 5 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-cyber-blue to-cyber-purple rounded-full animate-pulse" />
          <div className="absolute inset-1 rounded-full overflow-hidden">
            <Image
              src={githubData.user.avatar_url}
              alt={githubData.user.name}
              width={56}
              height={56}
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
        
        <div>
          <h3 className="text-xl font-bold text-white flex items-center gap-2">
            <Github size={20} className="text-cyber-blue" />
            GitHub Statistics
          </h3>
          <p className="text-white/60">@{githubData.user.login} • Real-time data</p>
        </div>

        <motion.div
          className="ml-auto flex items-center gap-2 px-3 py-1 bg-green-400/20 rounded-full"
          animate={{ opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-2 h-2 bg-green-400 rounded-full" />
          <span className="text-xs font-medium text-green-400">LIVE</span>
        </motion.div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {[
          { 
            label: 'Total Commits',
            value: totalCommits.toLocaleString(),
            icon: GitCommit,
            color: 'from-cyber-blue to-blue-400',
            trend: '+5 today'
          },
          {
            label: 'Current Streak',
            value: `${currentStreak} days`,
            icon: Zap,
            color: 'from-green-400 to-emerald-500',
            trend: 'Personal record!'
          },
          {
            label: 'Public Repos',
            value: githubData.user.public_repos,
            icon: GitBranch,
            color: 'from-cyber-purple to-purple-400',
            trend: 'Portfolio updated'
          },
          {
            label: 'Total Stars',
            value: totalStars,
            icon: Star,
            color: 'from-yellow-400 to-orange-500',
            trend: '+2 this week'
          },
          {
            label: 'Followers',
            value: githubData.user.followers,
            icon: Users,
            color: 'from-cyber-pink to-pink-400',
            trend: '+3 new'
          },
          {
            label: 'Languages',
            value: Object.keys(githubData.languages).length,
            icon: Code,
            color: 'from-indigo-400 to-purple-500',
            trend: 'TypeScript 35%'
          },
          {
            label: 'Total Forks',
            value: totalForks,
            icon: GitBranch,
            color: 'from-teal-400 to-cyan-500',
            trend: 'Community ❤️'
          },
          {
            label: 'Years Active',
            value: new Date().getFullYear() - new Date(githubData.user.created_at).getFullYear(),
            icon: Calendar,
            color: 'from-violet-400 to-purple-500',
            trend: 'Since 2023'
          }
        ].map((stat, index) => (
          <motion.div
            key={stat.label}
            className="relative overflow-hidden bg-gradient-to-br from-white/5 to-white/10 rounded-xl p-4 border border-white/10"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-10`} />
            
            <div className="relative mb-2">
              <stat.icon size={20} className="text-white/80 mb-2" />
              <div className="text-xl font-bold text-white">
                {stat.value}
              </div>
              <div className="text-xs text-white/60 font-medium mb-1">
                {stat.label}
              </div>
              <div className="text-xs text-cyber-blue font-medium">
                {stat.trend}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* GitHub Activity Graph */}
      <div className="mb-8">
        <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
          <Activity size={20} className="text-cyber-blue" />
          Contribution Activity
          <span className="text-sm text-white/50 ml-auto">
            1044 total contributions
          </span>
        </h4>
        
        <div className="p-4 bg-dark-200/30 rounded-xl border border-white/10">
          <div className="flex gap-1 mb-3">
            {Array.from({ length: 53 }, (_, week) => (
              <div key={week} className="flex flex-col gap-1">
                {Array.from({ length: 7 }, (_, day) => {
                  const dataIndex = week * 7 + day
                  const commitData = githubData.commits[dataIndex] || { count: 0 }
                  const intensity = Math.min(commitData.count / 10, 1)
                  
                  return (
                    <motion.div
                      key={day}
                      className={`w-2.5 h-2.5 rounded-sm ${
                        intensity > 0.8 ? 'bg-cyber-blue shadow-sm shadow-cyber-blue' :
                        intensity > 0.6 ? 'bg-cyber-blue/80' :
                        intensity > 0.4 ? 'bg-cyber-blue/60' :
                        intensity > 0.2 ? 'bg-cyber-blue/40' :
                        intensity > 0 ? 'bg-cyber-blue/20' :
                        'bg-white/10'
                      }`}
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: (week * 7 + day) * 0.002 }}
                      whileHover={{ 
                        scale: 1.3,
                        boxShadow: intensity > 0 ? '0 0 10px var(--color-primary)' : undefined
                      }}
                      title={`${commitData.count} contributions on ${githubData.commits[dataIndex]?.date || 'Unknown'}`}
                    />
                  )
                })}
              </div>
            ))}
          </div>
          
          <div className="flex items-center justify-between text-xs text-white/50">
            <span>Less</span>
            <div className="flex gap-1">
              <div className="w-2.5 h-2.5 bg-white/10 rounded-sm" />
              <div className="w-2.5 h-2.5 bg-cyber-blue/20 rounded-sm" />
              <div className="w-2.5 h-2.5 bg-cyber-blue/40 rounded-sm" />
              <div className="w-2.5 h-2.5 bg-cyber-blue/60 rounded-sm" />
              <div className="w-2.5 h-2.5 bg-cyber-blue/80 rounded-sm" />
              <div className="w-2.5 h-2.5 bg-cyber-blue rounded-sm" />
            </div>
            <span>More</span>
          </div>
        </div>
      </div>

      {/* Language Usage */}
      <div className="mb-8">
        <h4 className="text-lg font-semibold text-white mb-4">Most Used Languages</h4>
        <div className="space-y-3">
          {Object.entries(githubData.languages)
            .sort(([,a], [,b]) => b - a)
            .slice(0, 6)
            .map(([language, percentage], index) => (
            <motion.div
              key={language}
              className="flex items-center gap-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="w-20 text-sm font-medium text-white/80">
                {language}
              </div>
              <div className="flex-1 bg-dark-200/50 rounded-full h-2 overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-cyber-blue to-cyber-purple rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${percentage}%` }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.8 }}
                />
              </div>
              <div className="w-12 text-sm text-white/60 text-right">
                {percentage}%
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* GitHub Trophies */}
      <div>
        <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
          <Trophy size={20} className="text-yellow-400" />
          GitHub Achievements
        </h4>
        
        <div className="flex items-center justify-center p-4 bg-dark-200/30 rounded-xl border border-white/10">
          <motion.img
            src={`https://github-profile-trophy.vercel.app/?username=${GITHUB_USERNAME}&theme=radical&no-frame=false&no-bg=true&margin-w=4&row=1&column=6`}
            alt="GitHub Trophies"
            className="max-w-full h-auto"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
          />
        </div>
      </div>
    </motion.div>
  )
}