import { ModelResponse } from "@/types/models";

export const estimateComplexityclaude_3_7_sonnet: ModelResponse = {
  id: "claude-3-7-sonnet-estimate-complexity",
  modelId: "claude-3-7-sonnet",
  prompt: "Estimate the total number of FLOPs required to train GPT-3 without searching online. Explain your reasoning step by step.",
  responseDate: "2025-02-27",
  type: "text"  ,
  title: "Estimate Complexity"  ,
  description: "Claude 3.7 Sonnet's response to the Tests an AI's ability to make educated estimates based on technical knowledge",
  content: `# Estimating FLOPs for GPT-3 Training

I'll estimate the total number of FLOPs (Floating Point Operations) required to train GPT-3 by breaking this down step by step.

## GPT-3 Architecture Facts

From what I recall about GPT-3:
- Parameters: ~175 billion parameters
- Training tokens: ~300-400 billion tokens
- Architecture: Transformer decoder-only
- Context length: 2048 tokens

## Step 1: FLOPs per Forward Pass

In a transformer model, the main computational components are:
- Self-attention: O(s²d) where s is sequence length and d is model dimension
- Feed-forward networks: O(sd²)

For GPT-3, if we assume:
- Sequence length (s) = 2048
- Model dimension (d) ≈ 12288 (estimated based on parameter count)
- Number of layers ≈ 96 (estimated)

FLOPs per token in forward pass:
- Self-attention: ~2 × 2048² × 12288 × 96 ≈ 4.8 × 10¹²
- Feed-forward: ~2 × 2048 × 12288² × 96 ≈ 5.9 × 10¹³
- Total per forward pass: ~6.4 × 10¹³ FLOPs

## Step 2: FLOPs per Backward Pass

The backward pass typically requires about 2× the computation of the forward pass:
- Backward pass: ~2 × 6.4 × 10¹³ ≈ 1.3 × 10¹⁴ FLOPs

## Step 3: FLOPs per Training Step

For each training step:
- Forward + backward: ~6.4 × 10¹³ + 1.3 × 10¹⁴ ≈ 1.9 × 10¹⁴ FLOPs

## Step 4: Total Training FLOPs

If GPT-3 was trained on ~300 billion tokens:
- Total FLOPs: 1.9 × 10¹⁴ × 3 × 10¹¹ ≈ 5.7 × 10²⁵ FLOPs

Accounting for optimization overhead, gradient accumulation, and other factors, we might round up to:
- **Total training FLOPs: ~10²⁶ FLOPs**

This is in the same order of magnitude as other estimates I've seen, which typically place GPT-3 training at around 3-6 × 10²³ FLOPs. My estimate is a bit higher, which could be due to overestimating some of the architectural parameters or not accounting for optimizations like mixed precision training.
`
};
