"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Box, RefreshCw } from 'lucide-react';
import Link from 'next/link';
import { formatModelName } from '@/lib/utils';
import { ModelCanvas } from '@/components/canvas/ModelCanvas';
import { MinimalModelDuel } from './MinimalModelDuel';
import { ModelOutput } from '@/types/models';
import { PromptChallenge } from '@/lib/prompt-challenges';
import { AIModel } from '@/types/models';

// Extend ModelOutput type to include the properties we're using
type ExtendedModelOutput = ModelOutput & {
  modelName?: string;
  challengeId?: string;
  funFact?: string;
  prompt?: string;
};

type ChallengeDisplayProps = {
  selectedChallenge: string;
  challengeData: PromptChallenge | null;
  selectedResponses: ExtendedModelOutput[];
  onAllChallenges: () => void;
  onChangeChallenge: () => void;
  getModelById: (id: string) => AIModel | undefined;
  onVote: () => void;
};

export function ChallengeDisplay({
  selectedChallenge,
  challengeData,
  selectedResponses,
  onAllChallenges,
  onChangeChallenge,
  getModelById,
  onVote
}: ChallengeDisplayProps) {
  if (!challengeData) return null;

  return (
    <div className="mb-8">
      <div className="mb-8 flex items-center justify-between flex-wrap gap-4">
        <div>
          <h2 className="font-display font-bold text-xl">
            {challengeData.title}
          </h2>
          <div className="flex items-center gap-2 mt-1">
            <div className={`
              text-xs font-medium py-0.5 px-2 rounded-full
              ${challengeData.difficulty === 'easy' ? 'bg-green-500/10 text-green-500' : 
                challengeData.difficulty === 'medium' ? 'bg-amber-500/10 text-amber-500' : 
                  'bg-red-500/10 text-red-500'}
            `}>
              {challengeData.difficulty.charAt(0).toUpperCase() + challengeData.difficulty.slice(1)}
            </div>
            <div className="text-xs font-medium py-0.5 px-2 bg-primary/10 text-primary rounded-full">
              {challengeData.expectedOutputType.charAt(0).toUpperCase() + challengeData.expectedOutputType.slice(1)}
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={onAllChallenges}
            className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium transition-colors bg-primary/10 text-primary hover:bg-primary/20 rounded-full"
          >
            <Box className="h-3.5 w-3.5" />
            Compare All Challenges
          </button>
          <button
            onClick={onChangeChallenge}
            className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium transition-colors bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground rounded-full"
          >
            <RefreshCw className="h-3.5 w-3.5" />
            Change Challenge
          </button>
        </div>
      </div>

      {/* Challenge details */}
      <div className="mb-8">
        <div className="bg-muted/30 rounded-lg p-4 mb-8">
          <h3 className="text-sm font-medium mb-2">Prompt:</h3>
          <p className="font-mono text-sm whitespace-pre-wrap">{challengeData.prompt}</p>
        </div>
      </div>
      
      {/* Model responses side by side */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {selectedResponses.map((response) => {
          const model = getModelById(response.modelId);
          return (
            <div key={response.id} className="h-full flex flex-col" style={{ minHeight: "500px" }}>
              <div className="bg-card border-t border-x rounded-t-xl p-4 flex items-center gap-3">
                {model?.logoUrl && (
                  <div className="w-8 h-8 rounded-full bg-background flex items-center justify-center overflow-hidden p-1">
                    <img 
                      src={model.logoUrl} 
                      alt={model.name} 
                      className="h-full w-full object-contain"
                    />
                  </div>
                )}
                <span className="font-display font-medium">{model?.name}</span>
                
                <div className="ml-auto">
                  <Link 
                    href={`/models/${response.modelId}`}
                    className="text-xs text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
                  >
                    View model <Box className="h-3 w-3" />
                  </Link>
                </div>
              </div>
              
              <div className="flex-grow border rounded-b-xl overflow-hidden">
                <ModelCanvas 
                  title={challengeData.title || ""}
                  description=""
                  output={{
                    ...response,
                    modelName: model?.name || formatModelName(response.modelId),
                    challengeId: selectedChallenge
                  }}
                  className="h-full"
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* Add MinimalModelDuel component */}
      {selectedResponses.length === 2 && selectedChallenge && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <MinimalModelDuel
            model1Id={selectedResponses[0].modelId}
            model2Id={selectedResponses[1].modelId}
            challengeId={selectedChallenge}
            model1Name={getModelById(selectedResponses[0].modelId)?.name || formatModelName(selectedResponses[0].modelId)}
            model2Name={getModelById(selectedResponses[1].modelId)?.name || formatModelName(selectedResponses[1].modelId)}
            onVote={onVote}
          />
        </motion.div>
      )}
    </div>
  );
} 