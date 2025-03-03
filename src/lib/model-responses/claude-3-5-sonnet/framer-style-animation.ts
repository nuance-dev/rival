import { ModelResponse } from "@/types/models";

export const framerStyleAnimationclaude_3_5_sonnet: ModelResponse = {
  id: "claude-3-5-sonnet-framer-style-animation",
  modelId: "claude-3-5-sonnet",
  prompt: "Generate a landing page with smooth Framer-like transitions between sections. In a single-page self-contained HTML.",
  responseDate: "2025-02-26",
  type: "website"  ,
  title: "Framer-Style Animation",
  description: "Claude 3 5 Sonnet's response to the Tests an AI's ability to create smooth web animations",
  content: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Smooth Landing Page</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            overflow-x: hidden;
        }

        section {
            min-height: 100vh;
            padding: 2rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            position: relative;
            opacity: 0;
            transform: translateY(20px);
            transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }

        section.visible {
            opacity: 1;
            transform: translateY(0);
        }

        .hero {
            background: linear-gradient(135deg, #6366f1, #8b5cf6);
            color: white;
        }

        .features {
            background: #f8fafc;
        }

        .testimonials {
            background: white;
        }

        .contact {
            background: #1e293b;
            color: white;
        }

        h1 {
            font-size: 3.5rem;
            margin-bottom: 1rem;
            text-align: center;
        }

        p {
            font-size: 1.25rem;
            max-width: 600px;
            text-align: center;
            margin-bottom: 2rem;
        }

        .button {
            padding: 1rem 2rem;
            background: white;
            color: #6366f1;
            border: none;
            border-radius: 8px;
            font-size: 1.1rem;
            cursor: pointer;
            transition: transform 0.3s ease;
        }

        .button:hover {
            transform: scale(1.05);
        }

        .features-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 2rem;
            max-width: 1200px;
            width: 100%;
        }

        .feature-card {
            background: white;
            padding: 2rem;
            border-radius: 12px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            transition: transform 0.3s ease;
        }

        .feature-card:hover {
            transform: translateY(-5px);
        }
    </style>
</head>
<body>
    <section class="hero">
        <h1>Welcome to Our Platform</h1>
        <p>Experience the future of web design with smooth, elegant transitions and modern aesthetics.</p>
        <button class="button">Get Started</button>
    </section>

    <section class="features">
        <h1>Features</h1>
        <div class="features-grid">
            <div class="feature-card">
                <h2>Responsive Design</h2>
                <p>Looks great on all devices</p>
            </div>
            <div class="feature-card">
                <h2>Smooth Transitions</h2>
                <p>Elegant animations throughout</p>
            </div>
            <div class="feature-card">
                <h2>Modern UI</h2>
                <p>Contemporary design language</p>
            </div>
        </div>
    </section>

    <section class="testimonials">
        <h1>What People Say</h1>
        <p>"This is exactly what we've been looking for. The transitions are butter-smooth!"</p>
        <p>- John Doe, Designer</p>
    </section>

    <section class="contact">
        <h1>Get in Touch</h1>
        <p>Ready to transform your web presence?</p>
        <button class="button">Contact Us</button>
    </section>

    <script>
        // Intersection Observer for smooth section transitions
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, {
            threshold: 0.1
        });

        // Observe all sections
        document.querySelectorAll('section').forEach(section => {
            observer.observe(section);
        });
    </script>
</body>
</html>`
};
