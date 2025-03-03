"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Trophy, Medal, Crown } from 'lucide-react';
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

export function ModelLeaderboard() {
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
          .slice(0, 5); // Get top 5 models
        
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
      <div className="p-4 rounded-xl border bg-card/50 text-center">
        <p className="text-sm text-muted-foreground">Loading leaderboard...</p>
      </div>
    );
  }
  
  if (leaderboardData.length === 0) {
    return (
      <div className="p-4 rounded-xl border bg-card/50 text-center">
        <p className="text-sm text-muted-foreground">No duels have been completed yet.</p>
      </div>
    );
  }
  
  return (
    <div className="p-4 rounded-xl border bg-card/50">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-base font-medium">
          <span className="retro-gradient">Model Leaderboard</span>
        </h3>
        <Trophy className="h-4 w-4 text-yellow-500" />
      </div>
      
      <div className="space-y-3">
        {leaderboardData.map((entry, index) => {
          // Find model to get its logo
          const model = models.find(m => m.id === entry.modelId);
          
          return (
            <motion.div 
              key={entry.modelId}
              className="flex items-center justify-between p-3 rounded-lg bg-background/80 border border-border/50"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <div className="flex items-center gap-2">
                {/* Rank medal */}
                <div className="flex items-center justify-center w-6 h-6">
                  {index === 0 ? (
                    <Crown className="h-5 w-5 text-yellow-500" />
                  ) : index === 1 ? (
                    <Medal className="h-5 w-5 text-gray-400" />
                  ) : index === 2 ? (
                    <Medal className="h-5 w-5 text-amber-700" />
                  ) : (
                    <span className="text-sm font-medium text-muted-foreground">{index + 1}</span>
                  )}
                </div>
                
                {/* Model info */}
                <div className="flex items-center gap-2">
                  {model?.logoUrl && (
                    <div className="w-6 h-6 rounded-full bg-card flex items-center justify-center overflow-hidden p-1 border border-border/30">
                      <img 
                        src={model.logoUrl} 
                        alt={model.name} 
                        className="h-full w-full object-contain"
                        loading="lazy"
                      />
                    </div>
                  )}
                  <span className="font-medium text-sm">{formatModelName(entry.modelName)}</span>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="text-xs">
                  <span className="text-green-500 font-medium">{entry.wins} W</span>
                  <span className="mx-1">-</span>
                  <span className="text-red-500 font-medium">{entry.losses} L</span>
                </div>
                <div className="w-12 text-right text-sm font-medium">
                  {Math.round(entry.winRate)}%
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
} 