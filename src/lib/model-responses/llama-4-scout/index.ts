import { ModelResponse } from "@/types/models";

import { linearAppClonellama_4_scout } from "./linear-app-clone";
import { minimalistLandingPagellama_4_scout } from "./minimalist-landing-page";
import { worldMapSvgllama_4_scout } from "./world-map-svg";
import { svgLayoutllama_4_scout } from "./svg-layout";
import { xboxControllerSvgllama_4_scout } from "./xbox-controller-svg";
import { interactiveCatanBoardllama_4_scout } from "./interactive-catan-board";

// Collection of all Llama 4 Scout responses
export const llama_4_scoutResponses: ModelResponse[] = [
  linearAppClonellama_4_scout,
  minimalistLandingPagellama_4_scout,
  worldMapSvgllama_4_scout,
  svgLayoutllama_4_scout,
  xboxControllerSvgllama_4_scout,
  interactiveCatanBoardllama_4_scout
];

// Re-export individual responses for direct import
export {
  linearAppClonellama_4_scout,
  minimalistLandingPagellama_4_scout,
  worldMapSvgllama_4_scout,
  svgLayoutllama_4_scout,
  xboxControllerSvgllama_4_scout,
  interactiveCatanBoardllama_4_scout
}; 