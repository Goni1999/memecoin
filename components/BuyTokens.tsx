'use client'

import React, { useState, useEffect } from 'react'

const BuyTokens = () => {
  const [usdtAmount, setUsdtAmount] = useState('')
  const [solmemeAmount, setSolmemeAmount] = useState('')
  const [solPrice, setSolPrice] = useState(100)
  const [loading, setLoading] = useState(true)
  const [inputMode, setInputMode] = useState('sol')

  // Exchange rate: 0.00001 USDT per SOLMEME token
  const pricePerToken = 0.00001

  useEffect(() => {
    const fetchSolPrice = async () => {
      try {
        const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=solana&vs_currencies=usd')
        const data = await response.json()
        if (data.solana && data.solana.usd) {
          setSolPrice(data.solana.usd)
        }
      } catch (error) {
        console.error('Error fetching SOL price:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchSolPrice()
    const interval = setInterval(fetchSolPrice, 120000)
    return () => clearInterval(interval)
  }, [])

  const handleUsdtInput = (value: string) => {
    const numValue = parseFloat(value) || 0
    setUsdtAmount(value)
    setSolmemeAmount((numValue / pricePerToken).toLocaleString())
  }

  const handleSolInput = (value: string) => {
    const numValue = parseFloat(value) || 0
    const usdtValue = numValue * solPrice
    setUsdtAmount(usdtValue.toString())
    setSolmemeAmount((usdtValue / pricePerToken).toLocaleString())
  }

  const switchToSol = () => {
    if (usdtAmount && parseFloat(usdtAmount) > 0) {
      setInputMode('sol')
    }
  }

  const switchToUsdt = () => {
    setInputMode('usdt')
  }

  const handleBuyClick = () => {
    if (typeof window !== 'undefined' && (window as any).openModal) {
      (window as any).openModal()
    }
  }



  return (
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
            {/* Exchange Rate Display */}
            <div className="text-center mb-8">
              <div className="bg-gradient-to-r from-primary-500/20 to-secondary-500/20 border border-primary-400/30 rounded-xl p-4">
                <div className="text-sm text-gray-400 mb-2">Current Exchange Rate</div>
                <div className="text-2xl font-black text-white">
                  1 USDT = {(1 / pricePerToken).toLocaleString()} SOLMEME
                </div>
                <div className="text-sm text-gray-400 mt-2">
                  SOL Price: {loading ? 'Loading...' : `$${solPrice.toFixed(2)}`}
                </div>
              </div>
            </div>

            {/* Input Fields */}
            <div className="space-y-6">
              {/* Currency Input */}
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-3">
                  Amount of {inputMode.toUpperCase()} to Spend
                </label>
                <div className="relative">
                  <input
                    type="number"
                    value={inputMode === 'usdt' ? usdtAmount : (parseFloat(usdtAmount) / solPrice).toString()}
                    onChange={(e) => inputMode === 'usdt' ? handleUsdtInput(e.target.value) : handleSolInput(e.target.value)}
                    placeholder="0.0"
                    step="0.01"
                    min="0"
                    className="w-full bg-gray-800/50 border border-gray-600/50 rounded-xl px-4 py-4 text-white text-lg font-semibold placeholder-gray-500 focus:outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-400/20 transition-all duration-300"
                  />
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                    <div className="flex items-center space-x-2 text-gray-400">
                      <span className="font-semibold">{inputMode.toUpperCase()}</span>
                    </div>
                  </div>
                </div>
                {usdtAmount && parseFloat(usdtAmount) > 0 && (
                  <div className="mt-2 text-sm text-gray-400 text-center">
                    {inputMode === 'usdt' ? (
                      <span 
                        onClick={switchToSol}
                        className="cursor-pointer hover:text-primary-400 transition-colors duration-200"
                      >
                        ≈ {(parseFloat(usdtAmount) / solPrice).toString()} SOL
                      </span>
                    ) : (
                      <span 
                        onClick={switchToUsdt}
                        className="cursor-pointer hover:text-primary-400 transition-colors duration-200"
                      >
                        ≈ {parseFloat(usdtAmount).toFixed(2)} USDT
                      </span>
                    )}
                  </div>
                )}
              </div>

              {/* Arrow */}
              <div className="flex justify-center">
                <div className="w-12 h-12 bg-gradient-to-r from-primary-400 to-secondary-500 rounded-full flex items-center justify-center transform rotate-90 lg:rotate-0">
                  <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </div>
              </div>

              {/* SOLMEME Output */}
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-3">
                  SOLMEME Tokens to Receive
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={solmemeAmount}
                    readOnly
                    placeholder="0"
                    className="w-full bg-gray-800/50 border border-gray-600/50 rounded-xl px-4 py-4 text-white text-lg font-semibold placeholder-gray-500 focus:outline-none transition-all duration-300"
                  />
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                    <div className="flex items-center space-x-2 text-primary-400">
                      <img src="/solana-favicon.png" alt="SOLMEME" className="w-6 h-6" />
                      <span className="font-semibold">SOLMEME</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Buy Button */}
            <div className="mt-8">
              <button
                type="button"
                disabled={!usdtAmount || parseFloat(usdtAmount) <= 0}
                className="w-full group relative bg-gradient-to-r from-primary-400 via-primary-500 to-secondary-600 text-black font-black text-xl py-6 rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary-400/25 transform-gpu disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                onClick={handleBuyClick}
              >
                <span className="relative z-10 flex items-center justify-center space-x-3">
                  <span>Buy SOLMEME</span>
                  <img src="/solana-favicon.png" alt="SOLMEME" className="w-6 h-6 transition-transform group-hover:scale-125 group-hover:rotate-12" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary-300 to-secondary-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute -inset-1 bg-gradient-to-r from-primary-400 to-secondary-500 rounded-xl blur opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
              </button>
            </div>

            {/* Additional Info */}
            <div className="mt-6 text-center">
              <div className="text-sm text-gray-400 space-y-2">
                <div>• Instant transactions on Solana</div>
                <div>• Low fees (~$0.00025 per transaction)</div>
                <div>• Secure and decentralized</div>
              </div>
            </div>

            {/* Price Information */}
            {usdtAmount && parseFloat(usdtAmount) > 0 && (
              <div className="mt-6 p-4 bg-gradient-to-r from-gray-800/50 to-gray-700/50 border border-gray-600/30 rounded-xl">
                <div className="text-center">
                  <div className="text-sm text-gray-400 mb-2">Payment Summary</div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="text-center">
                      <div className="text-gray-400 mb-1">USDT Amount</div>
                      <div className="text-white font-semibold">{parseFloat(usdtAmount).toFixed(2)} USDT</div>
                    </div>
                    <div className="text-center">
                      <div className="text-gray-400 mb-1">SOL Equivalent</div>
                      <div className="text-white font-semibold">{(parseFloat(usdtAmount) / solPrice).toString()} SOL</div>
                    </div>
                  </div>
                  <div className="mt-3 text-xs text-gray-500">
                    *Based on real-time SOL price: ${solPrice.toFixed(2)}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default BuyTokens 