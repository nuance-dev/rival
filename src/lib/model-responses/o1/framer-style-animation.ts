import { ModelResponse } from "@/types/models";

export const framerStyleAnimationo1: ModelResponse = {
  id: "o1-framer-style-animation",
  modelId: "o1"  ,
  prompt: "Generate a landing page with smooth Framer-like transitions between sections. In a single-page self-contained HTML.",
  responseDate: "2025-02-28",
  type: "website"  ,
  title: "Framer-Style Animation",
  description: "O1's response to the Tests an AI's ability to create smooth web animations",
  content: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Smooth Transition Landing Page</title>
  <style>
    /* Basic Reset */
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: sans-serif;
      background-color: #f5f5f5;
      color: #333;
      scroll-behavior: smooth; /* Enables smooth scrolling for anchor links */
    }

    /* Navbar Styles */
    nav {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      background: #ffffff;
      box-shadow: 0 2px 5px rgba(0,0,0,0.1);
      z-index: 1000;
    }

    nav ul {
      display: flex;
      justify-content: center;
      align-items: center;
      list-style: none;
      padding: 1rem;
      margin: 0;
    }

    nav ul li {
      margin: 0 1rem;
    }

    nav ul li a {
      text-decoration: none;
      color: #333;
      font-weight: 500;
      transition: color 0.3s ease;
    }

    nav ul li a:hover {
      color: #0077ff;
    }

    /* Section Styles */
    section {
      width: 100%;
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      padding: 2rem;
    }

    h1, h2, p {
      margin-bottom: 1rem;
    }

    /* Smooth 'Framer-like' section transitions:
       We’ll apply a hidden transform and opacity, then reveal on intersection */
    .section {
      opacity: 0;
      transform: translateY(50px);
      transition: opacity 0.8s ease, transform 0.8s ease;
    }

    .section.visible {
      opacity: 1;
      transform: translateY(0);
    }

    /* Example color backgrounds for sections */
    #hero {
      background: linear-gradient(to right, #0077ff, #00bfff);
      color: #fff;
    }

    #about {
      background: #ffffff;
    }

    #features {
      background: #f1f1f1;
    }

    #contact {
      background: #ffffff;
    }

    /* Footer */
    footer {
      background-color: #ddd;
      padding: 1rem;
      text-align: center;
    }
  </style>
</head>
<body>
  <!-- Navigation -->
  <nav>
    <ul>
      <li><a href="#hero">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#features">Features</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </nav>

  <!-- Hero Section -->
  <section id="hero" class="section">
    <h1>Welcome to Our Landing Page</h1>
    <p>Scroll or navigate to see smooth transitions in action.</p>
  </section>

  <!-- About Section -->
  <section id="about" class="section">
    <h2>About Us</h2>
    <p>
      We create captivating user experiences using modern web technologies and powerful animations.
    </p>
  </section>

  <!-- Features Section -->
  <section id="features" class="section">
    <h2>Features</h2>
    <p>
      Our platform is designed to be fully responsive, lightweight, and easy to customize.
    </p>
  </section>

  <!-- Contact Section -->
  <section id="contact" class="section">
    <h2>Contact Us</h2>
    <p>
      Ready to work with us? Drop us a line and let’s start building something amazing!
    </p>
  </section>

  <!-- Footer -->
  <footer>
    &copy; 2025 Smooth Transition Landing Page
  </footer>

  <!-- Intersection Observer Script -->
  <script>
    // Target all sections with .section class
    const sections = document.querySelectorAll('.section');

    // Options for the IntersectionObserver
    const options = {
      root: null,         // use the browser viewport as the container
      threshold: 0.1,     // trigger when 10% of section is visible
    };

    // Callback for the observer
    function handleIntersect(entries, observer) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Add the visible class to trigger CSS transition
          entry.target.classList.add('visible');
          // Once visible, unobserve to avoid re-triggering the animation
          observer.unobserve(entry.target);
        }
      });
    }

    // Create the observer
    const observer = new IntersectionObserver(handleIntersect, options);

    // Observe each section
    sections.forEach(section => {
      observer.observe(section);
    });
  </script>
</body>
</html>
`
};
