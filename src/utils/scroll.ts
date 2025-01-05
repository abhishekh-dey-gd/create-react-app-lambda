import { type MouseEvent } from 'react';

export const scrollToSection = (e: MouseEvent<HTMLAnchorElement>) => {
  e.preventDefault();
  const href = e.currentTarget.getAttribute('href');
  if (!href?.startsWith('#')) return;

  const targetId = href.replace('#', '');
  const element = document.getElementById(targetId);
  
  if (element) {
    const headerOffset = 64; // Height of the fixed header
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};