import { ModelResponse } from "@/types/models";

export const logicPuzzledeepseek_r1: ModelResponse = {
  id: "deepseek-r1-logic-puzzle",
  modelId: "deepseek-r1",
  prompt: "Sally (a girl) has 3 brothers. Each brother has 2 sisters. How many sisters does Sally have?",
  responseDate: "2025-02-27",
  type: "text"  ,
  title: "Logic Puzzle"  ,
  description: "Deepseek R1's response to the Tests an AI's ability to solve a simple but potentially confusing logic puzzle",
  content: `Sally has 3 brothers. Each brother has 2 sisters. Since Sally is one sister, there must be one more sister to make the total number of sisters each brother has equal to 2. Therefore, Sally has **1 sister**.

**Answer:** Sally has 1 sister.`
};
