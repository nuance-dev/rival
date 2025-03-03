import { ModelResponse } from "@/types/models";

export const svgLayoutclaude_3_7_sonnet_thinking: ModelResponse = {
  id: "claude-3-7-sonnet-thinking-svg-layout",
  modelId: "claude-3-7-sonnet-thinking",
  prompt: "Generate an SVG of a pelican riding a bicycle.",
  responseDate: "2025-02-27",
  type: "svg",
  title: "SVG Layout Challenge"  ,
  description: "Claude 3.7 Sonnet Thinking's response to the Tests an AI's ability to generate vector graphics",
  content: `<svg width="400" height="300" xmlns="http://www.w3.org/2000/svg">
  <!-- Background -->
  <rect width="400" height="300" fill="#87CEEB" opacity="0.3"/>
  
  <!-- Ground -->
  <rect width="400" height="40" y="260" fill="#8B4513"/>
  <rect width="400" height="10" y="260" fill="#A0522D"/>
  
  <!-- Bicycle -->
  <!-- Wheels -->
  <circle cx="100" cy="240" r="30" fill="none" stroke="black" stroke-width="3"/>
  <circle cx="250" cy="240" r="30" fill="none" stroke="black" stroke-width="3"/>
  <circle cx="100" cy="240" r="25" fill="none" stroke="black" stroke-width="1"/>
  <circle cx="250" cy="240" r="25" fill="none" stroke="black" stroke-width="1"/>
  
  <!-- Spokes -->
  <line x1="100" y1="215" x2="100" y2="265" stroke="black" stroke-width="2"/>
  <line x1="75" y1="240" x2="125" y2="240" stroke="black" stroke-width="2"/>
  <line x1="85" y1="225" x2="115" y2="255" stroke="black" stroke-width="2"/>
  <line x1="85" y1="255" x2="115" y2="225" stroke="black" stroke-width="2"/>
  
  <line x1="250" y1="215" x2="250" y2="265" stroke="black" stroke-width="2"/>
  <line x1="225" y1="240" x2="275" y2="240" stroke="black" stroke-width="2"/>
  <line x1="235" y1="225" x2="265" y2="255" stroke="black" stroke-width="2"/>
  <line x1="235" y1="255" x2="265" y2="225" stroke="black" stroke-width="2"/>
  
  <!-- Frame -->
  <line x1="100" y1="240" x2="175" y2="200" stroke="black" stroke-width="5"/>
  <line x1="175" y1="200" x2="250" y2="240" stroke="black" stroke-width="5"/>
  <line x1="175" y1="200" x2="175" y2="150" stroke="black" stroke-width="5"/>
  <line x1="175" y1="150" x2="220" y2="180" stroke="black" stroke-width="5"/>
  <line x1="100" y1="240" x2="140" y2="160" stroke="black" stroke-width="5"/>
  <line x1="140" y1="160" x2="175" y2="150" stroke="black" stroke-width="5"/>
  
  <!-- Pedals -->
  <circle cx="175" cy="200" r="12" fill="gray" stroke="black" stroke-width="2"/>
  <line x1="175" y1="200" x2="190" y2="220" stroke="black" stroke-width="3"/>
  <rect x1="190" y1="220" x2="200" y2="225" fill="black"/>
  
  <!-- Handlebars -->
  <line x1="220" y1="180" x2="240" y2="160" stroke="black" stroke-width="3"/>
  <line x1="240" y1="160" x2="260" y2="160" stroke="black" stroke-width="3"/>
  <circle cx="260" cy="160" r="5" fill="black"/>
  
  <!-- Seat -->
  <ellipse cx="140" cy="160" rx="15" ry="5" fill="black"/>
  
  <!-- Pelican -->
  <!-- Body -->
  <ellipse cx="155" cy="130" rx="30" ry="20" fill="white" stroke="black" stroke-width="1"/>
  
  <!-- Head and Beak -->
  <circle cx="190" cy="120" r="15" fill="white" stroke="black" stroke-width="1"/>
  <path d="M190,120 Q210,118 230,125 Q210,130 190,128 Z" fill="#FFA500" stroke="black" stroke-width="1"/>
  <path d="M190,128 Q210,130 230,125 Q210,135 190,133 Z" fill="#FFA500" stroke="black" stroke-width="1"/>
  
  <!-- Eye -->
  <circle cx="195" cy="115" r="3" fill="black"/>
  
  <!-- Legs -->
  <line x1="145" y1="150" x2="135" y2="160" stroke="orange" stroke-width="3"/>
  <line x1="165" y1="150" x2="175" y2="170" stroke="orange" stroke-width="3"/>
  
  <!-- Wings -->
  <path d="M155,130 Q130,110 110,140 Q140,140 155,130" fill="white" stroke="black" stroke-width="1"/>
  
  <!-- Feet on pedals -->
  <ellipse cx="175" cy="178" rx="8" ry="3" fill="orange" stroke="black" stroke-width="1"/>
  
  <!-- Sun -->
  <circle cx="350" cy="50" r="30" fill="yellow"/>
  <line x1="350" y1="10" x2="350" y2="0" stroke="yellow" stroke-width="3"/>
  <line x1="350" y1="90" x2="350" y2="100" stroke="yellow" stroke-width="3"/>
  <line x1="310" y1="50" x2="300" y2="50" stroke="yellow" stroke-width="3"/>
  <line x1="390" y1="50" x2="400" y2="50" stroke="yellow" stroke-width="3"/>
  <line x1="320" y1="20" x2="310" y2="10" stroke="yellow" stroke-width="3"/>
  <line x1="380" y1="80" x2="390" y2="90" stroke="yellow" stroke-width="3"/>
  <line x1="320" y1="80" x2="310" y2="90" stroke="yellow" stroke-width="3"/>
  <line x1="380" y1="20" x2="390" y2="10" stroke="yellow" stroke-width="3"/>
</svg>`
};
