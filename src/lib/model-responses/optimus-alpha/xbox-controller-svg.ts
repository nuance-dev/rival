import { ModelResponse } from "@/types/models";

export const xboxControllerSvgResponse: ModelResponse = {
  id: "optimus-alpha-xbox-controller-svg",
  modelId: "optimus-alpha",
  prompt: "Create an SVG art of an Xbox controller with detailed buttons, joysticks, and d-pad. Use a modern, clean design style with subtle gradients.",
  responseDate: "2025-04-10",
  title: "Xbox Controller SVG",
  description: "Generates a detailed SVG illustration of an Xbox controller.",
  type: "svg",
  content: `<svg viewBox="0 0 600 350" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- Controller Body Gradient -->
    <linearGradient id="bodyGrad" x1="100" y1="80" x2="500" y2="340" gradientUnits="userSpaceOnUse">
      <stop stop-color="#e3e6ea"/>
      <stop offset="1" stop-color="#c7cbd1"/>
    </linearGradient>
    <!-- Joystick inner Gradient -->
    <radialGradient id="joyGrad" cx="0.5" cy="0.5" r="0.5" fx="0.4" fy="0.4">
      <stop offset="0%" stop-color="#2f3237"/>
      <stop offset="100%" stop-color="#16181a"/>
    </radialGradient>
    <!-- Button face gradient -->
    <linearGradient id="btnFaceGrad" x1="0" y1="0" x2="1" y2="1">
      <stop stop-color="#fafbfc"/>
      <stop offset="1" stop-color="#e1e2e4"/>
    </linearGradient>
    <!-- DPad Gradient -->
    <linearGradient id="dpadGrad" x1="0" y1="18" x2="37" y2="18" gradientUnits="userSpaceOnUse">
      <stop stop-color="#98999d"/>
      <stop offset="1" stop-color="#56565b"/>
    </linearGradient>
    <!-- Face Buttons Gradients -->
    <linearGradient id="btnYellow" x1="0" y1="0" x2="1" y2="1">
      <stop stop-color="#ffe780"/>
      <stop offset="1" stop-color="#dfa600"/>
    </linearGradient>
    <linearGradient id="btnRed" x1="0" y1="0" x2="1" y2="1">
      <stop stop-color="#ffadad"/>
      <stop offset="1" stop-color="#c70000"/>
    </linearGradient>
    <linearGradient id="btnBlue" x1="0" y1="0" x2="1" y2="1">
      <stop stop-color="#a6d6ff"/>
      <stop offset="1" stop-color="#0056b7"/>
    </linearGradient>
    <linearGradient id="btnGreen" x1="0" y1="0" x2="1" y2="1">
      <stop stop-color="#8eea86"/>
      <stop offset="1" stop-color="#00ad35"/>
    </linearGradient>
  </defs>

  <!-- Controller Body -->
  <path d="M127 315c-37.5-10-72-74-94-131C16 139 69 89 111 82c55-10 117 5 189 5s134-15 189-5c42 7 95 57 78 102-22 57-56.5 121-94 131-20.5 5.5-45 2-77-17-34.5-20.5-81-19.5-96-19.5s-61.5-1-96 19.5c-32 19-56.5 22.5-77 17z"
        fill="url(#bodyGrad)" stroke="#b2b4ba" stroke-width="3"/>

  <!-- Center Xbox Button -->
  <ellipse cx="300" cy="98" rx="24" ry="19" fill="#ececec" stroke="#bdbdbd" stroke-width="2"/>
  <ellipse cx="300" cy="98" rx="9" ry="7" fill="#9ee769" stroke="#5ac73a" stroke-width="1"/>
  <!-- Light reflection -->
  <ellipse cx="295" cy="93" rx="7" ry="4" fill="#ffffff" fill-opacity="0.4"/>

  <!-- Left Joystick -->
  <g>
    <ellipse cx="145" cy="142" rx="28" ry="28" fill="#414447" filter="url(#shadow1)"/>
    <ellipse cx="145" cy="142" rx="21" ry="21" fill="url(#joyGrad)"/>
    <ellipse cx="145" cy="142" rx="10" ry="8" fill="#575b60" opacity="0.5"/>
  </g>

  <!-- Right Joystick -->
  <g>
    <ellipse cx="455" cy="155" rx="28" ry="28" fill="#414447"/>
    <ellipse cx="455" cy="155" rx="21" ry="21" fill="url(#joyGrad)"/>
    <ellipse cx="455" cy="155" rx="10" ry="8" fill="#575b60" opacity="0.5"/>
  </g>

  <!-- D-Pad -->
  <g transform="translate(203,222)">
    <rect x="7" y="0" width="23" height="37" rx="6" fill="url(#dpadGrad)" stroke="#35353b"/>
    <rect x="0" y="7" width="37" height="23" rx="6" fill="url(#dpadGrad)" stroke="#35353b"/>
    <circle cx="18.5" cy="18.5" r="8" fill="#636368" stroke="#35353b" stroke-width="2"/>
  </g>

  <!-- ABXY Face Buttons -->
  <!-- Y -->
  <g>
    <circle cx="495" cy="108" r="14" fill="url(#btnYellow)" stroke="#b99705" stroke-width="2"/>
    <text x="495" y="113" font-family="Segoe UI, Arial" font-size="15" text-anchor="middle" font-weight="bold" fill="#333" pointer-events="none">Y</text>
  </g>
  <!-- B -->
  <g>
    <circle cx="530" cy="140" r="14" fill="url(#btnRed)" stroke="#9c2d1b" stroke-width="2"/>
    <text x="530" y="145" font-family="Segoe UI, Arial" font-size="15" text-anchor="middle" font-weight="bold" fill="#333" pointer-events="none">B</text>
  </g>
  <!-- X -->
  <g>
    <circle cx="460" cy="117" r="14" fill="url(#btnBlue)" stroke="#2670b7" stroke-width="2"/>
    <text x="460" y="123" font-family="Segoe UI, Arial" font-size="15" text-anchor="middle" font-weight="bold" fill="#333" pointer-events="none">X</text>
  </g>
  <!-- A -->
  <g>
    <circle cx="492" cy="177" r="14" fill="url(#btnGreen)" stroke="#278b37" stroke-width="2"/>
    <text x="492" y="182" font-family="Segoe UI, Arial" font-size="15" text-anchor="middle" font-weight="bold" fill="#333" pointer-events="none">A</text>
  </g>

  <!-- Menu and View Buttons -->
  <ellipse cx="255" cy="108" rx="8" ry="5" fill="url(#btnFaceGrad)" stroke="#b8b9bb" stroke-width="1"/>
  <ellipse cx="345" cy="108" rx="8" ry="5" fill="url(#btnFaceGrad)" stroke="#b8b9bb" stroke-width="1"/>
  <!-- Menu Icon (lines) -->
  <g>
    <rect x="252" y="106" width="6" height="1" fill="#9a9a9c"/>
    <rect x="252" y="108" width="6" height="1" fill="#9a9a9c"/>
    <rect x="252" y="110" width="4" height="1" fill="#9a9a9c"/>
  </g>
  <!-- View Icon (two squares) -->
  <g>
    <rect x="341" y="107" width="3" height="3" fill="#9a9a9c"/>
    <rect x="344" y="109" width="3" height="3" fill="#9a9a9c"/>
  </g>

  <!-- Bumpers (SL and SR, subtle) -->
  <rect x="152" y="69" width="90" height="17" rx="8.5" fill="#e9ebef" opacity="0.7"/>
  <rect x="358" y="69" width="90" height="17" rx="8.5" fill="#e9ebef" opacity="0.7"/>

  <!-- Start/Select Hints (just subtle lines) -->
  <ellipse cx="218" cy="94" rx="5" ry="3" fill="#d5d6d9" opacity="0.8"/>
  <ellipse cx="382" cy="94" rx="5" ry="3" fill="#d5d6d9" opacity="0.8"/>

  <!-- Decorative Shadows -->
  <filter id="shadow1" x="-50%" y="-50%" width="200%" height="200%">
    <feDropShadow dx="0" dy="2" stdDeviation="2" flood-color="#aaa" flood-opacity="0.25"/>
  </filter>
</svg>
`
}; 