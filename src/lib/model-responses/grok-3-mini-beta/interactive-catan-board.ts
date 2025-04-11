import { ModelResponse } from "@/types/models";
import { sanitizeModelResponseContent } from "@/lib/utils";

export const interactiveCatanBoardgrok_3_mini_beta: ModelResponse = {
  id: "grok-3-mini-beta-interactive-catan-board",
  modelId: "grok-3-mini-beta",
  prompt: "Create a web app with an interactive hex grid like Settlers of Catan, where the number of hexes can be adjusted using a slider. In a single-page self-contained HTML.",
  responseDate: "2025-04-11",
  type: "website",
  title: "Interactive Catan Board",
  description: "Grok 3 Mini Beta's response to the challenge of creating interactive web elements",
  content: sanitizeModelResponseContent(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Interactive Hex Grid</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            margin: 20px;
        }
        
        #hexGridContainer {
            margin: 20px auto;
            width: 800px;  /* Fixed width for simplicity; adjust as needed */
            height: 600px;
            border: 1px solid #ccc;
            overflow: auto;  /* If the grid is larger than the container */
        }
        
        svg {
            width: 100%;
            height: 100%;
        }
        
        polygon {
            fill: lightblue;
            stroke: black;
            stroke-width: 2;
            transition: fill 0.3s;
        }
        
        polygon:hover {
            fill: lightgreen;  /* Highlight on hover for interactivity */
        }
    </style>
</head>
<body>
    <h1>Interactive Hex Grid like Settlers of Catan</h1>
    <label for="sizeSlider">Grid Radius (1-10): <span id="sizeValue">3</span></label>
    <br>
    <input type="range" id="sizeSlider" min="1" max="10" value="3">
    <div id="hexGridContainer"></div>
    
    <script>
        document.addEventListener('DOMContentLoaded', function() {
            const slider = document.getElementById('sizeSlider');
            const sizeValue = document.getElementById('sizeValue');
            const container = document.getElementById('hexGridContainer');
            
            slider.addEventListener('input', function() {
                const n = parseInt(slider.value);
                sizeValue.textContent = n;
                generateHexGrid(n, container);
            });
            
            // Initial generation
            generateHexGrid(parseInt(slider.value), container);
        });
        
        function getHexPosition(q, r, size) {
            const x = size * (3 / 2 * q);
            const y = size * (Math.sqrt(3) / 2 * q + Math.sqrt(3) * r);
            return { x, y };
        }
        
        function getHexPoints(centerX, centerY, size) {
            const points = [];
            for (let i = 0; i < 6; i++) {
                const angle = 2 * Math.PI / 6 * i;
                points.push(
                    (centerX + size * Math.cos(angle)).toFixed(2) + ',' +
                    (centerY + size * Math.sin(angle)).toFixed(2)
                );
            }
            return points.join(' ');
        }
        
        function generateHexGrid(n, container) {
            container.innerHTML = '';  // Clear previous content
            const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            svg.setAttribute('width', '100%');
            svg.setAttribute('height', '100%');
            svg.setAttribute('viewBox', '0 0 800 600');  // Fixed viewBox for consistency
            
            const hexSize = 30;  // Size of each hex
            
            let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
            const hexes = [];
            
            for (let q = -n; q <= n; q++) {
                for (let r = Math.max(-n, -n - q); r <= Math.min(n, n - q); r++) {
                    const { x: centerX, y: centerY } = getHexPosition(q, r, hexSize);
                    hexes.push({ q, r, centerX, centerY });
                    if (centerX < minX) minX = centerX;
                    if (centerX > maxX) maxX = centerX;
                    if (centerY < minY) minY = centerY;
                    if (centerY > maxY) maxY = centerY;
                }
            }
            
            // Calculate offsets to center the grid
            const offsetX = -minX + ((maxX - minX) / 2) + 200;  // Add margin
            const offsetY = -minY + ((maxY - minY) / 2) + 100;
            
            hexes.forEach(hex => {
                const { q, r, centerX, centerY } = hex;
                const actualCenterX = centerX + offsetX;
                const actualCenterY = centerY + offsetY;
                
                const points = getHexPoints(actualCenterX, actualCenterY, hexSize);
                const polygon = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
                polygon.setAttribute('points', points);
                polygon.setAttribute('data-q', q);
                polygon.setAttribute('data-r', r);
                
                polygon.addEventListener('click', function() {
                    alert('Clicked hex at q=' + q + ', r=' + r);
                    this.setAttribute('fill', 'red');  // Change color on click
                });
                
                svg.appendChild(polygon);
            });
            
            container.appendChild(svg);
        }
    </script>
</body>
</html>
`)
}; 