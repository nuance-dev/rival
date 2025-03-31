import { ModelResponse } from "@/types/models";
import { sanitizeModelResponseContent } from "@/lib/utils";

export const interactiveUcatanUboarddeepseek_v3_03_24: ModelResponse = {
  id: "deepseek-v3-03-24-interactive-catan-board",
  modelId: "deepseek-v3-03-24",
  prompt: "Create a web app with an interactive hex grid like Settlers of Catan, where the number of hexes can be adjusted using a slider. In a single-page self-contained HTML.",
  responseDate: "2025-03-30",
  type: "website",
  title: "interactive-catan-board",
  description: "DeepSeek V3 March 2024's response",
  content: sanitizeModelResponseContent(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Catan-Style Hex Grid</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            margin: 0;
            padding: 20px;
            background-color: #f0f0f0;
        }
        .controls {
            margin-bottom: 20px;
            padding: 15px;
            background-color: #fff;
            border-radius: 8px;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
            display: inline-block;
        }
        .slider-container {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
        }
        #hexGrid {
            margin: 0 auto;
            position: relative;
            width: fit-content;
            transform-origin: center;
        }
        .hex {
            position: absolute;
            width: 100px;
            height: 115.47px;
            background-color: #6a9e5e;
            clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-weight: bold;
            cursor: pointer;
            transition: transform 0.2s, filter 0.2s;
            box-shadow: 0 0 5px rgba(0,0,0,0.3);
        }
        .hex:hover {
            transform: scale(1.05);
            filter: brightness(1.1);
            z-index: 10;
        }
        .hex-number {
            background-color: rgba(0,0,0,0.7);
            width: 30px;
            height: 30px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 14px;
        }
        .hex-resource {
            position: absolute;
            top: 10px;
            font-size: 12px;
            width: 100%;
            text-align: center;
        }
        label {
            font-weight: bold;
            margin-right: 10px;
        }
        input[type="range"] {
            width: 200px;
        }
        .value-display {
            min-width: 30px;
            display: inline-block;
        }
    </style>
</head>
<body>
    <h1>Catan-Style Hex Grid</h1>
    <div class="controls">
        <div class="slider-container">
            <label for="gridSize">Grid Size:</label>
            <input type="range" id="gridSize" min="1" max="5" value="3" step="1">
            <span class="value-display" id="sizeValue">3</span>
        </div>
    </div>
    <div id="hexGrid"></div>

    <script>
        const resources = [
            { name: "Wood", color: "#4a7c3a", symbol: "🌲" },
            { name: "Brick", color: "#b3594a", symbol: "🧱" },
            { name: "Sheep", color: "#8fbb5e", symbol: "🐑" },
            { name: "Wheat", color: "#e8c95b", symbol: "🌾" },
            { name: "Ore", color: "#7a7a7a", symbol: "⛏️" },
            { name: "Desert", color: "#e5d8b8", symbol: "🏜️" }
        ];
        
        const numberTokens = [2, 3, 3, 4, 4, 5, 5, 6, 6, 8, 8, 9, 9, 10, 10, 11, 11, 12];
        
        const gridSizeSlider = document.getElementById('gridSize');
        const sizeValue = document.getElementById('sizeValue');
        const hexGrid = document.getElementById('hexGrid');
        
        gridSizeSlider.addEventListener('input', function() {
            sizeValue.textContent = this.value;
            createHexGrid(parseInt(this.value));
        });
        
        function createHexGrid(size) {
            // Clear existing grid
            hexGrid.innerHTML = '';
            
            // Calculate grid dimensions
            const hexWidth = 100;
            const hexHeight = 115.47;
            const centerX = size * hexWidth * 0.75;
            const centerY = size * hexHeight * 0.5;
            
            // Create a pool of resources and numbers for this grid size
            const hexCount = 3*size*(size-1)+1;
            const availableResources = [...resources];
            const availableNumbers = [...numberTokens];
            
            // Add more resources for larger grids
            while (availableResources.length < hexCount) {
                availableResources.push(...resources.filter(r => r.name !== "Desert"));
            }
            
            // Shuffle arrays
            shuffleArray(availableResources);
            shuffleArray(availableNumbers);
            
            let hexIndex = 0;
            let numberIndex = 0;
            
            // Create hexes in concentric rings
            for (let q = -size + 1; q < size; q++) {
                for (let r = -size + 1; r < size; r++) {
                    const s = -q - r;
                    if (Math.abs(q) <= size - 1 && Math.abs(r) <= size - 1 && Math.abs(s) <= size - 1) {
                        // Calculate pixel coordinates
                        const x = centerX + q * hexWidth * 0.75;
                        const y = centerY + (r - s) * hexHeight * 0.5;
                        
                        // Create hex element
                        const hex = document.createElement('div');
                        hex.className = 'hex';
                        hex.style.left = x + 'px';
                        hex.style.top = y + 'px';
                        
                        // Assign resource and color
                        const resource = availableResources[hexIndex % availableResources.length];
                        hex.style.backgroundColor = resource.color;
                        
                        // Add resource symbol
                        const resourceSymbol = document.createElement('div');
                        resourceSymbol.className = 'hex-resource';
                        resourceSymbol.textContent = resource.symbol;
                        hex.appendChild(resourceSymbol);
                        
                        // Add number token (except for desert)
                        if (resource.name !== "Desert") {
                            const number = availableNumbers[numberIndex % availableNumbers.length];
                            const numberElement = document.createElement('div');
                            numberElement.className = 'hex-number';
                            numberElement.textContent = number;
                            hex.appendChild(numberElement);
                            numberIndex++;
                        }
                        
                        hexGrid.appendChild(hex);
                        hexIndex++;
                    }
                }
            }
        }
        
        // Fisher-Yates shuffle algorithm
        function shuffleArray(array) {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
        }
        
        // Initialize grid
        createHexGrid(parseInt(gridSizeSlider.value));
    </script>
</body>
</html>`)
}; 