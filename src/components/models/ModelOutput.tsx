import React from "react";
import { ModelCanvas } from "@/components/canvas/ModelCanvas";
import { prompts } from "@/lib/data";
import { ModelOutput as OutputType } from "@/types/models";

interface ModelOutputProps {
  output: OutputType;
  className?: string;
}

export function ModelOutput({ output, className }: ModelOutputProps) {
  const prompt = prompts.find(p => p.id === output.promptId);
  
  return (
    <div className={`bg-card border border-border rounded-xl overflow-hidden ${className}`}>
      <div className="p-5">
        {prompt && (
          <>
            <h3 className="text-xl font-medium mb-2">{prompt.title}</h3>
            <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
              {prompt.promptText}
            </p>
          </>
        )}
      </div>
      
      <div className="bg-muted/30 p-5 border-t border-border">
        <ModelCanvas 
          output={output}
          className="w-full"
          title={prompt?.title || `Output ${output.id}`}
          description={prompt?.description}
        />
      </div>
    </div>
  );
} 