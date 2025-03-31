import { ModelResponse } from "@/types/models";
import { sanitizeModelResponseContent } from "@/lib/utils";

export const interactiveUcatanUboardchatgpt_4o_03_25: ModelResponse = {
  id: "chatgpt-4o-03-25-interactive-catan-board",
  modelId: "chatgpt-4o-03-25",
  prompt: "Create a web app with an interactive hex grid like Settlers of Catan, where the number of hexes can be adjusted using a slider. In a single-page self-contained HTML.",
  responseDate: "2025-03-30",
  type: "website",
  title: "interactive-catan-board",
  description: "ChatGPT-4o March 2025's response",
  content: sanitizeModelResponseContent(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Hex Grid</title>
  <style>
    body {
      margin: 0;
      font-family: sans-serif;
      display: flex;
      flex-direction: column;
      align-items: center;
      background: #f4f4f4;
    }
    #controls {
      margin: 20px;
    }
    canvas {
      border: 1px solid #ccc;
    }
  </style>
</head>
<body>
  <div id="controls">
    <label for="hexCount">Hex Rows: <span id="hexCountLabel">5</span></label>
    <input type="range" id="hexCount" min="2" max="10" value="5">
  </div>
  <canvas id="hexCanvas" width="800" height="600"></canvas>

  <script>
    const canvas = document.getElementById("hexCanvas");
    const ctx = canvas.getContext("2d");
    const slider = document.getElementById("hexCount");
    const label = document.getElementById("hexCountLabel");

    function drawHex(x, y, size) {
      const angle = Math.PI / 3;
      ctx.beginPath();
      for (let i = 0; i < 6; i++) {
        const dx = x + size * Math.cos(angle * i);
        const dy = y + size * Math.sin(angle * i);
        ctx.lineTo(dx, dy);
      }
      ctx.closePath();
      ctx.stroke();
      ctx.fillStyle = '#d6eaf8';
      ctx.fill();
    }

    function drawGrid(rows) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const size = 40;
      const hexHeight = Math.sqrt(3) * size;
      const cols = rows * 2;

      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const x = size * 1.5 * col + 60;
          const y = hexHeight * row + 60 + (col % 2) * (hexHeight / 2);
          drawHex(x, y, size);
        }
      }
    }

    slider.addEventListener("input", () => {
      label.textContent = slider.value;
      drawGrid(Number(slider.value));
    });

    drawGrid(Number(slider.value));
  </script>
</body>
</html>
`)
}; 