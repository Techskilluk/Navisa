import React from 'react'
import { Button } from '../../ui/Button'
import { FormField } from '../../ui/FormField'
import { 
  ArrowLeftIcon, 
  ArrowRightIcon,
  AcademicCapIcon,
  DocumentTextIcon,
  TrophyIcon
} from '@heroicons/react/24/outline'

interface AchievementsProps {
  formData: {
    certifications: string;
    publications: string;
    recognition: string;
  };
  onUpdate: (field: string, value: string) => void;
  onNext: () => void;
  onBack: () => void;
}

export function Achievements({ formData, onUpdate, onNext, onBack }: AchievementsProps) {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Highlight your achievement and recognition</h2>
      </div>
      <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); onNext(); }}>
        <FormField 
          label="Have you received any award or professional certificate?"
          value={formData.certifications}
          onChange={e => onUpdate('certifications', e.target.value)}
          placeholder="List your certifications and awards"
          icon={AcademicCapIcon}
          required
        />
        <FormField 
          label="Do you have any patents, publications, or other contributions in your field?"
          value={formData.publications}
          onChange={e => onUpdate('publications', e.target.value)}
          placeholder="Describe your contributions"
          icon={DocumentTextIcon}
          required
        />
        <FormField 
          label="Have you been recognized by a professional organization or association?"
          value={formData.recognition}
          onChange={e => onUpdate('recognition', e.target.value)}
          placeholder="List any professional recognition"
          icon={TrophyIcon}
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