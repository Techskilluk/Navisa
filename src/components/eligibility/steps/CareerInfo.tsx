import React from 'react'
import { Button } from '../../ui/Button'
import { FormField } from '../../ui/FormField'
import { 
  ArrowLeftIcon, 
  ArrowRightIcon,
  BriefcaseIcon,
  ClockIcon,
  TrophyIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline'

interface CareerInfoProps {
  formData: {
    currentRole: string;
    experience: string;
    achievements: string;
    leadership: string;
  };
  onUpdate: (field: string, value: string) => void;
  onNext: () => void;
  onBack: () => void;
}

export function CareerInfo({ formData, onUpdate, onNext, onBack }: CareerInfoProps) {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Tell us about your career</h2>
      </div>
      <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); onNext(); }}>
        <FormField 
          label="What is your current role?"
          value={formData.currentRole}
          onChange={e => onUpdate('currentRole', e.target.value)}
          placeholder="Enter your current job title"
          icon={BriefcaseIcon}
          required
        />
        <FormField 
          label="How many years of professional experience do you have?"
          type="number"
          value={formData.experience}
          onChange={e => onUpdate('experience', e.target.value)}
          placeholder="Enter years of experience"
          icon={ClockIcon}
          hint="Full-time professional experience only"
          required
          min="0"
        />
        <FormField 
          label="Have you received special recognition or completed any notable projects?"
          value={formData.achievements}
          onChange={e => onUpdate('achievements', e.target.value)}
          placeholder="Describe your achievements"
          icon={TrophyIcon}
          required
        />
        <FormField 
          label="Have you held any leadership role?"
          value={formData.leadership}
          onChange={e => onUpdate('leadership', e.target.value)}
          placeholder="Describe your leadership experience"
          icon={UserGroupIcon}
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