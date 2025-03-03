"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Zap, Brain, Lightbulb, Code, Palette, Filter, Globe, Image as ImageIcon, FileText, Brush } from "lucide-react";
import { promptChallenges } from "@/lib/prompt-challenges";
import { AIModelCapability } from "@/types/models";
import { cn } from "@/lib/utils";
import { Layout } from "@/components/layout/Layout";

// Map challenge categories to icons
const categoryIcons: Record<AIModelCapability, React.ReactNode> = {
  "conversation": <Palette className="h-4 w-4" />,
  "web-design": <Code className="h-4 w-4" />,
  "image-generation": <Palette className="h-4 w-4" />,
  "reasoning": <Brain className="h-4 w-4" />,
  "analysis": <Zap className="h-4 w-4" />,
  "summarization": <Lightbulb className="h-4 w-4" />,
  "code-generation": <Code className="h-4 w-4" />,
  "translation": <Lightbulb className="h-4 w-4" />,
  "3d-modeling": <Brush className="h-4 w-4" />,
  "financial-modeling": <Zap className="h-4 w-4" />
};

// Group challenges by category
const groupByCategory = () => {
  const grouped: Record<string, typeof promptChallenges> = {};
  
  promptChallenges.forEach(challenge => {
    if (!grouped[challenge.category]) {
      grouped[challenge.category] = [];
    }
    grouped[challenge.category].push(challenge);
  });
  
  return grouped;
};

// Group challenges by difficulty
const groupByDifficulty = () => {
  return {
    easy: promptChallenges.filter(c => c.difficulty === "easy"),
    medium: promptChallenges.filter(c => c.difficulty === "medium"),
    hard: promptChallenges.filter(c => c.difficulty === "hard")
  };
};

// Group challenges by output type
const groupByOutputType = () => {
  const types = ["text", "code", "website", "html", "image", "svg"];
  const grouped: Record<string, typeof promptChallenges> = {};
  
  types.forEach(type => {
    grouped[type] = promptChallenges.filter(c => c.expectedOutputType === type);
  });
  
  return grouped;
};

type FilterType = "category" | "difficulty" | "output";

// Output type icons and styles
const outputTypeIcons = {
  "text": <FileText className="h-5 w-5" />,
  "code": <Code className="h-5 w-5" />,
  "website": <Globe className="h-5 w-5" />,
  "html": <Code className="h-5 w-5" />,
  "image": <ImageIcon className="h-5 w-5" />,
  "svg": <Brush className="h-5 w-5" />
};

const outputTypeStyles = {
  "text": "bg-blue-500/10 text-blue-500",
  "code": "bg-purple-500/10 text-purple-500",
  "website": "bg-indigo-500/10 text-indigo-500",
  "html": "bg-teal-500/10 text-teal-500",
  "image": "bg-pink-500/10 text-pink-500",
  "svg": "bg-amber-500/10 text-amber-500"
};

