import { ModelResponse } from "@/types/models";

export const worldMapSvgGpt4oMini: ModelResponse = {
  id: "gpt-4o-mini-world-map-svg", // model-id-slug + challenge-id
  modelId: "gpt-4o-mini", // model-id-slug
  prompt: "Create a simplified world map as an SVG showing major continents with different colors. Add labels for at least 5 major countries.", // The prompt extracted in Step 2
  responseDate: "2025-04-11", // user_provided_date
  type: "svg", // Determined from content
  title: "World Map SVG", // From the gpt-4o reference file
  description: "GPT-4o mini's simplified world map creation with stylized continents and country labels", // Write a brief description
  content: `<svg width="800" height="400" viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg">
  <!-- Ocean -->
  <rect width="800" height="400" fill="#A8D8E8" />
  
  <!-- Continents -->
  <!-- Africa -->
  <path d="M150,250 C130,230 120,220 110,200 C100,180 90,160 120,150 C150,140 180,120 200,140 C220,160 220,180 210,200 C200,220 180,230 150,250 Z" fill="#FFD700" />
  <!-- Asia -->
  <path d="M200,60 C250,50 300,80 350,100 C400,120 380,160 360,180 C340,200 320,220 300,210 C270,200 250,180 230,170 C210,160 220,130 200,60 Z" fill="#FF6347" />
  <!-- North America -->
  <path d="M50,150 C30,130 10,140 0,160 C-10,180 0,200 20,210 C40,220 60,200 70,180 C80,160 60,150 50,150 Z" fill="#4682B4" />
  <!-- South America -->
  <path d="M90,300 C70,280 60,260 50,240 C70,230 90,220 100,210 C110,200 130,210 140,220 C150,230 120,270 90,300 Z" fill="#3CB371" />
  <!-- Europe -->
  <path d="M350,70 C370,60 400,60 420,80 C440,100 440,120 400,120 C360,120 350,80 350,70 Z" fill="#8A2BE2" />
  <!-- Australia -->
  <path d="M600,300 C580,290 570,280 560,260 C580,250 600,240 620,250 C640,260 640,280 620,290 C600,300 620,300 600,300 Z" fill="#FF8C00" />

  <!-- Country Labels -->
  <text x="160" y="230" font-family="Arial" font-size="14" fill="black">Egypt</text>
  <text x="280" y="100" font-family="Arial" font-size="14" fill="black">China</text>
  <text x="30" y="170" font-family="Arial" font-size="14" fill="black">USA</text>
  <text x="110" y="280" font-family="Arial" font-size="14" fill="black">Brazil</text>
  <text x="370" y="90" font-family="Arial" font-size="14" fill="black">Germany</text>

</svg>`
}; 