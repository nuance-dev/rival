import { ModelResponse } from "@/types/models";

export const mathMisconceptiono1: ModelResponse = {
  id: "o1-math-misconception",
  modelId: "o1"  ,
  prompt: "Is 9.11 greater than 9.9?",
  responseDate: "2025-02-28",
  type: "text"  ,
  title: "Math Misconception Test"  ,
  description: "O1's response to the Tests an AI's understanding of number representation",
  content: `No, 9.11 is not greater than 9.9. If you think of 9.9 as 9.90, you can compare digit by digit:

- 9.11 is 9 + 0.11  
- 9.9 (or 9.90) is 9 + 0.90  

Since 0.11 is less than 0.90, 9.11 is less than 9.9.`
};
