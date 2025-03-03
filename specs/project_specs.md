# RIVAL - Project Specification

## Project Overview
"RIVAL" (formerly "RIVAL") is a next-generation web application built with Next.js and Tailwind CSS v4 that displays AI model capabilities in an immersive, interactive way. The application showcases various AI models (Grok 3, Claude Sonnet 3.7/3.5, GPT-4o, GPT-o3, GPT-o1, Anthropic Claude 3 Haiku/Opus, etc.) with their responses to one-shot prompts, displayed in dynamic, expandable canvases.

## Design Philosophy
- **Aesthetic**: Minimalist yet distinctive design with subtle retro-inspired elements, drawing from industry leaders like Framer, Rive, Vercel, Linear, Supabase, Webflow, Valorant, Arc, Raycast, and Spline
- **UX Principles**: Progressive disclosure, intuitive navigation, smooth animations, Apple-inspired minimal UX ethos
- **Visual Identity**: High contrast, purposeful typography, subtle retro-inspired animations, meaningful white space
- **Content-Forward Design**: Show actual AI outputs directly on cards without requiring clicks to view content
- **Minimal Navigation**: Reduce reliance on traditional navbar, use contextual navigation and progressive disclosure
- **Immersive Gallery**: Organize content in a visually stunning grid/mosaic layout by categories on the home page
- **Seamless Interactions**: Subtle hover effects, fluid animations, and contextual expansions
- **Refined Aesthetic**: Elevated grayscale palette with strategic accent colors for hierarchy
- **Typography**: Modern, daring display fonts (Space Grotesk) for titles with clean sans-serif (Geist) for body text
- **Retro Inspiration**: Subtle CRT scan lines, pixel-perfect borders, VHS distortion effects, and terminal-inspired cursor blinks
- **Framer-Inspired Elements**: High-quality hover animations, glass effects, and fluid layout transitions

## Technology Stack
- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS v4
- **Animation**: Framer Motion
- **State Management**: React Context API + Zustand
- **Deployment**: Vercel

## Core Features
1. **Interactive Model Showcase**
   - Dynamic display of AI model responses to one-shot prompts ✅
   - Expandable canvases that showcase AI outputs (websites, text, images, SVGs, etc.) ✅
   - Smooth transitions and animations with subtle retro effects ✅

2. **AI Models Integration**
   - Display capabilities of various AI models ✅
   - Show model-specific information (specs, capabilities) ✅
   - Compare outputs between different models ✅

3. **Responsive Canvas System**
   - Expandable/collapsible canvases for each AI output ✅
   - Interactive elements within canvases with retro-inspired details ✅
   - Smooth transitions between states enhanced with Framer-style animations ✅

4. **Prompt Challenges Gallery**
   - Curated collection of challenging AI prompts ✅
   - Organization by category, difficulty, and output type ✅
   - Visual indicators for challenge complexity and expected output ✅
   - Expandable views to examine model responses with retro-inspired UI elements ✅

5. **Model Responses Archive** ✅
   - Detailed archive of model-specific responses ✅
   - Categorization by response type (text, code, website, SVG, etc.) ✅
   - Expandable views to examine full responses with subtle CRT effects ✅
   - Response metadata and contextual information ✅

6. **Output Card Redesign**
   - Transformed from hidden-content cards to content-forward showcases ✅
   - Minimalist card design with headers/footers removed for cleaner UI ✅
   - Model information moved to hover overlay for better visibility ✅
   - One-shot badge positioned in top-right corner for better visibility ✅
   - Taller card height for better content display ✅
   - Website outputs with live iframe previews directly visible in cards ✅
   - Hidden scrollbars in web design cards for consistent appearance ✅
   - Code outputs with syntax highlighting and advanced interactions ✅
   - Image outputs with subtle zoom/parallax effects on hover ✅
   - Text outputs with elegant typography and formatting ✅
   - Expandable cards with smooth animations via AnimatePresence ✅
   - Retro-inspired design details integrated throughout the card system ✅
   - Fixed maximum height for cards to prevent layout issues ✅
   - Properly positioned hover expand icon (bottom-right) to prevent overlap with model information ✅
   - Model information overlay displayed on card hover for quick identification ✅
   - Challenge-specific titles replacing generic content type labels ✅
   - Improved model name display in expanded card view ✅
   - Enhanced card sorting prioritizing visually rich content types ✅
   - Markdown rendering support for text responses, allowing proper formatting of headings, lists, code blocks, and more ✅
   - Support for fun fact tooltips in expanded view to provide interesting information about model responses ✅

