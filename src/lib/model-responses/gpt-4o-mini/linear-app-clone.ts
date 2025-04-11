import { ModelResponse } from "@/types/models";

export const linearAppCloneGpt4oMini: ModelResponse = {
  id: "gpt-4o-mini-linear-app-clone", // model-id-slug + challenge-id
  modelId: "gpt-4o-mini", // model-id-slug
  prompt: "Recreate the Linear App UI using Tailwind CSS, keeping the layout and animations as close as possible. In a single-page self-contained HTML.", // The prompt extracted in Step 2
  responseDate: "2025-04-11", // user_provided_date
  type: "website", // Determined from content
  title: "Linear App Clone", // From the gpt-4o reference file
  description: "GPT-4o mini's response attempting to recreate the Linear App UI using Tailwind CSS.", // Write a brief description
  content: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Linear App UI Recreation</title>
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
    <style>
        /* Custom transitions for hover effects */
        .nav-link:hover {
            @apply text-blue-600;
            transition: color 0.3s;
        }

        .sidebar-link:hover {
            @apply bg-gray-200;
            transition: background-color 0.3s;
        }

        .content-area {
            /* Similar to smooth scroll */
            transition: transform 0.2s;
        }
        
        .content-area:hover {
            /* A subtle scale effect */
            transform: scale(1.01);
        }
    </style>
</head>
<body class="bg-gray-100 h-screen flex font-sans">

    <!-- Sidebar -->
    <div class="w-64 bg-white shadow-md">
        <div class="flex items-center justify-center h-16 border-b border-gray-200">
            <h1 class="text-2xl font-semibold">Linear</h1>
        </div>
        <nav class="mt-4">
            <a href="#" class="flex items-center px-4 py-2 text-gray-700 sidebar-link"><span>Dashboard</span></a>
            <a href="#" class="flex items-center px-4 py-2 text-gray-700 sidebar-link"><span>Issues</span></a>
            <a href="#" class="flex items-center px-4 py-2 text-gray-700 sidebar-link"><span>Projects</span></a>
            <a href="#" class="flex items-center px-4 py-2 text-gray-700 sidebar-link"><span>Roadmap</span></a>
            <a href="#" class="flex items-center px-4 py-2 text-gray-700 sidebar-link"><span>Settings</span></a>
        </nav>
    </div>

    <!-- Main Content Area -->
    <div class="flex-1 flex flex-col ml-4 mr-4">
        <!-- Top Navigation Bar -->
        <div class="flex items-center justify-between bg-white shadow-md h-16 px-4">
            <div>
                <h2 class="text-lg font-semibold">Dashboard</h2>
            </div>
            <div class="flex items-center">
                <input type="text" class="border rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Search...">
                <button class="ml-3 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500 transition">New Issue</button>
            </div>
        </div>

        <!-- Content Area -->
        <div class="flex-1 flex flex-wrap p-4 content-area">
            <div class="w-full md:w-1/2 lg:w-1/3 p-2">
                <div class="bg-white shadow rounded overflow-hidden">
                    <div class="p-4">
                        <h3 class="font-semibold">Issue 1</h3>
                        <p class="text-gray-600">Description of issue 1</p>
                    </div>
                </div>
            </div>
            <div class="w-full md:w-1/2 lg:w-1/3 p-2">
                <div class="bg-white shadow rounded overflow-hidden">
                    <div class="p-4">
                        <h3 class="font-semibold">Issue 2</h3>
                        <p class="text-gray-600">Description of issue 2</p>
                    </div>
                </div>
            </div>
            <div class="w-full md:w-1/2 lg:w-1/3 p-2">
                <div class="bg-white shadow rounded overflow-hidden">
                    <div class="p-4">
                        <h3 class="font-semibold">Issue 3</h3>
                        <p class="text-gray-600">Description of issue 3</p>
                    </div>
                </div>
            </div>
            <!-- Add more issues/cards as needed -->
        </div>
    </div>

</body>
</html>`
}; 