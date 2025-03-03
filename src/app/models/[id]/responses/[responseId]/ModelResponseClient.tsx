"use client";

import React from 'react';
import { ArrowLeft, Calendar, Layers, User } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ModelResponse, AIModel } from '@/types/models';
import { NewOutputCard } from '@/components/canvas/NewOutputCard';
import { Layout } from '@/components/layout/Layout';
import { cn } from '@/lib/utils';
import SimpleImage from '@/components/ui/SimpleImage';

interface ModelResponseClientProps {
  model: AIModel;
  response: ModelResponse;
}

export default function ModelResponseClient({ model, response }: ModelResponseClientProps) {
  return (
    <Layout>
      {/* Header with back navigation */}
      <div className="container py-8">
        <motion.div 
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="mb-12"
        >
          <Link 
            href={`/models/${model.id}`}
            className="group inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to {model.name}
          </Link>
        </motion.div>
        
        {/* Title and description */}
        <div className="mb-12 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h1 className="text-4xl md:text-5xl font-display font-bold tracking-tight mb-3">{response.title}</h1>
            <p className="text-lg text-muted-foreground">{response.description}</p>
          </motion.div>
          
          <motion.div 
            className="flex flex-wrap gap-6 mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <User className="h-4 w-4" />
              <span>{model.name}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              <span>{new Date(response.responseDate).toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Layers className="h-4 w-4" />
              <span>{response.type.charAt(0).toUpperCase() + response.type.slice(1)}</span>
            </div>
          </motion.div>
        </div>
        
        {/* Prompt section */}
        <motion.div 
          className="mb-12 rounded-xl border border-border bg-card/50 p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h2 className="text-xl font-medium mb-4 flex items-center">
            <div 
              className={cn(
                "w-8 h-8 rounded-lg mr-3 flex items-center justify-center",
                "bg-primary/10 text-primary"
              )}
            >
              <span className="text-sm font-bold">?</span>
            </div>
            Prompt
          </h2>
          <div className="prose prose-sm max-w-none dark:prose-invert">
            <p className="whitespace-pre-line">{response.prompt}</p>
          </div>
        </motion.div>
        
        {/* Response content */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-xl font-medium mb-6 flex items-center">
            <div 
              className={cn(
                "w-8 h-8 rounded-lg mr-3 flex items-center justify-center",
                "bg-gradient-to-br from-primary/10 to-primary/30"
              )}
              style={model.gradientColors ? {
                backgroundImage: `linear-gradient(to bottom right, ${model.gradientColors[0]}30, ${model.gradientColors[1]}50)`,
              } : undefined}
            >
              {model.logoUrl ? (
                <SimpleImage 
                  src={model.logoUrl} 
                  alt={model.name} 
                  width={16}
                  height={16}
                  className="w-4 h-4" 
                  objectFit="contain"
                />
              ) : (
                <span className="text-xs font-bold">{model.name.charAt(0)}</span>
              )}
            </div>
            Response
          </h2>
          
          <div className="max-w-3xl">
            <NewOutputCard 
              output={{
                id: response.id,
                promptId: '',
                modelId: response.modelId,
                content: response.content,
                type: response.type,
                modelName: model.name,
                title: response.title,
                description: `Generated on ${new Date(response.responseDate).toLocaleDateString()}`,
                funFact: response.funFact,
                prompt: response.prompt
              }}
              id={response.id}
              className="w-full shadow-md"
            />
          </div>
        </motion.div>
        
        {/* About model */}
        <motion.div 
          className="pb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h2 className="text-xl font-medium mb-6">About {model.name}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-card/50 border border-border rounded-lg">
              <h3 className="text-sm font-medium mb-3">Capabilities</h3>
              <div className="flex flex-wrap gap-2">
                {model.capabilities.map((capability: string) => (
                  <span 
                    key={capability}
                    className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary"
                  >
                    {capability.split('-').map((word: string) => 
                      word.charAt(0).toUpperCase() + word.slice(1)
                    ).join(' ')}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="p-6 bg-card/50 border border-border rounded-lg">
              <h3 className="text-sm font-medium mb-3">Categories</h3>
              <div className="flex flex-wrap gap-2">
                {model.categories.map((category: string) => (
                  <span 
                    key={category}
                    className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-secondary/10 text-secondary"
                  >
                    {category.split('-').map((word: string) => 
                      word.charAt(0).toUpperCase() + word.slice(1)
                    ).join(' ')}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="p-6 bg-card/50 border border-border rounded-lg">
              <h3 className="text-sm font-medium mb-3">Specifications</h3>
              <dl className="grid grid-cols-2 gap-2 text-sm">
                <dt className="text-muted-foreground">Provider</dt>
                <dd className="font-medium">
                  {model.provider.charAt(0).toUpperCase() + model.provider.slice(1)}
                </dd>
                
                <dt className="text-muted-foreground">Released</dt>
                <dd className="font-medium">{model.releaseDate}</dd>
                
                <dt className="text-muted-foreground">Size</dt>
                <dd className="font-medium">{model.size.toUpperCase()}</dd>
                
                {model.parametersCount && (
                  <>
                    <dt className="text-muted-foreground">Parameters</dt>
                    <dd className="font-medium">{model.parametersCount}</dd>
                  </>
                )}
                
                {model.contextWindow && (
                  <>
                    <dt className="text-muted-foreground">Context</dt>
                    <dd className="font-medium">{model.contextWindow.toLocaleString()} tokens</dd>
                  </>
                )}
              </dl>
            </div>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
} 