import { ModelResponse } from "@/types/models";

export const minimalistLandingPageclaude_3_5_sonnet: ModelResponse = {
  id: "claude-3-5-sonnet-minimalist-landing-page",
  modelId: "claude-3-5-sonnet",
  prompt: "Generate a single-page landing page for a new AI startup that scans your face and tells you your most likely alternate career in another timeline. In a single-page self-contained HTML.",
  responseDate: "2025-02-26",
  type: "website"  ,
  title: "Minimalist Landing Page"  ,
  description: "Claude 3 5 Sonnet's response to the Tests an AI's ability to generate a complete, working landing page",
  content: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"   content="width=device-width, initial-scale=1.0">
    <title>AlternaCareer AI - Discover Your Parallel Universe Career</title>
    <style>
        :root {
            --primary-color: #6366f1;
            --secondary-color: #818cf8;
            --text-color: #1f2937;
            --light-bg: #f3f4f6;
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Segoe UI', system-ui, sans-serif;
        }

        body {
            line-height: 1.6;
            color: var(--text-color);
        }

        .hero {
            min-height: 100vh;
            background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
            color: white;
            padding: 2rem;
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 2rem;
        }

        h1 {
            font-size: 3.5rem;
            margin: 2rem 0;
            line-height: 1.2;
        }

        .tagline {
            font-size: 1.5rem;
            margin-bottom: 3rem;
            opacity: 0.9;
        }

        .cta-button {
            background-color: white;
            color: var(--primary-color);
            padding: 1rem 2rem;
            border-radius: 50px;
            font-size: 1.2rem;
            font-weight: bold;
            text-decoration: none;
            transition: transform 0.2s;
            margin: 1rem;
        }

        .cta-button:hover {
            transform: scale(1.05);
        }

        .features {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 2rem;
            margin-top: 4rem;
        }

        .feature {
            background: rgba(255, 255, 255, 0.1);
            padding: 2rem;
            border-radius: 1rem;
            backdrop-filter: blur(10px);
        }

        .feature-icon {
            font-size: 2rem;
            margin-bottom: 1rem;
        }

        .demo-section {
            background: var(--light-bg);
            padding: 4rem 2rem;
            text-align: center;
            margin-top: 2rem;
        }

        .camera-container {
            width: 320px;
            height: 240px;
            background: #ddd;
            margin: 2rem auto;
            border-radius: 1rem;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.2rem;
            color: #666;
        }

        @media (max-width: 768px) {
            h1 {
                font-size: 2.5rem;
            }
            
            .tagline {
                font-size: 1.2rem;
            }
        }
    </style>
</head>
<body>
    <main class="hero">
        <div class="container">
            <h1>Discover Your Multiverse Career</h1>
            <p class="tagline">What if you took a different path? Our AI reveals your most successful alternate career from parallel universes.</p>
            
            <a href="#try-now" class="cta-button">Try it Now</a>
            
            <div class="features">
                <div class="feature">
                    <div class="feature-icon">🤖</div>
                    <h3>Advanced AI Analysis</h3>
                    <p>Our deep learning model analyzes facial features, micro-expressions, and personality markers.</p>
                </div>
                <div class="feature">
                    <div class="feature-icon">🌌</div>
                    <h3>Multiverse Data</h3>
                    <p>Trained on theoretical physics and career success patterns across infinite possibilities.</p>
                </div>
                <div class="feature">
                    <div class="feature-icon">✨</div>
                    <h3>Instant Results</h3>
                    <p>Get your alternate timeline career match in seconds, complete with success probability.</p>
                </div>
            </div>
        </div>

        <section id="try-now" class="demo-section">
            <div class="container">
                <h2>Try AlternaCareer AI</h2>
                <p>Position your face in the camera and discover your parallel universe profession</p>
                <div class="camera-container">
                    Camera Access Required
                </div>
                <a href="#" class="cta-button">Scan My Face</a>
            </div>
        </section>
    </main>
</body>
</html>`
};
