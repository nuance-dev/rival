import { ModelResponse } from "@/types/models";

export const minimalistLandingPagegpt_4_5: ModelResponse = {
  id: "gpt-4-5-minimalist-landing-page",
  modelId: "gpt-4-5",
  prompt: "Generate a single-page landing page for a new AI startup that scans your face and tells you your most likely alternate career in another timeline. In a single-page self-contained HTML.",
  responseDate: "2025-03-01",
  type: "website",
  title: "Minimalist Landing Page",
  description: "GPT-4.5's elegant, minimalist landing page design for a luxury perfume brand",
  content: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AlternateYou - Discover Your Alternate Career</title>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
    <style>
        body {
            font-family: 'Roboto', sans-serif;
            margin: 0;
            padding: 0;
            background: linear-gradient(135deg, #6a11cb, #2575fc);
            color: #fff;
            text-align: center;
        }
        .container {
            max-width: 800px;
            margin: 0 auto;
            padding: 50px 20px;
        }
        h1 {
            font-size: 3em;
            margin-bottom: 0.2em;
        }
        p {
            font-size: 1.2em;
            margin-bottom: 2em;
        }
        button {
            background-color: #fff;
            color: #2575fc;
            border: none;
            padding: 15px 30px;
            font-size: 1.2em;
            border-radius: 30px;
            cursor: pointer;
            transition: background-color 0.3s ease;
        }
        button:hover {
            background-color: #f0f0f0;
        }
        .footer {
            margin-top: 50px;
            font-size: 0.9em;
            opacity: 0.8;
        }
        img {
            max-width: 100%;
            height: auto;
            margin-top: 30px;
            border-radius: 10px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>AlternateYou</h1>
        <p>Ever wondered what you'd be doing in another timeline? Our AI scans your face and reveals your most likely alternate career.</p>
        <button onclick="alert('Coming soon! Stay tuned for our launch.')">Discover Your Alternate Career</button>
        <img src="https://source.unsplash.com/featured/?face,ai,technology" alt="AI Face Scan">
        <div class="footer">
            &copy; 2023 AlternateYou. All rights reserved.
        </div>
    </div>
</body>
</html>`
}; 