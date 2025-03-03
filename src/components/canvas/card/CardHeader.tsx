import React, { useState, useRef, useEffect } from "react";
import { 
  Code, 
  Globe, 
  Image as ImageIcon, 
  X, 
  Copy,
  Check,
  MessageSquare,
  Brush
} from "lucide-react";
import { ModelOutput } from "@/types/models";
import { getSanitizedChallengeId } from "@/lib/utils";

interface CardHeaderProps {
  output: ModelOutput & { 
    modelName?: string;
    challengeId?: string;
  };
  displayTitle?: string;
  onClose: (e?: React.MouseEvent) => void;
  onNavigateToModel: (e: React.MouseEvent) => void;
  onNavigateToChallenge?: (e: React.MouseEvent) => void;
}

export const CardHeader: React.FC<CardHeaderProps> = ({
  output,
  displayTitle,
  onClose,
  onNavigateToModel,
  onNavigateToChallenge
}) => {
  const [isCopied, setIsCopied] = useState(false);
  const isMounted = useRef(true);
  
  // Debug logging for challenge navigation
  useEffect(() => {
    console.debug('[CardHeader] Challenge navigation setup:', {
      challengeId: output.challengeId,
      displayTitle,
      hasNavigationHandler: !!onNavigateToChallenge
    });
  }, [output.challengeId, displayTitle, onNavigateToChallenge]);

  // Helper function to get the icon based on content type
  const getContentTypeIcon = () => {
    switch (output.type) {
      case "code":
        return <Code className="h-4 w-4 mr-2" />;
      case "html":
      case "website":
        return <Globe className="h-4 w-4 mr-2" />;
      case "image":
        return <ImageIcon className="h-4 w-4 mr-2" />;
      case "svg":
        return <Brush className="h-4 w-4 mr-2" />;
      case "text":
      default:
        return <MessageSquare className="h-4 w-4 mr-2" />;
    }
  };

  // Copy button logic
  const copyToClipboard = (e: React.MouseEvent) => {
    e.stopPropagation();
    
    // Check if we have content to copy
    if (!output.content) return;
    
    // Copy content to clipboard
    navigator.clipboard.writeText(output.content)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => {
          if (isMounted.current) {
            setIsCopied(false);
          }
        }, 2000);
      })
      .catch(err => {
        console.error("Failed to copy content: ", err);
      });
  };
  
  // Enhanced close handler with better event handling
  const handleClose = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    console.debug('[CardHeader] Close button clicked in header');
    // Call the provided onClose function with the event
    onClose(e);
  };
  
  // Enhanced challenge navigation handler with debug logging
  const handleChallengeClick = (e: React.MouseEvent) => {
    console.debug('[CardHeader] Challenge title clicked:', output.challengeId);
    e.stopPropagation();
    e.preventDefault();
    if (onNavigateToChallenge) {
      onNavigateToChallenge(e);
    } else if (output.challengeId) {
      // Navigate directly to the challenge page if no handler is provided
      const sanitizedChallengeId = getSanitizedChallengeId(output.challengeId);
      const encodedChallengeId = encodeURIComponent(sanitizedChallengeId.trim());
      console.debug(`[CardHeader] Direct navigation to challenge: ${sanitizedChallengeId}`);
      window.location.href = `/challenges/${encodedChallengeId}`;
    } else {
      console.warn('[CardHeader] No challenge navigation handler provided and no challengeId available');
    }
  };

  return (
    <div className="p-4 flex items-center justify-between border-b bg-muted/20">
      <div className="flex items-center">
        <button
          onClick={handleClose}
          className="h-8 w-8 flex items-center justify-center rounded-full hover:bg-muted/60 mr-2"
        >
          <X className="h-4 w-4" />
        </button>
        
        <h3 className="text-base font-display font-bold flex items-center">
          {getContentTypeIcon()}
          {output.challengeId && displayTitle ? (
            <button
              className="cursor-pointer hover:text-primary hover:underline transition-colors"
              onClick={handleChallengeClick}
              aria-label={`View challenge: ${displayTitle}`}
              title={`View challenge: ${displayTitle}`}
            >
              {displayTitle}
            </button>
          ) : (
            <span>{displayTitle}</span>
          )}
        </h3>
      </div>
      
      <div className="flex items-center gap-1">
        {output.modelId && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              e.preventDefault();
              onNavigateToModel(e);
            }}
            className="h-8 px-3 rounded-full flex items-center gap-1.5 text-xs hover:bg-muted/60 transition-colors"
          >
            Back to model
          </button>
        )}
        <button
          onClick={copyToClipboard}
          className="h-8 w-8 flex items-center justify-center rounded-full hover:bg-muted/60 transition-colors"
        >
          {isCopied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
        </button>
      </div>
    </div>
  );
};

export default CardHeader; 