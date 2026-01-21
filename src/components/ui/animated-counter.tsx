"use client";

import { useEffect, useRef, useState } from 'react';

interface AnimatedCounterProps {
  target: number;
  suffix?: string;
  className?: string;
  duration?: number;
}

export function AnimatedCounter({ target, suffix = '', className, duration = 1500 }: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    let start = 0;
    const end = target;
    const startTime = Date.now();

    const animateCount = () => {
      const now = Date.now();
      const progress = Math.min(1, (now - startTime) / duration);
      const current = Math.floor(progress * (end - start) + start);
      setCount(current);

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animateCount);
      } else {
        setCount(end); // Ensure it ends on the exact target
      }
    };
    
    frameRef.current = requestAnimationFrame(animateCount);

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [target, duration]);

  return (
    <span ref={ref} className={className}>
      {count}{suffix}
    </span>
  );
}
