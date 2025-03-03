import { ModelResponse } from "@/types/models";
import { hyperrealisticPortrait } from "./hyperrealistic-portrait";
import { futuristicCity } from "./futuristic-city";
import { fantasyCharacter } from "./fantasy-character";

export const midjourney_v5Responses: ModelResponse[] = [
  hyperrealisticPortrait,
  futuristicCity,
  fantasyCharacter
];

export * from "./hyperrealistic-portrait";
export * from "./futuristic-city";
export * from "./fantasy-character"; 