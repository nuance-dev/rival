import { ModelResponse } from "@/types/models";

export const minimalistLandingPageo3_mini: ModelResponse = {
  id: "o3-mini-minimalist-landing-page",
  modelId: "o3-mini",
  prompt: "Generate a single-page landing page for a new AI startup that scans your face and tells you your most likely alternate career in another timeline. In a single-page self-contained HTML.",
  responseDate: "2025-02-28",
  type: "website"  ,
  title: "Minimalist Landing Page"  ,
  description: "O3 Mini's response to the Tests an AI's ability to generate a complete, working landing page",
  content: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Alternate Career AI - Discover Your Other Life</title>
  <style>
    body {
      margin: 0;
      padding: 0;
      font-family: Arial, sans-serif;
      background: #f4f4f4;
      color: #333;
    }
    header {
      background: #4a90e2;
      padding: 20px;
      text-align: center;
      color: #fff;
    }
    .hero {
      padding: 60px 20px;
      text-align: center;
    }
    .hero h1 {
      font-size: 48px;
      margin-bottom: 20px;
    }
    .hero p {
      font-size: 20px;
      margin-bottom: 40px;
    }
    .scan-area {
      background: #fff;
      padding: 40px;
      margin: 20px auto;
      width: 90%;
      max-width: 500px;
      border-radius: 8px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    }
    .scan-area input[type="file"] {
      display: block;
      margin: 20px auto;
    }
    .btn {
      background: #4a90e2;
      color: #fff;
      padding: 12px 24px;
      border: none;
      border-radius: 4px;
      font-size: 18px;
      cursor: pointer;
      transition: background 0.3s ease;
    }
    .btn:hover {
      background: #357abd;
    }
    footer {
      text-align: center;
      padding: 20px;
      background: #ddd;
      margin-top: 40px;
    }
    @media (max-width: 600px) {
      .hero h1 {
        font-size: 32px;
      }
      .hero p {
        font-size: 18px;
      }
    }
  </style>
</head>
<body>
  <header>
    <h1>Alternate Career AI</h1>
    <p>Discover Your Alternate Life</p>
  </header>

  <section class="hero">
    <h1>Ever Wondered Who You'd Be in Another Timeline?</h1>
    <p>
      Our revolutionary AI scans your face to reveal the career you might have
      pursued in an alternate reality.
    </p>
    <div class="scan-area">
      <form id="faceForm">
        <input type="file" id="faceImage" accept="image/*" required />
        <button type="submit" class="btn">Scan My Face</button>
      </form>
      <div id="result" style="margin-top: 20px; font-size: 18px;"></div>
    </div>
  </section>

  <footer>
    <p>&copy; 2025 Alternate Career AI. All Rights Reserved.</p>
  </footer>

  <script>
    document.getElementById("faceForm").addEventListener("submit", function (e) {
      e.preventDefault();
      var resultDiv = document.getElementById("result");
      resultDiv.innerHTML = "Scanning your face... <br> Analyzing timeline... <br>";
      setTimeout(function () {
        // Simulate a result based on an AI prediction
        resultDiv.innerHTML += "<strong>You could have been a celebrated architect!</strong>";
      }, 2000);
    });
  </script>
</body>
</html>
`
};
