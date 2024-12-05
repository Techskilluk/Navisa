import React from 'react'
import { Button } from '../../ui/Button'

interface WelcomeProps {
  onNext: () => void;
}

export function Welcome({ onNext }: WelcomeProps) {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Welcome, Oyeyinka</h2>
        <p className="text-gray-600">
          We will ask you a few questions to help assess your eligibility effectively
        </p>
      </div>
      <Button onClick={onNext} className="w-full">Continue</Button>
    </div>
  )
}