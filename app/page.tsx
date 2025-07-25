'use client'

import { useEffect, useState } from 'react'
import Navbar from '@/components/Navbar'
import Featured from '@/components/Featured'
import Stats from '@/components/Stats'
import Features from '@/components/Features'
import Roadmap from '@/components/Roadmap'
import Tokenomics from '@/components/Tokenomics'
import BuildForGrowth from '@/components/BuildForGrowth'
import dynamic from 'next/dynamic'
import Community from '@/components/Community'
import Footer from '@/components/Footer'

const Hero = dynamic(() => import('@/components/Hero'), {
  ssr: false,
  loading: () => (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 hero-gradient" />
      <div className="container-custom relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          <div className="text-center">
            <div className="text-sm text-gray-400">Loading...</div>
          </div>
        </div>
      </div>
    </section>
  )
})

const BuyTokens = dynamic(() => import('@/components/BuyTokens'), {
  ssr: false,
  loading: () => (
    <section id="buy-tokens" className="py-20 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary-500/5 to-secondary-500/5" />
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]" />
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-black mb-6">
            Buy{' '}
            <span className="bg-gradient-to-r from-primary-400 to-secondary-500 bg-clip-text text-transparent">
              SOLMEME
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Join the Solana meme revolution. Fast, secure, and decentralized trading.
          </p>
        </div>
        <div className="max-w-2xl mx-auto">
          <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-8 shadow-2xl">
            <div className="text-center">
              <div className="text-sm text-gray-400">Loading...</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
})

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <main className="min-h-screen bg-dark-900">
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-white text-xl">Loading...</div>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-dark-900">
      <Navbar />
      <Hero />
      <BuyTokens />
      <Featured />
      <Stats />
      <Features />
      <Roadmap />
      <Tokenomics />
      <BuildForGrowth />
      <Community />
      
      <Footer />
    </main>
  )
} 