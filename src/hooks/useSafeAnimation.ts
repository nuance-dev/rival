import { useState, useEffect } from 'react';

/**
 * Custom hook to safely handle animations and prevent double triggering or jumping effects
 * 
 * @param animationId A unique identifier for the animation to prevent duplicate instances
 * @param delay Optional delay before starting the animation in milliseconds
 * @returns Object containing animation state and control functions
 */
export function useSafeAnimation(key: string, offsetMs = 0) {
  // Start with isVisible true to prevent layout shifts
  const [isVisible, setIsVisible] = useState(true);
  const [hasStarted, setHasStarted] = useState(true);
  
  useEffect(() => {
    // Check if this animation has been seen before in this session
    const hasBeenSeen = sessionStorage.getItem(`animation-${key}`);
    
    if (hasBeenSeen) {
      // If it's been seen, immediately set both states to true (without any delay)
      setIsVisible(true);
      setHasStarted(true);
      return;
    }
    
    // Mark this animation as seen for future reference
    sessionStorage.setItem(`animation-${key}`, 'true');
    
    // For initial page load, we want to start with everything visible
    // to prevent layout shifts, so we don't need to change the state
    
    return () => {
      // Cleanup function
    };
  }, [key, offsetMs]);
  
  return { isVisible, hasStarted };
}

/**
 * Utility function to clear all animation states from sessionStorage
 * Useful for development or when you need to replay animations
 */
export function clearAllAnimations() {
  // Find all animation-related keys in sessionStorage
  const animationKeys = [];
  for (let i = 0; i < sessionStorage.length; i++) {
    const key = sessionStorage.key(i);
    if (key && key.startsWith('animation-')) {
      animationKeys.push(key);
    }
  }
  
  // Remove all animation keys
  animationKeys.forEach(key => {
    sessionStorage.removeItem(key);
  });
  
  console.log(`Cleared ${animationKeys.length} animation states`);
  return animationKeys.length;
}

export default useSafeAnimation; 