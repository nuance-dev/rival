import { ModelResponse } from "@/types/models";
import { linearAppClonequasar_alpha } from "./linear-app-clone";
import { minimalistLandingPagequasar_alpha } from "./minimalist-landing-page";
import { worldMapSvgquasar_alpha } from "./world-map-svg";
import { svgLayoutquasar_alpha } from "./svg-layout";
import { xboxControllerSvgquasar_alpha } from "./xbox-controller-svg";
import { interactiveCatanBoardquasar_alpha } from "./interactive-catan-board";

// Collection of all Quasar Alpha responses
export const quasar_alphaResponses: ModelResponse[] = [
  linearAppClonequasar_alpha,
  minimalistLandingPagequasar_alpha,
  worldMapSvgquasar_alpha,
  svgLayoutquasar_alpha,
  xboxControllerSvgquasar_alpha,
  interactiveCatanBoardquasar_alpha
];

// Re-export individual responses for direct import
export {
  linearAppClonequasar_alpha,
  minimalistLandingPagequasar_alpha,
  worldMapSvgquasar_alpha,
  svgLayoutquasar_alpha,
  xboxControllerSvgquasar_alpha,
  interactiveCatanBoardquasar_alpha
}; 