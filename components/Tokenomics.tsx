'use client'

import React, { useState, useEffect } from 'react'

const Tokenomics = () => {
  const [activeTab, setActiveTab] = useState('distribution')
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const tokenDistribution = [
    { 
      label: 'Pre-sale round', 
      percentage: 35.00, 
      color: '#FF6B9D', 
      gradientFrom: '#FF6B9D', 
      gradientTo: '#C44569',
      description: 'Early investor allocation with strategic partnerships'
    },
    { 
      label: 'Liquidity & listings', 
      percentage: 15.00, 
      color: '#FF8A65', 
      gradientFrom: '#FF8A65', 
      gradientTo: '#FF7043',
      description: 'DEX liquidity pools and exchange listings'
    },
    { 
      label: 'Treasury', 
      percentage: 15.00, 
      color: '#4FC3F7', 
      gradientFrom: '#4FC3F7', 
      gradientTo: '#29B6F6',
      description: 'Long-term ecosystem development fund'
    },
    { 
      label: 'Marketing', 
      percentage: 10.00, 
      color: '#81C784', 
      gradientFrom: '#81C784', 
      gradientTo: '#66BB6A',
      description: 'Brand awareness and community growth'
    },
    { 
      label: 'Community Rewards', 
      percentage: 15.00, 
      color: '#A855F7', 
      gradientFrom: '#A855F7', 
      gradientTo: '#9333EA',
      description: 'Ecosystem incentives and governance rewards'
    },
    { 
      label: 'Team', 
      percentage: 10.00, 
      color: '#F06292', 
      gradientFrom: '#F06292', 
      gradientTo: '#EC407A',
      description: 'Core team allocation with vesting schedule'
    }
  ]

  const vestingSchedule = [
    { 
      label: 'Pre-sale Tokens', 
      period: '25% TGE, 75% over 6 months',
      icon: '🚀',
      details: 'Immediate partial unlock with gradual release'
    },
    { 
      label: 'Team Allocation', 
      period: '12 month cliff, 24 month linear',
      icon: '👥',
      details: 'Long-term commitment with delayed vesting'
    },
    { 
      label: 'Liquidity Pools', 
      period: 'Immediate unlock at TGE',
      icon: '💧',
      details: 'Full liquidity available at token launch'
    },
    { 
      label: 'Marketing Fund', 
      period: '10% monthly over 10 months',
      icon: '📢',
      details: 'Steady marketing budget distribution'
    },
    { 
      label: 'Treasury', 
      period: '6 month cliff, 18 month linear',
      icon: '🏛️',
      details: 'Strategic reserves for long-term growth'
    },
    { 
      label: 'Community Rewards', 
      period: 'Distributed over 24 months',
      icon: '🎁',
      details: 'Sustainable community incentive program'
    }
  ]

  // Calculate cumulative percentages for the donut chart
  let cumulativePercentage = 0
  const chartData = tokenDistribution.map(item => {
    const startAngle = cumulativePercentage * 3.6
    cumulativePercentage += item.percentage
    const endAngle = cumulativePercentage * 3.6
    return {
      ...item,
      startAngle,
      endAngle
    }
  })

  const createArcPath = (centerX: number, centerY: number, radius: number, startAngle: number, endAngle: number) => {
    const start = polarToCartesian(centerX, centerY, radius, endAngle)
    const end = polarToCartesian(centerX, centerY, radius, startAngle)
    const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1"
    
    return [
      "M", start.x, start.y, 
      "A", radius, radius, 0, largeArcFlag, 0, end.x, end.y
    ].join(" ")
  }

  const polarToCartesian = (centerX: number, centerY: number, radius: number, angleInDegrees: number) => {
    const angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0
    return {
      x: centerX + (radius * Math.cos(angleInRadians)),
      y: centerY + (radius * Math.sin(angleInRadians))
    }
  }

  return (
    <section className="section-padding bg-gradient-to-b from-black via-dark-900 to-dark-800 relative overflow-hidden">
      {/* Elegant Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating orbs */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s', animationDelay: '2s' }} />
        
        {/* Elegant background text */}
        <div className="absolute top-0 left-0 w-full h-full opacity-3">
          <div className="text-8xl lg:text-9xl font-black bg-gradient-to-r from-primary-400/20 to-primary-500/20 bg-clip-text text-transparent absolute top-20 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
            TOKENOMICS
          </div>
        </div>
      </div>

      <div className="container-custom relative z-10">
        {/* Elegant Section Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <div className="text-sm font-semibold text-primary-400 uppercase tracking-[0.2em] mb-4 animate-fade-up">
              Token Economics
            </div>
            <h2 className="text-4xl lg:text-6xl font-black bg-gradient-to-r from-white via-gray-200 to-primary-400 bg-clip-text text-transparent animate-fade-up animate-stagger-1">
              $SOLMEME Tokenomics
            </h2>
          </div>

          {/* Refined Tabs */}
          <div className="flex justify-center mb-16 animate-fade-up animate-stagger-2">
            <div className="bg-gradient-to-r from-gray-900/80 to-gray-800/80 backdrop-blur-xl rounded-2xl p-1 border border-gray-700/50 shadow-2xl">
              <div className="flex">
                <button
                  onClick={() => setActiveTab('distribution')}
                  className={`relative px-8 py-4 rounded-xl font-semibold transition-all duration-500 ${
                    activeTab === 'distribution'
                      ? 'bg-gradient-to-r from-primary-400 to-primary-500 text-black shadow-lg shadow-primary-400/25'
                      : 'text-gray-400 hover:text-primary-400 hover:bg-gray-800/50'
                  }`}
                >
                  <span className="relative z-10">Token Distribution</span>
                  {activeTab === 'distribution' && (
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-400/20 to-primary-500/20 rounded-xl animate-pulse" />
                  )}
                </button>
                <button
                  onClick={() => setActiveTab('vesting')}
                  className={`relative px-8 py-4 rounded-xl font-semibold transition-all duration-500 ${
                    activeTab === 'vesting'
                      ? 'bg-gradient-to-r from-primary-400 to-primary-500 text-black shadow-lg shadow-primary-400/25'
                      : 'text-gray-400 hover:text-primary-400 hover:bg-gray-800/50'
                  }`}
                >
                  <span className="relative z-10">Vesting Schedule</span>
                  {activeTab === 'vesting' && (
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-400/20 to-primary-500/20 rounded-xl animate-pulse" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        {activeTab === 'distribution' ? (
          <div className="max-w-7xl mx-auto">
            {/* Elegant Chart Container */}
            <div className="relative flex justify-center items-center min-h-[700px] mb-16">
              
              {/* Premium Donut Chart */}
              <div className="relative">
                <svg width="500" height="500" viewBox="0 0 500 500" className="drop-shadow-2xl">
                  {/* Gradient Definitions */}
                  <defs>
                    {chartData.map((segment, index) => (
                      <linearGradient key={`gradient-${index}`} id={`gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor={segment.gradientFrom} />
                        <stop offset="100%" stopColor={segment.gradientTo} />
                      </linearGradient>
                    ))}
                    
                    {/* Elegant glow filter */}
                    <filter id="elegantGlow" x="-50%" y="-50%" width="200%" height="200%">
                      <feGaussianBlur stdDeviation="6" result="coloredBlur"/>
                      <feMerge> 
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                      </feMerge>
                    </filter>

                    {/* Inner shadow */}
                    <filter id="innerShadow">
                      <feOffset dx="0" dy="2"/>
                      <feGaussianBlur stdDeviation="3"/>
                      <feComposite operator="out" in2="SourceGraphic"/>
                      <feFlood floodColor="#000000" floodOpacity="0.3"/>
                      <feComposite operator="atop"/>
                      <feMerge> 
                        <feMergeNode/>
                        <feMergeNode in="SourceGraphic"/>
                      </feMerge>
                    </filter>
                  </defs>
                  
                  {/* Outer decorative ring */}
                  <circle cx="250" cy="250" r="180" fill="none" stroke="url(#gradient-0)" strokeWidth="1" opacity="0.3" className="animate-spin" style={{ animationDuration: '20s' }} />
                  
                  {/* Chart segments with enhanced styling */}
                  {chartData.map((segment, index) => (
                    <g key={index} className="group">
                      {/* Main segment */}
                      <path
                        d={createArcPath(250, 250, 150, segment.startAngle, segment.endAngle)}
                        fill="none"
                        stroke={`url(#gradient-${index})`}
                        strokeWidth="40"
                        filter="url(#elegantGlow)"
                        className="transition-all duration-700 hover:stroke-width-45"
                        style={{ 
                          animation: isVisible ? `fadeIn 1s ease-out ${index * 0.2}s both` : 'none',
                          transformOrigin: '250px 250px'
                        }}
                      />
                      
                      {/* Inner accent line */}
                      <path
                        d={createArcPath(250, 250, 130, segment.startAngle, segment.endAngle)}
                        fill="none"
                        stroke={segment.color}
                        strokeWidth="2"
                        opacity="0.8"
                        filter="url(#innerShadow)"
                      />
                    </g>
                  ))}
                </svg>

                {/* Elegant Center Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="text-center bg-gradient-to-b from-gray-900/90 to-black/90 backdrop-blur-xl rounded-full p-8 border border-gray-700/50 shadow-2xl">
                    <div className="text-primary-400 text-5xl mb-4 animate-bounce" style={{ animationDuration: '3s' }}>💎</div>
                    <div className="text-gray-300 font-medium text-lg mb-2">Total Supply</div>
                    <div className="bg-gradient-to-r from-primary-400 to-primary-500 bg-clip-text text-transparent font-black text-2xl">
                      1,000,000,000
                    </div>
                    <div className="text-primary-400 font-bold text-lg">$SOLMEME</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Elegant Distribution Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {tokenDistribution.map((item, index) => (
                <div
                  key={index}
                  className="group relative bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6 hover:border-green-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-green-400/10 animate-fade-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <div
                          className="w-4 h-4 rounded-full mr-3 shadow-lg"
                          style={{ backgroundColor: item.color, boxShadow: `0 0 20px ${item.color}40` }}
                        />
                        <h3 className="text-white font-bold text-lg">{item.label}</h3>
                      </div>
                      <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-black bg-gradient-to-r from-primary-400 to-primary-500 bg-clip-text text-transparent">
                        {item.percentage}%
                      </div>
                    </div>
                  </div>
                  
                  {/* Hover gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-400/5 to-primary-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              ))}
            </div>
          </div>
        ) : (
          /* Elegant Vesting Schedule Tab */
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {vestingSchedule.map((item, index) => (
                <div
                  key={index}
                  className="group relative bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-8 hover:border-green-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl animate-fade-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="text-4xl">{item.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-primary-400 font-bold text-xl mb-2">{item.label}</h3>
                      <p className="text-white font-semibold mb-3">{item.period}</p>
                      <p className="text-gray-400 text-sm leading-relaxed">{item.details}</p>
                    </div>
                  </div>
                  
                  {/* Elegant progress indicator */}
                  <div className="mt-6 h-1 bg-gray-800 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-primary-400 to-primary-500 rounded-full transition-all duration-1000 group-hover:animate-pulse"
                      style={{ width: `${Math.random() * 100}%` }}
                    />
                  </div>
                  
                  {/* Hover gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-400/5 to-primary-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Elegant Key Stats */}
        <div className="mt-24 bg-gradient-to-r from-gray-900/60 to-gray-800/60 backdrop-blur-xl rounded-3xl p-8 border border-gray-700/50">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '1B', label: 'Total Supply', icon: '🌟' },
              { value: '35%', label: 'Pre-sale', icon: '🚀' },
              { value: '15%', label: 'Liquidity', icon: '💧' },
              { value: '15%', label: 'Community', icon: '🎁' }
            ].map((stat, index) => (
              <div key={index} className="text-center group animate-fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">{stat.icon}</div>
                <div className="text-4xl font-black bg-gradient-to-r from-primary-400 to-primary-500 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.value}
                </div>
                <div className="text-gray-400 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            stroke-dasharray: 1000;
            stroke-dashoffset: 1000;
          }
          to {
            stroke-dasharray: 1000;
            stroke-dashoffset: 0;
          }
        }
      `}</style>
    </section>
  )
}

export default Tokenomics 