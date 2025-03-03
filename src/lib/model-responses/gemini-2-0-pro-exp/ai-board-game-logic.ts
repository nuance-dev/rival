import { ModelResponse } from "@/types/models";

export const aiBoardGameLogicgemini_2_0_pro_exp: ModelResponse = {
  id: "gemini-2-0-pro-exp-ai-board-game-logic",
  modelId: "gemini-2-0-pro-exp",
  prompt: "Generate a valid but tricky tic-tac-toe board where the next move determines the winner. The output must only be an SVG.",
  responseDate: "2025-02-27",
  type: "svg",
  title: "AI Board Game Logic",
  description: "Gemini 2.0 Pro Exp's response to the Tests an AI's ability to understand game rules and strategy",
  content: `<svg width="300" height="300" xmlns="http://www.w3.org/2000/svg">
  <!-- Board lines -->
  <line x1="100" y1="0" x2="100" y2="300" stroke="black" stroke-width="5"/>
  <line x1="200" y1="0" x2="200" y2="300" stroke="black" stroke-width="5"/>
  <line x1="0" y1="100" x2="300" y2="100" stroke="black" stroke-width="5"/>
  <line x1="0" y1="200" x2="300" y2="200" stroke="black" stroke-width="5"/>

  <!-- X's -->
  <text x="30" y="80" font-size="60" font-family="Arial" fill="blue">X</text>
  <text x="130" y="80" font-size="60" font-family="Arial" fill="blue">X</text>
    <text x="30" y="180" font-size="60" font-family="Arial" fill="blue">X</text>
  <text x="230" y="280" font-size="60" font-family="Arial" fill="blue">X</text>


  <!-- O's -->
  <text x="230" y="80" font-size="60" font-family="Arial" fill="red">O</text>
  <text x="130" y="180" font-size="60" font-family="Arial" fill="red">O</text>
    <text x="230" y="180" font-size="60" font-family="Arial" fill="red">O</text>
  <text x="130" y="280" font-size="60" font-family="Arial" fill="red">O</text>

</svg>`
};
