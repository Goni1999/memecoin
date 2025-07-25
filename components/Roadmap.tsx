'use client'

import React from 'react'

const Roadmap = () => {
  const roadmapPhases = [
    {
      period: "Q1-Q4 2024",
      version: "V1",
      title: "Foundation",
      character: "🚀",
      characterBg: "from-primary-400 to-primary-600",
      milestones: [
        "Smart Contract Development & Auditing",
        "Community Building & Social Presence",
        "Website Launch & DEX Listings",
        "First 1K Holders Milestone"
      ]
    },
    {
      period: "Q1-Q4 2025", 
      version: "V2",
      title: "Growth",
      character: "💎",
      characterBg: "from-purple-400 to-pink-600",
      milestones: [
        "Major CEX Listings (Binance, KuCoin)",
        "NFT Collection & Mobile App",
        "Cross-chain Bridge & Staking",
        "10K+ Holders Community"
      ]
    },
    {
      period: "Q1-Q4 2026",
      version: "V3", 
      title: "Ecosystem",
      character: "⚡",
      characterBg: "from-blue-400 to-cyan-600",
      milestones: [
        "SOLMEME DEX Platform Launch",
        "P2E Gaming & Metaverse",
        "DAO Governance Implementation",
        "100K+ Active Users"
      ]
    },
    {
      period: "Q1-Q2 2027",
      version: "V4",
      title: "Domination",
      character: "👑",
      characterBg: "from-secondary-400 to-primary-600",
      milestones: [
        "Global Exchange Listings",
        "Institutional Partnerships",
        "Payment Gateway & Compliance",
        "1M+ Holders Worldwide"
      ]
    }
  ]

  return (
    <section className="py-16 bg-gradient-to-b from-dark-900 to-black relative overflow-hidden">
      {/* Compact Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container-custom relative z-10">
        {/* Compact Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-4 animate-fade-up">
            Roadmap
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-400 to-primary-500 mx-auto rounded-full" />
        </div>

        {/* Compact Timeline Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {roadmapPhases.map((phase, index) => (
              <div
                key={phase.period}
                className="group animate-fade-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-xl border border-gray-700/50 rounded-xl p-6 shadow-xl hover:shadow-2xl hover:border-green-400/30 transition-all duration-500 hover:scale-105 relative overflow-hidden h-full">
                  
                  {/* Character Badge */}
                  <div className="flex items-center mb-4">
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${phase.characterBg} flex items-center justify-center text-2xl shadow-lg border-2 border-white/10 relative overflow-hidden mr-4`}>
                      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-full" />
                      <span className="relative z-10">{phase.character}</span>
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-primary-400 uppercase tracking-wider mb-1">
                        {phase.version}
                      </div>
                      <h3 className="text-xl font-black text-white">
                        {phase.period}
                      </h3>
                      <div className="text-lg font-bold bg-gradient-to-r from-primary-400 to-primary-500 bg-clip-text text-transparent">
                        {phase.title}
                      </div>
                    </div>
                  </div>

                  {/* Compact Milestones */}
                  <div className="space-y-2">
                    {phase.milestones.map((milestone, milestoneIndex) => (
                      <div
                        key={milestoneIndex}
                        className="flex items-start space-x-2 text-sm"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-primary-400 mt-2 flex-shrink-0 shadow-sm shadow-primary-400/50" />
                        <span className="text-gray-300 leading-relaxed">
                          {milestone}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Compact Progress */}
                  <div className="mt-4 pt-4 border-t border-gray-700/30">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs text-gray-400">Progress</span>
                      <span className="text-xs text-primary-400 font-bold">
                        {index === 0 ? '85%' : index === 1 ? '25%' : '0%'}
                      </span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-1.5">
                      <div 
                        className={`h-full bg-gradient-to-r ${phase.characterBg} transition-all duration-1000 rounded-full`}
                        style={{ width: index === 0 ? '85%' : index === 1 ? '25%' : '0%' }}
                      />
                    </div>
                  </div>

                  {/* Hover Effect */}
                  <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${phase.characterBg}/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Compact CTA */}
        <div className="text-center mt-12 animate-fade-up">
          <div className="bg-gradient-to-r from-gray-900/90 to-gray-800/90 backdrop-blur-xl border border-gray-700/50 rounded-xl p-6 max-w-xl mx-auto">
            <h3 className="text-xl font-bold mb-3 text-white">Join Our Journey</h3>
            <p className="text-gray-300 mb-4 text-sm">
              Be part of the most ambitious meme coin project on Solana.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={() => (window as any).openModal?.()}
                className="bg-gradient-to-r from-primary-400 to-primary-500 text-black font-bold py-3 px-6 rounded-lg hover:scale-105 transition-all duration-300 shadow-lg shadow-primary-400/25 text-sm"
              >
                Buy $SOLMEME
              </button>
              <button className="border border-green-400 text-green-400 hover:bg-green-400 hover:text-black font-bold py-3 px-6 rounded-lg transition-all duration-300 text-sm">
                Follow Updates
              </button>
            </div>
          </div>
        </div>

        {/* Compact Stats */}
        <div className="mt-12 grid grid-cols-4 gap-4">
          {[
            { value: '4', label: 'Phases', icon: '🚀' },
            { value: '16+', label: 'Milestones', icon: '🎯' },
            { value: '3Y', label: 'Timeline', icon: '⏰' },
            { value: '1M+', label: 'Target', icon: '👥' }
          ].map((stat, index) => (
            <div key={index} className="text-center group animate-fade-up">
              <div className="text-2xl mb-1">{stat.icon}</div>
                      <div className="text-xl font-black bg-gradient-to-r from-primary-400 to-primary-500 bg-clip-text text-transparent mb-1">
          {stat.value}
        </div>
              <div className="text-gray-400 text-xs">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Roadmap 