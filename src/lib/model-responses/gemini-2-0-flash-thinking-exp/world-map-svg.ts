import { ModelResponse } from "@/types/models";

export const worldMapSvggemini_2_0_flash_thinking_exp: ModelResponse = {
  id: "gemini-2-0-flash-thinking-exp-world-map-svg",
  modelId: "gemini-2-0-flash-thinking-exp",
  prompt: "Create a simplified world map as an SVG. Show major continents in different colors. Label at least 5 major countries.",
  responseDate: "2025-02-27",
  type: "svg",
  title: "World Map Visualization",
  description: "A dynamic world map with interactive elements and quick-thinking annotations",
  content: `<svg width="600" height="400" viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg">
  <!-- Background color (optional, can be removed for transparent background) -->
  <rect width="100%" height="100%" fill="#f0f0f0" />

  <!-- Continents (Simplified shapes and positions) -->

  <!-- North America -->
  <polygon points="50,50 200,50 250,150 100,150" fill="#a8e6cf" />
  <text x="150" y="120" text-anchor="middle" font-size="14">USA</text>

  <!-- South America -->
  <polygon points="100,170 150,350 50,350 0,200" fill="#dcedc1" />
  <text x="75" y="270" text-anchor="middle" font-size="14">Brazil</text>

  <!-- Africa -->
  <rect x="250" y="200" width="100" height="150" fill="#ffaaa5" />
  <text x="300" y="275" text-anchor="middle" font-size="14">Africa</text>

  <!-- Europe -->
  <polygon points="200,50 300,50 350,100 250,100" fill="#ff8b94" />
  <text x="275" y="75" text-anchor="middle" font-size="14">Europe</text>

  <!-- Asia -->
  <polygon points="350,50 550,50 590,200 400,200" fill="#ffc69d" />
  <text x="450" y="120" text-anchor="middle" font-size="14">China</text>
  <text x="500" y="180" text-anchor="middle" font-size="14">India</text>
  <text x="400" y="80" text-anchor="middle" font-size="14">Russia</text>

  <!-- Australia -->
  <rect x="500" y="250" width="80" height="80" fill="#bde0fe" />
  <text x="540" y="290" text-anchor="middle" font-size="14">Australia</text>

  <!-- Antarctica -->
  <rect x="0" y="350" width="600" height="50" fill="#e0e0e0" />
  <text x="300" y="380" text-anchor="middle" font-size="14">Antarctica</text>

</svg>`
}; 