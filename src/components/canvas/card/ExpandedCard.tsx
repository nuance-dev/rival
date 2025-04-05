import React, { useEffect, useState } from "react";
import CardHeader from "./CardHeader";
import CardContent from "./CardContent";
import { ModelOutput } from "@/types/models";
import { ChevronDown, MessageSquare, ExternalLink, Swords } from "lucide-react";
import ModelIcon from "@/components/canvas/ModelIcon";
import FunFactTooltip from "@/components/canvas/FunFactTooltip";
import { formatModelName } from "@/lib/utils";
import DuelModal from "./DuelModal";

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
  const [showDuelModal, setShowDuelModal] = useState(false);
  
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

  // Whether the duel button should be shown
  const shouldShowDuelButton = output.challengeId && output.modelId;
  
  // Toggle duel modal
  const handleToggleDuelModal = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowDuelModal(!showDuelModal);
  };

  return (
    <div 
      className="flex flex-col w-full bg-background shadow-2xl sm:rounded-xl overflow-hidden max-h-[90vh]"
      onClick={e => e.stopPropagation()}
      style={{
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
      }}
    >
      {/* Header */}
      <CardHeader 
        output={output}
        displayTitle={displayTitle}
        onClose={handleClose}
        onNavigateToModel={handleModelClick}
        onNavigateToChallenge={onNavigateToChallenge}
        className="sticky top-0 z-20 backdrop-blur-md bg-background/80 border-b border-border/80"
      />
      
      {/* Progressive disclosure of prompt */}
      {output.prompt && (
        <div className="border-b border-border/80">
          <details className="group [&>summary]:list-none">
            <summary className="p-3 sm:p-4 flex items-center justify-between cursor-pointer hover:bg-muted/10 transition-colors" onClick={(e) => {
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
            <div className="p-3 sm:p-4 bg-muted/5" onClick={(e) => {
              // Prevent the card from closing when clicking on the prompt content
              e.stopPropagation();
            }}>
              <div className="bg-muted/20 rounded-lg p-3 text-sm font-mono overflow-x-auto">
                {output.prompt}
              </div>
            </div>
          </details>
        </div>
      )}
      
      {/* Content section with improved scrolling behavior */}
      <div className="flex-1 overflow-auto">
        <div className="px-1 sm:px-2">
          <CardContent 
            output={output}
            displayTitle={displayTitle}
            expanded={true}
            className="p-2 sm:p-4"
          />
        </div>
      </div>
      
      {/* Footer with model and challenge information - responsive design for mobile */}
      <div className="py-3 px-3 sm:py-4 sm:px-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-t border-border/80 bg-background/80 backdrop-blur-md mt-auto sticky bottom-0 left-0 right-0 z-10 shadow-[0_-4px_10px_-1px_rgba(0,0,0,0.05)]">
        <div className="flex items-center">
          {output.modelId && (
            <button 
              data-model-link="true"
              className="flex items-center cursor-pointer hover:text-primary transition-all group"
              onClick={handleModelClick}
            >
              <ModelIcon modelId={output.modelId || ''} className="w-5 h-5 mr-2 inline-flex group-hover:scale-110 transition-transform duration-300" />
              <span className="text-sm inline-flex items-center font-medium">
                {output.modelName || formatModelName(output.modelId)}
                {output.funFact && <FunFactTooltip funFact={output.funFact} />}
              </span>
            </button>
          )}
        </div>
        
        <div className="flex items-center gap-2 self-end sm:self-auto">
          {/* Duel button with improved styling */}
          {shouldShowDuelButton && (
            <button
              onClick={handleToggleDuelModal}
              className="h-8 px-3 rounded-full flex items-center gap-1.5 text-xs font-medium bg-muted/20 hover:bg-primary/10 hover:text-primary transition-all duration-200 border border-border/40 hover:border-primary/40 hover:shadow-sm"
              title="Compare with another model"
            >
              <Swords className="h-3.5 w-3.5 mr-0.5" />
              <span>Duel</span>
            </button>
          )}
          
          {/* Challenge navigation with improved button */}
          {output.challengeId && onNavigateToChallenge && (
            <button
              data-challenge-link="true"
              onClick={handleChallengeClick}
              className="h-8 px-3 rounded-full flex items-center gap-1.5 text-xs font-medium bg-muted/20 hover:bg-muted/40 transition-all duration-200 border border-border/40 hover:shadow-sm"
            >
              View challenge <ExternalLink className="h-3 w-3 ml-0.5" />
            </button>
          )}
        </div>
      </div>
      
      {/* Duel Modal */}
      {showDuelModal && output.challengeId && (
        <DuelModal
          currentOutput={output}
          challengeId={output.challengeId}
          onClose={() => setShowDuelModal(false)}
        />
      )}
    </div>
  );
};

export default ExpandedCard; 