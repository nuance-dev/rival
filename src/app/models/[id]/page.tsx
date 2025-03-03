import React from "react";
import { notFound } from "next/navigation";
import { Layout } from "@/components/layout/Layout";
import { models } from "@/lib/data";
import { getResponsesByModelId } from "@/lib/model-responses";
import type { Metadata } from "next";
import dynamic from "next/dynamic";

// Create the client component if it doesn't exist
// By dynamically importing it we avoid the need to have it in the
// same file as the server component
const ModelDetailClient = dynamic(() => import('@/components/models/ModelDetailClient').then(mod => mod.ModelDetailClient), {
  ssr: true,
  loading: () => <div className="container py-20 text-center">Loading...</div>
});

export const generateMetadata = async ({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> => {
  const { id } = await params;
  const model = models.find((m) => m.id === id);
  
  if (!model) {
    return {
      title: "Model Not Found",
      description: "The requested model could not be found."
    };
  }
  
  return {
    title: `${model.name} | AI Model Showcase`,
    description: model.description || `Learn about ${model.name} capabilities and examples.`,
    openGraph: {
      title: `${model.name} | AI Model Showcase`,
      description: model.description || `Learn about ${model.name} capabilities and examples.`,
      images: [model.logoUrl || '/opengraph.png'],
    },
  };
};

export default async function ModelDetailPage(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const modelId = params.id;
  const model = models.find(m => m.id === modelId);
  
  // If model doesn't exist, return 404
  if (!model) {
    notFound();
  }
  
  // Find related models from the same provider
  const relatedModels = models.filter(m => m.provider === model.provider && m.id !== model.id);
  
  // Get responses for this model
  const modelResponses = getResponsesByModelId(modelId);
  const latestResponses = [...modelResponses].sort(
    (a, b) => new Date(b.responseDate).getTime() - new Date(a.responseDate).getTime()
  ).slice(0, 3);
  
  return (
    <Layout>
      <ModelDetailClient 
        model={model} 
        modelResponses={modelResponses}
        latestResponses={latestResponses}
        relatedModels={relatedModels}
      />
    </Layout>
  );
} 
