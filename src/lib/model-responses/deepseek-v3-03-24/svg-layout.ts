import { ModelResponse } from "@/types/models";

export const svgUlayoutdeepseek_v3_03_24: ModelResponse = {
  id: "deepseek-v3-03-24-svg-layout",
  modelId: "deepseek-v3-03-24",
  prompt: "Generate an SVG of a pelican riding a bicycle.",
  responseDate: "2025-03-30",
  type: "svg",
  title: "svg-layout",
  description: "DeepSeek V3 March 2024's response",
  content: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="400" height="300">
  <!-- Bicycle Frame -->
  <path d="M100 150 L150 100 L200 150 L250 100 L300 150" stroke="#333" stroke-width="5" fill="none"/>
  <circle cx="150" cy="150" r="30" stroke="#333" stroke-width="5" fill="none"/>
  <circle cx="250" cy="150" r="30" stroke="#333" stroke-width="5" fill="none"/>
  
  <!-- Pedals and Crank -->
  <circle cx="200" cy="150" r="10" fill="#333"/>
  <line x1="200" y1="150" x2="190" y2="130" stroke="#333" stroke-width="3"/>
  <line x1="200" y1="150" x2="210" y2="170" stroke="#333" stroke-width="3"/>
  
  <!-- Pelican Body -->
  <ellipse cx="120" cy="120" rx="40" ry="30" fill="#f9d5a7"/>
  
  <!-- Pelican Head -->
  <path d="M80 100 Q70 80 80 60 Q90 40 110 50 Q120 30 140 50 Q130 70 120 80 Z" fill="#f9d5a7"/>
  
  <!-- Pelican Beak -->
  <path d="M60 70 L40 80 L60 90 Z" fill="#ff9966"/>
  <path d="M60 75 L20 75" stroke="#ff9966" stroke-width="3"/>
  
  <!-- Pelican Eye -->
  <circle cx="100" cy="60" r="5" fill="#333"/>
  
  <!-- Pelican Wings (as if holding handlebars) -->
  <path d="M100 130 L80 110 L90 90 L110 110 Z" fill="#f9d5a7"/>
  <path d="M140 130 L160 110 L150 90 L130 110 Z" fill="#f9d5a7"/>
  
  <!-- Pelican Feet on Pedals -->
  <path d="M190 130 L180 140 L185 145 Z" fill="#ff9966"/>
  <path d="M210 170 L220 160 L215 155 Z" fill="#ff9966"/>
  
  <!-- Seat -->
  <path d="M170 100 L180 90 L190 100" stroke="#333" stroke-width="3" fill="none"/>
  
  <!-- Handlebars -->
  <path d="M170 100 L160 80 L140 90" stroke="#333" stroke-width="3" fill="none"/>
</svg>`
}; 