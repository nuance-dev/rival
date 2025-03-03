import { ModelResponse } from "@/types/models";

export const logicPuzzleclaude_3_5_sonnet: ModelResponse = {
  id: "claude-3-5-sonnet-logic-puzzle",
  modelId: "claude-3-5-sonnet",
  prompt: "Sally (a girl) has 3 brothers. Each brother has 2 sisters. How many sisters does Sally have?",
  responseDate: "2025-02-26",
  type: "text"  ,
  title: "Logic Puzzle"  ,
  description: "Claude 3 5 Sonnet's response to the Tests an AI's ability to solve a simple but potentially confusing logic puzzle",
  content: `Let me help solve this word problem step by step.

Let's break it down:
1. Sally is a girl
2. Sally has 3 brothers
3. Each brother has 2 sisters

The key insight here is that if each brother has 2 sisters, and we know Sally is one of those sisters, then all brothers must share the same sisters.

Since each brother has 2 sisters total, and we know Sally is one of them, there must be one other sister.

Therefore, Sally has 1 sister.

To verify:
- Sally + her 1 sister = 2 sisters total
- This matches the fact that each of the 3 brothers has 2 sisters

The answer is 1 sister.
`
};
