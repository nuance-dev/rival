import { AIModel } from "@/types/models";
import { getModelLogoPath } from "@/lib/utils";

// AI Models
export const models: AIModel[] = [
  {
    id: "grok-3",
    name: "Grok 3",
    provider: "xai",
    releaseDate: "February 18, 2025",
    description: "Grok 3 is a cutting-edge AI model from xAI with Big Brain Mode for complex problems, Colossus Supercomputer integration, and Reinforcement Learning optimization. Achieves 1402 Elo on LMArena benchmarks and 93.3% on AIME 2025 mathematics competition.",
    capabilities: ["conversation", "reasoning", "code-generation", "analysis"],
    categories: ["text", "code", "multimodal"],
    size: "xlarge",
    contextWindow: 128000,
    parametersCount: "2.7T",
    gradientColors: ["#3494E6", "#EC6EAD"],
    logoUrl: getModelLogoPath("grok-3"),
    url: "https://x.ai/blog/grok-3",
    uniqueCapabilities: [
      "Big Brain Mode: Allocates additional computational resources for complex problem-solving.",
      "Colossus Supercomputer Integration: Trained on a cluster of 200,000 Nvidia H100 GPUs, enabling 67 ms average response latency.",
      "Reinforcement Learning Optimization: Self-corrects reasoning pathways via large-scale RL."
    ],
    benchmarks: {
      "MMLU": { 
        score: "83.1%", 
        source: "https://x.ai/blog/grok-3" 
      },
      "MATH": { 
        score: "69.7%", 
        source: "https://x.ai/blog/grok-3" 
      },
      "GPQA": { 
        score: "51.9%", 
        source: "https://x.ai/blog/grok-3" 
      },
      "Output Tokens Throughput": { 
        score: "185 tokens/s", 
        source: "https://wow.groq.com/groq-lpu-inference-engine-crushes-first-public-llm-benchmark/" 
      },
      "Time to First Token": { 
        score: "0.22s", 
        source: "https://wow.groq.com/groq-lpu-inference-engine-crushes-first-public-llm-benchmark/" 
      },
      "AIME": {
        score: "93.3%",
        source: "https://x.ai/blog/grok-3"
      }
    },
    color: "#eb4646",
    logo: "xai.svg",
    featured: true
  },
  {
    id: "grok-3-thinking",
    name: "Grok 3 Thinking",
    provider: "xai",
    releaseDate: "February 19, 2025",
    description: "Grok 3 Thinking exposes the full chain-of-thought process during problem-solving, including error backtracking and alternative solution exploration. Scores 84.6% on GPQA Diamond benchmark for expert-level Q&A.",
    capabilities: ["conversation", "reasoning", "code-generation", "analysis"],
    categories: ["text", "code", "multimodal"],
    size: "xlarge",
    contextWindow: 128000,
    parametersCount: "2.7T",
    gradientColors: ["#EC6EAD", "#3494E6"],
    logoUrl: getModelLogoPath("grok-3"),
    url: "https://x.ai/blog/grok-3",
    uniqueCapabilities: [
      "Transparent Reasoning: Exposes full chain-of-thought process during problem-solving.",
      "Graduate-Level Proficiency: Scores 84.6% on GPQA Diamond benchmark for expert-level Q&A.",
      "Dynamic Compute Allocation: Users manually adjust 'Think' duration from seconds to minutes based on task complexity."
    ],
    benchmarks: {
      "MMLU": { 
        score: "86.2%", 
        source: "https://x.ai/blog/grok-3" 
      },
      "GPQA Diamond": { 
        score: "84.6%", 
        source: "https://x.ai/blog/grok-3" 
      },
      "MATH": { 
        score: "80.5%", 
        source: "https://x.ai/blog/grok-3" 
      }
    },
    color: "#6f3cf5",
    logo: "xai.svg"
  },
  {
    id: "grok-3-mini-beta",
    name: "Grok 3 Mini Beta",
    provider: "xai",
    releaseDate: "April 9, 2025",
    description: "Grok 3 Mini is a lightweight, smaller thinking model ideal for reasoning-heavy tasks that don't demand extensive domain knowledge. It shines in math-specific and quantitative use cases. Transparent 'thinking' traces accessible.",
    capabilities: ["conversation", "reasoning", "analysis"],
    categories: ["text", "code"],
    size: "small",
    contextWindow: 131072,
    parametersCount: "Not disclosed",
    gradientColors: ["#EC6EAD", "#946E34"],
    logoUrl: getModelLogoPath("grok-3"),
    url: "https://openrouter.ai/models/x-ai/grok-3-mini-beta",
    uniqueCapabilities: [
      "Lightweight thinking model for reasoning tasks.",
      "Strong in math and quantitative use cases.",
      "Transparent 'thinking' traces available.",
      "Optional high reasoning effort setting.",
      "Optional fast endpoint routing."
    ],
    benchmarks: {
      // Add benchmarks if available later
    },
    color: "#eb4646",
    logo: "xai.svg"
  },
  {
    id: "midjourney-v1",
    name: "Midjourney v1",
    provider: "midjourney",
    releaseDate: "February 2022",
    description: "The first public release of Midjourney, introducing AI image generation to a wider audience through its Discord-based interface.",
    capabilities: ["image-generation"],
    categories: ["image", "vision", "multimodal"],
    size: "medium",
    contextWindow: null,
    parametersCount: "Not disclosed (proprietary diffusion model)",
    gradientColors: ["#7928CA", "#FF0080"],
    logoUrl: getModelLogoPath("midjourney-v1"),
    url: "https://www.midjourney.com",
    uniqueCapabilities: [
      "First-generation Discord integration for collaborative AI art creation",
      "Pioneering text-to-image system with distinctive artistic style"
    ],
    benchmarks: {
      "FID Score": { 
        score: "32.6", 
        source: "https://arxiv.org/abs/2201.11703" 
      }
    },
    color: "#7928CA",
    logo: "midjourney.svg"
  },
  {
    id: "midjourney-v2",
    name: "Midjourney v2",
    provider: "midjourney",
    releaseDate: "April 12, 2022",
    description: "Midjourney v2 improved on the original model with better coherence, detail, and more consistent style application.",
    capabilities: ["image-generation"],
    categories: ["image", "vision", "multimodal"],
    size: "medium",
    contextWindow: null,
    parametersCount: "Not disclosed (proprietary diffusion model)",
    gradientColors: ["#7928CA", "#FF0080"],
    logoUrl: getModelLogoPath("midjourney-v2"),
    url: "https://www.midjourney.com",
    uniqueCapabilities: [
      "Enhanced coherence and detail compared to v1",
      "More consistent style application across various prompts"
    ],
    benchmarks: {
      "FID Score": { 
        score: "28.3", 
        source: "https://arxiv.org/abs/2204.13807" 
      }
    },
    color: "#7928CA",
    logo: "midjourney.svg"
  },
  {
    id: "midjourney-v3",
    name: "Midjourney v3",
    provider: "midjourney",
    releaseDate: "July 25, 2022",
    description: "Midjourney v3 introduced significantly improved artistic capabilities with better understanding of prompt nuances and artistic styles.",
    capabilities: ["image-generation"],
    categories: ["image", "vision", "multimodal"],
    size: "large",
    contextWindow: null,
    parametersCount: "Not disclosed (proprietary diffusion model)",
    gradientColors: ["#7928CA", "#FF0080"],
    logoUrl: getModelLogoPath("midjourney-v3"),
    url: "https://www.midjourney.com",
    uniqueCapabilities: [
      "Broader understanding of artistic styles and references",
      "Better interpretation of nuanced text prompts"
    ],
    benchmarks: {
      "ImageReward Score": { 
        score: "78.5", 
        source: "https://arxiv.org/abs/2304.05977" 
      }
    },
    color: "#7928CA",
    logo: "midjourney.svg"
  },
  {
    id: "midjourney-v4",
    name: "Midjourney v4",
    provider: "midjourney",
    releaseDate: "November 5, 2022",
    description: "Midjourney v4 marked a major leap forward with dramatically improved photorealism, coherence, and prompt understanding, trained on Google TPUs for the first time.",
    capabilities: ["image-generation"],
    categories: ["image", "vision", "multimodal"],
    size: "large",
    contextWindow: null,
    parametersCount: "Not disclosed (proprietary diffusion model)",
    gradientColors: ["#7928CA", "#3B82F6"],
    logoUrl: getModelLogoPath("midjourney-v4"),
    url: "https://www.midjourney.com",
    uniqueCapabilities: [
      "First version trained on Google TPUs",
      "Dramatically improved photorealism and coherence",
      "Enhanced understanding of complex prompts"
    ],
    benchmarks: {
      "Human Preference Rate": { 
        score: "83.7%", 
        source: "https://arxiv.org/abs/2302.12252" 
      }
    },
    color: "#7928CA",
    logo: "midjourney.svg"
  },
  {
    id: "midjourney-v5",
    name: "Midjourney v5",
    provider: "midjourney",
    releaseDate: "November 2023",
    description: "Midjourney v5 produces realistic images.",
    capabilities: ["image-generation"],
    categories: ["image", "vision", "multimodal"],
    size: "large",
    contextWindow: null,
    parametersCount: "Not disclosed",
    gradientColors: ["#7928CA", "#3B82F6"],
    logoUrl: getModelLogoPath("midjourney-v5"),
    url: "https://www.midjourney.com",
    uniqueCapabilities: [
      "Dynamic Lighting: Simulates ray-traced shadows and ambient occlusion.",
      "Historical Accuracy Mode: Recreates period-specific artifacts with 97% archival fidelity."
    ],
    benchmarks: {
      "CLIP Score": { 
        score: "91.2", 
        source: "https://arxiv.org/abs/2304.08465" 
      }
    },
    color: "#7928CA",
    logo: "midjourney.svg"
  },
  {
    id: "midjourney-v6",
    name: "Midjourney v6",
    provider: "midjourney",
    releaseDate: "December 2024",
    description: "Midjourney v6 produces realistic images.",
    capabilities: ["image-generation"],
    categories: ["image", "vision", "multimodal"],
    size: "large",
    contextWindow: null,
    parametersCount: "Not disclosed (proprietary diffusion model)",
    gradientColors: ["#7928CA", "#FF0080"],
    logoUrl: getModelLogoPath("midjourney-v6"),
    url: "https://www.midjourney.com",
    uniqueCapabilities: [
      "6K Resolution Output: 6144x6144px renders with photorealistic textures.",
      "Style Algebra: Mixes artistic styles via mathematical operators."
    ],
    benchmarks: {
      "DrawBench Score": { 
        score: "94.5", 
        source: "https://arxiv.org/abs/2306.00975" 
      }
    },
    color: "#7928CA",
    logo: "midjourney.svg"
  },
  {
    id: "midjourney-v6.1",
    name: "Midjourney v6.1",
    provider: "midjourney",
    releaseDate: "July 31, 2024",
    description: "Midjourney v6.1 introduced a native web interface alongside Discord, with improved detail rendering, better text handling, and enhanced image coherence.",
    capabilities: ["image-generation"],
    categories: ["image", "vision", "multimodal"],
    size: "large",
    contextWindow: null,
    parametersCount: "Not disclosed (proprietary diffusion model)",
    gradientColors: ["#7928CA", "#FF0080"],
    logoUrl: getModelLogoPath("midjourney-v6.1"),
    url: "https://www.midjourney.com",
    uniqueCapabilities: [
      "Native web interface alongside Discord integration",
      "Improved detail rendering and coherence",
      "Enhanced text generation capabilities",
      "Advanced image editing with Image Weight, Style Reference, and Character Reference features"
    ],
    benchmarks: {
      "PickScore": { 
        score: "92.7", 
        source: "https://arxiv.org/abs/2305.01569" 
      }
    },
    color: "#7928CA",
    logo: "midjourney.svg"
  },
  {
    id: "dalle-3",
    name: "DALL-E 3",
    provider: "openai",
    releaseDate: "September 2023",
    description: "DALL-E 3 auto-improves user inputs via ChatGPT integration and blocks prohibited content with 99.9% precision using multimodal classifiers.",
    capabilities: ["image-generation"],
    categories: ["image", "vision", "multimodal"],
    size: "large",
    contextWindow: 4096,
    parametersCount: "~12B",
    gradientColors: ["#10b981", "#059669"],
    logoUrl: getModelLogoPath("dalle-3"),
    url: "https://openai.com/dall-e-3",
    uniqueCapabilities: [
      "Prompt Rewriting: Auto-improves user inputs via ChatGPT integration.",
      "Ethical Filtering: Blocks prohibited content with 99.9% precision using multimodal classifiers."
    ],
    benchmarks: {
      "Content Moderation": { 
        score: "99.9%", 
        source: "https://cdn.openai.com/papers/dall-e-3.pdf" 
      },
      "Prompt Alignment": { 
        score: "95.2%", 
        source: "https://cdn.openai.com/papers/dall-e-3.pdf" 
      }
    },
    color: "#10b981",
    logo: "openai.svg"
  },
  {
    id: "claude-3-7-sonnet",
    name: "Claude 3.7 Sonnet",
    provider: "anthropic",
    releaseDate: "February 25, 2025",
    description: "Claude 3.7 Sonnet offers Extended Thinking Scaffolds that boost SWE-bench coding accuracy from 62.3% to 70.3%, with 81.2% accuracy in retail automation tasks, outperforming Claude Sonnet 3.6 (2022-10-22) by 13.6%.",
    capabilities: ["conversation", "reasoning", "analysis", "summarization"],
    categories: ["text", "vision", "multimodal"],
    size: "large",
    contextWindow: 200000,
    parametersCount: "Not disclosed",
    gradientColors: ["#4F46E5", "#7C3AED"],
    logoUrl: getModelLogoPath("claude-3-7-sonnet"),
    url: "https://www.anthropic.com/claude",
    uniqueCapabilities: [
      "Extended Thinking Scaffolds: Customizable prompts boost SWE-bench coding accuracy from 62.3% to 70.3%.",
      "Agentic Tool Mastery: 81.2% accuracy in retail automation tasks, outperforming Claude Sonnet 3.6 (2022-10-22) by 13.6%.",
      "Multimodal Chain-of-Thought: Combines text, code, and diagrammatic reasoning in single workflows."
    ],
    benchmarks: {
      "MMLU": { 
        score: "80.3%", 
        source: "https://artificialanalysis.ai/models/claude-3-7-sonnet" 
      },
      "MATH": { 
        score: "82.2%", 
        source: "https://www.anthropic.com/news/claude-3-7-sonnet" 
      },
      "GPQA Diamond": { 
        score: "68.0%", 
        source: "https://www.pageon.ai/blog/sonnet-3-7" 
      },
      "SWE-Bench Verified": {
        score: "62.3%",
        source: "https://www.pageon.ai/blog/sonnet-3-7"
      },
      "Retail Task Accuracy": {
        score: "81.2%",
        source: "https://www.pageon.ai/blog/sonnet-3-7"
      },
      "Airline Task Accuracy": {
        score: "58.4%",
        source: "https://www.pageon.ai/blog/sonnet-3-7"
      }
    },
    color: "#6f3cf5",
    logo: "anthropic.svg"
  },
  {
    id: "claude-3-7-sonnet-thinking",
    name: "Claude 3.7 Thinking Sonnet",
    provider: "anthropic",
    releaseDate: "February 26, 2025",
    description: "Claude 3.7 Thinking Sonnet exposes the full chain-of-thought process during problem-solving, including error backtracking and alternative solution exploration. Scores 86.1% on GPQA Diamond benchmark for expert-level Q&A.",
    capabilities: ["conversation", "reasoning", "analysis", "summarization"],
    categories: ["text", "vision", "multimodal"],
    size: "large",
    contextWindow: 200000,
    parametersCount: "Not disclosed",
    gradientColors: ["#7C3AED", "#4F46E5"],
    logoUrl: getModelLogoPath("claude-3-7-sonnet"),
    url: "https://www.anthropic.com/claude",
    uniqueCapabilities: [
      "Transparent Reasoning: Exposes full chain-of-thought process during problem-solving.",
      "Graduate-Level Proficiency: Scores 86.1% on GPQA Diamond benchmark for expert-level Q&A.",
      "Dynamic Compute Allocation: Users manually adjust 'Think' duration from seconds to minutes based on task complexity."
    ],
    benchmarks: {
      "MMLU": { 
        score: "77.1%", 
        source: "https://www.pageon.ai/blog/sonnet-3-7" 
      },
      "GPQA Diamond": { 
        score: "84.8%", 
        source: "https://www.pageon.ai/blog/sonnet-3-7" 
      },
      "MATH": { 
        score: "96.2%", 
        source: "https://www.pageon.ai/blog/sonnet-3-7" 
      },
      "AIME": {
        score: "80.0%",
        source: "https://www.pageon.ai/blog/sonnet-3-7"
      },
      "HellaSwag (10-shot)": {
        score: "89.0%",
        source: "https://www.pageon.ai/blog/sonnet-3-7"
      }
    },
    color: "#6f3cf5"
  },
  {
    id: "gpt-4o",
    name: "GPT-4o (Omni)",
    provider: "openai",
    releaseDate: "May 13, 2024",
    description: "GPT-4o processes text, images, and audio through a unified transformer architecture and offers real-time translation for 154 languages with 89.2% BLEU score on low-resource languages.",
    capabilities: ["conversation", "reasoning", "analysis", "code-generation", "image-generation"],
    categories: ["text", "vision", "multimodal"],
    size: "xlarge",
    contextWindow: 128000,
    parametersCount: "1.8T",
    gradientColors: ["#10b981", "#3b82f6"],
    logoUrl: getModelLogoPath("gpt-4o"),
    url: "https://openai.com/gpt-4",
    uniqueCapabilities: [
      "Multimodal Fusion: Processes text, images, and audio through unified transformer architecture.",
      "Real-Time Translation: 154-language support with 89.2% BLEU score on low-resource languages."
    ],
    benchmarks: {
      "MMLU": { 
        score: "88.7%", 
        source: "https://github.com/openai/simple-evals" 
      },
      "MATH": { 
        score: "75.9%", 
        source: "https://github.com/openai/simple-evals" 
      },
      "GPQA": { 
        score: "53.1%", 
        source: "https://github.com/openai/simple-evals" 
      },
      "HumanEval": { 
        score: "90.2%", 
        source: "https://github.com/openai/simple-evals" 
      }
    },
    color: "#10a37f",
    logo: "openai.svg",
    featured: true
  },
  {
    id: "gpt-o3",
    name: "GPT-o3",
    provider: "openai",
    releaseDate: "December 2, 2024",
    description: "o3 is an upcoming model from OpenAI.",
    capabilities: ["conversation", "code-generation", "reasoning"],
    categories: ["text", "vision", "multimodal"],
    size: "large",
    contextWindow: null,
    parametersCount: "Not disclosed",
    gradientColors: ["#3b82f6", "#8b5cf6"],
    logoUrl: getModelLogoPath("gpt-o3"),
    url: "",
    uniqueCapabilities: [],
    benchmarks: {
      "ARC-AGI": { 
        score: "87.5% (high compute)", 
        source: "https://www.helicone.ai/blog/openai-o3" 
      },
      "AIME": { 
        score: "96.7%", 
        source: "https://www.helicone.ai/blog/openai-o3" 
      },
      "GPQA Diamond": { 
        score: "87.7%", 
        source: "https://www.helicone.ai/blog/openai-o3" 
      },
      "EpochAI Frontier Math": { 
        score: "25.2%", 
        source: "https://www.helicone.ai/blog/openai-o3" 
      }
    },
    color: "#3b82f6",
    logo: "openai.svg"
  },
  {
    id: "claude-3-5-sonnet",
    name: "Claude Sonnet 3.6 (2022-10-22)",
    provider: "anthropic",
    releaseDate: "June 2024",
    description: "Claude 3.5 Sonnet offers a cost-efficient API ($3/million input tokens vs. $5 for GPT-4o) and uses embedded alignment techniques that reduce harmful outputs by 34% compared to Claude 2.1.",
    capabilities: ["conversation", "reasoning", "analysis", "summarization"],
    categories: ["text", "vision", "multimodal"],
    size: "large",
    contextWindow: 200000,
    parametersCount: "Not disclosed",
    gradientColors: ["#7C3AED", "#EC4899"],
    logoUrl: getModelLogoPath("claude-3-5-sonnet"),
    url: "https://www.anthropic.com/claude",
    uniqueCapabilities: [
      "Cost-Efficient API: $3/million input tokens vs. $5 for GPT-4o.",
      "Constitutional AI: Embedded alignment techniques reduce harmful outputs by 34% compared to Claude 2.1."
    ],
    benchmarks: {
      "MMLU": { 
        score: "88.3%", 
        source: "https://github.com/openai/simple-evals" 
      },
      "MATH": { 
        score: "71.1%", 
        source: "https://github.com/openai/simple-evals" 
      },
      "GPQA": { 
        score: "59.4%", 
        source: "https://github.com/openai/simple-evals" 
      },
      "HumanEval": { 
        score: "92.0%", 
        source: "https://github.com/openai/simple-evals" 
      },
      "MGSM": { 
        score: "91.6%", 
        source: "https://github.com/openai/simple-evals" 
      },
      "Berkeley Function Calling (BFCL)": { 
        score: "90.2%", 
        source: "https://github.com/openai/simple-evals" 
      },
      "MMLU Pro": { 
        score: "78.0%", 
        source: "https://www.keywordsai.co/blog/claude-3-5-sonnet-vs-claude-3-5-haiku" 
      },
      "GPQA Diamond": { 
        score: "65.0%", 
        source: "https://www.keywordsai.co/blog/claude-3-5-sonnet-vs-claude-3-5-haiku" 
      }
    },
    color: "#6f3cf5",
    logo: "anthropic.svg"
  },
  {
    id: "o3-mini",
    name: "o3 Mini",
    provider: "openai",
    releaseDate: "December 15, 2024",
    description: "o3 Mini is a smaller, more efficient version of the o3 model, optimized for faster response times and lower computational costs while maintaining high-quality outputs.",
    capabilities: ["conversation", "reasoning", "code-generation"],
    categories: ["text", "multimodal"],
    size: "small",
    contextWindow: 64000,
    parametersCount: "36B",
    gradientColors: ["#6366f1", "#0ea5e9"],
    logoUrl: getModelLogoPath("gpt-o3"),
    url: "https://openai.com/o3",
    uniqueCapabilities: [
      "Resource-Efficient Design: 3x faster inference speed than o3 with 70% of the capabilities.",
      "On-Device Compatibility: Optimized for integration with mobile and edge computing devices.",
      "Responsive Processing: 60ms average latency for standard requests."
    ],
    benchmarks: {
      "MMLU": { 
        score: "85.9%", 
        source: "https://github.com/openai/simple-evals" 
      },
      "GPQA": { 
        score: "74.9%", 
        source: "https://github.com/openai/simple-evals" 
      },
      "MATH": { 
        score: "97.3%", 
        source: "https://github.com/openai/simple-evals" 
      },
      "HumanEval": { 
        score: "96.3%", 
        source: "https://github.com/openai/simple-evals" 
      }
    },
    color: "#10a37f",
    logo: "openai.svg"
  },
  {
    id: "o1",
    name: "o1",
    provider: "openai",
    releaseDate: "December 5, 2024",
    description: "o1 achieves 86% accuracy on Mathematics Olympiad benchmarks (vs. GPT-4o's 13%), offers PhD-level STEM proficiency, and maintains a 0.17% deceptive response rate in synthetic testing.",
    capabilities: ["conversation", "web-design", "code-generation", "reasoning"],
    categories: ["text", "multimodal"],
    size: "medium",
    contextWindow: 128000,
    parametersCount: "175B",
    gradientColors: ["#6366f1", "#0ea5e9"],
    logoUrl: getModelLogoPath("o1"),
    url: "https://openai.com/o1",
    uniqueCapabilities: [
      "Reflective Reasoning: Achieves 86% accuracy on Mathematics Olympiad benchmarks vs. GPT-4o's 13%.",
      "PhD-Level STEM Proficiency: Solves quantum mechanics problems with PhD-level accuracy.",
      "Legible Safety Monitoring: 0.17% deceptive response rate in synthetic testing, primarily due to hallucinations."
    ],
    benchmarks: {
      "MMLU": { 
        score: "91.8%", 
        source: "https://github.com/openai/simple-evals" 
      },
      "GPQA": { 
        score: "75.7%", 
        source: "https://github.com/openai/simple-evals" 
      },
      "MATH": { 
        score: "96.4%", 
        source: "https://github.com/openai/simple-evals" 
      },
      "MGSM": { 
        score: "89.3%", 
        source: "https://github.com/openai/simple-evals" 
      }
    },
    color: "#10a37f",
    logo: "openai.svg"
  },
  {
    id: "claude-3-haiku",
    name: "Claude 3 Haiku",
    provider: "anthropic",
    releaseDate: "March 2024",
    description: "Claude 3 Haiku is Anthropic's fastest model with 21 ms response time for real-time applications and 98.7% accuracy on JLPT N1 benchmarks for Japanese language specialization.",
    capabilities: ["conversation", "analysis", "summarization"],
    categories: ["text", "vision", "multimodal"],
    size: "medium",
    contextWindow: 200000,
    parametersCount: "Not disclosed",
    gradientColors: ["#6366f1", "#ec4899"],
    logoUrl: getModelLogoPath("claude-3-haiku"),
    url: "https://www.anthropic.com/claude",
    uniqueCapabilities: [
      "Latency-Optimized: 21 ms response time for real-time applications.",
      "Japanese Language Specialization: 98.7% accuracy on JLPT N1 benchmarks."
    ],
    benchmarks: {
      "MMLU Pro": { 
        score: "65.0%", 
        source: "https://www.keywordsai.co/blog/claude-3-5-sonnet-vs-claude-3-5-haiku" 
      },
      "GPQA Diamond": { 
        score: "41.6%", 
        source: "https://www.keywordsai.co/blog/claude-3-5-sonnet-vs-claude-3-5-haiku" 
      },
      "MATH": { 
        score: "69.4%", 
        source: "https://www.keywordsai.co/blog/claude-3-5-sonnet-vs-claude-3-5-haiku" 
      },
      "HumanEval": { 
        score: "88.1%", 
        source: "https://www.keywordsai.co/blog/claude-3-5-sonnet-vs-claude-3-5-haiku" 
      },
      "Time to First Token": {
        score: "0.36s",
        source: "https://www.keywordsai.co/blog/claude-3-5-sonnet-vs-claude-3-5-haiku"
      },
      "Tokens per Second": {
        score: "52.54",
        source: "https://www.keywordsai.co/blog/claude-3-5-sonnet-vs-claude-3-5-haiku"
      }
    },
    color: "#6f3cf5",
    logo: "anthropic.svg"
  },
  {
    id: "gemini-1-5-pro",
    name: "Gemini 1.5 Pro",
    provider: "google",
    releaseDate: "February 15, 2024",
    description: "Gemini 1.5 Pro handles infinite context with 99% retrieval accuracy at 750k tokens via Mixture-of-Experts and generates chapter summaries for 2-hour videos with 92% accuracy.",
    capabilities: ["conversation", "reasoning", "analysis", "code-generation"],
    categories: ["text", "vision", "multimodal", "audio", "video"],
    size: "large",
    contextWindow: 1000000,
    parametersCount: "~1.2T",
    gradientColors: ["#4285F4", "#EA4335", "#FBBC05", "#34A853"],
    logoUrl: getModelLogoPath("gemini-1-5-pro"),
    url: "https://ai.google.dev/gemini",
    uniqueCapabilities: [
      "Infinite Context Handling: 99% retrieval accuracy at 750k tokens via Mixture-of-Experts.",
      "Video-to-Text Synthesis: Generates chapter summaries for 2-hour videos with 92% accuracy."
    ],
    benchmarks: {
      "MMLU": { 
        score: "86.0%", 
        source: "https://www.vellum.ai/blog/llm-benchmarks-overview-limits-and-model-comparison" 
      },
      "MATH": { 
        score: "67.7%", 
        source: "https://www.vellum.ai/blog/llm-benchmarks-overview-limits-and-model-comparison" 
      },
      "GPQA": { 
        score: "46.2%", 
        source: "https://www.vellum.ai/blog/llm-benchmarks-overview-limits-and-model-comparison" 
      },
      "HumanEval": { 
        score: "71.9%", 
        source: "https://www.vellum.ai/blog/llm-benchmarks-overview-limits-and-model-comparison" 
      },
      "MGSM": { 
        score: "88.7%", 
        source: "https://www.vellum.ai/blog/llm-benchmarks-overview-limits-and-model-comparison" 
      },
      "Berkeley Function Calling (BFCL)": { 
        score: "84.4%", 
        source: "https://www.vellum.ai/blog/llm-benchmarks-overview-limits-and-model-comparison" 
      }
    },
    color: "#4285f4",
    logo: "google.svg"
  },
  {
    id: "gemini-2-5-pro-exp",
    name: "Gemini 2.5 Pro Experimental",
    provider: "google",
    releaseDate: "March 25, 2025",
    description: "Gemini 2.5 Pro Experimental is Google's advanced model with improved multimodal reasoning, long context understanding with 1 million tokens, and specialized video comprehension.",
    capabilities: ["conversation", "reasoning", "code-generation", "analysis"],
    categories: ["text", "code", "vision", "multimodal"],
    size: "xlarge",
    contextWindow: 1000000,
    parametersCount: "Not disclosed",
    gradientColors: ["#FF1F1F", "#176BEF"],
    logoUrl: getModelLogoPath("gemini-2-0-pro-exp"),
    url: "https://deepmind.google/technologies/gemini",
    uniqueCapabilities: [
      "1M Token Context Window: Processes entire books and long document sequences without truncation.",
      "Multimodal Turn Consistency: Maintains reasoning across mixed-media conversational turns.",
      "Improved Prompt Adherence: Enhanced faithfulness to complex prompt instructions."
    ],
    benchmarks: {
      "MMLU": { 
        score: "90.0%", 
        source: "https://storage.googleapis.com/deepmind-media/gemini/gemini_v2_report.pdf" 
      },
      "MATH": { 
        score: "83.5%", 
        source: "https://storage.googleapis.com/deepmind-media/gemini/gemini_v2_report.pdf" 
      }
    },
    color: "#FF1F1F",
    logo: "google.svg"
  },
  {
    id: "gemini-2-0-pro-exp",
    name: "Gemini 2.0 Pro Experimental",
    provider: "google",
    releaseDate: "January 2025",
    description: "Gemini 2.0 Pro builds interactive 3D environments from text descriptions and offers hypothetical reasoning for scientific simulations.",
    capabilities: ["conversation", "reasoning", "analysis", "code-generation", "3d-modeling"],
    categories: ["text", "vision", "multimodal", "audio", "video", "3d"],
    size: "xlarge",
    contextWindow: 2000000,
    parametersCount: "Not disclosed",
    gradientColors: ["#4285F4", "#EA4335", "#FBBC05", "#34A853"],
    logoUrl: getModelLogoPath("gemini-1-5-pro"),
    url: "https://ai.google.dev/gemini",
    uniqueCapabilities: [
      "3D Scene Reconstruction: Builds interactive environments from text descriptions.",
      "Hypothetical Reasoning: 'What-if' scenario modeling for scientific simulations."
    ],
    benchmarks: {
      "MMLU": { 
        score: "87.8%", 
        source: "https://storage.googleapis.com/deepmind-media/gemini/gemini_v2_report.pdf" 
      },
      "GSM8K": { 
        score: "94.4%", 
        source: "https://storage.googleapis.com/deepmind-media/gemini/gemini_v2_report.pdf" 
      }
    },
    color: "#4285f4",
    logo: "google.svg"
  },
  {
    id: "gemini-2-0-flash-thinking-exp",
    name: "Gemini 2.0 Flash Thinking",
    provider: "google",
    releaseDate: "December 11, 2024",
    description: "Gemini 2.0 Flash Thinking offers subsecond reasoning with 840 ms median response time for financial forecasting and an energy-efficient architecture using 0.8 kWh per million tokens (40% less than Gemini 1.5).",
    capabilities: ["conversation", "reasoning", "analysis", "financial-modeling"],
    categories: ["text", "multimodal"],
    size: "large",
    contextWindow: 500000,
    parametersCount: "Not disclosed",
    gradientColors: ["#4285F4", "#EA4335", "#FBBC05", "#34A853"],
    logoUrl: getModelLogoPath("gemini-1-5-pro"),
    url: "https://ai.google.dev/gemini",
    uniqueCapabilities: [
      "Subsecond Reasoning: 840 ms median response time for financial forecasting.",
      "Energy-Efficient Architecture: 0.8 kWh per million tokens (40% less than Gemini 1.5)."
    ],
    benchmarks: {
      "MMLU": { 
        score: "82.3%", 
        source: "https://storage.googleapis.com/deepmind-media/gemini/gemini_v2_report.pdf" 
      },
      "Response Time": { 
        score: "840ms", 
        source: "https://storage.googleapis.com/deepmind-media/gemini/gemini_v2_report.pdf" 
      }
    },
    color: "#4285f4",
    logo: "google.svg"
  },
  {
    id: "deepseek-r1",
    name: "DeepSeek R1",
    provider: "deepseek",
    releaseDate: "February 2025",
    description: "DeepSeek R1 is the world's first reasoning model developed entirely via reinforcement learning, offering cost efficiency at $0.14/million tokens vs. OpenAI o1's $15, and reducing Python runtime errors by 71% via static analysis integration.",
    capabilities: ["conversation", "reasoning", "code-generation", "analysis"],
    categories: ["text", "code", "multimodal"],
    size: "large",
    contextWindow: 128000,
    parametersCount: "671B total (37B active MoE)",
    gradientColors: ["#aabbff", "#aa88ff"],
    logoUrl: getModelLogoPath("deepseek-r1"),
    url: "https://deepseek-r1.com",
    uniqueCapabilities: [
      "Pure RL Architecture: World's first reasoning model developed entirely via reinforcement learning.",
      "Cost Efficiency: $0.14/million tokens vs. OpenAI o1's $15.",
      "Code Optimization: Reduces Python runtime errors by 71% via static analysis integration."
    ],
    benchmarks: {
      "MMLU": { 
        score: "83.4%", 
        source: "https://huggingface.co/deepseek-ai/deepseek-r1" 
      },
      "MATH": { 
        score: "72.6%", 
        source: "https://huggingface.co/deepseek-ai/deepseek-r1" 
      }
    },
    color: "#aabbff",
    logo: "deepseek.svg"
  },
  {
    id: "gpt-4-5",
    name: "GPT-4.5",
    provider: "openai",
    releaseDate: "February 27, 2025",
    description: "GPT-4.5 is a step forward in scaling up pre-training and post-training. With broader knowledge, improved intent understanding, and greater 'EQ', it excels at natural conversations, writing, programming, and practical problem solving with reduced hallucinations. GPT-4.5 achieved 62.5% accuracy on SimpleQA and a 37.1% hallucination rate, significantly outperforming GPT-4o and other models.",
    capabilities: ["conversation", "reasoning", "code-generation", "analysis", "summarization"],
    categories: ["text", "vision", "multimodal"],
    size: "xlarge",
    contextWindow: 128000,
    parametersCount: "Not disclosed",
    gradientColors: ["#10b981", "#0ea5e9"],
    logoUrl: getModelLogoPath("gpt-4-5"),
    url: "https://openai.com/gpt-4-5",
    uniqueCapabilities: [
      "Improved Collaboration: Better understanding of human needs and intent with natural conversations that are more attuned to human collaboration.",
      "Broader Knowledge: Deeper world knowledge leading to improved factual accuracy and reduced hallucinations.",
      "Greater EQ: Better at interpreting subtle cues and implicit expectations with more nuance and emotional intelligence."
    ],
    benchmarks: {
      "MMLU": { 
        score: "90.8%", 
        source: "https://github.com/openai/simple-evals" 
      },
      "MATH": { 
        score: "87.1%", 
        source: "https://github.com/openai/simple-evals" 
      },
      "GPQA": { 
        score: "69.5%", 
        source: "https://github.com/openai/simple-evals" 
      },
      "SimpleQA": { 
        score: "62.5%", 
        source: "https://github.com/openai/simple-evals" 
      }
    },
    color: "#10a37f",
    logo: "openai.svg"
  },
  {
    id: "chatgpt-4o-03-25",
    name: "ChatGPT-4o (March 2025)",
    provider: "openai",
    releaseDate: "March 27, 2025",
    description: "An updated version of GPT-4o that feels more intuitive, creative, and collaborative. Follows instructions more accurately, handles coding tasks more smoothly, and communicates in a clearer, more natural way with more concise responses and fewer markdown levels.",
    capabilities: ["conversation", "reasoning", "analysis", "code-generation"],
    categories: ["text", "vision", "multimodal"],
    size: "xlarge",
    contextWindow: 128000,
    parametersCount: "Not disclosed",
    gradientColors: ["#10b981", "#3b82f6"],
    logoUrl: getModelLogoPath("gpt-4o"),
    url: "https://help.openai.com/en/articles/6825453-chatgpt-release-notes",
    uniqueCapabilities: [
      "More intuitive and creative collaboration capabilities",
      "Improved instruction-following accuracy",
      "Clearer, more natural communication style with more concise responses",
      "Smoother handling of coding tasks"
    ],
    benchmarks: {
      "MMLU": { 
        score: "89.5%", 
        source: "https://openai.com/index/chatgpt-system-card-march-2025" 
      },
      "HumanEval": { 
        score: "92.1%", 
        source: "https://openai.com/index/chatgpt-system-card-march-2025" 
      }
    },
    color: "#10a37f",
    logo: "openai.svg"
  },
  {
    id: "deepseek-v3-03-24",
    name: "DeepSeek V3 (March 2024)",
    provider: "deepseek",
    releaseDate: "March 24, 2025",
    description: "DeepSeek V3 (March 2024) shows significant improvements in reasoning capabilities with enhanced MMLU-Pro (81.2%), GPQA (68.4%), AIME (59.4%), and LiveCodeBench (49.2%) scores. Features improved front-end web development, Chinese writing proficiency, and function calling accuracy.",
    capabilities: ["conversation", "reasoning", "web-design", "code-generation", "analysis"],
    categories: ["text", "code", "multimodal"],
    size: "xlarge",
    contextWindow: 128000,
    parametersCount: "Not disclosed",
    gradientColors: ["#0EA5E9", "#22D3EE"],
    logoUrl: getModelLogoPath("deepseek-r1"),
    url: "https://huggingface.co/deepseek-ai/DeepSeek-V3-0324",
    uniqueCapabilities: [
      "Enhanced reasoning capabilities with major benchmark improvements",
      "Improved front-end web development with better code executability",
      "Advanced Chinese writing proficiency with better style and content quality",
      "Optimized translation and function calling accuracy"
    ],
    benchmarks: {
      "MMLU-Pro": { 
        score: "81.2%", 
        source: "https://huggingface.co/deepseek-ai/DeepSeek-V3-0324" 
      },
      "GPQA": { 
        score: "68.4%", 
        source: "https://huggingface.co/deepseek-ai/DeepSeek-V3-0324" 
      },
      "AIME": { 
        score: "59.4%", 
        source: "https://huggingface.co/deepseek-ai/DeepSeek-V3-0324" 
      },
      "LiveCodeBench": { 
        score: "49.2%", 
        source: "https://huggingface.co/deepseek-ai/DeepSeek-V3-0324" 
      }
    },
    color: "#0EA5E9",
    logo: "deepseek.svg"
  },
  {
    id: "claude-3-opus",
    name: "Claude 3 Opus",
    provider: "anthropic",
    releaseDate: "March 4, 2024",
    description: "Claude 3 Opus is Anthropic's most powerful model with versatile capabilities ranging from complex reasoning to advanced problem-solving.",
    capabilities: ["conversation", "reasoning", "code-generation", "analysis"],
    categories: ["text", "vision", "multimodal"],
    size: "xlarge",
    contextWindow: 200000,
    parametersCount: "Not disclosed",
    gradientColors: ["#6366f1", "#ec4899"],
    logoUrl: getModelLogoPath("claude-3-opus"),
    url: "https://www.anthropic.com/claude",
    uniqueCapabilities: [
      "Reasoning-rich responses that show clear logical steps",
      "Advanced code generation with explanations",
      "Large context window for processing extensive documentation"
    ],
    benchmarks: {
      "MMLU": { 
        score: "86.8%", 
        source: "https://github.com/openai/simple-evals" 
      },
      "GPQA": { 
        score: "50.4%", 
        source: "https://github.com/openai/simple-evals" 
      },
      "MATH": { 
        score: "60.1%", 
        source: "https://assets.anthropic.com/m/1cd9d098ac3e6467/original/Claude-3-Model-Card-October-Addendum.pdf" 
      },
      "HumanEval": { 
        score: "84.9%", 
        source: "https://assets.anthropic.com/m/1cd9d098ac3e6467/original/Claude-3-Model-Card-October-Addendum.pdf" 
      },
      "MMMU": { 
        score: "59.4%", 
        source: "https://mmmu-benchmark.github.io/#leaderboard" 
      }
    },
    color: "#6f3cf5",
    logo: "anthropic.svg"
  },
  {
    id: "mistral-large",
    name: "Mistral Large",
    provider: "mistral",
    releaseDate: "February 26, 2024",
    description: "Mistral Large is a powerful model with strong multilingual capabilities and reasoning, featuring a 32K token context window.",
    capabilities: ["conversation", "reasoning", "code-generation"],
    categories: ["text", "multimodal"],
    size: "large",
    contextWindow: 32000,
    parametersCount: "Not disclosed",
    gradientColors: ["#6366f1", "#ec4899"],
    logoUrl: getModelLogoPath("mistral-large"),
    url: "https://mistral.ai/news/mistral-large",
    uniqueCapabilities: [
      "Native fluency in English, French, Spanish, German, and Italian",
      "32K tokens context window",
      "Native function calling capabilities"
    ],
    benchmarks: {
      "MMLU": { 
        score: "81.2%", 
        source: "https://mistral.ai/news/mistral-large/" 
      },
      "HellaSwag": { 
        score: "89.2%", 
        source: "https://mistral.ai/news/mistral-large/" 
      }
    },
    color: "#6366f1",
    logo: "mistral.svg"
  },
  {
    id: "mistral-large-2",
    name: "Mistral Large 2",
    provider: "mistral",
    releaseDate: "July 24, 2024",
    description: "Mistral Large 2 features a 128K context window with enhanced code generation, mathematics, reasoning, and multilingual support.",
    capabilities: ["conversation", "reasoning", "code-generation"],
    categories: ["text", "multimodal"],
    size: "large",
    contextWindow: 128000,
    parametersCount: "123B",
    gradientColors: ["#6366f1", "#ec4899"],
    logoUrl: getModelLogoPath("mistral-large"),
    url: "https://mistral.ai/news/mistral-large-2407/",
    uniqueCapabilities: [
      "Enhanced multilingual support (English, French, German, Spanish, Italian, Portuguese, Dutch, Russian, Chinese, Japanese, Korean, Arabic, Hindi)",
      "Improved function calling with parallel and sequential execution",
      "Advanced reasoning capabilities"
    ],
    benchmarks: {
      "MMLU": { 
        score: "84.0%", 
        source: "https://mistral.ai/news/mistral-large-2407/" 
      }
    },
    color: "#6366f1",
    logo: "mistral.svg"
  },
  {
    id: "llama-3-70b",
    name: "Llama 3 70B",
    provider: "meta",
    releaseDate: "April 18, 2024",
    description: "Llama 3 70B is a large language model from Meta with strong performance and efficiency for real-time interactions.",
    capabilities: ["conversation", "reasoning", "code-generation"],
    categories: ["text", "multimodal"],
    size: "large",
    contextWindow: 8000,
    parametersCount: "70B",
    gradientColors: ["#1877F2", "#0668E1"],
    logoUrl: getModelLogoPath("llama-3"),
    url: "https://ai.meta.com/llama/",
    uniqueCapabilities: [
      "High throughput processing (114 tokens per second)",
      "Fast Time to First Token (0.32s)",
      "Efficient for real-time interactions"
    ],
    benchmarks: {
      "MMLU": { 
        score: "82.0%", 
        source: "https://www.analyticsvidhya.com/blog/2024/08/llama-3-vs-llama-3-1/" 
      },
      "GSM8K": { 
        score: "93.0%", 
        source: "https://www.analyticsvidhya.com/blog/2024/08/llama-3-vs-llama-3-1/" 
      },
      "MATH": { 
        score: "50.4%", 
        source: "https://www.analyticsvidhya.com/blog/2024/08/llama-3-vs-llama-3-1/" 
      },
      "HumanEval": { 
        score: "81.7%", 
        source: "https://www.analyticsvidhya.com/blog/2024/08/llama-3-vs-llama-3-1/" 
      }
    },
    color: "#1877F2",
    logo: "meta.svg"
  },
  {
    id: "llama-3-1-70b",
    name: "Llama 3.1 70B",
    provider: "meta",
    releaseDate: "July 23, 2024",
    description: "Llama 3.1 70B offers a dramatically expanded context window and improved performance on mathematical reasoning and general knowledge tasks.",
    capabilities: ["conversation", "reasoning", "code-generation"],
    categories: ["text", "multimodal"],
    size: "large",
    contextWindow: 128000,
    parametersCount: "70B",
    gradientColors: ["#1877F2", "#0668E1"],
    logoUrl: getModelLogoPath("llama-3-1"),
    url: "https://ai.meta.com/llama/",
    uniqueCapabilities: [
      "Expanded context window (128K vs 8K in Llama 3 70B)",
      "Enhanced mathematical reasoning",
      "Longer output generations (4096 tokens vs 2048)"
    ],
    benchmarks: {
      "MMLU": { 
        score: "86.0%", 
        source: "https://www.vellum.ai/blog/llm-benchmarks-overview-limits-and-model-comparison" 
      },
      "GSM8K": { 
        score: "95.1%", 
        source: "https://www.analyticsvidhya.com/blog/2024/08/llama-3-vs-llama-3-1/" 
      },
      "MATH": { 
        score: "68.0%", 
        source: "https://www.analyticsvidhya.com/blog/2024/08/llama-3-vs-llama-3-1/" 
      },
      "HumanEval": { 
        score: "80.5%", 
        source: "https://www.analyticsvidhya.com/blog/2024/08/llama-3-vs-llama-3-1/" 
      },
      "GPQA": { 
        score: "46.7%", 
        source: "https://www.vellum.ai/blog/llm-benchmarks-overview-limits-and-model-comparison" 
      }
    },
    color: "#1877F2",
    logo: "meta.svg"
  },
  {
    id: "llama-3-1-405b",
    name: "Llama 3.1 405B",
    provider: "meta",
    releaseDate: "July 23, 2024",
    description: "Llama 3.1 405B is Meta's most powerful open-source model, outperforming even proprietary models on various benchmarks.",
    capabilities: ["conversation", "reasoning", "code-generation", "analysis"],
    categories: ["text", "code", "multimodal"],
    size: "xlarge",
    contextWindow: 128000,
    parametersCount: "405B",
    gradientColors: ["#1877F2", "#0668E1"],
    logoUrl: getModelLogoPath("llama-3-1"),
    url: "https://ai.meta.com/llama/",
    uniqueCapabilities: [
      "State-of-the-art performance among open-source models",
      "Superior mathematical reasoning",
      "Advanced language understanding on par with proprietary models"
    ],
    benchmarks: {
      "MMLU": { 
        score: "88.6%", 
        source: "https://www.vellum.ai/blog/llm-benchmarks-overview-limits-and-model-comparison" 
      },
      "MATH": { 
        score: "73.8%", 
        source: "https://www.vellum.ai/blog/llm-benchmarks-overview-limits-and-model-comparison" 
      },
      "GPQA": { 
        score: "51.1%", 
        source: "https://www.vellum.ai/blog/llm-benchmarks-overview-limits-and-model-comparison" 
      },
      "HumanEval": { 
        score: "89.0%", 
        source: "https://www.vellum.ai/blog/llm-benchmarks-overview-limits-and-model-comparison" 
      },
      "MGSM": { 
        score: "91.6%", 
        source: "https://www.vellum.ai/blog/llm-benchmarks-overview-limits-and-model-comparison" 
      },
      "Berkeley Function Calling (BFCL)": { 
        score: "88.5%", 
        source: "https://www.vellum.ai/blog/llm-benchmarks-overview-limits-and-model-comparison" 
      },
      "GSM8K": { 
        score: "96.8%", 
        source: "https://www.vellum.ai/blog/llm-benchmarks-overview-limits-and-model-comparison" 
      }
    },
    color: "#1877F2",
    logo: "meta.svg"
  },
  {
    id: "llama-4-maverick",
    name: "Llama 4 Maverick",
    provider: "meta",
    releaseDate: "April 5, 2025",
    description: "Llama 4 Maverick is Meta's multimodal expert model with 17B active parameters and 128 experts (400B total parameters). It outperforms GPT-4o and Gemini 2.0 Flash across various benchmarks, achieving an ELO of 1417 on LMArena. Designed for sophisticated AI applications with excellent image understanding and creative writing.",
    capabilities: ["conversation", "reasoning", "code-generation", "analysis", "planning"],
    categories: ["text", "code", "multimodal", "vision"],
    size: "xlarge",
    contextWindow: 1000000,
    parametersCount: "17B active (400B total)",
    gradientColors: ["#1877F2", "#00B5D8"],
    logoUrl: getModelLogoPath("meta-color"),
    url: "https://llama.com",
    uniqueCapabilities: [
      "Industry-leading multimodal understanding of text and images",
      "Best-in-class performance to cost ratio",
      "Supports multi-image inputs with up to 8 images during inference",
      "Interleaved attention architecture (iRoPE) for context length generalization"
    ],
    benchmarks: {
      "LMArena ELO (experimental chat)": { 
        score: "1417", 
        source: "https://meta.com/llama" 
      }
    },
    color: "#1877F2",
    logo: "meta.svg",
    featured: true
  },
  {
    id: "llama-4-scout",
    name: "Llama 4 Scout",
    provider: "meta",
    releaseDate: "April 5, 2025",
    description: "Llama 4 Scout is Meta's compact yet powerful multimodal model with 17B active parameters and 16 experts (109B total parameters). It fits on a single H100 GPU with Int4 quantization and offers an industry-leading 10M token context window, outperforming Gemma 3, Gemini 2.0 Flash-Lite, and Mistral 3.1 across various benchmarks.",
    capabilities: ["conversation", "reasoning", "code-generation", "analysis"],
    categories: ["text", "code", "multimodal", "vision"],
    size: "medium",
    contextWindow: 10000000,
    parametersCount: "17B active (109B total)",
    gradientColors: ["#1877F2", "#4267B2"],
    logoUrl: getModelLogoPath("meta-color"),
    url: "https://meta.com/llama",
    uniqueCapabilities: [
      "Industry-leading 10M token context window",
      "Single H100 GPU deployment with Int4 quantization",
      "Best-in-class image grounding capabilities",
      "Interleaved attention architecture (iRoPE) for context length generalization"
    ],
    benchmarks: {
      "Context Length": { 
        score: "10M tokens", 
        source: "https://meta.com/llama" 
      }
    },
    color: "#4267B2",
    logo: "meta.svg"
  },
  {
    id: "llama-4-behemoth",
    name: "Llama 4 Behemoth",
    provider: "meta",
    releaseDate: "Coming Soon (In Training)",
    description: "Llama 4 Behemoth is Meta's most powerful model yet with 288B active parameters and 16 experts (nearly 2T total parameters), outperforming GPT-4.5, Claude Sonnet 3.7, and Gemini 2.0 Pro on several STEM benchmarks.",
    capabilities: ["conversation", "reasoning", "code-generation", "analysis"],
    categories: ["text", "code", "multimodal", "vision"],
    size: "xlarge",
    contextWindow: 128000,
    parametersCount: "288B active (2T total)",
    gradientColors: ["#1877F2", "#0668E1"],
    logoUrl: getModelLogoPath("llama-4"),
    url: "https://llama.com",
    uniqueCapabilities: [
      "Teacher model for Llama 4 Scout and Maverick",
      "Among the world's smartest LLMs",
      "Mixture-of-Experts (MoE) architecture with 16 experts",
      "State-of-the-art performance on STEM benchmarks"
    ],
    benchmarks: {
      "MMLU": { 
        score: "90.5%", 
        source: "https://llama.com" 
      },
      "MATH-500": { 
        score: "83.7%", 
        source: "https://llama.com" 
      },
      "GPQA Diamond": { 
        score: "87.2%", 
        source: "https://llama.com" 
      },
      "HumanEval": { 
        score: "92.1%", 
        source: "https://llama.com" 
      }
    },
    color: "#1877F2",
    logo: "meta.svg"
  },
  {
    id: "quasar-alpha",
    name: "Quasar Alpha",
    provider: "openrouter",
    releaseDate: "April 2, 2025",
    description: "This is a cloaked model provided to the community to gather feedback. It's a powerful, all-purpose model supporting long-context tasks, including code generation. All prompts and completions for this model are logged by the provider as well as OpenRouter.",
    capabilities: ["conversation", "web-design", "code-generation", "reasoning"],
    categories: ["text", "multimodal"],
    size: "large",
    contextWindow: 1000000,
    parametersCount: "Unknown",
    gradientColors: ["#0ea5e9", "#6366f1"],
    logoUrl: getModelLogoPath("quasar-alpha"),
    url: "https://openrouter.ai/models/quasar-alpha",
    uniqueCapabilities: ["All-purpose model supporting long-context tasks", "Powerful code generation capabilities", "1,000,000 context window"],
    logo: "openrouter.svg"
  },
  {
    id: "optimus-alpha",
    name: "Optimus Alpha",
    provider: "openrouter",
    releaseDate: "April 10, 2025",
    description: "A stealth, powerful, all-purpose model supporting long-context tasks, including code generation. Based on community feedback.",
    capabilities: ["conversation", "web-design", "code-generation", "reasoning"],
    categories: ["text", "multimodal"],
    size: "large",
    contextWindow: 1000000,
    parametersCount: "Unknown",
    gradientColors: ["#10b981", "#06b6d4"],
    logoUrl: getModelLogoPath("optimus-alpha"),
    url: "#",
    uniqueCapabilities: ["Stealth model for feedback gathering", "Powerful code generation capabilities", "1,000,000 context window"],
    logo: "openrouter.svg"
  },
]; 