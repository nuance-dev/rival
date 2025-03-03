"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X, Home, Layers, Box, Zap, GitCompare } from "lucide-react";
import { ThemeToggleWrapper } from "@/components/ui/theme-toggle-wrapper";
import { cn } from "@/lib/utils";

interface HeaderProps {
  className?: string;
}

export function Header({ className }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);
  
  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // After mounting, we can detect color scheme
  useEffect(() => {
    setMounted(true);
    // Check if user prefers dark mode
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDarkMode(darkModeMediaQuery.matches);

    // Listen for changes to the prefers-color-scheme media query
    const handleChange = (e: MediaQueryListEvent) => {
      setIsDarkMode(e.matches);
    };

    darkModeMediaQuery.addEventListener('change', handleChange);
    return () => darkModeMediaQuery.removeEventListener('change', handleChange);
  }, []);

  const navItems = [
    { label: "Home", href: "/", icon: <Home className="h-4 w-4 mr-3" /> },
    { label: "Models", href: "/models", icon: <Layers className="h-4 w-4 mr-3" /> },
    { label: "Compare", href: "/compare", icon: <GitCompare className="h-4 w-4 mr-3" /> },
    { label: "Challenges", href: "/challenges", icon: <Box className="h-4 w-4 mr-3" /> },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 transition-all duration-300",
        "z-30",
        isScrolled 
          ? "bg-background/80 backdrop-blur-md shadow-sm py-3" 
          : "bg-transparent py-5",
        className
      )}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 retro-glow">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="relative"
          >
            {mounted ? (
              <h1 
                className={cn(
                  "text-3xl jacquard-24-regular font-normal tracking-wide relative",
                  isDarkMode ? "text-foreground" : "text-foreground"
                )}
              >
                <span className={cn(
                  "relative retro-shimmer",
                  isDarkMode && "shimmer"
                )}>
                  RIVAL
                </span>
                {!isDarkMode && (
                  <span className="absolute inset-0 bg-gradient-to-b from-foreground/80 to-foreground/90 bg-clip-text text-transparent -z-10 blur-[0.3px]">
                    RIVAL
                  </span>
                )}
              </h1>
            ) : (
              // Placeholder while theme is loading
              <div className="h-7 w-24 bg-muted/20 rounded animate-pulse"></div>
            )}
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.slice(1).map((item, index) => (
            <motion.div
              key={item.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Link
                href={item.href}
                className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors hover-lift"
              >
                {item.label}
              </Link>
            </motion.div>
          ))}

          {/* Theme Toggle */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: navItems.length * 0.1 }}
            className="hover-lift"
          >
            <ThemeToggleWrapper />
          </motion.div>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-4">
          <ThemeToggleWrapper />
          
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-muted/30 text-foreground hover:bg-muted transition-colors hover-lift"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-4 w-4" />
            ) : (
              <Menu className="h-4 w-4" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-x-0 top-[57px] z-30 bg-background/95 backdrop-blur-md shadow-lg transition-all duration-300 overflow-hidden md:hidden",
          isMobileMenuOpen ? "max-h-screen" : "max-h-0"
        )}
      >
        <nav className="container py-4 flex flex-col gap-3">
          <div className="text-xs uppercase text-muted-foreground mb-1 font-medium pt-1">Navigation</div>
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-foreground/80 hover:text-foreground py-2 transition-colors flex items-center"
              onClick={(e) => {
                e.stopPropagation();
                setIsMobileMenuOpen(false);
                // Add slight delay to prevent the link from being canceled by state updates
                setTimeout(() => {
                  // Navigate programmatically after menu closes
                  window.location.href = item.href;
                }, 50);
              }}
            >
              {item.icon}
              {item.label}
            </Link>
          ))}
          
          <div className="h-px bg-border my-2"></div>
          <div className="text-xs uppercase text-muted-foreground mb-1 font-medium pt-1">Quick Access</div>
          
          <p className="text-sm text-muted-foreground py-1 mb-1">Browse by model type:</p>
          <div className="grid grid-cols-2 gap-2">
            <Link href="/models" className="text-xs font-medium bg-muted/30 hover:bg-muted/50 transition-colors rounded-md p-2 flex items-center justify-center" 
              onClick={(e) => {
                e.stopPropagation();
                setIsMobileMenuOpen(false);
                // Add slight delay to prevent the link from being canceled by state updates
                setTimeout(() => {
                  // Navigate programmatically after menu closes
                  window.location.href = '/models';
                }, 50);
              }}
            >
              <Zap className="h-3 w-3 mr-1 text-blue-500" />
              All Models
            </Link>
            <Link href="/compare" className="text-xs font-medium bg-muted/30 hover:bg-muted/50 transition-colors rounded-md p-2 flex items-center justify-center" 
              onClick={(e) => {
                e.stopPropagation();
                setIsMobileMenuOpen(false);
                // Add slight delay to prevent the link from being canceled by state updates
                setTimeout(() => {
                  // Navigate programmatically after menu closes
                  window.location.href = '/compare';
                }, 50);
              }}
            >
              <GitCompare className="h-3 w-3 mr-1 text-purple-500" />
              Compare Models
            </Link>
          </div>
          
          <div className="h-px bg-border my-2"></div>
          <div className="text-xs text-muted-foreground py-1 text-center">
            AI Model Comparison Platform
          </div>
        </nav>
      </div>
    </header>
  );
} 