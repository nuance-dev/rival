import { ModelResponse } from "@/types/models";

export const estimateComplexityOptimusAlpha: ModelResponse = {
  id: "optimus-alpha-estimate-complexity",
  modelId: "optimus-alpha",
  prompt: "Estimate the total number of FLOPs required to train GPT-3 without searching online. Explain your reasoning step by step.",
  responseDate: "2025-04-11",
  type: "text",
  title: "Estimate Complexity",
  description: "Optimus Alpha's response estimating the FLOPs required to train GPT-3.",
  content: `Let's walk through an estimation of how many FLOPs were required to train GPT-3, using only reasoning and not searching for the exact numbers.

### Step 1: Understand Model Size

GPT-3 (the original) had **175 billion parameters**.

### Step 2: Estimate FLOPs per Forward/Backward Pass

- For transformer models, a rough rule of thumb is that a forward-and-backward pass for a parameter takes **~2 FLOPs per parameter per token** (1 for forward, 1 for backward).
- Each token processed in a batch involves the whole model.

So, **FLOPs per token = 2 × number of parameters**.

### Step 3: Estimate Total Number of Tokens Used in Training

- GPT-3 was reportedly trained on about **300 billion tokens**.
- Let's use **300B tokens** as our assumption.

### Step 4: Calculate Total Number of FLOPs

**Total FLOPs = FLOPs per token × number of tokens processed**

- FLOPs per token = 2 × 175B = **350 billion FLOPs per token**
- Number of tokens = **300 billion**

Now, multiply:

\[
\\text{Total FLOPs} = 350\\,\\text{B} \\times 300\\,\\text{B} = (3.5 \\times 10^{11}) \\times (3 \\times 10^{11}) = 1.05 \\times 10^{23}
\]

So,

\[
\\boxed{ \\approx 1 \\times 10^{23} \\text{ FLOPs} }
\]

### Step 5: Check and discussion

This estimate is rough, but matches the ballpark for very large models. (Other nuances, like multiple epochs or data repetition, may factor in, but using "number of tokens processed" as above is standard.)

### **Final Answer**

> **It takes about \\( 1 \\times 10^{23} \\) FLOPs to train GPT-3.**

This comes from:
- \\( 175 \\) billion parameters
- Each token: \\( 2 \\times 175 \\) billion = \\( 350 \\) billion FLOPs
- \\( 300 \\) billion training tokens
- \\( 350 \\) billion × \\( 300 \\) billion = \\( 1 \\times 10^{23} \\) FLOPs

**Assumptions:**  
- Each forward+backward pass needs ≈ 2×params FLOPs/token.
- 300B tokens in total.

**Notes:**  
- Reality varies with model and optimization, but this is a widely accepted estimating method.`
}; 