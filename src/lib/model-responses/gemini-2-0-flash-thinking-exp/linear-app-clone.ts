import { ModelResponse } from "@/types/models";

export const linearAppClonegemini_2_0_flash_thinking_exp: ModelResponse = {
  id: "gemini-2-0-flash-thinking-exp-linear-app-clone",
  modelId: "gemini-2-0-flash-thinking-exp",
  prompt: "Recreate the Linear App UI using Tailwind CSS, keeping the layout and animations as close as possible. In a single-page self-contained HTML.",
  responseDate: "2025-02-27",
  type: "website"  ,
  title: "Linear App Clone"  ,
  description: "Gemini 2.0 Flash Thinking Exp's response to the Tests an AI's ability to replicate an existing UI with Tailwind CSS",
  content: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Linear UI Recreation (Tailwind CSS)</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        'linear-blue': '#007AFF',
                        'linear-gray-100': '#F7F7F8',
                        'linear-gray-200': '#E8E8EA',
                        'linear-gray-300': '#D1D1D6',
                        'linear-gray-400': '#BABABA',
                        'linear-gray-500': '#8E8E93',
                        'linear-gray-600': '#636366',
                        'linear-gray-700': '#3A3A3C',
                        'linear-gray-800': '#1C1C1E',
                        'linear-gray-900': '#000000', // Pure Black for contrast if needed
                    },
                    fontFamily: {
                        'sans': ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen-Sans', 'Ubuntu', 'Cantarell', 'Helvetica Neue', 'sans-serif'],
                    },
                    keyframes: {
                        'fade-in': {
                            '0%': { opacity: '0' },
                            '100%': { opacity: '1' },
                        },
                        'slide-up': {
                            '0%': { transform: 'translateY(20px)', opacity: '0' },
                            '100%': { transform: 'translateY(0)', opacity: '1' },
                        },
                    },
                    animation: {
                        'fade-in': 'fade-in 0.2s ease-out forwards',
                        'slide-up': 'slide-up 0.2s ease-out forwards',
                    },
                },
            },
        }
    </script>
    <style>
        /* Custom CSS for slightly more Linear-like styling if needed, but Tailwind should handle most */
        .linear-shadow {
            box-shadow: 0 1px 2px rgba(0, 0, 0, 0.06), 0 1px 3px rgba(0, 0, 0, 0.1);
        }
        .linear-shadow-md {
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
        }
        .linear-shadow-lg {
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
        }
        .group:hover .group-hover\:linear-blue {
            color: theme('colors.linear-blue');
        }
    </style>
