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

// Create a mock Supabase client for SSR/SSG when credentials are missing
const createMockClient = () => {
  return {
    from: () => ({
      insert: () => Promise.resolve({ data: null, error: new Error('Supabase credentials missing') }),
      select: () => ({
        eq: () => ({
          or: () => ({
            or: () => Promise.resolve({ data: [], error: null })
          })
        }),
        or: () => ({
          or: () => Promise.resolve({ data: [], error: null })
        })
      })
    }),
    // Add any other methods that might be used
  };
};

// Create the client or a mock client if credentials are missing
export const supabase = supabaseUrl && supabaseAnonKey 
  ? createClient(supabaseUrl, supabaseAnonKey)
  : (createMockClient() as unknown) as ReturnType<typeof createClient>;

/**
 * Records a vote in a model duel
 */
export async function recordModelDuelVote(vote: Omit<ModelDuelVote, 'id' | 'created_at'>) {
  try {
    // Early return if Supabase is not properly initialized
    if (!supabaseUrl || !supabaseAnonKey) {
      console.warn('Cannot record vote: Supabase credentials missing');
      return { success: false, error: new Error('Supabase credentials missing') };
    }

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
    // Early return dummy stats if Supabase is not properly initialized
    if (!supabaseUrl || !supabaseAnonKey) {
      console.warn('Cannot get stats: Supabase credentials missing');
      return {
        model1_id: model1Id,
        model2_id: model2Id,
        challenge_id: challengeId || 'all',
        model1_votes: 0,
        model2_votes: 0,
        total_votes: 0
      };
    }

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
 * Generates a random UUID for anonymous voters with additional security measures
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
  
  // Add timestamp for additional uniqueness
  const timestamp = Date.now().toString();
  const enhancedId = `${newId}_${timestamp}`;
  
  // Store it for future use
  if (typeof localStorage !== 'undefined') {
    localStorage.setItem('rival_voter_id', enhancedId);
  }
  
  return enhancedId;
}

/**
 * Checks if a user has already voted on a specific model duel
 * @returns true if the user has already voted
 */
export function hasVotedOnDuel(model1Id: string, model2Id: string, challengeId: string): boolean {
  if (typeof localStorage === 'undefined') return false;
  
  const voteKey = `vote_${model1Id}_${model2Id}_${challengeId}`;
  return localStorage.getItem(voteKey) !== null;
}

/**
 * Records that a user has voted on a specific model duel in localStorage
 */
export function recordLocalVote(model1Id: string, model2Id: string, challengeId: string, winnerId: string): void {
  if (typeof localStorage === 'undefined') return;
  
  const voteKey = `vote_${model1Id}_${model2Id}_${challengeId}`;
  localStorage.setItem(voteKey, winnerId);
  
  // Also record when this vote was cast (for throttling)
  const timeKey = `vote_time_${model1Id}_${model2Id}_${challengeId}`;
  localStorage.setItem(timeKey, Date.now().toString());
}

/**
 * Checks if user is being throttled (voting too quickly)
 * @returns true if the user should be throttled
 */
export function isThrottled(): boolean {
  if (typeof localStorage === 'undefined') return false;
  
  const lastVoteTime = localStorage.getItem('last_vote_time');
  if (!lastVoteTime) return false;
  
  const now = Date.now();
  const timeSinceLastVote = now - parseInt(lastVoteTime, 10);
  
  // Throttle if less than 3 seconds since last vote
  return timeSinceLastVote < 3000;
}

/**
 * Records the time of the last vote for throttling purposes
 */
export function recordVoteTime(): void {
  if (typeof localStorage === 'undefined') return;
  
  localStorage.setItem('last_vote_time', Date.now().toString());
} 