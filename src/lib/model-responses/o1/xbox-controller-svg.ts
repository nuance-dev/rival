import { ModelResponse } from "@/types/models";

export const xboxControllerSvgo1: ModelResponse = {
  id: "o1-xbox-controller-svg",
  modelId: "o1",
  prompt: "Create an SVG art of an Xbox controller with detailed buttons, joysticks, and d-pad. Use a modern, clean design style with subtle gradients.",
  responseDate: "2025-02-28",
  type: "svg",
  title: "Xbox Controller SVG Art",
  description: "o1's response to the challenge of creating a detailed SVG illustration of an Xbox controller",
  content: `<!-- Modern, minimal Xbox Controller SVG -->
<svg
  version="1.1"
  xmlns="http://www.w3.org/2000/svg"
  width="300"
  height="200"
  viewBox="0 0 200 130"
  style="background:#fff"
>
  <!-- Define gradients in <defs> -->
  <defs>
    <!-- Main body gradient -->
    <linearGradient id="bodyGradient" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#4a4a4a" />
      <stop offset="100%" stop-color="#2c2c2c" />
    </linearGradient>

    <!-- Joystick gradient -->
    <radialGradient id="joystickGradient" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#666" />
      <stop offset="100%" stop-color="#3c3c3c" />
    </radialGradient>

    <!-- D-pad gradient -->
    <linearGradient id="dpadGradient" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#555" />
      <stop offset="100%" stop-color="#333" />
    </linearGradient>
    
    <!-- ABXY button base gradient -->
    <radialGradient id="abxyBaseGradient" cx="50%" cy="50%" r="70%">
      <stop offset="0%" stop-color="#444" />
      <stop offset="100%" stop-color="#222" />
    </radialGradient>
  </defs>

  <!-- 1) Controller Body -->
  <!-- A simplified shape with subtle curves to resemble the Xbox controller -->
  <path
    d="
      M30,65 
      C40,35,60,20,100,20
      C140,20,160,35,170,65
      C180,95,180,110,160,125
      C140,140,60,140,40,125
      C20,110,20,95,30,65
      Z
    "
    fill="url(#bodyGradient)"
    stroke="#222"
    stroke-width="2"
  />

  <!-- 2) Center Xbox Button -->
  <circle
    cx="100"
    cy="50"
    r="6"
    fill="#777"
    stroke="#000"
    stroke-width="1"
  />
  <!-- "X" label inside the Xbox button -->
  <text
    x="100"
    y="53"
    text-anchor="middle"
    fill="#fff"
    font-size="5"
    font-family="Arial, sans-serif"
    font-weight="bold"
  >
    X
  </text>

  <!-- 3) Start & Back buttons (small rectangles near center) -->
  <!-- Back button -->
  <rect
    x="83"
    y="42"
    width="6"
    height="3"
    fill="#555"
    stroke="#222"
    stroke-width="0.5"
    rx="1"
    ry="1"
  />
  <!-- Start button -->
  <rect
    x="111"
    y="42"
    width="6"
    height="3"
    fill="#555"
    stroke="#222"
    stroke-width="0.5"
    rx="1"
    ry="1"
  />

  <!-- 4) Left Joystick -->
  <!-- Outer circle -->
  <circle
    cx="60"
    cy="80"
    r="10"
    fill="url(#joystickGradient)"
    stroke="#111"
    stroke-width="1"
  />
  <!-- Inner (top) circle -->
  <circle
    cx="60"
    cy="80"
    r="5"
    fill="#222"
  />

  <!-- 5) Right Joystick -->
  <!-- Outer circle -->
  <circle
    cx="140"
    cy="80"
    r="10"
    fill="url(#joystickGradient)"
    stroke="#111"
    stroke-width="1"
  />
  <!-- Inner (top) circle -->
  <circle
    cx="140"
    cy="80"
    r="5"
    fill="#222"
  />

  <!-- 6) D-Pad (simple cross shape) -->
  <g transform="translate(45, 95)">
    <rect
      x="-5"
      y="-2"
      width="10"
      height="4"
      fill="url(#dpadGradient)"
      stroke="#111"
      stroke-width="0.5"
      rx="1"
      ry="1"
    />
    <rect
      x="-2"
      y="-5"
      width="4"
      height="10"
      fill="url(#dpadGradient)"
      stroke="#111"
      stroke-width="0.5"
      rx="1"
      ry="1"
    />
  </g>

  <!-- 7) ABXY Buttons -->
  <!-- A -->
  <circle
    cx="150"
    cy="70"
    r="5"
    fill="url(#abxyBaseGradient)"
    stroke="#000"
    stroke-width="0.5"
  />
  <text
    x="150"
    y="73"
    text-anchor="middle"
    fill="#0f0"
    font-size="4"
    font-weight="bold"
    font-family="Arial, sans-serif"
  >
    A
  </text>

  <!-- B -->
  <circle
    cx="160"
    cy="65"
    r="5"
    fill="url(#abxyBaseGradient)"
    stroke="#000"
    stroke-width="0.5"
  />
  <text
    x="160"
    y="68"
    text-anchor="middle"
    fill="#f00"
    font-size="4"
    font-weight="bold"
    font-family="Arial, sans-serif"
  >
    B
  </text>

  <!-- X -->
  <circle
    cx="140"
    cy="60"
    r="5"
    fill="url(#abxyBaseGradient)"
    stroke="#000"
    stroke-width="0.5"
  />
  <text
    x="140"
    y="63"
    text-anchor="middle"
    fill="#00f"
    font-size="4"
    font-weight="bold"
    font-family="Arial, sans-serif"
  >
    X
  </text>

  <!-- Y -->
  <circle
    cx="150"
    cy="55"
    r="5"
    fill="url(#abxyBaseGradient)"
    stroke="#000"
    stroke-width="0.5"
  />
  <text
    x="150"
    y="58"
    text-anchor="middle"
    fill="#ff0"
    font-size="4"
    font-weight="bold"
    font-family="Arial, sans-serif"
  >
    Y
  </text>

</svg>
`
}; 