import React from "react";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { ModelOutput } from "@/types/models";
import LazyImage from "../LazyImage";
import LazyIframe from "../LazyIframe";
import SafeSVGRenderer from "./SVGRenderer";
import Image from "next/image";

interface CardContentProps {
  output: ModelOutput & { 
    modelName?: string;
    challengeId?: string;
    funFact?: string;
    prompt?: string;
  };
  displayTitle?: string;
  expanded?: boolean;
}

export const CardContent: React.FC<CardContentProps> = ({ 
  output, 
  displayTitle,
  expanded = false
}) => {
  if (!output.content) {
    return (
      <div className="p-4 text-muted-foreground text-sm">
        No content available for this output.
      </div>
    );
  }

  const renderPreview = () => {
    try {
      switch (output.type.toLowerCase()) {
        case "website":
        case "html":
          // Enhanced website/HTML rendering that handles Linear app clones better
          const isLinearAppClone = typeof output.content === 'string' && (
            output.content.toLowerCase().includes('linear') ||
            output.content.toLowerCase().includes('issue tracking') ||
            output.content.toLowerCase().includes('kanban') ||
            output.title?.toLowerCase().includes('linear')
          );

          // For Linear app clones, use a similar approach to expanded view
          if (isLinearAppClone) {
            return (
              <div className="w-full h-full flex-1 min-h-[280px] overflow-hidden relative rounded-xl bg-white">
                <iframe
                  title="HTML Preview"
                  className="w-full h-full min-h-[280px] bg-white hide-scrollbar border-0"
                  style={{ width: '100%', height: '100%' }}
                  sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
                  srcDoc={output.content || "<div>No content available</div>"}
                  loading="lazy"
                />
              </div>
            );
          }
          
          // For other HTML content, use the LazyIframe component
          return (
            <div className="w-full h-full flex-1 min-h-[280px]">
              <LazyIframe content={output.content} title={displayTitle || "HTML Output"} />
            </div>
          );
        
        case "svg":
          return (
            <div className="h-full w-full flex-1 min-h-[280px] flex items-center justify-center bg-white dark:bg-gray-800 p-4 rounded-xl">
              <div className="w-full h-full flex items-center justify-center overflow-hidden">
                <SafeSVGRenderer content={output.content} className="min-w-[70%] min-h-[70%] max-w-full max-h-full" />
              </div>
            </div>
          );

        case "image":
          // More robust validation for image format with proper null/undefined checks
          if (typeof output.content === 'string' && output.content && (
              output.content.startsWith("http") || 
              output.content.startsWith("data:image") || 
              output.content.startsWith("/")
            )) {
            return (
              <div className="w-full h-full flex-1 min-h-[280px]">
                <LazyImage src={output.content} alt={displayTitle || "AI Generated Image"} />
              </div>
            );
          } else {
            // Handle invalid image formats more gracefully - fallback to text display without logging error
            return (
              <div className="h-full w-full flex-1 min-h-[280px] flex flex-col items-center justify-center bg-muted/10 rounded-xl text-muted-foreground p-4">
                <div className="mb-2">Text Content (Image Format)</div>
                <div className="text-xs text-center max-w-sm opacity-70 overflow-hidden">
                  {typeof output.content === 'string' && output.content 
                    ? output.content.length > 150 
                      ? output.content.substring(0, 150) + "..." 
                      : output.content
                    : "No content available"}
                </div>
              </div>
            );
          }

        case "text":
          // Improved text display with better height consistency
          const isShortText = typeof output.content === 'string' && output.content.length < 300;
          const wordCount = typeof output.content === 'string' ? output.content.split(/\s+/).length : 0;
          const isVeryShortText = wordCount < 30;

          return (
            <div className="p-6 h-full w-full flex-1 min-h-[280px] overflow-hidden relative rounded-xl bg-card/80 flex flex-col">
              <div className={`
                ${isShortText ? 'flex flex-grow h-full' : 'line-clamp-[18]'}
                text-sm text-card-foreground/90 font-light prose prose-sm dark:prose-invert max-w-none
                ${isVeryShortText ? 'items-center justify-center' : ''}
                flex-1 flex flex-col 
              `}>
                <div className={`
                  ${isVeryShortText ? 'text-center text-base md:text-lg font-medium max-w-[90%] my-auto' : ''}
                  ${isShortText && !isVeryShortText ? 'py-4 h-full flex flex-col justify-center' : ''}
                  flex-1
                `}>
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {output.content}
                  </ReactMarkdown>
                </div>
              </div>
              {!isShortText && <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-card to-transparent" />}
            </div>
          );

        case "code":
          // Improved code display with better height consistency
          const isShortCode = typeof output.content === 'string' && output.content.split(/\n/).length < 10;
          return (
            <div className="p-4 h-full w-full flex-1 min-h-[280px] overflow-hidden relative rounded-xl bg-[#0d1117] text-[#e6edf3] flex flex-col">
              <pre className={`
                ${isShortCode ? 'flex items-center justify-center h-full text-center' : 'line-clamp-[18]'} 
                text-xs overflow-hidden flex-1 flex flex-col
              `}>
                <code className={isShortCode ? 'my-auto' : ''}>{output.content}</code>
              </pre>
              {!isShortCode && <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-[#0d1117] to-transparent" />}
            </div>
          );

        default:
          return (
            <div className="h-full w-full flex-1 min-h-[280px] flex flex-col items-center justify-center gap-2 bg-muted/10 rounded-xl p-4">
              <div className="text-sm text-muted-foreground text-center">
                {output.type} content preview
              </div>
            </div>
          );
      }
    } catch (error) {
      console.error("Error rendering card content:", error);
      return (
        <div className="h-full w-full flex-1 min-h-[280px] flex items-center justify-center bg-muted/10 rounded-xl text-muted-foreground">
          Error displaying content
        </div>
      );
    }
  };

  const renderExpandedContent = () => {
    try {
      switch (output.type.toLowerCase()) {
        case "code":
          return (
            <pre className="overflow-auto w-full h-full text-sm whitespace-pre-wrap p-4 pb-16">
              <code>{output.content}</code>
            </pre>
          );
        
        case "html":
        case "website":
          return (
            <div className="w-full h-full flex-1 min-h-[500px]">
              <iframe
                title="HTML Preview"
                className="w-full h-full min-h-[500px] bg-white hide-scrollbar border-0"
                style={{ width: 'calc(100% + 1px)' }}
                sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
                srcDoc={output.content || "<div>No content available</div>"}
                loading="lazy"
              />
            </div>
          );
        
        case "svg":
          return (
            <div className="w-full h-full flex-1 flex items-center justify-center bg-white dark:bg-gray-800 p-4 min-h-[calc(90vh-130px)] overflow-hidden">
              <SafeSVGRenderer content={output.content} className="w-full h-full flex items-center justify-center overflow-hidden" />
            </div>
          );
        
        case "image":
          return (
            <div className="w-full flex-1 min-h-[500px] flex items-center justify-center bg-muted/5 p-4 pb-16"
                data-expanded-image={output.id}>
              {typeof output.content === 'string' && output.content && (
                output.content.startsWith('data:') ? (
                  // For data URLs, we still need to use img tag
                  <img 
                    src={output.content} 
                    alt={displayTitle || "Generated image"}
                    className="max-w-full max-h-[75vh] object-contain rounded-md"
                    loading="eager"
                  />
                ) : (
                  // For regular URLs, use Next.js Image
                  <Image 
                    src={output.content} 
                    alt={displayTitle || "Generated image"}
                    className="max-w-full max-h-[75vh] object-contain rounded-md"
                    width={800}
                    height={600}
                    priority
                    unoptimized={output.content.startsWith('http')}
                  />
                )
              )}
            </div>
          );
        
        case "text":
          return (
            <div className="p-6 pb-16 overflow-auto max-h-[calc(90vh-120px)]">
              <div className="prose prose-sm dark:prose-invert max-w-none">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {output.content}
                </ReactMarkdown>
              </div>
            </div>
          );
        
        default:
          return (
            <div className="p-4 pb-16 overflow-auto max-h-[calc(90vh-120px)]">
              <pre className="whitespace-pre-wrap text-sm">
                {output.content}
              </pre>
            </div>
          );
      }
    } catch (error) {
      console.error("Error rendering expanded content:", error);
      return (
        <div className="p-4 text-destructive">
          Error displaying content
        </div>
      );
    }
  };

  return expanded ? renderExpandedContent() : renderPreview();
};

export default CardContent;