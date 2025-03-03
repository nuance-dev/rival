import { ModelResponse } from "@/types/models";

export const worldMapSvggpt_4o: ModelResponse = {
  id: "gpt-4o-world-map-svg",
  modelId: "gpt-4o",
  prompt: "Create a simplified world map as an SVG showing major continents with different colors. Add labels for at least 5 major countries.",
  responseDate: "2025-02-28",
  type: "svg",
  title: "World Map SVG",
  description: "GPT-4o's simplified world map creation with stylized continents and country labels",
  content: `<svg width="800" height="400" viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg">
    <!-- Continents -->
    <path d="M100 150 L200 100 L250 130 L230 180 L180 190 Z" fill="#ffcc00"/> <!-- North America -->
    <path d="M220 200 L250 180 L270 220 L260 250 L230 240 Z" fill="#ff6600"/> <!-- South America -->
    <path d="M320 100 L400 80 L450 110 L420 160 L350 150 Z" fill="#66cc66"/> <!-- Europe -->
    <path d="M360 180 L450 140 L520 170 L500 220 L400 210 Z" fill="#0099ff"/> <!-- Asia -->
    <path d="M350 250 L400 240 L450 260 L420 300 L370 290 Z" fill="#ff3300"/> <!-- Africa -->
    <path d="M600 300 L650 280 L700 320 L680 350 L620 340 Z" fill="#cc33ff"/> <!-- Australia -->

    <!-- Country Labels -->
    <text x="180" y="90" font-size="14" fill="black">USA</text>
    <text x="250" y="170" font-size="14" fill="black">Brazil</text>
    <text x="370" y="95" font-size="14" fill="black">UK</text>
    <text x="480" y="130" font-size="14" fill="black">China</text>
    <text x="420" y="280" font-size="14" fill="black">South Africa</text>
</svg>
`
}; 