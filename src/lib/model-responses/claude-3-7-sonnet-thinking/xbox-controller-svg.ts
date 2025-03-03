import { ModelResponse } from "@/types/models";

export const xboxControllerSvgclaude_3_7_sonnet_thinking: ModelResponse = {
  id: "claude-3-7-sonnet-thinking-xbox-controller-svg",
  modelId: "claude-3-7-sonnet-thinking",
  prompt: "Create an SVG art of an Xbox controller with detailed buttons, joysticks, and d-pad. Use a modern, clean design style with subtle gradients.",
  responseDate: "2025-02-27",
  type: "svg",
  title: "Xbox Controller SVG Art",
  description: "Claude 3.7 Sonnet Thinking's response to the challenge of creating a detailed SVG illustration of an Xbox controller",
  content: `<svg width="500" height="400" viewBox="0 0 500 400" xmlns="http://www.w3.org/2000/svg">
  <!-- Gradients -->
  <defs>
    <linearGradient id="controllerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#4a4a4a" />
      <stop offset="100%" stop-color="#2e2e2e" />
    </linearGradient>
    <linearGradient id="buttonGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#3a3a3a" />
      <stop offset="100%" stop-color="#222222" />
    </linearGradient>
    <linearGradient id="aButtonGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#3cb54a" />
      <stop offset="100%" stop-color="#2a9d38" />
    </linearGradient>
    <linearGradient id="bButtonGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#e53744" />
      <stop offset="100%" stop-color="#c52d3a" />
    </linearGradient>
    <linearGradient id="xButtonGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0072ce" />
      <stop offset="100%" stop-color="#0062b0" />
    </linearGradient>
    <linearGradient id="yButtonGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#f0c419" />
      <stop offset="100%" stop-color="#dbb217" />
    </linearGradient>
    <linearGradient id="xboxButtonGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#107c10" />
      <stop offset="100%" stop-color="#0b5e0b" />
    </linearGradient>
    <radialGradient id="joystickGradient" cx="50%" cy="50%" r="50%" fx="25%" fy="25%">
      <stop offset="0%" stop-color="#555555" />
      <stop offset="100%" stop-color="#333333" />
    </radialGradient>
  </defs>

  <!-- Main Controller Body -->
  <path d="M 100,150 C 60,180 40,230 50,275 C 60,320 90,350 130,360 C 160,368 190,370 200,372 L 300,372 C 310,370 340,368 370,360 C 410,350 440,320 450,275 C 460,230 440,180 400,150 C 380,135 330,130 300,130 L 200,130 C 170,130 120,135 100,150 Z" 
        fill="url(#controllerGradient)" stroke="#222222" stroke-width="2" />

  <!-- Controller Top Shadow -->
  <path d="M 100,150 C 60,180 40,230 50,275 C 60,320 90,350 130,360 C 160,368 190,370 200,372 L 300,372 C 310,370 340,368 370,360 C 410,350 440,320 450,275 C 460,230 440,180 400,150 C 380,135 330,130 300,130 L 200,130 C 170,130 120,135 100,150 Z" 
        fill="url(#controllerGradient)" opacity="0.3" />

  <!-- Left Joystick Base -->
  <circle cx="150" cy="220" r="25" fill="url(#buttonGradient)" stroke="#222222" stroke-width="1.5" />
  
  <!-- Left Joystick -->
  <circle cx="150" cy="220" r="18" fill="url(#joystickGradient)" stroke="#222222" stroke-width="1" />
  <circle cx="150" cy="220" r="15" fill="rgba(0,0,0,0.2)" />

  <!-- Right Joystick Base -->
  <circle cx="300" cy="280" r="25" fill="url(#buttonGradient)" stroke="#222222" stroke-width="1.5" />
  
  <!-- Right Joystick -->
  <circle cx="300" cy="280" r="18" fill="url(#joystickGradient)" stroke="#222222" stroke-width="1" />
  <circle cx="300" cy="280" r="15" fill="rgba(0,0,0,0.2)" />

  <!-- D-Pad Base -->
  <circle cx="200" cy="280" r="30" fill="url(#buttonGradient)" stroke="#222222" stroke-width="1.5" />
  
  <!-- D-Pad -->
  <rect x="190" y="260" width="20" height="40" rx="2" ry="2" fill="#222222" />
  <rect x="180" y="270" width="40" height="20" rx="2" ry="2" fill="#222222" />

  <!-- A Button -->
  <circle cx="350" cy="220" r="15" fill="url(#aButtonGradient)" stroke="#222222" stroke-width="1" />
  <text x="350" y="225" font-family="Arial" font-size="15" font-weight="bold" text-anchor="middle" fill="white">A</text>

  <!-- B Button -->
  <circle cx="380" cy="190" r="15" fill="url(#bButtonGradient)" stroke="#222222" stroke-width="1" />
  <text x="380" y="195" font-family="Arial" font-size="15" font-weight="bold" text-anchor="middle" fill="white">B</text>

  <!-- X Button -->
  <circle cx="320" cy="190" r="15" fill="url(#xButtonGradient)" stroke="#222222" stroke-width="1" />
  <text x="320" y="195" font-family="Arial" font-size="15" font-weight="bold" text-anchor="middle" fill="white">X</text>

  <!-- Y Button -->
  <circle cx="350" cy="160" r="15" fill="url(#yButtonGradient)" stroke="#222222" stroke-width="1" />
  <text x="350" y="165" font-family="Arial" font-size="15" font-weight="bold" text-anchor="middle" fill="white">Y</text>

  <!-- Left Shoulder -->
  <rect x="105" y="120" width="70" height="25" rx="10" ry="10" fill="url(#buttonGradient)" stroke="#222222" stroke-width="1.5" />

  <!-- Right Shoulder -->
  <rect x="325" y="120" width="70" height="25" rx="10" ry="10" fill="url(#buttonGradient)" stroke="#222222" stroke-width="1.5" />

  <!-- Left Trigger -->
  <path d="M 105,120 Q 105,105 115,105 L 165,105 Q 175,105 175,120 Z" fill="url(#buttonGradient)" stroke="#222222" stroke-width="1.5" />

  <!-- Right Trigger -->
  <path d="M 325,120 Q 325,105 335,105 L 385,105 Q 395,105 395,120 Z" fill="url(#buttonGradient)" stroke="#222222" stroke-width="1.5" />

  <!-- Xbox Button -->
  <circle cx="250" cy="180" r="18" fill="url(#xboxButtonGradient)" stroke="#222222" stroke-width="1.5" />
  <path d="M 250,170 A 7,7 0 1 1 250,194 A 7,7 0 1 1 250,170 Z" fill="none" stroke="white" stroke-width="2" />
  <path d="M 246,172 L 246,192 M 254,172 L 254,192" stroke="white" stroke-width="2" />
  <path d="M 238,180 L 262,180" stroke="white" stroke-width="2" />

  <!-- Menu Button -->
  <circle cx="220" cy="180" r="8" fill="url(#buttonGradient)" stroke="#222222" stroke-width="1" />
  <rect x="215" y="177" width="10" height="2" rx="1" ry="1" fill="white" />
  <rect x="215" y="180" width="10" height="2" rx="1" ry="1" fill="white" />
  <rect x="215" y="183" width="10" height="2" rx="1" ry="1" fill="white" />

  <!-- View Button -->
  <circle cx="280" cy="180" r="8" fill="url(#buttonGradient)" stroke="#222222" stroke-width="1" />
  <rect x="274" y="180" width="12" height="2" rx="1" ry="1" fill="white" />
  <rect x="277" y="177" width="6" height="2" rx="1" ry="1" fill="white" />
  <rect x="277" y="183" width="6" height="2" rx="1" ry="1" fill="white" />
</svg>`
}; 