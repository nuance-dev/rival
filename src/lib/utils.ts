import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { ModelOutput } from '@/types/models';
import { SortingOption } from '@/components/ui/SortingControl';
import { models } from "@/lib/data";

/**
 * Utility function to conditionally join class names together
 * and merge tailwind classes properly
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Delay execution for a given time
 */
export const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

/**
 * Process HTML content that may contain JavaScript template literals
 * This sanitizes backtick and ${} syntax to prevent TypeScript parsing errors
 * when stored in response files
 */
export function processHtmlContent(content: string): string {
  // First, escape any JavaScript template expressions
  // Replace ${...} with a safe concatenated version
  const escapedExpressions = content.replace(/\${([^}]*)}/g, (_: string, match: string) => {
    return "' + " + match + " + '";
  });
  
  // Then replace backticks with regular string quotes
  // This is only needed if we're going to dynamically evaluate the content
  return escapedExpressions.replace(/`/g, "'");
}

/**
 * Create a sanitized HTML content string that won't cause TypeScript parsing errors
 * when used in AI model response files
 */
export function sanitizeModelResponseContent(content: string): string {
  // For simple sanitization, just escape template literals in JavaScript blocks
  // This assumes content is already valid HTML
  return content.replace(/<script[\s\S]*?<\/script>/gi, (match: string) => {
    // Convert template literals within script tags
    return match
      .replace(/`([\s\S]*?)`/g, (_: string, scriptContent: string) => {
        // Replace template expressions ${...}
        const withReplacedTemplates = scriptContent.replace(/\${([^}]*)}/g, (_: string, expr: string) => {
          return "' + " + expr + " + '";
        });
        
        // Wrap in quotes instead of backticks
        return "'" + withReplacedTemplates + "'";
      })
      // Convert template literal expressions directly in JavaScript
      .replace(/\${([^}]*)}/g, (_: string, expr: string) => {
        return "' + " + expr + " + '";
      });
  });
}

/**
 * Debounce a function
 */
export function debounce<T extends (...args: unknown[]) => unknown>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: ReturnType<typeof setTimeout> | null = null;

  return function executedFunction(...args: Parameters<T>) {
    const later = () => {
      timeout = null;
      func(...args);
    };

    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(later, wait);
  };
}

/**
 * Format a number with commas
 */
export function formatNumber(num: number): string {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

/**
 * Random number between min and max
 */
export function random(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

/**
 * Get a random item from an array
 */
export function randomItem<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

/**
 * Check if a value is not null or undefined
 */
export function notEmpty<TValue>(
  value: TValue | null | undefined
): value is TValue {
  return value !== null && value !== undefined;
}

/**
 * Get the model logo path for a given model ID or provider
 * Fallbacks to the most appropriate logo if exact match not found
 */
export function getModelLogoPath(modelId: string, provider?: string): string {
  // Normalize model ID to handle variations
  const normalizedId = modelId.toLowerCase();

  // Model-specific logos (exact matches)
  const modelLogoMap: Record<string, string> = {
    'grok-3': '/models/grok.svg',
    'grok-3-thinking': '/models/grok.svg',
    'grok3': '/models/grok.svg',
    'claude-3-7-sonnet': '/models/claude-color.svg',
    'claude-3-5-sonnet': '/models/claude-color.svg',
    'claude35': '/models/claude-color.svg',
    'claude-3-haiku': '/models/claude-color.svg',
    'claude-3-opus': '/models/claude-color.svg',
    'dalle-3': '/models/dalle-color.svg',
    'gpt-4o': '/models/openai.svg',
    'gpt4o': '/models/openai.svg',
    'gpt-o3': '/models/openai.svg',
    'o3-mini': '/models/openai.svg',
    'o1': '/models/openai.svg',
    'gpt-o1': '/models/openai.svg',
    'gemini-1-5-pro': '/models/gemini-color.svg',
    'gemini-1-5-flash': '/models/gemini-color.svg',
    'gemini-2-0-pro': '/models/gemini-color.svg',
    'gemini-2-0-flash': '/models/gemini-color.svg',
    'gemini-2-0-pro-exp': '/models/gemini-color.svg',
    'gemini-2-0-flash-thinking-exp': '/models/gemini-color.svg',
    'gemma-1-5': '/models/gemma-color.svg',
    'mistral-large': '/models/mistral-color.svg',
    'llama-3': '/models/meta-color.svg',
  };

  // Provider-based logos (fallbacks)
  const providerLogoMap: Record<string, string> = {
    'anthropic': '/models/anthropic.svg',
    'claude': '/models/claude-color.svg',
    'openai': '/models/openai.svg',
    'google': '/models/google-color.svg',
    'gemini': '/models/gemini-color.svg',
    'meta': '/models/meta-color.svg',
    'xai': '/models/grok.svg',
    'mistral': '/models/mistral-color.svg',
    'microsoft': '/models/microsoft-color.svg',
    'stability': '/models/stability-color.svg',
    'midjourney': '/models/midjourney.svg',
    'huggingface': '/models/huggingface-color.svg',
    'perplexity': '/models/perplexity-color.svg',
    'deepseek': '/models/deepseek-color.svg',
    'suno': '/models/suno.svg',
    'kling': '/models/kling-color.svg',
    'ollama': '/models/ollama.svg',
    'gpt': '/models/openai.svg',
  };

  // Check if the modelId already includes the full path
  if (normalizedId.startsWith('/')) {
    return normalizedId;
  }

  // Try to find an exact match for the normalized model ID
  if (modelLogoMap[normalizedId]) {
    return modelLogoMap[normalizedId];
  }

  // Try to find a partial match for model ID
  const partialMatch = Object.keys(modelLogoMap).find(key => 
    normalizedId.includes(key) || key.includes(normalizedId)
  );
  
  if (partialMatch) {
    return modelLogoMap[partialMatch];
  }

  // If provider is specified and has a logo, use that as fallback
  if (provider && providerLogoMap[provider.toLowerCase()]) {
    return providerLogoMap[provider.toLowerCase()];
  }

  // Try to extract provider from model ID
  for (const providerKey of Object.keys(providerLogoMap)) {
    if (normalizedId.includes(providerKey)) {
      return providerLogoMap[providerKey];
    }
  }

  // Special case for Gemini models to ensure they get Google/Gemini logo
  if (normalizedId.includes('gemini')) {
    return '/models/gemini-color.svg';
  }

  // If all else fails, return a default logo
  console.warn(`Could not find logo for model ID: ${modelId}. Using default fallback.`);
  return '/models/ai-model.svg'; // Generic AI model icon as default
}

/**
 * Format a model ID into a refined display name (e.g. "claude-3.5" -> "Claude 3.5")
 */
export function formatModelName(modelId: string): string {
  if (!modelId) return "Unknown Model";
  
  // Static mapping for specific model IDs
  const modelMapping: Record<string, string> = {
    "gpt-4o": "GPT-4o",
    "gpt-4": "GPT-4",
    "gpt-3.5-turbo": "GPT-3.5 Turbo",
    "gpt-4.5": "GPT-4.5",
    "grok-1": "Grok 1",
    "grok-1.5": "Grok 1.5",
    "grok-2": "Grok 2",
    "grok-3": "Grok 3",
    "grok-3-thinking": "Grok 3 Thinking",
    "claude-3-opus": "Claude 3 Opus",
    "claude-3-sonnet": "Claude 3 Sonnet",
    "claude-3-haiku": "Claude 3 Haiku",
    "claude-3.5-sonnet": "Claude 3.5 Sonnet",
    "claude-3.7-sonnet": "Claude 3.7 Sonnet",
    "claude-3.7-thinking-sonnet": "Claude 3.7 Thinking Sonnet",
    "claude-3.7-haiku": "Claude 3.7 Haiku",
    "claude-2": "Claude 2",
    "claude-instant": "Claude Instant",
    "gemini-pro": "Gemini Pro",
    "gemini-1-5-pro": "Gemini 1.5 Pro",
    "gemini-2-0-pro": "Gemini 2.0 Pro",
    "gemini-2-0-pro-exp": "Gemini 2.0 Pro Exp",
    "gemini-2-0-flash-thinking-exp": "Gemini 2.0 Flash Thinking Exp",
    "llama-2-7b": "Llama 2 (7B)",
    "llama-2-13b": "Llama 2 (13B)",
    "llama-2-70b": "Llama 2 (70B)",
    "llama-3-8b": "Llama 3 (8B)",
    "llama-3-70b": "Llama 3 (70B)",
    "mistral-7b": "Mistral (7B)",
    "mixtral-8x7b": "Mixtral (8x7B)",
    "command-r": "Command R",
    "claude-3": "Claude 3",
    "palm-2": "PaLM 2",
    "deepseek-r1": "DeepSeek R1",
    "o1": "o1",
    "o1-preview": "o1 Preview",
    "o1-mini": "o1 Mini",
    "o3-mini": "o3 Mini"
  };

  // Check for direct matches in the mapping
  if (modelMapping[modelId]) {
    return modelMapping[modelId];
  }
  
  // Handle models with suffixes like -vision, -preview, etc.
  for (const [baseId, baseName] of Object.entries(modelMapping)) {
    if (modelId.startsWith(baseId + "-")) {
      const suffix = modelId.substring(baseId.length + 1);
      
      // Format the suffix: capitalize first letter of each word, convert hyphens to spaces
      const formattedSuffix = suffix
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
      
      return `${baseName} ${formattedSuffix}`;
    }
  }
  
  // If still no match, apply general formatting
  // Split by hyphens and replace with spaces
  return modelId
    .split('-')
    .map(part => {
      if (!part) return '';
      
      // Handle decimal numbers intact (like 3.5)
      if (/^\d+\.\d+$/.test(part)) {
        return part;
      }
      
      // Special handling for version numbers with periods (like 2.0)
      if (/^\d+$/.test(part) && part.length === 1 && modelId.includes("-" + part + "-")) {
        // This is likely a version number - check if the next part is also a number
        const parts = modelId.split('-');
        const partIndex = parts.indexOf(part);
        if (partIndex >= 0 && partIndex < parts.length - 1 && /^\d+$/.test(parts[partIndex + 1])) {
          return part + "." + parts[partIndex + 1];
        }
      }
      
      // Special case for letter+number combinations like o3
      if (/^[a-z]\d+$/i.test(part)) {
        return part.toLowerCase(); // Keep as is
      }
      
      // Capitalize first letter
      return part.charAt(0).toUpperCase() + part.slice(1);
    })
    .join(' ');
}

/**
 * Sort outputs by type according to a specific priority order
 */
export function sortOutputsByType(outputs: ModelOutput[]): ModelOutput[] {
  // Define the priority order for types
  const typePriority: Record<string, number> = {
    'website': 1,
    'html': 1,
    'svg': 2,
    'image': 2,
    'code': 3,
    'text': 4
  };
  
  // First get all unique model IDs and their release dates
  const modelReleaseDates = new Map<string, number>();
  
  outputs.forEach(output => {
    if (output.modelId && !modelReleaseDates.has(output.modelId)) {
      const model = models.find(m => m.id === output.modelId);
      if (model?.releaseDate) {
        modelReleaseDates.set(output.modelId, new Date(model.releaseDate).getTime());
      } else {
        // Default to old date if model release date not found
        modelReleaseDates.set(output.modelId, 0);
      }
    }
  });
  
  // Sort function that prioritizes newer models, web design and image generation, while grouping similar challenges
  return [...outputs].sort((a, b) => {
    // First prioritize by model release date (newer models first)
    const releaseDateA = modelReleaseDates.get(a.modelId || '') || 0;
    const releaseDateB = modelReleaseDates.get(b.modelId || '') || 0;
    
    if (releaseDateA !== releaseDateB) {
      return releaseDateB - releaseDateA; // Sort newer models first
    }
    
    // Then group by challenge/prompt ID if available
    const challengeA = a.promptId || '';
    const challengeB = b.promptId || '';
    
    if (challengeA && challengeB && challengeA !== challengeB) {
      return challengeA.localeCompare(challengeB);
    }
    
    // Then prioritize by content type
    const typeA = typePriority[a.type.toLowerCase()] || 99;
    const typeB = typePriority[b.type.toLowerCase()] || 99;
    
    if (typeA !== typeB) {
      return typeA - typeB;
    }
    
    // Then by title to keep similar things together 
    const titleA = a.title || '';
    const titleB = b.title || '';
    if (titleA && titleB) {
      return titleA.localeCompare(titleB);
    }
    
    // Finally by date if available (most recent first)
    if (a.date && b.date) {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    }
    
    return 0;
  });
}

/**
 * Sort outputs by date with most recent first, prioritizing newer models
 */
export function sortOutputsByDate(outputs: ModelOutput[]): ModelOutput[] {
  // First get all unique model IDs and their release dates
  const modelReleaseDates = new Map<string, number>();
  
  outputs.forEach(output => {
    if (output.modelId && !modelReleaseDates.has(output.modelId)) {
      const model = models.find(m => m.id === output.modelId);
      if (model?.releaseDate) {
        modelReleaseDates.set(output.modelId, new Date(model.releaseDate).getTime());
      } else {
        // Default to old date if model release date not found
        modelReleaseDates.set(output.modelId, 0);
      }
    }
  });
  
  return [...outputs].sort((a, b) => {
    // First prioritize by model release date (newer models first)
    const releaseDateA = modelReleaseDates.get(a.modelId || '') || 0;
    const releaseDateB = modelReleaseDates.get(b.modelId || '') || 0;
    
    if (releaseDateA !== releaseDateB) {
      return releaseDateB - releaseDateA; // Sort newer models first
    }
    
    // Then by response date if available (most recent first)
    if (a.date && b.date) {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    }
    
    return 0;
  });
}

/**
 * Randomize the order of outputs for a chaotic mix
 * Uses Fisher-Yates shuffle algorithm for true randomness on each page load
 */
export function sortOutputsRandomly(outputs: ModelOutput[]): ModelOutput[] {
  // Create a copy of the array to avoid mutating the original
  const shuffled = [...outputs];
  
  // If we're on the server, just return the copied array
  // This avoids issues with Math.random() on server vs client
  if (typeof window === 'undefined') {
    return shuffled;
  }
  
  // Fisher-Yates (Knuth) shuffle algorithm
  for (let i = shuffled.length - 1; i > 0; i--) {
    // Generate a random index between 0 and i (inclusive)
    const j = Math.floor(Math.random() * (i + 1));
    // Swap elements at i and j
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  
  return shuffled;
}

/**
 * Sort outputs based on the selected sorting option
 */
export function sortOutputs(outputs: ModelOutput[], sortOption: SortingOption): ModelOutput[] {
  switch (sortOption) {
    case 'chaotic':
      return sortOutputsRandomly(outputs);
    case 'latest':
      return sortOutputsByDate(outputs);
    case 'type':
      return sortOutputsByType(outputs);
    default:
      return [...outputs];
  }
}

/**
 * Get the canonical model ID that should be used in URLs
 * This ensures that shorthand IDs like 'o1' are properly expanded to 'gpt-o1'
 */
export function getCanonicalModelId(modelId: string): string {
  if (!modelId) return modelId;
  
  // Normalize model ID to lowercase for consistent matching
  const normalizedId = modelId.toLowerCase().trim();
  
  // Map of shorthand model IDs to their canonical forms for URLs
  const modelIdMap: Record<string, string> = {
    // Remove incorrect mappings for o1 and o3-mini
    // 'o1': 'gpt-o1',
    'o3': 'gpt-o3',
    // 'o3-mini': 'gpt-o3-mini',
    'r1': 'deepseek-r1',
    '4o': 'gpt-4o',
    'gpt4o': 'gpt-4o',
    '4-5': 'gpt-4-5',
    '4.5': 'gpt-4-5',
    'gpt4.5': 'gpt-4-5',
  };
  
  // Direct match in the map
  if (modelIdMap[normalizedId]) {
    return modelIdMap[normalizedId];
  }
  
  // For models with thinking variants
  if (normalizedId.endsWith('-thinking')) {
    const baseId = normalizedId.replace('-thinking', '');
    const canonical = getCanonicalModelId(baseId);
    return `${canonical}-thinking`;
  }
  
  // Return the original if no mapping exists
  return modelId;
}

/**
 * Ensure challenge ID is properly sanitized for URL usage
 * This handles challenge IDs that might need special treatment
 */
export function getSanitizedChallengeId(challengeId: string): string {
  if (!challengeId) return challengeId;
  
  // Normalize and trim the challenge ID
  const normalizedId = challengeId.trim().toLowerCase();
  
  // Map of any challenge IDs that need special handling
  const challengeIdMap: Record<string, string> = {
    // Add special cases here if needed in the future
    // For example: 'svg-layout-old': 'svg-layout-new',
  };
  
  // Direct match in the map
  if (challengeIdMap[normalizedId]) {
    return challengeIdMap[normalizedId];
  }
  
  // Special case: Handle challenge IDs that might be extracted from response IDs
  // Example: Convert "model-id-challenge-id" to just "challenge-id"
  if (normalizedId.includes('-')) {
    // Check if this might be a model-challenge composite ID
    const knownChallenges = [
      'svg-layout',
      'xbox-controller-svg',
      'world-map-svg',
      'standup-routine',
      'minimalist-landing-page',
      'linear-app-clone',
      'ai-board-game-logic',
      'logic-puzzle',
      'count-letters',
      'estimate-complexity'
    ];
    
    // Try to extract known challenge IDs from composite IDs
    for (const challenge of knownChallenges) {
      if (normalizedId.includes(challenge)) {
        return challenge;
      }
    }
  }
  
  // Return original if no special handling needed
  return challengeId;
} 