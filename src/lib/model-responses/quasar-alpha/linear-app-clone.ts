import { ModelResponse } from "@/types/models";
import { sanitizeModelResponseContent } from "@/lib/utils";

export const linearAppClonequasar_alpha: ModelResponse = {
  id: "quasar-alpha-linear-app-clone",
  modelId: "quasar-alpha",
  prompt: "Recreate the Linear App UI using Tailwind CSS, keeping the layout and animations as close as possible. In a single-page self-contained HTML.",
  responseDate: "2025-04-04",
  type: "website",
  title: "Linear App Clone",
  description: "Quasar Alpha's response to the challenge of replicating an existing UI with Tailwind CSS",
  content: sanitizeModelResponseContent(`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<title>Linear UI with Tailwind</title>
<!-- Tailwind CDN -->
<script src="https://cdn.tailwindcss.com"></script>
<style>
/* Custom scrollbar, optional */
::-webkit-scrollbar { width: 6px; }
::-webkit-scrollbar-thumb { background: #4b5563; border-radius: 3px; }
::-webkit-scrollbar-thumb:hover { background: #6b7280; }
</style>
</head>
<body class="bg-neutral-900 text-white font-sans h-screen flex overflow-hidden">

  <!-- Sidebar -->
  <aside class="w-64 bg-neutral-950 border-r border-neutral-800 flex flex-col transition-all duration-300">
    <div class="flex items-center px-4 py-5 border-b border-neutral-800">
      <div class="w-8 h-8 bg-gradient-to-tr from-purple-500 to-pink-500 rounded-md flex items-center justify-center font-bold">L</div>
      <h1 class="ml-3 font-semibold text-lg">Workspace</h1>
    </div>
    <nav class="flex-1 overflow-auto py-4">
      <ul class="space-y-1 px-2">
        <li>
          <a href="#" class="flex items-center px-3 py-2 rounded hover:bg-neutral-800 transition group">
            <span class="material-icons mr-3">home</span>Dashboard
          </a>
        </li>
        <li>
          <a href="#" class="flex items-center px-3 py-2 rounded hover:bg-neutral-800 transition group">
            <span class="material-icons mr-3">assignment</span>Issues
          </a>
        </li>
        <li>
          <a href="#" class="flex items-center px-3 py-2 rounded hover:bg-neutral-800 transition group">
            <span class="material-icons mr-3">explore</span>Projects
          </a>
        </li>
        <li>
          <a href="#" class="flex items-center px-3 py-2 rounded hover:bg-neutral-800 transition group">
            <span class="material-icons mr-3">settings</span>Settings
          </a>
        </li>
      </ul>
    </nav>
    <div class="p-4 border-t border-neutral-800">
      <button class="w-full py-2 px-3 bg-neutral-800 hover:bg-neutral-700 rounded transition">New Issue</button>
    </div>
  </aside>

  <!-- Main Content -->
  <main class="flex-1 flex flex-col overflow-hidden">
    <!-- Top bar -->
    <header class="h-16 border-b border-neutral-800 flex items-center justify-between px-6 bg-neutral-950 shadow">
      <div class="flex items-center gap-4">
        <input type="text" placeholder="Search..." class="px-3 py-1 rounded bg-neutral-800 border border-neutral-700 placeholder-neutral-400 focus:outline-none focus:border-purple-500 transition" />
      </div>
      <div class="flex items-center gap-4">
        <button class="hover:bg-neutral-800 rounded-full p-2 transition"><span class="material-icons">notifications</span></button>
        <div class="w-8 h-8 bg-gradient-to-tr from-purple-500 to-pink-500 rounded-full flex items-center justify-center font-bold">A</div>
      </div>
    </header>

    <!-- Content Area -->
    <section class="flex-1 overflow-auto p-6 space-y-6">
      <h2 class="text-2xl font-semibold">My Issues</h2>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <!-- Card -->
        <div class="bg-neutral-800 rounded-lg p-4 hover:ring-2 ring-purple-500 transition-all duration-300 cursor-pointer">
          <h3 class="font-semibold mb-2">Design login page</h3>
          <p class="text-neutral-400 mb-3">Create responsive login page UI with accessibility considerations.</p>
          <div class="flex justify-between text-sm text-neutral-400">
            <span>Project Alpha</span>
            <span>Due in 3 days</span>
          </div>
        </div>

        <div class="bg-neutral-800 rounded-lg p-4 hover:ring-2 ring-purple-500 transition-all duration-300 cursor-pointer">
          <h3 class="font-semibold mb-2">Fix billing bug</h3>
          <p class="text-neutral-400 mb-3">Investigate and resolve double charge issue affecting some customers.</p>
          <div class="flex justify-between text-sm text-neutral-400">
            <span>Billing</span>
            <span>Due tomorrow</span>
          </div>
        </div>

        <div class="bg-neutral-800 rounded-lg p-4 hover:ring-2 ring-purple-500 transition-all duration-300 cursor-pointer">
          <h3 class="font-semibold mb-2">Team meeting</h3>
          <p class="text-neutral-400 mb-3">Prepare slides and agenda for the upcoming sprint planning meeting.</p>
          <div class="flex justify-between text-sm text-neutral-400">
            <span>Management</span>
            <span>In 2 days</span>
          </div>
        </div>
      </div>
    </section>
  </main>

<!-- Material Icons CDN -->
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
</body>
</html>
`)
}; 