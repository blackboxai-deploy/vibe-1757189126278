"use client"

import React, { useEffect, useState } from 'react'

export default function About3D() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById('about-section')
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const achievements = [
    { number: "50+", label: "Premium Models", icon: "🚗" },
    { number: "15+", label: "Years Experience", icon: "🏆" },
    { number: "100K+", label: "Miles Tested", icon: "🛣️" },
    { number: "98%", label: "Customer Satisfaction", icon: "⭐" }
  ]

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div id="about-section" className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left side - Content */}
          <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="space-y-6">
              <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Driving Innovation Since 2010
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                At EliteAuto, we don't just build cars – we craft experiences. Every vehicle represents our commitment to excellence, innovation, and the pursuit of automotive perfection.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed">
                From our state-of-the-art manufacturing facilities to our cutting-edge research and development centers, we're constantly pushing the boundaries of what's possible in automotive engineering.
              </p>
            </div>

            {/* Key features */}
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-blue-400">Innovation First</h3>
                <p className="text-gray-400 text-sm">Leading the industry with breakthrough technology and sustainable solutions.</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-purple-400">Premium Quality</h3>
                <p className="text-gray-400 text-sm">Uncompromising attention to detail in every component and finish.</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-pink-400">Customer Focus</h3>
                <p className="text-gray-400 text-sm">Building lasting relationships through exceptional service and support.</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-green-400">Sustainability</h3>
                <p className="text-gray-400 text-sm">Committed to environmental responsibility and clean energy solutions.</p>
              </div>
            </div>
          </div>

          {/* Right side - 3D Visual Element */}
          <div className={`perspective-1000 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="relative">
              
              {/* Main company image */}
              <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden transform-style-preserve-3d hover:rotateY-5 transition-transform duration-500">
                <img
                  src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/c5d04c6e-1d57-449a-aaf0-a0b9d42f8442.png"
                  alt="EliteAuto manufacturing facility with modern production line and advanced technology"
                  className="w-full h-96 object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.background = 'linear-gradient(135deg, #1f2937, #111827)';
                    target.alt = 'EliteAuto Manufacturing Excellence';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                
                {/* Floating achievement cards */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-black/60 backdrop-blur-sm rounded-lg p-4">
                    <h3 className="text-white font-semibold mb-2">Manufacturing Excellence</h3>
                    <p className="text-gray-300 text-sm">State-of-the-art facilities producing tomorrow's vehicles today.</p>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl transform rotate-12 hover:rotate-6 transition-transform duration-300 flex items-center justify-center">
                <span className="text-white text-2xl">🚀</span>
              </div>
              
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full transform -rotate-12 hover:rotate-0 transition-transform duration-300 flex items-center justify-center animate-float">
                <span className="text-white text-xl">⚡</span>
              </div>
            </div>
          </div>
        </div>

        {/* Achievement stats with 3D cards */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="group bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 text-center border border-gray-700 transform transition-all duration-500 hover:scale-105 hover:rotate-2 perspective-1000"
              style={{
                transitionDelay: `${index * 100}ms`
              }}
            >
              <div className="transform-style-preserve-3d transition-transform duration-300 group-hover:rotateY-5">
                <div className="text-4xl mb-2 animate-bounce" style={{ animationDelay: `${index * 200}ms` }}>
                  {achievement.icon}
                </div>
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-2">
                  {achievement.number}
                </div>
                <div className="text-gray-400 font-medium">
                  {achievement.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-semibold text-white transform hover:scale-105 transition-all duration-300 glow-blue">
            Discover Our Story
          </button>
        </div>
      </div>
    </section>
  )
}