import { ModelResponse } from "@/types/models";

export const aiBoardGameLogicgemini_2_5_pro_exp: ModelResponse = {
  id: "gemini-2-5-pro-exp-ai-board-game-logic",
  modelId: "gemini-2-5-pro-exp",
  prompt: "Generate a valid but tricky tic-tac-toe board where the next move determines the winner. The output must only be an SVG.",
  responseDate: "2025-03-25",
  type: "svg",
  title: "AI Board Game Logic",
  description: "Gemini 2.5 Pro Experimental's response to the Tests an AI's ability to understand game rules and strategy",
  content: `<svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
  <style>
    .grid { stroke: black; stroke-width: 5; }
    .X { stroke: #FF5733; stroke-width: 10; stroke-linecap: round; } /* Orange-Red */
    .O { stroke: #33C4FF; stroke-width: 10; fill: none; } /* Light Blue */
    /* Define coordinates relative to cell centers (50,50), (150,50) etc. */
    /* X lines go from center-offset to center+offset */
    /* O circle centered on cell center */
    .offset { transform: translate(-150px, -150px); } /* Offset for centering pieces */
  </style>

  <!-- Grid Lines -->
  <line class="grid" x1="100" y1="0" x2="100" y2="300" />
  <line class="grid" x1="200" y1="0" x2="200" y2="300" />
  <line class="grid" x1="0" y1="100" x2="300" y2="100" />
  <line class="grid" x1="0" y1="200" x2="300" y2="200" />

  <!-- Pieces: Board State
       O X X
       X O .
       O . X
       (4 X's, 3 O's -> O's turn. O wins by playing bottom-middle)
  -->

  <!-- Row 1 -->
  <circle class="O" cx="50" cy="50" r="35" />
  <g class="X">
    <line x1="120" y1="20" x2="180" y2="80" />
    <line x1="180" y1="20" x2="120" y2="80" />
  </g>
  <g class="X">
    <line x1="220" y1="20" x2="280" y2="80" />
    <line x1="280" y1="20" x2="220" y2="80" />
  </g>

  <!-- Row 2 -->
  <g class="X">
    <line x1="20" y1="120" x2="80" y2="180" />
    <line x1="80" y1="120" x2="20" y2="180" />
  </g>
  <circle class="O" cx="150" cy="150" r="35" />
  <!-- Cell (1,2) is empty -->

  <!-- Row 3 -->
  <circle class="O" cx="50" cy="250" r="35" />
  <!-- Cell (2,1) is empty - WINNING MOVE FOR O -->
  <g class="X">
    <line x1="220" y1="220" x2="280" y2="280" />
    <line x1="280" y1="220" x2="220" y2="280" />
  </g>

</svg>`
}; 