import { ModelResponse } from "@/types/models";

export const websiteLandingPageGpt4oMini: ModelResponse = {
  id: "gpt-4o-mini-website-landing-page", // model-id-slug + challenge-id
  modelId: "gpt-4o-mini", // model-id-slug
  prompt: `Design a modern, minimal landing page for a music streaming app called "Wavefront" that focuses on indie artists. The landing page should have a hero section, features section, and call-to-action. Use a color scheme of deep purples and teals. In a single-page self-contained HTML.`, // The prompt extracted in Step 2
  responseDate: "2025-04-11", // user_provided_date
  type: "website", // Determined from content
  title: "Music App Landing Page", // From the gpt-4o reference file
  description: "GPT-4o mini's response to the challenge: Design a modern, minimal landing page for Wavefront.", // Write a brief description
  content: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Wavefront - Stream Indie Music</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            color: white;
            background: linear-gradient(135deg, #5f2c91, #9c27b0);
        }
        header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 20px;
        }
        h1 {
            font-size: 2.5em;
        }
        .hero {
            text-align: center;
            padding: 100px 20px;
            background: rgba(0, 0, 0, 0.5);
        }
        .hero h1 {
            font-size: 4em;
        }
        .hero p {
            font-size: 1.5em;
        }
        .button {
            background: #009688;
            color: white;
            padding: 15px 30px;
            border: none;
            border-radius: 30px;
            font-size: 1.2em;
            cursor: pointer;
            transition: background 0.3s;
        }
        .button:hover {
            background: #00796b;
        }
        .features {
            padding: 50px 20px;
            background: rgba(255, 255, 255, 0.1);
        }
        .features h2 {
            font-size: 2.5em;
            text-align: center;
            margin-bottom: 40px;
        }
        .feature {
            text-align: center;
            margin-bottom: 30px;
        }
        .feature h3 {
            font-size: 1.8em;
            margin: 10px 0;
        }
        .feature p {
            font-size: 1em;
            max-width: 600px;
            margin: 0 auto;
        }
        footer {
            text-align: center;
            padding: 30px 20px;
            background: rgba(0, 0, 0, 0.5);
        }
    </style>
</head>
<body>

<header>
    <h1>Wavefront</h1>
    <button class="button">Log In</button>
</header>

<section class="hero">
    <h1>Discover Indie Music</h1>
    <p>Stream, share, and support your favorite indie artists.</p>
    <button class="button">Start Listening</button>
</section>

<section class="features">
    <h2>Features</h2>
    <div class="feature">
        <h3>Curated Playlists</h3>
        <p>Enjoy playlists handpicked by indie enthusiasts tailored to your mood.</p>
    </div>
    <div class="feature">
        <h3>Exclusive Releases</h3>
        <p>Be the first to listen to exclusive tracks and albums from upcoming artists.</p>
    </div>
    <div class="feature">
        <h3>Community Support</h3>
        <p>Join a community of music lovers to discover and support indie talent.</p>
    </div>
</section>

<footer>
    <p>&copy; 2023 Wavefront. All rights reserved.</p>
</footer>

</body>
</html>`
}; 