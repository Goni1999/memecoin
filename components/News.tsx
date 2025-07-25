'use client'

import React from 'react'
import Link from 'next/link'

interface NewsItem {
  id: string
  category: string
  title: string
  description: string
  icon: string
  date: string
  href: string
}

const News = () => {
  const newsItems: NewsItem[] = [
    {
      id: 'onchain-holiday',
      category: 'PAYMENTS',
      title: 'SOLMEME Ecosystem Announces \'Onchain Holiday\'',
      description: 'Introducing Onchain Holiday: an online SOLMEME-powered shopping event that allows users to spend their stablecoins and memecoins on merchandise from over a dozen brands and retailers.',
      icon: '🎉',
      date: 'December 2024',
      href: '#onchain-holiday'
    },
    {
      id: 'accelerate-conference',
      category: 'NEWS',
      title: 'SOLMEME Accelerate brings together 3000+ founders, devs, and policymakers',
      description: 'Watch any talk you missed on YouTube covering the latest in meme product development and policy in the crypto space.',
      icon: '🏆',
      date: 'November 2024',
      href: '#accelerate'
    },
    {
      id: 'attestation-service',
      category: 'DEVELOPERS',
      title: 'SOLMEME Attestation Service is now live',
      description: 'Learn how to privately verify off-chain meme data associated with any wallet using the new open source, permissionless protocol.',
      icon: '🔐',
      date: 'November 2024',
      href: '#attestation'
    },
    {
      id: 'franklin-templeton',
      category: 'INSTITUTIONS',
      title: 'Major Institution Extends Meme Fund to SOLMEME',
      description: 'Users can access the fund using next-generation meme investment platforms built on SOLMEME.',
      icon: '🏦',
      date: 'October 2024',
      href: '#institutions'
    },
    {
      id: 'fastest-growing',
      category: 'DEVELOPERS',
      title: 'SOLMEME: Fastest Growing Ecosystem for New Meme Builders',
      description: 'Report states that 81% of all meme transactions come from the SOLMEME ecosystem, marking unprecedented growth.',
      icon: '📈',
      date: 'October 2024',
      href: '#growth'
    }
  ]

  return (
    <section className="section-padding bg-gradient-to-b from-dark-800 to-dark-900">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-display-lg sm:text-display-xl font-black mb-6 animate-fade-up">
            Latest from the{' '}
            <span className="gradient-text">Memeverse</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-fade-up animate-stagger-1">
            Stay updated with the latest developments, partnerships, and innovations in the SOLMEME ecosystem.
          </p>
        </div>

        {/* Featured News */}
        <div className="mb-16">
          <div className="card-feature p-8 lg:p-12 animate-fade-up">
            <div className="flex flex-col lg:flex-row lg:items-center gap-8">
              <div className="flex-1">
                <div className="text-xs text-primary-400 font-semibold uppercase tracking-wider mb-3">
                  {newsItems[0].category}
                </div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black mb-4 text-white">
                  {newsItems[0].title}
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  {newsItems[0].description}
                </p>
                <Link
                  href={newsItems[0].href}
                  className="btn btn-primary inline-flex items-center group"
                >
                  Learn more
                  <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
                </Link>
              </div>
              <div className="text-8xl lg:text-9xl opacity-20">
                {newsItems[0].icon}
              </div>
            </div>
          </div>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {newsItems.slice(1).map((item, index) => (
            <div
              key={item.id}
              className={`card group cursor-pointer animate-fade-up`}
              style={{ animationDelay: `${(index + 1) * 0.1}s` }}
            >
              <Link href={item.href} className="block">
                <div className="flex items-start space-x-4">
                  <div className="text-3xl">{item.icon}</div>
                  <div className="flex-1">
                    <div className="text-xs text-primary-400 font-semibold uppercase tracking-wider mb-2">
                      {item.category}
                    </div>
                    <h4 className="text-lg font-bold mb-3 text-white group-hover:gradient-text transition-all">
                      {item.title}
                    </h4>
                    <p className="text-gray-400 text-sm leading-relaxed mb-3">
                      {item.description}
                    </p>
                    <div className="text-xs text-gray-500">
                      {item.date}
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* View All News */}
        <div className="text-center mt-12">
          <Link
            href="#all-news"
            className="btn btn-outline inline-flex items-center group animate-fade-up"
          >
            View All News
            <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-20 text-center">
          <div className="card-feature p-8 lg:p-12 max-w-2xl mx-auto animate-fade-up">
            <h3 className="text-2xl font-black mb-4 text-white">
              Stay in the loop
            </h3>
            <p className="text-gray-300 mb-6">
              Get the latest SOLMEME news, updates, and meme drops delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-dark-700 border border-dark-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <button className="btn btn-primary whitespace-nowrap">
                Subscribe
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-3">
              No spam, unsubscribe at any time. We respect your privacy.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default News 