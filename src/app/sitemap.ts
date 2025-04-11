import { modelResponses } from '@/lib/model-responses';
import { MetadataRoute } from 'next';

// ! Make sure to replace this with your actual domain!
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Generate sitemap entries for each model response page
  const responseEntries: MetadataRoute.Sitemap = modelResponses.map((response) => ({
    url: `${baseUrl}/models/${response.modelId}/responses/${response.id}`,
    lastModified: response.responseDate ? new Date(response.responseDate) : new Date(),
    changeFrequency: 'monthly', // Or 'yearly' if responses don't change often
    priority: 0.7, // Adjust priority as needed
  }));

  // You can add other static pages or dynamic routes here if needed
  // For example:
  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'weekly', priority: 1.0 },
    { url: `${baseUrl}/compare`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    // Add other main pages like model listings, challenge gallery etc.
  ];

  return [
    ...staticPages,
    ...responseEntries,
    // ... other dynamic route entries
  ];
} 