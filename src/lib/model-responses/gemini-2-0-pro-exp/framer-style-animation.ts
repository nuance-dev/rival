import { ModelResponse } from "@/types/models";
import { sanitizeModelResponseContent } from "@/lib/utils";

export const framerStyleAnimationgemini_2_0_pro_exp: ModelResponse = {
  id: "gemini-2-0-pro-exp-framer-style-animation",
  modelId: "gemini-2-0-pro-exp",
  prompt: "Generate a landing page with smooth Framer-like transitions between sections. In a single-page self-contained HTML.",
  responseDate: "2025-02-27",
  type: "website",
  title: "Framer-Style Animation",
  description: "Gemini 2.0 Pro Exp's response to the Tests an AI's ability to create smooth web animations",
  content: sanitizeModelResponseContent(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Smooth Landing Page</title>
    <style>
        body {
            font-family: 'Arial', sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f0f2f5;
            overflow-x: hidden; /* Prevent horizontal scrollbar */
        }

        /* Basic Styling for Sections */
        section {
            height: 100vh;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative; /* For absolute positioning of content */
            overflow: hidden;   /* Crucial for animation clipping */
            padding: 20px;
            box-sizing: border-box;
        }

        /* Section Content (Centered Text) */
        .content {
            text-align: center;
            position: relative; /* Stacking context for z-index */
            z-index: 2; /* Ensure content is above background */
            color: #333;
            max-width: 800px;
            width: 80%;
        }
        .content h1 {
          font-size: 3em;
          margin-bottom: 0.5em;
        }
        .content p {
          font-size: 1.2em;
          line-height: 1.6;
        }

        /* Navigation */
        nav {
            position: fixed;
            top: 20px;
            left: 50%;
            transform: translateX(-50%);
            background-color: rgba(255, 255, 255, 0.9);
            padding: 10px 20px;
            border-radius: 25px;
            z-index: 10; /* Above everything else */
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        }
        nav a {
            color: #333;
            text-decoration: none;
            margin: 0 15px;
            font-weight: bold;
            transition: color 0.3s ease;
        }
        nav a:hover {
            color: #007bff;
        }

        /* Section Specific Styles & Animations */

        /* Section 1 */
        #section1 { background-color: #b8e2f2; }
        #section1 .content {
            opacity: 0;
            transform: translateY(50px);
            transition: opacity 0.8s ease, transform 0.8s ease;
        }
        #section1.active .content {
            opacity: 1;
            transform: translateY(0);
        }

        /* Section 2 */
        #section2 { background-color: #d6e8ee; }
        #section2 .content {
            opacity: 0;
            transform: translateX(-50px);
            transition: opacity 0.8s ease, transform 0.8s ease;
        }
         #section2.active .content {
            opacity: 1;
            transform: translateX(0);
        }


        /* Section 3 */
        #section3 { background-color: #b8d8d8; }
        #section3 .content {
             opacity: 0;
            transform: scale(0.8);
            transition: opacity 0.8s ease, transform 0.8s ease;
        }
         #section3.active .content {
            opacity: 1;
            transform: scale(1);
        }

        /* Section 4 */
        #section4 { background-color: #f1f1f1; }
        #section4 .content{
            opacity: 0;
            transform: translateY(-50px);
            transition: opacity 0.8s ease, transform 0.8s ease;
        }

        #section4.active .content {
            opacity: 1;
            transform: translateY(0);

        }
    </style>
</head>
<body>
    <nav>
        <a href="#section1">Section 1</a>
        <a href="#section2">Section 2</a>
        <a href="#section3">Section 3</a>
        <a href="#section4">Section 4</a>
    </nav>

    <section id="section1">
        <div class="content">
            <h1>Welcome to Section 1</h1>
            <p>This is the first section of our landing page.</p>
        </div>
    </section>

    <section id="section2">
        <div class="content">
            <h1>Section 2 - Features</h1>
            <p>Explore the amazing features we offer.</p>
        </div>
    </section>

    <section id="section3">
        <div class="content">
            <h1>Section 3 - About Us</h1>
            <p>Learn more about our company and mission.</p>
        </div>
    </section>

    <section id="section4">
        <div class="content">
            <h1>Section 4 - Contact</h1>
            <p>Get in touch with us!</p>
        </div>
    </section>

    <script>
      document.addEventListener('DOMContentLoaded', function() {
          const sections = document.querySelectorAll('section');
          const navLinks = document.querySelectorAll('nav a');

          function setActiveSection() {
              let currentSectionId = '';

              sections.forEach(section => {
                  const rect = section.getBoundingClientRect();
                  // Check if the top of the section is within the viewport
                  if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
                      currentSectionId = section.id;
                  }

                  // Add/remove 'active' class based on visibility
                  if (currentSectionId === section.id) {
                      section.classList.add('active');
                  } else {
                      section.classList.remove('active');
                  }
              });


            // Update active nav link
            navLinks.forEach(link => {
                if (link.getAttribute('href') === '#' + currentSectionId) {
                    link.classList.add('active');
                } else {
                    link.classList.remove('active');
                }
            });
          }

            // Initial active section
          setActiveSection();

           // Scroll event listener
          window.addEventListener('scroll', setActiveSection);


          // Smooth scrolling for navigation links
          navLinks.forEach(link => {
              link.addEventListener('click', function(e) {
                  e.preventDefault();
                  const targetId = this.getAttribute('href');
                  const targetSection = document.querySelector(targetId);

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
</html>`)
};
