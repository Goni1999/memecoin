'use client'

import React, { useState, useEffect, useRef } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function Network() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const [liveStats, setLiveStats] = useState({
    tps: 2847,
    blockTime: 0.4,
    validators: 1899,
    epochs: 485
  })
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

    // Simulate live stats updates
    const interval = setInterval(() => {
      setLiveStats(prev => ({
        tps: Math.floor(2500 + Math.random() * 1000),
        blockTime: parseFloat((0.3 + Math.random() * 0.3).toFixed(1)),
        validators: 1899 + Math.floor(Math.random() * 20),
        epochs: prev.epochs + (Math.random() > 0.95 ? 1 : 0)
      }))
    }, 3000)

    return () => {
      if (section) {
        section.removeEventListener('mousemove', handleMouseMove)
      }
      clearInterval(interval)
    }
  }, [])

  const networkStats = [
    {
      label: 'Transactions/Sec',
      value: liveStats.tps.toLocaleString(),
      icon: '⚡',
      color: 'from-primary-400 to-primary-600',
      description: 'Current network throughput',
      change: '+12.3%'
    },
    {
      label: 'Block Time',
      value: `${liveStats.blockTime}s`,
      icon: '⏱️',
      color: 'from-secondary-400 to-secondary-600',
      description: 'Average time between blocks',
      change: '-2.1%'
    },
    {
      label: 'Active Validators',
      value: liveStats.validators.toLocaleString(),
      icon: '🏛️',
      color: 'from-primary-500 to-secondary-500',
      description: 'Validators securing the network',
      change: '+0.8%'
    },
    {
      label: 'Current Epoch',
      value: liveStats.epochs.toLocaleString(),
      icon: '🔄',
      color: 'from-secondary-500 to-primary-600',
      description: 'Network validation cycles',
      change: 'New'
    }
  ]

  const networkFeatures = [
    {
      title: 'Proof of History',
      description: 'Revolutionary consensus mechanism that timestamps transactions before they enter the blockchain',
      icon: '🕐',
      benefits: ['Sub-second finality', 'Predictable fees', 'High throughput', 'Energy efficient']
    },
    {
      title: 'Parallel Processing',
      description: 'Smart contracts can run in parallel, maximizing network efficiency and speed',
      icon: '⚙️',
      benefits: ['Concurrent execution', 'Scalable performance', 'Resource optimization', 'Future-proof design']
    },
    {
      title: 'Low Cost Transactions',
      description: 'Ultra-low fees make microtransactions and high-frequency trading viable',
      icon: '💰',
      benefits: ['$0.00025 per transaction', 'No hidden fees', 'Predictable costs', 'Mass adoption ready']
    },
    {
      title: 'Developer Friendly',
      description: 'Built for developers with comprehensive tooling and documentation',
      icon: '👨‍💻',
      benefits: ['Rust & C support', 'Rich ecosystem', 'Active community', 'Extensive documentation']
    }
  ]

  const validatorData = [
    {
      name: 'Solana Foundation',
      stake: '12.5M SOL',
      commission: '7%',
      uptime: '99.9%',
      location: 'Global',
      status: 'active'
    },
    {
      name: 'Figment Networks',
      stake: '8.2M SOL',
      commission: '8%',
      uptime: '99.8%',
      location: 'North America',
      status: 'active'
    },
    {
      name: 'P2P Validator',
      stake: '6.8M SOL',
      commission: '5%',
      uptime: '99.7%',
      location: 'Europe',
      status: 'active'
    },
    {
      name: 'Staking Fund',
      stake: '5.4M SOL',
      commission: '6%',
      uptime: '99.9%',
      location: 'Asia Pacific',
      status: 'active'
    },
    {
      name: 'Shinobi Systems',
      stake: '4.9M SOL',
      commission: '9%',
      uptime: '99.6%',
      location: 'North America',
      status: 'active'
    }
  ]

  const networkMetrics = [
    { metric: 'Total Supply', value: '568M SOL', icon: '🪙' },
    { metric: 'Circulating Supply', value: '425M SOL', icon: '🔄' },
    { metric: 'Staked SOL', value: '342M SOL', icon: '🔒' },
    { metric: 'Inflation Rate', value: '5.2%', icon: '📈' },
    { metric: 'Slot Time', value: '400ms', icon: '⚡' },
    { metric: 'Confirmation Time', value: '12.8s', icon: '✅' }
  ]

  return (
    <main ref={sectionRef} className="min-h-screen bg-dark-900 relative overflow-hidden">
      {/* Advanced Interactive Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Dynamic mesh gradient */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(153, 69, 255, 0.1) 0%, transparent 50%)`
          }}
        />

        {/* Floating network particles */}
        {[...Array(35)].map((_, i) => (
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

        {/* Network grid pattern */}
        <svg className="absolute inset-0 w-full h-full opacity-10">
          <defs>
            <linearGradient id="networkLine" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="50%" stopColor="#9945ff" stopOpacity="0.6" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
            <radialGradient id="nodeGradient">
              <stop offset="0%" stopColor="#14f195" />
              <stop offset="100%" stopColor="transparent" />
            </radialGradient>
          </defs>
          
          {/* Network nodes */}
          {[...Array(15)].map((_, i) => (
            <circle
              key={i}
              cx={`${15 + (i % 5) * 20}%`}
              cy={`${20 + Math.floor(i / 5) * 25}%`}
              r="3"
              fill="url(#nodeGradient)"
              className="animate-pulse"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
          
          {/* Connecting lines */}
          {[...Array(12)].map((_, i) => (
            <line
              key={i}
              x1={`${10 + i * 8}%`}
              y1="15%"
              x2={`${20 + i * 7}%`}
              y2="85%"
              stroke="url(#networkLine)"
              strokeWidth="0.5"
              className="animate-pulse"
              style={{ animationDelay: `${i * 0.3}s` }}
            />
          ))}
        </svg>

        {/* Background technical elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="text-8xl font-black text-primary-400 absolute top-32 right-10 transform rotate-12 animate-pulse">NETWORK</div>
          <div className="text-5xl absolute bottom-32 left-10 animate-bounce">⚡</div>
          <div className="text-3xl absolute top-64 left-1/3 animate-pulse">🔗</div>
          <div className="text-4xl absolute bottom-64 right-1/4 animate-bounce">🏛️</div>
        </div>
      </div>

      <Navbar />
      
      {/* Enhanced Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-dark-900 to-dark-800 relative">
        <div className="container-custom relative z-10">
          <div className="max-w-6xl mx-auto text-center">
            <div className="inline-block mb-8">
              <div className="flex items-center justify-center space-x-4 mb-6">
                <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-primary-400 to-transparent animate-pulse"></div>
                <div className="text-primary-400 text-sm font-bold uppercase tracking-[0.4em] animate-bounce">
                  NETWORK OVERVIEW
                </div>
                <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-primary-400 to-transparent animate-pulse"></div>
              </div>
              
              <h1 className={`text-display-lg sm:text-display-xl lg:text-7xl font-black mb-6 transition-all duration-1000 ${isVisible ? 'animate-fade-up' : 'opacity-0 translate-y-20'}`}>
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-primary-400 via-primary-500 to-secondary-500 bg-clip-text text-transparent animate-gradient-flow">
                    Solana
                  </span>
                  <div className="absolute -inset-2 bg-gradient-to-r from-primary-400/20 to-secondary-500/20 blur-xl animate-pulse" />
                </span>
                <br />
                <span className="text-white">Network Status</span>
              </h1>
            </div>
            
            <p className={`text-xl text-gray-300 mb-8 max-w-3xl mx-auto transition-all duration-1000 ${isVisible ? 'animate-fade-up animate-stagger-1' : 'opacity-0 translate-y-20'}`}>
              Real-time network statistics, validator information, and technical insights into the world's fastest blockchain.
            </p>
            
            <div className={`flex flex-col sm:flex-row gap-6 justify-center transition-all duration-1000 ${isVisible ? 'animate-fade-up animate-stagger-2' : 'opacity-0 translate-y-20'}`}>
              <Link href="#stats" className="group relative bg-gradient-to-r from-primary-400 via-primary-500 to-primary-600 text-black font-black text-lg px-10 py-5 rounded-xl overflow-hidden transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-primary-400/25 transform-gpu">
                <span className="relative z-10">View Live Stats</span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary-300 to-primary-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
              <Link href="#validators" className="group relative border-2 border-primary-400 text-primary-400 font-bold text-lg px-10 py-5 rounded-xl overflow-hidden transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-primary-400/25 hover:bg-primary-400 hover:text-black transform-gpu">
                <span className="relative z-10">Explore Validators</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Live Network Stats */}
      <section id="stats" className="section-padding relative">
        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-display-md font-black mb-6">
              <span className="bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">Live Network Stats</span>
            </h2>
            <div className="flex items-center justify-center space-x-2 text-primary-400">
              <div className="w-2 h-2 bg-primary-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold">Real-time data • Updated every 3 seconds</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {networkStats.map((stat, index) => (
              <div 
                key={stat.label}
                className={`group relative bg-gradient-to-br from-gray-900/90 via-black/90 to-gray-800/80 backdrop-blur-xl border border-gray-800 rounded-2xl p-8 text-center overflow-hidden hover:border-primary-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary-400/20 transform-gpu animate-fade-up`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-secondary-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <div className="relative mb-6">
                    <div className="text-5xl mb-4 group-hover:scale-125 transition-transform duration-300 relative z-10">{stat.icon}</div>
                    <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} rounded-full blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300`} />
                  </div>
                  
                  <div className={`text-4xl lg:text-5xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300`}>
                    {stat.value}
                  </div>
                  <div className="text-lg font-bold text-white mb-2 group-hover:text-primary-300 transition-colors duration-300">
                    {stat.label}
                  </div>
                  <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    {stat.description}
                  </div>
                  
                  <div className="mt-4 flex items-center justify-center">
                    <span className={`text-xs font-bold px-2 py-1 rounded-full ${
                      stat.change.startsWith('+') ? 'bg-green-500/20 text-green-400' :
                      stat.change.startsWith('-') ? 'bg-red-500/20 text-red-400' :
                      'bg-primary-500/20 text-primary-400'
                    }`}>
                      {stat.change}
                    </span>
                  </div>
                </div>
                
                {/* Live update indicator */}
                <div className="absolute top-4 right-4">
                  <div className="w-2 h-2 bg-primary-400 rounded-full animate-ping"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Network Features */}
      <section className="section-padding bg-gradient-to-b from-dark-800 to-dark-900 relative">
        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-display-md font-black mb-6">
              <span className="bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">Network Innovation</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Revolutionary features that make Solana the fastest blockchain
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {networkFeatures.map((feature, index) => (
              <div 
                key={feature.title}
                className={`group relative bg-gradient-to-br from-gray-900/90 via-black/90 to-gray-800/80 backdrop-blur-xl border border-gray-800 rounded-2xl p-8 overflow-hidden hover:border-primary-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary-400/20 transform-gpu animate-fade-up`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-secondary-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <div className="flex items-start mb-6">
                    <div className="relative mr-6">
                      <div className="text-5xl group-hover:scale-125 transition-transform duration-300 relative z-10">{feature.icon}</div>
                      <div className="absolute inset-0 bg-gradient-to-r from-primary-400/20 to-secondary-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-3 group-hover:bg-gradient-to-r group-hover:from-primary-400 group-hover:to-secondary-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                        {feature.title}
                      </h3>
                      <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="text-sm font-semibold text-primary-400 mb-3">Key Benefits:</div>
                    {feature.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-400 group-hover:text-gray-300">
                        <div className="w-1.5 h-1.5 bg-primary-400 rounded-full mr-3 opacity-70" />
                        {benefit}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Network Metrics */}
      <section className="section-padding relative">
        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-display-md font-black mb-6">
              <span className="bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">Network Metrics</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Key metrics that define the Solana network's performance and health
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {networkMetrics.map((metric, index) => (
              <div 
                key={metric.metric}
                className={`group relative bg-gradient-to-br from-gray-900/90 via-black/90 to-gray-800/80 backdrop-blur-xl border border-gray-800 rounded-2xl p-6 text-center overflow-hidden hover:border-primary-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary-400/20 transform-gpu animate-fade-up`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-secondary-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <div className="relative mb-4">
                    <div className="text-4xl group-hover:scale-125 transition-transform duration-300 relative z-10">{metric.icon}</div>
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-400/20 to-secondary-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  
                  <div className="text-2xl font-black bg-gradient-to-r from-primary-400 to-secondary-500 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                    {metric.value}
                  </div>
                  <div className="text-sm font-semibold text-white group-hover:text-primary-300 transition-colors duration-300">
                    {metric.metric}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Validators */}
      <section id="validators" className="section-padding bg-gradient-to-b from-dark-800 to-dark-900 relative">
        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-display-md font-black mb-6">
              <span className="bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">Top Validators</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Meet the validators securing the Solana network
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl border border-gray-800 bg-gradient-to-br from-gray-900/90 via-black/90 to-gray-800/80 backdrop-blur-xl">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-primary-500/10 to-secondary-500/10 border-b border-gray-700">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-bold text-primary-400">Validator</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-primary-400">Stake</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-primary-400">Commission</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-primary-400">Uptime</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-primary-400">Location</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-primary-400">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {validatorData.map((validator, index) => (
                    <tr 
                      key={validator.name} 
                      className="border-b border-gray-800 hover:bg-primary-500/5 transition-colors duration-300"
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <div className="w-8 h-8 bg-gradient-to-r from-primary-400 to-secondary-500 rounded-full flex items-center justify-center mr-3">
                            <span className="text-black font-bold text-sm">{index + 1}</span>
                          </div>
                          <span className="font-semibold text-white">{validator.name}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-gray-300 font-mono">{validator.stake}</td>
                      <td className="px-6 py-4 text-gray-300">{validator.commission}</td>
                      <td className="px-6 py-4">
                        <span className={`font-semibold ${
                          parseFloat(validator.uptime) >= 99.5 ? 'text-green-400' : 'text-yellow-400'
                        }`}>
                          {validator.uptime}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-gray-300">{validator.location}</td>
                      <td className="px-6 py-4">
                        <span className="bg-green-500/20 text-green-400 px-2 py-1 rounded-full text-xs font-bold flex items-center w-fit">
                          <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                          {validator.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="text-center mt-8">
            <a href="https://solanabeach.io/validators" target="_blank" rel="noopener noreferrer" className="group relative border-2 border-primary-400 text-primary-400 font-bold text-lg px-8 py-4 rounded-xl overflow-hidden transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-primary-400/25 hover:bg-primary-400 hover:text-black transform-gpu inline-flex items-center">
              <span className="relative z-10">View All Validators</span>
              <span className="ml-2 transition-transform group-hover:translate-x-1 relative z-10">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* Technical Info */}
      <section className="section-padding relative">
        <div className="container-custom relative z-10">
          <div className="relative bg-gradient-to-r from-gray-900/90 via-black/90 to-gray-800/90 backdrop-blur-xl border border-gray-700 rounded-3xl p-12 text-center max-w-5xl mx-auto overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary-400/5 via-secondary-500/5 to-primary-400/5 animate-pulse" />
            
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-6 text-white">Ready to Build on Solana?</h2>
              <p className="text-gray-300 mb-8 max-w-3xl mx-auto">
                Join thousands of developers building the next generation of decentralized applications on the fastest blockchain.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-4xl mb-2">🚀</div>
                  <div className="text-xl font-bold text-primary-400">Fast</div>
                  <div className="text-sm text-gray-400">Sub-second finality</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-2">💰</div>
                  <div className="text-xl font-bold text-secondary-400">Cheap</div>
                  <div className="text-sm text-gray-400">$0.00025 per transaction</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-2">🔧</div>
                  <div className="text-xl font-bold text-primary-400">Scalable</div>
                  <div className="text-sm text-gray-400">65,000+ TPS capacity</div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a href="https://docs.solana.com/developing/programming-model/overview" target="_blank" rel="noopener noreferrer" className="group relative bg-gradient-to-r from-primary-400 via-primary-500 to-primary-600 text-black font-black text-lg px-8 py-4 rounded-xl overflow-hidden transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-primary-400/25 transform-gpu">
                  <span className="relative z-10">Start Building</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-300 to-primary-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>
                <Link href="/learn" className="group relative border-2 border-primary-400 text-primary-400 font-bold text-lg px-8 py-4 rounded-xl overflow-hidden transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-primary-400/25 hover:bg-primary-400 hover:text-black transform-gpu">
                  <span className="relative z-10">Learn More</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes float-particle {
          0%, 100% { transform: translate(0, 0) rotate(0deg); opacity: 0.4; }
          25% { transform: translate(15px, -15px) rotate(90deg); opacity: 1; }
          50% { transform: translate(-10px, -25px) rotate(180deg); opacity: 0.6; }
          75% { transform: translate(-20px, -10px) rotate(270deg); opacity: 1; }
        }
        
        @keyframes gradient-flow {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        .animate-float-particle { animation: float-particle 8s ease-in-out infinite; }
        .animate-gradient-flow { animation: gradient-flow 4s ease infinite; background-size: 200% 200%; }
      `}</style>
    </main>
  )
} 