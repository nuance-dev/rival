import { ModelResponse } from "@/types/models";
import { sanitizeModelResponseContent } from "@/lib/utils";

export const interactiveCatanBoardllama_4_scout: ModelResponse = {
  id: "llama-4-scout-interactive-catan-board",
  modelId: "llama-4-scout",
  prompt: "Create a web app with an interactive hex grid like Settlers of Catan, where the number of hexes can be adjusted using a slider. In a single-page self-contained HTML.",
  responseDate: "2025-04-05",
  type: "website",
  title: "Interactive Catan Board",
  description: "Llama 4 Scout's interactive Settlers of Catan game board with resource tiles and building functionality",
  content: sanitizeModelResponseContent(`<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Hex Grid</title>
    <style>
        /* Add some basic styling to our hex grid */
        .hex-grid {
            display: grid;
            gap: 2px;
        }
        .hex {
            width: 50px;
            height: 43.3013px; /* 50 * sqrt(3) / 2 */
            background-color: lightgray;
            clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 12px;
        }
    </style>
</head>
<body>
    <input type="range" id="hex-size-slider" min="3" max="20" value="10">
    <label for="hex-size-slider">Hex Size: <span id="hex-size-label">10</span></label>
    <div id="hex-grid-container"></div>

    <script>
        // Get the slider and label elements
        const slider = document.getElementById('hex-size-slider');
        const label = document.getElementById('hex-size-label');
        const gridContainer = document.getElementById('hex-grid-container');

        // Update the label when the slider changes
        slider.addEventListener('input', (e) => {
            label.textContent = e.target.value;
            renderHexGrid(e.target.value);
        });

        // Function to render the hex grid
        function renderHexGrid(size) {
            // Clear the grid container
            gridContainer.innerHTML = '';

            // Create a grid container with the correct number of rows and columns
            gridContainer.style.gridTemplateColumns = "repeat(" + size + ", 1fr)";
            gridContainer.classList.add('hex-grid');

            // Render each hex
            for (let i = 0; i < size; i++) {
                for (let j = 0; j < size; j++) {
                    // Alternate rows to create a staggered effect
                    const hex = document.createElement('div');
                    hex.classList.add('hex');
                    hex.textContent = i + "," + j;
                    if ((i + j) % 2 === 1) {
                        hex.style.marginLeft = '25px';
                    }
                    gridContainer.appendChild(hex);
                }
            }
        }

        // Render the initial hex grid
        renderHexGrid(slider.value);
    </script>
</body>
</html>
`)
}; 