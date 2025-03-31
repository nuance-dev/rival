import { ModelResponse } from "@/types/models";
import { sanitizeModelResponseContent } from "@/lib/utils";

export const framerUstyleUanimationchatgpt_4o_03_25: ModelResponse = {
  id: "chatgpt-4o-03-25-framer-style-animation",
  modelId: "chatgpt-4o-03-25",
  prompt: "Generate a landing page with smooth Framer-like transitions between sections. In a single-page self-contained HTML.",
  responseDate: "2025-03-30",
  type: "website",
  title: "framer-style-animation",
  description: "ChatGPT-4o March 2025's response",
  content: sanitizeModelResponseContent(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Smooth Landing Page</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    html {
      scroll-behavior: smooth;
    }
    section {
      transition: transform 0.6s ease, opacity 0.6s ease;
    }
    .fade-in {
      opacity: 0;
      transform: translateY(40px);
    }
    .visible {
      opacity: 1;
      transform: translateY(0);
    }
  </style>
</head>
<body class="bg-gray-950 text-white font-sans">
  <nav class="fixed top-0 left-0 w-full z-10 bg-gray-900 bg-opacity-80 backdrop-blur-md">
    <div class="max-w-5xl mx-auto px-4 py-3 flex justify-between items-center">
      <span class="text-lg font-bold">Brand</span>
      <div class="space-x-4">
        <a href="#hero" class="hover:underline">Home</a>
        <a href="#about" class="hover:underline">About</a>
        <a href="#features" class="hover:underline">Features</a>
        <a href="#contact" class="hover:underline">Contact</a>
      </div>
    </div>
  </nav>

  <main class="pt-20">
    <section id="hero" class="min-h-screen flex items-center justify-center text-center px-6 fade-in">
      <div>
        <h1 class="text-4xl md:text-6xl font-bold mb-4">Welcome to Smooth</h1>
        <p class="text-xl text-gray-400 mb-6">Clean transitions. Simple code.</p>
        <a href="#about" class="px-6 py-3 bg-white text-black rounded-full font-medium hover:bg-gray-200 transition">Get Started</a>
      </div>
    </section>

    <section id="about" class="min-h-screen flex items-center justify-center px-6 fade-in">
      <div class="max-w-3xl text-center">
        <h2 class="text-3xl font-semibold mb-4">About</h2>
        <p class="text-gray-400">This is a simple landing page template with smooth scroll and fade-in transitions. Inspired by Framer but built with HTML and Tailwind CSS only.</p>
      </div>
    </section>

    <section id="features" class="min-h-screen flex items-center justify-center px-6 fade-in">
      <div class="grid md:grid-cols-3 gap-8 text-center max-w-5xl">
        <div>
          <h3 class="text-xl font-semibold mb-2">Smooth Scroll</h3>
          <p class="text-gray-400">Navigate between sections with ease.</p>
        </div>
        <div>
          <h3 class="text-xl font-semibold mb-2">Minimal Code</h3>
          <p class="text-gray-400">Pure HTML + Tailwind. Nothing else.</p>
        </div>
        <div>
          <h3 class="text-xl font-semibold mb-2">Clean Animations</h3>
          <p class="text-gray-400">Subtle fade-ins on scroll.</p>
        </div>
      </div>
    </section>

    <section id="contact" class="min-h-screen flex items-center justify-center px-6 fade-in">
      <div class="max-w-md w-full">
        <h2 class="text-3xl font-semibold mb-4 text-center">Contact Us</h2>
        <form class="space-y-4">
          <input type="text" placeholder="Name" class="w-full p-3 rounded bg-gray-800 text-white placeholder-gray-500">
          <input type="email" placeholder="Email" class="w-full p-3 rounded bg-gray-800 text-white placeholder-gray-500">
          <textarea placeholder="Message" rows="4" class="w-full p-3 rounded bg-gray-800 text-white placeholder-gray-500"></textarea>
          <button type="submit" class="w-full py-3 bg-white text-black rounded font-medium hover:bg-gray-200 transition">Send</button>
        </form>
      </div>
    </section>
  </main>

  <footer class="text-center py-6 text-gray-600 text-sm">
    &copy; 2025 Smooth Page. All rights reserved.
  </footer>

  <script>
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, {
      threshold: 0.15
    });

    document.querySelectorAll('section').forEach(section => {
      observer.observe(section);
    });
  </script>
</body>
</html>
`)
}; 