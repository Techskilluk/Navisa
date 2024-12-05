import React from 'react'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
}

export function Input({ label, className = '', ...props }: InputProps) {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-800">
        {label}
      </label>
      <input
        className={`w-full h-12 px-4 rounded-lg border border-gray-200 bg-white/90 
          focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none 
          transition-all duration-200 placeholder:text-gray-400 ${className}`}
        {...props}
      />
    </div>
  )
}