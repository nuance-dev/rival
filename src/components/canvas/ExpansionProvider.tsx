"use client";

import React, { createContext, useState, useContext, useCallback, useEffect, useRef, useMemo } from "react";

// Create a singleton to track if the provider has been mounted
let providerMounted = false;

interface ExpansionContextType {
  expandedId: string | null;
  setExpandedId: (id: string | null) => void;
  isInitialRender: boolean;
  cleanupBackdrop: () => void;
  manualCleanupAllCards: () => void;
}

export const ExpansionContext = createContext<ExpansionContextType>({
  expandedId: null,
  setExpandedId: () => {},
  isInitialRender: true,
  cleanupBackdrop: () => {},
  manualCleanupAllCards: () => {}
});

export const useExpansion = () => useContext(ExpansionContext);

export function ExpansionProvider({ children }: { children: React.ReactNode }) {
  const [expandedId, setExpandedIdInternal] = useState<string | null>(null);
  const [isInitialRender, setIsInitialRender] = useState(true);
  
  // Use a ref to track the current expansion state for more reliable access
  const expandedIdRef = useRef<string | null>(null);
  
  // Track active cleanup operations to prevent race conditions
  const isCleaningUpRef = useRef(false);
  
  // Track active timeouts for proper cleanup
  const timeoutsRef = useRef<Set<NodeJS.Timeout>>(new Set());
  
  // Add a timeout with tracking
  const addTimeout = useCallback((callback: () => void, delay: number): NodeJS.Timeout => {
    const timeoutId = setTimeout(() => {
      timeoutsRef.current.delete(timeoutId);
      callback();
    }, delay);
    timeoutsRef.current.add(timeoutId);
    return timeoutId;
  }, []);
  
  // Clear all tracked timeouts
  const clearAllTimeouts = useCallback(() => {
    timeoutsRef.current.forEach(id => clearTimeout(id));
    timeoutsRef.current.clear();
  }, []);
  
  // Safely get DOM elements without throwing errors
  const safeGetElement = useCallback((id: string) => {
    try {
      return document.getElementById(id);
    } catch (e) {
      console.error(`[ExpansionProvider] Error getting element with id ${id}:`, e);
      return null;
    }
  }, []);
  
  // More robust cleanupBackdrop function with error handling and race condition prevention
  const cleanupBackdrop = useCallback(() => {
    // Prevent concurrent cleanup operations
    if (isCleaningUpRef.current) {
      console.debug('[ExpansionProvider] Cleanup already in progress, skipping');
      return;
    }
    
    isCleaningUpRef.current = true;
    
    try {
      // First get the currently expanded ID for handling
      const currentExpandedId = expandedIdRef.current;
      
      // Get DOM elements
      const backdrop = safeGetElement('expansion-backdrop');
      const expandedCardContainer = safeGetElement('expanded-card-container');
      const modalContainer = safeGetElement('expansion-modal-container');
      
      // Skip cleanup if there's nothing to clean
      if (!backdrop && !expandedCardContainer && !modalContainer && currentExpandedId === null) {
        isCleaningUpRef.current = false;
        return;
      }
      
      // Clear any pending timeouts to prevent race conditions
      clearAllTimeouts();
      
      // Clean up backdrop with animation
      if (backdrop) {
        try {
          backdrop.style.opacity = '0';
          backdrop.style.pointerEvents = 'none';
          
          // Remove after animation completes
          addTimeout(() => {
            try {
              if (backdrop.parentNode) {
                backdrop.parentNode.removeChild(backdrop);
              }
            } catch (e) {
              console.error('[ExpansionProvider] Error removing backdrop:', e);
            }
          }, 300);
        } catch (e) {
          console.error('[ExpansionProvider] Error applying styles to backdrop:', e);
          // Force remove if styling fails
          try {
            if (backdrop.parentNode) {
              backdrop.parentNode.removeChild(backdrop);
            }
          } catch (e) {
            console.error('[ExpansionProvider] Error force removing backdrop:', e);
          }
        }
      }
      
      // Clean up expanded card container
      if (expandedCardContainer) {
        try {
          // Fade out first
          expandedCardContainer.style.opacity = '0';
          expandedCardContainer.style.pointerEvents = 'none';
          
          // Then clear content and remove
          addTimeout(() => {
            try {
              expandedCardContainer.innerHTML = '';
              if (expandedCardContainer.parentNode) {
                expandedCardContainer.parentNode.removeChild(expandedCardContainer);
              }
            } catch (e) {
              console.error('[ExpansionProvider] Error clearing expanded card container:', e);
            }
          }, 300);
        } catch (e) {
          console.error('[ExpansionProvider] Error with expanded card container:', e);
          // Force remove
          try {
            if (expandedCardContainer.parentNode) {
              expandedCardContainer.parentNode.removeChild(expandedCardContainer);
            }
          } catch (e) {
            console.error('[ExpansionProvider] Error force removing expanded card container:', e);
          }
        }
      }
      
      // Clean up modal container
      if (modalContainer) {
        try {
          modalContainer.style.opacity = '0';
          modalContainer.style.pointerEvents = 'none';
          
          addTimeout(() => {
            try {
              modalContainer.innerHTML = '';
              if (modalContainer.parentNode) {
                modalContainer.parentNode.removeChild(modalContainer);
              }
            } catch (e) {
              console.error('[ExpansionProvider] Error removing modal container:', e);
            }
          }, 300);
        } catch (e) {
          console.error('[ExpansionProvider] Error with modal container:', e);
          // Force remove
          try {
            if (modalContainer.parentNode) {
              modalContainer.parentNode.removeChild(modalContainer);
            }
          } catch (e) {
            console.error('[ExpansionProvider] Error force removing modal container:', e);
          }
        }
      }
      
      // Restore card visibility
      if (currentExpandedId) {
        try {
          // Find all card wrappers for the expanded card and make them visible again
          document.querySelectorAll(`[data-card-id="${currentExpandedId}"]`).forEach(wrapper => {
            try {
              const element = wrapper as HTMLElement;
              element.style.visibility = '';
              element.style.opacity = '1';
              element.setAttribute('aria-expanded', 'false');
            } catch (classError) {
              console.error('[ExpansionProvider] Error updating card wrapper:', classError);
            }
          });
          
          // Also restore any invisible card wrappers
          document.querySelectorAll(`.card-wrapper.invisible`).forEach(wrapper => {
            try {
              wrapper.classList.remove('invisible');
              wrapper.classList.add('visible');
            } catch (classError) {
              console.error('[ExpansionProvider] Error updating card wrapper classes:', classError);
            }
          });
        } catch (error) {
          console.error('[ExpansionProvider] Error restoring card wrappers:', error);
        }
      }
      
      // Re-enable scrolling
      document.body.style.overflow = '';
      
    } catch (error) {
      console.error('[ExpansionProvider] Error in cleanupBackdrop:', error);
      // Emergency cleanup
      document.body.style.overflow = '';
      
      try {
        const backdrop = document.getElementById('expansion-backdrop');
        if (backdrop && backdrop.parentNode) {
          backdrop.parentNode.removeChild(backdrop);
        }
        
        const expandedCardContainer = document.getElementById('expanded-card-container');
        if (expandedCardContainer && expandedCardContainer.parentNode) {
          expandedCardContainer.parentNode.removeChild(expandedCardContainer);
        }
        
        const modalContainer = document.getElementById('expansion-modal-container');
        if (modalContainer && modalContainer.parentNode) {
          modalContainer.parentNode.removeChild(modalContainer);
        }
      } catch (e) {
        console.error('[ExpansionProvider] Critical error in emergency cleanup:', e);
      }
    } finally {
      // Always reset the cleaning flag
      isCleaningUpRef.current = false;
    }
  }, [safeGetElement, addTimeout, clearAllTimeouts]);
  
  // New function to manually clean up all expanded cards with improved reliability
  const manualCleanupAllCards = useCallback(() => {
    try {
      // Only run cleanup if there's an expanded card
      if (expandedIdRef.current === null) {
        return;
      }
      
      // Reset state
      expandedIdRef.current = null;
      
      // Important: Use a functional update to prevent stale state issues
      setExpandedIdInternal(null);
      
      // Clean up backdrop and expanded cards
      cleanupBackdrop();
      
      // Force cleanup of any stray expanded cards
      try {
        const expandedCardContainer = safeGetElement('expanded-card-container');
        if (expandedCardContainer) {
          expandedCardContainer.innerHTML = '';
          expandedCardContainer.style.display = 'none';
          
          // Remove after a short delay to ensure animations complete
          addTimeout(() => {
            if (expandedCardContainer.parentNode) {
              expandedCardContainer.parentNode.removeChild(expandedCardContainer);
            }
          }, 300);
        }
      } catch (e) {
        console.error('[ExpansionProvider] Error cleaning up expanded card container:', e);
      }
      
      // Make all card wrappers visible again
      try {
        document.querySelectorAll('.card-wrapper').forEach(wrapper => {
          try {
            const element = wrapper as HTMLElement;
            element.style.visibility = '';
            element.style.opacity = '1';
            element.classList.remove('invisible');
            element.setAttribute('aria-expanded', 'false');
          } catch (e) {
            console.error('[ExpansionProvider] Error restoring card wrapper:', e);
          }
        });
      } catch (e) {
        console.error('[ExpansionProvider] Error restoring all card wrappers:', e);
      }
      
      // Re-enable scrolling
      document.body.style.overflow = '';
      
    } catch (error) {
      console.error('[ExpansionProvider] Error in manualCleanupAllCards:', error);
      // Emergency cleanup
      document.body.style.overflow = '';
    }
  }, [cleanupBackdrop, safeGetElement, addTimeout]);
  
  // Sync expandedId with ref for more reliable access - use a separate effect to prevent loops
  useEffect(() => {
    expandedIdRef.current = expandedId;
  }, [expandedId]);
  
  // Set up initial render state
  useEffect(() => {
    // Mark that we're no longer in initial render after a short delay
    const timer = setTimeout(() => {
      setIsInitialRender(false);
    }, 500);
    
    // Mark that the provider has been mounted - this helps prevent multiple instances
    if (!providerMounted) {
      providerMounted = true;
      console.debug('[ExpansionProvider] Provider mounted for the first time');
    }
    
    return () => {
      clearTimeout(timer);
    };
  }, []);
  
  // Separate effect for cleanup to avoid dependency cycles
  useEffect(() => {
    return () => {
      // Clean up any expanded cards when unmounting
      if (expandedIdRef.current) {
        manualCleanupAllCards();
      }
    };
  }, [manualCleanupAllCards]);
  
  // Handle route changes to clean up expanded cards
  useEffect(() => {
    const handleRouteChange = () => {
      if (expandedIdRef.current) {
        manualCleanupAllCards();
      }
    };
    
    // Listen for route changes if we're in a browser environment
    if (typeof window !== 'undefined') {
      window.addEventListener('popstate', handleRouteChange);
      
      // Also listen for the Next.js router events if available
      try {
        // Use a more specific type for the Next.js router
        interface NextRouter {
          events: {
            on: (event: string, handler: () => void) => void;
            off: (event: string, handler: () => void) => void;
          };
        }
        
        const nextRouter = (window as unknown as { __NEXT_ROUTER__?: NextRouter }).__NEXT_ROUTER__;
        if (nextRouter && nextRouter.events) {
          nextRouter.events.on('routeChangeStart', handleRouteChange);
        }
      } catch {
        // Ignore errors with Next.js router
      }
    }
    
    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('popstate', handleRouteChange);
        
        try {
          // Use the same type definition as above
          interface NextRouter {
            events: {
              on: (event: string, handler: () => void) => void;
              off: (event: string, handler: () => void) => void;
            };
          }
          
          const nextRouter = (window as unknown as { __NEXT_ROUTER__?: NextRouter }).__NEXT_ROUTER__;
          if (nextRouter && nextRouter.events) {
            nextRouter.events.off('routeChangeStart', handleRouteChange);
          }
        } catch {
          // Ignore errors with Next.js router
        }
      }
    };
  }, [manualCleanupAllCards]);
  
  // Handle escape key to close expanded cards
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && expandedIdRef.current) {
        e.preventDefault();
        manualCleanupAllCards();
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [manualCleanupAllCards]);
  
  // Handle global click to close expanded cards when clicking outside
  useEffect(() => {
    const handleGlobalClick = (e: MouseEvent) => {
      if (!expandedIdRef.current) return;
      
      // Check if the click was on the backdrop
      const target = e.target as HTMLElement;
      if (target.id === 'expansion-backdrop') {
        e.preventDefault();
        manualCleanupAllCards();
      }
    };
    
    window.addEventListener('click', handleGlobalClick);
    
    return () => {
      window.removeEventListener('click', handleGlobalClick);
    };
  }, [manualCleanupAllCards]);
  
  // Clean up on unmount
  useEffect(() => {
    return () => {
      // Clear all timeouts
      clearAllTimeouts();
      
      // Clean up any expanded cards
      if (expandedIdRef.current) {
        // Use direct DOM manipulation for cleanup to avoid state updates during unmount
        try {
          const backdrop = document.getElementById('expansion-backdrop');
          if (backdrop && backdrop.parentNode) {
            backdrop.parentNode.removeChild(backdrop);
          }
          
          const expandedCardContainer = document.getElementById('expanded-card-container');
          if (expandedCardContainer && expandedCardContainer.parentNode) {
            expandedCardContainer.parentNode.removeChild(expandedCardContainer);
          }
          
          document.body.style.overflow = '';
        } catch (e) {
          console.error('[ExpansionProvider] Error in unmount cleanup:', e);
        }
      }
    };
  }, [clearAllTimeouts]);
  
  // Wrap setExpandedId to ensure we update the ref
  const setExpandedId = useCallback((id: string | null) => {
    // Only update if the value is actually changing
    if (expandedIdRef.current !== id) {
      expandedIdRef.current = id;
      setExpandedIdInternal(id);
    }
  }, []);
  
  // Memoize context value to prevent unnecessary re-renders
  const contextValue = useMemo(() => ({
    expandedId,
    setExpandedId,
    isInitialRender,
    cleanupBackdrop,
    manualCleanupAllCards
  }), [expandedId, setExpandedId, isInitialRender, cleanupBackdrop, manualCleanupAllCards]);
  
  return (
    <ExpansionContext.Provider value={contextValue}>
      {children}
    </ExpansionContext.Provider>
  );
} 