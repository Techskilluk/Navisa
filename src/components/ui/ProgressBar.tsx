import React from 'react'
import { CheckIcon } from '@heroicons/react/24/solid'

interface ProgressBarProps {
  steps: string[]
  currentStep: string
  className?: string
}

export function ProgressBar({ steps, currentStep, className = '' }: ProgressBarProps) {
  const currentIndex = steps.indexOf(currentStep)
  
  return (
    <div className={`w-full ${className}`}>
      <div className="relative">
        {/* Background line */}
        <div className="absolute inset-0 flex items-center">
          <div className="h-0.5 w-full bg-gray-200 rounded-full" />
        </div>
        
        {/* Steps */}
        <div className="relative flex justify-between">
          {steps.map((step, index) => {
            const isCompleted = index < currentIndex
            const isCurrent = index === currentIndex
            
            return (
              <div key={step} className="flex flex-col items-center">
                <div className={`
                  w-8 h-8 rounded-full flex items-center justify-center
                  transition-all duration-200
                  ${isCompleted ? 'bg-primary text-white' : 
                    isCurrent ? 'bg-primary-light border-2 border-primary' : 
                    'bg-gray-100 border-2 border-gray-200'}
                `}>
                  {isCompleted ? (
                    <CheckIcon className="w-5 h-5" />
                  ) : (
                    <span className="text-sm font-medium">
                      {index + 1}
                    </span>
                  )}
                </div>
                <span className="mt-2 text-xs text-gray-600 font-medium">
                  {step}
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}