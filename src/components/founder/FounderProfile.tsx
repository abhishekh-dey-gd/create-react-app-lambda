import React from 'react';
import { Mail, Twitter, Linkedin } from 'lucide-react';

const socialLinks = [
  {
    icon: <Twitter className="h-5 w-5" />,
    href: "https://twitter.com/harshitasingh",
    label: "Follow on Twitter",
    gradient: "from-blue-400/20 to-blue-500/20",
    hoverGradient: "from-blue-400/30 to-blue-500/30"
  },
  {
    icon: <Linkedin className="h-5 w-5" />,
    href: "https://linkedin.com/in/harshitasingh",
    label: "Connect on LinkedIn",
    gradient: "from-blue-600/20 to-blue-700/20",
    hoverGradient: "from-blue-600/30 to-blue-700/30"
  },
  {
    icon: <Mail className="h-5 w-5" />,
    href: "mailto:harshita@alwaranimalwelfare.org",
    label: "Send an email",
    gradient: "from-rose-500/20 to-pink-600/20",
    hoverGradient: "from-rose-500/30 to-pink-600/30"
  }
];

export default function FounderProfile() {
  return (
    <div className="glass-card rounded-lg p-6 sticky top-20 border border-white/5">
      <div className="relative">
        <img
          src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e"
          alt="Harshita Singh"
          className="w-32 h-32 rounded-full mx-auto mb-4 object-cover ring-2 ring-rose-500/20"
        />
        <div className="absolute inset-0 rounded-full bg-gradient-to-b from-rose-500/10 to-transparent pointer-events-none" />
      </div>
      <h2 className="text-2xl font-bold text-white text-center mb-2">
        Harshita Singh
      </h2>
      <p className="text-rose-400 text-center mb-4">Founder & Director</p>
      <p className="text-gray-300 text-center mb-6">
        Dedicated to creating a better world for animals through compassion and action.
      </p>
      <div className="flex justify-center gap-4">
        {socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`
              relative group p-3 rounded-full
              backdrop-blur-sm bg-gradient-to-br ${link.gradient}
              hover:scale-110 transition-all duration-300
              ring-1 ring-white/10 hover:ring-white/20
              shadow-lg hover:shadow-xl
            `}
            title={link.label}
          >
            <div className={`
              absolute inset-0 rounded-full opacity-0 group-hover:opacity-100
              bg-gradient-to-br ${link.hoverGradient} blur transition-opacity duration-300
            `} />
            <div className="relative text-white group-hover:text-white/90 transition-colors">
              {link.icon}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}