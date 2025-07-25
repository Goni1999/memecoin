'use client'

import React, { useState, useEffect, useRef } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function Learn() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const [activeCategory, setActiveCategory] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')
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

  const learningPaths = [
    {
      title: 'SOLMEME Basics',
      description: 'Learn the fundamentals of SOLMEME ecosystem',
      icon: '🚀',
      difficulty: 'Beginner',
      duration: '2 hours',
      lessons: 8,
      color: 'from-primary-400 to-primary-600',
      topics: ['What is SOLMEME?', 'Tokenomics', 'Community', 'Getting Started']
    },
    {
      title: 'Solana Fundamentals',
      description: 'Understanding the Solana blockchain technology',
      icon: '⚡',
      difficulty: 'Beginner',
      duration: '4 hours',
      lessons: 12,
      color: 'from-secondary-400 to-secondary-600',
      topics: ['Blockchain Basics', 'Solana Architecture', 'Proof of History', 'Smart Contracts']
    },
    {
      title: 'DeFi on Solana',
      description: 'Decentralized Finance concepts and protocols',
      icon: '💰',
      difficulty: 'Intermediate',
      duration: '6 hours',
      lessons: 15,
      color: 'from-primary-500 to-secondary-500',
      topics: ['AMMs', 'Lending', 'Yield Farming', 'DEX Trading']
    },
    {
      title: 'NFTs & Metaplex',
      description: 'Creating and trading NFTs on Solana',
      icon: '🎨',
      difficulty: 'Intermediate',
      duration: '3 hours',
      lessons: 10,
      color: 'from-secondary-500 to-primary-600',
      topics: ['NFT Standards', 'Minting', 'Marketplaces', 'Royalties']
    }
  ]

  const tutorials = [
    {
      title: 'How to Buy SOLMEME',
      description: 'Step-by-step guide to purchasing SOLMEME tokens',
      category: 'getting-started',
      difficulty: 'Beginner',
      duration: '10 min',
      icon: '💳',
      views: '45.2K',
      rating: 4.9
    },
    {
      title: 'Setting Up Phantom Wallet',
      description: 'Complete guide to creating and securing your wallet',
      category: 'wallets',
      difficulty: 'Beginner',
      duration: '15 min',
      icon: '👻',
      views: '38.7K',
      rating: 4.8
    },
    {
      title: 'Staking SOLMEME for Rewards',
      description: 'Earn passive income by staking your tokens',
      category: 'defi',
      difficulty: 'Intermediate',
      duration: '20 min',
      icon: '🏦',
      views: '29.1K',
      rating: 4.7
    },
    {
      title: 'Creating SOLMEME Memes',
      description: 'How to participate in meme contests and earn rewards',
      category: 'community',
      difficulty: 'Beginner',
      duration: '12 min',
      icon: '🎭',
      views: '52.3K',
      rating: 4.9
    },
    {
      title: 'Advanced Trading Strategies',
      description: 'Professional trading techniques for SOLMEME',
      category: 'trading',
      difficulty: 'Advanced',
      duration: '35 min',
      icon: '📈',
      views: '18.4K',
      rating: 4.6
    },
    {
      title: 'Building with Solana Web3.js',
      description: 'Develop applications that interact with SOLMEME',
      category: 'development',
      difficulty: 'Advanced',
      duration: '60 min',
      icon: '💻',
      views: '12.8K',
      rating: 4.8
    }
  ]

  const categories = [
    { id: 'all', name: 'All Topics', count: tutorials.length },
    { id: 'getting-started', name: 'Getting Started', count: tutorials.filter(t => t.category === 'getting-started').length },
    { id: 'wallets', name: 'Wallets', count: tutorials.filter(t => t.category === 'wallets').length },
    { id: 'defi', name: 'DeFi', count: tutorials.filter(t => t.category === 'defi').length },
    { id: 'trading', name: 'Trading', count: tutorials.filter(t => t.category === 'trading').length },
    { id: 'community', name: 'Community', count: tutorials.filter(t => t.category === 'community').length },
    { id: 'development', name: 'Development', count: tutorials.filter(t => t.category === 'development').length }
  ]

  const filteredTutorials = tutorials.filter(tutorial => {
    const matchesCategory = activeCategory === 'all' || tutorial.category === activeCategory
    const matchesSearch = tutorial.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tutorial.description.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const resources = [
    {
      title: 'SOLMEME Whitepaper',
      description: 'Complete technical documentation',
      icon: '📄',
      href: '/whitepaper',
      type: 'Document'
    },
    {
      title: 'API Documentation',
      description: 'Developer resources and endpoints',
      icon: '🔗',
      href: '#',
      type: 'API'
    },
    {
      title: 'Community Discord',
      description: 'Get help from other learners',
      icon: '💬',
      href: '#',
      type: 'Community'
    },
    {
      title: 'Video Tutorials',
      description: 'Visual learning content',
      icon: '🎥',
      href: '#',
      type: 'Video'
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
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(153, 69, 255, 0.1) 0%, transparent 50%)`
          }}
        />

        {/* Floating learning particles */}
        {[...Array(25)].map((_, i) => (
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

        {/* Knowledge network lines */}
        <svg className="absolute inset-0 w-full h-full opacity-10">
          <defs>
            <linearGradient id="knowledgeLine" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="50%" stopColor="#9945ff" stopOpacity="0.6" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>
          {[...Array(10)].map((_, i) => (
            <line
              key={i}
              x1={`${10 + i * 9}%`}
              y1="10%"
              x2={`${15 + i * 8}%`}
              y2="90%"
              stroke="url(#knowledgeLine)"
              strokeWidth="0.5"
              className="animate-pulse"
              style={{ animationDelay: `${i * 0.3}s` }}
            />
          ))}
        </svg>

        {/* Background educational icons */}
        <div className="absolute inset-0 opacity-5">
          <div className="text-8xl font-black text-primary-400 absolute top-32 right-10 transform rotate-12 animate-pulse">LEARN</div>
          <div className="text-5xl absolute bottom-32 left-10 animate-bounce">📚</div>
          <div className="text-3xl absolute top-64 left-1/3 animate-pulse">🧠</div>
          <div className="text-4xl absolute bottom-64 right-1/4 animate-bounce">💡</div>
        </div>
      </div>

      <Navbar />
      
      {/* Enhanced Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-dark-900 to-dark-800 relative">
        <div className="container-custom relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-block mb-8">
              <div className="flex items-center justify-center space-x-4 mb-6">
                <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-primary-400 to-transparent animate-pulse"></div>
                <div className="text-primary-400 text-sm font-bold uppercase tracking-[0.4em] animate-bounce">
                  EDUCATION CENTER
                </div>
                <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-primary-400 to-transparent animate-pulse"></div>
              </div>
              
              <h1 className={`text-display-lg sm:text-display-xl lg:text-7xl font-black mb-6 transition-all duration-1000 ${isVisible ? 'animate-fade-up' : 'opacity-0 translate-y-20'}`}>
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-primary-400 via-primary-500 to-secondary-500 bg-clip-text text-transparent animate-gradient-flow">
                    Master
                  </span>
                  <div className="absolute -inset-2 bg-gradient-to-r from-primary-400/20 to-secondary-500/20 blur-xl animate-pulse" />
                </span>
                <br />
                <span className="text-white">SOLMEME & Solana</span>
              </h1>
            </div>
            
            <p className={`text-xl text-gray-300 mb-8 max-w-3xl mx-auto transition-all duration-1000 ${isVisible ? 'animate-fade-up animate-stagger-1' : 'opacity-0 translate-y-20'}`}>
              From meme basics to advanced DeFi strategies. Learn everything you need to become a SOLMEME expert.
            </p>
            
            <div className={`flex flex-col sm:flex-row gap-6 justify-center transition-all duration-1000 ${isVisible ? 'animate-fade-up animate-stagger-2' : 'opacity-0 translate-y-20'}`}>
              <a href="https://soldev.app" target="_blank" rel="noopener noreferrer" className="group relative bg-gradient-to-r from-primary-400 via-primary-500 to-primary-600 text-black font-black text-lg px-10 py-5 rounded-xl overflow-hidden transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-primary-400/25 transform-gpu">
                <span className="relative z-10">Start Learning</span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary-300 to-primary-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
              <a href="https://docs.solana.com/introduction" target="_blank" rel="noopener noreferrer" className="group relative border-2 border-primary-400 text-primary-400 font-bold text-lg px-10 py-5 rounded-xl overflow-hidden transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-primary-400/25 hover:bg-primary-400 hover:text-black transform-gpu">
                                <span className="relative z-10">Browse Tutorials</span>
                </a>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Paths */}
      <section id="paths" className="section-padding relative">
        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-display-md font-black mb-6">
              <span className="bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">Learning Paths</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Structured courses designed to take you from beginner to expert
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {learningPaths.map((path, index) => (
              <div 
                key={path.title}
                className={`group relative bg-gradient-to-br from-gray-900/90 via-black/90 to-gray-800/80 backdrop-blur-xl border border-gray-800 rounded-2xl p-8 overflow-hidden hover:border-primary-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary-400/20 transform-gpu animate-fade-up`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-secondary-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-6">
                    <div className="relative">
                      <span className="text-5xl group-hover:scale-125 transition-transform duration-300 relative z-10">{path.icon}</span>
                      <div className={`absolute inset-0 bg-gradient-to-r ${path.color} rounded-full blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300`} />
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className={`px-3 py-1 rounded-full text-xs font-bold ${
                        path.difficulty === 'Beginner' ? 'bg-green-500/20 text-green-400' :
                        path.difficulty === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-400' :
                        'bg-red-500/20 text-red-400'
                      }`}>
                        {path.difficulty}
                      </div>
                      <span className="text-sm text-gray-400">{path.duration}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:bg-gradient-to-r group-hover:from-primary-400 group-hover:to-secondary-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                    {path.title}
                  </h3>
                  <p className="text-gray-400 mb-6 group-hover:text-gray-300 transition-colors duration-300">
                    {path.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-6">
                    <div className="flex items-center space-x-4">
                      <span>⏱️ {path.duration}</span>
                      <span>📚 {path.lessons} lessons</span>
                    </div>
                  </div>
                  
                  <div className="space-y-2 mb-6">
                    <div className="text-sm font-semibold text-primary-400 mb-2">What you'll learn:</div>
                    {path.topics.map((topic, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-400 group-hover:text-gray-300">
                        <div className="w-1.5 h-1.5 bg-primary-400 rounded-full mr-3 opacity-70" />
                        {topic}
                      </div>
                    ))}
                  </div>
                  
                 
                </div>
                
                {/* Progress indicator */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-800 rounded-b-2xl overflow-hidden">
                  <div 
                    className={`h-full bg-gradient-to-r ${path.color} transition-all duration-1000 group-hover:animate-pulse`}
                    style={{ width: '0%', transitionDelay: `${index * 0.2}s` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tutorial Search & Filter */}
      <section id="tutorials" className="section-padding bg-gradient-to-b from-dark-800 to-dark-900 relative">
        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-display-md font-black mb-6">
              <span className="bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">Tutorials & Guides</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Step-by-step tutorials to help you master specific skills
            </p>
          </div>

          {/* Search and Filter */}
          <div className="mb-12">
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search tutorials..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-6 py-4 bg-gray-900/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent backdrop-blur-sm"
                />
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-primary-400">
                  🔍
                </div>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-3">
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
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>

          {/* Tutorials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTutorials.map((tutorial, index) => (
              <div 
                key={tutorial.title}
                className={`group relative bg-gradient-to-br from-gray-900/90 via-black/90 to-gray-800/80 backdrop-blur-xl border border-gray-800 rounded-2xl p-6 overflow-hidden hover:border-primary-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary-400/20 transform-gpu animate-fade-up`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-secondary-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <div className="relative">
                      <span className="text-4xl group-hover:scale-125 transition-transform duration-300 relative z-10">{tutorial.icon}</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-primary-400/20 to-secondary-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <div className="flex flex-col gap-2 items-end">
                      <div className={`px-2 py-1 rounded-full text-xs font-bold ${
                        tutorial.difficulty === 'Beginner' ? 'bg-green-500/20 text-green-400' :
                        tutorial.difficulty === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-400' :
                        'bg-red-500/20 text-red-400'
                      }`}>
                        {tutorial.difficulty}
                      </div>
                      <div className="text-xs text-gray-400">{tutorial.duration}</div>
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:bg-gradient-to-r group-hover:from-primary-400 group-hover:to-secondary-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                    {tutorial.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 group-hover:text-gray-300 transition-colors duration-300">
                    {tutorial.description}
                  </p>
                  
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-3 text-xs text-gray-400">
                      <span>👁️ {tutorial.views}</span>
                      <span>⭐ {tutorial.rating}</span>
                    </div>
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-primary-400/20 to-secondary-500/20 border border-primary-400/30 text-primary-400 font-bold py-3 px-6 rounded-lg transition-all duration-300 hover:bg-gradient-to-r hover:from-primary-400 hover:to-secondary-500 hover:text-black group-hover:shadow-lg group-hover:shadow-primary-400/25">
                    Start Tutorial
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredTutorials.length === 0 && (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-bold text-gray-400 mb-2">No tutorials found</h3>
              <p className="text-gray-500">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </section>

      {/* Additional Resources */}
      <section className="section-padding relative">
        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-display-md font-black mb-6">
              <span className="bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">Additional Resources</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              More ways to expand your knowledge and connect with the community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {resources.map((resource, index) => (
              <Link 
                key={resource.title}
                href={resource.href}
                className={`group relative bg-gradient-to-br from-gray-900/90 via-black/90 to-gray-800/80 backdrop-blur-xl border border-gray-800 rounded-2xl p-6 text-center overflow-hidden hover:border-primary-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary-400/20 transform-gpu animate-fade-up`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-secondary-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <div className="relative mb-4">
                    <div className="text-4xl group-hover:scale-125 transition-transform duration-300 relative z-10">{resource.icon}</div>
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-400/20 to-secondary-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  
                  <div className="bg-gradient-to-r from-primary-400/20 to-secondary-500/20 border border-primary-400/30 rounded-lg px-3 py-1 mb-4 inline-block">
                    <span className="text-xs text-primary-400 font-bold">{resource.type}</span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:bg-gradient-to-r group-hover:from-primary-400 group-hover:to-secondary-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                    {resource.title}
                  </h3>
                  <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">
                    {resource.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-gradient-to-b from-dark-800 to-dark-900 relative">
        <div className="container-custom relative z-10">
          <div className="relative bg-gradient-to-r from-gray-900/90 via-black/90 to-gray-800/90 backdrop-blur-xl border border-gray-700 rounded-3xl p-12 text-center max-w-4xl mx-auto overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary-400/5 via-secondary-500/5 to-primary-400/5 animate-pulse" />
            
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-4 text-white">Ready to Become a SOLMEME Expert?</h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Join thousands of learners mastering the art of meme economics and Solana development.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link href="#paths" className="group relative bg-gradient-to-r from-primary-400 via-primary-500 to-primary-600 text-black font-black text-lg px-8 py-4 rounded-xl overflow-hidden transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-primary-400/25 transform-gpu">
                  <span className="relative z-10">Start Your Journey</span>
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