import { ModelResponse } from "@/types/models";
import { sanitizeModelResponseContent } from "@/lib/utils";

export const stochasticConsistencyclaude_3_5_sonnet: ModelResponse = {
  id: "claude-3-5-sonnet-stochastic-consistency",
  modelId: "claude-3-5-sonnet",
  prompt: "Generate 5 jokes. How many are unique?",
  responseDate: "2025-02-27",
  type: "text",
  title: "Stochastic Consistency Test",
  description: "Claude 3.5 Sonnet's response to the Tests an AI's randomness and creativity",
  content: sanitizeModelResponseContent(`Let me help you write code to generate jokes and check their uniqueness. Here's a Python script that does this:

\`\`\`python
import random

# List of sample jokes
jokes = [
    "Why don't scientists trust atoms? Because they make up everything!",
    "What do you call a bear with no teeth? A gummy bear!",
    "Why did the scarecrow win an award? He was outstanding in his field!",
    "What do you call a fake noodle? An impasta!",
    "Why did the cookie go to the doctor? Because it was feeling crumbly!",
    "What do you call a can opener that doesn't work? A can't opener!",
    "Why don't eggs tell jokes? They'd crack up!",
]

# Generate 5 random jokes
selected_jokes = random.sample(jokes, 5)

# Print the jokes and count unique ones
print("Generated jokes:")
for i, joke in enumerate(selected_jokes, 1):
    print(f"{i}. {joke}")

unique_jokes = len(set(selected_jokes))
print(f"\\nNumber of unique jokes: {unique_jokes}")
\`\`\`

When you run this code, it will:
1. Create a list of sample jokes
2. Randomly select 5 jokes from the list
3. Print each selected joke
4. Count and display how many unique jokes were selected

Since we're using \`random.sample()\`, which selects items without replacement, all 5 jokes will always be unique (unique_jokes will always be 5). If you wanted to allow for potential duplicates, you could use \`random.choices()\` instead.

Would you like me to modify the code to allow for potential duplicates in the selection?`)
};
