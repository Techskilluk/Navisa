import React from 'react'
import { Button } from '../../ui/Button'
import { FormField } from '../../ui/FormField'
import { 
  ArrowLeftIcon, 
  ArrowRightIcon,
  GlobeAltIcon,
  BuildingOfficeIcon
} from '@heroicons/react/24/outline'

interface PreferencesProps {
  formData: {
    preferredCountry: string;
  };
  onUpdate: (field: string, value: string) => void;
  onNext: () => void;
  onBack: () => void;
}

export function Preferences({ formData, onUpdate, onNext, onBack }: PreferencesProps) {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Share your preferences</h2>
      </div>
      <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); onNext(); }}>
        <FormField 
          label="Which country do you want to move to?"
          value={formData.preferredCountry}
          onChange={e => onUpdate('preferredCountry', e.target.value)}
          placeholder="Enter your preferred destination"
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
            Back
          </Button>
          <Button 
            type="submit"
            className="flex items-center gap-2 px-6"
          >
            Submit
            <ArrowRightIcon className="w-5 h-5" />
          </Button>
        </div>
      </form>
    </div>
  )
}