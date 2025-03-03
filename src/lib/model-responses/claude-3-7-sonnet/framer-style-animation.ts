import { ModelResponse } from "@/types/models";
import { sanitizeModelResponseContent } from "@/lib/utils";

export const framerStyleAnimationclaude_3_7_sonnet: ModelResponse = {
  id: "claude-3-7-sonnet-framer-style-animation",
  modelId: "claude-3-7-sonnet",
  prompt: "Generate a landing page with smooth Framer-like transitions between sections. In a single-page self-contained HTML.",
  responseDate: "2025-02-27",
  type: "website"  ,
  title: "Framer-Style Animation",
  description: "Claude 3.7 Sonnet's response to the Tests an AI's ability to create smooth web animations",
  content: sanitizeModelResponseContent(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Smooth Transitions Landing Page</title>
    <style>
        /* Reset and base styles */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
        }

        html {
            scroll-behavior: smooth;
        }

        body {
            background-color: #f8f9fa;
            color: #333;
            overflow-x: hidden;
            line-height: 1.6;
        }

        /* Navigation */
        nav {
            position: fixed;
            top: 0;
            width: 100%;
            background-color: rgba(255, 255, 255, 0.9);
            backdrop-filter: blur(10px);
            z-index: 1000;
            padding: 1.5rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            transition: all 0.3s ease;
        }

        nav.scrolled {
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
            padding: 1rem 1.5rem;
        }

        .logo {
            font-weight: 700;
            font-size: 1.5rem;
            color: #5046e5;
        }

        .nav-links {
            display: flex;
            gap: 2rem;
        }

        .nav-links a {
            text-decoration: none;
            color: #333;
            font-weight: 500;
            transition: color 0.3s ease;
            position: relative;
        }

        .nav-links a:hover {
            color: #5046e5;
        }

        .nav-links a::after {
            content: '';
            position: absolute;
            width: 0;
            height: 2px;
            bottom: -4px;
            left: 0;
            background-color: #5046e5;
            transition: width 0.3s ease;
        }

        .nav-links a:hover::after {
            width: 100%;
        }

        /* Sections */
        section {
            min-height: 100vh;
            padding: 6rem 2rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            position: relative;
            overflow: hidden;
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
            width: 100%;
            position: relative;
            z-index: 2;
        }

        /* Hero Section */
        #hero {
            background: linear-gradient(135deg, #5046e5, #8a7bff);
            color: white;
            text-align: center;
        }

        .hero-content {
            opacity: 0;
            transform: translateY(30px);
            transition: all 0.8s ease;
        }

        .hero-content.visible {
            opacity: 1;
            transform: translateY(0);
        }

        h1 {
            font-size: 4rem;
            margin-bottom: 1.5rem;
            line-height: 1.2;
        }

        .subtitle {
            font-size: 1.5rem;
            margin-bottom: 2.5rem;
            opacity: 0.9;
        }

        .cta-button {
            display: inline-block;
            background-color: white;
            color: #5046e5;
            padding: 1rem 2rem;
            border-radius: 50px;
            font-weight: 600;
            text-decoration: none;
            transition: all 0.3s ease;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
        }

        .cta-button:hover {
            transform: translateY(-3px);
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        }

        /* Features Section */
        #features {
            background-color: white;
        }

        .section-title {
            text-align: center;
            margin-bottom: 4rem;
            font-size: 2.5rem;
            color: #333;
            opacity: 0;
            transform: translateY(30px);
            transition: all 0.8s ease;
        }

        .section-title.visible {
            opacity: 1;
            transform: translateY(0);
        }

        .features-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
        }

        .feature-card {
            background-color: #f8f9fa;
            border-radius: 16px;
            padding: 2rem;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
            transition: all 0.5s ease;
            opacity: 0;
            transform: translateY(30px);
        }

        .feature-card.visible {
            opacity: 1;
            transform: translateY(0);
        }

        .feature-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }

        .feature-icon {
            font-size: 2.5rem;
            margin-bottom: 1.5rem;
            color: #5046e5;
        }

        .feature-title {
            font-size: 1.5rem;
            margin-bottom: 1rem;
        }

        /* About Section */
        #about {
            background-color: #f8f9fa;
        }

        .about-content {
            display: flex;
            align-items: center;
            gap: 4rem;
            flex-wrap: wrap;
        }

        .about-text {
            flex: 1;
            min-width: 300px;
            opacity: 0;
            transform: translateX(-30px);
            transition: all 0.8s ease;
        }

        .about-text.visible {
            opacity: 1;
            transform: translateX(0);
        }

        .about-image {
            flex: 1;
            min-width: 300px;
            position: relative;
            height: 400px;
            opacity: 0;
            transform: translateX(30px);
            transition: all 0.8s ease;
        }

        .about-image.visible {
            opacity: 1;
            transform: translateX(0);
        }

        .about-image-inner {
            width: 100%;
            height: 100%;
            background-color: #ddd;
            border-radius: 16px;
            overflow: hidden;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
            background-image: url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80');
            background-size: cover;
            background-position: center;
        }

        /* Testimonials Section */
        #testimonials {
            background-color: white;
        }

        .testimonials-slider {
            position: relative;
            width: 100%;
            overflow: hidden;
            padding: 2rem 0;
        }

        .testimonials-track {
            display: flex;
            transition: transform 0.5s ease;
        }

        .testimonial {
            min-width: 100%;
            padding: 0 1rem;
            opacity: 0;
            transform: scale(0.9);
            transition: all 0.8s ease;
        }

        .testimonial.visible {
            opacity: 1;
            transform: scale(1);
        }

        .testimonial-card {
            background-color: #f8f9fa;
            border-radius: 16px;
            padding: 2rem;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
            text-align: center;
        }

        .testimonial-text {
            font-size: 1.2rem;
            font-style: italic;
            margin-bottom: 1.5rem;
        }

        .testimonial-author {
            font-weight: 600;
        }

        .slider-nav {
            display: flex;
            justify-content: center;
            gap: 1rem;
            margin-top: 2rem;
        }

        .slider-dot {
            width: 12px;
            height: 12px;
            border-radius: 50%;
            background-color: #ddd;
            cursor: pointer;
            transition: all 0.3s ease;
        }

        .slider-dot.active {
            background-color: #5046e5;
            transform: scale(1.2);
        }

        /* Contact Section */
        #contact {
            background: linear-gradient(135deg, #5046e5, #8a7bff);
            color: white;
        }

        .contact-form {
            max-width: 600px;
            margin: 0 auto;
            opacity: 0;
            transform: translateY(30px);
            transition: all 0.8s ease;
        }

        .contact-form.visible {
            opacity: 1;
            transform: translateY(0);
        }

        .form-group {
            margin-bottom: 1.5rem;
        }

        label {
            display: block;
            margin-bottom: 0.5rem;
            font-weight: 500;
        }

        input, textarea {
            width: 100%;
            padding: 1rem;
            border: none;
            border-radius: 8px;
            background-color: rgba(255, 255, 255, 0.1);
            color: white;
            font-size: 1rem;
            transition: all 0.3s ease;
        }

        input:focus, textarea:focus {
            outline: none;
            background-color: rgba(255, 255, 255, 0.2);
        }

        textarea {
            min-height: 150px;
            resize: vertical;
        }

        .submit-button {
            background-color: white;
            color: #5046e5;
            border: none;
            padding: 1rem 2rem;
            border-radius: 50px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
        }

        .submit-button:hover {
            transform: translateY(-3px);
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        }

        /* Footer */
        footer {
            background-color: #333;
            color: white;
            padding: 3rem 2rem;
            text-align: center;
        }

        .footer-content {
            max-width: 1200px;
            margin: 0 auto;
        }

        .social-links {
            display: flex;
            justify-content: center;
            gap: 1.5rem;
            margin: 2rem 0;
        }

        .social-link {
            color: white;
            font-size: 1.5rem;
            transition: all 0.3s ease;
        }

        .social-link:hover {
            color: #5046e5;
            transform: translateY(-3px);
        }

        .copyright {
            opacity: 0.7;
            font-size: 0.9rem;
        }

        /* Animations and decorations */
        .shape {
            position: absolute;
            z-index: 1;
            opacity: 0.1;
        }

        .shape-1 {
            width: 300px;
            height: 300px;
            border-radius: 50%;
            background-color: white;
            top: 10%;
            left: -150px;
        }

        .shape-2 {
            width: 200px;
            height: 200px;
            border-radius: 50%;
            background-color: white;
            bottom: 10%;
            right: -100px;
        }

        /* Responsive styles */
        @media (max-width: 768px) {
            h1 {
                font-size: 2.5rem;
            }
            
            .subtitle {
                font-size: 1.2rem;
            }
            
            .about-content {
                flex-direction: column;
                gap: 2rem;
            }
            
            .nav-links {
                display: none;
            }
        }

        /* Scroll progress indicator */
        .progress-bar {
            position: fixed;
            top: 0;
            left: 0;
            height: 4px;
            background-color: #5046e5;
            width: 0%;
            z-index: 1001;
            transition: width 0.1s ease;
        }

        /* Floating elements animation */
        @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
            100% { transform: translateY(0px); }
        }

        .floating {
            animation: float 6s ease-in-out infinite;
        }
    </style>
