import { ModelResponse } from "@/types/models";
import { sanitizeModelResponseContent } from "@/lib/utils";

export const minimalistLandingPagegemini_2_0_pro_exp: ModelResponse = {
  id: "gemini-2-0-pro-exp-minimalist-landing-page",
  modelId: "gemini-2-0-pro-exp",
  prompt: "Generate a single-page landing page for a new AI startup that scans your face and tells you your most likely alternate career in another timeline. In a single-page self-contained HTML.",
  responseDate: "2025-02-28",
  type: "website",
  title: "Minimalist Landing Page",
  description: "Gemini 2.0 Pro Exp's response to the Tests an AI's ability to generate a complete, working landing page",
  content: sanitizeModelResponseContent(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Alternate Careers AI</title>
    <style>
        body {
            font-family: sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f0f0f0;
            color: #333;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            text-align: center;
        }

        .container {
            max-width: 800px;
            padding: 40px;
            background-color: #fff;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        h1 {
            color: #007bff;
            font-size: 2.5em;
            margin-bottom: 20px;
        }

        p {
            font-size: 1.1em;
            line-height: 1.6;
            margin-bottom: 30px;
        }

        .button-container {
             display: flex; /* Use flexbox for alignment */
            justify-content: center; /* Center horizontally */
            align-items: center; /* Center vertically */
            margin-bottom: 20px;
        }

        #scanButton {
            background-color: #007bff;
            color: #fff;
            padding: 15px 30px;
            font-size: 1.2em;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            transition: background-color 0.3s ease;
        }

        #scanButton:hover {
            background-color: #0056b3;
        }

        #result {
            margin-top: 30px;
            font-size: 1.2em;
            font-weight: bold;
            display: none; /* Initially hidden */
        }

        #webcamContainer {
            margin-top:20px;
            display: none;  /* Hidden initially */
            position: relative; /* For absolute positioning of the canvas */
        }
        #webcamVideo {
            width: 100%; /* Responsive width */
            max-width: 640px; /* Maximum width */
            height: auto;
            border-radius: 8px;
            border: 2px solid #007bff;
        }

        #overlayCanvas {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%; /* Match video width */
            height: 100%; /* Match video height */
             pointer-events: none; /* Allows clicks to pass through to the video */
        }


        .loader {
          border: 8px solid #f3f3f3; /* Light grey */
          border-top: 8px solid #3498db; /* Blue */
          border-radius: 50%;
          width: 50px;
          height: 50px;
          animation: spin 2s linear infinite;
          margin: 20px auto;
          display: none; /*Hidden by default*/
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        footer {
            margin-top: 40px;
            font-size: 0.8em;
            color: #666;
        }

    </style>
</head>
<body>
    <div class="container">
        <h1>Discover Your Alternate Career!</h1>
        <p>Ever wondered what you might be doing in a parallel universe?  Our cutting-edge AI analyzes your facial features to predict your most likely alternate career in another timeline.</p>

        <div class="button-container">
            <button id="scanButton">Scan My Face</button>
        </div>
        <div class="loader"></div>

        <div id="webcamContainer">
            <video id="webcamVideo" autoplay playsinline></video>
             <canvas id="overlayCanvas"></canvas>
        </div>

        <div id="result"></div>

        <footer>
            © 2023 Alternate Careers AI. All rights reserved.
        </footer>
    </div>

    <script>
        const scanButton = document.getElementById('scanButton');
        const webcamContainer = document.getElementById('webcamContainer');
        const webcamVideo = document.getElementById('webcamVideo');
        const overlayCanvas = document.getElementById('overlayCanvas');
        const resultDiv = document.getElementById('result');
        const loader = document.querySelector('.loader');

        let stream = null; // Store the webcam stream
        let faceDetector = null; //Store face-api.js detector

        scanButton.addEventListener('click', async () => {
          if (stream) {
            return; // Prevent starting multiple times
          }

          scanButton.style.display = 'none'; // Hide button
          loader.style.display = 'block';   //show the loader
          try {

              // --- Webcam Setup ---
              stream = await navigator.mediaDevices.getUserMedia({ video: true });
              webcamVideo.srcObject = stream;
              webcamContainer.style.display = 'block'; //Show the camera

              // --- face-api.js initialization ---
              await faceapi.nets.tinyFaceDetector.loadFromUri('https://cdn.jsdelivr.net/npm/face-api.js@0.22.2/dist/models/');  //use CDN
              await faceapi.nets.faceLandmark68Net.loadFromUri('https://cdn.jsdelivr.net/npm/face-api.js@0.22.2/dist/models/');
              await faceapi.nets.faceRecognitionNet.loadFromUri('https://cdn.jsdelivr.net/npm/face-api.js@0.22.2/dist/models/');

              faceDetector = new faceapi.TinyFaceDetectorOptions();  //create face detector

              // --- Face Detection and Processing ---
              detectFaces();

          } catch (error) {
              console.error('Error accessing webcam or loading models:', error);
              resultDiv.textContent = 'Error: Could not access webcam or load AI models. Please check your camera permissions and internet connection.';
              resultDiv.style.display = 'block'; // Display the error
              loader.style.display = 'none';   //hide the loader
              scanButton.style.display = 'block'; //Reshow button to allow retrying.

          }
      });


        async function detectFaces() {
          if (!stream || !faceDetector) return;

          const detections = await faceapi.detectAllFaces(webcamVideo, faceDetector).withFaceLandmarks().withFaceDescriptors();
          const resizedDetections = faceapi.resizeResults(detections, { width: webcamVideo.videoWidth, height: webcamVideo.videoHeight });

          //Clear previous drawings
          overlayCanvas.width = webcamVideo.videoWidth;
          overlayCanvas.height = webcamVideo.videoHeight;
          const ctx = overlayCanvas.getContext('2d');
          ctx.clearRect(0, 0, overlayCanvas.width, overlayCanvas.height);

          if (resizedDetections.length > 0) {
                //faceapi.draw.drawDetections(overlayCanvas, resizedDetections);  // Draw bounding boxes (optional)
                //faceapi.draw.drawFaceLandmarks(overlayCanvas, resizedDetections); // Draw landmarks (optional)

                // Stop the webcam and hide it
                stream.getTracks().forEach(track => track.stop());
                stream = null; // Clear the stream
                webcamContainer.style.display = 'none';

                // Simulate AI processing delay (and generate a result)
                setTimeout(() => {
                   loader.style.display = 'none';   //hide the loader

                    const alternateCareers = [
                        "Astronaut", "Chef", "Professional Athlete", "Musician", "Artist",
                        "Scientist", "Teacher", "Doctor", "Writer", "Game Developer", "Architect"
                    ];
                    const randomCareer = alternateCareers[Math.floor(Math.random() * alternateCareers.length)];

                    resultDiv.textContent = "In another timeline, you might have been a... " + randomCareer + "!";
                    resultDiv.style.display = 'block';
                }, 2000); // Simulate a 2-second delay.

            } else {
              //No face detected, keep trying
                requestAnimationFrame(detectFaces);  //Continuously check for faces
            }
        }
    </script>
     <script src="https://cdn.jsdelivr.net/npm/face-api.js@0.22.2/dist/face-api.min.js"></script>

</body>
</html>`)
};
