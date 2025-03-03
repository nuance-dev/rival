import { ModelResponse } from "@/types/models";
import { hyperrealisticPortrait } from "./hyperrealistic-portrait";
import { futuristicCity } from "./futuristic-city";
import { illustratedScene } from "./illustrated-scene";
import { fantasyCharacter } from "./fantasy-character";

export const dalle_3Responses: ModelResponse[] = [
  hyperrealisticPortrait,
  futuristicCity,
  illustratedScene,
  fantasyCharacter
];

export * from "./hyperrealistic-portrait";
export * from "./futuristic-city";
export * from "./illustrated-scene";
export * from "./fantasy-character"; 