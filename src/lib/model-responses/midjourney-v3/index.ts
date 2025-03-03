import { ModelResponse } from "@/types/models";
import { futuristicCity } from "./futuristic-city";
import { hyperrealisticPortrait } from "./hyperrealistic-portrait";
import { fantasyCharacter } from "./fantasy-character";

// This array will hold all responses as they are added
export const midjourney_v3Responses: ModelResponse[] = [
  futuristicCity,
  hyperrealisticPortrait,
  fantasyCharacter
];

// Export individual responses for direct imports
export * from "./futuristic-city";
export * from "./hyperrealistic-portrait";
export * from "./fantasy-character"; 