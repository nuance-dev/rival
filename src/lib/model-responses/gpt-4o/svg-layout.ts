import { ModelResponse } from "@/types/models";

export const svgLayoutgpt_4o: ModelResponse = {
  id: "gpt-4o-svg-layout",
  modelId: "gpt-4o",
  prompt: "Generate an SVG of a pelican riding a bicycle.",
  responseDate: "2024-05-25",
  type: "svg",
  title: "SVG Layout Challenge",
  description: "Gpt 4o's response to the Tests an AI's ability to generate vector graphics",
  funFact: "GPT-4o added: This SVG creates a stylized pelican riding a bicycle, with a beak, wings, and feet positioned to make it look natural. You can paste this code into an HTML file and view it in a browser. Let me know if you'd like modifications! 🚲🐦",
  content: `<svg
    version="1.1"
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 500 500"
    width="500"
    height="500"
>
    <!-- Bicycle Wheels -->
    <circle cx="150" cy="350" r="50" stroke="black" stroke-width="5" fill="none"/>
    <circle cx="350" cy="350" r="50" stroke="black" stroke-width="5" fill="none"/>
    
    <!-- Bicycle Frame -->
    <line x1="150" y1="350" x2="250" y2="280" stroke="black" stroke-width="5"/>
    <line x1="250" y1="280" x2="350" y2="350" stroke="black" stroke-width="5"/>
    <line x1="250" y1="280" x2="250" y2="320" stroke="black" stroke-width="5"/>
    <line x1="250" y1="320" x2="200" y2="350" stroke="black" stroke-width="5"/>
    <line x1="250" y1="320" x2="300" y2="350" stroke="black" stroke-width="5"/>
    
    <!-- Handlebars -->
    <line x1="350" y1="350" x2="370" y2="300" stroke="black" stroke-width="5"/>
    <line x1="370" y1="300" x2="400" y2="300" stroke="black" stroke-width="5"/>
    
    <!-- Pelican Body -->
    <ellipse cx="250" cy="250" rx="60" ry="80" fill="white" stroke="black" stroke-width="3"/>
    
    <!-- Pelican Head -->
    <circle cx="230" cy="180" r="30" fill="white" stroke="black" stroke-width="3"/>
    
    <!-- Pelican Eye -->
    <circle cx="240" cy="170" r="5" fill="black"/>
    
    <!-- Pelican Beak -->
    <polygon points="250,180 290,170 290,190 250,200" fill="orange" stroke="black" stroke-width="2"/>
    
    <!-- Pelican Wings -->
    <path d="M200,240 Q180,200 150,220 Q190,250 200,240" fill="white" stroke="black" stroke-width="3"/>
    <path d="M300,240 Q320,200 350,220 Q310,250 300,240" fill="white" stroke="black" stroke-width="3"/>
    
    <!-- Pelican Legs -->
    <line x1="230" y1="320" x2="210" y2="370" stroke="orange" stroke-width="5"/>
    <line x1="270" y1="320" x2="290" y2="370" stroke="orange" stroke-width="5"/>
    
    <!-- Pelican Feet on Pedals -->
    <circle cx="210" cy="370" r="10" fill="orange"/>
    <circle cx="290" cy="370" r="10" fill="orange"/>
</svg>
`
};
