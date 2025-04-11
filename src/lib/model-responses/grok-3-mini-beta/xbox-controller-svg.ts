import { ModelResponse } from "@/types/models";

export const xboxControllerSvggrok_3_mini_beta: ModelResponse = {
  id: "grok-3-mini-beta-xbox-controller-svg",
  modelId: "grok-3-mini-beta",
  prompt: "Create an SVG art of an Xbox controller with detailed buttons, joysticks, and d-pad. Use a modern, clean design style with subtle gradients.",
  responseDate: "2025-04-11",
  type: "svg",
  title: "Xbox Controller SVG Art",
  description: "Grok 3 Mini Beta's response to the challenge of creating a detailed SVG illustration of an Xbox controller",
  content: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 400" width="800" height="400">
  <!-- Define gradients for subtle effects -->
  <defs>
    <!-- Linear gradient for the main body -->
    <linearGradient id="bodyGradient" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:#333333;stop-opacity:1" /> <!-- Dark gray -->
      <stop offset="100%" style="stop-color:#111111;stop-opacity:1" /> <!-- Black -->
    </linearGradient>
    
    <!-- Radial gradient for buttons and joysticks (subtle shine) -->
    <radialGradient id="buttonGradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
      <stop offset="0%" style="stop-color:#FFFFFF;stop-opacity:0.2" /> <!-- Light shine -->
      <stop offset="100%" style="stop-color:#000000;stop-opacity:0.1" /> <!-- Dark base -->
    </radialGradient>
  </defs>

  <!-- Main controller body -->
  <rect x="100" y="50" width="600" height="300" rx="50" ry="50" fill="url(#bodyGradient)" />

  <!-- Left Joystick -->
  <circle cx="250" cy="200" r="40" fill="#444444" /> <!-- Base -->
  <circle cx="250" cy="200" r="20" fill="url(#buttonGradient)" /> <!-- Stick with gradient -->

  <!-- Right Joystick -->
  <circle cx="550" cy="200" r="40" fill="#444444" /> <!-- Base -->
  <circle cx="550" cy="200" r="20" fill="url(#buttonGradient)" /> <!-- Stick with gradient -->

  <!-- D-pad (cross shape) -->
  <path d="M150 300 h40 v40 h-40 Z  M130 280 h40 v40 h-40 Z  M140 270 h20 v40 h-20 Z  M160 270 h20 v40 h-20 Z" fill="#555555" /> <!-- Subtle cross with paths -->

  <!-- Face buttons (A, B, X, Y in diamond layout) -->
  <circle cx="600" cy="150" r="20" fill="#66CC33" stroke="#FFFFFF" stroke-width="2"> <!-- Y (Yellow-Green) -->
    <title>Y</title>
  </circle>
  <text x="595" y="155" font-size="12" fill="#FFFFFF" text-anchor="middle">Y</text>

  <circle cx="650" cy="200" r="20" fill="#FF3300" stroke="#FFFFFF" stroke-width="2"> <!-- B (Red) -->
    <title>B</title>
  </circle>
  <text x="645" y="205" font-size="12" fill="#FFFFFF" text-anchor="middle">B</text>

  <circle cx="600" cy="250" r="20" fill="#33CC33" stroke="#FFFFFF" stroke-width="2"> <!-- A (Green) -->
    <title>A</title>
  </circle>
  <text x="595" y="255" font-size="12" fill="#FFFFFF" text-anchor="middle">A</text>

  <circle cx="550" cy="200" r="20" fill="#3366FF" stroke="#FFFFFF" stroke-width="2"> <!-- X (Blue) -->
    <title>X</title>
  </circle>
  <text x="545" y="205" font-size="12" fill="#FFFFFF" text-anchor="middle">X</text>

  <!-- Central Xbox button -->
  <circle cx="400" cy="200" r="25" fill="#66CC33" stroke="#FFFFFF" stroke-width="2"> <!-- Green circle -->
    <title>Xbox</title>
  </circle>
  <text x="400" y="205" font-size="12" fill="#FFFFFF" text-anchor="middle">Xbox</text> <!-- Simple text label -->

  <!-- Bumpers and Triggers (simplified as rectangles with gradients) -->
  <rect x="150" y="80" width="100" height="20" rx="10" ry="10" fill="url(#buttonGradient)" stroke="#FFFFFF" stroke-width="1"> <!-- Left Bumper -->
    <title>Left Bumper</title>
  </rect>
  <rect x="550" y="80" width="100" height="20" rx="10" ry="10" fill="url(#buttonGradient)" stroke="#FFFFFF" stroke-width="1"> <!-- Right Bumper -->
    <title>Right Bumper</title>
  </rect>

  <rect x="150" y="60" width="100" height="15" rx="5" ry="5" fill="#666666" stroke="#FFFFFF" stroke-width="1"> <!-- Left Trigger -->
    <title>Left Trigger</title>
  </rect>
  <rect x="550" y="60" width="100" height="15" rx="5" ry="5" fill="#666666" stroke="#FFFFFF" stroke-width="1"> <!-- Right Trigger -->
    <title>Right Trigger</title>
  </rect>

  <!-- Additional buttons (Menu and View) -->
  <circle cx="300" cy="100" r="15" fill="#3366FF" stroke="#FFFFFF" stroke-width="1"> <!-- View button -->
    <title>View</title>
  </circle>
  <circle cx="500" cy="100" r="15" fill="#FF3300" stroke="#FFFFFF" stroke-width="1"> <!-- Menu button -->
    <title>Menu</title>
  </circle>
</svg>
`
}; 