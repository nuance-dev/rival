import { ModelResponse } from "@/types/models";
import { sanitizeModelResponseContent } from "@/lib/utils";

export const minimalistLandingPagegrok_3_mini_beta: ModelResponse = {
  id: "grok-3-mini-beta-minimalist-landing-page",
  modelId: "grok-3-mini-beta",
  prompt: "Generate a single-page landing page for a new AI startup that scans your face and tells you your most likely alternate career in another timeline. In a single-page self-contained HTML.",
  responseDate: "2025-04-11",
  type: "website",
  title: "Minimalist Landing Page",
  description: "Grok 3 Mini Beta's response to the challenge of generating a complete, working landing page",
  content: sanitizeModelResponseContent(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Alternate Timeline AI - Discover Your Parallel Career</title>
    <style>
        /* Basic Reset */
        body, html {
            margin: 0;
            padding: 0;
            font-family: Arial, sans-serif;
            background-color: #f0f4f8; /* Light blue-gray background for a futuristic feel */
            color: #333;
        }

        /* Container for centering content */
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
            text-align: center;
        }

        /* Hero Section */
        .hero {
            background-color: #1a237e; /* Dark blue for header */
            color: #ffffff;
            padding: 100px 20px;
            position: relative;
        }

        .hero h1 {
            font-size: 2.5em;
            margin-bottom: 10px;
        }

        .hero p {
            font-size: 1.2em;
            margin-bottom: 30px;
        }

        .cta-button {
            background-color: #ff5722; /* Orange for button */
            color: #fff;
            border: none;
            padding: 15px 30px;
            font-size: 1.1em;
            cursor: pointer;
            border-radius: 5px;
            transition: background-color 0.3s;
        }

        .cta-button:hover {
            background-color: #e64a19; /* Darker orange on hover */
        }

        /* Content Sections */
        .section {
            padding: 50px 20px;
        }

        .section h2 {
            font-size: 2em;
            margin-bottom: 20px;
        }

        .section p {
            font-size: 1em;
            line-height: 1.6;
        }

        /* Steps Section */
        .steps {
            display: flex;
            justify-content: space-around;
            flex-wrap: wrap;
        }

        .step {
            background-color: #fff;
            border: 1px solid #ddd;
            border-radius: 10px;
            padding: 20px;
            margin: 10px;
            width: 250px;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        }

        /* Footer */
        .footer {
            background-color: #1a237e;
            color: #fff;
            padding: 20px;
            text-align: center;
            font-size: 0.9em;
        }

        /* Modal for Results (Simple Overlay) */
        .modal {
            display: none; /* Hidden by default */
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0,0,0,0.8);
            justify-content: center;
            align-items: center;
            z-index: 1000;
        }

        .modal-content {
            background-color: #fff;
            color: #333;
            padding: 40px;
            border-radius: 10px;
            max-width: 500px;
            text-align: center;
            position: relative;
        }

        .close-btn {
            position: absolute;
            top: 10px;
            right: 10px;
            background: none;
            border: none;
            font-size: 1.5em;
            cursor: pointer;
        }
    </style>
</head>
<body>
    <div class="hero">
        <div class="container">
            <h1>Discover Your Alternate Career</h1>
            <p>Scan your face with our AI and uncover the career path you might have pursued in a parallel universe.</p>
            <button class="cta-button" onclick="showAlternateCareer()">Try Face Scan Now</button>
        </div>
    </div>

    <div class="section">
        <div class="container">
            <h2>How It Works</h2>
            <div class="steps">
                <div class="step">
                    <h3>Step 1: Scan Your Face</h3>
                    <p>Use your device's camera to let our AI analyze your facial features.</p>
                </div>
                <div class="step">
                    <h3>Step 2: AI Analysis</h3>
                    <p>Our advanced algorithms process your scan to detect alternate timeline traits.</p>
                </div>
                <div class="step">
                    <h3>Step 3: Reveal Your Career</h3>
                    <p>Get a fun, personalized result showing your most likely alternate career!</p>
                </div>
            </div>
        </div>
    </div>

    <div class="section">
        <div class="container">
            <h2>Why Try Alternate Timeline AI?</h2>
            <p>Ever wondered what life could have been like if you'd made different choices? Our AI uses playful facial recognition to generate a hypothetical career based on subtle traits in your appearance. It's entertaining, insightful, and a great conversation starter!</p>
            <p><strong>Features:</strong></p>
            <ul style="text-align: left; display: inline-block;">
                <li>Quick and easy face scan</li>
                <li>Fun, randomized results for entertainment</li>
                <li>100% fictional and hypothetical—no real predictions!</li>
            </ul>
        </div>
    </div>

    <div class="footer">
        <div class="container">
            <p>&copy; 2023 Alternate Timeline AI. All rights reserved. This is a fictional demo for entertainment purposes only.</p>
        </div>
    </div>

    <!-- Modal for Displaying Results -->
    <div id="modal" class="modal">
        <div class="modal-content">
            <button class="close-btn" onclick="closeModal()">&times;</button>
            <h2>Your Alternate Career</h2>
            <p id="resultText">Click "Try Face Scan Now" to see your result!</p>
        </div>
    </div>

    <script>
        // JavaScript for simulating the AI response
        function showAlternateCareer() {
            const careers = [
                "Astronaut exploring distant galaxies",
                "Renowned Artist creating masterpieces",
                "World-Famous Chef innovating global cuisine",
                "Acclaimed Musician touring the world",
                "Brilliant Scientist discovering new technologies",
                "Adventurous Archaeologist uncovering ancient mysteries",
                "Inspirational Teacher shaping young minds",
                "Successful Entrepreneur building empires",
                "Talented Writer penning bestsellers",
                "Daring Pilot flying across timelines"
            ];
            
            const randomIndex = Math.floor(Math.random() * careers.length);
            const result = careers[randomIndex];
            
            document.getElementById('resultText').innerText = 'In an alternate timeline, you might be a ' + result + '!';
            document.getElementById('modal').style.display = 'flex';  // Show the modal
        }

        function closeModal() {
            document.getElementById('modal').style.display = 'none';  // Hide the modal
        }
    </script>
</body>
</html>
`)
}; 