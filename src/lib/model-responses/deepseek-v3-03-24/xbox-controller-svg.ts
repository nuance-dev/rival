import { ModelResponse } from "@/types/models";

export const xboxUcontrollerUsvgdeepseek_v3_03_24: ModelResponse = {
  id: "deepseek-v3-03-24-xbox-controller-svg",
  modelId: "deepseek-v3-03-24",
  prompt: "Create an SVG art of an Xbox controller with detailed buttons, joysticks, and d-pad. Use a modern, clean design style with subtle gradients.",
  responseDate: "2025-03-30",
  type: "svg",
  title: "xbox-controller-svg",
  description: "DeepSeek V3 March 2024's response",
  content: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 300" width="600" height="300">
  <!-- Background gradient -->
  <defs>
    <linearGradient id="bodyGradient" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#107c10" />
      <stop offset="100%" stop-color="#004e00" />
    </linearGradient>
    <linearGradient id="buttonGradient" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#f0f0f0" />
      <stop offset="100%" stop-color="#d0d0d0" />
    </linearGradient>
    <linearGradient id="joystickGradient" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#888" />
      <stop offset="100%" stop-color="#555" />
    </linearGradient>
    <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="3" result="blur"/>
      <feComposite in="SourceGraphic" in2="blur" operator="over"/>
    </filter>
  </defs>
  
  <!-- Controller body -->
  <path d="M100,80 Q200,40 500,80 Q560,100 560,150 Q560,200 500,220 Q400,260 100,220 Q40,200 40,150 Q40,100 100,80 Z" 
        fill="url(#bodyGradient)" stroke="#003300" stroke-width="2"/>
  
  <!-- Grip textures -->
  <path d="M120,90 Q140,85 160,90 L160,210 Q140,215 120,210 Z" fill="#00000020" />
  <path d="M480,90 Q460,85 440,90 L440,210 Q460,215 480,210 Z" fill="#00000020" />
  
  <!-- Left joystick -->
  <circle cx="180" cy="140" r="30" fill="url(#joystickGradient)" stroke="#333" stroke-width="1" filter="url(#shadow)"/>
  <circle cx="180" cy="140" r="15" fill="#222" stroke="#111" stroke-width="1"/>
  <circle cx="180" cy="140" r="8" fill="#444" stroke="#222" stroke-width="1"/>
  
  <!-- Right joystick -->
  <circle cx="420" cy="140" r="30" fill="url(#joystickGradient)" stroke="#333" stroke-width="1" filter="url(#shadow)"/>
  <circle cx="420" cy="140" r="15" fill="#222" stroke="#111" stroke-width="1"/>
  <circle cx="420" cy="140" r="8" fill="#444" stroke="#222" stroke-width="1"/>
  
  <!-- D-pad -->
  <path d="M120,140 L140,120 L160,140 L140,160 Z" fill="#222" stroke="#111" stroke-width="1" filter="url(#shadow)"/>
  <path d="M130,140 L140,130 L150,140 L140,150 Z" fill="#444" stroke="#222" stroke-width="1"/>
  
  <!-- ABXY buttons -->
  <circle cx="360" cy="120" r="15" fill="#e00" stroke="#a00" stroke-width="1" filter="url(#shadow)"/>
  <circle cx="390" cy="100" r="15" fill="#00e" stroke="#00a" stroke-width="1" filter="url(#shadow)"/>
  <circle cx="360" cy="80" r="15" fill="#ee0" stroke="#aa0" stroke-width="1" filter="url(#shadow)"/>
  <circle cx="330" cy="100" r="15" fill="#0e0" stroke="#0a0" stroke-width="1" filter="url(#shadow)"/>
  
  <text x="360" y="125" font-size="12" font-weight="bold" text-anchor="middle" fill="white">B</text>
  <text x="390" y="105" font-size="12" font-weight="bold" text-anchor="middle" fill="white">X</text>
  <text x="360" y="85" font-size="12" font-weight="bold" text-anchor="middle" fill="white">Y</text>
  <text x="330" y="105" font-size="12" font-weight="bold" text-anchor="middle" fill="white">A</text>
  
  <!-- Menu/View buttons -->
  <circle cx="270" cy="140" r="8" fill="#222" stroke="#111" stroke-width="1" filter="url(#shadow)"/>
  <circle cx="330" cy="140" r="8" fill="#222" stroke="#111" stroke-width="1" filter="url(#shadow)"/>
  
  <!-- Bumpers -->
  <path d="M120,60 Q200,40 280,50 L280,70 Q200,60 120,70 Z" fill="#111" stroke="#000" stroke-width="1"/>
  <path d="M320,50 Q400,40 480,60 L480,80 Q400,60 320,70 Z" fill="#111" stroke="#000" stroke-width="1"/>
  
  <!-- Xbox button -->
  <circle cx="300" cy="140" r="20" fill="#fff" stroke="#ccc" stroke-width="1" filter="url(#shadow)"/>
  <path d="M295,130 L305,140 L295,150 Z" fill="#107c10"/>
  <circle cx="300" cy="140" r="5" fill="#107c10"/>
</svg>`
}; 