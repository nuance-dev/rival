import { ModelResponse } from "@/types/models";

export const logicPuzzleclaude_3_7_sonnet: ModelResponse = {
  id: "claude-3-7-sonnet-logic-puzzle",
  modelId: "claude-3-7-sonnet",
  prompt: "Sally (a girl) has 3 brothers. Each brother has 2 sisters. How many sisters does Sally have?",
  responseDate: "2025-02-27",
  type: "text"  ,
  title: "Logic Puzzle"  ,
  description: "Claude 3.7 Sonnet's response to the Tests an AI's ability to solve a simple but potentially confusing logic puzzle",
  content: `This is an interesting logical reasoning problem! Let's work through it step by step.

We know:
- Sally is a girl
- Sally has 3 brothers
- Each brother has 2 sisters

The key insight is that Sally herself counts as a sister to her brothers. So when we're told that "each brother has 2 sisters," Sally is one of those sisters.

Since each brother has 2 sisters total, and Sally is one of them, that means each brother has 1 sister besides Sally.

But all brothers share the same sisters (they're all siblings in the same family). So if Sally has 3 brothers, and each brother has the same 2 sisters (Sally and someone else), then Sally has exactly 1 sister.

Therefore, Sally has 1 sister.
`
};
