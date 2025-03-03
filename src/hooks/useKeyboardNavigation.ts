"use client";

import { useEffect, useCallback, useState, RefObject } from 'react';

type KeyboardNavigationOptions = {
  /**
   * Ref to the container element to attach keyboard events
   */
  containerRef: RefObject<HTMLElement>;
  /**
   * Selector for the focusable elements
   */
  selector?: string;
  /**
   * Whether to loop navigation (from last to first and vice versa)
   */
  loop?: boolean;
  /**
   * Whether to auto-focus the first element when mounted
   */
  autoFocus?: boolean;
  /**
   * Callback when an element is focused
   */
  onFocus?: (element: HTMLElement, index: number) => void;
  /**
   * Callback when an element is activated (Enter or Space)
   */
  onActivate?: (element: HTMLElement, index: number) => void;
  /**
   * Whether keyboard navigation is enabled
   */
  enabled?: boolean;
};

/**
 * Hook to handle keyboard navigation for accessible UI components
 * 
 * @param options Configuration options for keyboard navigation
 * @returns Object containing current state and helper methods
 */
export function useKeyboardNavigation({
  containerRef,
  selector = 'button, a, [tabindex]:not([tabindex="-1"])',
  loop = true,
  autoFocus = false,
  onFocus,
  onActivate,
  enabled = true,
}: KeyboardNavigationOptions) {
  const [currentIndex, setCurrentIndex] = useState<number>(-1);
  
  // Get all focusable elements
  const getFocusableElements = useCallback((): HTMLElement[] => {
    if (!containerRef.current) return [];
    
    const elements = Array.from(
      containerRef.current.querySelectorAll<HTMLElement>(selector)
    ).filter(el => {
      // Filter out hidden elements
      return !el.hasAttribute('disabled') && 
             !el.hasAttribute('aria-hidden') && 
             el.style.display !== 'none' &&
             el.style.visibility !== 'hidden';
    });
    
    return elements;
  }, [containerRef, selector]);
  
  // Focus an element by index
  const focusElementByIndex = useCallback((index: number) => {
    const elements = getFocusableElements();
    if (elements.length === 0) return;
    
    // Handle loop navigation
    let newIndex = index;
    if (loop) {
      if (index < 0) newIndex = elements.length - 1;
      if (index >= elements.length) newIndex = 0;
    } else {
      if (index < 0 || index >= elements.length) return;
    }
    
    const element = elements[newIndex];
    element.focus();
    setCurrentIndex(newIndex);
    
    if (onFocus) {
      onFocus(element, newIndex);
    }
  }, [getFocusableElements, loop, onFocus]);
  
  // Handle keyboard navigation
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (!enabled) return;
    
    const elements = getFocusableElements();
    if (elements.length === 0) return;
    
    let newIndex = currentIndex;
    
    switch (e.key) {
      case 'ArrowDown':
      case 'ArrowRight':
        e.preventDefault();
        newIndex = currentIndex + 1;
        break;
      case 'ArrowUp':
      case 'ArrowLeft':
        e.preventDefault();
        newIndex = currentIndex - 1;
        break;
      case 'Home':
        e.preventDefault();
        newIndex = 0;
        break;
      case 'End':
        e.preventDefault();
        newIndex = elements.length - 1;
        break;
      case 'Enter':
      case ' ':
        if (currentIndex >= 0 && currentIndex < elements.length && onActivate) {
          e.preventDefault();
          onActivate(elements[currentIndex], currentIndex);
        }
        return;
      default:
        return;
    }
    
    focusElementByIndex(newIndex);
  }, [currentIndex, enabled, focusElementByIndex, getFocusableElements, onActivate]);
  
  // Initialize and cleanup
  useEffect(() => {
    const container = containerRef.current;
    if (!container || !enabled) return;
    
    container.addEventListener('keydown', handleKeyDown);
    
    if (autoFocus) {
      focusElementByIndex(0);
    }
    
    // Add role="navigation" for screen readers if not already present
    if (!container.hasAttribute('role')) {
      container.setAttribute('role', 'navigation');
    }
    
    return () => {
      container.removeEventListener('keydown', handleKeyDown);
    };
  }, [containerRef, handleKeyDown, focusElementByIndex, autoFocus, enabled]);
  
  // Reset current index when dependencies change
  // Using an ID or key instead of the ref itself to avoid the mutable ref warning
  useEffect(() => {
    setCurrentIndex(-1);
  }, []);
  
  return {
    currentIndex,
    focusElementByIndex,
    getFocusableElements,
    setCurrentIndex,
  };
}

export default useKeyboardNavigation; 