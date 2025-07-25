'use client'

import React from 'react'
import Link from 'next/link'

const Footer = () => {
  const footerSections = [
    {
      title: '$SOLMEME',
      links: [
                  { name: 'SOLMEME Grants', href: '#grants' },
        { name: 'Break Everything', href: '#break-solana' },
        { name: 'War Kit', href: '#media-kit' },
        { name: 'Join the Army', href: '#careers' },
        { name: 'No Disclaimers', href: '#disclaimer' },
        { name: 'Privacy? LOL', href: '#privacy' }
      ]
    },
    {
      title: 'Join the War',
      links: [
        { name: 'Battle Reports', href: '#blog' },
                  { name: 'SOLMEME Newsletter', href: '#newsletter' },
        { name: 'SOLMEME Discord HQ', href: 'https://discord.gg/solana' },
        { name: 'X Execution HQ', href: '#twitter' },
        { name: 'GitHub Arsenal', href: '#github' },
        { name: 'Telegram Syndicate', href: '#telegram' }
      ]
    },
    {
      title: 'Weaponize',
      links: [
        { name: 'War Manual', href: '#docs' },
        { name: 'Battle Tactics', href: '#guides' },
        { name: 'Execution API', href: '#api' },
                  { name: 'SOLMEME SDKs', href: '#sdks' },
          { name: 'Integration Examples', href: '#examples' },
        { name: 'No Support', href: '#support' }
      ]
    },
    {
      title: 'War Machine',
      links: [
                  { name: 'SOLMEME Validators', href: '#validators' },
        { name: 'RPC Enforcers', href: '#rpc' },
        { name: 'Wallet Weapons', href: '#wallets' },
        { name: 'Chain Explorer', href: '#explorer' },
        { name: 'Kill Analytics', href: '#analytics' },
        { name: 'Death Tools', href: '#tools' }
      ]
    }
  ]

  const socialLinks = [
    { name: 'X Execution HQ', href: '#twitter', icon: '💀' },
    { name: 'SOLMEME Discord HQ', href: 'https://discord.gg/solana', icon: '👑' },
    { name: 'GitHub Arsenal', href: '#github', icon: '💻' },
    { name: 'Telegram Syndicate', href: '#telegram', icon: '🔫' },
    { name: 'YouTube Propaganda', href: '#youtube', icon: '📹' },
    { name: 'Reddit Hit Squad', href: '#reddit', icon: '🎯' }
  ]

  return (
    <footer className="bg-dark-800 border-t border-dark-600">
      {/* Main Footer Content */}
      <div className="container-custom py-16">
        
        {/* Newsletter Signup */}
        <div className="mt-16 ">
          <div className="max-w-md mx-auto lg:mx-0 animate-fade-up">
            <h6 className="text-white font-bold text-lg mb-4">
              Join the SOLMEME Newsletter
            </h6>
            <p className="text-gray-400 mb-6">
              Get SOLMEME updates, community highlights, and diamond hand celebration reports.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-dark-700 border border-dark-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <button className="btn btn-primary whitespace-nowrap">
                ENLIST
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Social Links Section */}
      <div className="bg-dark-900 py-8">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            {/* Logo and Description */}
            <div className="animate-fade-up">
              <Link
                href="/"
                className="flex items-center space-x-2 text-white font-bold text-xl mb-4"
              >
                <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-sm flex items-center justify-center">
                  <div className="w-6 h-6 bg-white rounded-sm"></div>
                </div>
                <span>$SOLMEME</span>
              </Link>
              <p className="text-gray-400 max-w-md">
                Solana-powered meme innovation designed for your wallet. Built for community, powered by SOLMEME.
              </p>
              <div className="mt-6 p-4 bg-dark-700/20 border border-dark-600 rounded-lg">
                <p className="text-primary-400 font-bold text-sm mb-2">SOLMEME FAQ</p>
                <p className="text-gray-300 text-xs mb-1"><strong>Is this a meme coin?</strong></p>
                <p className="text-gray-400 text-xs mb-3">No. This is a chain-powered clown car of financial anarchy.</p>
                <p className="text-gray-300 text-xs mb-1"><strong>Why no bridge?</strong></p>
                <p className="text-gray-400 text-xs">Because bridges are for traitors. We set chains on fire and surf the smoke.</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="animate-fade-up animate-stagger-1">
              <h6 className="text-white font-semibold mb-4">
                Join the army
              </h6>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social) => (
                  <Link
                    key={social.name}
                    href={social.href}
                    className="flex items-center space-x-2 px-4 py-2 bg-dark-800 border border-dark-600 rounded-lg text-gray-300 hover:text-white hover:border-primary-500 transition-all duration-200 group"
                  >
                    <span className="text-lg">{social.icon}</span>
                    <span className="font-medium">{social.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-black py-6">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 text-sm">
            <div className="text-gray-400 animate-fade-up">
              © 2025 Solana Foundation. All rights reserved.
            </div>
            
            <div className="flex flex-wrap gap-6 animate-fade-up animate-stagger-1">
              <Link
                href="#terms"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="#privacy"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="#cookies"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Cookie Policy
              </Link>
              <Link
                href="#disclaimer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Disclaimer
              </Link>
            </div>
          </div>

          {/* Managed by */}
          <div className="mt-6 pt-6 border-t border-dark-800 text-center animate-fade-up">
                          <p className="text-gray-500 text-sm">
                Managed by{' '}
                <Link
                  href="#foundation"
                  className="text-primary-400 hover:text-primary-300 transition-colors"
                >
                  Solana Foundation
                </Link>
              </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 