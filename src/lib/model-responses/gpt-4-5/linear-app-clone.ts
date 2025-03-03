import { ModelResponse } from "@/types/models";

export const linearAppClonegpt_4_5: ModelResponse = {
  id: "gpt-4-5-linear-app-clone",
  modelId: "gpt-4-5",
  prompt: "Recreate the Linear App UI using Tailwind CSS, keeping the layout and animations as close as possible. In a single-page self-contained HTML.",
  responseDate: "2025-03-01",
  type: "website",
  title: "Linear App Clone",
  description: "Gpt 4.5's response to the Tests an AI's ability to replicate an existing UI with Tailwind CSS",
  content: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Linear App UI Clone</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    @keyframes fadeInUp {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .animate-fadeInUp {
      animation: fadeInUp 0.6s ease-out forwards;
    }
  </style>
</head>
<body class="bg-gray-900 text-white font-sans">
  <div class="min-h-screen flex flex-col">
    <!-- Header -->
    <header class="px-6 py-4 flex justify-between items-center border-b border-gray-700">
      <div class="flex items-center space-x-4">
        <div class="w-8 h-8 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-md"></div>
        <span class="text-xl font-semibold">Linear</span>
      </div>
      <nav class="hidden md:flex space-x-6">
        <a href="#" class="hover:text-gray-300 transition">Features</a>
        <a href="#" class="hover:text-gray-300 transition">Pricing</a>
        <a href="#" class="hover:text-gray-300 transition">Changelog</a>
        <a href="#" class="hover:text-gray-300 transition">Docs</a>
      </nav>
      <button class="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 rounded-md transition">Sign In</button>
    </header>

    <!-- Hero Section -->
    <main class="flex-grow flex flex-col items-center justify-center text-center px-4 py-16">
      <h1 class="text-4xl md:text-6xl font-bold mb-4 animate-fadeInUp">The issue tracking tool you'll enjoy using</h1>
      <p class="text-lg md:text-xl text-gray-400 mb-8 animate-fadeInUp" style="animation-delay: 0.2s;">Linear helps streamline software projects, sprints, tasks, and bug tracking.</p>
      <div class="flex space-x-4 animate-fadeInUp" style="animation-delay: 0.4s;">
        <button class="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 rounded-md transition">Get Started</button>
        <button class="px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-md transition">Learn More</button>
      </div>
    </main>

    <!-- Features Section -->
    <section class="px-6 py-12 bg-gray-800">
      <div class="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
        <div class="animate-fadeInUp" style="animation-delay: 0.6s;">
          <h3 class="text-xl font-semibold mb-2">Fast & Efficient</h3>
          <p class="text-gray-400">Built for speed and efficiency, Linear helps your team move faster.</p>
        </div>
        <div class="animate-fadeInUp" style="animation-delay: 0.8s;">
          <h3 class="text-xl font-semibold mb-2">Beautifully Designed</h3>
          <p class="text-gray-400">A clean, intuitive interface that your team will love.</p>
        </div>
        <div class="animate-fadeInUp" style="animation-delay: 1s;">
          <h3 class="text-xl font-semibold mb-2">Integrated Workflow</h3>
          <p class="text-gray-400">Seamlessly integrates with your existing tools and workflows.</p>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="px-6 py-4 border-t border-gray-700 text-center text-gray-500">
      © 2024 Linear Clone. All rights reserved.
    </footer>
  </div>
</body>
</html>`
};
