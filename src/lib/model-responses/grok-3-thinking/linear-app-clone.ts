import { ModelResponse } from "@/types/models";

export const linearAppClonegrok_3_thinking: ModelResponse = {
  id: "grok-3-thinking-linear-app-clone",
  modelId: "grok-3-thinking",
  prompt: "Recreate the Linear App UI using Tailwind CSS, keeping the layout and animations as close as possible. In a single-page self-contained HTML.",
  responseDate: "2025-02-28",
  type: "website",
  title: "Linear App Clone",
  description: "Grok 3 thinking's response to the Tests an AI's ability to replicate an existing UI with Tailwind CSS",
  content: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Linear App UI Clone</title>
  <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
</head>
<body class="bg-gray-100">
  <div class="flex h-screen">
    <!-- Sidebar -->
    <aside class="w-64 bg-gray-800 text-white flex flex-col">
      <div class="p-4 text-2xl font-bold">Linear</div>
      <nav class="flex-1">
        <ul class="space-y-2 p-4">
          <li><a href="#" class="block p-2 hover:bg-gray-700 rounded transition duration-150">Inbox</a></li>
          <li><a href="#" class="block p-2 hover:bg-gray-700 rounded transition duration-150">Today</a></li>
          <li><a href="#" class="block p-2 hover:bg-gray-700 rounded transition duration-150">Upcoming</a></li>
          <li><a href="#" class="block p-2 hover:bg-gray-700 rounded transition duration-150">Projects</a></li>
        </ul>
      </nav>
      <div class="p-4">
        <div class="flex items-center space-x-2">
          <img src="https://via.placeholder.com/32" alt="User Avatar" class="w-8 h-8 rounded-full">
          <span>Username</span>
        </div>
      </div>
    </aside>
    <!-- Main Content Area -->
    <div class="flex-1 flex flex-col">
      <!-- Top Bar -->
      <header class="bg-white shadow p-4 flex justify-between items-center">
        <div class="flex items-center space-x-4">
          <button class="text-gray-600">Menu</button>
          <input type="text" placeholder="Search" class="border rounded px-2 py-1">
        </div>
        <div class="flex items-center space-x-4">
          <button class="text-gray-600">Notifications</button>
          <img src="https://via.placeholder.com/32" alt="User Avatar" class="w-8 h-8 rounded-full">
        </div>
      </header>
      <!-- Task List -->
      <main class="flex-1 p-8 overflow-auto">
        <h1 class="text-2xl font-bold mb-4">Inbox</h1>
        <div class="space-y-4">
          <div class="bg-white p-4 rounded shadow flex items-center space-x-4 hover:bg-gray-50 transition duration-150">
            <input type="checkbox">
            <div class="flex-1">Task 1</div>
            <div>John Doe</div>
            <div>Today</div>
          </div>
          <div class="bg-white p-4 rounded shadow flex items-center space-x-4 hover:bg-gray-50 transition duration-150">
            <input type="checkbox">
            <div class="flex-1">Task 2</div>
            <div>Jane Smith</div>
            <div>Tomorrow</div>
          </div>
        </div>
      </main>
    </div>
  </div>
</body>
</html>`
};
