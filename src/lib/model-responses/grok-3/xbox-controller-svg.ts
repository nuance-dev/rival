import { ModelResponse } from "@/types/models";

export const xboxControllerSvggrok_3: ModelResponse = {
  id: "grok-3-xbox-controller-svg",
  modelId: "grok-3",
  prompt: "Create an SVG art of an Xbox controller with detailed buttons, joysticks, and d-pad. Use a modern, clean design style with subtle gradients. DO NOT CREATE AN IMAGE",
  responseDate: "2025-02-28",
  type: "svg",
  title: "Xbox Controller SVG Art",
  description: "Grok 3's response to the challenge of creating a detailed SVG illustration of an Xbox controller",
  content: `<svg width="400" height="300" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
  <!-- Controller Body -->
  <rect x="50" y="50" width="300" height="200" rx="50" ry="50" fill="url(#bodyGradient)" stroke="#333" stroke-width="2"/>

  <!-- Gradient for Body -->
  <defs>
    <linearGradient id="bodyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:#4a4a4a;" />
      <stop offset="100%" style="stop-color:#2a2a2a;" />
    </linearGradient>
    <linearGradient id="buttonGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#ffffff;" />
      <stop offset="100%" style="stop-color:#d0d0d0;" />
    </linearGradient>
    <linearGradient id="joystickGradient" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:#666666;" />
      <stop offset="100%" style="stop-color:#444444;" />
    </linearGradient>
  </defs>

  <!-- Left Joystick -->
  <circle cx="120" cy="180" r="25" fill="url(#joystickGradient)" stroke="#333" stroke-width="2"/>
  <circle cx="120" cy="180" r="15" fill="#222" stroke="#333" stroke-width="1"/>

  <!-- Right Joystick -->
  <circle cx="280" cy="180" r="25" fill="url(#joystickGradient)" stroke="#333" stroke-width="2"/>
  <circle cx="280" cy="180" r="15" fill="#222" stroke="#333" stroke-width="1"/>

  <!-- D-Pad -->
  <path d="M170 110 h20 v20 h20 v20 h-20 v20 h-20 v-20 h-20 v-20 h20 z" fill="#333" stroke="#222" stroke-width="2"/>
  <path d="M180 120 v40 M170 130 h40" stroke="#555" stroke-width="4"/>

  <!-- A Button (Green) -->
  <circle cx="280" cy="120" r="15" fill="#00cc00" stroke="#006600" stroke-width="2"/>
  <text x="275" y="125" font-size="12" fill="#fff" font-family="Arial" text-anchor="middle">A</text>

  <!-- B Button (Red) -->
  <circle cx="310" cy="140" r="15" fill="#ff3333" stroke="#990000" stroke-width="2"/>
  <text x="305" y="145" font-size="12" fill="#fff" font-family="Arial" text-anchor="middle">B</text>

  <!-- X Button (Blue) -->
  <circle cx="250" cy="140" r="15" fill="#0066ff" stroke="#003399" stroke-width="2"/>
  <text x="245" y="145" font-size="12" fill="#fff" font-family="Arial" text-anchor="middle">X</text>

  <!-- Y Button (Yellow) -->
  <circle cx="280" cy="160" r="15" fill="#ffff33" stroke="#999900" stroke-width="2"/>
  <text x="275" y="165" font-size="12" fill="#fff" font-family="Arial" text-anchor="middle">Y</text>

  <!-- Menu Button -->
  <circle cx="220" cy="80" r="10" fill="url(#buttonGradient)" stroke="#333" stroke-width="2"/>
  <rect x="217" y="75" width="6" height="2" fill="#333"/>
  <rect x="217" y="80" width="6" height="2" fill="#333"/>
  <rect x="217" y="85" width="6" height="2" fill="#333"/>

  <!-- View Button -->
  <circle cx="180" cy="80" r="10" fill="url(#buttonGradient)" stroke="#333" stroke-width="2"/>
  <rect x="175" y="75" width="10" height="10" rx="2" fill="none" stroke="#333" stroke-width="1"/>

  <!-- Triggers (simplified) -->
  <rect x="80" y="20" width="80" height="30" rx="10" fill="#555" stroke="#333" stroke-width="2"/>
  <rect x="240" y="20" width="80" height="30" rx="10" fill="#555" stroke="#333" stroke-width="2"/>
</svg>`
}; 