import { ModelResponse } from "@/types/models";

export const svgLayouto3_mini: ModelResponse = {
  id: "o3-mini-svg-layout",
  modelId: "o3-mini",
  prompt: "Generate an SVG of a pelican riding a bicycle.",
  responseDate: "2025-02-28",
  type: "svg",
  title: "SVG Layout Challenge"  ,
  description: "o3 Mini's response to the Tests an AI's ability to generate vector graphics",
  content: `<svg width="500" height="500" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
  <!-- Bicycle Wheels -->
  <circle cx="150" cy="350" r="50" stroke="black" stroke-width="4" fill="none" />
  <circle cx="350" cy="350" r="50" stroke="black" stroke-width="4" fill="none" />

  <!-- Bicycle Frame -->
  <line x1="150" y1="350" x2="230" y2="200" stroke="black" stroke-width="4" />
  <line x1="230" y1="200" x2="350" y2="350" stroke="black" stroke-width="4" />
  <line x1="230" y1="200" x2="300" y2="200" stroke="black" stroke-width="4" />
  <line x1="300" y1="200" x2="350" y2="350" stroke="black" stroke-width="4" />
  <line x1="150" y1="350" x2="300" y2="200" stroke="black" stroke-width="4" />

  <!-- Pelican riding the bicycle -->
  <g id="pelican" transform="translate(230,170)">
    <!-- Pelican Body -->
    <ellipse cx="0" cy="30" rx="40" ry="60" fill="#f2d096" stroke="black" stroke-width="3" />
    <!-- Pelican Head -->
    <circle cx="0" cy="-10" r="20" fill="#f2d096" stroke="black" stroke-width="3" />
    <!-- Pelican Beak -->
    <polygon points="20,-10 40,-20 20,0" fill="#ffcc00" stroke="black" stroke-width="3" />
    <!-- Pelican Eye -->
    <circle cx="-5" cy="-15" r="3" fill="black" />
    <!-- Pelican Wing -->
    <path d="M -20 30 Q -40 50, 0 50 Q 40 50, 20 30" fill="#e6c38b" stroke="black" stroke-width="3" />
  </g>
</svg>
`
};
