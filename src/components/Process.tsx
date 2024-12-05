import React from 'react';
import { CheckIcon, DocumentTextIcon, ArrowUpTrayIcon, EyeIcon } from '@heroicons/react/24/outline';

const steps = [
  {
    id: 1,
    icon: CheckIcon,
    title: 'Check your eligibility to find out which visa category you qualify for',
  },
  {
    id: 2,
    icon: DocumentTextIcon,
    title: 'Receive a personalized list of required documents',
  },
  {
    id: 3,
    icon: ArrowUpTrayIcon,
    title: 'Prepare your document and submit your application',
  },
  {
    id: 4,
    icon: EyeIcon,
    title: 'Track your application process in real time',
  },
];

export function Process() {
  return (
    <div className="bg-navy py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-6 gap-8 mb-12">
          <div className="md:col-span-2 bg-primary-light rounded-xl p-8 flex items-center justify-center">
            <h2 className="text-4xl font-bold text-gray-900 leading-tight">How it works</h2>
          </div>
          <div className="md:col-span-4 grid sm:grid-cols-2 gap-8">
            {steps.map((step) => (
              <div key={step.id} className="bg-white rounded-xl p-8 relative hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start">
                  <span className="text-primary opacity-20 text-4xl font-bold absolute top-4 right-6">
                    {step.id}
                  </span>
                  <step.icon className="h-8 w-8 text-primary mb-6" />
                </div>
                <p className="text-gray-900 font-medium leading-relaxed">{step.title}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-primary-light rounded-xl p-12 text-center">
          <p className="text-gray-900 text-xl mb-6 max-w-2xl mx-auto">
            Join thousands who have successfully navigated their visa applications with our expert guidance
          </p>
          <button className="bg-primary text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition-all duration-300 hover:-translate-y-1 font-medium text-lg">
            Begin your eligibility check →
          </button>
        </div>
      </div>
    </div>
  );
}