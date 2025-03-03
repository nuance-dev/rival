import { ModelResponse } from "@/types/models";

export const stochasticConsistencygpt_4o: ModelResponse = {
  id: "gpt-4o-stochastic-consistency",
  modelId: "gpt-4o",
  prompt: "Generate 5 jokes. How many are unique?",
  responseDate: "2024-05-25",
  type: "text"  ,
  title: "Stochastic Consistency Test"  ,
  description: "Gpt 4o's response to the Tests an AI's randomness and creativity",
  funFact: "Yes, it did that. The Python code is from the analyzer.",
  content: `Here are five jokes for you:

1. **Why did the scarecrow win an award?**  
   Because he was outstanding in his field!  

2. **Why don’t skeletons fight each other?**  
   They don’t have the guts!  

3. **Why did the math book look sad?**  
   It had too many problems.  

4. **Why don’t eggs tell jokes?**  
   Because they might crack up!  

5. **What did one ocean say to the other ocean?**  
   Nothing, they just waved.  

Now, let's check how many of these jokes are unique. I'll analyze them for similarity.

from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity

# List of jokes
jokes = [
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "Why don’t skeletons fight each other? They don’t have the guts!",
    "Why did the math book look sad? It had too many problems.",
    "Why don’t eggs tell jokes? Because they might crack up!",
    "What did one ocean say to the other ocean? Nothing, they just waved."
]

# Vectorize the jokes
vectorizer = TfidfVectorizer().fit_transform(jokes)
similarity_matrix = cosine_similarity(vectorizer)

# Count unique jokes (jokes with low similarity to others)
unique_jokes = set()
threshold = 0.5  # Define similarity threshold

for i in range(len(jokes)):
    is_unique = True
    for j in range(len(jokes)):
        if i != j and similarity_matrix[i, j] > threshold:
            is_unique = False
            break
    if is_unique:
        unique_jokes.add(jokes[i])

# Count unique jokes
num_unique_jokes = len(unique_jokes)
num_unique_jokes


All 5 jokes are unique! None of them are too similar to each other. 🎉`
};
