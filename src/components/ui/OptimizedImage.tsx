"use client";

import React from 'react';
import SimpleImage from './SimpleImage';

type OptimizedImageProps = {
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
  objectFit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
  /**
   * Additional CSS classes
   */
  className?: string;
  /**
   * Priority loading for LCP images
   */
  priority?: boolean;
  /**
   * Blur hash or placeholder data URL for better loading experience (kept for API compatibility)
   */
  blurDataURL?: string;
  /**
   * Quality of the optimized image (1-100) (kept for API compatibility)
   */
  quality?: number;
};

/**
 * Optimized image component that maintains the same API but uses standard HTML img tags 
 * instead of Next.js Image optimizations
 */
export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  aspectRatio,
  blurEffect = true,
  fill = false,
  objectFit = 'cover',
  className = '',
  priority = false,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  blurDataURL,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  quality = 85,
}: OptimizedImageProps) {
  return (
    <SimpleImage
      src={src}
      alt={alt}
      width={width}
      height={height}
      aspectRatio={aspectRatio}
      blurEffect={blurEffect}
      fill={fill}
      objectFit={objectFit}
      className={className}
      priority={priority}
      onError={() => console.warn(`Failed to load image: ${src}`)}
    />
  );
}
