import { ModelResponse } from "@/types/models";

export const worldMapSvgo3_mini: ModelResponse = {
  id: "o3-mini-world-map-svg",
  modelId: "o3-mini",
  prompt: "Create a simplified world map as an SVG showing major continents with different colors. Add labels for at least 5 major countries.",
  responseDate: "2025-02-28",
  type: "svg",
  title: "World Map SVG Art",
  description: "o3-mini's response to the challenge of creating a stylized SVG world map with modern design principles",
  funFact: "I love o3-mini-high, but hard pass on this SVG",
  content: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450">
  <!-- Background -->
  <rect width="800" height="450" fill="#a0d8f1" />
  
  <!-- Continents -->
  <!-- North America -->
  <path d="M100,120 Q150,80 200,120 Q180,160 150,180 Q120,160 100,120" fill="#8dd3c7" />
  
  <!-- South America -->
  <path d="M180,180 Q200,220 220,240 Q210,280 180,300 Q160,280 150,240 Q160,220 180,180" fill="#ffffb3" />
  
  <!-- Africa -->
  <path d="M300,220 Q340,200 380,220 Q370,260 340,280 Q310,260 300,220" fill="#bebada" />
  
  <!-- Europe -->
  <path d="M320,160 Q360,140 400,160 Q390,190 360,200 Q330,190 320,160" fill="#fb8072" />
  
  <!-- Asia -->
  <path d="M400,160 Q450,140 500,160 Q510,220 480,240 Q450,220 400,240 Q390,200 400,160" fill="#80b1d3" />
  
  <!-- Australia -->
  <path d="M550,280 Q580,260 610,280 Q600,310 570,320 Q550,300 550,280" fill="#fdb462" />
  
  <!-- Country Labels -->
  <text x="140" y="150" font-family="Arial" font-size="14" fill="black">USA</text>
  <text x="210" y="260" font-family="Arial" font-size="14" fill="black">Brazil</text>
  <text x="320" y="240" font-family="Arial" font-size="14" fill="black">Egypt</text>
  <text x="360" y="180" font-family="Arial" font-size="14" fill="black">France</text>
  <text x="470" y="200" font-family="Arial" font-size="14" fill="black">China</text>
</svg>
`
}; 