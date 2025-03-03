import { ModelResponse } from "@/types/models";

export const worldMapSvggrok_3: ModelResponse = {
  id: "grok-3-world-map-svg",
  modelId: "grok-3",
  prompt: "Create a simplified world map as an SVG showing major continents with different colors. Add labels for at least 5 major countries. DO NOT CREATE AN IMAGE",
  responseDate: "2025-02-28",
  type: "svg",
  title: "World Map SVG",
  description: "Grok 3's playful simplified world map with vibrant continent colors and country labels",
  content: `<svg width="800" height="400" xmlns="http://www.w3.org/2000/svg">
  <!-- North America (Green) -->
  <path d="M100,50 L200,50 L250,150 L200,250 L100,200 Z" fill="#00FF00" />
  <!-- South America (Yellow) -->
  <path d="M150,250 L200,300 L180,350 L130,330 L120,280 Z" fill="#FFFF00" />
  <!-- Africa (Orange) -->
  <path d="M300,200 L350,250 L340,300 L290,300 L270,250 Z" fill="#FFA500" />
  <!-- Europe (Blue) -->
  <path d="M350,100 L400,80 L420,120 L400,150 L360,140 Z" fill="#0000FF" />
  <!-- Asia (Red) -->
  <path d="M420,120 L500,100 L550,150 L520,200 L450,200 Z" fill="#FF0000" />
  <!-- Australia (Purple) -->
  <path d="M550,250 L600,260 L590,300 L540,290 Z" fill="#800080" />

  <!-- Labels for 5 major countries -->
  <text x="150" y="150" font-size="16" fill="black">United States</text>
  <text x="150" y="300" font-size="16" fill="black">Brazil</text>
  <text x="450" y="150" font-size="16" fill="black">Russia</text>
  <text x="500" y="180" font-size="16" fill="black">China</text>
  <text x="560" y="280" font-size="16" fill="black">Australia</text>
</svg>`
}; 