7. **Animation Improvements**
   - Added useSafeAnimation hook to prevent double-triggering of animations ✅
   - Optimized animation loading and visibility states using sessionStorage ✅
   - Implemented proper animation sequencing for smoother transitions ✅
   - Fixed jumping animation issues throughout all application sections ✅
   - Enhanced hover effects with proper positioning and timing ✅
   - Reduced animation durations for snappier, more responsive interactions ✅
   - Improved card expansion/collapse with better exit animations to prevent disappearing elements ✅
   - Fixed ghost cards on initial load with optimized loading strategy ✅
   - Enhanced preloading of card batches for smoother infinite scroll ✅

8. **Navigation Improvements**
   - Consistent navbar across all pages with retro glow effect ✅
   - Progressive disclosure of navigation options ✅
   - Contextual navigation elements where appropriate ✅
   - Removed insights section for more focused experience ✅
   - Updated VERSUS branding with retro shimmer effect ✅

9. **UI Fixes**
   - Fixed hover overlay issues to ensure a cleaner interface ✅
   - Added proper Layout component to all pages for consistent navigation ✅
   - Fixed metadata handling in client components ✅
   - Improved iframe sandbox handling to allow proper script execution ✅
   - Updated to Space Grotesk font for more distinctive headings ✅
   - Added attribution and external links to nuanced ✅
   - Integrated retro-inspired design elements throughout the UI ✅
   - Added Framer-inspired animation and interaction patterns ✅
   - Fixed ghost cards issue on initial load of home page ✅

10. **Advanced Model Comparison** 🆕
   - Interactive side-by-side comparison of two selected AI models ✅
   - Model selector with provider grouping and visual identification ✅
   - Challenge filtering by category and difficulty ✅
   - Live search functionality for quickly finding specific challenges ✅
   - Smooth animated transitions between states with loading indicators ✅
   - Direct links to individual model pages for additional information ✅
   - Support for all content types (text, code, website, SVG, image) in comparison view ✅
   - Responsive design for both desktop and mobile experiences ✅
   - Modal-based model selection with spring physics animations ✅
   - Intelligent grouping of challenges based on available model responses ✅

## Project Structure
```
versus/
├── app/                  # Next.js app router
│   ├── api/              # API routes
│   ├── challenges/       # Challenge pages
│   ├── models/           # Model pages
│   │   └── [id]/         # Model detail pages
│   │       └── responses/# Model response pages
│   │           └── [responseId]/ # Response detail pages
│   ├── comparisons/      # Comparison pages
│   ├── compare/          # NEW: Interactive model comparison section
│   ├── capabilities/     # Capability pages
│   └── layout.tsx        # Root layout
├── components/           # React components
│   ├── ui/               # UI components
│   ├── canvas/           # Canvas components
│   │   ├── NewOutputCard.tsx  # Main card component wrapper
│   │   ├── ModelCanvas.tsx    # Canvas component
│   │   ├── ExpansionProvider.tsx # Context for card expansion state
│   │   ├── card/         # Card component pieces
│   │   │   ├── CardContent.tsx    # Handles rendering of different content types
│   │   │   ├── ExpandedCard.tsx   # Card in expanded view
│   │   │   ├── CardHeader.tsx     # Header component for cards
│   │   │   ├── SVGRenderer.tsx    # Safely renders SVG content with error boundaries
│   │   │   ├── utils/             # Utility functions for cards
│   │   │   │   ├── svgUtils.ts    # SVG sanitization and handling utilities 
│   │   │   └── index.ts           # Exports card components and hooks
│   │   ├── FunFactTooltip.tsx     # Tooltip for fun facts
│   │   ├── LazyImage.tsx          # Lazy-loaded images with placeholders
│   │   ├── LazyIframe.tsx         # Lazy-loaded iframes with sandboxing
│   │   ├── ModelIcon.tsx          # Model logo/icon component
│   │   ├── ModelInfoOverlay.tsx   # Hover overlay for model information
│   │   └── OneShotBadge.tsx       # Badge for one-shot responses
│   ├── models/           # AI model components
│   │   ├── ModelOutput.tsx     # Output display component
│   │   └── ModelResponseCard.tsx # Response card component
│   └── layout/           # Layout components
├── hooks/                # Custom React hooks
│   ├── useSafeAnimation.ts # Hook to prevent animation jumping and double-triggering
├── lib/                  # Utility functions & shared logic
│   ├── data/             # Data files
│   │   ├── models.ts     # AI model definitions
│   │   ├── prompts.ts    # Challenge prompt definitions
│   │   └── comparisons.ts# Model comparison definitions
│   ├── model-responses/  # Individual model responses
│   │   ├── index.ts      # Aggregates and exports all responses with helper functions
│   │   ├── gpt-4o/       # GPT-4o responses
│   │   │   ├── index.ts  # Exports all GPT-4o responses
│   │   │   └── website-landing-page.ts # Individual response file
│   │   ├── claude-3-7-sonnet/ # Claude 3.7 responses
│   │   │   ├── index.ts  # Exports all Claude 3.7 responses
│   │   │   └── movie-analysis.ts # Individual response file 
│   │   └── grok-3/       # Grok 3 responses
│   │       ├── index.ts  # Exports all Grok 3 responses
│   │       └── todo-app.ts # Individual response file
│   ├── prompt-challenges.ts  # Challenge data structure
│   └── utils.ts          # Utility functions
├── public/               # Static assets
│   ├── models/           # AI model SVG logos
├── styles/               # Global styles
└── types/                # TypeScript type definitions
```

