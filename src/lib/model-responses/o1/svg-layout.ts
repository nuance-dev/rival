import { ModelResponse } from "@/types/models";

export const svgLayouto1: ModelResponse = {
  id: "o1-svg-layout",
  modelId: "o1"  ,
  prompt: "Generate an SVG of a pelican riding a bicycle.",
  responseDate: "2025-02-28",
  type: "svg",
  title: "SVG Layout Challenge"  ,
  description: "O1's response to the Tests an AI's ability to generate vector graphics",
  content: `<svg
    version="1.1"
    baseProfile="full"
    width="300"
    height="300"
    viewBox="0 0 300 300"
    xmlns="http://www.w3.org/2000/svg"
>
  <!-- Background (optional) -->
  <rect width="100%" height="100%" fill="#f0f8ff" />

  <!-- Bicycle wheels -->
  <circle cx="100" cy="200" r="30" fill="none" stroke="#333" stroke-width="3" />
  <circle cx="200" cy="200" r="30" fill="none" stroke="#333" stroke-width="3" />

  <!-- Bicycle frame -->
  <!-- Lower bar connecting back wheel to seat post -->
  <line x1="100" y1="200" x2="140" y2="180" stroke="#333" stroke-width="3" />
  <!-- Top bar from seat to front wheel -->
  <line x1="140" y1="180" x2="180" y2="180" stroke="#333" stroke-width="3" />
  <line x1="180" y1="180" x2="200" y2="200" stroke="#333" stroke-width="3" />
  <!-- Vertical bar to handlebars -->
  <line x1="140" y1="180" x2="160" y2="140" stroke="#333" stroke-width="3" />
  <line x1="160" y1="140" x2="180" y2="180" stroke="#333" stroke-width="3" />
  <!-- Seat -->
  <line x1="140" y1="180" x2="130" y2="170" stroke="#333" stroke-width="3" />
  <!-- Handlebars -->
  <line x1="160" y1="140" x2="150" y2="130" stroke="#333" stroke-width="3" />
  <line x1="150" y1="130" x2="160" y2="130" stroke="#333" stroke-width="3" />

  <!-- Pelican body -->
  <!-- A simple stylized shape with a large beak to the right -->
  <path
    d="
      M120,90
      C120,70  145,70  155,85   /* head curve */
      C165,60  200,60  195,80   /* beak extension */
      C190,90  170,85  160,80   /* beak tip curving back */
      C155,90  150,100 150,110  /* lower head/neck */
      C150,130 130,150 130,150  /* body curve */
      C120,145 120,120 120,90   /* close back up to top */
      Z
    "
    fill="#ffffff"
    stroke="#333"
    stroke-width="3"
  />

  <!-- Pelican wing -->
  <path
    d="
      M130,120
      C145,115 160,125 165,135
      C155,145 140,145 130,140
      Z
    "
    fill="#ffffff"
    stroke="#333"
    stroke-width="3"
  />

  <!-- Optionally, you could add a small eye or additional details -->
  <!-- Pelican eye -->
  <circle cx="145" cy="85" r="3" fill="#333" />

  <!-- A little leg/foot near the pedal (optional) -->
  <line x1="140" y1="150" x2="130" y2="160" stroke="#333" stroke-width="3" />
  
  <!-- You can add more details or stylize colors as you wish. -->
</svg>
`
};
