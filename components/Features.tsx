'use client'

import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'

interface Utility {
  id: string
  title: string
  subtitle: string
  description: string
  icon: React.ReactNode
  gradient: string
  color: string
  particleColor: string
  status: string
  power: number
}

const Features = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const [activeUtility, setActiveUtility] = useState<string | null>(null)
  const [animationStep, setAnimationStep] = useState(0)
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

    const animationTimer = setInterval(() => {
      setAnimationStep(prev => (prev + 1) % 4)
    }, 3000)

    const section = sectionRef.current
    if (section) {
      section.addEventListener('mousemove', handleMouseMove)
    }

    return () => {
      if (section) {
        section.removeEventListener('mousemove', handleMouseMove)
      }
      clearInterval(animationTimer)
    }
  }, [])

  const utilities: Utility[] = [
    {
      id: 'community-pools',
      title: 'Generate',
      subtitle: 'Community Pools',
      description: 'Use $SOLMEME tokens to generate community prediction pools! Whether it\'s the latest meme coins or community favorites, your vote decides what\'s next on Solana.',
      gradient: 'from-primary-400 to-primary-600',
      color: 'primary',
      particleColor: 'primary-400',
      status: 'ACTIVE',
      power: 95,
      icon: (
        <div className="relative w-40 h-40 transform-gpu">
          {/* Enhanced Crystal ball with 3D effect */}
          <div className="w-32 h-32 absolute top-4 left-4 bg-gradient-to-br from-primary-400/20 via-primary-500/30 to-primary-600/20 rounded-full border-2 border-primary-400/50 backdrop-blur-sm relative overflow-hidden">
            {/* Holographic overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/20 via-transparent to-white/10 rounded-full" />
            {/* Inner glow */}
            <div className="absolute inset-2 bg-gradient-radial from-primary-400/30 via-primary-500/20 to-transparent rounded-full animate-pulse" />
            {/* Floating elements inside */}
            <div className="absolute top-3 right-3 w-4 h-4 bg-secondary-400 rounded-full animate-ping opacity-60" />
            <div className="absolute bottom-4 left-4 w-3 h-3 bg-primary-400 rounded-full animate-pulse opacity-80" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 border border-primary-400/60 rounded-full animate-spin" />
            {/* Energy streams */}
            <div className="absolute inset-0 overflow-hidden rounded-full">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-0.5 h-0.5 bg-primary-400 rounded-full animate-float-stream"
                  style={{
                    left: `${20 + i * 10}%`,
                    top: `${30 + Math.sin(i) * 20}%`,
                    animationDelay: `${i * 0.3}s`
                  }}
                />
              ))}
            </div>
          </div>
          {/* Enhanced Base with reflection */}
          <div className="w-24 h-10 absolute bottom-0 left-8 bg-gradient-to-r from-primary-400/30 via-primary-500/40 to-primary-400/30 rounded-full border border-primary-400/30 backdrop-blur-sm shadow-lg shadow-primary-400/20" />
          {/* Floating magical elements */}
          <div className="absolute -top-2 -right-2 text-2xl animate-bounce">⭐</div>
          <div className="absolute -bottom-1 -left-1 text-lg animate-pulse">💫</div>
          {/* Power rings */}
          <div className="absolute inset-0 border-2 border-primary-400/20 rounded-full animate-ping" />
          <div className="absolute inset-2 border border-emerald-400/30 rounded-full animate-pulse" />
        </div>
      )
    },
    {
      id: 'revenue-sharing',
      title: 'Revenue Sharing',
      subtitle: 'for $SOLMEME Stakers',
      description: 'Once our token launches, 50% of all swap fees and token taxes collected will be distributed to $SOLMEME holders who meet the eligibility criteria. Stake and earn.',
      gradient: 'from-purple-500 to-pink-600',
      color: 'purple',
      particleColor: 'purple-400',
      status: 'LIVE',
      power: 88,
      icon: (
        <div className="relative w-40 h-40 transform-gpu">
          {/* Central SOLMEME token with 3D effect */}
          <div className="w-20 h-20 absolute top-10 left-10 bg-gradient-to-br from-purple-500/30 via-pink-600/40 to-purple-700/30 rounded-full border-2 border-purple-500/50 backdrop-blur-sm flex items-center justify-center relative overflow-hidden">
            {/* Holographic overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/20 via-transparent to-white/10 rounded-full" />
            <span className="text-xs font-bold text-purple-200 relative z-10">$SOLMEME</span>
            {/* Inner energy */}
            <div className="absolute inset-1 bg-gradient-radial from-purple-400/40 via-pink-500/30 to-transparent rounded-full animate-pulse" />
          </div>
          
          {/* Enhanced surrounding user nodes */}
          {[
            { pos: 'top-2 left-1/2 transform -translate-x-1/2', color: 'yellow-400', size: 'w-8 h-8' },
            { pos: 'top-6 right-2', color: 'green-400', size: 'w-7 h-7' },
            { pos: 'bottom-6 left-2', color: 'blue-400', size: 'w-6 h-6' },
            { pos: 'bottom-2 right-8', color: 'red-400', size: 'w-7 h-7' },
            { pos: 'top-6 left-0', color: 'pink-400', size: 'w-6 h-6' },
            { pos: 'bottom-6 right-0', color: 'cyan-400', size: 'w-8 h-8' }
          ].map((node, i) => (
            <div key={i} className={`absolute ${node.pos}`}>
              <div className={`${node.size} border-2 border-${node.color}/50 rounded-full bg-gradient-to-br from-${node.color}/20 to-${node.color}/40 backdrop-blur-sm relative`}>
                <div className={`absolute inset-1 bg-${node.color}/30 rounded-full animate-pulse`} style={{ animationDelay: `${i * 0.2}s` }} />
              </div>
            </div>
          ))}
          
          {/* Enhanced connection network */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            <defs>
              <radialGradient id="connectionGradient">
                <stop offset="0%" stopColor="#a855f7" stopOpacity="0.6" />
                <stop offset="100%" stopColor="transparent" />
              </radialGradient>
            </defs>
            {/* Animated connection lines */}
            <circle cx="80" cy="80" r="35" fill="none" stroke="url(#connectionGradient)" strokeWidth="1" strokeDasharray="5,5" className="animate-spin" style={{ animationDuration: '10s' }} />
            <circle cx="80" cy="80" r="45" fill="none" stroke="url(#connectionGradient)" strokeWidth="0.5" strokeDasharray="3,3" className="animate-spin-reverse" style={{ animationDuration: '15s' }} />
          </svg>
          
          {/* Floating revenue indicators */}
                      <div className="absolute top-0 right-0 text-secondary-400 text-sm animate-bounce">💰</div>
                      <div className="absolute bottom-0 left-0 text-primary-400 text-sm animate-pulse">📈</div>
        </div>
      )
    },
    {
      id: 'governance-voting',
      title: 'Decentralized',
      subtitle: 'Governance Voting',
      description: 'Shape the future of $SOLMEME through decentralized governance. Propose changes, vote on upgrades, and help steer the direction of our savage ecosystem.',
      gradient: 'from-blue-500 to-cyan-600',
      color: 'blue',
      particleColor: 'blue-400',
      status: 'BETA',
      power: 92,
      icon: (
        <div className="relative w-40 h-40 transform-gpu">
          {/* Enhanced Voting dashboard */}
          <div className="w-24 h-20 absolute top-8 left-8 bg-gradient-to-br from-blue-500/30 via-cyan-600/40 to-blue-700/30 rounded-2xl border-2 border-blue-500/50 backdrop-blur-sm relative overflow-hidden">
            {/* Holographic overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/20 via-transparent to-white/10 rounded-2xl" />
            {/* Enhanced voting bars with animation */}
            <div className="absolute top-3 left-2 space-y-1">
              <div className="w-3 h-8 bg-gradient-to-t from-blue-400/60 to-blue-300/80 rounded animate-pulse" />
              <div className="w-3 h-6 bg-gradient-to-t from-cyan-400/60 to-cyan-300/80 rounded animate-pulse" style={{ animationDelay: '0.2s' }} />
              <div className="w-3 h-10 bg-gradient-to-t from-blue-500/60 to-blue-400/80 rounded animate-pulse" style={{ animationDelay: '0.4s' }} />
              <div className="w-3 h-4 bg-gradient-to-t from-cyan-500/60 to-cyan-400/80 rounded animate-pulse" style={{ animationDelay: '0.6s' }} />
            </div>
            <div className="absolute top-3 right-2 space-y-1">
              <div className="w-3 h-6 bg-gradient-to-t from-blue-400/60 to-blue-300/80 rounded animate-pulse" style={{ animationDelay: '0.1s' }} />
              <div className="w-3 h-9 bg-gradient-to-t from-cyan-400/60 to-cyan-300/80 rounded animate-pulse" style={{ animationDelay: '0.3s' }} />
              <div className="w-3 h-5 bg-gradient-to-t from-blue-500/60 to-blue-400/80 rounded animate-pulse" style={{ animationDelay: '0.5s' }} />
            </div>
            {/* Data streams */}
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-blue-400/50 rounded-full animate-pulse" />
          </div>
          
          {/* Enhanced voting slip with glow */}
                      <div className="w-10 h-3 absolute top-4 left-16 bg-gradient-to-r from-primary-400/60 to-primary-500/80 rounded shadow-lg shadow-primary-400/30 animate-pulse" />
          
          {/* Enhanced check mark with particles */}
                      <div className="absolute top-2 right-4 text-primary-400 text-3xl animate-bounce">✓</div>
            <div className="absolute top-4 right-6 w-2 h-2 bg-primary-400 rounded-full animate-ping" />
          
          {/* DAO indicators */}
          <div className="absolute bottom-2 left-2 text-blue-400 text-lg animate-pulse">🗳️</div>
          <div className="absolute bottom-0 right-0 text-cyan-400 text-sm animate-bounce">⚖️</div>
          
          {/* Voting power indicator */}
          <div className="absolute top-0 left-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-400/30 rounded-lg px-2 py-1">
            <span className="text-xs text-blue-300 font-bold">DAO</span>
          </div>
        </div>
      )
    },
    {
      id: 'liquidity-rewards',
      title: 'Liquidity',
      subtitle: 'Provider Rewards',
      description: 'Provide liquidity to $SOLMEME pools and earn rewards. Help stabilize the ecosystem while earning passive income from trading fees and bonus rewards.',
      gradient: 'from-emerald-500 to-teal-600',
      color: 'emerald',
      particleColor: 'emerald-400',
      status: 'OPTIMAL',
      power: 97,
      icon: (
        <div className="relative w-40 h-40 transform-gpu">
          {/* Enhanced liquidity pool with 3D waves */}
          <div className="w-24 h-24 absolute top-8 left-8 bg-gradient-to-br from-emerald-500/30 via-teal-600/40 to-emerald-700/30 rounded-full border-2 border-emerald-500/50 backdrop-blur-sm relative overflow-hidden">
            {/* Holographic overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/20 via-transparent to-white/10 rounded-full" />
            {/* Animated liquid layers */}
            <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-emerald-400/40 via-teal-500/30 to-transparent rounded-b-full animate-wave" />
            <div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-emerald-300/50 via-teal-400/40 to-transparent rounded-b-full animate-wave-2" />
            <div className="absolute bottom-0 left-0 w-full h-4 bg-gradient-to-t from-emerald-200/60 via-teal-300/50 to-transparent rounded-b-full animate-wave-3" />
            
            {/* Floating bubbles */}
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute bg-emerald-400/30 rounded-full animate-float-bubble"
                style={{
                  width: `${0.5 + Math.random() * 1}rem`,
                  height: `${0.5 + Math.random() * 1}rem`,
                  left: `${20 + Math.random() * 60}%`,
                  bottom: `${10 + Math.random() * 60}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${2 + Math.random() * 3}s`
                }}
              />
            ))}
            
            {/* Liquidity indicators */}
            <div className="absolute top-2 left-3 w-2 h-2 bg-emerald-400/60 rounded-full animate-pulse" />
            <div className="absolute bottom-8 right-3 w-1.5 h-1.5 bg-teal-400/60 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
          </div>
          
          {/* Enhanced reward symbols */}
          <div className="absolute top-0 right-0 text-emerald-400 text-2xl animate-bounce">💧</div>
          <div className="absolute bottom-0 left-0 text-teal-400 text-2xl animate-bounce" style={{ animationDelay: '0.8s' }}>💰</div>
                      <div className="absolute top-1/2 right-2 text-primary-400 text-lg animate-pulse">💎</div>
          
          {/* APY indicator */}
          <div className="absolute bottom-2 right-2 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-400/30 rounded-lg px-2 py-1">
            <span className="text-xs text-emerald-300 font-bold">APY</span>
          </div>
        </div>
      )
    }
  ]

  return (
    <section 
      ref={sectionRef}
      className="section-padding bg-gradient-to-b from-dark-900 to-dark-800 relative overflow-hidden"
    >
      {/* Enhanced Interactive Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Dynamic mesh gradient */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(34, 197, 94, 0.15) 0%, transparent 50%)`
          }}
        />
        
        {/* Advanced particle system */}
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
                            className="absolute w-1 h-1 bg-primary-400/50 rounded-full animate-float-utility"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${8 + Math.random() * 4}s`
            }}
          />
        ))}

        {/* Geometric network */}
        <svg className="absolute inset-0 w-full h-full opacity-10">
          <defs>
            <linearGradient id="utilityLine" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="50%" stopColor="#22c55e" stopOpacity="0.4" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>
          {[...Array(6)].map((_, i) => (
            <g key={i}>
              <line
                x1={`${15 + i * 15}%`}
                y1="10%"
                x2={`${25 + i * 12}%`}
                y2="90%"
                stroke="url(#utilityLine)"
                strokeWidth="0.5"
                className="animate-pulse"
                style={{ animationDelay: `${i * 0.4}s` }}
              />
              <circle
                cx={`${20 + i * 13}%`}
                cy={`${30 + Math.sin(i) * 20}%`}
                r="1"
                fill="#22c55e"
                opacity="0.3"
                className="animate-pulse"
                style={{ animationDelay: `${i * 0.2}s` }}
              />
            </g>
          ))}
        </svg>

        {/* Background utility text */}
        <div className="absolute inset-0 opacity-5">
          <div className="text-9xl font-black text-primary-400 absolute top-10 left-10 transform -rotate-12 animate-pulse">$SOLMEME UTILITY</div>
        </div>
      </div>

      <div className="container-custom relative z-10">
        {/* Enhanced Section Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-8">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-green-400 to-transparent animate-pulse"></div>
              <div className="text-green-400 text-sm font-bold uppercase tracking-[0.4em] animate-bounce">
                REVOLUTIONARY UTILITIES
              </div>
              <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-green-400 to-transparent animate-pulse"></div>
            </div>
            
            <h2 className={`text-5xl lg:text-6xl xl:text-7xl font-black mb-8 transition-all duration-1000 ${isVisible ? 'animate-fade-up' : 'opacity-0 translate-y-20'}`}>
              <span className="text-white hover:text-gray-200 transition-colors duration-300">$SOLMEME</span>{' '}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-green-400 via-emerald-500 to-green-600 bg-clip-text text-transparent animate-gradient-flow">
                  UTILITY
                </span>
                <div className="absolute -inset-2 bg-gradient-to-r from-green-400/20 to-emerald-500/20 blur-xl animate-pulse" />
              </span>
            </h2>
          </div>
          <div className="w-32 h-1 bg-gradient-to-r from-primary-400 to-primary-500 mx-auto rounded-full animate-fade-up animate-stagger-1" />
        </div>

        {/* Enhanced Utilities Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-20">
          {utilities.map((utility, index) => (
            <div
              key={utility.id}
              className={`group relative transition-all duration-1000 ${isVisible ? 'animate-fade-up' : 'opacity-0 translate-y-20'}`}
              style={{ animationDelay: `${index * 0.2}s` }}
              onMouseEnter={() => setActiveUtility(utility.id)}
              onMouseLeave={() => setActiveUtility(null)}
            >
              <div className="relative bg-gradient-to-br from-gray-900/90 via-black/90 to-gray-800/80 backdrop-blur-xl border border-gray-800 rounded-3xl p-8 lg:p-10 h-full overflow-hidden group-hover:border-green-400/50 transition-all duration-700 group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-green-400/20 transform-gpu">
                
                {/* Dynamic background with gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${utility.gradient.replace('from-', 'from-').replace('to-', 'to-')}/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                {/* Animated border effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary-400/20 via-primary-500/20 to-secondary-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse" />
                
                {/* Status indicator */}
                <div className="absolute top-4 right-4 flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                <div className="w-2 h-2 bg-primary-400 rounded-full animate-pulse" />
              <span className="text-xs text-primary-400 font-bold">{utility.status}</span>
                </div>
                
                {/* Power meter */}
                <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                              <div className="bg-gradient-to-r from-gray-900/80 to-gray-800/80 border border-primary-400/30 rounded-lg px-3 py-1">
              <div className="flex items-center space-x-2">
                <span className="text-xs text-primary-400">PWR</span>
                      <span className="text-xs text-white font-mono">{utility.power}%</span>
                    </div>
                    <div className="w-16 bg-gray-700 rounded-full h-1 mt-1">
                      <div 
                        className="h-full bg-gradient-to-r from-primary-400 to-primary-500 rounded-full transition-all duration-1000"
                        style={{ width: `${utility.power}%` }}
                      />
                    </div>
                  </div>
                </div>
                
                {/* Floating particles specific to utility */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {[...Array(12)].map((_, i) => (
                    <div
                      key={i}
                      className={`absolute w-1.5 h-1.5 bg-${utility.particleColor}/60 rounded-full animate-float-utility-particle`}
                      style={{
                        left: `${15 + i * 6}%`,
                        top: `${20 + Math.sin(i) * 40}%`,
                        animationDelay: `${i * 0.15}s`
                      }}
                    />
                  ))}
                </div>

                <div className="relative z-10">
                  {/* Enhanced Icon */}
                  <div className="mb-8 flex justify-center transform group-hover:scale-110 transition-transform duration-500">
                    <div className="relative">
                      {utility.icon}
                      <div className={`absolute inset-0 bg-gradient-to-r ${utility.gradient} rounded-full blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />
                    </div>
                  </div>
                  
                  {/* Enhanced Title */}
                  <div className="mb-6 text-center">
                                <h3 className="text-3xl lg:text-4xl xl:text-5xl font-black text-primary-400 mb-3 leading-tight group-hover:text-primary-300 transition-colors duration-300 relative">
              <span className="relative z-10">{utility.title}</span>
              <div className="absolute -inset-1 bg-gradient-to-r from-primary-400/20 to-primary-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur" />
                    </h3>
                    <h4 className="text-2xl lg:text-3xl font-bold text-white leading-tight group-hover:text-gray-100 transition-colors duration-300">
                      {utility.subtitle}
                    </h4>
                  </div>
                  
                  {/* Enhanced Description */}
                  <div className="opacity-100 group-hover:opacity-100 transition-all duration-500">
                    <p className="text-gray-300 text-lg leading-relaxed group-hover:text-gray-200 transition-colors duration-300 bg-black/20 backdrop-blur-sm rounded-xl p-4 border border-gray-700/30">
                      {utility.description}
                    </p>
                  </div>

                 
                </div>

                {/* Glow effect */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${utility.gradient}/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse`} />
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Call to Action */}
        <div className="text-center mt-20">
          <div className="relative bg-gradient-to-r from-gray-900/90 via-black/90 to-gray-800/90 backdrop-blur-xl border border-gray-700 rounded-3xl p-8 lg:p-12 max-w-4xl mx-auto overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary-400/5 via-primary-500/5 to-primary-400/5 animate-pulse" />
            
            {/* Neural network overlay */}
            <div className="absolute inset-0 opacity-10">
              <svg className="w-full h-full">
                <defs>
                  <radialGradient id="ctaGradient">
                    <stop offset="0%" stopColor="#22c55e" />
                    <stop offset="100%" stopColor="transparent" />
                  </radialGradient>
                </defs>
                {[...Array(6)].map((_, i) => (
                  <circle
                    key={i}
                    cx={`${20 + i * 12}%`}
                    cy="50%"
                    r="3"
                    fill="url(#ctaGradient)"
                    className="animate-pulse"
                    style={{ animationDelay: `${i * 0.3}s` }}
                  />
                ))}
              </svg>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-2xl lg:text-3xl font-black mb-6 text-white">
                Ready to Dive Into the{' '}
                <span className="bg-gradient-to-r from-primary-400 to-primary-500 bg-clip-text text-transparent">
                  Chaos
                </span>
                ?
              </h3>
              <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                Join the $SOLMEME ecosystem and start utilizing these powerful features today.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a
                  href="https://raydium.io/swap/?inputMint=sol&outputMint=8AtrgNrTChVp8yjEr5LTh9V5cYFzVAGt7XvFap1aMRie"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative bg-gradient-to-r from-primary-400 via-primary-500 to-secondary-600 text-black font-black text-lg px-10 py-5 rounded-xl overflow-hidden transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-primary-400/25 transform-gpu"
                >
                  <span className="relative z-10">Buy $SOLMEME</span>
                                      <div className="absolute inset-0 bg-gradient-to-r from-primary-300 to-secondary-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary-400 to-secondary-500 rounded-xl blur opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
                </a>

              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Advanced CSS for enhanced animations */}
      <style jsx>{`
        @keyframes float-utility {
          0%, 100% { transform: translate(0, 0) rotate(0deg); opacity: 0.5; }
          25% { transform: translate(20px, -20px) rotate(90deg); opacity: 1; }
          50% { transform: translate(-15px, -30px) rotate(180deg); opacity: 0.7; }
          75% { transform: translate(-25px, -15px) rotate(270deg); opacity: 1; }
        }
        
        @keyframes float-utility-particle {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.4; }
          50% { transform: translate(20px, -25px) scale(1.5); opacity: 1; }
        }
        
        @keyframes float-stream {
          0%, 100% { transform: translate(0, 0); opacity: 0.3; }
          50% { transform: translate(15px, -20px); opacity: 1; }
        }
        
        @keyframes float-bubble {
          0% { transform: translateY(0) scale(1); opacity: 0.6; }
          50% { transform: translateY(-10px) scale(1.1); opacity: 1; }
          100% { transform: translateY(-20px) scale(0.8); opacity: 0; }
        }
        
        @keyframes wave {
          0%, 100% { transform: translateX(0) scaleY(1); }
          50% { transform: translateX(5px) scaleY(1.1); }
        }
        
        @keyframes wave-2 {
          0%, 100% { transform: translateX(0) scaleY(1); }
          50% { transform: translateX(-3px) scaleY(1.05); }
        }
        
        @keyframes wave-3 {
          0%, 100% { transform: translateX(0) scaleY(1); }
          50% { transform: translateX(2px) scaleY(1.02); }
        }
        
        @keyframes gradient-flow {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes spin-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        
        .animate-float-utility { animation: float-utility 10s ease-in-out infinite; }
        .animate-float-utility-particle { animation: float-utility-particle 5s ease-in-out infinite; }
        .animate-float-stream { animation: float-stream 3s ease-in-out infinite; }
        .animate-float-bubble { animation: float-bubble 4s ease-in-out infinite; }
        .animate-wave { animation: wave 3s ease-in-out infinite; }
        .animate-wave-2 { animation: wave-2 3.5s ease-in-out infinite; }
        .animate-wave-3 { animation: wave-3 4s ease-in-out infinite; }
        .animate-gradient-flow { animation: gradient-flow 4s ease infinite; background-size: 200% 200%; }
        .animate-spin-reverse { animation: spin-reverse 8s linear infinite; }
      `}</style>
    </section>
  )
}

export default Features 