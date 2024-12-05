import React, { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Titilayo Hannat',
    role: 'Software Engineer',
    content: 'Navisa transformed my visa application experience. The eligibility check was instant, and the document guidance made the entire process smooth. I always knew what stage I was in and what was required next. I felt supported every step of the way and could focus on planning my next chapter. Highly recommended!',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: 2,
    name: 'James Chen',
    role: 'Data Scientist',
    content: 'The level of detail and personalized support I received from Navisa was exceptional. Their platform made a complex visa process feel manageable and straightforward. The real-time updates kept me informed throughout my application journey.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1000'
  }
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="py-24 bg-primary-light overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">See what clients are saying</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choosing us is a big step, but hearing from those who've already experienced success with us makes all the difference
          </p>
        </div>

        <div className="relative">
          <div className="flex items-center">
            <button 
              onClick={prev}
              className="absolute left-0 z-10 p-2 rounded-full bg-white shadow-lg hover:bg-gray-50 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeftIcon className="h-6 w-6 text-gray-600" />
            </button>

            <div className="w-full overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {testimonials.map((testimonial) => (
                  <div 
                    key={testimonial.id}
                    className="w-full flex-shrink-0 px-4"
                  >
                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                      <div className="md:flex">
                        <div className="md:w-1/2">
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.name}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center bg-primary">
                          <blockquote className="text-white text-xl font-medium leading-relaxed mb-8">
                            "{testimonial.content}"
                          </blockquote>
                          <footer>
                            <div className="text-white">
                              <cite className="font-bold text-lg not-italic">- {testimonial.name}</cite>
                              <p className="text-primary-light mt-1">{testimonial.role}</p>
                            </div>
                          </footer>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button 
              onClick={next}
              className="absolute right-0 z-10 p-2 rounded-full bg-white shadow-lg hover:bg-gray-50 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRightIcon className="h-6 w-6 text-gray-600" />
            </button>
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-primary' : 'bg-gray-300'
                }`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}