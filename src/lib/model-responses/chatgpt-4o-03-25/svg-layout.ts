import { ModelResponse } from "@/types/models";

export const svgUlayoutchatgpt_4o_03_25: ModelResponse = {
  id: "chatgpt-4o-03-25-svg-layout",
  modelId: "chatgpt-4o-03-25",
  prompt: "Generate an SVG of a pelican riding a bicycle.",
  responseDate: "2025-03-30",
  type: "svg",
  title: "svg-layout",
  description: "ChatGPT-4o March 2025's response",
  content: `<svg width="300" height="300" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
  <!-- Wheels -->
  <circle cx="80" cy="220" r="30" stroke="black" stroke-width="4" fill="gray" />
  <circle cx="220" cy="220" r="30" stroke="black" stroke-width="4" fill="gray" />

  <!-- Frame -->
  <line x1="80" y1="220" x2="150" y2="160" stroke="black" stroke-width="4"/>
  <line x1="150" y1="160" x2="220" y2="220" stroke="black" stroke-width="4"/>
  <line x1="150" y1="160" x2="150" y2="220" stroke="black" stroke-width="4"/>
  <line x1="110" y1="220" x2="190" y2="220" stroke="black" stroke-width="4"/>

  <!-- Handlebars -->
  <line x1="150" y1="160" x2="140" y2="130" stroke="black" stroke-width="3"/>
  <line x1="140" y1="130" x2="130" y2="130" stroke="black" stroke-width="3"/>
  <line x1="140" y1="130" x2="140" y2="120" stroke="black" stroke-width="3"/>

  <!-- Pelican Body -->
  <ellipse cx="130" cy="100" rx="20" ry="30" fill="white" stroke="black" stroke-width="2"/>
  <!-- Pelican Beak -->
  <polygon points="110,100 80,90 110,95" fill="orange" stroke="black" stroke-width="1"/>
  <!-- Eye -->
  <circle cx="123" cy="90" r="3" fill="black"/>

  <!-- Wings -->
  <path d="M120 110 Q110 130 140 130 Q130 120 120 110" fill="white" stroke="black" stroke-width="1"/>

  <!-- Legs -->
  <line x1="130" y1="130" x2="110" y2="200" stroke="orange" stroke-width="4"/>
  <line x1="130" y1="130" x2="150" y2="200" stroke="orange" stroke-width="4"/>
</svg>
`
}; 