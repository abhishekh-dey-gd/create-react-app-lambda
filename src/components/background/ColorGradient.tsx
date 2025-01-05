import React from 'react';

interface ColorGradientProps {
  hue: number;
  angle: number;
}

export function ColorGradient({ hue, angle }: ColorGradientProps) {
  return (
    <div 
      className="absolute inset-0 transition-[background] duration-1000 ease-in-out"
      style={{
        background: `linear-gradient(${angle}deg, 
          hsl(${hue}, 70%, 8%) 0%,
          hsl(${(hue + 60) % 360}, 70%, 12%) 50%,
          hsl(${(hue + 120) % 360}, 70%, 8%) 100%)`
      }}
    />
  );
}