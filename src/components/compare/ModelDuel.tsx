"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, ThumbsUp, BarChart2, Sparkles, AlertCircle } from 'lucide-react';
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

type ModelDuelProps = {
  model1Id: string;
  model2Id: string;
  challengeId: string;
  model1Name: string;
  model2Name: string;
  onVote?: (winnerId: string) => void;
};

export function ModelDuel({ 
  model1Id, 
  model2Id, 
  challengeId, 
  model1Name, 
  model2Name,
  onVote 
}: ModelDuelProps) {
  const [stats, setStats] = useState<ModelDuelStats | null>(null);
  const [userVote, setUserVote] = useState<string | null>(null);
  const [isVoting, setIsVoting] = useState(false);
  const [showStats, setShowStats] = useState(false);
  const [voterId] = useState(() => generateVoterId());
  const [voteAnimation, setVoteAnimation] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Fetch current stats when component mounts
  useEffect(() => {
    async function fetchStats() {
      const duelStats = await getModelDuelStats(model1Id, model2Id, challengeId);
      setStats(duelStats);
      
      // Check if user has already voted using our helper function
      if (hasVotedOnDuel(model1Id, model2Id, challengeId)) {
        const localVote = localStorage.getItem(`vote_${model1Id}_${model2Id}_${challengeId}`);
        if (localVote) {
          setUserVote(localVote);
          setShowStats(true);
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
      // Record vote in Supabase - use appropriate winner_id for all cases including ties
      const vote = {
        model1_id: model1Id,
        model2_id: model2Id,
        challenge_id: challengeId,
        // Updated to handle tie votes directly
        winner_id: winnerId === 'tie' ? 'tie' : winnerId,
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
          setShowStats(true);
          setVoteAnimation(null);
          
          // Notify parent if callback exists
          if (onVote) onVote(winnerId);
        }, 1000);
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

  const toggleStats = () => {
    setShowStats((prev: boolean) => !prev);
  };

  // Update calculatePercentages to handle tie votes
  const calculatePercentages = () => {
    if (!stats || stats.total_votes === 0) {
      return { model1Percent: 50, model2Percent: 50, tiePercent: 0 };
    }
    
    const model1Percent = Math.round((stats.model1_votes / stats.total_votes) * 100);
    const tiePercent = Math.round((stats.tie_votes / stats.total_votes) * 100);
    const model2Percent = 100 - model1Percent - tiePercent;
    
    return { model1Percent, model2Percent, tiePercent };
  };

  const { model1Percent, model2Percent, tiePercent } = calculatePercentages();

  return (
    <div className="w-full py-6 px-2">
      <div className="max-w-md mx-auto">
        {/* Title */}
        <div className="text-center mb-4">
          <h3 className="text-lg font-display font-medium mb-1">
            <span className="retro-gradient">AI Duel</span>
          </h3>
          <p className="text-sm text-muted-foreground">
            {userVote 
              ? "You've voted! See the results below." 
              : "Which AI response do you prefer? Cast your vote!"}
          </p>
          
          {/* Error message */}
          {errorMessage && (
            <motion.div 
              className="mt-2 text-sm text-red-500 flex items-center justify-center"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
            >
              <AlertCircle className="h-3.5 w-3.5 mr-1.5" />
              {errorMessage}
            </motion.div>
          )}
        </div>
        
        {/* Voting buttons */}
        {!showStats && (
          <div className="grid grid-cols-3 gap-3 mb-4">
            <motion.button
              className={`relative flex flex-col items-center justify-center p-4 rounded-xl border border-border/50 bg-card/50 hover:bg-primary/5 hover:border-primary/30 transition-colors ${userVote === model1Id ? 'border-primary bg-primary/10' : ''}`}
              onClick={() => handleVote(model1Id)}
              disabled={isVoting || !!userVote}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="font-medium text-sm mb-1">{formatModelName(model1Name)}</span>
              <ThumbsUp className="w-5 h-5 text-primary/80" />
              
              {voteAnimation === model1Id && (
                <motion.div
                  className="absolute inset-0 rounded-xl border-2 border-primary"
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: [0, 1, 0], scale: [1.1, 1.05, 1.2] }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                />
              )}
            </motion.button>
            
            <motion.button
              className={`relative flex flex-col items-center justify-center p-4 rounded-xl border border-border/50 bg-card/50 hover:bg-amber-500/5 hover:border-amber-500/30 transition-colors ${userVote === 'tie' ? 'border-amber-500 bg-amber-500/10' : ''}`}
              onClick={() => handleVote('tie')}
              disabled={isVoting || !!userVote}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="font-medium text-sm mb-1">It{'\u2019'}s a Tie</span>
              <Trophy className="w-5 h-5 text-amber-500/80" />
              
              {voteAnimation === 'tie' && (
                <motion.div
                  className="absolute inset-0 rounded-xl border-2 border-amber-500"
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: [0, 1, 0], scale: [1.1, 1.05, 1.2] }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                />
              )}
            </motion.button>
            
            <motion.button
              className={`relative flex flex-col items-center justify-center p-4 rounded-xl border border-border/50 bg-card/50 hover:bg-primary/5 hover:border-primary/30 transition-colors ${userVote === model2Id ? 'border-primary bg-primary/10' : ''}`}
              onClick={() => handleVote(model2Id)}
              disabled={isVoting || !!userVote}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="font-medium text-sm mb-1">{formatModelName(model2Name)}</span>
              <ThumbsUp className="w-5 h-5 text-primary/80" />
              
              {voteAnimation === model2Id && (
                <motion.div
                  className="absolute inset-0 rounded-xl border-2 border-primary"
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: [0, 1, 0], scale: [1.1, 1.05, 1.2] }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                />
              )}
            </motion.button>
          </div>
        )}
        
        {/* Results bar and stats */}
        <AnimatePresence>
          {showStats && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.3 }}
              className="space-y-4"
            >
              {/* Vote percentages */}
              <div className="space-y-2">
                <div className="flex items-center">
                  <div className="w-[100px] text-xs truncate mr-2">{formatModelName(model1Name)}</div>
                  <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-primary rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${model1Percent}%` }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                  <div className="w-10 text-xs text-right ml-2">{model1Percent}%</div>
                </div>
                
                {/* Add tie percentage bar if there are tie votes */}
                {tiePercent > 0 && (
                  <div className="flex items-center">
                    <div className="w-[100px] text-xs truncate mr-2">Tie</div>
                    <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div 
                        className="h-full bg-amber-500 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${tiePercent}%` }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                      />
                    </div>
                    <div className="w-10 text-xs text-right ml-2">{tiePercent}%</div>
                  </div>
                )}
                
                <div className="flex items-center">
                  <div className="w-[100px] text-xs truncate mr-2">{formatModelName(model2Name)}</div>
                  <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-secondary rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${model2Percent}%` }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    />
                  </div>
                  <div className="w-10 text-xs text-right ml-2">{model2Percent}%</div>
                </div>
              </div>
              
              <div className="flex justify-between text-sm">
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-primary/80 mr-1.5"></div>
                  <span className="font-medium">{formatModelName(model1Name)}</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-secondary/80 mr-1.5"></div>
                  <span className="font-medium">{formatModelName(model2Name)}</span>
                </div>
              </div>
              
              {/* User's choice - updated to handle tie votes */}
              {userVote && (
                <div className="mt-3 pt-3 border-t border-border/30 text-sm">
                  <div className="flex items-center justify-center text-muted-foreground">
                    <Sparkles className="h-3.5 w-3.5 mr-1.5 text-yellow-500" />
                    You voted for <span className="font-medium ml-1 text-foreground">
                      {userVote === 'tie' 
                        ? "It\u2019s a tie" 
                        : userVote === model1Id 
                          ? formatModelName(model1Name) 
                          : formatModelName(model2Name)}
                    </span>
                  </div>
                </div>
              )}
              
              {/* Hide results button */}
              {!userVote && (
                <button
                  className="w-full mt-3 text-xs text-muted-foreground hover:text-foreground transition-colors"
                  onClick={toggleStats}
                >
                  Hide results and vote
                </button>
              )}
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Toggle stats button */}
        {!showStats && !userVote && stats && stats.total_votes > 0 && (
          <button
            className="w-full mt-2 flex items-center justify-center gap-1.5 text-sm text-primary/70 hover:text-primary transition-colors"
            onClick={toggleStats}
          >
            <BarChart2 className="h-4 w-4" />
            View community results ({stats.total_votes} votes)
          </button>
        )}
      </div>
    </div>
  );
} 