import { ModelResponse } from "@/types/models";
import { sanitizeModelResponseContent } from "@/lib/utils";

export const minimalistUlandingUpagedeepseek_v3_03_24: ModelResponse = {
  id: "deepseek-v3-03-24-minimalist-landing-page",
  modelId: "deepseek-v3-03-24",
  prompt: "Generate a single-page landing page for a new AI startup that scans your face and tells you your most likely alternate career in another timeline. In a single-page self-contained HTML.",
  responseDate: "2025-03-30",
  type: "website",
  title: "minimalist-landing-page",
  description: "DeepSeek V3 March 2024's response",
  content: sanitizeModelResponseContent(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TimelineCareer | Discover Your Alternate Destiny</title>
    <style>
        :root {
            --primary: #6c5ce7;
            --secondary: #a29bfe;
            --dark: #2d3436;
            --light: #f5f6fa;
            --accent: #fd79a8;
        }
        
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        
        body {
            background-color: var(--light);
            color: var(--dark);
            line-height: 1.6;
        }
        
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
        }
        
        header {
            background: linear-gradient(135deg, var(--primary), var(--secondary));
            color: white;
            padding: 20px 0;
            position: relative;
            overflow: hidden;
        }
        
        nav {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 10px 0;
        }
        
        .logo {
            font-size: 28px;
            font-weight: 700;
        }
        
        .nav-links a {
            color: white;
            text-decoration: none;
            margin-left: 20px;
            font-weight: 500;
        }
        
        .hero {
            padding: 80px 0;
            text-align: center;
        }
        
        h1 {
            font-size: 48px;
            margin-bottom: 20px;
        }
        
        .tagline {
            font-size: 22px;
            margin-bottom: 40px;
            max-width: 700px;
            margin-left: auto;
            margin-right: auto;
        }
        
        .cta-button {
            background-color: var(--accent);
            color: white;
            border: none;
            padding: 15px 30px;
            font-size: 18px;
            border-radius: 50px;
            cursor: pointer;
            font-weight: 600;
            transition: all 0.3s ease;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        }
        
        .cta-button:hover {
            transform: translateY(-3px);
            box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
        }
        
        .demo-container {
            background-color: white;
            border-radius: 20px;
            padding: 40px;
            margin: 60px auto;
            max-width: 800px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
            text-align: center;
        }
        
        .demo-box {
            border: 3px dashed var(--secondary);
            border-radius: 15px;
            padding: 40px;
            margin: 20px 0;
            min-height: 300px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
        
        .webcam-feed {
            width: 100%;
            max-width: 400px;
            height: auto;
            border-radius: 10px;
            display: none;
        }
        
        .result {
            display: none;
            font-size: 24px;
            font-weight: 600;
            color: var(--primary);
            margin-top: 20px;
        }
        
        .features {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 30px;
            margin: 60px 0;
        }
        
        .feature-card {
            background-color: white;
            border-radius: 15px;
            padding: 30px;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
            transition: transform 0.3s ease;
        }
        
        .feature-card:hover {
            transform: translateY(-10px);
        }
        
        .feature-icon {
            font-size: 40px;
            color: var(--primary);
            margin-bottom: 20px;
        }
        
        .feature-title {
            font-size: 22px;
            margin-bottom: 15px;
        }
        
        footer {
            background-color: var(--dark);
            color: white;
            padding: 40px 0;
            text-align: center;
        }
        
        .footer-links {
            display: flex;
            justify-content: center;
            gap: 30px;
            margin: 20px 0;
        }
        
        .footer-links a {
            color: white;
            text-decoration: none;
        }
        
        @media (max-width: 768px) {
            h1 {
                font-size: 36px;
            }
            
            .tagline {
                font-size: 18px;
            }
            
            .features {
                grid-template-columns: 1fr;
            }
        }
    </style>
</head>
<body>
    <header>
        <div class="container">
            <nav>
                <div class="logo">TimelineCareer</div>
                <div class="nav-links">
                    <a href="#how-it-works">How It Works</a>
                    <a href="#about">About</a>
                    <a href="#contact">Contact</a>
                </div>
            </nav>
            
            <div class="hero">
                <h1>Discover Your Alternate Career</h1>
                <p class="tagline">In a parallel universe, you might be a rockstar, an astronaut, or something even more extraordinary. Our AI scans your face to reveal your most likely alternate career in another timeline.</p>
                <button class="cta-button" id="tryNow">Try It Now</button>
            </div>
        </div>
    </header>
    
    <div class="container">
        <div class="demo-container" id="how-it-works">
            <h2>How It Works</h2>
            <p>Simply allow camera access and let our AI analyze your facial features to determine your alternate timeline career.</p>
            
            <div class="demo-box">
                <video id="webcam" autoplay playsinline class="webcam-feed"></video>
                <canvas id="canvas" class="webcam-feed"></canvas>
                <p id="instruction">Click "Try It Now" to begin</p>
                <p id="result" class="result"></p>
            </div>
        </div>
        
        <div class="features">
            <div class="feature-card">
                <div class="feature-icon">🔮</div>
                <h3 class="feature-title">Multiverse Insights</h3>
                <p>Our proprietary algorithm analyzes over 200 facial features to predict your most probable alternate careers across different timelines.</p>
            </div>
            
            <div class="feature-card">
                <div class="feature-icon">🧠</div>
                <h3 class="feature-title">Advanced AI</h3>
                <p>Trained on data from millions of careers and facial structures, our neural network finds patterns humans could never detect.</p>
            </div>
            
            <div class="feature-card">
                <div class="feature-icon">🔒</div>
                <h3 class="feature-title">Privacy First</h3>
                <p>All processing happens locally in your browser. We never store your image or personal data on our servers.</p>
            </div>
        </div>
    </div>
    
    <footer id="contact">
        <div class="container">
            <h2>TimelineCareer</h2>
            <p>Discover the you that could have been</p>
            
            <div class="footer-links">
                <a href="#">Privacy Policy</a>
                <a href="#">Terms of Service</a>
                <a href="#">Careers</a>
                <a href="#">Contact Us</a>
            </div>
            
            <p>&copy; 2023 TimelineCareer. All rights reserved.</p>
        </div>
    </footer>
    
    <script>
        const ctaButton = document.getElementById('tryNow');
        const webcamElement = document.getElementById('webcam');
        const canvasElement = document.getElementById('canvas');
        const instructionElement = document.getElementById('instruction');
        const resultElement = document.getElementById('result');
        
        // Sample career predictions
        const careers = [
            "Astronaut", "Jazz Musician", "Chef", "Novelist", "Professional Athlete",
            "Architect", "Film Director", "Scientist", "Painter", "Explorer",
            "Robot Designer", "Fashion Icon", "Philosopher", "Dancer", "Inventor"
        ];
        
        ctaButton.addEventListener('click', async () => {
            try {
                // Request camera access
                const stream = await navigator.mediaDevices.getUserMedia({ video: true });
                webcamElement.srcObject = stream;
                webcamElement.style.display = 'block';
                canvasElement.style.display = 'none';
                instructionElement.textContent = 'Analyzing your face...';
                
                // Simulate analysis after 3 seconds
                setTimeout(() => {
                    webcamElement.style.display = 'none';
                    canvasElement.style.display = 'block';
                    
                    // Draw webcam frame to canvas
                    const context = canvasElement.getContext('2d');
                    context.drawImage(webcamElement, 0, 0, canvasElement.width, canvasElement.height);
                    
                    // Stop webcam
                    stream.getTracks().forEach(track => track.stop());
                    
                    // Show random career result
                    const randomCareer = careers[Math.floor(Math.random() * careers.length)];
                    resultElement.textContent = 'In another timeline, you\'re most likely a ' + randomCareer + '!';
                    resultElement.style.display = 'block';
                    instructionElement.textContent = '';
                    
                    // Change button text
                    ctaButton.textContent = 'Try Again';
                }, 3000);
            } catch (err) {
                console.error("Error accessing camera:", err);
                instructionElement.textContent = 'Camera access denied. Please allow camera access to try.';
            }
        });
        
        // Initialize canvas size
        function initCanvas() {
            canvasElement.width = Math.min(400, window.innerWidth - 80);
            canvasElement.height = canvasElement.width * 0.75;
        }
        
        window.addEventListener('load', initCanvas);
        window.addEventListener('resize', initCanvas);
    </script>
</body>
</html>`)
}; 