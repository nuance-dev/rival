import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ExpansionProvider } from "@/components/canvas/ExpansionProvider";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { Analytics } from "@vercel/analytics/react";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://rival.tips'),
  title: {
    default: "Rival - AI Model Vibe Tests",
    template: "%s | Rival",
  },
  description: "The best tests are vibe tests. Compare cutting-edge AI models like GPT-4o, Claude 3.7, Grok-3, and more in a beautiful, interactive showcase. See how different models respond to the same prompts.",
  keywords: [
    "AI", "Artificial Intelligence", "AI Models", "Machine Learning", 
    "RIVAL", "Comparison", "Grok-3", "Claude 3.7", "GPT-4o", "O1", "O3", 
    "AI Benchmark", "Model Performance", "AI Showcase", "AI Visualization",
    "Vibe Tests", "AI Vibes"
  ],
  authors: [{ name: "Rival Team", url: "https://rival.tips" }],
  creator: "Rival",
  publisher: "Rival",
  applicationName: "Rival",
  category: "Technology",
  classification: "AI Model Vibe Tests",
  
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rival.tips",
    title: {
      default: "Rival - AI Model Vibe Tests",
      template: "%s | Rival"
    },
    description: "The best tests are vibe tests. Compare cutting-edge AI models like GPT-4o, Claude 3.7, Grok-3, and more in a beautiful, interactive showcase.",
    siteName: "Rival",
    images: [
      {
        url: "/opengraph.png",
        width: 1200,
        height: 630,
        alt: "Rival - AI Model Vibe Tests"
      }
    ]
  },
  
  twitter: {
    card: "summary_large_image",
    title: {
      default: "Rival - AI Model Vibe Tests",
      template: "%s | Rival"
    },
    description: "The best tests are vibe tests. Compare cutting-edge AI models in an interactive showcase.",
    creator: "@nuancedev",
    site: "@nuancedev",
    images: [
      {
        url: "/twitter-image.png",
        width: 1200,
        height: 630,
        alt: "Rival - AI Model Vibe Tests"
      }
    ]
  },
  
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  alternates: {
    canonical: 'https://rival.tips',
    languages: {
      'en-US': 'https://rival.tips',
    },
  },
  
  // Verification for search console and other webmaster tools
  verification: {
    // Replace with your actual verification codes when you have them
    google: 'google-site-verification=your-verification-code',
    // yandex: 'yandex-verification-code',
    // bing: 'bing-verification-code',
  },
  
  // App specific metadata for mobile
  appleWebApp: {
    title: "Rival",
    statusBarStyle: "black-translucent",
    capable: true,
  },
  
  formatDetection: {
    telephone: false, // Disable automatic telephone number detection
  },
  
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/safari-pinned-tab.svg',
        color: '#10b981'
      }
    ]
  },
  
  manifest: '/site.webmanifest',
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Jacquard+24:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        {/* Script to apply theme before page renders to prevent flash */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const savedTheme = localStorage.getItem('theme');
                  document.documentElement.classList.remove('light', 'dark');
                  document.documentElement.classList.add(savedTheme || 'dark');
                } catch (e) {
                  document.documentElement.classList.add('dark');
                }
              })();
            `,
          }}
        />
      </head>
      <body
        className={cn(
          "min-h-screen bg-[hsl(var(--background))] font-sans antialiased relative",
          geistSans.variable,
          geistMono.variable,
          spaceGrotesk.variable
        )}
        suppressHydrationWarning
      >
        {/* Pattern Background with subtle CRT effect */}
        <div className="fixed inset-0 pattern-background pointer-events-none z-0"></div>
        <div className="fixed inset-0 grid-background pointer-events-none z-0 opacity-30"></div>
        <div className="fixed inset-0 crt-scanlines pointer-events-none z-0"></div>
        
        <ThemeProvider>
          <ExpansionProvider>
            {children}
          </ExpansionProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
