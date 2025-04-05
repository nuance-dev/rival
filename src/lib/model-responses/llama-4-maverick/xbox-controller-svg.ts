import { ModelResponse } from "@/types/models";

export const xboxControllerSvgllama_4_maverick: ModelResponse = {
  id: "llama-4-maverick-xbox-controller-svg",
  modelId: "llama-4-maverick",
  prompt: "Create an SVG art of an Xbox controller with detailed buttons, joysticks, and d-pad. Use a modern, clean design style with subtle gradients.",
  responseDate: "2025-04-05",
  type: "svg",
  title: "Xbox Controller SVG",
  description: "Llama 4 Maverick's detailed SVG illustration of an Xbox controller with accurate button placement and shading",
  content: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400">
  <!-- Controller Body -->
  <rect x="50" y="50" rx="20" width="500" height="300" fill="#2b2b2b"/>
  
  <!-- Controller Face -->
  <rect x="70" y="70" rx="10" width="460" height="260" fill="url(#controller-face-gradient)"/>
  <defs>
    <linearGradient id="controller-face-gradient" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#434a54"/>
      <stop offset="100%" stop-color="#353b42"/>
    </linearGradient>
  </defs>
  
  <!-- D-Pad -->
  <g transform="translate(120, 150)">
    <rect x="0" y="-30" width="40" height="20" fill="#5c5c5c"/>
    <rect x="0" y="10" width="40" height="20" fill="#5c5c5c"/>
    <rect x="-20" y="-10" width="20" height="40" fill="#5c5c5c"/>
    <rect x="20" y="-10" width="20" height="40" fill="#5c5c5c"/>
    <rect x="-10" y="-10" width="20" height="20" fill="#4c4c4c"/>
  </g>
  
  <!-- Left Joystick -->
  <g transform="translate(160, 220)">
    <circle cx="0" cy="0" r="30" fill="url(#left-joystick-gradient)"/>
    <circle cx="0" cy="0" r="15" fill="#2b2b2b"/>
  </g>
  <defs>
    <radialGradient id="left-joystick-gradient" cx="0.5" cy="0.5" r="0.5">
      <stop offset="0%" stop-color="#5c5c5c"/>
      <stop offset="100%" stop-color="#4c4c4c"/>
    </radialGradient>
  </defs>
  
  <!-- Right Joystick -->
  <g transform="translate(380, 220)">
    <circle cx="0" cy="0" r="30" fill="url(#right-joystick-gradient)"/>
    <circle cx="0" cy="0" r="15" fill="#2b2b2b"/>
  </g>
  <defs>
    <radialGradient id="right-joystick-gradient" cx="0.5" cy="0.5" r="0.5">
      <stop offset="0%" stop-color="#5c5c5c"/>
      <stop offset="100%" stop-color="#4c4c4c"/>
    </radialGradient>
  </defs>
  
  <!-- ABXY Buttons -->
  <g transform="translate(380, 120)">
    <circle cx="20" cy="-20" r="15" fill="#00a0f0"/>
    <text x="20" y="-18" font-size="12" text-anchor="middle" fill="#ffffff">A</text>
    <circle cx="40" cy="0" r="15" fill="#e00000"/>
    <text x="40" y="2" font-size="12" text-anchor="middle" fill="#ffffff">B</text>
    <circle cx="20" cy="20" r="15" fill="#60c060"/>
    <text x="20" y="22" font-size="12" text-anchor="middle" fill="#ffffff">X</text>
    <circle cx="0" cy="0" r="15" fill="#ffff00"/>
    <text x="0" y="2" font-size="12" text-anchor="middle" fill="#000000">Y</text>
  </g>
  
  <!-- Triggers -->
  <rect x="100" y="70" width="60" height="20" fill="#5c5c5c"/>
  <rect x="440" y="70" width="60" height="20" fill="#5c5c5c"/>
  
  <!-- Bumpers -->
  <rect x="100" y="100" width="60" height="10" fill="#5c5c5c"/>
  <rect x="440" y="100" width="60" height="10" fill="#5c5c5c"/>
  
  <!-- Menu and View Buttons -->
  <rect x="220" y="100" width="20" height="10" fill="#4c4c4c"/>
  <text x="230" y="105" font-size="8" text-anchor="middle" fill="#ffffff">Menu</text>
  <rect x="360" y="100" width="20" height="10" fill="#4c4c4c"/>
  <text x="370" y="105" font-size="8" text-anchor="middle" fill="#ffffff">View</text>
  
  <!-- Xbox Button -->
  <circle cx="300" cy="170" r="20" fill="#00a0f0"/>
  <text x="300" y="175" font-size="16" text-anchor="middle" fill="#ffffff">&#xe16a;</text>
</svg>
`
}; 