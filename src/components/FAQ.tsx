import React, { useState } from 'react';
import { PlusIcon, XMarkIcon } from '@heroicons/react/24/outline';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "How does the eligibility assessment work",
    answer: "Our eligibility assessment is a quick, guided process based on your skills, background, and experience to help determine which visa best fits your profile"
  },
  {
    question: "What documents do i need to apply",
    answer: "Required documents vary by visa type but typically include passport, educational certificates, work experience letters, and language proficiency test results. After your eligibility check, we'll provide a personalized document checklist."
  },
  {
    question: "Can I make changes after submitting my application",
    answer: "Yes, you can make certain changes to your application before final processing. Our support team will guide you through any necessary amendments and their implications."
  },
  {
    question: "How long does the visa process take",
    answer: "Processing times vary by visa type and country. After your eligibility check, we'll provide an estimated timeline based on current processing standards and your specific case."
  },
  {
    question: "What support do you provide after submission",
    answer: "We offer comprehensive post-submission support, including application tracking, status updates, and assistance with any additional documentation or interviews required."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <div className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">FAQs</h2>
          <p className="text-xl text-gray-600">
            Find quick answers to common questions we are asked
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-gray-200 pb-4"
            >
              <button
                className="w-full flex justify-between items-center py-4 text-left focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
              >
                <span className="text-xl font-medium text-gray-900">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <XMarkIcon className="h-6 w-6 text-gray-400" />
                ) : (
                  <PlusIcon className="h-6 w-6 text-gray-400" />
                )}
              </button>
              {openIndex === index && (
                <div className="mt-2 pr-12">
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}