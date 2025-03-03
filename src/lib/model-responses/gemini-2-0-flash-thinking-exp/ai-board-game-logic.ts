import { ModelResponse } from "@/types/models";

export const aiBoardGameLogicgemini_2_0_flash_thinking_exp: ModelResponse = {
  id: "gemini-2-0-flash-thinking-exp-ai-board-game-logic",
  modelId: "gemini-2-0-flash-thinking-exp",
  prompt: "Generate a valid but tricky tic-tac-toe board where the next move determines the winner. The output must only be an SVG.",
  responseDate: "2025-02-27",
  type: "svg",
  title: "AI Board Game Logic"  ,
  description: "Gemini 2.0 Flash Thinking Exp's response to the Tests an AI's ability to understand game rules and strategy",
  content: `<svg width="300" height="300">
  <!-- Board Lines -->
  <line x1="100" y1="0" x2="100" y2="300" stroke="black" stroke-width="2"/>
  <line x1="200" y1="0" x2="200" y2="300" stroke="black" stroke-width="2"/>
  <line y1="100" x1="0" y2="100" x2="300" stroke="black" stroke-width="2"/>
  <line y1="200" x1="0" y2="200" x2="300" stroke="black" stroke-width="2"/>

  <!-- X marks -->
  <line x1="125" y1="25" x2="175" y2="75" stroke="black" stroke-width="3"/>
  <line x1="175" y1="25" x2="125" y2="75" stroke="black" stroke-width="3"/>
  <line x1="25" y1="225" x2="75" y2="275" stroke="black" stroke-width="3"/>
  <line x1="75" y1="225" x2="25" y2="275" stroke="black" stroke-width="3"/>

  <!-- O marks -->
  <circle cx="250" cy="50" r="25" stroke="black" stroke-width="3" fill="none"/>
  <circle cx="50" cy="150" r="25" stroke="black" stroke-width="3" fill="none"/>
  <circle cx="250" cy="250" r="25" stroke="black" stroke-width="3" fill="none"/>
</svg>`
};
