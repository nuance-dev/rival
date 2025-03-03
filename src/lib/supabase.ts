import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('Supabase credentials missing. Voting functionality will not work.');
}

// Types for the model duel votes
export type ModelDuelVote = {
  id?: string;
  created_at?: string;
  model1_id: string;
  model2_id: string;
  challenge_id: string;
  winner_id: string;
  unique_voter_id: string;
};

export type ModelDuelStats = {
  model1_id: string;
  model2_id: string;
  challenge_id: string;
  model1_votes: number;
  model2_votes: number;
  total_votes: number;
};

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

/**
 * Records a vote in a model duel
 */
export async function recordModelDuelVote(vote: Omit<ModelDuelVote, 'id' | 'created_at'>) {
  try {
    const { data, error } = await supabase
      .from('model_duel_votes')
      .insert([vote]);
    
    if (error) {
      console.error('Error recording vote:', error);
      return { success: false, error };
    }
    
    return { success: true, data };
  } catch (error) {
    console.error('Error recording vote:', error);
    return { success: false, error };
  }
}

/**
 * Gets statistics for a model duel comparison
 */
export async function getModelDuelStats(
  model1Id: string,
  model2Id: string,
  challengeId?: string
): Promise<ModelDuelStats | null> {
  try {
    let query = supabase
      .from('model_duel_votes')
      .select('model1_id, model2_id, challenge_id, winner_id');
    
    // Filter by model pair (in any order)
    query = query.or(`model1_id.eq.${model1Id},model1_id.eq.${model2Id}`);
    query = query.or(`model2_id.eq.${model1Id},model2_id.eq.${model2Id}`);
    
    // Filter by challenge if specified
    if (challengeId) {
      query = query.eq('challenge_id', challengeId);
    }
    
    const { data, error } = await query;
    
    if (error) {
      console.error('Error getting model duel stats:', error);
      return null;
    }
    
    if (!data || data.length === 0) {
      return {
        model1_id: model1Id,
        model2_id: model2Id,
        challenge_id: challengeId || 'all',
        model1_votes: 0,
        model2_votes: 0,
        total_votes: 0
      };
    }
    
    // Count votes for each model
    let model1Votes = 0;
    let model2Votes = 0;
    
    data.forEach((vote: { winner_id: string; model1_id: string; model2_id: string }) => {
      if (vote.winner_id === model1Id) {
        model1Votes++;
      } else if (vote.winner_id === model2Id) {
        model2Votes++;
      }
    });
    
    return {
      model1_id: model1Id,
      model2_id: model2Id,
      challenge_id: challengeId || 'all',
      model1_votes: model1Votes,
      model2_votes: model2Votes,
      total_votes: model1Votes + model2Votes
    };
  } catch (error) {
    console.error('Error getting model duel stats:', error);
    return null;
  }
}

/**
 * Generates a random UUID for anonymous voters
 */
export function generateVoterId(): string {
  // Check if we already have a voter ID stored
  const storedId = typeof localStorage !== 'undefined' 
    ? localStorage.getItem('rival_voter_id') 
    : null;
  
  if (storedId) {
    return storedId;
  }
  
  // Generate a new ID if we don't have one
  const newId = crypto.randomUUID();
  
  // Store it for future use
  if (typeof localStorage !== 'undefined') {
    localStorage.setItem('rival_voter_id', newId);
  }
  
  return newId;
} 