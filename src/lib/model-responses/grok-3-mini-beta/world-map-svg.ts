import { ModelResponse } from "@/types/models";

export const worldMapSvggrok_3_mini_beta: ModelResponse = {
  id: "grok-3-mini-beta-world-map-svg",
  modelId: "grok-3-mini-beta",
  prompt: "Create a simplified world map as an SVG showing major continents with different colors. Add labels for at least 5 major countries.",
  responseDate: "2025-04-11",
  type: "svg",
  title: "World Map SVG",
  description: "Grok 3 Mini Beta's simplified world map creation with stylized continents and country labels",
  content: `<svg width="800" height="400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 400">
    <!-- Background (optional, for better visibility) -->
    <rect width="100%" height="100%" fill="#f0f0f0" />

    <!-- North America (Blue) -->
    <path d="M50 50 L200 50 L200 150 L50 150 Z" fill="#ADD8E6" stroke="black" stroke-width="2" />
    <text x="125" y="100" font-size="16" font-family="Arial" fill="black" text-anchor="middle">North America</text>
    <text x="125" y="125" font-size="14" font-family="Arial" fill="black" text-anchor="middle">USA</text>
    <text x="125" y="140" font-size="14" font-family="Arial" fill="black" text-anchor="middle">Canada</text>

    <!-- South America (Green) -->
    <path d="M50 150 L150 150 L150 250 L50 250 Z" fill="#90EE90" stroke="black" stroke-width="2" />
    <text x="100" y="200" font-size="16" font-family="Arial" fill="black" text-anchor="middle">South America</text>
    <text x="100" y="225" font-size="14" font-family="Arial" fill="black" text-anchor="middle">Brazil</text>

    <!-- Europe (Red) -->
    <path d="M200 50 L300 50 L300 150 L200 150 Z" fill="#FF6347" stroke="black" stroke-width="2" />
    <text x="250" y="100" font-size="16" font-family="Arial" fill="black" text-anchor="middle">Europe</text>

    <!-- Asia (Yellow) -->
    <path d="M300 50 L500 50 L500 150 L300 150 Z" fill="#FFFF00" stroke="black" stroke-width="2" />
    <text x="400" y="100" font-size="16" font-family="Arial" fill="black" text-anchor="middle">Asia</text>
    <text x="400" y="125" font-size="14" font-family="Arial" fill="black" text-anchor="middle">China</text>
    <text x="400" y="140" font-size="14" font-family="Arial" fill="black" text-anchor="middle">India</text>

    <!-- Africa (Orange) -->
    <path d="M200 150 L300 150 L300 250 L200 250 Z" fill="#FFA500" stroke="black" stroke-width="2" />
    <text x="250" y="200" font-size="16" font-family="Arial" fill="black" text-anchor="middle">Africa</text>

    <!-- Australia (Purple) -->
    <path d="M400 250 L500 250 L500 350 L400 350 Z" fill="#9370DB" stroke="black" stroke-width="2" />
    <text x="450" y="300" font-size="16" font-family="Arial" fill="black" text-anchor="middle">Australia</text>
</svg>
`
}; 