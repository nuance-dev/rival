import { ModelResponse } from "@/types/models";

export const svgLayoutGpt4oMini: ModelResponse = {
  id: "gpt-4o-mini-svg-layout", // model-id-slug + challenge-id
  modelId: "gpt-4o-mini", // model-id-slug
  prompt: "Generate an SVG of a pelican riding a bicycle.", // The prompt extracted in Step 2
  responseDate: "2025-04-11", // user_provided_date
  type: "svg", // Determined from content
  title: "SVG Layout Challenge", // From the gpt-4o reference file
  description: "GPT-4o mini's response to the challenge: Generate an SVG of a pelican riding a bicycle.", // Write a brief description
  content: `<svg
    version="1.1"
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 800 600"
    xml:space="preserve"
    fill="#000000"
>
    <g>
        <!-- Bicycle Wheels -->
        <circle cx="200" cy="450" r="50" fill="black" />
        <circle cx="600" cy="450" r="50" fill="black" />
        <circle cx="200" cy="450" r="45" fill="white" />
        <circle cx="600" cy="450" r="45" fill="white" />
        <path d="M 200 450 L 200 480" stroke="black" stroke-width="5" />
        <path d="M 600 450 L 600 480" stroke="black" stroke-width="5" />
        
        <!-- Bicycle Frame -->
        <path d="M 200 450 L 300 350 L 400 450" stroke="black" stroke-width="5"/>
        <path d="M 300 350 L 250 300 L 400 450" stroke="black" stroke-width="5"/>
        <path d="M 300 350 L 600 450" stroke="black" stroke-width="5" />

        <!-- Pelican Body -->
        <ellipse cx="300" cy="275" rx="50" ry="30" fill="white" />
        
        <!-- Pelican Head -->
        <ellipse cx="330" cy="250" rx="25" ry="20" fill="white" />
        
        <!-- Pelican Beak -->
        <path d="M 355 250 Q 375 245 370 260 Q 355 260 355 250" fill="orange" />
        
        <!-- Pelican Eye -->
        <circle cx="320" cy="245" r="5" fill="black" />
        
        <!-- Pelican Wings -->
        <path d="M 275 270 Q 250 250 270 290 Q 275 280 275 270" fill="lightgray" />
        <path d="M 350 270 Q 375 250 355 290 Q 350 280 350 270" fill="lightgray" />
        
        <!-- Bicycle Seat -->
        <rect x="290" y="335" width="20" height="15" fill="brown" />
        
        <!-- Bicycle Handlebars -->
        <path d="M 260 350 C 250 340 280 340 270 350" stroke="black" stroke-width="5" />
        <path d="M 340 350 C 350 340 320 340 330 350" stroke="black" stroke-width="5" />

        <!-- Pelican Feet -->
        <polygon points="290,305 280,320 300,320" fill="orange" />
        <polygon points="370,305 380,320 360,320" fill="orange" />
        
    </g>
</svg>`
}; 