import React from 'react'
import { Button } from '../ui/Button'
import { Input } from '../ui/Input'

interface VerifyEmailProps {
  email: string
}

export function VerifyEmail({ email }: VerifyEmailProps) {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-4">Verify your email</h2>
        <p className="text-gray-600">
          Provide the 6 digit OTP code that was sent to{' '}
          <span className="font-medium text-gray-900">{email}</span>
        </p>
      </div>

      <form className="space-y-6">
        <Input
          label="Code"
          type="text"
          placeholder="Enter verification code"
          maxLength={6}
          className="text-center tracking-wider"
        />

        <Button className="w-full">Verify</Button>
        
        <p className="text-center text-gray-600">
          Didn't receive the code?{' '}
          <button className="text-primary hover:text-primary-dark font-medium">
            Resend
          </button>
        </p>
      </form>
    </div>
  )
}