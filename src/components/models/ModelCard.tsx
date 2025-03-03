"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";
import { AIModel } from "@/types/models";
import { cn, getCanonicalModelId } from "@/lib/utils";
import OptimizedImage from "@/components/ui/OptimizedImage";

interface ModelCardProps {
  model: AIModel;
  onClick?: () => void;
  className?: string;
}

export function ModelCard({ model, onClick, className }: ModelCardProps) {
  // Get the canonical model ID for proper URL formatting
  const canonicalModelId = getCanonicalModelId(model.id);
  
  return (
    <div
      className={cn(
        "bg-card border rounded-xl overflow-hidden",
        "hover:shadow-md transition-all duration-300",
        onClick ? "cursor-pointer" : "",
        "touch-manipulation",
        className
      )}
      onClick={onClick}
    >
      {/* Logo/Icon Area */}
      <div 
        className="h-24 flex items-center justify-center"
        style={model.gradientColors ? {
          backgroundImage: `linear-gradient(to right, ${model.gradientColors[0]}, ${model.gradientColors[1]})`,
        } : { 
          backgroundColor: "var(--muted)" 
        }}
      >
        {model.logoUrl ? (
          <div className="flex items-center justify-center w-full h-full">
            <OptimizedImage 
              src={model.logoUrl} 
              alt={model.name} 
              className="h-10 w-auto max-w-[64px] object-contain"
              width={64}
              height={64}
              objectFit="contain"
              priority={true}
            />
          </div>
        ) : (
          <div className="h-16 w-16 rounded-full bg-card flex items-center justify-center">
            <span className="text-xl font-bold">{model.name.charAt(0)}</span>
          </div>
        )}
      </div>
      
      {/* Content Area */}
      <div className="p-4 md:p-4 p-3">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-display text-lg">{model.name}</h3>
          <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full">
            {model.provider}
          </span>
        </div>
        
        <p className="text-muted-foreground text-xs mb-4 line-clamp-3">
          {model.description}
        </p>
        
        <div className="grid grid-cols-2 gap-2 text-xs mb-4">
          <div>
            <span className="text-muted-foreground">Released:</span>
            <div className="font-medium">{model.releaseDate}</div>
          </div>
          <div>
            <span className="text-muted-foreground">Size:</span>
            <div className="font-medium">{model.size.toUpperCase()}</div>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-1 mt-2">
          {model.capabilities.slice(0, 3).map((capability) => (
            <span 
              key={capability}
              className="inline-flex px-2 py-1 bg-muted/50 rounded-full text-xs"
            >
              {capability.split('-').map(word => 
                word.charAt(0).toUpperCase() + word.slice(1)
              ).join(' ')}
            </span>
          ))}
          {model.capabilities.length > 3 && (
            <span className="inline-flex px-2 py-1 bg-muted/50 rounded-full text-xs">
              +{model.capabilities.length - 3} more
            </span>
          )}
        </div>
      </div>
      
      {/* View Details Button */}
      <div className="px-4 py-3 border-t flex justify-end">
        <a 
          href={`/models/${canonicalModelId}`}
          className="text-xs flex items-center text-primary hover:underline"
          onClick={(e) => {
            if (onClick) {
              e.preventDefault();
              onClick();
            }
          }}
        >
          View Details <ArrowUpRight className="ml-1 h-3 w-3" />
        </a>
      </div>
    </div>
  );
} 