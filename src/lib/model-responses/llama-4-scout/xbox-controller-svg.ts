import { ModelResponse } from "@/types/models";

export const xboxControllerSvgllama_4_scout: ModelResponse = {
  id: "llama-4-scout-xbox-controller-svg",
  modelId: "llama-4-scout",
  prompt: "Create an SVG art of an Xbox controller with detailed buttons, joysticks, and d-pad. Use a modern, clean design style with subtle gradients.",
  responseDate: "2025-04-05",
  type: "svg",
  title: "Xbox Controller SVG",
  funFact: "Llama 4 Scout provided details on how to embed the SVG in a website",
  description: "Llama 4 Scout's detailed SVG illustration of an Xbox controller with accurate button placement and shading",
  content: `<svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg">
  <!-- Main Body -->
  <rect x="20" y="10" width="160" height="100" rx="10" fill="#2f343a" />
  
  <!-- Triggers -->
  <rect x="25" y="15" width="30" height="20" fill="#3f454c" rx="5" />
  <rect x="145" y="15" width="30" height="20" fill="#3f454c" rx="5" />
  
  <!-- Bumpers -->
  <rect x="25" y="45" width="50" height="15" fill="#3f454c" rx="5" />
  <rect x="125" y="45" width="50" height="15" fill="#3f454c" rx="5" />
  
  <!-- View Button -->
  <circle cx="100" cy="60" r="10" fill="#3f454c" />
  <text x="100" y="65" font-size="14" text-anchor="middle" fill="#ffffff">View</text>
  
  <!-- Menu Button -->
  <circle cx="100" cy="80" r="10" fill="#3f454c" />
  <text x="100" y="85" font-size="14" text-anchor="middle" fill="#ffffff">Menu</text>
  
  <!-- Left Joystick -->
  <circle cx="45" cy="80" r="15" fill="#434a54" />
  <circle cx="45" cy="80" r="5" fill="#ffffff" />
  
  <!-- Right Joystick -->
  <circle cx="155" cy="80" r="15" fill="#434a54" />
  <circle cx="155" cy="80" r="5" fill="#ffffff" />
  
  <!-- D-Pad -->
  <rect x="95" y="95" width="20" height="20" fill="#434a54" rx="5" />
  <polygon points="100,100 105,95 110,100" fill="#ffffff" />
  <polygon points="100,100 95,95 90,100" fill="#ffffff" />
  <polygon points="100,110 105,115 110,110" fill="#ffffff" />
  <polygon points="100,110 95,115 90,110" fill="#ffffff" />
  
  <!-- ABXY Buttons -->
  <circle cx="140" cy="60" r="15" fill="#d11616" />
  <text x="140" y="65" font-size="14" text-anchor="middle" fill="#ffffff">A</text>
  <circle cx="120" cy="60" r="15" fill="#0097e6" />
  <text x="120" y="65" font-size="14" text-anchor="middle" fill="#ffffff">B</text>
  <circle cx="140" cy="40" r="15" fill="#0097e6" />
  <text x="140" y="45" font-size="14" text-anchor="middle" fill="#ffffff">X</text>
  <circle cx="120" cy="40" r="15" fill="#d11616" />
  <text x="120" y="45" font-size="14" text-anchor="middle" fill="#ffffff">Y</text>
  
  <!-- Start and Back Buttons -->
  <rect x="60" y="50" width="30" height="20" fill="#434a54" rx="5" />
  <text x="75" y="65" font-size="14" text-anchor="middle" fill="#ffffff">Back</text>
  <rect x="90" y="50" width="30" height="20" fill="#434a54" rx="5" />
  <text x="105" y="65" font-size="14" text-anchor="middle" fill="#ffffff">Start</text>
</svg>
`
}; 