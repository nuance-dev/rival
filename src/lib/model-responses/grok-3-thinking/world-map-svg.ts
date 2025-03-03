import { ModelResponse } from "@/types/models";

export const worldMapSvggrok_3_thinking: ModelResponse = {
  id: "grok-3-thinking-world-map-svg",
  modelId: "grok-3-thinking",
  prompt: "Create a simplified world map as an SVG showing major continents with different colors. Add labels for at least 5 major countries.",
  responseDate: "2024-05-31",
  type: "svg",
  title: "World Map SVG Art",
  description: "Grok 3 Thinking's response to the challenge of creating a stylized SVG world map with modern design principles",
  content: `<svg width="800" height="400" viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg">
  <!-- Water background -->
  <rect width="100%" height="100%" fill="#B3E5FC" />

  <!-- Dashed grid lines -->
  <g stroke="#E0F2F1" stroke-width="0.5" stroke-dasharray="2,2">
    <!-- Horizontal lines -->
    <line x1="0" y1="40" x2="800" y2="40" />
    <line x1="0" y1="80" x2="800" y2="80" />
    <line x1="0" y1="120" x2="800" y2="120" />
    <line x1="0" y1="160" x2="800" y2="160" />
    <line x1="0" y1="200" x2="800" y2="200" />
    <line x1="0" y1="240" x2="800" y2="240" />
    <line x1="0" y1="280" x2="800" y2="280" />
    <line x1="0" y1="320" x2="800" y2="320" />
    <line x1="0" y1="360" x2="800" y2="360" />
    <!-- Vertical lines -->
    <line x1="80" y1="0" x2="80" y2="400" />
    <line x1="160" y1="0" x2="160" y2="400" />
    <line x1="240" y1="0" x2="240" y2="400" />
    <line x1="320" y1="0" x2="320" y2="400" />
    <line x1="400" y1="0" x2="400" y2="400" />
    <line x1="480" y1="0" x2="480" y2="400" />
    <line x1="560" y1="0" x2="560" y2="400" />
    <line x1="640" y1="0" x2="640" y2="400" />
    <line x1="720" y1="0" x2="720" y2="400" />
  </g>

  <!-- Continents -->
  <g>
    <path d="...path data for North America..." fill="#A5D6A7" />
    <path d="...path data for South America..." fill="#80CBC4" />
    <path d="...path data for Europe..." fill="#80DEEA" />
    <path d="...path data for Africa..." fill="#FFCC80" />
    <path d="...path data for Asia..." fill="#FFAB91" />
    <path d="...path data for Australia..." fill="#F48FB1" />
    <path d="...path data for Antarctica..." fill="#B39DDB" />
  </g>

  <!-- Compass rose -->
  <g transform="translate(700,350)">
    <circle cx="0" cy="0" r="20" fill="none" stroke="#E0F2F1" stroke-width="1" />
    <line x1="0" y1="-20" x2="0" y2="20" stroke="#E0F2F1" stroke-width="1" />
    <line x1="-20" y1="0" x2="20" y2="0" stroke="#E0F2F1" stroke-width="1" />
    <line x1="-14.14" y1="-14.14" x2="14.14" y2="14.14" stroke="#E0F2F1" stroke-width="1" />
    <line x1="-14.14" y1="14.14" x2="14.14" y2="-14.14" stroke="#E0F2F1" stroke-width="1" />
  </g>
</svg>`
}; 