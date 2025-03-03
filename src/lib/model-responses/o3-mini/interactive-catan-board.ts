import { ModelResponse } from "@/types/models";

export const interactiveCatanBoardo3_mini: ModelResponse = {
  id: "o3-mini-interactive-catan-board",
  modelId: "o3-mini",
  prompt: "Create a web app with an interactive hex grid like Settlers of Catan, where the number of hexes can be adjusted using a slider. In a single-page self-contained HTML.",
  responseDate: "2025-02-28",
  type: "website"  ,
  title: "Interactive Catan Board"  ,
  description: "o3 Mini's response to the Tests an AI's ability to create interactive web elements",
  content: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Interactive Hex Grid</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      text-align: center;
      margin: 0;
      padding: 20px;
      background: #f0f0f0;
    }
    #controls {
      margin-bottom: 20px;
    }
    #hexGrid {
      display: inline-block;
    }
    .row {
      display: flex;
      justify-content: center;
    }
    .hex {
      width: 80px;
      height: 70px;
      background-color: #6c9;
      margin: 5px;
      /* Create a hexagon shape */
      clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
      display: flex;
      align-items: center;
      justify-content: center;
      transition: transform 0.2s, background-color 0.2s;
      cursor: pointer;
      user-select: none;
    }
    .hex:hover {
      transform: scale(1.1);
      background-color: #9cf;
    }
    .hex.clicked {
      background-color: #f66;
    }
  </style>
</head>
<body>
  <div id="controls">
    <label for="gridSize">Grid Size: <span id="gridSizeValue">5</span></label>
    <br>
    <input type="range" id="gridSize" min="2" max="10" value="5">
  </div>
  <div id="hexGrid"></div>

  <script>
    const hexGrid = document.getElementById('hexGrid');
    const gridSizeInput = document.getElementById('gridSize');
    const gridSizeValue = document.getElementById('gridSizeValue');

    // Create a grid with "size" rows and "size" hexes per row.
    function createGrid(size) {
      hexGrid.innerHTML = ''; // Clear any existing grid
      let hexCount = 0;
      for (let row = 0; row < size; row++) {
        const rowDiv = document.createElement('div');
        rowDiv.classList.add('row');
        // Offset odd rows to create a staggered hex grid
        if (row % 2 !== 0) {
          rowDiv.style.marginLeft = '40px';
        }
        for (let col = 0; col < size; col++) {
          const hex = document.createElement('div');
          hex.classList.add('hex');
          hex.dataset.hexId = hexCount;
          hex.textContent = hexCount;
          // Toggle the "clicked" state on click
          hex.addEventListener('click', () => {
            hex.classList.toggle('clicked');
          });
          rowDiv.appendChild(hex);
          hexCount++;
        }
        hexGrid.appendChild(rowDiv);
      }
    }

    // Initialize grid with default slider value
    createGrid(parseInt(gridSizeInput.value));

    // Update grid when the slider value changes
    gridSizeInput.addEventListener('input', () => {
      const size = parseInt(gridSizeInput.value);
      gridSizeValue.textContent = size;
      createGrid(size);
    });
  </script>
</body>
</html>
`
};
