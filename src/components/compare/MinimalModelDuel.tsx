"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { ModelDuelStats, generateVoterId, recordModelDuelVote, getModelDuelStats } from '@/lib/supabase';
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

  // Fetch current stats when component mounts
  useEffect(() => {
    async function fetchStats() {
      try {
        const duelStats = await getModelDuelStats(model1Id, model2Id, challengeId);
        setStats(duelStats);
        
        // Check if user has already voted
        const storedVote = localStorage.getItem(`vote-${model1Id}-${model2Id}-${challengeId}`);
        if (storedVote) {
          setUserVote(storedVote);
          setShowDetails(true); // Auto-show results if user has voted
        }
      } catch (error) {
        console.error("Error fetching duel stats:", error);
      }
    }
    
    fetchStats();
  }, [model1Id, model2Id, challengeId]);

  const handleVote = async (winnerId: string) => {
    if (isVoting || userVote) return;
    
    setIsVoting(true);
    
    try {
      // Record vote in Supabase
      const vote = {
        model1_id: model1Id,
        model2_id: model2Id,
        challenge_id: challengeId,
        winner_id: winnerId,
        unique_voter_id: voterId
      };
      
      const { success } = await recordModelDuelVote(vote);
      
      if (success) {
        // Update local state
        setUserVote(winnerId);
        
        // Store vote in localStorage to prevent double voting
        localStorage.setItem(`vote_${model1Id}_${model2Id}_${challengeId}`, winnerId);
        
        // After a short delay, fetch updated stats and show them
        setTimeout(async () => {
          const updatedStats = await getModelDuelStats(model1Id, model2Id, challengeId);
          setStats(updatedStats);
          
          // Notify parent if callback exists
          if (onVote) onVote(winnerId);
        }, 1000);
      }
    } catch (error) {
      console.error('Error voting:', error);
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

  return (
    <div className="w-full py-3 mt-6">
      <div className="max-w-3xl mx-auto">
        {/* Minimal voting buttons that live BETWEEN the model outputs */}
        <div className="flex justify-between items-center border-t border-b py-3 px-2">
          <div className="text-sm text-muted-foreground font-medium flex items-center gap-1.5">
            {userVote 
              ? <>Your vote: <span className="text-foreground">{userVote === model1Id ? formatModelName(model1Name) : formatModelName(model2Name)}</span></>
              : "Which response do you prefer?"}
          </div>
          
          {!userVote ? (
            <div className="flex gap-2">
              <motion.button
                className="px-3 py-1 text-xs font-medium rounded-md border bg-card/50 hover:bg-primary/5 hover:border-primary/30 transition-colors"
                onClick={() => handleVote(model1Id)}
                disabled={isVoting}
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.98 }}
              >
                {formatModelName(model1Name)}
              </motion.button>

              <motion.button
                className="px-3 py-1 text-xs font-medium rounded-md border bg-card/50 hover:bg-primary/5 hover:border-primary/30 transition-colors"
                onClick={() => handleVote(model2Id)}
                disabled={isVoting}
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.98 }}
              >
                {formatModelName(model2Name)}
              </motion.button>
            </div>
          ) : (
            <motion.button
              className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center"
              onClick={() => setShowDetails(!showDetails)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {showDetails ? (
                <>Hide results <ChevronUp className="h-3.5 w-3.5 ml-1" /></>
              ) : (
                <>Show results <ChevronDown className="h-3.5 w-3.5 ml-1" /></>
              )}
            </motion.button>
          )}
        </div>
        
        {/* Expandable results bar */}
        <AnimatePresence>
          {showDetails && stats && (
            <motion.div 
              className="mt-3 pt-3 overflow-hidden"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {/* Minimal results bar */}
              <div className="h-1.5 bg-muted rounded-full flex overflow-hidden mb-2">
                <motion.div 
                  className="h-full bg-primary/80"
                  initial={{ width: "0%" }}
                  animate={{ width: `${model1Percent}%` }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                />
                <motion.div 
                  className="h-full bg-secondary/80"
                  initial={{ width: "0%" }}
                  animate={{ width: `${model2Percent}%` }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                />
              </div>
              
              {/* Model labels and percentages */}
              <div className="flex justify-between text-xs text-muted-foreground">
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-primary/80 mr-1.5"></div>
                  <span>{formatModelName(model1Name)}: {model1Percent}%</span>
                </div>
                <span className="text-[10px]">{stats.total_votes} vote{stats.total_votes !== 1 ? 's' : ''}</span>
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-secondary/80 mr-1.5"></div>
                  <span>{formatModelName(model2Name)}: {model2Percent}%</span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
} 