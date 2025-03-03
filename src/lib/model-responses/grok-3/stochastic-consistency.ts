import { ModelResponse } from "@/types/models";

export const stochasticConsistencygrok_3: ModelResponse = {
  id: "grok-3-stochastic-consistency",
  modelId: "grok-3",
  prompt: "Generate 5 jokes. How many are unique?",
  responseDate: "2025-03-01",
  type: "text",
  title: "Stochastic Consistency Test",
  description: "Grok 3's response to the stochastic consistency test",
  content: `Here are five jokes for you:

1. Why don’t skeletons fight each other? Because they don’t have the guts!  
2. What has 4 legs and 1 arm? A pitbull coming back from the park!  
3. Why don’t skeletons fight each other? They’re too busy rattling around!  
4. What do you call a bear with no teeth? A gummy bear!  
5. Why did the tomato turn red? Because it saw the salad dressing!  

Now, let’s check for uniqueness. Joke 1 and Joke 3 both start with "Why don’t skeletons fight each other?" but have different punchlines ("don’t have the guts" vs. "too busy rattling around"). They’re technically distinct due to the different resolutions, though they share a setup. The other three jokes (2, 4, and 5) have completely unique setups and punchlines. 

So, all five jokes are unique in terms of their full content, even if 1 and 3 share a premise. Final count: **5 unique jokes**.`
}; 