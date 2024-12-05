import React from 'react'
import { AuthLayout } from '../../components/auth/AuthLayout'
import { VerifyEmail } from '../../components/auth/VerifyEmail'

export function Verify() {
  return (
    <AuthLayout>
      <VerifyEmail email="oyeyinkajabrus@gmail.com" />
    </AuthLayout>
  )
}