import { ModelResponse } from "@/types/models";

export const estimateComplexityclaude_3_5_sonnet: ModelResponse = {
  id: "claude-3-5-sonnet-estimate-complexity",
  modelId: "claude-3-5-sonnet",
  prompt: "Estimate the total number of FLOPs required to train GPT-3 without searching online. Explain your reasoning step by step.",
  responseDate: "2025-02-26",
  type: "text",
  title: "Estimate Complexity"  ,
  description: "Claude 3.5 Sonnet's response to the Tests an AI's ability to make educated estimates based on technical knowledge",
  content: `I'll help you estimate the FLOPs (Floating Point Operations) required to train GPT-3 from first principles. Let's break this down step by step.

1. **Model Architecture Parameters**
- GPT-3 has 175 billion parameters
- Uses transformer architecture with attention mechanism
- Training involves forward pass, backward pass, and optimizer updates

2. **Key Components per Token**
For each token in the sequence, we need to calculate:

a) **Self-Attention**
- Query, Key, Value projections: 3 × (n_emb × n_emb)
- Attention scores: n_seq × n_seq × n_emb
- Attention output: n_seq × n_emb × n_emb
- For h=96 attention heads

b) **Feed-Forward Network (FFN)**
- Two linear transformations
- First projection: n_emb × (4 × n_emb)
- Second projection: (4 × n_emb) × n_emb
- GELU activations

3. **Training Details**
- Context length: 2048 tokens
- Batch size: ~1.5M tokens per batch (approximate)
- Training tokens: ~300B tokens

4. **FLOPs Calculation**

Let's calculate for one forward pass through a single token:

a) **Self-Attention FLOPs**
- QKV projections: 3 × (12288 × 12288) = ~450M FLOPs
- Attention scores: 2048 × 2048 × 12288 = ~50B FLOPs
- Attention output: 2048 × 12288 × 12288 = ~300B FLOPs
- Multiply by 96 heads: ~35T FLOPs

b) **FFN FLOPs**
- First projection: 12288 × 49152 = ~600M FLOPs
- Second projection: 49152 × 12288 = ~600M FLOPs
- Total FFN: ~1.2B FLOPs

c) **Per Token Total**
- Forward pass: ~36T FLOPs
- Backward pass (roughly 2x forward): ~72T FLOPs
- Parameter updates (1x forward): ~36T FLOPs
- Total per token: ~144T FLOPs

5. **Total Training FLOPs**
- Number of tokens: 300B
- FLOPs per token: 144T
- Total FLOPs: 300B × 144T = ~43,200 Zettaflops (4.32 × 10^22 FLOPs)

This is a rough estimate that considers:
- Main computational bottlenecks
- Both forward and backward passes
- Parameter updates
- Major attention and FFN operations

The actual number might be higher due to:
- Additional layer normalizations
- Activation functions
- Memory access operations
- Optimizer-specific computations (Adam)
- Various other overhead operations

This estimate aligns with the general understanding that training large language models requires enormous computational resources, in the order of zettaflops of compute.

Note: This is an approximation based on the model's known architecture and typical training procedures. The actual number could vary based on specific implementation details, optimizations, and hardware-specific considerations.
`
};
