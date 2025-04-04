import { ModelResponse } from "@/types/models";
import { sanitizeModelResponseContent } from "@/lib/utils";

export const interactiveCatanBoardquasar_alpha: ModelResponse = {
  id: "quasar-alpha-interactive-catan-board",
  modelId: "quasar-alpha",
  prompt: "Create a web app with an interactive hex grid like Settlers of Catan, where the number of hexes can be adjusted using a slider. In a single-page self-contained HTML.",
  responseDate: "2025-04-04",
  type: "website",
  title: "Interactive Catan Board",
  description: "Quasar Alpha's response to the challenge of creating interactive web elements",
  content: sanitizeModelResponseContent(`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<title>Interactive Hex Grid</title>
<style>
  body {
    font-family: sans-serif;
    text-align: center;
    margin: 0;
    padding: 0;
    overflow: hidden;
  }
  #controls {
    background: #eee;
    padding: 10px;
  }
  #hexCanvas {
    display: block;
    margin: 0 auto;
    background: #f9f9f9;
  }
</style>
</head>
<body>

<div id="controls">
  <label for="sizeSlider">Grid Size:</label>
  <input type="range" id="sizeSlider" min="2" max="10" value="5">
  <span id="sizeValue">5</span> x <span id="sizeValue2">5</span>
</div>

<canvas id="hexCanvas" width="800" height="600"></canvas>

<script>
const slider = document.getElementById('sizeSlider');
const sizeVal = document.getElementById('sizeValue');
const sizeVal2 = document.getElementById('sizeValue2');
const canvas = document.getElementById('hexCanvas');
const ctx = canvas.getContext('2d');

let cols = parseInt(slider.value);
let rows = cols;

slider.oninput = () => {
  cols = parseInt(slider.value);
  rows = cols;
  sizeVal.textContent = cols;
  sizeVal2.textContent = rows;
  generateHexGrid();
};

const HEX_SIZE = 40; // Radius of a hexagon
const sqrt3 = Math.sqrt(3);

let hexes = []; // Array of hex objects

function generateHexGrid() {
  hexes = [];
  for(let r = 0; r < rows; r++) {
    for(let q = 0; q < cols; q++) {
      const x = HEX_SIZE * sqrt3 * (q + 0.5 * (r % 2)) + HEX_SIZE + 20;
      const y = HEX_SIZE * 1.5 * r + HEX_SIZE + 20;
      hexes.push({q, r, x, y, toggled: false});
    }
  }
  drawHexes();
}

function drawHex(x, y, size, fillStyle, strokeStyle) {
  ctx.beginPath();
  for(let i=0; i<6; i++) {
    const angle = Math.PI/180 * (60 * i -30);
    const xi = x + size * Math.cos(angle);
    const yi = y + size * Math.sin(angle);
    if(i===0) ctx.moveTo(xi, yi);
    else ctx.lineTo(xi, yi);
  }
  ctx.closePath();
  ctx.fillStyle = fillStyle;
  ctx.fill();
  ctx.strokeStyle = strokeStyle;
  ctx.stroke();
}

function drawHexes() {
  ctx.clearRect(0,0,canvas.width,canvas.height);
  hexes.forEach(hex => {
    drawHex(hex.x, hex.y, HEX_SIZE,
            hex.toggled ? "#ffd700" : "#ccc",
            "#333");
  });
}

// Detect click on hex
canvas.addEventListener('click', function(evt){
  const rect = canvas.getBoundingClientRect();
  const x = evt.clientX - rect.left;
  const y = evt.clientY - rect.top;
  
  hexes.forEach(hex => {
    if(pointInHex(x,y,hex.x,hex.y,HEX_SIZE)){
      hex.toggled = !hex.toggled;
    }
  });
  drawHexes();
});

// Point-in-hexagon detection
function pointInHex(x, y, hx, hy, size){
  const dx = Math.abs(x - hx) / size;
  const dy = Math.abs(y - hy) / size;
  if(dy > 0.8660254) return false;
  return (0.57735027 * dx + dy) < 0.8660254;
}

// Initialize
generateHexGrid();

</script>
</body>
</html>
`)
}; 