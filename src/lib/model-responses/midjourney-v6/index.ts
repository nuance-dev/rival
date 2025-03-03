import { ModelResponse } from "@/types/models";
import { productVisualization } from "./product-visualization";
import { illustratedScene } from "./illustrated-scene";
import { fantasyCharacter } from "./fantasy-character";
import { futuristicCity } from "./futuristic-city";
import { hyperrealisticPortrait } from "./hyperrealistic-portrait";

export const midjourney_v6Responses: ModelResponse[] = [
  productVisualization,
  illustratedScene,
  fantasyCharacter,
  futuristicCity,
  hyperrealisticPortrait
];

export * from "./product-visualization";
export * from "./illustrated-scene";
export * from "./fantasy-character";
export * from "./futuristic-city";
export * from "./hyperrealistic-portrait"; 