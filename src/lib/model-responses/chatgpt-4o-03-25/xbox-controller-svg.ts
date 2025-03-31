import { ModelResponse } from "@/types/models";

export const xboxUcontrollerUsvgchatgpt_4o_03_25: ModelResponse = {
  id: "chatgpt-4o-03-25-xbox-controller-svg",
  modelId: "chatgpt-4o-03-25",
  prompt: "Create an SVG art of an Xbox controller with detailed buttons, joysticks, and d-pad. Use a modern, clean design style with subtle gradients.",
  responseDate: "2025-03-30",
  type: "svg",
  title: "xbox-controller-svg",
  description: "ChatGPT-4o March 2025's response",
  content: `<svg width="400" height="250" viewBox="0 0 400 250" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="bodyGradient" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#444"/>
      <stop offset="100%" stop-color="#222"/>
    </radialGradient>
    <linearGradient id="btnGradient" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#555"/>
      <stop offset="100%" stop-color="#333"/>
    </linearGradient>
    <linearGradient id="dpadGradient" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#666"/>
      <stop offset="100%" stop-color="#2c2c2c"/>
    </linearGradient>
  </defs>

  <!-- Controller Body -->
  <path d="M80 90c10-30 60-40 120-40s110 10 120 40c10 25-5 80-30 100s-180 25-210 0-40-75-20-100z"
        fill="url(#bodyGradient)" stroke="#111" stroke-width="2" />

  <!-- Left Joystick -->
  <circle cx="120" cy="120" r="18" fill="url(#btnGradient)" stroke="#000" stroke-width="1"/>
  <circle cx="120" cy="120" r="6" fill="#000"/>

  <!-- Right Joystick -->
  <circle cx="280" cy="120" r="18" fill="url(#btnGradient)" stroke="#000" stroke-width="1"/>
  <circle cx="280" cy="120" r="6" fill="#000"/>

  <!-- D-Pad -->
  <g fill="url(#dpadGradient)" stroke="#111" stroke-width="1.5">
    <rect x="100" y="170" width="10" height="20" rx="2"/>
    <rect x="90" y="180" width="20" height="10" rx="2"/>
    <rect x="100" y="190" width="10" height="20" rx="2"/>
    <rect x="110" y="180" width="20" height="10" rx="2"/>
  </g>

  <!-- ABXY Buttons -->
  <circle cx="300" cy="160" r="9" fill="#f44336"/> <!-- B -->
  <circle cx="320" cy="140" r="9" fill="#2196F3"/> <!-- Y -->
  <circle cx="280" cy="140" r="9" fill="#4CAF50"/> <!-- X -->
  <circle cx="300" cy="120" r="9" fill="#FFEB3B"/> <!-- A -->

  <!-- Menu Buttons -->
  <rect x="190" y="100" width="8" height="4" rx="1" fill="#999"/>
  <rect x="202" y="100" width="8" height="4" rx="1" fill="#999"/>

  <!-- Xbox Button -->
  <circle cx="200" cy="80" r="12" fill="#eee" stroke="#ccc" stroke-width="1.5"/>
  <text x="193" y="85" font-size="10" font-family="Arial" fill="#111">X</text>
</svg>
`
}; 