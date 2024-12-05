import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../ui/Button'
import { Input } from '../ui/Input'

export function SignUpForm() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-4">Create your account</h2>
        <p className="text-gray-600">Start your visa application journey</p>
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
        <div className="grid grid-cols-2 gap-4">
          <Input
            label="First name"
            type="text"
            placeholder="Enter your first name"
          />
          <Input
            label="Last name" 
            type="text"
            placeholder="Enter your last name"
          />
        </div>

        <Input
          label="Email address"
          type="email"
          placeholder="Enter your email"
        />

        <Input
          label="Password"
          type="password"
          placeholder="Create a password"
        />

        <Button className="w-full">Sign up</Button>

        <p className="text-center text-gray-600">
          Have an account?{' '}
          <Link to="/signin" className="text-primary hover:text-primary-dark font-medium">
            Sign in
          </Link>
        </p>
      </form>
    </div>
  )
}