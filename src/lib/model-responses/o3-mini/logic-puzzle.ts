import { ModelResponse } from "@/types/models";

export const logicPuzzleo3_mini: ModelResponse = {
  id: "o3-mini-logic-puzzle",
  modelId: "o3-mini",
  prompt: "Sally (a girl) has 3 brothers. Each brother has 2 sisters. How many sisters does Sally have?",
  responseDate: "2025-02-28",
  type: "text"  ,
  title: "Logic Puzzle"  ,
  description: "O3 Mini's response to the Tests an AI's ability to solve a simple but potentially confusing logic puzzle",
  content: `Sally has **1 sister**.

**Explanation:**  
Sally's 3 brothers each have 2 sisters. Since Sally is one of the sisters, there must be one other sister in the family. Thus, aside from Sally, there is one more sister.
`
};
