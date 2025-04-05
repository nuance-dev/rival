import { ModelResponse } from "@/types/models";

import { linearAppClonellama_4_maverick } from "./linear-app-clone";
import { minimalistLandingPagellama_4_maverick } from "./minimalist-landing-page";
import { worldMapSvgllama_4_maverick } from "./world-map-svg";
import { svgLayoutllama_4_maverick } from "./svg-layout";
import { xboxControllerSvgllama_4_maverick } from "./xbox-controller-svg";
import { interactiveCatanBoardllama_4_maverick } from "./interactive-catan-board";

// Collection of all Llama 4 Maverick responses
export const llama_4_maverickResponses: ModelResponse[] = [
  linearAppClonellama_4_maverick,
  minimalistLandingPagellama_4_maverick,
  worldMapSvgllama_4_maverick,
  svgLayoutllama_4_maverick,
  xboxControllerSvgllama_4_maverick,
  interactiveCatanBoardllama_4_maverick
];

// Re-export individual responses for direct import
export {
  linearAppClonellama_4_maverick,
  minimalistLandingPagellama_4_maverick,
  worldMapSvgllama_4_maverick,
  svgLayoutllama_4_maverick,
  xboxControllerSvgllama_4_maverick,
  interactiveCatanBoardllama_4_maverick
}; 