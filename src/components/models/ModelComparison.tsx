"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ModelCanvas } from "@/components/canvas/ModelCanvas";
import { AIModel, ModelOutput, ModelPrompt } from "@/types/models";

interface ModelComparisonProps {
  comparison: {
    title: string;
    description?: string;
    prompt: ModelPrompt;
    models: AIModel[];
    outputs: ModelOutput[];
  };
  className?: string;
}

export function ModelComparison({ comparison, className }: ModelComparisonProps) {
  const [activeTab, setActiveTab] = useState<string | null>(
    comparison.outputs.length > 0 ? comparison.outputs[0].modelId : null
  );
  
  const getModelById = (modelId: string) => {
    return comparison.models.find((model) => model.id === modelId);
  };
  
  const getOutputByModelId = (modelId: string) => {
    return comparison.outputs.find((output) => output.modelId === modelId);
  };
  
  return (
    <div className={`bg-card border rounded-xl overflow-hidden shadow-sm ${className}`}>
      {/* Comparison Header */}
      <div className="p-6 border-b">
        <h3 className="text-2xl font-display mb-2">{comparison.title}</h3>
        {comparison.description && (
          <p className="text-muted-foreground">{comparison.description}</p>
        )}
        
        <div className="bg-muted/50 p-4 rounded-md mt-4 mb-2 text-muted-foreground">
          <p className="whitespace-pre-line">{comparison.prompt.promptText}</p>
        </div>
      </div>
      
      {/* Model Tabs */}
      <div className="border-b overflow-x-auto hide-scrollbar">
        <div className="flex">
          {comparison.models.map((model) => (
            <button
              key={model.id}
              className={`px-6 py-3 text-sm font-medium border-r relative ${
                activeTab === model.id
                  ? "text-primary border-b-2 border-b-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
              onClick={() => setActiveTab(model.id)}
            >
              {model.name}
              
              {activeTab === model.id && (
                <motion.div
                  layoutId="activeTabIndicator"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                  transition={{ duration: 0.3 }}
                />
              )}
            </button>
          ))}
        </div>
      </div>
      
      {/* Output Canvas */}
      <div className="p-6">
        {activeTab && getOutputByModelId(activeTab) ? (
          <div className="animate-appear-from-bottom">
            <ModelCanvas
              output={getOutputByModelId(activeTab)!}
              title={`${getModelById(activeTab)?.name} Response`}
              description={`Generated output for "${comparison.prompt.title}"`}
            />
          </div>
        ) : (
          <div className="text-center py-12 text-muted-foreground">
            <p>No output available for this model.</p>
          </div>
        )}
      </div>
    </div>
  );
} 