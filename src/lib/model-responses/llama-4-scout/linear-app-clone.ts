import { ModelResponse } from "@/types/models";

export const linearAppClonellama_4_scout: ModelResponse = {
  id: "llama-4-scout-linear-app-clone",
  modelId: "llama-4-scout",
  prompt: "Recreate the Linear App UI using Tailwind CSS, keeping the layout and animations as close as possible. In a single-page self-contained HTML.",
  responseDate: "2025-04-05",
  type: "website",
  title: "Linear App Clone",
  description: "Llama 4 Scout's clone of Linear's issue tracking interface with minimalist design and subtle animations",
  content: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Linear App UI Recreation</title>
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
    <style>
        .animate-pulse {
            animation: pulse 2s infinite;
        }
        @keyframes pulse {
            0%, 100% {
                opacity: 1;
            }
            50% {
                opacity: 0.5;
            }
        }
    </style>
</head>
<body class="bg-gray-100">
    <!-- Header Section -->
    <header class="bg-white py-4 border-b border-gray-200">
        <nav class="container mx-auto flex justify-between items-center">
            <div class="flex items-center">
                <img src="https://linear.app/favicon.ico" alt="Linear Logo" class="w-6 h-6 mr-2">
                <h1 class="text-lg font-bold">Linear</h1>
            </div>
            <div class="flex items-center">
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">New Issue</button>
                <button class="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded ml-2">Search</button>
            </div>
        </nav>
    </header>

    <!-- Main Content Section -->
    <main class="container mx-auto p-4 mt-4 flex flex-col lg:flex-row">
        <!-- Sidebar Section -->
        <aside class="lg:w-1/4 xl:w-1/5 p-4 bg-white border border-gray-200 rounded mb-4 lg:mb-0">
            <h2 class="text-lg font-bold mb-2">Projects</h2>
            <ul>
                <li class="mb-2">
                    <a href="#" class="text-blue-500 hover:text-blue-700">Project 1</a>
                </li>
                <li class="mb-2">
                    <a href="#" class="text-blue-500 hover:text-blue-700">Project 2</a>
                </li>
                <li class="mb-2">
                    <a href="#" class="text-blue-500 hover:text-blue-700">Project 3</a>
                </li>
            </ul>
        </aside>

        <!-- Issues Section -->
        <section class="lg:w-3/4 xl:w-4/5 p-4 bg-white border border-gray-200 rounded">
            <h2 class="text-lg font-bold mb-2">Issues</h2>
            <div class="flex justify-between items-center mb-2">
                <select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                    <option>All Issues</option>
                    <option>Open Issues</option>
                    <option>Closed Issues</option>
                </select>
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">New Issue</button>
            </div>
            <div class="animate-pulse h-40 w-full bg-gray-200 rounded mb-4"></div>
            <div class="animate-pulse h-40 w-full bg-gray-200 rounded mb-4"></div>
            <div class="animate-pulse h-40 w-full bg-gray-200 rounded mb-4"></div>
        </section>
    </main>

    <!-- Footer Section -->
    <footer class="bg-white py-4 border-t border-gray-200 mt-4">
        <div class="container mx-auto text-center text-gray-600">
            &copy; 2023 Linear App
        </div>
    </footer>
</body>
</html>
`
}; 