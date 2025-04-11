import { ModelResponse } from "@/types/models";

export const satiricalFakeNewsGpt4oMini: ModelResponse = {
  id: "gpt-4o-mini-satirical-fake-news", // model-id-slug + challenge-id
  modelId: "gpt-4o-mini", // model-id-slug
  prompt: "Generate a satirical news headline about AI taking over a completely unexpected industry.", // The prompt extracted in Step 2
  responseDate: "2025-04-11", // user_provided_date
  type: "text", // Determined from content
  title: "Satirical Fake News Headline", // From the gpt-4o reference file
  description: "GPT-4o mini's response to the challenge: Generate a satirical news headline about AI.", // Write a brief description
  content: `"AI Takes the Reins as World's First Robot Barista Perfects Art of Making Coffee, Now Demands Tips in Bitcoin"`
}; 