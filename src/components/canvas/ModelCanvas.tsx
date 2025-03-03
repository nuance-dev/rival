"use client";

import React from "react";
import { ModelOutput } from "@/types/models";
import { cn } from "@/lib/utils";
import { NewOutputCard } from "./NewOutputCard";

interface ModelCanvasProps {
  output: ModelOutput & { 
    modelName?: string;
    challengeId?: string;
    funFact?: string;
    prompt?: string;
  };
  title?: string;
  description?: string;
  className?: string;
}

export function ModelCanvas({ 
  output, 
  title, 
  description,
  className
}: ModelCanvasProps) {
  // Use modern flex layout principles for consistent height rendering
  return (
    <div className={cn(
      "w-full h-full min-h-[280px] flex flex-col", 
      "flex-auto", // Ensures the div takes available space
      className
    )}>
      <NewOutputCard 
        output={{
          ...output,
          title: output.title || title
        }}
        description={description}
        category={output.type}
        id={output.id || `canvas-${output.modelId}-${output.type}`}
        className="h-full flex-grow flex flex-col" // Enhanced flex layout properties
        isHoverable={false} // Prevent hover effects that might affect sizing
      />
    </div>
  );
} 