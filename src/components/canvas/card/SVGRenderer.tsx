import React, { Component, ErrorInfo, useState, useEffect, useRef } from "react";
import { Brush } from "lucide-react";
import { sanitizeSvgContent } from "./utils/svgUtils";

// Error boundary component to catch and handle SVG rendering errors
class SVGErrorBoundary extends Component<{ children: React.ReactNode }> {
  state = { hasError: false, errorMessage: "" };
  
  static getDerivedStateFromError(error: Error) {
    // Update state so the next render will show the fallback UI
    return { 
      hasError: true, 
      errorMessage: error.message || "Unknown error rendering SVG" 
    };
  }
  
  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("SVG rendering error:", error, info);
  }
  
  render() {
    if (this.state.hasError) {
      return (
        <div className="h-full w-full flex items-center justify-center bg-muted/10 text-destructive">
          <div className="flex flex-col items-center justify-center gap-2 p-4">
            <Brush className="h-8 w-8 mb-2 opacity-50" />
            <div className="text-sm text-center">Error rendering SVG content</div>
            {process.env.NODE_ENV === 'development' && (
              <div className="text-xs opacity-75 mt-2 max-w-[300px] text-center">
                {this.state.errorMessage}
              </div>
            )}
          </div>
        </div>
      );
    }
    
    return this.props.children;
  }
}

interface SafeSVGRendererProps {
  content: string;
  className?: string;
}

