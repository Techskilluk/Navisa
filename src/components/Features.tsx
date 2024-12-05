import React from 'react';
import { placeholderImages } from '../utils/images'

interface FeatureCardProps {
  title: string;
  description: string;
  image: string;
}

function FeatureCard({ title, description, image }: FeatureCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <img src={image} alt={title} className="w-full h-64 object-cover" />
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}

export function Features() {
  return (
    <div className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Built to simplify your relocation</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Our comprehensive platform guides you through every step of your visa journey</p>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          <img
            src={placeholderImages.professional}
            alt="Professional"
            className="w-full h-[600px] rounded-2xl shadow-2xl object-cover hover:shadow-3xl transition-shadow duration-300"
          />
          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-sm p-8 hover:shadow-md transition-shadow duration-300 border border-gray-100">
              <h3 className="text-2xl font-bold mb-2">Comprehensive Guidance</h3>
              <p className="text-gray-600">
                Get step-by-step instructions tailored to your unique qualifications and visa type.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-sm p-8 hover:shadow-md transition-shadow duration-300 border border-gray-100">
              <h3 className="text-2xl font-bold mb-2">Instant eligibility check</h3>
              <p className="text-gray-600">
                No guessing games—our quick assessment tells you instantly which visas you qualify for.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-sm p-8 hover:shadow-md transition-shadow duration-300 border border-gray-100">
              <h3 className="text-2xl font-bold mb-2">Real time tracking</h3>
              <p className="text-gray-600">
                Stay informed at every stage, with live updates and notifications about your application's status.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}