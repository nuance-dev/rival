"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid
} from "recharts";
import { AIModel } from "@/types/models";
import { useSafeAnimation } from "@/hooks/useSafeAnimation";
import { createClient } from "@/lib/supabase/client";
import { cn } from "@/lib/utils";
import { ArrowRight, Info, Trophy, BarChart3, Zap, Brain } from "lucide-react";
import Link from "next/link";
import { models } from "@/lib/data/models";
import { ModelPerformanceData, CategoryPerformance, ChallengePerformance, RecentDuel } from "@/lib/supabase/schema";
import { promptChallenges } from "@/lib/prompt-challenges";

// Define a fallback for category colors if the import is missing
const ChallengeCategoryColors: Record<string, string> = {
  reasoning: "#f59e0b",
  creativity: "#ec4899",
  coding: "#3b82f6",
  summarization: "#10b981",
  analysis: "#8b5cf6",
  conversation: "#0ea5e9",
  "web-design": "#10b981",
  "image-generation": "#6366f1",
  unknown: "#6B7280"
};

interface SectionProps {
  title: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
  isVisible: boolean;
  delay?: number;
}

const InsightSection = ({ title, children, icon, isVisible, delay = 0 }: SectionProps) => {
  return (
    <motion.div 
      className="bg-card rounded-xl border border-border/50 overflow-hidden h-full"
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="p-4 border-b border-border/50 flex items-center gap-2">
        {icon}
        <h3 className="font-display font-medium">{title}</h3>
      </div>
      <div className="p-4">
        {children}
      </div>
    </motion.div>
  );
};

interface CustomTooltipProps {
  active?: boolean;
  payload?: Array<{
    name: string;
    value: number;
    unit?: string;
    color?: string;
  }>;
  label?: string;
}

