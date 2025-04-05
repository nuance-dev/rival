import { ModelResponse } from "@/types/models";

export const worldMapSvgllama_4_scout: ModelResponse = {
  id: "llama-4-scout-world-map-svg",
  modelId: "llama-4-scout",
  prompt: "Create a simplified world map as an SVG showing major continents with different colors. Add labels for at least 5 major countries.",
  responseDate: "2025-04-05",
  type: "svg",
  funFact: "Llama 4 Scout provided a d3 alternative to the SVG",
  title: "World Map SVG",
  description: "Llama 4 Scout's simplified world map creation with stylized continents and country labels",
  content: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 500">
  <!-- Continents -->
  <rect x="50" y="50" width="200" height="200" fill="#009900" rx="10" />
  <rect x="300" y="50" width="200" height="200" fill="#ffcc00" rx="10" />
  <rect x="550" y="50" width="150" height="200" fill="#0000ff" rx="10" />
  <rect x="50" y="300" width="300" height="150" fill="#ff6600" rx="10" />
  <rect x="400" y="300" width= "200" height="150" fill="#008000" rx="10" />

  <!-- Country Labels -->
  <text x="120" y="120" font-size="20" font-family="Arial">Africa</text>
  <text x="120" y="380" font-size="20" font-family="Arial">South America</text>
  <text x="370" y="120" font-size="20" font-family="Arial">Europe</text>
  <text x="620" y="120" font-size="20" font-family="Arial">North America</text>
  <text x="600" y="380" font-size="20" font-family="Arial">Australia</text>

  <!-- Specific Country Labels -->
  <text x="80" y="170" font-size="14" font-family="Arial">Egypt</text>
  <text x="350" y="170" font-size="14" font-family="Arial">France</text>
  <text x="600" y="170" font-size="14" font-family="Arial">USA</text>
  <text x="620" y="420" font-size="14" font-family="Arial">Sydney</text>
  <text x="180" y="420" font-size="14" font-family="Arial">Brazil</text>
</svg>
`
}; 