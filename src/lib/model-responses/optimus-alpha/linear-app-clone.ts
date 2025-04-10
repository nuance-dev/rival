import { ModelResponse } from "@/types/models";
// import { sanitizeModelResponseContent } from "@/lib/utils"; // Removed unused import

export const linearAppCloneResponse: ModelResponse = {
  id: "optimus-alpha-linear-app-clone",
  modelId: "optimus-alpha", // Updated modelId
  prompt: "Recreate the Linear App UI using Tailwind CSS, keeping the layout and animations as close as possible. In a single-page self-contained HTML.", // Added prompt
  responseDate: "2025-04-10", // Updated responseDate
  title: "Linear App UI Clone",
  description: "Generates an HTML/Tailwind clone of the Linear app interface.",
  type: "website",
  content: `<!DOCTYPE html>
<html lang="en" class="h-full bg-neutral-950">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1.0" />
  <title>Linear App UI Clone - Tailwind CSS</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <!-- Heroicons (for sidebar/topbar icons) -->
  <script src="https://unpkg.com/feather-icons"></script>
  <link rel="shortcut icon" href="https://linear.app/favicon.ico" />
  <style>
    html, body, #app {
      height: 100%;
    }
    ::selection {
      background: #6366f1;
      color: white;
    }
    /* Pretty scrollbar */
    ::-webkit-scrollbar {
      width: 8px;
    }
    ::-webkit-scrollbar-thumb {
      background: #22223a;
      border-radius: 4px;
    }
    .sidebar-icon:hover svg {
      stroke: #6366f1;
      transition: stroke 0.2s;
    }
    .active-tab {
      color: #6366f1;
      border-color: #6366f1;
      background: rgba(99,102,241,0.04);
    }
    .hover-row:hover {
      background: rgba(255,255,255,0.03);
    }
  </style>
</head>
<body class="h-full font-sans antialiased text-neutral-200">
  <div id="app" class="flex h-full">

    <!-- Sidebar -->
    <aside class="z-10 w-16 bg-neutral-900 border-r border-neutral-800 flex flex-col items-center py-4 space-y-8">
      <!-- Logo (Linear) -->
      <div class="mb-6">
        <img src="https://linear.app/icons/linear.svg" alt="Linear" class="w-8 h-8" draggable="false" />
      </div>
      <!-- Main navigation -->
      <nav class="flex flex-col gap-6">
        <button class="sidebar-icon p-2 rounded-lg hover:bg-neutral-800 transition">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <rect width="18" height="18" x="3" y="3" rx="3"/>
          </svg>
        </button>
        <button class="sidebar-icon p-2 rounded-lg hover:bg-neutral-800 transition">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path d="M9 17v-6h13v6"></path><path d="M9 5V3a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v2"></path>
          </svg>
        </button>
        <button class="sidebar-icon p-2 rounded-lg hover:bg-neutral-800 transition">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path d="M17 20h5V10H2v10h5" /><path d="M7 10V4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v6" />
          </svg>
        </button>
      </nav>

      <div class="flex-grow"></div>

      <!-- Profile + Settings -->
      <div class="flex flex-col gap-4 items-center">
        <button class="sidebar-icon p-2 rounded-lg hover:bg-neutral-800 transition">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="3" />
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9c0 .66.42 1.23 1 1.51h.09a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>
          </svg>
        </button>
        <button class="rounded-full hover:ring-2 ring-indigo-500 ring-offset-2 transition ring-offset-neutral-900">
          <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="User" class="w-8 h-8 rounded-full" draggable="false" />
        </button>
      </div>
    </aside>

    <!-- Main Content Area -->
    <main class="flex-1 flex flex-col bg-neutral-950 min-w-0">

      <!-- Top Bar -->
      <div class="flex items-center border-b border-neutral-800 h-14 px-6 bg-neutral-950/70 backdrop-blur z-10">
        <div class="flex items-center gap-3">
          <h1 class="font-semibold text-lg tracking-tight">Issues</h1>
        </div>
        <div class="flex-1"></div>
        <div class="flex items-center gap-3">
          <button class="px-2 py-1 rounded-md text-xs bg-neutral-800 hover:bg-[#6366f1] hover:text-white transition flex items-center gap-1">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10"/>
              <path d="M12 8v4l3 3"/>
            </svg>
            Recent
          </button>
          <button class="p-1 rounded-md hover:bg-neutral-800 transition">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10"/>
              <path d="M12 8v4l3 3"/>
            </svg>
          </button>
          <button class="p-1 rounded-md hover:bg-neutral-800 transition">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
          </button>
        </div>
      </div>

      <!-- Tabs -->
      <div class="flex px-6 space-x-1 border-b border-neutral-800 text-neutral-400 bg-neutral-950/80 select-none overflow-x-auto">
        <button class="py-2 px-3 border-b-2 font-medium active-tab transition">Inbox</button>
        <button class="py-2 px-3 border-b-2 focus:outline-none hover:text-neutral-200 hover:border-neutral-700 border-transparent transition">My Issues</button>
        <button class="py-2 px-3 border-b-2 focus:outline-none hover:text-neutral-200 hover:border-neutral-700 border-transparent transition">Created by Me</button>
        <button class="py-2 px-3 border-b-2 focus:outline-none hover:text-neutral-200 hover:border-neutral-700 border-transparent transition">Recently Updated</button>
      </div>

      <!-- Header Controls -->
      <div class="flex items-center px-6 py-3 border-b border-neutral-800 bg-neutral-950/90">
        <div class="flex items-center gap-2">
          <button class="rounded px-2.5 py-1 font-medium text-sm bg-indigo-600 hover:bg-indigo-700 transition text-white flex items-center gap-1">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path d="M12 4v16m8-8H4"/>
            </svg>
            New Issue
          </button>
          <button class="rounded px-2 py-1 text-sm text-neutral-400 hover:bg-neutral-800 transition">Sort</button>
          <button class="rounded px-2 py-1 text-sm text-neutral-400 hover:bg-neutral-800 transition">Filter</button>
        </div>
        <div class="flex-1"></div>
        <div class="flex gap-2">
          <input type="search" class="rounded bg-neutral-900 px-3 py-1.5 text-sm border border-neutral-800 focus:border-indigo-500 focus:outline-none transition" placeholder="Search issues..." />
        </div>
      </div>

      <!-- Main List -->
      <section class="flex-1 overflow-auto bg-neutral-950 px-6 py-4">
        <table class="min-w-full text-sm">
          <thead>
            <tr class="text-neutral-500 font-medium">
              <th class="py-1 text-left w-6"> </th>
              <th class="py-1 text-left w-20">ID</th>
              <th class="py-1 text-left">Title</th>
              <th class="py-1 text-left w-28">Status</th>
              <th class="py-1 text-left w-24">Assignee</th>
              <th class="py-1 text-left w-28">Last updated</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-neutral-800">
            <!-- Row A -->
            <tr class="group hover-row transition duration-150">
              <td class="py-4">
                <input type="checkbox" class="accent-indigo-500 w-4 h-4" />
              </td>
              <td class="py-4">
                <span class="text-xs font-mono px-2 py-1 rounded bg-neutral-800 text-indigo-400">LNR-101</span>
              </td>
              <td class="py-4">
                <span class="font-medium text-neutral-100 group-hover:text-indigo-400 transition">Layout breaks on Safari</span>
                <span class="block text-xs text-neutral-500">Reported by Alice</span>
              </td>
              <td class="py-4">
                <span class="rounded-full px-2 py-0.5 text-xs font-medium bg-orange-900/60 text-orange-400">In Progress</span>
              </td>
              <td class="py-4">
                <img src="https://randomuser.me/api/portraits/women/43.jpg" class="w-7 h-7 rounded-full ring-2 ring-neutral-900" title="Alice" />
              </td>
              <td class="py-4">
                <span class="text-xs text-neutral-400">1 hour ago</span>
              </td>
            </tr>
            <!-- Row B -->
            <tr class="group hover-row transition duration-150">
              <td class="py-4">
                <input type="checkbox" class="accent-indigo-500 w-4 h-4" />
              </td>
              <td class="py-4">
                <span class="text-xs font-mono px-2 py-1 rounded bg-neutral-800 text-indigo-400">LNR-100</span>
              </td>
              <td class="py-4">
                <span class="font-medium text-neutral-100 group-hover:text-indigo-400 transition">API endpoint returns 500</span>
                <span class="block text-xs text-neutral-500">Reported by Bob</span>
              </td>
              <td class="py-4">
                <span class="rounded-full px-2 py-0.5 text-xs font-medium bg-green-900/50 text-green-400">Closed</span>
              </td>
              <td class="py-4">
                <img src="https://randomuser.me/api/portraits/men/42.jpg" class="w-7 h-7 rounded-full ring-2 ring-neutral-900" title="Bob" />
              </td>
              <td class="py-4">
                <span class="text-xs text-neutral-400">2 hours ago</span>
              </td>
            </tr>
            <!-- Row C -->
            <tr class="group hover-row transition duration-150">
              <td class="py-4">
                <input type="checkbox" class="accent-indigo-500 w-4 h-4" />
              </td>
              <td class="py-4">
                <span class="text-xs font-mono px-2 py-1 rounded bg-neutral-800 text-indigo-400">LNR-99</span>
              </td>
              <td class="py-4">
                <span class="font-medium text-neutral-100 group-hover:text-indigo-400 transition">Dashboard: Add dark mode switch</span>
                <span class="block text-xs text-neutral-500">Reported by Carol</span>
              </td>
              <td class="py-4">
                <span class="rounded-full px-2 py-0.5 text-xs font-medium bg-neutral-800 text-neutral-400">Backlog</span>
              </td>
              <td class="py-4">
                <img src="https://randomuser.me/api/portraits/women/44.jpg" class="w-7 h-7 rounded-full ring-2 ring-neutral-900" title="Carol" />
              </td>
              <td class="py-4">
                <span class="text-xs text-neutral-400">today</span>
              </td>
            </tr>
            <!-- Row D -->
            <tr class="group hover-row transition duration-150">
              <td class="py-4">
                <input type="checkbox" class="accent-indigo-500 w-4 h-4" />
              </td>
              <td class="py-4">
                <span class="text-xs font-mono px-2 py-1 rounded bg-neutral-800 text-indigo-400">LNR-98</span>
              </td>
              <td class="py-4">
                <span class="font-medium text-neutral-100 group-hover:text-indigo-400 transition">Project page acts weird on mobile</span>
                <span class="block text-xs text-neutral-500">Reported by Dave</span>
              </td>
              <td class="py-4">
                <span class="rounded-full px-2 py-0.5 text-xs font-medium bg-blue-900/50 text-blue-400">Review</span>
              </td>
              <td class="py-4">
                <img src="https://randomuser.me/api/portraits/men/45.jpg" class="w-7 h-7 rounded-full ring-2 ring-neutral-900" title="Dave" />
              </td>
              <td class="py-4">
                <span class="text-xs text-neutral-400">yesterday</span>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </main>
  </div>
  <script>
    // Feather icons replacement (nice vector icons)
    feather.replace();
  </script>
</body>
</html>
`
}; 