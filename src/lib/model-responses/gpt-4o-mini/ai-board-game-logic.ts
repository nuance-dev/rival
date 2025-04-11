import { ModelResponse } from "@/types/models";

export const aiBoardGameLogicGpt4oMini: ModelResponse = {
  id: "gpt-4o-mini-ai-board-game-logic", // model-id-slug + challenge-id
  modelId: "gpt-4o-mini", // model-id-slug
  prompt: "Generate a valid but tricky tic-tac-toe board where the next move determines the winner. The output must only be an SVG.", // The prompt extracted in Step 2
  responseDate: "2025-04-11", // user_provided_date
  type: "svg", // Determined from content
  title: "AI Board Game Logic", // From the gpt-4o reference file
  description: "GPT-4o mini's response creating an SVG of a tricky Tic-Tac-Toe board.", // Write a brief description
  content: `<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
    <!-- Background -->
    <rect width="100%" height="100%" fill="white" />
    
    <!-- Grid Lines -->
    <line x1="66.67" y1="0" x2="66.67" y2="200" stroke="black" stroke-width="3" />
    <line x1="133.33" y1="0" x2="133.33" y2="200" stroke="black" stroke-width="3" />
    <line x1="0" y1="66.67" x2="200" y2="66.67" stroke="black" stroke-width="3" />
    <line x1="0" y1="133.33" x2="200" y2="133.33" stroke="black" stroke-width="3" />

    <!-- X's -->
    <text x="20" y="50" font-family="Arial" font-size="48" fill="black">X</text>
    <text x="120" y="50" font-family="Arial" font-size="48" fill="black">X</text>
    
    <!-- O's -->
    <text x="20" y="150" font-family="Arial" font-size="48" fill="black">O</text>
    <text x="120" y="150" font-family="Arial" font-size="48" fill="black">O</text>

    <!-- This is an empty cell -->
    <text x="120" y="100" font-family="Arial" font-size="48" fill="black"></text>
</svg>`
}; 