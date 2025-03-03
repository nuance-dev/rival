import { ModelResponse } from "@/types/models";

export const xboxControllerSvggemini_2_0_pro_exp: ModelResponse = {
  id: "gemini-2-0-pro-exp-xbox-controller-svg",
  modelId: "gemini-2-0-pro-exp",
  prompt: "Create an SVG art of an Xbox controller with detailed buttons, joysticks, and d-pad. Use a modern, clean design style with subtle gradients.",
  responseDate: "2025-02-28",
  type: "svg",
  title: "Xbox Controller SVG Art",
  description: "Gemini 2.0 Pro Exp's response to the challenge of creating a detailed SVG illustration of an Xbox controller",
  content: `<svg width="400" height="250" viewBox="0 0 400 250" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bodyGradient" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#f0f0f0" />
      <stop offset="1" stop-color="#d0d0d0" />
    </linearGradient>
    <linearGradient id="buttonGradient" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#ffffff" />
      <stop offset="1" stop-color="#e0e0e0" />
    </linearGradient>
      <linearGradient id="blackButtonGradient" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#222222" />
      <stop offset="1" stop-color="#111111" />
    </linearGradient>
    <radialGradient id="joystickGradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
        <stop offset="0%" stop-color="#444444" />
        <stop offset="100%" stop-color="#222222" />
    </radialGradient>
      <radialGradient id="joystickTopGradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
          <stop offset="0%" stop-color="#666666"/>
          <stop offset="100%" stop-color="#444444"/>
      </radialGradient>
      <linearGradient id="dpadGradient" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="#333333" />
        <stop offset="1" stop-color="#111111" />
      </linearGradient>
  </defs>

  <!-- Controller Body -->
  <path d="M50 80 C 20 80, 20 170, 50 170 L 100 190 C 120 200, 280 200, 300 190 L 350 170 C 380 170, 380 80, 350 80 L 300 60 C 280 50, 120 50, 100 60 Z" fill="url(#bodyGradient)" stroke="#bbbbbb" stroke-width="2"/>


  <!-- Left Joystick -->
    <circle cx="100" cy="130" r="20" fill="url(#joystickGradient)" />
    <circle cx="100" cy="125" r="12" fill="url(#joystickTopGradient)" />


  <!-- Right Joystick -->
    <circle cx="300" cy="130" r="20" fill="url(#joystickGradient)" />
    <circle cx="300" cy="125" r="12" fill="url(#joystickTopGradient)" />



  <!-- D-Pad -->
  <path d="M160 100 L170 90 L180 100 L190 100 L190 110 L180 120 L170 110 L160 110 Z" fill="url(#dpadGradient)" />
    <rect x="170" y="80" width="10" height="30" rx="3" fill="url(#dpadGradient)"/> <!-- Up -->
  <rect x="170" y="110" width="10" height="30" rx="3" fill="url(#dpadGradient)"/> <!-- down -->
    <rect x="150" y="100" width="30" height="10" rx="3" fill="url(#dpadGradient)"/>
 <rect x="180" y="100" width="30" height="10" rx="3" fill="url(#dpadGradient)"/>

  <!-- A Button -->
  <circle cx="330" cy="95" r="12" fill="#4CAF50" stroke="#388E3C" stroke-width="1"/>
  <text x="330" y="99" font-family="Arial" font-size="12" fill="white" text-anchor="middle" dominant-baseline="middle">A</text>

  <!-- B Button -->
  <circle cx="355" cy="120" r="12" fill="#F44336" stroke="#D32F2F" stroke-width="1"/>
  <text x="355" y="124" font-family="Arial" font-size="12" fill="white" text-anchor="middle" dominant-baseline="middle">B</text>

  <!-- X Button -->
  <circle cx="305" cy="120" r="12" fill="#2196F3" stroke="#1976D2" stroke-width="1"/>
    <text x="305" y="124" font-family="Arial" font-size="12" fill="white" text-anchor="middle" dominant-baseline="middle">X</text>

  <!-- Y Button -->
  <circle cx="330" cy="145" r="12" fill="#FFEB3B" stroke="#FBC02D" stroke-width="1"/>
    <text x="330" y="149" font-family="Arial" font-size="12" fill="black" text-anchor="middle" dominant-baseline="middle">Y</text>



  <!-- Xbox Button -->
    <circle cx="200" cy="65" r="15" fill="url(#buttonGradient)" stroke="#999999" stroke-width="1"/>
      <path d="M 195 60 L 205 70 M 195 70 L 205 60 M 192 65 L 208 65" stroke="green" stroke-width="3" stroke-linecap="round"/>

    <!-- LB and RB Buttons -->
    <rect x="80" y="45" width="40" height="15" rx="5" fill="url(#blackButtonGradient)"/>
    <rect x="280" y="45" width="40" height="15" rx="5" fill="url(#blackButtonGradient)"/>

  <!-- LT and RT Triggers (Simplified) -->
  <rect x="50" y="35" width="50" height="12" rx="4" fill="url(#blackButtonGradient)" />
  <rect x="300" y="35" width="50" height="12" rx="4" fill="url(#blackButtonGradient)" />

      <!-- Start & Select -->
    <ellipse cx="160" cy="75" rx="8" ry="4"  fill="url(#blackButtonGradient)"/>
    <ellipse cx="240" cy="75" rx="8" ry="4"  fill="url(#blackButtonGradient)"/>
        <rect x="158" y="73" width="4" height="4" fill="white" rx="1"/>
        <rect x="238" y="73" width="4" height="4" fill="white" rx="1"/>


</svg>`
}; 