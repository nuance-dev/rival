import { ModelResponse } from "@/types/models";

export const minimalistLandingPageo1: ModelResponse = {
  id: "o1-minimalist-landing-page",
  modelId: "o1"  ,
  prompt: "Generate a single-page landing page for a new AI startup that scans your face and tells you your most likely alternate career in another timeline. In a single-page self-contained HTML.",
  responseDate: "2025-02-28",
  type: "website"  ,
  title: "Minimalist Landing Page"  ,
  description: "o1's response to the Tests an AI's ability to generate a complete, working landing page",
  content: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Parall.ai - Your Alternate Timeline Career</title>
  <style>
    /* Basic Reset */
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: Arial, sans-serif;
      color: #333;
      background: #fafafa;
    }

    /* Main Container */
    .container {
      display: flex;
      flex-direction: column;
      min-height: 100vh;
    }

    /* Navigation */
    .nav {
      padding: 1em;
      background: #fff;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      text-align: center;
      font-weight: bold;
      letter-spacing: 0.5px;
    }

    /* Hero Section */
    .hero {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 4em 2em;
      background: linear-gradient(135deg, #8f94fb, #4e54c8);
      color: #fff;
      text-align: center;
    }

    .hero h1 {
      font-size: 3em;
      margin-bottom: 0.3em;
    }

    .hero p {
      font-size: 1.2em;
      margin-bottom: 1.5em;
      max-width: 600px;
      line-height: 1.6em;
    }

    /* Scan Button */
    .hero button {
      border: none;
      padding: 0.8em 1.5em;
      font-size: 1em;
      font-weight: bold;
      cursor: pointer;
      border-radius: 4px;
      background: #00ffc8;
      color: #333;
      transition: background 0.3s ease;
    }

    .hero button:hover {
      background: #00e0b0;
    }

    /* Info Section */
    .info {
      padding: 3em 2em;
      max-width: 800px;
      margin: 0 auto;
      text-align: center;
    }

    .info h2 {
      font-size: 2em;
      margin-bottom: 0.5em;
    }

    .info p {
      font-size: 1em;
      line-height: 1.6em;
      margin-bottom: 1.5em;
      color: #555;
    }

    /* Placeholder scanning area (hidden by default) */
    #scanModal {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.6);
      display: none;
      justify-content: center;
      align-items: center;
    }

    .modal-content {
      background: #fff;
      border-radius: 8px;
      padding: 2em;
      max-width: 500px;
      text-align: center;
      position: relative;
    }

    .close-btn {
      position: absolute;
      top: 15px;
      right: 15px;
      background: transparent;
      border: none;
      font-size: 1.2em;
      cursor: pointer;
      color: #999;
    }

    .camera-view {
      width: 100%;
      height: 300px;
      background: #eee;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #aaa;
      margin-bottom: 1em;
      border: 2px dashed #ccc;
    }

    .modal-content button {
      background: #4e54c8;
      color: #fff;
      border: none;
      padding: 0.7em 1.2em;
      border-radius: 4px;
      cursor: pointer;
    }

    .modal-content button:hover {
      background: #444b9f;
    }

    /* Footer */
    .footer {
      text-align: center;
      padding: 1em;
      background: #fff;
      font-size: 0.9em;
      color: #777;
      border-top: 1px solid #eee;
    }

    .footer a {
      color: #444;
      text-decoration: none;
    }

    .footer a:hover {
      text-decoration: underline;
    }
  </style>
</head>
<body>
  <div class="container">
    <nav class="nav">
      Parall.ai
    </nav>

    <!-- Hero Section -->
    <header class="hero">
      <h1>Discover Your Alternate Timeline Career</h1>
      <p>Ever wonder what you’d be doing if just one event in your life changed course? Our AI-powered face scan reveals your most likely profession in a parallel reality. Dare to explore a future you never knew existed.</p>
      <button onclick="openScanModal()">Scan My Face</button>
    </header>

    <!-- Info Section -->
    <section class="info">
      <h2>How It Works</h2>
      <p>Using advanced machine learning algorithms trained on billions of images and correlated career data points, Parall.ai interprets the minute details of your facial structure, micro-expressions, and subtle cues. It then predicts your probable profession in another timeline.</p>
      <h2>Why You'll Love It</h2>
      <p>Curiosity is at the heart of discovery. Parall.ai isn't just a novelty—it's a window into the paths we might have taken. Whether you’re a student dreaming big or a professional seeking new perspectives, exploring an alternate reality can inspire you to reimagine your own future.</p>
    </section>

    <!-- Modal for Camera/Scan Simulation -->
    <div id="scanModal">
      <div class="modal-content">
        <button class="close-btn" onclick="closeScanModal()">×</button>
        <h2>Scan Your Face</h2>
        <div class="camera-view">
          <!-- Placeholder for camera or scanning visuals -->
          <p>Camera View</p>
        </div>
        <button onclick="performScan()">Start Scan</button>
      </div>
    </div>

    <footer class="footer">
      &copy; <span id="year"></span> Parall.ai &mdash; <a href="#0">Privacy Policy</a> | <a href="#0">Terms of Service</a>
    </footer>
  </div>

  <script>
    // Update Footer Year
    document.getElementById("year").textContent = new Date().getFullYear();

    // Modal controls
    function openScanModal() {
      document.getElementById('scanModal').style.display = 'flex';
    }

    function closeScanModal() {
      document.getElementById('scanModal').style.display = 'none';
    }

    // Placeholder for scanning functionality
    function performScan() {
      alert("Scanning your face... (Demo Placeholder)");
      // Here, you'd integrate real camera capture or face scanning code
      // e.g., using getUserMedia, plus an AI or ML model to interpret the face data

      // For now, just simulate finishing
      setTimeout(() => {
        alert("Scan complete! Your alternate timeline career is... Galactic Archaeologist!");
        closeScanModal();
      }, 2000);
    }
  </script>
</body>
</html>
`
};
