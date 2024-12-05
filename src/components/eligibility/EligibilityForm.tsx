import React, { useState, useEffect } from 'react'
import { Welcome } from './steps/Welcome'
import { PersonalInfo } from './steps/PersonalInfo'
import { CareerInfo } from './steps/CareerInfo'
import { EducationInfo } from './steps/EducationInfo'
import { Achievements } from './steps/Achievements'
import { ImmigrationInfo } from './steps/ImmigrationInfo'
import { Preferences } from './steps/Preferences'
import { Analyzing } from './steps/Analyzing'
import { Results } from './steps/Results'
import { ProgressBar } from '../ui/ProgressBar'

const STEPS = [
  'Personal',
  'Career',
  'Education',
  'Achievements',
  'Immigration',
  'Preferences'
] as const

type Step = 'welcome' | typeof STEPS[number] | 'analyzing' | 'results'

interface FormData {
  firstName: string;
  nationality: string;
  currentRole: string;
  experience: string;
  achievements: string;
  leadership: string;
  education: string;
  institution: string;
  certifications: string;
  publications: string;
  recognition: string;
  fieldOfStudy: string;
  research: string;
  visaStatus: string;
  visaType: string;
  relocationGoal: string;
  preferredCountry: string;
}

export function EligibilityForm() {
  const [step, setStep] = useState<Step>('welcome')
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    nationality: '',
    currentRole: '',
    experience: '',
    achievements: '',
    leadership: '',
    education: '',
    institution: '',
    certifications: '',
    publications: '',
    recognition: '',
    fieldOfStudy: '',
    research: '',
    visaStatus: '',
    visaType: '',
    relocationGoal: '',
    preferredCountry: '',
  })

  useEffect(() => {
    // Load saved form data from localStorage
    const savedData = localStorage.getItem('eligibilityFormData')
    if (savedData) setFormData(JSON.parse(savedData))
  }, [])

  const updateForm = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    localStorage.setItem('eligibilityFormData', JSON.stringify({ ...formData, [field]: value }))
  }

  const nextStep = () => {
    const steps: Step[] = ['welcome', ...STEPS, 'analyzing']
    const currentIndex = steps.indexOf(step)
    if (currentIndex < steps.length - 1) {
      setStep(steps[currentIndex + 1])
    }
  }

  const prevStep = () => {
    const steps: Step[] = ['welcome', ...STEPS, 'analyzing']
    const currentIndex = steps.indexOf(step)
    if (currentIndex > 0) {
      setStep(steps[currentIndex - 1])
    }
  }

  const getProgress = () => {
    const steps = STEPS
    const currentIndex = steps.indexOf(step)
    if (currentIndex === -1) return 100
    return Math.round((currentIndex / (steps.length - 1)) * 100)
  }

  const progress = getProgress()

  const renderStep = () => {
    switch (step) {
      case 'welcome':
        return <Welcome onNext={nextStep} />

      case 'Personal':
        return <PersonalInfo 
          formData={formData}
          onUpdate={updateForm}
          onNext={nextStep}
          onBack={prevStep}
        />

      case 'Career':
        return <CareerInfo
          formData={formData}
          onUpdate={updateForm}
          onNext={nextStep}
          onBack={prevStep}
        />

      case 'Education':
        return <EducationInfo
          formData={formData}
          onUpdate={updateForm}
          onNext={nextStep}
          onBack={prevStep}
        />

      case 'Achievements':
        return <Achievements
          formData={formData}
          onUpdate={updateForm}
          onNext={nextStep}
          onBack={prevStep}
        />

      case 'Immigration':
        return <ImmigrationInfo
          formData={formData}
          onUpdate={updateForm}
          onNext={nextStep}
          onBack={prevStep}
        />

      case 'Preferences':
        return <Preferences
          formData={formData}
          onUpdate={updateForm}
          onNext={() => setStep('analyzing')}
          onBack={prevStep}
        />

      case 'analyzing':
        return <Analyzing onComplete={() => setStep('results')} />

      case 'results':
        return <Results />

      default:
        return null
    }
  }

  if (step !== 'welcome' && step !== 'analyzing' && step !== 'results') {
    return (
      <div>
        <ProgressBar 
          steps={STEPS}
          currentStep={step}
          className="mb-12"
        />
        {renderStep()}
      </div>
    )
  }

  return (
    <div>{renderStep()}</div>
  )
}