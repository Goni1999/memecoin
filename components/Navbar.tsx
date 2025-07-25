'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

        const navigationItems = [
        { name: 'Learn', href: '/learn' },
        { name: 'Developers', href: '/developers' },
        { name: 'Solutions', href: '/solutions' },
        { name: 'Network', href: '/network' },
        { name: 'Community', href: '/community' },
      ]

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-dark-900/98 backdrop-blur-strong'
          : 'bg-dark-900/95 backdrop-blur-md'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between py-5">
                                {/* Logo */}
                      <Link
                        href="/"
                        className="flex items-center space-x-3 text-white font-bold text-xl hover:opacity-80 transition-opacity"
                      >
                        <Image
                          src="/solmeme-logo.png"
                          alt="SOLMEME Logo"
                          width={200}
                          height={200}
                          className="w-200 h-200 object-contain"
                        />
              </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="nav-link hover:nav-link-active transition-all duration-200 relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-500 to-secondary-500 transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
                        <button
                          onClick={() => {
                            const element = document.getElementById('buy-tokens');
                            if (element) {
                              element.scrollIntoView({ behavior: 'smooth' });
                            }
                          }}
                          className="btn btn-primary text-sm"
                        >
                          BUY TOKENS
                        </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden flex flex-col space-y-1 w-6 h-6"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block h-0.5 w-full bg-white transition-all duration-300 ${
                isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''
              }`}
            />
            <span
              className={`block h-0.5 w-full bg-white transition-all duration-300 ${
                isMobileMenuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block h-0.5 w-full bg-white transition-all duration-300 ${
                isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
              }`}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen ? 'max-h-96 pb-6' : 'max-h-0'
          }`}
        >
          <div className="flex flex-col space-y-4 pt-4 border-t border-dark-600">
            {navigationItems.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                className="nav-link text-lg py-2 animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="flex flex-col space-y-3 pt-4">
                          <button
                            onClick={() => {
                              const element = document.getElementById('buy-tokens');
                              if (element) {
                                element.scrollIntoView({ behavior: 'smooth' });
                              }
                              setIsMobileMenuOpen(false);
                            }}
                            className="btn btn-primary w-full justify-center"
                          >
                            BUY TOKENS
                          </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar 