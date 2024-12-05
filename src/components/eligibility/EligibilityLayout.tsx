import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeftIcon } from '@heroicons/react/24/outline'

interface EligibilityLayoutProps {
  children: React.ReactNode
  showBackButton?: boolean
}

export function EligibilityLayout({ children, showBackButton = true }: EligibilityLayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-light/5 to-primary-light/10">
      <div className="max-w-2xl mx-auto pt-6 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-8 mb-8">
          <Link to="/" className="flex items-center">
            <img src="/logo.svg" alt="Navisa" className="h-10 w-auto" />
          </Link>
          {showBackButton && (
            <div className="h-[1px] flex-1 bg-gray-200" />
          )}
        </div>
        
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          {children}
        </div>
      </div>
    </div>
  )
}