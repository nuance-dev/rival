import { ModelResponse } from "@/types/models";
import { sanitizeModelResponseContent } from "@/lib/utils";

export const linearAppClonedeepseek_r1: ModelResponse = {
  id: "deepseek-r1-linear-app-clone",
  modelId: "deepseek-r1",
  prompt: "Recreate the Linear App UI using Tailwind CSS, keeping the layout and animations as close as possible. In a single-page self-contained HTML.",
  responseDate: "2025-02-27",
  type: "website",
  title: "Linear App Clone",
  description: "Deepseek R1's response to the Tests an AI's ability to replicate an existing UI with Tailwind CSS",
  content: sanitizeModelResponseContent(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Linear Clone</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://unpkg.com/@heroicons/v1.0.1/css/heroicons.css" rel="stylesheet">
</head>
<body class="bg-gray-50">
    <div class="flex min-h-screen">
        <!-- Sidebar -->
        <aside class="w-64 bg-white border-r border-gray-200 flex flex-col">
            <div class="p-4">
                <div class="flex items-center space-x-2">
                    <div class="w-6 h-6 bg-blue-600 rounded"></div>
                    <span class="text-lg font-semibold">Linear</span>
                </div>
            </div>
            
            <nav class="flex-1 px-3 space-y-1">
                <a href="#" class="flex items-center space-x-2 px-2 py-1.5 rounded-lg bg-gray-100 text-gray-900 group">
                    <svg class="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
                    </svg>
                    <span class="text-sm">Home</span>
                </a>
                
                <a href="#" class="flex items-center space-x-2 px-2 py-1.5 rounded-lg hover:bg-gray-100 text-gray-700 group transition-colors duration-200">
                    <svg class="w-5 h-5 text-gray-400 group-hover:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
                    </svg>
                    <span class="text-sm">Projects</span>
                </a>
                
                <a href="#" class="flex items-center space-x-2 px-2 py-1.5 rounded-lg hover:bg-gray-100 text-gray-700 group transition-colors duration-200">
                    <svg class="w-5 h-5 text-gray-400 group-hover:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                    </svg>
                    <span class="text-sm">Team</span>
                </a>
            </nav>
            
            <div class="p-4 border-t border-gray-200">
                <div class="flex items-center space-x-3">
                    <img src="https://i.pravatar.cc/150?img=3" class="w-8 h-8 rounded-full" alt="Avatar">
                    <div>
                        <p class="text-sm font-medium">Jane Cooper</p>
                        <p class="text-xs text-gray-500">jane@linear.app</p>
                    </div>
                </div>
            </div>
        </aside>

        <!-- Main Content -->
        <main class="flex-1">
            <!-- Header -->
            <header class="flex items-center justify-between px-8 py-4 border-b border-gray-200">
                <h1 class="text-2xl font-semibold">Active Issues</h1>
                <div class="flex items-center space-x-4">
                    <button class="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>
                        </svg>
                        <span>New Issue</span>
                    </button>
                    <div class="w-8 h-8 bg-gray-100 rounded-full"></div>
                </div>
            </header>

            <!-- Issues List -->
            <div class="px-8 py-6">
                <div class="bg-white rounded-lg border border-gray-200">
                    <!-- Issue Item -->
                    <div class="group flex items-center px-6 py-4 border-b border-gray-200 hover:bg-gray-50 transition-colors duration-200">
                        <input type="checkbox" class="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500">
                        <div class="ml-4 flex-1">
                            <div class="flex items-center space-x-3">
                                <span class="text-sm font-medium">Implement user authentication</span>
                                <span class="px-2 py-1 text-xs bg-green-100 text-green-800 rounded-full">In Progress</span>
                            </div>
                            <div class="mt-1 flex items-center space-x-4 text-sm text-gray-500">
                                <span>#LNR-123</span>
                                <span>Updated 2h ago</span>
                            </div>
                        </div>
                        <div class="flex items-center space-x-4">
                            <div class="flex -space-x-2">
                                <img src="https://i.pravatar.cc/150?img=1" class="w-6 h-6 rounded-full border-2 border-white">
                                <img src="https://i.pravatar.cc/150?img=2" class="w-6 h-6 rounded-full border-2 border-white">
                            </div>
                            <div class="flex items-center space-x-1 text-gray-400">
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
                                </svg>
                                <span class="text-sm">3</span>
                            </div>
                        </div>
                    </div>

                    <!-- More issue items... -->
                </div>
            </div>
        </main>
    </div>
</body>
</html>`)
};
