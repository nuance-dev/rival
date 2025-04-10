import { ModelResponse } from "@/types/models";
import { sanitizeModelResponseContent } from "@/lib/utils";

export const interactiveCatanBoardResponse: ModelResponse = {
  id: "optimus-alpha-interactive-catan-board",
  modelId: "optimus-alpha",
  prompt: "Create a web app with an interactive hex grid like Settlers of Catan, where the number of hexes can be adjusted using a slider. In a single-page self-contained HTML.",
  responseDate: "2025-04-10",
  type: "website",
  title: "Interactive Catan Board",
  description: "Generates an interactive hex grid website similar to Settlers of Catan.",
  content: sanitizeModelResponseContent(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <title>Interactive Catan Hex Grid</title>
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <style>
    body {
      font-family: sans-serif;
      text-align: center;
      background: #eef3e6;
    }
    #container {
      max-width: 900px;
      margin: 0 auto;
    }
    #controls {
      margin: 1.5em;
    }
    #hexGrid {
      background: #e0dfbe;
      border: 2px solid #a9a583;
      border-radius: 10px;
      margin: auto;
      touch-action: none;
      display: block;
    }
    .hex {
      stroke: #555;
      stroke-width: 2;
      fill: #f4e2c2;
      cursor: pointer;
      transition: fill 0.18s;
    }
    .hex:hover {
      fill: #eab465 !important;
    }
    .hex.selected {
      fill: #489f94 !important;
      stroke: #265d56;
      stroke-width: 4;
    }
    .hexLabel {
      pointer-events: none;
      font-weight: bold;
      font-size: 15px;
      fill: #4d4a31;
      text-shadow: 1px 1px 0 #fff;
    }
    @media (max-width: 600px) {
      #hexGrid {
        width: 100vw !important;
        height: 75vw !important;
      }
    }
  </style>
</head>
<body>
<div id="container">
  <h2>Interactive Settlers of Catan Hex Grid</h2>
  <div id="controls">
    <label for="slider">Board Radius: <span id="radiusVal">3</span></label>
    <input type="range" id="slider" min="2" max="6" value="3" />
  </div>
  <svg id="hexGrid" width="730" height="650"></svg>
  <div style="margin-top: 1em; color: #777;">
    <b>Tip:</b> Try different board sizes, and click hexes!
  </div>
</div>
<script>
  // --- CONFIGS ---
  const HEX_SIZE = 55;          // radius length (px) of each hex
  const HEX_HEIGHT = Math.sqrt(3)*HEX_SIZE;
  const BOARD_PADDING = 20;     // px margin for the board in SVG
  const svg = document.getElementById('hexGrid');
  const slider = document.getElementById('slider');
  const radiusLabel = document.getElementById('radiusVal');

  // == Calculate All Hex Coordinates in Axial (q,r) for Catan-style board
  function generateHexCoords(radius) {
    // All hexes with |q| + |r| + |s| = radius*2 and q + r + s = 0; s = -q - r
    let hexes = [];
    for (let q = -radius + 1; q <= radius - 1; q++) {
      for (let r = -radius + 1; r <= radius - 1; r++) {
        let s = -q - r;
        if (Math.max(Math.abs(q), Math.abs(r), Math.abs(s)) < radius) {
          hexes.push({q, r, s});
        }
      }
    }
    return hexes;
  }

  // == Convert axial (q,r) coords to pixel (x,y)
  function hexToPixel(q, r, options = {}) {
    // Flat-topped hex
    const size = options.size || HEX_SIZE;
    const x = size * (3/2 * q);
    const y = size * (Math.sqrt(3)/2 * q + Math.sqrt(3) * r);
    return [x, y];
  }

  // == Build hexagon points for SVG polygon string
  function polygonPoints(cx, cy, size) {
    let pts = [];
    for (let i=0; i<6; i++) {
      const angle = Math.PI / 180 * (60 * i - 30);
      const x = cx + size * Math.cos(angle);
      const y = cy + size * Math.sin(angle);
      pts.push(x.toFixed(2) + "," + y.toFixed(2));
    }
    return pts.join(" ");
  }

  // == Draw grid
  let currentHexes = [], currentRadius = 3, selectedHex = null;

  function renderGrid(radius) {
    currentRadius = radius;
    svg.innerHTML = "";
    radiusLabel.textContent = radius;

    currentHexes = generateHexCoords(radius);

    // Find bounds of hexes to center SVG
    let positions = currentHexes.map(h => hexToPixel(h.q, h.r));
    let xs = positions.map(pos => pos[0]), ys = positions.map(pos => pos[1]);
    let minX = Math.min(...xs), maxX = Math.max(...xs);
    let minY = Math.min(...ys), maxY = Math.max(...ys);
    let boardW = maxX - minX + HEX_SIZE*2 + BOARD_PADDING*2;
    let boardH = maxY - minY + HEX_SIZE*2 + BOARD_PADDING*2;

    // Set SVG size & viewBox for center alignment & responsiveness
    svg.setAttribute('width', boardW);
    svg.setAttribute('height', boardH);
    svg.setAttribute('viewBox', '0 0 ' + boardW + ' ' + boardH);

    // Centering offset
    const offsetX = (boardW / 2) - ((minX + maxX) / 2);
    const offsetY = (boardH / 2) - ((minY + maxY) / 2);

    // Draw all hexes
    currentHexes.forEach((h, i) => {
      let [cx, cy] = hexToPixel(h.q, h.r);
      cx += offsetX; cy += offsetY;

      // HEX SHAPE
      let hex = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
      hex.setAttribute("points", polygonPoints(cx, cy, HEX_SIZE));
      hex.setAttribute("class", "hex");
      hex.setAttribute("data-idx", i);
      if (selectedHex === i) hex.classList.add("selected");

      // CLICK to select
      hex.addEventListener('click', function(e) {
        selectedHex = i;
        renderGrid(currentRadius); // re-render for highlighting
      });
      // Optionally label: q,r
      const showLabels = true;
      svg.appendChild(hex);

      if (showLabels) {
        let txt = document.createElementNS("http://www.w3.org/2000/svg", "text");
        txt.setAttribute("x", cx);
        txt.setAttribute("y", cy + 6);
        txt.setAttribute("text-anchor", "middle");
        txt.setAttribute("class", "hexLabel");
        txt.textContent = h.q + ',' + h.r;
        svg.appendChild(txt);
      }
    });
  }

  // -- INITIAL
  renderGrid(parseInt(slider.value));

  // -- EVENTS
  slider.addEventListener('input', function() {
    selectedHex = null; // clear selection on board resize
    renderGrid(parseInt(this.value));
  });

  // Allow clicking outside any hex to unselect
  svg.addEventListener('click', function(e) {
    if (e.target === svg) {
      selectedHex = null;
      renderGrid(currentRadius);
    }
  });
</script>
</body>
</html>
`)
}; 