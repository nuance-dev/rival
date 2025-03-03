import { ModelResponse } from "@/types/models";
import { sanitizeModelResponseContent } from "@/lib/utils";

export const interactiveCatanBoarddeepseek_r1: ModelResponse = {
  id: "deepseek-r1-interactive-catan-board",
  modelId: "deepseek-r1",
  prompt: "Create a web app with an interactive hex grid like Settlers of Catan, where the number of hexes can be adjusted using a slider. In a single-page self-contained HTML.",
  responseDate: "2025-02-27",
  type: "website",
  title: "Interactive Catan Board",
  funFact: "Fun fact: R1 thought for 330 seconds for this one",
  description: "Deepseek R1's response to the Tests an AI's ability to create interactive web elements",
  content: sanitizeModelResponseContent(`<!DOCTYPE html>
<html>
<head>
    <title>Catan-like Hex Grid</title>
    <style>
        body {
            display: flex;
            flex-direction: column;
            align-items: center;
            background-color: #f0f0f0;
            margin: 20px;
            font-family: Arial, sans-serif;
        }
        #controls {
            margin-bottom: 20px;
            display: flex;
            gap: 10px;
            align-items: center;
        }
        #grid-container {
            position: relative;
            width: 90vw;
            height: 70vh;
            overflow: visible;
        }
        .hex {
            --hex-size: 40px;
            width: calc(var(--hex-size) * 1.732);
            height: calc(var(--hex-size) * 2);
            position: absolute;
            background-color: #6b8c42;
            clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: filter 0.2s;
            font-weight: bold;
            color: white;
            text-shadow: 1px 1px 2px rgba(0,0,0,0.5);
        }
        .hex:hover {
            filter: brightness(1.1);
        }
        .hex.selected {
            filter: hue-rotate(180deg);
        }
        input[type="range"] {
            width: 200px;
        }
    </style>
</head>
<body>
    <div id="controls">
        <label for="radiusSlider">Grid Radius:</label>
        <input type="range" id="radiusSlider" min="1" max="5" value="2">
        <span id="radiusValue">2</span>
    </div>
    <div id="grid-container"></div>

    <script>
        const slider = document.getElementById('radiusSlider');
        const radiusValue = document.getElementById('radiusValue');
        const gridContainer = document.getElementById('grid-container');
        const hexSize = 40; // Base size for hexagons

        function generateHexCoordinates(radius) {
            const hexes = [];
            for (let q = -radius; q <= radius; q++) {
                for (let r = -radius; r <= radius; r++) {
                    const s = -q - r;
                    if (Math.abs(q) <= radius && Math.abs(r) <= radius && Math.abs(s) <= radius) {
                        hexes.push({ q, r });
                    }
                }
            }
            return hexes;
        }

        function createHexElement(q, r) {
            const hex = document.createElement('div');
            hex.className = 'hex';
            
            // Calculate pixel positions
            const x = hexSize * 1.732 * (q + r/2);
            const y = hexSize * 1.5 * r;
            
            // Position hex relative to container center
            hex.style.left = 'calc(50% + ' + x + 'px)';
            hex.style.top = 'calc(50% + ' + y + 'px)';
            
            // Add number display (random between 2-12)
            hex.textContent = Math.floor(Math.random() * 11) + 2;
            
            hex.addEventListener('click', function() {
                this.classList.toggle('selected');
            });
            
            return hex;
        }

        function updateGrid() {
            const radius = parseInt(slider.value);
            radiusValue.textContent = radius;
            
            // Clear existing hexes
            gridContainer.innerHTML = '';
            
            // Generate new hexes
            const hexCoordinates = generateHexCoordinates(radius);
            hexCoordinates.forEach(({ q, r }) => {
                const hex = createHexElement(q, r);
                gridContainer.appendChild(hex);
            });
        }

        slider.addEventListener('input', updateGrid);
        updateGrid(); // Initial grid creation
    </script>
</body>
</html>`)
};
