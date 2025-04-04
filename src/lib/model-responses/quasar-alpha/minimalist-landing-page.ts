import { ModelResponse } from "@/types/models";
import { sanitizeModelResponseContent } from "@/lib/utils";

export const minimalistLandingPagequasar_alpha: ModelResponse = {
  id: "quasar-alpha-minimalist-landing-page",
  modelId: "quasar-alpha",
  prompt: "Generate a single-page landing page for a new AI startup that scans your face and tells you your most likely alternate career in another timeline. In a single-page self-contained HTML.",
  responseDate: "2025-04-04",
  type: "website",
  title: "Minimalist Landing Page",
  description: "Quasar Alpha's response to the challenge of generating a complete, working landing page",
  content: sanitizeModelResponseContent(`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<title>Parallelly - Discover Your Alternate Timeline Career</title>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&display=swap');

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Montserrat', sans-serif;
    background: linear-gradient(135deg, #4e54c8, #8f94fb);
    color: #fff;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px 20px;
  }

  h1 {
    font-size: 2.5em;
    text-align: center;
    margin-bottom: 20px;
  }

  p.subtitle {
    font-size: 1.2em;
    max-width: 800px;
    text-align: center;
    margin-bottom: 40px;
    line-height: 1.5;
  }

  .upload-container {
    background: rgba(255,255,255,0.1);
    border-radius: 20px;
    padding: 30px;
    max-width: 600px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 50px;
    transition: background 0.3s;
  }

  .upload-container:hover {
    background: rgba(255,255,255,0.2);
  }

  .file-input {
    margin: 20px 0;
  }

  input[type="file"] {
    padding: 10px;
    border-radius: 5px;
    border: none;
    background: #fff;
    color: #333;
    font-family: inherit;
    cursor: pointer;
  }

  button {
    background: #ff7e5f;
    border: none;
    padding: 15px 30px;
    border-radius: 30px;
    color: #fff;
    font-size: 1em;
    cursor: pointer;
    transition: background 0.3s;
    margin-top: 15px;
  }

  button:hover {
    background: #feb47b;
  }

  .testimonials {
    max-width: 800px;
    text-align: center;
  }

  .testimonial {
    background: rgba(255,255,255,0.1);
    padding: 20px;
    margin: 15px 0;
    border-radius: 15px;
    font-style: italic;
  }

  footer {
    margin-top: auto;
    padding: 20px;
    font-size: 0.9em;
    color: rgba(255,255,255,0.8);
    text-align: center;
  }
</style>
</head>
<body>
  <h1>Parallelly</h1>
  <p class="subtitle">
    Have you ever wondered what you'd be doing in a parallel universe? <br>
    <strong>Parallelly</strong> uses cutting-edge AI facial analysis to reveal your most likely alternate timeline career. Upload your photo below and unlock new possibilities!
  </p>

  <div class="upload-container">
    <h2>Discover Yourself in Another Timeline</h2>
    <p>Upload a selfie or profile picture to get started.</p>
    <div class="file-input">
      <input type="file" accept="image/*" id="photoInput">
    </div>
    <button onclick="showResult()">Reveal My Alternate Career</button>
    <div id="result" style="margin-top: 20px; font-size:1.2em;"></div>
  </div>

  <section class="testimonials">
    <h2>What Others Are Saying</h2>
    <div class="testimonial">
      "Turns out, in another life, I'm a jazz musician! Parallelly opened my eyes to a passion I never knew I had." – <strong>Sarah M.</strong>
    </div>
    <div class="testimonial">
      "Apparently my alternate self is a world-famous chef. Guess it's time to sign up for cooking classes!" – <strong>David R.</strong>
    </div>
    <div class="testimonial">
      "What a fun way to explore new career ideas. Love this concept!" – <strong>Emily T.</strong>
    </div>
  </section>

  <footer>
    &copy; 2024 Parallelly. All rights reserved.
  </footer>

<script>
  // Simple randomized placeholder logic for demo; replace with actual API call
  function showResult() {
    const input = document.getElementById('photoInput');
    if (input.files.length === 0) {
      alert('Please upload a photo to continue.');
      return;
    }
    const careers = [
      "Astronaut",
      "Jazz Musician",
      "Wildlife Photographer",
      "Marine Biologist",
      "Video Game Designer",
      "Travel Blogger",
      "Futurist",
      "Architect",
      "Classical Violinist",
      "Pastry Chef",
      "Extreme Sports Athlete",
      "Documentary Filmmaker"
    ];
    const career = careers[Math.floor(Math.random() * careers.length)];
    document.getElementById('result').innerHTML = "✨ In an alternate timeline, you're most likely a <strong>" + career + "</strong>! ✨";
  }
</script>

</body>
</html>
`)
};