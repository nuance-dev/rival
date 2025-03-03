import { ModelResponse } from "@/types/models";

export const interactiveCatanBoardgemini_2_0_flash_thinking_exp: ModelResponse = {
  id: "gemini-2-0-flash-thinking-exp-interactive-catan-board",
  modelId: "gemini-2-0-flash-thinking-exp",
  prompt: "Create a web app with an interactive hex grid like Settlers of Catan, where the number of hexes can be adjusted using a slider. In a single-page self-contained HTML.",
  responseDate: "2025-02-27",
  type: "website"  ,
  title: "Interactive Catan Board"  ,
  description: "Gemini 2.0 Flash Thinking Exp's response to the Tests an AI's ability to create interactive web elements",
  content: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Interactive Hex Grid</title>
    <style>
        body { margin: 0; overflow: hidden; font-family: sans-serif; display: flex; flex-direction: column; align-items: center; }
        #controls { display: flex; align-items: center; margin-bottom: 10px; }
        #gridSizeLabel { margin-right: 10px; }
        canvas { border: 1px solid #ccc; }
    </style>
</head>
<body>
    <h1>Interactive Hex Grid</h1>

    <div id="controls">
        <label id="gridSizeLabel" for="gridSizeSlider">Grid Size:</label>
        <input type="range" id="gridSizeSlider" min="3" max="20" value="8">
        <span id="gridSizeValue">8</span>
    </div>

    <canvas id="hexCanvas"></canvas>

    <script>
        const canvas = document.getElementById('hexCanvas');
        const ctx = canvas.getContext('2d');
        const gridSizeSlider = document.getElementById('gridSizeSlider');
        const gridSizeValue = document.getElementById('gridSizeValue');

        let gridSize = parseInt(gridSizeSlider.value);
        let hexRadius = 30;
        let hexSpacing = hexRadius * 2 * 0.866; // Approximately sqrt(3)/2
        let offsetX = 0;
        let offsetY = 50; // Shift grid down a bit
        let hoveredHex = null;

        gridSizeValue.textContent = gridSize;

        function drawHex(x, y, radius, fillColor = '#eee', strokeColor = '#333', lineWidth = 1) {
            ctx.beginPath();
            for (let i = 0; i < 6; i++) {
                const angle = 2 * Math.PI / 6 * i;
                const hexX = x + radius * Math.cos(angle);
                const hexY = y + radius * Math.sin(angle);
                if (i === 0) {
                    ctx.moveTo(hexX, hexY);
                } else {
                    ctx.lineTo(hexX, hexY);
                }
            }
            ctx.closePath();
            ctx.fillStyle = fillColor;
            ctx.fill();
            ctx.strokeStyle = strokeColor;
            ctx.lineWidth = lineWidth;
            ctx.stroke();
        }

        function drawGrid() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            const startX = canvas.width / 2 - (gridSize * hexSpacing) / 2 - hexRadius; // Center the grid
            const startY = offsetY;

            for (let row = 0; row < gridSize; row++) {
                for (let col = 0; col < gridSize; col++) {
                    const x = startX + col * hexSpacing + (row % 2) * hexSpacing / 2 + offsetX;
                    const y = startY + row * hexRadius * 1.5 + offsetY; // 1.5 for vertical spacing

                    let fillColor = '#eee';
                    if (hoveredHex && hoveredHex.row === row && hoveredHex.col === col) {
                        fillColor = 'lightblue';
                    }

                    drawHex(x, y, hexRadius, fillColor);
                }
            }
        }

        function getHexCoordinates(mouseX, mouseY) {
            const startX = canvas.width / 2 - (gridSize * hexSpacing) / 2 - hexRadius;
            const startY = offsetY;

            for (let row = 0; row < gridSize; row++) {
                for (let col = 0; col < gridSize; col++) {
                    const hexCenterX = startX + col * hexSpacing + (row % 2) * hexSpacing / 2 + offsetX;
                    const hexCenterY = startY + row * hexRadius * 1.5 + offsetY;

                    // Simple distance check - could be more precise polygon check for production
                    const dx = mouseX - hexCenterX;
                    const dy = mouseY - hexCenterY;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < hexRadius) {
                        return { row: row, col: col };
                    }
                }
            }
            return null;
        }

        gridSizeSlider.addEventListener('input', () => {
            gridSize = parseInt(gridSizeSlider.value);
            gridSizeValue.textContent = gridSize;
            drawGrid();
        });

        canvas.addEventListener('mousemove', (event) => {
            const rect = canvas.getBoundingClientRect();
            const mouseX = event.clientX - rect.left;
            const mouseY = event.clientY - rect.top;

            hoveredHex = getHexCoordinates(mouseX, mouseY);
            drawGrid(); // Redraw to update hover effect
        });

        canvas.addEventListener('mouseout', () => {
            hoveredHex = null;
            drawGrid(); // Redraw to remove hover effect
        });

        // Initial draw
        drawGrid();

        // Resize canvas on window resize
        window.addEventListener('resize', drawGrid);
    </script>
</body>
</html>`
};
