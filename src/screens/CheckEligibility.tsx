import React from 'react'
import { EligibilityLayout } from '../components/eligibility/EligibilityLayout'
import { EligibilityForm } from '../components/eligibility/EligibilityForm'

export function CheckEligibility() {
  return (
    <EligibilityLayout>
      <EligibilityForm />
    </EligibilityLayout>
  )
}