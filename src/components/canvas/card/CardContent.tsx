import React, { useRef } from "react";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { ModelOutput } from "@/types/models";
import LazyImage from "../LazyImage";
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
  className?: string;
}

export const CardContent: React.FC<CardContentProps> = ({ 
  output, 
  displayTitle,
  expanded = false,
  className = ""
}) => {
  const iframeHeight = "800px";
  const iframeRef = useRef<HTMLIFrameElement>(null);

  if (!output.content) {
    return (
      <div className={`p-4 text-muted-foreground text-sm ${className}`}>
        No content available for this output.
      </div>
    );
  }

  const renderPreview = () => {
    try {
      switch (output.type.toLowerCase()) {
        case "website":
        case "html":
          return (
            <div className="w-full h-full min-h-[280px] bg-muted/5 rounded-xl relative flex flex-col">
              <iframe 
                srcDoc={output.content}
                title={displayTitle || "HTML Output"}
                className="w-full h-full min-h-[280px] border-0 flex-1"
                style={{ height: '100%' }}
                sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
                loading="lazy"
              />
            </div>
          );
        
        case "svg":
          return (
            <div className="h-full w-full flex-1 flex items-center justify-center bg-white dark:bg-gray-800 p-4 rounded-xl overflow-hidden">
              <div className="w-full h-full flex items-center justify-center overflow-hidden">
                <SafeSVGRenderer 
                  content={output.content} 
                  className="w-full h-full" 
                  isModelGenerated={true} 
                />
              </div>
            </div>
          );

        case "image":
          if (typeof output.content === 'string' && output.content && (
              output.content.startsWith("http") || 
              output.content.startsWith("data:image") || 
              output.content.startsWith("/")
            )) {
            return (
              <div className="w-full h-full flex-1 min-h-[280px] relative">
                <div className="absolute inset-0 h-full w-full">
                  <LazyImage src={output.content} alt={displayTitle || "AI Generated Image"} />
                </div>
              </div>
            );
          } else {
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
          const isShortText = typeof output.content === 'string' && output.content.length < 300;
          const wordCount = typeof output.content === 'string' ? output.content.split(/\s+/).length : 0;
          const isVeryShortText = wordCount < 30;

          return (
            <div className="p-6 h-full w-full flex-1 min-h-[280px] overflow-hidden relative rounded-xl bg-card/80 flex flex-col">
              <div className={`
                ${isShortText ? 'flex h-full flex-grow' : 'line-clamp-[18]'}
                text-sm text-card-foreground/90 font-light prose prose-sm dark:prose-invert max-w-none
                ${isVeryShortText ? 'items-center justify-center' : ''}
                flex-1 flex flex-col h-full
              `}>
                <div className={`
                  ${isVeryShortText ? 'text-center text-base md:text-lg font-medium max-w-[90%] my-auto' : ''}
                  ${isShortText && !isVeryShortText ? 'py-4 h-full flex flex-col justify-center' : ''}
                  flex-1 h-full
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
          const isShortCode = typeof output.content === 'string' && output.content.split(/\n/).length < 10;
          return (
            <div className="p-4 h-full w-full flex-1 min-h-[280px] overflow-hidden relative rounded-xl bg-[#0d1117] text-[#e6edf3] flex flex-col">
              <pre className={`
                ${isShortCode ? 'flex items-center justify-center h-full text-center' : 'line-clamp-[18]'} 
                text-xs overflow-hidden flex-1 flex flex-col h-full
              `}>
                <code className={isShortCode ? 'my-auto h-full' : 'h-full'}>{output.content}</code>
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
            <div className="w-full h-full relative bg-white dark:bg-gray-800"> 
              <iframe
                ref={iframeRef}
                title="HTML Preview"
                className="w-full h-full bg-white hide-scrollbar border-0 block"
                style={{ 
                  width: '100%',
                  height: iframeHeight,
                  minHeight: "800px",
                }}
                sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
                srcDoc={output.content || "<div>No content available</div>"}
                loading="lazy"
              />
            </div>
          );
        
        case "svg":
          return (
            <div className="w-full h-full flex-1 flex items-center justify-center bg-white dark:bg-gray-800 p-4 min-h-[calc(90vh-130px)] overflow-hidden">
              <div className="w-full h-full max-w-[90%] max-h-[90%]">
                <SafeSVGRenderer 
                  content={output.content} 
                  className="w-full h-full" 
                  isModelGenerated={true} 
                />
              </div>
            </div>
          );
        
        case "image":
          return (
            <div className="w-full flex-1 min-h-[500px] flex items-center justify-center bg-muted/5 p-4 pb-16"
                data-expanded-image={output.id}>
              {typeof output.content === 'string' && output.content && (
                output.content.startsWith('data:') ? (
                  <img 
                    src={output.content} 
                    alt={displayTitle || "Generated image"}
                    className="max-w-full max-h-[75vh] w-full h-full object-contain rounded-md"
                    loading="eager"
                  />
                ) : (
                  <Image 
                    src={output.content} 
                    alt={displayTitle || "Generated image"}
                    className="max-w-full max-h-[75vh] w-full h-full object-contain rounded-md"
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

  const ContentRenderer = expanded ? renderExpandedContent : renderPreview;

  return <div className={`${className} h-full`}><ContentRenderer /></div>;
};

export default CardContent;