import React from 'react';
import { useColorCycle } from '../../hooks/useColorCycle';

interface SupernovaSectionProps {
  children: React.ReactNode;
  className?: string;
}

export function SupernovaSection({ children, className = '' }: SupernovaSectionProps) {
  const hue = useColorCycle(0.3);
  
  return (
    <div className="relative">
      {/* Supernova background effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            background: `
              radial-gradient(circle at 50% 50%, 
                hsl(${hue}, 70%, 40%) 0%,
                hsl(${(hue + 30) % 360}, 70%, 30%) 25%,
                hsl(${(hue + 60) % 360}, 70%, 20%) 50%,
                transparent 70%
              )
            `
          }}
        />
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            background: `
              radial-gradient(circle at 30% 70%, 
                hsl(${(hue + 120) % 360}, 70%, 40%) 0%,
                hsl(${(hue + 150) % 360}, 70%, 30%) 25%,
                hsl(${(hue + 180) % 360}, 70%, 20%) 50%,
                transparent 70%
              )
            `
          }}
        />
      </div>

      {/* Glass morphism overlay */}
      <div className="absolute inset-0 backdrop-blur-[30px]" />

      {/* Content */}
      <div className={`relative ${className}`}>
        {children}
      </div>
    </div>
  );
}