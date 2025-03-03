import { ModelResponse } from "@/types/models";

export const minimalistLandingPagegemini_2_0_flash_thinking_exp: ModelResponse = {
  id: "gemini-2-0-flash-thinking-exp-minimalist-landing-page",
  modelId: "gemini-2-0-flash-thinking-exp",
  prompt: "Generate a single-page landing page for a new AI startup that scans your face and tells you your most likely alternate career in another timeline. In a single-page self-contained HTML.",
  responseDate: "2025-02-27",
  type: "website",
  title: "Minimalist Landing Page",
  description: "Gemini 2.0 Flash Thinking Exp's response to the Tests an AI's ability to generate a complete, working landing page",
  content: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Timeline Twist - Discover Your Alternate Career</title>
    <style>
        body {
            font-family: sans-serif;
            margin: 0;
            padding: 0;
            color: #333;
            background-color: #f4f4f4;
            line-height: 1.6;
        }

        .container {
            max-width: 960px;
            margin: 0 auto;
            padding: 20px;
        }

        header {
            text-align: center;
            padding: 40px 0;
        }

        header h1 {
            font-size: 2.5em;
            margin-bottom: 10px;
            color: #2c3e50;
        }

        header p {
            font-size: 1.1em;
            color: #777;
        }

        .hero {
            background-color: #fff;
            padding: 40px;
            border-radius: 8px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
            text-align: center;
            margin-bottom: 30px;
        }

        .hero h2 {
            font-size: 2em;
            margin-bottom: 20px;
            color: #3498db;
        }

        .hero p {
            font-size: 1.2em;
            margin-bottom: 30px;
        }

        .cta-button {
            display: inline-block;
            padding: 15px 30px;
            background-color: #3498db;
            color: #fff;
            text-decoration: none;
            border-radius: 5px;
            font-size: 1.2em;
            transition: background-color 0.3s ease;
            cursor: pointer;
            border: none;
        }

        .cta-button:hover {
            background-color: #2980b9;
        }

        .features {
            display: flex;
            justify-content: space-around;
            margin-bottom: 40px;
            flex-wrap: wrap;
        }

        .feature-item {
            text-align: center;
            padding: 20px;
            flex: 1;
            min-width: 200px;
        }

        .feature-item i {
            font-size: 3em; /* Placeholder for icon, you'd use a font icon library or SVG */
            color: #3498db;
            margin-bottom: 15px;
            display: block; /* Ensure consistent spacing */
        }

        .feature-item h3 {
            font-size: 1.3em;
            margin-bottom: 10px;
        }

        .feature-item p {
            color: #555;
        }

        .how-it-works {
            background-color: #fff;
            padding: 40px;
            border-radius: 8px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
            margin-bottom: 30px;
        }

        .how-it-works h2 {
            font-size: 2em;
            margin-bottom: 20px;
            color: #3498db;
            text-align: center;
        }

        .steps {
            display: flex;
            justify-content: space-around;
            flex-wrap: wrap;
            text-align: center;
        }

        .step {
            flex: 1;
            padding: 20px;
            min-width: 150px;
        }

        .step h4 {
            font-size: 1.2em;
            margin-bottom: 10px;
            color: #333;
        }

        .step p {
            color: #555;
        }

        footer {
            text-align: center;
            padding: 20px 0;
            color: #777;
            border-top: 1px solid #eee;
        }

        #scan-section {
            display: none; /* Initially hidden */
            background-color: #e0f7fa;
            padding: 40px;
            border-radius: 8px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
            text-align: center;
            margin-bottom: 30px;
        }

        #scan-section h2 {
            font-size: 2em;
            margin-bottom: 20px;
            color: #26a69a; /* A different color for emphasis */
        }

        #scan-section p {
            font-size: 1.2em;
            margin-bottom: 30px;
            color: #555;
        }

        #scan-section .result {
            font-size: 1.5em;
            font-weight: bold;
            color: #26a69a;
            margin-top: 20px;
        }

        #loading-message {
            display: none; /* Initially hidden */
            margin-top: 20px;
            font-style: italic;
            color: #777;
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
            header h1 {
                font-size: 2em;
            }
            header p {
                font-size: 1em;
            }
            .hero h2 {
                font-size: 1.8em;
            }
            .hero p {
                font-size: 1.1em;
            }
            .features {
                flex-direction: column;
                align-items: center;
            }
            .feature-item {
                margin-bottom: 20px;
            }
            .steps {
                flex-direction: column;
                align-items: center;
            }
            .step {
                margin-bottom: 20px;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <header>
            <h1>Timeline Twist</h1>
            <p>Discover Your Most Likely Alternate Career Path</p>
        </header>

        <section class="hero">
            <h2>Unlock Your Alternate Timeline Career</h2>
            <p>Ever wondered what you might be doing in another reality? Our AI-powered facial scan analyzes subtle nuances in your features to predict your most probable alternate career path. It's fun, insightful, and just a scan away!</p>
            <button class="cta-button" id="scan-button">Scan My Face Now</button>
        </section>

        <section class="features">
            <div class="feature-item">
                <i style="font-family: sans-serif;"></i> <!-- Placeholder Icon: Computer -->
                <h3>AI-Powered Prediction</h3>
                <p>Cutting-edge facial recognition and career AI for surprisingly accurate insights.</p>
            </div>
            <div class="feature-item">
                <i style="font-family: sans-serif;"></i> <!-- Placeholder Icon: Magnifying Glass -->
                <h3>Intriguing Insights</h3>
                <p>Explore career possibilities you might never have considered. Expand your horizons!</p>
            </div>
            <div class="feature-item">
                <i style="font-family: sans-serif;">✨</i> <!-- Placeholder Icon: Sparkles -->
                <h3>Fun & Engaging</h3>
                <p>A unique and entertaining experience to share with friends and family.</p>
            </div>
        </section>

        <section class="how-it-works">
            <h2>How It Works</h2>
            <div class="steps">
                <div class="step">
                    <h4>1. Scan Your Face</h4>
                    <p>Click the "Scan My Face Now" button and allow access to your device's camera (simulated for this demo).</p>
                </div>
                <div class="step">
                    <h4>2. AI Analysis</h4>
                    <p>Our advanced AI algorithms analyze your facial features and compare them across timelines.</p>
                </div>
                <div class="step">
                    <h4>3. Discover Your Career</h4>
                    <p>Get your personalized alternate career prediction and explore a new "you".</p>
                </div>
            </div>
        </section>

        <section id="scan-section">
            <h2>Your Alternate Career Path Revealed!</h2>
            <p>Based on your facial signature, our AI has delved into alternate timelines and found your most likely career path in another reality:</p>
            <p id="loading-message">Analyzing your face... Please wait a moment.</p>
            <p class="result" id="scan-result"></p>
            <button class="cta-button" id="scan-again-button" style="display: none;">Scan Again</button>
        </section>

        <footer>
            <p>© 2023 Timeline Twist. All rights reserved. <br> <small>This is a demo landing page for illustrative purposes only.</small></p>
        </footer>
    </div>

    <script>
        document.getElementById('scan-button').addEventListener('click', function() {
            document.getElementById('hero').style.display = 'none';
            document.getElementById('how-it-works').style.display = 'none';
            document.getElementById('features').style.display = 'none';
            document.getElementById('scan-section').style.display = 'block';
            document.getElementById('loading-message').style.display = 'block';
            document.getElementById('scan-result').textContent = ''; // Clear previous result
            document.getElementById('scan-again-button').style.display = 'none';

            // Simulate AI processing delay and result
            setTimeout(function() {
                document.getElementById('loading-message').style.display = 'none';
                const alternateCareers = [
                    "Astronaut",
                    "Chef",
                    "Musician",
                    "Detective",
                    "Architect",
                    "Wildlife Photographer",
                    "Software Engineer",
                    "Historian",
                    "Librarian",
                    "Botanist"
                ];
                const randomIndex = Math.floor(Math.random() * alternateCareers.length);
                document.getElementById('scan-result').textContent = alternateCareers[randomIndex];
                document.getElementById('scan-again-button').style.display = 'inline-block';
            }, 2000); // Simulate 2 seconds of processing
        });

        document.getElementById('scan-again-button').addEventListener('click', function() {
            document.getElementById('hero').style.display = 'block';
            document.getElementById('how-it-works').style.display = 'block';
            document.getElementById('features').style.display = 'block';
            document.getElementById('scan-section').style.display = 'none';
        });
    </script>
</body>
</html>`
};
