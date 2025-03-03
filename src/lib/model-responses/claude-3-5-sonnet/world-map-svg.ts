import { ModelResponse } from "@/types/models";

export const worldMapSvgclaude_3_5_sonnet: ModelResponse = {
  id: "claude-3-5-sonnet-world-map-svg",
  modelId: "claude-3-5-sonnet",
  prompt: "Create a simplified world map as an SVG showing major continents with different colors. Add labels for at least 5 major countries.",
  responseDate: "2025-02-27",
  type: "svg",
  title: "World Map SVG",
  description: "Claude 3.5 Sonnet's clean, minimalist world map with continent colors and major country labels",
  content: `<?xml version="1.0" encoding="UTF-8"?>
<svg width="800" height="400" viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg">
    <!-- Background -->
    <rect width="800" height="400" fill="#A5D6F7"/>
    
    <!-- Continents -->
    <!-- North America -->
    <path d="M 150,80 L 220,70 L 280,90 L 260,150 L 180,200 L 140,180 Z" 
          fill="#8CB369" stroke="black" stroke-width="1"/>
    
    <!-- South America -->
    <path d="M 220,220 L 260,200 L 280,260 L 250,320 L 220,300 Z" 
          fill="#F4E285" stroke="black" stroke-width="1"/>
    
    <!-- Europe -->
    <path d="M 380,80 L 450,70 L 470,100 L 440,130 L 400,120 Z" 
          fill="#F4A259" stroke="black" stroke-width="1"/>
    
    <!-- Africa -->
    <path d="M 380,150 L 450,140 L 470,220 L 420,280 L 380,250 Z" 
          fill="#BC4B51" stroke="black" stroke-width="1"/>
    
    <!-- Asia -->
    <path d="M 480,70 L 600,60 L 650,100 L 620,200 L 500,180 L 470,130 Z" 
          fill="#5B8E7D" stroke="black" stroke-width="1"/>
    
    <!-- Australia -->
    <path d="M 600,250 L 650,240 L 680,280 L 640,310 L 600,300 Z" 
          fill="#BC9EC1" stroke="black" stroke-width="1"/>
    
    <!-- Country Labels -->
    <g font-family="Arial" font-size="14" fill="black">
        <text x="180" y="120">USA</text>
        <text x="240" y="250">Brazil</text>
        <text x="410" y="100">Russia</text>
        <text x="410" y="200">Egypt</text>
        <text x="620" y="270">Australia</text>
    </g>
</svg>`
}; 