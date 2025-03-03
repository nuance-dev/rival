import { ModelResponse } from "@/types/models";

export const aiBoardGameLogicclaude_3_7_sonnet_thinking: ModelResponse = {
  id: "claude-3-7-sonnet-thinking-ai-board-game-logic",
  modelId: "claude-3-7-sonnet-thinking",
  prompt: "Generate a valid but tricky tic-tac-toe board where the next move determines the winner. The output must only be an SVG.",
  responseDate: "2025-02-27",
  type: "svg"  ,
  title: "AI Board Game Logic"  ,
  description: "Claude 3.7 Sonnet Thinking's response to the Tests an AI's ability to understand game rules and strategy",
  content: `<svg width="300" height="300" xmlns="http://www.w3.org/2000/svg">
<!-- Background -->
<rect width="300" height="300" fill="white"/>
<!-- Grid lines -->
<line x1="100" y1="0" x2="100" y2="300" stroke="black" stroke-width="5"/>
<line x1="200" y1="0" x2="200" y2="300" stroke="black" stroke-width="5"/>
<line x1="0" y1="100" x2="300" y2="100" stroke="black" stroke-width="5"/>
<line x1="0" y1="200" x2="300" y2="200" stroke="black" stroke-width="5"/>
<!-- X's -->
<line x1="20" y1="20" x2="80" y2="80" stroke="red" stroke-width="8" stroke-linecap="round"/>
<line x1="80" y1="20" x2="20" y2="80" stroke="red" stroke-width="8" stroke-linecap="round"/>
<line x1="20" y1="120" x2="80" y2="180" stroke="red" stroke-width="8" stroke-linecap="round"/>
<line x1="80" y1="120" x2="20" y2="180" stroke="red" stroke-width="8" stroke-linecap="round"/>
<line x1="220" y1="220" x2="280" y2="280" stroke="red" stroke-width="8" stroke-linecap="round"/>
<line x1="280" y1="220" x2="220" y2="280" stroke="red" stroke-width="8" stroke-linecap="round"/>
<!-- O's -->
<circle cx="150" cy="50" r="30" stroke="blue" stroke-width="8" fill="none"/>
<circle cx="150" cy="150" r="30" stroke="blue" stroke-width="8" fill="none"/>
<circle cx="50" cy="250" r="30" stroke="blue" stroke-width="8" fill="none"/>`
};
