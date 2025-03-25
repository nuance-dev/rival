import { ModelResponse } from "@/types/models";
import { sanitizeModelResponseContent } from "@/lib/utils";

export const framerUstyleUanimationgemini_2_5_pro_exp: ModelResponse = {
  id: "gemini-2-5-pro-exp-framer-style-animation",
  modelId: "gemini-2-5-pro-exp",
  prompt: "Generate a landing page with smooth Framer-like transitions between sections. In a single-page self-contained HTML.",
  responseDate: "2025-03-25",
  type: "text",
  title: "framer-style-animation",
  description: "Gemini 2.5 Pro Experimental's response",
  content: sanitizeModelResponseContent(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Smooth Scroll Landing Page</title>
        <style>
            /* Basic Reset & Global Styles */
            * {
                box-sizing: border-box;
                margin: 0;
                padding: 0;
            }
    
            html {
                /* THE CORE: Enables smooth scrolling for internal links */
                scroll-behavior: smooth;
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
                             Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
                line-height: 1.6;
                color: #333;
            }
    
            body {
                background-color: #f4f4f4;
            }
    
            /* Navigation Styling */
            .navbar {
                position: fixed; /* Stick to the top */
                top: 0;
                left: 0;
                width: 100%;
                background-color: rgba(255, 255, 255, 0.9); /* Slightly transparent white */
                backdrop-filter: blur(10px); /* Frosted glass effect */
                -webkit-backdrop-filter: blur(10px); /* Safari support */
                box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
                padding: 1rem 2rem;
                z-index: 1000; /* Ensure it's above sections */
                display: flex;
                justify-content: center; /* Center nav items */
                align-items: center;
            }
    
            .nav-links {
                list-style: none;
                display: flex;
                gap: 2rem; /* Space between links */
            }
    
            .nav-links a {
                text-decoration: none;
                color: #333;
                font-weight: 500;
                padding: 0.5rem 0;
                position: relative;
                transition: color 0.3s ease, border-bottom-color 0.3s ease;
                border-bottom: 2px solid transparent; /* Placeholder for active state */
            }
    
            .nav-links a:hover {
                color: #007aff; /* Standard blue link color on hover */
            }
    
            /* Active Link Styling (Updated by JS) */
            .nav-links a.active {
                color: #007aff;
                font-weight: 600;
                border-bottom-color: #007aff;
            }
    
            /* Section Styling */
            .section {
                min-height: 100vh; /* Make each section fill the viewport height */
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                text-align: center;
                padding: 6rem 2rem 2rem; /* Add top padding to account for fixed navbar */
                border-bottom: 1px solid #eee; /* Subtle separator */
                opacity: 0; /* Start invisible for fade-in */
                transform: translateY(20px); /* Start slightly down for subtle rise */
                transition: opacity 0.8s ease-out, transform 0.8s ease-out;
                will-change: opacity, transform; /* Optimize for animation */
            }
    
            /* Section Specific Backgrounds (for visual distinction) */
            #home { background-color: #eef5ff; }
            #features { background-color: #f0fff0; }
            #pricing { background-color: #fff8e1; }
            #contact { background-color: #f5f5f5; border-bottom: none; }
    
            /* Content Styling */
            .section h1 {
                font-size: 3rem;
                margin-bottom: 1rem;
                color: #111;
            }
    
            .section p {
                font-size: 1.1rem;
                max-width: 600px;
                color: #555;
            }
    
            .content-box {
                 background-color: rgba(255, 255, 255, 0.7);
                 padding: 2rem;
                 border-radius: 8px;
                 box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
                 max-width: 80%;
            }
    
            /* Footer */
            footer {
                text-align: center;
                padding: 1rem;
                background-color: #333;
                color: #fff;
                font-size: 0.9rem;
            }
    
            /* Simple Button Style */
            .cta-button {
                display: inline-block;
                background-color: #007aff;
                color: white;
                padding: 0.8rem 1.8rem;
                border-radius: 25px; /* Pill shape */
                text-decoration: none;
                font-weight: 500;
                margin-top: 1.5rem;
                transition: background-color 0.3s ease, transform 0.2s ease;
                box-shadow: 0 4px 10px rgba(0, 122, 255, 0.3);
            }
    
            .cta-button:hover {
                background-color: #005ecb;
                transform: translateY(-2px);
            }
    
            /* Class added by JS when section is in view */
            .is-visible {
                opacity: 1;
                transform: translateY(0);
            }
    
            /* Responsive adjustments */
            @media (max-width: 768px) {
                .navbar {
                    padding: 0.8rem 1rem;
                }
                .nav-links {
                    gap: 1rem;
                }
                .nav-links a {
                    font-size: 0.9rem;
                }
                .section h1 {
                    font-size: 2.2rem;
                }
                .section p {
                    font-size: 1rem;
                }
                .content-box {
                     padding: 1.5rem;
                     max-width: 90%;
                }
            }
    
        </style>
    </head>
    <body>
    
        <!-- Navigation Bar -->
        <nav class="navbar">
            <ul class="nav-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#features">Features</a></li>
                <li><a href="#pricing">Pricing</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    
        <!-- Home Section -->
        <section id="home" class="section">
            <div class="content-box">
                <h1>Welcome to SmoothScroll</h1>
                <p>Experience seamless navigation through our landing page, built with modern web technologies.</p>
                <a href="#features" class="cta-button">Discover Features</a>
            </div>
        </section>
    
        <!-- Features Section -->
        <section id="features" class="section">
            <div class="content-box">
                <h1>Amazing Features</h1>
                <p>Our product offers unparalleled features designed to boost your productivity and streamline your workflow.</p>
                <ul>
                    <li>Intuitive User Interface</li>
                    <li>Real-time Collaboration</li>
                    <li>Cross-Platform Compatibility</li>
                    <li>24/7 Support</li>
                </ul>
            </div>
        </section>
    
        <!-- Pricing Section -->
        <section id="pricing" class="section">
            <div class="content-box">
                <h1>Simple Pricing</h1>
                <p>Choose the plan that fits your needs. Transparent pricing with no hidden fees.</p>
                <div style="margin-top: 1rem;">
                    <p><strong>Basic:</strong> $10/month</p>
                    <p><strong>Pro:</strong> $25/month</p>
                    <p><strong>Enterprise:</strong> Contact Us</p>
                </div>
                <a href="#contact" class="cta-button">Get Started</a>
            </div>
        </section>
    
        <!-- Contact Section -->
        <section id="contact" class="section">
            <div class="content-box">
                <h1>Get In Touch</h1>
                <p>Have questions? Reach out to us, and we'll get back to you as soon as possible.</p>
                <p>Email: support@smoothscroll.example.com</p>
                <p>Phone: (123) 456-7890</p>
            </div>
        </section>
    
        <!-- Footer -->
        <footer>
            <p>© 2023 SmoothScroll Demo. All rights reserved.</p>
        </footer>
    
        <script>
            document.addEventListener('DOMContentLoaded', () => {
                const sections = document.querySelectorAll('.section');
                const navLinks = document.querySelectorAll('.nav-links a');
    
                // --- Intersection Observer for fade-in effect and active nav link ---
                const observerOptions = {
                    root: null, // relative to the viewport
                    rootMargin: '0px',
                    threshold: 0.5 // Trigger when 50% of the section is visible
                };
    
                const observerCallback = (entries, observer) => {
                    entries.forEach(entry => {
                        const correspondingLink = document.querySelector('.nav-links a[href="#' + entry.target.id + '"]');
    
                        if (entry.isIntersecting) {
                            // Add fade-in class
                            entry.target.classList.add('is-visible');
    
                            // Update active nav link
                            navLinks.forEach(link => link.classList.remove('active'));
                            if (correspondingLink) {
                                correspondingLink.classList.add('active');
                            }
                        } else {
                            // Optional: Remove fade-in class if you want it to fade out when scrolling away
                            // entry.target.classList.remove('is-visible');
                        }
                    });
                };
    
                const observer = new IntersectionObserver(observerCallback, observerOptions);
    
                // Observe each section
                sections.forEach(section => {
                    observer.observe(section);
                });
    
                // --- Initial Active Link Check (for page load) ---
                // A simple check for the top section on load
                const checkInitialSection = () => {
                     // Use scrollY to check if we are near the top
                     if (window.scrollY < window.innerHeight * 0.5) {
                         navLinks.forEach(link => link.classList.remove('active'));
                         const homeLink = document.querySelector('.nav-links a[href="#home"]');
                         if (homeLink) {
                            homeLink.classList.add('active');
                         }
                     }
                     // Find the first section and make it visible immediately
                     const firstSection = document.querySelector('.section');
                     if (firstSection) {
                        firstSection.classList.add('is-visible');
                     }
                }
    
                checkInitialSection(); // Run on load
    
                // Optional: Re-check on resize or orientation change if needed
                // window.addEventListener('resize', checkInitialSection);
    
            });
        </script>
    
    </body>
    </html>`)
};