</head>
<body>
    <!-- Progress Bar -->
    <div class="progress-bar"></div>

    <!-- Navigation -->
    <nav id="navbar">
        <div class="logo">Framer</div>
        <div class="nav-links">
            <a href="#hero">Home</a>
            <a href="#features">Features</a>
            <a href="#about">About</a>
            <a href="#testimonials">Testimonials</a>
            <a href="#contact">Contact</a>
        </div>
    </nav>

    <!-- Hero Section -->
    <section id="hero">
        <div class="shape shape-1"></div>
        <div class="shape shape-2"></div>
        <div class="container">
            <div class="hero-content">
                <h1>Create Beautiful Websites with Smooth Transitions</h1>
                <p class="subtitle">Elevate your web presence with stunning animations and seamless user experiences</p>
                <a href="#features" class="cta-button">Explore Features</a>
            </div>
        </div>
    </section>

    <!-- Features Section -->
    <section id="features">
        <div class="container">
            <h2 class="section-title">Powerful Features</h2>
            <div class="features-grid">
                <div class="feature-card" data-delay="0">
                    <div class="feature-icon">✨</div>
                    <h3 class="feature-title">Smooth Animations</h3>
                    <p>Create fluid, responsive animations that enhance user experience without compromising performance.</p>
                </div>
                <div class="feature-card" data-delay="200">
                    <div class="feature-icon">🎨</div>
                    <h3 class="feature-title">Beautiful Design</h3>
                    <p>Craft stunning interfaces with our library of pre-built components and customizable templates.</p>
                </div>
                <div class="feature-card" data-delay="400">
                    <div class="feature-icon">⚡</div>
                    <h3 class="feature-title">Lightning Fast</h3>
                    <p>Optimized for speed and performance, ensuring your website loads quickly on any device.</p>
                </div>
                <div class="feature-card" data-delay="600">
                    <div class="feature-icon">📱</div>
                    <h3 class="feature-title">Fully Responsive</h3>
                    <p>Looks great on any screen size, from mobile devices to large desktop monitors.</p>
                </div>
                <div class="feature-card" data-delay="800">
                    <div class="feature-icon">🔍</div>
                    <h3 class="feature-title">SEO Optimized</h3>
                    <p>Built with search engines in mind, helping your website rank higher in search results.</p>
                </div>
                <div class="feature-card" data-delay="1000">
                    <div class="feature-icon">🛠️</div>
                    <h3 class="feature-title">Easy to Customize</h3>
                    <p>Simple and intuitive tools make it easy to customize every aspect of your website.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- About Section -->
    <section id="about">
        <div class="container">
            <h2 class="section-title">About Us</h2>
            <div class="about-content">
                <div class="about-text">
                    <h3>Our Story</h3>
                    <p>We're a team of passionate designers and developers who believe that great websites should be both beautiful and functional. Our mission is to help businesses and individuals create stunning online experiences that engage and delight users.</p>
                    <p>With years of experience in web design and development, we've crafted a solution that makes it easy to create professional-quality websites with smooth, Framer-like transitions and animations.</p>
                    <p>Whether you're building a personal portfolio, a business website, or an e-commerce platform, our tools and templates provide everything you need to succeed online.</p>
                </div>
                <div class="about-image">
                    <div class="about-image-inner floating"></div>
                </div>
            </div>
        </div>
    </section>

    <!-- Testimonials Section -->
    <section id="testimonials">
        <div class="container">
            <h2 class="section-title">What Our Clients Say</h2>
            <div class="testimonials-slider">
                <div class="testimonials-track">
                    <div class="testimonial">
                        <div class="testimonial-card">
                            <p class="testimonial-text">"The smooth transitions and animations completely transformed our website. Our engagement metrics have improved dramatically since the redesign."</p>
                            <p class="testimonial-author">Sarah Johnson, Marketing Director</p>
                        </div>
                    </div>
                    <div class="testimonial">
                        <div class="testimonial-card">
                            <p class="testimonial-text">"I was able to create a professional-looking website in just a few days. The animations and transitions make it look like it was built by a high-end agency."</p>
                            <p class="testimonial-author">Michael Chen, Entrepreneur</p>
                        </div>
                    </div>
                    <div class="testimonial">
                        <div class="testimonial-card">
                            <p class="testimonial-text">"As a designer, I appreciate the attention to detail in the animations. They're subtle yet effective, enhancing the user experience without being distracting."</p>
                            <p class="testimonial-author">Emma Rodriguez, UX Designer</p>
                        </div>
                    </div>
                </div>
                <div class="slider-nav">
                    <div class="slider-dot active" data-index="0"></div>
                    <div class="slider-dot" data-index="1"></div>
                    <div class="slider-dot" data-index="2"></div>
                </div>
            </div>
        </div>
    </section>

    <!-- Contact Section -->
    <section id="contact">
        <div class="shape shape-1"></div>
        <div class="shape shape-2"></div>
        <div class="container">
            <h2 class="section-title">Get In Touch</h2>
            <div class="contact-form">
                <div class="form-group">
                    <label for="name">Name</label>
                    <input type="text" id="name" placeholder="Your name">
                </div>
                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" id="email" placeholder="Your email">
                </div>
                <div class="form-group">
                    <label for="message">Message</label>
                    <textarea id="message" placeholder="Your message"></textarea>
                </div>
                <button class="submit-button">Send Message</button>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer>
        <div class="footer-content">
            <div class="logo">Framer</div>
            <div class="social-links">
                <a href="#" class="social-link">
                    <i>📱</i>
                </a>
                <a href="#" class="social-link">
                    <i>💻</i>
                </a>
                <a href="#" class="social-link">
                    <i>📷</i>
                </a>
                <a href="#" class="social-link">
                    <i>📝</i>
                </a>
            </div>
            <p class="copyright">© 2023 Framer. All rights reserved.</p>
        </div>
    </footer>

    <script>
        // Scroll progress indicator
        window.addEventListener('scroll', () => {
            const scrollTop = window.scrollY;
            const docHeight = document.body.offsetHeight - window.innerHeight;
            const scrollPercent = scrollTop / docHeight * 100;
            document.querySelector('.progress-bar').style.width = scrollPercent + '%';
            
            // Navbar background change on scroll
            const navbar = document.getElementById('navbar');
            if (scrollTop > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });

        // Intersection Observer for scroll animations
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        // Observe elements
        document.querySelectorAll('.hero-content, .section-title, .feature-card, .about-text, .about-image, .testimonial, .contact-form').forEach(el => {
            observer.observe(el);
        });

        // Add staggered delay to feature cards
        document.querySelectorAll('.feature-card').forEach(card => {
            const delay = card.getAttribute('data-delay');
            card.style.transitionDelay = delay + 'ms';
        });

        // Testimonial slider
        const sliderDots = document.querySelectorAll('.slider-dot');
        const testimonialsTrack = document.querySelector('.testimonials-track');
        const testimonials = document.querySelectorAll('.testimonial');

        sliderDots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                // Update active dot
                document.querySelector('.slider-dot.active').classList.remove('active');
                dot.classList.add('active');
                
                // Move slider
                testimonialsTrack.style.transform = 'translateX(-' + (index * 100) + '%)';
                
                // Update visible class for testimonials
                testimonials.forEach((testimonial, i) => {
                    if (i === index) {
                        testimonial.classList.add('visible');
                    } else {
                        testimonial.classList.remove('visible');
                    }
                });
            });
        });

        // Initialize first testimonial as visible
        testimonials[0].classList.add('visible');

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            });
        });

        // Initialize animations when page loads
        window.addEventListener('load', () => {
            document.querySelector('.hero-content').classList.add('visible');
            
            // Check if elements are already in viewport on load
            const elementsToAnimate = document.querySelectorAll('.section-title, .feature-card, .about-text, .about-image, .testimonial, .contact-form');
            
            elementsToAnimate.forEach(el => {
                const rect = el.getBoundingClientRect();
                if (rect.top < window.innerHeight) {
                    el.classList.add('visible');
                }
            });
        });
    </script>
</body>
</html>`)
};
