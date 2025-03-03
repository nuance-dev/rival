import { ModelResponse } from "@/types/models";

export const xboxControllerSvggemini_2_0_flash_thinking_exp: ModelResponse = {
  id: "gemini-2-0-flash-thinking-exp-xbox-controller-svg",
  modelId: "gemini-2-0-flash-thinking-exp",
  prompt: "Create an SVG art of an Xbox controller with detailed buttons, joysticks, and d-pad. Use a modern, clean design style with subtle gradients.",
  responseDate: "2025-02-27",
  type: "svg",
  title: "Xbox Controller SVG Art",
  description: "Gemini 2.0 Flash Thinking Exp's response to the challenge of creating a detailed SVG illustration of an Xbox controller",
  content: `<svg width="200" height="150" viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bodyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:#444;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#333;stop-opacity:1" />
    </linearGradient>
    <linearGradient id="buttonGradient" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:#ddd;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#ccc;stop-opacity:1" />
    </linearGradient>
    <linearGradient id="joystickGradient" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:#666;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#555;stop-opacity:1" />
    </linearGradient>
    <linearGradient id="dpadGradient" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:#777;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#666;stop-opacity:1" />
    </linearGradient>
    <linearGradient id="bumperGradient" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:#555;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#444;stop-opacity:1" />
    </linearGradient>
    <linearGradient id="triggerGradient" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:#666;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#555;stop-opacity:1" />
    </linearGradient>
    <radialGradient id="xboxButtonGradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
      <stop offset="0%" style="stop-color:#aaf0d1;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#7dd8b8;stop-opacity:1" />
    </radialGradient>
  </defs>

  <!-- Controller Body -->
  <rect x="10" y="10" width="180" height="130" rx="15" ry="15" fill="url(#bodyGradient)" />

  <!-- Left Joystick -->
  <g transform="translate(40, 50)">
    <circle cx="0" cy="0" r="15" fill="url(#joystickGradient)" />
    <circle cx="0" cy="0" r="5" fill="#222" /> <!-- Inner stick -->
  </g>

  <!-- Right Joystick -->
  <g transform="translate(160, 50)">
    <circle cx="0" cy="0" r="15" fill="url(#joystickGradient)" />
    <circle cx="0" cy="0" r="5" fill="#222" /> <!-- Inner stick -->
  </g>

  <!-- D-Pad -->
  <g transform="translate(40, 100)">
    <rect x="-15" y="-5" width="30" height="10" fill="url(#dpadGradient)" rx="2" ry="2" /> <!-- Horizontal -->
    <rect x="-5" y="-15" width="10" height="30" fill="url(#dpadGradient)" rx="2" ry="2" /> <!-- Vertical -->
    <circle cx="0" cy="0" r="7" fill="#222" /> <!-- Center -->
  </g>

  <!-- A Button -->
  <g transform="translate(160, 100)">
    <circle cx="15" cy="0" r="10" fill="#4CAF50" /> <!-- Green -->
    <text x="15" y="4" text-anchor="middle" font-size="10" font-weight="bold" fill="white">A</text>
  </g>

  <!-- B Button -->
  <g transform="translate(160, 100)">
    <circle cx="35" cy="0" r="10" fill="#F44336" /> <!-- Red -->
    <text x="35" y="4" text-anchor="middle" font-size="10" font-weight="bold" fill="white">B</text>
  </g>

  <!-- X Button -->
  <g transform="translate(160, 100)">
    <circle cx="5" cy="-15" r="10" fill="#2196F3" /> <!-- Blue -->
    <text x="5" y="-11" text-anchor="middle" font-size="10" font-weight="bold" fill="white">X</text>
  </g>

  <!-- Y Button -->
  <g transform="translate(160, 100)">
    <circle cx="25" cy="-15" r="10" fill="#FFEB3B" /> <!-- Yellow -->
    <text x="25" y="-11" text-anchor="middle" font-size="10" font-weight="bold" fill="black">Y</text>
  </g>

  <!-- Start Button -->
  <g transform="translate(100, 30)">
    <rect x="-15" y="-5" width="30" height="10" fill="url(#buttonGradient)" rx="3" ry="3" />
    <text x="0" y="3" text-anchor="middle" font-size="8" fill="#222">Start</text>
  </g>

  <!-- View Button -->
  <g transform="translate(100, 70)">
    <rect x="-15" y="-5" width="30" height="10" fill="url(#buttonGradient)" rx="3" ry="3" />
    <text x="0" y="3" text-anchor="middle" font-size="8" fill="#222">View</text>
  </g>

  <!-- Xbox Button -->
  <g transform="translate(100, 100)">
    <circle cx="0" cy="0" r="12" fill="url(#xboxButtonGradient)" />
    <!-- Simple X shape for Xbox logo - could be replaced with a more detailed path if needed -->
    <path d="M-5,-5 L5,5 M5,-5 L-5,5" stroke="#222" stroke-width="2" />
  </g>

  <!-- Left Bumper -->
  <g transform="translate(20, 0)">
    <rect x="0" y="0" width="40" height="10" fill="url(#bumperGradient)" rx="5" ry="5" />
  </g>

  <!-- Right Bumper -->
  <g transform="translate(140, 0)">
    <rect x="0" y="0" width="40" height="10" fill="url(#bumperGradient)" rx="5" ry="5" />
  </g>

  <!-- Left Trigger -->
  <g transform="translate(30, -10)">
    <rect x="0" y="0" width="20" height="20" fill="url(#triggerGradient)" rx="5" ry="5" />
  </g>

  <!-- Right Trigger -->
  <g transform="translate(150, -10)">
    <rect x="0" y="0" width="20" height="20" fill="url(#triggerGradient)" rx="5" ry="5" />
  </g>

</svg>`
}; 