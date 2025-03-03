import { ModelResponse } from "@/types/models";

export const xboxControllerSvggpt_4o: ModelResponse = {
  id: "gpt-4o-xbox-controller-svg",
  modelId: "gpt-4o",
  prompt: "Create an SVG art of an Xbox controller with detailed buttons, joysticks, and d-pad. Use a modern, clean design style with subtle gradients.",
  responseDate: "2025-02-28",
  type: "svg",
  title: "Xbox Controller SVG Art",
  description: "GPT-4o's response to the challenge of creating a detailed SVG illustration of an Xbox controller",
  content: `<svg viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg">
  <!-- Controller body -->
  <path d="M150,150 Q100,50 200,80 T400,80 Q500,50 450,150 T400,300 H200 Q150,300 150,150" fill="url(#bodyGradient)" stroke="#222" stroke-width="5"/>
  
  <!-- Gradients -->
  <defs>
    <linearGradient id="bodyGradient" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#333"/>
      <stop offset="100%" stop-color="#222"/>
    </linearGradient>
  </defs>
  
  <!-- Left Joystick -->
  <circle cx="180" cy="170" r="30" fill="#444" stroke="#222" stroke-width="4"/>
  <circle cx="180" cy="170" r="15" fill="#222"/>
  
  <!-- Right Joystick -->
  <circle cx="380" cy="200" r="30" fill="#444" stroke="#222" stroke-width="4"/>
  <circle cx="380" cy="200" r="15" fill="#222"/>
  
  <!-- D-pad -->
  <rect x="150" y="230" width="20" height="50" fill="#555"/>
  <rect x="135" y="245" width="50" height="20" fill="#555"/>
  
  <!-- ABXY Buttons -->
  <circle cx="440" cy="160" r="18" fill="#ff4747" stroke="#222" stroke-width="3"/>
  <circle cx="470" cy="190" r="18" fill="#47ff47" stroke="#222" stroke-width="3"/>
  <circle cx="440" cy="220" r="18" fill="#4747ff" stroke="#222" stroke-width="3"/>
  <circle cx="410" cy="190" r="18" fill="#ffff47" stroke="#222" stroke-width="3"/>
  
  <!-- Small Buttons (View & Menu) -->
  <circle cx="280" cy="150" r="10" fill="#666"/>
  <circle cx="320" cy="150" r="10" fill="#666"/>
  
  <!-- Xbox Button -->
  <circle cx="300" cy="120" r="15" fill="white" stroke="#222" stroke-width="3"/>
  <text x="292" y="125" font-size="12" fill="black" font-family="Arial" font-weight="bold">X</text>
</svg>
`
}; 