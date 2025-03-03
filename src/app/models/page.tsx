import React from "react";
import { Layout } from "@/components/layout/Layout";
import { ModelCard } from "@/components/models/ModelCard";
import { models } from "@/lib/data";

export const metadata = {
  title: "AI Models | Rivals",
  description: "Explore a wide range of cutting-edge AI models and their capabilities.",
};

export default function ModelsPage() {
  // Group models by provider
  const modelsByProvider = models.reduce((acc, model) => {
    const provider = model.provider;
    if (!acc[provider]) {
      acc[provider] = [];
    }
    acc[provider].push(model);
    return acc;
  }, {} as Record<string, typeof models>);
  
  // Get providers sorted alphabetically, but with xAI at the end
  const sortedProviders = Object.keys(modelsByProvider).sort((a, b) => {
    // Always put xAI at the end
    if (a.toLowerCase() === 'xai') return 1;
    if (b.toLowerCase() === 'xai') return -1;
    
    // Otherwise sort alphabetically
    return a.localeCompare(b);
  });
  
  return (
    <Layout>
      <section className="py-8 md:py-12 px-2 sm:px-4 md:container">
        <div className="mx-auto max-w-[800px] text-center mb-8 md:mb-12">
          <h1 className="text-2xl md:text-5xl mb-4 md:mb-6">
            AI Models Showcase
          </h1>
          <p className="text-muted-foreground text-base md:text-lg">
            Explore a comprehensive collection of cutting-edge AI models from leading providers. 
            Click on any model to see its capabilities and example outputs.
          </p>
        </div>
        
        {/* Display models grouped by provider in alphabetical order (xAI at end) */}
        {sortedProviders.map((provider) => (
          <div key={provider} className="mb-16">
            <h2 className="text-2xl font-display mb-6 border-b pb-2">
              {provider.charAt(0).toUpperCase() + provider.slice(1)} Models
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {modelsByProvider[provider].map((model) => (
                <ModelCard
                  key={model.id}
                  model={model}
                />
              ))}
            </div>
          </div>
        ))}
      </section>
    </Layout>
  );
} 