export default function ChallengePage() {
  const [activeFilter, setActiveFilter] = useState<FilterType>("category");
  
  // Prepare data based on active filter
  const categorizedChallenges = groupByCategory();
  const difficultyChallenges = groupByDifficulty();
  const outputTypeChallenges = groupByOutputType();
  
  return (
    <Layout>
      <div className="w-full max-w-7xl mx-auto px-2 sm:px-4 md:px-6 pb-16">
        {/* Hero Section */}
        <section className="pt-8 md:pt-12 pb-6 md:pb-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-light mb-4 md:mb-6">
              AI <span className="retro-gradient font-normal">Challenge</span> Gallery
            </h1>
            <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto mb-6 md:mb-8">
              Explore how different AI models respond to the same challenging prompts. Filter by category, difficulty, or output type.
            </p>
          </div>
        </section>
        
        {/* Filter Controls */}
        <div className="flex flex-wrap gap-4 mb-8 justify-center">
          <motion.div 
            className={cn(
              "inline-flex items-center rounded-full px-4 py-1.5 text-sm font-medium cursor-pointer transition-colors",
              activeFilter === "category" ? "bg-primary/10 text-primary" : "bg-muted/50 text-muted-foreground hover:bg-primary/10 hover:text-primary"
            )}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            onClick={() => setActiveFilter("category")}
          >
            By Category
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.3 }}
            className={cn(
              "inline-flex items-center rounded-full px-4 py-1.5 text-sm font-medium cursor-pointer transition-colors",
              activeFilter === "difficulty" ? "bg-primary/10 text-primary" : "bg-muted/50 text-muted-foreground hover:bg-primary/10 hover:text-primary"
            )}
            onClick={() => setActiveFilter("difficulty")}
          >
            By Difficulty
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.4 }}
            className={cn(
              "inline-flex items-center rounded-full px-4 py-1.5 text-sm font-medium cursor-pointer transition-colors",
              activeFilter === "output" ? "bg-primary/10 text-primary" : "bg-muted/50 text-muted-foreground hover:bg-primary/10 hover:text-primary"
            )}
            onClick={() => setActiveFilter("output")}
          >
            By Output Type
          </motion.div>
        </div>
        
        {/* Challenge Categories */}
        {activeFilter === "category" && (
          <>
            {Object.entries(categorizedChallenges).map(([category, challenges], index) => (
              <section key={category} className="mb-16">
                <motion.div 
                  className="flex items-center gap-2 mb-6"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
                >
                  <div className="p-2 rounded-full bg-primary/10">
                    {categoryIcons[category as AIModelCapability] || <Brain className="h-5 w-5" />}
                  </div>
                  <h2 className="text-2xl font-display font-bold">
                    {category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')} Challenges
                  </h2>
                </motion.div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {challenges.map((challenge, i) => (
                    <ChallengeCard 
                      key={challenge.id}
                      challenge={challenge}
                      index={i}
                      delayIndex={index}
                    />
                  ))}
                </div>
              </section>
            ))}
          </>
        )}
        
        {/* Challenge by Difficulty */}
        {activeFilter === "difficulty" && (
          <>
            {Object.entries(difficultyChallenges).map(([difficulty, challenges], index) => (
              <section key={difficulty} className="mb-16">
                <motion.div 
                  className="flex items-center gap-2 mb-6"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
                >
                  <div className={cn(
                    "p-2 rounded-full", 
                    difficulty === "easy" ? "bg-green-500/10" : 
                    difficulty === "medium" ? "bg-amber-500/10" : 
                    "bg-red-500/10"
                  )}>
                    <Filter className="h-5 w-5" />
                  </div>
                  <h2 className="text-2xl font-display font-bold">
                    {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)} Difficulty
                  </h2>
                </motion.div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {challenges.map((challenge, i) => (
                    <ChallengeCard 
                      key={challenge.id}
                      challenge={challenge}
                      index={i}
                      delayIndex={index}
                    />
                  ))}
                </div>
              </section>
            ))}
          </>
        )}
        
        {/* Challenge by Output Type */}
        {activeFilter === "output" && (
          <>
            {Object.entries(outputTypeChallenges)
              .filter(([, outputChallenges]) => outputChallenges.length > 0)
              .map(([outputType, challenges], index) => (
                <section key={outputType} className="mb-16">
                  <motion.div 
                    className="flex items-center gap-2 mb-6"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
                  >
                    <div className={cn(
                      "p-2 rounded-full",
                      outputType === "text" ? "bg-blue-500/10 text-blue-500" :
                      outputType === "code" ? "bg-purple-500/10 text-purple-500" :
                      outputType === "website" ? "bg-indigo-500/10 text-indigo-500" :
                      outputType === "html" ? "bg-teal-500/10 text-teal-500" :
                      "bg-pink-500/10 text-pink-500"
                    )}>
                      {outputType === "text" ? <Lightbulb className="h-5 w-5" /> :
                       outputType === "code" || outputType === "html" ? <Code className="h-5 w-5" /> :
                       outputType === "website" ? <Globe className="h-5 w-5" /> :
                       <ImageIcon className="h-5 w-5" />}
                    </div>
                    <h2 className="text-2xl font-display font-bold">
                      {outputType.charAt(0).toUpperCase() + outputType.slice(1)} Outputs
                    </h2>
                  </motion.div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {challenges.map((challenge, i) => (
                      <ChallengeCard 
                        key={challenge.id}
                        challenge={challenge}
                        index={i}
                        delayIndex={index}
                      />
                    ))}
                  </div>
                </section>
              ))}
          </>
        )}
      </div>
    </Layout>
  );
}

interface ChallengeCardProps {
  challenge: typeof promptChallenges[0];
  index: number;
  delayIndex: number;
}

function ChallengeCard({ challenge, index, delayIndex }: ChallengeCardProps) {
  const [hasAnimated, setHasAnimated] = useState(false);
  
  // Add effect to track animation state
  useEffect(() => {
    // Set hasAnimated to true after the first render
    const timer = setTimeout(() => {
      setHasAnimated(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);
  
  // Map difficulty to color
  const difficultyColor = {
    easy: "bg-green-500/10 text-green-500",
    medium: "bg-amber-500/10 text-amber-500",
    hard: "bg-red-500/10 text-red-500"
  }[challenge.difficulty];
  
  // Use the shared outputTypeStyles
  const outputTypeColor = outputTypeStyles[challenge.expectedOutputType as keyof typeof outputTypeStyles];
  
  // Use the shared outputTypeIcons
  const OutputTypeIcon = outputTypeIcons[challenge.expectedOutputType as keyof typeof outputTypeIcons];
  
  return (
    <motion.div
      initial={hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: hasAnimated ? 0 : 0.2 + (index * 0.05) + (delayIndex * 0.1) }}
      className="bg-card border rounded-xl overflow-hidden hover:shadow-md transition-all duration-300"
    >
      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-3">
          <span className={cn("inline-flex px-2 py-0.5 rounded-full text-xs font-medium", difficultyColor)}>
            {challenge.difficulty.charAt(0).toUpperCase() + challenge.difficulty.slice(1)}
          </span>
          <span className={cn("inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium", outputTypeColor)}>
            {OutputTypeIcon}
            {challenge.expectedOutputType.charAt(0).toUpperCase() + challenge.expectedOutputType.slice(1)}
          </span>
        </div>
        
        <h3 className="font-display text-xl mb-2">{challenge.title}</h3>
        <p className="text-muted-foreground text-sm mb-4">{challenge.description}</p>
        
        <div className="bg-muted/30 rounded-lg p-3 mb-4">
          <p className="text-xs font-mono line-clamp-3">{challenge.prompt}</p>
        </div>
        
        <Link 
          href={`/challenges/${challenge.id}`}
          className="flex items-center text-sm text-primary hover:underline"
        >
          View Challenge <ArrowUpRight className="ml-1 h-3 w-3" />
        </Link>
      </div>
    </motion.div>
  );
} 