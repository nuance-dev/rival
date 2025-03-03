"use client";

import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { models } from "@/lib/data";
import { promptChallenges } from "@/lib/prompt-challenges";
import { modelResponses } from "@/lib/model-responses";
import { ArrowRight, Box, Check, ChevronDown, Filter, XCircle, RefreshCw } from "lucide-react";
import { ExpansionProvider } from "@/components/canvas/ExpansionProvider";
import { ModelOutput } from "@/types/models";
import { formatModelName, getSanitizedChallengeId } from "@/lib/utils";
import { ModelCanvas } from "@/components/canvas/ModelCanvas";
import Link from "next/link";

// Extend ModelOutput type to include the properties we're using
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
    
    // More aggressive logging for debugging
    console.log("Finding common challenges for models:", selectedModels);
    
    const compatibleChallenges = promptChallenges.filter(challenge => {
      // Use a more robust approach to find responses for each model
      const sanitizedChallengeId = getSanitizedChallengeId(challenge.id);
      console.log(`Checking challenge: ${challenge.id} (${sanitizedChallengeId})`);
      
      // Find model 1 responses for this challenge
      const model1Responses = modelResponses.filter(response => {
        if (response.modelId !== selectedModels[0]) return false;
        
        // Check challenge ID in all possible formats
        const responseId = getSanitizedChallengeId(response.id);
        const modelId = selectedModels[0].toLowerCase();
        const challengeIdPart = responseId.replace(modelId, '').replace(/-+/g, '-').replace(/^-/, '').replace(/-$/, '');
        const responseChallengeId = response.challengeId ? getSanitizedChallengeId(response.challengeId) : '';
        
        const isMatch = (
          responseId.includes(sanitizedChallengeId) || 
          challengeIdPart === sanitizedChallengeId || 
          responseChallengeId === sanitizedChallengeId ||
          challengeIdPart.includes(sanitizedChallengeId) ||
          sanitizedChallengeId.includes(challengeIdPart) ||
          challenge.id === response.id.split('-').pop()
        );
        
        if (isMatch) {
          console.log(`Model1 match found: ${response.id} for challenge: ${challenge.id}`);
          console.log(`Response ID: ${responseId}, Challenge part: ${challengeIdPart}`);
        }
        
        return isMatch;
      });
      
      // Find model 2 responses for this challenge
      const model2Responses = modelResponses.filter(response => {
        if (response.modelId !== selectedModels[1]) return false;
        
        // Check challenge ID in all possible formats
        const responseId = getSanitizedChallengeId(response.id);
        const modelId = selectedModels[1].toLowerCase();
        const challengeIdPart = responseId.replace(modelId, '').replace(/-+/g, '-').replace(/^-/, '').replace(/-$/, '');
        const responseChallengeId = response.challengeId ? getSanitizedChallengeId(response.challengeId) : '';
        
        const isMatch = (
          responseId.includes(sanitizedChallengeId) || 
          challengeIdPart === sanitizedChallengeId || 
          responseChallengeId === sanitizedChallengeId ||
          challengeIdPart.includes(sanitizedChallengeId) ||
          sanitizedChallengeId.includes(challengeIdPart) ||
          challenge.id === response.id.split('-').pop()
        );
        
        if (isMatch) {
          console.log(`Model2 match found: ${response.id} for challenge: ${challenge.id}`);
          console.log(`Response ID: ${responseId}, Challenge part: ${challengeIdPart}`);
        }
        
        return isMatch;
      });
      
      const hasCommonChallenge = model1Responses.length > 0 && model2Responses.length > 0;
      if (hasCommonChallenge) {
        console.log(`Common challenge found: ${challenge.id}`);
        console.log(`Model1 responses: ${model1Responses.length}, Model2 responses: ${model2Responses.length}`);
      }
      
      return hasCommonChallenge;
    });
    
    console.log(`Found ${compatibleChallenges.length} compatible challenges`);
    
    // Mark as done loading
    setIsLoadingChallenges(false);
    
    return compatibleChallenges;
  }, [selectedModels]);

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

  // Filter available challenges by category and search query
  const filteredChallenges = useMemo(() => {
    let challenges = availableChallenges;
    
    if (activeCategory) {
      challenges = challenges.filter(c => c.category === activeCategory);
    }
    
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      challenges = challenges.filter(c => 
        c.title.toLowerCase().includes(query) || 
        c.description.toLowerCase().includes(query)
      );
    }
    
    return challenges;
  }, [availableChallenges, activeCategory, searchQuery]);

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
    return promptChallenges.find(c => c.id === selectedChallenge);
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
    
    // Update state in a consistent order
    setShowAllChallenges(willShowAllChallenges);
    setShowChallengeSelection(!willShowAllChallenges);
    
    // If showing all challenges, make sure we're not also showing a single challenge
    if (willShowAllChallenges) {
      setSelectedChallenge(null);
    }
    
    // Use setTimeout to allow state updates to settle before removing loading state
    setTimeout(() => {
      setIsLoading(false);
      
      // Scroll to top on transition
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 600);
  };

  // Get model details by ID
  const getModelById = (modelId: string) => {
    return models.find(model => model.id === modelId);
  };

  // Variants for animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 }
    }
  };

  // Calculate model pairs with common challenges on initial load and when models change
  useEffect(() => {
    // Create a map of models to their available challenges
    const calculateModelPairs = async () => {
      console.log("Calculating model pairs with common challenges");
      
      const modelChallengesMap: Record<string, Set<string>> = {};
      
      // Find available challenges for each model
      models.forEach(model => {
        const modelId = model.id;
        
        // Skip image models
        if (modelId.toLowerCase().includes('midjourney') || 
            modelId.toLowerCase().includes('dalle')) {
          return;
        }
        
        const challengeSet = new Set<string>();
        
        promptChallenges.forEach(challenge => {
          const sanitizedChallengeId = getSanitizedChallengeId(challenge.id);
          
          const hasResponse = modelResponses.some(response => {
            if (response.modelId !== modelId) return false;
            
            const responseId = getSanitizedChallengeId(response.id);
            const challengeIdPart = responseId.replace(modelId.toLowerCase(), '').replace(/-+/g, '-').replace(/^-/, '');
            const responseChallengeId = response.challengeId ? getSanitizedChallengeId(response.challengeId) : '';
            
            return (
              responseId.includes(sanitizedChallengeId) || 
              challengeIdPart === sanitizedChallengeId || 
              responseChallengeId === sanitizedChallengeId ||
              challengeIdPart.includes(sanitizedChallengeId) ||
              sanitizedChallengeId.includes(challengeIdPart)
            );
          });
          
          if (hasResponse) {
            challengeSet.add(challenge.id);
          }
        });
        
        if (challengeSet.size > 0) {
          modelChallengesMap[modelId] = challengeSet;
        }
      });
      
      // Find pairs of models that have common challenges
      const possiblePairs: string[][] = [];
      
      // If we have two selected models and no challenges found
      if (selectedModels.length === 2 && availableChallenges.length === 0 && !isLoadingChallenges) {
        const selectedModel1 = selectedModels[0];
        const selectedModel2 = selectedModels[1];
        
        // Check for alternatives for model 1 that would work with model 2
        Object.keys(modelChallengesMap).forEach(modelId => {
          if (modelId === selectedModel1 || modelId === selectedModel2) return;
          
          // Check if this model shares challenges with selected model 2
          if (modelChallengesMap[modelId] && modelChallengesMap[selectedModel2]) {
            const commonChallenges = new Set<string>();
            modelChallengesMap[modelId].forEach(challengeId => {
              if (modelChallengesMap[selectedModel2].has(challengeId)) {
                commonChallenges.add(challengeId);
              }
            });
            
            if (commonChallenges.size > 0) {
              possiblePairs.push([modelId, selectedModel2]);
            }
          }
        });
        
        // Check for alternatives for model 2 that would work with model 1
        Object.keys(modelChallengesMap).forEach(modelId => {
          if (modelId === selectedModel1 || modelId === selectedModel2) return;
          
          // Check if this model shares challenges with selected model 1
          if (modelChallengesMap[modelId] && modelChallengesMap[selectedModel1]) {
            const commonChallenges = new Set<string>();
            modelChallengesMap[modelId].forEach(challengeId => {
              if (modelChallengesMap[selectedModel1].has(challengeId)) {
                commonChallenges.add(challengeId);
              }
            });
            
            if (commonChallenges.size > 0) {
              possiblePairs.push([selectedModel1, modelId]);
            }
          }
        });
      } 
      // Initial load or only one model selected - show popular combinations
      else {
        // Find pairs with the most common challenges
        const allPossiblePairs: Array<[string, string, number]> = [];
        
        Object.keys(modelChallengesMap).forEach(modelId1 => {
          Object.keys(modelChallengesMap).forEach(modelId2 => {
            if (modelId1 === modelId2) return;
            
            const commonChallenges = new Set<string>();
            modelChallengesMap[modelId1].forEach(challengeId => {
              if (modelChallengesMap[modelId2].has(challengeId)) {
                commonChallenges.add(challengeId);
              }
            });
            
            if (commonChallenges.size > 0) {
              // Store the pair and the number of common challenges
              allPossiblePairs.push([modelId1, modelId2, commonChallenges.size]);
            }
          });
        });
        
        // Sort by number of common challenges (descending)
        allPossiblePairs.sort((a, b) => b[2] - a[2]);
        
        // Filter out duplicates (A-B vs B-A)
        const uniquePairs = new Set<string>();
        allPossiblePairs.forEach(([model1, model2]) => {
          const pairKey = [model1, model2].sort().join('-');
          if (!uniquePairs.has(pairKey)) {
            uniquePairs.add(pairKey);
            possiblePairs.push([model1, model2]);
          }
        });
        
        // If we have one model selected, prioritize pairs with that model
        if (selectedModels.length === 1) {
          const selectedModelId = selectedModels[0];
          
          // Move pairs containing the selected model to the front
          const pairsWithSelectedModel = possiblePairs.filter(
            pair => pair[0] === selectedModelId || pair[1] === selectedModelId
          );
          
          const otherPairs = possiblePairs.filter(
            pair => pair[0] !== selectedModelId && pair[1] !== selectedModelId
          );
          
          possiblePairs.length = 0;
          possiblePairs.push(...pairsWithSelectedModel, ...otherPairs);
        }
      }
      
      // Add some generally compatible model pairs if we don't have enough
      if (possiblePairs.length < 5) {
        const compatiblePairs = [
          ["claude-3-7-sonnet", "gpt-4o"],
          ["claude-3-5-sonnet", "gemini-2-0-pro-exp"],
          ["o1", "deepseek-r1"],
          ["claude-3-haiku", "gemini-2-0-pro"],
          ["gpt-4o", "gemini-2-0-pro-exp"]
        ];
        
        compatiblePairs.forEach(pair => {
          if (!possiblePairs.some(p => 
            (p[0] === pair[0] && p[1] === pair[1]) || 
            (p[0] === pair[1] && p[1] === pair[0])
          )) {
            if (modelChallengesMap[pair[0]] && modelChallengesMap[pair[1]]) {
              const commonChallenges = new Set<string>();
              modelChallengesMap[pair[0]].forEach(challengeId => {
                if (modelChallengesMap[pair[1]].has(challengeId)) {
                  commonChallenges.add(challengeId);
                }
              });
              
              if (commonChallenges.size > 0) {
                possiblePairs.push(pair);
              }
            }
          }
        });
      }
      
      console.log(`Found ${possiblePairs.length} suggested model pairs`);
      
      // Limit to 5 suggestions
      setSuggestedModelPairs(possiblePairs.slice(0, 5));
    };
    
    calculateModelPairs();
  }, [selectedModels, availableChallenges.length, isLoadingChallenges]);

  // Create a handler for selecting a suggested model pair
  const selectSuggestedModelPair = (pair: string[]) => {
    setSelectedModels(pair);
    setSelectedChallenge(null);
    setShowChallengeSelection(true);
  };

  return (
    <Layout>
      <div className="px-2 sm:px-4 md:container py-8 md:py-12">
        {/* Page header */}
        <div className="mb-8 md:mb-12 text-center">
          <h1 className="text-3xl md:text-5xl font-light mb-4 md:mb-6">
            <span className="retro-gradient font-normal">Compare</span> AI Models
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Compare responses from different AI models side by side. Select models, choose a challenge, and see how they perform.
          </p>
        </div>

        {/* Model Selection Panel */}
        <motion.div 
          className="mb-8 p-6 rounded-xl bg-card border shadow-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-xl font-display font-bold mb-6">Select Models to Compare</h2>
          
          <div className="flex flex-col md:flex-row gap-6 items-center">
            {/* Model 1 Selector */}
            <div className="flex-1 w-full">
              {selectedModels[0] ? (
                <div className="relative group">
                  <button 
                    className="w-full p-4 rounded-xl border bg-background flex items-center justify-between gap-3 group-hover:border-primary/50 transition-colors touch-manipulation"
                    onClick={() => openModelSelector(1)}
                  >
                    <div className="flex items-center gap-3">
                      {getModelById(selectedModels[0])?.logoUrl && (
                        <div className="w-8 h-8 min-w-[2rem] rounded-full bg-card flex-shrink-0 flex items-center justify-center overflow-hidden p-1 border border-border/30">
                          <img 
                            src={getModelById(selectedModels[0])?.logoUrl} 
                            alt={getModelById(selectedModels[0])?.name || "Model logo"} 
                            className="h-full w-full object-contain"
                            loading="eager"
                          />
                        </div>
                      )}
                      <span className="font-medium truncate">{getModelById(selectedModels[0])?.name}</span>
                    </div>
                    <ChevronDown className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                  </button>
                </div>
              ) : (
                <button 
                  className="w-full p-4 rounded-xl border border-dashed bg-muted/30 text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors touch-manipulation"
                  onClick={() => openModelSelector(1)}
                >
                  Select first model
                </button>
              )}
            </div>
            
            <div className="flex items-center justify-center">
              <ArrowRight className="h-6 w-6 text-muted-foreground" />
            </div>
            
            {/* Model 2 Selector */}
            <div className="flex-1 w-full">
              {selectedModels[1] ? (
                <div className="relative group">
                  <button 
                    className="w-full p-4 rounded-xl border bg-background flex items-center justify-between gap-3 group-hover:border-primary/50 transition-colors touch-manipulation"
                    onClick={() => openModelSelector(2)}
                  >
                    <div className="flex items-center gap-3">
                      {getModelById(selectedModels[1])?.logoUrl && (
                        <div className="w-8 h-8 min-w-[2rem] rounded-full bg-card flex-shrink-0 flex items-center justify-center overflow-hidden p-1 border border-border/30">
                          <img 
                            src={getModelById(selectedModels[1])?.logoUrl} 
                            alt={getModelById(selectedModels[1])?.name || "Model logo"} 
                            className="h-full w-full object-contain"
                            loading="eager"
                          />
                        </div>
                      )}
                      <span className="font-medium truncate">{getModelById(selectedModels[1])?.name}</span>
                    </div>
                    <ChevronDown className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                  </button>
                </div>
              ) : (
                <button 
                  className="w-full p-4 rounded-xl border border-dashed bg-muted/30 text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors touch-manipulation"
                  onClick={() => openModelSelector(2)}
                >
                  Select second model
                </button>
              )}
            </div>
          </div>
          
          {/* Reset Button (only show when models are selected) */}
          {(selectedModels[0] || selectedModels[1]) && (
            <div className="mt-4 flex justify-end">
              <button 
                className="text-sm flex items-center text-muted-foreground hover:text-primary transition-colors"
                onClick={resetSelection}
              >
                <RefreshCw className="h-3 w-3 mr-1" /> Reset selection
              </button>
            </div>
          )}
        </motion.div>
        
        {/* Suggested Model Pairs - Only show when exactly one model is selected */}
        {selectedModels.length === 1 && (
          <motion.div 
            className="mb-8 mt-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
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
        
        {/* Challenge Selection Section - Only show if both models are selected and no challenge is selected */}
        {selectedModels[0] && selectedModels[1] && (
          <AnimatePresence mode="wait">
            {showChallengeSelection ? (
              <motion.div
                key="challenge-selection"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                {isLoadingChallenges ? (
                  <motion.div 
                    className="p-8 rounded-xl bg-muted/10 border text-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    <div className="flex flex-col items-center gap-4">
                      <div className="relative h-10 w-10">
                        <motion.div 
                          className="absolute inset-0 rounded-full border-2 border-primary border-t-transparent"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        />
                      </div>
                      <p className="text-sm text-muted-foreground">Finding common challenges...</p>
                    </div>
                  </motion.div>
                ) : availableChallenges.length > 0 ? (
                  <>
                    <div className="flex flex-wrap items-center justify-between mb-6">
                      <h2 className="text-xl font-display font-bold">Select a Challenge</h2>
                      
                      {/* Improved "View All" button with better behavior */}
                      <motion.button
                        onClick={toggleAllChallengesView}
                        className="inline-flex items-center gap-1.5 px-4 py-2 text-sm bg-primary/10 text-primary 
                                  hover:bg-primary/15 rounded-full transition-colors font-medium"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                      >
                        <Box className="h-4 w-4" />
                        Compare All Challenges
                      </motion.button>
                    </div>
                    
                    <div className="mb-8 flex flex-wrap gap-4 items-center">
                      {/* Category filters */}
                      <button 
                        className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-medium ${
                          activeCategory === null ? "bg-primary/10 text-primary" : "bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground"
                        } transition-colors`}
                        onClick={() => setActiveCategory(null)}
                      >
                        All Challenges
                      </button>
                      
                      {Object.keys(challengesByCategory).map((category) => (
                        <button
                          key={category}
                          className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-sm font-medium ${
                            activeCategory === category ? "bg-primary/10 text-primary" : "bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground"
                          } transition-colors`}
                          onClick={() => setActiveCategory(category)}
                        >
                          <Filter className="h-3.5 w-3.5" />
                          {category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                        </button>
                      ))}
                      
                      {/* Search input */}
                      <div className="ml-auto relative">
                        <input
                          type="text"
                          placeholder="Search challenges..."
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          className="px-3 py-1.5 rounded-full bg-background border text-sm w-full max-w-[250px] focus:outline-none focus:ring-1 focus:ring-primary"
                        />
                        {searchQuery && (
                          <button
                            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                            onClick={() => setSearchQuery("")}
                          >
                            <XCircle className="h-4 w-4" />
                          </button>
                        )}
                      </div>
                    </div>
                    
                    {/* Challenges grid */}
                    <motion.div 
                      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
                      variants={containerVariants}
                      initial="hidden"
                      animate="visible"
                    >
                      {filteredChallenges.map((challenge) => (
                        <motion.div
                          key={challenge.id}
                          variants={itemVariants}
                          className={`
                            relative overflow-hidden rounded-xl border hover:shadow-md cursor-pointer transition-all
                            ${selectedChallenge === challenge.id ? 'border-primary/70 ring-1 ring-primary' : 'hover:border-primary/20'}
                          `}
                          onClick={() => handleChallengeSelect(challenge.id)}
                        >
                          <div className="p-5">
                            <div className="flex items-center gap-2 mb-2">
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
                            
                            <h3 className="text-base font-sans font-semibold mb-2 line-clamp-1">{challenge.title}</h3>
                            <p className="text-sm text-muted-foreground line-clamp-2 mb-2">{challenge.description}</p>
                          </div>
                        </motion.div>
                      ))}
                    </motion.div>
                  </>
                ) : (
                  <motion.div 
                    className="p-8 rounded-xl bg-muted/10 border text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <p className="text-xl font-display mb-2">No Common Challenges Found</p>
                    <p className="text-muted-foreground mb-4">
                      The selected models don&apos;t have common challenges to compare.
                      Try selecting different models.
                    </p>
                    
                    {/* Add suggestive "Try Popular Models" UI here */}
                    <div className="mt-8 flex flex-col items-center">
                      <motion.button
                        onClick={() => selectSuggestedModelPair(["claude-3-7-sonnet", "gpt-4o"])}
                        className="inline-flex items-center gap-2 px-5 py-3 text-sm bg-primary text-primary-foreground 
                                  hover:bg-primary/90 rounded-lg transition-colors font-medium shadow-md"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                      >
                        <Box className="h-4 w-4" />
                        Try Popular Models Instead
                      </motion.button>
                    </div>
                    
                    {suggestedModelPairs.length > 0 && (
                      <div className="mt-6 mb-8">
                        <h3 className="text-lg font-medium mb-3">Suggested Compatible Models</h3>
                        <div className="flex flex-col gap-3 max-w-xl mx-auto">
                          {suggestedModelPairs.map((pair, idx) => (
                            <button
                              key={`pair-${idx}`}
                              className="flex items-center justify-between p-3 border rounded-lg hover:bg-card/50 transition-colors"
                              onClick={() => selectSuggestedModelPair(pair)}
                            >
                              <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-card flex-shrink-0 flex items-center justify-center overflow-hidden p-1 border border-border/30">
                                  <img 
                                    src={getModelById(pair[0])?.logoUrl} 
                                    alt={getModelById(pair[0])?.name || "Model logo"} 
                                    className="h-full w-full object-contain"
                                    loading="eager"
                                  />
                                </div>
                                <span className="font-medium">{getModelById(pair[0])?.name}</span>
                                <ArrowRight className="h-4 w-4 text-muted-foreground" />
                                <div className="w-8 h-8 rounded-full bg-card flex-shrink-0 flex items-center justify-center overflow-hidden p-1 border border-border/30">
                                  <img 
                                    src={getModelById(pair[1])?.logoUrl} 
                                    alt={getModelById(pair[1])?.name || "Model logo"} 
                                    className="h-full w-full object-contain"
                                    loading="eager"
                                  />
                                </div>
                                <span className="font-medium">{getModelById(pair[1])?.name}</span>
                              </div>
                              <span className="text-xs bg-primary/10 text-primary rounded-full px-2 py-1">
                                Try this pair
                              </span>
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    <button 
                      className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary font-medium hover:bg-primary/20 transition-colors"
                      onClick={resetSelection}
                    >
                      <RefreshCw className="h-4 w-4 mr-2" /> Try Different Models
                    </button>
                  </motion.div>
                )}
              </motion.div>
            ) : selectedChallenge && !isLoading ? (
              <motion.div
                key="selected-challenge-info"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="mb-8 flex items-center justify-between"
              >
                <div>
                  <h2 className="font-display font-bold text-xl">
                    {challengeData?.title}
                  </h2>
                  <div className="flex items-center gap-2 mt-1">
                    <div className={`
                      text-xs font-medium py-0.5 px-2 rounded-full
                      ${challengeData?.difficulty === 'easy' ? 'bg-green-500/10 text-green-500' : 
                        challengeData?.difficulty === 'medium' ? 'bg-amber-500/10 text-amber-500' : 
                          'bg-red-500/10 text-red-500'}
                    `}>
                      {challengeData?.difficulty ? challengeData.difficulty.charAt(0).toUpperCase() + challengeData.difficulty.slice(1) : ''}
                    </div>
                    <div className="text-xs font-medium py-0.5 px-2 bg-primary/10 text-primary rounded-full">
                      {challengeData?.expectedOutputType ? challengeData.expectedOutputType.charAt(0).toUpperCase() + challengeData.expectedOutputType.slice(1) : ''}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={toggleAllChallengesView}
                    className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium transition-colors bg-primary/10 text-primary hover:bg-primary/20 rounded-full"
                  >
                    <Box className="h-3.5 w-3.5" />
                    Compare All Challenges
                  </button>
                  <button
                    onClick={selectDifferentChallenge}
                    className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium transition-colors bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground rounded-full"
                  >
                    <RefreshCw className="h-3.5 w-3.5" />
                    Change Challenge
                  </button>
                </div>
              </motion.div>
            ) : null}
          </AnimatePresence>
        )}
        
        {/* Comparison Display - Only show when both models and a challenge are selected */}
        {selectedModels[0] && selectedModels[1] && selectedChallenge && !showAllChallenges && (
          <ExpansionProvider>
            <AnimatePresence mode="wait">
              {isLoading ? (
                <motion.div 
                  key="loading"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="h-[600px] flex items-center justify-center"
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
              ) : (
                <motion.div
                  key="content"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  {/* Challenge details */}
                  <div className="mb-8">
                    <div className="bg-muted/30 rounded-lg p-4 mb-8">
                      <h3 className="text-sm font-medium mb-2">Prompt:</h3>
                      <p className="font-mono text-sm">{challengeData?.prompt}</p>
                    </div>
                  </div>
                  
                  {/* Model responses side by side */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    {selectedResponses.map((response) => {
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
                            
                            <div className="ml-auto">
                              <Link 
                                href={`/models/${response.modelId}`}
                                className="text-xs text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
                              >
                                View model <Box className="h-3 w-3" />
                              </Link>
                            </div>
                          </div>
                          
                          <div className="flex-grow border rounded-b-xl overflow-hidden">
                            <ModelCanvas 
                              title={challengeData?.title || ""}
                              description=""
                              output={{
                                ...response,
                                modelName: model?.name || formatModelName(response.modelId),
                                challengeId: selectedChallenge
                              }}
                              className="h-full"
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  
                  {/* Link to challenge page */}
                  <div className="flex justify-center mt-4 mb-8">
                    <Link 
                      href={`/challenges/${selectedChallenge}`}
                      className="px-4 py-2 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors text-sm font-medium"
                    >
                      View all model responses for this challenge
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </ExpansionProvider>
        )}
        
        {/* All Challenges View */}
        {selectedModels[0] && selectedModels[1] && showAllChallenges && (
          <ExpansionProvider>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-4"
            >
              <div className="mb-8 flex items-center justify-between">
                <h2 className="text-xl font-display font-bold">All Challenges Compared</h2>
                <button
                  onClick={toggleAllChallengesView}
                  className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium transition-colors bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground rounded-full"
                >
                  <RefreshCw className="h-3.5 w-3.5" />
                  Back to Single View
                </button>
              </div>
              
              {availableChallenges.map((challenge) => {
                const challengeResponses = modelResponses.filter(response => {
                  const responseModelId = response.modelId;
                  if (!selectedModels.includes(responseModelId)) return false;
                  
                  // Check challenge ID in all possible formats
                  const responseId = getSanitizedChallengeId(response.id);
                  const challengeIdPart = responseId.replace(response.modelId.toLowerCase(), '').replace(/-+/g, '-').replace(/^-/, '');
                  const responseChallengeId = response.challengeId ? getSanitizedChallengeId(response.challengeId) : '';
                  const targetChallengeId = getSanitizedChallengeId(challenge.id);
                  
                  return (
                    responseId.includes(targetChallengeId) || 
                    challengeIdPart === targetChallengeId || 
                    responseChallengeId === targetChallengeId ||
                    challengeIdPart.includes(targetChallengeId) ||
                    targetChallengeId.includes(challengeIdPart)
                  );
                });
                
                const formattedResponses = challengeResponses.map(response => {
                  const model = getModelById(response.modelId);
                  return {
                    id: response.id,
                    promptId: challenge.id,
                    modelId: response.modelId,
                    type: response.type,
                    content: response.content,
                    title: response.title || "",
                    description: response.description || "",
                    modelName: model?.name || formatModelName(response.modelId),
                    prompt: challenge.prompt || "",
                    challengeId: challenge.id,
                    funFact: response.funFact
                  };
                });
                
                return (
                  <div key={challenge.id} className="mb-16 pb-16 border-b last:border-b-0">
                    <div className="mb-6">
                      <h3 className="font-sans font-bold text-xl mb-2">{challenge.title}</h3>
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
                        <p className="font-mono text-sm">{challenge.prompt}</p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      {formattedResponses.map((response) => {
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
                              
                              <div className="ml-auto">
                                <Link 
                                  href={`/models/${response.modelId}`}
                                  className="text-xs text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
                                >
                                  View model <Box className="h-3 w-3" />
                                </Link>
                              </div>
                            </div>
                            
                            <div className="flex-grow border rounded-b-xl overflow-hidden">
                              <ModelCanvas 
                                title={challenge.title || ""}
                                description=""
                                output={{
                                  ...response,
                                  modelName: model?.name || formatModelName(response.modelId),
                                }}
                                className="h-full"
                              />
                            </div>
                          </div>
                        );
                      })}
                    </div>
                    
                    <div className="flex justify-center">
                      <Link 
                        href={`/challenges/${challenge.id}`}
                        className="px-4 py-2 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors text-sm font-medium"
                      >
                        View all model responses for this challenge
                      </Link>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </ExpansionProvider>
        )}
        
        {/* Model Selector Modal */}
        <AnimatePresence>
          {isModelSelectorOpen && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => {
                setIsModelSelectorOpen(false);
                setSelectedModelForSelector(null);
              }}
            >
              <motion.div 
                className="bg-card border rounded-xl shadow-lg w-full max-w-2xl max-h-[80vh] overflow-hidden"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="p-4 border-b flex items-center justify-between">
                  <h3 className="text-lg font-display font-bold">
                    Select {selectedModelForSelector === 1 ? "First" : "Second"} Model
                  </h3>
                  <button 
                    className="text-muted-foreground hover:text-foreground"
                    onClick={() => {
                      setIsModelSelectorOpen(false);
                      setSelectedModelForSelector(null);
                    }}
                  >
                    <XCircle className="h-5 w-5" />
                  </button>
                </div>
                
                <div className="p-4 max-h-[calc(80vh-64px)] overflow-y-auto">
                  {/* Remove the See All Challenges button from here */}
                  
                  {Object.entries(modelsByProvider).map(([provider, providerModels]) => (
                    <div key={provider} className="mb-6 last:mb-0">
                      <h4 className="text-sm text-muted-foreground uppercase tracking-wider mb-2">
                        {provider.charAt(0).toUpperCase() + provider.slice(1)}
                      </h4>
                      
                      <div className="space-y-2">
                        {providerModels.map(model => (
                          <button
                            key={model.id}
                            className={`
                              w-full flex items-center gap-3 p-3 rounded-lg transition-colors
                              ${
                                (selectedModelForSelector === 1 && selectedModels[1] === model.id) || 
                                (selectedModelForSelector === 2 && selectedModels[0] === model.id)
                                  ? 'opacity-50 cursor-not-allowed bg-muted/30'
                                  : 'hover:bg-primary/5 cursor-pointer'
                              }
                            `}
                            onClick={() => {
                              if ((selectedModelForSelector === 1 && selectedModels[1] !== model.id) || 
                                  (selectedModelForSelector === 2 && selectedModels[0] !== model.id)) {
                                handleModelSelect(model.id);
                              }
                            }}
                            disabled={
                              (selectedModelForSelector === 1 && selectedModels[1] === model.id) || 
                              (selectedModelForSelector === 2 && selectedModels[0] === model.id)
                            }
                          >
                            <div className="w-8 h-8 min-w-[2rem] rounded-full bg-background flex-shrink-0 flex items-center justify-center overflow-hidden p-1 border border-border/30">
                              {model.logoUrl ? (
                                <img 
                                  src={model.logoUrl} 
                                  alt={model.name} 
                                  className="h-full w-full object-contain"
                                  loading="eager"
                                />
                              ) : (
                                <Box className="h-5 w-5 text-muted-foreground" />
                              )}
                            </div>
                            
                            <div className="flex-1 text-left">
                              <p className="font-medium">{model.name}</p>
                              <p className="text-xs text-muted-foreground truncate">{model.description.substring(0, 60)}...</p>
                            </div>
                            
                            {((selectedModelForSelector === 1 && selectedModels[0] === model.id) || 
                             (selectedModelForSelector === 2 && selectedModels[1] === model.id)) && (
                              <div className="text-primary">
                                <Check className="h-5 w-5" />
                              </div>
                            )}
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Layout>
  );
} 