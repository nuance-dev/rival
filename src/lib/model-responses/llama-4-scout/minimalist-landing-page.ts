import { ModelResponse } from "@/types/models";

export const minimalistLandingPagellama_4_scout: ModelResponse = {
  id: "llama-4-scout-minimalist-landing-page",
  modelId: "llama-4-scout",
  prompt: "Generate a single-page landing page for a new AI startup that scans your face and tells you your most likely alternate career in another timeline. In a single-page self-contained HTML.",
  responseDate: "2025-04-05",
  type: "website",
  title: "Minimalist Landing Page",
  description: "Llama 4 Scout's minimal landing page for 'Flux' design agency with animated gradient background",
  content: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Alternate Career Scanner</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f0f0f0;
            margin: 0;
            padding: 0;
        }
        .container {
            max-width: 800px;
            margin: 40px auto;
            background-color: #fff;
            padding: 20px;
            border: 1px solid #ddd;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0,0,0,0.1);
        }
        .header {
            text-align: center;
            margin-bottom: 20px;
        }
        .header h1 {
            font-size: 36px;
            margin-bottom: 10px;
        }
        .header p {
            color: #666;
        }
        .scan-container {
            text-align: center;
        }
        .scan-container button {
            background-color: #4CAF50;
            color: #fff;
            padding: 10px 20px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }
        .scan-container button:hover {
            background-color: #3e8e41;
        }
        .result {
            margin-top: 20px;
            padding: 20px;
            background-color: #f9f9f9;
            border: 1px solid #ddd;
            border-radius: 10px;
        }
        .result h2 {
            font-size: 24px;
            margin-bottom: 10px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Alternate Career Scanner</h1>
            <p>Discover your most likely alternate career in another timeline</p>
        </div>
        <div class="scan-container">
            <button id="scan-button">Scan My Face</button>
            <input type="file" id="face-scan" accept="image/*" style="display: none;">
        </div>
        <div class="result" id="result" style="display: none;">
            <h2 id="alternate-career"></h2>
            <p id="description"></p>
        </div>
    </div>

    <script>
        // For demonstration purposes, assume we have a function to scan the face and get the alternate career
        async function scanFace(file) {
            // In a real-world scenario, you would use a library like TensorFlow.js or a API to analyze the face
            // For simplicity, we'll just return a random career
            const careers = [
                { career: 'Astronaut', description: 'You\'re a space traveler in a timeline where space exploration is a top priority.' },
                { career: 'Professional Athlete', description: 'You\'re a world-class athlete in a timeline where sports are a huge part of the culture.' },
                { career: 'Rockstar', description: 'You\'re a famous musician in a timeline where music is the primary form of entertainment.' },
            ];
            return careers[Math.floor(Math.random() * careers.length)];
        }

        document.getElementById('scan-button').addEventListener('click', () => {
            document.getElementById('face-scan').click();
        });

        document.getElementById('face-scan').addEventListener('change', async (e) => {
            const file = e.target.files[0];
            if (file) {
                try {
                    const career = await scanFace(file);
                    document.getElementById('alternate-career').innerText = career.career;
                    document.getElementById('description').innerText = career.description;
                    document.getElementById('result').style.display = 'block';
                } catch (error) {
                    console.error(error);
                    alert('Error scanning face');
                }
            }
        });
    </script>
</body>
</html>
`
}; 