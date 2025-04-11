import { ModelResponse } from "@/types/models";
import { sanitizeModelResponseContent } from "@/lib/utils";

export const interactiveCatanBoardGpt4oMini: ModelResponse = {
  id: "gpt-4o-mini-interactive-catan-board", // model-id-slug + challenge-id
  modelId: "gpt-4o-mini", // model-id-slug
  prompt: "Create a web app with an interactive hex grid like Settlers of Catan, where the number of hexes can be adjusted using a slider. In a single-page self-contained HTML.", // The prompt extracted in Step 2
  responseDate: "2025-04-11", // user_provided_date
  type: "website", // Determined from content
  title: "Interactive Catan Board", // From the gpt-4o reference file
  description: "GPT-4o mini's response creating an interactive hex grid using HTML and JS.", // Write a brief description
  content: sanitizeModelResponseContent(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hex Grid - Settlers of Catan</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 20px;
            background-color: #f4f4f4;
        }
        #grid-container {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            margin-top: 20px;
            position: relative;
            width: 80vw; /* Adjust as necessary */
        }
        .hex {
            width: 100px; /* Width of the hex */
            height: 57.74px; /* Height of the hex */
            background-color: #ffcc00;
            margin: 2px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-weight: bold;
            border-radius: 5px;
            position: relative;
            clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
        }
        .slider-container {
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .slider {
            width: 300px;
            margin: 0 10px;
        }
    </style>
</head>
<body>

<h1>Interactive Hex Grid</h1>
<div class="slider-container">
    <label for="hex-count">Number of hexes:</label>
    <input type="range" id="hex-count" class="slider" min="1" max="20" value="10">
    <span id="hex-count-value">10</span>
</div>

<div id="grid-container"></div>

<script>
    const hexCountInput = document.getElementById('hex-count');
    const hexCountValue = document.getElementById('hex-count-value');
    const gridContainer = document.getElementById('grid-container');

    function createHexGrid(numHexes) {
        gridContainer.innerHTML = '';
        for (let i = 0; i < numHexes; i++) {
            const hex = document.createElement('div');
            hex.className = 'hex';
            hex.innerText = i + 1; // Display hex number
            gridContainer.appendChild(hex);
        }
    }

    hexCountInput.oninput = function() {
        const numHexes = parseInt(hexCountInput.value);
        hexCountValue.innerText = numHexes;
        createHexGrid(numHexes);
    };

    // Initial grid creation
    createHexGrid(10);
</script>

</body>
</html>`)
}; 