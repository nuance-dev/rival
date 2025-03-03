import { ModelResponse } from "@/types/models";
import { sanitizeModelResponseContent } from "@/lib/utils";

export const interactiveCatanBoardclaude_3_7_sonnet_thinking: ModelResponse = {
  id: "claude-3-7-sonnet-thinking-interactive-catan-board",
  modelId: "claude-3-7-sonnet-thinking",
  prompt: "Create a web app with an interactive hex grid like Settlers of Catan, where the number of hexes can be adjusted using a slider. In a single-page self-contained HTML.",
  responseDate: "2025-02-27",
  type: "website"  ,
  title: "Interactive Catan Board"  ,
  description: "Claude 3.7 Sonnet Thinking's response to the Tests an AI's ability to create interactive web elements",
  content: sanitizeModelResponseContent(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Interactive Hex Grid</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            display: flex;
            flex-direction: column;
            align-items: center;
            background-color: #f0f0f0;
            margin: 0;
            padding: 20px;
        }
        
        h1 {
            color: #333;
        }
        
        .controls {
            margin: 20px 0;
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 80%;
            max-width: 500px;
        }
        
        .slider-container {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: 10px;
        }
        
        #gridSize {
            flex-grow: 1;
            margin: 0 10px;
        }
        
        canvas {
            border: 1px solid #ccc;
            background-color: #fff;
            border-radius: 5px;
            box-shadow: 0 0 10px rgba(0,0,0,0.1);
        }
        
        .info {
            margin-top: 20px;
            padding: 10px;
            background-color: #e9e9e9;
            border-radius: 5px;
            max-width: 600px;
        }
    </style>
