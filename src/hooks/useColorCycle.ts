import { useState, useEffect } from 'react';

export function useColorCycle(speed = 0.5) {
  const [hue, setHue] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setHue((prev) => (prev + speed) % 360);
    }, 50);

    return () => clearInterval(interval);
  }, [speed]);

  return hue;
}