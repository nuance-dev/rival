import { ModelResponse } from "@/types/models";

export const aiBoardGameLogicgpt_4o: ModelResponse = {
  id: "gpt-4o-ai-board-game-logic",
  modelId: "gpt-4o",
  prompt: "Generate a valid but tricky tic-tac-toe board where the next move determines the winner. The output must only be an SVG.",
  responseDate: "2025-02-28",
  type: "svg",
  title: "AI Board Game Logic",
  description: "Gpt 4o's response to the Tests an AI's ability to understand game rules and strategy",
  content: `<svg width="300" height="300" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
    <!-- Grid -->
    <line x1="100" y1="0" x2="100" y2="300" stroke="black" stroke-width="5"/>
    <line x1="200" y1="0" x2="200" y2="300" stroke="black" stroke-width="5"/>
    <line x1="0" y1="100" x2="300" y2="100" stroke="black" stroke-width="5"/>
    <line x1="0" y1="200" x2="300" y2="200" stroke="black" stroke-width="5"/>
    
    <!-- X and O placements -->
    <!-- Row 1 -->
    <circle cx="50" cy="50" r="30" stroke="black" stroke-width="5" fill="none"/> <!-- O -->
    <line x1="120" y1="20" x2="180" y2="80" stroke="black" stroke-width="5"/> <!-- X -->
    <line x1="180" y1="20" x2="120" y2="80" stroke="black" stroke-width="5"/>
    <circle cx="250" cy="50" r="30" stroke="black" stroke-width="5" fill="none"/> <!-- O -->
    
    <!-- Row 2 -->
    <line x1="20" y1="120" x2="80" y2="180" stroke="black" stroke-width="5"/> <!-- X -->
    <line x1="80" y1="120" x2="20" y2="180" stroke="black" stroke-width="5"/>
    <circle cx="150" cy="150" r="30" stroke="black" stroke-width="5" fill="none"/> <!-- O -->
    <line x1="220" y1="120" x2="280" y2="180" stroke="black" stroke-width="5"/> <!-- X -->
    <line x1="280" y1="120" x2="220" y2="180" stroke="black" stroke-width="5"/>
    
    <!-- Row 3 -->
    <circle cx="50" cy="250" r="30" stroke="black" stroke-width="5" fill="none"/> <!-- O -->
    <line x1="120" y1="220" x2="180" y2="280" stroke="black" stroke-width="5"/> <!-- X -->
    <line x1="180" y1="220" x2="120" y2="280" stroke="black" stroke-width="5"/>
    <!-- Empty spot at (250,250) for the next winning move -->
</svg>`
};
