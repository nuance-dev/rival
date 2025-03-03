import { ModelResponse } from "@/types/models";
import { sanitizeModelResponseContent } from "@/lib/utils";

export const minimalistLandingPagedeepseek_r1: ModelResponse = {
  id: "deepseek-r1-minimalist-landing-page",
  modelId: "deepseek-r1",
  prompt: "Generate a single-page landing page for a new AI startup that scans your face and tells you your most likely alternate career in another timeline. In a single-page self-contained HTML.",
  responseDate: "2025-02-27",
  type: "website",
  title: "Minimalist Landing Page",
  description: "Deepseek R1's response to the Tests an AI's ability to generate a complete, working landing page",
  content: sanitizeModelResponseContent(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TimelineTwin - Discover Your Alternate Career</title>
    <style>
        :root {
            --primary: #6366f1;
            --secondary: #4f46e5;
            --accent: #a855f7;
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        body {
            background: linear-gradient(135deg, #1e1b4b, #0f172a);
            color: white;
            min-height: 100vh;
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 2rem;
            text-align: center;
        }

        header {
            margin-bottom: 3rem;
        }

        h1 {
            font-size: 3.5rem;
            margin-bottom: 1rem;
            background: linear-gradient(45deg, var(--primary), var(--accent));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }

        .hero {
            margin-bottom: 4rem;
        }

        .upload-section {
            border: 2px dashed var(--primary);
            border-radius: 1rem;
            padding: 3rem;
            margin: 2rem 0;
            cursor: pointer;
            transition: all 0.3s ease;
        }

        .upload-section:hover {
            border-color: var(--accent);
            background: rgba(99, 102, 241, 0.1);
        }

        button {
            background: linear-gradient(45deg, var(--primary), var(--secondary));
            color: white;
            border: none;
            padding: 1rem 2rem;
            border-radius: 0.5rem;
            font-size: 1.1rem;
            cursor: pointer;
            transition: transform 0.2s ease;
        }

        button:hover {
            transform: translateY(-2px);
        }

        #result {
            margin-top: 3rem;
            font-size: 1.5rem;
            padding: 2rem;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 1rem;
            display: none;
        }

        .loading {
            display: none;
            margin: 2rem 0;
            font-size: 1.2rem;
        }

        footer {
            margin-top: 4rem;
            opacity: 0.8;
        }
    </style>
</head>
<body>
    <div class="container">
        <header>
            <h1>TimelineTwin</h1>
            <p>Discover which career path your face was destined for in parallel universes</p>
        </header>

        <div class="hero">
            <p>Upload your photo to reveal your most probable alternate reality profession, calculated by our quantum neural network analyzing 147 facial biomarkers</p>
            
            <div class="upload-section" onclick="document.getElementById('fileInput').click()">
                <p>Click to upload your face photo</p>
                <input type="file" id="fileInput" accept="image/*" hidden>
            </div>

            <button onclick="processPhoto()">Analyze My Timeline Twin</button>
            
            <div class="loading" id="loading">
                Scanning temporal possibilities...
            </div>

            <div id="result"></div>
        </div>

        <footer>
            <p>© 2023 TimelineTwin. All results are for entertainment purposes only. No temporal paradoxes were created during scanning.</p>
        </footer>
    </div>

    <script>
        const careers = [
            "16th Century Alchemist",
            "Mars Colony Architect",
            "Steampunk Airship Captain",
            "Neo-Tokyo Cyber Chef",
            "Dinosaur Veterinarian",
            "Parallel Universe Diplomat",
            "Time Travel Tour Guide",
            "Underwater City Barista",
            "Robot Psychologist",
            "Galactic Stand-up Comedian",
            "Holographic Fashion Designer",
            "Pirate Queen's Cartographer"
        ];

        function processPhoto() {
            const file = document.getElementById('fileInput').files[0];
            if (!file) return;

            document.getElementById('loading').style.display = 'block';
            document.getElementById('result').style.display = 'none';

            // Simulated analysis delay
            setTimeout(() => {
                document.getElementById('loading').style.display = 'none';
                const resultDiv = document.getElementById('result');
                resultDiv.innerHTML = '✨ In another timeline, you\'re most likely a:<br><h2 style="margin: 1rem 0; color: var(--accent)">' +
                        careers[Math.floor(Math.random() * careers.length)] +
                    '</h2>';
                resultDiv.style.display = 'block';
            }, 2000);
        }
    </script>
</body>
</html>`)
};
