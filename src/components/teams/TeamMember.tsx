import React from 'react';
import { Twitter, Linkedin, Mail } from 'lucide-react';

interface SocialLink {
  platform: 'twitter' | 'linkedin' | 'email';
  url: string;
  gradient: string;
  hoverGradient: string;
}

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  bio: string;
  socials: SocialLink[];
}

const SocialIcon = ({ platform }: { platform: string }) => {
  switch (platform) {
    case 'twitter':
      return <Twitter className="h-5 w-5" />;
    case 'linkedin':
      return <Linkedin className="h-5 w-5" />;
    case 'email':
      return <Mail className="h-5 w-5" />;
    default:
      return null;
  }
};

export default function TeamMember({ name, role, image, bio, socials }: TeamMemberProps) {
  return (
    <div className="glass-card rounded-lg overflow-hidden group">
      <div className="relative h-64">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-80" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white">{name}</h3>
        <p className="text-rose-400 mt-1">{role}</p>
        <p className="text-gray-300 mt-2 text-sm">{bio}</p>
        <div className="flex gap-3 mt-4">
          {socials.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`
                relative group/icon p-2 rounded-full
                backdrop-blur-sm bg-gradient-to-br ${social.gradient}
                hover:scale-110 transition-all duration-300
                ring-1 ring-white/10 hover:ring-white/20
                shadow-lg hover:shadow-xl
              `}
            >
              <div className={`
                absolute inset-0 rounded-full opacity-0 group-hover/icon:opacity-100
                bg-gradient-to-br ${social.hoverGradient} blur transition-opacity duration-300
              `} />
              <div className="relative text-white group-hover/icon:text-white/90 transition-colors">
                <SocialIcon platform={social.platform} />
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}