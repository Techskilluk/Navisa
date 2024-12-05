import React from 'react'
import { Container } from '../components/ui/Container'
import { Button } from '../components/ui/Button'

export function SignIn() {
  return (
    <div className="py-12">
      <Container>
        <div className="max-w-md mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Welcome back</h1>
            <p className="text-gray-600">Sign in to continue your visa application</p>
          </div>

          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email address
              </label>
              <input 
                type="email"
                className="w-full p-3 border border-gray-300 rounded-lg"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <input 
                type="password"
                className="w-full p-3 border border-gray-300 rounded-lg"
                placeholder="Enter your password"
              />
            </div>

            <Button className="w-full">Sign in</Button>

            <p className="text-center text-sm text-gray-600">
              Don't have an account?{' '}
              <a href="#" className="text-primary hover:text-gray-800">
                Create one
              </a>
            </p>
          </form>
        </div>
      </Container>
    </div>
  )
}