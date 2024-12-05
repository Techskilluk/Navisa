import React from 'react'
import { placeholderImages } from '../utils/images'

interface VisaCardProps {
  flag: string;
  title: string;
  description: string;
}

function VisaCard({ flag, title, description }: VisaCardProps) {
  return (
    <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 flex flex-col h-full">
      <div className="flex items-center space-x-6 mb-6">
        <div className="w-16 h-12 flex items-center justify-center">
          <img src={flag} alt={`${title} flag`} className="h-8 w-auto object-contain" />
        </div>
        <div className="h-12 w-[1px] bg-gray-200"></div>
        <h3 className="text-2xl font-bold text-gray-900 leading-tight flex-1">{title}</h3>
      </div>
      <p className="text-gray-600 leading-relaxed text-lg flex-1">{description}</p>
      <div className="mt-6 pt-6 border-t border-gray-100">
        <button className="text-primary hover:text-primary-dark font-medium flex items-center group">
          Learn more
          <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export function VisaPathways() {
  return (
    <div className="py-32 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold mb-6 text-gray-900">
            Get to know the visa pathways
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore different visa options tailored to your skills and aspirations
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10 auto-rows-fr max-w-7xl mx-auto">
          <VisaCard
            flag={placeholderImages.flags.uk}
            title="Global talent visa"
            description="for highly skilled individuals in the fields of science, digital technology, engineering, arts, and humanities who wants to live and work in UK"
          />
          <VisaCard
            flag={placeholderImages.flags.canada}
            title="Express entry"
            description="The fastest pathway to Canadian permanent residency For skilled workers who want to immigrate to Canada"
          />
          <VisaCard
            flag={placeholderImages.flags.us}
            title="EB-1/EB-2"
            description="For professionals with extraordinary abilities, or exceptional achievements in fields like science, business, or the arts who want to stay in U.S"
          />
          <VisaCard
            flag={placeholderImages.flags.australia}
            title="EU"
            description="Designed for skilled workers who want to live and work in Australia, this visa grants permanent residency to those with in-demand skills."
          />
          <VisaCard
            flag={placeholderImages.flags.uae}
            title="Golden Visa"
            description="A long-term residency program designed to attract investors, entrepreneurs, skilled professionals, and exceptional talents to the UAE."
          />
        </div>
      </div>
    </div>
  );
}