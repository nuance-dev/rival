import { getResponseById } from '@/lib/model-responses';
import { models } from '@/lib/data';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import ModelResponseClient from './ModelResponseClient';

interface ModelResponsePageProps {
  params: Promise<{
    id: string;
    responseId: string;
  }>;
}

export async function generateMetadata(props: ModelResponsePageProps): Promise<Metadata> {
  const params = await props.params;
  const { id, responseId } = params;
  const response = getResponseById(responseId);
  const model = models.find(m => m.id === id);
  
  if (!response || !model) {
    return {
      title: 'Response Not Found',
      description: 'The requested model response could not be found.',
    };
  }
  
  return {
    title: `${response.title} | ${model.name} Response`,
    description: response.description,
  };
}

export default async function ModelResponsePage(props: ModelResponsePageProps) {
  const params = await props.params;
  const { id, responseId } = params;
  const response = getResponseById(responseId);
  const model = models.find(m => m.id === id);
  
  if (!response || !model) {
    notFound();
  }
  
  return <ModelResponseClient model={model} response={response} />;
} 