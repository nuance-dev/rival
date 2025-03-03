import { ModelResponse } from "@/types/models";

export const worldMapSvgo1: ModelResponse = {
  id: "o1-world-map-svg",
  modelId: "o1",
  prompt: "Create a simplified world map as an SVG showing major continents with different colors. Add labels for at least 5 major countries.",
  responseDate: "2025-02-28",
  type: "svg",
  title: "World Map SVG",
  challengeId: "world-map-svg",
  description: "o1's response to the challenge of creating a stylized SVG world map with modern design principles",
  content: `<svg width="800" height="400" viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg">

  <!-- North America -->
  <path d="M100,100 L180,80 L200,120 L220,150 L200,170 L180,160 L140,130 Z"
        fill="#FFDDAA" />

  <!-- South America -->
  <path d="M200,170 L220,180 L210,220 L230,260 L210,300 L190,280 L180,240 L190,210 Z"
        fill="#AAEEAA" />

  <!-- Europe + Asia -->
  <path d="M300,70 L340,60 L380,80 L420,100 L440,140 L420,180 L380,200 L340,190 L320,160 Z"
        fill="#AADDFF" />

  <!-- Africa -->
  <path d="M320,180 L340,220 L330,260 L310,280 L290,250 L300,220 Z"
        fill="#FFCCBB" />

  <!-- Australia -->
  <path d="M550,250 L570,260 L590,280 L580,300 L560,290 L540,270 Z"
        fill="#FFC0CB" />

  <!-- Labels for major countries -->
  <text x="130" y="70" fill="#000">Canada</text>
  <text x="140" y="120" fill="#000">USA</text>
  <text x="200" y="300" fill="#000">Brazil</text>
  <text x="390" y="70"  fill="#000">Russia</text>
  <text x="410" y="150" fill="#000">China</text>
  <text x="410" y="180" fill="#000">India</text>

</svg>
`
}; 