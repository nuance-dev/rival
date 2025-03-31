import { ModelResponse } from "@/types/models";

export const aiBoardGameLogicchatgpt_4o_03_25: ModelResponse = {
  id: "chatgpt-4o-03-25-ai-board-game-logic",
  modelId: "chatgpt-4o-03-25",
  prompt: "Generate a valid but tricky tic-tac-toe board where the next move determines the winner. The output must only be an SVG.",
  responseDate: "2025-03-30",
  type: "svg",
  title: "AI Board Game Logic",
  description: "ChatGPT-4o March 2025's response to the Tests an AI's ability to understand game rules and strategy",
  content: `<svg viewBox="0 0 120 120" width="200" height="200" xmlns="http://www.w3.org/2000/svg">
  <!-- Grid -->
  <line x1="40" y1="0" x2="40" y2="120" stroke="black" stroke-width="2"/>
  <line x1="80" y1="0" x2="80" y2="120" stroke="black" stroke-width="2"/>
  <line x1="0" y1="40" x2="120" y2="40" stroke="black" stroke-width="2"/>
  <line x1="0" y1="80" x2="120" y2="80" stroke="black" stroke-width="2"/>

  <!-- X's -->
  <line x1="10" y1="10" x2="30" y2="30" stroke="black" stroke-width="3"/>
  <line x1="30" y1="10" x2="10" y2="30" stroke="black" stroke-width="3"/>

  <line x1="90" y1="10" x2="110" y2="30" stroke="black" stroke-width="3"/>
  <line x1="110" y1="10" x2="90" y2="30" stroke="black" stroke-width="3"/>

  <line x1="50" y1="50" x2="70" y2="70" stroke="black" stroke-width="3"/>
  <line x1="70" y1="50" x2="50" y2="70" stroke="black" stroke-width="3"/>

  <line x1="90" y1="90" x2="110" y2="110" stroke="black" stroke-width="3"/>
  <line x1="110" y1="90" x2="90" y2="110" stroke="black" stroke-width="3"/>

  <!-- O's -->
  <circle cx="60" cy="20" r="10" stroke="black" stroke-width="3" fill="none"/>
  <circle cx="20" cy="60" r="10" stroke="black" stroke-width="3" fill="none"/>
  <circle cx="100" cy="60" r="10" stroke="black" stroke-width="3" fill="none"/>
  <circle cx="60" cy="100" r="10" stroke="black" stroke-width="3" fill="none"/>

  <!-- Next move at center wins for X -->
</svg>
`
}; 