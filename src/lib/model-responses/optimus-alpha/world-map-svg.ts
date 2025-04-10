import { ModelResponse } from "@/types/models";

export const worldMapSvgResponse: ModelResponse = {
  id: "optimus-alpha-world-map-svg",
  modelId: "optimus-alpha",
  prompt: "Create a simplified world map as an SVG showing major continents with different colors. Add labels for at least 5 major countries.",
  responseDate: "2025-04-10",
  title: "World Map SVG",
  description: "Generates a simplified world map SVG with labeled continents.",
  type: "svg",
  content: `<svg width="800" height="400" viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif">
  <!-- North America -->
  <ellipse cx="180" cy="130" rx="100" ry="65" fill="#61b6e6" />
  <!-- South America -->
  <ellipse cx="220" cy="270" rx="55" ry="90" fill="#70c36e" />
  <!-- Europe -->
  <ellipse cx="480" cy="85" rx="52" ry="40" fill="#f5b25e" />
  <!-- Africa -->
  <ellipse cx="520" cy="210" rx="73" ry="110" fill="#ec7c66" />
  <!-- Asia -->
  <ellipse cx="650" cy="120" rx="110" ry="100" fill="#a085e2" />
  <!-- Australia -->
  <ellipse cx="700" cy="320" rx="45" ry="30" fill="#d9cf6e" />

  <!-- Country labels -->
  <text x="180" y="120" font-size="20" font-weight="bold" fill="#003366" text-anchor="middle">USA</text>
  <text x="230" y="280" font-size="20" font-weight="bold" fill="#225522" text-anchor="middle">Brazil</text>
  <text x="500" y="80" font-size="18" font-weight="bold" fill="#ab6610" text-anchor="middle">Russia</text>
  <text x="640" y="140" font-size="20" font-weight="bold" fill="#4033a2" text-anchor="middle">China</text>
  <text x="570" y="230" font-size="20" font-weight="bold" fill="#861e0c" text-anchor="middle">India</text>

  <!-- Continent labels (optional) -->
  <text x="130" y="70" font-size="16" fill="#003366">North America</text>
  <text x="170" y="350" font-size="16" fill="#237a36">South America</text>
  <text x="475" y="50" font-size="16" fill="#ab6610">Europe</text>
  <text x="510" y="370" font-size="16" fill="#7d3520">Africa</text>
  <text x="720" y="60" font-size="16" fill="#4033a2">Asia</text>
  <text x="730" y="380" font-size="16" fill="#998600">Australia</text>
</svg>
`
}; 