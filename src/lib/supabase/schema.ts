/**
 * Supabase Database Schema
 * 
 * This file contains TypeScript definitions that mirror the Supabase database schema.
 * Use these types when interacting with the Supabase client to ensure type safety.
 */

/**
 * Schema for the model_duel_votes table
 * 
 * This table tracks votes in AI model duels, storing which model won in a head-to-head
 * comparison for a specific challenge.
 * 
 * Notable constraints:
 * - model1_id must be different from model2_id (vote_model_pair)
 * - winner_id must be either model1_id or model2_id (winner_is_valid)
 * - Each voter can only vote once for a specific model pair and challenge combination
 */
export interface ModelDuelVote {
  id: string;               // UUID primary key, auto-generated
  created_at: string;       // Timestamp when the vote was created
  model1_id: string;        // ID of the first model in the duel
  model2_id: string;        // ID of the second model in the duel
  challenge_id: string;     // ID of the challenge they competed on
  winner_id: string;        // ID of the winning model (must be either model1_id or model2_id)
  unique_voter_id: string;  // Unique identifier for the voter (prevents duplicate votes)
}

/**
 * Schema for the model_duel_stats view
 * 
 * This view aggregates statistics from the model_duel_votes table to show
 * how each model is performing across all duels.
 */
export interface ModelDuelStats {
  model_id: string;         // ID of the model
  wins: number;             // Total number of wins
  losses: number;           // Total number of losses
  win_percentage: number;   // Win percentage (wins / total duels * 100)
}

/**
 * Database schema for use with the Supabase client
 * 
 * This represents the structure that Supabase's TypeScript client expects.
 * Use this when initializing the client for complete type safety.
 */
export interface Database {
  public: {
    Tables: {
      model_duel_votes: {
        Row: ModelDuelVote;
        Insert: Omit<ModelDuelVote, 'id' | 'created_at'>;
        Update: Partial<Omit<ModelDuelVote, 'id' | 'created_at'>>;
      };
    };
    Views: {
      model_duel_stats: {
        Row: ModelDuelStats;
      };
    };
    Functions: Record<string, never>; // No functions defined in the provided schema
  };
}

/**
 * These additional interfaces represent the relationships between models and challenges
 * as they appear to be used in the application.
 */

export interface Challenge {
  id: string;
  title: string;
  category: string;
}

export interface CategoryPerformance {
  category: string;
  win_count: number;
  total_count: number;
  win_percentage: number;
}

export interface ChallengePerformance {
  challenge_id: string;
  challenge_name: string;
  wins: number;
  losses: number;
  win_percentage: number;
}

export interface RecentDuel {
  opponent_id: string;
  opponent_name: string;
  challenge_id: string;
  challenge_name: string;
  won: boolean;
  date: string;
}

/**
 * Extended version of ModelDuelVote that includes related challenge data
 * as would be returned by a join query
 */
export interface ModelDuelVoteWithChallenge extends ModelDuelVote {
  challenges?: Challenge;
}

/**
 * Aggregated performance metrics for a model
 */
export interface ModelPerformanceData {
  duelStats: ModelDuelStats | null;
  categoryPerformance: CategoryPerformance[];
  topChallenges: ChallengePerformance[];
  recentDuels: RecentDuel[];
} 