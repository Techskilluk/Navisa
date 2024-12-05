import React from 'react'
import { Button } from '../../ui/Button'
import { FormField } from '../../ui/FormField'
import { 
  ArrowLeftIcon, 
  ArrowRightIcon,
  DocumentTextIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline'

interface ImmigrationInfoProps {
  formData: {
    visaStatus: string;
    visaType: string;
    relocationGoal: string;
  };
  onUpdate: (field: string, value: string) => void;
  onNext: () => void;
  onBack: () => void;
}

export function ImmigrationInfo({ formData, onUpdate, onNext, onBack }: ImmigrationInfoProps) {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">We want to know your immigration status</h2>
      </div>
      <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); onNext(); }}>
        <FormField 
          label="Do you currently hold any visa or permit?"
          value={formData.visaStatus}
          onChange={e => onUpdate('visaStatus', e.target.value)}
          placeholder="Yes/No"
          icon={DocumentTextIcon}
          required
        />
        {formData.visaStatus?.toLowerCase() === 'yes' && (
          <FormField 
            label="If yes, specify"
            value={formData.visaType}
            onChange={e => onUpdate('visaType', e.target.value)}
            placeholder="Enter your current visa type"
            icon={DocumentTextIcon}
            required
          />
        )}
        <FormField 
          label="What is your main goal for relocation?"
          value={formData.relocationGoal}
          onChange={e => onUpdate('relocationGoal', e.target.value)}
          placeholder="Describe your relocation objectives"
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
            Continue
            <ArrowRightIcon className="w-5 h-5" />
          </Button>
        </div>
      </form>
    </div>
  )
}