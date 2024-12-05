import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeftIcon } from '@heroicons/react/24/outline'

interface AuthLayoutProps {
  children: React.ReactNode
  showBackButton?: boolean
}

export function AuthLayout({ children, showBackButton = true }: AuthLayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-light/5 to-primary-light/10">
      <div className="relative flex flex-col min-h-screen">
        <div className="flex items-center gap-8 p-6 lg:p-8">
          <Link to="/" className="flex items-center">
            <img src="/logo.svg" alt="Navisa" className="h-8 w-auto" />
          </Link>
          {showBackButton && (
            <button 
              onClick={() => window.history.back()}
              className="p-2 hover:bg-black/5 rounded-full transition-colors"
            >
              <ArrowLeftIcon className="w-5 h-5" />
            </button>
          )}
        </div>

        <div className="flex-1 flex items-center justify-center p-6 lg:p-8">
          <div className="w-full max-w-[440px] bg-white rounded-2xl shadow-lg p-8">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}