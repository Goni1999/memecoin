'use client'

import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'

const Featured = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const [activeCard, setActiveCard] = useState<number | null>(null)
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

    const section = sectionRef.current
    if (section) {
      section.addEventListener('mousemove', handleMouseMove)
    }

    return () => {
      if (section) {
        section.removeEventListener('mousemove', handleMouseMove)
      }
    }
  }, [])

  const tradingBotFeatures = [
    {
      number: "01",
      title: "non-custodial",
      subtitle: "retain full control of your wallet",
      description: "Your keys, your coins. Trade with confidence knowing you maintain complete control over your assets at all times.",
      gradient: "from-primary-500 to-primary-600",
      bgPattern: "bg-gradient-to-br from-primary-500/10 to-primary-600/10",
      glowColor: "primary-500",
      particleColor: "primary-400"
    },
    {
      number: "02", 
      title: "powered by AI",
      subtitle: "gain an edge in any market",
      description: "Advanced machine learning algorithms analyze market patterns and execute trades with superhuman precision and speed.",
      gradient: "from-secondary-400 to-secondary-600",
      bgPattern: "bg-gradient-to-br from-secondary-400/10 to-secondary-600/10",
      glowColor: "secondary-500",
      particleColor: "secondary-400"
    },
    {
      number: "03",
      title: "50% revenue share", 
      subtitle: "grow with cryptohub.ai",
      description: "Earn passive income from successful trades. Our partnership model ensures you profit alongside our platform's success.",
      gradient: "from-primary-500 to-secondary-600",
      bgPattern: "bg-gradient-to-br from-primary-500/10 to-secondary-600/10",
      glowColor: "primary-500",
      particleColor: "primary-400"
    }
  ]

  const partnerships = [
    {
      company: "SOLMEME Foundation",
      description: "Where meme dreams become reality",
      logo: "👑",
      tier: "LEGENDARY",
      status: "ACTIVE",
      power: "9999"
    },
    {
      company: "SOLMEME Accelerator",
      description: "Accelerating meme innovation since 2024",
      logo: "🚀",
      tier: "MYTHICAL",
      status: "ONLINE",
      power: "8888"
    },
    {
      company: "SOLMEME Diamond Academy",
      description: "Converting weak holders to diamond hands",
      logo: "💎",
      tier: "EPIC",
      status: "ACTIVE",
      power: "7777"
    },
    {
      company: "SOLMEME Analytics Hub",
      description: "Real-time ecosystem metrics",
      logo: "📊",
      tier: "RARE",
      status: "LIVE",
      power: "6666"
    },
    {
      company: "SOLMEME Maxi HQ",
      description: "Pure meme supremacy on Solana",
      logo: "⚡",
      tier: "LEGENDARY",
      status: "SUPREME",
      power: "9001"
    },
    {
      company: "SOLMEME Innovation Labs",
      description: "Strategic meme development division",
      logo: "🧪",
      tier: "MYTHICAL",
      status: "DEPLOYED",
      power: "8500"
    }
  ]

  return (
    <section 
      ref={sectionRef}
      className="section-padding bg-gradient-to-b from-dark-900 to-black relative overflow-hidden"
    >
      {/* Advanced Interactive Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Dynamic mesh gradient */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(153, 69, 255, 0.1) 0%, transparent 50%)`
          }}
        />
        
        {/* Floating particles */}
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary-400/40 rounded-full animate-float-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${6 + Math.random() * 6}s`
            }}
          />
        ))}

        {/* Neural network */}
        <svg className="absolute inset-0 w-full h-full opacity-10">
          <defs>
            <linearGradient id="neuralLine" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="50%" stopColor="#9945ff" stopOpacity="0.6" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>
          {[...Array(12)].map((_, i) => (
            <line
              key={i}
              x1={`${10 + i * 8}%`}
              y1="10%"
              x2={`${15 + i * 7}%`}
              y2="90%"
              stroke="url(#neuralLine)"
              strokeWidth="0.5"
              className="animate-pulse"
              style={{ animationDelay: `${i * 0.3}s` }}
            />
          ))}
        </svg>

        {/* Holographic overlay */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-400/5 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary-500/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-128 h-128 bg-primary-500/3 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '4s' }} />
      </div>

      <div className="container-custom relative z-10">
        
        {/* Enhanced Section Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-8">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-primary-400 to-transparent"></div>
              <div className="text-primary-400 text-sm font-bold uppercase tracking-[0.4em] animate-pulse">
                NEXT GENERATION TECHNOLOGY
              </div>
              <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-primary-400 to-transparent"></div>
            </div>
            
            <h2 className={`text-5xl lg:text-6xl xl:text-7xl font-black mb-8 transition-all duration-1000 ${isVisible ? 'animate-fade-up' : 'opacity-0 translate-y-20'}`}>
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-primary-400 via-primary-500 to-secondary-500 bg-clip-text text-transparent animate-gradient-flow">
                  next generation
                </span>
                <div className="absolute -inset-2 bg-gradient-to-r from-primary-400/20 to-secondary-500/20 blur-xl animate-pulse" />
              </span>
              <br />
              <span className="text-white hover:text-gray-200 transition-colors duration-300">of DEX trading bots</span>
            </h2>
          </div>
          <div className="w-32 h-1 bg-gradient-to-r from-primary-400 to-secondary-500 mx-auto rounded-full animate-fade-up animate-stagger-1" />
        </div>

        {/* Enhanced Trading Bot Features */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-24">
          {tradingBotFeatures.map((feature, index) => (
            <div 
              key={feature.number}
              className={`group relative transition-all duration-700 ease-out ${isVisible ? 'animate-fade-up' : 'opacity-0 translate-y-20'}`}
              style={{ animationDelay: `${index * 0.15}s` }}
              onMouseEnter={() => setActiveCard(index)}
              onMouseLeave={() => setActiveCard(null)}
            >
              <div className="relative bg-gradient-to-br from-gray-900/95 via-black/95 to-gray-800/90 backdrop-blur-xl border border-gray-800/60 rounded-3xl p-10 lg:p-12 overflow-hidden group-hover:border-primary-400/60 transition-all duration-500 group-hover:scale-[1.02] group-hover:shadow-2xl group-hover:shadow-primary-400/25 transform-gpu h-full shadow-lg">
                
                {/* Dynamic background */}
                <div className={`absolute inset-0 ${feature.bgPattern} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                {/* Animated border */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary-400/20 via-secondary-500/20 to-primary-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse" />
                
                {/* Floating particles specific to card */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {[...Array(8)].map((_, i) => (
                    <div
                      key={i}
                      className={`absolute w-2 h-2 bg-${feature.particleColor}/60 rounded-full animate-float-card-particle`}
                      style={{
                        left: `${20 + i * 10}%`,
                        top: `${20 + Math.sin(i) * 30}%`,
                        animationDelay: `${i * 0.2}s`
                      }}
                    />
                  ))}
                </div>
                
                <div className="relative z-10">
                  {/* Enhanced Number Badge */}
                  <div className="relative mb-10">
                    <div className="text-lg font-bold text-gray-500 mb-8 group-hover:text-primary-400 transition-colors duration-500 relative">
                      <span className="text-7xl font-black bg-gradient-to-r from-gray-600 to-gray-400 bg-clip-text text-transparent group-hover:from-primary-400 group-hover:to-secondary-500 transition-all duration-500 drop-shadow-lg">
                        {feature.number}
                      </span>
                      <div className="absolute -inset-3 bg-gradient-to-r from-primary-400/15 to-secondary-500/15 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
                    </div>
                  </div>
                  
                  {/* Enhanced Content */}
                  <div className="mb-10">
                    <h3 className="text-3xl lg:text-4xl font-black text-primary-400 mb-4 leading-tight group-hover:text-primary-300 transition-colors duration-500 relative drop-shadow-md">
                      <span className="relative z-10">{feature.title}</span>
                      <div className="absolute -inset-2 bg-gradient-to-r from-primary-400/25 to-secondary-500/25 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
                    </h3>
                    <h4 className="text-xl lg:text-2xl font-semibold text-gray-200 leading-tight group-hover:text-white transition-colors duration-500">
                      {feature.subtitle}
                    </h4>
                  </div>

                  {/* Enhanced Visual Element with 3D effects */}
                  <div className="flex justify-center items-center h-48 mb-6 relative perspective-1000">
                    {index === 0 && (
                      <div className="relative transform-gpu group-hover:rotateY-12 transition-transform duration-700">
                        {/* Enhanced Wallet with holographic effect */}
                        <div className="w-36 h-28 bg-gradient-to-br from-blue-500 via-purple-600 to-blue-700 rounded-3xl relative transform group-hover:rotate-6 transition-transform duration-500 shadow-2xl shadow-blue-500/30">
                          {/* Holographic overlay */}
                          <div className="absolute inset-0 bg-gradient-to-tr from-white/20 via-transparent to-white/10 rounded-3xl" />
                          <div className="absolute top-4 left-4 w-8 h-8 bg-primary-400 rounded-full animate-pulse shadow-lg shadow-primary-400/50" />
                          <div className="absolute bottom-4 right-4 w-10 h-10 bg-white/20 rounded-full backdrop-blur-sm" />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-3xl" />
                          {/* Data streams */}
                          <div className="absolute top-6 right-6 w-4 h-4 border-2 border-primary-400/50 rounded animate-spin" />
                          <div className="absolute bottom-6 left-6 w-3 h-3 bg-blue-300 rounded-full animate-pulse" />
                        </div>
                        <div className="absolute -top-3 -right-3 w-10 h-10 bg-gradient-to-r from-primary-400 to-secondary-500 rounded-full animate-bounce shadow-lg shadow-primary-400/30" />
                        {/* Floating security indicators */}
                        <div className="absolute -bottom-2 -left-2 text-blue-400 text-xl animate-pulse">🔒</div>
                      </div>
                    )}
                    {index === 1 && (
                      <div className="relative transform-gpu group-hover:rotateY-12 transition-transform duration-700">
                        {/* Enhanced AI Robot with neural activity */}
                        <div className="w-32 h-32 bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-full relative transform group-hover:scale-110 transition-transform duration-500 shadow-2xl shadow-green-400/20">
                          {/* Holographic overlay */}
                          <div className="absolute inset-0 bg-gradient-to-tr from-primary-400/10 via-transparent to-primary-400/5 rounded-full" />
                          {/* Enhanced eyes with neural activity */}
                          <div className="absolute top-8 left-6 w-6 h-10 bg-gradient-to-b from-primary-400 to-primary-500 rounded-full animate-pulse shadow-lg shadow-primary-400/60" />
                          <div className="absolute top-8 right-6 w-6 h-10 bg-gradient-to-b from-primary-400 to-primary-500 rounded-full animate-pulse shadow-lg shadow-primary-400/60" style={{ animationDelay: '0.5s' }} />
                          {/* Neural activity indicators */}
                          <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-16 h-8 border border-primary-400/30 rounded-full">
                            <div className="w-2 h-2 bg-primary-400 rounded-full animate-ping absolute top-1 left-2" />
                            <div className="w-2 h-2 bg-primary-400 rounded-full animate-ping absolute top-1 right-2" style={{ animationDelay: '0.3s' }} />
                          </div>
                          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 w-10 h-3 bg-primary-400/50 rounded-full animate-pulse" />
                          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-16 h-8 bg-gray-700 rounded-full border border-primary-400/30" />
                        </div>
                        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-4 bg-primary-400/20 rounded-full blur-sm animate-pulse" />
                        {/* AI indicators */}
                        <div className="absolute top-0 right-0 text-primary-400 text-sm animate-pulse">🧠</div>
                        <div className="absolute bottom-0 left-0 text-blue-400 text-sm animate-bounce">⚡</div>
                      </div>
                    )}
                    {index === 2 && (
                      <div className="relative transform-gpu group-hover:rotateY-12 transition-transform duration-700">
                        {/* Enhanced Revenue share with dynamic effects */}
                        <div className="w-28 h-28 bg-gradient-to-br from-purple-500 via-pink-600 to-purple-700 rounded-full relative transform group-hover:rotate-180 transition-transform duration-1000 shadow-2xl shadow-purple-500/30 flex items-center justify-center">
                          {/* Holographic overlay */}
                          <div className="absolute inset-0 bg-gradient-to-tr from-white/20 via-transparent to-white/10 rounded-full" />
                          <div className="text-5xl font-black text-white relative z-10">%</div>
                          {/* Animated rings */}
                          <div className="absolute inset-2 border-2 border-white/30 rounded-full animate-spin" />
                          <div className="absolute inset-4 border border-purple-300/50 rounded-full animate-spin-reverse" />
                          {/* Revenue indicators */}
                          <div className="absolute -inset-2 border border-purple-400/20 rounded-full animate-pulse" />
                        </div>
                        <div className="absolute top-0 right-0 w-8 h-8 bg-primary-400 rounded-full animate-ping" />
                        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 text-3xl animate-bounce">💰</div>
                        {/* Profit indicators */}
                        <div className="absolute top-2 left-2 text-secondary-400 text-lg animate-pulse">📈</div>
                        <div className="absolute bottom-2 right-2 text-primary-400 text-lg animate-bounce">💎</div>
                      </div>
                    )}
                  </div>

                  {/* Enhanced description with improved readability */}
                  <div className="opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:translate-y-0 translate-y-2">
                    <p className="text-gray-300 text-base leading-relaxed bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/40 shadow-lg">
                      {feature.description}
                    </p>
                  </div>

                  {/* Status indicator */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="flex items-center space-x-2 text-xs text-primary-400">
                      <div className="w-2 h-2 bg-primary-400 rounded-full animate-pulse" />
                      <span>ACTIVE</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Syndicate Operations */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <div className="inline-block mb-6">
              <div className="flex items-center justify-center space-x-4 mb-4">
                <div className="w-8 h-0.5 bg-gradient-to-r from-transparent to-primary-500"></div>
                <div className="text-primary-400 text-sm font-bold uppercase tracking-[0.3em] animate-pulse">
                  CLASSIFIED OPERATIONS
                </div>
                <div className="w-8 h-0.5 bg-gradient-to-l from-transparent to-primary-500"></div>
              </div>
              
              <h3 className="text-display-md lg:text-5xl font-black mb-6 animate-fade-up">
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-primary-500 via-secondary-500 to-primary-600 bg-clip-text text-transparent animate-gradient-flow">
                    Syndicate Operations
                  </span>
                  <div className="absolute -inset-2 bg-gradient-to-r from-primary-500/20 via-secondary-500/20 to-primary-600/20 blur-xl animate-pulse" />
                </span>
              </h3>
            </div>
            <div className="relative max-w-3xl mx-auto">
              <div className="bg-gradient-to-r from-gray-900/80 via-black/80 to-gray-900/80 backdrop-blur-xl border border-primary-500/30 rounded-2xl p-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500/5 via-secondary-500/5 to-primary-500/5 animate-pulse" />
                <p className="text-xl lg:text-2xl text-primary-300 max-w-2xl mx-auto animate-fade-up animate-stagger-1 relative z-10 font-bold italic">
                  "We don't just partner with projects. We{' '}
                  <span className="text-secondary-400 animate-pulse">absorb</span> them."
                </p>
              </div>
            </div>
          </div>

          {/* Enhanced Partnership Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {partnerships.map((partner, index) => (
              <div 
                key={partner.company}
                className={`group relative bg-gradient-to-br from-gray-900/60 via-black/60 to-gray-800/60 backdrop-blur-xl border border-gray-800 rounded-2xl p-6 cursor-pointer hover:border-primary-500/50 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-primary-500/20 animate-fade-up transform-gpu overflow-hidden`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Background effects */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-secondary-500/5 to-primary-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Status indicator */}
                <div className="absolute top-3 right-3 flex items-center space-x-2">
                                  <div className="w-2 h-2 bg-primary-400 rounded-full animate-pulse" />
                <span className="text-xs text-primary-400 font-bold">{partner.status}</span>
                </div>
                
                {/* Tier badge */}
                <div className="absolute top-3 left-3">
                  <div className="bg-gradient-to-r from-primary-400/20 to-secondary-500/20 border border-primary-400/30 rounded-lg px-2 py-1">
                    <span className="text-xs text-primary-400 font-bold">{partner.tier}</span>
                  </div>
                </div>
                
                <div className="relative z-10">
                  <div className="flex items-center mb-4">
                    <div className="relative">
                      <span className="text-4xl mr-4 group-hover:scale-125 transition-transform duration-300 relative z-10">
                        {partner.logo}
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-white group-hover:bg-gradient-to-r group-hover:from-primary-500 group-hover:to-secondary-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                        {partner.company}
                      </h4>
                      <div className="flex items-center space-x-2 mt-1">
                        <span className="text-xs text-primary-400">PWR:</span>
                        <span className="text-xs text-secondary-400 font-mono">{partner.power}</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300 leading-relaxed">
                    {partner.description}
                  </p>
                  
                  
                </div>

                {/* Floating particles */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {[...Array(6)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-1 h-1 bg-primary-400/60 rounded-full animate-float-card-particle"
                      style={{
                        left: `${15 + i * 15}%`,
                        top: `${25 + Math.sin(i) * 20}%`,
                        animationDelay: `${i * 0.2}s`
                      }}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced SOLMEME Ecosystem Stats */}
        <div className="bg-gradient-to-r from-gray-900/90 via-black/90 to-gray-800/90 backdrop-blur-xl border border-gray-700 rounded-3xl p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-500/5 via-secondary-500/5 to-primary-500/5 animate-pulse" />
          
          {/* Neural network overlay */}
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full">
              <defs>
                <radialGradient id="statGradient">
                  <stop offset="0%" stopColor="#9945ff" />
                  <stop offset="100%" stopColor="transparent" />
                </radialGradient>
              </defs>
              {[...Array(8)].map((_, i) => (
                <circle
                  key={i}
                  cx={`${20 + i * 10}%`}
                  cy="50%"
                  r="2"
                  fill="url(#statGradient)"
                  className="animate-pulse"
                  style={{ animationDelay: `${i * 0.2}s` }}
                />
              ))}
            </svg>
          </div>
          
          <div className="relative z-10">
            <div className="mb-8">
              <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-white">
                <span className="bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
                  SOLMEME Ecosystem
                </span>
              </h3>
              <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full" />
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { value: '420K+', label: 'SOLMEME Holders', icon: '👑', color: 'from-primary-500 to-primary-600' },
                { value: '69.42K', label: 'Diamond Hands', icon: '💎', color: 'from-secondary-400 to-secondary-500' },
                { value: '$13.37M', label: 'Volume Traded', icon: '📈', color: 'from-primary-500 to-secondary-500' },
                { value: '1337', label: 'Daily Transactions', icon: '⚡', color: 'from-secondary-400 to-primary-500' }
              ].map((stat, index) => (
                <div key={index} className="group relative">
                  <div className="text-5xl mb-3 group-hover:scale-110 transition-transform duration-300 relative">
                    <span className="relative z-10">{stat.icon}</span>
                    <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} rounded-full blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300`} />
                  </div>
                  <div className={`text-4xl lg:text-5xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300`}>
                    {stat.value}
                  </div>
                  <div className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 font-medium">
                    {stat.label}
                  </div>
                  
                  {/* Progress indicator */}
                  <div className="mt-3 w-full bg-gray-800 rounded-full h-1 overflow-hidden">
                    <div 
                      className={`h-full bg-gradient-to-r ${stat.color} transition-all duration-1000 group-hover:animate-pulse`}
                      style={{ width: '100%', transitionDelay: `${index * 0.2}s` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Advanced CSS for enhanced animations */}
      <style jsx>{`
        @keyframes float-particle {
          0%, 100% { transform: translate(0, 0) rotate(0deg); opacity: 0.4; }
          25% { transform: translate(15px, -15px) rotate(90deg); opacity: 1; }
          50% { transform: translate(-10px, -25px) rotate(180deg); opacity: 0.6; }
          75% { transform: translate(-20px, -10px) rotate(270deg); opacity: 1; }
        }
        
        @keyframes float-card-particle {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.5; }
          50% { transform: translate(15px, -20px) scale(1.2); opacity: 1; }
        }
        
        @keyframes gradient-flow {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes spin-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        
        .animate-float-particle { animation: float-particle 8s ease-in-out infinite; }
        .animate-float-card-particle { animation: float-card-particle 4s ease-in-out infinite; }
        .animate-gradient-flow { animation: gradient-flow 4s ease infinite; background-size: 200% 200%; }
        .animate-spin-reverse { animation: spin-reverse 3s linear infinite; }
        .perspective-1000 { perspective: 1000px; }
        .rotateY-12 { transform: rotateY(12deg); }
      `}</style>
    </section>
  )
}

export default Featured 