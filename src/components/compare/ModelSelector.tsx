"use client";

import React from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  ArrowRight,
  ChevronDown
} from 'lucide-react';
import { models } from '@/lib/data';
import { AIModel } from '@/types/models';
import { cn } from '@/lib/utils';

type ModelSelectorProps = {
  selectedModels: string[];
  onModelSelectorOpen: (position: 1 | 2) => void;
  onReset: () => void;
  getModelById: (id: string) => AIModel | undefined;
};

type ModelSelectorModalProps = {
  isOpen: boolean;
  selectorPosition: 1 | 2 | null;
  selectedModels: string[];
  onClose: () => void;
  onModelSelect: (modelId: string) => void;
  modelsByProvider: Record<string, typeof models>;
};

export function ModelSelector({ 
  selectedModels, 
  onModelSelectorOpen, 
  onReset,
  getModelById
}: ModelSelectorProps) {
  return (
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
                onClick={() => onModelSelectorOpen(1)}
              >
                <div className="flex items-center gap-3">
                  {getModelById(selectedModels[0])?.logoUrl && (
                    <div className="w-8 h-8 min-w-[2rem] rounded-full bg-card flex-shrink-0 flex items-center justify-center overflow-hidden p-1 border border-border/30">
                      <Image 
                        src={getModelById(selectedModels[0])?.logoUrl || '/placeholder.svg'} 
                        alt={getModelById(selectedModels[0])?.name || "Model logo"} 
                        className="h-full w-full object-contain"
                        width={32}
                        height={32}
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
              onClick={() => onModelSelectorOpen(1)}
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
                onClick={() => onModelSelectorOpen(2)}
              >
                <div className="flex items-center gap-3">
                  {getModelById(selectedModels[1])?.logoUrl && (
                    <div className="w-8 h-8 min-w-[2rem] rounded-full bg-card flex-shrink-0 flex items-center justify-center overflow-hidden p-1 border border-border/30">
                      <Image 
                        src={getModelById(selectedModels[1])?.logoUrl || '/placeholder.svg'} 
                        alt={getModelById(selectedModels[1])?.name || "Model logo"} 
                        className="h-full w-full object-contain"
                        width={32}
                        height={32}
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
              onClick={() => onModelSelectorOpen(2)}
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
            onClick={onReset}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
              <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path>
              <path d="M3 3v5h5"></path>
              <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"></path>
              <path d="M16 21h5v-5"></path>
            </svg>
            Reset
          </button>
        </div>
      )}
    </motion.div>
  );
}

export function ModelSelectorModal({
  isOpen,
  selectorPosition,
  selectedModels,
  onClose,
  onModelSelect,
  modelsByProvider
}: ModelSelectorModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
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
                Select {selectorPosition === 1 ? "First" : "Second"} Model
              </h3>
              <button 
                className="text-muted-foreground hover:text-foreground"
                onClick={onClose}
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            
            <div className="p-4 max-h-[calc(80vh-64px)] overflow-y-auto">
              {Object.entries(modelsByProvider).map(([provider, providerModels]) => (
                <div key={provider} className="mb-6 last:mb-0">
                  <h4 className="text-sm text-muted-foreground uppercase tracking-wider mb-2">
                    {provider.charAt(0).toUpperCase() + provider.slice(1)}
                  </h4>
                  
                  <div className="space-y-2">
                    {providerModels.map(model => {
                      const isSelected = model.id === selectedModels[0] || model.id === selectedModels[1];
                      const isDisabled = (selectedModels[0] && selectedModels[1] && !isSelected) || (model.id === selectedModels[0] && selectedModels[1] === null);
                      
                      const mainBenchmark = model.benchmarks ? 
                        Object.entries(model.benchmarks).find(([name]) => 
                          name === "MMLU" || name === "GPQA" || name === "MATH"
                        ) : null;
                      
                      return (
                        <button
                          key={model.id}
                          className={cn(
                            "w-full flex items-center gap-3 p-3 rounded-lg transition-colors",
                            isSelected ? "bg-primary/10 border-primary" : "border-border/30 bg-card/30",
                            isDisabled ? "opacity-50 cursor-not-allowed" : "hover:bg-primary/5 cursor-pointer"
                          )}
                          onClick={() => {
                            if (!isDisabled) {
                              onModelSelect(model.id);
                            }
                          }}
                          disabled={isDisabled}
                        >
                          <div className="w-8 h-8 min-w-[2rem] rounded-full bg-background flex-shrink-0 flex items-center justify-center overflow-hidden p-1 border border-border/30">
                            {model.logoUrl && (
                              <Image 
                                src={model.logoUrl} 
                                alt={model.name}
                                className="h-full w-full object-contain" 
                              />
                            )}
                          </div>
                          
                          <div className="flex-1 text-left">
                            <div className="flex items-center gap-2">
                              <h3 className="font-medium text-sm">{model.name}</h3>
                              {mainBenchmark && (
                                <div 
                                  className="px-1.5 py-0.5 text-xs rounded-full font-mono"
                                  style={{ 
                                    backgroundColor: model.gradientColors ? `${model.gradientColors[0]}33` : '#3b82f633',
                                    color: model.gradientColors ? model.gradientColors[0] : '#3b82f6'
                                  }}
                                  title={`${mainBenchmark[0]} benchmark score`}
                                >
                                  {mainBenchmark[1].score}
                                </div>
                              )}
                            </div>
                            <p className="text-xs text-muted-foreground line-clamp-1">
                              {model.provider.charAt(0).toUpperCase() + model.provider.slice(1)}
                            </p>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
} 