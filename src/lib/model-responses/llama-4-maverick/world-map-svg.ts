import { ModelResponse } from "@/types/models";

export const worldMapSvgllama_4_maverick: ModelResponse = {
  id: "llama-4-maverick-world-map-svg",
  modelId: "llama-4-maverick",
  prompt: "Create a simplified world map as an SVG showing major continents with different colors. Add labels for at least 5 major countries.",
  responseDate: "2025-04-05",
  type: "svg",
  title: "World Map SVG",
  description: "Llama 4 Maverick's simplified world map creation with stylized continents and country labels",
  content: `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 400">
  <!-- Continents -->
  <path id="Africa" d="M 320,150 L 340,170 L 360,180 L 380,160 L 350,130 Z M 300,200 L 320,220 L 380,240 L 360,260 L 320,240 Z" fill="#C9E4CA" stroke="black" stroke-width="1" />
  <path id="Asia" d="M 550,120 L 600,150 L 650,180 L 600,220 L 550,200 Z M 500,180 L 550,200 L 600,220 L 550,250 L 500,230 Z" fill="#F7D2C4" stroke="black" stroke-width="1" />
  <path id="Europe" d="M 250,80 L 300,100 L 350,120 L 300,150 L 250,130 Z" fill="#87CEEB" stroke="black" stroke-width="1" />
  <path id="North-America" d="M 100,50 L 200,80 L 250,100 L 200,150 L 150,120 Z" fill="#C5CAE9" stroke="black" stroke-width="1" />
  <path id="South-America" d="M 150,250 L 200,280 L 250,300 L 200,330 L 150,300 Z" fill="#FFC5C5" stroke="black" stroke-width="1" />
  <path id="Australia" d="M 650,280 L 680,300 L 700,320 L 680,340 L 650,320 Z" fill="#C9C3E6" stroke="black" stroke-width="1" />

  <!-- Country Labels -->
  <text x="270" y="110" font-size="12" fill="black">USA</text>
  <text x="320" y="230" font-size="12" fill="black">Egypt</text>
  <text x="580" y="190" font-size="12" fill="black">China</text>
  <text x="280" y="90" font-size="12" fill="black">France</text>
  <text x="680" y="310" font-size="12" fill="black">Australia</text>

  <!-- Optional: Add title -->
  <text x="10" y="20" font-size="16" fill="black">Simplified World Map</text>
</svg>
`
}; 