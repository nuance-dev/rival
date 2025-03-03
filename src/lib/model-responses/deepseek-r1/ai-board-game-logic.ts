import { ModelResponse } from "@/types/models";

export const aiBoardGameLogicdeepseek_r1: ModelResponse = {
  id: "deepseek-r1-ai-board-game-logic",
  modelId: "deepseek-r1",
  prompt: "Generate a valid but tricky tic-tac-toe board where the next move determines the winner. The output must only be an SVG.",
  responseDate: "2025-02-27",
  type: "svg",
  title: "AI Board Game Logic",
  description: "Deepseek R1's response to the Tests an AI's ability to understand game rules and strategy",
  funFact: "Fun fact: R1 thought for 288 seconds for this response, and the results had to be modified to render correctly in the browser",
  content: `<svg width="300" height="300" xmlns="http://www.w3.org/2000/svg">
  <!-- Grid lines -->
  <line x1="100" y1="0" x2="100" y2="300" stroke="black" stroke-width="2"/>
  <line x1="200" y1="0" x2="200" y2="300" stroke="black" stroke-width="2"/>
  <line x1="0" y1="100" x2="300" y2="100" stroke="black" stroke-width="2"/>
  <line x1="0" y1="200" x2="300" y2="200" stroke="black" stroke-width="2"/>
  
  <!-- Top-left X -->
  <line x1="20" y1="20" x2="80" y2="80" stroke="black" stroke-width="2"/>
  <line x1="80" y1="20" x2="20" y2="80" stroke="black" stroke-width="2"/>
  
  <!-- Center X -->
  <line x1="120" y1="120" x2="180" y2="180" stroke="black" stroke-width="2"/>
  <line x1="180" y1="120" x2="120" y2="180" stroke="black" stroke-width="2"/>
  
  <!-- Top-middle O -->
  <circle cx="150" cy="50" r="30" stroke="black" stroke-width="2" fill="none"/>
  
  <!-- Bottom-left O -->
  <circle cx="50" cy="250" r="30" stroke="black" stroke-width="2" fill="none"/>
</svg>`
};
