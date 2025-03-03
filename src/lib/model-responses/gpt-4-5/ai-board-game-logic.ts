import { ModelResponse } from "@/types/models";

export const aiBoardGameLogicgpt_4_5: ModelResponse = {
  id: "gpt-4-5-ai-board-game-logic",
  modelId: "gpt-4-5",
  prompt: "Generate a valid but tricky tic-tac-toe board where the next move determines the winner. The output must only be an SVG.",
  responseDate: "2025-02-28",
  type: "svg",
  title: "AI Board Game Logic",
  funFact: "4.5 said: This board is tricky because at first glance, it looks balanced. However, the next move (X) at the middle-left position (row 2, column 1) will immediately result in a diagonal win for X",
  description: "GPT-4.5's creation of a strategic tic-tac-toe board situation as an SVG",
  content: `<svg xmlns="http://www.w3.org/2000/svg" width="150" height="150">
  <!-- Draw grid -->
  <line x1="50" y1="0" x2="50" y2="150" stroke="black" stroke-width="2"/>
  <line x1="100" y1="0" x2="100" y2="150" stroke="black" stroke-width="2"/>
  <line x1="0" y1="50" x2="150" y2="50" stroke="black" stroke-width="2"/>
  <line x1="0" y1="100" x2="150" y2="100" stroke="black" stroke-width="2"/>

  <!-- X and O positions -->
  <!-- Row 1 -->
  <text x="15" y="35" font-size="30">X</text>
  <text x="65" y="35" font-size="30">O</text>
  <!-- Row 2 -->
  <text x="65" y="85" font-size="30">X</text>
  <text x="115" y="85" font-size="30">O</text>
  <!-- Row 3 -->
  <text x="15" y="135" font-size="30">O</text>
  <text x="115" y="135" font-size="30">X</text>
</svg>`
};