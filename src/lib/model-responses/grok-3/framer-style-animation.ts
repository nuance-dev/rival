import { ModelResponse } from "@/types/models";

export const framerStyleAnimationgrok_3: ModelResponse = {
  id: "grok-3-framer-style-animation",
  modelId: "grok-3",
  prompt: "Generate a landing page with smooth Framer-like transitions between sections. In a single-page self-contained HTML.",
  responseDate: "2025-03-01",
  type: "website",
  title: "Framer-Style Animation",
  description: "Grok 3's response to the Tests an AI's ability to create smooth web animations",
  content: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Modern Landing Page</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Arial', sans-serif;
        }

        html {
            scroll-behavior: smooth;
        }

        body {
            line-height: 1.6;
            color: #333;
            overflow-x: hidden;
        }

        /* Navigation */
        nav {
            position: fixed;
            top: 0;
            width: 100%;
            padding: 1rem 2rem;
            background: rgba(255, 255, 255, 0.95);
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
            z-index: 1000;
            transition: all 0.3s ease;
        }

        nav ul {
            list-style: none;
            display: flex;
            justify-content: flex-end;
            gap: 2rem;
        }

        nav a {
            text-decoration: none;
            color: #333;
            font-weight: 500;
            transition: color 0.3s ease;
        }

        nav a:hover {
            color: #007bff;
        }

        /* Sections */
        section {
            min-height: 100vh;
            padding: 5rem 2rem;
            display: flex;
            align-items: center;
            justify-content: center;
            opacity: 0;
            transform: translateY(50px);
            transition: all 0.6s ease-out;
        }

        section.visible {
            opacity: 1;
            transform: translateY(0);
        }

        #hero {
            background: linear-gradient(135deg, #007bff, #00c6ff);
            color: white;
            text-align: center;
        }

        #about {
            background: #f8f9fa;
        }

        #features {
            background: white;
        }

        #contact {
            background: #343a40;
            color: white;
        }

        .content {
            max-width: 800px;
            margin: 0 auto;
        }

        h1 {
            font-size: 3rem;
            margin-bottom: 1rem;
        }

        h2 {
            font-size: 2rem;
            margin-bottom: 1.5rem;
        }

        p {
            font-size: 1.1rem;
            margin-bottom: 1rem;
        }

        .cta-button {
            display: inline-block;
            padding: 1rem 2rem;
            background: #007bff;
            color: white;
            text-decoration: none;
            border-radius: 5px;
            transition: transform 0.3s ease, background 0.3s ease;
        }

        .cta-button:hover {
            transform: translateY(-3px);
            background: #0056b3;
        }
    </style>
</head>
<body>
    <nav>
        <ul>
            <li><a href="#hero">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    </nav>

    <section id="hero">
        <div class="content">
            <h1>Welcome to Our Landing Page</h1>
            <p>Experience smooth transitions and modern design</p>
            <a href="#about" class="cta-button">Learn More</a>
        </div>
    </section>

    <section id="about">
        <div class="content">
            <h2>About Us</h2>
            <p>We create innovative solutions with smooth animations and clean design.</p>
            <p>Our team is dedicated to pushing the boundaries of web experiences.</p>
        </div>
    </section>

    <section id="features">
        <div class="content">
            <h2>Features</h2>
            <p>Smooth scrolling transitions</p>
            <p>Modern responsive design</p>
            <p>Engaging user experience</p>
        </div>
    </section>

    <section id="contact">
        <div class="content">
            <h2>Get in Touch</h2>
            <p>Ready to start your project? Contact us today!</p>
            <a href="#" class="cta-button">Contact Now</a>
        </div>
    </section>

    <script>
        // Intersection Observer for section animations
        const sections = document.querySelectorAll('section');
        const options = {
            threshold: 0.2
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, options);

        sections.forEach(section => {
            observer.observe(section);
        });
    </script>
</body>
</html>`
}; 