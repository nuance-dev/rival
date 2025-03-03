import { ModelResponse } from "@/types/models";
import { sanitizeModelResponseContent } from "@/lib/utils";

export const framerStyleAnimationclaude_3_7_sonnet_thinking: ModelResponse = {
  id: "claude-3-7-sonnet-thinking-framer-style-animation",
  modelId: "claude-3-7-sonnet-thinking",
  prompt: "Generate a landing page with smooth Framer-like transitions between sections. In a single-page self-contained HTML.",
  responseDate: "2025-02-27",
  type: "website"  ,
  title: "Framer-Style Animation",
  description: "Claude 3.7 Sonnet Thinking's response to the Tests an AI's ability to create smooth web animations",
  content: sanitizeModelResponseContent(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Modern Landing Page</title>
    <style>
        /* Reset and base styles */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
        }

        html {
            scroll-behavior: smooth;
        }

        body {
            line-height: 1.6;
            color: #333;
            background-color: #f9fafb;
            overflow-x: hidden;
        }

        h1, h2, h3, h4 {
            font-weight: 700;
            line-height: 1.2;
        }

        p {
            margin-bottom: 1rem;
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 2rem;
        }

        section {
            padding: 100px 0;
            position: relative;
            overflow: hidden;
        }

        /* Navigation */
        nav {
            position: fixed;
            top: 0;
            width: 100%;
            background-color: rgba(255, 255, 255, 0.9);
            backdrop-filter: blur(10px);
            z-index: 100;
            transition: all 0.3s ease;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }

        nav.scrolled {
            padding: 0.5rem 0;
        }

        .nav-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 1.5rem 2rem;
        }

        .logo {
            font-size: 1.5rem;
            font-weight: 700;
            color: #3b82f6;
        }

        .nav-links {
            display: flex;
            list-style: none;
        }

        .nav-links li {
            margin-left: 2rem;
        }

        .nav-links a {
            text-decoration: none;
            color: #4b5563;
            font-weight: 500;
            transition: color 0.3s ease;
        }

        .nav-links a:hover {
            color: #3b82f6;
        }

        /* Hero Section */
        .hero {
            min-height: 100vh;
            display: flex;
            align-items: center;
            background: linear-gradient(135deg, #f0f9ff 0%, #e6f7ff 100%);
        }

        .hero-content {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
        }

        .hero h1 {
            font-size: 3.5rem;
            margin-bottom: 1.5rem;
            background: linear-gradient(90deg, #3b82f6, #8b5cf6);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            transform: translateY(20px);
            opacity: 0;
            animation: fadeUp 1s forwards 0.3s;
        }

        .hero p {
            font-size: 1.25rem;
            max-width: 600px;
            margin-bottom: 2rem;
            color: #4b5563;
            transform: translateY(20px);
            opacity: 0;
            animation: fadeUp 1s forwards 0.6s;
        }

        .cta-button {
            display: inline-block;
            background: linear-gradient(90deg, #3b82f6, #8b5cf6);
            color: white;
            padding: 0.8rem 2rem;
            border-radius: 50px;
            text-decoration: none;
            font-weight: 600;
            border: none;
            cursor: pointer;
            box-shadow: 0 4px 14px rgba(59, 130, 246, 0.4);
            transition: all 0.3s ease;
            transform: translateY(20px);
            opacity: 0;
            animation: fadeUp 1s forwards 0.9s;
        }

        .cta-button:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(59, 130, 246, 0.6);
        }

        /* Features Section */
        .features {
            background-color: white;
        }

        .section-title {
            text-align: center;
            margin-bottom: 4rem;
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.8s ease, transform 0.8s ease;
        }

        .section-title.animated {
            opacity: 1;
            transform: translateY(0);
        }

        .section-title h2 {
            font-size: 2.5rem;
            margin-bottom: 1rem;
            color: #1f2937;
        }

        .section-title p {
            font-size: 1.1rem;
            color: #6b7280;
            max-width: 600px;
            margin: 0 auto;
        }

        .feature-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
        }

        .feature-card {
            background: white;
            border-radius: 12px;
            padding: 2rem;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
            transition: transform 0.5s ease, box-shadow 0.5s ease;
            opacity: 0;
            transform: translateY(30px);
        }

        .feature-card.animated {
            opacity: 1;
            transform: translateY(0);
        }

        .feature-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
        }

        .feature-icon {
            background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
            width: 60px;
            height: 60px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 1.5rem;
        }

        .feature-icon i {
            color: white;
            font-size: 24px;
        }

        .feature-title {
            font-size: 1.5rem;
            margin-bottom: 1rem;
            color: #1f2937;
        }

        /* About Section */
        .about {
            background: linear-gradient(135deg, #f9fafb 0%, #f3f4f6 100%);
        }

        .about-content {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            gap: 4rem;
        }

        .about-text {
            flex: 1;
            min-width: 300px;
            opacity: 0;
            transform: translateX(-30px);
            transition: opacity 0.8s ease, transform 0.8s ease;
        }

        .about-text.animated {
            opacity: 1;
            transform: translateX(0);
        }

        .about-image {
            flex: 1;
            min-width: 300px;
            opacity: 0;
            transform: translateX(30px);
            transition: opacity 0.8s ease, transform 0.8s ease;
        }

        .about-image.animated {
            opacity: 1;
            transform: translateX(0);
        }

        .about-image img {
            width: 100%;
            border-radius: 12px;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        }

        /* Testimonials */
        .testimonials {
            background-color: white;
        }

        .testimonial-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
        }

        .testimonial-card {
            background: white;
            border-radius: 12px;
            padding: 2rem;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
            position: relative;
            opacity: 0;
            transform: scale(0.9);
            transition: opacity 0.8s ease, transform 0.8s ease;
        }

        .testimonial-card.animated {
            opacity: 1;
            transform: scale(1);
        }

        .quote {
            font-size: 1.1rem;
            margin-bottom: 1.5rem;
            font-style: italic;
            color: #4b5563;
        }

        .author {
            display: flex;
            align-items: center;
        }

        .author-image {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            margin-right: 1rem;
            overflow: hidden;
        }

        .author-image img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        .author-info h4 {
            font-size: 1.1rem;
            margin-bottom: 0.25rem;
            color: #1f2937;
        }

        .author-info p {
            font-size: 0.9rem;
            color: #6b7280;
        }

        /* Contact Section */
        .contact {
            background: linear-gradient(135deg, #f0f9ff 0%, #e6f7ff 100%);
        }

        .contact-container {
            display: flex;
            flex-wrap: wrap;
            gap: 4rem;
        }

        .contact-info {
            flex: 1;
            min-width: 300px;
            opacity: 0;
            transform: translateX(-30px);
            transition: opacity 0.8s ease, transform 0.8s ease;
        }

        .contact-info.animated {
            opacity: 1;
            transform: translateX(0);
        }

        .contact-form {
            flex: 1;
            min-width: 300px;
            opacity: 0;
            transform: translateX(30px);
            transition: opacity 0.8s ease, transform 0.8s ease;
        }

        .contact-form.animated {
            opacity: 1;
            transform: translateX(0);
        }

        form {
            display: grid;
            gap: 1.5rem;
        }

        .form-group {
            display: flex;
            flex-direction: column;
        }

        label {
            margin-bottom: 0.5rem;
            font-weight: 500;
            color: #4b5563;
        }

        input, textarea {
            padding: 0.75rem 1rem;
            border: 1px solid #d1d5db;
            border-radius: 6px;
            font-size: 1rem;
            transition: border-color 0.3s ease;
        }

        input:focus, textarea:focus {
            outline: none;
            border-color: #3b82f6;
            box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.2);
        }

        textarea {
            resize: vertical;
            min-height: 150px;
        }

        .submit-btn {
            background: linear-gradient(90deg, #3b82f6, #8b5cf6);
            color: white;
            padding: 0.8rem 2rem;
            border-radius: 6px;
            border: none;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
            box-shadow: 0 4px 14px rgba(59, 130, 246, 0.4);
        }

        .submit-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(59, 130, 246, 0.6);
        }

        /* Footer */
        footer {
            background: #1f2937;
            color: white;
            padding: 3rem 0;
        }

        .footer-container {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            gap: 2rem;
        }

        .footer-logo {
            flex: 1;
            min-width: 250px;
        }

        .footer-logo h3 {
            font-size: 1.5rem;
            margin-bottom: 1rem;
            color: white;
        }

        .footer-links {
            flex: 1;
            min-width: 150px;
        }

        .footer-links h4 {
            font-size: 1.1rem;
            margin-bottom: 1.5rem;
            color: white;
        }

        .footer-links ul {
            list-style: none;
        }

        .footer-links ul li {
            margin-bottom: 0.75rem;
        }

        .footer-links ul li a {
            color: #d1d5db;
            text-decoration: none;
            transition: color 0.3s ease;
        }

        .footer-links ul li a:hover {
            color: white;
        }

        .copyright {
            text-align: center;
            margin-top: 3rem;
            padding-top: 1.5rem;
            border-top: 1px solid #374151;
            color: #9ca3af;
        }

        /* Animations */
        @keyframes fadeUp {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        @keyframes fadeIn {
            from {
                opacity: 0;
            }
            to {
                opacity: 1;
            }
        }

        /* Responsive */
        @media (max-width: 768px) {
            .hero h1 {
                font-size: 2.5rem;
            }
            
            .hero p {
                font-size: 1.1rem;
            }
            
            .section-title h2 {
                font-size: 2rem;
            }
            
            .nav-links {
                display: none;
            }
        }
    </style>
</head>
<body>
    <!-- Navigation -->
    <nav id="navbar">
        <div class="nav-container">
            <div class="logo">Acme Co.</div>
            <ul class="nav-links">
                <li><a href="#hero">Home</a></li>
                <li><a href="#features">Features</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#testimonials">Testimonials</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </div>
    </nav>

    <!-- Hero Section -->
    <section id="hero" class="hero">
        <div class="container hero-content">
            <h1>Elevate Your Digital Experience</h1>
            <p>A modern solution for growing businesses looking to leverage the power of technology in today's digital landscape.</p>
            <a href="#features" class="cta-button">Get Started</a>
        </div>
    </section>

    <!-- Features Section -->
    <section id="features" class="features">
        <div class="container">
            <div class="section-title">
                <h2>Our Features</h2>
                <p>Discover the tools and features designed to help your business thrive in the digital age.</p>
            </div>
            <div class="feature-grid">
                <div class="feature-card">
                    <div class="feature-icon">★</div>
                    <h3 class="feature-title">Intuitive Design</h3>
                    <p>Our user-friendly interface ensures a seamless experience for both you and your customers.</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">⚡</div>
                    <h3 class="feature-title">Lightning Fast</h3>
                    <p>Optimized for speed and performance, ensuring your digital presence is always responsive.</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">🔒</div>
                    <h3 class="feature-title">Secure & Reliable</h3>
                    <p>Built with security at its core, protecting your data and providing peace of mind.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- About Section -->
    <section id="about" class="about">
        <div class="container">
            <div class="section-title">
                <h2>About Us</h2>
                <p>Learn about our mission and what drives us to create amazing digital experiences.</p>
            </div>
            <div class="about-content">
                <div class="about-text">
                    <h3>Our Story</h3>
                    <p>Founded in 2020, Acme Co. was built with a vision to simplify digital transformation for businesses of all sizes. Our team of experts brings together decades of experience in technology, design, and business strategy.</p>
                    <p>We believe that great technology should be accessible to everyone, which is why we've created a platform that combines power with simplicity.</p>
                    <a href="#contact" class="cta-button">Get in Touch</a>
                </div>
                <div class="about-image">
                    <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjM2I4MmY2IiBvcGFjaXR5PSIwLjIiLz48dGV4dCB4PSI1MCUiIHk9IjUwJSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjI0IiBmaWxsPSIjM2I4MmY2IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBhbGlnbm1lbnQtYmFzZWxpbmU9Im1pZGRsZSI+QWJvdXQgVXMgSW1hZ2U8L3RleHQ+PC9zdmc+" alt="Our Team">
                </div>
            </div>
        </div>
    </section>

    <!-- Testimonials Section -->
    <section id="testimonials" class="testimonials">
        <div class="container">
            <div class="section-title">
                <h2>What Our Clients Say</h2>
                <p>Don't just take our word for it. Here's what our clients have to say about working with us.</p>
            </div>
            <div class="testimonial-grid">
                <div class="testimonial-card">
                    <p class="quote">"Working with Acme Co. transformed our online presence. Their team's expertise and dedication exceeded our expectations."</p>
                    <div class="author">
                        <div class="author-image">
                            <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMjUiIGN5PSIyNSIgcj0iMjUiIGZpbGw9IiNkMWQ1ZGIiLz48dGV4dCB4PSI1MCUiIHk9IjUwJSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjEyIiBmaWxsPSIjNGI1NTYzIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBhbGlnbm1lbnQtYmFzZWxpbmU9Im1pZGRsZSI+SkQ8L3RleHQ+PC9zdmc+" alt="Jane Doe">
                        </div>
                        <div class="author-info">
                            <h4>Jane Doe</h4>
                            <p>CEO, Tech Innovations</p>
                        </div>
                    </div>
                </div>
                <div class="testimonial-card">
                    <p class="quote">"The platform is intuitive, powerful, and has helped us streamline our operations in ways we didn't think possible."</p>
                    <div class="author">
                        <div class="author-image">
                            <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMjUiIGN5PSIyNSIgcj0iMjUiIGZpbGw9IiNkMWQ1ZGIiLz48dGV4dCB4PSI1MCUiIHk9IjUwJSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjEyIiBmaWxsPSIjNGI1NTYzIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBhbGlnbm1lbnQtYmFzZWxpbmU9Im1pZGRsZSI+SlM8L3RleHQ+PC9zdmc+" alt="John Smith">
                        </div>
                        <div class="author-info">
                            <h4>John Smith</h4>
                            <p>Marketing Director, Growfast</p>
                        </div>
                    </div>
                </div>
                <div class="testimonial-card">
                    <p class="quote">"I was impressed by their attention to detail and commitment to delivering quality solutions on time and within budget."</p>
                    <div class="author">
                        <div class="author-image">
                            <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMjUiIGN5PSIyNSIgcj0iMjUiIGZpbGw9IiNkMWQ1ZGIiLz48dGV4dCB4PSI1MCUiIHk9IjUwJSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjEyIiBmaWxsPSIjNGI1NTYzIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBhbGlnbm1lbnQtYmFzZWxpbmU9Im1pZGRsZSI+U0w8L3RleHQ+PC9zdmc+" alt="Sarah Lee">
                        </div>
                        <div class="author-info">
                            <h4>Sarah Lee</h4>
                            <p>Founder, Design Masters</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="contact">
        <div class="container">
            <div class="section-title">
                <h2>Get In Touch</h2>
                <p>Have questions or ready to get started? Reach out to our team today.</p>
            </div>
            <div class="contact-container">
                <div class="contact-info">
                    <h3>Contact Information</h3>
                    <p>We're here to help and answer any questions you might have. We look forward to hearing from you.</p>
                    <p><strong>Email:</strong> info@acmeco.com</p>
                    <p><strong>Phone:</strong> +1 (555) 123-4567</p>
                    <p><strong>Address:</strong> 123 Tech Avenue, San Francisco, CA 94107</p>
                </div>
                <div class="contact-form">
                    <form id="contactForm">
                        <div class="form-group">
                            <label for="name">Name</label>
                            <input type="text" id="name" name="name" required>
                        </div>
                        <div class="form-group">
                            <label for="email">Email</label>
                            <input type="email" id="email" name="email" required>
                        </div>
                        <div class="form-group">
                            <label for="message">Message</label>
                            <textarea id="message" name="message" required></textarea>
                        </div>
                        <button type="submit" class="submit-btn">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer>
        <div class="container footer-container">
            <div class="footer-logo">
                <h3>Acme Co.</h3>
                <p>Transforming businesses through innovative digital solutions.</p>
            </div>
            <div class="footer-links">
                <h4>Company</h4>
                <ul>
                    <li><a href="#about">About Us</a></li>
                    <li><a href="#features">Features</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
            <div class="footer-links">
                <h4>Legal</h4>
                <ul>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Terms of Service</a></li>
                    <li><a href="#">Cookie Policy</a></li>
                </ul>
            </div>
        </div>
        <div class="copyright">
            <p>&copy; 2023 Acme Co. All rights reserved.</p>
        </div>
    </footer>

    <script>
        // Intersection Observer for animations
        document.addEventListener('DOMContentLoaded', function() {
            // Smooth scroll for navigation links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    document.querySelector(this.getAttribute('href')).scrollIntoView({
                        behavior: 'smooth'
                    });
                });
            });

            // Nav shrink on scroll
            const navbar = document.getElementById('navbar');
            window.addEventListener('scroll', () => {
                if (window.scrollY > 50) {
                    navbar.classList.add('scrolled');
                } else {
                    navbar.classList.remove('scrolled');
                }
            });

            // Animate elements when they come into view
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animated');
                        // Stop observing after it's animated
                        observer.unobserve(entry.target);
                    }
                });
            }, {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            });

            // Observe all elements that should be animated
            document.querySelectorAll('.section-title, .feature-card, .about-text, .about-image, .testimonial-card, .contact-info, .contact-form').forEach(element => {
                observer.observe(element);
            });

            // Simple form handling
            const contactForm = document.getElementById('contactForm');
            if (contactForm) {
                contactForm.addEventListener('submit', function(e) {
                    e.preventDefault();
                    alert('Thank you for your message! We will get back to you soon.');
                    contactForm.reset();
                });
            }
        });
    </script>
</body>
</html>`)
};
