import React from 'react'
import { ExclamationCircleIcon } from '@heroicons/react/24/outline'
import { Input } from './Input'

interface FormFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
  error?: string
  icon?: React.ComponentType<{ className?: string }>
  hint?: string
}

export function FormField({ 
  label, 
  error, 
  icon: Icon,
  hint,
  className = '',
  ...props 
}: FormFieldProps) {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-800">
        {label}
      </label>
      
      <div className="relative">
        {Icon && (
          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
            <Icon className="w-5 h-5 text-gray-400" />
          </div>
        )}
        
        <Input
          className={`
            ${Icon ? 'pl-10' : ''}
            ${error ? 'border-red-500 focus:ring-red-500' : ''}
            ${className}
          `}
          aria-invalid={error ? 'true' : 'false'}
          {...props}
        />
        
        {error && (
          <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
            <ExclamationCircleIcon className="w-5 h-5 text-red-500" />
          </div>
        )}
      </div>
      
      {(error || hint) && (
        <p className={`text-sm ${error ? 'text-red-500' : 'text-gray-500'}`}>
          {error || hint}
        </p>
      )}
    </div>
  )
}