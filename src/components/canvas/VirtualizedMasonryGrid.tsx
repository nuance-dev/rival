import React, { useEffect, useRef, useCallback, useMemo, useState } from 'react';
import { ModelOutput } from '@/types/models';
import { cn } from '@/lib/utils';
import { Globe, ImageIcon, Code, FileText } from 'lucide-react';
import Masonry from 'react-masonry-css';
import { useInView } from 'react-intersection-observer';

interface VirtualizedMasonryGridProps {
  items: ModelOutput[];
  renderItem: (output: ModelOutput, isVisible: boolean) => React.ReactNode;
  className?: string;
  onLoadMore?: () => void;
  hasMore?: boolean;
  loading?: boolean;
  itemsPerPage?: number;
}

/**
 * Helper function to get the icon based on content type
 */
const getContentTypeIcon = (type?: string) => {
  if (!type) return <FileText className="h-6 w-6 text-muted-foreground/40" />;
  
  switch(type.toLowerCase()) {
    case 'image':
      return <ImageIcon className="h-6 w-6 text-muted-foreground/40" />;
    case 'code':
      return <Code className="h-6 w-6 text-muted-foreground/40" />;
    case 'html':
    case 'website':
      return <Globe className="h-6 w-6 text-muted-foreground/40" />;
    default:
      return <FileText className="h-6 w-6 text-muted-foreground/40" />;
  }
};

// Simple placeholder component for maintaining grid structure
const PlaceholderCard = React.memo(({ type, className }: { type?: string, className?: string }) => (
  <div 
    className={cn(
      "border border-border/40 bg-card/20 rounded-xl h-[350px] overflow-hidden relative",
      className
    )}
  >
    <div className="w-full h-full flex items-center justify-center">
      {getContentTypeIcon(type)}
    </div>
  </div>
));

PlaceholderCard.displayName = 'PlaceholderCard';

// Memoized breakpoint configuration to prevent re-renders
const BREAKPOINT_COLS = {
  default: 3,
  1536: 3,
  1280: 3,
  1024: 2,
  768: 2,
  640: 1
};

/**
 * A virtualized masonry grid component that efficiently renders large collections
 * of items using virtualization for improved performance.
 */
const VirtualizedMasonryGrid = React.memo(function VirtualizedMasonryGrid({ 
  items, 
  renderItem,
  className = '',
  onLoadMore,
  hasMore = false,
  loading = false
}: VirtualizedMasonryGridProps) {
  const loadingRef = useRef(false);
  const lastLoadTimeRef = useRef(0);
  const gridRef = useRef<HTMLDivElement | null>(null);
  
  // Track visible items for virtualization
  const [visibleItems, setVisibleItems] = useState<Set<string>>(new Set());
  const observersRef = useRef<Map<string, IntersectionObserver>>(new Map());
  
  // Memoize the items array to prevent unnecessary re-renders
  const safeItems = useMemo(() => Array.isArray(items) ? items : [], [items]);
  
  // Use IntersectionObserver for load more detection
  const { ref: loadMoreRef, inView } = useInView({
    rootMargin: '600px 0px',
    threshold: 0,
    triggerOnce: false,
  });
  
  // Handle load more with debouncing
  const handleLoadMore = useCallback(() => {
    if (!hasMore || loading || loadingRef.current) return;
    
    const now = Date.now();
    if (now - lastLoadTimeRef.current < 800) return;
    
    lastLoadTimeRef.current = now;
    loadingRef.current = true;
    
    console.debug('[VirtualizedMasonryGrid] Loading more items');
    onLoadMore?.();
    
    setTimeout(() => {
      loadingRef.current = false;
    }, 800);
  }, [hasMore, loading, onLoadMore]);
  
  // Trigger load more when sentinel is in view
  useEffect(() => {
    if (inView) {
      handleLoadMore();
    }
  }, [inView, handleLoadMore]);
  
  // Create a ref callback for each item to track visibility
  const createItemRefCallback = useCallback((itemId: string) => (node: HTMLElement | null) => {
    // Clean up previous observer if it exists
    if (observersRef.current.has(itemId)) {
      const observer = observersRef.current.get(itemId);
      observer?.disconnect();
      observersRef.current.delete(itemId);
    }
    
    if (!node) return;
    
    // Create a new observer for this item
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          setVisibleItems(prev => {
            const newSet = new Set(prev);
            if (entry.isIntersecting) {
              newSet.add(itemId);
            } else {
              newSet.delete(itemId);
            }
            return newSet;
          });
        });
      },
      {
        rootMargin: '200px 0px',
        threshold: 0.1
      }
    );
    
    observer.observe(node);
    observersRef.current.set(itemId, observer);
  }, []);
  
  // Clean up observers on unmount
  useEffect(() => {
    // Capture the current observers map for cleanup
    const currentObservers = observersRef.current;
    
    return () => {
      currentObservers.forEach(observer => observer.disconnect());
      currentObservers.clear();
    };
  }, []);
  
  // Render each item with visibility tracking
  const renderItemWithVisibility = useCallback((item: ModelOutput, index: number) => {
    const itemId = item.id || `item-${index}`;
    const isVisible = visibleItems.has(itemId);
    
    return (
      <div 
        key={itemId} 
        className="mb-4"
        ref={createItemRefCallback(itemId)}
        data-item-id={itemId}
      >
        {renderItem(item, isVisible)}
      </div>
    );
  }, [renderItem, visibleItems, createItemRefCallback]);
  
  return (
    <div className={cn("w-full", className)} ref={gridRef}>
      {/* Add custom CSS for masonry grid */}
      <style jsx global>{`
        .masonry-grid {
          display: flex;
          width: 100%;
          margin-left: -16px; /* Adjust based on your gap needs */
        }
        .masonry-grid_column {
          padding-left: 16px; /* Adjust based on your gap needs */
          background-clip: padding-box;
        }
      `}</style>
      
      <Masonry
        breakpointCols={BREAKPOINT_COLS}
        className="masonry-grid"
        columnClassName="masonry-grid_column"
      >
        {safeItems.map((item, index) => renderItemWithVisibility(item, index))}
        
        {/* Add placeholder cards if needed */}
        {loading && safeItems.length < 6 && Array.from({ length: 3 }).map((_, i) => (
          <div key={`placeholder-${i}`} className="mb-4">
            <PlaceholderCard />
          </div>
        ))}
      </Masonry>
      
      {/* Load more sentinel */}
      {hasMore && (
        <div ref={loadMoreRef} className="h-10 w-full flex items-center justify-center my-4">
          {loading && (
            <div className="animate-spin h-5 w-5 border-2 border-primary border-t-transparent rounded-full" />
          )}
        </div>
      )}
    </div>
  );
});

VirtualizedMasonryGrid.displayName = 'VirtualizedMasonryGrid';

export default VirtualizedMasonryGrid; 