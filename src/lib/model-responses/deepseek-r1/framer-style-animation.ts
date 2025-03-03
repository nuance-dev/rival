import { ModelResponse } from "@/types/models";

export const framerStyleAnimationdeepseek_r1: ModelResponse = {
  id: "deepseek-r1-framer-style-animation",
  modelId: "deepseek-r1",
  prompt: "Generate a landing page with smooth Framer-like transitions between sections. In a single-page self-contained HTML.",
  responseDate: "2025-02-27",
  type: "website",
  title: "Framer-Style Animation",
  description: "Deepseek R1's response to the Tests an AI's ability to create smooth web animations",
  content: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Smooth Transition Landing Page</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        }

        body {
            overflow-x: hidden;
        }

        .container {
            position: relative;
            height: 100vh;
            overflow: hidden;
        }

        section {
            position: absolute;
            width: 100%;
            height: 100vh;
            padding: 4rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
            transition: transform 1s cubic-bezier(0.23, 1, 0.32, 1), opacity 0.8s ease;
            will-change: transform, opacity;
        }

        .nav {
            position: fixed;
            top: 2rem;
            right: 2rem;
            z-index: 100;
            display: flex;
            gap: 1.5rem;
        }

        .nav a {
            text-decoration: none;
            color: white;
            padding: 0.5rem 1rem;
            border-radius: 2rem;
            background: rgba(255, 255, 255, 0.1);
            transition: background 0.3s ease;
        }

        .nav a:hover {
            background: rgba(255, 255, 255, 0.2);
        }

        .nav a.active {
            background: white;
            color: #222;
        }

        #hero {
            background: linear-gradient(135deg, #6366f1, #8b5cf6);
            color: white;
        }

        #features {
            background: linear-gradient(135deg, #3b82f6, #60a5fa);
            transform: translateX(100%);
        }

        #pricing {
            background: linear-gradient(135deg, #10b981, #34d399);
            transform: translateX(100%);
        }

        #contact {
            background: linear-gradient(135deg, #f59e0b, #fbbf24);
            transform: translateX(100%);
        }

        h1 {
            font-size: 4rem;
            margin-bottom: 1.5rem;
            opacity: 0;
            transform: translateY(2rem);
            animation: fadeUp 0.8s ease forwards;
        }

        p {
            font-size: 1.2rem;
            line-height: 1.6;
            max-width: 600px;
            opacity: 0;
            transform: translateY(2rem);
            animation: fadeUp 0.8s ease 0.2s forwards;
            margin-bottom: 2rem;
        }

        .button {
            padding: 1rem 2rem;
            background: white;
            color: #6366f1;
            border-radius: 2rem;
            text-decoration: none;
            font-weight: 600;
            transition: transform 0.3s ease;
            opacity: 0;
            transform: translateY(2rem);
            animation: fadeUp 0.8s ease 0.4s forwards;
        }

        .button:hover {
            transform: translateY(-2px);
        }

        @keyframes fadeUp {
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        .section-active {
            transform: translateX(0) !important;
            opacity: 1 !important;
        }

        .section-inactive {
            transform: translateX(-100%) !important;
            opacity: 0 !important;
        }
    </style>
</head>
<body>
    <div class="container">
        <nav class="nav">
            <a href="#hero" class="active">Home</a>
            <a href="#features">Features</a>
            <a href="#pricing">Pricing</a>
            <a href="#contact">Contact</a>
        </nav>

        <section id="hero">
            <h1>Welcome to the Future</h1>
            <p>Experience seamless transitions and modern design in our revolutionary platform.</p>
            <a href="#features" class="button">Get Started</a>
        </section>

        <section id="features">
            <h1>Amazing Features</h1>
            <p>Discover powerful tools and functionalities that will transform your workflow.</p>
            <a href="#pricing" class="button">See Pricing</a>
        </section>

        <section id="pricing">
            <h1>Simple Pricing</h1>
            <p>Choose the perfect plan that fits your needs and budget.</p>
            <a href="#contact" class="button">Contact Us</a>
        </section>

        <section id="contact">
            <h1>Get in Touch</h1>
            <p>Let's create something amazing together. Reach out to start the conversation.</p>
            <a href="#hero" class="button">Return Home</a>
        </section>
    </div>

    <script>
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                const currentActive = document.querySelector('.section-active');
                
                if (currentActive && targetSection !== currentActive) {
                    currentActive.classList.remove('section-active');
                    currentActive.classList.add('section-inactive');
                    
                    setTimeout(() => {
                        targetSection.classList.remove('section-inactive');
                        targetSection.classList.add('section-active');
                    }, 50);
                }

                // Update nav active state
                document.querySelectorAll('.nav a').forEach(a => a.classList.remove('active'));
                this.classList.add('active');
            });
        });

        // Initialize first section
        document.querySelector('#hero').classList.add('section-active');
    </script>
</body>
</html>`
};
