import { ModelResponse } from "@/types/models";

export const logicPuzzleclaude_3_7_sonnet_thinking: ModelResponse = {
  id: "claude-3-7-sonnet-thinking-logic-puzzle",
  modelId: "claude-3-7-sonnet-thinking",
  prompt: "Sally (a girl) has 3 brothers. Each brother has 2 sisters. How many sisters does Sally have?",
  responseDate: "2025-02-27",
  type: "text"  ,
  title: "Logic Puzzle"  ,
  description: "Claude 3.7 Sonnet Thinking's response to the Tests an AI's ability to solve a simple but potentially confusing logic puzzle",
  content: `To solve this problem, I need to analyze the relationships carefully.

Given:
- Sally (a girl) has 3 brothers
- Each brother has 2 sisters

Since Sally is a girl, she counts as a sister to her brothers. So each of Sally's brothers has Sally as one of their sisters.

If each brother has 2 sisters total, and one of those sisters is Sally, then there must be exactly 1 other sister that all the brothers share.

Therefore, Sally has 1 sister.
`
};
