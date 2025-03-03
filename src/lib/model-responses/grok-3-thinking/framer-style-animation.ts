import { ModelResponse } from "@/types/models";

export const framerStyleAnimationgrok_3_thinking: ModelResponse = {
  id: "grok-3-thinking-framer-style-animation",
  modelId: "grok-3-thinking",
  prompt: "Generate a landing page with smooth Framer-like transitions between sections. In a single-page self-contained HTML.",
  responseDate: "2025-03-01",
  type: "website",
  title: "Framer-Style Animation",
  description: "Grok 3 Thinking's response to the Tests an AI's ability to create smooth web animations",
  content: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Landing Page with Framer-like Transitions</title>
    <style>
        * {
            box-sizing: border-box;
        }
        html {
            scroll-behavior: smooth;
        }
        body {
            margin: 0;
            font-family: Arial, sans-serif;
        }
        header {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            background-color: #333;
            color: white;
            padding: 1rem;
            z-index: 100;
        }
        header nav a {
            color: white;
            text-decoration: none;
            margin-right: 1rem;
            font-size: 1.1rem;
        }
        header nav a:hover {
            text-decoration: underline;
        }
        section {
            height: 100vh;
            padding-top: 60px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
        }
        section.in-view {
            opacity: 1;
            transform: translateY(0);
        }
        section#hero {
            background-color: #f0f0f0;
        }
        section#about {
            background-color: #e0e0e0;
        }
        section#features {
            background-color: #d0d0d0;
        }
        section#contact {
            background-color: #c0c0c0;
        }
        h1, h2 {
            margin: 0.5rem 0;
        }
        p {
            margin: 0.5rem 0;
            font-size: 1.2rem;
        }
        .feature-card {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
            background-color: rgba(255, 255, 255, 0.8);
            padding: 1rem;
            margin: 0.5rem;
            border-radius: 8px;
        }
        section.in-view .feature-card {
            opacity: 1;
            transform: translateY(0);
        }
        section.in-view .feature-card:nth-child(1) {
            transition-delay: 0s;
        }
        section.in-view .feature-card:nth-child(2) {
            transition-delay: 0.2s;
        }
        section.in-view .feature-card:nth-child(3) {
            transition-delay: 0.4s;
        }
    </style>
</head>
<body>
    <header>
        <nav>
            <a href="#hero">Home</a>
            <a href="#about">About</a>
            <a href="#features">Features</a>
            <a href="#contact">Contact</a>
        </nav>
    </header>
    <main>
        <section id="hero">
            <h1>Welcome to Our Landing Page</h1>
            <p>This is the hero section with a smooth entrance.</p>
        </section>
        <section id="about">
            <h2>About Us</h2>
            <p>We are passionate about creating amazing experiences.</p>
        </section>
        <section id="features">
            <h2>Features</h2>
            <div class="feature-card">Feature 1: High Performance</div>
            <div class="feature-card">Feature 2: User-Friendly Design</div>
            <div class="feature-card">Feature 3: Reliable Support</div>
        </section>
        <section id="contact">
            <h2>Contact Us</h2>
            <p>Get in touch with us today!</p>
        </section>
    </main>
    <script>
        document.addEventListener('DOMContentLoaded', () => {
            const sections = document.querySelectorAll('section');
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('in-view');
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.1 });
            sections.forEach(section => {
                observer.observe(section);
            });
        });
    </script>
</body>
</html>`
}; 