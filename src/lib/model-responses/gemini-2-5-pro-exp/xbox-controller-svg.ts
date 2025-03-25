import { ModelResponse } from "@/types/models";

export const xboxUcontrollerUsvggemini_2_5_pro_exp: ModelResponse = {
  id: "gemini-2-5-pro-exp-xbox-controller-svg",
  modelId: "gemini-2-5-pro-exp",
  prompt: "Create an SVG art of an Xbox controller with detailed buttons, joysticks, and d-pad. Use a modern, clean design style with subtle gradients.",
  responseDate: "2025-03-25",
  type: "text",
  title: "xbox-controller-svg",
  description: "Gemini 2.5 Pro Experimental's response",
  content: `<svg width="400" height="300" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">

  <defs>
    <!-- Subtle gradient for the main body -->
    <linearGradient id="bodyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:#404040; stop-opacity:1" />
      <stop offset="100%" style="stop-color:#282828; stop-opacity:1" />
    </linearGradient>

    <!-- Gradient for joysticks and d-pad dish -->
    <radialGradient id="joystickTopGradient" cx="50%" cy="50%" r="50%" fx="50%" fy="30%">
      <stop offset="0%" style="stop-color:#555; stop-opacity:1" />
      <stop offset="100%" style="stop-color:#303030; stop-opacity:1" />
    </radialGradient>

     <radialGradient id="dpadDishGradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
      <stop offset="0%" style="stop-color:#3a3a3a; stop-opacity:1" />
      <stop offset="80%" style="stop-color:#2a2a2a; stop-opacity:1" />
      <stop offset="100%" style="stop-color:#202020; stop-opacity:1" />
    </radialGradient>

    <!-- Gradient for D-pad cross -->
    <linearGradient id="dpadCrossGradient" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:#505050;" />
      <stop offset="100%" style="stop-color:#383838;" />
    </linearGradient>

    <!-- Subtle gradient for ABXY buttons -->
    <radialGradient id="buttonGradient" cx="50%" cy="50%" r="50%" fx="50%" fy="40%">
      <stop offset="0%" style="stop-color:rgba(255,255,255,0.2); stop-opacity:1" />
      <stop offset="100%" style="stop-color:rgba(0,0,0,0.2); stop-opacity:1" />
    </radialGradient>

    <!-- Xbox button glow -->
     <radialGradient id="xboxGlow" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
      <stop offset="0%" style="stop-color:#FFFFFF; stop-opacity:0.9" />
      <stop offset="60%" style="stop-color:#E0E0E0; stop-opacity:0.8" />
      <stop offset="100%" style="stop-color:#C0C0C0; stop-opacity:0.5" />
    </radialGradient>
  </defs>

  <!-- Main Controller Body -->
  <path id="controllerBody" d="M 60,100 
           C 20,100 10,140 10,180
           C 10,240 40,280 90,280
           L 120,280
           C 140,275 160,260 170,240
           L 190,190
           L 210,190
           C 240,260 260,275 280,280
           L 310,280
           C 360,280 390,240 390,180
           C 390,140 380,100 340,100
           L 300,100
           C 280,95 265,85 250,70
           L 230,55
           C 215,45 200,45 185,50 -- Corrected point for symmetry
           L 150,70 -- Corrected point for symmetry
           C 135,85 120,95 100,100
           Z" 
        fill="url(#bodyGradient)" stroke="#181818" stroke-width="1.5"/>

  <!-- Left Joystick -->
  <g id="leftJoystick" transform="translate(105, 175)">
    <circle cx="0" cy="0" r="28" fill="#202020" />
    <circle cx="0" cy="0" r="25" fill="url(#joystickTopGradient)" />
    <!-- Subtle texture -->
    <circle cx="0" cy="0" r="23" fill="none" stroke="#444" stroke-width="0.5" stroke-dasharray="1 1"/>
  </g>

  <!-- Right Joystick -->
  <g id="rightJoystick" transform="translate(245, 175)">
    <circle cx="0" cy="0" r="28" fill="#202020" />
    <circle cx="0" cy="0" r="25" fill="url(#joystickTopGradient)" />
    <circle cx="0" cy="0" r="23" fill="none" stroke="#444" stroke-width="0.5" stroke-dasharray="1 1"/>
  </g>

  <!-- D-Pad -->
  <g id="dpad" transform="translate(165, 175)">
     <!-- Dish base -->
     <circle cx="0" cy="0" r="28" fill="url(#dpadDishGradient)" />
     <!-- Cross -->
     <path d="M -20, -7 L -7, -7 L -7, -20 L 7, -20 L 7, -7 L 20, -7 
              L 20, 7 L 7, 7 L 7, 20 L -7, 20 L -7, 7 L -20, 7 Z"
           fill="url(#dpadCrossGradient)" stroke="#222" stroke-width="0.5"/>
  </g>

  <!-- ABXY Buttons -->
  <g id="faceButtons" transform="translate(300, 135)">
     <!-- Y Button -->
     <g transform="translate(0, -25)">
       <circle cx="0" cy="0" r="12" fill="#FFB900" /> 
       <circle cx="0" cy="0" r="12" fill="url(#buttonGradient)" />
       <text x="0" y="4" font-size="12" fill="#222" text-anchor="middle" font-weight="bold">Y</text>
     </g>
     <!-- X Button -->
     <g transform="translate(-25, 0)">
       <circle cx="0" cy="0" r="12" fill="#0078D7" />
       <circle cx="0" cy="0" r="12" fill="url(#buttonGradient)" />
       <text x="0" y="4" font-size="12" fill="#FFF" text-anchor="middle" font-weight="bold">X</text>
     </g>
     <!-- B Button -->
      <g transform="translate(25, 0)">
       <circle cx="0" cy="0" r="12" fill="#E81123" />
       <circle cx="0" cy="0" r="12" fill="url(#buttonGradient)" />
       <text x="0" y="4" font-size="12" fill="#FFF" text-anchor="middle" font-weight="bold">B</text>
     </g>
     <!-- A Button -->
      <g transform="translate(0, 25)">
       <circle cx="0" cy="0" r="12" fill="#107C10" />
       <circle cx="0" cy="0" r="12" fill="url(#buttonGradient)" />
       <text x="0" y="4" font-size="12" fill="#FFF" text-anchor="middle" font-weight="bold">A</text>
     </g>
  </g>

  <!-- Center Buttons -->
  <g id="centerButtons" transform="translate(200, 130)">
    <!-- View Button (Left) -->
    <g id="viewButton" transform="translate(-35, 0)">
        <circle cx="0" cy="0" r="8" fill="#333"/>
        <path d="M -4 -2 L 0 -2 L 0 2 L -4 2 Z M 1 -3 L 5 -3 L 5 1 L 1 1 Z" fill="#ccc" stroke="#ccc" stroke-width="0.5" transform="translate(-0.5, 0.5)"/>
    </g>

    <!-- Xbox/Guide Button (Center) -->
    <g id="xboxButton" transform="translate(0, -15)">
      <circle cx="0" cy="0" r="15" fill="#111"/>
      <circle cx="0" cy="0" r="13" fill="url(#xboxGlow)" />
      <!-- Xbox Logo 'X' -->
      <path d="M -6,-6 L -2,-6 L 0,-2 L 2,-6 L 6,-6 
               L 1,-1 L 6,4 L 2,4 L 0,1 L -2,4 L -6,4
               L -1,-1 Z" 
            fill="#333" transform="scale(1.1)" />
    </g>

    <!-- Menu Button (Right) -->
     <g id="menuButton" transform="translate(35, 0)">
        <circle cx="0" cy="0" r="8" fill="#333"/>
        <path d="M -4 -3 L 4 -3 M -4 0 L 4 0 M -4 3 L 4 3" stroke="#ccc" stroke-width="1.2" stroke-linecap="round"/>
     </g>

    <!-- Share Button (Below Xbox Button) -->
    <g id="shareButton" transform="translate(0, 15)">
        <circle cx="0" cy="0" r="8" fill="#333"/>
        <!-- Upload icon -->
        <path d="M -3,1 L 3,1 L 3,4 L -3,4 Z M 0,-4 L -3,0 L 3,0 Z" fill="#ccc"/>
    </g>
  </g>

   <!-- Shoulder Buttons (simplified representation) -->
   <g id="shoulderButtons">
     <path d="M 100 100 Q 120 85, 150 75 L 160 78 Q 130 95, 105 102 Z" fill="#383838"/>
     <path d="M 300 100 Q 280 85, 250 75 L 240 78 Q 270 95, 295 102 Z" fill="#383838"/>
   </g>

   <!-- Triggers (simplified representation) -->
   <g id="triggers">
      <path d="M 80 95 C 70 90, 60 90, 50 95 L 40 110 C 50 110, 65 115, 80 105 Z" fill="#444"/>
      <path d="M 320 95 C 330 90, 340 90, 350 95 L 360 110 C 350 110, 335 115, 320 105 Z" fill="#444"/>
   </g>

</svg>`
};