## Page Structure
1. **Home Page** ✅
   - Hero section with introduction and retro-inspired elements
   - Featured AI model showcase
   - Navigation to different model categories
   - Subtle CRT and VHS effects integrated throughout
   - Prioritized display of visually appealing content (web design and images)
   - Infinite scroll for efficient loading of model responses

2. **Model Pages** ✅
   - Dedicated pages for each model category
   - Interactive canvas displays with retro design elements
   - Model details and specifications
   - Latest model responses section ✅
   - Example outputs section ✅
   - Related models from same provider ✅

3. **Model Response Pages** ✅
   - List of all responses for a specific model ✅
   - Categorization by response type ✅
   - Response cards with title, description, and date ✅
   - Detailed individual response pages with retro-inspired UI elements ✅

4. **Response Detail Pages** ✅
   - Full display of model response with subtle retro effects ✅
   - Original prompt that generated the response ✅
   - Response metadata and contextual information ✅
   - Model information and specifications ✅

5. **Comparison Pages** ✅
   - Side-by-side comparison of model outputs
   - Tabbed interface to switch between models
   - Shared prompt context
   - Retro-inspired design elements throughout

6. **Capabilities Pages** ✅
   - Categorization by AI capabilities
   - Examples of different AI capabilities
   - Interactive demonstrations with subtle retro flair

7. **Challenge Pages** ✅
   - Challenge gallery with categorization by type ✅
   - Filtering by difficulty and output type ✅
   - Detailed individual challenge pages ✅
   - Side-by-side AI model response comparisons ✅
   - Retro-inspired design elements integrated throughout ✅
   - Fixed issue with mock data being used instead of real model responses ✅
   - Fixed layout issues with card spacing and animations ✅
   - Added proper error handling for cases with no responses ✅
   - Improved animation management to prevent layout jumps ✅

8. **Compare Page** 🆕
   - Interactive model selection interface with provider grouping ✅
   - Challenge selection with category filtering ✅ 
   - Real-time search functionality ✅
   - Side-by-side display of model responses ✅
   - Smooth animated transitions with loading states ✅
   - Challenge details with original prompt display ✅
   - Deep linking to individual model and challenge pages ✅
   - Intelligent filtering for challenges with responses from both selected models ✅
   - Modal-based model selector with spring physics animations ✅
   - Responsive layout for mobile and desktop devices ✅

## Design Components
1. **Header** ✅
   - Minimal navigation with hover-lift effect
   - Elegant branding with Jacquard 24 font for logo and retro shimmer
   - Theme toggle for dark/light mode

2. **AI Model Card** ✅
   - Model information with pixel-perfect borders
   - Canvas container for output with subtle CRT scan line effect
   - Expand/collapse functionality with Framer-inspired animations
   - Model name and logo displayed on hover

3. **Canvas System** ✅
   - Regular view (collapsed) with retro design elements
   - Expanded view with CRT scan lines effect
   - Interactive elements with hover-lift and retro glow
   - Clear model attribution and challenge identification

4. **Challenge Card** ✅
   - Challenge metadata (difficulty, category, output type)
   - Preview of prompt
   - Visual categorization
   - Retro-inspired design elements

5. **Response Card** ✅
   - Response title and description with pixel-perfect borders
   - Response type indicator
   - Response date metadata
   - Card linking to full response
   - Subtle retro effects integrated throughout
   - Model information displayed on hover
   - Challenge-specific titles instead of generic type labels

6. **Footer** ✅
   - Credits and information
   - Links to resources and creator profiles
   - Attribution to nuanced with external links to website, social media, GitHub, and Buy Me a Coffee

7. **Model Selector** 🆕
   - Modal-based interface with subtle backdrop blur ✅
   - Models grouped by provider for better organization ✅
   - Visual indicators for selected models ✅
   - Model logo and brief description for better identification ✅
   - Spring physics animations for smooth interactions ✅

