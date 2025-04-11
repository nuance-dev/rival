import { ModelResponse } from "@/types/models";
import { sanitizeModelResponseContent } from "@/lib/utils";

export const framerStyleAnimationOptimusAlpha: ModelResponse = {
  id: "optimus-alpha-framer-style-animation",
  modelId: "optimus-alpha",
  prompt: "Generate a landing page with smooth Framer-like transitions between sections. In a single-page self-contained HTML.",
  responseDate: "2025-04-11",
  type: "website",
  title: "Framer-Style Animation",
  description: "Optimus Alpha's response to the challenge of creating a landing page with Framer-like transitions.",
  content: sanitizeModelResponseContent(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Smooth Framer-like Landing Page</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    html {
      scroll-behavior: smooth;
    }
    body {
      margin: 0;
      font-family: 'Inter', sans-serif;
      background: #f6f6f8;
      color: #18181b;
    }
    nav {
      position: fixed;
      top: 0;
      width: 100%;
      background: rgba(255,255,255,0.95);
      box-shadow: 0 2px 16px rgba(40,40,50,0.07);
      z-index: 100;
      padding: 0 36px;
      height: 68px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    nav .logo {
      font-weight: 700;
      font-size: 1.35rem;
      letter-spacing: -0.5px;
    }
    nav ul {
      list-style: none;
      display: flex;
      gap: 28px;
      margin: 0;
      padding: 0;
    }
    nav ul li a {
      text-decoration: none;
      color: #18181b;
      font-weight: 500;
      transition: color 0.2s;
    }
    nav ul li a:hover {
      color: #7064e5;
    }

    /* Section styling */
    section {
      min-height: 100vh;
      padding: 110px 0 70px 0; /* Top padding for nav, bottom for spacing */
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      opacity: 0;
      transform: translateY(50px);
      transition: opacity 0.9s cubic-bezier(.6,0,.35,1) 0.1s, transform 0.9s cubic-bezier(.6,0,.35,1) 0.1s;
      will-change: opacity, transform;
    }
    section.visible {
      opacity: 1;
      transform: translateY(0);
    }
    .hero {
      background: linear-gradient(120deg,#e8eaff 60%,#fafafa 100%);
      justify-content: center;
    }
    .hero h1 {
      font-size: 2.8rem;
      font-weight: 700;
      letter-spacing: -1px;
      margin-bottom: 18px;
      text-align: center;
    }
    .hero p {
      font-size: 1.2rem;
      font-weight: 400;
      color: #494962;
      max-width: 470px;
      margin: 0 auto 30px;
      text-align: center;
      line-height: 1.5;
    }
    .button {
      display: inline-block;
      padding: 14px 38px;
      font-size: 1rem;
      font-weight: 600;
      background: linear-gradient(90deg, #7064e5 60%, #a9a0f6 100%);
      color: #fff;
      border: none;
      border-radius: 40px;
      box-shadow: 0 8px 32px rgba(112,100,229,0.09);
      cursor: pointer;
      transition: box-shadow 0.22s;
      margin: 8px 0 0 0;
      text-decoration: none;
      letter-spacing: .02em;
    }
    .button:hover {
      box-shadow: 0 16px 40px rgba(112,100,229,0.16);
      transform: translateY(-2px) scale(1.03);
    }

    /* Section content styling */
    .section-content {
      max-width: 700px;
      text-align: center;
    }
    h2 {
      font-size: 2rem;
      margin-bottom: 26px;
      margin-top: 0;
      font-weight: 700;
    }
    .features {
      display: flex;
      gap: 36px;
      justify-content: center;
      margin-top: 28px;
      flex-wrap: wrap;
    }
    .feature-box {
      background: #fff;
      border-radius: 16px;
      box-shadow: 0 6px 32px rgba(120,120,150,0.08);
      padding: 32px 24px;
      width: 240px;
      min-height: 180px;
      display: flex;
      flex-direction: column;
      align-items: center;
      transition: box-shadow 0.23s, transform 0.23s;
    }
    .feature-box:hover {
      box-shadow: 0 15px 60px rgba(112,100,229,0.12);
      transform: translateY(-3px) scale(1.04);
    }
    .feature-icon {
      font-size: 2.2rem;
      color: #7064e5;
      margin-bottom: 16px;
    }
    .feature-title {
      font-weight: 600;
      margin-bottom: 8px;
      font-size: 1.11rem;
    }
    .feature-desc {
      font-size: 1rem;
      color: #66667c;
      line-height: 1.5;
    }

    /* Responsive */
    @media (max-width: 900px) {
      .features {
        flex-direction: column;
        gap: 18px;
        align-items: center;
      }
      nav {
        padding: 0 16px;
      }
    }
    @media (max-width: 700px) {
      .hero h1 {
        font-size: 2.1rem;
      }
      .section-content {
        max-width: 98vw;
        padding: 0 10px;
      }
      .features {
        gap: 14px;
      }
      .feature-box {
        width: 85vw;
        padding: 26px 12px;
      }
    }
    @media (max-width:500px) {
      nav {
        height: 56px;
      }
      section {
        padding-top: 78px;
        padding-bottom: 36px;
      }
      .hero {
        padding-top: 82px;
      }
    }

    /* Contact Form */
    form {
      display: flex;
      flex-direction: column;
      gap: 16px;
      align-items: center;
      max-width: 400px;
      margin: 18px auto 0;
    }
    input, textarea {
      width: 100%;
      padding: 13px 15px;
      border-radius: 8px;
      border: 1px solid #dedcf6;
      font-size: 1rem;
      transition: border-color 0.18s;
      outline: none;
      background: #f9f9fd;
    }
    input:focus, textarea:focus {
      border-color: #7064e5;
      background: #fff;
    }
    textarea {
      resize: vertical;
      min-height: 70px;
    }
    footer {
      text-align: center;
      color: #aaaad2;
      font-size: 0.96rem;
      margin-bottom: 16px;
      margin-top: 10px;
    }
  </style>
</head>
<body>
  <nav>
    <span class="logo">Framer-style Landing</span>
    <ul>
      <li><a href="#home">Home</a></li>
      <li><a href="#features">Features</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </nav>
  
  <!-- HERO SECTION -->
  <section id="home" class="hero">
    <div class="section-content">
      <h1>Smooth, Modern & Stunning Landing Pages</h1>
      <p>
        Effortlessly combine beautiful design with seamless section transitions.
<br>
        Experience a Framer-level smooth single-page journey — all in pure HTML/
CSS/JS.
      </p>
      <a class="button" href="#contact">Get Started</a>
    </div>
  </section>

  <!-- FEATURES SECTION -->
  <section id="features">
    <div class="section-content">
      <h2>Features</h2>
      <div class="features">
        <div class="feature-box">
          <div class="feature-icon">✨</div>
          <div class="feature-title">Framer-like Animations</div>
          <div class="feature-desc">Each section slides and fades in as you scroll, just like Framer sites.</div>
                                    </div>
        <div class="feature-box">
          <div class="feature-icon">⚡</div>
          <div class="feature-title">Blazing Fast</div>
          <div class="feature-desc">Zero dependencies, pure web standards. Loads instantly anywhere.</div>
        </div>
        <div class="feature-box">
          <div class="feature-icon">📱</div>
          <div class="feature-title">Responsive Design</div>
          <div class="feature-desc">Looks gorgeous on any device, out-of-the-box.</div>
        </div>
      </div>
    </div>
  </section>

  <!-- ABOUT SECTION -->
  <section id="about">
    <div class="section-content">
      <h2>About This Template</h2>
      <p>
        Built as a showcase of how smooth transitions and elegant UX can be achieved with just a handful of 
lines.<br>
                                    <strong>No frameworks, no libraries</strong> — just the power of CSS transitions and <code>IntersectionObserver</code>.
                                  </p>
    </div>
  </section>

  <!-- CONTACT SECTION -->
  <section id="contact">
    <div class="section-content">
      <h2>Contact Us</h2>
      <form onsubmit="event.preventDefault(); this.reset(); alert('Thank you for your message!');">
        <input type="text" required placeholder="Your Name">
        <input type="email" required placeholder="Email Address">
        <textarea required placeholder="Your Message"></textarea>
        <button class="button" type="submit">Send Message</button>
      </form>
    </div>
  </section>
  <footer>
    © 2024 Framer-like Landing – Pure HTML/CSS/JS Demo
  </footer>
  <script>
    // Section FADE-IN on scroll (Framer-like reveal)
    const sections = document.querySelectorAll("section");
    const observer = new window.IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, {
      threshold: 0.25
    });
    sections.forEach(section => {
      observer.observe(section);
    });

    // Smooth anchor scroll with nav offset (for fixed nav)
    document.querySelectorAll('nav ul li a').forEach(link => {
      link.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href && href.startsWith('#')) {
          e.preventDefault();
          const el = document.querySelector(href);
          if (el) {
            const navHeight = document.querySelector('nav').offsetHeight;
            // Win scroll to offset top minus nav
            window.scrollTo({
              top: el.getBoundingClientRect().top + window.scrollY - navHeight + 1,
              behavior: 'smooth'
            });
          }
        }
      });
    });
  </script>
</body>
</html>
`)
}; 