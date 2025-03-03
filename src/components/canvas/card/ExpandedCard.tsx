import React, { useEffect } from "react";
import CardHeader from "./CardHeader";
import CardContent from "./CardContent";
import { ModelOutput } from "@/types/models";
import { ChevronDown, MessageSquare, ExternalLink } from "lucide-react";
import ModelIcon from "../ModelIcon";
import FunFactTooltip from "../FunFactTooltip";
import { formatModelName } from "@/lib/utils";

interface ExpandedCardProps {
  output: ModelOutput & { 
    modelName?: string;
    challengeId?: string;
    funFact?: string;
    prompt?: string;
  };
  displayTitle?: string;
  onClose: (e?: React.MouseEvent) => void;
  onNavigateToModel: (e: React.MouseEvent) => void;
  onNavigateToChallenge?: (e: React.MouseEvent) => void;
}

export const ExpandedCard: React.FC<ExpandedCardProps> = ({
  output,
  displayTitle,
  onClose,
  onNavigateToModel,
  onNavigateToChallenge
}) => {
  // Ensure body doesn't scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    
    // Add escape key listener to close the card
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        console.debug('[ExpandedCard] Escape key pressed, closing card');
        onClose();
      }
    };
    
    window.addEventListener('keydown', handleEscapeKey);
    
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener('keydown', handleEscapeKey);
    };
  }, [onClose]);

  // Enhanced click handlers with proper event handling
  const handleClose = (e?: React.MouseEvent) => {
    console.debug('[ExpandedCard] Close button clicked');
    if (e) e.stopPropagation();
    onClose(e);
  };
  
  const handleModelClick = (e: React.MouseEvent) => {
    console.debug('[ExpandedCard] Model name clicked');
    e.stopPropagation();
    onNavigateToModel(e);
  };
  
  const handleChallengeClick = (e: React.MouseEvent) => {
    console.debug('[ExpandedCard] Challenge title clicked');
    e.stopPropagation();
    if (onNavigateToChallenge) {
      onNavigateToChallenge(e);
    }
  };

  return (
    <div className="flex flex-col h-full" onClick={e => e.stopPropagation()}>
      {/* Header */}
      <CardHeader 
        output={output}
        displayTitle={displayTitle}
        onClose={handleClose}
        onNavigateToModel={handleModelClick}
        onNavigateToChallenge={onNavigateToChallenge}
      />
      
      {/* Progressive disclosure of prompt */}
      {output.prompt && (
        <div className="border-b border-border">
          <details className="group [&>summary]:list-none">
            <summary className="p-3 flex items-center justify-between cursor-pointer hover:bg-muted/10 transition-colors" onClick={(e) => {
              // Prevent the card from closing when clicking on the summary
              e.stopPropagation();
            }}>
              <div className="flex items-center">
                <MessageSquare className="h-4 w-4 mr-2 text-muted-foreground" />
                <span className="text-sm font-medium">View Challenge Prompt</span>
              </div>
              <div className="text-muted-foreground">
                <ChevronDown className="h-4 w-4 group-open:rotate-180 transition-transform duration-200" />
              </div>
            </summary>
            <div className="p-4 bg-muted/5 border-t border-border" onClick={(e) => {
              // Prevent the card from closing when clicking on the prompt content
              e.stopPropagation();
            }}>
              <div className="bg-muted/20 rounded-lg p-3 text-sm font-mono">
                {output.prompt}
              </div>
            </div>
          </details>
        </div>
      )}
      
      {/* Content section - make sure it's scrollable but doesn't cause the entire card to scroll */}
      <div className="flex-1 w-full min-h-0 overflow-auto">
        <CardContent 
          output={output}
          displayTitle={displayTitle}
          expanded={true}
        />
      </div>
      
      {/* Footer with model and challenge information - ensure it's always visible */}
      <div className="py-4 flex items-center justify-between border-t bg-muted/40 backdrop-blur mt-auto sticky bottom-0 left-0 right-0 z-10 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
        <div className="flex items-center">
          {output.modelId && (
            <button 
              data-model-link="true"
              className="flex items-center cursor-pointer hover:text-primary transition-colors"
              onClick={handleModelClick}
            >
              <ModelIcon modelId={output.modelId || ''} className="w-5 h-5 mr-2 inline-flex" />
              <span className="text-sm inline-flex items-center">
                {output.modelName || formatModelName(output.modelId)}
                {output.funFact && <FunFactTooltip funFact={output.funFact} />}
              </span>
            </button>
          )}
        </div>
        
        {/* Challenge navigation */}
        {output.challengeId && onNavigateToChallenge && (
          <button
            data-challenge-link="true"
            onClick={handleChallengeClick}
            className="h-8 px-3 rounded-full flex items-center gap-1.5 text-xs hover:bg-muted/60 transition-colors"
          >
            View challenge <ExternalLink className="h-3 w-3 ml-0.5" />
          </button>
        )}
      </div>
    </div>
  );
};

export default ExpandedCard; 