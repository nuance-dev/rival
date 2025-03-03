"use client";

import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { cn } from "@/lib/utils";

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
  fullWidth?: boolean;
}

export function Layout({ children, className, fullWidth = false }: LayoutProps) {
  return (
    <div className={cn("flex min-h-screen flex-col", className)}>
      <Header />
      <main className={cn(
        "flex-1", 
        "pt-16 sm:pt-20", // Less padding on mobile for better space usage
        !fullWidth && "px-2 sm:px-4" // Add horizontal padding only if not fullWidth
      )}>
        {children}
      </main>
      <Footer />
    </div>
  );
}
