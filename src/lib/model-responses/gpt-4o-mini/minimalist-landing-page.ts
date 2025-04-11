import { ModelResponse } from "@/types/models";
import { sanitizeModelResponseContent } from "@/lib/utils";

export const minimalistLandingPageGpt4oMini: ModelResponse = {
  id: "gpt-4o-mini-minimalist-landing-page", // model-id-slug + challenge-id
  modelId: "gpt-4o-mini", // model-id-slug
  prompt: "Generate a single-page landing page for a new AI startup that scans your face and tells you your most likely alternate career in another timeline. In a single-page self-contained HTML.", // The prompt extracted in Step 2
  responseDate: "2025-04-11", // user_provided_date
  type: "website", // Determined from content
  title: "Minimalist Landing Page", // From the gpt-4o reference file
  description: "GPT-4o mini's response to the challenge: Generate a minimalist landing page for an AI startup.", // Write a brief description
  content: sanitizeModelResponseContent(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CareerSwitch AI</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f9f9f9;
        }
        header {
            background-color: #4a90e2;
            color: white;
            padding: 20px;
            text-align: center;
        }
        .container {
            max-width: 800px;
            margin: 50px auto;
            padding: 20px;
            background-color: white;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            border-radius: 8px;
        }
        h1 {
            font-size: 2.5em;
            margin-bottom: 0.5em;
        }
        p {
            font-size: 1.2em;
            margin: 1em 0;
        }
        .button {
            display: inline-block;
            padding: 10px 20px;
            font-size: 1.2em;
            color: white;
            background-color: #4a90e2;
            text-decoration: none;
            border-radius: 5px;
            transition: background-color 0.3s;
        }
        .button:hover {
            background-color: #357ab7;
        }
        footer {
            text-align: center;
            margin-top: 20px;
            font-size: 0.9em;
        }
    </style>
</head>
<body>

<header>
    <h1>CareerSwitch AI</h1>
    <p>Discover Your Alternate Career in Another Timeline</p>
</header>

<div class="container">
    <h2>Unlock Your Potential</h2>
    <p>Have you ever wondered what your life could have been like if you had chosen a different path? With CareerSwitch AI, simply scan your face, and our advanced artificial intelligence will reveal your most likely alternate career based on your unique facial features!</p>
    
    <div>
        <input type="file" id="face-upload" accept="image/*">
        <button class="button" onclick="scanFace()">Scan My Face</button>
    </div>
    
    <div id="result" style="margin-top: 20px;"></div>
</div>

<footer>
    &copy; 2023 CareerSwitch AI. All Rights Reserved.
</footer>

<script>
    function scanFace() {
        const fileInput = document.getElementById('face-upload');
        const resultDiv = document.getElementById('result');
        
        if (fileInput.files.length === 0) {
            resultDiv.innerHTML = "<p style='color: red;'>Please upload an image of your face.</p>";
            return;
        }

        // Simulating career prediction based on face scan
        const careers = ["Astrophysicist", "Wildlife Photographer", "Underwater Welder", "Travel Blogger", "Cybersecurity Analyst"];
        const randomCareer = careers[Math.floor(Math.random() * careers.length)];
        
        resultDiv.innerHTML = \`<h3>Your Alternate Career: \${randomCareer}</h3>\`;
    }
</script>

</body>
</html>`)
}; 