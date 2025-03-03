import { ModelResponse } from "@/types/models";

export const logicPuzzleo1: ModelResponse = {
  id: "o1-logic-puzzle",
  modelId: "o1"  ,
  prompt: "Sally (a girl) has 3 brothers. Each brother has 2 sisters. How many sisters does Sally have?",
  responseDate: "2025-02-28",
  type: "text"  ,
  title: "Logic Puzzle"  ,
  description: "O1's response to the Tests an AI's ability to solve a simple but potentially confusing logic puzzle",
  content: `First, note that each of Sally’s **three brothers** has exactly **two sisters**. One of those sisters is clearly Sally. Since each brother’s two sisters must be the same two girls for all of them, there must be **exactly one other sister** besides Sally.

Therefore, **Sally has 1 sister**.`
};
