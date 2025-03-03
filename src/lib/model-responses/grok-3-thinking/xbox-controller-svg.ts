import { ModelResponse } from "@/types/models";

export const xboxControllerSvggrok_3_thinking: ModelResponse = {
  id: "grok-3-thinking-xbox-controller-svg",
  modelId: "grok-3-thinking",
  prompt: "Create an SVG art of an Xbox controller with detailed buttons, joysticks, and d-pad. Use a modern, clean design style with subtle gradients.",
  responseDate: "2025-02-28",
  type: "svg",
  title: "Xbox Controller SVG Art",
  description: "Grok 3 Thinking's response to the challenge of creating a detailed SVG illustration of an Xbox controller",
  content: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <!-- Definitions for Gradients -->
  <defs>
    <!-- Body Gradient -->
    <linearGradient id="bodyGradient" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#cccccc" />
      <stop offset="100%" stop-color="#666666" />
    </linearGradient>
    <!-- Button Gradient (Subtle 3D Effect) -->
    <radialGradient id="buttonGradient" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#ffffff" />
      <stop offset="100%" stop-color="#999999" />
    </radialGradient>
    <!-- Joystick Gradient -->
    <radialGradient id="joystickGradient" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#666666" />
      <stop offset="100%" stop-color="#333333" />
    </radialGradient>
  </defs>

  <!-- Controller Body -->
  <path d="M10,50 C10,30 30,20 50,20 C70,20 90,30 90,50 L90,60 C90,70 80,80 70,80 L60,80 C55,80 50,75 50,70 C50,75 45,80 40,80 L30,80 C20,80 10,70 10,60 Z" fill="url(#bodyGradient)" />

  <!-- Left Joystick -->
  <circle cx="30" cy="50" r="5" fill="url(#joystickGradient)" />
  <circle cx="30" cy="50" r="3" fill="#666666" />

  <!-- Right Joystick -->
  <circle cx="70" cy="50" r="5" fill="url(#joystickGradient)" />
  <circle cx="70" cy="50" r="3" fill="#666666" />

  <!-- D-Pad -->
  <g fill="#333333">
    <rect x="19" y="55" width="2" height="10" rx="1" />
    <rect x="15" y="59" width="10" height="2" rx="1" />
  </g>

  <!-- Face Buttons -->
  <!-- A Button (Bottom) -->
  <circle cx="60" cy="60" r="4" fill="green" />
  <text x="60" y="60" text-anchor="middle" dominant-baseline="central" fill="white" font-size="5" font-family="Arial">A</text>

  <!-- B Button (Right) -->
  <circle cx="70" cy="50" r="4" fill="red" />
  <text x="70" y="50" text-anchor="middle" dominant-baseline="central" fill="white" font-size="5" font-family="Arial">B</text>

  <!-- X Button (Left) -->
  <circle cx="50" cy="50" r="4" fill="blue" />
  <text x="50" y="50" text-anchor="middle" dominant-baseline="central" fill="white" font-size="5" font-family="Arial">X</text>

  <!-- Y Button (Top) -->
  <circle cx="60" cy="40" r="4" fill="yellow" />
  <text x="60" y="40" text-anchor="middle" dominant-baseline="central" fill="black" font-size="5" font-family="Arial">Y</text>

  <!-- Bumpers -->
  <rect x="20" y="10" width="10" height="5" fill="#333333" rx="1" />
  <rect x="70" y="10" width="10" height="5" fill="#333333" rx="1" />

  <!-- Triggers -->
  <path d="M10,20 Q15,10 20,10 L20,20 Z" fill="#333333" />
  <path d="M90,20 Q85,10 80,10 L80,20 Z" fill="#333333" />

  <!-- Start and Back Buttons -->
  <circle cx="45" cy="30" r="2" fill="#333333" />
  <circle cx="55" cy="30" r="2" fill="#333333" />

  <!-- Xbox Logo Button -->
  <circle cx="50" cy="50" r="5" fill="#107C10" />
  <path d="M48,48 L52,52 M52,48 L48,52" stroke="white" stroke-width="1" />
</svg>`
}; 