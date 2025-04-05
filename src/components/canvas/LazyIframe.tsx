"use client";

import React, { useState, useRef, useEffect, memo } from "react";
import { Globe } from "lucide-react";

interface LazyIframeProps {
  content: string;
  title: string;
}

const LazyIframe = memo(({ content, title }: LazyIframeProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [scale, setScale] = useState(0.5); // Default scale
  const [processedContent, setProcessedContent] = useState<string | null>(null);
  const [hasError, setHasError] = useState(false);
  const [retryCount, setRetryCount] = useState(0);
  const MAX_RETRIES = 2;
  const iframeRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLIFrameElement>(null);
  const processingRef = useRef(false);
  const mountedRef = useRef(true);
  
  // Process content minimally for security
  useEffect(() => {
    mountedRef.current = true;
    if (processingRef.current || !content) return;
    processingRef.current = true;

    try {
      // Basic sanitization: Add base target and potentially remove script tags
      let processed = content;
      
      // Add base target to prevent navigation within the preview iframe
      if (!processed.includes('<base target="_blank">')) {
         processed = processed.replace(
           /<head>/i,
           '<head><base target="_blank">'
         );
      }

      // Optional: Basic script removal (consider the security implications)
      // processed = processed.replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '<!-- Script removed -->');

      if (mountedRef.current) {
        setProcessedContent(processed);
        setHasError(false);
      }
    } catch (error) {
      console.error("Error processing iframe content minimally:", error);
      if (mountedRef.current) {
        setProcessedContent("<div>Error processing content</div>");
        setHasError(true);
      }
    } finally {
      processingRef.current = false;
    }

    return () => {
      mountedRef.current = false;
    };
  }, [content]);
  
  // Analyze content to determine optimal scale factor
  useEffect(() => {
    if (!content || hasError) return;
    const contentLength = content.length;
    let newScale = 0.5; // Default
    if (contentLength > 20000) newScale = 0.4;
    else if (contentLength > 10000) newScale = 0.45;
    else if (contentLength < 5000) newScale = 0.55;
    setScale(newScale);
  }, [content, hasError]);
  
  // Handle iframe load events
  const handleIframeLoad = () => {
    setIsLoaded(true);
    if (contentRef.current) {
      try {
        const iframeDocument = contentRef.current.contentDocument || contentRef.current.contentWindow?.document;
        if (iframeDocument) {
          // Prevent clicks from navigating the main page
          iframeDocument.body.addEventListener('click', (e) => {
            let target = e.target as HTMLElement | null;
            while (target && !(target instanceof HTMLAnchorElement)) {
              target = target.parentElement;
            }
            if (target instanceof HTMLAnchorElement) {
              e.preventDefault();
              e.stopPropagation();
              console.log('Prevented iframe navigation to:', target.href);
            }
          }, true); // Use capture phase
        }
      } catch (e) {
        // Catch potential cross-origin errors silently
        // console.warn('Could not add click listener to iframe:', e);
      }
    }
  };
  
  // Handle iframe errors
  const handleIframeError = () => {
    console.error(`Error loading iframe content for title: ${title}`);
    setIsLoaded(true);
    setHasError(true);
    if (retryCount < MAX_RETRIES) {
      console.log(`Retrying iframe load (${retryCount + 1}/${MAX_RETRIES})...`);
      setTimeout(() => setRetryCount(prev => prev + 1), 1000 * (retryCount + 1));
    } else {
      console.error(`Max retries reached for iframe: ${title}`);
    }
  };
  
  // Reset retry count when content changes
  useEffect(() => {
    setRetryCount(0);
  }, [content]);
  
  return (
    <div ref={iframeRef} className="w-full h-full overflow-hidden relative bg-white dark:bg-gray-800 rounded-xl">
      {/* Loading Placeholder */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-muted/10 flex items-center justify-center z-10">
          <Globe className="h-8 w-8 text-muted-foreground/30 animate-pulse" />
        </div>
      )}
      
      {/* Error State */}
      {hasError && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-muted/10 z-20 text-destructive">
          <Globe className="h-8 w-8 mb-2" />
          <span className="text-sm">Error loading preview</span>
        </div>
      )}
      
      {/* Iframe Content */}
      {processedContent !== null && !hasError && (
        <iframe
          key={retryCount} // Force re-render on retry
          ref={contentRef}
          title={title}
          className="absolute border-0"
          style={{
            width: `${100 / scale}%`,
            height: `${100 / scale}%`,
            transform: `scale(${scale})`,
            transformOrigin: 'top left',
            opacity: isLoaded ? 1 : 0,
            transition: 'opacity 0.5s ease-in-out',
          }}
          sandbox="allow-same-origin allow-scripts allow-popups allow-forms" // Essential security
          srcDoc={processedContent}
          onLoad={handleIframeLoad}
          onError={handleIframeError}
          loading="lazy"
        />
      )}
    </div>
  );
});

LazyIframe.displayName = 'LazyIframe';

export default LazyIframe; 