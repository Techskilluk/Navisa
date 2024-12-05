import React from 'react'
import { AuthLayout } from '../../components/auth/AuthLayout'
import { SignInForm } from '../../components/auth/SignInForm'

export function SignIn() {
  return (
    <AuthLayout>
      <SignInForm />
    </AuthLayout>
  )
}