// Custom tooltip for charts
const CustomTooltip = ({ active, payload, label }: CustomTooltipProps) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-popover/90 backdrop-blur-sm border border-border/50 p-3 rounded-lg text-sm">
        <p className="font-medium">{label || payload[0].name}</p>
        {payload.map((entry, index) => (
          <p key={index} style={{ color: entry.color }}>
            {`${entry.name}: ${entry.value}${entry.unit || ''}`}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

// Main ModelInsights wrapper component that handles conditional rendering
const ModelInsightsWrapper = ({ model }: { model: AIModel }) => {
  // Don't show insights for Midjourney models
  if (model.provider === "midjourney") {
    return null;
  }
  
  return <ModelInsightsContent model={model} />;
};

// The actual ModelInsights content component
const ModelInsightsContent = ({ model }: { model: AIModel }) => {
  const { isVisible } = useSafeAnimation('model-insights');
  const [activeTab, setActiveTab] = useState<'overview' | 'categories' | 'challenges'>('overview');
  const [performanceData, setPerformanceData] = useState<ModelPerformanceData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [allModels, setAllModels] = useState<Map<string, { name: string, provider: string }>>(new Map());

  // Calculate win percentage safely
  const calculateWinPercentage = React.useCallback((wins: number, losses: number): number => {
    if (wins === 0 && losses === 0) return 0;
    return Number(((wins / (wins + losses)) * 100).toFixed(1));
  }, []);

  // Get model name from ID
  const getModelName = React.useCallback((id: string): string => {
    return allModels.get(id)?.name || id;
  }, [allModels]);

  // Memoize colors to prevent recalculation on every render
  const colors = React.useMemo(() => {
    if (model.gradientColors && model.gradientColors.length >= 2) {
      return [model.gradientColors[0], model.gradientColors[1]];
    }
    return ['#4F46E5', '#7C3AED'];
  }, [model.gradientColors]);

  // Memoize chart data preparation functions
  const winLossData = React.useMemo(() => {
    if (!performanceData?.duelStats) return [];
    
    return [
      { name: 'Wins', value: performanceData.duelStats.wins, color: colors[0] },
      { name: 'Losses', value: performanceData.duelStats.losses, color: '#6B7280' }
    ];
  }, [performanceData, colors]);
  
  const categoryData = React.useMemo(() => {
    if (!performanceData?.categoryPerformance || performanceData.categoryPerformance.length === 0) {
      return [];
    }
    
    return performanceData.categoryPerformance
      .sort((a, b) => b.win_percentage - a.win_percentage)
      .map(category => ({
        name: category.category.charAt(0).toUpperCase() + category.category.slice(1),
        winPct: category.win_percentage,
        winCount: category.win_count,
        totalCount: category.total_count,
        // Use category colors if available, fall back to model colors
        fill: ChallengeCategoryColors[category.category] || colors[0]
      }));
  }, [performanceData, colors]);
  
  const challengeData = React.useMemo(() => {
    if (!performanceData?.topChallenges || performanceData.topChallenges.length === 0) {
      return [];
    }
    
    return performanceData.topChallenges.map(challenge => ({
      name: challenge.challenge_name || challenge.challenge_id,
      percentage: challenge.win_percentage,
      wins: challenge.wins,
      total: challenge.wins + challenge.losses
    }));
  }, [performanceData]);

  // Load models only once on mount
  useEffect(() => {
    const fetchModels = async () => {
      try {
        // Create a map for quick lookups from the local models data
        const modelsMap = new Map();
        models.forEach(m => {
          modelsMap.set(m.id, { name: m.name, provider: m.provider });
        });
        
        setAllModels(modelsMap);
      } catch (err) {
        console.error('Error processing models:', err);
      }
    };
    
    fetchModels();
  }, []);

  // Load vote data when model or allModels changes
  useEffect(() => {
    // Skip if model is not loaded yet or allModels is empty
    if (!model?.id || allModels.size === 0) {
      return;
    }
    
    const fetchVoteData = async () => {
      setIsLoading(true);
      
      try {
        const supabase = createClient();
        
        // Fetch votes where this model appears as either model1 or model2
        const { data: votesAsModel1, error: error1 } = await supabase
          .from('model_duel_votes')
          .select('*')
          .eq('model1_id', model.id);
          
        const { data: votesAsModel2, error: error2 } = await supabase
          .from('model_duel_votes')
          .select('*')
          .eq('model2_id', model.id);
          
        if (error1 || error2) {
          console.error('Error fetching votes:', error1 || error2);
          
          // Set empty performance data
          setPerformanceData({
            duelStats: { model_id: model.id, wins: 0, losses: 0, win_percentage: 0 },
            categoryPerformance: [],
            topChallenges: [],
            recentDuels: []
          });
          setIsLoading(false);
          return;
        }
        
        // Combine votes where the model appears as either model1 or model2
        const allVotes = [...(votesAsModel1 || []), ...(votesAsModel2 || [])];
        
        // If no votes found, return empty data
        if (allVotes.length === 0) {
          setPerformanceData({
            duelStats: { model_id: model.id, wins: 0, losses: 0, win_percentage: 0 },
            categoryPerformance: [],
            topChallenges: [],
            recentDuels: []
          });
          setIsLoading(false);
          return;
        }

        // Create a map of challenge data for lookup using local promptChallenges data
        const challengeMap = new Map();
        promptChallenges.forEach(challenge => {
          challengeMap.set(challenge.id, {
            title: challenge.title,
            category: challenge.category,
            expectedOutputType: challenge.expectedOutputType
          });
        });
        
        // Enhanced votes with challenge data
        const processedVotes = allVotes.map(vote => ({
          ...vote,
          challenge_title: challengeMap.get(vote.challenge_id)?.title || 'Unknown Challenge',
          challenge_category: challengeMap.get(vote.challenge_id)?.category || 'unknown',
          expected_output_type: challengeMap.get(vote.challenge_id)?.expectedOutputType || 'unknown'
        }));
        
        // Filter out image generation challenges that are not SVG for LLM models
        const filteredVotes = processedVotes.filter(vote => {
          // If it's not an image generation challenge, include it
          if (vote.challenge_category !== 'image-generation') {
            return true;
          }
          
          // For image generation challenges, only include SVG challenges for LLM models
          return vote.expected_output_type === 'svg';
        });
        
        // Calculate overall stats
        let wins = 0;
        let losses = 0;
        
        filteredVotes.forEach(vote => {
          if (vote.winner_id === model.id) {
            wins++;
          } else if (vote.model1_id === model.id || vote.model2_id === model.id) {
            losses++;
          }
        });
        
        const duelStats = {
          model_id: model.id,
          wins,
          losses,
          win_percentage: calculateWinPercentage(wins, losses)
        };
        
        // Calculate category performance
        const categoriesMap = new Map<string, { wins: number, total: number }>();
        
        filteredVotes.forEach(vote => {
          const category = vote.challenge_category;
          if (!categoriesMap.has(category)) {
            categoriesMap.set(category, { wins: 0, total: 0 });
          }
          
          const categoryData = categoriesMap.get(category)!;
          
          if (vote.model1_id === model.id || vote.model2_id === model.id) {
            categoryData.total++;
            if (vote.winner_id === model.id) {
              categoryData.wins++;
            }
          }
        });
        
        const categoryPerformance: CategoryPerformance[] = Array.from(categoriesMap.entries())
          .map(([category, data]) => ({
            category,
            win_count: data.wins,
            total_count: data.total,
            win_percentage: calculateWinPercentage(data.wins, data.total)
          }))
          .sort((a, b) => b.win_percentage - a.win_percentage);
        
        // Calculate challenge performance
        const challenges_performance = new Map<string, { name: string, wins: number, losses: number }>();
        
        filteredVotes.forEach(vote => {
          const challengeId = vote.challenge_id;
          if (!challenges_performance.has(challengeId)) {
            challenges_performance.set(challengeId, { 
              name: vote.challenge_title, 
              wins: 0, 
              losses: 0 
            });
          }
          
          const challengeData = challenges_performance.get(challengeId)!;
          
          if (vote.winner_id === model.id) {
            challengeData.wins++;
          } else if (vote.model1_id === model.id || vote.model2_id === model.id) {
            challengeData.losses++;
          }
        });
        
        const challengePerformance: ChallengePerformance[] = Array.from(challenges_performance.entries())
          .map(([challengeId, data]) => ({
            challenge_id: challengeId,
            challenge_name: data.name,
            wins: data.wins,
            losses: data.losses,
            win_percentage: calculateWinPercentage(data.wins, data.losses)
          }))
          .sort((a, b) => b.win_percentage - a.win_percentage)
          .slice(0, 5); // Get top 5 challenges
        
        // Get recent duels
        const recentDuels: RecentDuel[] = filteredVotes
          .sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
          .filter(vote => vote.model1_id === model.id || vote.model2_id === model.id)
          .slice(0, 5) // Get 5 most recent duels
          .map(vote => {
            const opponentId = vote.model1_id === model.id ? vote.model2_id : vote.model1_id;
            return {
              opponent_id: opponentId,
              opponent_name: getModelName(opponentId),
              challenge_id: vote.challenge_id,
              challenge_name: vote.challenge_title,
              won: vote.winner_id === model.id,
              date: new Date(vote.created_at).toLocaleDateString()
            };
          });
        
        setPerformanceData({
          duelStats,
          categoryPerformance,
          topChallenges: challengePerformance,
          recentDuels
        });
        
      } catch (err) {
        console.error('Error processing vote data:', err);
        // Set empty data on error
        setPerformanceData({
          duelStats: { model_id: model.id, wins: 0, losses: 0, win_percentage: 0 },
          categoryPerformance: [],
          topChallenges: [],
          recentDuels: []
        });
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchVoteData();
  }, [model.id, allModels, calculateWinPercentage, getModelName]);

  // If we have no duel data, show a message
  if (!isLoading && (!performanceData?.duelStats || performanceData.duelStats.wins + performanceData.duelStats.losses === 0)) {
    return (
      <section className="py-16 border-t border-border/50">
        <div className="container">
          <motion.div 
            className="flex items-center justify-between mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2">
              <Brain className="h-6 w-6 text-primary" />
              <h2 className="text-3xl font-display">Model Insights</h2>
            </div>
          </motion.div>
          
          <motion.div
            className="bg-card p-8 rounded-xl border border-border/50 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-display mb-3">No Performance Data Available</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              This model hasn&apos;t participated in enough AI duels to generate insights yet. 
              Visit the Compare page to put this model in duels against others and vote on the results.
            </p>
            <Link href="/compare" className="mt-6 inline-flex items-center text-primary hover:text-primary/90 transition-colors">
              Go to Compare Page
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 border-t border-border/50">
      <div className="container">
        <motion.div 
          className="flex items-center justify-between mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-2">
            <Brain className="h-6 w-6 text-primary" />
            <h2 className="text-3xl font-display">Model Insights</h2>
          </div>
        </motion.div>
        
        {isLoading ? (
          <div className="flex justify-center items-center py-20">
            <motion.div 
              className="h-8 w-8 border-2 border-primary border-t-transparent rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            />
          </div>
        ) : (
          <>
            {/* Tab Navigation */}
            <motion.div 
              className="flex gap-2 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {['overview', 'categories', 'challenges'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab as 'overview' | 'categories' | 'challenges')}
                  className={cn(
                    "px-4 py-2 rounded-lg text-sm transition-all",
                    activeTab === tab 
                      ? "bg-primary text-primary-foreground font-medium" 
                      : "bg-card hover:bg-card/80 text-muted-foreground"
                  )}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </motion.div>

            <AnimatePresence mode="wait">
              {/* Overview View */}
              {activeTab === 'overview' && (
                <motion.div
                  key="overview"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-1 lg:grid-cols-3 gap-6"
                >
                  {/* Win/Loss Ratio */}
                  <InsightSection 
                    title="Win/Loss Ratio" 
                    icon={<Trophy className="h-4 w-4 text-primary" />}
                    isVisible={isVisible}
                    delay={0.2}
                  >
                    <div className="h-72 flex flex-col justify-center">
                      <div className="text-center mb-4">
                        <div className="text-3xl font-display">
                          {performanceData?.duelStats?.win_percentage.toFixed(1)}%
                        </div>
                        <div className="text-muted-foreground text-sm mt-1">Win Rate</div>
                      </div>
                      
                      <ResponsiveContainer width="100%" height={200}>
                        <PieChart>
                          <Pie
                            data={winLossData}
                            dataKey="value"
                            nameKey="name"
                            cx="50%"
                            cy="50%"
                            outerRadius={70}
                            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                            labelLine={false}
                          >
                            {winLossData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                          </Pie>
                          <Tooltip content={<CustomTooltip />} />
                        </PieChart>
                      </ResponsiveContainer>
                      
                      <div className="flex justify-center gap-6 text-sm">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 rounded-full" style={{ backgroundColor: colors[0] }}></div>
                          <span>Wins: {performanceData?.duelStats?.wins || 0}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 rounded-full bg-gray-500"></div>
                          <span>Losses: {performanceData?.duelStats?.losses || 0}</span>
                        </div>
                      </div>
                    </div>
                  </InsightSection>

                  {/* Recent Duels */}
                  <InsightSection 
                    title="Recent Duels" 
                    icon={<BarChart3 className="h-4 w-4 text-primary" />}
                    isVisible={isVisible}
                    delay={0.3}
                  >
                    <div className="h-72 overflow-auto custom-scrollbar pr-2">
                      {performanceData?.recentDuels?.length ? (
                        <ul className="space-y-3">
                          {performanceData.recentDuels.map((duel, index) => (
                            <motion.li 
                              key={index}
                              className="bg-card/50 p-3 rounded-lg border border-border/30 text-sm"
                              initial={{ opacity: 0, x: -10 }}
                              animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                              transition={{ duration: 0.4, delay: 0.5 + (index * 0.1) }}
                            >
                              <div className="flex items-center justify-between">
                                <span className="font-medium">{duel.opponent_name}</span>
                                <span className={cn(
                                  "text-xs px-2 py-0.5 rounded-full",
                                  duel.won ? "bg-green-950/30 text-green-400" : "bg-red-950/30 text-red-400"
                                )}>
                                  {duel.won ? 'Won' : 'Lost'}
                                </span>
                              </div>
                              <div className="text-muted-foreground mt-1 text-xs">
                                {duel.challenge_name}
                              </div>
                            </motion.li>
                          ))}
                        </ul>
                      ) : (
                        <div className="flex h-full items-center justify-center text-muted-foreground">
                          No recent duels found
                        </div>
                      )}
                    </div>
                  </InsightSection>

                  {/* Overall Stats */}
                  <InsightSection 
                    title="Overall Stats" 
                    icon={<Info className="h-4 w-4 text-primary" />}
                    isVisible={isVisible}
                    delay={0.4}
                  >
                    <div className="h-72 flex flex-col">
                      <div className="space-y-4 flex-1">
                        <div className="bg-card/50 p-3 rounded-lg border border-border/30 space-y-2">
                          <h4 className="text-sm font-medium">Total Duels</h4>
                          <div className="flex items-center gap-2">
                            <span className="text-2xl font-display">
                              {(performanceData?.duelStats?.wins || 0) + (performanceData?.duelStats?.losses || 0)}
                            </span>
                          </div>
                        </div>
                        
                        <div className="bg-card/50 p-3 rounded-lg border border-border/30 space-y-2">
                          <h4 className="text-sm font-medium">Unique Challenges</h4>
                          <div className="flex items-center gap-2">
                            <span className="text-2xl font-display">
                              {performanceData?.topChallenges.length || 0}
                            </span>
                          </div>
                        </div>
                        
                        <div className="bg-card/50 p-3 rounded-lg border border-border/30 space-y-2">
                          <h4 className="text-sm font-medium">Best Category</h4>
                          <div className="flex items-center gap-2">
                            {performanceData?.categoryPerformance.length ? (
                              <>
                                <span className="text-xl font-display capitalize">
                                  {performanceData.categoryPerformance[0].category}
                                </span>
                                <span className="text-sm text-muted-foreground">
                                  {performanceData.categoryPerformance[0].win_percentage.toFixed(1)}% win rate
                                </span>
                              </>
                            ) : (
                              <span className="text-muted-foreground">None yet</span>
                            )}
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-auto pt-4 text-xs text-muted-foreground">
                        * All statistics based on AI duel votes from users
                      </div>
                    </div>
                  </InsightSection>
                </motion.div>
              )}

              {/* Categories View */}
              {activeTab === 'categories' && (
                <motion.div
                  key="categories"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-6"
                >
                  {/* Category Performance Chart */}
                  <InsightSection 
                    title="Performance by Category" 
                    icon={<Zap className="h-4 w-4 text-primary" />}
                    isVisible={isVisible}
                    delay={0.2}
                  >
                    <div className="h-72">
                      {categoryData.length > 0 ? (
                        <ResponsiveContainer width="100%" height="100%">
                          <BarChart
                            data={categoryData}
                            layout="vertical"
                            margin={{ top: 5, right: 30, left: 60, bottom: 5 }}
                          >
                            <CartesianGrid strokeDasharray="3 3" stroke="#374151" horizontal={false} />
                            <XAxis type="number" domain={[0, 100]} tick={{ fill: '#9CA3AF' }} />
                            <YAxis 
                              dataKey="name" 
                              type="category" 
                              width={120} 
                              tick={{ fill: '#9CA3AF' }}
                              tickFormatter={(value) => value.charAt(0).toUpperCase() + value.slice(1)}
                            />
                            <Tooltip 
                              content={<CustomTooltip />} 
                              formatter={(value: number) => [`${value}%`, 'Win Rate']}
                            />
                            <Bar 
                              dataKey="winPct" 
                              name="Win Rate" 
                              unit="%" 
                              radius={[0, 4, 4, 0]}
                            >
                              {categoryData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.fill} />
                              ))}
                            </Bar>
                          </BarChart>
                        </ResponsiveContainer>
                      ) : (
                        <div className="flex h-full items-center justify-center text-muted-foreground">
                          No category data available yet
                        </div>
                      )}
                    </div>
                  </InsightSection>

                  {/* Category Details */}
                  <InsightSection 
                    title="Category Details" 
                    icon={<Info className="h-4 w-4 text-primary" />}
                    isVisible={isVisible}
                    delay={0.3}
                  >
                    <div className="h-72 overflow-auto custom-scrollbar pr-2">
                      {categoryData.length ? (
                        <div className="space-y-4">
                          {categoryData.map((category, index) => (
                            <motion.div 
                              key={index}
                              className="bg-card/50 p-3 rounded-lg border border-border/30"
                              initial={{ opacity: 0, x: -10 }}
                              animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                              transition={{ duration: 0.4, delay: 0.4 + (index * 0.1) }}
                            >
                              <div className="flex justify-between items-center">
                                <h4 className="text-sm font-medium capitalize">
                                  {category.name}
                                </h4>
                                <span className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                                  {category.winCount} / {category.totalCount} Duels
                                </span>
                              </div>
                              
                              <div className="mt-2">
                                <div className="flex justify-between text-xs mb-1">
                                  <span className="text-muted-foreground">Win Rate</span>
                                  <span>{category.winPct.toFixed(1)}%</span>
                                </div>
                                <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                                  <motion.div 
                                    className="h-full rounded-full"
                                    style={{ backgroundColor: category.fill }}
                                    initial={{ width: 0 }}
                                    animate={{ width: `${category.winPct}%` }}
                                    transition={{ duration: 1, delay: 0.6 + (index * 0.1) }}
                                  />
                                </div>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      ) : (
                        <div className="flex h-full items-center justify-center text-muted-foreground">
                          No category data available
                        </div>
                      )}
                    </div>
                  </InsightSection>
                </motion.div>
              )}

              {/* Challenges View */}
              {activeTab === 'challenges' && (
                <motion.div
                  key="challenges"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-6"
                >
                  {/* Top Performing Challenges */}
                  <InsightSection 
                    title="Top Performing Challenges" 
                    icon={<Trophy className="h-4 w-4 text-primary" />}
                    isVisible={isVisible}
                    delay={0.2}
                  >
                    <div className="h-72 overflow-auto custom-scrollbar pr-2">
                      {challengeData.length ? (
                        <ul className="space-y-3">
                          {challengeData
                            .sort((a, b) => b.percentage - a.percentage)
                            .map((challenge, index) => (
                              <motion.li 
                                key={index}
                                className="bg-card/50 p-3 rounded-lg border border-border/30"
                                initial={{ opacity: 0, x: -10 }}
                                animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                                transition={{ duration: 0.4, delay: 0.5 + (index * 0.1) }}
                              >
                                <h4 className="text-sm font-medium">{challenge.name}</h4>
                                
                                <div className="mt-2">
                                  <div className="flex justify-between text-xs mb-1">
                                    <span className="text-muted-foreground">Win Rate</span>
                                    <span>{challenge.percentage.toFixed(1)}%</span>
                                  </div>
                                  <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                                    <motion.div 
                                      className="h-full rounded-full"
                                      style={{ backgroundColor: colors[0] }}
                                      initial={{ width: 0 }}
                                      animate={{ width: `${challenge.percentage}%` }}
                                      transition={{ duration: 1, delay: 0.6 + (index * 0.1) }}
                                    />
                                  </div>
                                </div>
                                
                                <div className="mt-2 text-xs text-muted-foreground">
                                  Won {challenge.wins} of {challenge.total} duels
                                </div>
                              </motion.li>
                            ))}
                        </ul>
                      ) : (
                        <div className="flex h-full items-center justify-center text-muted-foreground">
                          No challenge data available
                        </div>
                      )}
                    </div>
                  </InsightSection>

                  {/* Challenge Statistics */}
                  <InsightSection 
                    title="Challenge Statistics" 
                    icon={<BarChart3 className="h-4 w-4 text-primary" />}
                    isVisible={isVisible}
                    delay={0.3}
                  >
                    <div className="h-72">
                      {challengeData.length > 0 ? (
                        <ResponsiveContainer width="100%" height="100%">
                          <BarChart
                            data={challengeData}
                            margin={{ top: 20, right: 30, left: 20, bottom: 70 }}
                            layout="vertical"
                          >
                            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                            <XAxis type="number" domain={[0, 100]} tick={{ fill: '#9CA3AF' }} />
                            <YAxis 
                              dataKey="name" 
                              type="category" 
                              tick={{ fill: '#9CA3AF' }} 
                              width={150}
                              tickFormatter={(value) => 
                                value.length > 20 ? `${value.substring(0, 17)}...` : value
                              }
                            />
                            <Tooltip 
                              content={<CustomTooltip />}
                              formatter={(value: number) => [`${value}%`, 'Win Rate']}
                            />
                            <Bar 
                              dataKey="percentage" 
                              name="Win Rate" 
                              unit="%" 
                              fill={colors[0]} 
                              radius={[0, 4, 4, 0]}
                            />
                          </BarChart>
                        </ResponsiveContainer>
                      ) : (
                        <div className="flex h-full items-center justify-center text-muted-foreground">
                          No challenge data available yet
                        </div>
                      )}
                    </div>
                  </InsightSection>
                </motion.div>
              )}
            </AnimatePresence>
          </>
        )}
      </div>
    </section>
  );
};

// Export the wrapper component
export default ModelInsightsWrapper; 