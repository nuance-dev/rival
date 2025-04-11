import { ModelResponse } from "@/types/models";

export const framerStyleAnimationGpt4oMini: ModelResponse = {
  id: "gpt-4o-mini-framer-style-animation", // model-id-slug + challenge-id
  modelId: "gpt-4o-mini", // model-id-slug
  prompt: "Generate a landing page with smooth Framer-like transitions between sections. In a single-page self-contained HTML.", // The prompt extracted in Step 2
  responseDate: "2025-04-11", // user_provided_date
  type: "website", // Determine based on content - it's HTML, so 'website' is appropriate
  title: "Framer-Style Animation", // Get this from the gpt-4o reference file
  description: "GPT-4o mini's response to the challenge: Generate a landing page with smooth Framer-like transitions between sections.", // Write a brief description
  content: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Smooth Transition Landing Page</title>
    <style>
        body {
            margin: 0;
            font-family: Arial, sans-serif;
            scroll-behavior: smooth;
        }

        .section {
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 2em;
            color: white;
        }

        #home {
            background: #3498db;
        }

        #about {
            background: #2ecc71;
        }

        #services {
            background: #e74c3c;
        }

        #contact {
            background: #8e44ad;
        }

        nav {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            background: rgba(255, 255, 255, 0.9);
            padding: 10px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        }

        nav a {
            margin: 0 15px;
            text-decoration: none;
            color: #333;
            transition: color 0.3s;
        }

        nav a:hover {
            color: #3498db;
        }
    </style>
</head>
<body>

<nav>
    <a href="#home">Home</a>
    <a href="#about">About</a>
    <a href="#services">Services</a>
    <a href="#contact">Contact</a>
</nav>

<div id="home" class="section">Home Section</div>
<div id="about" class="section">About Section</div>
<div id="services" class="section">Services Section</div>
<div id="contact" class="section">Contact Section</div>

<script>
    // Optional JavaScript for additional smooth scroll effect (can be customized further)
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
</script>

</body>
</html>`
}; 