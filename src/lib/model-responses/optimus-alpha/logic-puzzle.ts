import { ModelResponse } from "@/types/models";

export const logicPuzzleOptimusAlpha: ModelResponse = {
  id: "optimus-alpha-logic-puzzle",
  modelId: "optimus-alpha",
  prompt: "Sally (a girl) has 3 brothers. Each brother has 2 sisters. How many sisters does Sally have?",
  responseDate: "2025-04-11",
  type: "text",
  title: "Logic Puzzle",
  description: "Optimus Alpha's response testing its ability to solve a simple logic puzzle.",
  content: `Let's break down the problem:

- Sally is a girl.
- Sally has **3 brothers**.
- **Each brother has 2 sisters**.

Let's analyze:

Sally's siblings:
- 3 brothers (let's call them B1, B2, B3)
- Sally herself

The brothers' sisters:
- Each brother has **2 sisters**.

Who are the possible sisters for each brother?
- Sally is a sister to each brother.
- Are there any other sisters? That's the question!

If **Sally is the only girl**, then each brother would only have **1 sister** (Sally).
But the problem says **each brother has 2 sisters**.

Therefore, there must be **another sister** besides Sally.

Let's check:
Suppose Sally has **1 sister** (besides herself).
So the siblings are:
- Sally (girl)
- A second sister (let's call her Anna)
- 3 brothers

Children in the family:
- 2 girls (Sally and Anna)
- 3 boys (the brothers)

Now, for **each brother**:
- Their sisters are **Sally and Anna**: **2 sisters** (matches the problem statement).

So, **Sally has 1 sister**.

**Final answer:**

\[
\boxed{1}
\]

Sally has **1 sister**.`
}; 