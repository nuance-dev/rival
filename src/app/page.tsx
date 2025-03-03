"use client";

import React, { useState, useEffect, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { categories } from "@/lib/data";
import { NewOutputCard } from "@/components/canvas/NewOutputCard";
import { X, ArrowDown } from "lucide-react";
import { useExpansion } from "@/components/canvas/ExpansionProvider";
import { ModelOutput, ModelResponse } from "@/types/models";
import { useSafeAnimation } from "@/hooks/useSafeAnimation";
import { modelResponses } from "@/lib/model-responses";
import { SortingControl, SortingOption } from "@/components/ui/SortingControl";
import { sortOutputs } from "@/lib/utils";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import VirtualizedMasonryGrid from "@/components/canvas/VirtualizedMasonryGrid";

// Helper function to convert ModelResponse to ModelOutput format
const convertModelResponseToOutput = (response: ModelResponse): ModelOutput & { challengeId?: string } => {
  // Map content types to appropriate categories for filtering
  const typeToCategory: Record<string, string[]> = {
    'website': ['web-design'],
    'html': ['web-design'],
    'code': ['code-generation'],
    'image': ['image-generation'],
    'svg': ['image-generation', 'reasoning'],
    'text': ['text-analysis', 'creative-writing', 'reasoning']
  };

  // Try to determine more specific categories based on response description
  let inferredCategories = typeToCategory[response.type.toLowerCase()] || [];
  
  // Add additional category inference based on description/title
  const lowerDescription = (response.description || '').toLowerCase();
  const lowerTitle = (response.title || '').toLowerCase();
  
  if (lowerDescription.includes('reason') || lowerTitle.includes('logic') || 
      lowerTitle.includes('puzzle') || lowerTitle.includes('complexity')) {
    inferredCategories.push('reasoning');
  }
  
  if (lowerDescription.includes('creative') || lowerTitle.includes('poetry') || 
      lowerTitle.includes('story') || lowerTitle.includes('character')) {
    inferredCategories.push('creative-writing');
  }
  
  if (lowerDescription.includes('analysis') || lowerTitle.includes('analysis') || 
      lowerTitle.includes('summary')) {
    inferredCategories.push('text-analysis');
  }
  
  // Remove duplicates
  inferredCategories = [...new Set(inferredCategories)];
  
  // Enhanced debug logging for challenge ID extraction
  console.debug(`[Processing Response] ${response.id} - ${response.title}`);

  // Improved challenge ID extraction with multiple strategies
  let challengeId = '';
  
  // Strategy 1: Use explicit challengeId if available (highest priority)
  if (response.challengeId) {
    challengeId = response.challengeId;
  } 
  // Strategy 2: Extract from ID using common patterns
  else if (response.id.includes('-')) {
    // If the ID starts with the model ID (common format)
    if (response.id.startsWith(response.modelId)) {
      challengeId = response.id.substring(response.modelId.length + 1);
    } 
    // Extract everything after the first hyphen as a fallback
    else {
      challengeId = response.id.split('-').slice(1).join('-');
    }
    
    // Clean up potential leading/trailing hyphens
    challengeId = challengeId.replace(/^-+|-+$/g, '');
  }
  // Strategy 3: Use the prompt ID if available (for certain data sources)
  else if (response.prompt && response.prompt.length > 0 && response.prompt.includes('challenge-')) {
    // Try to extract challenge ID from the prompt text if it contains a reference
    const challengeMatch = response.prompt.match(/challenge-([a-zA-Z0-9-]+)/);
    if (challengeMatch && challengeMatch[1]) {
      challengeId = challengeMatch[1];
    }
  }
  // Strategy 4: Fallback to normalized title as ID if all else fails
  else if (response.title) {
    // Convert title to kebab-case to create a pseudo-challenge ID
    // Only do this if we are desperate - used for grouping similar responses
    challengeId = response.title.toLowerCase()
      .replace(/[^\w\s-]/g, '') // Remove special chars
      .replace(/\s+/g, '-')     // Replace spaces with hyphens
      .substring(0, 30);        // Keep it reasonable length
  }
  
  // Enhanced debug logging for challenge extraction
  console.debug(`[ChallengeID Extraction] Response ID: ${response.id}`, {
    originalChallengeId: response.challengeId,
    modelId: response.modelId,
    extractedChallengeId: challengeId,
    idStartsWithModelId: response.id.startsWith(response.modelId),
    idContainsHyphen: response.id.includes('-')
  });
  
  // Keep original ethics debug info
  if (response.title.toLowerCase().includes('ethics') || response.description?.toLowerCase().includes('ethics')) {
    console.log(`[ChallengeID Debug] Title: ${response.title}`);
    console.log(`[ChallengeID Debug] ID: ${response.id}, ModelID: ${response.modelId}`);
    console.log(`[ChallengeID Debug] Extracted challengeId: ${challengeId}`);
  }
  
  return {
    id: response.id,
    promptId: '', // We don't have this in ModelResponse
    modelId: response.modelId,
    type: response.type,
    content: response.content,
    modelName: response.title.split(' by ')[1] || '', // Extract model name from title if available
    title: response.title.split(' by ')[0] || response.title, // Extract challenge name from title
    description: response.description,
    categories: inferredCategories, // Using mapped categories
    date: response.responseDate,
    metadata: response.metadata,
    prompt: response.prompt, // Pass the prompt to enable the View Challenge Prompt feature
    funFact: response.funFact, // Ensure we pass the funFact as well
    challengeId: challengeId // Add the challengeId to enable challenge navigation
  };
};

// Skeleton placeholder for loading states
const SkeletonCard = ({ index }: { index: number }) => {
  const delay = index * 0.05;
  
  return (
    <motion.div 
      className="border border-border/30 bg-card/10 rounded-xl h-[350px] overflow-hidden relative"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay, type: "spring", stiffness: 260, damping: 20 }}
    >
      <div className="w-full h-full flex items-center justify-center">
        {/* Just show a simple icon to indicate content type instead of shimmer elements */}
        <div className="text-muted-foreground/30">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect>
            <circle cx="9" cy="9" r="2"></circle>
            <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path>
          </svg>
        </div>
      </div>
    </motion.div>
  );
};

