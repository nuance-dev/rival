import { ModelResponse } from "@/types/models";

export const interactiveCatanBoardo1: ModelResponse = {
  id: "o1-interactive-catan-board",
  modelId: "o1"  ,
  prompt: "Create a web app with an interactive hex grid like Settlers of Catan, where the number of hexes can be adjusted using a slider. In a single-page self-contained HTML.",
  responseDate: "2025-02-28",
  type: "website"  ,
  title: "Interactive Catan Board"  ,
  description: "O1's response to the Tests an AI's ability to create interactive web elements",
  content: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Interactive Hex Grid</title>
  <style>
    body {
      margin: 0;
      padding: 0;
      font-family: sans-serif;
      background: #f0f0f0;
    }

    .controls {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 20px 0;
    }

    #sliderValue {
      font-weight: bold;
      margin-left: 10px;
    }

    /* Container for the entire hex grid */
    #hexContainer {
      display: flex;
      flex-direction: column;
      align-items: center; /* to center all rows */
      margin-bottom: 50px;
    }

    /* Each row in the hex grid */
    .hex-row {
      display: flex;
      flex-direction: row;
    }

    /* Offset even rows to create the staggered hex effect */
    .hex-row:nth-child(even) {
      margin-left: 50px; /* half of the hex width for offset */
    }

    /* Style for each individual hex cell */
    .hex {
      position: relative;
      width: 100px;
      height: 57.74px; /* = 100 * sqrt(3)/2, approximate */
      margin: 28.87px 5px; /* top/bottom = half height, side = small gap */
      background-color: #f1c40f; /* you can change this color */
      cursor: pointer;
      transition: transform 0.2s;
    }

    .hex:hover {
      transform: scale(1.05);
    }

    /* Create the hexagonal shape with ::before and ::after */
    .hex::before,
    .hex::after {
      content: "";
      position: absolute;
      width: 0;
      border-left: 50px solid transparent;  /* half of the hex width */
      border-right: 50px solid transparent; /* half of the hex width */
    }

    .hex::before {
      bottom: 100%;
      border-bottom: 28.87px solid #f1c40f; /* half of hex height */
    }

    .hex::after {
      top: 100%;
      border-top: 28.87px solid #f1c40f; /* half of hex height */
    }
  </style>
</head>
<body>

<div class="controls">
  <label for="slider">Number of Hexes per Row/Column:</label>
  <input type="range" id="slider" min="1" max="10" value="5" oninput="updateGrid()">
  <span id="sliderValue">5</span>
</div>

<div id="hexContainer">
  <!-- Hex grid will be dynamically injected here -->
</div>

<script>
  function updateGrid() {
    const slider = document.getElementById("slider");
    const valueDisplay = document.getElementById("sliderValue");
    const hexContainer = document.getElementById("hexContainer");
    
    // Retrieve the chosen size (number of hexes per row and column)
    const size = parseInt(slider.value);
    valueDisplay.textContent = size;
    
    // Clear any existing hex rows
    hexContainer.innerHTML = "";

    // Create 'size' rows, each containing 'size' hex cells
    for(let row = 0; row < size; row++) {
      const rowDiv = document.createElement("div");
      rowDiv.className = "hex-row";
      
      for(let col = 0; col < size; col++) {
        const hexDiv = document.createElement("div");
        hexDiv.className = "hex";
        
        // Optional: randomize color or text inside the hex
        // hexDiv.style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);

        rowDiv.appendChild(hexDiv);
      }
      hexContainer.appendChild(rowDiv);
    }
  }

  // Initialize the grid on first load
  updateGrid();
</script>

</body>
</html>
`
};
