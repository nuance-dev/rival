import { ModelResponse } from "@/types/models";

export const interactiveCatanBoardgrok_3: ModelResponse = {
  id: "grok-3-interactive-catan-board",
  modelId: "grok-3",
  prompt: "Create a web app with an interactive hex grid like Settlers of Catan, where the number of hexes can be adjusted using a slider. In a single-page self-contained HTML.",
  responseDate: "2025-03-01",
  type: "website",
  title: "Interactive Catan Board",
  description: "Grok 3's response to the Tests an AI's ability to create interactive web elements",
  content: `<!DOCTYPE html>
<html>
<head>
    <title>Hex Grid Generator</title>
    <style>
        body {
            margin: 0;
            padding: 20px;
            display: flex;
            flex-direction: column;
            align-items: center;
            background: #f0f0f0;
            font-family: Arial, sans-serif;
        }
        #controls {
            margin-bottom: 20px;
            text-align: center;
        }
        #canvas {
            border: 1px solid #ccc;
        }
        .slider-container {
            margin: 10px 0;
        }
    </style>
</head>
<body>
    <div id="controls">
        <h2>Hex Grid Generator</h2>
        <div class="slider-container">
            <label for="sizeSlider">Grid Size (3-10): </label>
            <input type="range" id="sizeSlider" min="3" max="10" value="5">
            <span id="sizeValue">5</span>
        </div>
    </div>
    <canvas id="canvas"></canvas>

    <script>
        const canvas = document.getElementById('canvas');
        const ctx = canvas.getContext('2d');
        const slider = document.getElementById('sizeSlider');
        const sizeValue = document.getElementById('sizeValue');

        // Hexagon properties
        const hexSize = 50;  // Radius of hexagon
        const hexHeight = hexSize * Math.sqrt(3);
        const colors = ['#ffd700', '#87ceeb', '#90ee90', '#d2b48c', '#ffdead']; // Resource colors

        function resizeCanvas(size) {
            const width = hexSize * 3 * size;
            const height = hexHeight * (size + 0.5);
            canvas.width = width;
            canvas.height = height;
        }

        function drawHex(x, y, fillColor) {
            ctx.beginPath();
            for (let i = 0; i < 6; i++) {
                const angle = (Math.PI / 3) * i;
                const px = x + hexSize * Math.cos(angle);
                const py = y + hexSize * Math.sin(angle);
                if (i === 0) {
                    ctx.moveTo(px, py);
                } else {
                    ctx.lineTo(px, py);
                }
            }
            ctx.closePath();
            ctx.fillStyle = fillColor;
            ctx.fill();
            ctx.strokeStyle = '#666';
            ctx.stroke();
        }

        function drawGrid(size) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            const centerX = canvas.width / 2;
            const centerY = canvas.height / 2;

            for (let q = -size + 1; q < size; q++) {
                for (let r = -size + 1; r < size; r++) {
                    // Only draw hexes within the roughly circular boundary
                    if (Math.abs(q) + Math.abs(r) + Math.abs(-q - r) <= size * 2 - 1) {
                        const x = centerX + hexSize * 1.5 * q;
                        const y = centerY + hexHeight * (r + q / 2);
                        const color = colors[Math.floor(Math.random() * colors.length)];
                        drawHex(x, y, color);
                    }
                }
            }
        }

        function updateGrid() {
            const size = parseInt(slider.value);
            sizeValue.textContent = size;
            resizeCanvas(size);
            drawGrid(size);
        }

        // Event listeners
        slider.addEventListener('input', updateGrid);

        // Initial draw
        updateGrid();
    </script>
</body>
</html>`
}; 