import { ModelResponse } from "@/types/models";
import { sanitizeModelResponseContent } from "@/lib/utils";

export const linearAppClonegemini_2_5_pro_exp: ModelResponse = {
  id: "gemini-2-5-pro-exp-linear-app-clone",
  modelId: "gemini-2-5-pro-exp",
  prompt: "Recreate the Linear App UI using Tailwind CSS, keeping the layout and animations as close as possible. In a single-page self-contained HTML.",
  responseDate: "2025-03-25",
  type: "text",
  title: "linear-app-clone",
  description: "Gemini 2.5 Pro Experimental's response",
  content: sanitizeModelResponseContent(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Linear UI Clone - Tailwind</title>
    <!-- Use Tailwind CSS via CDN -->
    <script src="https://cdn.tailwindcss.com?plugins=forms,typography,aspect-ratio"></script>
    <style type="text/tailwindcss">
        /* Custom styles if needed, but primarily using utility classes */
        body {
            font-family: 'Inter', sans-serif; /* Linear uses Inter */
        }
        /* Add Inter font (optional, fallback to Tailwind's default sans) */
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

        /* Style scrollbars for a more native feel (Webkit browsers) */
        ::-webkit-scrollbar {
            width: 6px;
            height: 6px;
        }
        ::-webkit-scrollbar-track {
            background: transparent;
        }
        ::-webkit-scrollbar-thumb {
            background: #4a4a4a;
            border-radius: 3px;
        }
        ::-webkit-scrollbar-thumb:hover {
            background: #5a5a5a;
        }
    </style>
    <script>
      // Optional: Basic Tailwind dark mode configuration (though we force dark)
      // tailwind.config = {
      //   darkMode: 'class', // or 'media'
      // }
    </script>
</head>
<body class="dark bg-gray-900 text-gray-100 h-screen overflow-hidden flex antialiased">

    <!-- Sidebar -->
    <aside class="w-60 bg-gray-850 border-r border-gray-700 flex flex-col flex-shrink-0 h-full">
        <!-- Sidebar Header (Optional: Workspace/User) -->
        <div class="h-14 flex items-center px-4 border-b border-gray-700 flex-shrink-0">
            <div class="flex items-center space-x-2">
                <svg class="w-5 h-5 text-purple-400" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clip-rule="evenodd"></path></svg>
                <span class="font-semibold text-sm">My Workspace</span>
            </div>
        </div>

        <!-- Navigation -->
        <nav class="flex-1 overflow-y-auto p-2 space-y-1">
            <!-- Search (Example) -->
            <div class="px-2 pb-2">
                 <input type="text" placeholder="Search..." class="w-full bg-gray-700 border border-gray-600 rounded-md px-2 py-1 text-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-purple-500 focus:border-purple-500 transition duration-150 ease-in-out">
            </div>

            <!-- Nav Item: Active -->
            <a href="#" class="flex items-center px-3 py-1.5 text-sm font-medium rounded-md bg-gray-700 text-white group relative">
                <!-- Active indicator -->
                <span class="absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-5 bg-purple-500 rounded-r-full"></span>
                <svg class="w-5 h-5 mr-3 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
                Inbox
                <span class="ml-auto text-xs bg-gray-600 text-gray-300 rounded-full px-2 py-0.5">5</span>
            </a>

            <!-- Nav Item -->
            <a href="#" class="flex items-center px-3 py-1.5 text-sm font-medium rounded-md text-gray-300 hover:bg-gray-750 hover:text-white transition duration-150 ease-in-out group">
                <svg class="w-5 h-5 mr-3 text-gray-400 group-hover:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"></path></svg>
                My Issues
            </a>

            <!-- Nav Section Header -->
            <div class="pt-4 pb-1 px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Projects
            </div>

            <!-- Nav Item -->
            <a href="#" class="flex items-center px-3 py-1.5 text-sm font-medium rounded-md text-gray-300 hover:bg-gray-750 hover:text-white transition duration-150 ease-in-out group">
                <svg class="w-5 h-5 mr-3 text-gray-400 group-hover:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
                Website Redesign
            </a>
            <a href="#" class="flex items-center px-3 py-1.5 text-sm font-medium rounded-md text-gray-300 hover:bg-gray-750 hover:text-white transition duration-150 ease-in-out group">
                <svg class="w-5 h-5 mr-3 text-gray-400 group-hover:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m12 0a2 2 0 100-4m0 4a2 2 0 110-4m-6 0a2 2 0 100-4m0 4a2 2 0 110-4M6 12a2 2 0 100-4m0 4a2 2 0 110-4m12 0a2 2 0 100-4m0 4a2 2 0 110-4"></path></svg>
                API Development
            </a>
            <a href="#" class="flex items-center px-3 py-1.5 text-sm font-medium rounded-md text-gray-300 hover:bg-gray-750 hover:text-white transition duration-150 ease-in-out group">
                 <svg class="w-5 h-5 mr-3 text-gray-400 group-hover:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                Mobile App Sprint
            </a>

             <!-- Add more nav items or sections as needed -->

        </nav>

        <!-- Sidebar Footer (Optional: User Profile/Settings) -->
        <div class="p-2 border-t border-gray-700 flex-shrink-0">
            <a href="#" class="flex items-center w-full px-3 py-2 text-sm font-medium rounded-md text-gray-300 hover:bg-gray-750 hover:text-white transition duration-150 ease-in-out group">
                <img class="w-6 h-6 rounded-full mr-3" src="https://via.placeholder.com/100/805ad5/ffffff?text=U" alt="User Avatar">
                User Name
                <svg class="w-4 h-4 ml-auto text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
            </a>
        </div>
    </aside>

    <!-- Main Content Area -->
    <main class="flex-1 flex flex-col overflow-hidden">
        <!-- Content Header -->
        <div class="h-14 flex items-center justify-between px-6 border-b border-gray-750 flex-shrink-0 bg-gray-875">
            <div class="flex items-center space-x-4">
                <h1 class="text-lg font-semibold text-white">Inbox</h1>
                <!-- View Switcher (Placeholder) -->
                <div class="flex items-center space-x-1 bg-gray-750 p-0.5 rounded-md">
                    <button class="px-2 py-0.5 text-xs font-medium text-gray-300 bg-gray-600 rounded focus:outline-none">List</button>
                    <button class="px-2 py-0.5 text-xs font-medium text-gray-400 hover:text-gray-200 focus:outline-none">Board</button>
                </div>
            </div>
            <div class="flex items-center space-x-3">
                 <!-- Filter/Sort Buttons (Placeholder) -->
                <button class="flex items-center text-sm text-gray-400 hover:text-white focus:outline-none transition duration-150 ease-in-out">
                    <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12"></path></svg>
                    Sort
                </button>
                <button class="flex items-center text-sm text-gray-400 hover:text-white focus:outline-none transition duration-150 ease-in-out">
                     <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"></path></svg>
                    Filter
                </button>
                <!-- New Issue Button -->
                <button class="flex items-center bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium px-3 py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-875 focus:ring-purple-500 transition duration-150 ease-in-out">
                    <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
                    New Issue
                </button>
            </div>
        </div>

        <!-- Content Body (Scrollable List) -->
        <div class="flex-1 overflow-y-auto p-6 space-y-1">

            <!-- List Item Row -->
            <div class="flex items-center p-2 rounded-md hover:bg-gray-800 transition duration-150 ease-in-out cursor-pointer group border border-transparent hover:border-gray-700">
                <!-- Status Indicator -->
                <div class="w-3 h-3 rounded-full bg-yellow-400 flex-shrink-0 mr-3" title="In Progress"></div>
                <!-- Issue ID -->
                <span class="text-xs text-gray-500 font-mono mr-3">WEB-123</span>
                <!-- Title -->
                <span class="text-sm text-gray-100 flex-grow truncate pr-4">Implement new user authentication flow</span>
                 <!-- Priority (Placeholder Icon) -->
                 <svg class="w-4 h-4 text-red-500 flex-shrink-0 mr-3 opacity-70 group-hover:opacity-100" fill="currentColor" viewBox="0 0 20 20" title="Urgent"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
                <!-- Assignee Avatar (Placeholder) -->
                <img class="w-5 h-5 rounded-full flex-shrink-0 opacity-70 group-hover:opacity-100" src="https://via.placeholder.com/100/718096/ffffff?text=A" alt="Assignee Avatar" title="Alice">
            </div>

            <!-- List Item Row -->
            <div class="flex items-center p-2 rounded-md hover:bg-gray-800 transition duration-150 ease-in-out cursor-pointer group border border-transparent hover:border-gray-700">
                <!-- Status Indicator -->
                <div class="w-3 h-3 rounded-full bg-purple-400 flex-shrink-0 mr-3" title="Todo"></div>
                <!-- Issue ID -->
                <span class="text-xs text-gray-500 font-mono mr-3">API-45</span>
                <!-- Title -->
                <span class="text-sm text-gray-100 flex-grow truncate pr-4">Design database schema for comments</span>
                 <!-- Priority (Placeholder Icon) -->
                 <svg class="w-4 h-4 text-orange-400 flex-shrink-0 mr-3 opacity-70 group-hover:opacity-100" fill="none" stroke="currentColor" viewBox="0 0 24 24" title="High"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path></svg>
                <!-- Assignee Avatar (Placeholder) -->
                <img class="w-5 h-5 rounded-full flex-shrink-0 opacity-70 group-hover:opacity-100" src="https://via.placeholder.com/100/4a5568/ffffff?text=B" alt="Assignee Avatar" title="Bob">
            </div>

             <!-- List Item Row -->
            <div class="flex items-center p-2 rounded-md hover:bg-gray-800 transition duration-150 ease-in-out cursor-pointer group border border-transparent hover:border-gray-700">
                <!-- Status Indicator -->
                <div class="w-3 h-3 rounded-full bg-blue-400 flex-shrink-0 mr-3" title="Backlog"></div>
                <!-- Issue ID -->
                <span class="text-xs text-gray-500 font-mono mr-3">DSN-99</span>
                <!-- Title -->
                <span class="text-sm text-gray-100 flex-grow truncate pr-4">Create wireframes for settings page</span>
                 <!-- Priority (Placeholder Icon) -->
                 <svg class="w-4 h-4 text-gray-500 flex-shrink-0 mr-3 opacity-70 group-hover:opacity-100" fill="none" stroke="currentColor" viewBox="0 0 24 24" title="No Priority"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"></path></svg>
                <!-- Assignee Avatar (Placeholder) -->
                 <!-- No assignee -->
            </div>

            <!-- List Item Row -->
            <div class="flex items-center p-2 rounded-md hover:bg-gray-800 transition duration-150 ease-in-out cursor-pointer group border border-transparent hover:border-gray-700">
                <!-- Status Indicator -->
                <div class="w-3 h-3 rounded-full bg-green-400 flex-shrink-0 mr-3" title="Done"></div>
                <!-- Issue ID -->
                <span class="text-xs text-gray-500 font-mono mr-3">WEB-101</span>
                <!-- Title -->
                <span class="text-sm text-gray-400 line-through flex-grow truncate pr-4">Fix login button alignment on Safari</span>
                 <!-- Priority (Placeholder Icon) -->
                 <svg class="w-4 h-4 text-yellow-500 flex-shrink-0 mr-3 opacity-70 group-hover:opacity-100" fill="none" stroke="currentColor" viewBox="0 0 24 24" title="Medium"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
                <!-- Assignee Avatar (Placeholder) -->
                <img class="w-5 h-5 rounded-full flex-shrink-0 opacity-70 group-hover:opacity-100" src="https://via.placeholder.com/100/718096/ffffff?text=A" alt="Assignee Avatar" title="Alice">
            </div>

            <!-- Add more list items as needed -->
             <!-- Example: 15 more items for scrolling -->
            <script>
                // Simple script to duplicate the last item for scroll testing
                const itemToClone = document.querySelector('.p-6.space-y-1 > div:last-child');
                const container = itemToClone.parentElement;
                for (let i = 0; i < 15; i++) {
                    const clone = itemToClone.cloneNode(true);
                    // Slightly modify content to make them look different
                    clone.querySelector('.font-mono').textContent = 'GEN-' + (100 + i);
                    clone.querySelector('.flex-grow').textContent = 'Generated item number ' + (i + 1);
                    container.appendChild(clone);
                }
            </script>

        </div>
    </main>

    <!-- Add custom JS here if needed for more complex interactions -->
    <script>
        // Example: Add a subtle background pattern like Linear (optional)
        // This requires adding a div for the pattern or using pseudo-elements
        // For simplicity, we'll skip this in the pure Tailwind version.

        // Define custom Tailwind colors used (if you didn't use standard names)
        // Need to be defined if using arbitrary values or extending theme
        tailwind.config = {
             darkMode: 'class',
             theme: {
                extend: {
                    colors: {
                        // Define the slightly darker/lighter grays used
                        'gray-850': '#1F2125', // Sidebar background
                        'gray-875': '#1A1C1E', // Main content header background
                        'gray-750': '#2D2F34', // Hover backgrounds, inputs
                    }
                }
            }
        }
    </script>
</body>
</html>`)
};
