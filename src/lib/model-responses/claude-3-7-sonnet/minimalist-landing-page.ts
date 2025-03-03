import { ModelResponse } from "@/types/models";

export const minimalistLandingPageclaude_3_7_sonnet: ModelResponse = {
  id: "claude-3-7-sonnet-minimalist-landing-page",
  modelId: "claude-3-7-sonnet",
  prompt: "Generate a single-page landing page for a new AI startup that scans your face and tells you your most likely alternate career in another timeline. In a single-page self-contained HTML.",
  responseDate: "2025-02-27",
  type: "website"  ,
  title: "Minimalist Landing Page"  ,
  description: "Claude 3.7 Sonnet's response to the Tests an AI's ability to generate a complete, working landing page",
  content: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AlternaYou | Discover Your Alternate Timeline Career</title>
    <style>
        :root {
            --primary: #6c63ff;
            --secondary: #4a45b1;
            --dark: #2a2a4a;
            --light: #f8f9fa;
            --accent: #ff6b6b;
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
        
        header {
            background: linear-gradient(135deg, var(--primary), var(--secondary));
            color: white;
            padding: 1rem;
            text-align: center;
            position: fixed;
            width: 100%;
            z-index: 100;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        
        .logo {
            font-size: 1.8rem;
            font-weight: bold;
        }
        
        .logo span {
            color: var(--accent);
        }
        
        nav ul {
            display: flex;
            justify-content: center;
            list-style: none;
            margin-top: 0.5rem;
        }
        
        nav ul li {
            margin: 0 1rem;
        }
        
        nav ul li a {
            color: white;
            text-decoration: none;
            font-weight: 500;
            transition: all 0.3s ease;
        }
        
        nav ul li a:hover {
            color: var(--accent);
        }
        
        .hero {
            height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            padding: 2rem;
            background: url('https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80') no-repeat center center/cover;
            position: relative;
        }
        
        .hero::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.5);
            z-index: 1;
        }
        
        .hero-content {
            max-width: 800px;
            z-index: 2;
            color: white;
        }
        
        .hero h1 {
            font-size: 3.5rem;
            margin-bottom: 1rem;
        }
        
        .hero p {
            font-size: 1.2rem;
            margin-bottom: 2rem;
        }
        
        .btn {
            display: inline-block;
            padding: 0.8rem 2rem;
            background: var(--accent);
            color: white;
            border: none;
            border-radius: 50px;
            font-size: 1.1rem;
            font-weight: bold;
            cursor: pointer;
            transition: all 0.3s ease;
            text-decoration: none;
        }
        
        .btn:hover {
            background: #ff5252;
            transform: translateY(-3px);
            box-shadow: 0 10px 20px rgba(0,0,0,0.2);
        }
        
        .btn-outline {
            background: transparent;
            border: 2px solid white;
            margin-left: 1rem;
        }
        
        .btn-outline:hover {
            background: white;
            color: var(--primary);
        }
        
        section {
            padding: 5rem 2rem;
        }
        
        .section-title {
            text-align: center;
            margin-bottom: 3rem;
        }
        
        .section-title h2 {
            font-size: 2.5rem;
            color: var(--primary);
            margin-bottom: 1rem;
        }
        
        .section-title p {
            max-width: 600px;
            margin: 0 auto;
            color: #666;
        }
        
        .features {
            background-color: white;
        }
        
        .features-container {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 2rem;
            max-width: 1200px;
            margin: 0 auto;
        }
        
        .feature-card {
            flex: 1 1 300px;
            max-width: 350px;
            padding: 2rem;
            border-radius: 10px;
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
            text-align: center;
            transition: transform 0.3s ease;
        }
        
        .feature-card:hover {
            transform: translateY(-10px);
        }
        
        .feature-icon {
            font-size: 3rem;
            color: var(--primary);
            margin-bottom: 1rem;
        }
        
        .feature-card h3 {
            margin-bottom: 1rem;
            color: var(--dark);
        }
        
        .how-it-works {
            background-color: #f1f1f1;
        }
        
        .steps {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            max-width: 1200px;
            margin: 0 auto;
        }
        
        .step {
            flex: 1 1 300px;
            max-width: 350px;
            margin: 1rem;
            text-align: center;
        }
        
        .step-number {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 60px;
            height: 60px;
            background-color: var(--primary);
            color: white;
            font-size: 1.5rem;
            font-weight: bold;
            border-radius: 50%;
            margin: 0 auto 1rem;
        }
        
        .testimonials {
            background-color: white;
        }
        
        .testimonial-container {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 2rem;
            max-width: 1200px;
            margin: 0 auto;
        }
        
        .testimonial {
            flex: 1 1 300px;
            max-width: 350px;
            padding: 2rem;
            border-radius: 10px;
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
            position: relative;
        }
        
        .testimonial::before {
            content: '"';
            position: absolute;
            top: 10px;
            left: 10px;
            font-size: 4rem;
            color: rgba(108, 99, 255, 0.1);
            font-family: Georgia, serif;
        }
        
        .testimonial-text {
            margin-bottom: 1.5rem;
            font-style: italic;
        }
        
        .testimonial-author {
            display: flex;
            align-items: center;
        }
        
        .testimonial-author img {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            margin-right: 1rem;
            object-fit: cover;
        }
        
        .author-info h4 {
            margin-bottom: 0.2rem;
        }
        
        .author-info p {
            color: #666;
            font-size: 0.9rem;
        }
        
        .pricing {
            background-color: #f1f1f1;
        }
        
        .pricing-container {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 2rem;
            max-width: 1200px;
            margin: 0 auto;
        }
        
        .pricing-card {
            flex: 1 1 300px;
            max-width: 350px;
            padding: 2rem;
            border-radius: 10px;
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
            text-align: center;
            background-color: white;
            transition: transform 0.3s ease;
        }
        
        .pricing-card:hover {
            transform: scale(1.05);
        }
        
        .pricing-card.featured {
            border: 2px solid var(--primary);
            transform: scale(1.05);
        }
        
        .pricing-card.featured:hover {
            transform: scale(1.1);
        }
        
        .price {
            font-size: 2.5rem;
            font-weight: bold;
            color: var(--primary);
            margin: 1rem 0;
        }
        
        .price span {
            font-size: 1rem;
            color: #666;
        }
        
        .pricing-features {
            list-style: none;
            margin: 1.5rem 0;
        }
        
        .pricing-features li {
            padding: 0.5rem 0;
            border-bottom: 1px solid #eee;
        }
        
        .cta {
            text-align: center;
            padding: 5rem 2rem;
            background: linear-gradient(135deg, var(--primary), var(--secondary));
            color: white;
        }
        
        .cta h2 {
            font-size: 2.5rem;
            margin-bottom: 1rem;
        }
        
        .cta p {
            max-width: 600px;
            margin: 0 auto 2rem;
        }
        
        .camera-container {
            max-width: 600px;
            margin: 2rem auto;
            border-radius: 10px;
            overflow: hidden;
            box-shadow: 0 10px 30px rgba(0,0,0,0.2);
        }
        
        #camera {
            width: 100%;
            height: 400px;
            background-color: #333;
            position: relative;
        }
        
        #camera-feed {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
        
        .camera-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            background-color: rgba(0,0,0,0.7);
            color: white;
        }
        
        .camera-controls {
            display: flex;
            justify-content: center;
            padding: 1rem;
            background-color: #222;
        }
        
        #result-container {
            max-width: 600px;
            margin: 2rem auto;
            padding: 2rem;
            border-radius: 10px;
            background-color: white;
            box-shadow: 0 10px 30px rgba(0,0,0,0.2);
            text-align: center;
            display: none;
        }
        
        #result-career {
            font-size: 2rem;
            color: var(--primary);
            margin: 1rem 0;
        }
        
        #result-description {
            margin-bottom: 1.5rem;
        }
        
        footer {
            background-color: var(--dark);
            color: white;
            text-align: center;
            padding: 2rem;
        }
        
        .footer-links {
            display: flex;
            justify-content: center;
            list-style: none;
            margin: 1rem 0;
        }
        
        .footer-links li {
            margin: 0 1rem;
        }
        
        .footer-links li a {
            color: white;
            text-decoration: none;
        }
        
        .social-links {
            display: flex;
            justify-content: center;
            list-style: none;
            margin: 1rem 0;
        }
        
        .social-links li {
            margin: 0 0.5rem;
        }
        
        .social-links li a {
            color: white;
            font-size: 1.5rem;
        }
        
        @media (max-width: 768px) {
            .hero h1 {
                font-size: 2.5rem;
            }
            
            .btn {
                display: block;
                margin: 1rem auto;
                width: 80%;
            }
            
            .btn-outline {
                margin-left: 0;
            }
            
            nav ul {
                flex-direction: column;
            }
            
            nav ul li {
                margin: 0.5rem 0;
            }
        }
    </style>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
