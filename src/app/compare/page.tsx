import React from "react";
import { Metadata } from "next";
import dynamic from "next/dynamic";

// Import client component dynamically
const ComparePageClient = dynamic(() => import('./ComparePageClient'), {
  ssr: true,
  loading: () => <div className="container py-20 text-center">Loading...</div>
});

export const metadata: Metadata = {
  title: "Compare AI Models | RIVAL",
  description: "Compare AI models side-by-side across various challenges. See how different models respond to the same prompts.",
};

export default function ComparePage() {
  return <ComparePageClient />;
} 