import React from 'react';
import { Heart, Shield, Users } from 'lucide-react';
import { SupernovaSection } from './background/SupernovaSection';

export default function About() {
  return (
    <SupernovaSection>
      <section id="about" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              About Our Mission
            </h2>
            <p className="mt-4 text-xl text-gray-300">
              Dedicated to protecting and caring for animals in Alwar, Rajasthan
            </p>
          </div>

          <div className="mt-20">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: <Heart className="h-6 w-6 text-white" />,
                  title: 'Compassionate Care',
                  description: 'Providing medical attention and shelter to injured and abandoned animals'
                },
                {
                  icon: <Shield className="h-6 w-6 text-white" />,
                  title: 'Animal Protection',
                  description: 'Advocating for animal rights and preventing cruelty through education'
                },
                {
                  icon: <Users className="h-6 w-6 text-white" />,
                  title: 'Community Engagement',
                  description: 'Building a network of volunteers and supporters for animal welfare'
                }
              ].map((item, index) => (
                <div key={index} className="pt-6">
                  <div className="flow-root glass-card rounded-lg px-6 pb-8 h-full">
                    <div className="-mt-6">
                      <div>
                        <span className="inline-flex items-center justify-center p-3 bg-rose-500 rounded-md shadow-lg">
                          {item.icon}
                        </span>
                      </div>
                      <h3 className="mt-8 text-lg font-medium text-white tracking-tight">{item.title}</h3>
                      <p className="mt-5 text-base text-gray-300">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </SupernovaSection>
  );
}