import React from 'react';
import { SupernovaSection } from './background/SupernovaSection';

export default function Footer() {
  return (
    <SupernovaSection>
      <footer className="border-t border-midnight-accent/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-sm text-gray-400">
            Website designed and maintained by{' '}
            <a 
              href="https://linkedin.com/in/abhishekh-dey" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-rose-400 hover:text-rose-500 transition-colors"
            >
              Abhishekh Dey
            </a>
          </p>
        </div>
      </footer>
    </SupernovaSection>
  );
}