</head>
<body>
    <h1>Interactive Hex Grid</h1>
    
    <div class="controls">
        <div class="slider-container">
            <label for="gridSize">Grid Size: </label>
            <input type="range" id="gridSize" min="1" max="5" value="2" step="1">
            <span id="sizeValue">2</span>
        </div>
    </div>
    
    <canvas id="hexCanvas" width="800" height="600"></canvas>
    
    <div class="info">
        <p><strong>Interactions:</strong> Hover over hexes to highlight them, click to select.</p>
        <p><strong>Resources:</strong> Each color represents a different resource type (like in Catan).</p>
    </div>
    
    <script>
        // Get the canvas and its context
        const canvas = document.getElementById('hexCanvas');
        const ctx = canvas.getContext('2d');
        
        // Constants for the hex grid
        const HEX_SIZE = 50; // Size of a hexagon (radius)
        const HEX_HEIGHT = HEX_SIZE * Math.sqrt(3);
        const COLORS = ['#f7e9a0', '#7caa84', '#c08552', '#c17e61', '#b3b3b3'];
        const RESOURCE_NAMES = ['Wheat', 'Wood', 'Brick', 'Sheep', 'Ore'];
        
        // Variables to track the state
        let gridRadius = 2; // Default grid radius
        let hexes = []; // Array to store all hexagons
        let selectedHex = null;
        let hoveredHex = null;
        
        // Update the grid size label when the slider changes
        document.getElementById('gridSize').addEventListener('input', function() {
            const value = this.value;
            document.getElementById('sizeValue').textContent = value;
            gridRadius = parseInt(value);
            generateGrid();
            drawGrid();
        });
        
        // Function to generate the grid based on the current radius
        function generateGrid() {
            hexes = [];
            
            // Generate hexes in a spiral pattern to create a circular grid
            for (let q = -gridRadius; q <= gridRadius; q++) {
                for (let r = Math.max(-gridRadius, -q-gridRadius); r <= Math.min(gridRadius, -q+gridRadius); r++) {
                    // Calculate the third coordinate
                    const s = -q - r;
                    
                    // Calculate the center position of the hex
                    const x = HEX_SIZE * 3/2 * q;
                    const y = HEX_SIZE * Math.sqrt(3) * (r + q/2);
                    
                    // Randomly assign a resource type
                    const resourceType = Math.floor(Math.random() * COLORS.length);
                    
                    // Randomly assign a number (like Catan has 2-12 on tiles)
                    let number = Math.floor(Math.random() * 11) + 2;
                    // Avoid 7 as it's the robber in Catan
                    if (number === 7) number = Math.random() < 0.5 ? 6 : 8;
                    
                    // Create a hex object
                    hexes.push({
                        q: q,
                        r: r,
                        s: s,
                        x: x + canvas.width / 2,
                        y: y + canvas.height / 2,
                        color: COLORS[resourceType],
                        resource: RESOURCE_NAMES[resourceType],
                        number: number,
                        vertices: calculateHexVertices(x + canvas.width / 2, y + canvas.height / 2)
                    });
                }
            }
        }
        
        // Calculate the vertices of a hexagon given its center
        function calculateHexVertices(centerX, centerY) {
            const vertices = [];
            for (let i = 0; i < 6; i++) {
                const angleDeg = 60 * i - 30;
                const angleRad = (Math.PI / 180) * angleDeg;
                vertices.push({
                    x: centerX + HEX_SIZE * Math.cos(angleRad),
                    y: centerY + HEX_SIZE * Math.sin(angleRad)
                });
            }
            return vertices;
        }
        
        // Function to draw the grid
        function drawGrid() {
            // Clear the canvas
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            // Draw each hexagon
            hexes.forEach(hex => {
                // Set the fill color
                ctx.fillStyle = hex.color;
                if (hex === selectedHex) {
                    // Selected hex has a darker color
                    ctx.fillStyle = darkenColor(hex.color, 0.7);
                } else if (hex === hoveredHex) {
                    // Hovered hex has a slightly darker color
                    ctx.fillStyle = darkenColor(hex.color, 0.9);
                }
                
                // Draw the hexagon
                ctx.beginPath();
                hex.vertices.forEach((vertex, i) => {
                    if (i === 0) {
                        ctx.moveTo(vertex.x, vertex.y);
                    } else {
                        ctx.lineTo(vertex.x, vertex.y);
                    }
                });
                ctx.closePath();
                ctx.fill();
                
                // Draw the border
                ctx.strokeStyle = '#333';
                ctx.lineWidth = 2;
                ctx.stroke();
                
                // Draw the number
                ctx.fillStyle = '#000';
                ctx.font = 'bold 20px Arial';
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.fillText(hex.number.toString(), hex.x, hex.y);
                
                // Draw the resource name
                ctx.font = '12px Arial';
                ctx.fillText(hex.resource, hex.x, hex.y + 20);
            });
        }
        
        // Function to darken a color by a factor
        function darkenColor(color, factor) {
            // Parse the hex color
            let r = parseInt(color.substr(1, 2), 16);
            let g = parseInt(color.substr(3, 2), 16);
            let b = parseInt(color.substr(5, 2), 16);
            
            // Darken each component
            r = Math.floor(r * factor);
            g = Math.floor(g * factor);
            b = Math.floor(b * factor);
            
            // Convert back to hex
            return '#' + r.toString(16).padStart(2, '0') + g.toString(16).padStart(2, '0') + b.toString(16).padStart(2, '0');
        }
        
        // Function to check if a point is inside a hexagon
        function isPointInHex(x, y, hex) {
            // Ray casting algorithm
            let inside = false;
            const vertices = hex.vertices;
            
            for (let i = 0, j = vertices.length - 1; i < vertices.length; j = i++) {
                const xi = vertices[i].x, yi = vertices[i].y;
                const xj = vertices[j].x, yj = vertices[j].y;
                
                const intersect = ((yi > y) !== (yj > y)) && 
                                  (x < (xj - xi) * (y - yi) / (yj - yi) + xi));
                if (intersect) inside = !inside;
            }
            
            return inside;
        }
        
        // Function to handle mouse movement for hover effect
        canvas.addEventListener('mousemove', function(event) {
            const rect = canvas.getBoundingClientRect();
            const mouseX = event.clientX - rect.left;
            const mouseY = event.clientY - rect.top;
            
            let foundHex = null;
            for (const hex of hexes) {
                if (isPointInHex(mouseX, mouseY, hex)) {
                    foundHex = hex;
                    break;
                }
            }
            
            // Only redraw if the hovered hex has changed
            if (hoveredHex !== foundHex) {
                hoveredHex = foundHex;
                drawGrid();
            }
        });
        
        // Function to handle clicks for selection
        canvas.addEventListener('click', function(event) {
            const rect = canvas.getBoundingClientRect();
            const mouseX = event.clientX - rect.left;
            const mouseY = event.clientY - rect.top;
            
            for (const hex of hexes) {
                if (isPointInHex(mouseX, mouseY, hex)) {
                    // Toggle selection
                    selectedHex = (selectedHex === hex) ? null : hex;
                    drawGrid();
                    break;
                }
            }
        });
        
        // Initialize the grid
        generateGrid();
        drawGrid();
    </script>
</body>
</html>`)
};
