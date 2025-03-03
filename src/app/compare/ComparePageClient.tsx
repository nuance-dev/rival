"use client";

import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { models } from "@/lib/data";
import { promptChallenges } from "@/lib/prompt-challenges";
import { modelResponses } from "@/lib/model-responses";
import { formatModelName, getSanitizedChallengeId } from "@/lib/utils";
import { ExpansionProvider } from "@/components/canvas/ExpansionProvider";
import { ModelOutput } from "@/types/models";
import { ChartBarIcon, XIcon, RefreshCw } from "lucide-react";

// Import our new modular components
import { ModelSelector, ModelSelectorModal } from "@/components/compare/ModelSelector";
import { ChallengeSelector } from "@/components/compare/ChallengeSelector";
import { ChallengeDisplay } from "@/components/compare/ChallengeDisplay";
import { MinimalLeaderboard } from "@/components/compare/MinimalLeaderboard";
import { MinimalModelDuel } from "@/components/compare/MinimalModelDuel";
import { ModelCanvas } from "@/components/canvas/ModelCanvas";

// Type for the extended ModelOutput
type ExtendedModelOutput = ModelOutput & {
  modelName?: string;
  challengeId?: string;
  funFact?: string;
  prompt?: string;
};

export default function ComparePageClient() {
  const [selectedModels, setSelectedModels] = useState<string[]>([]);
  const [isModelSelectorOpen, setIsModelSelectorOpen] = useState(false);
  const [selectedModelForSelector, setSelectedModelForSelector] = useState<1 | 2 | null>(null);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [selectedChallenge, setSelectedChallenge] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showChallengeSelection, setShowChallengeSelection] = useState(true);
  const [showAllChallenges, setShowAllChallenges] = useState(false);
  const [suggestedModelPairs, setSuggestedModelPairs] = useState<string[][]>([]);
  const [isLoadingChallenges, setIsLoadingChallenges] = useState(false);
  const [isLeaderboardOpen, setIsLeaderboardOpen] = useState(false);
  const [loadedChallenges, setLoadedChallenges] = useState<string[]>([]);

  // Group models by provider for better organization
  const modelsByProvider = useMemo(() => {
    const grouped: Record<string, typeof models> = {};
    
    // Filter out Midjourney and DALL-E models
    const filteredModels = models.filter(model => 
      !model.id.toLowerCase().includes('midjourney') && 
      !model.id.toLowerCase().includes('dalle') &&
      !model.provider.toLowerCase().includes('midjourney') &&
      !model.provider.toLowerCase().includes('dall-e')
    );
    
    filteredModels.forEach(model => {
      if (!grouped[model.provider]) {
        grouped[model.provider] = [];
      }
      grouped[model.provider].push(model);
    });
    
    return grouped;
  }, []);

  // Update the suggested model pairs UI to be more minimal and only show after first model selection
  useEffect(() => {
    // Only initialize suggestions when a model is selected
    if (selectedModels.length === 1) {
      setSuggestedModelPairs([
        ["claude-3-7-sonnet", "gpt-4o"],
        ["claude-3-5-sonnet", "gemini-2-0-pro"],
        ["o1", "deepseek-r1"],
        ["claude-3-haiku", "gemini-2-0-pro"],
        ["gpt-4o", "gemini-2-0-pro"]
      ]);
    }
  }, [selectedModels]);

  // Fix the availableChallenges useMemo to make challenge matching more consistent
  const availableChallenges = useMemo(() => {
    if (selectedModels.length !== 2) return [];
    
    // Mark as loading
    setIsLoadingChallenges(true);
    
    const compatibleChallenges = promptChallenges.filter(challenge => {
      // Use a more robust approach to find responses for each model
      const sanitizedChallengeId = getSanitizedChallengeId(challenge.id);
      
      // Find model 1 responses for this challenge
      const model1Responses = modelResponses.filter(response => {
        if (response.modelId !== selectedModels[0]) return false;
        
        // Check challenge ID in all possible formats
        const responseId = getSanitizedChallengeId(response.id);
        const modelId = selectedModels[0].toLowerCase();
        const challengeIdPart = responseId.replace(modelId, '').replace(/-+/g, '-').replace(/^-/, '').replace(/-$/, '');
        const responseChallengeId = response.challengeId ? getSanitizedChallengeId(response.challengeId) : '';
        
        return (
          responseId.includes(sanitizedChallengeId) || 
          challengeIdPart === sanitizedChallengeId || 
          responseChallengeId === sanitizedChallengeId ||
          challengeIdPart.includes(sanitizedChallengeId) ||
          sanitizedChallengeId.includes(challengeIdPart) ||
          challenge.id === response.id.split('-').pop()
        );
      });
      
      // Find model 2 responses for this challenge
      const model2Responses = modelResponses.filter(response => {
        if (response.modelId !== selectedModels[1]) return false;
        
        // Check challenge ID in all possible formats
        const responseId = getSanitizedChallengeId(response.id);
        const modelId = selectedModels[1].toLowerCase();
        const challengeIdPart = responseId.replace(modelId, '').replace(/-+/g, '-').replace(/^-/, '').replace(/-$/, '');
        const responseChallengeId = response.challengeId ? getSanitizedChallengeId(response.challengeId) : '';
        
        return (
          responseId.includes(sanitizedChallengeId) || 
          challengeIdPart === sanitizedChallengeId || 
          responseChallengeId === sanitizedChallengeId ||
          challengeIdPart.includes(sanitizedChallengeId) ||
          sanitizedChallengeId.includes(challengeIdPart) ||
          challenge.id === response.id.split('-').pop()
        );
      });
      
      const hasCommonChallenge = model1Responses.length > 0 && model2Responses.length > 0;
      return hasCommonChallenge;
    });
    
    // Mark as done loading
    setIsLoadingChallenges(false);
    
    return compatibleChallenges;
  }, [selectedModels]);

  // Prepare challenge responses for all challenges view
  const allChallengesResponses = useMemo(() => {
    if (selectedModels.length !== 2 || !showAllChallenges) return {};
    
    const responsesByChallenge: Record<string, ExtendedModelOutput[]> = {};
    
    availableChallenges.forEach(challenge => {
      const challengeResponses: ExtendedModelOutput[] = [];
      const sanitizedChallengeId = getSanitizedChallengeId(challenge.id);
      
      selectedModels.forEach(modelId => {
        const modelResponse = modelResponses.find(response => {
          if (response.modelId !== modelId) return false;
          
          // Check challenge ID in all possible formats
          const responseId = getSanitizedChallengeId(response.id);
          const challengeIdPart = responseId.replace(response.modelId.toLowerCase(), '').replace(/-+/g, '-').replace(/^-/, '');
          const responseChallengeId = response.challengeId ? getSanitizedChallengeId(response.challengeId) : '';
          
          return (
            responseId.includes(sanitizedChallengeId) || 
            challengeIdPart === sanitizedChallengeId || 
            responseChallengeId === sanitizedChallengeId ||
            challengeIdPart.includes(sanitizedChallengeId) ||
            sanitizedChallengeId.includes(challengeIdPart)
          );
        });
        
        if (modelResponse) {
          const modelData = models.find(m => m.id === modelId);
          
          challengeResponses.push({
            id: modelResponse.id,
            promptId: challenge.id,
            modelId: modelResponse.modelId,
            type: modelResponse.type,
            content: modelResponse.content,
            title: modelResponse.title || "",
            description: modelResponse.description || "",
            modelName: modelData?.name || formatModelName(modelResponse.modelId),
            prompt: challenge.prompt || "",
            challengeId: challenge.id,
            funFact: modelResponse.funFact
          });
        }
      });
      
      if (challengeResponses.length === 2) {
        responsesByChallenge[challenge.id] = challengeResponses;
      }
    });
    
    return responsesByChallenge;
  }, [selectedModels, availableChallenges, showAllChallenges]);

  // Group challenges by category for filtering
  const challengesByCategory = useMemo(() => {
    const grouped: Record<string, typeof promptChallenges> = {};
    
    availableChallenges.forEach(challenge => {
      if (!grouped[challenge.category]) {
        grouped[challenge.category] = [];
      }
      grouped[challenge.category].push(challenge);
    });
    
    return grouped;
  }, [availableChallenges]);

  // Get responses for the selected challenge and models
  const selectedResponses = useMemo(() => {
    if (!selectedChallenge || selectedModels.length !== 2) return [];
    
    const responses: ExtendedModelOutput[] = [];
    const sanitizedSelectedChallenge = getSanitizedChallengeId(selectedChallenge);
    
    selectedModels.forEach(modelId => {
      const modelResponse = modelResponses.find(response => {
        if (response.modelId !== modelId) return false;
        
        // Check challenge ID in all possible formats
        const responseId = getSanitizedChallengeId(response.id);
        const challengeIdPart = responseId.replace(response.modelId.toLowerCase(), '').replace(/-+/g, '-').replace(/^-/, '');
        const responseChallengeId = response.challengeId ? getSanitizedChallengeId(response.challengeId) : '';
        
        return (
          responseId.includes(sanitizedSelectedChallenge) || 
          challengeIdPart === sanitizedSelectedChallenge || 
          responseChallengeId === sanitizedSelectedChallenge ||
          challengeIdPart.includes(sanitizedSelectedChallenge) ||
          sanitizedSelectedChallenge.includes(challengeIdPart)
        );
      });
      
      if (modelResponse) {
        const modelData = models.find(m => m.id === modelId);
        
        responses.push({
          id: modelResponse.id,
          promptId: selectedChallenge,
          modelId: modelResponse.modelId,
          type: modelResponse.type,
          content: modelResponse.content,
          title: modelResponse.title || "",
          description: modelResponse.description || "",
          modelName: modelData?.name || formatModelName(modelResponse.modelId),
          prompt: promptChallenges.find(c => c.id === selectedChallenge)?.prompt || "",
          challengeId: selectedChallenge,
          funFact: modelResponse.funFact
        });
      }
    });
    
    return responses;
  }, [selectedChallenge, selectedModels]);

  // Get challenge data
  const challengeData = useMemo(() => {
    if (!selectedChallenge) return null;
    const challenge = promptChallenges.find(c => c.id === selectedChallenge);
    return challenge || null;
  }, [selectedChallenge]);

  // Clear animation states when changing models or challenges
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const animationKeys = [];
      for (let i = 0; i < sessionStorage.length; i++) {
        const key = sessionStorage.key(i);
        if (key && key.startsWith('animation-output-card-')) {
          animationKeys.push(key);
        }
      }
      
      animationKeys.forEach(key => {
        sessionStorage.removeItem(key);
      });
    }
  }, [selectedModels, selectedChallenge]);

  // Simulate loading state for smooth transitions
  const handleChallengeSelect = (challengeId: string) => {
    setIsLoading(true);
    setSelectedChallenge(challengeId);
    setShowChallengeSelection(false);
    setShowAllChallenges(false);
    
    // Smooth transition effect
    setTimeout(() => {
      setIsLoading(false);
    }, 600);
  };

  const handleModelSelect = (modelId: string) => {
    if (selectedModelForSelector === 1) {
      setSelectedModels(prev => [modelId, prev[1] || ""]);
    } else if (selectedModelForSelector === 2) {
      setSelectedModels(prev => [prev[0] || "", modelId]);
    }
    
    setIsModelSelectorOpen(false);
    setSelectedModelForSelector(null);
    
    // Reset challenge selection when changing models
    setSelectedChallenge(null);
    setShowChallengeSelection(true);
  };

  const openModelSelector = (position: 1 | 2) => {
    setSelectedModelForSelector(position);
    setIsModelSelectorOpen(true);
  };

  const resetSelection = () => {
    setSelectedModels([]);
    setSelectedChallenge(null);
    setActiveCategory(null);
    setSearchQuery("");
    setShowChallengeSelection(true);
  };

  const selectDifferentChallenge = () => {
    setSelectedChallenge(null);
    setShowChallengeSelection(true);
    setShowAllChallenges(false);
  };

  const toggleAllChallengesView = () => {
    // Set loading state first
    setIsLoading(true);
    
    // Save the current state of showAllChallenges to determine the next action
    const willShowAllChallenges = !showAllChallenges;
    
    // Reset loaded challenges when toggling the view
    setLoadedChallenges([]);
    
    // Update state in a consistent order
    setShowAllChallenges(willShowAllChallenges);
    setShowChallengeSelection(!willShowAllChallenges);
    
    // If showing all challenges, make sure we're not also showing a single challenge
    if (willShowAllChallenges) {
      setSelectedChallenge(null);
      
      // Start showing the view immediately with a loading state
      setTimeout(() => {
        setIsLoading(false);
        
        // Load challenges progressively
        const chunkSize = 3; // Load 3 challenges at a time
        const totalChallenges = availableChallenges.length;
        let loadedCount = 0;
        
        function loadNextChunk() {
          if (loadedCount < totalChallenges) {
            const endIndex = Math.min(loadedCount + chunkSize, totalChallenges);
            const newChunk = availableChallenges.slice(loadedCount, endIndex).map(c => c.id);
            
            setLoadedChallenges(prev => [...prev, ...newChunk]);
            loadedCount = endIndex;
            
            // Load the next chunk after a short delay
            if (loadedCount < totalChallenges) {
              setTimeout(loadNextChunk, 300);
            }
          }
        }
        
        // Start loading the first chunk
        loadNextChunk();
        
        // Scroll to top on transition
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 300);
    } else {
      // When returning to single challenge view
      setTimeout(() => {
        setIsLoading(false);
        // Scroll to top on transition
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 600);
    }
  };

  // Get model details by ID
  const getModelById = (modelId: string) => {
    return models.find(model => model.id === modelId);
  };

  // Create a handler for selecting a suggested model pair
  const selectSuggestedModelPair = (pair: string[]) => {
    setSelectedModels(pair);
    setSelectedChallenge(null);
    setShowChallengeSelection(true);
  };
  
  // Handle vote completion
  const handleVoteComplete = () => {
    // Implementation of handleVoteComplete
  };

  // Toggle the leaderboard overlay
  const toggleLeaderboard = () => {
    setIsLeaderboardOpen(!isLeaderboardOpen);
  };

  return (
    <Layout>
      <div className="px-2 sm:px-4 md:container py-8 md:py-12">
        {/* Page header - Centered and more refined */}
        <div className="mb-10 text-center relative">
          {/* Subtle leaderboard button in top-right */}
          <button 
            onClick={toggleLeaderboard}
            className="absolute right-0 top-1/2 -translate-y-1/2 p-2 text-muted-foreground hover:text-primary transition-colors"
            aria-label="View leaderboard"
          >
            <ChartBarIcon className="h-5 w-5" />
          </button>
          
          <h1 className="text-3xl md:text-4xl font-light mb-3">
            <span className="retro-gradient font-normal">Compare</span> Models
          </h1>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            Compare responses from different AI models side by side. Select models, choose a challenge, and see how they perform.
          </p>
        </div>

        {/* Model Selection UI */}
        <ModelSelector 
          selectedModels={selectedModels}
          onModelSelectorOpen={openModelSelector}
          onReset={resetSelection}
          getModelById={getModelById}
        />
        
        {/* Suggested Model Pairs - Only show when exactly one model is selected */}
        {selectedModels.length === 1 && (
          <motion.div 
            className="mb-8 mt-2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-sm font-medium mb-3 text-muted-foreground">
              Suggested pairs with {getModelById(selectedModels[0])?.name}
            </h3>
            {suggestedModelPairs.length > 0 ? (
              <div className="flex flex-wrap gap-2">
                {suggestedModelPairs.slice(0, 3).map((pair, idx) => {
                  // Find the model that isn't the currently selected one
                  const suggestedModelId = pair[0] === selectedModels[0] ? pair[1] : pair[0];
                  const suggestedModel = getModelById(suggestedModelId);
                  
                  return (
                    <button
                      key={`pair-${idx}`}
                      className="flex items-center p-2 border rounded-lg hover:bg-card/50 transition-colors"
                      onClick={() => selectSuggestedModelPair(pair)}
                    >
                      <div className="w-6 h-6 rounded-full bg-card flex-shrink-0 flex items-center justify-center overflow-hidden p-1 border border-border/30">
                        <img 
                          src={suggestedModel?.logoUrl} 
                          alt={suggestedModel?.name || "Model logo"} 
                          className="h-full w-full object-contain"
                          loading="eager"
                        />
                      </div>
                      <span className="ml-2 font-medium text-sm">{suggestedModel?.name}</span>
                    </button>
                  );
                })}
              </div>
            ) : null}
          </motion.div>
        )}
        
        {/* Main content area - Simplified to a single column layout */}
        <div className="w-full max-w-4xl mx-auto">
          {/* Challenge Selection and Display */}
          {selectedModels[0] && selectedModels[1] && (
            <AnimatePresence mode="wait">
              {/* Challenge Selection UI */}
              {showChallengeSelection && (
                <motion.div
                  key="challenge-selection"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <ChallengeSelector 
                    isLoading={isLoadingChallenges}
                    availableChallenges={availableChallenges}
                    activeCategory={activeCategory}
                    searchQuery={searchQuery}
                    challengesByCategory={challengesByCategory}
                    onCategorySelect={setActiveCategory}
                    onSearchChange={setSearchQuery}
                    onChallengeSelect={handleChallengeSelect}
                    selectedChallenge={selectedChallenge}
                    onViewAllChallenges={toggleAllChallengesView}
                  />
                </motion.div>
              )}
              
              {/* All Challenges View - Properly formatted like single challenge view but stacked */}
              {showAllChallenges && (
                <motion.div
                  key="all-challenges"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="mb-8 flex items-center justify-between flex-wrap gap-2">
                    <h2 className="text-xl font-display font-bold">All Challenges Compared</h2>
                    <button
                      onClick={toggleAllChallengesView}
                      className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium transition-colors bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground rounded-full"
                    >
                      <RefreshCw className="h-3.5 w-3.5" />
                      Back to Single View
                    </button>
                  </div>
                  
                  <ExpansionProvider>
                    {availableChallenges.length === 0 ? (
                      <div className="h-96 flex items-center justify-center">
                        <div className="text-center">
                          <p className="text-muted-foreground mb-2">No challenges found for these models</p>
                          <button
                            onClick={resetSelection}
                            className="inline-flex items-center gap-1.5 px-4 py-2 text-sm bg-primary/10 text-primary hover:bg-primary/15 rounded-full transition-colors"
                          >
                            Select Different Models
                          </button>
                        </div>
                      </div>
                    ) : loadedChallenges.length === 0 ? (
                      <div className="h-96 flex items-center justify-center">
                        <div className="flex flex-col items-center gap-4">
                          <div className="relative h-10 w-10">
                            <motion.div 
                              className="absolute inset-0 rounded-full border-2 border-primary border-t-transparent"
                              animate={{ rotate: 360 }}
                              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            />
                          </div>
                          <p className="text-sm text-muted-foreground">Loading challenges...</p>
                        </div>
                      </div>
                    ) : (
                      availableChallenges.map((challenge) => {
                        const responses = allChallengesResponses[challenge.id] || [];
                        if (responses.length !== 2) return null;
                        
                        // Only render challenges that have been loaded
                        if (!loadedChallenges.includes(challenge.id)) {
                          return null;
                        }
                        
                        return (
                          <motion.div 
                            key={challenge.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="mb-16 pb-8 border-b last:border-b-0 last:pb-0"
                          >
                            <div className="mb-6">
                              <h3 className="font-display font-bold text-xl mb-1">{challenge.title}</h3>
                              <div className="flex items-center gap-2 mb-4">
                                <div className={`
                                  text-xs font-medium py-0.5 px-2 rounded-full
                                  ${challenge.difficulty === 'easy' ? 'bg-green-500/10 text-green-500' : 
                                    challenge.difficulty === 'medium' ? 'bg-amber-500/10 text-amber-500' : 
                                    'bg-red-500/10 text-red-500'}
                                `}>
                                  {challenge.difficulty.charAt(0).toUpperCase() + challenge.difficulty.slice(1)}
                                </div>
                                
                                <div className="text-xs font-medium py-0.5 px-2 bg-primary/10 text-primary rounded-full">
                                  {challenge.expectedOutputType.charAt(0).toUpperCase() + challenge.expectedOutputType.slice(1)}
                                </div>
                              </div>
                              
                              <div className="bg-muted/30 rounded-lg p-4 mb-6">
                                <h4 className="text-sm font-medium mb-2">Prompt:</h4>
                                <p className="font-mono text-sm whitespace-pre-wrap">{challenge.prompt}</p>
                              </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                              {responses.map((response) => {
                                const model = getModelById(response.modelId);
                                return (
                                  <div key={response.id} className="h-full flex flex-col" style={{ minHeight: "500px" }}>
                                    <div className="bg-card border-t border-x rounded-t-xl p-4 flex items-center gap-3">
                                      {model?.logoUrl && (
                                        <div className="w-8 h-8 rounded-full bg-background flex items-center justify-center overflow-hidden p-1">
                                          <img 
                                            src={model.logoUrl} 
                                            alt={model.name} 
                                            className="h-full w-full object-contain"
                                          />
                                        </div>
                                      )}
                                      <span className="font-display font-medium">{model?.name}</span>
                                    </div>
                                    
                                    <div className="flex-grow border rounded-b-xl overflow-hidden">
                                      <ModelCanvas 
                                        title={challenge.title || ""}
                                        description=""
                                        output={{
                                          ...response,
                                          modelName: model?.name || formatModelName(response.modelId),
                                          challengeId: challenge.id
                                        }}
                                        className="h-full"
                                      />
                                    </div>
                                  </div>
                                );
                              })}
                            </div>
                            
                            {/* Add model duel UI for each challenge */}
                            <motion.div
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              <MinimalModelDuel
                                model1Id={responses[0].modelId}
                                model2Id={responses[1].modelId}
                                challengeId={challenge.id}
                                model1Name={getModelById(responses[0].modelId)?.name || formatModelName(responses[0].modelId)}
                                model2Name={getModelById(responses[1].modelId)?.name || formatModelName(responses[1].modelId)}
                                onVote={handleVoteComplete}
                              />
                            </motion.div>
                          </motion.div>
                        );
                      })
                    )}
                  </ExpansionProvider>
                </motion.div>
              )}
              
              {/* Challenge Display UI */}
              {selectedChallenge && !showChallengeSelection && !isLoading && (
                <motion.div
                  key="challenge-display"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <ExpansionProvider>
                    <ChallengeDisplay 
                      selectedChallenge={selectedChallenge}
                      challengeData={challengeData}
                      selectedResponses={selectedResponses}
                      onAllChallenges={toggleAllChallengesView}
                      onChangeChallenge={selectDifferentChallenge}
                      getModelById={getModelById}
                      onVote={handleVoteComplete}
                    />
                  </ExpansionProvider>
                </motion.div>
              )}
              
              {/* Loading State */}
              {isLoading && (
                <motion.div 
                  key="loading"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="h-[400px] flex items-center justify-center"
                >
                  <div className="flex flex-col items-center gap-4">
                    <div className="relative h-10 w-10">
                      <motion.div 
                        className="absolute inset-0 rounded-full border-2 border-primary border-t-transparent"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      />
                    </div>
                    <p className="text-sm text-muted-foreground">Loading comparison...</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          )}
        </div>
        
        {/* Model Selector Modal */}
        <ModelSelectorModal 
          isOpen={isModelSelectorOpen}
          selectorPosition={selectedModelForSelector}
          selectedModels={selectedModels}
          onClose={() => {
            setIsModelSelectorOpen(false);
            setSelectedModelForSelector(null);
          }}
          onModelSelect={handleModelSelect}
          modelsByProvider={modelsByProvider}
        />
        
        {/* Leaderboard Overlay */}
        <AnimatePresence>
          {isLeaderboardOpen && (
            <motion.div
              className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleLeaderboard}
            >
              <motion.div
                className="bg-card border shadow-lg rounded-xl w-full max-w-lg max-h-[90vh] overflow-hidden"
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="p-4 border-b flex items-center justify-between">
                  <h3 className="text-lg font-display font-bold">Model Leaderboard</h3>
                  <button
                    onClick={toggleLeaderboard}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <XIcon className="h-5 w-5" />
                  </button>
                </div>
                <div className="p-4 max-h-[calc(90vh-64px)] overflow-y-auto">
                  <MinimalLeaderboard />
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Layout>
  );
} 