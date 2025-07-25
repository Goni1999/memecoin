'use client'

import React, { useState, useEffect, useRef } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function Community() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const [activeTab, setActiveTab] = useState('overview')
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

  const communityStats = [
    { 
      value: '69.4K', 
      label: 'Discord Members', 
      icon: '💬', 
      color: 'from-primary-400 to-primary-600',
      description: 'Active community discussions'
    },
    { 
      value: '42.0K', 
      label: 'Twitter Followers', 
      icon: '🐦', 
      color: 'from-secondary-400 to-secondary-600',
      description: 'Meme lords and enthusiasts'
    },
    { 
      value: '13.37K', 
      label: 'Diamond Hands', 
      icon: '💎', 
      color: 'from-primary-500 to-secondary-500',
      description: 'Long-term believers'
    },
    { 
      value: '8.88K', 
      label: 'NFT Holders', 
      icon: '🎨', 
      color: 'from-secondary-500 to-primary-600',
      description: 'Unique digital collectibles'
    }
  ]

  const communityChannels = [
    {
      name: 'Discord',
      description: 'Join our vibrant community for daily discussions, memes, and alpha',
      icon: '💬',
      href: '#',
      color: 'from-primary-500 to-primary-600',
      features: ['Daily Giveaways', 'Alpha Channels', 'Meme Contests', 'Community Events']
    },
    {
      name: 'Twitter',
      description: 'Follow for the latest updates, memes, and community highlights',
      icon: '🐦',
      href: '#',
      color: 'from-secondary-400 to-secondary-600',
      features: ['Breaking News', 'Meme Gallery', 'Community Spotlights', 'Live Updates']
    },
    {
      name: 'Telegram',
      description: 'Fast-paced chat for quick discussions and real-time updates',
      icon: '⚡',
      href: '#',
      color: 'from-primary-400 to-secondary-500',
      features: ['Real-time Chat', 'Price Alerts', 'Quick Support', 'Community Tips']
    },
    {
      name: 'Reddit',
      description: 'Deep discussions, analysis, and community-driven content',
      icon: '🗣️',
      href: '#',
      color: 'from-secondary-500 to-primary-500',
      features: ['Long-form Posts', 'Technical Analysis', 'Community Polls', 'Educational Content']
    }
  ]

  const upcomingEvents = [
    {
      title: 'SOLMEME Meme Contest',
      date: 'March 15, 2024',
      time: '18:00 UTC',
      prize: '10,000 $SMEME',
      type: 'Contest',
      description: 'Create the best SOLMEME meme and win amazing prizes!'
    },
    {
      title: 'Community AMA',
      date: 'March 22, 2024',
      time: '20:00 UTC',
      prize: 'Exclusive NFT',
      type: 'AMA',
      description: 'Ask the team anything about SOLMEME\'s future roadmap'
    },
    {
      title: 'Diamond Hands Celebration',
      date: 'March 30, 2024',
      time: '19:00 UTC',
      prize: '50K $SMEME Pool',
      type: 'Celebration',
      description: 'Celebrating our strongest community members with rewards'
    }
  ]

  const teamMembers = [
    {
      name: 'SolWojak',
      role: 'Chief Meme Officer',
      avatar: '😎',
      description: 'The mastermind behind SOLMEME\'s epic meme strategy',
      social: { twitter: '#', discord: '#' }
    },
    {
      name: 'Luna Doge',
      role: 'Community Manager',
      avatar: '🐕',
      description: 'Keeping the community together with wholesome vibes',
      social: { twitter: '#', discord: '#' }
    },
    {
      name: 'Chad Sol',
      role: 'Technical Lead',
      avatar: '💪',
      description: 'Building the future of memes on Solana blockchain',
      social: { twitter: '#', discord: '#' }
    },
    {
      name: 'Pepe Sol',
      role: 'Creative Director',
      avatar: '🐸',
      description: 'Creating the most epic memes in the Solana ecosystem',
      social: { twitter: '#', discord: '#' }
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

        {/* Floating community particles */}
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

        {/* Community network lines */}
        <svg className="absolute inset-0 w-full h-full opacity-10">
          <defs>
            <linearGradient id="communityLine" x1="0%" y1="0%" x2="100%" y2="100%">
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
              stroke="url(#communityLine)"
              strokeWidth="0.5"
              className="animate-pulse"
              style={{ animationDelay: `${i * 0.3}s` }}
            />
          ))}
        </svg>

        {/* Background community icons */}
        <div className="absolute inset-0 opacity-5">
          <div className="text-9xl font-black text-primary-400 absolute top-32 right-10 transform rotate-12 animate-pulse">COMMUNITY</div>
          <div className="text-6xl absolute bottom-32 left-10 animate-bounce">💎</div>
          <div className="text-4xl absolute top-64 left-1/4 animate-pulse">🚀</div>
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
                  POWERED BY COMMUNITY
                </div>
                <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-primary-400 to-transparent animate-pulse"></div>
              </div>
              
              <h1 className={`text-display-lg sm:text-display-xl lg:text-7xl font-black mb-6 transition-all duration-1000 ${isVisible ? 'animate-fade-up' : 'opacity-0 translate-y-20'}`}>
                <span className="relative inline-block">
                  <span className="text-white hover:text-gray-200 transition-colors duration-300">Join the</span>{' '}
                  <span className="bg-gradient-to-r from-primary-400 via-primary-500 to-secondary-500 bg-clip-text text-transparent animate-gradient-flow">
                    SOLMEME
                  </span>
                  <div className="absolute -inset-2 bg-gradient-to-r from-primary-400/20 to-secondary-500/20 blur-xl animate-pulse" />
                </span>
                <br />
                <span className="text-white">Community</span>
              </h1>
            </div>
            
            <p className={`text-xl text-gray-300 mb-8 max-w-3xl mx-auto transition-all duration-1000 ${isVisible ? 'animate-fade-up animate-stagger-1' : 'opacity-0 translate-y-20'}`}>
              Where memes meet innovation, and diamond hands unite. Join thousands of SOL enthusiasts building the future of meme culture.
            </p>
            
            <div className={`flex flex-col sm:flex-row gap-6 justify-center transition-all duration-1000 ${isVisible ? 'animate-fade-up animate-stagger-2' : 'opacity-0 translate-y-20'}`}>
              <a href="https://discord.gg/solana" target="_blank" rel="noopener noreferrer" className="group relative bg-gradient-to-r from-primary-400 via-primary-500 to-primary-600 text-black font-black text-lg px-10 py-5 rounded-xl overflow-hidden transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-primary-400/25 transform-gpu">
                <span className="relative z-10">Join Discord</span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary-300 to-primary-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
              <Link href="#stats" className="group relative border-2 border-primary-400 text-primary-400 font-bold text-lg px-10 py-5 rounded-xl overflow-hidden transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-primary-400/25 hover:bg-primary-400 hover:text-black transform-gpu">
                <span className="relative z-10">View Stats</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      

      {/* Community Channels */}
      <section id="join" className="section-padding bg-gradient-to-b from-dark-800 to-dark-900 relative">
        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-display-md font-black mb-6">
              <span className="bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">Join Our Channels</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Connect with us across all platforms and never miss the memes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {communityChannels.map((channel, index) => (
              <div 
                key={channel.name}
                className={`group relative bg-gradient-to-br from-gray-900/90 via-black/90 to-gray-800/80 backdrop-blur-xl border border-gray-800 rounded-2xl p-8 overflow-hidden hover:border-primary-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary-400/20 transform-gpu animate-fade-up`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Link href={channel.href} className="block">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-secondary-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10">
                    <div className="flex items-center mb-6">
                      <div className="relative">
                        <span className="text-5xl mr-6 group-hover:scale-125 transition-transform duration-300 relative z-10">{channel.icon}</span>
                        <div className={`absolute inset-0 bg-gradient-to-r ${channel.color} rounded-full blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300`} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-white group-hover:bg-gradient-to-r group-hover:from-primary-400 group-hover:to-secondary-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                          {channel.name}
                        </h3>
                      </div>
                    </div>
                    
                    <p className="text-gray-400 mb-6 group-hover:text-gray-300 transition-colors duration-300">
                      {channel.description}
                    </p>
                    
                    <div className="space-y-2">
                      {channel.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-400 group-hover:text-gray-300">
                          <div className="w-2 h-2 bg-primary-400 rounded-full mr-3 opacity-70" />
                          {feature}
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-6 pt-4 border-t border-gray-700/30">
                      <div className="bg-gradient-to-r from-primary-400 to-secondary-500 text-black font-bold py-3 px-6 rounded-lg text-center transition-all duration-300 group-hover:shadow-lg group-hover:shadow-primary-400/25">
                        Join {channel.name}
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="section-padding relative">
        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-display-md font-black mb-6">
              <span className="bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">Upcoming Events</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Don't miss out on exclusive community events and rewards
            </p>
          </div>

          <div className="space-y-6">
            {upcomingEvents.map((event, index) => (
              <div 
                key={event.title}
                className={`group relative bg-gradient-to-br from-gray-900/90 via-black/90 to-gray-800/80 backdrop-blur-xl border border-gray-800 rounded-2xl p-8 overflow-hidden hover:border-primary-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary-400/20 transform-gpu animate-fade-up`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-secondary-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex-1 lg:mr-8">
                    <div className="flex items-center mb-4">
                      <div className="bg-gradient-to-r from-primary-400/20 to-secondary-500/20 border border-primary-400/30 rounded-lg px-3 py-1 mr-4">
                        <span className="text-xs text-primary-400 font-bold">{event.type}</span>
                      </div>
                      <div className="text-primary-400 font-bold">{event.prize}</div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:bg-gradient-to-r group-hover:from-primary-400 group-hover:to-secondary-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                      {event.title}
                    </h3>
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                      {event.description}
                    </p>
                  </div>
                  
                  <div className="lg:text-right mt-6 lg:mt-0">
                    <div className="text-lg font-bold text-white mb-1">{event.date}</div>
                    <div className="text-primary-400 font-semibold">{event.time}</div>
                    <div className="mt-4">
                      
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-gradient-to-b from-dark-800 to-dark-900 relative">
        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-display-md font-black mb-6">
              <span className="bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">Meet The Team</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The legendary meme masters behind SOLMEME
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={member.name}
                className={`group relative bg-gradient-to-br from-gray-900/90 via-black/90 to-gray-800/80 backdrop-blur-xl border border-gray-800 rounded-2xl p-8 text-center overflow-hidden hover:border-primary-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary-400/20 transform-gpu animate-fade-up`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-secondary-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <div className="relative mb-6">
                    <div className="text-6xl mb-4 group-hover:scale-125 transition-transform duration-300 relative z-10">{member.avatar}</div>
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-400/20 to-secondary-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:bg-gradient-to-r group-hover:from-primary-400 group-hover:to-secondary-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                    {member.name}
                  </h3>
                  <div className="text-primary-400 font-semibold mb-4">{member.role}</div>
                  <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    {member.description}
                  </p>
                  
                  <div className="flex justify-center space-x-4 mt-6">
                    <Link href={member.social.twitter} className="text-primary-400 hover:text-primary-300 transition-colors">
                      <span className="text-lg">🐦</span>
                    </Link>
                    <Link href={member.social.discord} className="text-primary-400 hover:text-primary-300 transition-colors">
                      <span className="text-lg">💬</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
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