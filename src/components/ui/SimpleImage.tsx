"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

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
   * Custom error handler function
   */
  onError?: () => void;
  /**
   * Custom load handler function
   */
  onLoad?: () => void;
  /**
   * Priority for loading the image
   */
  priority?: boolean;
};

/**
 * Simple image component using standard HTML img tag without Next.js optimizations
 */
export default function SimpleImage({
  src,
  alt,
  width,
  height,
  aspectRatio,
  blurEffect = true,
  fill = false,
  objectFit = 'cover',
  className = '',
  onError,
  onLoad,
  priority = false,
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

      {/* Next.js Image component for optimized images */}
      <Image
        key={imageKey}
        src={src}
        alt={alt}
        width={width || 1200}  // Default width if not provided
        height={height || (width ? width * (aspectRatio ? eval(aspectRatio) : 9/16) : 675)}  // Calculate height from width and aspect ratio
        style={{
          objectFit,
          objectPosition: 'center',
          transition: 'opacity 500ms',
          opacity: isLoaded ? 1 : 0,
        }}
        fill={fill}
        priority={priority}
        quality={85}
        onLoad={handleImageLoad}
        onError={handleImageError}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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