8. **Challenge Filter** 🆕
   - Category-based filter buttons with active state indicators ✅
   - Search input with clear functionality ✅
   - Visual feedback for selected challenge ✅
   - Card-based challenge display with important metadata ✅

## Animation Strategy
- Subtle hover effects with purposeful feedback ✅
- Smooth transitions between canvas states using AnimatePresence ✅
- Scroll-triggered animations with staggered effects ✅
- Microinteractions for engagement without overwhelming the user ✅
- Category-based staggered animations for visual grouping ✅
- Retro-inspired animations like cursor blink and VHS distortion ✅
- Framer-inspired spring physics for natural-feeling interactions ✅
- Safe animation handling to prevent duplicate triggers ✅
- Fixed double animation issues in ModelCard, ChallengeCard, and NewOutputCard components ✅
- Enhanced infinite scroll loading indicator for better user feedback ✅
- Improved animation state tracking using useEffect to prevent animation flickering ✅
- Optimized animation timing and delays for smoother user experience ✅
- Modal animations with smooth scale and opacity transitions ✅
- Loading spinner animations for visual feedback during state changes ✅

## Responsive Design
- Mobile-first approach ✅
- Adaptive canvas sizing for different devices ✅
- Optimized interactions for touch devices ✅
- Responsive grid layouts for galleries ✅
- Retro design elements that scale appropriately across devices ✅
- Maximum height constraints for components to maintain consistency ✅
- Responsive compare view that switches from side-by-side to stacked on mobile ✅

## Performance Optimization
- Static generation where possible ✅
- Dynamic imports for code splitting ✅
- Image optimization with SimpleImage component 🟡
- Efficient state management with React Context ✅
- Proper iframe sandboxing for security and performance ✅
- Optimized retro effects that don't impact performance ✅
- Infinite scroll for efficient loading of large datasets ✅
- Virtualized rendering for output cards ✅
- Lazy loading of content with placeholder transitions ✅
- Optimized observer patterns for intersection detection ✅
- Performance metrics logging for detailed debugging ✅
- Memoized challenge filtering to prevent unnecessary recalculations ✅
- Optimized modal rendering with proper cleanup ✅

## Implementation Plan

### Phase 1-6: Initial Implementation ✅
1-6. All initial phases completed

### Phase 7: Refinement and Enhancements ✅
1. Optimize performance across devices
2. Enhanced animations and transitions with Framer Motion
3. Improved accessibility for all users
4. Fixed UI/UX issues:
   - Card expansion with proper AnimatePresence implementation ✅
   - Fixed iframe sandbox attributes to allow proper script execution ✅
   - Added Layout component to all pages for consistent navigation ✅
   - Fixed metadata handling in client components ✅
   - Updated typography with Space Grotesk for headings ✅
   - Added external links and attribution to nuanced ✅
   - Removed insights section for more focused experience ✅
   - Integrated retro-inspired design elements throughout the UI ✅
   - Fixed challenge pages to use real model responses instead of mock data ✅
   - Fixed layout issues with card spacing and animations in challenge pages ✅

### Phase 8: Retro Design Integration and Framer-Inspired Interactions ✅
1. Added subtle CRT scan lines effect to key UI elements
2. Implemented pixel-perfect borders for UI components
3. Added VHS distortion effects for image displays
4. Created terminal-inspired cursor blink animations
5. Designed retro color gradients using strategic accent colors
6. Enhanced hover state animations with lift effects
7. Improved card hover interactions with subtle shadows and transforms
8. Created glass-like surfaces with refined backdrop blur effects
9. Implemented smoother expansion/collapse animations using Framer Motion spring physics

### Phase 9: Gallery Experience Improvements ✅
1. Prioritized visually appealing content (web design and images) on home page 
2. Implemented infinite scroll for efficient loading of model responses
3. Enhanced card hover experience with model information overlay
4. Replaced generic type labels with challenge-specific titles
5. Fixed model name display in expanded view
6. Improved card organization with type-based prioritization

### Phase 10: Advanced Comparison Feature 🆕
1. Created new dedicated compare page for side-by-side model comparison ✅
2. Implemented interactive model selection with provider categorization ✅
3. Developed dynamic challenge filtering system based on model selection ✅
4. Added smooth animations and transitions between comparison states ✅
5. Built modal-based model selector with spring physics animations ✅
6. Added real-time search functionality for challenge discovery ✅
7. Optimized memory usage with proper cleanup of animation states ✅
8. Implemented responsive design for mobile and desktop experiences ✅
9. Added direct linking to model and challenge detail pages ✅
10. Enhanced user experience with subtle loading indicators ✅

