import { ModelResponse } from "@/types/models";

export const logicPuzzleGpt4oMini: ModelResponse = {
  id: "gpt-4o-mini-logic-puzzle", // model-id-slug + challenge-id
  modelId: "gpt-4o-mini", // model-id-slug
  prompt: "Sally (a girl) has 3 brothers. Each brother has 2 sisters. How many sisters does Sally have?", // The prompt extracted in Step 2
  responseDate: "2025-04-11", // user_provided_date
  type: "text", // Determined from content
  title: "Logic Puzzle", // From the gpt-4o reference file
  description: "GPT-4o mini's response to the logic puzzle about Sally's sisters.", // Write a brief description
  content: `Sally has no sisters. She is the only girl in her family, as the problem states that she has 3 brothers and they each have 2 sisters, which refers to Sally herself. Therefore, the number of sisters Sally has is 0.`
}; 