import { useCallback, useEffect, useRef, useState } from 'react';
import { useExpansion } from '../ExpansionProvider';
import { getCanonicalModelId, getSanitizedChallengeId } from '@/lib/utils';

interface UseCardExpansionProps {
  cardId: string;
  modelId?: string;
  challengeId?: string;
}

interface UseCardExpansionReturn {
  isExpanded: boolean;
  isExpanding: boolean;
  toggleExpand: (e?: React.MouseEvent) => void;
  navigateToModel: (e?: React.MouseEvent) => void;
  navigateToChallenge: (e?: React.MouseEvent) => void;
}

export const useCardExpansion = ({
  cardId,
  modelId,
  challengeId
}: UseCardExpansionProps): UseCardExpansionReturn => {
  const { expandedId, setExpandedId, cleanupBackdrop, manualCleanupAllCards } = useExpansion();
  const [localExpanded, setLocalExpanded] = useState(expandedId === cardId);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  // Refs for tracking state
  const expansionTimeRef = useRef<number | null>(null);
  const operationInProgressRef = useRef(false);
  const expandedIdRef = useRef<string | null>(expandedId);
  const isExpandingRef = useRef(false);
  const cleanupTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const backdropRef = useRef<HTMLDivElement | null>(null);
  const portalRef = useRef<HTMLDivElement | null>(null);
  const animationFrameRef = useRef<number | null>(null);
  
  // Constants
  const EXPANSION_COOLDOWN = 250; // Reduced from 300ms for better responsiveness
  const TRANSITION_DURATION = 200; // Reduced from 250ms for faster transitions

  // Update refs when expandedId changes - use a separate effect to prevent loops
  useEffect(() => {
    expandedIdRef.current = expandedId;
  }, [expandedId]);
  
  // Update local expanded state based on expandedId changes
  useEffect(() => {
    if (expandedId === cardId && !localExpanded) {
      setLocalExpanded(true);
      expansionTimeRef.current = Date.now();
    } else if (expandedId !== cardId && localExpanded) {
      setLocalExpanded(false);
    }
  }, [expandedId, cardId, localExpanded]);

  // Cleanup function with improved reliability
  const cleanup = useCallback(() => {
    // Prevent concurrent cleanup operations
    if (operationInProgressRef.current) {
      return;
    }
    
    operationInProgressRef.current = true;
    
    try {
      // Cancel any pending timeouts
      if (cleanupTimeoutRef.current) {
        clearTimeout(cleanupTimeoutRef.current);
        cleanupTimeoutRef.current = null;
      }
      
      // Cancel any animation frames
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
        animationFrameRef.current = null;
      }
      
      // Remove backdrop with animation
      if (backdropRef.current) {
        backdropRef.current.style.opacity = '0';
        backdropRef.current.style.pointerEvents = 'none';
        
        const backdropElement = backdropRef.current;
        cleanupTimeoutRef.current = setTimeout(() => {
          if (backdropElement && backdropElement.parentNode) {
            backdropElement.parentNode.removeChild(backdropElement);
          }
          backdropRef.current = null;
        }, TRANSITION_DURATION);
      }
      
      // Remove portal with animation
      if (portalRef.current) {
        portalRef.current.style.opacity = '0';
        portalRef.current.style.pointerEvents = 'none';
        
        const portalElement = portalRef.current;
        const portalTimeout = setTimeout(() => {
          if (portalElement && portalElement.parentNode) {
            portalElement.parentNode.removeChild(portalElement);
          }
          portalRef.current = null;
        }, TRANSITION_DURATION);
        
        // Track the timeout
        const existingTimeout = cleanupTimeoutRef.current;
        cleanupTimeoutRef.current = setTimeout(() => {
          clearTimeout(portalTimeout);
        }, TRANSITION_DURATION + 50);
        
        // Clear the existing timeout if it exists
        if (existingTimeout) {
          clearTimeout(existingTimeout);
        }
      }
      
      // Reset state
      document.body.style.overflow = '';
      
      // Reset card visibility
      document.querySelectorAll(`[data-card-id="${cardId}"]`).forEach(element => {
        const cardElement = element as HTMLElement;
        cardElement.setAttribute('aria-expanded', 'false');
        cardElement.style.visibility = '';
        cardElement.style.opacity = '1';
      });
      
      // Reset state after transition completes
      cleanupTimeoutRef.current = setTimeout(() => {
        setIsTransitioning(false);
        operationInProgressRef.current = false;
        isExpandingRef.current = false;
        expansionTimeRef.current = null;
        cleanupTimeoutRef.current = null;
      }, TRANSITION_DURATION);
    } catch (error) {
      console.error('[CardExpansion] Error in cleanup:', error);
      
      // Emergency cleanup
      setIsTransitioning(false);
      operationInProgressRef.current = false;
      isExpandingRef.current = false;
      expansionTimeRef.current = null;
      
      // Reset body overflow
      document.body.style.overflow = '';
    }
  }, [cardId, TRANSITION_DURATION]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      cleanup();
      
      // Use direct DOM manipulation for cleanup to avoid state updates during unmount
      if (expandedId === cardId) {
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
          console.error('[CardExpansion] Error in unmount cleanup:', e);
        }
      }
    };
  }, [cleanup, cardId, expandedId]);

  // Toggle expansion with improved reliability
  const toggleExpand = useCallback((e?: React.MouseEvent) => {
    if (e) {
      e.stopPropagation();
      e.preventDefault();
    }

    // Prevent rapid toggling and concurrent operations
    if (isTransitioning || operationInProgressRef.current) {
      return;
    }

    // Enforce cooldown period
    const now = Date.now();
    if (
      expansionTimeRef.current !== null && 
      now - expansionTimeRef.current < EXPANSION_COOLDOWN &&
      expandedIdRef.current === cardId
    ) {
      return;
    }

    setIsTransitioning(true);
    operationInProgressRef.current = true;
    
    try {
      const currentlyExpanded = expandedIdRef.current === cardId;

      if (currentlyExpanded) {
        // Collapse
        setLocalExpanded(false);
        cleanup();
        cleanupBackdrop();
        setExpandedId(null);
      } else {
        // Expand
        isExpandingRef.current = true;
        document.body.style.overflow = 'hidden';
        setLocalExpanded(true);
        expansionTimeRef.current = now;
        
        // Clean up any existing expansions
        cleanupBackdrop();
        if (expandedIdRef.current) {
          manualCleanupAllCards();
        }

        // Create portal container if needed
        let portalContainer = document.getElementById('expanded-card-container');
        if (!portalContainer) {
          portalContainer = document.createElement('div');
          portalContainer.id = 'expanded-card-container';
          portalContainer.style.cssText = 'position:fixed;z-index:9999;top:0;left:0;width:100%;height:100%;pointer-events:none;';
          document.body.appendChild(portalContainer);
        }

        // Create and animate backdrop
        const backdrop = document.createElement('div');
        backdrop.id = 'expansion-backdrop';
        backdrop.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,0.5);backdrop-filter:blur(8px);z-index:40;opacity:0;transition:opacity 0.2s ease;';
        document.body.appendChild(backdrop);
        backdropRef.current = backdrop;

        // Animate in
        animationFrameRef.current = requestAnimationFrame(() => {
          if (backdrop) {
            backdrop.style.opacity = '1';
          }
          animationFrameRef.current = null;
        });

        // Add click handler with proper cleanup - use once: true to prevent duplicate events
        const handleBackdropClick = (event: MouseEvent) => {
          event.stopPropagation();
          toggleExpand();
        };
        backdrop.addEventListener('click', handleBackdropClick, { once: true });

        // Update expansion state
        setExpandedId(cardId);
      }
    } catch (error) {
      console.error('[CardExpansion] Error in toggleExpand:', error);
      cleanup();
      setExpandedId(null);
    } finally {
      // Reset state after transition
      cleanupTimeoutRef.current = setTimeout(() => {
        setIsTransitioning(false);
        operationInProgressRef.current = false;
        
        if (!localExpanded) {
          isExpandingRef.current = false;
        }
      }, TRANSITION_DURATION);
    }
  }, [
    cardId, 
    cleanup, 
    cleanupBackdrop, 
    manualCleanupAllCards, 
    setExpandedId, 
    isTransitioning, 
    localExpanded, 
    EXPANSION_COOLDOWN, 
    TRANSITION_DURATION
  ]);

  // Navigation handlers with proper cleanup
  const navigateToModel = useCallback((e?: React.MouseEvent) => {
    if (e) {
      e.stopPropagation();
      e.preventDefault();
    }

    cleanup();
    
    if (modelId) {
      // Use the canonical model ID to ensure proper URL format
      const canonicalModelId = getCanonicalModelId(modelId);
      const sanitizedModelId = encodeURIComponent(canonicalModelId.trim());
      console.debug(`[CardExpansion] Navigating to model: original=${modelId}, canonical=${canonicalModelId}`);
      window.location.href = `/models/${sanitizedModelId}`;
    }
  }, [modelId, cleanup]);

  const navigateToChallenge = useCallback((e?: React.MouseEvent) => {
    if (e) {
      e.stopPropagation();
      e.preventDefault();
    }

    cleanup();
    
    if (challengeId) {
      // Use the sanitized challenge ID to ensure proper URL format
      const sanitizedChallengeId = getSanitizedChallengeId(challengeId);
      const encodedChallengeId = encodeURIComponent(sanitizedChallengeId.trim());
      console.debug(`[CardExpansion] Navigating to challenge: original=${challengeId}, sanitized=${sanitizedChallengeId}`);
      window.location.href = `/challenges/${encodedChallengeId}`;
    }
  }, [challengeId, cleanup]);

  return {
    isExpanded: expandedId === cardId || localExpanded,
    isExpanding: isExpandingRef.current,
    toggleExpand,
    navigateToModel,
    navigateToChallenge
  };
};

export default useCardExpansion; 