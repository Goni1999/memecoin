'use client'

import React, { useState, useEffect, useRef } from 'react'

interface StatItem {
  id: string
  label: string
  value: string
  suffix?: string
  description: string
  icon: string
  color: string
  targetNumber?: number
}

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [counters, setCounters] = useState<{ [key: string]: number }>({})
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect()
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100
        })
      }
    }

    const section = sectionRef.current
    if (section) {
      section.addEventListener('mousemove', handleMouseMove)
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
          // Start counter animations
          stats.forEach(stat => {
            if (stat.targetNumber) {
              animateCounter(stat.id, stat.targetNumber)
            }
          })
        }
      },
      { threshold: 0.3 }
    )

    const element = document.getElementById('stats-section')
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
      if (section) {
        section.removeEventListener('mousemove', handleMouseMove)
      }
    }
  }, [isVisible])

  const animateCounter = (id: string, target: number) => {
    const duration = 2000
    const steps = 60
    const increment = target / steps
    let current = 0
    let step = 0

    const timer = setInterval(() => {
      current += increment
      step++
      
      if (step >= steps) {
        current = target
        clearInterval(timer)
      }
      
      setCounters(prev => ({ ...prev, [id]: Math.floor(current) }))
    }, duration / steps)
  }

  const stats: StatItem[] = [
    {
      id: 'ruthless-holders',
      label: 'Diamond Warriors',
      value: '11.5M',
      suffix: '+',
              description: 'Smart investors powered by $SOLMEME',
      icon: '💎',
      color: 'from-blue-400 to-cyan-500',
      targetNumber: 11500000
    },
    {
      id: 'solmeme-holders',
      label: 'SOLMEME Holders',
      value: '21.9M',
              description: 'Strong SOLMEME believers holding tight',
      icon: '🔥',
      color: 'from-primary-400 to-primary-500',
      targetNumber: 21900000
    },
    {
      id: 'execution-cost',
      label: 'Cost to Execute',
      value: '$0.00025',
      description: 'Price of on-chain violence',
      icon: '⚡',
      color: 'from-secondary-400 to-secondary-500',
      targetNumber: 0.00025
    },
    {
      id: 'chaos-nodes',
      label: 'Chaos Validators',
      value: '1,875',
      description: 'Nodes enforcing maximum carnage',
      icon: '🎯',
      color: 'from-purple-400 to-pink-500',
      targetNumber: 1875
    }
  ]

  const formatNumber = (num: number, stat: StatItem) => {
    if (stat.id === 'execution-cost') {
      return `$${num.toFixed(5)}`
    }
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
      id="stats-section" 
      className="section-padding bg-gradient-to-b from-dark-900 via-black to-dark-900 relative overflow-hidden"
    >
      {/* Interactive Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated Grid */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-12 grid-rows-8 w-full h-full">
            {[...Array(96)].map((_, i) => (
              <div
                key={i}
                className="border border-primary-400/20 animate-pulse"
                style={{ animationDelay: `${i * 0.1}s` }}
              />
            ))}
          </div>
        </div>

        {/* Floating Data Particles */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary-400/60 rounded-full animate-float-data"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${8 + Math.random() * 4}s`
            }}
          />
        ))}

        {/* Interactive Glow */}
        <div 
                      className="absolute w-96 h-96 bg-gradient-radial from-primary-400/10 via-primary-400/5 to-transparent rounded-full blur-3xl transition-all duration-300"
          style={{
            left: `${mousePosition.x}%`,
            top: `${mousePosition.y}%`,
            transform: 'translate(-50%, -50%)'
          }}
        />

        {/* Binary Rain Effect */}
        <div className="absolute inset-0 overflow-hidden opacity-10">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute text-primary-400 text-xs font-mono animate-fall"
              style={{
                left: `${i * 5}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            >
              {Math.random() > 0.5 ? '1' : '0'}
            </div>
          ))}
        </div>

        {/* Cyber Lines */}
        <svg className="absolute inset-0 w-full h-full">
          <defs>
            <linearGradient id="cyberGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="50%" stopColor="#22c55e" stopOpacity="0.3" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>
          {[...Array(4)].map((_, i) => (
            <line
              key={i}
              x1="0%"
              y1={`${20 + i * 20}%`}
              x2="100%"
              y2={`${20 + i * 20}%`}
              stroke="url(#cyberGradient)"
              strokeWidth="1"
              className="animate-pulse"
              style={{ animationDelay: `${i * 0.5}s` }}
            />
          ))}
        </svg>
      </div>

      <div className="container-custom relative z-10">
        {/* Enhanced Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-8">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <div className="w-8 h-0.5 bg-gradient-to-r from-transparent to-primary-400"></div>
              <div className="text-primary-400 text-sm font-bold uppercase tracking-[0.3em] animate-pulse">
                LIVE DATA FEED
              </div>
              <div className="w-8 h-0.5 bg-gradient-to-l from-transparent to-primary-400"></div>
            </div>
            
            <h2 className={`text-display-lg sm:text-display-xl lg:text-6xl font-black mb-6 transition-all duration-1000 ${isVisible ? 'animate-fade-up' : 'opacity-0 translate-y-20'}`}>
              Welcome to the{' '}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-primary-500 via-secondary-500 to-primary-600 bg-clip-text text-transparent animate-gradient-x">
                  War Zone
                </span>
                <span className="absolute -inset-2 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 blur-xl animate-pulse" />
              </span>
            </h2>
          </div>

          <div className={`relative max-w-4xl mx-auto transition-all duration-1000 ${isVisible ? 'animate-fade-up animate-stagger-1' : 'opacity-0 translate-y-20'}`}>
                    <div className="bg-gradient-to-r from-gray-900/80 via-black/80 to-gray-900/80 backdrop-blur-xl border border-primary-500/30 rounded-2xl p-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-500/5 via-secondary-500/5 to-primary-500/5 animate-pulse" />
          <p className="text-xl sm:text-2xl lg:text-3xl text-primary-400 font-bold italic leading-relaxed relative z-10">
                <span className="inline-block animate-bounce" style={{ animationDelay: '0s' }}>"</span>
                <span className="hover:animate-glitch">No bridges. No rollups. Just pure, raw, on-chain disrespect.</span>
                <span className="inline-block animate-bounce" style={{ animationDelay: '1s' }}>"</span>
              </p>
            </div>
          </div>
        </div>

        {/* Enhanced Stats Grid with 3D Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.id}
              className={`group relative transition-all duration-1000 ${isVisible ? 'animate-fade-up' : 'opacity-0 translate-y-20'}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative bg-gradient-to-br from-gray-900/90 via-black/90 to-gray-800/90 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-8 h-full overflow-hidden group-hover:border-green-400/50 transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-green-400/10 transform-gpu">
                
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color}/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                {/* Floating Icon */}
                <div className="relative mb-6">
                  <div className="text-6xl mb-4 relative">
                    <span className="relative z-10 inline-block group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                      {stat.icon}
                    </span>
                    <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />
                  </div>
                </div>

                {/* Animated Counter */}
                <div className="relative mb-4">
                  <div className="text-4xl sm:text-5xl lg:text-4xl xl:text-4xl font-black mb-2">
                    <span className={`bg-gradient-to-r ${stat.color} bg-clip-text text-transparent transition-all duration-500 group-hover:scale-110 inline-block`}>
                      {isVisible && counters[stat.id] !== undefined ? (
                        <>
                          {formatNumber(counters[stat.id], stat)}
                          {stat.suffix && (
                            <span className="text-2xl sm:text-3xl lg:text-2xl xl:text-3xl">{stat.suffix}</span>
                          )}
                        </>
                      ) : (
                        <>
                          {stat.value}
                          {stat.suffix && (
                            <span className="text-2xl sm:text-3xl lg:text-2xl xl:text-3xl">{stat.suffix}</span>
                          )}
                        </>
                      )}
                    </span>
                  </div>
                  
                  {/* Glitch Effect Overlay */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-20">
                    <div className={`text-4xl sm:text-5xl lg:text-4xl xl:text-5xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent animate-glitch`}>
                      {stat.value}{stat.suffix}
                    </div>
                  </div>
                </div>

                {/* Label with Hover Effect */}
                <h3 className="text-lg sm:text-xl font-bold mb-3 text-white group-hover:text-primary-300 transition-colors duration-300">
                  {stat.label}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {stat.description}
                </p>

                {/* Progress Bar */}
                <div className="mt-6 pt-4 border-t border-gray-700/30">
                  <div className="w-full bg-gray-800 rounded-full h-1 overflow-hidden">
                    <div 
                      className={`h-full bg-gradient-to-r ${stat.color} transition-all duration-2000 ease-out`}
                      style={{ 
                        width: isVisible ? '100%' : '0%',
                        transitionDelay: `${index * 0.3}s`
                      }}
                    />
                  </div>
                </div>

                {/* Floating Particles */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className={`absolute w-1 h-1 bg-gradient-to-r ${stat.color} rounded-full animate-float-card`}
                      style={{
                        left: `${20 + i * 15}%`,
                        top: `${30 + i * 10}%`,
                        animationDelay: `${i * 0.2}s`
                      }}
                    />
                  ))}
                </div>

                {/* Border Glow */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${stat.color}/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse`} />
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Live Data Indicator */}
        <div className={`flex items-center justify-center mt-16 transition-all duration-1000 ${isVisible ? 'animate-fade-up animate-stagger-4' : 'opacity-0 translate-y-20'}`}>
          <div className="relative bg-gradient-to-r from-gray-900/80 to-gray-800/80 backdrop-blur-xl border border-primary-400/50 rounded-xl px-6 py-3 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary-400/10 to-primary-500/10 animate-pulse" />
            <div className="flex items-center space-x-3 relative z-10">
              <div className="w-3 h-3 rounded-full relative">
                              <div className="w-3 h-3 bg-primary-400 rounded-full animate-ping absolute" />
              <div className="w-3 h-3 bg-primary-400 rounded-full" />
              </div>
              <span className="text-sm text-primary-300 font-medium">LIVE DATA STREAM</span>
              <div className="text-xs text-gray-400 font-mono">
                {new Date().toLocaleTimeString()}
              </div>
            </div>
          </div>
        </div>

        {/* Network Status */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center space-x-2 text-xs text-gray-500">
                          <div className="w-2 h-2 bg-primary-400 rounded-full animate-pulse" />
            <span>Solana Network: Online</span>
            <span>•</span>
            <span>TPS: 2,847</span>
            <span>•</span>
            <span>Block: #{(123456789 + Math.floor(Date.now() / 1000)).toLocaleString()}</span>
          </div>
        </div>
      </div>

      {/* Advanced CSS Animations */}
      <style jsx>{`
        @keyframes float-data {
          0%, 100% { transform: translate(0, 0) rotate(0deg); opacity: 0.6; }
          25% { transform: translate(10px, -10px) rotate(90deg); opacity: 1; }
          50% { transform: translate(-5px, -20px) rotate(180deg); opacity: 0.8; }
          75% { transform: translate(-15px, -10px) rotate(270deg); opacity: 1; }
        }
        
        @keyframes fall {
          from { transform: translateY(-100vh); opacity: 1; }
          to { transform: translateY(100vh); opacity: 0; }
        }
        
        @keyframes float-card {
          0%, 100% { transform: translate(0, 0); opacity: 0.5; }
          50% { transform: translate(10px, -15px); opacity: 1; }
        }
        
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes glitch {
          0% { transform: translate(0); }
          20% { transform: translate(-1px, 1px); }
          40% { transform: translate(-1px, -1px); }
          60% { transform: translate(1px, 1px); }
          80% { transform: translate(1px, -1px); }
          100% { transform: translate(0); }
        }
        
        .animate-float-data { animation: float-data 8s ease-in-out infinite; }
        .animate-fall { animation: fall 5s linear infinite; }
        .animate-float-card { animation: float-card 3s ease-in-out infinite; }
        .animate-gradient-x { animation: gradient-x 3s ease infinite; background-size: 200% 200%; }
        .animate-glitch { animation: glitch 0.3s ease-in-out infinite; }
      `}</style>
    </section>
  )
}

export default Stats 