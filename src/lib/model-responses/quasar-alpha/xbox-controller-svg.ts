import { ModelResponse } from "@/types/models";

export const xboxControllerSvgquasar_alpha: ModelResponse = {
  id: "quasar-alpha-xbox-controller-svg",
  modelId: "quasar-alpha",
  prompt: "Create an SVG art of an Xbox controller with detailed buttons, joysticks, and d-pad. Use a modern, clean design style with subtle gradients.",
  responseDate: "2025-04-04",
  type: "svg",
  title: "Xbox Controller SVG Art",
  description: "Quasar Alpha's response to the challenge of creating a detailed SVG illustration of an Xbox controller",
  content: `<svg viewBox="0 0 800 500" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <!-- Background -->
  <rect width="800" height="500" fill="#f0f0f0"/>
  
  <!-- Controller body -->
  <defs>
    <linearGradient id="bodyGradient" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#e0e0e0"/>
      <stop offset="100%" stop-color="#c2c2c2"/>
    </linearGradient>
    <radialGradient id="shadowGradient" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#000" stop-opacity="0.1"/>
      <stop offset="100%" stop-color="#000" stop-opacity="0"/>
    </radialGradient>
  </defs>
  
  <ellipse cx="400" cy="330" rx="250" ry="40" fill="url(#shadowGradient)" />
  
  <path d="M210,150 
           q-50,50 -60,120 
           q10,70 60,90 
           q50,20 90,-30 
           q50,40 100,0 
           q40,50 90,30 
           q50,-20 60,-90 
           q-10,-70 -60,-120 
           q-50,-50 -110,-30 
           q-60,-20 -110,30z" fill="url(#bodyGradient)" stroke="#999" stroke-width="3"/>
  
  <!-- Joysticks -->
  <circle cx="300" cy="250" r="28" fill="#444"/>
  <circle cx="300" cy="250" r="12" fill="#666"/>

  <circle cx="500" cy="250" r="28" fill="#444"/>
  <circle cx="500" cy="250" r="12" fill="#666"/>
  
  <!-- D-Pad -->
  <circle cx="240" cy="320" r="24" fill="#333"/>
  <rect x="235" y="307" width="10" height="26" fill="#555" rx="2"/>
  <rect x="227" y="315" width="26" height="10" fill="#555" rx="2"/>
  
  <!-- ABXY Buttons -->
  <circle cx="560" cy="310" r="18" fill="#a72626"/>
  <text x="560" y="317" text-anchor="middle" fill="#fff" font-size="16" font-weight="bold">B</text>
  
  <circle cx="540" cy="290" r="18" fill="#2766a7"/>
  <text x="540" y="297" text-anchor="middle" fill="#fff" font-size="16" font-weight="bold">X</text>
  
  <circle cx="560" cy="270" r="18" fill="#26a735"/>
  <text x="560" y="277" text-anchor="middle" fill="#fff" font-size="16" font-weight="bold">Y</text>
  
  <circle cx="580" cy="290" r="18" fill="#e6c228"/>
  <text x="580" y="297" text-anchor="middle" fill="#fff" font-size="16" font-weight="bold">A</text>
  
  <!-- Xbox button -->
  <circle cx="400" cy="200" r="22" fill="#444" stroke="#888" stroke-width="2"/>
  <text x="400" y="206" fill="#fff" text-anchor="middle" font-size="18" font-weight="bold">⨁</text>
  
  <!-- Menu buttons -->
  <rect x="365" y="230" width="12" height="4" fill="#666" rx="1"/>
  <circle cx="425" cy="232" r="5" fill="#666"/>
  
</svg>
`
}; 