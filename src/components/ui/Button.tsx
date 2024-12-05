import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary'
  children: React.ReactNode
  as?: any
}

export function Button({ variant = 'primary', children, className = '', as: Component = 'button', ...props }: ButtonProps) {
  const baseStyles = 'px-6 py-3 rounded-lg transition-all duration-300 font-medium hover:-translate-y-0.5 active:translate-y-0'
  const variants = {
    primary: 'bg-primary text-white hover:bg-primary/90 shadow-lg hover:shadow-xl h-12',
    secondary: 'bg-white text-primary hover:bg-gray-50 border border-gray-200 hover:border-primary/20 h-12'
  }

  return (
    <Component 
      className={`${baseStyles} ${variants[variant]} ${className} disabled:opacity-50 disabled:cursor-not-allowed`}
      {...props}
    >
      {children}
    </Component>
  )
}