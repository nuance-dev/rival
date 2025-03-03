import { ModelResponse } from "@/types/models";

export const worldMapSvgclaude_3_7_sonnet: ModelResponse = {
  id: "claude-3-7-sonnet-world-map-svg",
  modelId: "claude-3-7-sonnet",
  prompt: "Create a simplified world map as an SVG showing major continents with different colors. Add labels for at least 5 major countries.",
  responseDate: "2025-02-26",
  type: "svg",
  title: "World Map SVG",
  description: "Claude 3.7 Sonnet's simplified world map creation with major continents and country labels",
  content: `<svg width="800" height="500" viewBox="0 0 800 500" xmlns="http://www.w3.org/2000/svg">
  <!-- Background (oceans) -->
  <rect width="800" height="500" fill="#a4d1e9"/>
  
  <!-- Continents -->
  <!-- North America -->
  <path d="M150,120 L100,150 L120,200 L150,250 L200,280 L250,200 L200,150 Z" fill="#8fbc8f"/>
  
  <!-- South America -->
  <path d="M200,280 L220,350 L250,400 L270,380 L260,320 L240,290 Z" fill="#d2b48c"/>
  
  <!-- Europe -->
  <path d="M400,120 L380,150 L400,180 L450,170 L470,140 L450,120 Z" fill="#b19cd9"/>
  
  <!-- Africa -->
  <path d="M400,180 L380,250 L420,320 L470,300 L490,220 L450,170 Z" fill="#f4a460"/>
  
  <!-- Asia -->
  <path d="M470,140 L450,170 L490,220 L550,200 L650,150 L600,100 L520,110 Z" fill="#f08080"/>
  
  <!-- Australia -->
  <path d="M650,300 L630,350 L680,370 L700,330 L680,310 Z" fill="#ffd700"/>
  
  <!-- Country Labels -->
  <!-- USA -->
  <text x="170" y="200" font-family="Arial" font-size="16" font-weight="bold">USA</text>
  
  <!-- Brazil -->
  <text x="240" y="350" font-family="Arial" font-size="16" font-weight="bold">Brazil</text>
  
  <!-- Russia -->
  <text x="550" y="140" font-family="Arial" font-size="16" font-weight="bold">Russia</text>
  
  <!-- China -->
  <text x="580" y="180" font-family="Arial" font-size="16" font-weight="bold">China</text>
  
  <!-- India -->
  <text x="520" y="210" font-family="Arial" font-size="16" font-weight="bold">India</text>
  
  <!-- Australia -->
  <text x="650" y="340" font-family="Arial" font-size="16" font-weight="bold">Australia</text>
  
  <!-- UK -->
  <text x="410" y="140" font-family="Arial" font-size="16" font-weight="bold">UK</text>
</svg>`
}; 