## Current Progress
- ✅ Project setup and structure established
- ✅ Core layout components implemented (Header, Footer, Hero)
- ✅ Canvas component system created with expand/collapse
- ✅ Model displays and cards implemented
- ✅ Model comparison functionality implemented
- ✅ Routes created for models, comparisons, capabilities
- ✅ Theme toggle for dark/light mode added
- ✅ Capability icons and categorization added
- ✅ Scroll-triggered animations implemented
- ✅ Comprehensive error states and loading indicators added
- ✅ Challenge gallery with 25 diverse AI challenges implemented
- ✅ Challenge detail pages with model responses created
- ✅ Interactive challenge filtering by category, difficulty, and output type fully implemented
- ✅ Model response system implemented with categorization by type
- ✅ Response detail pages created with full context and model information
- ✅ Redesigned content-forward NewOutputCard component implemented
- ✅ Fixed UI issues with card expansion and hover effects
- ✅ Ensured consistent navigation across all pages with Layout component
- ✅ Fixed metadata handling in client components
- ✅ Updated fonts with Space Grotesk for more distinctive headings
- ✅ Removed insights section for more focused experience
- ✅ Added attribution and external links to nuanced
- ✅ Rebranded from "AI Showcase" to "RIVAL" throughout the application
- ✅ Integrated subtle retro-inspired design elements (CRT scan lines, pixel-perfect borders, VHS distortion)
- ✅ Implemented Framer-inspired interactions and animations
- ✅ Updated color scheme with new retro-inspired accent colors
- ✅ Replaced favicon.ico with SVG version for modern browsers
- ✅ Created utility for mapping model IDs to their respective SVG logos
- ✅ Fixed retro gradient flash issues with proper transitions
- ✅ Implemented safe animation hook to prevent animation jumps
- ✅ Added infinite scroll for efficient loading of model responses
- ✅ Enhanced card hover experience with model information overlay
- ✅ Replaced generic type labels with challenge-specific titles
- ✅ Fixed model name display in expanded view
- ✅ Improved home page with prioritized display of visual content (web design and images)
- ✅ Added new Xbox controller SVG challenge with responses from multiple AI models
- ✅ Fixed ghost cards on initial load with optimized loading strategy
- ✅ Enhanced preloading of card batches for smoother infinite scroll
- ✅ Implemented virtualized rendering for improved performance with large collections of responses
- ✅ Added performance metrics logging in development mode
- ✅ Optimized loading with intelligent batching and placeholders
- ✅ Created custom useVirtualizedItems hook for reusable virtualization logic
- ✅ Fixed challenge pages to use real model responses instead of mock data
- ✅ Fixed layout issues with card spacing and animations in challenge pages
- ✅ Improved animation management to prevent layout jumps
- ✅ Removed Unicode challenge and all associated model responses
- ✅ Added Xbox controller SVG challenge responses for deepseek-r1, gemini-2-0-pro-exp, and gemini-2-0-flash-thinking-exp models
- ✅ Added Xbox controller SVG and World Map SVG challenge responses for o1, o3-mini, and grok-3-thinking models
- ✅ Fixed card expansion bug where the application would crash with "ReferenceError: Can't find variable: renderContent" by implementing the missing renderContent function
- ✅ Refactored NewOutputCard into modular components for better code organization and maintainability
- ✅ Added comprehensive SVG sanitization to handle malformed SVG content, preventing React from crashing
- ✅ Enhanced SVGRenderer with proper error boundaries and fallback rendering
- ✅ Fixed duplicate React key issues in expanded card components
- ✅ Added special handling for World Map SVGs with problematic path data for North America and Antarctica regions
- ✅ Added enhanced error handling for Xbox controller SVG content
- ✅ Implemented dedicated Compare page for interactive side-by-side model comparison
- ✅ Created modal-based model selector with provider categorization
- ✅ Added dynamic challenge filtering based on selected models
- ✅ Implemented smooth animations with Framer Motion for seamless transitions
- ✅ Optimized memory usage with proper cleanup of animation states
- 🔄 Continuing to enhance UI polish and interactions


## Animation Strategy

- **Animation Principles:**
  - Use Framer Motion for smooth, performant animations
  - Implement staggered animations for sequential elements
  - Ensure animations enhance rather than hinder the user experience
  - Fixed animation issues that were causing layout shifts and gaps
  - Added isInitialRender flag to control when animations should be applied
  - Enhanced ExpansionProvider to manage animation states more effectively
  - Simplified animation hierarchy to prevent conflicting layout calculations