import { ModelResponse } from "@/types/models";
import { sanitizeModelResponseContent } from "@/lib/utils";

export const linearAppClonellama_4_maverick: ModelResponse = {
  id: "llama-4-maverick-linear-app-clone",
  modelId: "llama-4-maverick",
  prompt: "Recreate the Linear App UI using Tailwind CSS, keeping the layout and animations as close as possible. In a single-page self-contained HTML.",
  responseDate: "2025-04-05",
  type: "website",
  title: "Linear App Clone",
  description: "Llama 4 Maverick's clone of Linear's issue tracking interface with minimalist design and subtle animations",
  content: sanitizeModelResponseContent(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Linear App UI</title>
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
    <style>
        /* Add some custom styles to enhance the recreation */
        .animate-fade-in {
            animation: fade-in 0.3s ease-in-out;
        }

        @keyframes fade-in {
            from {
                opacity: 0;
            }
            to {
                opacity: 1;
            }
        }

        .animate-slide-in {
            animation: slide-in 0.3s ease-in-out;
        }

        @keyframes slide-in {
            from {
                transform: translateX(100%);
            }
            to {
                transform: translateX(0);
            }
        }
    </style>
</head>
<body class="bg-gray-100 h-screen">
    <div class="flex h-full">
        <!-- Sidebar -->
        <div class="w-64 bg-white shadow-md flex flex-col justify-between">
            <div class="p-4">
                <h2 class="text-lg font-bold mb-4">Linear</h2>
                <ul>
                    <li class="py-2">
                        <a href="#" class="text-gray-600 hover:text-gray-900 flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                            </svg>
                            Dashboard
                        </a>
                    </li>
                    <li class="py-2">
                        <a href="#" class="text-gray-600 hover:text-gray-900 flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" />
                            </svg>
                            Issues
                        </a>
                    </li>
                    <li class="py-2">
                        <a href="#" class="text-gray-600 hover:text-gray-900 flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clip-rule="evenodd" />
                            </svg>
                            Documents
                        </a>
                    </li>
                </ul>
            </div>
            <div class="p-4 border-t border-gray-200">
                <button class="bg-gray-100 hover:bg-gray-200 text-gray-600 py-2 px-4 rounded-md w-full flex items-center justify-between">
                    <span>Settings</span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                    </svg>
                </button>
            </div>
        </div>
        <!-- Main Content -->
        <div class="flex-1 flex flex-col">
            <!-- Topbar -->
            <div class="h-16 bg-white shadow-md flex justify-between items-center px-4">
                <h1 class="text-lg font-bold">Issues</h1>
                <div class="flex items-center">
                    <button class="bg-gray-100 hover:bg-gray-200 text-gray-600 py-2 px-4 rounded-md mr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
                        </svg>
                    </button>
                    <button class="bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-md">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" />
                        </svg>
                        New Issue
                    </button>
                </div>
            </div>
            <!-- Issues List -->
            <div class="flex-1 p-4 overflow-y-auto">
                <ul class="animate-fade-in">
                    <li class="bg-white shadow-md p-4 mb-4 rounded-md">
                        <h2 class="text-lg font-bold mb-2">Issue #1</h2>
                        <p class="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>
                        <div class="flex items-center justify-between">
                            <span class="text-gray-600">Created 2 hours ago</span>
                            <button class="bg-gray-100 hover:bg-gray-200 text-gray-600 py-2 px-4 rounded-md">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                                </svg>
                            </button>
                        </div>
                    </li>
                    <li class="bg-white shadow-md p-4 mb-4 rounded-md">
                        <h2 class="text-lg font-bold mb-2">Issue #2</h2>
                        <p class="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>
                        <div class="flex items-center justify-between">
                            <span class="text-gray-600">Created 2 hours ago</span>
                            <button class="bg-gray-100 hover:bg-gray-200 text-gray-600 py-2 px-4 rounded-md">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                                </svg>
                            </button>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <!-- Right Sidebar -->
        <div class="w-80 bg-white shadow-md p-4 animate-slide-in" style="display: none;">
            <h2 class="text-lg font-bold mb-4">Issue Details</h2>
            <form>
                <label class="block text-gray-600 mb-2" for="title">Title</label>
                <input class="bg-gray-100 border border-gray-200 rounded-md py-2 px-4 w-full mb-4" type="text" id="title" />
                <label class="block text-gray-600 mb-2" for="description">Description</label>
                <textarea class="bg-gray-100 border border-gray-200 rounded-md py-2 px-4 w-full mb-4" id="description"></textarea>
                <button class="bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-md w-full">
                    Save Changes
                </button>
            </form>
        </div>
    </div>

    <script>
        // Add event listener to issue list items
        document.querySelectorAll('.issues-list li').forEach((item) => {
            item.addEventListener('click', () => {
                // Show right sidebar
                document.querySelector('.right-sidebar').style.display = 'block';
            });
        });

        // Add event listener to save changes button
        document.querySelector('.right-sidebar button[type="submit"]').addEventListener('click', (e) => {
            e.preventDefault();
            // Hide right sidebar
            document.querySelector('.right-sidebar').style.display = 'none';
        });
    </script>
</body>
</html>
`)
}; 