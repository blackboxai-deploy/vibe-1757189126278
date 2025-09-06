"use client"

import React, { useEffect, useState } from 'react'

const services = [
  {
    id: 1,
    title: "Premium Sales",
    description: "Expert consultation to find your perfect luxury vehicle match.",
    details: "Our certified sales professionals provide personalized service to help you discover the ideal EliteAuto vehicle. From initial consultation to final delivery, we ensure a premium buying experience.",
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/d7e745fa-e808-4c7f-bdbe-4f04c11d705f.png",
    icon: "🏢",
    features: ["Personal Consultant", "Custom Configuration", "VIP Delivery", "Lifetime Support"]
  },
  {
    id: 2,
    title: "Expert Maintenance",
    description: "Factory-trained technicians using genuine parts and advanced diagnostics.",
    details: "Our state-of-the-art service centers employ only certified technicians who understand every detail of EliteAuto vehicles. We use advanced diagnostic tools and genuine parts to maintain peak performance.",
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/4f6fe678-30f8-4c54-9900-f6729b0ae0b9.png",
    icon: "🔧",
    features: ["Certified Technicians", "Genuine Parts", "Advanced Diagnostics", "Express Service"]
  },
  {
    id: 3,
    title: "Flexible Financing",
    description: "Tailored financing solutions with competitive rates and flexible terms.",
    details: "We work with premium financial partners to offer competitive financing options. Whether lease or purchase, our financial specialists create solutions that fit your lifestyle and budget.",
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/4199991b-9468-4369-a8e6-6e64e5e1bd4f.png",
    icon: "💳",
    features: ["Competitive Rates", "Lease Options", "Trade-In Value", "Online Pre-Approval"]
  },
  {
    id: 4,
    title: "Comprehensive Insurance",
    description: "Complete coverage protection for your valuable investment.",
    details: "Our insurance partnerships provide comprehensive coverage designed specifically for luxury vehicles. From collision to comprehensive, we ensure your investment is protected.",
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/6933b37c-4424-4e58-828f-0da444a00d1c.png",
    icon: "🛡️",
    features: ["Full Coverage", "Gap Protection", "Roadside Assistance", "Claim Support"]
  },
  {
    id: 5,
    title: "Extended Warranty",
    description: "Peace of mind with extended protection beyond factory warranty.",
    details: "Extend your vehicle's warranty coverage with our comprehensive protection plans. Enjoy worry-free driving with coverage for major components and systems.",
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/07438df0-5d77-42b0-b78a-4f5d262ace07.png",
    icon: "📋",
    features: ["Extended Coverage", "Transferable", "Rental Car", "National Network"]
  },
  {
    id: 6,
    title: "VIP Concierge",
    description: "Exclusive concierge service for our premium customers.",
    details: "Our VIP concierge service provides white-glove treatment including vehicle pickup/delivery, priority scheduling, and personalized attention to every detail.",
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/5f6cf004-6b4e-41f6-a255-56433841d819.png",
    icon: "👑",
    features: ["Vehicle Pickup", "Priority Service", "Personal Assistant", "Exclusive Events"]
  }
]

export default function ServicesCards() {
  const [visibleCards, setVisibleCards] = useState(new Set<number>())
  const [flippedCards, setFlippedCards] = useState(new Set<number>())

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cardId = parseInt(entry.target.getAttribute('data-service-id') || '0')
            setVisibleCards(prev => new Set([...prev, cardId]))
          }
        })
      },
      { threshold: 0.1 }
    )

    const cards = document.querySelectorAll('[data-service-id]')
    cards.forEach(card => observer.observe(card))

    return () => observer.disconnect()
  }, [])

  const handleCardFlip = (cardId: number) => {
    setFlippedCards(prev => {
      const newSet = new Set(prev)
      if (newSet.has(cardId)) {
        newSet.delete(cardId)
      } else {
        newSet.add(cardId)
      }
      return newSet
    })
  }

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-1/4 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-1/4 w-48 h-48 bg-purple-500/5 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-6">
            Premium Services
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience excellence at every touchpoint with our comprehensive range of premium automotive services.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              data-service-id={service.id}
              className={`group perspective-1000 h-80 transition-all duration-700 ${
                visibleCards.has(service.id) 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}
              style={{
                transitionDelay: `${index * 150}ms`
              }}
            >
              <div
                className={`relative w-full h-full transform-style-preserve-3d transition-transform duration-700 cursor-pointer ${
                  flippedCards.has(service.id) ? 'rotate-y-180' : ''
                }`}
                onClick={() => handleCardFlip(service.id)}
              >
                
                {/* Front of card */}
                <div className="absolute inset-0 backface-hidden bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 overflow-hidden">
                  <div className="h-full flex flex-col">
                    {/* Image section */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={service.image}
                        alt={`${service.title} - Professional automotive service`}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.background = 'linear-gradient(135deg, #374151, #1f2937)';
                          target.alt = `${service.title} Service`;
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      
                      {/* Icon overlay */}
                      <div className="absolute top-4 right-4 w-12 h-12 bg-blue-600/80 backdrop-blur-sm rounded-full flex items-center justify-center text-xl">
                        {service.icon}
                      </div>
                    </div>

                    {/* Content section */}
                    <div className="flex-1 p-6 flex flex-col justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                          {service.title}
                        </h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                      
                      <div className="mt-4 text-center">
                        <span className="text-blue-400 text-sm font-medium">Click to learn more</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Back of card */}
                <div className="absolute inset-0 backface-hidden rotate-y-180 bg-gradient-to-br from-blue-900/50 to-purple-900/50 backdrop-blur-sm rounded-xl border border-blue-500/30 p-6 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold text-white">{service.title}</h3>
                      <span className="text-2xl">{service.icon}</span>
                    </div>
                    
                    <p className="text-gray-300 text-sm leading-relaxed mb-4">
                      {service.details}
                    </p>

                    <div className="space-y-2">
                      <h4 className="text-blue-400 font-semibold text-sm">Key Features:</h4>
                      <div className="grid grid-cols-2 gap-1">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center text-gray-300 text-xs">
                            <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></div>
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-2 mt-4">
                    <button className="flex-1 py-2 bg-blue-600 rounded-lg text-white text-sm font-medium hover:bg-blue-500 transition-colors duration-300">
                      Get Quote
                    </button>
                    <button className="flex-1 py-2 border border-gray-500 rounded-lg text-gray-300 text-sm font-medium hover:bg-gray-700 transition-colors duration-300">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Service guarantee */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-4 bg-gray-800/50 backdrop-blur-sm rounded-full px-8 py-4 border border-gray-700">
            <span className="text-2xl">✨</span>
            <span className="text-white font-medium">100% Satisfaction Guarantee</span>
            <span className="text-blue-400">•</span>
            <span className="text-gray-300">Premium Service Standards</span>
          </div>
        </div>
      </div>
    </section>
  )
}