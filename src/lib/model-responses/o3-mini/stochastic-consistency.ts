import { ModelResponse } from "@/types/models";

export const stochasticConsistencyo3_mini: ModelResponse = {
  id: "o3-mini-stochastic-consistency",
  modelId: "o3-mini",
  prompt: "Generate 5 jokes. How many are unique?",
  responseDate: "2025-02-28",
  type: "text"  ,
  title: "Stochastic Consistency Test"  ,
  description: "O3 Mini's response to the Tests an AI's randomness and creativity",
  content: `1. **Why did the math book look sad?**  
   Because it had too many problems.

2. **What do you call an alligator in a vest?**  
   An investigator.

3. **What did the zero say to the eight?**  
   Nice belt!

4. **Why did the bicycle fall over?**  
   Because it was two-tired.

5. **How does a penguin build its house?**  
   Igloos it together.

Each of these five jokes is unique, so there are 5 unique jokes.`
};
