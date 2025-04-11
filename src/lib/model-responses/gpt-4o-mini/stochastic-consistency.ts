import { ModelResponse } from "@/types/models";

export const stochasticConsistencyGpt4oMini: ModelResponse = {
  id: "gpt-4o-mini-stochastic-consistency", // model-id-slug + challenge-id
  modelId: "gpt-4o-mini", // model-id-slug
  prompt: "Generate 5 jokes. How many are unique?", // The prompt extracted in Step 2
  responseDate: "2025-04-11", // user_provided_date
  type: "text", // Determined from content
  title: "Stochastic Consistency Test", // From the gpt-4o reference file
  description: "GPT-4o mini's response to the challenge: Generate 5 jokes. How many are unique?", // Write a brief description
  content: `Here are five jokes for you:

1. Why did the scarecrow win an award? Because he was outstanding in his field!

2. What do you call fake spaghetti? An impasta!

3. Why don't skeletons fight each other? They don't have the guts!

4. What did one wall say to the other wall? "I'll meet you at the corner!"

5. Why did the bicycle fall over? Because it was two-tired!

All five jokes are unique!`
}; 