export default function Home() {
  // Add sorting state with 'chaotic' (random) as the default
  const [sortOption, setSortOption] = useState<SortingOption>('chaotic');
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [showSkeletons, setShowSkeletons] = useState(true);
  const [loadFailed, setLoadFailed] = useState(false);
  // Add a random key that changes on page refresh for true random shuffling
  const [randomKey, setRandomKey] = useState(() => Math.random().toString(36).substring(2, 10));
  
  const { expandedId, manualCleanupAllCards } = useExpansion();
  const { isVisible: heroVisible } = useSafeAnimation("home-hero");
  const itemsPerPage = 24; // Number of items to load each time
  
  // Generate a new random key when the component mounts (on page refresh)
  useEffect(() => {
    // Only update the key if we're using chaotic mode
    if (sortOption === 'chaotic') {
      setRandomKey(Math.random().toString(36).substring(2, 10));
    }
  }, [sortOption]);
  
  // Re-shuffle when manually switching to chaotic mode
  useEffect(() => {
    if (sortOption === 'chaotic') {
      setRandomKey(Math.random().toString(36).substring(2, 10));
    }
  }, [sortOption]);
  
  // Convert model responses to outputs - only run once
  const allModelOutputs = useMemo(() => {
    try {
      if (!modelResponses || !Array.isArray(modelResponses)) {
        console.error('[Data Error] Model responses is not an array:', modelResponses);
        return [];
      }
      
      const outputs = modelResponses.map(convertModelResponseToOutput);
      return outputs;
    } catch (error) {
      console.error('[Data Error] Failed to process model responses:', error);
      setLoadFailed(true);
      return [];
    }
  }, []);
  
  // Apply sorting based on the selected sort option
  const chaoticSortKey = sortOption === 'chaotic' ? randomKey : undefined;
  const sortedModelOutputs = useMemo(() => {
    return sortOutputs(allModelOutputs, sortOption);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allModelOutputs, sortOption, chaoticSortKey]);
  
  // Filter outputs based on active category
  const filteredModelOutputs = useMemo(() => {
    if (activeCategory) {
      return sortedModelOutputs.filter(output => 
        output.categories?.includes(activeCategory)
      );
    }
    return sortedModelOutputs;
  }, [activeCategory, sortedModelOutputs]);

  // Keep track of loaded items for pagination with virtualization
  const [loadedItems, setLoadedItems] = useState<ModelOutput[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  // Initialize with first batch on filter changes
  useEffect(() => {
    // Clean up any expanded cards before filter changes
    manualCleanupAllCards();
    
    // Reset everything when filters change
    setLoadedItems([]);
    setCurrentPage(1);
    setHasMore(true);
    setLoading(true);
    setShowSkeletons(true);
    setLoadFailed(false);
    
    // Simple timeout to show skeleton loaders briefly
    const timer = setTimeout(() => {
      try {
        // Load first page of items
        const initialItems = filteredModelOutputs.slice(0, itemsPerPage);
        setLoadedItems(initialItems);
        setCurrentPage(1);
        setHasMore(filteredModelOutputs.length > itemsPerPage);
        
        // Hide skeletons after items are loaded
        setShowSkeletons(false);
        setLoading(false);
      } catch (error) {
        console.error('Failed to load initial items:', error);
        setLoadFailed(true);
        setShowSkeletons(false);
        setLoading(false);
      }
    }, 800); // Show skeletons for better UX
    
    return () => clearTimeout(timer);
  }, [filteredModelOutputs, itemsPerPage, manualCleanupAllCards]);

  // Handle load more for infinite scroll
  const handleLoadMore = useCallback(() => {
    if (loading || !hasMore) {
      console.debug('[HomePage] Skipping load more - already loading or no more items');
      return;
    }
    
    console.log('Loading more items');
    setLoading(true);
    
    // Simple timeout to prevent UI blocking
    setTimeout(() => {
      try {
        const nextPage = currentPage + 1;
        const startIndex = currentPage * itemsPerPage;
        const endIndex = nextPage * itemsPerPage;
        const newItems = filteredModelOutputs.slice(startIndex, endIndex);
        
        if (newItems.length > 0) {
          // Use a functional update to ensure we're working with the latest state
          setLoadedItems(prev => [...prev, ...newItems]);
          setCurrentPage(nextPage);
          setHasMore(filteredModelOutputs.length > endIndex);
          
          console.debug(`[HomePage] Loaded ${newItems.length} more items, total now: ${loadedItems.length + newItems.length}`);
        } else {
          setHasMore(false);
          console.debug('[HomePage] No more items to load');
        }
      } catch (error) {
        console.error('Failed to load more items:', error);
        setHasMore(false);
      } finally {
        setLoading(false);
      }
    }, 300);
  }, [currentPage, filteredModelOutputs, hasMore, itemsPerPage, loading, loadedItems.length]);

  // Card renderer for virtualized grid
  const renderCard = useCallback((output: ModelOutput) => {
    return (
      <NewOutputCard
        output={output}
        title={output.title}
        description={output.description || ""}
        category={output.categories?.[0] || "default"}
        disableAnimations={expandedId !== null}
        id={output.id || `output-${output.modelId}-${output.type}`}
      />
    );
  }, [expandedId]);

  // Update sorting option handler
  const handleSortChange = useCallback((newSortOption: SortingOption) => {
    // Clean up any expanded cards to prevent UI issues when sorting changes
    manualCleanupAllCards();
    setSortOption(newSortOption);
    // Reset to first page when sort changes
    setCurrentPage(1);
    setLoadedItems([]);
    setHasMore(true);
    setLoading(true);
    
    // When switching to chaotic, we'll generate a new random key in the useEffect
  }, [manualCleanupAllCards]);
  
  // Update category filter handler
  const handleCategoryChange = useCallback((categoryId: string | null) => {
    // Clean up any expanded cards to prevent UI issues when category changes
    manualCleanupAllCards();
    setActiveCategory(categoryId);
  }, [manualCleanupAllCards]);

  return (
    <Layout>
      <div className="w-full max-w-8xl mx-auto min-h-[100vh]">
        {/* Fixed container for expanded cards - always visible above all content */}
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none"
          id="expanded-card-container"
          style={{ display: expandedId ? 'flex' : 'none' }}
        >
          {/* This container will be populated by the expanded card from NewOutputCard */}
        </div>
        
        {/* Hero Section */}
        <motion.section 
          className="relative overflow-hidden bg-background pt-10 pb-4 md:pt-16 md:pb-8 flex items-center z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: heroVisible ? 1 : 0 }}
          transition={{ duration: 0.4 }}
        >
          {/* Background pattern */}
          <div className="absolute inset-0 -z-10 pattern-background opacity-70"></div>
          
          {/* Subtle gradient background */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: heroVisible ? 0.6 : 0 }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0 -z-10 retro-bg-gradient"
          ></motion.div>
          
          <div className="container relative z-10">
            <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-10">
              {/* Left Column - Title */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-2xl"
              >
                <motion.div 
                  className="flex items-center gap-3 mb-4"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="h-[2px] w-8 bg-[hsl(var(--retro-primary))]"></div>
                  <span className="text-sm text-muted-foreground">AI Challenges</span>
                </motion.div>
                
                <motion.h1 
                  className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-4"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  Explore the <span className="retro-gradient font-normal">boundaries</span> of current AI models
                </motion.h1>
              </motion.div>
              
              {/* Right Column - Interactive Element */}
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="relative w-full lg:w-auto"
              >
                <div className="flex items-center gap-4">
                  <motion.button 
                    onClick={() => {
                      const contentSection = document.getElementById('content-grid');
                      contentSection?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    whileTap={{ scale: 0.98 }}
                    className="h-10 px-5 rounded-md text-primary-foreground bg-primary hover:bg-primary/90 transition-all"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4 }}
                  >
                    <span className="flex items-center gap-2">
                      Explore results <ArrowDown className="h-4 w-4" />
                    </span>
                  </motion.button>
                  
                  <motion.a
                    href="/challenges"
                    whileTap={{ scale: 0.98 }}
                    className="h-10 px-5 flex items-center rounded-md bg-card border border-border hover:border-primary/40 hover:bg-primary/5 transition-all"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                  >
                    <span className="flex items-center gap-2 text-sm">
                      Try AI Challenges
                    </span>
                  </motion.a>
                  
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4 }}
                    className="text-sm text-muted-foreground hidden md:block"
                  >
                    <span className="flex items-center gap-2">
                      <span className="inline-block h-1 w-1 rounded-full bg-[hsl(var(--retro-primary))]"></span>
                      {filteredModelOutputs.length} responses available
                    </span>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>
        
        {/* Floating Filter Controls - Non-sticky on mobile */}
        <div 
          className={`relative md:sticky md:top-[56px] z-20 py-2 backdrop-blur-lg bg-background/80 border-y transition-all duration-300 -mt-4 ${expandedId ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
        >
          <div className="container">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-y-3">
              {/* Category Filter Buttons */}
              <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1 md:py-0 w-full md:w-auto pb-2 md:pb-0">
                <button
                  onClick={() => handleCategoryChange(null)}
                  className={`h-8 px-4 rounded-full text-sm whitespace-nowrap transition-colors hover-lift ${!activeCategory ? 'bg-primary text-primary-foreground shimmer' : 'bg-muted/50 hover:bg-muted'}`}
                >
                  All
                </button>
                
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => handleCategoryChange(category.id === activeCategory ? null : category.id)}
                    className={`h-8 px-4 rounded-full text-sm whitespace-nowrap transition-colors hover-lift ${category.id === activeCategory ? 'bg-primary text-primary-foreground shimmer' : 'bg-muted/50 hover:bg-muted'}`}
                  >
                    {category.name}
                  </button>
                ))}
                
                {activeCategory && (
                  <button
                    className="h-8 ml-2 px-3 rounded-full bg-muted/80 text-sm flex items-center gap-1 hover:bg-muted transition-colors hover-lift"
                    onClick={() => handleCategoryChange(null)}
                  >
                    Clear <X className="h-3 w-3" />
                  </button>
                )}
              </div>
              
              {/* Sorting Controls */}
              <SortingControl 
                currentSort={sortOption} 
                onSortChange={handleSortChange}
                className="ml-0 md:ml-auto"
              />
            </div>
          </div>
        </div>
        
        {/* Main Content Grid */}
        <section 
          id="content-grid"
          className={cn(
            "relative bg-background pt-2 pb-16 md:pt-4 md:pb-24 overflow-hidden",
            // When a card is expanded, reduce opacity but keep content visible for context
            expandedId ? "opacity-60 transition-opacity duration-500" : "opacity-100"
          )}
          style={{
            // Allow interaction with the grid when no card is expanded
            pointerEvents: expandedId ? 'none' : 'auto',
            filter: expandedId ? 'blur(2px)' : 'none',
            transition: 'filter 0.5s ease, opacity 0.5s ease'
          }}
        >
          <div className="container">
            {/* Use AnimatePresence for smooth transitions */}
            <AnimatePresence mode="sync">
              {/* Skeletons while loading */}
              {showSkeletons && (
                <motion.div
                  key="skeletons"
                  initial={{ opacity: 1 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="w-full"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-5">
                    {Array.from({ length: itemsPerPage }).map((_, i) => (
                      <SkeletonCard key={`skeleton-${i}`} index={i} />
                    ))}
                  </div>
                </motion.div>
              )}
              
              {/* Main content with virtualized grid */}
              {!showSkeletons && !loadFailed && (
                <motion.div
                  key="content"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="w-full"
                >
                  {loadedItems.length > 0 ? (
                    <VirtualizedMasonryGrid
                      key={sortOption === 'chaotic' ? randomKey : sortOption}
                      items={loadedItems}
                      itemsPerPage={itemsPerPage}
                      renderItem={renderCard}
                      onLoadMore={handleLoadMore}
                      hasMore={hasMore}
                      loading={loading}
                    />
                  ) : (
                    <div className="flex flex-col items-center justify-center py-20">
                      <p className="text-muted-foreground text-center max-w-lg">
                        No responses found for this category. Try another category or reset filters.
                      </p>
                      <Button 
                        onClick={() => handleCategoryChange(null)} 
                        variant="outline" 
                        className="mt-4"
                      >
                        Show all responses
                      </Button>
                    </div>
                  )}
                </motion.div>
              )}
              
              {/* Error state */}
              {loadFailed && !showSkeletons && (
                <div className="flex flex-col items-center justify-center py-20">
                  <p className="text-destructive text-center max-w-lg">
                    There was an error loading the content. Please try refreshing the page.
                  </p>
                  <Button 
                    onClick={() => window.location.reload()} 
                    variant="destructive" 
                    className="mt-4"
                  >
                    Refresh Page
                  </Button>
                </div>
              )}
            </AnimatePresence>
          </div>
        </section>
      </div>
    </Layout>
  );
}
