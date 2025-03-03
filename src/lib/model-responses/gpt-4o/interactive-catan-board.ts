import { ModelResponse } from "@/types/models";
import { sanitizeModelResponseContent } from "@/lib/utils";

export const interactiveCatanBoardgpt_4o: ModelResponse = {
  id: "gpt-4o-interactive-catan-board",
  modelId: "gpt-4o",
  prompt: "Create a web app with an interactive hex grid like Settlers of Catan, where the number of hexes can be adjusted using a slider. In a single-page self-contained HTML.",
  responseDate: "2025-02-28",
  type: "website",
  title: "Interactive Catan Board",
  description: "Gpt 4o's response to the Tests an AI's ability to create interactive web elements",
  content: sanitizeModelResponseContent(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hex Grid</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            background-color: #f4f4f4;
        }
        .container {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-top: 20px;
        }
        .grid {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            width: 90vw;
        }
        .hex {
            width: 60px;
            height: 69px;
            background-color: #f9c74f;
            clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
            margin: 5px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: bold;
            user-select: none;
            cursor: pointer;
        }
        .hex:hover {
            background-color: #f8961e;
        }
    </style>
</head>
<body>
    <div class="container">
        <label for="size">Grid Size:</label>
        <input type="range" id="size" min="2" max="10" value="5" oninput="generateGrid(this.value)">
        <div class="grid" id="hexGrid"></div>
    </div>
    
    <script>
        function generateGrid(size) {
            const grid = document.getElementById("hexGrid");
            grid.innerHTML = "";
            
            for (let row = 0; row < size; row++) {
                for (let col = 0; col < size; col++) {
                    const hex = document.createElement("div");
                    hex.className = "hex";
                    hex.textContent = \`\${row},\${col}\`;
                    hex.onclick = () => alert(\`Hex \${row},\${col} clicked!\`);
                    grid.appendChild(hex);
                }
            }
        }
        generateGrid(5);
    </script>
</body>
</html>
`)
};
