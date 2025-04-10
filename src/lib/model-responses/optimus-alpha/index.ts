import { ModelResponse } from "@/types/models";
import { minimalistLandingPageResponse } from "./minimalist-landing-page";
import { worldMapSvgResponse } from "./world-map-svg";
import { xboxControllerSvgResponse } from "./xbox-controller-svg";
import { interactiveCatanBoardResponse } from "./interactive-catan-board";
import { linearAppCloneResponse } from "./linear-app-clone";
import { svgLayoutResponse } from "./svg-layout";

export const optimusAlphaResponses: ModelResponse[] = [
  minimalistLandingPageResponse,
  worldMapSvgResponse,
  xboxControllerSvgResponse,
  interactiveCatanBoardResponse,
  linearAppCloneResponse,
  svgLayoutResponse,
];

export const allOptimusAlphaResponsesMap: Map<string, ModelResponse> = new Map(
  optimusAlphaResponses.map(response => [response.id, response])
);

export function getOptimusAlphaResponseById(id: string): ModelResponse | undefined {
  return allOptimusAlphaResponsesMap.get(id);
} 