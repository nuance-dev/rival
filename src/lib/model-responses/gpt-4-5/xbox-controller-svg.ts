import { ModelResponse } from "@/types/models";

export const xboxControllerSvggpt_4_5: ModelResponse = {
  id: "gpt-4-5-xbox-controller-svg",
  modelId: "gpt-4-5",
  prompt: "Create an SVG art of an Xbox controller with detailed buttons, joysticks, and d-pad. Use a modern, clean design style with subtle gradients.",
  responseDate: "2025-03-01",
  type: "svg",
  title: "Xbox Controller SVG Art",
  description: "GPT-4.5's response to the challenge of creating a detailed SVG illustration of an Xbox controller",
  content: `<svg width="400" height="250" viewBox="0 0 400 250" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- Gradients -->
    <linearGradient id="controllerGradient" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#f0f0f0"/>
      <stop offset="100%" stop-color="#cccccc"/>
    </linearGradient>
    <radialGradient id="buttonGradient" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#ffffff"/>
      <stop offset="100%" stop-color="#888888"/>
    </radialGradient>
    <radialGradient id="joystickGradient" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#555555"/>
      <stop offset="100%" stop-color="#222222"/>
    </radialGradient>
  </defs>

  <!-- Controller Body -->
  <rect x="20" y="40" rx="60" ry="60" width="360" height="170" fill="url(#controllerGradient)" stroke="#bbb" stroke-width="2"/>

  <!-- Left Joystick -->
  <circle cx="120" cy="120" r="30" fill="url(#joystickGradient)" stroke="#333" stroke-width="2"/>

  <!-- Right Joystick -->
  <circle cx="280" cy="160" r="30" fill="url(#joystickGradient)" stroke="#333" stroke-width="2"/>

  <!-- D-Pad -->
  <g fill="#444">
    <rect x="70" y="160" width="15" height="40" rx="3"/>
    <rect x="57.5" y="172.5" width="40" height="15" rx="3"/>
  </g>

  <!-- ABXY Buttons -->
  <g>
    <circle cx="330" cy="100" r="12" fill="url(#buttonGradient)" stroke="#555" stroke-width="1.5"/>
    <text x="330" y="104" font-size="10" font-family="Arial" fill="#333" text-anchor="middle">Y</text>

    <circle cx="355" cy="125" r="12" fill="url(#buttonGradient)" stroke="#555" stroke-width="1.5"/>
    <text x="355" y="129" font-size="10" font-family="Arial" fill="#333" text-anchor="middle">B</text>

    <circle cx="305" cy="125" r="12" fill="url(#buttonGradient)" stroke="#555" stroke-width="1.5"/>
    <text x="305" y="129" font-size="10" font-family="Arial" fill="#333" text-anchor="middle">X</text>

    <circle cx="330" cy="150" r="12" fill="url(#buttonGradient)" stroke="#555" stroke-width="1.5"/>
    <text x="330" y="154" font-size="10" font-family="Arial" fill="#333" text-anchor="middle">A</text>
  </g>

  <!-- Xbox Button -->
  <circle cx="200" cy="90" r="15" fill="#fff" stroke="#aaa" stroke-width="2"/>
  <text x="200" y="95" font-size="12" font-family="Arial" fill="#555" text-anchor="middle">X</text>

  <!-- Menu and View Buttons -->
  <circle cx="170" cy="120" r="6" fill="#888"/>
  <circle cx="230" cy="120" r="6" fill="#888"/>

  <!-- Shoulder Buttons -->
  <rect x="60" y="30" width="100" height="15" rx="7" fill="#bbb"/>
  <rect x="240" y="30" width="100" height="15" rx="7" fill="#bbb"/>
</svg>`
}; 