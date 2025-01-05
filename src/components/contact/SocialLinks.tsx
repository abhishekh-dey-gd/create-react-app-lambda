import React from 'react';
import { Facebook, Instagram, Linkedin, Mail, Phone } from 'lucide-react';

interface SocialLink {
  icon: React.ReactNode;
  href: string;
  label: string;
  gradient: string;
  hoverGradient: string;
}

const socialLinks: SocialLink[] = [
  {
    icon: <Facebook className="h-6 w-6" />,
    href: 'https://facebook.com/nurtureanimalcare',
    label: 'Follow us on Facebook',
    gradient: 'from-blue-500/20 to-blue-600/20',
    hoverGradient: 'from-blue-500/30 to-blue-600/30'
  },
  {
    icon: <Instagram className="h-6 w-6" />,
    href: 'https://instagram.com/nurtureanimalcare',
    label: 'Follow us on Instagram',
    gradient: 'from-pink-500/20 via-purple-500/20 to-orange-500/20',
    hoverGradient: 'from-pink-500/30 via-purple-500/30 to-orange-500/30'
  },
  {
    icon: <Linkedin className="h-6 w-6" />,
    href: 'https://linkedin.com/company/nurtureanimalcare',
    label: 'Connect on LinkedIn',
    gradient: 'from-blue-600/20 to-blue-700/20',
    hoverGradient: 'from-blue-600/30 to-blue-700/30'
  },
  {
    icon: <Mail className="h-6 w-6" />,
    href: 'mailto:contact@alwaranimalwelfare.org',
    label: 'Send us an email',
    gradient: 'from-rose-500/20 to-pink-600/20',
    hoverGradient: 'from-rose-500/30 to-pink-600/30'
  },
  {
    icon: <Phone className="h-6 w-6" />,
    href: 'tel:+919876543210',
    label: 'Call us',
    gradient: 'from-green-500/20 to-emerald-600/20',
    hoverGradient: 'from-green-500/30 to-emerald-600/30'
  }
];

export default function SocialLinks() {
  return (
    <div className="mt-8 pt-8 border-t border-gray-700">
      <h3 className="text-lg font-medium text-white mb-4">Connect With Us</h3>
      <div className="flex flex-wrap gap-4">
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