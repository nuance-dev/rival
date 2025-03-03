"use client";

import React from "react";

const OneShotBadge = React.memo(() => (
  <div className="absolute top-2 right-2 inline-flex items-center gap-1 text-xs font-medium text-primary/80 bg-background/70 backdrop-blur-sm px-2 py-1 rounded-full z-20">
    <span className="h-1.5 w-1.5 rounded-full bg-primary/80 animate-pulse"></span>
    <span>one-shot</span>
  </div>
));

OneShotBadge.displayName = 'OneShotBadge';

export default OneShotBadge; 