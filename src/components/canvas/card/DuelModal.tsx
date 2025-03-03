import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertCircle, ExternalLink, Swords, X, ChevronLeft } from 'lucide-react';
import { 
  ModelDuelStats, 
  generateVoterId, 
  recordModelDuelVote, 
  getModelDuelStats,
  hasVotedOnDuel,
  recordLocalVote,
  isThrottled,
  recordVoteTime
} from '@/lib/supabase';
import { formatModelName } from '@/lib/utils';
import { ModelOutput, ModelResponse } from '@/types/models';
import ModelIcon from '@/components/canvas/ModelIcon';
import CardContent from './CardContent';

interface DuelModalProps {
  currentOutput: ModelOutput & { 
    challengeId?: string;
    modelName?: string;
    funFact?: string;
    prompt?: string;
  };
  challengeId: string;
  onClose: () => void;
}

type DuelStage = 'select' | 'duel' | 'results';

export const DuelModal: React.FC<DuelModalProps> = ({ 
  currentOutput, 
  challengeId, 
  onClose 
}) => {
  const [stage, setStage] = useState<DuelStage>('select');
  const [selectedModel, setSelectedModel] = useState<string | null>(null);
  const [selectedModelOutput, setSelectedModelOutput] = useState<ModelOutput | null>(null);
  const [availableModels, setAvailableModels] = useState<ModelOutput[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [stats, setStats] = useState<ModelDuelStats | null>(null);
  const [userVote, setUserVote] = useState<string | null>(null);
  const [voterId] = useState(() => generateVoterId());
  const [voteAnimation, setVoteAnimation] = useState<string | null>(null);
  
  // Close on escape key
  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    
    window.addEventListener('keydown', handleEscapeKey);
    return () => window.removeEventListener('keydown', handleEscapeKey);
  }, [onClose]);
  
  // Import model responses lazily
  useEffect(() => {
    console.debug('[DuelModal] Loading model responses');
    import('@/lib/model-responses').then(({ modelResponses }) => {
      if (!challengeId || !currentOutput.modelId) {
        console.debug('[DuelModal] Missing required IDs, not loading models');
        setIsLoading(false);
        return;
      }
      
      // Find responses from other models for this challenge
      const otherResponses = modelResponses
        .filter((response: ModelResponse) => {
          return response.challengeId === challengeId && 
                 response.modelId !== currentOutput.modelId;
        })
        .slice(0, 8); // Show more options than before
      
      if (otherResponses.length === 0) {
        // Fall back to matching by ID if no direct challengeId matches
        const fallbackResponses = modelResponses
          .filter((response: ModelResponse) => {
            const idContainsChallenge = response.id.includes(challengeId);
            const differentModel = response.modelId !== currentOutput.modelId;
            return idContainsChallenge && differentModel;
          })
          .slice(0, 8);
          
        setAvailableModels(fallbackResponses);
      } else {
        setAvailableModels(otherResponses);
      }
      
      setIsLoading(false);
    });
  }, [challengeId, currentOutput.modelId]);
  
  const handleSelectModel = (modelId: string) => {
    const modelOutput = availableModels.find(model => model.modelId === modelId) || null;
    setSelectedModel(modelId);
    setSelectedModelOutput(modelOutput);
    setStage('duel');
    
    // Check for previous votes
    if (modelId && currentOutput.modelId) {
      const checkPreviousVote = async () => {
        if (hasVotedOnDuel(currentOutput.modelId!, modelId, challengeId)) {
          const localVote = localStorage.getItem(`vote_${currentOutput.modelId}_${modelId}_${challengeId}`);
          if (localVote) {
            setUserVote(localVote);
            
            // Also fetch the current stats
            const duelStats = await getModelDuelStats(currentOutput.modelId!, modelId, challengeId);
            if (duelStats) {
              setStats(duelStats);
              setStage('results');
            }
          }
        }
      };
      
      checkPreviousVote();
    }
  };
  
  const handleVote = async (winnerId: string) => {
    if (!currentOutput.modelId || !selectedModel) return;
    
    // Reset any previous error messages
    setErrorMessage(null);
    
    // Check if user has already voted or is currently in a voting process
    if (userVote) return;
    
    // Check for throttling (voting too quickly)
    if (isThrottled()) {
      setErrorMessage("Please wait a moment before voting again");
      return;
    }
    
    setVoteAnimation(winnerId);
    
    try {
      // Record vote in Supabase
      const vote = {
        model1_id: currentOutput.modelId,
        model2_id: selectedModel,
        challenge_id: challengeId,
        winner_id: winnerId === "tie" ? "tie" : winnerId, // Support for tie votes
        unique_voter_id: voterId
      };
      
      const { success, error } = await recordModelDuelVote(vote);
      
      if (success) {
        // Update local state
        setUserVote(winnerId);
        
        // Store vote in localStorage to prevent double voting
        recordLocalVote(currentOutput.modelId, selectedModel, challengeId, winnerId);
        
        // Record time of vote for throttling
        recordVoteTime();
        
        // After a short delay, fetch updated stats and show them
        setTimeout(async () => {
          const updatedStats = await getModelDuelStats(currentOutput.modelId!, selectedModel, challengeId);
          setStats(updatedStats);
          setStage('results');
          setVoteAnimation(null);
        }, 800);
      } else if (error) {
        setErrorMessage("Unable to record your vote. Please try again later.");
      }
    } catch (error) {
      console.error('Error voting:', error);
      setErrorMessage("Something went wrong. Please try again later.");
    }
  };
  
  const handleCompareClick = useCallback(() => {
    if (currentOutput.modelId && selectedModel) {
      window.location.href = `/compare?model1=${currentOutput.modelId}&model2=${selectedModel}&challenge=${challengeId}`;
    }
  }, [currentOutput.modelId, selectedModel, challengeId]);
  
  // Calculate percentages for the results bar
  const calculatePercentages = () => {
    if (!stats || stats.total_votes === 0) {
      return { model1Percent: 50, model2Percent: 50 };
    }
    
    const model1Percent = Math.round((stats.model1_votes / stats.total_votes) * 100);
    const model2Percent = 100 - model1Percent;
    
    return { model1Percent, model2Percent };
  };
  
  const { model1Percent, model2Percent } = calculatePercentages();
  
  // Group models by provider (anthropic, openai, etc)
  const groupedModels = availableModels.reduce((acc, model) => {
    const provider = model.modelId?.split('-')[0] || 'other';
    if (!acc[provider]) {
      acc[provider] = [];
    }
    acc[provider].push(model);
    return acc;
  }, {} as Record<string, ModelOutput[]>);
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm" onClick={onClose}>
      <motion.div 
        className="bg-card border border-border rounded-xl shadow-lg w-full max-w-5xl h-[90vh] md:h-[85vh] overflow-hidden flex flex-col"
        onClick={e => e.stopPropagation()}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-border bg-muted/5">
          <div className="flex items-center">
            <Swords className="h-5 w-5 mr-2 text-primary" />
            <h3 className="text-lg font-semibold">AI Duel</h3>
            {stage !== 'select' && (
              <button 
                onClick={() => setStage('select')}
                className="ml-4 flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <ChevronLeft className="h-4 w-4 mr-1" />
                Back to model selection
              </button>
            )}
          </div>
          <button 
            onClick={onClose}
            className="p-1 rounded-full hover:bg-muted/20 transition-colors"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        
        {/* Content based on stage */}
        <AnimatePresence mode="wait">
          {stage === 'select' && (
            <motion.div 
              key="model-selection"
              className="flex-1 overflow-auto p-6"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <h4 className="text-lg font-medium mb-6 text-center">
                Select a model to duel against <span className="text-primary font-semibold">{formatModelName(currentOutput.modelId || '')}</span>
              </h4>
              
              {isLoading ? (
                <div className="flex items-center justify-center py-12">
                  <div className="h-6 w-6 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
                </div>
              ) : (
                <>
                  {/* Combined grid layout of all models */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 mb-6">
                    {availableModels.map((model) => (
                      <motion.button
                        key={model.modelId}
                        className="flex flex-col items-center justify-center p-4 rounded-lg border border-border/50 bg-card/60 hover:bg-primary/5 hover:border-primary/30 transition-colors"
                        onClick={() => handleSelectModel(model.modelId!)}
                        whileHover={{ y: -2, backgroundColor: 'rgba(var(--primary-rgb), 0.05)' }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <div className="flex justify-center items-center w-full mb-3">
                          <ModelIcon modelId={model.modelId || ''} className="w-8 h-8" />
                        </div>
                        <span className="text-sm text-center line-clamp-2">
                          {formatModelName(model.modelId || '')}
                        </span>
                      </motion.button>
                    ))}
                  </div>
                  
                  {/* Provider labels below in horizontal list */}
                  <div className="flex flex-wrap gap-3 justify-center mt-6 text-xs text-muted-foreground">
                    {Object.keys(groupedModels).map((provider) => (
                      <div key={provider} className="px-2 py-1 rounded-full bg-muted/10 border border-border/50">
                        {provider.charAt(0).toUpperCase() + provider.slice(1)}
                      </div>
                    ))}
                  </div>
                  
                  {availableModels.length === 0 && (
                    <div className="text-center py-12">
                      <p className="text-muted-foreground">No other models available for this challenge.</p>
                    </div>
                  )}
                </>
              )}
            </motion.div>
          )}
          
          {stage === 'duel' && selectedModelOutput && (
            <motion.div 
              key="duel-view"
              className="flex-1 flex flex-col overflow-hidden"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              {/* Error message */}
              {errorMessage && (
                <motion.div 
                  className="m-4 p-3 bg-red-500/10 border border-red-500/30 rounded-lg text-sm text-red-500 flex items-center justify-center"
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                >
                  <AlertCircle className="h-4 w-4 mr-2" />
                  {errorMessage}
                </motion.div>
              )}
              
              {/* Duel content */}
              <div className="flex-1 flex flex-col md:grid md:grid-cols-2 overflow-hidden">
                {/* Current model response */}
                <div className="flex flex-col overflow-hidden border-b md:border-b-0 md:border-r border-border">
                  <div className="flex items-center justify-center gap-2 p-4 border-b border-border bg-muted/5">
                    <ModelIcon modelId={currentOutput.modelId || ''} className="w-5 h-5" />
                    <span className="font-medium">
                      {formatModelName(currentOutput.modelId || '')}
                    </span>
                  </div>
                  <div className="flex-1 overflow-auto p-4">
                    <CardContent 
                      output={currentOutput}
                      expanded={false}
                    />
                  </div>
                </div>
                
                {/* Selected model response */}
                <div className="flex flex-col overflow-hidden">
                  <div className="flex items-center justify-center gap-2 p-4 border-b border-border bg-muted/5">
                    <ModelIcon modelId={selectedModel || ''} className="w-5 h-5" />
                    <span className="font-medium">
                      {formatModelName(selectedModel || '')}
                    </span>
                  </div>
                  <div className="flex-1 overflow-auto p-4">
                    <CardContent 
                      output={selectedModelOutput}
                      expanded={false}
                    />
                  </div>
                </div>
              </div>
              
              {/* Voting footer */}
              <div className="p-4 border-t border-border bg-muted/5">
                <div className="text-center mb-4">
                  <h4 className="text-base font-medium mb-1">Which model performed better?</h4>
                  <p className="text-sm text-muted-foreground">
                    Vote for the model that gave the best response to this challenge
                  </p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <motion.button
                    className="relative flex flex-col items-center justify-center py-4 px-4 rounded-lg border border-border/50 bg-card/50 hover:bg-primary/5 hover:border-primary/30 transition-colors"
                    onClick={() => handleVote(currentOutput.modelId!)}
                    disabled={!!userVote}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <ModelIcon modelId={currentOutput.modelId || ''} className="w-6 h-6 mb-2" />
                    <span className="text-sm font-medium mb-1">{formatModelName(currentOutput.modelId || '')}</span>
                    <span className="text-xs text-muted-foreground">is better</span>
                    
                    {voteAnimation === currentOutput.modelId && (
                      <motion.div
                        className="absolute inset-0 rounded-lg border-2 border-primary"
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: [0, 1, 0], scale: [1.1, 1.05, 1.2] }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                      />
                    )}
                  </motion.button>
                  
                  {/* Tie option */}
                  <motion.button
                    className="relative flex flex-col items-center justify-center py-4 px-4 rounded-lg border border-border/50 bg-card/50 hover:bg-primary/5 hover:border-primary/30 transition-colors"
                    onClick={() => handleVote("tie")}
                    disabled={!!userVote}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex gap-1 items-center mb-2">
                      <ModelIcon modelId={currentOutput.modelId || ''} className="w-5 h-5" />
                      <span className="text-xl font-light">=</span>
                      <ModelIcon modelId={selectedModel || ''} className="w-5 h-5" />
                    </div>
                    <span className="text-sm font-medium mb-1">Tie</span>
                    <span className="text-xs text-muted-foreground">both performed equally</span>
                    
                    {voteAnimation === "tie" && (
                      <motion.div
                        className="absolute inset-0 rounded-lg border-2 border-primary"
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: [0, 1, 0], scale: [1.1, 1.05, 1.2] }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                      />
                    )}
                  </motion.button>
                  
                  <motion.button
                    className="relative flex flex-col items-center justify-center py-4 px-4 rounded-lg border border-border/50 bg-card/50 hover:bg-primary/5 hover:border-primary/30 transition-colors"
                    onClick={() => handleVote(selectedModel!)}
                    disabled={!!userVote}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <ModelIcon modelId={selectedModel || ''} className="w-6 h-6 mb-2" />
                    <span className="text-sm font-medium mb-1">{formatModelName(selectedModel || '')}</span>
                    <span className="text-xs text-muted-foreground">is better</span>
                    
                    {voteAnimation === selectedModel && (
                      <motion.div
                        className="absolute inset-0 rounded-lg border-2 border-primary"
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: [0, 1, 0], scale: [1.1, 1.05, 1.2] }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                      />
                    )}
                  </motion.button>
                </div>
              </div>
            </motion.div>
          )}
          
          {stage === 'results' && stats && (
            <motion.div 
              key="results-view"
              className="flex-1 overflow-auto p-6"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <div className="max-w-2xl mx-auto">
                <h4 className="text-lg font-medium mb-6 text-center">
                  Vote Recorded!
                </h4>
                
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center gap-2">
                    <ModelIcon modelId={currentOutput.modelId || ''} className="w-5 h-5" />
                    <span className="text-sm font-medium">
                      {formatModelName(currentOutput.modelId || '')}
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium">
                      {formatModelName(selectedModel || '')}
                    </span>
                    <ModelIcon modelId={selectedModel || ''} className="w-5 h-5" />
                  </div>
                </div>
                
                {/* Results bar */}
                <div className="h-14 flex rounded-lg overflow-hidden relative mb-2 border border-border">
                  {/* Model 1 percentage */}
                  <motion.div
                    className="h-full bg-gradient-to-r from-blue-500/20 to-blue-600/30 flex items-center justify-start px-3"
                    initial={{ width: "50%" }}
                    animate={{ width: `${model1Percent}%` }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  >
                    {model1Percent > 15 && (
                      <span className="text-sm font-medium">{model1Percent}%</span>
                    )}
                  </motion.div>
                  
                  {/* Model 2 percentage */}
                  <motion.div
                    className="h-full bg-gradient-to-r from-purple-500/20 to-purple-600/30 flex items-center justify-end px-3"
                    initial={{ width: "50%" }}
                    animate={{ width: `${model2Percent}%` }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  >
                    {model2Percent > 15 && (
                      <span className="text-sm font-medium">{model2Percent}%</span>
                    )}
                  </motion.div>
                  
                  {/* Labels for small percentages */}
                  <div className="absolute inset-0 flex justify-between items-center pointer-events-none">
                    {model1Percent <= 15 && (
                      <span className="text-sm font-medium ml-3">{model1Percent}%</span>
                    )}
                    {model2Percent <= 15 && (
                      <span className="text-sm font-medium mr-3">{model2Percent}%</span>
                    )}
                  </div>
                </div>
                
                {/* Vote counts */}
                <div className="flex justify-between text-sm text-muted-foreground mb-8">
                  <span>{stats?.model1_votes || 0} votes</span>
                  <span>{stats?.model2_votes || 0} votes</span>
                </div>
                
                {/* Action buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.button
                    onClick={handleCompareClick}
                    className="flex items-center justify-center gap-2 py-3 px-6 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <ExternalLink className="h-4 w-4" />
                    View full comparison
                  </motion.button>
                  
                  <motion.button
                    onClick={() => setStage('select')}
                    className="flex items-center justify-center gap-2 py-3 px-6 rounded-lg border border-border hover:bg-muted/10 transition-colors"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Compare with another model
                  </motion.button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default DuelModal; 