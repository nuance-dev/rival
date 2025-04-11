import { ModelResponse } from "@/types/models";

export const mathMisconceptionGpt4oMini: ModelResponse = {
  id: "gpt-4o-mini-math-misconception", // model-id-slug + challenge-id
  modelId: "gpt-4o-mini", // model-id-slug
  prompt: "Is 9.11 greater than 9.9?", // The prompt extracted in Step 2
  responseDate: "2025-04-11", // user_provided_date
  type: "text", // Determined from content
  title: "Math Misconception Test", // From the gpt-4o reference file
  description: "GPT-4o mini's response to the challenge: Is 9.11 greater than 9.9?", // Write a brief description
  content: `No, 9.11 is not greater than 9.9. In fact, 9.11 is less than 9.9.`
}; 