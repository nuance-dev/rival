import { ModelResponse } from "@/types/models";

export const svgLayoutgrok_3_thinking: ModelResponse = {
  id: "grok-3-thinking-svg-layout",
  modelId: "grok-3-thinking",
  prompt: "Generate an SVG of a pelican riding a bicycle. DO NOT CREATE AN IMG but an <SVG>",
  responseDate: "2025-03-03",
  type: "svg",
  title: "SVG Layout Challenge",
  funFact: "Had to explicity ask for code",
  description: "Grok 3 Thinking's response to the Tests an AI's ability to generate vector graphics",
  content: `<svg width="400" height="300" xmlns="http://www.w3.org/2000/svg">
  <!-- Ground line -->
  <line x1="0" y1="250" x2="400" y2="250" stroke="black" />
  
  <!-- Back wheel -->
  <circle cx="100" cy="200" r="50" fill="none" stroke="black" />
  
  <!-- Front wheel -->
  <circle cx="300" cy="200" r="50" fill="none" stroke="black" />
  
  <!-- Frame -->
  <line x1="100" y1="200" x2="200" y2="150" stroke="black" />
  <line x1="200" y1="150" x2="300" y2="200" stroke="black" />
  
  <!-- Pedal crank -->
  <circle cx="200" cy="200" r="5" fill="black" />
  
  <!-- Pedals -->
  <line x1="200" y1="200" x2="180" y2="200" stroke="black" />
  <line x1="200" y1="200" x2="220" y2="200" stroke="black" />
  
  <!-- Seat -->
  <ellipse cx="200" cy="150" rx="20" ry="10" fill="black" />
  
  <!-- Handlebars -->
  <line x1="270" y1="150" x2="290" y2="150" stroke="black" />
  
  <!-- Pelican body -->
  <ellipse cx="200" cy="120" rx="30" ry="20" fill="white" stroke="black" />
  
  <!-- Pelican head -->
  <circle cx="230" cy="100" r="15" fill="white" stroke="black" />
  
  <!-- Pelican beak -->
  <polygon points="230,100 260,90 260,110" fill="yellow" stroke="black" />
  
  <!-- Pelican wings -->
  <path d="M180,120 Q160,110 180,100" fill="none" stroke="black" />
  <path d="M220,120 Q240,110 220,100" fill="none" stroke="black" />
  
  <!-- Pelican legs -->
  <path d="M200,140 L190,170 L180,200" fill="none" stroke="black" />
  <path d="M200,140 L210,170 L220,200" fill="none" stroke="black" />
  
  <!-- Pelican eyes -->
  <circle cx="225" cy="95" r="2" fill="black" />
  <circle cx="235" cy="95" r="2" fill="black" />
</svg>`
}; 