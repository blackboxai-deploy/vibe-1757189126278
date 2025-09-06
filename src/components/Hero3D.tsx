"use client"

import React, { useEffect, useState } from 'react'

export default function Hero3D() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background with parallax effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-blue-900"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-purple-500 rounded-full animate-pulse delay-300"></div>
        <div className="absolute bottom-40 left-20 w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse delay-700"></div>
        <div className="absolute bottom-20 right-40 w-1 h-1 bg-purple-400 rounded-full animate-pulse delay-1000"></div>
      </div>

      {/* Main content container */}
      <div className={`relative z-10 text-center px-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        
        {/* Car showcase with 3D effect */}
        <div className="perspective-1000 mb-12">
          <div className="relative w-80 h-48 mx-auto transform-style-preserve-3d car-3d">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg glow-blue">
              <img 
                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/75df51f3-f6ff-4013-a61d-f3f235fe1d3c.png" 
                alt="Elite Sports Car - Premium luxury vehicle with sleek aerodynamic design"
                className="w-full h-full object-cover rounded-lg"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.background = 'linear-gradient(135deg, #1e40af, #7c3aed)';
                  target.alt = 'Premium Car Model';
                }}
              />
            </div>
          </div>
        </div>

        {/* Hero text */}
        <div className="space-y-6">
          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-fade-in">
            EliteAuto
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto animate-slide-up">
            Experience the future of automotive excellence. Where luxury meets performance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-semibold text-white transform hover:scale-105 transition-all duration-300 glow-blue">
              Explore Models
            </button>
            <button className="px-8 py-4 border border-gray-600 rounded-lg font-semibold text-white hover:bg-white hover:text-black transition-all duration-300">
              Schedule Test Drive
            </button>
          </div>
        </div>

        {/* Stats section with 3D cards */}
        <div className="grid grid-cols-3 gap-6 mt-16 max-w-2xl mx-auto">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 transform hover:scale-105 hover:rotate-1 transition-all duration-300">
            <div className="text-3xl font-bold text-blue-400">50+</div>
            <div className="text-sm text-gray-400">Premium Models</div>
          </div>
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 transform hover:scale-105 hover:-rotate-1 transition-all duration-300">
            <div className="text-3xl font-bold text-purple-400">15+</div>
            <div className="text-sm text-gray-400">Years Excellence</div>
          </div>
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 transform hover:scale-105 hover:rotate-1 transition-all duration-300">
            <div className="text-3xl font-bold text-pink-400">10K+</div>
            <div className="text-sm text-gray-400">Happy Customers</div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}