import { ModelResponse } from "@/types/models";

export const svgLayoutgrok_3_mini_beta: ModelResponse = {
  id: "grok-3-mini-beta-svg-layout",
  modelId: "grok-3-mini-beta",
  prompt: "Generate an SVG of a pelican riding a bicycle.",
  responseDate: "2025-04-11",
  type: "svg",
  title: "SVG Layout Challenge",
  description: "Grok 3 Mini Beta's response to the challenge of generating vector graphics",
  content: `<svg width="400" height="400" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
  <!-- Bicycle wheels -->
  <circle cx="100" cy="300" r="50" fill="black" />
  <circle cx="300" cy="300" r="50" fill="black" />

  <!-- Bicycle frame -->
  <line x1="100" y1="300" x2="300" y2="300" stroke="black" stroke-width="5" /> <!-- Bottom bar -->
  <line x1="100" y1="300" x2="100" y2="100" stroke="black" stroke-width="5" /> <!-- Left post -->
  <line x1="100" y1="100" x2="300" y2="300" stroke="black" stroke-width="5" /> <!-- Diagonal frame -->
  <line x1="300" y1="300" x2="300" y2="200" stroke="black" stroke-width="5" /> <!-- Right post for seat -->

  <!-- Handlebars -->
  <line x1="100" y1="100" x2="50" y2="50" stroke="black" stroke-width="5" />
  <line x1="50" y1="50" x2="150" y2="50" stroke="black" stroke-width="5" />

  <!-- Seat -->
  <rect x="90" y="180" width="20" height="10" fill="black" />

  <!-- Pedals (simplified as lines) -->
  <line x1="200" y1="300" x2="200" y2="350" stroke="black" stroke-width="5" />

  <!-- Pelican body -->
  <ellipse cx="200" cy="150" rx="50" ry="30" fill="gray" />

  <!-- Pelican head -->
  <circle cx="200" cy="120" r="20" fill="gray" />

  <!-- Pelican beak -->
  <path d="M220 120 L240 110 L240 130 Z" fill="orange" />

  <!-- Pelican wings (simple curved paths) -->
  <path d="M150 150 Q100 100 150 50" stroke="gray" stroke-width="5" fill="none" /> <!-- Left wing -->
  <path d="M250 150 Q300 100 250 50" stroke="gray" stroke-width="5" fill="none" /> <!-- Right wing -->

  <!-- Pelican legs (positioned as if pedaling) -->
  <line x1="190" y1="180" x2="190" y2="250" stroke="black" stroke-width="3" /> <!-- Left leg -->
  <line x1="210" y1="180" x2="210" y2="250" stroke="black" stroke-width="3" /> <!-- Right leg -->

  <!-- Pelican feet on pedals -->
  <circle cx="190" cy="250" r="5" fill="black" /> <!-- Left foot -->
  <circle cx="210" cy="250" r="5" fill="black" /> <!-- Right foot -->
</svg>
`
}; 