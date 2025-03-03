"use client";

import React from "react";
import { ModelOutput } from "@/types/models";
import { formatModelName } from "@/lib/utils";
import ModelIcon from "./ModelIcon";

interface ModelInfoOverlayProps {
  output: ModelOutput & { 
    modelName?: string;
    challengeId?: string;
    funFact?: string;
    prompt?: string;
  };
}

const ModelInfoOverlay = React.memo(({ output }: ModelInfoOverlayProps) => {
  if (!output.modelId) return null;
  
  return (
    <>
      {/* Desktop hover overlay */}
      <div className="absolute inset-0 hidden md:flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-background/70 backdrop-blur-sm z-10">
        <div className="p-3 rounded-lg flex flex-col items-center gap-2">
          <div className="flex items-center gap-2">
            <ModelIcon modelId={output.modelId} className="w-6 h-6 mr-2" />
            <div className="flex flex-col">
              <span className="font-medium text-sm">{output.modelName || formatModelName(output.modelId)}</span>
              <span className="text-xs text-muted-foreground">{output.title || "AI Challenge"}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile persistent model badge - improved for better fit */}
      <div className="absolute top-2 left-2 md:hidden inline-flex items-center bg-background/80 backdrop-blur-sm rounded-full py-0.5 pl-2 pr-2.5 shadow-sm border border-border/30 z-10 model-badge w-auto max-w-[calc(100%-1rem)]">
        <ModelIcon modelId={output.modelId} className="w-3.5 h-3.5 flex-shrink-0 mr-1.5" />
        <span className="text-xs font-medium truncate overflow-hidden">{output.modelName || formatModelName(output.modelId)}</span>
      </div>
    </>
  );
});

ModelInfoOverlay.displayName = 'ModelInfoOverlay';

export default ModelInfoOverlay; 