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
  
  // Process content to remove problematic scripts but preserve Tailwind
  useEffect(() => {
    // Set mounted ref
    mountedRef.current = true;
    
    // Prevent concurrent processing
    if (processingRef.current) return;
    processingRef.current = true;
    
    // Skip processing if no content
    if (!content) {
      setProcessedContent("<div>No content available</div>");
      setHasError(false);
      processingRef.current = false;
      return;
    }
    
    try {
      // Process in a non-blocking way
      setTimeout(() => {
        try {
          // Remove CDN references that are causing warnings
          let processed = content;
          
          // Instead of replacing Tailwind CDN, add a fallback if Tailwind is missing
          // This allows Linear app clones to render properly
          const hasTailwind = processed.includes('cdn.tailwindcss.com') || 
                             processed.includes('tailwindcss') || 
                             processed.includes('tailwind.css');
          
          if (!hasTailwind) {
            // Add fallback styles only if Tailwind isn't already included
            processed = processed.replace(
              /<head>/i,
              `<head>
                <style>
                  /* Basic reset styles */
                  *, *::before, *::after { box-sizing: border-box; }
                  body { margin: 0; font-family: system-ui, sans-serif; line-height: 1.5; }
                  
                  /* Basic utility classes to replace common Tailwind classes */
                  .container { width: 100%; max-width: 1200px; margin: 0 auto; padding: 0 1rem; }
                  .flex { display: flex; }
                  .flex-col { flex-direction: column; }
                  .items-center { align-items: center; }
                  .justify-between { justify-content: space-between; }
                  .justify-center { justify-content: center; }
                  .gap-4 { gap: 1rem; }
                  .gap-2 { gap: 0.5rem; }
                  .p-4 { padding: 1rem; }
                  .p-2 { padding: 0.5rem; }
                  .px-4 { padding-left: 1rem; padding-right: 1rem; }
                  .py-2 { padding-top: 0.5rem; padding-bottom: 0.5rem; }
                  .m-2 { margin: 0.5rem; }
                  .mt-4 { margin-top: 1rem; }
                  .text-center { text-align: center; }
                  .rounded { border-radius: 0.25rem; }
                  .rounded-md { border-radius: 0.375rem; }
                  .rounded-full { border-radius: 9999px; }
                  .border { border-width: 1px; }
                  .border-gray-200 { border-color: #e5e7eb; }
                  .bg-white { background-color: white; }
                  .text-sm { font-size: 0.875rem; }
                  .font-medium { font-weight: 500; }
                  .text-gray-500 { color: #6b7280; }
                  .text-gray-700 { color: #374151; }
                  .text-blue-500 { color: #3b82f6; }
                  
                  /* Linear app specific styles */
                  .bg-gray-50 { background-color: #f9fafb; }
                  .bg-gray-900 { background-color: #111827; }
                  .text-gray-100 { color: #f3f4f6; }
                  .shadow-sm { box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05); }
                  .hover\\:bg-gray-100:hover { background-color: #f3f4f6; }
                  .hover\\:bg-gray-800:hover { background-color: #1f2937; }
                  .transition { transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms; }
                  
                  /* Grid system */
                  .grid { display: grid; }
                  .grid-cols-1 { grid-template-columns: repeat(1, minmax(0, 1fr)); }
                  .grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
                  .grid-cols-3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }
                  .gap-3 { gap: 0.75rem; }
                  
                  /* Additional utility classes */
                  .w-full { width: 100%; }
                  .h-full { height: 100%; }
                  .space-y-2 > * + * { margin-top: 0.5rem; }
                  .space-x-2 > * + * { margin-left: 0.5rem; }
                </style>`
            );
          }
          
          // If we detect this is a Linear clone, include the Linear-specific Tailwind CDN
          const isLinearClone = processed.toLowerCase().includes('linear') || 
                              processed.toLowerCase().includes('issue tracking') ||
                              processed.toLowerCase().includes('kanban') ||
                              processed.toLowerCase().includes('project management');
                              
          if (isLinearClone && !hasTailwind) {
            processed = processed.replace(
              /<head>/i,
              `<head>
                <script src="https://cdn.tailwindcss.com"></script>`
            );
          }
          
          // Safety: Remove external scripts that might cause issues
          processed = processed.replace(
            /<script[^>]*src=["'][^"']*["'][^>]*><\/script>/g,
            ''
          );
          
          // Remove Chart.js references that are causing errors
          processed = processed.replace(
            /<script[^>]*chart\.js[^>]*><\/script>/g,
            ''
          );
          
          // Remove any inline scripts that reference Chart
          processed = processed.replace(
            /<script[^>]*>[\s\S]*?Chart[\s\S]*?<\/script>/gi,
            '<!-- Chart.js script removed for security -->'
          );
          
          // Add base target to prevent navigation
          processed = processed.replace(
            /<head>/i,
            '<head><base target="_blank">'
          );
          
          // Add content security policy to prevent unwanted requests
          processed = processed.replace(
            /<head>/i,
            '<head><meta http-equiv="Content-Security-Policy" content="default-src \'self\' \'unsafe-inline\' https:; img-src data: https: blob:; style-src \'self\' \'unsafe-inline\' https:; font-src \'self\' data: https:; script-src \'self\' \'unsafe-inline\' \'unsafe-eval\' https:; connect-src \'self\' https:;">'
          );
          
          // Add error handling for common JS libraries
          processed = processed.replace(
            /<\/head>/i,
            `<script>
              // Error handling for missing libraries
              window.onerror = function(msg, url, line) {
                if (msg.includes('Chart is not defined') || 
                    msg.includes('$ is not defined') || 
                    msg.includes('jQuery is not defined') ||
                    msg.includes('React is not defined') ||
                    msg.includes('gsap is not defined')) {
                  console.warn('External library reference removed for security: ' + msg);
                  return true; // Prevent default error handling
                }
              };
              
              // Mock libraries to prevent errors
              // ... rest of the mocking code as before
            </script></head>`
          );
          
          if (mountedRef.current) {
            setProcessedContent(processed);
            setHasError(false);
          }
        } catch (error) {
          console.error("Error processing iframe content:", error);
          if (mountedRef.current) {
            setProcessedContent("<div>Error processing content</div>");
            setHasError(true);
          }
        } finally {
          processingRef.current = false;
        }
      }, 0);
    } catch (error) {
      console.error("Error in iframe content processing:", error);
      setProcessedContent("<div>Error processing content</div>");
      setHasError(true);
      processingRef.current = false;
    }
    
    return () => {
      mountedRef.current = false;
    };
  }, [content]);
  
  // Analyze content to determine optimal scale factor
  useEffect(() => {
    // Skip if content is empty or there's an error
    if (!content || hasError) return;
    
    // Simple heuristic: more complex pages (longer HTML) need smaller scale
    const contentLength = content.length;
    
    if (contentLength > 20000) {
      setScale(0.4); // Very complex pages
    } else if (contentLength > 10000) {
      setScale(0.45); // Complex pages
    } else if (contentLength > 5000) {
      setScale(0.5); // Medium pages
    } else {
      setScale(0.55); // Simple pages
    }
  }, [content, hasError]);
  
  // Handle iframe load events
  const handleIframeLoad = () => {
    setIsLoaded(true);
    
    // Try to fix iframe height issues
    if (contentRef.current) {
      try {
        // Access the iframe content safely
        const iframeDocument = contentRef.current.contentDocument || 
                              (contentRef.current.contentWindow?.document);
        
        if (iframeDocument) {
          // Add event listeners to handle clicks inside the iframe
          iframeDocument.addEventListener('click', (e) => {
            // Prevent navigation
            if (e.target instanceof HTMLAnchorElement) {
              e.preventDefault();
              e.stopPropagation();
            }
          });
          
          // Inject error handling script directly into the iframe
          const script = iframeDocument.createElement('script');
          script.textContent = `
            // Error handling for missing libraries
            window.onerror = function(msg, url, line) {
              if (msg.includes('Chart is not defined') || 
                  msg.includes('$ is not defined') || 
                  msg.includes('jQuery is not defined') ||
                  msg.includes('React is not defined') ||
                  msg.includes('gsap is not defined') ||
                  msg.includes('tailwind is not defined') ||
                  msg.includes('THREE is not defined')) {
                console.warn('External library reference removed for security: ' + msg);
                return true; // Prevent default error handling
              }
            };
            
            // Mock Chart object to prevent errors
            window.Chart = window.Chart || function() { 
              console.warn('Chart.js functionality is disabled in preview');
              return { update: function(){}, destroy: function(){} };
            };
            
            // Mock jQuery to prevent errors
            window.$ = window.jQuery = window.$ || function() { 
              return { 
                on: function(){}, 
                ready: function(fn){ setTimeout(fn, 0); },
                css: function(){},
                html: function(){},
                text: function(){},
                append: function(){},
                click: function(){}
              }; 
            };
            
            // Mock GSAP to prevent errors
            window.gsap = window.gsap || {
              to: function() { return { pause: function() {} }; },
              from: function() { return { pause: function() {} }; },
              timeline: function() { return { to: function() {}, from: function() {} }; },
              registerPlugin: function() {},
              utils: {
                toArray: function(selector) { return []; },
                selector: function(selector) { return []; }
              }
            };
            
            // Mock tailwind to prevent errors
            window.tailwind = window.tailwind || {
              config: {},
              init: function() {},
              theme: {
                extend: {}
              }
            };
            
            // Mock React to prevent errors
            window.React = window.React || {
              createElement: function() { return {}; },
              useState: function() { return [null, function() {}]; },
              useEffect: function() {},
              useRef: function() { return { current: null }; },
              Component: function() {},
              createContext: function() { return { Provider: function() {}, Consumer: function() {} }; }
            };
            
            // Mock ReactDOM to prevent errors
            window.ReactDOM = window.ReactDOM || {
              render: function() {},
              createRoot: function() { return { render: function() {} }; }
            };
            
            // Mock Three.js to prevent errors
            window.THREE = window.THREE || {
              Scene: function() {},
              PerspectiveCamera: function() {},
              WebGLRenderer: function() { return { render: function() {}, setSize: function() {} }; },
              BoxGeometry: function() {},
              MeshBasicMaterial: function() {},
              Mesh: function() {}
            };
            
            // Mock Framer Motion to prevent errors
            window.motion = window.motion || {
              div: function() { return {}; },
              animate: function() { return {}; }
            };
            
            // Mock common browser APIs that might be missing
            window.requestAnimationFrame = window.requestAnimationFrame || function(callback) { setTimeout(callback, 16); };
            window.cancelAnimationFrame = window.cancelAnimationFrame || function() {};
            window.matchMedia = window.matchMedia || function() { return { matches: false, addListener: function() {}, removeListener: function() {} }; };
          `;
          
          try {
            iframeDocument.head.appendChild(script);
          } catch (error) {
            console.debug('Could not inject error handling script into iframe:', error);
          }
        }
      } catch {
        // Ignore cross-origin errors
        console.debug('Could not access iframe content due to same-origin policy');
      }
    }
  };
  
  // Handle iframe errors
  const handleIframeError = () => {
    setIsLoaded(true);
    
    // Implement retry logic
    if (retryCount < MAX_RETRIES) {
      console.warn(`Retrying iframe load (${retryCount + 1}/${MAX_RETRIES}) for: ${title}`);
      setRetryCount(prev => prev + 1);
      
      // Reset the iframe content with a slight delay
      setTimeout(() => {
        if (mountedRef.current) {
          setIsLoaded(false);
          // Force a refresh of the content
          setProcessedContent(prev => prev ? `${prev} <!-- retry ${retryCount + 1} -->` : null);
        }
      }, 1000);
    } else {
      setHasError(true);
      console.error(`Failed to load iframe content after ${MAX_RETRIES} retries for: ${title}`);
    }
  };
  
  // Reset retry count when content changes
  useEffect(() => {
    setRetryCount(0);
  }, [content]);
  
  return (
    <div ref={iframeRef} className="h-72 sm:h-80 w-full overflow-hidden rounded-xl relative">
      {/* Always show the placeholder until content loads */}
      <div 
        className={`absolute inset-0 bg-muted/10 flex items-center justify-center z-10 transition-opacity duration-500 ${
          isLoaded ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
      >
        <Globe className="h-8 w-8 text-muted-foreground/30 animate-pulse" />
      </div>
      
      {/* Error state */}
      {hasError && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-muted/10 z-20 text-muted-foreground">
          <Globe className="h-8 w-8 mb-2" />
          <span>Content failed to load</span>
        </div>
      )}
      
      {/* Always render the iframe element */}
      {!hasError && processedContent && (
        <div className="absolute inset-0 overflow-hidden">
          <iframe
            ref={contentRef}
            title={title}
            className="w-full h-full bg-white hide-scrollbar transition-opacity duration-500 border-none origin-top-left"
            style={{ 
              width: `${Math.round(100/scale)}%`, 
              height: `${Math.round(100/scale)}%`, 
              transform: `scale(${scale})`,
              transformOrigin: 'top left',
              opacity: isLoaded ? 1 : 0
            }}
            sandbox="allow-same-origin allow-scripts allow-popups allow-forms allow-modals"
            srcDoc={processedContent}
            loading="eager"
            onLoad={handleIframeLoad}
            onError={handleIframeError}
            data-iframe-content={title}
          />
        </div>
      )}
    </div>
  );
});

LazyIframe.displayName = 'LazyIframe';

export default LazyIframe; 