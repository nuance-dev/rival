"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface FooterProps {
  className?: string;
}

export function Footer({ className }: FooterProps) {
  const [mounted, setMounted] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

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

  const footerLinks = [
    {
      title: "Resources",
      links: [
        { label: "Models", href: "/models" },
        { label: "Compare Models", href: "/compare" },
        { label: "Challenges", href: "/challenges" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About Us", href: "/about" },
        { label: "Contact", href: "/contact" },
        { label: "Privacy Policy", href: "/privacy" },
      ],
    },
    {
      title: "Connect",
      links: [
        { label: "Website", href: "https://nuanc.me" },
        { label: "Twitter", href: "https://twitter.com/nuancedev" },
        { label: "GitHub", href: "https://github.com/nuance-dev/rival" },
        { label: "Buy Me a Coffee", href: "https://buymeacoffee.com/nuanced" },
      ],
    },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className={cn("bg-muted/30 border-t", className)}>
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
          {/* Logo and tagline */}
          <div className="col-span-1 md:col-span-1 lg:col-span-2">
            <Link href="/" className="flex items-center gap-2">
              {mounted ? (
                <h1 
                  className={cn(
                    "text-xl jacquard-24-regular font-normal tracking-wide relative",
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
                <div className="h-6 w-20 bg-muted/20 rounded animate-pulse"></div>
              )}
            </Link>
            <p className="mt-3 text-sm text-muted-foreground max-w-md">
              Explore the cutting-edge capabilities of modern AI models. Compare their responses, analyze their strengths, and discover their unique qualities.
            </p>
          </div>
          
          {/* Links */}
          {footerLinks.map((group) => (
            <div key={group.title} className="col-span-1">
              <h3 className="font-medium text-foreground mb-4 text-sm">
                {group.title}
              </h3>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link 
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Bottom */}
        <div className="mt-12 flex flex-col sm:flex-row justify-between items-center pt-6 border-t border-border text-sm text-muted-foreground">
          <p>© {currentYear} Rival. </p>
          <p className="mt-3 sm:mt-0">
            Created by nuanced with ❤️ for the AI community
          </p>
        </div>
      </div>
    </footer>
  );
}
