import { ModelResponse } from "@/types/models";

export const linearAppClonegrok_3_mini_beta: ModelResponse = {
  id: "grok-3-mini-beta-linear-app-clone",
  modelId: "grok-3-mini-beta",
  prompt: "Recreate the Linear App UI using Tailwind CSS, keeping the layout and animations as close as possible. In a single-page self-contained HTML.",
  responseDate: "2025-04-11",
  type: "website",
  title: "Linear App Clone",
  description: "Grok 3 Mini Beta's response to the challenge of replicating an existing UI with Tailwind CSS",
  content: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Linear App UI Recreation</title>
  <!-- Include Tailwind CSS via CDN -->
  <script src="https://cdn.tailwindcss.com?plugins=forms,typography,aspect-ratio,line-clamp"></script>
  <script>
    // Simple JavaScript for sidebar toggle animation
    document.addEventListener('DOMContentLoaded', () => {
      const sidebar = document.getElementById('sidebar');
      const toggleButton = document.getElementById('sidebar-toggle');
      
      toggleButton.addEventListener('click', () => {
        sidebar.classList.toggle('translate-x-0');  // Slide in
        sidebar.classList.toggle('-translate-x-full');  // Slide out
      });
    });
  </script>
  <style>
    /* Custom styles to mimic Linear's design */
    body {
      font-family: 'Inter', sans-serif; /* Linear uses a similar sans-serif font */
    }
  </style>
</head>
<body class="bg-gray-50 min-h-screen flex flex-col">

  <!-- Top Header (Similar to Linear's top bar) -->
  <header class="bg-white shadow-sm p-4 flex justify-between items-center fixed w-full z-10">
    <div class="flex items-center">
      <button id="sidebar-toggle" class="mr-4 p-2 rounded-md hover:bg-gray-100 transition-all duration-200">
        <!-- Hamburger icon (using Unicode for simplicity) -->
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </button>
      <h1 class="text-xl font-bold text-gray-800">Linear</h1>
    </div>
    <div class="flex items-center">
      <input type="text" placeholder="Search..." class="border border-gray-300 rounded-md px-3 py-1 mr-4 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200">
      <button class="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-all duration-200">
        <!-- User icon (placeholder) -->
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </button>
    </div>
  </header>

  <!-- Main Content Area with Sidebar -->
  <div class="flex mt-16">  <!-- Margin-top to account for fixed header -->
    
    <!-- Sidebar (Toggleable with animation) -->
    <aside id="sidebar" class="fixed inset-y-16 left-0 w-64 bg-white shadow-md transform -translate-x-full transition-all duration-300 ease-in-out z-20">
      <nav class="p-4">
        <ul>
          <li class="mb-2">
            <a href="#" class="flex items-center p-2 rounded-md hover:bg-blue-50 hover:text-blue-600 transition-all duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
              </svg>
              Issues
            </a>
          </li>
          <li class="mb-2">
            <a href="#" class="flex items-center p-2 rounded-md hover:bg-blue-50 hover:text-blue-600 transition-all duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7m-9 9l-2 2m2-2a4 4 0 110 8 4 4 0 010-8z" />
              </svg>
              Inbox
            </a>
          </li>
          <li class="mb-2">
            <a href="#" class="flex items-center p-2 rounded-md hover:bg-blue-50 hover:text-blue-600 transition-all duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
              </svg>
              Projects
            </a>
          </li>
          <!-- Add more items as needed -->
        </ul>
      </nav>
    </aside>

    <!-- Main Content -->
    <main class="flex-1 p-8 ml-64">  <!-- Margin-left for sidebar space -->
      <h2 class="text-2xl font-bold text-gray-800 mb-4">Issues</h2>
      <div class="space-y-4">
        <!-- Sample issue cards, similar to Linear's card-based layout -->
        <div class="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-200">
          <h3 class="text-lg font-semibold text-gray-700">Fix login bug</h3>
          <p class="text-gray-500">High priority issue reported by users.</p>
          <div class="mt-2 flex items-center text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Due in 2 days
          </div>
        </div>
        <div class="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-200">
          <h3 class="text-lg font-semibold text-gray-700">Update dashboard UI</h3>
          <p class="text-gray-500">Improve responsiveness and add new features.</p>
          <div class="mt-2 flex items-center text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Due in 5 days
          </div>
        </div>
        <!-- Add more cards as needed -->
      </div>
    </main>
  </div>
</body>
</html>
`
}; 