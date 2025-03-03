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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
  },
  {
    id: "midjourney-v5",
    name: "Midjourney v5",
    provider: "midjourney",
    releaseDate: "November 2023",
    description: "Midjourney v5 simulates ray-traced shadows and ambient occlusion with its Dynamic Lighting system and offers a Historical Accuracy Mode that recreates period-specific artifacts with 97% archival fidelity.",
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
    ]
  },
  {
    id: "midjourney-v6",
    name: "Midjourney v6",
    provider: "midjourney",
    releaseDate: "December 2024",
    description: "Midjourney v6 produces 6K resolution outputs (6144x6144px) with photorealistic textures and 'Style Algebra' that mixes artistic styles via mathematical operators (e.g., 'Van Gogh × Picasso^0.7').",
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    uniqueCapabilities: []
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
  },
  {
    id: "gemini-2-0-pro-exp",
    name: "Gemini 2.0 Pro",
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
    ]
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
    ]
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
    ]
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
    ]
  },
]; 