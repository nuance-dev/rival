import { ModelResponse } from "@/types/models";
import { sanitizeModelResponseContent } from "@/lib/utils";

export const minimalistLandingPageclaude_3_7_sonnet_thinking: ModelResponse = {
  id: "claude-3-7-sonnet-thinking-minimalist-landing-page",
  modelId: "claude-3-7-sonnet-thinking",
  prompt: "Generate a single-page landing page for a new AI startup that scans your face and tells you your most likely alternate career in another timeline. In a single-page self-contained HTML.",
  responseDate: "2025-02-27",
  type: "website"  ,
  title: "Minimalist Landing Page"  ,
  description: "Claude 3.7 Sonnet Thinking's response to the Tests an AI's ability to generate a complete, working landing page",
  content: sanitizeModelResponseContent(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AlternaYou | Discover Your Parallel Career</title>
    <style>
        :root {
            --primary: #6C63FF;
            --secondary: #2A265F;
            --light: #F9F9F9;
            --dark: #333333;
            --accent: #FF6584;
        }
        
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        
        body {
            line-height: 1.6;
            color: var(--dark);
            background-color: var(--light);
            overflow-x: hidden;
        }
        
        .container {
            width: 100%;
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
        }
        
        header {
            background-color: white;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            position: fixed;
            width: 100%;
            top: 0;
            z-index: 1000;
        }
        
        nav {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 20px 0;
        }
        
        .logo {
            font-size: 1.8rem;
            font-weight: 700;
            color: var(--primary);
        }
        
        .logo span {
            color: var(--secondary);
        }
        
        .nav-links {
            display: flex;
            list-style: none;
        }
        
        .nav-links li {
            margin-left: 30px;
        }
        
        .nav-links a {
            text-decoration: none;
            color: var(--dark);
            font-weight: 500;
            transition: color 0.3s;
        }
        
        .nav-links a:hover {
            color: var(--primary);
        }
        
        .btn {
            display: inline-block;
            background-color: var(--primary);
            color: white;
            padding: 10px 25px;
            border-radius: 30px;
            text-decoration: none;
            font-weight: 600;
            transition: all 0.3s;
            border: none;
            cursor: pointer;
        }
        
        .btn:hover {
            background-color: var(--secondary);
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        }
        
        .hero {
            padding: 150px 0 100px;
            text-align: center;
            background: linear-gradient(135deg, rgba(108,99,255,0.1) 0%, rgba(42,38,95,0.1) 100%);
        }
        
        .hero h1 {
            font-size: 3.5rem;
            margin-bottom: 20px;
            color: var(--secondary);
        }
        
        .hero p {
            font-size: 1.2rem;
            max-width: 700px;
            margin: 0 auto 40px;
            color: var(--dark);
        }
        
        .demo-area {
            position: relative;
            max-width: 500px;
            margin: 50px auto;
            padding: 20px;
            background: white;
            border-radius: 15px;
            box-shadow: 0 15px 30px rgba(0,0,0,0.1);
        }
        
        .webcam-placeholder {
            width: 100%;
            height: 300px;
            background-color: #ddd;
            border-radius: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.2rem;
            color: #666;
            margin-bottom: 20px;
            background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="%23666" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="10" r="3"/><path d="M12 2a8 8 0 0 0-8 8c0 1.892.402 3.13 1.5 4.5L12 22l6.5-7.5c1.098-1.37 1.5-2.608 1.5-4.5a8 8 0 0 0-8-8z"/></svg>');
            background-repeat: no-repeat;
            background-position: center;
            background-size: 80px;
        }
        
        .section {
            padding: 100px 0;
        }
        
        .section-title {
            text-align: center;
            font-size: 2.5rem;
            margin-bottom: 60px;
            color: var(--secondary);
        }
        
        .how-it-works {
            background-color: white;
        }
        
        .steps {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
        }
        
        .step {
            flex-basis: 30%;
            text-align: center;
            padding: 30px;
            background-color: var(--light);
            border-radius: 10px;
            box-shadow: 0 5px 15px rgba(0,0,0,0.05);
            transition: transform 0.3s;
        }
        
        .step:hover {
            transform: translateY(-10px);
        }
        
        .step-icon {
            font-size: 3rem;
            margin-bottom: 20px;
            color: var(--primary);
        }
        
        .step h3 {
            margin-bottom: 15px;
            color: var(--secondary);
        }
        
        .examples {
            background: linear-gradient(135deg, rgba(42,38,95,0.05) 0%, rgba(108,99,255,0.05) 100%);
        }
        
        .example-cards {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
        }
        
        .example-card {
            flex-basis: 48%;
            margin-bottom: 30px;
            background-color: white;
            border-radius: 10px;
            overflow: hidden;
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
            transition: transform 0.3s;
        }
        
        .example-card:hover {
            transform: translateY(-5px);
        }
        
        .example-image {
            height: 200px;
            background-color: #eee;
            display: flex;
            align-items: center;
            justify-content: center;
            background-size: cover;
            background-position: center;
        }
        
        .example-content {
            padding: 20px;
        }
        
        .example-content h3 {
            margin-bottom: 10px;
            color: var(--secondary);
        }
        
        .example-card:nth-child(1) .example-image {
            background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="%23666" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="7"/><path d="M12 15v9"/><path d="M9 18h6"/></svg>');
        }
        
        .example-card:nth-child(2) .example-image {
            background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="%23666" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><path d="M9 9h.01"/><path d="M15 9h.01"/></svg>');
        }
        
        .example-card:nth-child(3) .example-image {
            background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="%23666" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="10" r="3"/><path d="M7 16.3c0-1 2.5-3.3 5-3.3s5 2.3 5 3.3"/></svg>');
        }
        
        .example-card:nth-child(4) .example-image {
            background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="%23666" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="5"/><path d="M3 21v-2a7 7 0 0 1 7-7h4a7 7 0 0 1 7 7v2"/></svg>');
        }
        
        .testimonials {
            background-color: white;
        }
        
        .testimonial-cards {
            display: flex;
            overflow-x: auto;
            padding-bottom: 30px;
            scroll-snap-type: x mandatory;
        }
        
        .testimonial-card {
            flex: 0 0 350px;
            margin-right: 30px;
            scroll-snap-align: start;
            background-color: var(--light);
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0 5px 15px rgba(0,0,0,0.05);
        }
        
        .testimonial-text {
            font-style: italic;
            margin-bottom: 20px;
        }
        
        .testimonial-author {
            display: flex;
            align-items: center;
        }
        
        .author-image {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background-color: #ddd;
            margin-right: 15px;
            background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="%23666" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>');
            background-position: center;
            background-repeat: no-repeat;
        }
        
        .author-info h4 {
            margin-bottom: 5px;
            color: var(--secondary);
        }
        
        .author-info p {
            color: #666;
            font-size: 0.9rem;
        }
        
        .pricing {
            background: linear-gradient(135deg, rgba(108,99,255,0.1) 0%, rgba(42,38,95,0.1) 100%);
        }
        
        .pricing-cards {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            gap: 30px;
        }
        
        .pricing-card {
            flex-basis: 300px;
            background-color: white;
            border-radius: 10px;
            overflow: hidden;
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
            transition: transform 0.3s;
        }
        
        .pricing-card:hover {
            transform: translateY(-10px);
        }
        
        .pricing-header {
            padding: 30px;
            background-color: var(--primary);
            color: white;
            text-align: center;
        }
        
        .pricing-card:nth-child(2) .pricing-header {
            background-color: var(--secondary);
        }
        
        .pricing-title {
            font-size: 1.5rem;
            margin-bottom: 10px;
        }
        
        .pricing-price {
            font-size: 2.5rem;
            font-weight: 700;
        }
        
        .pricing-period {
            font-size: 0.9rem;
            opacity: 0.8;
        }
        
        .pricing-features {
            padding: 30px;
            text-align: center;
        }
        
        .pricing-features ul {
            list-style: none;
            margin-bottom: 30px;
        }
        
        .pricing-features li {
            margin-bottom: 15px;
            color: #666;
        }
        
        .cta {
            text-align: center;
            padding: 100px 0;
            background-color: var(--secondary);
            color: white;
        }
        
        .cta h2 {
            font-size: 2.5rem;
            margin-bottom: 20px;
        }
        
        .cta p {
            max-width: 600px;
            margin: 0 auto 40px;
            font-size: 1.2rem;
        }
        
        .cta .btn {
            background-color: var(--accent);
            padding: 15px 40px;
            font-size: 1.2rem;
        }
        
        .cta .btn:hover {
            background-color: #ff4570;
        }
        
        footer {
            background-color: var(--dark);
            color: white;
            padding: 50px 0;
        }
        
        .footer-content {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
        }
        
        .footer-logo {
            flex-basis: 30%;
            margin-bottom: 30px;
        }
        
        .footer-logo h3 {
            font-size: 1.8rem;
            margin-bottom: 20px;
            color: var(--primary);
        }
        
        .footer-logo h3 span {
            color: white;
        }
        
        .footer-links {
            flex-basis: 20%;
            margin-bottom: 30px;
        }
        
        .footer-links h4 {
            font-size: 1.2rem;
            margin-bottom: 20px;
            color: var(--accent);
        }
        
        .footer-links ul {
            list-style: none;
        }
        
        .footer-links li {
            margin-bottom: 10px;
        }
        
        .footer-links a {
            color: #aaa;
            text-decoration: none;
            transition: color 0.3s;
        }
        
        .footer-links a:hover {
            color: white;
        }
        
        .footer-bottom {
            margin-top: 50px;
            text-align: center;
            padding-top: 20px;
            border-top: 1px solid rgba(255,255,255,0.1);
            color: #aaa;
            font-size: 0.9rem;
        }
        
        @media (max-width: 768px) {
            .nav-links {
                display: none;
            }
            
            .hero h1 {
                font-size: 2.5rem;
            }
            
            .step {
                flex-basis: 100%;
                margin-bottom: 30px;
            }
            
            .example-card {
                flex-basis: 100%;
            }
            
            .footer-logo, .footer-links {
                flex-basis: 100%;
                text-align: center;
            }
        }
    </style>
</head>
<body>
    <header>
        <div class="container">
            <nav>
                <div class="logo">Alterna<span>You</span></div>
                <ul class="nav-links">
                    <li><a href="#how-it-works">How It Works</a></li>
                    <li><a href="#examples">Examples</a></li>
                    <li><a href="#testimonials">Testimonials</a></li>
                    <li><a href="#pricing">Pricing</a></li>
                    <li><a href="#cta" class="btn">Try Now</a></li>
                </ul>
            </nav>
        </div>
    </header>
    
    <section class="hero">
        <div class="container">
            <h1>Discover Your Parallel Timeline Career</h1>
            <p>Our advanced AI scans your facial features and analyzes thousands of multiverse data points to reveal the career you would have pursued in another timeline.</p>
            <a href="#cta" class="btn">Scan Your Face Now</a>
            
            <div class="demo-area">
                <div class="webcam-placeholder">Your face will appear here</div>
                <button class="btn" style="width: 100%;">Start Face Scan</button>
            </div>
        </div>
    </section>
    
    <section id="how-it-works" class="section how-it-works">
        <div class="container">
            <h2 class="section-title">How It Works</h2>
            <div class="steps">
                <div class="step">
                    <div class="step-icon">📸</div>
                    <h3>Scan Your Face</h3>
                    <p>Our AI captures 257 unique data points from your facial structure, expressions, and micro-features.</p>
                </div>
                <div class="step">
                    <div class="step-icon">🧠</div>
                    <h3>Quantum Analysis</h3>
                    <p>Our proprietary algorithm accesses quantum data from parallel universes to analyze your alternate timeline paths.</p>
                </div>
                <div class="step">
                    <div class="step-icon">🚀</div>
                    <h3>Reveal Your Path</h3>
                    <p>Discover what career you would have pursued in another timeline, with detailed insights into your alternate self.</p>
                </div>
            </div>
        </div>
    </section>
    
    <section id="examples" class="section examples">
        <div class="container">
            <h2 class="section-title">Example Discoveries</h2>
            <div class="example-cards">
                <div class="example-card">
                    <div class="example-image"></div>
                    <div class="example-content">
                        <h3>Tech Executive → Deep Sea Explorer</h3>
                        <p>"I always felt drawn to the ocean, but chose the safe path in tech. AlternaYou revealed my parallel self leads deep sea expeditions discovering new species!"</p>
                    </div>
                </div>
                <div class="example-card">
                    <div class="example-image"></div>
                    <div class="example-content">
                        <h3>Accountant → Famous Musician</h3>
                        <p>"I dabble with guitar on weekends, but in another timeline, I'm touring with a platinum-selling band. Mind-blowing but somehow feels right!"</p>
                    </div>
                </div>
                <div class="example-card">
                    <div class="example-image"></div>
                    <div class="example-content">
                        <h3>Marketing Manager → Quantum Physicist</h3>
                        <p>"I always struggled with math, so finding out my alternate self is working on string theory at CERN was shocking but incredibly affirming."</p>
                    </div>
                </div>
                <div class="example-card">
                    <div class="example-image"></div>
                    <div class="example-content">
                        <h3>Teacher → Space Architect</h3>
                        <p>"I love teaching, but my parallel self designs habitats for Mars colonies. It's given me a new hobby to explore in this timeline!"</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    <section id="testimonials" class="section testimonials">
        <div class="container">
            <h2 class="section-title">What Our Users Say</h2>
            <div class="testimonial-cards">
                <div class="testimonial-card">
                    <p class="testimonial-text">"AlternaYou showed me I would have been a wildlife photographer in another timeline. I've since taken up photography and am planning my first safari trip!"</p>
                    <div class="testimonial-author">
                        <div class="author-image"></div>
                        <div class="author-info">
                            <h4>Sarah Johnson</h4>
                            <p>Software Developer</p>
                        </div>
                    </div>
                </div>
                <div class="testimonial-card">
                    <p class="testimonial-text">"I discovered my alternate career as a chef in Paris. I've enrolled in cooking classes and am reconnecting with a passion I'd forgotten about."</p>
                    <div class="testimonial-author">
                        <div class="author-image"></div>
                        <div class="author-info">
                            <h4>Mark Chen</h4>
                            <p>Financial Analyst</p>
                        </div>
                    </div>
                </div>
                <div class="testimonial-card">
                    <p class="testimonial-text">"Finding out I would've been a neurosurgeon in another timeline gave me confidence to apply to medical school at 35. It's never too late!"</p>
                    <div class="testimonial-author">
                        <div class="author-image"></div>
                        <div class="author-info">
                            <h4>Jessica Rodriguez</h4>
                            <p>Project Manager</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    <section id="pricing" class="section pricing">
        <div class="container">
            <h2 class="section-title">Choose Your Plan</h2>
            <div class="pricing-cards">
                <div class="pricing-card">
                    <div class="pricing-header">
                        <h3 class="pricing-title">Basic Scan</h3>
                        <div class="pricing-price">$29</div>
                        <div class="pricing-period">one-time</div>
                    </div>
                    <div class="pricing-features">
                        <ul>
                            <li>One alternate career analysis</li>
                            <li>Brief personality profile</li>
                            <li>Basic skills assessment</li>
                            <li>Career transition advice</li>
                        </ul>
                        <a href="#cta" class="btn">Choose Basic</a>
                    </div>
                </div>
                <div class="pricing-card">
                    <div class="pricing-header">
                        <h3 class="pricing-title">Premium Multiverse</h3>
                        <div class="pricing-price">$79</div>
                        <div class="pricing-period">one-time</div>
                    </div>
                    <div class="pricing-features">
                        <ul>
                            <li>Three alternate timeline careers</li>
                            <li>Detailed personality analysis</li>
                            <li>Comprehensive skills assessment</li>
                            <li>Personalized transition roadmap</li>
                            <li>30-minute consultation with career coach</li>
                        </ul>
                        <a href="#cta" class="btn">Choose Premium</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    <section id="cta" class="cta">
        <div class="container">
            <h2>Ready to Discover Your Alternate Self?</h2>
            <p>Join thousands who have unlocked insights into their multiverse potential and found new directions in this timeline.</p>
            <a href="#" class="btn">Scan Your Face Now</a>
        </div>
    </section>
    
    <footer>
        <div class="container">
            <div class="footer-content">
                <div class="footer-logo">
                    <h3>Alterna<span>You</span></h3>
                    <p>AlternaYou uses advanced AI and facial recognition technology to reveal parallel timeline careers. Our mission is to help people discover untapped potential and find their true path.</p>
                </div>
                <div class="footer-links">
                    <h4>Company</h4>
                    <ul>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Our Team</a></li>
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">Press</a></li>
                    </ul>
                </div>
                <div class="footer-links">
                    <h4>Resources</h4>
                    <ul>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">How It Works</a></li>
                        <li><a href="#">FAQs</a></li>
                        <li><a href="#">Support</a></li>
                    </ul>
                </div>
                <div class="footer-links">
                    <h4>Legal</h4>
                    <ul>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Terms of Service</a></li>
                        <li><a href="#">Data Policy</a></li>
                        <li><a href="#">Cookie Policy</a></li>
                    </ul>
                </div>
            </div>
            <div class="footer-bottom">
                <p>© 2023 AlternaYou Technologies. All rights reserved. AlternaYou is for entertainment purposes only and does not access actual parallel universes.</p>
            </div>
        </div>
    </footer>
    
    <script>
        // Simple scroll behavior
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
        
        // Demo scan button functionality
        document.querySelector('.demo-area .btn').addEventListener('click', function() {
            const webcamPlaceholder = document.querySelector('.webcam-placeholder');
            webcamPlaceholder.innerHTML = "Scanning...";
            webcamPlaceholder.style.backgroundImage = 'none';
            
            setTimeout(() => {
                webcamPlaceholder.innerHTML = "Analysis Complete!<br><br>In another timeline, you would have been:<br><b>an Award-Winning Documentary Filmmaker</b>";
                this.textContent = "Try Another Scan";
            }, 3000);
        });
    </script>
</body>
</html>`)
};
