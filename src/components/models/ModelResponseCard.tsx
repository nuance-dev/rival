import React from "react";
import Link from "next/link";
import { cn, formatModelName, getCanonicalModelId, getSanitizedChallengeId } from "@/lib/utils";
import { ModelResponse } from "@/types/models";
import { Code, FileText, Globe, ImageIcon, FileCode, Brush } from "lucide-react";

interface ModelResponseCardProps {
  response: ModelResponse;
  modelId: string;
  className?: string;
}

export function ModelResponseCard({ response, modelId, className }: ModelResponseCardProps) {
  // Type-specific icons
  const iconMap = {
    text: FileText,
    code: Code,
    website: Globe,
    image: ImageIcon,
    html: FileCode,
    svg: Brush,
  };
  
  const TypeIcon = iconMap[response.type] || FileText;
  
  // Get canonical model ID for proper linking
  const canonicalModelId = getCanonicalModelId(modelId);
  
  // Get sanitized challenge ID if available
  const sanitizedChallengeId = response.challengeId ? 
    getSanitizedChallengeId(response.challengeId) : null;

  return (
    <div className={cn(
      "bg-card border border-border rounded-xl p-5 hover:shadow-md transition-all hover:border-primary/20 h-full flex flex-col",
      className
    )}>
      <div className="flex items-center justify-between mb-3">
        <div className="inline-flex px-2 py-1 rounded-full text-xs bg-muted">
          {new Date(response.responseDate).toLocaleDateString()}
        </div>
        <TypeIcon className="h-4 w-4 text-muted-foreground" />
      </div>
      
      <Link 
        href={sanitizedChallengeId ? `/challenges/${sanitizedChallengeId}` : '#'}
        className="block"
      >
        <h3 className="text-xl font-medium mb-2 line-clamp-1 hover:text-primary transition-colors">
          {response.title}
        </h3>
      </Link>
      
      <p className="text-muted-foreground text-sm mb-4 flex-grow line-clamp-3">
        {response.description}
      </p>
      
      <div className="mt-auto pt-3 text-sm border-t border-border flex justify-between items-center">
        <Link 
          href={`/models/${canonicalModelId}`}
          className="text-sm hover:text-primary transition-colors"
        >
          {response.modelName || formatModelName(modelId)}
        </Link>
        <Link 
          href={`/models/${canonicalModelId}/responses/${response.id}`}
          className="text-primary"
        >
          View Details →
        </Link>
      </div>
    </div>
  );
} 