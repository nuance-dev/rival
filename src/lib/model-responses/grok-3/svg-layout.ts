import { ModelResponse } from "@/types/models";

export const svgLayoutgrok_3: ModelResponse = {
  id: "grok-3-svg-layout",
  modelId: "grok-3",
  prompt: "Generate an SVG of a pelican riding a bicycle. In code",
  responseDate: "2025-03-01",
  type: "svg",
  title: "SVG Layout Challenge",
  funFact: "Had to explicity ask for code",
  description: "Grok 3's response to the Tests an AI's ability to generate vector graphics",
  content: `<svg width="300" height="200" viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
  <!-- Bicycle wheels -->
  <circle cx="80" cy="150" r="30" fill="none" stroke="black" stroke-width="2"/>
  <circle cx="180" cy="150" r="30" fill="none" stroke="black" stroke-width="2"/>
  
  <!-- Bicycle frame -->
  <polygon points="80,150 130,100 180,150 130,150" fill="none" stroke="black" stroke-width="2"/>
  <line x1="130" y1="100" x2="130" y2="80" stroke="black" stroke-width="2"/>
  
  <!-- Pelican body -->
  <ellipse cx="130" cy="60" rx="40" ry="20" fill="white" stroke="black" stroke-width="2"/>
  
  <!-- Pelican head -->
  <circle cx="170" cy="50" r="15" fill="white" stroke="black" stroke-width="2"/>
  
  <!-- Pelican beak -->
  <polygon points="170,50 200,45 200,55" fill="orange" stroke="black" stroke-width="1"/>
  
  <!-- Pelican eye -->
  <circle cx="165" cy="45" r="3" fill="black"/>
  
  <!-- Pelican legs -->
  <line x1="120" y1="80" x2="110" y2="110" stroke="black" stroke-width="2"/>
  <line x1="140" y1="80" x2="150" y2="110" stroke="black" stroke-width="2"/>
</svg>`
}; 