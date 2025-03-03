import { ModelResponse } from "@/types/models";
// Import individual response files as they are created
import { futuristicCity } from "./futuristic-city";
import { fantasyCharacter } from "./fantasy-character";
import { hyperrealisticPortrait } from "./hyperrealistic-portrait";

// This array will hold all responses as they are added
export const midjourney_v6_1Responses: ModelResponse[] = [
  // Add response imports here as they become available
  futuristicCity,
  fantasyCharacter,
  hyperrealisticPortrait,
];

// Export individual responses for direct imports
export * from "./futuristic-city";
export * from "./fantasy-character";
export * from "./hyperrealistic-portrait"; 