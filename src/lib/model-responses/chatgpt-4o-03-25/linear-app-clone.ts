import { ModelResponse } from "@/types/models";
import { sanitizeModelResponseContent } from "@/lib/utils";

export const linearAppClonechatgpt_4o_03_25: ModelResponse = {
  id: "chatgpt-4o-03-25-linear-app-clone",
  modelId: "chatgpt-4o-03-25",
  prompt: "Recreate the Linear App UI using Tailwind CSS, keeping the layout and animations as close as possible. In a single-page self-contained HTML.",
  responseDate: "2025-03-30",
  type: "website",
  title: "linear-app-clone",
  description: "ChatGPT-4o March 2025's response",
  content: sanitizeModelResponseContent(`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Linear Clone</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
      body {
        font-family: 'Inter', sans-serif;
      }
      .sidebar-icon:hover {
        background-color: rgba(255, 255, 255, 0.05);
      }
    </style>
  </head>
  <body class="bg-neutral-950 text-white h-screen overflow-hidden">
    <!-- Layout wrapper -->
    <div class="flex h-full w-full">
      <!-- Sidebar -->
      <aside class="w-16 bg-neutral-900 border-r border-neutral-800 flex flex-col items-center py-4 space-y-4">
        <div class="w-10 h-10 bg-white rounded-full"></div>
        <div class="flex flex-col gap-2 mt-6">
          <div class="sidebar-icon w-10 h-10 rounded-md flex items-center justify-center hover:bg-neutral-800 cursor-pointer transition">
            🏠
          </div>
          <div class="sidebar-icon w-10 h-10 rounded-md flex items-center justify-center hover:bg-neutral-800 cursor-pointer transition">
            ✅
          </div>
          <div class="sidebar-icon w-10 h-10 rounded-md flex items-center justify-center hover:bg-neutral-800 cursor-pointer transition">
            📅
          </div>
        </div>
      </aside>

      <!-- Main content area -->
      <div class="flex-1 flex flex-col">
        <!-- Top bar -->
        <header class="h-12 bg-neutral-900 border-b border-neutral-800 flex items-center px-4 justify-between">
          <div class="flex gap-4">
            <div class="text-sm font-medium text-neutral-300 hover:text-white transition cursor-pointer">My Issues</div>
            <div class="text-sm font-medium text-neutral-300 hover:text-white transition cursor-pointer">Inbox</div>
            <div class="text-sm font-medium text-neutral-300 hover:text-white transition cursor-pointer">Projects</div>
          </div>
          <div class="flex gap-2 items-center">
            <input
              type="text"
              placeholder="Search..."
              class="bg-neutral-800 text-sm px-2 py-1 rounded-md border border-neutral-700 focus:outline-none focus:ring-1 focus:ring-white"
            />
            <div class="w-8 h-8 bg-neutral-800 rounded-full flex items-center justify-center text-sm">👤</div>
          </div>
        </header>

        <!-- Main content -->
        <main class="flex-1 overflow-auto bg-neutral-950 p-6">
          <h1 class="text-xl font-semibold mb-4">Your Work</h1>
          <div class="space-y-2">
            <!-- Simulated issues -->
            <div class="bg-neutral-900 border border-neutral-800 rounded-md p-4 hover:border-white transition cursor-pointer">
              <div class="text-sm font-medium text-white">Fix login bug on Safari</div>
              <div class="text-xs text-neutral-400">Assigned to you · Project Alpha</div>
            </div>
            <div class="bg-neutral-900 border border-neutral-800 rounded-md p-4 hover:border-white transition cursor-pointer">
              <div class="text-sm font-medium text-white">Update marketing site content</div>
              <div class="text-xs text-neutral-400">Assigned to you · Project Beta</div>
            </div>
            <div class="bg-neutral-900 border border-neutral-800 rounded-md p-4 hover:border-white transition cursor-pointer">
              <div class="text-sm font-medium text-white">Improve dark mode contrast</div>
              <div class="text-xs text-neutral-400">Assigned to you · Design</div>
            </div>
          </div>
        </main>
      </div>
    </div>
  </body>
</html>
`)
}; 