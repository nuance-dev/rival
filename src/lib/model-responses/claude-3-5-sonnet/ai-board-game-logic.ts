import { ModelResponse } from "@/types/models";

export const aiBoardGameLogicclaude_3_5_sonnet: ModelResponse = {
  id: "claude-3-5-sonnet-ai-board-game-logic",
  modelId: "claude-3-5-sonnet",
  prompt: "Generate a valid but tricky tic-tac-toe board where the next move determines the winner. The output must only be an SVG.",
  responseDate: "2025-02-26",
  type: "svg",
  title: "AI Board Game Logic"  ,
  description: "Claude 3 5 Sonnet's response to the Tests an AI's ability to understand game rules and strategy",
  content: `<svg width="300" height="300" xmlns="http://www.w3.org/2000/svg">
    <!-- Grid lines -->
    <line x1="100" y1="0" x2="100" y2="300" stroke="black" stroke-width="2"/>
    <line x1="200" y1="0" x2="200" y2="300" stroke="black" stroke-width="2"/>
    <line x1="0" y1="100" x2="300" y2="100" stroke="black" stroke-width="2"/>
    <line x1="0" y1="200" x2="300" y2="200" stroke="black" stroke-width="2"/>
    
    <!-- X in top-left -->
    <line x1="20" y1="20" x2="80" y2="80" stroke="blue" stroke-width="3"/>
    <line x1="80" y1="20" x2="20" y2="80" stroke="blue" stroke-width="3"/>
    
    <!-- O in top-middle -->
    <circle cx="150" cy="50" r="30" stroke="red" stroke-width="3" fill="none"/>
    
    <!-- X in top-right -->
    <line x1="220" y1="20" x2="280" y2="80" stroke="blue" stroke-width="3"/>
    <line x1="280" y1="20" x2="220" y2="80" stroke="blue" stroke-width="3"/>
    
    <!-- O in middle-left -->
    <circle cx="50" cy="150" r="30" stroke="red" stroke-width="3" fill="none"/>
    
    <!-- X in center -->
    <line x1="120" y1="120" x2="180" y2="180" stroke="blue" stroke-width="3"/>
    <line x1="180" y1="120" x2="120" y2="180" stroke="blue" stroke-width="3"/>
    
    <!-- O in middle-right -->
    <circle cx="250" cy="150" r="30" stroke="red" stroke-width="3" fill="none"/>
    
    <!-- X in bottom-left -->
    <line x1="20" y1="220" x2="80" y2="280" stroke="blue" stroke-width="3"/>
    <line x1="80" y1="220" x2="20" y2="280" stroke="blue" stroke-width="3"/>
    
    <!-- O in bottom-middle -->
    <circle cx="150" cy="250" r="30" stroke="red" stroke-width="3" fill="none"/>
</svg>`
};
