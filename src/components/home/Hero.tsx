import React from 'react';
import { Container } from '../ui/Container'
import { Button } from '../ui/Button'
import { Link } from 'react-router-dom'
import { placeholderImages } from '../../utils/images'

export function Hero() {
  return (
    <div className="relative bg-gradient-to-b from-primary-light/50 to-white pt-32 pb-16 overflow-hidden min-h-[90vh]">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-world-pattern bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-light/40 to-white/90"></div>
      </div>
      <Container className="text-center relative z-10 px-4 sm:px-6 lg:px-8">
        <h1 className="text-6xl font-bold text-gray-900 mb-6 tracking-tight leading-[1.1]">
          Streamline your path to global opportunities
        </h1>
        <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
          Ready to relocate? We help you with every tool needed for a smooth visa application
        </p>
        <Button 
          as={Link} 
          to="/check-eligibility"
          className="text-lg px-8 py-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
        >
          Check your eligibility
        </Button>
      </Container>
      <div className="mt-16 relative z-10 px-4 max-w-7xl mx-auto">
        <img
          src={placeholderImages.travelMap}
          alt="World Map"
          className="w-full h-auto object-cover rounded-2xl shadow-2xl transform hover:scale-[1.02] transition-all duration-500 hover:shadow-3xl"
        />
      </div>
    </div>
  )
}