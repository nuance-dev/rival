import { ModelResponse } from "@/types/models";
import { sanitizeModelResponseContent } from "@/lib/utils";

export const interactiveCatanBoardgrok_3_thinking: ModelResponse = {
  id: "grok-3-thinking-interactive-catan-board",
  modelId: "grok-3-thinking",
  prompt: "Create a web app with an interactive hex grid like Settlers of Catan, where the number of hexes can be adjusted using a slider. In a single-page self-contained HTML.",
  responseDate: "2025-03-01",
  type: "website",
  title: "Interactive Catan Board",
  funFact: "Thought for 146 seconds for this one.",
  description: "Grok 3 Thinking's response to the Tests an AI's ability to create interactive web elements",
  content: sanitizeModelResponseContent(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Interactive Hex Grid</title>
    <style>
        body {
            text-align: center;
            font-family: Arial, sans-serif;
            margin: 20px;
        }
        #hex-grid {
            border: 1px solid black;
            max-width: 100%;
        }
        h1 {
            margin-bottom: 15px;
        }
        label {
            font-size: 1.2em;
            margin-right: 10px;
        }
        p {
            margin: 10px 0;
        }
    </style>
</head>
<body>
    <h1>Interactive Hex Grid</h1>
    <label for="rings-slider">Number of rings:</label>
    <input type="range" min="1" max="5" value="3" id="rings-slider">
    <p id="rings-label">Number of rings: 3</p>
    <svg id="hex-grid" width="800" height="600" viewBox="-100 -100 200 200"></svg>

    <script>
        // Get DOM elements
        const slider = document.getElementById('rings-slider');
        const label = document.getElementById('rings-label');
        const svg = document.getElementById('hex-grid');
        
        // Hexagon size (distance from center to vertex)
        const s = 13;

        // Function to draw the hex grid based on number of rings (n)
        function drawGrid(n) {
            // Clear the SVG
            svg.innerHTML = '';
            
            // Update the label
            label.textContent = 'Number of rings:' + n;
            
            // Generate hexagons using axial coordinates (q, r)
            for (let q = -n + 1; q <= n - 1; q++) {
                for (let r = -n + 1; r <= n - 1; r++) {
                    // Check if the hex is within n-1 rings from the center
                    if (Math.max(Math.abs(q), Math.abs(r), Math.abs(q + r)) <= n - 1) {
                        // Calculate center coordinates for flat-top hexes
                        const cx = s * (Math.sqrt(3) * q + (Math.sqrt(3) / 2) * r);
                        const cy = s * (3 / 2 * r);
                        
                        // Generate the six vertices of the hexagon
                        const points = [];
                        for (let i = 0; i < 6; i++) {
                            const angleDeg = 60 * i - 30; // Flat-top orientation
                            const angleRad = Math.PI / 180 * angleDeg;
                            const x = cx + s * Math.cos(angleRad);
                            const y = cy + s * Math.sin(angleRad);
                            points.push(x + ',' + y);
                        }
                        
                        // Create SVG polygon element
                        const polygon = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
                        polygon.setAttribute('points', points.join(' '));
                        polygon.setAttribute('stroke', 'black');
                        polygon.setAttribute('stroke-width', '1');
                        polygon.setAttribute('fill', 'lightgray');
                        
                        // Append the polygon to the SVG
                        svg.appendChild(polygon);
                    }
                }
            }
        }

        // Event listener for slider input
        slider.addEventListener('input', function() {
            const n = parseInt(slider.value);
            drawGrid(n);
        });

        // Initial draw with n=3
        drawGrid(3);
    </script>
</body>
</html>`)
}; 