import { ModelResponse } from "@/types/models";

export const worldUmapUsvgchatgpt_4o_03_25: ModelResponse = {
  id: "chatgpt-4o-03-25-world-map-svg",
  modelId: "chatgpt-4o-03-25",
  prompt: "Create a simplified world map as an SVG showing major continents with different colors. Add labels for at least 5 major countries.",
  responseDate: "2025-03-30",
  type: "svg",
  title: "world-map-svg",
  description: "ChatGPT-4o March 2025's response",
  content: `<svg viewBox="0 0 1000 500" xmlns="http://www.w3.org/2000/svg">
  <!-- Continents -->
  <g id="continents">
    <!-- North America -->
    <path d="M100,100 L200,80 L250,130 L220,180 L150,170 Z" fill="#FFA07A" />
    <!-- South America -->
    <path d="M200,180 L230,250 L220,320 L180,310 L160,250 Z" fill="#FFD700" />
    <!-- Europe -->
    <path d="M450,80 L490,90 L500,120 L470,130 L440,110 Z" fill="#90EE90" />
    <!-- Africa -->
    <path d="M480,130 L510,180 L500,260 L460,250 L450,180 Z" fill="#20B2AA" />
    <!-- Asia -->
    <path d="M520,100 L600,110 L630,150 L620,200 L560,190 L520,160 Z" fill="#87CEFA" />
    <!-- Australia -->
    <path d="M700,300 L740,320 L720,360 L680,340 Z" fill="#DDA0DD" />
  </g>

  <!-- Country Labels -->
  <g font-family="Arial" font-size="14" fill="black">
    <text x="160" y="90">USA</text>
    <text x="190" y="240">Brazil</text>
    <text x="460" y="90">Germany</text>
    <text x="470" y="200">Nigeria</text>
    <text x="560" y="150">China</text>
  </g>
</svg>
`
}; 