import { ModelResponse } from "@/types/models";

export const framerStyleAnimationgemini_2_0_flash_thinking_exp: ModelResponse = {
  id: "gemini-2-0-flash-thinking-exp-framer-style-animation",
  modelId: "gemini-2-0-flash-thinking-exp",
  prompt: "Generate a landing page with smooth Framer-like transitions between sections. In a single-page self-contained HTML.",
  responseDate: "2025-02-27",
  type: "website"  ,
  title: "Framer-Style Animation",
  description: "Gemini 2.0 Flash Thinking Exp's response to the Tests an AI's ability to create smooth web animations",
  content: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Smooth Scroll Landing Page</title>
    <style>
        /* Basic Reset & Body Styling */
        *, *::before, *::after {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: sans-serif;
            line-height: 1.6;
            color: #333;
            overflow-x: hidden; /* Prevent horizontal scrollbar */
            scroll-behavior: smooth; /* Enable smooth scrolling for anchor links */
        }

        /* Section Styling */
        section {
            height: 100vh; /* Full viewport height */
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 2rem;
            text-align: center;
            position: relative; /* For potential absolute positioning of elements */
            transition: opacity 0.7s ease-in-out, transform 0.7s ease-in-out; /* Smooth transitions */
            opacity: 1;
            transform: translateY(0);
        }

        section:not(:first-of-type) {
            opacity: 0; /* Initially hide sections except the first one */
            transform: translateY(50px); /* Slightly offset from bottom initially */
        }

        section.active {
            opacity: 1; /* Make active section visible */
            transform: translateY(0); /* Reset transform for active section */
        }

        /* Section Colors - Example */
        #hero { background-color: #f0f0f0; }
        #about { background-color: #e0e0e0; }
        #services { background-color: #d0d0d0; }
        #contact { background-color: #c0c0c0; }

        /* Content within Sections */
        section h2 {
            font-size: 3rem;
            margin-bottom: 1rem;
        }

        section p {
            font-size: 1.2rem;
            max-width: 700px;
            margin: 0 auto;
        }

        /* Navigation (Optional - Add if you want visible navigation) */
        nav {
            position: fixed;
            top: 20px;
            right: 20px;
            z-index: 1000; /* Ensure nav is above content */
        }

        nav ul {
            list-style: none;
            display: flex;
        }

        nav ul li {
            margin-left: 20px;
        }

        nav a {
            text-decoration: none;
            color: #333;
            font-weight: bold;
            padding: 0.5rem 1rem;
            border-radius: 5px;
            background-color: rgba(255, 255, 255, 0.8);
            transition: background-color 0.3s ease;
        }

        nav a:hover {
            background-color: rgba(255, 255, 255, 1);
        }

    </style>
</head>
<body>

    <nav>
        <ul>
            <li><a href="#hero">Hero</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    </nav>

    <section id="hero" class="active">
        <h2>Welcome to Our Awesome Landing Page</h2>
        <p>This is the hero section.  We offer amazing solutions for your needs.  Scroll down to learn more!</p>
        <a href="#about" class="scroll-down-link">Learn More</a>
    </section>

    <section id="about">
        <h2>About Us</h2>
        <p>We are a passionate team dedicated to providing high-quality services. Our mission is to help you succeed.</p>
        <a href="#services" class="scroll-down-link">Our Services</a>
    </section>

    <section id="services">
        <h2>Our Services</h2>
        <p>Explore our range of services designed to meet your specific requirements. We offer tailored solutions for every client.</p>
        <a href="#contact" class="scroll-down-link">Contact Us</a>
    </section>

    <section id="contact">
        <h2>Contact Us</h2>
        <p>Get in touch with us today to discuss your project and how we can help. We look forward to hearing from you!</p>
    </section>

    <script>
        document.addEventListener('DOMContentLoaded', () => {
            const sections = document.querySelectorAll('section');
            let currentSectionIndex = 0;

            function updateActiveSection() {
                sections.forEach((section, index) => {
                    const rect = section.getBoundingClientRect();
                    if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
                        if (index !== currentSectionIndex) {
                            sections[currentSectionIndex].classList.remove('active');
                            section.classList.add('active');
                            currentSectionIndex = index;
                        }
                    }
                });
            }

            // Initial activation of the first section
            sections[currentSectionIndex].classList.add('active');

            // Listen for scroll events to update active section
            window.addEventListener('scroll', () => {
                requestAnimationFrame(updateActiveSection); // Use requestAnimationFrame for smoother performance
            });

            // Smooth scroll to section when clicking links (optional, if you want internal links)
            const scrollLinks = document.querySelectorAll('a[href^="#"]');
            scrollLinks.forEach(link => {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    const targetId = this.getAttribute('href').substring(1);
                    const targetSection = document.getElementById(targetId);

                    if (targetSection) {
                        window.scrollTo({
                            top: targetSection.offsetTop,
                            behavior: 'smooth'
                        });
                    }
                });
            });
        });
    </script>

</body>
</html>`
};
