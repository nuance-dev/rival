import { ModelResponse } from "@/types/models";

export const framerStyleAnimationgpt_4o: ModelResponse = {
  id: "gpt-4o-framer-style-animation",
  modelId: "gpt-4o",
  prompt: "Generate a landing page with smooth Framer-like transitions between sections. In a single-page self-contained HTML.",
  responseDate: "2025-02-28",
  type: "website",
  title: "Framer-Style Animation",
  description: "Gpt 4o's response to the Tests an AI's ability to create smooth web animations",
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
            font-family: Arial, sans-serif;
        }
        html, body {
            scroll-behavior: smooth;
            overflow-x: hidden;
        }
        .section {
            height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 2rem;
            color: white;
            transition: opacity 0.6s ease-in-out;
        }
        .section:nth-child(odd) { background: #1e1e2f; }
        .section:nth-child(even) { background: #3f3f5a; }
        .nav {
            position: fixed;
            top: 10px;
            left: 50%;
            transform: translateX(-50%);
            display: flex;
            gap: 20px;
            background: rgba(0, 0, 0, 0.6);
            padding: 10px 20px;
            border-radius: 10px;
        }
        .nav a {
            color: white;
            text-decoration: none;
            padding: 8px 12px;
            transition: background 0.3s;
        }
        .nav a:hover {
            background: rgba(255, 255, 255, 0.3);
            border-radius: 5px;
        }
    </style>
</head>
<body>
    <nav class="nav">
        <a href="#section1">Home</a>
        <a href="#section2">About</a>
        <a href="#section3">Services</a>
        <a href="#section4">Contact</a>
    </nav>
    
    <div id="section1" class="section">Home</div>
    <div id="section2" class="section">About</div>
    <div id="section3" class="section">Services</div>
    <div id="section4" class="section">Contact</div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        gsap.utils.toArray(".section").forEach(section => {
            gsap.from(section, {
                opacity: 0,
                y: 50,
                duration: 1,
                scrollTrigger: {
                    trigger: section,
                    start: "top 75%",
                    toggleActions: "play none none reverse"
                }
            });
        });
    </script>
</body>
</html>
`
};
