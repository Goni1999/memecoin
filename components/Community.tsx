'use client'

import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'

interface CommunityPlatform {
  id: string
  name: string
  icon: string
  count: string
  description: string
  href: string
  color: string
  status: string
  growth: string
  tier: string
  members: number
}

const Community = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const [activePlatform, setActivePlatform] = useState<string | null>(null)
  const [liveCount, setLiveCount] = useState<{ [key: string]: number }>({})
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    setIsVisible(true)
    
    const handleMouseMove = (e: MouseEvent) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect()
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100
        })
      }
    }

    // Simulate live member count updates
    const updateCounts = () => {
      platforms.forEach(platform => {
        setLiveCount(prev => ({
          ...prev,
          [platform.id]: platform.members + Math.floor(Math.random() * 10) - 5
        }))
      })
    }

    updateCounts()
    const countInterval = setInterval(updateCounts, 5000)

    const section = sectionRef.current
    if (section) {
      section.addEventListener('mousemove', handleMouseMove)
    }

    return () => {
      if (section) {
        section.removeEventListener('mousemove', handleMouseMove)
      }
      clearInterval(countInterval)
    }
  }, [])

  const platforms: CommunityPlatform[] = [
    {
      id: 'discord',
      name: 'Discord',
      icon: '💬',
      count: '500K+',
      description: 'Members sharing memes 24/7',
      href: '#discord',
      color: 'from-indigo-500 to-purple-600',
      status: 'ONLINE',
      growth: '+12%',
      tier: 'LEGENDARY',
      members: 523847
    },
    {
      id: 'twitter',
      name: 'X (Twitter)',
      icon: '🐦',
      count: '1M+',
      description: 'Followers spreading meme culture',
      href: '#twitter',
      color: 'from-blue-400 to-blue-600',
      status: 'VIRAL',
      growth: '+25%',
      tier: 'MYTHICAL',
      members: 1247893
    },
    {
      id: 'telegram',
      name: 'Telegram',
      icon: '📱',
      count: '250K+',
      description: 'Active community discussions',
      href: '#telegram',
      color: 'from-blue-500 to-cyan-500',
      status: 'ACTIVE',
      growth: '+8%',
      tier: 'EPIC',
      members: 267432
    },
    {
      id: 'reddit',
      name: 'Reddit',
      icon: '📖',
      count: '300K+',
      description: 'Meme enthusiasts and builders',
      href: '#reddit',
      color: 'from-primary-500 to-primary-600',
      status: 'TRENDING',
      growth: '+15%',
      tier: 'RARE',
      members: 334567
    },
    {
      id: 'youtube',
      name: 'YouTube',
      icon: '📺',
      count: '100K+',
      description: 'Educational content and tutorials',
      href: '#youtube',
      color: 'from-secondary-500 to-secondary-700',
      status: 'GROWING',
      growth: '+18%',
      tier: 'EPIC',
      members: 134789
    },
    {
      id: 'github',
      name: 'GitHub',
      icon: '💻',
      count: '50K+',
      description: 'Developers building the future',
      href: '#github',
      color: 'from-gray-600 to-gray-800',
      status: 'BUILDING',
      growth: '+22%',
      tier: 'LEGENDARY',
      members: 67234
    }
  ]

  const formatCount = (num: number) => {
    if (num >= 1000000) {
      return `${(num / 1000000).toFixed(1)}M`
    }
    if (num >= 1000) {
      return `${(num / 1000).toFixed(0)}K`
    }
    return num.toLocaleString()
  }

  return (
    <section 
      ref={sectionRef}
      id="community" 
      className="section-padding bg-gradient-to-b from-dark-900 via-black to-dark-800 relative overflow-hidden"
    >
      {/* Advanced Interactive Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Dynamic mesh gradient */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(34, 197, 94, 0.1) 0%, transparent 50%)`
          }}
        />

        {/* Floating community particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
                            className="absolute w-2 h-2 bg-primary-400/40 rounded-full animate-float-community"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${6 + Math.random() * 4}s`
            }}
          />
        ))}

        {/* Network connections */}
        <svg className="absolute inset-0 w-full h-full opacity-10">
          <defs>
            <linearGradient id="communityLine" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="50%" stopColor="#22c55e" stopOpacity="0.6" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>
          {[...Array(8)].map((_, i) => (
            <g key={i}>
              <line
                x1={`${10 + i * 12}%`}
                y1="20%"
                x2={`${15 + i * 10}%`}
                y2="80%"
                stroke="url(#communityLine)"
                strokeWidth="1"
                className="animate-pulse"
                style={{ animationDelay: `${i * 0.3}s` }}
              />
              <circle
                cx={`${15 + i * 10}%`}
                cy={`${30 + Math.sin(i) * 25}%`}
                r="2"
                fill="#22c55e"
                opacity="0.4"
                className="animate-pulse"
                style={{ animationDelay: `${i * 0.2}s` }}
              />
            </g>
          ))}
        </svg>

        {/* Background community text */}
        <div className="absolute inset-0 opacity-5">
          <div className="text-8xl font-black text-primary-400 absolute top-32 right-10 transform rotate-12 animate-pulse">COMMUNITY</div>
        </div>
      </div>

      <div className="container-custom relative z-10">
        {/* Enhanced Section Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-8">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-primary-400 to-transparent animate-pulse"></div>
              <div className="text-primary-400 text-sm font-bold uppercase tracking-[0.4em] animate-bounce">
                GLOBAL COMMUNITY
              </div>
              <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-primary-400 to-transparent animate-pulse"></div>
            </div>
            
            <h2 className={`text-display-lg sm:text-display-xl lg:text-6xl font-black mb-6 transition-all duration-1000 ${isVisible ? 'animate-fade-up' : 'opacity-0 translate-y-20'}`}>
              Join a{' '}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-primary-400 via-primary-500 to-secondary-600 bg-clip-text text-transparent animate-gradient-flow">
                  thriving community
                </span>
                <div className="absolute -inset-2 bg-gradient-to-r from-primary-400/20 to-primary-500/20 blur-xl animate-pulse" />
              </span>
              .
            </h2>
          </div>
          
          {/* Enhanced Stats Grid */}
          <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto mb-12 transition-all duration-1000 ${isVisible ? 'animate-fade-up animate-stagger-1' : 'opacity-0 translate-y-20'}`}>
            {[
              { value: '3,800+', label: 'Community members', icon: '👥', color: 'from-blue-400 to-cyan-500' },
              { value: '1,075', label: 'Global events', icon: '🌍', color: 'from-purple-400 to-pink-500' },
              { value: '∞', label: 'Opportunities', icon: '🚀', color: 'from-secondary-400 to-primary-500' },
              { value: '24/7', label: 'Support', icon: '💬', color: 'from-secondary-400 to-secondary-500' }
            ].map((stat, index) => (
              <div key={index} className="group relative">
                <div className="bg-gradient-to-br from-gray-900/80 via-black/80 to-gray-800/80 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6 relative overflow-hidden group-hover:border-green-400/50 transition-all duration-500 group-hover:scale-105 group-hover:shadow-xl hover:shadow-green-400/20">
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.color}/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  
                  <div className="relative z-10 text-center">
                    <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">{stat.icon}</div>
                    <div className={`text-4xl lg:text-5xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300`}>
                      {stat.value}
                    </div>
                    <div className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 text-sm font-medium">
                      {stat.label}
                    </div>
                  </div>
                  
                  {/* Progress indicator */}
                  <div className="mt-4 w-full bg-gray-800 rounded-full h-1 overflow-hidden">
                    <div 
                      className={`h-full bg-gradient-to-r ${stat.color} transition-all duration-1000 group-hover:animate-pulse`}
                      style={{ width: '100%', transitionDelay: `${index * 0.2}s` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Community Platforms Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {platforms.map((platform, index) => (
            <div
              key={platform.id}
              className={`group relative transition-all duration-1000 ${isVisible ? 'animate-fade-up' : 'opacity-0 translate-y-20'}`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setActivePlatform(platform.id)}
              onMouseLeave={() => setActivePlatform(null)}
            >
              <Link href={platform.href}>
                <div className="relative bg-gradient-to-br from-gray-900/90 via-black/90 to-gray-800/80 backdrop-blur-xl border border-gray-800 rounded-2xl p-6 overflow-hidden group-hover:border-green-400/50 transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-green-400/20 transform-gpu h-full">
                  
                  {/* Dynamic background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${platform.color}/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  
                  {/* Status indicator */}
                  <div className="absolute top-3 right-3 flex items-center space-x-2">
                                <div className="w-2 h-2 bg-primary-400 rounded-full animate-pulse" />
            <span className="text-xs text-primary-400 font-bold">{platform.status}</span>
                  </div>
                  
                  {/* Tier badge */}
                  <div className="absolute top-3 left-3">
                              <div className="bg-gradient-to-r from-secondary-400/20 to-primary-500/20 border border-secondary-400/30 rounded-lg px-2 py-1">
            <span className="text-xs text-secondary-400 font-bold">{platform.tier}</span>
          </div>
                  </div>
                  
                  {/* Floating particles */}
                  <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {[...Array(8)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-1 h-1 bg-primary-400/60 rounded-full animate-float-platform"
                        style={{
                          left: `${20 + i * 8}%`,
                          top: `${30 + Math.sin(i) * 20}%`,
                          animationDelay: `${i * 0.2}s`
                        }}
                      />
                    ))}
                  </div>

                  <div className="relative z-10">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="relative">
                        <span className="text-5xl group-hover:scale-125 transition-transform duration-300 relative z-10">
                          {platform.icon}
                        </span>
                        <div className={`absolute inset-0 bg-gradient-to-r ${platform.color} rounded-full blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300`} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white group-hover:bg-gradient-to-r group-hover:from-primary-400 group-hover:to-primary-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                          {platform.name}
                        </h3>
                        <div className="flex items-center space-x-3 mt-1">
                          <div className={`text-2xl font-black bg-gradient-to-r ${platform.color} bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300`}>
                            {liveCount[platform.id] ? formatCount(liveCount[platform.id]) : platform.count}
                          </div>
                          <div className="flex items-center space-x-1">
                                          <span className="text-xs text-primary-400">↗</span>
              <span className="text-xs text-primary-400 font-bold">{platform.growth}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 text-sm leading-relaxed mb-4">
                      {platform.description}
                    </p>
                    
                    {/* Live activity indicator */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-primary-400 group-hover:text-primary-300 transition-colors">
                        <span className="font-semibold text-sm">Join now</span>
                        <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-1 h-1 bg-primary-400 rounded-full animate-pulse" />
                        <span className="text-xs text-gray-500">Live</span>
                      </div>
                    </div>

                    {/* Activity meter */}
                   
                  </div>

                  {/* Hover glow effect */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${platform.color}/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse`} />
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* Enhanced Call to Action */}
        <div className="text-center mb-20">
          <div className="relative bg-gradient-to-r from-gray-900/90 via-black/90 to-gray-800/90 backdrop-blur-xl border border-gray-700 rounded-3xl p-12 max-w-5xl mx-auto overflow-hidden animate-fade-up">
            <div className="absolute inset-0 bg-gradient-to-r from-primary-400/5 via-primary-500/5 to-primary-400/5 animate-pulse" />
            
            {/* Neural network overlay */}
            <div className="absolute inset-0 opacity-10">
              <svg className="w-full h-full">
                <defs>
                  <radialGradient id="communityCtaGradient">
                    <stop offset="0%" stopColor="#22c55e" />
                    <stop offset="100%" stopColor="transparent" />
                  </radialGradient>
                </defs>
                {[...Array(8)].map((_, i) => (
                  <circle
                    key={i}
                    cx={`${15 + i * 10}%`}
                    cy="50%"
                    r="3"
                    fill="url(#communityCtaGradient)"
                    className="animate-pulse"
                    style={{ animationDelay: `${i * 0.2}s` }}
                  />
                ))}
              </svg>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-3xl sm:text-4xl font-black mb-6 text-white">
                It's time to join the thousands of creators, artists, and developers using{' '}
                <span className="bg-gradient-to-r from-primary-400 to-primary-500 bg-clip-text text-transparent">
                  Solana
                </span>
                .
              </h3>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button
                  onClick={() => (window as any).openModal?.()}
                  className="group relative bg-gradient-to-r from-primary-400 via-primary-500 to-secondary-600 text-black font-black text-lg px-10 py-5 rounded-xl overflow-hidden transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-primary-400/25 transform-gpu"
                >
                  <span className="relative z-10 flex items-center justify-center">
                    Start Building
                    <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
                  </span>
                              <div className="absolute inset-0 bg-gradient-to-r from-primary-300 to-secondary-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute -inset-1 bg-gradient-to-r from-primary-400 to-secondary-500 rounded-xl blur opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Community Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center mb-20">
          {[
            { label: 'Active Users', value: '2.5M+', icon: '👥', color: 'from-blue-400 to-cyan-500' },
            { label: 'Memes Created', value: '∞', icon: '🎨', color: 'from-purple-400 to-pink-500' },
            { label: 'Daily Volume', value: '$50M+', icon: '💰', color: 'from-secondary-400 to-primary-500' },
            { label: 'Countries', value: '150+', icon: '🌍', color: 'from-secondary-400 to-secondary-500' }
          ].map((stat, index) => (
            <div
              key={stat.label}
              className={`group animate-fade-up`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative">
                <div className="text-4xl mb-3 group-hover:scale-125 transition-transform duration-300 relative z-10">{stat.icon}</div>
                <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} rounded-full blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300`} />
              </div>
              <div className={`text-2xl sm:text-3xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-1 group-hover:scale-110 transition-transform duration-300`}>
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm font-medium group-hover:text-gray-300 transition-colors duration-300">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Community Guidelines */}
        <div className="mt-20 text-center">
          <div className="relative bg-gradient-to-r from-gray-900/80 via-black/80 to-gray-800/80 backdrop-blur-xl border border-gray-700 rounded-2xl p-8 max-w-4xl mx-auto overflow-hidden animate-fade-up">
            <div className="absolute inset-0 bg-gradient-to-r from-primary-400/5 to-primary-500/5 animate-pulse" />
            
            <div className="relative z-10">
              <h4 className="text-xl font-bold mb-4 text-white">
                Community Guidelines
              </h4>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Our community thrives on creativity, respect, and innovation. We're building the future of meme culture together.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                {[
                  { text: 'Be creative and original', icon: '✨' },
                  { text: 'Respect all members', icon: '🤝' },
                  { text: 'Share knowledge freely', icon: '🧠' }
                ].map((guideline, index) => (
                  <div key={index} className="flex items-center space-x-2 group">
                    <span className="text-lg group-hover:scale-125 transition-transform duration-300">{guideline.icon}</span>
                    <span className="text-gray-300 group-hover:text-primary-400 transition-colors duration-300">{guideline.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Advanced CSS for enhanced animations */}
      <style jsx>{`
        @keyframes float-community {
          0%, 100% { transform: translate(0, 0) rotate(0deg); opacity: 0.4; }
          25% { transform: translate(15px, -15px) rotate(90deg); opacity: 1; }
          50% { transform: translate(-10px, -25px) rotate(180deg); opacity: 0.6; }
          75% { transform: translate(-20px, -10px) rotate(270deg); opacity: 1; }
        }
        
        @keyframes float-platform {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.5; }
          50% { transform: translate(10px, -15px) scale(1.2); opacity: 1; }
        }
        
        @keyframes gradient-flow {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        .animate-float-community { animation: float-community 8s ease-in-out infinite; }
        .animate-float-platform { animation: float-platform 4s ease-in-out infinite; }
        .animate-gradient-flow { animation: gradient-flow 4s ease infinite; background-size: 200% 200%; }
      `}</style>
    </section>
  )
}

export default Community 