</head>
<body>
    <header>
        <div class="logo">Alterna<span>You</span></div>
        <nav>
            <ul>
                <li><a href="#features">Features</a></li>
                <li><a href="#how-it-works">How It Works</a></li>
                <li><a href="#testimonials">Testimonials</a></li>
                <li><a href="#pricing">Pricing</a></li>
                <li><a href="#try-now">Try Now</a></li>
            </ul>
        </nav>
    </header>

    <section class="hero">
        <div class="hero-content">
            <h1>Discover Your Alternate Timeline Career</h1>
            <p>Our advanced AI analyzes your facial features to reveal the career you would have pursued in another timeline. Unlock the parallel universe version of yourself today!</p>
            <a href="#try-now" class="btn">Try It Now</a>
            <a href="#how-it-works" class="btn btn-outline">Learn More</a>
        </div>
    </section>

    <section id="features" class="features">
        <div class="section-title">
            <h2>Why Choose AlternaYou?</h2>
            <p>Our cutting-edge technology offers insights into your alternate self like never before.</p>
        </div>
        <div class="features-container">
            <div class="feature-card">
                <div class="feature-icon">
                    <i class="fas fa-brain"></i>
                </div>
                <h3>Advanced AI Analysis</h3>
                <p>Our proprietary neural network analyzes over 500 facial points to determine your alternate career with 94% accuracy.</p>
            </div>
            <div class="feature-card">
                <div class="feature-icon">
                    <i class="fas fa-globe"></i>
                </div>
                <h3>Multiverse Mapping</h3>
                <p>We've mapped thousands of potential timelines to provide you with the most likely alternate career paths.</p>
            </div>
            <div class="feature-card">
                <div class="feature-icon">
                    <i class="fas fa-lock"></i>
                </div>
                <h3>Privacy First</h3>
                <p>Your facial data is analyzed instantly and never stored, ensuring your privacy is always protected.</p>
            </div>
        </div>
    </section>

    <section id="how-it-works" class="how-it-works">
        <div class="section-title">
            <h2>How It Works</h2>
            <p>Discovering your alternate timeline career is simple and takes less than a minute.</p>
        </div>
        <div class="steps">
            <div class="step">
                <div class="step-number">1</div>
                <h3>Scan Your Face</h3>
                <p>Allow our AI to scan your facial features using your device's camera.</p>
            </div>
            <div class="step">
                <div class="step-number">2</div>
                <h3>AI Analysis</h3>
                <p>Our advanced algorithm analyzes your facial structure, expressions, and micro-features.</p>
            </div>
            <div class="step">
                <div class="step-number">3</div>
                <h3>Discover Your Path</h3>
                <p>Receive your alternate timeline career along with a detailed description of your parallel life.</p>
            </div>
        </div>
    </section>

    <section id="testimonials" class="testimonials">
        <div class="section-title">
            <h2>What Our Users Say</h2>
            <p>Thousands of people have already discovered their alternate selves.</p>
        </div>
        <div class="testimonial-container">
            <div class="testimonial">
                <p class="testimonial-text">I was shocked when AlternaYou told me I would have been a professional chef in another timeline. I've always loved cooking but never pursued it professionally. This gave me the confidence to start a food blog!</p>
                <div class="testimonial-author">
                    <img src="https://randomuser.me/api/portraits/women/32.jpg" alt="Sarah Johnson">
                    <div class="author-info">
                        <h4>Sarah Johnson</h4>
                        <p>Marketing Executive</p>
                    </div>
                </div>
            </div>
            <div class="testimonial">
                <p class="testimonial-text">As a software engineer, I was surprised to learn my alternate career would be a marine biologist. It made perfect sense though - I've always been fascinated by the ocean. Now I code marine research applications!</p>
                <div class="testimonial-author">
                    <img src="https://randomuser.me/api/portraits/men/45.jpg" alt="David Chen">
                    <div class="author-info">
                        <h4>David Chen</h4>
                        <p>Software Engineer</p>
                    </div>
                </div>
            </div>
            <div class="testimonial">
                <p class="testimonial-text">AlternaYou revealed I would have been a professional dancer in another timeline. I've started taking dance classes on weekends, and it's brought so much joy into my life. Thank you for this insight!</p>
                <div class="testimonial-author">
                    <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="Emma Rodriguez">
                    <div class="author-info">
                        <h4>Emma Rodriguez</h4>
                        <p>Accountant</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="pricing" class="pricing">
        <div class="section-title">
            <h2>Choose Your Plan</h2>
            <p>Unlock the secrets of your alternate timeline with our flexible pricing options.</p>
        </div>
        <div class="pricing-container">
            <div class="pricing-card">
                <h3>Basic Scan</h3>
                <div class="price">$4.99 <span>one-time</span></div>
                <ul class="pricing-features">
                    <li>Single career analysis</li>
                    <li>Basic timeline description</li>
                    <li>Email results</li>
                    <li>30-day access</li>
                </ul>
                <a href="#try-now" class="btn">Get Started</a>
            </div>
            <div class="pricing-card featured">
                <h3>Premium Analysis</h3>
                <div class="price">$9.99 <span>one-time</span></div>
                <ul class="pricing-features">
                    <li>Top 3 alternate careers</li>
                    <li>Detailed timeline descriptions</li>
                    <li>Personality insights</li>
                    <li>Lifetime access</li>
                    <li>PDF report</li>
                </ul>
                <a href="#try-now" class="btn">Get Started</a>
            </div>
            <div class="pricing-card">
                <h3>Multiverse Explorer</h3>
                <div class="price">$19.99 <span>one-time</span></div>
                <ul class="pricing-features">
                    <li>Top 5 alternate careers</li>
                    <li>Comprehensive timeline analysis</li>
                    <li>Personality compatibility report</li>
                    <li>Career transition guidance</li>
                    <li>1-on-1 consultation</li>
                    <li>Lifetime access</li>
                </ul>
                <a href="#try-now" class="btn">Get Started</a>
            </div>
        </div>
    </section>

    <section id="try-now" class="cta">
        <h2>Try AlternaYou Now</h2>
        <p>Discover the career you would have pursued in another timeline. It only takes a minute!</p>
        
        <div class="camera-container">
            <div id="camera">
                <video id="camera-feed" autoplay playsinline></video>
                <div class="camera-overlay" id="camera-overlay">
                    <i class="fas fa-camera" style="font-size: 3rem; margin-bottom: 1rem;"></i>
                    <p>Click "Start Camera" to begin</p>
                </div>
            </div>
            <div class="camera-controls">
                <button id="start-camera" class="btn">Start Camera</button>
                <button id="take-photo" class="btn" style="display: none;">Analyze Face</button>
            </div>
        </div>
        
        <div id="result-container">
            <h3>Your Alternate Timeline Career:</h3>
            <div id="result-career"></div>
            <p id="result-description"></p>
            <button id="try-again" class="btn">Try Again</button>
            <button id="share-result" class="btn btn-outline">Share Result</button>
        </div>
    </section>

    <footer>
        <div class="logo">Alterna<span>You</span></div>
        <ul class="footer-links">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
        <ul class="social-links">
            <li><a href="#"><i class="fab fa-facebook"></i></a></li>
            <li><a href="#"><i class="fab fa-twitter"></i></a></li>
            <li><a href="#"><i class="fab fa-instagram"></i></a></li>
            <li><a href="#"><i class="fab fa-linkedin"></i></a></li>
        </ul>
        <p>&copy; 2023 AlternaYou. All rights reserved.</p>
    </footer>

    <script>
        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
        
        // Camera functionality
        const startCameraBtn = document.getElementById('start-camera');
        const takePhotoBtn = document.getElementById('take-photo');
        const cameraFeed = document.getElementById('camera-feed');
        const cameraOverlay = document.getElementById('camera-overlay');
        const resultContainer = document.getElementById('result-container');
        const resultCareer = document.getElementById('result-career');
        const resultDescription = document.getElementById('result-description');
        const tryAgainBtn = document.getElementById('try-again');
        const shareResultBtn = document.getElementById('share-result');
        
        let stream = null;
        
        // Alternate careers database
        const alternateCareersList = [
            {
                career: "Quantum Physicist",
                description: "In another timeline, your analytical mind and curiosity about the universe led you to become a pioneering quantum physicist. You would have made significant contributions to our understanding of parallel universes and quantum entanglement."
            },
            {
                career: "Award-Winning Chef",
                description: "Your creativity and attention to detail would have made you a celebrated chef in another timeline. Your fusion restaurant would have earned multiple Michelin stars, and your cookbook would be a bestseller worldwide."
            },
            {
                career: "Deep Sea Explorer",
                description: "Your sense of adventure and calm under pressure would have made you an exceptional deep sea explorer. You would have discovered several new species and helped map previously unexplored ocean trenches."
            },
            {
                career: "Renowned Architect",
                description: "Your spatial awareness and artistic vision would have made you a groundbreaking architect in another timeline. Your sustainable designs would have transformed urban landscapes across multiple continents."
            },
            {
                career: "Humanitarian Leader",
                description: "Your empathy and organizational skills would have led you to become an influential humanitarian leader. You would have founded an international aid organization that improved millions of lives."
            },
            {
                career: "Space Colony Pioneer",
                description: "Your problem-solving abilities and resilience would have made you one of the first successful Mars colony leaders. Your innovations in sustainable living would have paved the way for human expansion beyond Earth."
            },
            {
                career: "Virtual Reality Artist",
                description: "Your creative vision and technological intuition would have made you a pioneering VR artist. Your immersive experiences would have redefined the boundaries between art and technology."
            },
            {
                career: "Professional Athlete",
                description: "Your physical coordination and competitive spirit would have made you an Olympic-level athlete in another timeline. Your dedication to your sport would have inspired a generation of young athletes."
            },
            {
                career: "Neurosurgeon",
                description: "Your steady hands and ability to perform under pressure would have made you a world-renowned neurosurgeon. Your innovative surgical techniques would have saved countless lives."
            },
            {
                career: "Bestselling Author",
                description: "Your imagination and way with words would have made you a bestselling author in another timeline. Your fantasy series would have been translated into over 40 languages and adapted into a successful film franchise."
            }
        ];
        
        startCameraBtn.addEventListener('click', async () => {
            try {
                stream = await navigator.mediaDevices.getUserMedia({ video: true });
                cameraFeed.srcObject = stream;
                cameraOverlay.style.display = 'none';
                startCameraBtn.style.display = 'none';
                takePhotoBtn.style.display = 'inline-block';
            } catch (err) {
                console.error('Error accessing camera:', err);
                alert('Unable to access camera. Please make sure you have granted camera permissions.');
            }
        });
        
        takePhotoBtn.addEventListener('click', () => {
            // Simulate AI analysis with loading effect
            cameraOverlay.style.display = 'flex';
            cameraOverlay.innerHTML = '<div class="loading"><i class="fas fa-spinner fa-spin" style="font-size: 3rem; margin-bottom: 1rem;"></i><p>Analyzing facial features...</p></div>';
            
            setTimeout(() => {
                // Stop the camera
                if (stream) {
                    stream.getTracks().forEach(track => track.stop());
                }
                
                // Select a random alternate career
                const randomCareer = alternateCareersList[Math.floor(Math.random() * alternateCareersList.length)];
                
                // Display the result
                resultCareer.textContent = randomCareer.career;
                resultDescription.textContent = randomCareer.description;
                resultContainer.style.display = 'block';
                document.querySelector('.camera-container').style.display = 'none';
            }, 3000);
        });
        
        tryAgainBtn.addEventListener('click', () => {
            resultContainer.style.display = 'none';
            document.querySelector('.camera-container').style.display = 'block';
            cameraOverlay.style.display = 'flex';
            cameraOverlay.innerHTML = '<i class="fas fa-camera" style="font-size: 3rem; margin-bottom: 1rem;"></i><p>Click "Start Camera" to begin</p>';
            startCameraBtn.style.display = 'inline-block';
            takePhotoBtn.style.display = 'none';
        });
        
        shareResultBtn.addEventListener('click', () => {
            alert('Sharing functionality would be implemented here in a production environment.');
        });
    </script>
</body>
</html>`
};
