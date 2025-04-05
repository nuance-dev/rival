import { ModelResponse } from "@/types/models";
import { sanitizeModelResponseContent } from "@/lib/utils";

export const interactiveCatanBoardllama_4_maverick: ModelResponse = {
  id: "llama-4-maverick-interactive-catan-board",
  modelId: "llama-4-maverick",
  prompt: "Create a web app with an interactive hex grid like Settlers of Catan, where the number of hexes can be adjusted using a slider. In a single-page self-contained HTML.",
  responseDate: "2025-04-05",
  type: "website",
  title: "Interactive Catan Board",
  description: "Llama 4 Maverick's interactive Settlers of Catan game board with resource tiles and building functionality",
  content: sanitizeModelResponseContent(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hex Grid</title>
    <style>
        body {
            font-family: Arial, sans-serif;
        }
        #grid-container {
            width: 800px;
            height: 600px;
            border: 1px solid black;
        }
    </style>
</head>
<body>

<div>
    <label for="hex-size">Number of Hexes along edge:</label>
    <input type="range" id="hex-size" min="3" max="7" value="5">
    <span id="hex-size-display">5</span>
</div>
<div id="grid-container">
    <svg id="hex-grid" width="100%" height="100%"></svg>
</div>

<script>
    let hexSizeInput = document.getElementById('hex-size');
    let hexSizeDisplay = document.getElementById('hex-size-display');
    let svg = document.getElementById('hex-grid');

    hexSizeInput.oninput = function() {
        hexSizeDisplay.innerText = this.value;
        drawHexGrid(parseInt(this.value));
    };

    function drawHexGrid(size) {
        // Clear existing grid
        svg.innerHTML = '';

        let hexRadius = Math.min(svg.clientWidth / (size * 1.5 + 0.5), svg.clientHeight / (size * Math.sqrt(3) + Math.sqrt(3)/2)) / 2;
        let hexWidth = hexRadius * 2;
        let hexHeight = hexRadius * Math.sqrt(3);

        for (let row = 0; row < size; row++) {
            for (let col = 0; col < size + row; col++) {
                let x = (col + 0.5 * (size - row - 1)) * hexWidth * 0.75 + hexWidth / 2;
                let y = row * hexHeight + hexHeight / 2;

                let hex = document.createElementNS("http://www.w3.org/2000/svg", 'polygon');
                hex.setAttribute('points', getHexPoints(x, y, hexRadius));
                hex.setAttribute('fill', getRandomColor());
                hex.setAttribute('stroke', 'black');
                svg.appendChild(hex);

                let text = document.createElementNS("http://www.w3.org/2000/svg", 'text');
                text.setAttribute('x', x);
                text.setAttribute('y', y + 5);
                text.setAttribute('text-anchor', 'middle');
                text.textContent = row + ',' + col;
                svg.appendChild(text);
            }
        }

        for (let row = 1; row < size; row++) {
            for (let col = 0; col < size - row; col++) {
                let x = (col + 0.5 * (size - 1)) * hexWidth * 0.75 + hexWidth / 2;
                let y = row * hexHeight + size * hexHeight + hexHeight / 2;

                let hex = document.createElementNS("http://www.w3.org/2000/svg", 'polygon');
                hex.setAttribute('points', getHexPoints(x, y, hexRadius));
                hex.setAttribute('fill', getRandomColor());
                hex.setAttribute('stroke', 'black');
                svg.appendChild(hex);

                let text = document.createElementNS("http://www.w3.org/2000/svg", 'text');
                text.setAttribute('x', x);
                text.setAttribute('y', y + 5);
                text.setAttribute('text-anchor', 'middle');
                text.textContent = (row + size - 1) + ',' + col;
                svg.appendChild(text);
            }
        }
    }

    function getHexPoints(x, y, radius) {
        let points = '';
        for (let i = 0; i < 6; i++) {
            let angle = i * Math.PI / 3;
            points += (x + radius * Math.cos(angle)) + ',' + (y + radius * Math.sin(angle)) + ' ';
        }
        return points.trim();
    }

    function getRandomColor() {
        let colors = ['#FFC080', '#C9E4CA', '#87CEEB', '#F7D2C4', '#C5CAE9'];
        return colors[Math.floor(Math.random() * colors.length)];
    }

    // Initial draw
    drawHexGrid(parseInt(hexSizeInput.value));
</script>

</body>
</html>`)
}; 