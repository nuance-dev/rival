import { ModelResponse } from "@/types/models";
import { sanitizeModelResponseContent } from "@/lib/utils";

export const interactiveCatanBoardclaude_3_7_sonnet: ModelResponse = {
  id: "claude-3-7-sonnet-interactive-catan-board",
  modelId: "claude-3-7-sonnet",
  prompt: "Create a web app with an interactive hex grid like Settlers of Catan, where the number of hexes can be adjusted using a slider. In a single-page self-contained HTML.",
  responseDate: "2025-02-27",
  type: "website",
  title: "Interactive Catan Board",
  description: "Claude 3.7 Sonnet's response to the Tests an AI's ability to create interactive web elements",
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
            padding: 20px;
            background-color: #f0f0f0;
        }
        
        .controls {
            margin-bottom: 20px;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 10px;
            background-color: white;
            padding: 15px;
            border-radius: 8px;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        }
        
        .slider-container {
            display: flex;
            align-items: center;
            gap: 10px;
            width: 100%;
        }
        
        #gridSize {
            flex-grow: 1;
        }
        
        #sizeValue {
            min-width: 30px;
            text-align: center;
        }
        
        canvas {
            background-color: white;
            border-radius: 8px;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        }
        
        button {
            padding: 8px 16px;
            background-color: #4CAF50;
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            transition: background-color 0.3s;
        }
        
        button:hover {
            background-color: #45a049;
        }
        
        .hex {
            transition: fill 0.3s;
        }
        
        .hex:hover {
            filter: brightness(1.1);
        }
    </style>
