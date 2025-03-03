import { ModelResponse } from "@/types/models";

export const logicPuzzlegemini_2_0_flash_thinking_exp: ModelResponse = {
  id: "gemini-2-0-flash-thinking-exp-logic-puzzle",
  modelId: "gemini-2-0-flash-thinking-exp",
  prompt: "Sally (a girl) has 3 brothers. Each brother has 2 sisters. How many sisters does Sally have?",
  responseDate: "2025-02-27",
  type: "text"  ,
  title: "Logic Puzzle" ,
  description: "Gemini 2.0 Flash Thinking Exp's response to the Tests an AI's ability to solve a simple but potentially confusing logic puzzle",
  content: `Here's how to solve this classic riddle:

* **Focus on the family:**  All the brothers and sisters are part of the same family.
* **Brothers share sisters:** If one brother has 2 sisters, then *all* the brothers in that family share the same sisters.

Since each brother has 2 sisters, and Sally is a sister in the family, those 2 sisters must include Sally and one other sister.

**Therefore, Sally has 2 sisters.**`
};
