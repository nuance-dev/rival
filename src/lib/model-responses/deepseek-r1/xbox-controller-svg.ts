import { ModelResponse } from "@/types/models";

export const xboxControllerSvgdeepseek_r1: ModelResponse = {
  id: "deepseek-r1-xbox-controller-svg",
  modelId: "deepseek-r1",
  prompt: "Create an SVG art of an Xbox controller with detailed buttons, joysticks, and d-pad. Use a modern, clean design style with subtle gradients.",
  responseDate: "2025-02-27",
  type: "svg",
  title: "Xbox Controller SVG Art",
  description: "Deepseek R1's response to the challenge of creating a detailed SVG illustration of an Xbox controller",
  content: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 300" width="600" height="300">
    <defs>
        <linearGradient id="bodyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#333" />
            <stop offset="100%" stop-color="#1a1a1a" />
        </linearGradient>
        <linearGradient id="buttonGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#666" />
            <stop offset="100%" stop-color="#444" />
        </linearGradient>
    </defs>

    <!-- Main Body -->
    <path d="M80 50h440q30 0 30 30v140q0 30-30 30H80q-30 0-30-30V80q0-30 30-30z" 
          fill="url(#bodyGrad)" rx="30" ry="30"/>
    
    <!-- Handles -->
    <ellipse cx="120" cy="150" rx="60" ry="90" fill="#2a2a2a"/>
    <ellipse cx="480" cy="150" rx="60" ry="90" fill="#2a2a2a"/>
    
    <!-- ABXY Buttons -->
    <g transform="translate(400,100)">
        <circle r="20" fill="#00ff00" filter="url(#buttonShadow)"/>
        <text x="0" y="6" text-anchor="middle" fill="white" font-size="18">A</text>
    </g>
    <g transform="translate(440,70)">
        <circle r="20" fill="#ff0000"/>
        <text x="0" y="6" text-anchor="middle" fill="white" font-size="18">B</text>
    </g>
    <g transform="translate(360,70)">
        <circle r="20" fill="#0000ff"/>
        <text x="0" y="6" text-anchor="middle" fill="white" font-size="18">X</text>
    </g>
    <g transform="translate(400,40)">
        <circle r="20" fill="#ffff00"/>
        <text x="0" y="6" text-anchor="middle" fill="black" font-size="18">Y</text>
    </g>

    <!-- D-Pad -->
    <g transform="translate(150,100)">
        <rect x="-25" y="-10" width="50" height="20" rx="5" fill="url(#buttonGrad)"/>
        <rect x="-10" y="-25" width="20" height="50" rx="5" fill="url(#buttonGrad)"/>
    </g>

    <!-- Joysticks -->
    <g transform="translate(200,180)">
        <circle r="35" fill="#404040"/>
        <circle cx="0" cy="-15" r="15" fill="#666"/>
    </g>
    <g transform="translate(400,180)">
        <circle r="35" fill="#404040"/>
        <circle cx="0" cy="-15" r="15" fill="#666"/>
    </g>

    <!-- Xbox Button -->
    <circle cx="300" cy="150" r="25" fill="#107c10"/>
    <path d="M300 135l-10 15 10 15 10-15z" fill="white"/>

    <!-- Bumpers -->
    <path d="M80 30h440l-20 20H100z" fill="#404040"/>
    <path d="M80 270h440l-20-20H100z" fill="#404040"/>
</svg>`
}; 