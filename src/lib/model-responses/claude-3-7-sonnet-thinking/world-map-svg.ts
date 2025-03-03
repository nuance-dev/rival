import { ModelResponse } from "@/types/models";

export const worldMapSvgclaude_3_7_sonnet_thinking: ModelResponse = {
  id: "claude-3-7-sonnet-thinking-world-map-svg",
  modelId: "claude-3-7-sonnet-thinking",
  prompt: "Create a simplified world map as an SVG showing major continents with different colors. Add labels for at least 5 major countries.",
  responseDate: "2025-02-27",
  type: "svg",
  title: "World Map SVG",
  description: "Claude 3.7 Sonnet Thinking's approach to creating a world map with structured thinking",
  content: `<svg width="800" height="500" xmlns="http://www.w3.org/2000/svg">
  <!-- Background (Ocean) -->
  <rect width="800" height="500" fill="#a4e7ff"/>
  
  <!-- North America -->
  <path d="M150,120 L180,110 L200,120 L210,150 L180,200 L150,210 L120,190 L100,150 Z" fill="#97d487" stroke="#333" stroke-width="1"/>
  <text x="150" y="160" font-family="Arial" font-size="12" text-anchor="middle" font-weight="bold">UNITED STATES</text>
  
  <!-- South America -->
  <path d="M220,230 L240,220 L260,230 L270,270 L250,320 L220,330 L200,310 L190,270 Z" fill="#e6c273" stroke="#333" stroke-width="1"/>
  <text x="230" y="280" font-family="Arial" font-size="12" text-anchor="middle" font-weight="bold">BRAZIL</text>
  
  <!-- Europe -->
  <path d="M400,110 L430,100 L450,110 L460,130 L440,160 L410,170 L390,160 L380,140 Z" fill="#c982c9" stroke="#333" stroke-width="1"/>
  <text x="420" y="140" font-family="Arial" font-size="12" text-anchor="middle" font-weight="bold">GERMANY</text>
  
  <!-- Africa -->
  <path d="M400,190 L430,180 L460,190 L470,230 L450,280 L420,290 L390,280 L380,240 Z" fill="#f5a242" stroke="#333" stroke-width="1"/>
  <text x="425" y="240" font-family="Arial" font-size="12" text-anchor="middle" font-weight="bold">EGYPT</text>
  
  <!-- Asia -->
  <path d="M500,110 L580,90 L620,110 L640,150 L620,200 L580,230 L520,210 L480,170 L470,130 Z" fill="#f27d7d" stroke="#333" stroke-width="1"/>
  <text x="510" y="160" font-family="Arial" font-size="12" text-anchor="middle" font-weight="bold">RUSSIA</text>
  <text x="580" y="180" font-family="Arial" font-size="12" text-anchor="middle" font-weight="bold">CHINA</text>
  <text x="550" y="210" font-family="Arial" font-size="12" text-anchor="middle" font-weight="bold">INDIA</text>
  
  <!-- Australia -->
  <path d="M650,280 L680,270 L700,280 L710,300 L690,330 L660,340 L640,330 L630,310 Z" fill="#f7dc6f" stroke="#333" stroke-width="1"/>
  <text x="670" y="310" font-family="Arial" font-size="12" text-anchor="middle" font-weight="bold">AUSTRALIA</text>
  
  <!-- Title -->
  <text x="400" y="30" font-family="Arial" font-size="20" text-anchor="middle" font-weight="bold">SIMPLIFIED WORLD MAP</text>
  
  <!-- Legend -->
  <rect x="650" y="50" width="20" height="10" fill="#97d487" stroke="#333" stroke-width="0.5"/>
  <text x="675" y="60" font-family="Arial" font-size="10">North America</text>
  
  <rect x="650" y="70" width="20" height="10" fill="#e6c273" stroke="#333" stroke-width="0.5"/>
  <text x="675" y="80" font-family="Arial" font-size="10">South America</text>
  
  <rect x="650" y="90" width="20" height="10" fill="#c982c9" stroke="#333" stroke-width="0.5"/>
  <text x="675" y="100" font-family="Arial" font-size="10">Europe</text>
  
  <rect x="650" y="110" width="20" height="10" fill="#f5a242" stroke="#333" stroke-width="0.5"/>
  <text x="675" y="120" font-family="Arial" font-size="10">Africa</text>
  
  <rect x="650" y="130" width="20" height="10" fill="#f27d7d" stroke="#333" stroke-width="0.5"/>
  <text x="675" y="140" font-family="Arial" font-size="10">Asia</text>
  
  <rect x="650" y="150" width="20" height="10" fill="#f7dc6f" stroke="#333" stroke-width="0.5"/>
  <text x="675" y="160" font-family="Arial" font-size="10">Australia</text>
</svg>`
}; 