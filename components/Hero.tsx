'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Advanced 3D Background */}
      <div className="absolute inset-0 hero-gradient" />
      
      {/* Interactive Particle System */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary-400/20 rounded-full blur-sm animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`
            }}
          />
        ))}
        
        {/* 3D Morphing Blobs */}
        <div 
          className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-primary-400/10 via-primary-500/5 to-transparent rounded-full blur-3xl animate-morph"
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px) scale(${1 + Math.sin(Date.now() * 0.001) * 0.1})`
          }}
        />
        <div 
          className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-gradient-to-bl from-purple-500/8 via-pink-500/6 to-transparent rounded-full blur-3xl animate-morph-reverse"
          style={{
            transform: `translate(${-mousePosition.x * 0.03}px, ${-mousePosition.y * 0.03}px) rotate(${Date.now() * 0.01}deg)`,
            animationDelay: '2s'
          }}
        />
        <div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-blue-500/5 via-cyan-500/3 to-transparent rounded-full blur-3xl animate-pulse-slow"
          style={{
            transform: `translate(${-50 + mousePosition.x * 0.01}%, ${-50 + mousePosition.y * 0.01}%) scale(${1 + Math.sin(Date.now() * 0.002) * 0.2})`,
            animationDelay: '4s'
          }}
        />
        
        {/* Geometric shapes */}
        <div className="absolute top-32 right-32 w-32 h-32 border-2 border-primary-400/20 rounded-lg animate-spin-slow" />
        <div className="absolute bottom-32 left-32 w-24 h-24 border-2 border-purple-400/20 rounded-full animate-bounce-slow" />
      </div>

      {/* Neural Network Lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-10">
        <defs>
          <radialGradient id="neuralGradient">
            <stop offset="0%" stopColor="#9945ff" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
        </defs>
        {[...Array(8)].map((_, i) => (
          <line
            key={i}
            x1={`${10 + i * 12}%`}
            y1="20%"
            x2={`${20 + i * 10}%`}
            y2="80%"
            stroke="url(#neuralGradient)"
            strokeWidth="1"
            className="animate-pulse"
            style={{ animationDelay: `${i * 0.5}s` }}
          />
        ))}
      </svg>

      <div className="container-custom relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          
          {/* Enhanced Main Heading with 3D Effect */}
          <div className="relative mb-8">
            <h1 className={`text-display-2xl sm:text-display-xl lg:text-7xl xl:text-8xl font-black leading-none transition-all duration-1000 ${isLoaded ? 'animate-fade-up' : 'opacity-0 translate-y-20'}`}>
              <span className="inline-block transform hover:scale-105 transition-transform duration-300">
                Born on{' '}
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 bg-clip-text text-transparent animate-gradient-x">
                    Solana
                  </span>
                  <span className="absolute -inset-1 bg-gradient-to-r from-purple-400/20 to-purple-600/20 blur-xl opacity-50 animate-pulse" />
                </span>
              </span>
              <br />
              <span className="inline-block transform hover:scale-105 transition-transform duration-300">
                Built for{' '}
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-primary-400 via-primary-500 to-secondary-600 bg-clip-text text-transparent animate-gradient-x">
                    Innovation
                  </span>
                  <span className="absolute -inset-1 bg-gradient-to-r from-primary-400/20 to-secondary-600/20 blur-xl opacity-50 animate-pulse" />
                  <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-primary-400 to-secondary-500 bg-clip-text text-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                    Innovation
                  </span>
                </span>
              </span>
            </h1>
            
            {/* 3D Shadow Effect */}
            <h1 className="absolute top-1 left-1 text-display-2xl sm:text-display-xl lg:text-7xl xl:text-8xl font-black leading-none text-black/10 -z-10 blur-sm">
              Born on Solana.<br />Built for Innovation.
            </h1>
          </div>

        
          {/* Enhanced Description with Typewriter Effect */}
          <div className="relative mb-8">
            <p className={`text-lg sm:text-xl lg:text-2xl xl:text-3xl text-gray-300 leading-relaxed max-w-5xl mx-auto transition-all duration-1000 ${isLoaded ? 'animate-fade-up animate-stagger-2' : 'opacity-0 translate-y-20'}`}>
              This ain't your boomer coin with{' '}
              <span className="relative inline-block">
                <span className="text-primary-400 font-semibold animate-pulse">$60 gas fees</span>
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary-400 animate-pulse" />
              </span>
              {' '}and delays that feel like bear markets.{' '}
              <br className="hidden sm:block" />
              <span className="relative inline-block">
                              <span className="text-secondary-400 font-bold bg-gradient-to-r from-secondary-400 to-primary-500 bg-clip-text text-transparent">
                $SOLMEME is instant. Savage. Final.
              </span>
              <span className="absolute -inset-1 bg-gradient-to-r from-secondary-400/10 to-primary-500/10 blur-lg animate-pulse" />
              </span>
            </p>
          </div>

          

          {/* Enhanced CTA Buttons with 3D Effects */}
          <div className={`flex flex-col sm:flex-row gap-6 mb-16 justify-center items-center transition-all duration-1000 ${isLoaded ? 'animate-fade-up animate-stagger-4' : 'opacity-0 translate-y-20'}`}>
            <button
              onClick={() => {
                const element = document.getElementById('buy-tokens');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="group relative bg-gradient-to-r from-primary-400 via-primary-500 to-secondary-600 text-black font-black text-lg px-10 py-5 rounded-xl overflow-hidden transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-primary-400/25 transform-gpu"
            >
              <span className="relative z-10 flex items-center">
                Buy SOLMEME
                <img src="/solana-favicon.png" alt="SOLMEME" className="ml-3 w-6 h-6 transition-transform group-hover:scale-125 group-hover:rotate-12" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary-300 to-secondary-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute -inset-1 bg-gradient-to-r from-primary-400 to-secondary-500 rounded-xl blur opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
            </button>
            

          </div>

          {/* Enhanced Partner Section with Holographic Effect */}
          <div className={`transition-all duration-1000 ${isLoaded ? 'animate-fade-up animate-stagger-5' : 'opacity-0 translate-y-20'}`}>
            <p className="text-sm text-gray-400 mb-8 uppercase tracking-[0.3em] font-semibold">
              <span className="inline-block animate-pulse">⚡</span>
              {' '}POWERING THE SOLANA ECOSYSTEM WITH SOLMEME INNOVATION{' '}
              <span className="inline-block animate-pulse">⚡</span>
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8 opacity-80">
              {[
                        { name: 'Jupiter',  color: 'text-gray-400' },
        { name: 'Raydium',  color: 'text-gray-400' },
                { name: 'Phantom',  color: 'text-gray-400' },
                { name: 'Magic Eden',  color: 'text-gray-400' },
                { name: 'Solflare',  color: 'text-gray-400' },
                { name: 'Serum',  color: 'text-gray-400' },
                { name: 'Orca',  color: 'text-gray-400' },
                { name: 'Pyth',  color: 'text-gray-400' }
              ].map((partner, index) => (
                <div 
                  key={partner.name}
                  className={`group cursor-pointer transform transition-all duration-300 hover:scale-125 ${partner.color} hover:text-white`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-lg font-bold flex items-center space-x-2 relative">
                    <span className="group-hover:font-black transition-all duration-300">{partner.name}</span>
                    <div className="absolute -inset-2 bg-gradient-to-r from-current/10 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator with Pulse Effect */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center space-y-2 animate-bounce cursor-pointer group">
                      <div className="w-8 h-12 border-2 border-secondary-400 rounded-full flex justify-center relative overflow-hidden group-hover:border-secondary-300 transition-colors duration-300">
              <div className="w-1 h-3 bg-secondary-400 rounded-full mt-2 animate-pulse group-hover:bg-secondary-300 transition-colors duration-300" />
              <div className="absolute inset-0 bg-secondary-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
          </div>
          <div className="text-xs text-gray-400 uppercase tracking-wider font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Scroll
          </div>
        </div>
      </div>

      {/* Custom CSS for advanced animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes morph {
          0%, 100% { border-radius: 50% 30% 40% 60%; }
          25% { border-radius: 30% 50% 60% 40%; }
          50% { border-radius: 40% 60% 30% 50%; }
          75% { border-radius: 60% 40% 50% 30%; }
        }
        
        @keyframes morph-reverse {
          0%, 100% { border-radius: 60% 40% 50% 30%; }
          25% { border-radius: 40% 60% 30% 50%; }
          50% { border-radius: 30% 50% 60% 40%; }
          75% { border-radius: 50% 30% 40% 60%; }
        }
        
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes glitch {
          0% { transform: translate(0); }
          20% { transform: translate(-2px, 2px); }
          40% { transform: translate(-2px, -2px); }
          60% { transform: translate(2px, 2px); }
          80% { transform: translate(2px, -2px); }
          100% { transform: translate(0); }
        }
        
        @keyframes glitch-1 {
          0% { opacity: 1; transform: translate(2px, -2px); }
          10% { opacity: 0; }
          100% { opacity: 0; }
        }
        
        @keyframes glitch-2 {
          0% { opacity: 0; }
          5% { opacity: 1; transform: translate(-2px, 2px); }
          15% { opacity: 0; }
          100% { opacity: 0; }
        }
        
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-5px) rotate(-1deg); }
          75% { transform: translateX(5px) rotate(1deg); }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        .animate-float { animation: float 8s ease-in-out infinite; }
        .animate-morph { animation: morph 8s ease-in-out infinite; }
        .animate-morph-reverse { animation: morph-reverse 8s ease-in-out infinite; }
        .animate-gradient-x { animation: gradient-x 3s ease infinite; background-size: 200% 200%; }
        .animate-glitch { animation: glitch 0.3s ease-in-out infinite; }
        .animate-glitch-1 { animation: glitch-1 0.3s ease-in-out infinite; }
        .animate-glitch-2 { animation: glitch-2 0.3s ease-in-out infinite; }
        .animate-shake { animation: shake 0.5s ease-in-out; }
        .animate-spin-slow { animation: spin-slow 20s linear infinite; }
        .animate-bounce-slow { animation: bounce-slow 3s ease-in-out infinite; }
      `}</style>
    </section>
  )
}

export default Hero 