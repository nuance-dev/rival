import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

type ScrollAnimationOptions = {
  /** Threshold value (0-1) that determines when the animation triggers */
  threshold?: number;
  /** Whether to trigger only once or every time the element comes into view */
  triggerOnce?: boolean;
  /** Delay before the animation starts after the element is in view (ms) */
  delay?: number;
};

/**
 * Custom hook for triggering animations based on scroll position
 * 
 * @param options Configuration options for the scroll animation
 * @returns Object containing ref to attach to the element and whether it's in view
 */
export function useScrollAnimation({
  threshold = 0.2,
  triggerOnce = true,
  delay = 0,
}: ScrollAnimationOptions = {}) {
  const ref = useRef<HTMLElement>(null);
  // The useInView hook only accepts 'once' and 'amount' parameters
  const isInView = useInView(ref, { 
    once: triggerOnce, 
    amount: threshold,
  });
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        setShouldAnimate(true);
      }, delay);
      
      return () => clearTimeout(timer);
    }
    
    if (!triggerOnce) {
      setShouldAnimate(false);
    }
  }, [isInView, delay, triggerOnce]);

  return { ref, isInView, shouldAnimate };
}

export default useScrollAnimation; 