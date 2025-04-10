import { ModelResponse } from "@/types/models";

export const svgLayoutResponse: ModelResponse = {
  id: "optimus-alpha-svg-layout",
  modelId: "optimus-alpha",
  prompt: "Generate an SVG of a pelican riding a bicycle.",
  responseDate: "2025-04-10",
  title: "Pelican on Bicycle SVG",
  description: "Generates an SVG illustration of a pelican riding a bicycle.",
  type: "svg",
  content: `<svg width="400" height="320" viewBox="0 0 400 320" fill="none" xmlns="http://www.w3.org/2000/svg">
  <!-- Wheels -->
  <circle cx="110" cy="270" r="40" stroke="#333" stroke-width="6" fill="#e0e0e0"/>
  <circle cx="270" cy="270" r="40" stroke="#333" stroke-width="6" fill="#e0e0e0"/>
  <!-- Bike frame -->
  <line x1="110" y1="270" x2="160" y2="210" stroke="#0057B8" stroke-width="8"/>
  <line x1="160" y1="210" x2="270" y2="270" stroke="#0057B8" stroke-width="8"/>
  <line x1="160" y1="210" x2="210" y2="270" stroke="#0057B8" stroke-width="8"/>
  <line x1="210" y1="270" x2="110" y2="270" stroke="#0057B8" stroke-width="8"/>
  <!-- Handlebar -->
  <line x1="190" y1="218" x2="250" y2="170" stroke="#333" stroke-width="6"/>
  <ellipse cx="255" cy="166" rx="8" ry="5" fill="#FFD700" stroke="#333" stroke-width="2"/>
  <!-- Seat -->
  <rect x="148" y="203" width="25" height="10" rx="5" fill="#444" />
  <!-- Pelican body -->
  <ellipse cx="170" cy="160" rx="45" ry="33" fill="#F8F8F8" stroke="#bbb" stroke-width="2"/>
  <!-- Pelican tail -->
  <polygon points="134,177 125,200 160,186" fill="#D1D1D1"/>
  <!-- Pelican neck -->
  <rect x="177" y="110" width="18" height="43" rx="9" fill="#F6F6F6" stroke="#bbb" stroke-width="2" />
  <!-- Pelican head -->
  <ellipse cx="186" cy="116" rx="21" ry="17" fill="#F6F6F6" stroke="#bbb" stroke-width="2"/>
  <!-- Eye -->
  <ellipse cx="197" cy="114" rx="3" ry="4" fill="#333"/>
  <!-- Beak -->
  <polygon points="205,120 238,110 238,119 206,131" fill="#FFCE54" stroke="#D1A900" stroke-width="2"/>
  <ellipse cx="237" cy="115" rx="4" ry="9" fill="#FFA500" opacity="0.5"/>
  <!-- Pelican wing -->
  <ellipse cx="190" cy="158" rx="25" ry="12" fill="#e5e5e5" stroke="#bbb" stroke-width="1"/>
  <!-- Left leg -->
  <rect x="152" y="190" width="8" height="40" rx="3" fill="#FFD700" stroke="#D1A900" stroke-width="1"/>
  <ellipse cx="156" cy="234" rx="8" ry="5" fill="#FFA500"/>
  <!-- Right leg on pedal -->
  <rect x="195" y="216" width="8" height="35" rx="3" fill="#FFD700" stroke="#D1A900" stroke-width="1" transform="rotate(20 195 216)"/>
  <ellipse cx="207" cy="245" rx="8" ry="5" fill="#FFA500" transform="rotate(20 207 245)"/>
  <!-- Pedal (for right leg) -->
  <rect x="200" y="258" width="25" height="6" rx="2" fill="#333" transform="rotate(-10 200 258)"/>
</svg>
`
}; 