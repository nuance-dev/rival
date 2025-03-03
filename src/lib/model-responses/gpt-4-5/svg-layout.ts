import { ModelResponse } from "@/types/models";

export const svgLayoutgpt_4_5: ModelResponse = {
  id: "gpt-4-5-svg-layout",
  modelId: "gpt-4-5",
  prompt: "Generate an SVG of a pelican riding a bicycle.",
  responseDate: "2025-03-01",
  type: "svg",
  title: "SVG Layout Visualization",
  description: "GPT-4.5's response to creating a responsive web layout visualization using only SVG",
  content: `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="300" viewBox="0 0 300 300">
  <!-- Bicycle wheels -->
  <circle cx="80" cy="220" r="40" stroke="#333" stroke-width="4" fill="none"/>
  <circle cx="220" cy="220" r="40" stroke="#333" stroke-width="4" fill="none"/>

  <!-- Bicycle frame -->
  <line x1="80" y1="220" x2="140" y2="160" stroke="#333" stroke-width="4"/>
  <line x1="140" y1="160" x2="220" y2="220" stroke="#333" stroke-width="4"/>
  <line x1="140" y1="160" x2="140" y2="120" stroke="#333" stroke-width="4"/>
  <line x1="140" y1="120" x2="180" y2="120" stroke="#333" stroke-width="4"/>
  <line x1="180" y1="120" x2="220" y2="220" stroke="#333" stroke-width="4"/>
  <line x1="80" y1="220" x2="180" y2="120" stroke="#333" stroke-width="4"/>

  <!-- Handlebar -->
  <line x1="180" y1="120" x2="200" y2="100" stroke="#333" stroke-width="4"/>
  <line x1="200" y1="100" x2="210" y2="110" stroke="#333" stroke-width="4"/>

  <!-- Seat -->
  <line x1="140" y1="120" x2="120" y2="110" stroke="#333" stroke-width="4"/>

  <!-- Pelican body -->
  <ellipse cx="120" cy="90" rx="30" ry="20" fill="#f2c94c" stroke="#333" stroke-width="2"/>

  <!-- Pelican neck -->
  <path d="M130,80 Q150,40 170,60" fill="none" stroke="#333" stroke-width="2"/>

  <!-- Pelican head -->
  <circle cx="170" cy="60" r="12" fill="#f2c94c" stroke="#333" stroke-width="2"/>

  <!-- Pelican beak -->
  <polygon points="182,60 210,65 182,70" fill="#f2994a" stroke="#333" stroke-width="2"/>

  <!-- Pelican eye -->
  <circle cx="172" cy="56" r="2" fill="#333"/>

  <!-- Pelican wing -->
  <path d="M110,85 Q90,100 110,105" fill="#f2c94c" stroke="#333" stroke-width="2"/>
</svg>`
}; 