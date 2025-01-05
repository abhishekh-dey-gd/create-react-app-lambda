import React from 'react';
import FounderProfile from './FounderProfile';
import FounderPost from './FounderPost';
import { SupernovaSection } from '../background/SupernovaSection';

const posts = [
  {
    title: "Why I Started Nurture Animal Care",
    date: "March 15, 2024",
    content: `The journey of Nurture Animal Care began with a simple act of compassion. Walking through the streets of Alwar, I encountered countless stray animals in need of care and protection. This experience sparked a mission that would grow into what we are today.

Every life matters, and I believe that by working together, we can create a community where animals are treated with the respect and care they deserve.`,
    likes: 124
  },
  {
    title: "Building a Community of Animal Lovers",
    date: "March 10, 2024",
    content: `One of the most rewarding aspects of our work is witnessing the growth of our volunteer community. From students to seniors, people from all walks of life have joined our cause, bringing their unique skills and boundless enthusiasm.

Together, we're not just helping animals - we're building a more compassionate society.`,
    likes: 98
  }
];

export default function FoundersColumn() {
  return (
    <SupernovaSection>
      <section id="founders-column" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-3xl font-extrabold text-white sm:text-4xl">
              Founder's Column
            </h1>
            <p className="mt-4 text-xl text-gray-300">
              Thoughts and reflections from our founder, Harshita Singh
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              {posts.map((post, index) => (
                <FounderPost key={index} {...post} />
              ))}
            </div>
            <div className="lg:col-span-1">
              <FounderProfile />
            </div>
          </div>
        </div>
      </section>
    </SupernovaSection>
  );
}