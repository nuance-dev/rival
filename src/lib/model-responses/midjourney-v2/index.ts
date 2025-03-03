import { ModelResponse } from "@/types/models";
import { futuristicCity } from "./futuristic-city";
import { hyperrealisticPortrait } from "./hyperrealistic-portrait";
import { fantasyCharacter } from "./fantasy-character";

// Import individual response files as they are created
// import { futuristicCity } from "./futuristic-city";
// import { hyperrealisticPortrait } from "./hyperrealistic-portrait";

// This array will hold all responses as they are added
export const midjourney_v2Responses: ModelResponse[] = [
  futuristicCity,
  hyperrealisticPortrait,
  fantasyCharacter
];

// Export individual responses for direct imports
export * from "./futuristic-city";
export * from "./hyperrealistic-portrait";
export * from "./fantasy-character"; 