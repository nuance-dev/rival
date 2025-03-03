import { ModelResponse } from "@/types/models";

export const xboxControllerSvgo3_mini: ModelResponse = {
  id: "o3-mini-xbox-controller-svg",
  modelId: "o3-mini",
  prompt: "Create an SVG art of an Xbox controller with detailed buttons, joysticks, and d-pad. Use a modern, clean design style with subtle gradients.",
  responseDate: "2025-02-28",
  type: "svg",
  title: "Xbox Controller SVG Art",
  description: "o3-mini's response to the challenge of creating a detailed SVG illustration of an Xbox controller",
  content: `<svg width="500" height="300" viewBox="0 0 500 300" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- Body gradient -->
    <linearGradient id="bodyGradient" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#2a2a2a"/>
      <stop offset="100%" stop-color="#1a1a1a"/>
    </linearGradient>
    <!-- Button gradient -->
    <radialGradient id="buttonGradient" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#ffffff"/>
      <stop offset="100%" stop-color="#cccccc"/>
    </radialGradient>
    <!-- Joystick gradient -->
    <radialGradient id="joystickGradient" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#e0e0e0"/>
      <stop offset="100%" stop-color="#b0b0b0"/>
    </radialGradient>
  </defs>

  <!-- Controller Body -->
  <path d="M50,150 Q100,50 200,50 L300,50 Q400,50 450,150 Q470,200 450,250 L300,250 Q200,250 100,250 Q70,200 50,150 Z"
        fill="url(#bodyGradient)" stroke="#333" stroke-width="2" />

  <!-- Left Joystick -->
  <circle cx="150" cy="150" r="20" fill="url(#joystickGradient)" stroke="#555" stroke-width="2"/>
  <circle cx="150" cy="150" r="8" fill="#777"/>

  <!-- Right Joystick -->
  <circle cx="350" cy="150" r="20" fill="url(#joystickGradient)" stroke="#555" stroke-width="2"/>
  <circle cx="350" cy="150" r="8" fill="#777"/>

  <!-- D-pad -->
  <!-- Vertical part -->
  <rect x="90" y="140" width="10" height="20" fill="url(#buttonGradient)" stroke="#555" stroke-width="2"/>
  <!-- Horizontal part -->
  <rect x="80" y="150" width="30" height="10" fill="url(#buttonGradient)" stroke="#555" stroke-width="2"/>
  
  <!-- A, B, X, Y Buttons -->
  <!-- A button (bottom-right) -->
  <circle cx="370" cy="180" r="8" fill="url(#buttonGradient)" stroke="#555" stroke-width="2"/>
  <!-- B button -->
  <circle cx="390" cy="160" r="8" fill="url(#buttonGradient)" stroke="#555" stroke-width="2"/>
  <!-- X button -->
  <circle cx="350" cy="160" r="8" fill="url(#buttonGradient)" stroke="#555" stroke-width="2"/>
  <!-- Y button -->
  <circle cx="370" cy="140" r="8" fill="url(#buttonGradient)" stroke="#555" stroke-width="2"/>

  <!-- Triggers -->
  <!-- Left trigger -->
  <path d="M60,80 Q120,20 190,40" fill="none" stroke="#444" stroke-width="4" stroke-linecap="round"/>
  <!-- Right trigger -->
  <path d="M440,80 Q380,20 310,40" fill="none" stroke="#444" stroke-width="4" stroke-linecap="round"/>
</svg>
`
}; 