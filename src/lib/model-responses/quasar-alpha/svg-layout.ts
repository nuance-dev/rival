import { ModelResponse } from "@/types/models";

export const svgLayoutquasar_alpha: ModelResponse = {
  id: "quasar-alpha-svg-layout",
  modelId: "quasar-alpha",
  prompt: "Generate an SVG of a pelican riding a bicycle.",
  responseDate: "2025-04-04",
  type: "svg",
  title: "SVG Layout Challenge",
  description: "Quasar Alpha's response to the challenge of generating vector graphics",
  content: `<svg width="400" height="400" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
  <!-- Bicycle Wheels -->
  <circle cx="120" cy="300" r="50" stroke="black" stroke-width="4" fill="none"/>
  <circle cx="280" cy="300" r="50" stroke="black" stroke-width="4" fill="none"/>
  
  <!-- Bicycle Frame -->
  <line x1="120" y1="300" x2="200" y2="250" stroke="black" stroke-width="4"/>
  <line x1="200" y1="250" x2="280" y2="300" stroke="black" stroke-width="4"/>
  <line x1="200" y1="250" x2="200" y2="190" stroke="black" stroke-width="4"/>
  <line x1="200" y1="190" x2="240" y2="190" stroke="black" stroke-width="4"/> <!-- Handlebars -->
  <line x1="200" y1="250" x2="160" y2="250" stroke="black" stroke-width="4"/> <!-- Seat tube -->
  <ellipse cx="160" cy="250" rx="15" ry="8" fill="brown" stroke="black" stroke-width="2"/> <!-- Seat -->
  
  <!-- Pelican Body -->
  <ellipse cx="160" cy="180" rx="40" ry="50" fill="#ffffff" stroke="black" stroke-width="2"/>
  
  <!-- Pelican Wing -->
  <path d="M120,200 C140,230 180,230 200,200" fill="#cccccc" stroke="black" stroke-width="2"/>
  
  <!-- Pelican Head -->
  <circle cx="190" cy="140" r="20" fill="#ffffff" stroke="black" stroke-width="2"/>
  
  <!-- Pelican Eye -->
  <circle cx="195" cy="135" r="3" fill="black"/>
  
  <!-- Pelican Beak -->
  <polygon points="210,140 240,150 210,155" fill="orange" stroke="black" stroke-width="2"/>
  
  <!-- Pelican Legs -->
  <line x1="160" y1="230" x2="140" y2="280" stroke="orange" stroke-width="4"/>
  <line x1="170" y1="230" x2="190" y2="280" stroke="orange" stroke-width="4"/>
  
  <!-- Pedals -->
  <line x1="200" y1="250" x2="220" y2="270" stroke="black" stroke-width="4"/>
  <line x1="200" y1="250" x2="180" y2="270" stroke="black" stroke-width="4"/>
</svg>
`
}; 