import React, { useState, useEffect } from 'react';
import { Heart, Menu, X } from 'lucide-react';
import { scrollToSection } from '../utils/scroll';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', text: 'Home' },
    { href: '#about', text: 'About' },
    { href: '#teams', text: 'Teams' },
    { href: '#founders-column', text: "Founder's Column" },
    { href: '#gallery', text: 'Gallery' },
    { href: '#contact', text: 'Contact' }
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'glass-panel shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Heart className="h-8 w-8 text-rose-500" />
            <span className="ml-3 text-white font-semibold text-lg hidden sm:block">
              Nurture Animal Care - Alwar
            </span>
            <span className="ml-3 text-white font-semibold text-lg sm:hidden">
              NAC Alwar
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex space-x-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={scrollToSection}
                  className="text-white/90 hover:text-rose-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                >
                  {link.text}
                </a>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-rose-500 focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100 max-h-96' : 'opacity-0 max-h-0 overflow-hidden'}`}>
        <div className="glass-panel px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                scrollToSection(e);
                setIsOpen(false);
              }}
              className="text-white/90 hover:text-rose-400 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
            >
              {link.text}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}