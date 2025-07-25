'use client'

import React, { useState, useEffect, useRef } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function Solutions() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const [activeCategory, setActiveCategory] = useState('all')
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

  const solutions = [
    {
      category: 'DeFi',
      title: 'Decentralized Finance',
      description: 'Revolutionary financial products without traditional intermediaries',
      icon: '💰',
      color: 'from-primary-400 to-primary-600',
      examples: ['AMMs', 'Lending Protocols', 'Yield Farming', 'Derivatives'],
      metrics: { volume: '$45B+', protocols: '200+', users: '2.5M+' }
    },
    {
      category: 'NFTs',
      title: 'Digital Collectibles',
      description: 'Next-generation NFTs with low fees and instant transactions',
      icon: '🎨',
      color: 'from-secondary-400 to-secondary-600',
      examples: ['Art Collections', 'Gaming Assets', 'Music NFTs', 'Utility Tokens'],
      metrics: { minted: '50M+', creators: '100K+', volume: '$2.8B+' }
    },
    {
      category: 'Gaming',
      title: 'Blockchain Gaming',
      description: 'High-performance games with true asset ownership',
      icon: '🎮',
      color: 'from-primary-500 to-secondary-500',
      examples: ['Play-to-Earn', 'Metaverse', 'Asset Trading', 'Tournaments'],
      metrics: { games: '500+', players: '1.2M+', rewards: '$25M+' }
    },
    {
      category: 'Payments',
      title: 'Digital Payments',
      description: 'Instant, low-cost payments for global commerce',
      icon: '💳',
      color: 'from-secondary-500 to-primary-600',
      examples: ['P2P Transfers', 'Merchant Payments', 'Remittances', 'Micropayments'],
      metrics: { processed: '$15B+', merchants: '50K+', countries: '180+' }
    }
  ]

  const useCases = [
    {
      title: 'Enterprise Treasury Management',
      description: 'Manage corporate treasuries with programmable money and automated compliance',
      features: ['Multi-signature wallets', 'Automated reporting', 'Real-time auditing', 'DeFi integration'],
      industry: 'Finance',
      icon: '🏢'
    },
    {
      title: 'Supply Chain Transparency',
      description: 'Track products from origin to consumer with immutable records',
      features: ['Product verification', 'Authenticity certificates', 'Logistics tracking', 'Quality assurance'],
      industry: 'Logistics',
      icon: '📦'
    },
    {
      title: 'Creator Economy Platform',
      description: 'Empower creators with direct monetization and fan engagement tools',
      features: ['Creator tokens', 'NFT marketplaces', 'Fan subscriptions', 'Revenue sharing'],
      industry: 'Media',
      icon: '🎭'
    },
    {
      title: 'Carbon Credit Marketplace',
      description: 'Transparent carbon offset trading with verified environmental impact',
      features: ['Credit tokenization', 'Impact verification', 'Automated trading', 'Compliance tracking'],
      industry: 'Environment',
      icon: '🌱'
    },
    {
      title: 'Decentralized Identity',
      description: 'Self-sovereign identity solutions for privacy and security',
      features: ['Identity verification', 'Credential management', 'Privacy protection', 'Interoperability'],
      industry: 'Identity',
      icon: '🔐'
    },
    {
      title: 'Prediction Markets',
      description: 'Wisdom of crowds for forecasting events and market outcomes',
      features: ['Event markets', 'Liquidity pools', 'Oracle integration', 'Automated settlement'],
      industry: 'Finance',
      icon: '🔮'
    }
  ]

  const integrationSteps = [
    {
      step: 1,
      title: 'Connect Your Wallet',
      description: 'Integrate with popular Solana wallets like Phantom, Solflare, or custom solutions',
      code: 'import { WalletAdapterNetwork } from "@solana/wallet-adapter-base"',
      icon: '👛'
    },
    {
      step: 2,
      title: 'Configure Your Program',
      description: 'Deploy smart contracts or integrate with existing Solana programs',
      code: 'const program = new Program(idl, programId, provider)',
      icon: '⚙️'
    },
    {
      step: 3,
      title: 'Handle Transactions',
      description: 'Send transactions and handle confirmations with optimal user experience',
      code: 'await program.methods.initialize().rpc()',
      icon: '🔄'
    },
    {
      step: 4,
      title: 'Monitor & Scale',
      description: 'Use analytics and monitoring tools to optimize performance and scale',
      code: 'const metrics = await connection.getAccountInfo(address)',
      icon: '📊'
    }
  ]

  const partners = [
    {
      name: 'Magic Eden',
      category: 'NFT Marketplace',
      description: 'Leading NFT marketplace on Solana',
      logo: '🪄',
      integration: 'Full marketplace integration'
    },
    {
      name: 'Jupiter',
      category: 'DEX Aggregator',
      description: 'Best price execution across Solana DEXs',
      logo: '🪐',
      integration: 'Liquidity aggregation'
    },
    {
      name: 'Orca',
      category: 'AMM Protocol',
      description: 'User-friendly automated market maker',
      logo: '🐋',
      integration: 'DEX functionality'
    },
    {
      name: 'Metaplex',
      category: 'NFT Infrastructure',
      description: 'Complete NFT toolkit and standards',
      logo: '🎨',
      integration: 'NFT creation & trading'
    },
    {
      name: 'Pyth Network',
      category: 'Oracle Provider',
      description: 'High-fidelity financial market data',
      logo: '🔮',
      integration: 'Price feeds & data'
    },
    {
      name: 'Serum',
      category: 'DEX Protocol',
      description: 'Central limit order book DEX',
      logo: '📈',
      integration: 'Order book trading'
    }
  ]

  const filteredUseCases = activeCategory === 'all' 
    ? useCases 
    : useCases.filter(useCase => useCase.industry.toLowerCase() === activeCategory)

  const categories = [
    { id: 'all', name: 'All Industries' },
    { id: 'finance', name: 'Finance' },
    { id: 'logistics', name: 'Logistics' },
    { id: 'media', name: 'Media' },
    { id: 'environment', name: 'Environment' },
    { id: 'identity', name: 'Identity' }
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

        {/* Floating solution particles */}
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

        {/* Solution network lines */}
        <svg className="absolute inset-0 w-full h-full opacity-10">
          <defs>
            <linearGradient id="solutionLine" x1="0%" y1="0%" x2="100%" y2="100%">
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
              stroke="url(#solutionLine)"
              strokeWidth="0.5"
              className="animate-pulse"
              style={{ animationDelay: `${i * 0.3}s` }}
            />
          ))}
        </svg>

        {/* Background solution icons */}
        <div className="absolute inset-0 opacity-5">
          <div className="text-8xl font-black text-primary-400 absolute top-32 right-10 transform rotate-12 animate-pulse">SOLUTIONS</div>
          <div className="text-5xl absolute bottom-32 left-10 animate-bounce">🚀</div>
          <div className="text-3xl absolute top-64 left-1/3 animate-pulse">💡</div>
          <div className="text-4xl absolute bottom-64 right-1/4 animate-bounce">⚙️</div>
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
                  ENTERPRISE SOLUTIONS
                </div>
                <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-primary-400 to-transparent animate-pulse"></div>
              </div>
              
              <h1 className={`text-display-lg sm:text-display-xl lg:text-7xl font-black mb-6 transition-all duration-1000 ${isVisible ? 'animate-fade-up' : 'opacity-0 translate-y-20'}`}>
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-primary-400 via-primary-500 to-secondary-500 bg-clip-text text-transparent animate-gradient-flow">
                    Build
                  </span>
                  <div className="absolute -inset-2 bg-gradient-to-r from-primary-400/20 to-secondary-500/20 blur-xl animate-pulse" />
                </span>
                <br />
                <span className="text-white">The Future</span>
              </h1>
            </div>
            
            <p className={`text-xl text-gray-300 mb-8 max-w-3xl mx-auto transition-all duration-1000 ${isVisible ? 'animate-fade-up animate-stagger-1' : 'opacity-0 translate-y-20'}`}>
              Leverage SOLMEME and Solana's high-performance blockchain to build next-generation applications that scale.
            </p>
            
            <div className={`flex flex-col sm:flex-row gap-6 justify-center transition-all duration-1000 ${isVisible ? 'animate-fade-up animate-stagger-2' : 'opacity-0 translate-y-20'}`}>
              <a href="https://solana.com/ecosystem" target="_blank" rel="noopener noreferrer" className="group relative bg-gradient-to-r from-primary-400 via-primary-500 to-primary-600 text-black font-black text-lg px-10 py-5 rounded-xl overflow-hidden transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-primary-400/25 transform-gpu">
                <span className="relative z-10">Explore Solutions</span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary-300 to-primary-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
              <a href="https://docs.solana.com/developing/programming-model/overview" target="_blank" rel="noopener noreferrer" className="group relative border-2 border-primary-400 text-primary-400 font-bold text-lg px-10 py-5 rounded-xl overflow-hidden transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-primary-400/25 hover:bg-primary-400 hover:text-black transform-gpu">
                <span className="relative z-10">Start Building</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Categories */}
      <section id="solutions" className="section-padding relative">
        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-display-md font-black mb-6">
              <span className="bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">Core Solutions</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how Solana powers the next generation of applications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <div 
                key={solution.category}
                className={`group relative bg-gradient-to-br from-gray-900/90 via-black/90 to-gray-800/80 backdrop-blur-xl border border-gray-800 rounded-2xl p-8 overflow-hidden hover:border-primary-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary-400/20 transform-gpu animate-fade-up`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-secondary-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-6">
                    <div className="relative">
                      <div className="text-6xl group-hover:scale-125 transition-transform duration-300 relative z-10">{solution.icon}</div>
                      <div className={`absolute inset-0 bg-gradient-to-r ${solution.color} rounded-full blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300`} />
                    </div>
                    <div className="bg-gradient-to-r from-primary-400/20 to-secondary-500/20 border border-primary-400/30 rounded-lg px-3 py-1">
                      <span className="text-xs text-primary-400 font-bold">{solution.category}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:bg-gradient-to-r group-hover:from-primary-400 group-hover:to-secondary-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                    {solution.title}
                  </h3>
                  <p className="text-gray-400 mb-6 group-hover:text-gray-300 transition-colors duration-300">
                    {solution.description}
                  </p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="text-sm font-semibold text-primary-400 mb-2">Key Applications:</div>
                    {solution.examples.map((example, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-400 group-hover:text-gray-300">
                        <div className="w-1.5 h-1.5 bg-primary-400 rounded-full mr-3 opacity-70" />
                        {example}
                      </div>
                    ))}
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-700/30">
                    {Object.entries(solution.metrics).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className={`text-lg font-black bg-gradient-to-r ${solution.color} bg-clip-text text-transparent`}>
                          {value}
                        </div>
                        <div className="text-xs text-gray-400 capitalize">{key}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="section-padding bg-gradient-to-b from-dark-800 to-dark-900 relative">
        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-display-md font-black mb-6">
              <span className="bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">Use Cases</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real-world applications transforming industries
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-primary-500 text-black'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredUseCases.map((useCase, index) => (
              <div 
                key={useCase.title}
                className={`group relative bg-gradient-to-br from-gray-900/90 via-black/90 to-gray-800/80 backdrop-blur-xl border border-gray-800 rounded-2xl p-6 overflow-hidden hover:border-primary-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary-400/20 transform-gpu animate-fade-up`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-secondary-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <div className="relative">
                      <div className="text-4xl group-hover:scale-125 transition-transform duration-300 relative z-10">{useCase.icon}</div>
                      <div className="absolute inset-0 bg-gradient-to-r from-primary-400/20 to-secondary-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <div className="bg-gradient-to-r from-primary-400/20 to-secondary-500/20 border border-primary-400/30 rounded-lg px-2 py-1">
                      <span className="text-xs text-primary-400 font-bold">{useCase.industry}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:bg-gradient-to-r group-hover:from-primary-400 group-hover:to-secondary-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 group-hover:text-gray-300 transition-colors duration-300">
                    {useCase.description}
                  </p>
                  
                  <div className="space-y-2">
                    <div className="text-xs font-semibold text-primary-400 mb-2">Key Features:</div>
                    {useCase.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-xs text-gray-400 group-hover:text-gray-300">
                        <div className="w-1 h-1 bg-primary-400 rounded-full mr-2 opacity-70" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Guide */}
      <section id="integration" className="section-padding relative">
        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-display-md font-black mb-6">
              <span className="bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">Quick Integration</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get started with Solana in four simple steps
            </p>
          </div>

          <div className="space-y-8">
            {integrationSteps.map((step, index) => (
              <div 
                key={step.step}
                className={`group relative bg-gradient-to-br from-gray-900/90 via-black/90 to-gray-800/80 backdrop-blur-xl border border-gray-800 rounded-2xl p-8 overflow-hidden hover:border-primary-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary-400/20 animate-fade-up`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-secondary-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex-1 lg:mr-8">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-primary-400 to-secondary-500 rounded-full flex items-center justify-center mr-4">
                        <span className="text-black font-bold text-lg">{step.step}</span>
                      </div>
                      <div className="text-4xl mr-4">{step.icon}</div>
                      <div>
                        <h3 className="text-xl font-bold text-white group-hover:bg-gradient-to-r group-hover:from-primary-400 group-hover:to-secondary-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                          {step.title}
                        </h3>
                      </div>
                    </div>
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                      {step.description}
                    </p>
                  </div>
                  
                  <div className="lg:w-1/2 mt-6 lg:mt-0">
                    <div className="bg-dark-700/50 backdrop-blur-sm p-4 rounded-lg border border-gray-700/30">
                      <code className="text-primary-400 text-sm">{step.code}</code>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ecosystem Partners */}
      <section className="section-padding bg-gradient-to-b from-dark-800 to-dark-900 relative">
        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-display-md font-black mb-6">
              <span className="bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">Ecosystem Partners</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Integrate with leading protocols and services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {partners.map((partner, index) => (
              <div 
                key={partner.name}
                className={`group relative bg-gradient-to-br from-gray-900/90 via-black/90 to-gray-800/80 backdrop-blur-xl border border-gray-800 rounded-2xl p-6 text-center overflow-hidden hover:border-primary-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary-400/20 transform-gpu animate-fade-up`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-secondary-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <div className="relative mb-4">
                    <div className="text-5xl group-hover:scale-125 transition-transform duration-300 relative z-10">{partner.logo}</div>
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-400/20 to-secondary-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  
                  <div className="bg-gradient-to-r from-primary-400/20 to-secondary-500/20 border border-primary-400/30 rounded-lg px-3 py-1 mb-4 inline-block">
                    <span className="text-xs text-primary-400 font-bold">{partner.category}</span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:bg-gradient-to-r group-hover:from-primary-400 group-hover:to-secondary-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                    {partner.name}
                  </h3>
                  <p className="text-gray-400 text-sm mb-3 group-hover:text-gray-300 transition-colors duration-300">
                    {partner.description}
                  </p>
                  <div className="text-xs text-primary-400 font-semibold">
                    {partner.integration}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding relative">
        <div className="container-custom relative z-10">
          <div className="relative bg-gradient-to-r from-gray-900/90 via-black/90 to-gray-800/90 backdrop-blur-xl border border-gray-700 rounded-3xl p-12 text-center max-w-5xl mx-auto overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary-400/5 via-secondary-500/5 to-primary-400/5 animate-pulse" />
            
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-6 text-white">Ready to Build Your Solution?</h2>
              <p className="text-gray-300 mb-8 max-w-3xl mx-auto">
                Join thousands of developers building the next generation of decentralized applications on Solana.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-4xl mb-2">⚡</div>
                  <div className="text-xl font-bold text-primary-400">Fast Development</div>
                  <div className="text-sm text-gray-400">Ship in weeks, not months</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-2">🔧</div>
                  <div className="text-xl font-bold text-secondary-400">Rich Tooling</div>
                  <div className="text-sm text-gray-400">Comprehensive SDK & APIs</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-2">🌐</div>
                  <div className="text-xl font-bold text-primary-400">Global Scale</div>
                  <div className="text-sm text-gray-400">Built for worldwide adoption</div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link href="/developers" className="group relative bg-gradient-to-r from-primary-400 via-primary-500 to-primary-600 text-black font-black text-lg px-8 py-4 rounded-xl overflow-hidden transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-primary-400/25 transform-gpu">
                  <span className="relative z-10">Start Building Now</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-300 to-primary-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>
                <Link href="/community" className="group relative border-2 border-primary-400 text-primary-400 font-bold text-lg px-8 py-4 rounded-xl overflow-hidden transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-primary-400/25 hover:bg-primary-400 hover:text-black transform-gpu">
                  <span className="relative z-10">Join Community</span>
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