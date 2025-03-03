import { ModelResponse } from "@/types/models";

export const linearAppClonegrok_3: ModelResponse = {
  id: "grok-3-linear-app-clone",
  modelId: "grok-3",
  prompt: "Recreate the Linear App UI using Tailwind CSS, keeping the layout and animations as close as possible. In a single-page self-contained HTML.",
  responseDate: "2025-03-01",
  type: "website",
  title: "Linear App Clone",
  description: "Grok 3's response to the Tests an AI's ability to replicate an existing UI with Tailwind CSS",
  content: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Linear App UI Recreation</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        /* Custom animations */
        @keyframes slideIn {
            from { transform: translateX(-100%); }
            to { transform: translateX(0); }
        }
        
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
    </style>
</head>
<body class="bg-gray-900 text-gray-100 font-sans antialiased">
    <div class="flex h-screen overflow-hidden">
        <!-- Sidebar -->
        <div class="w-64 bg-gray-800 flex-shrink-0 transform transition-transform duration-300 animate-[slideIn_0.3s_ease-out]">
            <div class="p-4">
                <div class="flex items-center mb-8">
                    <div class="w-8 h-8 bg-indigo-500 rounded-full mr-2"></div>
                    <span class="text-xl font-semibold">Linear</span>
                </div>
                
                <nav class="space-y-2">
                    <a href="#" class="flex items-center p-2 hover:bg-gray-700 rounded-lg transition-colors duration-200">
                        <span class="w-5 h-5 bg-gray-500 rounded mr-2"></span>
                        Inbox
                    </a>
                    <a href="#" class="flex items-center p-2 bg-gray-700 rounded-lg transition-colors duration-200">
                        <span class="w-5 h-5 bg-indigo-500 rounded mr-2"></span>
                        Active
                    </a>
                    <a href="#" class="flex items-center p-2 hover:bg-gray-700 rounded-lg transition-colors duration-200">
                        <span class="w-5 h-5 bg-gray-500 rounded mr-2"></span>
                        Backlog
                    </a>
                    <a href="#" class="flex items-center p-2 hover:bg-gray-700 rounded-lg transition-colors duration-200">
                        <span class="w-5 h-5 bg-gray-500 rounded mr-2"></span>
                        Settings
                    </a>
                </nav>
            </div>
        </div>

        <!-- Main Content -->
        <div class="flex-1 flex flex-col overflow-hidden">
            <!-- Top Bar -->
            <div class="bg-gray-800 px-6 py-4 flex items-center justify-between border-b border-gray-700">
                <div class="flex items-center space-x-4">
                    <h1 class="text-xl font-semibold">Active Issues</h1>
                    <span class="bg-gray-700 text-gray-300 px-2 py-1 rounded-full text-sm">12</span>
                </div>
                <div class="flex items-center space-x-4">
                    <button class="p-2 hover:bg-gray-700 rounded-lg transition-colors duration-200">
                        <span class="w-5 h-5 bg-gray-500 rounded inline-block"></span>
                    </button>
                    <button class="bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-600 transition-colors duration-200">
                        New Issue
                    </button>
                </div>
            </div>

            <!-- Issues List -->
            <div class="flex-1 overflow-y-auto p-6 space-y-4 animate-[fadeIn_0.5s_ease-out]">
                <div class="bg-gray-800 p-4 rounded-lg hover:bg-gray-750 transition-all duration-200 transform hover:-translate-y-0.5 cursor-pointer">
                    <div class="flex justify-between items-start">
                        <div>
                            <h3 class="font-medium text-indigo-400">LIN-123</h3>
                            <p class="mt-1">Implement user authentication</p>
                        </div>
                        <span class="bg-gray-700 text-gray-300 px-2 py-1 rounded text-sm">High</span>
                    </div>
                    <div class="mt-2 flex items-center space-x-2 text-gray-400 text-sm">
                        <span class="w-4 h-4 bg-gray-600 rounded-full"></span>
                        <span>In Progress</span>
                    </div>
                </div>

                <div class="bg-gray-800 p-4 rounded-lg hover:bg-gray-750 transition-all duration-200 transform hover:-translate-y-0.5 cursor-pointer">
                    <div class="flex justify-between items-start">
                        <div>
                            <h3 class="font-medium text-indigo-400">LIN-124</h3>
                            <p class="mt-1">Design new landing page</p>
                        </div>
                        <span class="bg-gray-700 text-gray-300 px-2 py-1 rounded text-sm">Medium</span>
                    </div>
                    <div class="mt-2 flex items-center space-x-2 text-gray-400 text-sm">
                        <span class="w-4 h-4 bg-gray-600 rounded-full"></span>
                        <span>Todo</span>
                    </div>
                </div>

                <div class="bg-gray-800 p-4 rounded-lg hover:bg-gray-750 transition-all duration-200 transform hover:-translate-y-0.5 cursor-pointer">
                    <div class="flex justify-between items-start">
                        <div>
                            <h3 class="font-medium text-indigo-400">LIN-125</h3>
                            <p class="mt-1">Fix payment processing bug</p>
                        </div>
                        <span class="bg-red-900 text-red-200 px-2 py-1 rounded text-sm">Urgent</span>
                    </div>
                    <div class="mt-2 flex items-center space-x-2 text-gray-400 text-sm">
                        <span class="w-4 h-4 bg-gray-600 rounded-full"></span>
                        <span>In Progress</span>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script>
        // Add subtle interactivity
        document.querySelectorAll('.hover\\:bg-gray-750').forEach(item => {
            item.addEventListener('mouseenter', () => {
                item.classList.add('shadow-lg');
            });
            item.addEventListener('mouseleave', () => {
                item.classList.remove('shadow-lg');
            });
        });
    </script>
</body>
</html>`
}; 