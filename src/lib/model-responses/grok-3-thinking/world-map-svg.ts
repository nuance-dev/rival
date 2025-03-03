import { ModelResponse } from "@/types/models";

export const worldMapSvggrok_3_thinking: ModelResponse = {
  id: "grok-3-thinking-world-map-svg",
  modelId: "grok-3-thinking",
  prompt: "Create a simplified world map as an SVG showing major continents with different colors. Add labels for at least 5 major countries.",
  responseDate: "2025-03-03",
  type: "svg",
  title: "World Map SVG Art",
  funFact: "Had to explicity ask for SVG code",
  description: "Grok 3 Thinking's response to the challenge of creating a stylized SVG world map with modern design principles",
  content: `<svg width="800" height="400" xmlns="http://www.w3.org/2000/svg">
  <rect width="800" height="400" fill="#ADD8E6" />
  <!-- North America -->
  <path d="M100,50 L200,50 L250,100 L200,150 L150,150 L100,100 Z" fill="#FF0000" />
  <!-- South America -->
  <path d="M150,160 L200,160 L220,200 L200,250 L150,250 Z" fill="#00FF00" />
  <!-- Europe -->
  <path d="M300,50 L350,50 L370,70 L350,90 L300,90 Z" fill="#FFFF00" />
  <!-- Africa -->
  <path d="M300,100 L350,100 L370,130 L350,160 L300,160 L280,130 Z" fill="#FFA500" />
  <!-- Asia -->
  <path d="M400,50 L600,50 L650,100 L600,150 L550,150 L500,100 L400,50 Z" fill="#800080" />
  <!-- Australia -->
  <path d="M600,200 L650,200 L670,220 L650,240 L600,240 Z" fill="#0000FF" />
  <!-- Antarctica -->
  <path d="M100,350 L700,350 L700,380 L100,380 Z" fill="#00FFFF" />
  <!-- Labels -->
  <text x="150" y="100" fill="black" font-size="12">United States</text>
  <text x="180" y="200" fill="black" font-size="12">Brazil</text>
  <text x="320" y="70" fill="black" font-size="12">Germany</text>
  <text x="320" y="130" fill="black" font-size="12">Egypt</text>
  <text x="550" y="100" fill="black" font-size="12">China</text>
</svg>`
}; 