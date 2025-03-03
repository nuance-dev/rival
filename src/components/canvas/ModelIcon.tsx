"use client";

import React, { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import SimpleImage from "@/components/ui/SimpleImage";
import { getModelLogoPath } from "@/lib/utils";

// Enhanced cache for preloaded icons
const preloadedIcons = new Map<string, boolean>();
const STORAGE_KEY = 'model-icon-cache';

// Try to load cache from localStorage
try {
  if (typeof window !== 'undefined') {
    const cached = localStorage.getItem(STORAGE_KEY);
    if (cached) {
      const parsed = JSON.parse(cached);
      Object.keys(parsed).forEach(key => {
        preloadedIcons.set(key, parsed[key]);
      });
    }
  }
} catch (e) {
  console.warn('Failed to load icon cache from localStorage', e);
}

// Function to get model icon with proper fallback handling
export const getModelIcon = (modelId: string) => {
  if (!modelId) return null;
  
  try {
    // Get logo path with error logging
    const logoPath = getModelLogoPath(modelId);
    return logoPath;
  } catch (error) {
    console.error(`Error getting model icon for ${modelId}:`, error);
    return '/models/openai.svg'; // Default fallback
  }
};

// Enhanced preloading with better error handling
const preloadModelIcons = () => {
  const commonModels = [
    'gpt-4o', 'claude-3-5-sonnet', 'claude-3-7-sonnet', 'grok-3', 
    'gpt-o3', 'gpt-o1', 'claude-3-haiku', 'claude-3-opus'
  ];
  
  // Preload in batches to avoid overwhelming the browser
  const preloadBatch = (startIndex: number, batchSize: number) => {
    if (startIndex >= commonModels.length) {
      // Save cache to localStorage when done
      try {
        const cacheObj: Record<string, boolean> = {};
        preloadedIcons.forEach((value, key) => {
          cacheObj[key] = value;
        });
        localStorage.setItem(STORAGE_KEY, JSON.stringify(cacheObj));
      } catch (e) {
        console.warn('Failed to save icon cache to localStorage', e);
      }
      return;
    }
    
    const endIndex = Math.min(startIndex + batchSize, commonModels.length);
    
    for (let i = startIndex; i < endIndex; i++) {
      const modelId = commonModels[i];
      if (preloadedIcons.has(modelId)) continue;
      
      const iconSrc = getModelIcon(modelId);
      if (iconSrc) {
        const img = new Image();
        img.src = iconSrc;
        img.onload = () => {
          preloadedIcons.set(modelId, true);
        };
        img.onerror = () => {
          console.warn(`Failed to preload icon for ${modelId}`);
        };
      }
    }
    
    // Schedule next batch
    setTimeout(() => {
      preloadBatch(endIndex, batchSize);
    }, 100);
  };
  
  // Start preloading in batches
  preloadBatch(0, 2);
};

interface ModelIconProps {
  modelId: string;
  className?: string;
}

const ModelIcon = React.memo(({ modelId, className }: ModelIconProps) => {
  const [isLoaded, setIsLoaded] = useState(preloadedIcons.has(modelId));
  const [fallbackTriggered, setFallbackTriggered] = useState(false);
  const [loadAttempts, setLoadAttempts] = useState(0);
  const iconSrc = getModelIcon(modelId);
  const mountedRef = useRef(true);
  
  // Preload icons on first render
  useEffect(() => {
    if (typeof window !== 'undefined' && !preloadedIcons.size) {
      preloadModelIcons();
    }
    
    return () => {
      mountedRef.current = false;
    };
  }, []);
  
  // Retry loading if failed (up to 2 attempts)
  useEffect(() => {
    if (fallbackTriggered && loadAttempts < 2 && iconSrc) {
      const timer = setTimeout(() => {
        if (mountedRef.current) {
          setFallbackTriggered(false);
          setLoadAttempts(prev => prev + 1);
        }
      }, 1000);
      
      return () => clearTimeout(timer);
    }
  }, [fallbackTriggered, loadAttempts, iconSrc]);
  
  return (
    <div className="relative inline-flex items-center justify-center">
      
      {/* Actual image with improved positioning */}
      {iconSrc && !fallbackTriggered && (
        <SimpleImage
          src={iconSrc}
          alt={`${modelId} logo`}
          width={16}
          height={16}
          className={cn(
            "w-4 h-4 rounded-full absolute top-0 left-0 right-0 bottom-0 m-auto transition-opacity duration-300",
            isLoaded ? "opacity-100" : "opacity-0",
            className
          )}
          priority={true}
          loading="eager"
          onLoad={() => {
            if (mountedRef.current) {
              setIsLoaded(true);
              preloadedIcons.set(modelId, true);
            }
          }}
          onError={() => {
            console.warn(`Failed to load model icon: ${modelId}, using fallback`);
            if (mountedRef.current) {
              setFallbackTriggered(true);
            }
          }}
        />
      )}
    </div>
  );
});

ModelIcon.displayName = 'ModelIcon';

export default ModelIcon; 