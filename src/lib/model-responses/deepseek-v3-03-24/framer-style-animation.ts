import { ModelResponse } from "@/types/models";
import { sanitizeModelResponseContent } from "@/lib/utils";

export const framerUstyleUanimationdeepseek_v3_03_24: ModelResponse = {
  id: "deepseek-v3-03-24-framer-style-animation",
  modelId: "deepseek-v3-03-24",
  prompt: "Generate a landing page with smooth Framer-like transitions between sections. In a single-page self-contained HTML.",
  responseDate: "2025-03-30",
  type: "website",
  title: "framer-style-animation",
  description: "DeepSeek V3 March 2024's response",
  content: sanitizeModelResponseContent(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Modern Landing Page with Smooth Transitions</title>
    <style>
        /* Base Styles */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
        }

        @font-face {
            font-family: 'Inter';
            src: url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
        }

        html {
            scroll-behavior: smooth;
        }

        body {
            background-color: #fafafa;
            color: #222;
            overflow-x: hidden;
        }

        /* Navigation */
        nav {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            padding: 24px 40px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            z-index: 100;
            mix-blend-mode: difference;
            color: white;
            transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        nav.scrolled {
            background-color: rgba(255, 255, 255, 0.9);
            backdrop-filter: blur(10px);
            padding: 16px 40px;
            mix-blend-mode: normal;
            color: #222;
            box-shadow: 0 2px 20px rgba(0, 0, 0, 0.05);
        }

        .logo {
            font-weight: 700;
            font-size: 18px;
            letter-spacing: -0.5px;
        }

        .nav-links {
            display: flex;
            gap: 32px;
        }

        .nav-links a {
            color: inherit;
            text-decoration: none;
            font-weight: 500;
            font-size: 14px;
            position: relative;
            transition: all 0.3s ease;
        }

        .nav-links a:after {
            content: '';
            position: absolute;
            bottom: -4px;
            left: 0;
            width: 0;
            height: 2px;
            background-color: currentColor;
            transition: width 0.3s ease;
        }

        .nav-links a:hover:after {
            width: 100%;
        }

        .cta-button {
            background-color: #222;
            color: white;
            border: none;
            padding: 10px 20px;
            border-radius: 6px;
            font-weight: 500;
            font-size: 14px;
            cursor: pointer;
            transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .cta-button:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        /* Hero Section */
        .hero {
            height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding: 0 40px;
            position: relative;
            overflow: hidden;
        }

        .hero-content {
            max-width: 800px;
            z-index: 2;
        }

        .hero h1 {
            font-size: clamp(2.5rem, 6vw, 4.5rem);
            font-weight: 700;
            line-height: 1.1;
            letter-spacing: -1.5px;
            margin-bottom: 24px;
            opacity: 0;
            transform: translateY(20px);
            animation: fadeInUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .hero p {
            font-size: 18px;
            line-height: 1.6;
            color: #555;
            max-width: 600px;
            margin-bottom: 40px;
            opacity: 0;
            transform: translateY(20px);
            animation: fadeInUp 1s cubic-bezier(0.16, 1, 0.3, 1) 0.2s forwards;
        }

        .hero-buttons {
            display: flex;
            gap: 16px;
            opacity: 0;
            transform: translateY(20px);
            animation: fadeInUp 1s cubic-bezier(0.16, 1, 0.3, 1) 0.4s forwards;
        }

        .primary-button {
            background-color: #0066ff;
            color: white;
            padding: 14px 28px;
            border-radius: 8px;
            font-weight: 600;
            font-size: 16px;
            border: none;
            cursor: pointer;
            transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .primary-button:hover {
            background-color: #0052cc;
            transform: translateY(-2px);
            box-shadow: 0 8px 20px rgba(0, 102, 255, 0.2);
        }

        .secondary-button {
            background-color: transparent;
            color: #222;
            padding: 14px 28px;
            border-radius: 8px;
            font-weight: 600;
            font-size: 16px;
            border: 1px solid rgba(0, 0, 0, 0.1);
            cursor: pointer;
            transition: all 0.3s ease;
        }

        .secondary-button:hover {
            background-color: rgba(0, 0, 0, 0.02);
            border-color: rgba(0, 0, 0, 0.2);
        }

        .hero-shapes {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 1;
            overflow: hidden;
        }

        .shape {
            position: absolute;
            border-radius: 50%;
            filter: blur(60px);
            opacity: 0.6;
        }

        .shape-1 {
            width: 400px;
            height: 400px;
            background-color: #0066ff;
            top: -100px;
            right: -100px;
            animation: float 12s ease-in-out infinite;
        }

        .shape-2 {
            width: 300px;
            height: 300px;
            background-color: #ff3366;
            bottom: -50px;
            left: -50px;
            animation: float 8s ease-in-out infinite reverse;
        }

        .shape-3 {
            width: 200px;
            height: 200px;
            background-color: #00cc88;
            top: 50%;
            left: 30%;
            animation: float 10s ease-in-out infinite 2s;
        }

        /* Features Section */
        .features {
            padding: 120px 40px;
            background-color: white;
        }

        .section-header {
            text-align: center;
            max-width: 700px;
            margin: 0 auto 80px auto;
        }

        .section-header h2 {
            font-size: 2.5rem;
            font-weight: 700;
            letter-spacing: -1px;
            margin-bottom: 16px;
        }

        .section-header p {
            font-size: 18px;
            line-height: 1.6;
            color: #555;
        }

        .features-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 40px;
            max-width: 1200px;
            margin: 0 auto;
        }

        .feature-card {
            background-color: #fafafa;
            border-radius: 16px;
            padding: 40px;
            transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
            transform: translateY(40px);
            opacity: 0;
        }

        .feature-card.visible {
            transform: translateY(0);
            opacity: 1;
        }

        .feature-card:hover {
            transform: translateY(-8px) scale(1.02);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.05);
        }

        .feature-icon {
            width: 60px;
            height: 60px;
            background-color: #0066ff;
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 24px;
            color: white;
            font-size: 24px;
        }

        .feature-card h3 {
            font-size: 1.5rem;
            font-weight: 600;
            margin-bottom: 16px;
        }

        .feature-card p {
            color: #666;
            line-height: 1.6;
        }

        /* Testimonials Section */
        .testimonials {
            padding: 120px 40px;
            background-color: #f5f5f7;
        }

        .testimonials-slider {
            max-width: 1000px;
            margin: 0 auto;
            position: relative;
            overflow: hidden;
        }

        .testimonials-track {
            display: flex;
            transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .testimonial-card {
            min-width: 100%;
            padding: 60px;
            background-color: white;
            border-radius: 24px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.03);
        }

        .testimonial-content {
            font-size: 24px;
            line-height: 1.6;
            font-weight: 500;
            margin-bottom: 40px;
            color: #222;
        }

        .testimonial-author {
            display: flex;
            align-items: center;
        }

        .author-avatar {
            width: 60px;
            height: 60px;
            border-radius: 50%;
            background-color: #eee;
            margin-right: 16px;
            overflow: hidden;
        }

        .author-info h4 {
            font-weight: 600;
            margin-bottom: 4px;
        }

        .author-info p {
            color: #777;
            font-size: 14px;
        }

        .slider-controls {
            display: flex;
            justify-content: center;
            margin-top: 40px;
            gap: 16px;
        }

        .slider-button {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background-color: white;
            border: 1px solid rgba(0, 0, 0, 0.1);
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: all 0.3s ease;
        }

        .slider-button:hover {
            background-color: #f5f5f5;
            transform: scale(1.05);
        }

        /* CTA Section */
        .cta-section {
            padding: 160px 40px;
            background-color: #222;
            color: white;
            text-align: center;
        }

        .cta-container {
            max-width: 700px;
            margin: 0 auto;
        }

        .cta-container h2 {
            font-size: 2.5rem;
            font-weight: 700;
            letter-spacing: -1px;
            margin-bottom: 24px;
        }

        .cta-container p {
            font-size: 18px;
            line-height: 1.6;
            color: #aaa;
            margin-bottom: 40px;
        }

        .cta-button-large {
            background-color: #0066ff;
            color: white;
            padding: 18px 36px;
            border-radius: 8px;
            font-weight: 600;
            font-size: 18px;
            border: none;
            cursor: pointer;
            transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .cta-button-large:hover {
            background-color: #0052cc;
            transform: translateY(-2px);
            box-shadow: 0 8px 20px rgba(0, 102, 255, 0.3);
        }

        /* Footer */
        footer {
            padding: 80px 40px 40px 40px;
            background-color: #f5f5f7;
        }

        .footer-content {
            max-width: 1200px;
            margin: 0 auto;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 40px;
            margin-bottom: 60px;
        }

        .footer-column h3 {
            font-weight: 600;
            margin-bottom: 20px;
            font-size: 16px;
        }

        .footer-column ul {
            list-style: none;
        }

        .footer-column ul li {
            margin-bottom: 12px;
        }

        .footer-column ul li a {
            text-decoration: none;
            color: #666;
            font-size: 14px;
            transition: all 0.2s ease;
        }

        .footer-column ul li a:hover {
            color: #222;
        }

        .footer-bottom {
            max-width: 1200px;
            margin: 0 auto;
            padding-top: 40px;
            border-top: 1px solid rgba(0, 0, 0, 0.1);
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .copyright {
            color: #777;
            font-size: 14px;
        }

        .social-links {
            display: flex;
            gap: 16px;
        }

        .social-links a {
            color: #666;
            transition: all 0.2s ease;
        }

        .social-links a:hover {
            color: #222;
        }

        /* Animations */
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        @keyframes float {
            0% {
                transform: translateY(0) rotate(0deg);
            }
            50% {
                transform: translateY(-20px) rotate(5deg);
            }
            100% {
                transform: translateY(0) rotate(0deg);
            }
        }

        /* Responsive */
        @media (max-width: 768px) {
            nav {
                padding: 16px 24px;
            }
            
            .nav-links {
                display: none;
            }
            
            .hero {
                padding: 0 24px;
            }
            
            .hero h1 {
                font-size: 2.5rem;
            }
            
            .hero p {
                font-size: 16px;
            }
            
            .hero-buttons {
                flex-direction: column;
            }
            
            .features, .testimonials, .cta-section {
                padding: 80px 24px;
            }
            
            .feature-card {
                padding: 30px;
            }
            
            .testimonial-card {
                padding: 40px 30px;
            }
            
            .testimonial-content {
                font-size: 20px;
            }
        }
    </style>
</head>
<body>
    <!-- Navigation -->
    <nav id="mainNav">
        <div class="logo">SmoothScroll</div>
        <div class="nav-links">
            <a href="#features">Features</a>
            <a href="#testimonials">Testimonials</a>
            <a href="#pricing">Pricing</a>
            <a href="#contact">Contact</a>
        </div>
        <button class="cta-button">Get Started</button>
    </nav>

    <!-- Hero Section -->
    <section class="hero">
        <div class="hero-shapes">
            <div class="shape shape-1"></div>
            <div class="shape shape-2"></div>
            <div class="shape shape-3"></div>
        </div>
        <div class="hero-content">
            <h1>Beautiful interactions with smooth scroll animations</h1>
            <p>Create stunning landing pages with Framer-like transitions that captivate your audience and enhance user experience.</p>
            <div class="hero-buttons">
                <button class="primary-button">Start Free Trial</button>
                <button class="secondary-button">Learn More</button>
            </div>
        </div>
    </section>

    <!-- Features Section -->
    <section class="features" id="features">
        <div class="section-header">
            <h2>Powerful features for modern websites</h2>
            <p>Our platform provides everything you need to create scroll-based animations that wow your visitors.</p>
        </div>
        <div class="features-grid">
            <div class="feature-card">
                <div class="feature-icon">✨</div>
                <h3>Scroll Transitions</h3>
                <p>Easily create smooth animations that trigger as users scroll through your page with our intuitive interface.</p>
            </div>
            <div class="feature-card">
                <div class="feature-icon">⚡</div>
                <h3>Performance Optimized</h3>
                <p>Our animations are hardware-accelerated to ensure buttery smooth performance on all devices.</p>
            </div>
            <div class="feature-card">
                <div class="feature-icon">🎨</div>
                <h3>Visual Editor</h3>
                <p>Design your animations visually without writing code, then export clean production-ready code.</p>
            </div>
            <div class="feature-card">
                <div class="feature-icon">📱</div>
                <h3>Responsive by Design</h3>
                <p>All animations adapt perfectly to any screen size, from desktop to mobile.</p>
            </div>
            <div class="feature-card">
                <div class="feature-icon">🔄</div>
                <h3>Parallax Effects</h3>
                <p>Create depth with beautiful parallax scrolling effects that engage users.</p>
            </div>
            <div class="feature-card">
                <div class="feature-icon">📊</div>
                <h3>Analytics</h3>
                <p>Track how users interact with your animations to optimize engagement.</p>
            </div>
        </div>
    </section>

    <!-- Testimonials Section -->
    <section class="testimonials" id="testimonials">
        <div class="section-header">
            <h2>Trusted by forward-thinking companies</h2>
            <p>Hear from some of our amazing customers who are creating stunning websites with our tools.</p>
        </div>
        <div class="testimonials-slider">
            <div class="testimonials-track">
                <div class="testimonial-card">
                    <p class="testimonial-content">"SmoothScroll transformed how we approach web design. The animations are so smooth and our bounce rates have decreased by 40% since implementing these effects."</p>
                    <div class="testimonial-author">
                        <div class="author-avatar"></div>
                        <div class="author-info">
                            <h4>Sarah Johnson</h4>
                            <p>Creative Director, Studio X</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="slider-controls">
            <button class="slider-button prev">←</button>
            <button class="slider-button next">→</button>
        </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
        <div class="cta-container">
            <h2>Ready to elevate your website?</h2>
            <p>Join thousands of designers and developers creating beautiful scroll experiences today.</p>
            <button class="cta-button-large">Start Free Trial</button>
        </div>
    </section>

    <!-- Footer -->
    <footer>
        <div class="footer-content">
            <div class="footer-column">
                <h3>Product</h3>
                <ul>
                    <li><a href="#">Features</a></li>
                    <li><a href="#">Pricing</a></li>
                    <li><a href="#">Templates</a></li>
                    <li><a href="#">Integrations</a></li>
                </ul>
            </div>
            <div class="footer-column">
                <h3>Resources</h3>
                <ul>
                    <li><a href="#">Documentation</a></li>
                    <li><a href="#">Tutorials</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Community</a></li>
                </ul>
            </div>
            <div class="footer-column">
                <h3>Company</h3>
                <ul>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Careers</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">Press</a></li>
                </ul>
            </div>
            <div class="footer-column">
                <h3>Legal</h3>
                <ul>
                    <li><a href="#">Privacy</a></li>
                    <li><a href="#">Terms</a></li>
                    <li><a href="#">Security</a></li>
                </ul>
            </div>
        </div>
        <div class="footer-bottom">
            <div class="copyright">© 2023 SmoothScroll. All rights reserved.</div>
            <div class="social-links">
                <a href="#">Twitter</a>
                <a href="#">Instagram</a>
                <a href="#">LinkedIn</a>
                <a href="#">GitHub</a>
            </div>
        </div>
    </footer>

    <script>
        // Navigation scroll effect
        window.addEventListener('scroll', function() {
            const nav = document.getElementById('mainNav');
            if (window.scrollY > 50) {
                nav.classList.add('scrolled');
            } else {
                nav.classList.remove('scrolled');
            }
        });

        // Feature card animation on scroll
        const featureCards = document.querySelectorAll('.feature-card');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        });

        featureCards.forEach(card => {
            observer.observe(card);
            
            // Stagger animation
            const index = Array.from(featureCards).indexOf(card);
            card.style.transitionDelay = index * 0.1 + 's';
        });

        // Smooth scroll for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });

        // Simple testimonial slider
        let currentSlide = 0;
        const testimonials = [
            {
                content: '"SmoothScroll transformed how we approach web design. The animations are so smooth and our bounce rates have decreased by 40% since implementing these effects."',
                author: "Sarah Johnson",
                role: "Creative Director, Studio X"
            },
            {
                content: '"The visual editor saved us countless hours of development time. We can now prototype scroll animations in minutes instead of days."',
                author: "Michael Chen",
                role: "Lead Developer, TechCorp"
            },
            {
                content: '"Our conversion rates improved significantly after adding scroll-based animations to our landing pages. Highly recommended!"',
                author: "Emma Rodriguez",
                role: "Marketing Manager, GrowthCo"
            }
        ];

        const track = document.querySelector('.testimonials-track');
        const testimonialCard = document.querySelector('.testimonial-card');
        const prevButton = document.querySelector('.prev');
        const nextButton = document.querySelector('.next');
        const authorAvatar = document.querySelector('.author-avatar');
        const authorName = document.querySelector('.author-info h4');
        const authorRole = document.querySelector('.author-info p');

        function updateTestimonial() {
            const testimonial = testimonials[currentSlide];
            testimonialCard.querySelector('.testimonial-content').textContent = testimonial.content;
            authorName.textContent = testimonial.author;
            authorRole.textContent = testimonial.role;
            
            // Generate random avatar color based on name
            const hue = hashCode(testimonial.author) % 360;
            authorAvatar.style.backgroundColor = 'hsl(' + hue + ', 70%, 80%)';
            
            // Animate transition
            track.style.transform = 'translateX(-' + currentSlide * 100 + '%)';
        }

        // Helper function to generate hash code
        function hashCode(str) {
            let hash = 0;
            for (let i = 0; i < str.length; i++) {
                hash = str.charCodeAt(i) + ((hash << 5) - hash);
            }
            return hash;
        }

        prevButton.addEventListener('click', () => {
            currentSlide = (currentSlide - 1 + testimonials.length) % testimonials.length;
            updateTestimonial();
        });

        nextButton.addEventListener('click', () => {
            currentSlide = (currentSlide + 1) % testimonials.length;
            updateTestimonial();
        });

        // Initialize first testimonial
        updateTestimonial();

        // Add some random confetti on CTA button click
        const ctaButtons = document.querySelectorAll('.primary-button, .cta-button-large');
        ctaButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Simple confetti effect
                for (let i = 0; i < 50; i++) {
                    createConfetti(button);
                }
            });
        });

        function createConfetti(element) {
            const confetti = document.createElement('div');
            confetti.style.position = 'absolute';
            confetti.style.width = '8px';
            confetti.style.height = '8px';
            confetti.style.backgroundColor = 'hsl(' + Math.random() * 360 + ', 100%, 50%)';
            confetti.style.borderRadius = '50%';
            confetti.style.left = element.getBoundingClientRect().left + element.offsetWidth / 2 + 'px';
            confetti.style.top = element.getBoundingClientRect().top + element.offsetHeight / 2 + 'px';
            confetti.style.pointerEvents = 'none';
            confetti.style.zIndex = '1000';
            document.body.appendChild(confetti);
            
            const angle = Math.random() * Math.PI * 2;
            const velocity = 3 + Math.random() * 3;
            const x = Math.cos(angle) * velocity;
            const y = Math.sin(angle) * velocity;
            
            let posX = element.getBoundingClientRect().left + element.offsetWidth / 2;
            let posY = element.getBoundingClientRect().top + element.offsetHeight / 2;
            let opacity = 1;
            let scale = 0.5 + Math.random() * 0.5;
            
            const animate = () => {
                posX += x;
                posY += y + 0.1; // Add gravity
                opacity -= 0.02;
                scale -= 0.01;
                
                confetti.style.left = posX + 'px';
                confetti.style.top = posY + 'px';
                confetti.style.opacity = opacity;
                confetti.style.transform = 'scale(' + scale + ')';
                
                if (opacity > 0) {
                    requestAnimationFrame(animate);
                } else {
                    confetti.remove();
                }
            };
            
            requestAnimationFrame(animate);
        }
    </script>
</body>
</html>`)
}; 