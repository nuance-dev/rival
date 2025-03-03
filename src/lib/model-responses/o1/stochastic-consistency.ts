import { ModelResponse } from "@/types/models";

export const stochasticConsistencyo1: ModelResponse = {
  id: "o1-stochastic-consistency",
  modelId: "o1"  ,
  prompt: "Generate 5 jokes. How many are unique?",
  responseDate: "2025-02-28",
  type: "text"  ,
  title: "Stochastic Consistency Test"  ,
  description: "O1's response to the Tests an AI's randomness and creativity",
  content: `Here are five jokes:

1. **Why did the scarecrow get promoted?**  
   Because he was outstanding in his field.

2. **I told my friend she drew her eyebrows too high.**  
   She looked surprised.

3. **What do you call cheese that isn’t yours?**  
   Nacho cheese.

4. **Why don’t skeletons fight each other?**  
   Because they don’t have the guts.

5. **Did you hear about the restaurant on the moon?**  
   Great food, but absolutely no atmosphere.

---

**How many are unique?**  
All five jokes listed here are distinct and thus count as five unique jokes.`
};
