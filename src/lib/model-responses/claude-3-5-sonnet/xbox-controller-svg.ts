import { ModelResponse } from "@/types/models";

export const xboxControllerSvgclaude_3_5_sonnet: ModelResponse = {
  id: "claude-3-5-sonnet-xbox-controller-svg",
  modelId: "claude-3-5-sonnet",
  prompt: "Create an SVG art of an Xbox controller with detailed buttons, joysticks, and d-pad. Use a modern, clean design style with subtle gradients.",
  responseDate: "2025-02-27",
  type: "svg",
  title: "Xbox Controller SVG Art",
  description: "Claude 3.5 Sonnet's response to the challenge of creating a detailed SVG illustration of an Xbox controller",
  content: `<svg width="400" height="300" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
  <!-- Definitions for gradients -->
  <defs>
    <linearGradient id="controllerBody" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#2a2a2a"/>
      <stop offset="100%" style="stop-color:#1a1a1a"/>
    </linearGradient>
    <radialGradient id="buttonGradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
      <stop offset="0%" style="stop-color:#404040"/>
      <stop offset="100%" style="stop-color:#303030"/>
    </radialGradient>
  </defs>

  <!-- Main controller body -->
  <path d="M100 100 C100 60, 300 60, 300 100 L320 180 C325 200, 325 220, 320 240 
           C310 270, 90 270, 80 240 C75 220, 75 200, 80 180 Z" 
        fill="url(#controllerBody)" stroke="#333" stroke-width="2"/>

  <!-- Left joystick -->
  <circle cx="150" cy="150" r="20" fill="url(#buttonGradient)" stroke="#444" stroke-width="2"/>
  <circle cx="150" cy="150" r="15" fill="#222" stroke="#444" stroke-width="1"/>

  <!-- Right joystick -->
  <circle cx="250" cy="190" r="20" fill="url(#buttonGradient)" stroke="#444" stroke-width="2"/>
  <circle cx="250" cy="190" r="15" fill="#222" stroke="#444" stroke-width="1"/>

  <!-- D-pad -->
  <rect x="120" y="190" width="40" height="10" rx="2" fill="#333"/>
  <rect x="135" y="175" width="10" height="40" rx="2" fill="#333"/>

  <!-- XYAB Buttons -->
  <circle cx="290" cy="150" r="12" fill="#1ea51e" stroke="#333"/>
  <circle cx="315" cy="150" r="12" fill="#cc2929" stroke="#333"/>
  <circle cx="302" cy="137" r="12" fill="#2929cc" stroke="#333"/>
  <circle cx="302" cy="163" r="12" fill="#cccc29" stroke="#333"/>

  <!-- Menu buttons -->
  <circle cx="200" cy="150" r="8" fill="#444" stroke="#333"/>
  <circle cx="220" cy="150" r="8" fill="#444" stroke="#333"/>

  <!-- Bumpers -->
  <path d="M120 90 Q140 85, 160 90" fill="none" stroke="#333" stroke-width="4"/>
  <path d="M240 90 Q260 85, 280 90" fill="none" stroke="#333" stroke-width="4"/>
</svg>`
}; 