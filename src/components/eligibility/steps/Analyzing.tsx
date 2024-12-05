import React from 'react'

interface AnalyzingProps {
  onComplete?: () => void;
}

export function Analyzing({ onComplete }: AnalyzingProps) {
  React.useEffect(() => {
    const timer = setTimeout(() => {
      onComplete?.();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="space-y-6 text-center">
      <div className="space-y-4">
        <div className="relative">
          <div className="w-16 h-16 border-4 border-primary/20 rounded-full mx-auto" />
          <div className="absolute inset-0 w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto" />
        </div>
        <h2 className="text-2xl font-bold">Analyzing your profile</h2>
        <p className="text-gray-600">Please wait while we process your information...</p>
      </div>
    </div>
  )
}