// Component for safely rendering SVG content
export const SafeSVGRenderer: React.FC<SafeSVGRendererProps> = ({ 
  content,
  className = "w-full h-full flex items-center justify-center"
}) => {
  const [renderError, setRenderError] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [sanitizedContent, setSanitizedContent] = useState<string>('');
  const containerRef = useRef<HTMLDivElement>(null);
  const processingRef = useRef(false);
  const mountedRef = useRef(true);
  
  // Add custom CSS for SVG scaling and gradient handling
  useEffect(() => {
    // Add styling to help SVGs fill the container and properly display gradients
    if (!document.getElementById('svg-container-styles')) {
      const styleEl = document.createElement('style');
      styleEl.id = 'svg-container-styles';
      styleEl.textContent = `
        [data-svg-renderer="true"] svg {
          width: 100% !important;
          height: 100% !important;
          min-width: 100% !important;
          min-height: 100% !important;
          max-width: 100% !important;
          max-height: 100% !important;
          object-fit: contain;
          display: block;
        }
        
        /* Fix for gradient rendering issues across browsers */
        [data-svg-renderer="true"] svg defs {
          position: absolute;
        }
        
        /* Ensure proper opacity for gradient stops */
        [data-svg-renderer="true"] svg stop {
          stop-opacity: 1;
        }
        
        /* Fix for Firefox gradient rendering */
        @-moz-document url-prefix() {
          [data-svg-renderer="true"] svg linearGradient,
          [data-svg-renderer="true"] svg radialGradient {
            transform: translateZ(0);
          }
        }
      `;
      document.head.appendChild(styleEl);
    }
    
    return () => {
      // Clean up is not necessary as the style might be used by other instances
    };
  }, []);
  
  // Try to sanitize the SVG in a safe way
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    
    // Set mounted ref
    mountedRef.current = true;
    
    // Prevent concurrent processing
    if (processingRef.current) return;
    processingRef.current = true;
    
    const processSVG = async () => {
      try {
        // Skip if content is empty or not a string
        if (!content || typeof content !== 'string') {
          if (mountedRef.current) {
            setRenderError(true);
            setErrorMessage('No valid SVG content provided');
          }
          processingRef.current = false;
          return;
        }
        
        // Check if content even looks like an SVG
        if (!content.includes('<svg') && !content.includes('<?xml')) {
          if (mountedRef.current) {
            setRenderError(true);
            setErrorMessage('Content does not appear to be SVG format');
          }
          processingRef.current = false;
          return;
        }
        
        // Sanitize content outside of render to catch errors
        // Use a try-catch inside a setTimeout to prevent blocking the main thread
        setTimeout(() => {
          try {
            // Directly sanitize the SVG content
            const sanitized = sanitizeSvgContent(content);
            
            // Only update state if component is still mounted
            if (mountedRef.current) {
              setSanitizedContent(sanitized);
              setRenderError(false);
              setErrorMessage('');
              
              // Use a safer method to insert the sanitized content
              if (containerRef.current) {
                // Clear any existing content first
                containerRef.current.innerHTML = '';
                
                // Create a temporary div to safely parse the content
                const tempContainer = document.createElement('div');
                tempContainer.innerHTML = sanitized;
                
                // Append the parsed content to the container
                while (tempContainer.firstChild) {
                  containerRef.current.appendChild(tempContainer.firstChild);
                }
              }
            }
          } catch (error) {
            console.error("Error sanitizing SVG content:", error);
            if (mountedRef.current) {
              setRenderError(true);
              setErrorMessage(error instanceof Error ? error.message : 'Unknown SVG processing error');
            }
          } finally {
            processingRef.current = false;
          }
        }, 0);
      } catch (error) {
        console.error("Error in SVG processing:", error);
        if (mountedRef.current) {
          setRenderError(true);
          setErrorMessage(error instanceof Error ? error.message : 'Unknown SVG processing error');
        }
        processingRef.current = false;
      }
    };
    
    processSVG();
    
    // Return cleanup function
    return () => {
      mountedRef.current = false;
      // Capture current ref value for cleanup
      const currentContainer = containerRef.current;
      if (currentContainer) {
        currentContainer.innerHTML = '';
      }
    };
  }, [content, className]);
  
  // Monitor for post-render errors
  useEffect(() => {
    if (!containerRef.current || !sanitizedContent || renderError) return;
    
    // Add mutation observer to detect rendering errors
    const observer = new MutationObserver((mutations) => {
      if (!mountedRef.current) return;
      
      for (const mutation of mutations) {
        // If we see error messages added to the DOM, capture them
        if (mutation.type === 'childList' && mutation.addedNodes.length) {
          const errorNode = Array.from(mutation.addedNodes).find(
            node => node instanceof HTMLElement && 
                   (node.getAttribute('data-svg-error') || 
                    node.textContent?.includes('Error') ||
                    node.classList.contains('error'))
          );
          
          if (errorNode && errorNode instanceof HTMLElement) {
            setRenderError(true);
            setErrorMessage(errorNode.textContent || 'SVG rendering error detected');
            
            // Clean up the container to prevent memory leaks
            if (containerRef.current) {
              containerRef.current.innerHTML = '';
            }
            break;
          }
        }
      }
    });
    
    // Start observing with a delay to ensure the DOM has settled
    const timeoutId = setTimeout(() => {
      if (containerRef.current && mountedRef.current) {
        observer.observe(containerRef.current, { childList: true, subtree: true });
      }
    }, 50);
    
    // Clean up
    return () => {
      clearTimeout(timeoutId);
      observer.disconnect();
    };
  }, [sanitizedContent, renderError]);
  
  // Fallback if there's an error
  if (renderError) {
    return (
      <div className="h-full w-full flex items-center justify-center bg-muted/10 text-destructive">
        <div className="flex flex-col items-center justify-center gap-2 p-4">
          <Brush className="h-8 w-8 mb-2 opacity-50" />
          <div className="text-sm text-center">Error processing SVG content</div>
          {process.env.NODE_ENV === 'development' && errorMessage && (
            <div className="text-xs opacity-75 mt-2 max-w-[300px] text-center">
              {errorMessage}
            </div>
          )}
        </div>
      </div>
    );
  }
  
  return (
    <SVGErrorBoundary>
      <div 
        ref={containerRef}
        className={className}
        style={{ 
          width: "100%", 
          height: "100%", 
          display: "flex", 
          alignItems: "center", 
          justifyContent: "center",
          overflow: "hidden",
          minWidth: "100%",
          minHeight: "100%"
        }}
        data-svg-renderer="true"
      />
    </SVGErrorBoundary>
  );
};

export default SafeSVGRenderer; 