import { ModelResponse } from "@/types/models";

export const worldMapSvgquasar_alpha: ModelResponse = {
  id: "quasar-alpha-world-map-svg",
  modelId: "quasar-alpha",
  prompt: "Create a simplified world map as an SVG showing major continents with different colors. Add labels for at least 5 major countries.",
  responseDate: "2025-04-04",
  type: "svg",
  title: "World Map SVG",
  description: "Quasar Alpha's simplified world map creation with stylized continents and country labels",
  content: `<svg width="800" height="400" viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg">

  <!-- Continents -->
  <rect x="0" y="0" width="800" height="400" fill="#cceeff" /> <!-- Ocean background -->

  <!-- Africa -->
  <ellipse cx="400" cy="250" rx="60" ry="80" fill="#f4a261" opacity="0.8"/>

  <!-- Europe -->
  <ellipse cx="400" cy="150" rx="50" ry="30" fill="#2a9d8f" opacity="0.8"/>

  <!-- Asia -->
  <ellipse cx="550" cy="150" rx="100" ry="80" fill="#e9c46a" opacity="0.8"/>

  <!-- North America -->
  <ellipse cx="200" cy="120" rx="100" ry="80" fill="#264653" opacity="0.8"/>

  <!-- South America -->
  <ellipse cx="250" cy="280" rx="60" ry="100" fill="#e76f51" opacity="0.8"/>

  <!-- Australia -->
  <ellipse cx="650" cy="320" rx="50" ry="30" fill="#90be6d" opacity="0.8"/>

  <!-- Labels for countries -->
  <text x="210" y="100" font-size="16" fill="#fff" font-weight="bold">USA</text>
  <text x="390" y="140" font-size="16" fill="#000" font-weight="bold">Germany</text>
  <text x="530" y="140" font-size="16" fill="#000" font-weight="bold">China</text>
  <text x="380" y="270" font-size="16" fill="#000" font-weight="bold">Nigeria</text>
  <text x="640" y="320" font-size="16" fill="#000" font-weight="bold">Australia</text>

</svg>
`
}; 