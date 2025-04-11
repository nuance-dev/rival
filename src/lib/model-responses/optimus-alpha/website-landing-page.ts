import { ModelResponse } from "@/types/models";
import { sanitizeModelResponseContent } from "@/lib/utils";

export const websiteLandingPageOptimusAlpha: ModelResponse = {
  id: "optimus-alpha-website-landing-page",
  modelId: "optimus-alpha",
  prompt: `Design a modern, minimal landing page for a music streaming app called "Wavefront" that focuses on indie artists. The landing page should have a hero section, features section, and call-to-action. Use a color scheme of deep purples and teals. In a single-page self-contained HTML.`,
  responseDate: "2025-04-11",
  type: "website",
  title: "Music App Landing Page",
  description: "Optimus Alpha's take on a modern landing page for a music streaming service.",
  content: sanitizeModelResponseContent(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1.0">
  <title>Wavefront | Stream Indie Music</title>
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700;400&family=Inter:wght@400;500&display=swap" rel="stylesheet">
  <style>
    :root {
      --deep-purple: #2E1A47;
      --teal: #18A6B6;
      --purple-light: #462964;
      --teal-light: #44E4DD;
      --white: #FFFFFF;
      --gray: #F7F8FA;
    }

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      background: linear-gradient(135deg, var(--deep-purple) 60%, var(--teal) 100%);
      font-family: 'Inter', Arial, sans-serif;
      color: var(--white);
      min-height: 100vh;
    }
    header {
      display: flex;
      align-items: center;
      padding: 2rem 0 0 0;
      justify-content: center;
    }
    .logo {
      font-family: 'Montserrat', sans-serif;
      font-weight: 700;
      font-size: 2rem;
      letter-spacing: 0.1em;
      background: linear-gradient(90deg, var(--teal-light), var(--teal), var(--purple-light));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    main {
      max-width: 540px;
      margin: 0 auto;
      padding: 0 1.5rem;
    }

    /* Hero Section */
    .hero {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      padding: 4rem 0 3rem 0;
    }
    .hero-title {
      font-family: 'Montserrat', sans-serif;
      font-size: 2.5rem;
      font-weight: 700;
      margin-bottom: 1.2rem;
      letter-spacing: 0.02em;
      line-height: 1.14;
    }
    .hero-desc {
      font-size: 1.2rem;
      color: #E8F2F5;
      margin-bottom: 2rem;
      font-weight: 400;
      line-height: 1.6;
    }
    .hero-art {
      width: 210px;
      height: 210px;
      background:
        radial-gradient(circle at 35% 30%, #44E4DD88 0%, transparent 65%),
        radial-gradient(circle at 70% 80%, #955Cf899 0%, transparent 80%),
        linear-gradient(135deg, #18A6B6 40%, #462964 100%);
      border-radius: 50%;
      margin-bottom: 2rem;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 6px 40px 0 #18A6B611;
      position: relative;
      overflow: hidden;
    }
    .wave {
      position: absolute;
      bottom: 36px;
      left: 36px;
      right: 36px;
      height: 40px;
    }
    /* Simple SVG waveform */
    /* --- */

    /* Features */
    .features {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      margin: 3rem 0;
    }
    .feature {
      background: rgba(255,255,255,0.04);
      border-radius: 1rem;
      padding: 2rem 1.5rem;
      display: flex;
      align-items: flex-start;
      gap: 1.5rem;
      transition: box-shadow 0.18s;
    }
    .feature:hover {
      box-shadow: 0 4px 30px 0 #18A6B644;
    }
    .feature-icon {
      width: 48px;
      height: 48px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: linear-gradient(135deg, var(--teal-light) 40%, var(--deep-purple) 100%);
      border-radius: 50%;
      color: var(--white);
      font-size: 1.7rem;
      flex-shrink: 0;
      box-shadow: 0 2px 12px #2E1A4744;
    }
    .feature-content {
      flex: 1;
    }
    .feature-title {
      font-family: 'Montserrat', sans-serif;
      font-size: 1.18rem;
      font-weight: 700;
      margin-bottom: 0.22em;
      letter-spacing: .01em;
      color: var(--teal-light);
    }
    .feature-desc {
      font-size: 1.02rem;
      color: #e4f3f1;
      line-height: 1.5;
    }

    /* CTA */
    .cta-section {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 3.5rem 0 2.5rem 0;
    }
    .cta-btn {
      background: linear-gradient(90deg, var(--teal), var(--teal-light));
      color: var(--deep-purple);
      font-family: 'Montserrat', sans-serif;
      font-weight: 700;
      font-size: 1.13rem;
      border: none;
      border-radius: 30px;
      padding: 0.94em 2.2em;
      box-shadow: 0 3px 18px 0 #18A6B655;
      cursor: pointer;
      transition: background .16s, box-shadow .16s;
      margin-bottom: 1.08em;
      letter-spacing: 0.03em;
    }
    .cta-btn:hover {
      background: linear-gradient(90deg, var(--teal-light), var(--teal));
      box-shadow: 0 6px 24px 0 #18A6B677;
    }
    .cta-note {
      color: #A6EFF3;
      font-size: 0.95rem;
      max-width: 330px;
      text-align: center;
    }

    footer {
      padding: 2em 0 1.5em 0;
      text-align: center;
      color: #C9F5FF88;
      font-size: 0.98em;
      letter-spacing: 0.01em;
    }

    @media (max-width: 600px) {
      .hero-title { font-size: 2rem; }
      .hero-art { width: 150px; height: 150px; }
      .wave { bottom: 24px; left: 24px; right: 24px; height: 28px;}
      main { padding: 0 0.6rem; }
      .feature { padding: 1.1em 0.85em; }
    }
  </style>
</head>
<body>
  <header>
    <div class="logo">Wavefront</div>
  </header>
  <main>
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-art">
        <!-- Stylized (SVG) sound wave -->
        <svg class="wave" viewBox="0 0 140 40" fill="none">
          <polyline points="0,32 10,20 20,24 30,12 40,20 50,6 60,30 70,13 80,36 90,24 100,18 110,32 120,18 130,33 140,24"
            stroke="#18A6B6" stroke-width="3" fill="none" stroke-linecap="round"/>
          <polyline points="0,35 10,27 20,34 30,24 40,34 50,17 60,36 70,18 80,39 90,29 100,25 110,38 120,24 130,37 140,29"
            stroke="#44E4DD" stroke-width="2" fill="none" stroke-linecap="round"/>
        </svg>
      </div>
      <h1 class="hero-title">Discover the Next Indie Wave</h1>
      <p class="hero-desc">
        Wavefront connects you to fresh sounds from emerging indie artists around the world.<br/>
        Uncover new favorites, follow rising talent, and elevate your music journey.
      </p>
    </section>
    <!-- Features Section -->
    <section class="features">
      <div class="feature">
        <div class="feature-icon" style="background: linear-gradient(135deg, #44E4DD 40%, #462964 100%);">
          <!-- Headphones SVG -->
          <svg width="26" height="26" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 26 26">
            <circle cx="13" cy="13" r="11"/>
            <path d="M5 17v-2a8 8 0 0 1 16 0v2"/><rect x="3" y="17" width="5" height="6" rx="2"/><rect x="18" y="17" width="5" height="6" rx="2"/>
          </svg>
        </div>
        <div class="feature-content">
          <div class="feature-title">Unfiltered Indie Artists</div>
          <div class="feature-desc">
            Wavefront spotlights only independent artists—no big label noise. Experience authentic tracks and undiscovered gems every day.
          </div>
        </div>
      </div>
      <div class="feature">
        <div class="feature-icon">
          <!-- Music Note SVG -->
          <svg width="23" height="23" fill="none" stroke="currentColor" stroke-width="2.1" viewBox="0 0 23 23">
            <circle cx="8" cy="17" r="3"/>
            <circle cx="17" cy="19" r="2"/>
            <path d="M10 17V6a2 2 0 0 1 2-2h6"/>
            <rect x="12" y="6" width="8" height="3" rx="1.5"/>
          </svg>
        </div>
        <div class="feature-content">
          <div class="feature-title">Curated Playlists</div>
          <div class="feature-desc">
            Handpicked, ever-changing playlists crafted by tastemakers, so you can always find something moving and meaningful.
          </div>
        </div>
      </div>
      <div class="feature">
        <div class="feature-icon" style="background: linear-gradient(135deg, #462964 40%, #44E4DD 100%);">
          <!-- Heart SVG -->
          <svg width="26" height="26" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 26 26">
            <path d="M13 22s-8-5.31-8-11.14c0-2.9 2.36-5.26 5.27-5.26 1.66 0 3.11 0.91 3.92 2.25A5.28 5.28 0 0 1 18.73 5.6c2.9 0 5.27 2.36 5.27 5.26C21.01 16.69 13 22 13 22z"/>
          </svg>
        </div>
        <div class="feature-content">
          <div class="feature-title">Support Artists Directly</div>
          <div class="feature-desc">
            Follow, tip, and engage with creators. 100% of contributions go to the artist—fuel their next big idea.
          </div>
        </div>
      </div>
    </section>
    <!-- Call to Action Section -->
    <section class="cta-section">
      <button class="cta-btn">Get Early Access</button>
      <div class="cta-note">Sign up now for exclusive invites and behind-the-scenes with the Wavefront community.</div>
    </section>
  </main>
  <footer>
    &copy; 2024 Wavefront. Indie music, reimagined.
  </footer>
</body>
</html>
`)
}; 