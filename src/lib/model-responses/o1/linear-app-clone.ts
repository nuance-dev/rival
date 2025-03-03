import { ModelResponse } from "@/types/models";

export const linearAppCloneo1: ModelResponse = {
  id: "o1-linear-app-clone",
  modelId: "o1"  ,
  prompt: "Recreate the Linear App UI using Tailwind CSS, keeping the layout and animations as close as possible. In a single-page self-contained HTML.",
  responseDate: "2025-02-28",
  type: "website"  ,
  title: "Linear App Clone"  ,
  description: "O1's response to the Tests an AI's ability to replicate an existing UI with Tailwind CSS",
  content: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Linear-like UI with Tailwind CSS</title>

  <!-- Tailwind CSS via CDN -->
  <script src="https://cdn.tailwindcss.com"></script>

  <!-- Optional: Tailwind config for customizing (you can remove or adjust) -->
  <script>
    tailwind.config = {
      theme: {
        extend: {
          colors: {
            brand: {
              DEFAULT: '#5E6AD2', // example brand color
            }
          }
        }
      }
    }
  </script>
</head>
<body class="bg-gray-100 text-gray-900">
  <!--
    Main container
    h-screen: full viewport height
    flex: use flex layout
    overflow-hidden: ensures no unwanted scrollbar from the main layout
  -->
  <div class="h-screen flex overflow-hidden">
    <!--
      LEFT SIDEBAR
      - We use "transition-all" to animate width changes
      - "w-16" expanded to "w-64" on toggle
    -->
    <div id="sidebar" class="flex flex-col bg-white border-r border-gray-200 w-16 transition-all duration-300 ease-in-out">
      <!-- Top: Logo area -->
      <div class="flex items-center justify-center h-16 border-b border-gray-200">
        <!-- Brand / Logo Placeholder -->
        <button
          id="toggleSidebarBtn"
          class="flex items-center justify-center w-10 h-10 rounded hover:bg-gray-100 focus:outline-none"
          title="Toggle Sidebar"
        >
          <!-- Just an example icon using Heroicons or Font Awesome, you can replace with your own -->
          <svg class="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" stroke-width="2"
            viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
            <path d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
        </button>
      </div>

      <!-- Nav Items -->
      <nav class="mt-4 flex-1 px-2 space-y-2 overflow-y-auto">
        <!-- Example nav item -->
        <a href="#"
          class="group flex items-center p-2 rounded-md transition-colors duration-200 hover:bg-gray-100"
        >
          <svg class="w-6 h-6 text-gray-500 flex-shrink-0" fill="none" stroke="currentColor"
               stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
            <path d="M9 3L4 8m0 0l5 5M4 8h16" />
          </svg>
          <span class="ml-3 text-gray-700 whitespace-nowrap hidden sidebar-label">Inbox</span>
        </a>

        <a href="#"
          class="group flex items-center p-2 rounded-md transition-colors duration-200 hover:bg-gray-100"
        >
          <svg class="w-6 h-6 text-gray-500 flex-shrink-0" fill="none" stroke="currentColor"
               stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
            <path d="M3 7v4a1 1 0 001 1h3m13 0h-6M5 17h6a1 1 0 011 1v3m0-10V5a1 1 0 011-1h4m-4 0H9m4 0l1 4m0 0l1-4"/>
          </svg>
          <span class="ml-3 text-gray-700 whitespace-nowrap hidden sidebar-label">Issues</span>
        </a>

        <a href="#"
          class="group flex items-center p-2 rounded-md transition-colors duration-200 hover:bg-gray-100"
        >
          <svg class="w-6 h-6 text-gray-500 flex-shrink-0" fill="none" stroke="currentColor"
               stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
            <path d="M20 21V7a2 2 0 00-2-2h-5l-2-2H4a2 2 0 00-2 2v14H2" />
          </svg>
          <span class="ml-3 text-gray-700 whitespace-nowrap hidden sidebar-label">Projects</span>
        </a>

        <!-- Add more navigation items as needed -->
      </nav>

      <!-- Bottom: Footer / Settings -->
      <div class="border-t border-gray-200 p-2 flex items-center">
        <button class="flex items-center justify-center w-10 h-10 rounded hover:bg-gray-100 focus:outline-none">
          <svg class="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" stroke-width="2"
               viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
            <path d="M12 6v6l4 2"/>
            <circle cx="12" cy="12" r="10"/>
          </svg>
        </button>
        <span class="ml-3 text-gray-700 whitespace-nowrap hidden sidebar-label">Settings</span>
      </div>
    </div>

    <!--
      MAIN CONTENT AREA
      This contains the top bar and the central content.
    -->
    <div class="flex flex-col flex-1">
      <!-- TOP BAR -->
      <header class="flex items-center justify-between h-16 bg-white border-b border-gray-200 px-4">
        <!-- Search bar -->
        <div class="relative w-1/2 max-w-md">
          <svg class="absolute left-3 top-3 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" stroke-width="2"
               viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="11" cy="11" r="8"/>
            <path d="M21 21l-4.3-4.3"/>
          </svg>
          <input
            type="search"
            class="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent placeholder-gray-400"
            placeholder="Search issues..."
          />
        </div>
        <!-- Right side of top bar: user avatar / profile -->
        <div class="flex items-center space-x-4">
          <button class="relative focus:outline-none">
            <img
              class="h-8 w-8 rounded-full object-cover"
              src="https://i.pravatar.cc/100"
              alt="Profile Avatar"
            />
          </button>
        </div>
      </header>

      <!-- MAIN CONTENT: Issue List and Details Panel -->
      <div class="flex flex-1 overflow-hidden">
        <!-- Issues List -->
        <div class="w-1/2 border-r border-gray-200 overflow-y-auto">
          <div class="px-4 py-4">
            <h2 class="text-lg font-semibold mb-4">Issues</h2>
            <!-- Example issue item -->
            <div class="space-y-2">
              <div class="p-3 bg-white rounded shadow hover:shadow-md transition-shadow cursor-pointer">
                <div class="font-semibold">Issue #1234: Fix login bug</div>
                <div class="text-sm text-gray-500">Assigned to John Doe</div>
              </div>
              <div class="p-3 bg-white rounded shadow hover:shadow-md transition-shadow cursor-pointer">
                <div class="font-semibold">Issue #1235: Update onboarding flow</div>
                <div class="text-sm text-gray-500">Assigned to Jane Smith</div>
              </div>
              <div class="p-3 bg-white rounded shadow hover:shadow-md transition-shadow cursor-pointer">
                <div class="font-semibold">Issue #1236: Add dark mode</div>
                <div class="text-sm text-gray-500">Assigned to Sarah Lee</div>
              </div>
              <!-- More issue items... -->
            </div>
          </div>
        </div>
        <!-- Details Panel -->
        <div class="flex-1 overflow-y-auto">
          <div class="p-6">
            <h2 class="text-lg font-semibold mb-4">Details</h2>
            <p class="text-sm text-gray-700 mb-4">
              Select an issue to view its details here. This panel could contain:
            </p>
            <ul class="list-disc ml-6 text-gray-700 space-y-1">
              <li>Description</li>
              <li>Comments</li>
              <li>Attachments</li>
              <li>Activity Feed</li>
              <li>Etc.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Optional: Minimal JavaScript for toggling sidebar -->
  <script>
    const toggleSidebarBtn = document.getElementById("toggleSidebarBtn");
    const sidebar = document.getElementById("sidebar");
    const sidebarLabels = document.querySelectorAll(".sidebar-label");

    let sidebarExpanded = false;

    toggleSidebarBtn.addEventListener("click", () => {
      sidebarExpanded = !sidebarExpanded;
      if(sidebarExpanded) {
        sidebar.classList.remove("w-16");
        sidebar.classList.add("w-64");
        sidebarLabels.forEach(label => label.classList.remove("hidden"));
      } else {
        sidebar.classList.remove("w-64");
        sidebar.classList.add("w-16");
        sidebarLabels.forEach(label => label.classList.add("hidden"));
      }
    });
  </script>
</body>
</html>
`
};
