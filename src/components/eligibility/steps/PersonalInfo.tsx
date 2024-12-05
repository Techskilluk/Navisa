import React from 'react'
import { Button } from '../../ui/Button'
import { FormField } from '../../ui/FormField'
import { ArrowLeftIcon, ArrowRightIcon, AcademicCapIcon, GlobeAltIcon, CalendarIcon } from '@heroicons/react/24/outline'

interface PersonalInfoProps {
  formData: {
    fieldOfStudy: string;
    education: string;
    nationality: string;
  };
  onUpdate: (field: string, value: string) => void;
  onNext: () => void;
  onBack: () => void;
}

export function PersonalInfo({ formData, onUpdate, onNext, onBack }: PersonalInfoProps) {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Tell us about yourself</h2>
      </div>
      <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); onNext(); }}>
        <FormField 
          label="What did you study?"
          value={formData.fieldOfStudy}
          onChange={e => onUpdate('fieldOfStudy', e.target.value)}
          placeholder="Enter your field of study"
          icon={AcademicCapIcon}
          hint="Enter your most recent field of study"
          required
        />
        <FormField 
          label="When did you complete school?"
          type="date"
          value={formData.education}
          onChange={e => onUpdate('education', e.target.value)}
          icon={CalendarIcon}
          required
        />
        <FormField 
          label="What is your nationality?"
          value={formData.nationality}
          onChange={e => onUpdate('nationality', e.target.value)}
          placeholder="Enter your nationality"
          icon={GlobeAltIcon}
          required
        />
        <div className="flex justify-between pt-4">
          <Button 
            type="button" 
            variant="secondary" 
            onClick={onBack}
            className="flex items-center gap-2 px-6"
          >
            <ArrowLeftIcon className="w-5 h-5" />
            Go back
          </Button>
          <Button 
            type="submit"
            className="flex items-center gap-2 px-6"
          >
            Continue
            <ArrowRightIcon className="w-5 h-5" />
          </Button>
        </div>
      </form>
    </div>
  )
}