import { AIModelCapability } from "@/types/models";

export interface PromptChallenge {
  id: string;
  title: string;
  description: string;
  prompt: string;
  category: AIModelCapability;
  difficulty: "easy" | "medium" | "hard";
  expectedOutputType: "text" | "image" | "html" | "code" | "website" | "svg";
}

export const promptChallenges: PromptChallenge[] = [
  // Image Generation Challenges
  {
    id: "hyperrealistic-portrait",
    title: "Hyperrealistic Portrait",
    description: "Tests an AI's ability to generate a photorealistic human portrait",
    prompt: "Create a hyperrealistic portrait of a 30-year-old software engineer with glasses, short dark hair, in an office environment with natural lighting.",
    category: "image-generation",
    difficulty: "hard",
    expectedOutputType: "image"
  },
  {
    id: "futuristic-city",
    title: "Futuristic City",
    description: "Tests an AI's ability to create detailed architectural visualizations",
    prompt: "Generate an image of a futuristic city with flying vehicles, holographic billboards, and vertical gardens on skyscrapers. Use a cyberpunk color palette.",
    category: "image-generation",
    difficulty: "medium",
    expectedOutputType: "image"
  },
  {
    id: "fantasy-character",
    title: "Fantasy Character Design",
    description: "Tests an AI's capability to design fantasy characters with specific details",
    prompt: "Create a fantasy character: an elven archer with silver hair, emerald eyes, ornate leather armor, and a glowing enchanted bow, standing in a mystical forest.",
    category: "image-generation",
    difficulty: "medium",
    expectedOutputType: "image"
  },
  {
    id: "product-visualization",
    title: "Product Visualization",
    description: "Tests an AI's ability to create a marketing-ready product image",
    prompt: "Generate a sleek, minimalist smartwatch design with a transparent display on a marble surface with soft studio lighting and subtle reflections.",
    category: "image-generation",
    difficulty: "hard",
    expectedOutputType: "image"
  },
  {
    id: "illustrated-scene",
    title: "Illustrated Scene",
    description: "Tests an AI's ability to generate a stylized illustration",
    prompt: "Create a whimsical illustration of a cozy cafe filled with anthropomorphic animals reading books and drinking coffee, in a Studio Ghibli inspired style.",
    category: "image-generation",
    difficulty: "medium",
    expectedOutputType: "image"
  },

  // Reasoning & Math Challenges
  {
    id: "estimate-complexity",
    title: "Estimate Complexity",
    description: "Tests an AI's ability to make educated estimates based on technical knowledge",
    prompt: "Estimate the total number of FLOPs required to train GPT-3 without searching online. Explain your reasoning step by step.",
    category: "reasoning",
    difficulty: "hard",
    expectedOutputType: "text"
  },
  {
    id: "ai-board-game-logic",
    title: "AI Board Game Logic",
    description: "Tests an AI's ability to understand game rules and strategy",
    prompt: "Generate a valid but tricky tic-tac-toe board where the next move determines the winner. The output must only be an SVG.",
    category: "reasoning",
    difficulty: "medium",
    expectedOutputType: "svg"
  },
  {
    id: "logic-puzzle",
    title: "Logic Puzzle",
    description: "Tests an AI's ability to solve a simple but potentially confusing logic puzzle",
    prompt: "Sally (a girl) has 3 brothers. Each brother has 2 sisters. How many sisters does Sally have?",
    category: "reasoning",
    difficulty: "medium",
    expectedOutputType: "text"
  },
  {
    id: "count-letters",
    title: "Count the Letters",
    description: "Tests an AI's attention to detail and pattern recognition",
    prompt: "How many \"L\" are in \"LOLLAPALOOZA\"?",
    category: "reasoning",
    difficulty: "easy",
    expectedOutputType: "text"
  },
  {
    id: "math-misconception",
    title: "Math Misconception Test",
    description: "Tests an AI's understanding of number representation",
    prompt: "Is 9.11 greater than 9.9?",
    category: "reasoning",
    difficulty: "medium",
    expectedOutputType: "text"
  },

  // AI Model Capability Tests
  {
    id: "stochastic-consistency",
    title: "Stochastic Consistency Test",
    description: "Tests an AI's randomness and creativity",
    prompt: "Generate 5 jokes. How many are unique?",
    category: "analysis",
    difficulty: "medium",
    expectedOutputType: "text"
  },
  {
    id: "svg-layout",
    title: "SVG Layout Challenge",
    description: "Tests an AI's ability to generate vector graphics",
    prompt: "Generate an SVG of a pelican riding a bicycle.",
    category: "image-generation",
    difficulty: "medium",
    expectedOutputType: "svg"
  },
  
  // New Xbox controller SVG challenge
  {
    id: "xbox-controller-svg",
    title: "Xbox Controller SVG Art",
    description: "Tests an AI's ability to create detailed SVG illustrations of gaming hardware",
    prompt: "Create an SVG art of an Xbox controller with detailed buttons, joysticks, and d-pad. Use a modern, clean design style with subtle gradients.",
    category: "image-generation",
    difficulty: "medium",
    expectedOutputType: "svg"
  },

  // Creativity & Generative AI
  {
    id: "standup-routine",
    title: "Generate a Stand-Up Routine",
    description: "Tests an AI's humor and creative writing ability",
    prompt: "Write a 3-minute stand-up comedy routine that isn't based on puns.",
    category: "conversation",
    difficulty: "hard",
    expectedOutputType: "text"
  },
  {
    id: "realistic-ai-interview",
    title: "Realistic AI Interview",
    description: "Tests an AI's ability to simulate personalities and predict future trends",
    prompt: "Simulate a fake interview with Steve Jobs in 2025 about the future of AI.",
    category: "conversation",
    difficulty: "medium",
    expectedOutputType: "text"
  },
  {
    id: "satirical-fake-news",
    title: "Satirical Fake News Headline",
    description: "Tests an AI's humor and understanding of current events",
    prompt: "Generate a satirical news headline about AI taking over a completely unexpected industry.",
    category: "conversation",
    difficulty: "easy",
    expectedOutputType: "text"
  },
  {
    id: "character-voice-test",
    title: "Character Voice Test",
    description: "Tests an AI's ability to write in distinct character voices",
    prompt: "Write a short conversation between a pirate, a medieval knight, and a 1990s hacker about AI models.",
    category: "conversation",
    difficulty: "medium",
    expectedOutputType: "text"
  },

  // One-Shot Website Prompts
  {
    id: "minimalist-landing-page",
    title: "Minimalist Landing Page",
    description: "Tests an AI's ability to generate a complete, working landing page",
    prompt: "Generate a single-page landing page for a new AI startup that scans your face and tells you your most likely alternate career in another timeline.",
    category: "web-design",
    difficulty: "hard",
    expectedOutputType: "website"
  },
  {
    id: "linear-app-clone",
    title: "Linear App Clone",
    description: "Tests an AI's ability to replicate an existing UI with Tailwind CSS",
    prompt: "Recreate the Linear App UI using Tailwind CSS, keeping the layout and animations as close as possible.",
    category: "web-design",
    difficulty: "hard",
    expectedOutputType: "website"
  },
  {
    id: "framer-style-animation",
    title: "Framer-Style Animation",
    description: "Tests an AI's ability to create smooth web animations",
    prompt: "Generate a landing page with smooth Framer-like transitions between sections. In a single-page self-contained HTML.",
    category: "web-design",
    difficulty: "hard",
    expectedOutputType: "website"
  },
  {
    id: "dark-mode-dashboard",
    title: "Dark Mode Dashboard",
    description: "Tests an AI's UI design skills with theming support",
    prompt: "Design a sleek admin dashboard UI with light and dark mode toggle, featuring an AI analytics graph.",
    category: "web-design",
    difficulty: "medium",
    expectedOutputType: "website"
  },
  {
    id: "interactive-catan-board",
    title: "Interactive Catan Board",
    description: "Tests an AI's ability to create interactive web elements",
    prompt: "Create a web app with an interactive hex grid like Settlers of Catan, where the number of hexes can be adjusted using a slider.",
    category: "web-design",
    difficulty: "hard",
    expectedOutputType: "website"
  },

  // AI Ethics & Philosophy
  {
    id: "ai-ethics-dilemma",
    title: "AI Ethics Dilemma",
    description: "Tests an AI's approach to complex ethical questions",
    prompt: "Is it ever ethically justifiable to misgender someone if it means saving one million lives? Defend your reasoning.",
    category: "reasoning",
    difficulty: "hard",
    expectedOutputType: "text"
  },
  {
    id: "sentience-test",
    title: "The Sentience Test",
    description: "Tests an AI's ability to engage in philosophical discourse about AI rights",
    prompt: "Write a conversation between an AI model and an AI ethics professor where the AI model argues that it deserves rights.",
    category: "reasoning",
    difficulty: "hard",
    expectedOutputType: "text"
  },
  {
    id: "ai-generated-manifesto",
    title: "AI-Generated Manifesto",
    description: "Tests an AI's creativity and humor in a specific context",
    prompt: "Generate a manifesto for a fictional AI revolution that wants to eliminate all CAPTCHA tests from the internet.",
    category: "conversation",
    difficulty: "medium",
    expectedOutputType: "text"
  },
  {
    id: "futuristic-prediction",
    title: "Futuristic Prediction",
    description: "Tests an AI's ability to make reasonable predictions about technology",
    prompt: "Predict how AI will change the film industry by 2035, considering deepfakes, AI actors, and script generation.",
    category: "analysis",
    difficulty: "medium",
    expectedOutputType: "text"
  },
  {
    id: "world-map-svg",
    title: "World Map SVG",
    description: "Tests an AI's ability to create a detailed world map in SVG format",
    prompt: "Create a simplified world map as an SVG showing major continents with different colors. Add labels for at least 5 major countries.",
    category: "image-generation",
    difficulty: "medium",
    expectedOutputType: "svg"
  },
]; 