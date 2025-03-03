import { ModelResponse } from "@/types/models";

export const framerStyleAnimationo3_mini: ModelResponse = {
  id: "o3-mini-framer-style-animation",
  modelId: "o3-mini",
  prompt: "Generate a landing page with smooth Framer-like transitions between sections. In a single-page self-contained HTML.",
  responseDate: "2025-02-28",
  type: "website"  ,
  title: "Framer-Style Animation",
  description: "o3 Mini's response to the Tests an AI's ability to create smooth web animations",
  content: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Framer-like Landing Page</title>
  <style>
    /* Reset & basic styling */
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    html {
      scroll-behavior: smooth;
    }
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      background: #f4f4f4;
      color: #333;
    }
    
    /* Navigation */
    nav {
      position: fixed;
      top: 0;
      width: 100%;
      background: #fff;
      padding: 1rem;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      z-index: 1000;
    }
    nav ul {
      list-style: none;
      display: flex;
      justify-content: center;
    }
    nav ul li {
      margin: 0 1rem;
    }
    nav ul li a {
      text-decoration: none;
      color: #333;
      font-weight: bold;
      transition: color 0.3s;
    }
    nav ul li a:hover {
      color: #007BFF;
    }
    
    /* Sections */
    section {
      min-height: 100vh;
      padding: 100px 20px 20px;
      opacity: 0;
      transform: translateY(20px);
      transition: opacity 1s ease-out, transform 1s ease-out;
    }
    section.visible {
      opacity: 1;
      transform: translateY(0);
    }
    
    /* Hero Section */
    .hero {
      background: #007BFF;
      color: #fff;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
    }
    .hero h1 {
      font-size: 3rem;
      margin-bottom: 1rem;
    }
    .hero p {
      font-size: 1.5rem;
      max-width: 600px;
    }
    
    /* Content Sections */
    .content {
      background: #fff;
    }
    .content h2 {
      text-align: center;
      margin-bottom: 1rem;
      font-size: 2rem;
    }
    .content p {
      max-width: 800px;
      margin: 0 auto 1rem auto;
      text-align: center;
    }
  </style>
</head>
<body>
  <nav>
    <ul>
      <li><a href="#hero">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#services">Services</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </nav>
  
  <section id="hero" class="hero">
    <h1>Welcome to Our Landing Page</h1>
    <p>Experience smooth transitions and engaging design just like in Framer.</p>
  </section>
  
  <section id="about" class="content">
    <h2>About Us</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.</p>
  </section>
  
  <section id="services" class="content">
    <h2>Our Services</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet felis nec erat viverra tristique.</p>
  </section>
  
  <section id="contact" class="content">
    <h2>Contact Us</h2>
    <p>Get in touch: <a href="mailto:example@example.com">example@example.com</a></p>
  </section>
  
  <script>
    // Intersection Observer to add smooth fade-in transitions
    const sections = document.querySelectorAll('section');
    const options = {
      threshold: 0.2
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if(entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, options);

    sections.forEach(section => {
      observer.observe(section);
    });
  </script>
</body>
</html>
`
};
