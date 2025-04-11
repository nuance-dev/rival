import { ModelResponse } from "@/types/models";

export const countLettersGpt4oMini: ModelResponse = {
  id: "gpt-4o-mini-count-letters", // model-id-slug + challenge-id
  modelId: "gpt-4o-mini", // model-id-slug
  prompt: "How many \"L\" are in \"LOLLAPALOOZA\"", // The prompt extracted in Step 2
  responseDate: "2025-04-11", // user_provided_date
  type: "text", // Determined from content
  title: "Count the Letters", // From the gpt-4o reference file
  description: "GPT-4o mini's response counting the letter L in LOLLAPALOOZA.", // Write a brief description
  content: `There are three "L"s in "LOLLAPALOOZA."`
}; 