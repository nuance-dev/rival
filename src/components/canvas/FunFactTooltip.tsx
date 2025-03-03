"use client";

import React from "react";
import { MessageSquare } from "lucide-react";

interface FunFactTooltipProps {
  funFact?: string;
}

const FunFactTooltip = React.memo(({ funFact }: FunFactTooltipProps) => {
  if (!funFact) return null;
  
  return (
    <div className="inline-flex items-center group/tooltip relative">
      <div className="h-6 w-6 flex items-center justify-center rounded-full bg-primary/10 text-primary cursor-help ml-2">
        <MessageSquare className="h-3 w-3" />
      </div>
      <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 min-w-[200px] max-w-[250px] p-2 bg-card/95 backdrop-blur-sm border border-border rounded-lg shadow-lg text-xs opacity-0 invisible group-hover/tooltip:opacity-100 group-hover/tooltip:visible transition-all duration-200 z-30">
        {funFact}
      </div>
    </div>
  );
});

FunFactTooltip.displayName = 'FunFactTooltip';

export default FunFactTooltip; 