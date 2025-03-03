import { ModelResponse } from "@/types/models";

export const linearAppCloneo3_mini: ModelResponse = {
  id: "o3-mini-linear-app-clone",
  modelId: "o3-mini",
  prompt: "Recreate the Linear App UI using Tailwind CSS, keeping the layout and animations as close as possible. In a single-page self-contained HTML.",
  responseDate: "2025-02-28",
  type: "website"  ,
  title: "Linear App Clone"  ,
  description: "o3 Mini's response to the Tests an AI's ability to replicate an existing UI with Tailwind CSS",
  content: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Linear App UI Clone</title>
  <!-- Tailwind CSS CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    /* Custom fade-in animation to mimic smooth UI transitions */
    @keyframes fadeIn {
      0% {
        opacity: 0;
        transform: translateY(10px);
      }
      100% {
        opacity: 1;
        transform: translateY(0);
      }
    }
    .animate-fadeIn {
      animation: fadeIn 0.3s ease-out forwards;
    }
  </style>
</head>
<body class="bg-gray-100">
  <div class="flex h-screen">
    <!-- Sidebar -->
    <aside class="w-64 bg-white border-r border-gray-200 flex flex-col">
      <div class="p-4 border-b border-gray-200">
        <h1 class="text-2xl font-bold text-gray-800">Linear</h1>
      </div>
      <nav class="flex-1 p-4 space-y-2">
        <a href="#" class="block px-4 py-2 rounded hover:bg-gray-50 transition">Dashboard</a>
        <a href="#" class="block px-4 py-2 rounded hover:bg-gray-50 transition">Projects</a>
        <a href="#" class="block px-4 py-2 rounded hover:bg-gray-50 transition">Issues</a>
        <a href="#" class="block px-4 py-2 rounded hover:bg-gray-50 transition">Settings</a>
      </nav>
    </aside>
    <!-- Main Content -->
    <main class="flex-1 overflow-auto p-6">
      <header class="mb-6 flex items-center justify-between">
        <h2 class="text-3xl font-semibold text-gray-800">Dashboard</h2>
        <div class="relative">
          <input 
            type="text" 
            placeholder="Search..." 
            class="border border-gray-300 rounded-full pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" 
          />
          <span class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            🔍
          </span>
        </div>
      </header>
      <!-- Content Cards -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div class="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-all duration-200 animate-fadeIn">
          <h3 class="text-xl font-bold text-gray-700 mb-2">Project Alpha</h3>
          <p class="text-gray-600">
            Overview of Project Alpha. A brief description of project details and progress.
          </p>
        </div>
        <div class="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-all duration-200 animate-fadeIn">
          <h3 class="text-xl font-bold text-gray-700 mb-2">Project Beta</h3>
          <p class="text-gray-600">
            Overview of Project Beta. A brief description of project details and progress.
          </p>
        </div>
        <div class="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-all duration-200 animate-fadeIn">
          <h3 class="text-xl font-bold text-gray-700 mb-2">Project Gamma</h3>
          <p class="text-gray-600">
            Overview of Project Gamma. A brief description of project details and progress.
          </p>
        </div>
      </div>
    </main>
  </div>
</body>
</html>
`
};
