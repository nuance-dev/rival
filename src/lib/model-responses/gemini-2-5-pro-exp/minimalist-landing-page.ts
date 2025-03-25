import { ModelResponse } from "@/types/models";
import { sanitizeModelResponseContent } from "@/lib/utils";

export const minimalistUlandingUpagegemini_2_5_pro_exp: ModelResponse = {
  id: "gemini-2-5-pro-exp-minimalist-landing-page",
  modelId: "gemini-2-5-pro-exp",
  prompt: "Generate a single-page landing page for a new AI startup that scans your face and tells you your most likely alternate career in another timeline. In a single-page self-contained HTML.",
  responseDate: "2025-03-25",
  type: "website",
  title: "minimalist-landing-page",
  description: "Gemini 2.5 Pro Experimental's response",
  content: sanitizeModelResponseContent(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ChronoCareers - Discover Your Alternate Timeline Career</title>
    <style>
        /* Basic Reset */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Segoe UI', 'Roboto', 'Helvetica Neue', Arial, sans-serif;
            line-height: 1.6;
            color: #e0e0e0;
            background-color: #1a1a2e; /* Dark blue/purple background */
            background-image: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
            overflow-x: hidden; /* Prevent horizontal scroll */
        }

        .container {
            max-width: 960px;
            margin: 0 auto;
            padding: 0 20px;
        }

        /* Header / Hero Section */
        header {
            padding: 80px 0 60px;
            text-align: center;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        header h1 {
            font-size: 3rem;
            margin-bottom: 15px;
            color: #ffffff;
            font-weight: 700;
            text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
        }

        header p.subtitle {
            font-size: 1.2rem;
            margin-bottom: 30px;
            color: #a7c5eb; /* Lighter blue */
            max-width: 600px;
            margin-left: auto;
            margin-right: auto;
        }

        .cta-button {
            display: inline-block;
            background-color: #e94560; /* Contrasting pink/red */
            color: #ffffff;
            padding: 15px 35px;
            font-size: 1.1rem;
            font-weight: 600;
            text-decoration: none;
            border-radius: 30px;
            transition: background-color 0.3s ease, transform 0.2s ease;
            box-shadow: 0 4px 10px rgba(233, 69, 96, 0.4);
            border: none;
            cursor: pointer;
        }

        .cta-button:hover {
            background-color: #f05f78;
            transform: translateY(-2px);
            box-shadow: 0 6px 15px rgba(233, 69, 96, 0.5);
        }

        /* How it Works Section */
        .how-it-works {
            padding: 60px 0;
            text-align: center;
            background-color: rgba(255, 255, 255, 0.05);
        }

        .how-it-works h2 {
            font-size: 2rem;
            margin-bottom: 40px;
            color: #ffffff;
        }

        .steps {
            display: flex;
            justify-content: space-around;
            flex-wrap: wrap;
            gap: 30px;
        }

        .step {
            flex: 1;
            min-width: 250px;
            max-width: 300px;
            padding: 25px;
            background-color: rgba(15, 52, 96, 0.5); /* Slightly darker blue */
            border-radius: 10px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
            border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .step-icon {
            font-size: 2.5rem;
            margin-bottom: 15px;
            color: #a7c5eb;
        }

        .step h3 {
            font-size: 1.3rem;
            margin-bottom: 10px;
            color: #ffffff;
        }

        /* Features Section */
        .features {
            padding: 60px 0;
        }

        .features h2 {
            text-align: center;
            font-size: 2rem;
            margin-bottom: 40px;
            color: #ffffff;
        }

        .feature-item {
            display: flex;
            align-items: center;
            margin-bottom: 30px;
            background: rgba(0,0,0,0.1);
            padding: 20px;
            border-radius: 8px;
        }

         .feature-item:nth-child(even) {
            flex-direction: row-reverse;
         }

        .feature-icon {
            font-size: 2.5rem; /* Larger icon size */
            color: #e94560;
            margin: 0 25px;
            flex-shrink: 0;
        }

        .feature-text h3 {
            font-size: 1.4rem;
            margin-bottom: 5px;
            color: #ffffff;
        }

        .feature-text p {
             color: #b0c4de; /* Light steel blue */
        }

        /* Final CTA Section */
        .final-cta {
            padding: 60px 0;
            text-align: center;
            background-color: rgba(233, 69, 96, 0.1); /* Subtle pink background */
        }

        .final-cta h2 {
             font-size: 2rem;
            margin-bottom: 25px;
            color: #ffffff;
        }

        /* Footer */
        footer {
            padding: 30px 0;
            text-align: center;
            font-size: 0.9rem;
            color: #a7c5eb;
            border-top: 1px solid rgba(255, 255, 255, 0.1);
            margin-top: 40px;
        }

        footer p {
             margin-bottom: 5px;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
            header h1 {
                font-size: 2.5rem;
            }

            header p.subtitle {
                font-size: 1rem;
            }

            .steps {
                flex-direction: column;
                align-items: center;
            }

            .step {
                width: 90%;
                max-width: none;
            }

             .feature-item, .feature-item:nth-child(even) {
                flex-direction: column;
                text-align: center;
            }

            .feature-icon {
                 margin: 0 0 15px 0; /* Adjust margin for vertical layout */
            }
        }

         @media (max-width: 480px) {
             header h1 {
                font-size: 2rem;
            }
             .cta-button {
                 padding: 12px 25px;
                 font-size: 1rem;
             }
              .how-it-works h2, .features h2, .final-cta h2 {
                 font-size: 1.8rem;
             }
         }

    </style>
</head>
<body>

    <!-- Header / Hero Section -->
    <header>
        <div class="container">
            <h1>ChronoCareers</h1>
            <p class="subtitle">Ever wondered what life path you might be walking in a parallel universe? Our advanced AI analyzes your facial harmonics to reveal your most likely alternate timeline career.</p>
            <button class="cta-button" onclick="startScan()">Unlock Your Alternate Career</button>
            <p style="font-size: 0.8rem; margin-top: 15px; color: #a7c5eb;">(No actual scan required for this demo)</p>
        </div>
    </header>

    <!-- How it Works Section -->
    <section class="how-it-works">
        <div class="container">
            <h2>Unveil Your Other Self in 3 Simple Steps</h2>
            <div class="steps">
                <div class="step">
                    <div class="step-icon">👤</div>
                    <h3>1. Allow Access</h3>
                    <p>Grant temporary permission for our AI to analyze your facial structure via your device's camera (or upload a photo - functionality simulated).</p>
                </div>
                <div class="step">
                    <div class="step-icon">✨</div>
                    <h3>2. Quantum Analysis</h3>
                    <p>Our proprietary Chrono-Algorithmic Visual Engine (CAVE) scans subtle markers linked to potential aptitudes across timelines.</p>
                </div>
                <div class="step">
                    <div class="step-icon">📜</div>
                    <h3>3. Reveal Your Path</h3>
                    <p>Receive a detailed profile of your most probable alternate career, including potential skills and industry insights from another reality.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Features Section -->
    <section class="features">
        <div class="container">
            <h2>Why Explore ChronoCareers?</h2>
            <div class="feature-item">
                <div class="feature-icon">🌌</div>
                <div class="feature-text">
                    <h3>Quantum Curiosity</h3>
                    <p>Satisfy the fundamental human question: "What if?" Explore the untapped potential that might exist just a reality-shift away.</p>
                </div>
            </div>
            <div class="feature-item">
                <div class="feature-icon">💡</div>
                <div class="feature-text">
                    <h3>Personalized Insight</h3>
                    <p>Our AI doesn't guess. It analyzes unique facial harmonics to provide a surprisingly resonant glimpse into an alternate version of you.</p>
                </div>
            </div>
             <div class="feature-item">
                <div class="feature-icon">🎭</div>
                <div class="feature-text">
                    <h3>Pure Entertainment</h3>
                    <p>Discover if alternate-you is a starship captain, a bio-luminescent farmer, or a master artisan. It's a fun, unique way to see yourself differently!</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Final CTA Section -->
    <section class="final-cta">
        <div class="container">
            <h2>Ready to Peer Through the Quantum Veil?</h2>
            <p style="margin-bottom: 30px; color: #e0e0e0;">Your alternate self is waiting. Find out what career path they chose.</p>
            <button class="cta-button" onclick="startScan()">Unlock My Alternate Career</button>
        </div>
    </section>

    <!-- Footer -->
    <footer>
        <div class="container">
            <p>© 2024 ChronoCareers. All rights reserved.</p>
            <p style="font-size: 0.8em;">Disclaimer: ChronoCareers provides speculative results based on fictional AI analysis for entertainment purposes only. Results do not reflect real-world career aptitude or guarantee employment in any timeline.</p>
        </div>
    </footer>

    <script>
        // Simple placeholder function for the button click
        function startScan() {
            // In a real application, this would initiate camera access or file upload.
            // For this demo, we'll just show an alert.
            const possibleCareers = [
                "Quantum Botanist",
                "Zero-G Architect",
                "Neural Network Weaver",
                "Sentient City Planner",
                "Chrono-Historian",
                "AI Ethicist",
                "Atmospheric Sculptor",
                "Deep Sea Cartographer",
                "Memory Palace Curator",
                "Solar Sail Racer"
            ];
            const randomIndex = Math.floor(Math.random() * possibleCareers.length);
            const alternateCareer = possibleCareers[randomIndex];

            alert('Analyzing facial harmonics... \n\nBased on our cross-dimensional scan, your most likely alternate timeline career is:\n\n✨ ' + alternateCareer + ' ✨\n\n(This result is randomly generated for demonstration purposes.)');
        }
    </script>

</body>
</html>`)
};
