import { Category } from "@/types/models";
import { Code, Layout, FileText, PenTool, BrainCircuit, Image, MessageSquare, Lightbulb } from "lucide-react";

export const categories: Category[] = [
  {
    id: "code-generation",
    name: "Code Generation",
    description: "AI models creating code across different programming languages and frameworks",
    icon: "Code",
    color: "#3b82f6"
  },
  {
    id: "web-design",
    name: "Web Design",
    description: "Website and UI designs created by AI models",
    icon: "Layout",
    color: "#10b981"
  },
  {
    id: "text-generation",
    name: "Text Generation",
    description: "Text outputs including stories, articles, and creative writing",
    icon: "FileText",
    color: "#8b5cf6"
  },
  {
    id: "creative",
    name: "Creative",
    description: "Creative outputs that demonstrate imagination and artistic capabilities",
    icon: "PenTool",
    color: "#ec4899"
  },
  {
    id: "reasoning",
    name: "Reasoning",
    description: "Logical reasoning, problem-solving, and analytical thinking",
    icon: "BrainCircuit",
    color: "#f59e0b"
  },
  {
    id: "image-generation",
    name: "Image Generation",
    description: "AI-generated imagery and visual content",
    icon: "Image",
    color: "#6366f1"
  },
  {
    id: "conversation",
    name: "Conversation",
    description: "Natural dialogue and conversational abilities",
    icon: "MessageSquare",
    color: "#0ea5e9"
  },
  {
    id: "innovative",
    name: "Innovative",
    description: "Novel, unexpected, or particularly impressive outputs",
    icon: "Lightbulb",
    color: "#d97706"
  }
];

export const getIconForCategory = (categoryId: string) => {
  const category = categories.find(cat => cat.id === categoryId);
  if (!category || !category.icon) return null;
  
  switch (category.icon) {
    case "Code":
      return Code;
    case "Layout":
      return Layout;
    case "FileText":
      return FileText;
    case "PenTool":
      return PenTool;
    case "BrainCircuit":
      return BrainCircuit;
    case "Image":
      return Image;
    case "MessageSquare":
      return MessageSquare;
    case "Lightbulb":
      return Lightbulb;
    default:
      return null;
  }
};

// Helper function to get category by ID
export const getCategoryById = (categoryId: string): Category | undefined => {
  return categories.find(category => category.id === categoryId);
};

// Helper function to get multiple categories by IDs
export const getCategoriesByIds = (categoryIds: string[]): Category[] => {
  return categories.filter(category => categoryIds.includes(category.id));
}; 