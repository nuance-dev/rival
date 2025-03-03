import { ModelResponse } from "@/types/models";

export const minimalistLandingPagegrok_3: ModelResponse = {
  id: "grok-3-minimalist-landing-page",
  modelId: "grok-3",
  prompt: "Generate a single-page landing page for a new AI startup that scans your face and tells you your most likely alternate career in another timeline. In a single-page self-contained HTML.",
  responseDate: "2025-02-28",
  type: "website"  ,
  title: "Minimalist Landing Page"  ,
  description: "Grok 3's response to the Tests an AI's ability to generate a complete, working landing page",
  content: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Alternate You AI</title>
    <style>
        body {
            margin: 0;
            font-family: Arial, sans-serif;
            background: linear-gradient(135deg, #1e3c72, #2a5298);
            color: #fff;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            text-align: center;
        }
        .container {
            max-width: 800px;
            padding: 40px;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 15px;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
            backdrop-filter: blur(10px);
        }
        h1 {
            font-size: 2.5em;
            margin-bottom: 20px;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
        }
        p {
            font-size: 1.2em;
            line-height: 1.6;
            margin-bottom: 30px;
        }
        .cta-button {
            display: inline-block;
            padding: 15px 30px;
            background-color: #00d4ff;
            color: #1e3c72;
            text-decoration: none;
            font-weight: bold;
            border-radius: 25px;
            transition: transform 0.3s, box-shadow 0.3s;
        }
        .cta-button:hover {
            transform: scale(1.05);
            box-shadow: 0 4px 15px rgba(0, 212, 255, 0.5);
        }
        footer {
            margin-top: 40px;
            font-size: 0.9em;
            opacity: 0.8;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Discover Your Alternate Career with Alternate You AI</h1>
        <p>Ever wondered what you’d be doing in another timeline? Our cutting-edge AI scans your face and reveals your most likely alternate career—whether it’s a rockstar, astronaut, or medieval blacksmith. Step into the multiverse and find out who you could have been!</p>
        <a href="#" class="cta-button">Scan Your Face Now</a>
        <footer>&copy; 2025 Alternate You AI. All rights reserved.</footer>
    </div>
</body>
</html>`
};
