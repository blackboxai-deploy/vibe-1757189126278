"use client"

import React, { useEffect, useState } from 'react'

const carModels = [
  {
    id: 1,
    name: "Elite Sport GT",
    category: "Sports Car",
    price: "Starting at $89,000",
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/3955e57e-5473-4635-84fd-3eef3119a485.png",
    features: ["0-60 in 3.2s", "450 HP", "Carbon Fiber Body"]
  },
  {
    id: 2,
    name: "Luxury Sedan X",
    category: "Luxury Sedan",
    price: "Starting at $65,000",
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/34cf53d6-37a6-4c55-8bb4-c87405d97d5d.png",
    features: ["Leather Interior", "Autopilot", "Panoramic Roof"]
  },
  {
    id: 3,
    name: "Electric Vision",
    category: "Electric SUV",
    price: "Starting at $75,000",
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/473498a7-ae0e-42d8-81c5-75419c0543fe.png",
    features: ["400 Mile Range", "Fast Charging", "Zero Emissions"]
  },
  {
    id: 4,
    name: "Urban Compact",
    category: "City Car",
    price: "Starting at $35,000",
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/40eb1684-6070-4471-86cd-3c2e917642b5.png",
    features: ["City Optimized", "Fuel Efficient", "Smart Parking"]
  },
  {
    id: 5,
    name: "Adventure SUV",
    category: "Off-Road SUV",
    price: "Starting at $95,000",
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/db9384c0-3e4b-44b0-9328-67590a9bd698.png",
    features: ["All-Terrain 4WD", "Hill Assist", "Towing 8000lbs"]
  },
  {
    id: 6,
    name: "Executive Coupe",
    category: "Luxury Coupe",
    price: "Starting at $120,000",
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/cee5d3a9-8093-40bd-bf87-fcdbab988d24.png",
    features: ["Handcrafted Interior", "V8 Engine", "Limited Edition"]
  }
]

export default function ModelsGrid() {
  const [visibleCards, setVisibleCards] = useState(new Set<number>())

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cardId = parseInt(entry.target.getAttribute('data-card-id') || '0')
            setVisibleCards(prev => new Set([...prev, cardId]))
          }
        })
      },
      { threshold: 0.1 }
    )

    const cards = document.querySelectorAll('[data-card-id]')
    cards.forEach(card => observer.observe(card))

    return () => observer.disconnect()
  }, [])

  return (
    <section id="models" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-6">
            Our Model Lineup
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover our complete range of premium vehicles, each engineered for excellence and designed to exceed expectations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {carModels.map((model, index) => (
            <div
              key={model.id}
              data-card-id={model.id}
              className={`group relative bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 transform transition-all duration-700 hover:scale-105 hover:-rotate-1 perspective-1000 ${
                visibleCards.has(model.id) 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}
              style={{
                transitionDelay: `${index * 150}ms`
              }}
            >
              {/* Card content with 3D transform */}
              <div className="transform-style-preserve-3d transition-transform duration-500 group-hover:rotateY-5">
                
                {/* Image section */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={model.image}
                    alt={`${model.name} - ${model.category} with premium features`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.background = 'linear-gradient(135deg, #374151, #1f2937)';
                      target.alt = `${model.name} - Premium Vehicle`;
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Category badge */}
                  <div className="absolute top-4 left-4 px-3 py-1 bg-blue-600/80 backdrop-blur-sm rounded-full text-sm font-medium">
                    {model.category}
                  </div>
                </div>

                {/* Content section */}
                <div className="p-6 space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                      {model.name}
                    </h3>
                    <p className="text-lg font-semibold text-purple-400">
                      {model.price}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="space-y-2">
                    {model.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-gray-300 text-sm">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 animate-pulse"></div>
                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* Action buttons */}
                  <div className="flex gap-3 pt-4">
                    <button className="flex-1 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-medium text-white transform transition-all duration-300 hover:scale-105 hover:glow-blue">
                      Learn More
                    </button>
                    <button className="flex-1 py-2 border border-gray-600 rounded-lg font-medium text-gray-300 hover:bg-white hover:text-black transition-all duration-300">
                      Test Drive
                    </button>
                  </div>
                </div>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>
            </div>
          ))}
        </div>

        {/* View all models button */}
        <div className="text-center mt-12">
          <button className="px-8 py-4 bg-transparent border-2 border-purple-500 text-purple-400 rounded-lg font-semibold transform hover:bg-purple-500 hover:text-white hover:scale-105 transition-all duration-300">
            View All Models
          </button>
        </div>
      </div>
    </section>
  )
}