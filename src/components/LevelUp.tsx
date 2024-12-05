import React from 'react';
import { Container } from './ui/Container';
import { Button } from './ui/Button';
import { Link } from 'react-router-dom';
import { placeholderImages } from '../utils/images';

export function LevelUp() {
  return (
    <div className="bg-primary py-24 relative overflow-hidden group isolate">
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary/90"></div>
      <div className="absolute inset-0 bg-[url('/world-map.svg')] opacity-5"></div>
      <Container>
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 relative">
            <div className="relative">
              <div className="absolute -inset-4 bg-white/10 backdrop-blur-sm rounded-2xl transform rotate-3 transition-transform group-hover:rotate-1 duration-500"></div>
              <img
                src={placeholderImages.airport}
                alt="Airport terminal"
                className="relative rounded-xl shadow-2xl w-full object-cover aspect-[4/3] transform transition-all duration-500 group-hover:translate-y-1 group-hover:shadow-primary-light/20"
                loading="lazy"
                width="600"
                height="450"
              />
            </div>
          </div>
          <div className="lg:w-1/2 text-white relative z-10">
            <h2 className="text-5xl font-bold mb-8 tracking-tight leading-tight">Level up your visa process</h2>
            <p className="text-xl text-primary-light/95 mb-10 leading-relaxed max-w-xl">
              Experience a smarter, faster way to get your visa. We help to streamline every step, from eligibility to final approval.
            </p>
            <Button 
              as={Link} 
              to="/check-eligibility"
              variant="secondary"
              className="text-lg px-8 py-4 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 bg-white/95 hover:bg-white"
            >
              Start your eligibility check
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}