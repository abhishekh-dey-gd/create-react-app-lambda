import React, { useEffect, useState } from 'react';

export default function DynamicBackground() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hue, setHue] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setHue((prev) => (prev + 0.5) % 360);
    }, 50);

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      clearInterval(interval);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-10">
      <div 
        className="absolute inset-0 bg-gradient-to-br transition-colors duration-1000"
        style={{
          background: `linear-gradient(${position.x}deg, 
            hsl(${hue}, 70%, 20%) 0%,
            hsl(${(hue + 60) % 360}, 70%, 20%) 50%,
            hsl(${(hue + 120) % 360}, 70%, 20%) 100%)`
        }}
      />
      <div className="absolute inset-0 backdrop-blur-[100px]" />
      {/* Glass morphism orbs */}
      <div 
        className="absolute w-[500px] h-[500px] rounded-full"
        style={{
          background: `radial-gradient(circle at center, 
            hsla(${hue}, 70%, 50%, 0.3),
            hsla(${hue}, 70%, 50%, 0.1))`,
          left: `${position.x}%`,
          top: `${position.y}%`,
          transform: 'translate(-50%, -50%)',
          filter: 'blur(100px)',
        }}
      />
      <div 
        className="absolute w-[300px] h-[300px] rounded-full"
        style={{
          background: `radial-gradient(circle at center, 
            hsla(${(hue + 120) % 360}, 70%, 50%, 0.3),
            hsla(${(hue + 120) % 360}, 70%, 50%, 0.1))`,
          left: `${100 - position.x}%`,
          top: `${100 - position.y}%`,
          transform: 'translate(-50%, -50%)',
          filter: 'blur(100px)',
        }}
      />
    </div>
  );
}