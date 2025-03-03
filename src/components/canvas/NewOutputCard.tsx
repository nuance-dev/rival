"use client";

import React, { useState, useRef, useCallback, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import { Maximize } from "lucide-react";
import { ModelOutput } from "@/types/models";
import { cn } from "@/lib/utils";
import { useExpansion } from "./ExpansionProvider";
import { createRoot } from "react-dom/client";

// Import our extracted components
import ModelInfoOverlay from "./ModelInfoOverlay";
import OneShotBadge from "./OneShotBadge";
import { 
  CardContent, 
  ExpandedCard, 
  useCardExpansion 
} from "./card";

// Define local types when imports are missing
type OutputType = string;

interface CardActionsProps {
  type?: OutputType;
  isExpanded?: boolean;
  onDelete?: () => void;
  onEdit?: () => void;
  onCopy?: () => void;
  onSave?: () => void;
}

const CardActions = ({
  isExpanded,
  onDelete,
  onEdit,
  onCopy,
  onSave
}: CardActionsProps) => (
  <div className="flex justify-end mt-2 gap-1">
    {!isExpanded && (
      <>
        {onDelete && <button onClick={onDelete}>Delete</button>}
        {onEdit && <button onClick={onEdit}>Edit</button>}
        {onCopy && <button onClick={onCopy}>Copy</button>}
        {onSave && <button onClick={onSave}>Save</button>}
      </>
    )}
  </div>
);

interface OutputCardProps {
  output: ModelOutput & { 
    modelName?: string;
    challengeId?: string;
    funFact?: string;
    prompt?: string;
  };
  title?: string;
  description?: string;
  className?: string;
  category?: string;
  disableAnimations?: boolean;
  id: string;
  isHoverable?: boolean; // Used indirectly through className
  isStatic?: boolean;
  showOptions?: boolean;
  autoExpand?: boolean;
  onDelete?: () => void;
  onEdit?: () => void;
  onCopy?: () => void;
  onSave?: () => void;
}

export const NewOutputCard = React.memo(function NewOutputCard({ 
  output, 
  title, 
  className,
  category = "default",
  disableAnimations = false,
  id,
  isHoverable = true,
  isStatic = false,
  autoExpand = false,
  onDelete,
  onEdit,
  onCopy,
  onSave,
}: OutputCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  
  // Use the output title if it exists, otherwise use the provided title
  const displayTitle = output.title || title;
  
  // Generate a unique stable ID for this card instance - ensuring it's truly unique
  const cardInstanceId = useMemo(() => 
    `card-${output.id}-${Math.random().toString(36).substring(2, 9)}-${Date.now().toString(36)}`, 
    [output.id]
  );
  
  // Use the expansion context with more explicit destructuring
  const { expandedId, isInitialRender, manualCleanupAllCards, setExpandedId } = useExpansion();
  
  // Use our custom hook for expansion logic
  const { 
    isExpanded, 
    isExpanding,
    toggleExpand,
    navigateToModel,
    navigateToChallenge 
  } = useCardExpansion({ 
    cardId: output.id, 
    modelId: output.modelId, 
    challengeId: output.challengeId 
  });
  
  // Add debug ref to track render count
  const renderCountRef = useRef(0);
  const wasExpandedRef = useRef(false);
  
  // Track if a click is in progress to prevent double-clicks
  const clickInProgressRef = useRef(false);
  
  // Create explicit handler for card activation that's more robust
  const activateCard = useCallback((e?: React.MouseEvent | React.KeyboardEvent) => {
    if (e) {
      e.stopPropagation();
      e.preventDefault();
    }
    
    // Prevent multiple activations in quick succession
    if (clickInProgressRef.current) {
      console.debug(`[NewOutputCard] Activation already in progress for card ${output.id}, ignoring`);
      return;
    }
    
    clickInProgressRef.current = true;
    
    // Add a timeout to reset the flag even if something goes wrong
    setTimeout(() => {
      clickInProgressRef.current = false;
    }, 500);
    
    console.debug(`[NewOutputCard] Activating card ${output.id} directly`);
    
    try {
      // Use the toggleExpand from our hook for consistent behavior
      toggleExpand(e as React.MouseEvent);
    } catch (error) {
      console.error(`[NewOutputCard] Error activating card ${output.id}:`, error);
      // If there's an error, try emergency cleanup after a delay
      setTimeout(() => {
        manualCleanupAllCards();
      }, 1000);
    } finally {
      // Reset the flag immediately after attempt
      clickInProgressRef.current = false;
    }
  }, [output.id, toggleExpand, manualCleanupAllCards]);
  
  // Add cleanup for event listeners
  useEffect(() => {
    const cardElement = cardRef.current;
    
    if (!cardElement) return;
    
    // Create a DOM-level click handler for backup
    const domClickHandler = (e: Event) => {
      if (clickInProgressRef.current || isExpanding) {
        console.debug(`[NewOutputCard] Click in progress or expanding, ignoring native DOM click for ${output.id}`);
        e.stopPropagation();
        return;
      }
      
      e.stopPropagation();
      console.debug(`[NewOutputCard] Native DOM click handler for card ${output.id}`);
      
      // Use a timeout to let React's synthetic events process first
      setTimeout(() => {
        // Only activate if card isn't already expanded
        if (!isExpanded && !clickInProgressRef.current) {
          activateCard();
        }
      }, 10);
    };
    
    // Add the DOM event listener
    cardElement.addEventListener('click', domClickHandler, { capture: true });
    
    // Debugging: Check if card is visually in the DOM
    const cardRect = cardElement.getBoundingClientRect();
    if (cardRect.width === 0 || cardRect.height === 0) {
      console.warn(`[NewOutputCard] Card ${output.id} has zero dimensions:`, cardRect);
    }
    
    // Ensure this card has a stable ID for animation
    cardElement.setAttribute('data-stable-id', cardInstanceId);
    
    // Return cleanup function
    return () => {
      if (cardElement) {
        cardElement.removeEventListener('click', domClickHandler, { capture: true });
      }
    };
  }, [output.id, activateCard, isExpanded, isExpanding, cardInstanceId]);
  
  // Monitor expanded state changes for debugging
  useEffect(() => {
    if (isExpanded !== wasExpandedRef.current) {
      console.debug(`[NewOutputCard] Card ${output.id} expansion changed. isExpanded:`, isExpanded);
      wasExpandedRef.current = isExpanded;
      
      // When a card is expanded, make sure we lock the body scroll
      if (isExpanded) {
        document.body.style.overflow = 'hidden';
      }
    }
  }, [isExpanded, output.id]);
  
  // Add CSS for the lifting animation
  useEffect(() => {
    // Create a style element for the lifting animation if it doesn't exist
    if (!document.getElementById('card-lifting-styles')) {
      const style = document.createElement('style');
      style.id = 'card-lifting-styles';
      style.innerHTML = `
        .card-lifting {
          will-change: transform, box-shadow; 
          transform: translate3d(0, 0, 0);
          transition: transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1), 
                      box-shadow 0.5s cubic-bezier(0.2, 0.8, 0.2, 1),
                      opacity 0.3s ease !important;
        }
        .card-lifting:hover {
          transform: translate3d(0, -8px, 0) !important;
          box-shadow: 0 15px 30px -8px rgba(0, 0, 0, 0.15) !important;
        }
        .card-lifting-animation {
          animation: card-lift-bounce 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
          will-change: transform;
        }
        @keyframes card-lift-bounce {
          0% { transform: translate3d(0, 0, 0); }
          40% { transform: translate3d(0, -12px, 0); }
          65% { transform: translate3d(0, -6px, 0); }
          100% { transform: translate3d(0, -8px, 0); }
        }
        
        /* Fixed position for expanded cards */
        .expanded-card-container {
          position: fixed !important;
          top: 0 !important;
          left: 0 !important;
          width: 100vw !important;
          height: 100vh !important;
          z-index: 1000 !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          padding: 8px !important;
        }
        
        /* Enhanced mobile styles for expanded cards */
        @media (max-width: 640px) {
          .expanded-card-container {
            padding: 0 !important;
          }
          
          /* Scrollbar styling for mobile */
          .scrollbar-thin {
            scrollbar-width: thin;
          }
          
          .scrollbar-thin::-webkit-scrollbar {
            width: 4px;
          }
          
          .scrollbar-thin::-webkit-scrollbar-track {
            background: transparent;
          }
          
          .scrollbar-thin::-webkit-scrollbar-thumb {
            background-color: rgba(155, 155, 155, 0.2);
            border-radius: 20px;
          }
          
          .scrollbar-thin::-webkit-scrollbar-thumb:hover {
            background-color: rgba(155, 155, 155, 0.3);
          }
        }
        
        /* Next-gen backdrop for expanded cards */
        #expansion-backdrop {
          background: rgba(0, 0, 0, 0.4);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
        }
      `;
      document.head.appendChild(style);
    }
  }, []);
  
  // Track whether this component has been animated already
  const [hasAnimated, setHasAnimated] = useState(disableAnimations);
  
  // Track if component is mounted to prevent state updates after unmount
  const isMounted = useRef(true);
  
  // Track if this component is being rendered in a virtualized context
  const [isVirtualized, setIsVirtualized] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  // Determine if we're in a virtualized context by checking parent class names
  useEffect(() => {
    if (!cardRef.current) return;
    
    // Check if we're in a virtualized container by looking at parent elements
    let parent = cardRef.current.parentElement;
    while (parent) {
      if (parent.classList.contains('virtualized-card')) {
        setIsVirtualized(true);
        break;
      }
      parent = parent.parentElement;
    }
    
    return () => {
      isMounted.current = false;
    };
  }, []);
  
  // Add this effect to track animation state
  useEffect(() => {
    // Set hasAnimated to true after initial render to prevent double animations
    // Skip if animations are disabled
    if (!isInitialRender && !disableAnimations && isMounted.current && !hasAnimated) {
      // Add a small delay to ensure proper animation phasing
      const timer = setTimeout(() => {
        if (isMounted.current) {
          setHasAnimated(true);
        }
      }, 50);
      
      return () => clearTimeout(timer);
    }
  }, [isInitialRender, disableAnimations, hasAnimated]);
  
  // When expanded, add a class to avoid any style resets
  useEffect(() => {
    if (!cardRef.current) return;

    if (isExpanded) {
      cardRef.current.classList.add('expanded-card-fixed');
      // Force a reflow to ensure styles apply
      void cardRef.current.offsetHeight;
    } else {
      cardRef.current.classList.remove('expanded-card-fixed');
    }
  }, [isExpanded]);
  
  // Automatically expand card if autoExpand is true
  useEffect(() => {
    if (autoExpand && !isExpanded && !isTransitioning) {
      setIsTransitioning(true);
      const timer = setTimeout(() => {
        setExpandedId(id);
        setIsTransitioning(false);
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [autoExpand, id, isExpanded, isTransitioning, setExpandedId]);

  // Track render count for debugging only in development
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      const currentRender = renderCountRef.current + 1;
      renderCountRef.current = currentRender;
      console.debug(`[NewOutputCard] Rendered card ${output.id} (render #${currentRender})`);
    }
  }, [output.id]);
  
  // Define handleCardClick function
  const handleCardClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    activateCard(e);
  };
  
  // Handle card expansion with direct DOM manipulation - optimized for performance
  useEffect(() => {
    if (isExpanded && cardRef.current) {
      // Create backdrop for the expanded card
      const backdrop = document.createElement("div");
      backdrop.id = "expansion-backdrop";
      backdrop.className = "fixed inset-0 bg-black/70 backdrop-blur-sm z-[9990]";
      backdrop.style.opacity = "0";
      backdrop.style.transition = "opacity 300ms ease-in-out";
      
      // Ensure backdrop is clickable and close functionality works
      backdrop.style.pointerEvents = "auto";
      backdrop.setAttribute("role", "button");
      backdrop.setAttribute("aria-label", "Close expanded view");
      backdrop.setAttribute("tabindex", "0");
      
      // Add backdrop click handler to close the expanded card - enhanced with debugging
      const handleBackdropClick = (e: Event) => {
        e.stopPropagation();
        e.preventDefault();
        console.debug('[NewOutputCard] Backdrop clicked, closing card', output.id);
        
        // Add visual feedback before closing
        backdrop.style.opacity = "0.5";
        
        // Use a more robust approach to ensure card closes
        setTimeout(() => {
          // First try the context method
          setExpandedId(null);
          
          // Also attempt direct DOM cleanup as a fallback
          try {
            // Clean up the expanded card container
            const expandedCardContainer = document.getElementById('expanded-card-container');
            if (expandedCardContainer && expandedCardContainer.parentNode) {
              expandedCardContainer.innerHTML = '';
              expandedCardContainer.parentNode.removeChild(expandedCardContainer);
            }
            
            // Clean up the backdrop
            const backdropToRemove = document.getElementById('expansion-backdrop');
            if (backdropToRemove && backdropToRemove.parentNode) {
              backdropToRemove.parentNode.removeChild(backdropToRemove);
            }
            
            // Restore body scroll
            document.body.style.overflow = '';
            
            // Copy ref to local variable for safe use in cleanup
            const currentCardRef = cardRef.current;
            if (currentCardRef) {
              currentCardRef.style.visibility = "visible";
            }
          } catch (err) {
            console.error('[NewOutputCard] Error in close handler cleanup:', err);
          }
        }, 10);
      };
      
      // Use a single event listener to prevent duplicate events
      backdrop.addEventListener("click", handleBackdropClick, { once: true });
      
      backdrop.addEventListener("keydown", (e: KeyboardEvent) => {
        if (e.key === 'Enter' || e.key === ' ') {
          handleBackdropClick(e);
        }
      });
      
      // Add the backdrop to the DOM
      document.body.appendChild(backdrop);
      
      // Create container for expanded card
      const expandedCardContainer = document.createElement("div");
      expandedCardContainer.id = "expanded-card-container";
      expandedCardContainer.className = "fixed inset-0 z-[9999] flex items-center justify-center pointer-events-none";
      document.body.appendChild(expandedCardContainer);
      
      // Create the expanded card content container
      const expandedCardContent = document.createElement("div");
      expandedCardContent.className = "expanded-card-content w-[95vw] md:w-[90vw] lg:w-[80vw] xl:w-[70vw] 2xl:w-[60vw] max-h-[90vh] flex flex-col overflow-hidden pointer-events-auto bg-white dark:bg-gray-900 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700";
      expandedCardContent.setAttribute("style", "opacity: 0; transition: opacity 300ms ease-in-out; transform: translateY(0); box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2);");
      expandedCardContainer.appendChild(expandedCardContent);
      
      // Create React root and render expanded card
      try {
        const root = createRoot(expandedCardContent);
        
        // Use the navigation handlers from useCardExpansion for consistency
        const handleModelNavigation = (e: React.MouseEvent) => {
          e.stopPropagation();
          console.debug('[NewOutputCard] Navigate to model clicked', output.modelId);
          // Call the hook's navigation function to ensure consistent behavior
          navigateToModel(e);
        };
        
        const handleChallengeNavigation = output.challengeId ? (e: React.MouseEvent) => {
          e.stopPropagation();
          console.debug('[NewOutputCard] Navigate to challenge clicked', output.challengeId);
          // Call the hook's navigation function to ensure consistent behavior
          navigateToChallenge(e);
        } : undefined;
        
        // Enhanced close handler that works reliably
        const handleClose = (e?: React.MouseEvent) => {
          if (e) e.stopPropagation();
          console.debug('[NewOutputCard] Close button clicked, closing card', output.id);
          
          // First add visual feedback
          if (expandedCardContent) {
            expandedCardContent.style.opacity = "0.5";
          }
          
          // Use a more robust approach to ensure card closes
          setTimeout(() => {
            // First try the context method
            setExpandedId(null);
            
            // Also attempt direct DOM cleanup as a fallback
            try {
              // Clean up the expanded card container
              if (expandedCardContainer && expandedCardContainer.parentNode) {
                expandedCardContainer.innerHTML = '';
                expandedCardContainer.parentNode.removeChild(expandedCardContainer);
              }
              
              // Clean up the backdrop
              const backdropToRemove = document.getElementById('expansion-backdrop');
              if (backdropToRemove && backdropToRemove.parentNode) {
                backdropToRemove.parentNode.removeChild(backdropToRemove);
              }
              
              // Restore body scroll
              document.body.style.overflow = '';
              
              // Copy ref to local variable for safe use in cleanup
              const currentCardRef = cardRef.current;
              if (currentCardRef) {
                currentCardRef.style.visibility = "visible";
              }
            } catch (err) {
              console.error('[NewOutputCard] Error in close handler cleanup:', err);
            }
          }, 10);
        };
        
        // Only pass props that ExpandedCard actually accepts
        root.render(
          <ExpandedCard
            output={output}
            displayTitle={displayTitle}
            onClose={handleClose}
            onNavigateToModel={handleModelNavigation}
            onNavigateToChallenge={handleChallengeNavigation}
          />
        );
        
        // Trigger animations after a short delay
        setTimeout(() => {
          if (backdrop) backdrop.style.opacity = "1";
          if (expandedCardContent) {
            (expandedCardContent as HTMLElement).style.opacity = "1";
            (expandedCardContent as HTMLElement).style.transform = "translateY(0)";
          }
          
          // Check if content is visible in viewport
          const rect = expandedCardContent.getBoundingClientRect();
          
          if (rect.width === 0 || rect.height === 0) {
            console.warn('[NewOutputCard] Expanded card has zero dimensions');
          }
          
          // Force overflow to be visible
          document.documentElement.style.setProperty('--expanded-card-z-index', '9999');
        }, 10);
      } catch (error) {
        console.error("Error rendering expanded card:", error);
      }
      
      // Disable scrolling when expanded
      document.body.style.overflow = "hidden";
      
      // Hide the original card
      if (cardRef.current) {
        cardRef.current.style.visibility = "hidden";
      }
    }
    
    return () => {
      // Cleanup function
      if (isExpanded) {
        try {
          // Remove backdrop with animation
          const backdrop = document.getElementById("expansion-backdrop");
          if (backdrop) {
            // Remove event listeners to prevent memory leaks
            const newBackdrop = backdrop.cloneNode(true);
            if (backdrop.parentNode) {
              backdrop.parentNode.replaceChild(newBackdrop, backdrop);
            }
            
            (newBackdrop as HTMLElement).style.opacity = "0";
            
            setTimeout(() => {
              if (newBackdrop.parentNode) {
                newBackdrop.parentNode.removeChild(newBackdrop);
              }
            }, 300);
          }
          
          // Remove expanded card container with animation
          const expandedCardContainer = document.getElementById("expanded-card-container");
          if (expandedCardContainer) {
            const expandedCardContent = expandedCardContainer.querySelector(".expanded-card-content");
            if (expandedCardContent) {
              (expandedCardContent as HTMLElement).style.opacity = "0";
            }
            
            setTimeout(() => {
              if (expandedCardContainer.parentNode) {
                expandedCardContainer.parentNode.removeChild(expandedCardContainer);
              }
            }, 300);
          }
          
          // Re-enable scrolling
          document.body.style.overflow = "";
          
          // Copy ref to local variable for safe use in cleanup
          const currentCardRef = cardRef.current;
          if (currentCardRef) {
            currentCardRef.style.visibility = "visible";
          }
        } catch (error) {
          console.error("Error cleaning up expanded card:", error);
          
          // Force cleanup if there's an error
          try {
            const backdrop = document.getElementById("expansion-backdrop");
            if (backdrop && backdrop.parentNode) {
              backdrop.parentNode.removeChild(backdrop);
            }
            
            const expandedCardContainer = document.getElementById("expanded-card-container");
            if (expandedCardContainer && expandedCardContainer.parentNode) {
              expandedCardContainer.parentNode.removeChild(expandedCardContainer);
            }
            
            document.body.style.overflow = "";
            
            // Copy ref to local variable for safe use in cleanup
            const currentCardRef = cardRef.current;
            if (currentCardRef) {
              currentCardRef.style.visibility = "visible";
            }
          } catch (e) {
            console.error("Critical error in cleanup:", e);
          }
        }
      }
    };
  }, [isExpanded, id, output, displayTitle, onDelete, onEdit, onCopy, onSave, setExpandedId, navigateToModel, navigateToChallenge]);
  
  return (
    <React.Fragment>
    <motion.div
      ref={cardRef}
      data-card-id={output.id}
      data-card-type={output.type}
      data-expandable="true"
      data-test-id="output-card"
      data-stable-id={cardInstanceId}
      key={cardInstanceId} 
      layout={!isInitialRender && !hasAnimated && !disableAnimations && !isVirtualized && !isExpanded}
      layoutId={isInitialRender || hasAnimated || disableAnimations || isVirtualized || isExpanded ? undefined : `card-${output.id}`}
      initial={isInitialRender || hasAnimated || disableAnimations ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      animate={
        isExpanded 
          ? { 
              opacity: 0, // Hide the original card when expanded
              zIndex: -1,
              transition: { 
                duration: 0.2
              }
            }
          : (expandedId && expandedId !== output.id 
              ? { scale: 0.98, opacity: 0.5, zIndex: 1, y: 0 }
              : { 
                  scale: 1, 
                  opacity: 1, 
                  zIndex: 1,
                  y: 0,
                  borderRadius: "0.75rem", 
                  boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
                  transition: { 
                    type: "spring",
                    stiffness: 400,
                    damping: 30,
                    duration: 0.3
                  }
                })
      }
      transition={{ 
        type: "spring",
        bounce: 0.2,
        duration: 0.4,
        layout: { duration: 0.4, type: "spring", bounce: 0.2 },
        opacity: { duration: 0.3, ease: [0.4, 0, 0.2, 1] }
      }}
      whileHover={!isExpanded && !expandedId && !disableAnimations ? { 
        y: -8, 
        boxShadow: "0 15px 30px -10px rgba(0, 0, 0, 0.15)",
        scale: 1.02,
        transition: { 
          duration: 0.3, 
          ease: "easeOut" 
        }
      } : {}}
       className={cn(
        "bg-card border overflow-hidden cursor-pointer group h-full relative",
        isExpanded ? "expanded-card" : "min-h-[280px] flex-1 flex flex-col",
        output.type === "svg" && !isExpanded && "min-h-[240px]",
        `category-${category}`,
        className,
        !isExpanded && "card-lifting",
        isHoverable && "hover:shadow-lg"
      )}
      onClick={handleCardClick}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          console.debug(`[NewOutputCard] Card ${output.id} activated via keyboard`);
          activateCard(e);
        }
      }}
      role="button"
      tabIndex={0}
      aria-expanded={isExpanded}
    >
      {/* Card Content */}
      <div 
        className={cn(
          "bg-card border rounded-xl overflow-hidden h-full flex flex-col",
          isExpanded ? "shadow-none" : "shadow-sm", 
          !isStatic && isHoverable ? "hover:border-primary/30" : "",
          category === "default" ? "border-border" : "",
          category === "image" ? "border-blue-500/20" : "",
          category === "text" ? "border-purple-500/20" : "",
          category === "code" ? "border-yellow-500/20" : "",
          category === "html" ? "border-green-500/20" : "",
          category === "svg" ? "border-orange-500/20" : "",
          category === "website" ? "border-pink-500/20" : ""
        )}
      >
        {/* Model info overlay */}
        {/* @ts-expect-error - ModelInfoOverlay output props match interface requirements but type system reports error */}
        <ModelInfoOverlay output={output} />

        {/* Card Content */}
        <div className="flex-1 flex flex-col overflow-hidden">
          <CardContent 
            output={output}
            displayTitle={displayTitle}
            expanded={isExpanded}
          />
        </div>

        {/* One-shot badge if applicable */}
        {output.metadata?.oneShot && (
          <OneShotBadge />
        )}

        {/* Expand control */}
        {!isStatic && (
          <button
            className="absolute bottom-4 right-4 p-1 bg-muted/50 hover:bg-muted/80 rounded-full z-10 transition-opacity opacity-0 group-hover:opacity-100 focus:opacity-100"
            onClick={handleCardClick}
            aria-label="Expand card"
          >
            <Maximize className="h-3.5 w-3.5 text-foreground/70" />
          </button>
        )}
      </div>

      {/* Action buttons */}
      {(onDelete || onEdit || onCopy || onSave) && (
        <CardActions
          isExpanded={isExpanded}
          onDelete={onDelete}
          onEdit={onEdit}
          onCopy={onCopy}
          onSave={onSave}
        />
      )}
    </motion.div>
    </React.Fragment>
  );
}); 