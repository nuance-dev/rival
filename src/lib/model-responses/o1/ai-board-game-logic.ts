import { ModelResponse } from "@/types/models";

export const aiBoardGameLogico1: ModelResponse = {
  id: "o1-ai-board-game-logic",
  modelId: "o1"  ,
  prompt: "Generate a valid but tricky tic-tac-toe board where the next move determines the winner. The output must only be an SVG.",
  responseDate: "2025-02-28",
  type: "svg"  ,
  title: "AI Board Game Logic"  ,
  description: "O1's response to the Tests an AI's ability to understand game rules and strategy",
  content: `<svg width="300" height="300" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">

  <!-- Draw the tic-tac-toe grid -->
  <line x1="100" y1="0" x2="100" y2="300" stroke="black" stroke-width="2" />
  <line x1="200" y1="0" x2="200" y2="300" stroke="black" stroke-width="2" />
  <line x1="0"   y1="100" x2="300" y2="100" stroke="black" stroke-width="2" />
  <line x1="0"   y1="200" x2="300" y2="200" stroke="black" stroke-width="2" />

  <!-- Top row -->
  <text x="50"  y="50"  text-anchor="middle" dominant-baseline="middle" font-size="60" font-family="sans-serif">X</text>
  <text x="150" y="50"  text-anchor="middle" dominant-baseline="middle" font-size="60" font-family="sans-serif">O</text
`
};
