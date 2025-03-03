import { ModelResponse } from "@/types/models";

export const estimateComplexitydeepseek_r1: ModelResponse = {
  id: "deepseek-r1-estimate-complexity",
  modelId: "deepseek-r1",
  prompt: "Estimate the total number of FLOPs required to train GPT-3 without searching online. Explain your reasoning step by step.",
  responseDate: "2025-02-27",
  type: "text",
  title: "Estimate Complexity",
  description: "Deepseek R1's response to the Tests an AI's ability to make educated estimates based on technical knowledge",
  content: `To estimate the total number of FLOPs required to train GPT-3, we use the following reasoning:

1. **Model Parameters (P):**  
   GPT-3 has 175 billion parameters (\(P = 175 \times 10^9\)).

2. **Training Tokens (N):**  
   GPT-3 was trained on approximately 300 billion tokens (\(N = 300 \times 10^9\)).

3. **FLOPs per Token:**  
   - A **forward pass** requires ~\(2P\) FLOPs per token (each parameter involves a multiply-accumulate operation, which counts as 2 FLOPs).  
   - A **backward pass** (for gradients) is roughly twice as expensive as the forward pass, requiring ~\(4P\) FLOPs per token.  
   - Total FLOPs per token: \(2P + 4P = 6P\).

4. **Total Training FLOPs:**  
   Multiply FLOPs per token by the total number of tokens:  
   \[
   \text{FLOPs} = 6 \times P \times N = 6 \times 175 \times 10^9 \times 300 \times 10^9 = 3.15 \times 10^{23} \, \text{FLOPs}.
   \]

**Final Answer:**  
The total number of FLOPs required to train GPT-3 is approximately **\(3.1 \times 10^{23}\) FLOPs**.`
};
