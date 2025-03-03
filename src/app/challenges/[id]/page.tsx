import React from "react";
import { notFound } from "next/navigation";
import { promptChallenges } from "@/lib/prompt-challenges";
import dynamic from "next/dynamic";
import { Layout } from "@/components/layout/Layout";

// Import client component dynamically
const ChallengeDetailClient = dynamic(() => import('./ChallengeDetailClient'), {
  ssr: true,
  loading: () => <div className="container py-20 text-center">Loading...</div>
});

export default async function ChallengePage({ params }: { params: Promise<{ id: string }> }) {
  // Await params before accessing the id
  const resolvedParams = await params;
  const challengeId = resolvedParams.id;
  const challenge = promptChallenges.find(c => c.id === challengeId);
  
  if (!challenge) {
    notFound();
  }
  
  return (
    <Layout>
      <ChallengeDetailClient challenge={challenge} />
    </Layout>
  );
} 