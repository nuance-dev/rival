import { ModelResponse } from '@/types/models';
import { framerStyleAnimationGpt4oMini } from './framer-style-animation';
import { websiteLandingPageGpt4oMini } from './website-landing-page';
import { worldMapSvgGpt4oMini } from './world-map-svg';
import { xboxControllerSvgGpt4oMini } from './xbox-controller-svg';

// Define the array of model responses for gpt-4o-mini
export const gpt4oMiniResponses: ModelResponse[] = [
  framerStyleAnimationGpt4oMini,
  websiteLandingPageGpt4oMini,
  worldMapSvgGpt4oMini,
  xboxControllerSvgGpt4oMini,
];

// Optional: You can add helper maps or functions here if needed for this model
// Example: export const gpt4oMiniResponseMap = new Map(gpt4oMiniResponses.map(r => [r.id, r])); 