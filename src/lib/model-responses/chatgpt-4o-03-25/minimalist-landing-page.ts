import { ModelResponse } from "@/types/models";
import { sanitizeModelResponseContent } from "@/lib/utils";

export const minimalistUlandingUpagechatgpt_4o_03_25: ModelResponse = {
  id: "chatgpt-4o-03-25-minimalist-landing-page",
  modelId: "chatgpt-4o-03-25",
  prompt: "Generate a single-page landing page for a new AI startup that scans your face and tells you your most likely alternate career in another timeline. In a single-page self-contained HTML.",
  responseDate: "2025-03-30",
  type: "website",
  title: "minimalist-landing-page",
  description: "ChatGPT-4o March 2025's response",
  content: sanitizeModelResponseContent(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Product Name</title>
  <style>
    :root {
      --bg: #0d0d0d;
      --fg: #ffffff;
      --gray: #888;
      --accent: #6366f1;
      --font: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    }
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    body {
      background: var(--bg);
      color: var(--fg);
      font-family: var(--font);
      line-height: 1.6;
      padding: 2rem;
    }
    header {
      max-width: 720px;
      margin: 0 auto;
      text-align: center;
    }
    header h1 {
      font-size: 2.75rem;
      font-weight: 600;
      margin-bottom: 1rem;
    }
    header p {
      color: var(--gray);
      font-size: 1.125rem;
    }
    .cta {
      margin-top: 2rem;
    }
    .cta button {
      background: var(--accent);
      color: white;
      padding: 0.75rem 1.5rem;
      border: none;
      border-radius: 8px;
      font-size: 1rem;
      cursor: pointer;
      transition: background 0.2s;
    }
    .cta button:hover {
      background: #4f46e5;
    }
    .features {
      max-width: 800px;
      margin: 4rem auto;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 2rem;
    }
    .feature {
      background: #1a1a1a;
      padding: 1.5rem;
      border-radius: 12px;
    }
    .feature h3 {
      margin-bottom: 0.5rem;
      font-size: 1.25rem;
    }
    .feature p {
      color: var(--gray);
      font-size: 0.95rem;
    }
    footer {
      text-align: center;
      color: #555;
      font-size: 0.875rem;
      margin-top: 6rem;
    }
    @media (max-width: 768px) {
      .features {
        grid-template-columns: 1fr;
      }
    }
  </style>
</head>
<body>
  <header>
    <h1>Product Name</h1>
    <p>Modern tools for fast-moving teams. Clean. Minimal. Powerful.</p>
    <div class="cta">
      <button>Get Started</button>
    </div>
  </header>
  <section class="features">
    <div class="feature">
      <h3>Blazing Fast</h3>
      <p>Everything loads instantly. No wait, no waste.</p>
    </div>
    <div class="feature">
      <h3>Minimal UI</h3>
      <p>Designed to stay out of your way, so you can stay in flow.</p>
    </div>
    <div class="feature">
      <h3>Sync Across Devices</h3>
      <p>Your work is always with you, wherever you go.</p>
    </div>
    <div class="feature">
      <h3>Privacy First</h3>
      <p>We don’t track you. Your data is yours, always.</p>
    </div>
  </section>
  <footer>
    &copy; 2025 Product Name. All rights reserved.
  </footer>
</body>
</html>
`)
}; 