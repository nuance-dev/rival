import { ModelResponse } from "@/types/models";

export const logicPuzzlegpt_4o: ModelResponse = {
  id: "gpt-4o-logic-puzzle",
  modelId: "gpt-4o",
  prompt: "Sally (a girl) has 3 brothers. Each brother has 2 sisters. How many sisters does Sally have?",
  responseDate: "2025-02-28",
  type: "text"  ,
  title: "Logic Puzzle"  ,
  description: "Gpt 4o's response to the Tests an AI's ability to solve a simple but potentially confusing logic puzzle",
  content: `Sally has **only one sister**.

### Explanation:
- Sally has **3 brothers**.
- Each brother has **2 sisters**.
- The two sisters are **Sally and one other girl**.

Thus, Sally has **1 sister**.`
};
