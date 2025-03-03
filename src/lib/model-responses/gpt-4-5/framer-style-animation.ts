import { ModelResponse } from "@/types/models";

export const framerStyleAnimationgpt_4_5: ModelResponse = {
  id: "gpt-4-5-framer-style-animation",
  modelId: "gpt-4-5",
  prompt: "Generate a landing page with smooth Framer-like transitions between sections. In a single-page self-contained HTML.",
  responseDate: "2025-03-01",
  type: "website",
  title: "Framer-Style Animation",
  description: "Gpt 4.5's response to the Tests an AI's ability to create smooth web animations",
  content: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Smooth Framer-like Landing Page</title>
    <style>
        html, body {
            margin: 0;
            padding: 0;
            font-family: 'Arial', sans-serif;
            scroll-behavior: smooth;
            overflow-x: hidden;
        }

        section {
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            opacity: 0;
            transform: translateY(50px);
            transition: opacity 1s ease-out, transform 1s ease-out;
        }

        section.visible {
            opacity: 1;
            transform: translateY(0);
        }

        h1, p {
            margin: 0.5em;
            text-align: center;
        }

        nav {
            position: fixed;
            top: 0;
            width: 100%;
            background-color: rgba(255,255,255,0.9);
            padding: 1em;
            display: flex;
            justify-content: center;
            gap: 1em;
            z-index: 1000;
        }

        nav a {
            text-decoration: none;
            color: #333;
            font-weight: bold;
        }

        nav a:hover {
            color: #007BFF;
        }

        /* Section colors for visual distinction */
        #section1 { background-color: #f8f9fa; }
        #section2 { background-color: #e9ecef; }
        #section3 { background-color: #dee2e6; }
        #section4 { background-color: #ced4da; }
    </style>
</head>
<body>

<nav>
    <a href="#section1">Home</a>
    <a href="#section2">About</a>
    <a href="#section3">Services</a>
    <a href="#section4">Contact</a>
</nav>

<section id="section1">
    <h1>Welcome to Our Landing Page</h1>
    <p>Smooth transitions inspired by Framer.</p>
</section>

<section id="section2">
    <h1>About Us</h1>
    <p>We create beautiful, interactive experiences.</p>
</section>

<section id="section3">
    <h1>Our Services</h1>
    <p>Design, Development, and Deployment.</p>
</section>

<section id="section4">
    <h1>Contact Us</h1>
    <p>Get in touch to start your project today!</p>
</section>

<script>
    document.addEventListener('DOMContentLoaded', () => {
        const sections = document.querySelectorAll('section');

        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.2
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                } else {
                    entry.target.classList.remove('visible');
                }
            });
        }, observerOptions);

        sections.forEach(section => {
            observer.observe(section);
        });
    });
</script>

</body>
</html>`
};
