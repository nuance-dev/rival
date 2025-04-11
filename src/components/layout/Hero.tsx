"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ArrowDown, Info } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useSafeAnimation } from "@/hooks/useSafeAnimation";

interface HeroProps {
  className?: string;
}

export function Hero({ className }: HeroProps) {
  // Use safe animation to control appearance and prevent flash
  const { isVisible: elementVisible } = useSafeAnimation("hero-elements");

  return (
    <section
      className={cn(
        "relative overflow-hidden bg-background pb-16 pt-24 md:pb-24 md:pt-32 lg:pb-32 lg:pt-40",
        className
      )}
    >
      {/* Background pattern - add pattern-background class */}
      <div className="absolute inset-0 -z-10 pattern-background" />
      
      {/* Background gradient effects - use motion.div with initial opacity 0 */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: elementVisible ? 0.5 : 0 }}
        transition={{ duration: 0.8 }}
        className="absolute left-1/2 top-0 -z-10 h-[1000px] w-[1000px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-primary/20 via-secondary/20 to-accent/20 blur-3xl" 
      />
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: elementVisible ? 0.3 : 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="absolute right-0 top-1/3 -z-10 h-[500px] w-[500px] rounded-full bg-gradient-to-tl from-primary/10 via-secondary/10 to-accent/10 blur-3xl" 
      />
      
      <div className="container relative z-10">
        <div className="mx-auto max-w-[800px] text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: elementVisible ? 1 : 0, y: elementVisible ? 0 : 20 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-display md:text-5xl lg:text-6xl text-foreground mb-6">
              Experience the power of{" "}
              {/* Apply motion to the gradient text span */}
              <motion.span 
                className="text-gradient"
                initial={{ opacity: 0 }}
                animate={{ opacity: elementVisible ? 1 : 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                next-gen AI
              </motion.span> models
            </h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: elementVisible ? 1 : 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="font-display text-xl md:text-2xl text-primary mb-4"
            >
              The best tests are vibe tests
            </motion.p>
            
            <p className="mx-auto max-w-[600px] text-muted-foreground text-lg mb-8">
              Explore and compare the vibes of today&apos;s most advanced AI models in an interactive showcase. See how they respond to the same prompts and discover their unique personalities.
            </p>
          </motion.div>
          
          {/* Mobile-specific how-to guide */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: elementVisible ? 1 : 0, y: elementVisible ? 0 : 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:hidden mb-6 bg-muted/30 rounded-lg p-4 border border-border/50"
          >
            <div className="flex items-center justify-center gap-2 mb-3">
              <Info className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">New to RIVAL?</span>
            </div>
            <ul className="text-left text-sm text-muted-foreground space-y-2">
              <li className="flex items-start gap-2">
                <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-medium text-primary">1</span>
                <span>Browse AI models via the <strong>Models</strong> tab</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-medium text-primary">2</span>
                <span>Compare how models handle the same challenges in <strong>Compare</strong></span>
              </li>
              <li className="flex items-start gap-2">
                <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-medium text-primary">3</span>
                <span>Tap on any card to view the full content</span>
              </li>
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: elementVisible ? 1 : 0, y: elementVisible ? 0 : 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row justify-center gap-4 mb-8"
          >
            <Link
              href="/models"
              className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            >
              Explore Models
            </Link>
            <Link
              href="/compare"
              className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            >
              Compare Vibes <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </motion.div>
          
          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: elementVisible ? 1 : 0, y: elementVisible ? 0 : 10 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-6 flex flex-col items-center justify-center"
          >
            <span className="text-xs text-muted-foreground mb-2">Scroll to explore models</span>
            <ArrowDown className="h-4 w-4 text-muted-foreground animate-bounce" />
          </motion.div>
          
          {/* Model Cards Preview (subtle hint of what's below) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: elementVisible ? 1 : 0, y: elementVisible ? 0 : 40 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mx-auto max-w-[800px] h-[200px] relative"
          >
            <div className="absolute inset-x-0 top-0 grid grid-cols-3 gap-4 opacity-70">
              <div className="h-32 rounded-lg bg-card border shadow-sm transform -rotate-6 scale-90"></div>
              <div className="h-32 rounded-lg bg-card border shadow-sm transform translate-y-4"></div>
              <div className="h-32 rounded-lg bg-card border shadow-sm transform rotate-6 scale-90"></div>
            </div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-20 bg-gradient-to-t from-background to-transparent"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 