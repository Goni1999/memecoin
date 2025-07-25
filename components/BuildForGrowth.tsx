'use client'

import React from 'react'
import Link from 'next/link'

const BuildForGrowth = () => {
  const marketPotential = [
    {
      category: 'Crypto',
      value: '$50M+',
      label: 'users',
      color: 'from-primary-400 to-primary-600',
      borderColor: 'border-primary-400',
      description: 'Active DeFi traders and meme coin enthusiasts'
    },
    {
      category: 'Solana',
      value: '$75M+',
      label: 'users',
      color: 'from-purple-400 to-purple-600',
      borderColor: 'border-purple-400',
      description: 'Solana ecosystem participants and SOL holders'
    },
    {
      category: 'Memes & Culture',
      value: '$24M+',
      label: 'users',
      color: 'from-blue-400 to-blue-600',
      borderColor: 'border-blue-400',
      description: 'Meme culture enthusiasts and viral content creators'
    }
  ]

  const missionPoints = [
    {
      icon: '🚀',
      title: 'Crypto Users',
      description: '$SOLMEME is set to be the most decentralized predictions space. The fastest, most ruthless meme coin on Solana for the next 10 million users who want to exit their boring meme coins. We want zero 20% take fees plus Solana TPS for price per transaction.'
    },
    {
      icon: '⚡',
      title: 'Solana Fans',
      description: 'Provide the first-ever meme entertainment for the SOL Public. Picture DogX, MemeCoin, but instead of cats-and-dogs memes. Solana has millions & millions.'
    },
    {
      icon: '🎯',
      title: 'Memes & Culture Events',
      description: 'Capitalize on viral trends and cultural moments. Tap into Hollywood, Gaming, and Sports content, plus real-time Social Media triggers and viral meme moments.'
    }
  ]

  return (
    <section className="section-padding bg-gradient-to-b from-dark-800 to-dark-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-r from-primary-400/5 to-primary-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s', animationDelay: '2s' }} />
      </div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-black text-white mb-8 animate-fade-up">
            SOLANA MEME MARKET POTENTIAL, 2024
          </h2>
          
          {/* Market Potential Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {marketPotential.map((market, index) => (
              <div
                key={market.category}
                className={`bg-dark-900/80 backdrop-blur-sm border-2 ${market.borderColor} rounded-xl p-6 hover:scale-105 transition-all duration-300 animate-fade-up`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="text-center">
                  <div className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">
                    {market.category}
                  </div>
                  <div className={`text-4xl font-black bg-gradient-to-r ${market.color} bg-clip-text text-transparent mb-1`}>
                    {market.value}
                  </div>
                  <div className="text-gray-300 font-medium mb-3">{market.label}</div>
                  <div className="text-xs text-gray-400 leading-relaxed">
                    {market.description}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Free From Fees Banner */}
                  <div className="bg-gradient-to-r from-primary-400/20 to-primary-500/20 border border-primary-400/50 rounded-xl p-4 mb-16 animate-fade-up animate-stagger-3">
          <div className="text-primary-400 font-bold text-lg">
            FREE FROM 'TAKE 20%' PLATFORM FEES
          </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Our Mission */}
          <div className="animate-fade-up animate-stagger-4">
            <h3 className="text-2xl font-bold text-primary-400 mb-8">Our Mission</h3>
            
            <div className="space-y-8">
              {missionPoints.map((point, index) => (
                <div
                  key={point.title}
                  className="flex items-start space-x-4 animate-fade-up"
                  style={{ animationDelay: `${(index + 5) * 0.1}s` }}
                >
                  <div className="text-3xl">{point.icon}</div>
                  <div>
                    <h4 className="text-white font-bold text-lg mb-2">{point.title}</h4>
                    <p className="text-gray-300 leading-relaxed text-sm">
                      {point.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Visual Elements */}
          <div className="relative animate-fade-up animate-stagger-5">
            {/* Character Illustrations */}
            <div className="relative bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
              
              {/* $SOLMEME Logo/Characters */}
              <div className="text-center mb-8">
                <div className="text-6xl mb-4">🚀</div>
                <div className="text-4xl font-black bg-gradient-to-r from-primary-400 to-secondary-500 bg-clip-text text-transparent mb-2">
                  $SOLMEME
                </div>
                <div className="text-gray-400 text-sm">LAUNCHING ON SOLANA</div>
              </div>

              {/* Character Grid */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center">
                  <div className="text-4xl mb-2 animate-bounce" style={{ animationDelay: '0s' }}>💎</div>
                  <div className="text-xs text-gray-400">DIAMOND</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-2 animate-bounce" style={{ animationDelay: '0.5s' }}>🔥</div>
                  <div className="text-xs text-gray-400">PREMIUM</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-2 animate-bounce" style={{ animationDelay: '1s' }}>⚡</div>
                  <div className="text-xs text-gray-400">FAST</div>
                </div>
              </div>

              {/* Powered by Solana */}
              <div className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-400/50 rounded-xl p-4 text-center">
                <div className="flex items-center justify-center space-x-3 mb-2">
                  <div className="text-2xl">◎</div>
                  <div className="text-purple-400 font-bold">Powered by</div>
                </div>
                <div className="text-white font-black text-xl mb-2">Solana Blockchain</div>
                <div className="text-sm text-primary-400 font-semibold">
                  Perfect for Quick Mass Adoption
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20 animate-fade-up animate-stagger-6">
          <div className="bg-gradient-to-r from-gray-900/80 to-gray-800/80 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-white">Ready to Join the Solana Meme Revolution?</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Be part of the fastest-growing meme ecosystem on Solana. Zero platform fees, maximum innovation, instant transactions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://raydium.io/swap/?inputMint=sol&outputMint=x"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-primary-400 to-primary-500 text-black font-bold py-4 px-8 rounded-xl hover:scale-105 transition-all duration-300 shadow-lg shadow-primary-400/25"
              >
                Buy $SOLMEME Now
              </a>

            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: '400ms', label: 'Block Time', icon: '⚡' },
            { value: '$0.00025', label: 'Avg Fee', icon: '💰' },
            { value: '65,000+', label: 'TPS Capacity', icon: '🚀' },
            { value: '24/7', label: 'Always On', icon: '🌍' }
          ].map((stat, index) => (
            <div key={index} className="text-center group animate-fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">{stat.icon}</div>
              <div className="text-2xl font-black bg-gradient-to-r from-primary-400 to-primary-500 bg-clip-text text-transparent mb-1 group-hover:scale-110 transition-transform duration-300">
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BuildForGrowth 