import { ModelResponse } from "@/types/models";

export const worldUmapUsvggemini_2_5_pro_exp: ModelResponse = {
  id: "gemini-2-5-pro-exp-world-map-svg",
  modelId: "gemini-2-5-pro-exp",
  prompt: "",
  responseDate: "2025-03-25",
  type: "svg",
  title: "world-map-svg",
  description: "Gemini 2.5 Pro Experimental's response",
  content: `<svg width="800" height="400" viewBox="0 0 1000 500" xmlns="http://www.w3.org/2000/svg" style="background-color: #e0f2f7;">

  <title>Simplified World Map</title>
  <desc>A simplified SVG world map showing continents in different colors and labels for major countries.</desc>

  <!-- Continents using simplified paths -->

  <!-- North America -->
  <path d="M 100,50 L 150,40 L 250,30 L 350,60 L 380,150 L 300,180 L 270,220 L 200,180 L 120,150 Z" fill="#8FBC8F" stroke="#666" stroke-width="0.5"/>

  <!-- South America -->
  <path d="M 280,230 L 310,250 L 350,380 L 300,420 L 250,350 Z" fill="#F0E68C" stroke="#666" stroke-width="0.5"/>

  <!-- Africa -->
  <path d="M 420,180 L 480,170 L 530,250 L 500,380 L 450,380 L 430,300 Z" fill="#FFA07A" stroke="#666" stroke-width="0.5"/>

  <!-- Europe -->
  <path d="M 450,160 L 420,100 L 480,80 L 550,90 L 540,150 Z" fill="#B0C4DE" stroke="#666" stroke-width="0.5"/>

  <!-- Asia -->
  <path d="M 550,90 L 650,50 L 850,80 L 880,150 L 800,250 L 650,280 L 580,180 L 540,150 Z" fill="#DDA0DD" stroke="#666" stroke-width="0.5"/>

  <!-- Australia -->
  <path d="M 780,320 L 870,310 L 890,370 L 820,390 Z" fill="#FA8072" stroke="#666" stroke-width="0.5"/>

  <!-- Antarctica (Optional, very simplified) -->
  <path d="M 200,480 L 800,480 L 750,495 L 250,495 Z" fill="#F5F5F5" stroke="#666" stroke-width="0.5"/>

  <!-- Country Labels -->
  <text x="200" y="120" font-family="Arial, sans-serif" font-size="16" fill="#333" text-anchor="middle">USA</text>
  <text x="300" y="300" font-family="Arial, sans-serif" font-size="16" fill="#333" text-anchor="middle">Brazil</text>
  <text x="650" y="100" font-family="Arial, sans-serif" font-size="16" fill="#333" text-anchor="middle">Russia</text>
  <text x="750" y="180" font-family="Arial, sans-serif" font-size="16" fill="#333" text-anchor="middle">China</text>
  <text x="830" y="350" font-family="Arial, sans-serif" font-size="16" fill="#333" text-anchor="middle">Australia</text>

</svg>`
};
