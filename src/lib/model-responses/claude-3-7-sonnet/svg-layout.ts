import { ModelResponse } from "@/types/models";

export const svgLayoutclaude_3_7_sonnet: ModelResponse = {
  id: "claude-3-7-sonnet-svg-layout",
  modelId: "claude-3-7-sonnet",
  prompt: "Generate an SVG of a pelican riding a bicycle.",
  responseDate: "2025-02-27",
  type: "svg",
  title: "SVG Layout Challenge"  ,
  description: "Claude 3.7 Sonnet's response to the Tests an AI's ability to generate vector graphics",
  content: `<svg width="400" height="300" xmlns="http://www.w3.org/2000/svg">
  <!-- Bicycle -->
  <g id="bicycle">
    <!-- Wheels -->
    <circle cx="100" cy="220" r="40" fill="none" stroke="black" stroke-width="2"/>
    <circle cx="280" cy="220" r="40" fill="none" stroke="black" stroke-width="2"/>
    
    <!-- Spokes -->
    <g id="frontSpokes">
      <line x1="100" y1="180" x2="100" y2="260" stroke="black" stroke-width="1"/>
      <line x1="60" y1="220" x2="140" y2="220" stroke="black" stroke-width="1"/>
      <line x1="70" y1="190" x2="130" y2="250" stroke="black" stroke-width="1"/>
      <line x1="70" y1="250" x2="130" y2="190" stroke="black" stroke-width="1"/>
    </g>
    
    <g id="backSpokes">
      <line x1="280" y1="180" x2="280" y2="260" stroke="black" stroke-width="1"/>
      <line x1="240" y1="220" x2="320" y2="220" stroke="black" stroke-width="1"/>
      <line x1="250" y1="190" x2="310" y2="250" stroke="black" stroke-width="1"/>
      <line x1="250" y1="250" x2="310" y2="190" stroke="black" stroke-width="1"/>
    </g>
    
    <!-- Frame -->
    <line x1="100" y1="220" x2="190" y2="170" stroke="black" stroke-width="3"/>
    <line x1="190" y1="170" x2="280" y2="220" stroke="black" stroke-width="3"/>
    <line x1="190" y1="170" x2="190" y2="120" stroke="black" stroke-width="3"/>
    <line x1="190" y1="120" x2="240" y2="120" stroke="black" stroke-width="3"/>
    <line x1="100" y1="220" x2="160" y2="120" stroke="black" stroke-width="3"/>
    <line x1="160" y1="120" x2="190" y2="120" stroke="black" stroke-width="3"/>
    
    <!-- Pedals -->
    <circle cx="190" cy="170" r="15" fill="none" stroke="black" stroke-width="2"/>
    <line x1="190" y1="155" x2="205" y2="185" stroke="black" stroke-width="2"/>
    <rect x="205" y="185" width="10" height="5" fill="black"/>
    
    <!-- Handlebars -->
    <line x1="160" y1="120" x2="140" y2="100" stroke="black" stroke-width="2"/>
    <line x1="160" y1="120" x2="180" y2="100" stroke="black" stroke-width="2"/>
    
    <!-- Seat -->
    <rect x="230" y="115" width="25" height="10" rx="3" fill="black"/>
  </g>
  
  <!-- Pelican -->
  <g id="pelican">
    <!-- Body -->
    <ellipse cx="190" cy="90" rx="35" ry="25" fill="#f0f0f0" stroke="black" stroke-width="1"/>
    
    <!-- Head -->
    <circle cx="150" cy="75" r="15" fill="#f0f0f0" stroke="black" stroke-width="1"/>
    
    <!-- Beak -->
    <path d="M150,75 L110,80 L110,70 Z" fill="orange" stroke="black" stroke-width="1"/>
    
    <!-- Eye -->
    <circle cx="145" cy="70" r="3" fill="black"/>
    
    <!-- Wings -->
    <path d="M190,90 C210,60 230,70 220,100 Z" fill="#f0f0f0" stroke="black" stroke-width="1"/>
    
    <!-- Legs -->
    <line x1="180" y1="115" x2="190" y2="155" stroke="orange" stroke-width="2"/>
    <line x1="200" y1="115" x2="205" y2="155" stroke="orange" stroke-width="2"/>
    
    <!-- Feet -->
    <path d="M190,155 L185,160 L195,160 Z" fill="orange"/>
    <path d="M205,155 L200,160 L210,160 Z" fill="orange"/>
  </g>
</svg>`
};
