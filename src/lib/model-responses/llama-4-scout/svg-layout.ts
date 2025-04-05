import { ModelResponse } from "@/types/models";

export const svgLayoutllama_4_scout: ModelResponse = {
  id: "llama-4-scout-svg-layout",
  modelId: "llama-4-scout",
  prompt: "Generate an SVG of a pelican riding a bicycle.",
  responseDate: "2025-04-05",
  type: "svg",
  title: "SVG Layout Design",
  description: "Llama 4 Scout's responsive SVG layout with header, sidebar, main content, and footer",
  content: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <!-- Background -->
  <rect x="0" y="0" width="100" height="100" fill="#f0f0f0" />
  
  <!-- Bicycle -->
  <ellipse cx="50" cy="80" rx="40" ry="10" fill="#808080" />
  <rect x="30" y="70" width="10" height="20" fill="#808080" />
  <rect x="60" y="70" width="10" height="20" fill="#808080" />
  <circle cx="50" cy="60" r="10" fill="#808080" />
  
  <!-- Pelican -->
  <circle cx="50" cy="40" r="15" fill="#ffffff" />
  <path d="M 50 30 L 60 20 L 40 20 Z" fill="#ffffff" />
  <circle cx="55" cy="35" r="2" fill="#000000" />
  <circle cx="45" cy="35" r="2" fill="#000000" />
  
  <!-- Wheels -->
  <circle cx="30" cy="90" r="10" fill="#808080" />
  <circle cx="70" cy="90" r="10" fill="#808080" />
</svg>
`
}; 