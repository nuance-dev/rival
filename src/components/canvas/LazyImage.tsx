"use client";

import React, { useState, useRef, useCallback } from "react";
import { Image as ImageIcon } from "lucide-react";
import SimpleImage from "@/components/ui/SimpleImage";

interface LazyImageProps {
  src: string;
  alt: string;
}

const LazyImage = React.memo(({ src, alt }: LazyImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const imgContainerRef = useRef<HTMLDivElement>(null);
  
  const handleError = useCallback(() => {
    setIsLoaded(true); // Show error state
    setHasError(true); // Track error state
    console.error(`Failed to load image: ${src}`);
  }, [src]);
  
  // Always render placeholders
  return (
    <div ref={imgContainerRef} className="h-full overflow-hidden rounded-xl relative">
      {/* Always show the placeholder until content loads */}
      <div 
        className={`absolute inset-0 bg-muted/10 flex items-center justify-center z-10 transition-opacity duration-500 ${
          isLoaded ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
      >
        <ImageIcon className="h-8 w-8 text-muted-foreground/30 animate-pulse" />
      </div>
      
      {/* Error state */}
      {hasError && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-muted/10 z-20 text-muted-foreground">
          <ImageIcon className="h-8 w-8 mb-2" />
          <span>Image failed to load</span>
        </div>
      )}
      
      {/* Always render the image element */}
      {!hasError && (
        <SimpleImage 
          src={src}
          alt={alt}
          fill={false}
          className="w-full h-full object-cover transition-opacity duration-500"
          loading="eager" 
          blurEffect={false}
          onLoad={() => setIsLoaded(true)}
          onError={handleError}
        />
      )}
    </div>
  );
});

LazyImage.displayName = 'LazyImage';

export default LazyImage; 