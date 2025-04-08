"use client";

import React, { useState, useEffect } from 'react';

export type SimpleImageProps = {
  /**
   * Source URL of the image
   */
  src: string;
  /**
   * Alternative text for the image
   */
  alt: string;
  /**
   * Width of the image in pixels
   */
  width?: number;
  /**
   * Height of the image in pixels
   */
  height?: number;
  /**
   * Aspect ratio to maintain (e.g., '16/9', '4/3', '1/1')
   */
  aspectRatio?: string;
  /**
   * Whether to blur the image while loading
   */
  blurEffect?: boolean;
  /**
   * Fill the parent container
   */
  fill?: boolean;
  /**
   * Object fit style
   */
  objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
  /**
   * Additional CSS classes
   */
  className?: string;
  /**
   * Loading attribute for the image
   */
  loading?: 'lazy' | 'eager';
  /**
   * Priority loading for LCP images
   */
  priority?: boolean;
  /**
   * Custom error handler function
   */
  onError?: () => void;
  /**
   * Custom load handler function
   */
  onLoad?: () => void;
};

/**
 * Simple image component using standard HTML img tag
 */
export default function SimpleImage({
  src,
  alt,
  width,
  height,
  aspectRatio,
  blurEffect = true,
  fill = true,
  objectFit = 'cover',
  className = '',
  loading = 'lazy',
  priority = false,
  onError,
  onLoad,
}: SimpleImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);
  const [imageKey, setImageKey] = useState(`${src}-${Date.now()}`);

  // Reset state when src changes
  useEffect(() => {
    setIsLoaded(false);
    setError(false);
    setImageKey(`${src}-${Date.now()}`);
  }, [src, blurEffect]);

  // Calculate styles
  const containerStyle: React.CSSProperties = {};
  
  if (aspectRatio) {
    // Set an aspect ratio for the container
    containerStyle.aspectRatio = aspectRatio;
  } else if (width && height && !fill) {
    // Only set width and height if not using fill
    containerStyle.width = width;
    containerStyle.height = height;
  }
  
  // If neither aspect ratio nor width/height are provided, use a default aspect ratio
  if (!aspectRatio && !width && !height && !fill) {
    containerStyle.aspectRatio = '16/9';
  }
  
  // Add position relative if fill is being used
  if (fill) {
    containerStyle.position = 'relative';
    containerStyle.width = '100%';
    containerStyle.height = '100%';
  }

  const handleImageLoad = () => {
    setIsLoaded(true);
    
    // Call the onLoad handler if provided
    if (onLoad) {
      onLoad();
    }
  };

  const handleImageError = () => {
    setError(true);
    if (onError) {
      onError();
    }
  };

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={containerStyle}
    >
      {/* Standard img tag */}
      <img
        key={imageKey}
        src={src}
        alt={alt}
        width={width}
        height={height}
        style={{
          objectFit,
          objectPosition: 'center',
          transition: 'opacity 500ms',
          opacity: isLoaded ? 1 : 0,
          width: '100%',
          height: '100%',
        }}
        loading={priority ? 'eager' : loading} 
        onLoad={handleImageLoad}
        onError={handleImageError}
      />

      {/* Error state */}
      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-muted/50 z-20">
          <div className="text-sm text-muted-foreground text-center p-4">
            Unable to load image
          </div>
        </div>
      )}
    </div>
  );
} 