import React from 'react'
import { Button } from '../../ui/Button'
import { FormField } from '../../ui/FormField'
import { 
  ArrowLeftIcon, 
  ArrowRightIcon,
  AcademicCapIcon,
  BuildingLibraryIcon,
  BookOpenIcon,
  BeakerIcon
} from '@heroicons/react/24/outline'

interface EducationInfoProps {
  formData: {
    education: string;
    institution: string;
    fieldOfStudy: string;
    research: string;
  };
  onUpdate: (field: string, value: string) => void;
  onNext: () => void;
  onBack: () => void;
}

export function EducationInfo({ formData, onUpdate, onNext, onBack }: EducationInfoProps) {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Tell us about your educational qualification</h2>
      </div>
      <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); onNext(); }}>
        <FormField 
          label="What is the highest degree you have?"
          value={formData.education}
          onChange={e => onUpdate('education', e.target.value)}
          placeholder="e.g. Bachelor's, Master's, PhD"
          icon={AcademicCapIcon}
          required
        />
        <FormField 
          label="Which institution did you study at?"
          value={formData.institution}
          onChange={e => onUpdate('institution', e.target.value)}
          placeholder="Enter your institution name"
          icon={BuildingLibraryIcon}
          required
        />
        <FormField 
          label="What was your field of study?"
          value={formData.fieldOfStudy}
          onChange={e => onUpdate('fieldOfStudy', e.target.value)}
          placeholder="Enter your major/specialization"
          icon={BookOpenIcon}
          required
        />
        <FormField 
          label="Do you have any academic distinctions, scholarships, or published research?"
          value={formData.research}
          onChange={e => onUpdate('research', e.target.value)}
          placeholder="List your academic achievements"
          icon={BeakerIcon}
        />
        <div className="flex justify-between pt-4">
          <Button 
            type="button" 
            variant="secondary" 
            onClick={onBack}
            className="flex items-center gap-2 px-6"
          >
            <ArrowLeftIcon className="w-5 h-5" />
            Back
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