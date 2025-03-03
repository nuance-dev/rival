"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Filter, Box } from 'lucide-react';
import { PromptChallenge } from '@/lib/prompt-challenges';

type ChallengeSelectorProps = {
  isLoading: boolean;
  availableChallenges: PromptChallenge[];
  activeCategory: string | null;
  searchQuery: string;
  challengesByCategory: Record<string, PromptChallenge[]>;
  onCategorySelect: (category: string | null) => void;
  onSearchChange: (query: string) => void;
  onChallengeSelect: (challengeId: string) => void;
  selectedChallenge: string | null;
  onViewAllChallenges: () => void;
};

export function ChallengeSelector({
  isLoading,
  availableChallenges,
  activeCategory,
  searchQuery,
  challengesByCategory,
  onCategorySelect,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onSearchChange,
  onChallengeSelect,
  selectedChallenge,
  onViewAllChallenges
}: ChallengeSelectorProps) {
  // Filter available challenges by category and search query
  const filteredChallenges = React.useMemo(() => {
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
    hidden: { opacity: 0, y: 10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 }
    }
  };

  if (isLoading) {
    return (
      <div className="p-8 rounded-xl bg-muted/10 border text-center">
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
      </div>
    );
  }

  if (availableChallenges.length === 0) {
    return (
      <div className="p-8 rounded-xl bg-muted/10 border text-center">
        <p className="text-xl font-display mb-2">No Common Challenges Found</p>
        <p className="text-muted-foreground mb-4">
          The selected models don&apos;t have common challenges to compare.
          Try selecting different models.
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="flex flex-wrap items-center justify-between gap-y-4 mb-6">
        <h2 className="text-xl font-display font-bold">Select a Challenge</h2>
        
        {/* Standardized button name */}
        <motion.button
          onClick={onViewAllChallenges}
          className="inline-flex items-center gap-1.5 px-4 py-2 text-sm bg-primary/10 text-primary 
                    hover:bg-primary/15 rounded-full transition-colors font-medium whitespace-nowrap"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <Box className="h-4 w-4" />
          <span>Compare All Challenges</span>
        </motion.button>
      </div>
      
      <div className="mb-8 flex flex-wrap gap-4 items-center">
        {/* Category filters */}
        <button 
          className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-medium ${
            activeCategory === null ? "bg-primary/10 text-primary" : "bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground"
          } transition-colors`}
          onClick={() => onCategorySelect(null)}
        >
          All Challenges
        </button>
        
        {Object.keys(challengesByCategory).map((category) => (
          <button
            key={category}
            className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-sm font-medium ${
              activeCategory === category ? "bg-primary/10 text-primary" : "bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground"
            } transition-colors`}
            onClick={() => onCategorySelect(category)}
          >
            <Filter className="h-3.5 w-3.5" />
            {category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
          </button>
        ))}
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
            onClick={() => onChallengeSelect(challenge.id)}
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
  );
}