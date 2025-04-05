import { ModelResponse } from "@/types/models";
import { gpt_4oResponses } from "./gpt-4o";
import { claude_3_5_sonnetResponses } from "./claude-3-5-sonnet";
import { claude_3_7_sonnetResponses } from "./claude-3-7-sonnet";
import { claude_3_7_sonnet_thinkingResponses } from "./claude-3-7-sonnet-thinking";
import { deepseek_r1Responses } from "./deepseek-r1";
import { gemini_2_5_pro_expResponses } from "./gemini-2-5-pro-exp";
import { gemini_2_0_pro_expResponses } from "./gemini-2-0-pro-exp";
import { gemini_2_0_flash_thinking_expResponses } from "./gemini-2-0-flash-thinking-exp";
import { o1Responses } from "./o1";
import { o3_miniResponses } from "./o3-mini";
import { midjourney_v1Responses } from "./midjourney-v1";
import { midjourney_v2Responses } from "./midjourney-v2";
import { midjourney_v3Responses } from "./midjourney-v3";
import { midjourney_v4Responses } from "./midjourney-v4";
import { midjourney_v5Responses } from "./midjourney-v5";
import { midjourney_v6Responses } from "./midjourney-v6";
import { midjourney_v6_1Responses } from "./midjourney-v6.1";
import { dalle_3Responses } from "./dalle-3";
import { grok_3Responses } from "./grok-3";
import { grok_3_thinkingResponses } from "./grok-3-thinking";
import { gpt_4_5Responses } from "./gpt-4-5";
import { chatgpt_4o_03_25Responses } from "./chatgpt-4o-03-25";
import { deepseek_v3_03_24Responses } from "./deepseek-v3-03-24";
import { quasar_alphaResponses } from "./quasar-alpha";
import { llama_4_maverickResponses } from "./llama-4-maverick";
import { llama_4_scoutResponses } from "./llama-4-scout";

// Import individual model responses to avoid naming conflicts
import * as gpt_4o from "./gpt-4o";
import * as claude_3_5_sonnet from "./claude-3-5-sonnet";
import * as claude_3_7_sonnet from "./claude-3-7-sonnet";
import * as claude_3_7_sonnet_thinking from "./claude-3-7-sonnet-thinking";
import * as deepseek_r1 from "./deepseek-r1";
import * as gemini_2_5_pro_exp from "./gemini-2-5-pro-exp";
import * as gemini_2_0_pro_exp from "./gemini-2-0-pro-exp";
import * as gemini_2_0_flash_thinking_exp from "./gemini-2-0-flash-thinking-exp";
import * as o1 from "./o1";
import * as o3_mini from "./o3-mini";
import * as midjourney_v1 from "./midjourney-v1";
import * as midjourney_v2 from "./midjourney-v2";
import * as midjourney_v3 from "./midjourney-v3";
import * as midjourney_v4 from "./midjourney-v4";
import * as midjourney_v5 from "./midjourney-v5";
import * as midjourney_v6 from "./midjourney-v6";
import * as midjourney_v6_1 from "./midjourney-v6.1";
import * as dalle_3 from "./dalle-3";
import * as grok_3 from "./grok-3";
import * as grok_3_thinking from "./grok-3-thinking";
import * as gpt_4_5 from "./gpt-4-5";
import * as chatgpt_4o_03_25 from "./chatgpt-4o-03-25";
import * as deepseek_v3_03_24 from "./deepseek-v3-03-24";
import * as quasar_alpha from "./quasar-alpha";
import * as llama_4_maverick from "./llama-4-maverick";
import * as llama_4_scout from "./llama-4-scout";

// Combined array of all raw responses
const allRawResponses: ModelResponse[] = [
  ...gpt_4oResponses,
  ...claude_3_5_sonnetResponses,
  ...claude_3_7_sonnetResponses,
  ...claude_3_7_sonnet_thinkingResponses,
  ...deepseek_r1Responses,
  ...gemini_2_5_pro_expResponses,
  ...gemini_2_0_pro_expResponses,
  ...gemini_2_0_flash_thinking_expResponses,
  ...o1Responses,
  ...o3_miniResponses,
  ...midjourney_v1Responses,
  ...midjourney_v2Responses,
  ...midjourney_v3Responses,
  ...midjourney_v4Responses,
  ...midjourney_v5Responses,
  ...midjourney_v6Responses,
  ...midjourney_v6_1Responses,
  ...dalle_3Responses,
  ...grok_3Responses,
  ...grok_3_thinkingResponses,
  ...gpt_4_5Responses,
  ...chatgpt_4o_03_25Responses,
  ...deepseek_v3_03_24Responses,
  ...quasar_alphaResponses,
  ...llama_4_maverickResponses,
  ...llama_4_scoutResponses
];

// Update Midjourney and DALL-E response dates to a specific date
const processedResponses = allRawResponses.map(response => {
  // Check if response is from Midjourney (any version) or DALL-E 3
  if (response.modelId.startsWith('midjourney-') || response.modelId === 'dalle-3') {
    // Create a new object with the updated date
    return {
      ...response,
      responseDate: "2025-02-28" // Set all Midjourney and DALL-E responses to this date
    };
  }
  // Return the original response for other models
  return response;
});

// Export the processed responses
export const modelResponses: ModelResponse[] = processedResponses;

// Helper function to get responses by model ID
export const getResponsesByModelId = (modelId: string): ModelResponse[] => {
  return modelResponses.filter(response => response.modelId === modelId);
};

// Helper function to get a specific response by ID
export const getResponseById = (responseId: string): ModelResponse | undefined => {
  return modelResponses.find(response => response.id === responseId);
};

// Helper to get responses by type
export const getResponsesByType = (type: ModelResponse["type"]): ModelResponse[] => {
  return modelResponses.filter(response => response.type === type);
};

// Export all model namespaces to avoid conflicting names
export {
  gpt_4o,
  claude_3_5_sonnet,
  claude_3_7_sonnet,
  claude_3_7_sonnet_thinking,
  deepseek_r1,
  gemini_2_5_pro_exp,
  gemini_2_0_pro_exp,
  gemini_2_0_flash_thinking_exp,
  o1,
  o3_mini,
  midjourney_v1,
  midjourney_v2,
  midjourney_v3,
  midjourney_v4,
  midjourney_v5,
  midjourney_v6,
  midjourney_v6_1,
  dalle_3,
  grok_3,
  grok_3_thinking,
  gpt_4_5,
  chatgpt_4o_03_25,
  deepseek_v3_03_24,
  quasar_alpha,
  llama_4_maverick,
  llama_4_scout
}
