import React from 'react';

interface GlassOrbProps {
  hue: number;
  size: number;
  position: { x: number; y: number };
  offset?: boolean;
}

export function GlassOrb({ hue, size, position, offset = false }: GlassOrbProps) {
  const x = offset ? 100 - position.x : position.x;
  const y = offset ? 100 - position.y : position.y;

  return (
    <div 
      className="absolute rounded-full transition-all duration-300 ease-out"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        background: `radial-gradient(circle at center, 
          hsla(${hue}, 70%, 50%, 0.2),
          hsla(${hue}, 70%, 50%, 0.05))`,
        left: `${x}%`,
        top: `${y}%`,
        transform: 'translate(-50%, -50%)',
        filter: 'blur(80px)',
      }}
    />
  );
}