"use client"
import React, { useState, useEffect, useRef } from 'react'
import { cn } from '@/lib/utils'

export function FadeIn(props: any) {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);
  const { delay = 0, ...rest } = props;

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (domRef.current) {
            observer.unobserve(domRef.current);
          }
        }
      });
    }, {
      threshold: 0.1
    });

    const { current } = domRef;
    if (current) {
      observer.observe(current);
    }

    return () => {
      if (current) {
        observer.unobserve(current);
      }
    };
  }, []);

  return (
    <div
      ref={domRef}
      {...rest}
      className={cn(props.className, "transition-all duration-700 ease-out", isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5")}
      style={{ transitionDelay: `${delay}ms` }}
    />
  )
}
