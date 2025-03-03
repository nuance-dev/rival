import { ModelResponse } from "@/types/models";

export const interactiveCatanBoardclaude_3_5_sonnet: ModelResponse = {
  id: "claude-3-5-sonnet-interactive-catan-board",
  modelId: "claude-3-5-sonnet",
  prompt: "Create a web app with an interactive hex grid like Settlers of Catan, where the number of hexes can be adjusted using a slider. In a single-page self-contained HTML.",
  responseDate: "2025-02-26",
  type: "website"  ,
  title: "Interactive Catan Board"  ,
  description: "Claude 3.5 Sonnet's response to the Tests an AI's ability to create interactive web elements",
  content: `<!DOCTYPE html>
<html>
<head>
    <title>Interactive Hex Grid</title>
    <style>
        body {
            display: flex;
            flex-direction: column;
            align-items: center;
            font-family: Arial, sans-serif;
            background-color: #f0f0f0;
        }
        .controls {
            margin: 20px;
        }
        canvas {
            background-color: white;
            border: 1px solid #ccc;
        }
    </style>
</head>
<body>
    <div class="controls">
        <label for="gridSize">Grid Size: </label>
        <input type="range" id="gridSize" min="1" max="10" value="3" />
        <span id="sizeValue">3</span>
    </div>
    <canvas id="hexGrid" width="800" height="600"></canvas>

    <script>
        const canvas = document.getElementById('hexGrid');
        const ctx = canvas.getContext('2d');
        const sizeSlider = document.getElementById('gridSize');
        const sizeValue = document.getElementById('sizeValue');

        // Hex dimensions
        const hexSize = 40;
        const hexHeight = hexSize * 2;
        const hexWidth = Math.sqrt(3) * hexSize;
        
        function drawHexagon(x, y) {
            ctx.beginPath();
            for (let i = 0; i < 6; i++) {
                const angle = (Math.PI / 3) * i;
                const xPoint = x + hexSize * Math.cos(angle);
                const yPoint = y + hexSize * Math.sin(angle);
                if (i === 0) {
                    ctx.moveTo(xPoint, yPoint);
                } else {
                    ctx.lineTo(xPoint, yPoint);
                }
            }
            ctx.closePath();
            ctx.stroke();
            ctx.fillStyle = '#f8f8f8';
            ctx.fill();
        }

        function drawGrid(size) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            // Calculate starting position to center the grid
            const startX = canvas.width / 2 - (size * hexWidth) / 2;
            const startY = canvas.height / 2 - (size * hexHeight) / 2;

            for (let row = -size; row <= size; row++) {
                const rowOffset = Math.abs(row) / 2;
                const hexesInRow = 2 * size + 1 - Math.abs(row);
                
                for (let col = 0; col < hexesInRow; col++) {
                    const x = startX + (col + rowOffset) * hexWidth;
                    const y = startY + row * (hexHeight * 0.75) + (size * hexHeight * 0.75);
                    drawHexagon(x, y);
                }
            }
        }

        // Initial draw
        drawGrid(parseInt(sizeSlider.value));

        // Update grid when slider changes
        sizeSlider.addEventListener('input', (e) => {
            sizeValue.textContent = e.target.value;
            drawGrid(parseInt(e.target.value));
        });
    </script>
</body>
</html>`
};
