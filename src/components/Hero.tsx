import React from 'react';
import { ChevronDown } from 'lucide-react';
import { SupernovaSection } from './background/SupernovaSection';

export default function Hero() {
  return (
    <SupernovaSection className="h-screen">
      <div className="relative h-full flex items-center justify-center">
        <div className="glass-card rounded-xl p-8 md:p-12 max-w-4xl mx-4 text-center backdrop-blur-md">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
            Compassion for Every Creature
          </h1>
          <p className="text-xl sm:text-2xl text-gray-200 mb-8">
            Making a difference in Alwar, one life at a time
          </p>
          <a
            href="#about"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-rose-500 hover:bg-rose-600 transition-colors duration-300"
          >
            Learn More
          </a>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-8 w-8 text-white" />
        </div>
      </div>
    </SupernovaSection>
  );
}