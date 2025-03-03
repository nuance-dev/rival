"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Crown } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import { formatModelName } from '@/lib/utils';
import { models } from '@/lib/data';

type LeaderboardEntry = {
  modelId: string;
  modelName: string;
  wins: number;
  losses: number;
  winRate: number;
};

export function MinimalLeaderboard() {
  const [leaderboardData, setLeaderboardData] = useState<LeaderboardEntry[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    async function fetchLeaderboardData() {
      try {
        setIsLoading(true);
        
        // Fetch all votes from the database
        const { data, error } = await supabase
          .from('model_duel_votes')
          .select('*');
        
        if (error) {
          console.error('Error fetching leaderboard data:', error);
          return;
        }
        
        // Process the data to calculate wins, losses, and winrates
        const stats: Record<string, { wins: number; losses: number; }> = {};
        
        // Initialize stats for all models
        models.forEach(model => {
          stats[model.id] = { wins: 0, losses: 0 };
        });
        
        // Count wins and losses
        data?.forEach((vote: { winner_id: string; model1_id: string; model2_id: string }) => {
          const winnerId = vote.winner_id;
          const loserId = vote.model1_id === winnerId ? vote.model2_id : vote.model1_id;
          
          if (!stats[winnerId]) stats[winnerId] = { wins: 0, losses: 0 };
          if (!stats[loserId]) stats[loserId] = { wins: 0, losses: 0 };
          
          stats[winnerId].wins += 1;
          stats[loserId].losses += 1;
        });
        
        // Convert to array and calculate win rates
        const leaderboard = Object.entries(stats)
          .map(([modelId, { wins, losses }]) => {
            const totalMatches = wins + losses;
            const winRate = totalMatches > 0 ? (wins / totalMatches) * 100 : 0;
            
            return {
              modelId,
              modelName: models.find(m => m.id === modelId)?.name || formatModelName(modelId),
              wins,
              losses,
              winRate,
            };
          })
          .filter(entry => entry.wins + entry.losses > 0) // Only include models with at least one match
          .sort((a, b) => {
            // Sort by win rate first, then by total matches as a tiebreaker
            if (Math.abs(b.winRate - a.winRate) < 0.01) {
              return (b.wins + b.losses) - (a.wins + a.losses);
            }
            return b.winRate - a.winRate;
          })
          .slice(0, 10); // Get top 10 models
        
        setLeaderboardData(leaderboard);
      } catch (error) {
        console.error('Error in leaderboard data processing:', error);
      } finally {
        setIsLoading(false);
      }
    }
    
    fetchLeaderboardData();
    
    // Set up a polling interval to refresh data periodically
    const intervalId = setInterval(() => {
      fetchLeaderboardData();
    }, 60000); // Refresh every minute
    
    return () => clearInterval(intervalId);
  }, []);
  
  if (isLoading) {
    return (
      <div className="border-t border-b py-3 text-center">
        <p className="text-sm text-muted-foreground">Loading leaderboard...</p>
      </div>
    );
  }
  
  if (leaderboardData.length === 0) {
    return (
      <div className="border-t border-b py-3 text-center">
        <p className="text-sm text-muted-foreground">No model comparisons yet</p>
      </div>
    );
  }

  // Display only top 3 in the minimal view
  const minimalData = leaderboardData.slice(0, 3);
  const restData = leaderboardData.slice(3);
  
  return (
    <div className="y-4">
      {/* Header with toggle button */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-medium flex items-center gap-1.5">
          <Crown className="h-3.5 w-3.5 text-yellow-500" />
          Model Leaderboard
        </h3>
      </div>
      
      {/* Top 3 models always shown */}
      <div className="space-y-2">
        {minimalData.map((entry, index) => {
          // Find model to get its logo
          const model = models.find(m => m.id === entry.modelId);
          
          return (
            <div 
              key={entry.modelId}
              className="flex items-center justify-between"
            >
              <div className="flex items-center gap-2">
                {/* Rank indicator */}
                <div className={`
                  text-xs w-5 h-5 flex items-center justify-center rounded-full 
                  ${index === 0 ? 'bg-yellow-500/10 text-yellow-500' : 
                    index === 1 ? 'bg-gray-300/10 text-gray-400' : 
                    'bg-amber-700/10 text-amber-700'}
                `}>
                  {index + 1}
                </div>
                
                {/* Model info */}
                <div className="flex items-center gap-2">
                  {model?.logoUrl && (
                    <div className="w-4 h-4 rounded-full bg-card flex items-center justify-center overflow-hidden p-0.5 border border-border/30">
                      <img 
                        src={model.logoUrl} 
                        alt={model.name} 
                        className="h-full w-full object-contain"
                        loading="lazy"
                      />
                    </div>
                  )}
                  <span className="text-sm">{formatModelName(entry.modelName)}</span>
                </div>
              </div>
              
              <div className="text-xs font-medium">
                {Math.round(entry.winRate)}% win rate
              </div>
            </div>
          );
        })}
      </div>
      
      {/* Expanded section with remaining models */}
      <AnimatePresence>
        {restData.length > 0 && (
          <motion.div 
            className="mt-4 pt-4 border-t space-y-2"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {restData.map((entry, index) => {
              // Find model to get its logo
              const model = models.find(m => m.id === entry.modelId);
              const rank = index + 4; // Starting from 4th place
              
              return (
                <div 
                  key={entry.modelId}
                  className="flex items-center justify-between"
                >
                  <div className="flex items-center gap-2">
                    {/* Rank number */}
                    <div className="text-xs text-muted-foreground w-5 h-5 flex items-center justify-center">
                      {rank}
                    </div>
                    
                    {/* Model info */}
                    <div className="flex items-center gap-2">
                      {model?.logoUrl && (
                        <div className="w-4 h-4 rounded-full bg-card flex items-center justify-center overflow-hidden p-0.5 border border-border/30">
                          <img 
                            src={model.logoUrl} 
                            alt={model.name} 
                            className="h-full w-full object-contain"
                            loading="lazy"
                          />
                        </div>
                      )}
                      <span className="text-sm">{formatModelName(entry.modelName)}</span>
                    </div>
                  </div>
                  
                  <div className="text-xs text-muted-foreground">
                    {Math.round(entry.winRate)}% win rate
                  </div>
                </div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
} 