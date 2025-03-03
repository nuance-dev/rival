import { ModelResponse } from "@/types/models";

export const worldMapSvggemini_2_0_pro_exp: ModelResponse = {
  id: "gemini-2-0-pro-exp-world-map-svg",
  modelId: "gemini-2-0-pro-exp",
  prompt: "Create a simplified world map as an SVG. Show major continents in different colors. Label at least 5 major countries.",
  responseDate: "2025-02-28",
  type: "svg",
  title: "Professional World Map Visualization",
  description: "A refined world map with professional styling, accurate proportions, and detailed annotations",
  content: `<svg width="800" height="400" viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg">
  <title>Simplified World Map</title>

  <defs>
    <style>
      .continent {
        stroke: #000;
        stroke-width: 0.5;
      }
      .label {
        font-size: 10px;
        font-family: sans-serif;
        fill: black;
        text-anchor: middle;
        dominant-baseline: middle; /* Important for vertical centering */
        pointer-events: none; /* Make text unclickable */
      }

      /* Continent Colors */
      #north-america { fill: #90EE90; } /* Light Green */
      #south-america { fill: #228B22; } /* Forest Green */
      #europe { fill: #FFFFE0; }        /* Light Yellow */
      #asia { fill: #F0E68C; }        /* Khaki */
      #africa { fill: #FFA07A; }      /* Light Salmon */
      #oceania { fill: #ADD8E6; }    /* Light Blue */
      #antarctica { fill: #FFFFFF; }   /* White */
    </style>
  </defs>

  <!-- Background (Ocean) -->
  <rect width="800" height="400" fill="#ADD8E6" />


  <!-- Continents (Simplified Shapes) -->
  <g id="north-america" class="continent">
    <path d="M 100,100 L 150,50 L 250,80 L 280,150 L 200,200 L 150,180 Z" />
    <text x="180" y="120" class="label">USA</text>
  </g>
  <g id="south-america" class="continent">
    <path d="M 180,220 L 220,200 L 280,280 L 250,350 L 180,320 Z" />
     <text x="230" y="280" class="label">Brazil</text>
  </g>
  <g id="europe" class="continent">
    <path d="M 350,80 L 400,50 L 450,80 L 480,120 L 420,150 L 380,130 Z" />
    <text x="415" y="90" class="label">France</text>
  </g>
  <g id="asia" class="continent">
    <path d="M 450,50 L 650,30 L 750,100 L 700,200 L 600,250 L 500,200 L 480,120 Z" />
      <text x="650" y="100" class="label">China</text>
       <text x="550" y="180" class="label">India</text>
  </g>
  <g id="africa" class="continent">
    <path d="M 350,150 L 450,130 L 500,250 L 450,350 L 350,300 Z" />
  </g>
  <g id="oceania" class="continent">
    <path d="M 650,280 L 750,250 L 780,320 L 700,350 Z" />
    <text x="720" y="300" class="label">Australia</text>
  </g>
  <g id="antarctica" class="continent">
    <path d="M 100,380 L 700,380 L 750,400 L 50,400 Z" />
  </g>

</svg>`
}; 