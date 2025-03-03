import { ModelResponse } from "@/types/models";
import { sanitizeModelResponseContent } from "@/lib/utils";
export const minimalistLandingPagegpt_4o: ModelResponse = {
  id: "gpt-4o-minimalist-landing-page",
  modelId: "gpt-4o",
  prompt: "Generate a single-page landing page for a new AI startup that scans your face and tells you your most likely alternate career in another timeline. In a single-page self-contained HTML.",
  responseDate: "2025-02-28",
  type: "website",
  title: "Minimalist Landing Page",
  description: "Gpt 4o's response to the Tests an AI's ability to generate a complete, working landing page",
  content: sanitizeModelResponseContent(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TimelineAI - Discover Your Alternate Career</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-900 text-white flex flex-col items-center justify-center min-h-screen p-6">
    <div class="max-w-md w-full text-center">
        <h1 class="text-4xl font-bold mb-4">TimelineAI</h1>
        <p class="text-lg text-gray-400 mb-6">Upload a photo and discover your most likely alternate career in another timeline.</p>
        
        <input type="file" id="imageUpload" class="hidden" accept="image/*" onchange="analyzeImage()">
        <label for="imageUpload" class="cursor-pointer bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg">Upload Your Photo</label>
        
        <div id="result" class="mt-6 hidden text-xl font-semibold"></div>
    </div>

    <script>
        function analyzeImage() {
            const careers = [
                "Space Explorer", "Medieval Knight", "Cyberpunk Hacker", "Mystical Alchemist", "Underwater Archaeologist", "Galactic Diplomat"
            ];
            const randomCareer = careers[Math.floor(Math.random() * careers.length)];
            document.getElementById("result").textContent = \`In another timeline, you were a \${randomCareer}.\`;
            document.getElementById("result").classList.remove("hidden");
        }
    </script>
</body>
</html>
`)
};
