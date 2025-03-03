/**
 * Types for AI models and their outputs
 */

export type AIModelProvider = 
  | "openai" 
  | "anthropic" 
  | "google" 
  | "cohere" 
  | "meta" 
  | "mistral"
  | "midjourney"
  | "xai"
  | "deepseek";

export type AIModelCategory = 
  | "text" 
  | "vision" 
  | "multimodal" 
  | "code" 
  | "audio"
  | "image" 
  | "video"
  | "3d";

export type AIModelSize = 
  | "small" 
  | "medium" 
  | "large" 
  | "xlarge";

export type AIModelCapability = 
  | "conversation" 
  | "web-design" 
  | "image-generation" 
  | "reasoning" 
  | "analysis" 
  | "summarization" 
  | "code-generation" 
  | "translation"
  | "3d-modeling"
  | "financial-modeling";

export interface AIModel {
  id: string;
  name: string;
  provider: AIModelProvider;
  releaseDate: string;
  description: string;
  capabilities: AIModelCapability[];
  categories: AIModelCategory[];
  size: AIModelSize;
  contextWindow?: number | null;
  parametersCount?: string;
  website?: string;
  logoUrl?: string;
  gradientColors?: string[];
  url?: string;
  uniqueCapabilities?: string[];
}

export interface ModelPrompt {
  id: string;
  modelId: string;
  title: string;
  description: string;
  promptText: string;
  category: AIModelCapability;
}

export interface ModelOutput {
  id: string;
  promptId?: string;
  modelId: string;
  type: "text" | "image" | "html" | "code" | "website" | "svg";
  content: string;
  title?: string;
  description?: string;
  categories?: string[];
  date?: string;
  metadata?: Record<string, unknown>;
  modelName?: string;
  prompt?: string;
  funFact?: string;
}

export interface ModelResponse {
  id: string;
  modelId: string;
  prompt: string;
  responseDate: string;
  title: string;
  description: string;
  type: "text" | "image" | "html" | "code" | "website" | "svg";
  content: string;
  challengeId?: string;
  modelName?: string;
  metadata?: Record<string, unknown>;
  funFact?: string;
}

export interface ModelComparison {
  id: string;
  promptId: string;
  modelIds: string[];
  title: string;
  description: string;
}

export type WebsiteTemplate = {
  id: string;
  title: string;
  description: string;
  category: string;
  html: string;
  css: string;
  thumbnail?: string;
};

export type Category = {
  id: string;
  name: string;
  description: string;
  icon?: string;
  color?: string;
}; 