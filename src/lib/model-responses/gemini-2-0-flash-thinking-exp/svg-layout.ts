import { ModelResponse } from "@/types/models";

export const svgLayoutgemini_2_0_flash_thinking_exp: ModelResponse = {
  id: "gemini-2-0-flash-thinking-exp-svg-layout",
  modelId: "gemini-2-0-flash-thinking-exp",
  prompt: "Generate an SVG of a pelican riding a bicycle.",
  responseDate: "2025-02-27",
  type: "svg",
  title: "SVG Layout Challenge",
  description: "Gemini 2.0 Flash Thinking Exp's response to the Tests an AI's ability to generate vector graphics",
  content: `<svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <!-- Background (optional, can be removed) -->
  <rect width="200" height="200" fill="#f0f0f0" />

  <!-- Bicycle -->
  <g id="bicycle">
    <!-- Wheels -->
    <circle cx="50" cy="160" r="30" fill="gray" stroke="black" stroke-width="2"/>
    <circle cx="150" cy="160" r="30" fill="gray" stroke="black" stroke-width="2"/>

    <!-- Frame -->
    <line x1="80" y1="160" x2="120" y2="160" stroke="black" stroke-width="5"/> <!-- Bottom frame -->
    <line x1="50" y1="160" x2="80" y2="100" stroke="black" stroke-width="5"/> <!-- Front frame -->
    <line x1="150" y1="160" x2="120" y2="100" stroke="black" stroke-width="5"/> <!-- Rear frame -->
    <line x1="80" y1="100" x2="120" y2="100" stroke="black" stroke-width="5"/> <!-- Top frame -->

    <!-- Seat -->
    <rect x="110" y="90" width="20" height="10" fill="brown" stroke="black" stroke-width="1" rx="2" ry="2"/>

    <!-- Handlebars -->
    <path d="M 80 100 L 70 80 L 90 80 L 80 100" fill="silver" stroke="black" stroke-width="2" />
  </g>

  <!-- Pelican -->
  <g id="pelican">
    <!-- Body -->
    <ellipse cx="100" cy="80" rx="40" ry="30" fill="white" stroke="black" stroke-width="2"/>

    <!-- Head -->
    <circle cx="80" cy="50" r="20" fill="lightgray" stroke="black" stroke-width="2"/>

    <!-- Beak -->
    <path d="M 60 50 L 40 40 C 30 40, 30 60, 40 60 L 60 50 Z" fill="yellow" stroke="black" stroke-width="2"/>
    <path d="M 40 60 L 40 70 C 40 80, 50 80, 50 70 L 50 60 Z" fill="#f0f0c0" stroke="black" stroke-width="2"/>

    <!-- Eye -->
    <circle cx="75" cy="45" r="3" fill="black"/>

    <!-- Wing (simplified, just one visible) -->
    <path d="M 130 80 L 150 60 C 160 60, 160 100, 150 100 L 130 80 Z" fill="lightblue" stroke="black" stroke-width="2"/>

    <!-- Feet (just suggesting they are on pedals) -->
    <circle cx="50" cy="160" r="5" fill="orange" />
    <circle cx="150" cy="160" r="5" fill="orange" />
  </g>
</svg>`
};
