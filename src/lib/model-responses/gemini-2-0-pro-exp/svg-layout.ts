import { ModelResponse } from "@/types/models";

export const svgLayoutgemini_2_0_pro_exp: ModelResponse = {
  id: "gemini-2-0-pro-exp-svg-layout",
  modelId: "gemini-2-0-pro-exp",
  prompt: "Generate an SVG of a pelican riding a bicycle.",
  responseDate: "2025-02-28",
  type: "svg",
  title: "SVG Layout Challenge",
  description: "Gemini 2.0 Pro Exp's response to the Tests an AI's ability to generate vector graphics",
  content: `<svg width="300" height="200" viewBox="0 0 300 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <!-- Bicycle -->
  <g id="bicycle">
    <!-- Frame -->
    <path d="M80 150 L120 100 L180 150 L80 150 Z" stroke="black" stroke-width="3"/>
    <path d="M120 100 L150 80" stroke="black" stroke-width="3"/>
    <path d="M100 150 L100 120" stroke="black" stroke-width="3" />  <!-- Seat post -->


    <!-- Wheels -->
    <circle cx="80" cy="150" r="20" stroke="black" stroke-width="3" fill="white"/>
    <circle cx="180" cy="150" r="20" stroke="black" stroke-width="3" fill="white"/>
    <circle cx="80" cy="150" r="2"  fill="black"/>
    <circle cx="180" cy="150" r="2" fill="black"/>


      <!-- Spokes (simplified) -->
      <line x1="80" y1="150" x2="90" y2="130" stroke="black" stroke-width="1" />
      <line x1="80" y1="150" x2="70" y2="130" stroke="black" stroke-width="1" />
      <line x1="80" y1="150" x2="90" y2="170" stroke="black" stroke-width="1" />
      <line x1="80" y1="150" x2="70" y2="170" stroke="black" stroke-width="1" />
      <line x1="180" y1="150" x2="190" y2="130" stroke="black" stroke-width="1" />
      <line x1="180" y1="150" x2="170" y2="130" stroke="black" stroke-width="1" />
      <line x1="180" y1="150" x2="190" y2="170" stroke="black" stroke-width="1" />
      <line x1="180" y1="150" x2="170" y2="170" stroke="black" stroke-width="1" />

    <!-- Handlebars -->
    <path d="M150 80 C 140 70, 160 70, 150 60" stroke="black" stroke-width="3"/>

    <!-- Pedals (simplified) -->
    <rect x="115" y="145" width="10" height="5" fill="black"/>  <!-- Pedal (right) -->
    <rect x="115" y="105" width="10" height="5" fill="black"/>   <!-- Pedal (left) -->
     <!-- Seat -->
    <rect x="95" y="115" width="15" height="5" fill="brown" />

  </g>

  <!-- Pelican -->
  <g id="pelican">
    <!-- Body -->
    <ellipse cx="120" cy="85" rx="25" ry="15" fill="white" stroke="black" stroke-width="2"/>

    <!-- Head -->
    <ellipse cx="145" cy="70" rx="15" ry="10" fill="white" stroke="black" stroke-width="2"/>
    <!-- Eye -->
       <circle cx="150" cy="68" r="2" fill="black" />

    <!-- Beak -->
    <path d="M160 70 L210 80 L180 110 Z" fill="orange" stroke="black" stroke-width="2"/>
    <!-- Pouch -->
      <path d="M180 110 C 170 125, 190 125, 210 80" stroke="orange" stroke-width="3" />


    <!-- Wing (one, as it's a side view) -->
    <path d="M120 85 C 100 95, 90 70, 100 60" fill="white" stroke="black" stroke-width="2"/>

    <!-- Feet (on pedals) -->
    <path d="M118 148 L123 153 L113 153 Z" fill="orange" stroke="black"/>
    <path d="M118 108 L123 113 L113 113 Z" fill="orange" stroke="black"/>


      <!-- Neck -->
        <path d="M145 70 C 130 60, 110 70, 120 85" stroke="black" stroke-width="2" />
  </g>

</svg>`
};
