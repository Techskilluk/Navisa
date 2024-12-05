import React from 'react'
import { Button } from '../../ui/Button'
import { 
  CheckCircleIcon, 
  ArrowRightIcon,
  CalendarDaysIcon,
  BookOpenIcon,
  ShareIcon,
  DocumentArrowDownIcon,
  EnvelopeIcon,
  PrinterIcon
} from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'

const recommendedBooks = [
  {
    title: "Global Talent Mobility",
    author: "Sarah Chen",
    description: "Essential guide for navigating international career transitions and visa processes.",
    readingTime: "4 hours"
  },
  {
    title: "The Immigration Handbook",
    author: "Michael Roberts",
    description: "Comprehensive overview of immigration pathways and requirements.",
    readingTime: "6 hours"
  },
  {
    title: "Building Your Global Career",
    author: "David Wong",
    description: "Strategic approaches to international job search and relocation.",
    readingTime: "5 hours"
  }
]

export function Results() {
  return (
    <div className="space-y-12">
      <div className="text-center space-y-4">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100">
          <CheckCircleIcon className="w-10 h-10 text-green-600" />
        </div>
        <h2 className="text-2xl font-bold">Great news! You're eligible</h2>
        <p className="text-gray-600 max-w-lg mx-auto">
          Based on your profile, you qualify for multiple visa pathways. Here's what we recommend:
        </p>
      </div>

      <div className="space-y-6">
        <div className="bg-white rounded-xl p-6 border border-gray-200 space-y-4">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-xl font-semibold">Global Talent Visa</h3>
              <p className="text-gray-600">United Kingdom</p>
            </div>
            <span className="px-3 py-1 text-sm font-medium text-green-700 bg-green-100 rounded-full">
              Best Match
            </span>
          </div>
          <p className="text-gray-600">
            Your qualifications and experience make you an excellent candidate for the UK's Global Talent visa.
          </p>
          <div className="pt-4">
            <Button 
              as={Link}
              to="/pathways/uk-global-talent"
              className="flex items-center gap-2"
            >
              Learn more
              <ArrowRightIcon className="w-4 h-4" />
            </Button>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 border border-gray-200 space-y-4">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-xl font-semibold">Express Entry</h3>
              <p className="text-gray-600">Canada</p>
            </div>
            <span className="px-3 py-1 text-sm font-medium text-blue-700 bg-blue-100 rounded-full">
              High Match
            </span>
          </div>
          <p className="text-gray-600">
            You meet the criteria for Canada's Express Entry program with a strong chance of selection.
          </p>
          <div className="pt-4">
            <Button 
              as={Link}
              to="/pathways/canada-express-entry"
              variant="secondary"
              className="flex items-center gap-2"
            >
              Learn more
              <ArrowRightIcon className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Assessment Summary */}
      {/* Consultation CTA */}
      <div className="bg-primary/5 rounded-xl p-8 space-y-4">
        <div className="flex items-start gap-4">
          <div className="p-3 rounded-lg bg-primary/10">
            <CalendarDaysIcon className="w-6 h-6 text-primary" />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold mb-2">Book a consultation</h3>
            <p className="text-gray-600 mb-6">
              Get personalized guidance from our immigration experts. We'll help you understand your options and create a tailored plan for your journey.
            </p>
            <Button 
              className="flex items-center gap-2"
              onClick={() => {/* TODO: Implement booking flow */}}
            >
              Schedule a call
              <ArrowRightIcon className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Recommended Reading */}
      <div className="space-y-6">
        <h3 className="text-xl font-bold flex items-center gap-2">
          <BookOpenIcon className="w-6 h-6 text-primary" />
          Recommended Reading
        </h3>
        <div className="grid gap-6">
          {recommendedBooks.map((book, index) => (
            <div key={book.title} className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h4 className="font-semibold text-lg">{book.title}</h4>
                  <p className="text-gray-600">by {book.author}</p>
                </div>
                <span className="px-3 py-1 text-sm bg-gray-100 rounded-full">
                  {book.readingTime}
                </span>
              </div>
              <p className="text-gray-600 mb-4">{book.description}</p>
              <div className="text-sm text-gray-500">
                Recommended reading order: {index + 1}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Report Actions */}
      <div className="bg-gradient-to-b from-gray-50 to-white rounded-xl p-8 space-y-8">
        <div className="grid grid-cols-2 gap-4">
          <Button 
            variant="secondary" 
            className="flex items-center justify-center gap-2"
            onClick={() => window.print()}
          >
            <PrinterIcon className="w-5 h-5" />
            Print Report
          </Button>
          <Button 
            variant="secondary"
            className="flex items-center justify-center gap-2"
            onClick={() => {/* TODO: Implement PDF download */}}
          >
            <DocumentArrowDownIcon className="w-5 h-5" />
            Download PDF
          </Button>
        </div>

        <div className="flex items-center gap-4 pt-4 border-t border-gray-200">
          <span className="text-sm text-gray-600">Share report:</span>
          <div className="flex gap-4">
            <button className="text-gray-600 hover:text-primary transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </button>
            <button className="text-gray-600 hover:text-primary transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>
              </svg>
            </button>
            <button className="text-gray-600 hover:text-primary transition-colors">
              <EnvelopeIcon className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="flex justify-end">
          <Button 
            as={Link} 
            to="/dashboard" 
            className="flex items-center gap-2 px-8 py-3 text-base font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
          >
            Continue to your dashboard
            <ArrowRightIcon className="w-5 h-5" />
          </Button>
        </div>
      </div>
      
      <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-t from-white via-white to-transparent h-24 pointer-events-none" />
    </div>
  )
}