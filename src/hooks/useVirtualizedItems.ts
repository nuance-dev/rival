import { useState, useEffect, useRef, useCallback, useMemo } from 'react';

// Define the output item interface with proper typing
export interface VirtualizedItem<T> {
  item: T;
  isVisible: boolean;
  isLoaded: boolean;
  index: number;
  ref: (node: HTMLElement | null) => void;
  placeholder: boolean;
}

interface VirtualizationOptions {
  overscan?: number;
  itemHeight?: number;
  initialRenderCount?: number;
  batchSize?: number;
  cleanupThreshold?: number;
  disableCleanup?: boolean;
}

/**
 * A hook for virtualized rendering of items in a scrollable container
 * with optimized performance and memory management.
 */
export function useVirtualizedItems<T>(
  items: T[],
  options: VirtualizationOptions = {}
) {
  const {
    overscan = 5,
    initialRenderCount = 24,
    batchSize = 12,
    cleanupThreshold = 100,
    disableCleanup = false,
  } = options;

  // Simplified state management
  const [visibleIndices, setVisibleIndices] = useState<Set<number>>(new Set());
  const [loadedIndices, setLoadedIndices] = useState<Set<number>>(new Set());
  const containerRef = useRef<HTMLDivElement | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const itemRefs = useRef<Map<number, HTMLElement | null>>(new Map());
  
  // Ensure we have valid items
  const safeItems = useMemo(() => {
    return Array.isArray(items) ? items : [];
  }, [items]);
  
  // Initialize with first batch of items
  useEffect(() => {
    const initialIndices = new Set<number>();
    const initialCount = Math.min(initialRenderCount, safeItems.length);
    
    for (let i = 0; i < initialCount; i++) {
      initialIndices.add(i);
    }
    
    setLoadedIndices(initialIndices);
    setVisibleIndices(new Set(initialIndices));
    
    // Set up intersection observer after initial render
    const observer = new IntersectionObserver(
      (entries) => {
        let hasChanges = false;
        const newVisibleIndices = new Set(visibleIndices);
        
        entries.forEach(entry => {
          const indexAttr = entry.target.getAttribute('data-item-index');
          if (!indexAttr) return;
          
          const index = parseInt(indexAttr, 10);
          if (isNaN(index)) return;
          
          if (entry.isIntersecting) {
            if (!newVisibleIndices.has(index)) {
              newVisibleIndices.add(index);
              hasChanges = true;
            }
          } else {
            if (newVisibleIndices.has(index)) {
              newVisibleIndices.delete(index);
              hasChanges = true;
            }
          }
        });
        
        if (hasChanges) {
          setVisibleIndices(newVisibleIndices);
          
          // Load more items if needed
          const visibleArray = Array.from(newVisibleIndices);
          if (visibleArray.length > 0) {
            const maxVisible = Math.max(...visibleArray);
            const minVisible = Math.min(...visibleArray);
            
            setLoadedIndices(prev => {
              const newLoadedIndices = new Set(prev);
              
              // Load items ahead
              for (let i = maxVisible + 1; i <= maxVisible + batchSize && i < safeItems.length; i++) {
                newLoadedIndices.add(i);
              }
              
              // Load items behind
              for (let i = Math.max(0, minVisible - batchSize); i < minVisible; i++) {
                newLoadedIndices.add(i);
              }
              
              return newLoadedIndices;
            });
          }
        }
      },
      { 
        rootMargin: `${overscan * 100}px 0px`,
        threshold: [0, 0.1],
      }
    );
    
    observerRef.current = observer;
    
    return () => observer.disconnect();
  }, [safeItems.length, initialRenderCount, overscan, batchSize, visibleIndices]);
  
  // Item ref callback
  const getItemRefCallback = useCallback((index: number) => (node: HTMLElement | null) => {
    if (node) {
      itemRefs.current.set(index, node);
      node.setAttribute('data-item-index', index.toString());
      observerRef.current?.observe(node);
    } else {
      itemRefs.current.delete(index);
      const element = itemRefs.current.get(index);
      if (element) observerRef.current?.unobserve(element);
    }
  }, []);

  // Clean up off-screen items
  useEffect(() => {
    if (disableCleanup) return;

    const cleanupInterval = setInterval(() => {
      if (loadedIndices.size <= cleanupThreshold) return;

      const visibleArray = Array.from(visibleIndices);
      if (visibleArray.length < 6) return;

      const minVisible = Math.min(...visibleArray);
      const maxVisible = Math.max(...visibleArray);
      const cleanupRange = overscan * 3;

      setLoadedIndices(prev => {
        const newLoadedIndices = new Set(prev);
        let cleaned = false;

        for (const index of prev) {
          if (
            index < minVisible - cleanupRange ||
            index > maxVisible + cleanupRange
          ) {
            newLoadedIndices.delete(index);
            itemRefs.current.delete(index);
            cleaned = true;
          }
        }

        return cleaned ? newLoadedIndices : prev;
      });
    }, 2000);

    return () => clearInterval(cleanupInterval);
  }, [visibleIndices, loadedIndices, overscan, disableCleanup, cleanupThreshold]);

  // Create virtual items
  const virtualItems = useMemo(() => {
    return safeItems.map((item, index) => ({
      item,
      index,
      isVisible: visibleIndices.has(index),
      isLoaded: loadedIndices.has(index),
      ref: getItemRefCallback(index),
      placeholder: false,
    }));
  }, [safeItems, visibleIndices, loadedIndices, getItemRefCallback]);

  return {
    virtualItems,
    containerRef,
    visibleCount: visibleIndices.size,
    loadedCount: loadedIndices.size,
    placeholderCount: 0,
  };
} 