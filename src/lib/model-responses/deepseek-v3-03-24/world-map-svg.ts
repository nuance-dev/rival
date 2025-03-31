import { ModelResponse } from "@/types/models";

export const worldUmapUsvgdeepseek_v3_03_24: ModelResponse = {
  id: "deepseek-v3-03-24-world-map-svg",
  modelId: "deepseek-v3-03-24",
  prompt: "Create a simplified world map as an SVG showing major continents with different colors. Add labels for at least 5 major countries.",
  responseDate: "2025-03-30",
  type: "svg",
  title: "world-map-svg",
  description: "DeepSeek V3 March 2024's response",
  content: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 400">
  <!-- Background -->
  <rect width="800" height="400" fill="#B5D3E7"/>
  
  <!-- Continents -->
  <g id="continents">
    <!-- North America -->
    <path d="M100,100 L120,80 L150,90 L160,70 L180,80 L200,60 L220,70 L230,90 L250,100 L240,120 L220,130 L210,150 L190,160 L170,150 L150,160 L130,150 L110,140 Z" fill="#4E9A06"/>
    
    <!-- South America -->
    <path d="M180,200 L200,180 L220,190 L230,210 L220,230 L210,250 L200,270 L180,280 L160,270 L150,250 L160,230 Z" fill="#73D216"/>
    
    <!-- Africa -->
    <path d="M350,120 L370,100 L400,110 L410,130 L420,160 L430,190 L440,220 L430,250 L410,270 L380,260 L370,240 L360,210 L350,180 L340,150 Z" fill="#F57900"/>
    
    <!-- Europe -->
    <path d="M400,80 L420,70 L450,80 L470,90 L480,110 L470,130 L450,140 L430,130 L410,140 L400,120 L390,100 Z" fill="#3465A4"/>
    
    <!-- Asia -->
    <path d="M450,70 L480,60 L520,70 L550,80 L570,100 L580,130 L590,160 L580,190 L570,220 L550,240 L530,250 L500,240 L480,220 L470,190 L460,160 L450,130 L440,100 Z" fill="#CC0000"/>
    
    <!-- Australia -->
    <path d="M600,250 L620,240 L640,250 L650,270 L640,290 L620,300 L600,290 L590,270 Z" fill="#75507B"/>
  </g>
  
  <!-- Country Labels -->
  <g id="labels" font-family="Arial" font-size="12" fill="black" text-anchor="middle">
    <!-- USA -->
    <text x="180" y="120">USA</text>
    
    <!-- Brazil -->
    <text x="200" y="220">Brazil</text>
    
    <!-- Nigeria -->
    <text x="380" y="180">Nigeria</text>
    
    <!-- France -->
    <text x="420" y="110">France</text>
    
    <!-- China -->
    <text x="520" y="150">China</text>
  </g>
</svg>`
}; 