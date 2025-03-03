import { ModelResponse } from "@/types/models";

export const aiBoardGameLogicgrok_3: ModelResponse = {
  id: "grok-3-ai-board-game-logic",
  modelId: "grok-3",
  prompt: "Generate a valid but tricky tic-tac-toe board where the next move determines the winner. The output must only be an SVG. DON'T CREATE AN IMAGE",
  responseDate: "2025-02-26",
  type: "svg",
  title: "AI Board Game Logic",
  description: "Grok 3's response to the challenge testing AI's ability to understand game rules and strategy",
  content: `<svg width="300" height="300" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
  <!-- Grid lines -->
  <line x1="100" y1="0" x2="100" y2="300" stroke="black" stroke-width="2"/>
  <line x1="200" y1="0" x2="200" y2="300" stroke="black" stroke-width="2"/>
  <line x1="0" y1="100" x2="300" y2="100" stroke="black" stroke-width="2"/>
  <line x1="0" y1="200" x2="300" y2="200" stroke="black" stroke-width="2"/>

  <!-- X at top-left (0,0) -->
  <line x1="20" y1="20" x2="80" y2="80" stroke="red" stroke-width="10"/>
  <line x1="80" y1="20" x2="20" y2="80" stroke="red" stroke-width="10"/>

  <!-- O at top-center (0,1) -->
  <circle cx="150" cy="50" r="30" stroke="blue" stroke-width="10" fill="none"/>

  <!-- X at middle-center (1,1) -->
  <line x1="120" y1="120" x2="180" y2="180" stroke="red" stroke-width="10"/>
  <line x1="180" y1="120" x2="120" y2="180" stroke="red" stroke-width="10"/>

  <!-- O at bottom-left (2,0) -->
  <circle cx="50" cy="250" r="30" stroke="blue" stroke-width="10" fill="none"/>
</svg>`
}; 