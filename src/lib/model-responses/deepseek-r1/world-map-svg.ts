import { ModelResponse } from "@/types/models";

export const worldMapSvgdeepseek_r1: ModelResponse = {
  id: "deepseek-r1-world-map-svg",
  modelId: "deepseek-r1",
  prompt: "Create a simplified world map as an SVG. Show major continents in different colors. Label at least 5 major countries.",
  responseDate: "2025-02-27",
  type: "svg",
  title: "Deep Technical World Map",
  description: "A technically sophisticated world map with depth-oriented visualization and precise geographical elements",
  content: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 400">
    <!-- Continents -->
    <path id="asia" fill="#ffd700" d="M450 100 L550 80 620 150 600 220 550 250 500 200 450 180 420 150Z"/>
    <path id="africa" fill="#90ee90" d="M380 200 L400 150 360 120 340 180 320 250 360 300 400 280 420 240Z"/>
    <path id="north-america" fill="#ffa500" d="M100 50 L200 80 180 150 150 180 120 160 80 120 60 80Z"/>
    <path id="south-america" fill="#008000" d="M160 220 L180 180 140 240 120 300 160 350 200 320 220 280Z"/>
    <path id="europe" fill="#ff4444" d="M340 100 L380 80 400 120 380 150 350 160 320 140 330 110Z"/>
    <path id="australia" fill="#87ceeb" d="M600 300 L620 280 650 320 630 350 600 360 580 340Z"/>

    <!-- Country Labels -->
    <text x="180" y="100" font-size="12" fill="black">United States</text>
    <circle cx="170" cy="110" r="2" fill="black"/>
    
    <text x="220" y="300" font-size="12" fill="black">Brazil</text>
    <circle cx="210" cy="310" r="2" fill="black"/>
    
    <text x="500" y="180" font-size="12" fill="black">China</text>
    <circle cx="490" cy="190" r="2" fill="black"/>
    
    <text x="460" y="220" font-size="12" fill="black">India</text>
    <circle cx="450" cy="230" r="2" fill="black"/>
    
    <text x="350" y="130" font-size="12" fill="black">France</text>
    <circle cx="340" cy="140" r="2" fill="black"/>
    
    <text x="620" y="340" font-size="12" fill="black">Australia</text>
    <circle cx="610" cy="350" r="2" fill="black"/>

    <!-- Ocean Background -->
    <rect width="100%" height="100%" fill="#add8e6" opacity="0.3"/>
</svg>`
}; 