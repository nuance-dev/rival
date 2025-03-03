import { ModelPrompt } from "@/types/models";

// Example Prompts
export const prompts: ModelPrompt[] = [
  {
    id: "web-design-prompt",
    modelId: "all",
    title: "E-commerce Product Page",
    description: "Design a modern e-commerce product page for a premium coffee brand",
    promptText: "Design a modern, aesthetically pleasing e-commerce product page for a premium coffee brand called 'Elevation Coffee'. The page should showcase their signature dark roast coffee beans. Include product images, description, pricing ($24.99), customer reviews (4.8/5 stars), and an 'Add to Cart' button. The design should be clean, minimalist, and convey premium quality. Use a color palette of deep browns, creams, and subtle gold accents.",
    category: "web-design",
  },
  {
    id: "code-generation-prompt",
    modelId: "all",
    title: "Todo App in React",
    description: "Write React code for a simple todo application",
    promptText: "Create a simple React Todo application component that lets users add new todos, mark them as complete, and delete them. Use hooks for state management. The UI should be clean and minimal, with a subtle animation when completing or removing items.",
    category: "code-generation",
  },
  {
    id: "reasoning-prompt",
    modelId: "all",
    title: "Logic Puzzle Solution",
    description: "Solve a complex logical reasoning puzzle step by step",
    promptText: "Five friends (Alex, Blake, Casey, Dana, and Eli) each have a different hobby (cooking, dancing, hiking, painting, and yoga) and come from different countries (Australia, Brazil, Canada, Denmark, and Egypt). Given these clues: 1) The person from Brazil enjoys hiking. 2) Alex is from Canada. 3) The person who enjoys cooking is from Denmark. 4) Blake enjoys painting. 5) Casey is from Egypt. 6) Dana enjoys yoga. 7) The person from Australia does not enjoy dancing. Can you determine each person's hobby and country of origin? Explain your reasoning step by step.",
    category: "reasoning",
  },
  {
    id: "image-generation-prompt",
    modelId: "all",
    title: "Image Description",
    description: "Detailed description of a mountain landscape at sunset",
    promptText: "Describe in vivid detail what you would see in an image of a majestic mountain landscape at sunset, with a crystal-clear lake reflecting the mountains and sky. Include details about colors, lighting, and any small elements that would make the scene feel immersive and realistic.",
    category: "image-generation",
  },
]; 