"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useSafeAnimation } from "@/hooks/useSafeAnimation";
import { cn } from "@/lib/utils";
import SimpleImage from "@/components/ui/SimpleImage";
import { NewOutputCard } from "@/components/canvas/NewOutputCard";
import { ModelResponseCard } from "@/components/models/ModelResponseCard";
import { AIModel, ModelResponse } from "@/types/models";

// Dynamic grid layout with masonry effect for outputs
function MasonryGrid({ children, className }: { children: React.ReactNode, className?: string }) {
  // Split children into columns to create a true masonry effect
  const childrenArray = React.Children.toArray(children);
  const columnCount = {
    mobile: 1,
    tablet: 2,
    desktop: 3
  };
  
  // Create columns for desktop (lg)
  const desktopColumns: React.ReactNode[][] = Array.from({ length: columnCount.desktop }, () => []);
  
  // Distribute children to columns
  childrenArray.forEach((child, index) => {
    const columnIndex = index % columnCount.desktop;
    desktopColumns[columnIndex].push(child);
  });
  
  // Apply different top spacing for each column
  const columnOffsets = ['', 'lg:mt-16', 'lg:mt-32'];
  
  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ${className}`}>
      {desktopColumns.map((columnChildren, columnIndex) => (
        <div key={`column-${columnIndex}`} className={`flex flex-col gap-6 ${columnOffsets[columnIndex]}`}>
          {columnChildren.map((child, index) => (
            <div key={`item-${columnIndex}-${index}`}>
              {child}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      staggerChildren: 0.05,
      delayChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

interface ModelDetailClientProps {
  model: AIModel;
  modelResponses: ModelResponse[];
  latestResponses: ModelResponse[];
  relatedModels: AIModel[];
}

export function ModelDetailClient({
  model,
  modelResponses,
  latestResponses,
  relatedModels
}: ModelDetailClientProps) {
  // Use safe animation to prevent double triggering
  const { isVisible: headerVisible } = useSafeAnimation('model-detail-header');
  const { isVisible: responsesVisible } = useSafeAnimation('model-detail-responses');
  const { isVisible: outputsVisible } = useSafeAnimation('model-detail-outputs');
  const { isVisible: relatedVisible } = useSafeAnimation('model-detail-related');

  return (
    <>
      {/* Hero Section with Model Info */}
      <section className="relative py-20 overflow-hidden border-b">
        <div className="absolute inset-0 -z-10 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background" />
          {model.gradientColors && (
            <>
              <div className="absolute right-0 top-0 w-1/2 h-full rounded-full blur-3xl opacity-20"
                style={{ backgroundColor: model.gradientColors[0] }} />
              <div className="absolute left-0 bottom-0 w-1/2 h-full rounded-full blur-3xl opacity-20"
                style={{ backgroundColor: model.gradientColors[1] }} />
            </>
          )}
        </div>
        
        <div className="container">
          <motion.div 
            className="flex flex-col md:flex-row gap-6 items-start"
            initial={{ opacity: 0, y: 20 }}
            animate={headerVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            {/* Model Logo */}
            <motion.div 
              className={cn(
                "w-24 h-24 rounded-2xl flex items-center justify-center shrink-0",
                "bg-gradient-to-br shadow-lg from-primary/10 to-primary/30"
              )}
              style={model.gradientColors ? {
                backgroundImage: `linear-gradient(to bottom right, ${model.gradientColors[0]}, ${model.gradientColors[1]})`,
              } : undefined}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={headerVisible ? { scale: 1, opacity: 1 } : { scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {model.logoUrl ? (
                <SimpleImage 
                  src={model.logoUrl} 
                  alt={model.name} 
                  width={56}
                  height={56}
                  className="w-14 h-14" 
                  objectFit="contain"
                />
              ) : (
                <span className="text-2xl font-bold">{model.name.charAt(0)}</span>
              )}
            </motion.div>
            
            {/* Model Info */}
            <div>
              <motion.h1 
                className="text-4xl md:text-5xl font-display font-bold mb-3"
                initial={{ opacity: 0, y: 10 }}
                animate={headerVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {model.name}
              </motion.h1>
              
              <motion.p 
                className="text-muted-foreground mb-4 max-w-3xl text-lg"
                initial={{ opacity: 0, y: 10 }}
                animate={headerVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                {model.description}
              </motion.p>
              
              <motion.div 
                className="flex flex-wrap gap-2 mb-6"
                initial={{ opacity: 0, y: 10 }}
                animate={headerVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                {model.capabilities.map((capability: string, index: number) => (
                  <motion.span 
                    key={capability}
                    className="px-3 py-1 bg-muted/50 rounded-full text-xs"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={headerVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3, delay: 0.5 + (index * 0.05) }}
                  >
                    {capability.split('-').map((word: string) => 
                      word.charAt(0).toUpperCase() + word.slice(1)
                    ).join(' ')}
                  </motion.span>
                ))}
              </motion.div>
              
              <motion.div 
                className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm"
                initial={{ opacity: 0, y: 10 }}
                animate={headerVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <div className="bg-card/50 rounded-lg p-3 border border-border/40">
                  <div className="text-muted-foreground mb-1">Provider</div>
                  <div className="font-medium">
                    {model.provider.charAt(0).toUpperCase() + model.provider.slice(1)}
                  </div>
                </div>
                <div className="bg-card/50 rounded-lg p-3 border border-border/40">
                  <div className="text-muted-foreground mb-1">Release Date</div>
                  <div className="font-medium">{model.releaseDate}</div>
                </div>
                <div className="bg-card/50 rounded-lg p-3 border border-border/40">
                  <div className="text-muted-foreground mb-1">Size</div>
                  <div className="font-medium">{model.size.toUpperCase()}</div>
                </div>
                {model.parametersCount && (
                  <div className="bg-card/50 rounded-lg p-3 border border-border/40">
                    <div className="text-muted-foreground mb-1">Parameters</div>
                    <div className="font-medium">{model.parametersCount}</div>
                  </div>
                )}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Latest Responses Section */}
      {latestResponses.length > 0 && (
        <section className="py-16">
          <div className="container">
            <motion.div 
              className="flex items-center justify-between mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={responsesVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-display">Latest Responses</h2>
              {modelResponses.length > 3 && (
                <Link 
                  href={`/models/${model.id}/responses`} 
                  className="group flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                >
                  <span>View all responses</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              )}
            </motion.div>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              variants={containerVariants}
              initial="hidden"
              animate={responsesVisible ? "visible" : "hidden"}
            >
              {latestResponses.map((response) => (
                <motion.div key={response.id} variants={itemVariants}>
                  <ModelResponseCard 
                    response={response}
                    modelId={model.id}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      )}
      
      {/* Example Outputs Section */}
      <section className="py-16 bg-muted/20">
        <div className="container">
          <motion.h2 
            className="text-3xl font-display mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={outputsVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            All Model Responses
          </motion.h2>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={outputsVisible ? "visible" : "hidden"}
          >
            {modelResponses.length > 0 ? (
              <MasonryGrid>
                {modelResponses.map((response) => (
                  <NewOutputCard 
                    key={response.id}
                    output={{
                      ...response,
                      modelName: model.name,
                      challengeId: response.challengeId,
                    }}
                    id={response.id}
                    title={response.title}
                    description={response.description || ""}
                    category={model.capabilities[0] || "default"}
                  />
                ))}
              </MasonryGrid>
            ) : (
              <div className="text-center py-20 bg-muted/30 rounded-xl">
                <p className="text-muted-foreground">No responses available for this model yet.</p>
              </div>
            )}
          </motion.div>
        </div>
      </section>
      
      {/* Related Models Section */}
      {relatedModels.length > 0 && (
        <section className="py-16">
          <div className="container">
            <motion.h2 
              className="text-3xl font-display mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={relatedVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
            >
              More from {model.provider.charAt(0).toUpperCase() + model.provider.slice(1)}
            </motion.h2>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
              variants={containerVariants}
              initial="hidden"
              animate={relatedVisible ? "visible" : "hidden"}
            >
              {relatedModels.map((relatedModel) => (
                <motion.div key={relatedModel.id} variants={itemVariants}>
                  <Link
                    href={`/models/${relatedModel.id}`}
                    className="group flex flex-col h-full bg-card border border-border rounded-xl p-6 hover:shadow-md transition-all"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      {relatedModel.logoUrl ? (
                        <div 
                          className="h-12 w-12 rounded-lg flex items-center justify-center shrink-0"
                          style={relatedModel.gradientColors ? {
                            backgroundImage: `linear-gradient(to bottom right, ${relatedModel.gradientColors[0]}20, ${relatedModel.gradientColors[1]}30)`,
                          } : undefined}
                        >
                          <SimpleImage
                            src={relatedModel.logoUrl}
                            alt={`${relatedModel.name} logo`}
                            width={32}
                            height={32}
                            className="h-8 w-8 object-contain"
                            objectFit="contain"
                          />
                        </div>
                      ) : (
                        <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                          <span className="text-lg font-bold">{relatedModel.name.charAt(0)}</span>
                        </div>
                      )}
                      
                      <h3 className="text-xl font-medium group-hover:text-primary transition-colors">
                        {relatedModel.name}
                      </h3>
                    </div>
                    
                    <p className="text-muted-foreground text-sm flex-grow">{relatedModel.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mt-4">
                      {relatedModel.capabilities.slice(0, 3).map((capability: string) => (
                        <span 
                          key={capability}
                          className="px-2 py-0.5 bg-muted/50 rounded-full text-xs"
                        >
                          {capability.split('-').map((word: string) => 
                            word.charAt(0).toUpperCase() + word.slice(1)
                          ).join(' ')}
                        </span>
                      ))}
                      {relatedModel.capabilities.length > 3 && (
                        <span className="px-2 py-0.5 bg-muted/50 rounded-full text-xs">
                          +{relatedModel.capabilities.length - 3} more
                        </span>
                      )}
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      )}
    </>
  );
} 