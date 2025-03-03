import { ModelResponse } from "@/types/models";

export const linearAppCloneclaude_3_5_sonnet: ModelResponse = {
  id: "claude-3-5-sonnet-linear-app-clone",
  modelId: "claude-3-5-sonnet",
  prompt: "Recreate the Linear App UI using Tailwind CSS, keeping the layout and animations as close as possible. In a single-page self-contained HTML.",
  responseDate: "2025-02-26",
  type: "website"  ,
  title: "Linear App Clone"  ,
  description: "Claude 3.5 Sonnet's response to the Tests an AI's ability to replicate an existing UI with Tailwind CSS",
  content: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Linear App Clone</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        'linear-dark': '#101112',
                        'linear-gray': '#1D1E1F',
                        'linear-border': '#26282C',
                    }
                }
            }
        }
    </script>
    <style>
        @keyframes slideIn {
            from { transform: translateX(-100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
        .slide-in {
            animation: slideIn 0.3s ease-out;
        }
        .hover-gradient:hover {
            background: linear-gradient(to right, rgba(255,255,255,0.1), transparent);
        }
    </style>
</head>
<body class="bg-linear-dark text-gray-200 min-h-screen">
    <div class="flex h-screen">
        <!-- Sidebar -->
        <aside class="w-64 bg-linear-gray border-r border-linear-border p-4">
            <div class="flex items-center space-x-2 mb-8">
                <div class="w-6 h-6 rounded bg-white"></div>
                <span class="font-semibold">Linear Clone</span>
            </div>
            
            <!-- Navigation -->
            <nav class="space-y-1">
                <a href="#" class="flex items-center space-x-3 px-3 py-2 rounded hover-gradient slide-in">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                    </svg>
                    <span>Home</span>
                </a>
                <a href="#" class="flex items-center space-x-3 px-3 py-2 rounded hover-gradient slide-in" style="animation-delay: 50ms;">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                    </svg>
                    <span>Issues</span>
                </a>
                <a href="#" class="flex items-center space-x-3 px-3 py-2 rounded hover-gradient slide-in" style="animation-delay: 100ms;">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                    </svg>
                    <span>Views</span>
                </a>
            </nav>
        </aside>

        <!-- Main Content -->
        <main class="flex-1 overflow-auto">
            <!-- Header -->
            <header class="h-14 border-b border-linear-border flex items-center justify-between px-6">
                <div class="flex items-center space-x-4">
                    <h1 class="text-lg font-semibold">All Issues</h1>
                    <button class="px-3 py-1 text-sm bg-linear-gray rounded hover:bg-opacity-80 transition-colors">
                        New Issue
                    </button>
                </div>
                <div class="flex items-center space-x-4">
                    <div class="relative">
                        <input type="text" placeholder="Search..." class="bg-linear-gray px-4 py-1.5 rounded text-sm w-64 focus:outline-none focus:ring-1 focus:ring-gray-500">
                    </div>
                    <div class="w-8 h-8 rounded-full bg-gray-600"></div>
                </div>
            </header>

            <!-- Content -->
            <div class="p-6">
                <!-- Issue List -->
                <div class="space-y-2">
                    <div class="bg-linear-gray p-4 rounded hover:bg-opacity-80 transition-colors cursor-pointer slide-in">
                        <div class="flex items-center justify-between">
                            <div class="flex items-center space-x-3">
                                <div class="w-2 h-2 rounded-full bg-blue-500"></div>
                                <span>Implement new feature</span>
                            </div>
                            <span class="text-gray-500 text-sm">2d ago</span>
                        </div>
                    </div>
                    <div class="bg-linear-gray p-4 rounded hover:bg-opacity-80 transition-colors cursor-pointer slide-in" style="animation-delay: 50ms;">
                        <div class="flex items-center justify-between">
                            <div class="flex items-center space-x-3">
                                <div class="w-2 h-2 rounded-full bg-green-500"></div>
                                <span>Fix navigation bug</span>
                            </div>
                            <span class="text-gray-500 text-sm">3d ago</span>
                        </div>
                    </div>
                    <div class="bg-linear-gray p-4 rounded hover:bg-opacity-80 transition-colors cursor-pointer slide-in" style="animation-delay: 100ms;">
                        <div class="flex items-center justify-between">
                            <div class="flex items-center space-x-3">
                                <div class="w-2 h-2 rounded-full bg-yellow-500"></div>
                                <span>Update documentation</span>
                            </div>
                            <span class="text-gray-500 text-sm">5d ago</span>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
</body>
</html>`
};
