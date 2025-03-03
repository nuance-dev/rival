import { ModelResponse } from "@/types/models";

export const aiBoardGameLogico3_mini: ModelResponse = {
  id: "o3-mini-ai-board-game-logic",
  modelId: "o3-mini",
  prompt: "Generate a valid but tricky tic-tac-toe board where the next move determines the winner. The output must only be an SVG.",
  responseDate: "2024-05-25",
  type: "svg"  ,
  title: "AI Board Game Logic"  ,
  description: "O3 Mini's response to the Tests an AI's ability to understand game rules and strategy",
  content: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300">
  <!-- Grid lines -->
  <line x1="100" y1="0" x2="100" y2="300" stroke="black" stroke-width="4"/>
  <line x1="200" y1="0" x2="200" y2="300" stroke="black" stroke-width="4"/>
  <line x1="0" y1="100" x2="300" y2="100" stroke="black" stroke-width="4"/>
  <line x1="0" y1="200" x2="300" y2="200" stroke="black" stroke-width="4"/>
  
  <!-- X and O marks -->
  <!-- Position 1 (top-left): X -->
  <text x="50" y="50" font-size="40" text-anchor="middle" dominant-baseline="middle">X</text>
  <!-- Position 2 (top-center): O -->
  <text x="150" y="50" font-size="40" text-anchor="middle" dominant-baseline="middle">O</text>
  <!-- Position 3 (top-right): X -->
  <text x="250" y="50" font-size="40" text-anchor="middle" dominant-baseline="middle">X</text>
  <!-- Position 4 (middle-left): O -->
  <text x="50" y="150" font-size="40" text-anchor="middle" dominant-baseline="middle">O</text>
  <!-- Position 5 (center): X -->
  <text x="150" y="150" font-size="40" text-anchor="middle" dominant-baseline="middle">X</text>
  <!-- Position 7 (bottom-left): O -->
  <text x="50" y="250" font-size="40" text-anchor="middle" dominant-baseline="middle">O</text>
  
  <!-- The remaining cells (positions 6, 8, 9) are empty.
       Note: Position 9 is the winning move for X (completing the diagonal 1–5–9). -->
  <!-- Optional: Highlight position 9 to hint at the decisive move -->
  <rect x="200" y="200" width="100" height="100" fill="none" stroke="green" stroke-width="4" stroke-dasharray="5,5"/>
</svg>
`
};
