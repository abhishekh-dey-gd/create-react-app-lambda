import React from 'react';
import TeamMember from './TeamMember';
import { SupernovaSection } from '../background/SupernovaSection';

const teamMembers = [
  {
    name: "Dr. Rajesh Kumar",
    role: "Chief Veterinarian",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d",
    bio: "Leading our medical team with 15 years of experience in animal healthcare.",
    socials: [
      {
        platform: "linkedin",
        url: "https://linkedin.com/in/dr-rajesh",
        gradient: "from-blue-600/20 to-blue-700/20",
        hoverGradient: "from-blue-600/30 to-blue-700/30"
      },
      {
        platform: "twitter",
        url: "https://twitter.com/dr_rajesh",
        gradient: "from-blue-400/20 to-blue-500/20",
        hoverGradient: "from-blue-400/30 to-blue-500/30"
      }
    ]
  },
  {
    name: "Priya Sharma",
    role: "Rescue Coordinator",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2",
    bio: "Coordinating emergency rescues and rehabilitation programs.",
    socials: [
      {
        platform: "linkedin",
        url: "https://linkedin.com/in/priya-sharma",
        gradient: "from-blue-600/20 to-blue-700/20",
        hoverGradient: "from-blue-600/30 to-blue-700/30"
      },
      {
        platform: "email",
        url: "mailto:priya@alwaranimalwelfare.org",
        gradient: "from-rose-500/20 to-pink-600/20",
        hoverGradient: "from-rose-500/30 to-pink-600/30"
      }
    ]
  },
  {
    name: "Amit Patel",
    role: "Community Outreach",
    image: "https://images.unsplash.com/photo-1556157382-97eda2f9e2bf",
    bio: "Building partnerships and organizing awareness programs.",
    socials: [
      {
        platform: "twitter",
        url: "https://twitter.com/amit_outreach",
        gradient: "from-blue-400/20 to-blue-500/20",
        hoverGradient: "from-blue-400/30 to-blue-500/30"
      },
      {
        platform: "email",
        url: "mailto:amit@alwaranimalwelfare.org",
        gradient: "from-rose-500/20 to-pink-600/20",
        hoverGradient: "from-rose-500/30 to-pink-600/30"
      }
    ]
  },
  {
    name: "Sarah Khan",
    role: "Volunteer Coordinator",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956",
    bio: "Managing our growing network of dedicated volunteers.",
    socials: [
      {
        platform: "linkedin",
        url: "https://linkedin.com/in/sarah-khan",
        gradient: "from-blue-600/20 to-blue-700/20",
        hoverGradient: "from-blue-600/30 to-blue-700/30"
      },
      {
        platform: "twitter",
        url: "https://twitter.com/sarah_volunteers",
        gradient: "from-blue-400/20 to-blue-500/20",
        hoverGradient: "from-blue-400/30 to-blue-500/30"
      }
    ]
  }
];

export default function Teams() {
  return (
    <SupernovaSection>
      <section id="teams" className="py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Meet Our Team
            </h2>
            <p className="mt-4 text-xl text-gray-300">
              Dedicated professionals working together for animal welfare
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <TeamMember key={index} {...member} />
            ))}
          </div>
        </div>
      </section>
    </SupernovaSection>
  );
}