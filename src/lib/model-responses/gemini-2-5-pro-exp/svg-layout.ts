import { ModelResponse } from "@/types/models";

export const svgUlayoutgemini_2_5_pro_exp: ModelResponse = {
  id: "gemini-2-5-pro-exp-svg-layout",
  modelId: "gemini-2-5-pro-exp",
  prompt: "Generate an SVG of a pelican riding a bicycle.",
  responseDate: "2025-02-28",
  type: "text",
  title: "svg-layout",
  description: "Gemini 2.5 Pro Experimental's response",
  content: `<svg width="250" height="220" viewBox="0 0 250 220" xmlns="http://www.w3.org/2000/svg">
  <style>
    .bike-frame { fill: none; stroke: #0077cc; stroke-width: 6; stroke-linecap: round; stroke-linejoin: round; }
    .bike-parts { fill: #555; stroke: #333; stroke-width: 1; }
    .tires { fill: none; stroke: #333; stroke-width: 7; }
    .spokes { stroke: #888; stroke-width: 1; }
    .pelican-body { fill: #f0f0f0; stroke: #444; stroke-width: 2; stroke-linecap: round; stroke-linejoin: round; }
    .pelican-beak { fill: #ffaa00; stroke: #444; stroke-width: 2; stroke-linecap: round; stroke-linejoin: round; }
    .pelican-feet { fill: #ffaa00; stroke: #444; stroke-width: 1.5; }
    .eye { fill: #000; }
  </style>

  <!-- Bicycle -->
  <g id="bicycle">
    <!-- Wheels -->
    <circle class="tires" cx="60" cy="160" r="35"/>
    <circle class="tires" cx="190" cy="160" r="35"/>
    <!-- Spokes (simplified) -->
    <line class="spokes" x1="60" y1="160" x2="60" y2="125"/>
    <line class="spokes" x1="60" y1="160" x2="95" y2="160"/>
    <line class="spokes" x1="60" y1="160" x2="85" y2="185"/>
    <line class="spokes" x1="60" y1="160" x2="35" y2="185"/>
    <line class="spokes" x1="190" y1="160" x2="190" y2="125"/>
    <line class="spokes" x1="190" y1="160" x2="225" y2="160"/>
    <line class="spokes" x1="190" y1="160" x2="215" y2="185"/>
    <line class="spokes" x1="190" y1="160" x2="165" y2="185"/>

    <!-- Frame -->
    <path class="bike-frame" d="M 60 160 L 125 130 L 190 160"/> <!-- Rear stays -->
    <path class="bike-frame" d="M 125 130 L 140 85"/> <!-- Seat tube -->
    <path class="bike-frame" d="M 125 130 L 175 95"/> <!-- Top tube -->
    <path class="bike-frame" d="M 175 95 L 190 160"/> <!-- Down tube -->
    <path class="bike-frame" d="M 175 95 L 185 80"/> <!-- Head tube/Fork -->

    <!-- Handlebars -->
    <path class="bike-parts" stroke="#555" stroke-width="4" fill="none" d="M 175 70 Q 185 65 195 65" />
    <path class="bike-parts" stroke="#555" stroke-width="4" fill="none" d="M 175 70 Q 165 65 155 65" />
    <line class="bike-parts" x1="185" y1="80" x2="175" y2="70" stroke="#555" stroke-width="4" stroke-linecap="round"/> <!-- Stem -->

    <!-- Seat -->
    <ellipse class="bike-parts" cx="140" cy="80" rx="15" ry="6" fill="#604030"/>

    <!-- Pedals/Cranks -->
    <circle class="bike-parts" cx="125" cy="130" r="4" fill="#777"/> <!-- Bottom bracket -->
    <line class="bike-parts" x1="125" y1="130" x2="110" y2="145" stroke-width="3"/> <!-- Crank 1 -->
    <rect class="bike-parts" x="100" y="142" width="15" height="6" rx="2" fill="#444"/> <!-- Pedal 1 -->
    <line class="bike-parts" x1="125" y1="130" x2="140" y2="115" stroke-width="3"/> <!-- Crank 2 (opposite) -->
    <rect class="bike-parts" x="135" y="109" width="15" height="6" rx="2" fill="#444"/> <!-- Pedal 2 -->
  </g>

  <!-- Pelican -->
  <g id="pelican">
    <!-- Body -->
    <path class="pelican-body" d="M 140 85 C 110 90, 100 130, 140 145 C 180 130, 170 90, 140 85 Z"/>

    <!-- Neck -->
    <path class="pelican-body" fill="none" d="M 145 85 C 155 60, 170 50, 175 55"/>

    <!-- Head -->
    <ellipse class="pelican-body" cx="180" cy="48" rx="12" ry="14"/>

    <!-- Beak/Pouch -->
    <path class="pelican-beak" d="M 185 40 C 220 35, 235 60, 210 80 C 200 70, 190 50, 185 40 Z"/>
    <line x1="185" y1="40" x2="205" y2="55" stroke="#a0522d" stroke-width="1.5"/> <!-- Beak line -->

    <!-- Eye -->
    <circle class="eye" cx="178" cy="45" r="2.5"/>
    <circle cx="178.8" cy="44.2" r="0.8" fill="#fff"/> <!-- Highlight -->

    <!-- Wings (on handlebars) -->
    <path class="pelican-body" d="M 130 100 Q 145 75 160 68"/>
    <path class="pelican-body" d="M 150 100 Q 175 75 190 68"/>

    <!-- Legs -->
    <path class="pelican-body" fill="none" d="M 125 135 C 120 140, 113 145, 110 145"/>
    <path class="pelican-body" fill="none" d="M 145 130 C 145 125, 142 118, 140 115"/>

    <!-- Feet (on pedals) -->
    <path class="pelican-feet" d="M 108 145 C 100 142, 98 148, 105 151 C 110 150, 112 146, 108 145 Z"/> <!-- Foot 1 -->
    <path class="pelican-feet" d="M 140 115 C 135 110, 135 118, 143 117 C 148 116, 145 112, 140 115 Z"/> <!-- Foot 2 -->

  </g>

</svg>`
};