</head>
<body>
    <h1>Interactive Hex Grid</h1>
    <div class="controls">
        <div class="slider-container">
            <label for="gridSize">Grid Size:</label>
            <input type="range" id="gridSize" min="1" max="5" value="3" step="1">
            <span id="sizeValue">3</span>
        </div>
        <button id="randomizeColors">Randomize Colors</button>
    </div>
    <canvas id="hexCanvas" width="800" height="600"></canvas>

    <script>
        // Constants and variables
        const canvas = document.getElementById('hexCanvas');
        const ctx = canvas.getContext('2d');
        const gridSizeSlider = document.getElementById('gridSize');
        const sizeValueDisplay = document.getElementById('sizeValue');
        const randomizeButton = document.getElementById('randomizeColors');
        
        // Hex properties
        const hexSize = 50;
        const hexHeight = hexSize * 2;
        const hexWidth = Math.sqrt(3) * hexSize;
        const verticalSpacing = hexHeight * 0.75;
        const horizontalSpacing = hexWidth;
        
        // Colors for the hexes (Catan-like)
        const hexColors = [
            '#f4d03f', // Desert (yellow)
            '#e74c3c', // Brick (red)
            '#27ae60', // Wood (green)
            '#3498db', // Wool (blue)
            '#95a5a6', // Ore (gray)
            '#f39c12'  // Grain (orange)
        ];
        
        // Store hex data
        let hexes = [];
        let selectedHex = null;
        
        // Initialize
        updateGridSize();
        
        // Event listeners
        gridSizeSlider.addEventListener('input', function() {
            sizeValueDisplay.textContent = this.value;
            updateGridSize();
        });
        
        randomizeButton.addEventListener('click', function() {
            randomizeHexColors();
            drawGrid();
        });
        
        canvas.addEventListener('mousemove', function(event) {
            const rect = canvas.getBoundingClientRect();
            const mouseX = event.clientX - rect.left;
            const mouseY = event.clientY - rect.top;
            
            // Check if mouse is over a hex
            let hoveredHex = null;
            for (const hex of hexes) {
                if (isPointInHex(mouseX, mouseY, hex)) {
                    hoveredHex = hex;
                    break;
                }
            }
            
            if (hoveredHex !== selectedHex) {
                selectedHex = hoveredHex;
                drawGrid();
                
                if (selectedHex) {
                    // Draw highlight or info for the selected hex
                    drawHexOutline(selectedHex, 3, '#ffffff');
                    
                    // Display hex coordinates
                    ctx.fillStyle = 'white';
                    ctx.strokeStyle = 'black';
                    ctx.lineWidth = 1;
                    ctx.font = '14px Arial';
                    ctx.textAlign = 'center';
                    ctx.textBaseline = 'middle';
                    const text = '(' + selectedHex.gridX + ',' + selectedHex.gridY + ')';
                    ctx.fillText(text, selectedHex.x, selectedHex.y);
                    ctx.strokeText(text, selectedHex.x, selectedHex.y);
                }
            }
        });
        
        canvas.addEventListener('click', function(event) {
            if (selectedHex) {
                // Cycle through colors when clicking a hex
                selectedHex.colorIndex = (selectedHex.colorIndex + 1) % hexColors.length;
                drawGrid();
            }
        });
        
        // Functions
        function updateGridSize() {
            const gridSize = parseInt(gridSizeSlider.value);
            generateHexGrid(gridSize);
            drawGrid();
        }
        
        function generateHexGrid(gridSize) {
            hexes = [];
            const centerX = canvas.width / 2;
            const centerY = canvas.height / 2;
            
            // Calculate the grid radius based on the grid size
            const radius = gridSize - 1;
            
            // Generate the hex grid in a spiral pattern
            for (let q = -radius; q <= radius; q++) {
                const r1 = Math.max(-radius, -q - radius);
                const r2 = Math.min(radius, -q + radius);
                
                for (let r = r1; r <= r2; r++) {
                    const x = centerX + hexWidth * (q + r/2);
                    const y = centerY + verticalSpacing * r;
                    
                    hexes.push({
                        x: x,
                        y: y,
                        gridX: q,
                        gridY: r,
                        colorIndex: Math.floor(Math.random() * hexColors.length)
                    });
                }
            }
        }
        
        function drawGrid() {
            // Clear the canvas
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            // Draw each hex
            for (const hex of hexes) {
                drawHex(hex, hexColors[hex.colorIndex]);
            }
        }
        
        function drawHex(hex, fillColor) {
            ctx.beginPath();
            for (let i = 0; i < 6; i++) {
                const angle = 2 * Math.PI / 6 * i;
                const x = hex.x + hexSize * Math.cos(angle);
                const y = hex.y + hexSize * Math.sin(angle);
                
                if (i === 0) {
                    ctx.moveTo(x, y);
                } else {
                    ctx.lineTo(x, y);
                }
            }
            ctx.closePath();
            
            // Fill and stroke
            ctx.fillStyle = fillColor;
            ctx.fill();
            ctx.strokeStyle = '#333';
            ctx.lineWidth = 2;
            ctx.stroke();
        }
        
        function drawHexOutline(hex, lineWidth, strokeColor) {
            ctx.beginPath();
            for (let i = 0; i < 6; i++) {
                const angle = 2 * Math.PI / 6 * i;
                const x = hex.x + hexSize * Math.cos(angle);
                const y = hex.y + hexSize * Math.sin(angle);
                
                if (i === 0) {
                    ctx.moveTo(x, y);
                } else {
                    ctx.lineTo(x, y);
                }
            }
            ctx.closePath();
            
            ctx.strokeStyle = strokeColor;
            ctx.lineWidth = lineWidth;
            ctx.stroke();
        }
        
        function isPointInHex(x, y, hex) {
            // Calculate the distance from the center of the hex
            const dx = Math.abs(x - hex.x);
            const dy = Math.abs(y - hex.y);
            
            // Quick check using bounding box
            if (dx > hexSize || dy > hexSize) {
                return false;
            }
            
            // More precise check
            const a = hexSize / 2;
            const b = hexSize * Math.sqrt(3) / 2;
            
            return (dx * dx + dy * dy <= hexSize * hexSize) || 
                   (dx <= a && dy <= b) ||
                   (dx * a / b + dy <= b);
        }
        
        function randomizeHexColors() {
            for (const hex of hexes) {
                hex.colorIndex = Math.floor(Math.random() * hexColors.length);
            }
        }
    </script>
</body>
</html>`)
};
