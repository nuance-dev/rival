"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Brain, Code, Palette, Lightbulb, Zap } from "lucide-react";
import Link from "next/link";
import { ModelCanvas } from "@/components/canvas/ModelCanvas";
import { cn, formatModelName } from "@/lib/utils";
import { AIModelCapability, ModelOutput } from "@/types/models";
import { PromptChallenge } from "@/lib/prompt-challenges";
// Import model responses and helper functions
import { modelResponses } from "@/lib/model-responses";
// Import ExpansionProvider to manage card expansion state
import { ExpansionProvider } from "@/components/canvas/ExpansionProvider";

// Map challenge categories to icons
const categoryIcons: Record<AIModelCapability, React.ReactNode> = {
  "conversation": <Palette className="h-4 w-4" />,
  "web-design": <Code className="h-4 w-4" />,
  "image-generation": <Palette className="h-4 w-4" />,
  "reasoning": <Brain className="h-4 w-4" />,
  "analysis": <Zap className="h-4 w-4" />,
  "summarization": <Lightbulb className="h-4 w-4" />,
  "code-generation": <Code className="h-4 w-4" />,
  "translation": <Lightbulb className="h-4 w-4" />,
  "3d-modeling": <Palette className="h-4 w-4" />,
  "financial-modeling": <Zap className="h-4 w-4" />
};

// Import model data
import { models } from "@/lib/data";

interface ChallengeDetailClientProps {
  challenge: PromptChallenge;
}

export default function ChallengeDetailClient({ challenge }: ChallengeDetailClientProps) {
  // Get all responses for this challenge
  const challengeResponses = modelResponses.filter(response => {
    // Match responses by challenge ID in the response ID
    // Response IDs are typically formatted as "{modelId}-{challengeId}"
    return response.id.includes(challenge.id);
  });
  
  // Get unique model IDs from the responses
  const modelIds = [...new Set(challengeResponses.map(response => response.modelId))];
  
  // Map difficulty to color using type-safe approach
  type Difficulty = "easy" | "medium" | "hard";
  const difficultyColorMap: Record<Difficulty, string> = {
    easy: "bg-green-500/10 text-green-500",
    medium: "bg-amber-500/10 text-amber-500",
    hard: "bg-red-500/10 text-red-500"
  };
  const difficultyColor = difficultyColorMap[challenge.difficulty as Difficulty];
  
  // Debug information
  console.log(`Challenge ID: ${challenge.id}`);
  console.log(`Found ${challengeResponses.length} responses for this challenge`);
  console.log(`Models with responses: ${modelIds.join(', ')}`);
  
  // Convert ModelResponse to ModelOutput
  const convertToModelOutput = (response: typeof modelResponses[0]): ModelOutput => {
    return {
      id: response.id,
      promptId: challenge.id, // Use challenge ID as promptId
      modelId: response.modelId,
      type: response.type,
      content: response.content,
      title: response.title,
      description: response.description,
      date: response.responseDate,
      metadata: response.metadata,
      funFact: response.funFact,
      prompt: challenge.prompt // Include the challenge prompt
    };
  };
  
  // Convert all responses to ModelOutput format
  const outputResponses = challengeResponses.map(convertToModelOutput);
  
  // Clear animation states from sessionStorage to ensure proper rendering
  React.useEffect(() => {
    // Find and clear animation-related keys for this challenge
    if (typeof window !== 'undefined') {
      const animationKeys = [];
      for (let i = 0; i < sessionStorage.length; i++) {
        const key = sessionStorage.key(i);
        if (key && key.startsWith('animation-output-card-')) {
          animationKeys.push(key);
        }
      }
      
      // Remove animation keys
      animationKeys.forEach(key => {
        sessionStorage.removeItem(key);
      });
      
      console.log(`Cleared ${animationKeys.length} animation states for fresh rendering`);
    }
  }, [challenge.id]);
  
  return (
    <ExpansionProvider>
      <div className="container max-w-7xl mx-auto py-12 px-4">
        {/* Back Link */}
        <div className="mb-8">
          <Link 
            href="/challenges"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Challenges
          </Link>
        </div>
        
        {/* Challenge Header */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className={cn("inline-flex px-2 py-0.5 rounded-full text-xs font-medium", difficultyColor)}>
              {challenge.difficulty.charAt(0).toUpperCase() + challenge.difficulty.slice(1)}
            </span>
            <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-primary/10 text-primary rounded-full text-xs font-medium">
              {categoryIcons[challenge.category as AIModelCapability] || <Brain className="h-3 w-3" />}
              {challenge.category.split('-').map((word: string) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
            </span>
          </div>
          
          <motion.h1 
            className="text-3xl md:text-4xl font-display font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {challenge.title}
          </motion.h1>
          <motion.p 
            className="text-lg text-muted-foreground max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {challenge.description}
          </motion.p>
        </div>
        
        {/* Prompt Card */}
        <motion.div 
          className="mb-12 bg-card border rounded-xl p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-xl font-display font-bold mb-4">The Prompt</h2>
          <div className="bg-muted/30 rounded-lg p-4">
            <p className="font-mono text-sm">{challenge.prompt}</p>
          </div>
        </motion.div>
        
        {/* Model Responses */}
        <div className="mb-12">
          <motion.h2 
            className="text-2xl font-display font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Model Responses
          </motion.h2>
          
          {challengeResponses.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {outputResponses.map((output) => {
                const model = models.find(m => m.id === output.modelId);
                return (
                  <div 
                    key={output.id} 
                    className="h-full flex flex-col"
                    style={{ minHeight: "270px" }}
                  >
                    <ModelCanvas 
                      title={challenge.title}
                      description={model?.description || ""}
                      output={{
                        ...output,
                        modelName: model?.name || formatModelName(output.modelId),
                        prompt: challenge.prompt,
                        challengeId: challenge.id
                      }}
                      className="h-full flex-grow"
                    />
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-12 bg-muted/10 rounded-xl">
              <p className="text-muted-foreground">No model responses available for this challenge yet.</p>
            </div>
          )}
        </div>
        
      </div>
    </ExpansionProvider>
  );
} 