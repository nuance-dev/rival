import { ModelResponse } from "@/types/models";

export const stochasticConsistencyOptimusAlpha: ModelResponse = {
  id: "optimus-alpha-stochastic-consistency",
  modelId: "optimus-alpha",
  prompt: "Generate 5 jokes. How many are unique?",
  responseDate: "2025-04-11",
  type: "text",
  title: "Stochastic Consistency Test",
  description: "Optimus Alpha's response assessing its randomness and creativity.",
  content: `Here are 5 jokes:

1. Why did the scarecrow win an award? Because he was outstanding in his field!
2. Why don't scientists trust atoms? Because they make up everything!
3. Why did the bicycle fall over? Because it was two-tired!
4. What do you call fake spaghetti? An impasta!
5. I used to play piano by ear, but now I use my hands.

**Uniqueness Analysis:**  
All 5 jokes listed above are unique; none of them repeat or are rewordings of each other.

**Answer:**  
There are **5 unique jokes**.`
}; 