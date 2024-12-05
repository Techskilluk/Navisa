import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../ui/Button'
import { Input } from '../ui/Input'

export function SignInForm() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-4">Welcome back</h2>
        <p className="text-gray-600">Sign in to continue your visa application</p>
      </div>

      <button className="w-full flex items-center justify-center gap-3 bg-white hover:bg-gray-50 text-gray-900 font-medium h-12 rounded-lg border border-gray-200 transition-colors">
        <img src="/google.svg" alt="" className="w-5 h-5" />
        Continue with Google
      </button>

      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-200" />
        </div>
        <div className="relative flex justify-center">
          <span className="px-4 bg-gradient-to-b from-primary-light/5 to-primary-light/10 text-sm text-gray-500">Or</span>
        </div>
      </div>

      <form className="space-y-6">
        <Input
          label="Email address"
          type="email"
          placeholder="Enter your email"
        />

        <div className="space-y-2">
          <Input
            label="Password"
            type="password"
            placeholder="Enter your password"
          />
          <div className="flex justify-end">
            <Link to="/forgot-password" className="text-sm text-primary hover:text-primary-dark">
              Forgot password?
            </Link>
          </div>
        </div>

        <Button className="w-full">Sign in</Button>

        <p className="text-center text-gray-600">
          New to Navisa?{' '}
          <Link to="/signup" className="text-primary hover:text-primary-dark font-medium">
            Create one
          </Link>
        </p>
      </form>
    </div>
  )
}