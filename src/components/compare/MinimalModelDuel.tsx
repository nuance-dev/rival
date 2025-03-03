"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ThumbsUp, AlertCircle, Medal, Sparkles, BarChart2 } from 'lucide-react';
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

type MinimalModelDuelProps = {
  model1Id: string;
  model2Id: string;
  challengeId: string;
  model1Name: string;
  model2Name: string;
  onVote?: (winnerId: string) => void;
};

export function MinimalModelDuel({ 
  model1Id, 
  model2Id, 
  challengeId, 
  model1Name, 
  model2Name,
  onVote 
}: MinimalModelDuelProps) {
  const [stats, setStats] = useState<ModelDuelStats | null>(null);
  const [userVote, setUserVote] = useState<string | null>(null);
  const [isVoting, setIsVoting] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [voterId] = useState(() => generateVoterId());
  const [voteAnimation, setVoteAnimation] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Fetch current stats when component mounts
  useEffect(() => {
    async function fetchStats() {
      const duelStats = await getModelDuelStats(model1Id, model2Id, challengeId);
      setStats(duelStats);
      
      // Check if user has already voted
      if (hasVotedOnDuel(model1Id, model2Id, challengeId)) {
        const localVote = localStorage.getItem(`vote_${model1Id}_${model2Id}_${challengeId}`);
        if (localVote) {
          setUserVote(localVote);
          setShowDetails(true);
        }
      }
    }
    
    fetchStats();
  }, [model1Id, model2Id, challengeId]);

  const handleVote = async (winnerId: string) => {
    // Reset any previous error messages
    setErrorMessage(null);
    
    // Check if user has already voted or is currently voting
    if (isVoting || userVote) return;
    
    // Check for throttling (voting too quickly)
    if (isThrottled()) {
      setErrorMessage("Please wait a moment before voting again");
      return;
    }
    
    setIsVoting(true);
    setVoteAnimation(winnerId);
    
    try {
      // Handle tie/both vote scenario - we'll record this as a special case
      if (winnerId === 'tie') {
        // Just record locally that there was a tie vote
        recordLocalVote(model1Id, model2Id, challengeId, 'tie');
        setUserVote('tie');
        
        // Record time of vote for throttling
        recordVoteTime();
        
        // After a short delay, fetch updated stats and show them
        setTimeout(() => {
          setShowDetails(true);
          setVoteAnimation(null);
          
          // Notify parent if callback exists
          if (onVote) onVote('tie');
        }, 800);
        
        return;
      }
      
      // Record vote in Supabase
      const vote = {
        model1_id: model1Id,
        model2_id: model2Id,
        challenge_id: challengeId,
        winner_id: winnerId,
        unique_voter_id: voterId
      };
      
      const { success, error } = await recordModelDuelVote(vote);
      
      if (success) {
        // Update local state
        setUserVote(winnerId);
        
        // Store vote in localStorage to prevent double voting
        recordLocalVote(model1Id, model2Id, challengeId, winnerId);
        
        // Record time of vote for throttling
        recordVoteTime();
        
        // After a short delay, fetch updated stats and show them
        setTimeout(async () => {
          const updatedStats = await getModelDuelStats(model1Id, model2Id, challengeId);
          setStats(updatedStats);
          setShowDetails(true);
          setVoteAnimation(null);
          
          // Notify parent if callback exists
          if (onVote) onVote(winnerId);
        }, 800);
      } else if (error) {
        // Show user-friendly error message
        setErrorMessage("Unable to record your vote. Please try again later.");
      }
    } catch (error) {
      console.error('Error voting:', error);
      setErrorMessage("Something went wrong. Please try again later.");
    } finally {
      setTimeout(() => {
        setIsVoting(false);
      }, 500);
    }
  };

  // Calculate percentages for the voting bar
  const calculatePercentages = () => {
    if (!stats || stats.total_votes === 0) {
      return { model1Percent: 50, model2Percent: 50 };
    }
    
    const model1Percent = Math.round((stats.model1_votes / stats.total_votes) * 100);
    const model2Percent = 100 - model1Percent;
    
    return { model1Percent, model2Percent };
  };

  const { model1Percent, model2Percent } = calculatePercentages();

  // Get display names for models that correctly respects model variants
  const getDisplayName = (modelId: string, nameHint: string) => {
    // If nameHint is provided and seems reasonable, use it
    if (nameHint && nameHint.length > 1) {
      return formatModelName(nameHint);
    }
    // Otherwise fall back to formatting the ID
    return formatModelName(modelId);
  };

  const model1DisplayName = getDisplayName(model1Id, model1Name);
  const model2DisplayName = getDisplayName(model2Id, model2Name);

  return (
    <div className="w-full mt-8">
      <AnimatePresence mode="wait">
        {/* New modern voting interface */}
        <motion.div 
          className="max-w-3xl mx-auto bg-card/30 backdrop-blur-[2px] border border-border/30 rounded-xl overflow-hidden"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Header section with prompt */}
          <div className="border-b border-border/20 px-4 py-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-primary" />
                <h3 className="text-sm font-medium">Judge AI Responses</h3>
              </div>
              
              {userVote && (
                <motion.button
                  onClick={() => setShowDetails(!showDetails)}
                  className="text-xs text-muted-foreground hover:text-foreground flex items-center gap-1.5 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <BarChart2 className="h-3.5 w-3.5" />
                  {showDetails ? "Hide results" : "Show results"}
                </motion.button>
              )}
            </div>
          </div>
          
          {/* Body section with voting options */}
          <div className="px-4 py-3">
            {!userVote ? (
              <>
                <div className="mb-3 flex items-center justify-between">
                  <p className="text-sm text-foreground font-medium">Which response do you prefer?</p>
                </div>
                
                <div className="grid grid-cols-3 gap-2">
                  <motion.button
                    className="relative p-3 rounded-lg border border-border/40 bg-card/50 hover:bg-primary/5 hover:border-primary/40 transition-all"
                    onClick={() => handleVote(model1Id)}
                    disabled={isVoting}
                    whileHover={{ y: -2, boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex flex-col items-center gap-2">
                      <span className="text-sm font-medium">{model1DisplayName}</span>
                      <ThumbsUp className="h-4 w-4 text-primary" />
                    </div>
                    
                    {voteAnimation === model1Id && (
                      <motion.div
                        className="absolute inset-0 rounded-lg border-2 border-primary"
                        initial={{ opacity: 0, scale: 1.05 }}
                        animate={{ opacity: [0, 1, 0], scale: [1.05, 1.02, 1.1] }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                      />
                    )}
                  </motion.button>
                  
                  <motion.button
                    className="relative p-3 rounded-lg border border-border/40 bg-card/50 hover:bg-amber-500/5 hover:border-amber-500/40 transition-all"
                    onClick={() => handleVote('tie')}
                    disabled={isVoting}
                    whileHover={{ y: -2, boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex flex-col items-center gap-2">
                      <span className="text-sm font-medium">It&apos;s a tie</span>
                      <Medal className="h-4 w-4 text-amber-500" />
                    </div>
                    
                    {voteAnimation === 'tie' && (
                      <motion.div
                        className="absolute inset-0 rounded-lg border-2 border-amber-500"
                        initial={{ opacity: 0, scale: 1.05 }}
                        animate={{ opacity: [0, 1, 0], scale: [1.05, 1.02, 1.1] }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                      />
                    )}
                  </motion.button>
                  
                  <motion.button
                    className="relative p-3 rounded-lg border border-border/40 bg-card/50 hover:bg-primary/5 hover:border-primary/40 transition-all"
                    onClick={() => handleVote(model2Id)}
                    disabled={isVoting}
                    whileHover={{ y: -2, boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex flex-col items-center gap-2">
                      <span className="text-sm font-medium">{model2DisplayName}</span>
                      <ThumbsUp className="h-4 w-4 text-primary" />
                    </div>
                    
                    {voteAnimation === model2Id && (
                      <motion.div
                        className="absolute inset-0 rounded-lg border-2 border-primary"
                        initial={{ opacity: 0, scale: 1.05 }}
                        animate={{ opacity: [0, 1, 0], scale: [1.05, 1.02, 1.1] }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                      />
                    )}
                  </motion.button>
                </div>
              </>
            ) : (
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium">Your vote:</span>
                  <span className="text-primary font-medium text-sm">
                    {userVote === 'tie' 
                      ? "It&apos;s a tie" 
                      : userVote === model1Id 
                        ? model1DisplayName 
                        : model2DisplayName}
                  </span>
                </div>
              </div>
            )}
            
            {/* Error message */}
            {errorMessage && (
              <motion.div 
                className="mt-2 text-xs text-red-500 flex items-center justify-center"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
              >
                <AlertCircle className="h-3.5 w-3.5 mr-1.5" />
                {errorMessage}
              </motion.div>
            )}
          </div>
          
          {/* Results section */}
          <AnimatePresence>
            {showDetails && stats && (
              <motion.div 
                className="border-t border-border/20 px-4 py-3 bg-muted/30"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <div className="text-xs text-muted-foreground mb-2">Community results ({stats.total_votes} votes)</div>
                <div className="flex items-center mb-2">
                  <div className="w-[100px] text-xs truncate mr-2">{model1DisplayName}</div>
                  <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-primary rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${model1Percent}%` }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                    />
                  </div>
                  <div className="w-10 text-xs text-right ml-2">{model1Percent}%</div>
                </div>
                <div className="flex items-center">
                  <div className="w-[100px] text-xs truncate mr-2">{model2DisplayName}</div>
                  <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-primary rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${model2Percent}%` }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    />
                  </div>
                  <div className="w-10 text-xs text-right ml-2">{model2Percent}%</div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </AnimatePresence>
    </div>
  );
} 