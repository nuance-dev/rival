import { ModelResponse } from "@/types/models";

export const svgLayoutllama_4_maverick: ModelResponse = {
  id: "llama-4-maverick-svg-layout",
  modelId: "llama-4-maverick",
  prompt: "Generate an SVG of a pelican riding a bicycle.",
  responseDate: "2025-04-05",
  type: "svg",
  title: "SVG Layout Design",
  description: "Llama 4 Maverick's responsive SVG layout with header, sidebar, main content, and footer",
  content: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400" width="600" height="400">
  <!-- Background -->
  <rect x="0" y="0" width="600" height="400" fill="#87CEEB" rx="20" />
  
  <!-- Road -->
  <rect x="0" y="300" width="600" height="100" fill="#808080" />
  
  <!-- Bicycle -->
  <!-- Wheels -->
  <circle cx="200" cy="340" r="30" fill="#000" />
  <circle cx="260" cy="340" r="30" fill="#000" />
  <!-- Frame -->
  <line x1="200" y1="340" x2="260" y2="340" stroke="#000" stroke-width="5" />
  <line x1="200" y1="340" x2="230" y2="280" stroke="#000" stroke-width="5" />
  <line x1="260" y1="340" x2="230" y2="280" stroke="#000" stroke-width="5" />
  <!-- Seat -->
  <rect x="225" y="270" width="10" height="10" fill="#964B00" />
  
  <!-- Pelican -->
  <!-- Body -->
  <ellipse cx="230" cy="250" rx="30" ry="20" fill="#FFFFFF" />
  <!-- Head -->
  <circle cx="260" cy="240" r="15" fill="#FFFFFF" />
  <path d="M 270 240 L 275 230 L 280 240" stroke="#000" stroke-width="2" fill="none" /> <!-- Beak -->
  <!-- Legs -->
  <line x1="230" y1="270" x2="220" y2="290" stroke="#000" stroke-width="3" />
  <line x1="230" y1="270" x2="240" y2="290" stroke="#000" stroke-width="3" />
  <!-- Hands on handlebars -->
  <line x1="210" y1="280" x2="200" y2="290" stroke="#000" stroke-width="3" />
  <line x1="250" y1="280" x2="260" y2="290" stroke="#000" stroke-width="3" />
  <!-- Handlebars -->
  <line x1="230" y1="280" x2="210" y2="290" stroke="#000" stroke-width="5" />
  <line x1="230" y1="280" x2="250" y2="290" stroke="#000" stroke-width="5" />
  
  <!-- Pedals -->
  <circle cx="200" cy="350" r="5" fill="#000" />
  <circle cx="260" cy="350" r="5" fill="#000" />
</svg>
`
}; 