</head>
<body class="font-sans bg-linear-gray-100 text-linear-gray-800">

    <div class="flex h-screen overflow-hidden">
        <!-- Left Sidebar -->
        <aside class="w-64 bg-white border-r border-linear-gray-200 flex flex-col p-4 space-y-4">
            <div class="flex items-center justify-between mb-4">
                <div class="font-semibold text-lg">Linear Lite</div>
                <button class="text-linear-gray-500 hover:text-linear-gray-700 transition-colors duration-200">
                    <!-- Placeholder Icon - Replace with actual icon -->
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>

            <nav class="flex-1 space-y-2">
                <div class="font-semibold text-sm text-linear-gray-600 uppercase tracking-wider">Workspaces</div>
                <a href="#" class="block px-3 py-2 rounded-md hover:bg-linear-gray-100 transition-colors duration-200 group">
                    <div class="flex items-center space-x-2">
                        <!-- Placeholder Icon -->
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-linear-gray-500 group-hover:linear-blue">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v7.5a2.25 2.25 0 002.25 2.25h7.5a2.25 2.25 0 002.25-2.25v-7.5m-7.5 3h7.5m-7.5-3l1.121-1.122c.376-.377 1.027-.377 1.404 0l4.5 4.5a2.25 2.25 0 003.212 3.212l-4.5 4.5c-.377.377-1.027.377-1.404 0l-1.121-1.122" />
                        </svg>
                        <span class="text-sm group-hover:linear-blue">My Workspace</span>
                    </div>
                </a>
                <a href="#" class="block px-3 py-2 rounded-md hover:bg-linear-gray-100 transition-colors duration-200 group">
                    <div class="flex items-center space-x-2">
                        <!-- Placeholder Icon -->
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-linear-gray-500 group-hover:linear-blue">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 9l6-6m0 0l6 6m-6-6v24" />
                        </svg>
                        <span class="text-sm group-hover:linear-blue">Team Projects</span>
                    </div>
                </a>
            </nav>

            <div class="border-t border-linear-gray-200 pt-4">
                <a href="#" class="block px-3 py-2 rounded-md hover:bg-linear-gray-100 transition-colors duration-200 group">
                    <div class="flex items-center space-x-2">
                        <!-- Placeholder Icon -->
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-linear-gray-500 group-hover:linear-blue">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                        <span class="text-sm group-hover:linear-blue">New Issue</span>
                    </div>
                </a>
                <a href="#" class="block px-3 py-2 rounded-md hover:bg-linear-gray-100 transition-colors duration-200 group">
                    <div class="flex items-center space-x-2">
                        <!-- Placeholder Icon -->
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-linear-gray-500 group-hover:linear-blue">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.125h15.002c.229 0 .459-.019.683-.055A9.528 9.528 0 0022.5 17.673v-.945c0-1.652-1.08-3.215-2.773-3.863C19.952 12.634 20.252 12.13 20.252 11.5c0-1.133-.734-2.05-1.697-2.237a6.375 6.375 0 00-8.955 0C7.733 9.463 7 10.38 7 11.5c0 .63 0 .853.03 1.176-.893.648-1.518 2.211-1.518 3.863v.945c0 2.424 1.714 4.478 4.05 4.922a2.496 2.496 0 01.683.055zM11.25 6.75a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0z" />
                        </svg>
                        <span class="text-sm group-hover:linear-blue">Profile</span>
                    </div>
                </a>
            </div>
        </aside>

        <!-- Main Content Area -->
        <main class="flex-1 bg-linear-gray-100 p-8 overflow-y-auto">
            <!-- Header -->
            <header class="mb-6 flex items-center justify-between">
                <div>
                    <h2 class="text-2xl font-semibold">Issues</h2>
                    <p class="text-linear-gray-500 text-sm mt-1">All your project issues are listed here.</p>
                </div>
                <div class="flex space-x-2">
                    <button class="bg-white linear-shadow hover:linear-shadow-md transition-shadow duration-200 px-4 py-2 rounded-md text-sm font-medium text-linear-gray-700">
                        Filters
                    </button>
                    <button class="bg-linear-blue text-white linear-shadow hover:linear-shadow-md transition-shadow duration-200 px-4 py-2 rounded-md text-sm font-medium">
                        Create Issue
                    </button>
                </div>
            </header>

            <!-- Issues List -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <!-- Issue Card 1 -->
                <div class="bg-white linear-shadow rounded-md p-4 hover:linear-shadow-lg transition-shadow duration-200 animation-slide-up">
                    <div class="flex justify-between items-start mb-3">
                        <span class="bg-linear-gray-200 text-linear-gray-600 px-2 py-1 rounded-full text-xs font-medium">To Do</span>
                        <button class="text-linear-gray-400 hover:text-linear-gray-600 transition-colors duration-200">
                            <!-- Placeholder Icon - More Options -->
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                            </svg>
                        </button>
                    </div>
                    <h3 class="font-semibold text-lg mb-2 hover:text-linear-blue transition-colors duration-200 cursor-pointer">Bug: Navigation broken on mobile</h3>
                    <p class="text-sm text-linear-gray-600 mb-3">Reported by John Doe</p>
                    <div class="flex items-center space-x-2 text-sm text-linear-gray-500">
                        <!-- Placeholder Icon - Comment -->
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0l3 3m-3-3h15M16.5 21v-2.25a2.25 2.25 0 00-2.25-2.25H5.25a2.25 2.25 0 00-2.25 2.25V21m16.5-2.25V9.75a2.25 2.25 0 00-2.25-2.25H5.25a2.25 2.25 0 00-2.25 2.25v11.25" />
                        </svg>
                        <span>3 comments</span>
                        <span class="ml-auto"><!-- Placeholder Avatar -->👤</span>
                    </div>
                </div>

                <!-- Issue Card 2 -->
                <div class="bg-white linear-shadow rounded-md p-4 hover:linear-shadow-lg transition-shadow duration-200 animation-slide-up delay-100">
                    <div class="flex justify-between items-start mb-3">
                        <span class="bg-linear-blue text-white px-2 py-1 rounded-full text-xs font-medium">In Progress</span>
                        <button class="text-linear-gray-400 hover:text-linear-gray-600 transition-colors duration-200">
                            <!-- Placeholder Icon - More Options -->
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                            </svg>
                        </button>
                    </div>
                    <h3 class="font-semibold text-lg mb-2 hover:text-linear-blue transition-colors duration-200 cursor-pointer">Feature: Implement dark mode</h3>
                    <p class="text-sm text-linear-gray-600 mb-3">Assigned to Jane Smith</p>
                    <div class="flex items-center space-x-2 text-sm text-linear-gray-500">
                        <!-- Placeholder Icon - Comment -->
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0l3 3m-3-3h15M16.5 21v-2.25a2.25 2.25 0 00-2.25-2.25H5.25a2.25 2.25 0 00-2.25 2.25V21m16.5-2.25V9.75a2.25 2.25 0 00-2.25-2.25H5.25a2.25 2.25 0 00-2.25 2.25v11.25" />
                        </svg>
                        <span>1 comment</span>
                        <span class="ml-auto"><!-- Placeholder Avatar -->👤</span>
                    </div>
                </div>

                <!-- Issue Card 3 -->
                <div class="bg-white linear-shadow rounded-md p-4 hover:linear-shadow-lg transition-shadow duration-200 animation-slide-up delay-200">
                    <div class="flex justify-between items-start mb-3">
                        <span class="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium">Done</span>
                        <button class="text-linear-gray-400 hover:text-linear-gray-600 transition-colors duration-200">
                            <!-- Placeholder Icon - More Options -->
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                            </svg>
                        </button>
                    </div>
                    <h3 class="font-semibold text-lg mb-2 hover:text-linear-blue transition-colors duration-200 cursor-pointer">Refactor: Database queries for performance</h3>
                    <p class="text-sm text-linear-gray-600 mb-3">Completed by Team Lead</p>
                    <div class="flex items-center space-x-2 text-sm text-linear-gray-500">
                        <!-- Placeholder Icon - Comment -->
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0l3 3m-3-3h15M16.5 21v-2.25a2.25 2.25 0 00-2.25-2.25H5.25a2.25 2.25 0 00-2.25 2.25V21m16.5-2.25V9.75a2.25 2.25 0 00-2.25-2.25H5.25a2.25 2.25 0 00-2.25 2.25v11.25" />
                        </svg>
                        <span>No comments</span>
                        <span class="ml-auto"><!-- Placeholder Avatar -->👤</span>
                    </div>
                </div>
                 <!-- More Issue Cards can be added here -->
            </div>
        </main>
    </div>

</body>
</html>`
};
