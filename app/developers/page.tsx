'use client'

import React, { useState, useEffect, useRef } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function Developers() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const [activeCategory, setActiveCategory] = useState<string | null>(null)
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

  const tools = [
    {
      name: "Solana CLI",
      description: "Command-line interface for interacting with Solana clusters",
      icon: "⌨️",
      category: "CLI Tools",
      href: "#",
      color: "from-primary-500 to-green-600",
      difficulty: "Beginner"
    },
    {
      name: "Anchor Framework",
      description: "Rust framework for building secure smart contracts",
      icon: "⚓",
      category: "Frameworks",
      href: "#",
      color: "from-secondary-500 to-purple-600",
      difficulty: "Intermediate"
    },
    {
      name: "Web3.js",
      description: "JavaScript SDK for building web applications",
      icon: "🌐",
      category: "SDKs",
      href: "#",
      color: "from-blue-500 to-cyan-600",
      difficulty: "Beginner"
    },
    {
      name: "Solana Explorer",
      description: "Blockchain explorer for debugging transactions",
      icon: "🔍",
      category: "Tools",
      href: "#",
      color: "from-emerald-500 to-green-600",
      difficulty: "Beginner"
    },
    {
      name: "Metaplex",
      description: "Protocol and tools for NFTs and digital assets",
      icon: "🎨",
      category: "Protocols",
      href: "#",
      color: "from-pink-500 to-red-600",
      difficulty: "Advanced"
    },
    {
      name: "Serum DEX",
      description: "Decentralized exchange protocol",
      icon: "📈",
      category: "DeFi",
      href: "#",
      color: "from-yellow-500 to-orange-600",
      difficulty: "Advanced"
    }
  ]

  const sdks = [
    {
      language: "JavaScript",
      name: "@solana/web3.js",
      description: "Official JavaScript SDK",
      install: "npm install @solana/web3.js",
      icon: "📦",
      popularity: 95,
      color: "from-yellow-400 to-orange-500"
    },
    {
      language: "Rust",
      name: "solana-program",
      description: "Rust crate for on-chain programs",
      install: 'cargo add solana-program',
      icon: "🦀",
      popularity: 88,
      color: "from-orange-500 to-red-600"
    },
    {
      language: "Python",
      name: "solana-py",
      description: "Python SDK for Solana",
      install: "pip install solana",
      icon: "🐍",
      popularity: 72,
      color: "from-blue-500 to-green-500"
    },
    {
      language: "Go",
      name: "solana-go",
      description: "Go SDK for Solana",
      install: "go get github.com/gagliardetto/solana-go",
      icon: "🔷",
      popularity: 65,
      color: "from-cyan-500 to-blue-600"
    }
  ]

  const examples = [
    {
      title: "Hello World Program",
      description: "A simple on-chain program that prints 'Hello World'",
      language: "Rust",
      href: "#",
      difficulty: "Beginner",
      time: "30 min"
    },
    {
      title: "Token Transfer",
      description: "Transfer SPL tokens between accounts",
      language: "JavaScript",
      href: "#",
      difficulty: "Beginner",
      time: "45 min"
    },
    {
      title: "NFT Minting",
      description: "Mint NFTs using Metaplex",
      language: "TypeScript",
      href: "#",
      difficulty: "Intermediate",
      time: "2 hours"
    },
    {
      title: "DeFi Lending",
      description: "Basic lending protocol implementation",
      language: "Rust",
      href: "#",
      difficulty: "Advanced",
      time: "4 hours"
    },
    {
      title: "Wallet Integration",
      description: "Connect and interact with Solana wallets",
      language: "React",
      href: "#",
      difficulty: "Intermediate",
      time: "1 hour"
    },
    {
      title: "Program Deployment",
      description: "Deploy programs to devnet and mainnet",
      language: "CLI",
      href: "#",
      difficulty: "Intermediate",
      time: "1.5 hours"
    }
  ]

  return (
    <main ref={sectionRef} className="min-h-screen bg-dark-900 relative overflow-hidden">
      {/* Advanced Interactive Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Dynamic mesh gradient */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(34, 197, 94, 0.1) 0%, transparent 50%)`
          }}
        />

        {/* Floating code particles */}
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary-400/50 rounded-full animate-float-code"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${6 + Math.random() * 4}s`
            }}
          />
        ))}

        {/* Code network lines */}
        <svg className="absolute inset-0 w-full h-full opacity-10">
          <defs>
            <linearGradient id="codeLine" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="50%" stopColor="#9945ff" stopOpacity="0.6" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>
          {[...Array(8)].map((_, i) => (
            <line
              key={i}
              x1={`${10 + i * 12}%`}
              y1="10%"
              x2={`${15 + i * 10}%`}
              y2="90%"
              stroke="url(#codeLine)"
              strokeWidth="1"
              className="animate-pulse"
              style={{ animationDelay: `${i * 0.3}s` }}
            />
          ))}
        </svg>

        {/* Background developer text */}
        <div className="absolute inset-0 opacity-5">
          <div className="text-8xl font-black text-primary-400 absolute top-32 right-10 transform rotate-12 animate-pulse">BUILD</div>
        </div>
      </div>

      <Navbar />
      
      {/* Enhanced Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-dark-900 to-dark-800 relative">
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-8">
              <div className="flex items-center justify-center space-x-4 mb-6">
                <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-primary-400 to-transparent animate-pulse"></div>
                <div className="text-primary-400 text-sm font-bold uppercase tracking-[0.4em] animate-bounce">
                  DEVELOPER PLATFORM
                </div>
                <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-primary-400 to-transparent animate-pulse"></div>
              </div>
              
              <h1 className={`text-display-lg sm:text-display-xl lg:text-7xl font-black mb-6 transition-all duration-1000 ${isVisible ? 'animate-fade-up' : 'opacity-0 translate-y-20'}`}>
                <span className="relative inline-block">
                  <span className="text-white hover:text-gray-200 transition-colors duration-300">Build on</span>{' '}
                  <span className="bg-gradient-to-r from-primary-400 via-primary-500 to-secondary-500 bg-clip-text text-transparent animate-gradient-flow">
                    Solana
                  </span>
                  <div className="absolute -inset-2 bg-gradient-to-r from-primary-400/20 to-secondary-500/20 blur-xl animate-pulse" />
                </span>
              </h1>
            </div>
            
            <p className={`text-xl text-gray-300 mb-8 transition-all duration-1000 ${isVisible ? 'animate-fade-up animate-stagger-1' : 'opacity-0 translate-y-20'}`}>
              The fastest blockchain for developers. Build scalable apps with sub-second finality.
            </p>
            
            <div className={`flex flex-col sm:flex-row gap-6 justify-center transition-all duration-1000 ${isVisible ? 'animate-fade-up animate-stagger-2' : 'opacity-0 translate-y-20'}`}>
              <a href="https://docs.solana.com/developing/programming-model/overview" target="_blank" rel="noopener noreferrer" className="group relative bg-gradient-to-r from-primary-400 via-primary-500 to-primary-600 text-black font-black text-lg px-10 py-5 rounded-xl overflow-hidden transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-primary-400/25 transform-gpu">
                <span className="relative z-10">Get Started</span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary-300 to-primary-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute -inset-1 bg-gradient-to-r from-primary-400 to-primary-500 rounded-xl blur opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
              </a>
              <a href="https://solana.com/developers/tools" target="_blank" rel="noopener noreferrer" className="group relative border-2 border-primary-400 text-primary-400 font-bold text-lg px-10 py-5 rounded-xl overflow-hidden transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-primary-400/25 hover:bg-primary-400 hover:text-black transform-gpu">
                <span className="relative z-10">Browse Tools</span>
                <div className="absolute inset-0 bg-primary-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Getting Started */}
      <section id="getting-started" className="section-padding relative">
        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-display-md font-black mb-6">
              <span className="bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">Getting Started</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to start building on Solana
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "⚡",
                title: "Fast Development",
                description: "Build and deploy in minutes with our comprehensive tooling and documentation.",
                color: "from-yellow-400 to-orange-500"
              },
              {
                icon: "🔐",
                title: "Secure by Default",
                description: "Built-in security features and battle-tested frameworks keep your apps safe.",
                color: "from-blue-500 to-cyan-600"
              },
              {
                icon: "💰",
                title: "Low Cost",
                description: "Ultra-low transaction fees mean your users can actually afford to use your app.",
                color: "from-green-500 to-emerald-600"
              }
            ].map((feature, index) => (
              <div 
                key={feature.title}
                className={`group relative bg-gradient-to-br from-gray-900/90 via-black/90 to-gray-800/80 backdrop-blur-xl border border-gray-800 rounded-2xl p-8 text-center overflow-hidden hover:border-primary-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary-400/20 transform-gpu animate-fade-up`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-secondary-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <div className="relative mb-6">
                    <div className="text-6xl mb-4 relative z-10 group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
                    <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} rounded-full blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300`} />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-white group-hover:text-primary-300 transition-colors duration-300">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>
                
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary-400/10 to-secondary-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced SDKs */}
      <section className="section-padding bg-gradient-to-b from-dark-800 to-dark-900 relative">
        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-display-md font-black mb-6">
              <span className="bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">SDKs & Libraries</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Build in your favorite language
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {sdks.map((sdk, index) => (
              <div 
                key={sdk.name} 
                className={`group relative bg-gradient-to-br from-gray-900/90 via-black/90 to-gray-800/80 backdrop-blur-xl border border-gray-800 rounded-2xl p-8 overflow-hidden hover:border-primary-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary-400/20 transform-gpu animate-fade-up`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-secondary-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <div className="flex items-center mb-4">
                    <div className="relative">
                      <span className="text-4xl mr-4 group-hover:scale-125 transition-transform duration-300 relative z-10">{sdk.icon}</span>
                      <div className={`absolute inset-0 bg-gradient-to-r ${sdk.color} rounded-full blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white group-hover:text-primary-300 transition-colors duration-300">{sdk.language}</h3>
                      <p className="text-primary-400">{sdk.name}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-400 mb-1">Popularity</div>
                      <div className="text-lg font-bold bg-gradient-to-r from-primary-400 to-secondary-500 bg-clip-text text-transparent">
                        {sdk.popularity}%
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-400 mb-6 group-hover:text-gray-300 transition-colors duration-300">{sdk.description}</p>
                  
                  <div className="bg-dark-700/50 backdrop-blur-sm p-4 rounded-lg border border-gray-700/30">
                    <code className="text-primary-400 text-sm">{sdk.install}</code>
                  </div>
                  
                  {/* Popularity bar */}
                  <div className="mt-4 w-full bg-gray-800 rounded-full h-2 overflow-hidden">
                    <div 
                      className={`h-full bg-gradient-to-r ${sdk.color} transition-all duration-1000 group-hover:animate-pulse`}
                      style={{ width: `${sdk.popularity}%`, transitionDelay: `${index * 0.2}s` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Developer Tools */}
      <section id="tools" className="section-padding relative">
        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-display-md font-black mb-6">
              <span className="bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">Developer Tools</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Powerful tools to accelerate your development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map((tool, index) => (
              <div 
                key={tool.name}
                className={`group relative transition-all duration-1000 ${isVisible ? 'animate-fade-up' : 'opacity-0 translate-y-20'}`}
                style={{ animationDelay: `${index * 0.1}s` }}
                onMouseEnter={() => setActiveCategory(tool.category)}
                onMouseLeave={() => setActiveCategory(null)}
              >
                <Link href={tool.href} className="block">
                  <div className="relative bg-gradient-to-br from-gray-900/90 via-black/90 to-gray-800/80 backdrop-blur-xl border border-gray-800 rounded-2xl p-6 overflow-hidden hover:border-primary-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary-400/20 transform-gpu h-full">
                    
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-secondary-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Difficulty badge */}
                    <div className="absolute top-4 right-4">
                      <div className={`px-2 py-1 rounded-full text-xs font-bold ${
                        tool.difficulty === 'Beginner' ? 'bg-green-500/20 text-green-400' :
                        tool.difficulty === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-400' :
                        'bg-red-500/20 text-red-400'
                      }`}>
                        {tool.difficulty}
                      </div>
                    </div>
                    
                    <div className="relative z-10">
                      <div className="relative mb-4">
                        <div className="text-4xl mb-4 group-hover:scale-125 transition-transform duration-300 relative z-10">{tool.icon}</div>
                        <div className={`absolute inset-0 bg-gradient-to-r ${tool.color} rounded-full blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300`} />
                      </div>
                      
                      <div className="text-xs text-primary-400 font-semibold uppercase tracking-wider mb-2">
                        {tool.category}
                      </div>
                      <h3 className="text-lg font-bold mb-3 text-white group-hover:bg-gradient-to-r group-hover:from-primary-400 group-hover:to-secondary-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                        {tool.name}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                        {tool.description}
                      </p>
                    </div>
                    
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary-400/10 to-secondary-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse" />
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      

      {/* Enhanced Community Section */}
      <section className="section-padding relative">
        <div className="container-custom relative z-10">
          <div className="relative bg-gradient-to-r from-gray-900/90 via-black/90 to-gray-800/90 backdrop-blur-xl border border-gray-700 rounded-3xl p-12 text-center max-w-4xl mx-auto overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary-400/5 via-secondary-500/5 to-primary-400/5 animate-pulse" />
            
            <div className="relative z-10">
              <h2 className="text-2xl font-bold mb-4 text-white">Join the Developer Community</h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Connect with thousands of developers building the future of web3 on Solana.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a href="https://discord.gg/solana" target="_blank" rel="noopener noreferrer" className="group relative bg-gradient-to-r from-primary-400 via-primary-500 to-primary-600 text-black font-black text-lg px-8 py-4 rounded-xl overflow-hidden transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-primary-400/25 transform-gpu">
                  <span className="relative z-10">Join Discord</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-300 to-primary-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>
                <Link href="#" className="group relative border-2 border-primary-400 text-primary-400 font-bold text-lg px-8 py-4 rounded-xl overflow-hidden transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-primary-400/25 hover:bg-primary-400 hover:text-black transform-gpu">
                  <span className="relative z-10">Stack Overflow</span>
                  <div className="absolute inset-0 bg-primary-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* Advanced CSS for enhanced animations */}
      <style jsx>{`
        @keyframes float-code {
          0%, 100% { transform: translate(0, 0) rotate(0deg); opacity: 0.4; }
          25% { transform: translate(15px, -15px) rotate(90deg); opacity: 1; }
          50% { transform: translate(-10px, -25px) rotate(180deg); opacity: 0.6; }
          75% { transform: translate(-20px, -10px) rotate(270deg); opacity: 1; }
        }
        
        @keyframes gradient-flow {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        .animate-float-code { animation: float-code 8s ease-in-out infinite; }
        .animate-gradient-flow { animation: gradient-flow 4s ease infinite; background-size: 200% 200%; }
      `}</style>
    </main>
  )
} 