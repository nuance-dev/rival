import { ModelResponse } from "@/types/models";
import { sanitizeModelResponseContent } from "@/lib/utils";

export const linearAppClonedeepseek_v3_03_24: ModelResponse = {
  id: "deepseek-v3-03-24-linear-app-clone",
  modelId: "deepseek-v3-03-24",
  prompt: "Recreate the Linear App UI using Tailwind CSS, keeping the layout and animations as close as possible. In a single-page self-contained HTML.",
  responseDate: "2025-03-30",
  type: "website",
  title: "linear-app-clone",
  description: "DeepSeek V3 March 2024's response",
  content: sanitizeModelResponseContent(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Linear App Clone</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fade-in {
            animation: fadeIn 0.2s ease-out forwards;
        }
        
        .sidebar-item:hover .sidebar-item-indicator {
            opacity: 1;
            transform: translateX(0);
        }
        
        .sidebar-item.active .sidebar-item-indicator {
            opacity: 1;
            transform: translateX(0);
            background-color: #6366f1;
        }
        
        .sidebar-item.active {
            background-color: rgba(99, 102, 241, 0.1);
        }
        
        .issue-card:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
        }
        
        .transition-all {
            transition-property: all;
            transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
            transition-duration: 150ms;
        }
    </style>
</head>
<body class="bg-gray-50 text-gray-900 flex h-screen overflow-hidden">
    <!-- Sidebar -->
    <div class="w-16 bg-white border-r border-gray-200 flex flex-col items-center py-4">
        <div class="mb-6">
            <div class="w-10 h-10 bg-indigo-500 rounded-lg flex items-center justify-center text-white font-bold">
                L
            </div>
        </div>
        
        <div class="flex flex-col items-center space-y-4 flex-1">
            <button class="sidebar-item p-2 rounded-lg relative transition-all" title="Issues">
                <div class="sidebar-item-indicator absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-6 rounded-full opacity-0 transform -translate-x-2 transition-all"></div>
                <i class="fas fa-tasks text-gray-500 text-lg"></i>
            </button>
            
            <button class="sidebar-item p-2 rounded-lg relative transition-all active" title="Projects">
                <div class="sidebar-item-indicator absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-6 rounded-full opacity-0 transform -translate-x-2 transition-all"></div>
                <i class="fas fa-layer-group text-indigo-500 text-lg"></i>
            </button>
            
            <button class="sidebar-item p-2 rounded-lg relative transition-all" title="Roadmap">
                <div class="sidebar-item-indicator absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-6 rounded-full opacity-0 transform -translate-x-2 transition-all"></div>
                <i class="fas fa-map text-gray-500 text-lg"></i>
            </button>
            
            <button class="sidebar-item p-2 rounded-lg relative transition-all" title="Team">
                <div class="sidebar-item-indicator absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-6 rounded-full opacity-0 transform -translate-x-2 transition-all"></div>
                <i class="fas fa-users text-gray-500 text-lg"></i>
            </button>
            
            <div class="border-t border-gray-200 w-8 mx-auto my-2"></div>
            
            <button class="sidebar-item p-2 rounded-lg relative transition-all" title="Settings">
                <div class="sidebar-item-indicator absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-6 rounded-full opacity-0 transform -translate-x-2 transition-all"></div>
                <i class="fas fa-cog text-gray-500 text-lg"></i>
            </button>
        </div>
        
        <div class="mt-auto">
            <div class="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                <i class="fas fa-user text-gray-500"></i>
            </div>
        </div>
    </div>
    
    <!-- Secondary sidebar -->
    <div class="w-56 bg-white border-r border-gray-200 flex flex-col py-4">
        <div class="px-4 mb-6">
            <h2 class="text-lg font-semibold">Projects</h2>
        </div>
        
        <div class="flex-1 overflow-y-auto">
            <div class="px-4 mb-4">
                <button class="w-full flex items-center justify-between text-sm font-medium text-gray-700 hover:bg-gray-100 px-2 py-1.5 rounded">
                    <span>All projects</span>
                    <span class="text-gray-400">24</span>
                </button>
            </div>
            
            <div class="px-4 mb-2">
                <h3 class="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Teams</h3>
                
                <div class="space-y-1">
                    <button class="w-full flex items-center justify-between text-sm text-gray-700 hover:bg-gray-100 px-2 py-1.5 rounded">
                        <span class="flex items-center">
                            <span class="w-2 h-2 rounded-full bg-indigo-500 mr-2"></span>
                            Product
                        </span>
                        <span class="text-gray-400">12</span>
                    </button>
                    
                    <button class="w-full flex items-center justify-between text-sm text-gray-700 hover:bg-gray-100 px-2 py-1.5 rounded">
                        <span class="flex items-center">
                            <span class="w-2 h-2 rounded-full bg-green-500 mr-2"></span>
                            Engineering
                        </span>
                        <span class="text-gray-400">8</span>
                    </button>
                    
                    <button class="w-full flex items-center justify-between text-sm text-gray-700 hover:bg-gray-100 px-2 py-1.5 rounded">
                        <span class="flex items-center">
                            <span class="w-2 h-2 rounded-full bg-yellow-500 mr-2"></span>
                            Design
                        </span>
                        <span class="text-gray-400">4</span>
                    </button>
                </div>
            </div>
            
            <div class="px-4 mb-2 mt-6">
                <h3 class="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Favorites</h3>
                
                <div class="space-y-1">
                    <button class="w-full flex items-center text-sm text-gray-700 hover:bg-gray-100 px-2 py-1.5 rounded">
                        <i class="fas fa-star text-yellow-400 mr-2 text-xs"></i>
                        <span>Website Redesign</span>
                    </button>
                    
                    <button class="w-full flex items-center text-sm text-gray-700 hover:bg-gray-100 px-2 py-1.5 rounded">
                        <i class="fas fa-star text-yellow-400 mr-2 text-xs"></i>
                        <span>Mobile App</span>
                    </button>
                </div>
            </div>
        </div>
        
        <div class="px-4 mt-auto">
            <button class="w-full flex items-center text-sm text-gray-500 hover:text-gray-700 px-2 py-1.5 rounded">
                <i class="fas fa-plus mr-2 text-xs"></i>
                <span>Create project</span>
            </button>
        </div>
    </div>
    
    <!-- Main content -->
    <div class="flex-1 flex flex-col overflow-hidden">
        <!-- Top bar -->
        <div class="bg-white border-b border-gray-200 py-3 px-6 flex items-center justify-between">
            <div class="flex items-center">
                <h1 class="text-xl font-semibold">Website Redesign</h1>
                <div class="ml-4 flex items-center space-x-2">
                    <span class="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded">Active</span>
                    <button class="text-gray-400 hover:text-gray-600">
                        <i class="fas fa-chevron-down text-xs"></i>
                    </button>
                </div>
            </div>
            
            <div class="flex items-center space-x-4">
                <button class="text-gray-400 hover:text-gray-600">
                    <i class="fas fa-search"></i>
                </button>
                <button class="text-gray-400 hover:text-gray-600">
                    <i class="fas fa-filter"></i>
                </button>
                <button class="text-gray-400 hover:text-gray-600">
                    <i class="fas fa-ellipsis-h"></i>
                </button>
                <button class="bg-indigo-500 hover:bg-indigo-600 text-white px-3 py-1.5 rounded text-sm font-medium transition-all">
                    Create issue
                </button>
            </div>
        </div>
        
        <!-- Project navigation -->
        <div class="bg-white border-b border-gray-200 px-6">
            <nav class="flex space-x-6">
                <a href="#" class="py-3 px-1 border-b-2 border-indigo-500 text-indigo-500 font-medium text-sm">Board</a>
                <a href="#" class="py-3 px-1 border-b-2 border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 font-medium text-sm">List</a>
                <a href="#" class="py-3 px-1 border-b-2 border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 font-medium text-sm">Timeline</a>
                <a href="#" class="py-3 px-1 border-b-2 border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 font-medium text-sm">Roadmap</a>
                <a href="#" class="py-3 px-1 border-b-2 border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 font-medium text-sm">Settings</a>
            </nav>
        </div>
        
        <!-- Board content -->
        <div class="flex-1 overflow-auto bg-gray-50 p-6">
            <div class="flex space-x-4 min-w-max">
                <!-- Backlog column -->
                <div class="w-72 flex-shrink-0 animate-fade-in" style="animation-delay: 0.1s;">
                    <div class="bg-white rounded-lg shadow-sm border border-gray-200">
                        <div class="px-4 py-3 border-b border-gray-200 flex items-center justify-between">
                            <h3 class="font-medium text-gray-700">Backlog</h3>
                            <span class="text-xs text-gray-400 bg-gray-100 px-2 py-1 rounded">3</span>
                        </div>
                        <div class="p-2 space-y-2">
                            <div class="issue-card bg-white border border-gray-200 rounded-lg p-3 cursor-pointer transition-all hover:border-gray-300">
                                <div class="flex items-start justify-between mb-2">
                                    <span class="text-sm font-medium">Implement new homepage design</span>
                                    <div class="flex items-center space-x-1">
                                        <span class="text-xs text-gray-500">PRD-42</span>
                                        <button class="text-gray-300 hover:text-gray-400">
                                            <i class="fas fa-ellipsis-h text-xs"></i>
                                        </button>
                                    </div>
                                </div>
                                <div class="flex items-center justify-between">
                                    <div class="flex items-center space-x-2">
                                        <span class="w-3 h-3 rounded-full bg-yellow-400"></span>
                                        <span class="text-xs text-gray-500">Medium</span>
                                    </div>
                                    <div class="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                                        <i class="fas fa-user text-gray-500 text-xs"></i>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="issue-card bg-white border border-gray-200 rounded-lg p-3 cursor-pointer transition-all hover:border-gray-300">
                                <div class="flex items-start justify-between mb-2">
                                    <span class="text-sm font-medium">Mobile menu improvements</span>
                                    <div class="flex items-center space-x-1">
                                        <span class="text-xs text-gray-500">PRD-38</span>
                                        <button class="text-gray-300 hover:text-gray-400">
                                            <i class="fas fa-ellipsis-h text-xs"></i>
                                        </button>
                                    </div>
                                </div>
                                <div class="flex items-center justify-between">
                                    <div class="flex items-center space-x-2">
                                        <span class="w-3 h-3 rounded-full bg-green-400"></span>
                                        <span class="text-xs text-gray-500">Low</span>
                                    </div>
                                    <div class="w-6 h-6 rounded-full bg-purple-200 flex items-center justify-center overflow-hidden">
                                        <i class="fas fa-user text-purple-600 text-xs"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="px-3 py-2 border-t border-gray-200">
                            <button class="w-full text-gray-500 hover:text-gray-700 text-sm flex items-center justify-center py-1.5">
                                <i class="fas fa-plus mr-1 text-xs"></i>
                                <span>Create issue</span>
                            </button>
                        </div>
                    </div>
                </div>
                
                <!-- Todo column -->
                <div class="w-72 flex-shrink-0 animate-fade-in" style="animation-delay: 0.2s;">
                    <div class="bg-white rounded-lg shadow-sm border border-gray-200">
                        <div class="px-4 py-3 border-b border-gray-200 flex items-center justify-between">
                            <h3 class="font-medium text-gray-700">Todo</h3>
                            <span class="text-xs text-gray-400 bg-gray-100 px-2 py-1 rounded">5</span>
                        </div>
                        <div class="p-2 space-y-2">
                            <div class="issue-card bg-white border border-gray-200 rounded-lg p-3 cursor-pointer transition-all hover:border-gray-300">
                                <div class="flex items-start justify-between mb-2">
                                    <span class="text-sm font-medium">Update product images</span>
                                    <div class="flex items-center space-x-1">
                                        <span class="text-xs text-gray-500">PRD-45</span>
                                        <button class="text-gray-300 hover:text-gray-400">
                                            <i class="fas fa-ellipsis-h text-xs"></i>
                                        </button>
                                    </div>
                                </div>
                                <div class="flex items-center justify-between">
                                    <div class="flex items-center space-x-2">
                                        <span class="w-3 h-3 rounded-full bg-red-400"></span>
                                        <span class="text-xs text-gray-500">High</span>
                                    </div>
                                    <div class="w-6 h-6 rounded-full bg-blue-200 flex items-center justify-center overflow-hidden">
                                        <i class="fas fa-user text-blue-600 text-xs"></i>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="issue-card bg-white border border-gray-200 rounded-lg p-3 cursor-pointer transition-all hover:border-gray-300">
                                <div class="flex items-start justify-between mb-2">
                                    <span class="text-sm font-medium">Fix footer alignment</span>
                                    <div class="flex items-center space-x-1">
                                        <span class="text-xs text-gray-500">PRD-41</span>
                                        <button class="text-gray-300 hover:text-gray-400">
                                            <i class="fas fa-ellipsis-h text-xs"></i>
                                        </button>
                                    </div>
                                </div>
                                <div class="flex items-center justify-between">
                                    <div class="flex items-center space-x-2">
                                        <span class="w-3 h-3 rounded-full bg-yellow-400"></span>
                                        <span class="text-xs text-gray-500">Medium</span>
                                    </div>
                                    <div class="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                                        <i class="fas fa-user text-gray-500 text-xs"></i>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="issue-card bg-white border border-gray-200 rounded-lg p-3 cursor-pointer transition-all hover:border-gray-300">
                                <div class="flex items-start justify-between mb-2">
                                    <span class="text-sm font-medium">Add dark mode toggle</span>
                                    <div class="flex items-center space-x-1">
                                        <span class="text-xs text-gray-500">PRD-39</span>
                                        <button class="text-gray-300 hover:text-gray-400">
                                            <i class="fas fa-ellipsis-h text-xs"></i>
                                        </button>
                                    </div>
                                </div>
                                <div class="flex items-center justify-between">
                                    <div class="flex items-center space-x-2">
                                        <span class="w-3 h-3 rounded-full bg-green-400"></span>
                                        <span class="text-xs text-gray-500">Low</span>
                                    </div>
                                    <div class="w-6 h-6 rounded-full bg-pink-200 flex items-center justify-center overflow-hidden">
                                        <i class="fas fa-user text-pink-600 text-xs"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="px-3 py-2 border-t border-gray-200">
                            <button class="w-full text-gray-500 hover:text-gray-700 text-sm flex items-center justify-center py-1.5">
                                <i class="fas fa-plus mr-1 text-xs"></i>
                                <span>Create issue</span>
                            </button>
                        </div>
                    </div>
                </div>
                
                <!-- In Progress column -->
                <div class="w-72 flex-shrink-0 animate-fade-in" style="animation-delay: 0.3s;">
                    <div class="bg-white rounded-lg shadow-sm border border-gray-200">
                        <div class="px-4 py-3 border-b border-gray-200 flex items-center justify-between">
                            <h3 class="font-medium text-gray-700">In Progress</h3>
                            <span class="text-xs text-gray-400 bg-gray-100 px-2 py-1 rounded">2</span>
                        </div>
                        <div class="p-2 space-y-2">
                            <div class="issue-card bg-white border border-gray-200 rounded-lg p-3 cursor-pointer transition-all hover:border-gray-300">
                                <div class="flex items-start justify-between mb-2">
                                    <span class="text-sm font-medium">Redesign login page</span>
                                    <div class="flex items-center space-x-1">
                                        <span class="text-xs text-gray-500">PRD-44</span>
                                        <button class="text-gray-300 hover:text-gray-400">
                                            <i class="fas fa-ellipsis-h text-xs"></i>
                                        </button>
                                    </div>
                                </div>
                                <div class="flex items-center justify-between">
                                    <div class="flex items-center space-x-2">
                                        <span class="w-3 h-3 rounded-full bg-red-400"></span>
                                        <span class="text-xs text-gray-500">High</span>
                                    </div>
                                    <div class="w-6 h-6 rounded-full bg-green-200 flex items-center justify-center overflow-hidden">
                                        <i class="fas fa-user text-green-600 text-xs"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="px-3 py-2 border-t border-gray-200">
                            <button class="w-full text-gray-500 hover:text-gray-700 text-sm flex items-center justify-center py-1.5">
                                <i class="fas fa-plus mr-1 text-xs"></i>
                                <span>Create issue</span>
                            </button>
                        </div>
                    </div>
                </div>
                
                <!-- Done column -->
                <div class="w-72 flex-shrink-0 animate-fade-in" style="animation-delay: 0.4s;">
                    <div class="bg-white rounded-lg shadow-sm border border-gray-200">
                        <div class="px-4 py-3 border-b border-gray-200 flex items-center justify-between">
                            <h3 class="font-medium text-gray-700">Done</h3>
                            <span class="text-xs text-gray-400 bg-gray-100 px-2 py-1 rounded">7</span>
                        </div>
                        <div class="p-2 space-y-2">
                            <div class="issue-card bg-white border border-gray-200 rounded-lg p-3 cursor-pointer transition-all hover:border-gray-300">
                                <div class="flex items-start justify-between mb-2">
                                    <span class="text-sm font-medium">Update brand colors</span>
                                    <div class="flex items-center space-x-1">
                                        <span class="text-xs text-gray-500">PRD-43</span>
                                        <button class="text-gray-300 hover:text-gray-400">
                                            <i class="fas fa-ellipsis-h text-xs"></i>
                                        </button>
                                    </div>
                                </div>
                                <div class="flex items-center justify-between">
                                    <div class="flex items-center space-x-2">
                                        <span class="w-3 h-3 rounded-full bg-yellow-400"></span>
                                        <span class="text-xs text-gray-500">Medium</span>
                                    </div>
                                    <div class="w-6 h-6 rounded-full bg-orange-200 flex items-center justify-center overflow-hidden">
                                        <i class="fas fa-user text-orange-600 text-xs"></i>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="issue-card bg-white border border-gray-200 rounded-lg p-3 cursor-pointer transition-all hover:border-gray-300">
                                <div class="flex items-start justify-between mb-2">
                                    <span class="text-sm font-medium">Fix broken links</span>
                                    <div class="flex items-center space-x-1">
                                        <span class="text-xs text-gray-500">PRD-40</span>
                                        <button class="text-gray-300 hover:text-gray-400">
                                            <i class="fas fa-ellipsis-h text-xs"></i>
                                        </button>
                                    </div>
                                </div>
                                <div class="flex items-center justify-between">
                                    <div class="flex items-center space-x-2">
                                        <span class="w-3 h-3 rounded-full bg-green-400"></span>
                                        <span class="text-xs text-gray-500">Low</span>
                                    </div>
                                    <div class="w-6 h-6 rounded-full bg-teal-200 flex items-center justify-center overflow-hidden">
                                        <i class="fas fa-user text-teal-600 text-xs"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="px-3 py-2 border-t border-gray-200">
                            <button class="w-full text-gray-500 hover:text-gray-700 text-sm flex items-center justify-center py-1.5">
                                <i class="fas fa-plus mr-1 text-xs"></i>
                                <span>Create issue</span>
                            </button>
                        </div>
                    </div>
                </div>
                
                <!-- Add new column -->
                <div class="w-72 flex-shrink-0 animate-fade-in" style="animation-delay: 0.5s;">
                    <button class="w-full h-full flex items-center justify-center rounded-lg border-2 border-dashed border-gray-300 hover:border-gray-400 text-gray-400 hover:text-gray-500 transition-all">
                        <i class="fas fa-plus mr-2"></i>
                        <span>Add column</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
    
    <!-- Command palette (hidden) -->
    <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 hidden">
        <div class="bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[80vh] overflow-hidden">
            <div class="border-b border-gray-200 px-4 py-3 flex items-center">
                <i class="fas fa-search text-gray-400 mr-3"></i>
                <input type="text" placeholder="Type a command or search..." class="flex-1 outline-none text-gray-700 placeholder-gray-400">
                <span class="text-xs text-gray-400 bg-gray-100 px-2 py-1 rounded">ESC</span>
            </div>
            <div class="divide-y divide-gray-200 overflow-y-auto">
                <div class="px-4 py-3 hover:bg-gray-50 cursor-pointer">
                    <div class="text-sm font-medium text-gray-700">Create new issue</div>
                    <div class="text-xs text-gray-500">Create a new issue in the current project</div>
                </div>
                <div class="px-4 py-3 hover:bg-gray-50 cursor-pointer">
                    <div class="text-sm font-medium text-gray-700">Switch project</div>
                    <div class="text-xs text-gray-500">Navigate to a different project</div>
                </div>
                <div class="px-4 py-3 hover:bg-gray-50 cursor-pointer">
                    <div class="text-sm font-medium text-gray-700">Open roadmap</div>
                    <div class="text-xs text-gray-500">View project roadmap</div>
                </div>
            </div>
        </div>
    </div>
    
    <script>
        // Simple animation trigger
        document.addEventListener('DOMContentLoaded', function() {
            // Simulate command palette with CMD+K
            document.addEventListener('keydown', function(e) {
                if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
                    e.preventDefault();
                    const palette = document.querySelector('.fixed.hidden');
                    palette.classList.toggle('hidden');
                }
                
                if (e.key === 'Escape') {
                    const palette = document.querySelector('.fixed:not(.hidden)');
                    if (palette) palette.classList.add('hidden');
                }
            });
            
            // Close palette when clicking outside
            document.addEventListener('click', function(e) {
                const palette = document.querySelector('.fixed:not(.hidden)');
                if (palette && !palette.contains(e.target)) {
                    palette.classList.add('hidden');
                }
            });
        });
    </script>
</body>
</html>`)
}; 