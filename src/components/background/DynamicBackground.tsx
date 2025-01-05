import React from 'react';
import { ColorGradient } from './ColorGradient';
import { GlassOrb } from './GlassOrb';
import { useMousePosition } from '../../hooks/useMousePosition';
import { useColorCycle } from '../../hooks/useColorCycle';

export default function DynamicBackground() {
  const position = useMousePosition();
  const hue = useColorCycle();
  
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <ColorGradient hue={hue} angle={position.x} />
      <div className="absolute inset-0 backdrop-blur-[120px]" />
      <GlassOrb hue={hue} size={500} position={position} />
      <GlassOrb hue={hue + 120} size={300} position={position} offset />
      {/* Add noise texture overlay */}
      <div 
        className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
}