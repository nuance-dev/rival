import { ModelResponse } from "@/types/models";

export const linearAppClonegemini_2_0_pro_exp: ModelResponse = {
  id: "gemini-2-0-pro-exp-linear-app-clone",
  modelId: "gemini-2-0-pro-exp",
  prompt: "Recreate the Linear App UI using Tailwind CSS, keeping the layout and animations as close as possible. In a single-page self-contained HTML.",
  responseDate: "2025-02-28",
  type: "website",
  title: "Linear App Clone",
  description: "Gemini 2.0 Pro Exp's response to the Tests an AI's ability to replicate an existing UI with Tailwind CSS",
  content: `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Linear App Clone (Tailwind CSS)</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        /*  Add some base styles for scrollbars and focus states */
        ::-webkit-scrollbar {
            width: 8px;
        }

        ::-webkit-scrollbar-track {
            background: #1f2937;
        }

        ::-webkit-scrollbar-thumb {
            background: #4b5563;
            border-radius: 4px;
        }

        ::-webkit-scrollbar-thumb:hover {
            background: #6b7280;
        }

        /* Prevent blue highlight on tap on mobile */
        * {
            -webkit-tap-highlight-color: transparent;
        }

        /* Focus styles (customize as needed) */
        *:focus {
            outline: 2px solid #60a5fa; /* Light blue outline */
            outline-offset: 2px;
        }

        /* Animation for hover effect on sidebar items */
        .sidebar-item {
            transition: background-color 0.2s ease, transform 0.1s ease;
            /* Slight scale on hover */
        }

        .sidebar-item:hover {
            background-color: #374151;
            /* Darker gray on hover */
            transform: scale(1.02);
            /* Slight scale effect */
        }

        .issue-item {
           transition: background-color 0.2s ease, transform 0.1s ease, box-shadow 0.1s ease;
        }

        .issue-item:hover {
            background-color: #252e3a;  /* Slightly lighter than main background on hover */
            transform: translateY(-1px); /* subtle lift */
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* subtle shadow*/
        }

        /* Active issue styling */
        .issue-item.active {
          background-color: #374151;
          border-left: 3px solid #60a5fa; /* Left border indicator */
        }

        .status-indicator {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          margin-right: 0.5rem;
        }
    </style>
</head>

<body class="bg-gray-900 text-gray-100 font-sans overflow-hidden">  <!-- overflow-hidden for overall layout -->

    <div class="flex h-screen">  <!-- Main flex container for layout -->

        <!-- Sidebar -->
        <aside class="w-64 bg-gray-800 py-4 px-3 flex flex-col  border-r border-gray-700 shrink-0">  <!-- shrink-0 prevents resizing -->
            <div class="flex items-center mb-6">
                <svg class="h-6 w-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
                <span class="text-lg font-semibold">My Workspace</span>
            </div>
            <nav>
                <ul>
                    <li class="mb-2">
                        <a href="#" class="sidebar-item flex items-center py-2 px-3 rounded-md">
                            <svg class="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M12 4v16m8-8H4"></path>
                            </svg>
                            My Issues
                        </a>
                    </li>
                    <li class="mb-2">
                        <a href="#" class="sidebar-item flex items-center py-2 px-3 rounded-md">
                            <svg class="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
                            </svg>
                            Projects
                        </a>
                    </li>
                      <li class="mb-2">
                        <a href="#" class="sidebar-item flex items-center py-2 px-3 rounded-md">
                            <svg class="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                            </svg>
                            Cycles
                        </a>
                    </li>
                    <!-- Add more sidebar items here -->
                </ul>
            </nav>
            <div class="mt-auto">  <!-- Push to bottom -->
                  <a href="#" class="sidebar-item flex items-center py-2 px-3 rounded-md">
                    <svg class="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
                    Settings
                  </a>
            </div>
        </aside>

        <!-- Main Content Area -->
        <div class="flex-1 flex flex-col overflow-hidden">   <!-- overflow-hidden for internal scrolling -->

            <!-- Top Bar -->
            <header class="bg-gray-800 py-3 px-4 border-b border-gray-700 flex items-center justify-between shrink-0"> <!-- shrink-0 -->
                <div>
                    <span class="text-lg font-semibold">All Issues</span>
                </div>
                <div class="flex items-center">
                    <button class="bg-blue-500 hover:bg-blue-600 text-white py-1 px-3 rounded-md mr-2">
                        New Issue
                    </button>
                    <input type="text" placeholder="Search..."
                        class="bg-gray-700 text-gray-100 py-1 px-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                </div>
            </header>

            <!-- Issue List -->
            <main class="flex-1 overflow-y-auto p-4">
               <div class="issue-item flex items-center justify-between py-3 px-4 border-b border-gray-700 rounded-md mb-2" >
                  <div class="flex items-center">
                        <div class="status-indicator bg-green-500"></div>
                        <span class="text-sm font-medium">LIN-123</span>
                        <span class="ml-2">Implement user authentication</span>
                  </div>
                  <div class="text-sm text-gray-400">
                        <span>Assigned to:</span>
                        <span class="font-medium">John Doe</span>
                  </div>
                </div>

                <div class="issue-item flex items-center justify-between py-3 px-4 border-b border-gray-700 rounded-md mb-2 active" >  <!-- Example of an active issue -->
                  <div class="flex items-center">
                     <div class="status-indicator bg-yellow-500"></div>
                        <span class="text-sm font-medium">LIN-456</span>
                        <span class="ml-2">Design new dashboard layout</span>
                  </div>
                  <div class="text-sm text-gray-400">
                        <span>Assigned to:</span>
                        <span class="font-medium">Jane Smith</span>
                  </div>
                </div>

                <div class="issue-item flex items-center justify-between py-3 px-4 border-b border-gray-700 rounded-md mb-2">
                  <div class="flex items-center">
                    <div class="status-indicator bg-red-500"></div>
                        <span class="text-sm font-medium">LIN-789</span>
                        <span class="ml-2">Fix critical bug in payment processing</span>
                  </div>
                  <div class="text-sm text-gray-400">
                        <span>Assigned to:</span>
                        <span class="font-medium">Peter Jones</span>
                  </div>
                </div>
                 <div class="issue-item flex items-center justify-between py-3 px-4 border-b border-gray-700 rounded-md mb-2">
                  <div class="flex items-center">
                     <div class="status-indicator bg-blue-500"></div>
                        <span class="text-sm font-medium">LIN-789</span>
                        <span class="ml-2">Make API documentation</span>
                  </div>
                  <div class="text-sm text-gray-400">
                        <span>Assigned to:</span>
                        <span class="font-medium">Peter Jones</span>
                  </div>
                </div>

                <!-- Add more issue items here -->
            </main>
        </div>
    </div>
</body>

</html>`
};
