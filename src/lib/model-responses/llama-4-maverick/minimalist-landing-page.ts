import { ModelResponse } from "@/types/models";

export const minimalistLandingPagellama_4_maverick: ModelResponse = {
  id: "llama-4-maverick-minimalist-landing-page",
  modelId: "llama-4-maverick",
  prompt: "Generate a single-page landing page for a new AI startup that scans your face and tells you your most likely alternate career in another timeline. In a single-page self-contained HTML.",
  responseDate: "2025-04-05",
  type: "website",
  title: "Minimalist Landing Page",
  description: "Llama 4 Maverick's minimal landing page for 'Flux' design agency with animated gradient background",
  content: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Alternate Timeline Career Scanner</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f0f0f0;
            line-height: 1.6;
        }
        .container {
            max-width: 800px;
            margin: auto;
            padding: 20px;
            background: white;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        header {
            background-color: #007bff;
            color: white;
            padding: 10px 20px;
            text-align: center;
            border-radius: 8px 8px 0 0;
        }
        .result {
            margin-top: 20px;
            padding: 20px;
            border: 1px solid #ddd;
            border-radius: 8px;
            display: none;
        }
        .btn {
            background-color: #007bff;
            color: white;
            border: none;
            padding: 10px 20px;
            font-size: 16px;
            cursor: pointer;
            border-radius: 5px;
        }
        .btn:hover {
            background-color: #0056b3;
        }
    </style>
</head>
<body>

<div class="container">
    <header>
        <h1>Discover Your Alternate Timeline Career</h1>
    </header>
    <p>Upload a photo of yourself and our AI will scan your face to predict your most likely alternate career in another timeline.</p>
    <form id="faceScanForm">
        <input type="file" accept="image/*" id="faceImage" required>
        <button type="submit" class="btn">Scan My Face</button>
    </form>
    <div id="result" class="result">
        <h2>Your Alternate Career is: <span id="career"></span></h2>
        <p id="careerDescription"></p>
    </div>
</div>

<script>
    document.getElementById('faceScanForm').addEventListener('submit', function(e) {
        e.preventDefault();
        var fileInput = document.getElementById('faceImage');
        if (fileInput.files.length === 0) {
            alert('Please select an image');
            return;
        }

        // Simulating AI processing and result display
        var resultDiv = document.getElementById('result');
        resultDiv.style.display = 'block';
        document.getElementById('career').innerText = 'Galactic Pilot';
        document.getElementById('careerDescription').innerText = 'In another timeline, your facial structure suggests you would be a skilled Galactic Pilot, navigating through the cosmos with ease and bravery.';

        // For a real application, you would send the image to your server for processing
        // using fetch or XMLHttpRequest, and then display the result received from the server.
        // Here's a simple example of how you might do that:
        // var formData = new FormData();
        // formData.append('faceImage', fileInput.files[0]);
        // fetch('/api/scan-face', {
        //     method: 'POST',
        //     body: formData,
        // })
        // .then(response => response.json())
        // .then(data => {
        //     document.getElementById('career').innerText = data.career;
        //     document.getElementById('careerDescription').innerText = data.description;
        //     resultDiv.style.display = 'block';
        // })
        // .catch(error => console.error('Error:', error));
    });
</script>

</body>
</html>
`
}; 