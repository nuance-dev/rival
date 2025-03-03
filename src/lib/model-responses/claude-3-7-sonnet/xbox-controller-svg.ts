import { ModelResponse } from "@/types/models";

export const xboxControllerSvgclaude_3_7_sonnet: ModelResponse = {
  id: "claude-3-7-sonnet-xbox-controller-svg",
  modelId: "claude-3-7-sonnet",
  prompt: "Create an SVG art of an Xbox controller with detailed buttons, joysticks, and d-pad. Use a modern, clean design style with subtle gradients.",
  responseDate: "2025-02-27",
  type: "svg",
  title: "Xbox Controller SVG Art",
  description: "Claude 3.7 Sonnet's response to the challenge of creating a detailed SVG illustration of an Xbox controller",
  content: `<svg width="800" height="600" viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
  <!-- Definitions for gradients -->
  <defs>
    <!-- Controller body gradient -->
    <linearGradient id="controllerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#2a2a2a" />
      <stop offset="100%" stop-color="#1a1a1a" />
    </linearGradient>
    
    <!-- Button gradients -->
    <linearGradient id="buttonGradient" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#444" />
      <stop offset="100%" stop-color="#333" />
    </linearGradient>
    
    <!-- A button gradient -->
    <radialGradient id="aButtonGradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
      <stop offset="0%" stop-color="#5cb85c" />
      <stop offset="100%" stop-color="#4cae4c" />
    </radialGradient>
    
    <!-- B button gradient -->
    <radialGradient id="bButtonGradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
      <stop offset="0%" stop-color="#d9534f" />
      <stop offset="100%" stop-color="#c9302c" />
    </radialGradient>
    
    <!-- X button gradient -->
    <radialGradient id="xButtonGradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
      <stop offset="0%" stop-color="#5bc0de" />
      <stop offset="100%" stop-color="#46b8da" />
    </radialGradient>
    
    <!-- Y button gradient -->
    <radialGradient id="yButtonGradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
      <stop offset="0%" stop-color="#f0ad4e" />
      <stop offset="100%" stop-color="#eea236" />
    </radialGradient>
    
    <!-- Joystick gradients -->
    <linearGradient id="joystickGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#444" />
      <stop offset="100%" stop-color="#222" />
    </linearGradient>
    
    <!-- D-pad gradient -->
    <linearGradient id="dpadGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#333" />
      <stop offset="100%" stop-color="#222" />
    </linearGradient>
  </defs>
  
  <!-- Controller body -->
  <path d="M250,200 C180,220 150,250 140,300 C130,350 130,400 150,450 C170,500 200,520 250,530
           L300,550 C350,570 450,570 500,550 L550,530
           C600,520 630,500 650,450 C670,400 670,350 660,300 C650,250 620,220 550,200
           C500,190 450,190 400,200 C350,190 300,190 250,200 Z" 
        fill="url(#controllerGradient)" stroke="#111" stroke-width="2" />
  
  <!-- Left grip -->
  <ellipse cx="200" cy="350" rx="70" ry="120" fill="url(#controllerGradient)" stroke="#111" stroke-width="1" />
  
  <!-- Right grip -->
  <ellipse cx="600" cy="350" rx="70" ry="120" fill="url(#controllerGradient)" stroke="#111" stroke-width="1" />
  
  <!-- Left joystick -->
  <circle cx="250" cy="300" r="35" fill="url(#joystickGradient)" stroke="#111" stroke-width="1" />
  <circle cx="250" cy="300" r="25" fill="#222" stroke="#111" stroke-width="1" />
  <circle cx="250" cy="300" r="20" fill="#333" stroke="#111" stroke-width="1" />
  
  <!-- Right joystick -->
  <circle cx="500" cy="400" r="35" fill="url(#joystickGradient)" stroke="#111" stroke-width="1" />
  <circle cx="500" cy="400" r="25" fill="#222" stroke="#111" stroke-width="1" />
  <circle cx="500" cy="400" r="20" fill="#333" stroke="#111" stroke-width="1" />
  
  <!-- D-pad -->
  <rect x="310" y="380" width="60" height="60" rx="5" ry="5" fill="url(#dpadGradient)" stroke="#111" stroke-width="1" />
  <rect x="325" y="365" width="30" height="90" rx="5" ry="5" fill="#222" stroke="#111" stroke-width="1" />
  <rect x="295" y="395" width="90" height="30" rx="5" ry="5" fill="#222" stroke="#111" stroke-width="1" />
  
  <!-- A, B, X, Y buttons -->
  <circle cx="580" cy="320" r="20" fill="url(#aButtonGradient)" stroke="#111" stroke-width="1" />
  <circle cx="620" cy="280" r="20" fill="url(#bButtonGradient)" stroke="#111" stroke-width="1" />
  <circle cx="540" cy="280" r="20" fill="url(#xButtonGradient)" stroke="#111" stroke-width="1" />
  <circle cx="580" cy="240" r="20" fill="url(#yButtonGradient)" stroke="#111" stroke-width="1" />
  
  <!-- Button labels -->
  <text x="580" y="325" font-family="Arial" font-size="18" font-weight="bold" text-anchor="middle" fill="white">A</text>
  <text x="620" y="285" font-family="Arial" font-size="18" font-weight="bold" text-anchor="middle" fill="white">B</text>
  <text x="540" y="285" font-family="Arial" font-size="18" font-weight="bold" text-anchor="middle" fill="white">X</text>
  <text x="580" y="245" font-family="Arial" font-size="18" font-weight="bold" text-anchor="middle" fill="white">Y</text>
  
  <!-- Menu buttons -->
  <ellipse cx="350" cy="280" rx="15" ry="10" fill="url(#buttonGradient)" stroke="#111" stroke-width="1" />
  <ellipse cx="450" cy="280" rx="15" ry="10" fill="url(#buttonGradient)" stroke="#111" stroke-width="1" />
  
  <!-- Xbox button -->
  <circle cx="400" cy="280" r="20" fill="#111" stroke="#222" stroke-width="1" />
  <circle cx="400" cy="280" r="15" fill="#333" stroke="#444" stroke-width="1" />
  <path d="M395,275 L395,285 L390,280 L395,275 M405,275 L405,285 L410,280 L405,275" fill="#5cb85c" />
  
  <!-- Bumpers -->
  <rect x="200" y="180" width="100" height="30" rx="15" ry="15" fill="url(#buttonGradient)" stroke="#111" stroke-width="1" />
  <rect x="500" y="180" width="100" height="30" rx="15" ry="15" fill="url(#buttonGradient)" stroke="#111" stroke-width="1" />
  
  <!-- Triggers (just the visible part) -->
  <path d="M200,180 Q220,160 250,160 L250,180 Z" fill="url(#buttonGradient)" stroke="#111" stroke-width="1" />
  <path d="M600,180 Q580,160 550,160 L550,180 Z" fill="url(#buttonGradient)" stroke="#111" stroke-width="1" />
  
  <!-- Highlights and reflections -->
  <path d="M250,210 C220,220 200,240 190,280 C180,320 180,360 200,400" fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="3" />
  <path d="M550,210 C580,220 600,240 610,280 C620,320 620,360 600,400" fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="3" />
</svg>`
}; 