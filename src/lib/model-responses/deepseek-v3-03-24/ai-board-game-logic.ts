import { ModelResponse } from "@/types/models";

export const aiBoardGameLogicdeepseek_v3_03_24: ModelResponse = {
  id: "deepseek-v3-03-24-ai-board-game-logic",
  modelId: "deepseek-v3-03-24",
  prompt: "Generate a valid but tricky tic-tac-toe board where the next move determines the winner. The output must only be an SVG.",
  responseDate: "2025-03-30",
  funFact: "Deepseek v3 added: X can win by playing in the top center. O can win by playing in the center right. The empty spaces are interactive areas where the next move would decide the game",
  type: "svg",
  title: "AI Board Game Logic",
  description: "DeepSeek V3 March 2024's response to the Tests an AI's ability to understand game rules and strategy",
  content: `<svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
  <!-- Board -->
  <rect x="0" y="0" width="300" height="300" fill="white" stroke="black" stroke-width="2"/>
  <line x1="100" y1="0" x2="100" y2="300" stroke="black" stroke-width="2"/>
  <line x1="200" y1="0" x2="200" y2="300" stroke="black" stroke-width="2"/>
  <line x1="0" y1="100" x2="300" y2="100" stroke="black" stroke-width="2"/>
  <line x1="0" y1="200" x2="300" y2="200" stroke="black" stroke-width="2"/>
  
  <!-- X and O pieces -->
  <line x1="20" y1="20" x2="80" y2="80" stroke="blue" stroke-width="4"/>
  <line x1="80" y1="20" x2="20" y2="80" stroke="blue" stroke-width="4"/>
  
  <line x1="120" y1="120" x2="180" y2="180" stroke="blue" stroke-width="4"/>
  <line x1="180" y1="120" x2="120" y2="180" stroke="blue" stroke-width="4"/>
  
  <circle cx="250" cy="50" r="30" stroke="red" stroke-width="4" fill="none"/>
  <circle cx="50" cy="250" r="30" stroke="red" stroke-width="4" fill="none"/>
  
  <!-- Empty spaces with potential winning moves -->
  <rect x="120" y="20" width="60" height="60" fill="white" opacity="0"/>
  <rect x="220" y="120" width="60" height="60" fill="white" opacity="0"/>
  <rect x="20" y="120" width="60" height="60" fill="white" opacity="0"/>
</svg>`
}; 