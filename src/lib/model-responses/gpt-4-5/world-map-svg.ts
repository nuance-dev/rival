import { ModelResponse } from "@/types/models";

export const worldMapSvggpt_4_5: ModelResponse = {
  id: "gpt-4-5-world-map-svg",
  modelId: "gpt-4-5",
  prompt: "Create a simplified world map as an SVG showing major continents with different colors. Add labels for at least 5 major countries.",
  responseDate: "2025-03-01",
  type: "svg",
  title: "World Map SVG",
  description: "GPT-4.5's simplified world map creation with stylized continents and country labels",
  content: `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="400" viewBox="0 0 800 400">
  <!-- Background -->
  <rect width="800" height="400" fill="#aaddff"/>

  <!-- North America -->
  <path fill="#ffcc66" d="M100,100 L200,80 L250,120 L220,180 L150,160 Z"/>
  
  <!-- South America -->
  <path fill="#66cc66" d="M220,200 L260,260 L240,320 L200,300 L190,240 Z"/>
  
  <!-- Europe -->
  <path fill="#ff6666" d="M400,80 L440,70 L460,100 L430,120 L390,110 Z"/>
  
  <!-- Africa -->
  <path fill="#ff9966" d="M400,150 L450,160 L460,240 L410,260 L380,200 Z"/>
  
  <!-- Asia -->
  <path fill="#66cccc" d="M480,80 L600,60 L650,120 L620,180 L500,160 Z"/>
  
  <!-- Australia -->
  <path fill="#cc66cc" d="M650,250 L700,260 L710,300 L660,310 Z"/>

  <!-- Country Labels -->
  <text x="160" y="130" font-size="14" fill="#000">USA</text>
  <text x="210" y="270" font-size="14" fill="#000">Brazil</text>
  <text x="550" y="130" font-size="14" fill="#000">China</text>
  <text x="520" y="170" font-size="14" fill="#000">India</text>
  <text x="660" y="290" font-size="14" fill="#000">Australia</text>
</svg>`
}; 