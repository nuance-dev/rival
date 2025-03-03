import { ModelResponse } from "@/types/models";

export const mathMisconceptiongpt_4o: ModelResponse = {
  id: "gpt-4o-math-misconception",
  modelId: "gpt-4o",
  prompt: "Is 9.11 greater than 9.9?",
  responseDate: "2025-02-28",
  type: "text",
  title: "Math Misconception Test",
  description: "Gpt 4o's response to the Tests an AI's understanding of number representation",
  content: `No, 9.11 is less than 9.9.

This is because 9.11 is equivalent to **9.110**, and 9.9 is equivalent to **9.900**. Since 9.110 is smaller than 9.900, 9.9 is greater than 9.11.`
};
