import React from 'react';
import { Quote } from 'lucide-react';

export default function Founder() {
  return (
    <section id="founder" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div className="relative">
            <img
              className="w-full rounded-lg shadow-lg"
              src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e"
              alt="Harshita Singh"
            />
            <div className="absolute inset-0 bg-rose-500 opacity-10 rounded-lg"></div>
          </div>
          <div className="mt-10 lg:mt-0 lg:ml-8">
            <div className="text-base max-w-prose mx-auto lg:max-w-none">
              <h2 className="text-3xl font-extrabold text-white sm:text-4xl">Meet Our Founder</h2>
              <div className="mt-6">
                <div className="flex items-center">
                  <Quote className="h-8 w-8 text-rose-500" />
                  <p className="ml-4 text-xl text-gray-300 italic">
                    Every life matters, and together we can make a difference.
                  </p>
                </div>
                <p className="mt-8 text-lg text-gray-300">
                  Harshita Singh founded the Animal Welfare Club with a vision to create a safe haven
                  for animals in Alwar. Her dedication to animal welfare has inspired countless
                  volunteers and created a movement of compassion in our community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}