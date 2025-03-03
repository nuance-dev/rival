import { ModelResponse } from "@/types/models";

export const svgLayoutdeepseek_r1: ModelResponse = {
  id: "deepseek-r1-svg-layout",
  modelId: "deepseek-r1",
  prompt: "Generate an SVG of a pelican riding a bicycle.",
  responseDate: "2025-02-27",
  type: "svg",
  title: "SVG Layout Challenge",
  description: "Deepseek R1's response to the Tests an AI's ability to generate vector graphics",
  content: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="400" height="300">
  <style>
    .wheel { fill: none; stroke: #333; stroke-width: 3; }
    .frame { stroke: #2a5c9a; stroke-width: 5; fill: none; }
    .seat { fill: #4a3728; }
    .pelican-body { fill: #f0f0f0; stroke: #333; stroke-width: 1; }
    .beak { fill: #ffd700; }
    .pouch { fill: #ff9999; }
  </style>
  
  <!-- Bicycle -->
  <circle class="wheel" cx="100" cy="200" r="40"/>
  <circle class="wheel" cx="300" cy="200" r="40"/>
  
  <!-- Spokes -->
  <g stroke="#ccc" stroke-width="1">
    <!-- Front wheel spokes -->
    <line x1="100" y1="200" x2="105" y2="160"/>
    <line x1="100" y1="200" x2="135" y2="170"/>
    <!-- Rear wheel spokes -->
    <line x1="300" y1="200" x2="305" y2="160"/>
    <line x1="300" y1="200" x2="335" y2="170"/>
  </g>
  
  <!-- Frame -->
  <path class="frame" d="M100 160 Q 150 120 200 140 L 220 160 Q 240 180 300 160"/>
  <rect class="seat" x="200" y="140" width="20" height="10" rx="3"/>
  
  <!-- Handlebars -->
  <path class="frame" d="M100 160 L 80 140 M100 160 L 120 140"/>
  
  <!-- Pedals -->
  <circle cx="220" cy="190" r="15" fill="#666"/>
  <circle cx="220" cy="190" r="5" fill="#ccc"/>
  
  <!-- Pelican -->
  <path class="pelican-body" d="M220 140 Q 240 100 260 140 T 300 160 Q 280 180 260 170"/>
  <path class="beak" d="M300 160 L 340 150 L 310 170 Z"/>
  <path class="pouch" d="M300 160 Q 315 165 310 170 Z"/>
  <circle cx="290" cy="150" r="3" fill="#333"/>
  
  <!-- Wings -->
  <path class="pelican-body" d="M240 150 Q 220 130 200 160"/>
  <path class="pelican-body" d="M260 160 Q 280 140 300 150"/>
  
  <!-- Tail -->
  <path class="pelican-body" d="M220 140 Q 200 150 190 160"/>
</svg>`
};
