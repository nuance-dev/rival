import { ModelResponse } from "@/types/models";

export const linearAppCloneclaude_3_7_sonnet: ModelResponse = {
  id: "claude-3-7-sonnet-linear-app-clone",
  modelId: "claude-3-7-sonnet",
  prompt: "Recreate the Linear App UI using Tailwind CSS, keeping the layout and animations as close as possible. In a single-page self-contained HTML.",
  responseDate: "2025-02-27",
  type: "website",
  title: "Linear App Clone",
  description: "Claude 3.7 Sonnet's response to the Tests an AI's ability to replicate an existing UI with Tailwind CSS",
  content: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Linear App UI Clone</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        'linear-bg': '#101112',
                        'linear-sidebar': '#151617',
                        'linear-hover': '#1e1f20',
                        'linear-border': '#26282b',
                        'linear-text': '#8a8f98',
                        'linear-accent': '#5e6ad2',
                        'linear-card': '#1a1b1c',
                    },
                    animation: {
                        'fade-in': 'fadeIn 0.3s ease-in-out',
                        'slide-in': 'slideIn 0.3s ease-in-out',
                    },
                    keyframes: {
                        fadeIn: {
                            '0%': { opacity: '0' },
                            '100%': { opacity: '1' },
                        },
                        slideIn: {
                            '0%': { transform: 'translateY(10px)', opacity: '0' },
                            '100%': { transform: 'translateY(0)', opacity: '1' },
                        }
                    }
                }
            }
        }
    </script>
    <style>
        body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
        }
        
        /* Custom scrollbar */
        ::-webkit-scrollbar {
            width: 6px;
            height: 6px;
        }
        
        ::-webkit-scrollbar-track {
            background: transparent;
        }
        
        ::-webkit-scrollbar-thumb {
            background: #3a3d40;
            border-radius: 3px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
            background: #4a4d50;
        }
        
        .task-item:hover .task-actions {
            opacity: 1;
        }
        
        .sidebar-item:hover {
            background-color: rgba(255, 255, 255, 0.05);
        }
        
        .hover-card:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
        }
    </style>
</head>
<body class="bg-linear-bg text-gray-200 h-screen flex overflow-hidden">
    <!-- Sidebar -->
    <div class="w-56 bg-linear-sidebar border-r border-linear-border flex flex-col h-full">
        <!-- Workspace selector -->
        <div class="p-3 border-b border-linear-border flex items-center">
            <div class="w-5 h-5 rounded bg-linear-accent flex items-center justify-center text-xs font-bold mr-2">L</div>
            <span class="font-medium">Linear Team</span>
            <svg class="ml-auto w-4 h-4 text-linear-text" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
        </div>
        
        <!-- Sidebar navigation -->
        <div class="overflow-y-auto flex-1">
            <div class="py-2">
                <div class="sidebar-item flex items-center px-3 py-1.5 text-linear-text hover:text-white transition-colors rounded-md mx-2 cursor-pointer">
                    <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                    </svg>
                    <span>Home</span>
                </div>
                
                <div class="sidebar-item flex items-center px-3 py-1.5 text-white bg-linear-accent rounded-md mx-2 cursor-pointer">
                    <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                    </svg>
                    <span>Issues</span>
                </div>
                
                <div class="sidebar-item flex items-center px-3 py-1.5 text-linear-text hover:text-white transition-colors rounded-md mx-2 cursor-pointer">
                    <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                    </svg>
                    <span>Roadmap</span>
                </div>
                
                <div class="sidebar-item flex items-center px-3 py-1.5 text-linear-text hover:text-white transition-colors rounded-md mx-2 cursor-pointer">
                    <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <span>Backlog</span>
                </div>
                
                <div class="sidebar-item flex items-center px-3 py-1.5 text-linear-text hover:text-white transition-colors rounded-md mx-2 cursor-pointer">
                    <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                    </svg>
                    <span>Analytics</span>
                </div>
            </div>
            
            <div class="px-3 pt-4 pb-2">
                <div class="text-xs font-medium text-linear-text uppercase tracking-wider">Teams</div>
            </div>
            
            <div class="py-1">
                <div class="sidebar-item flex items-center px-3 py-1.5 text-linear-text hover:text-white transition-colors rounded-md mx-2 cursor-pointer">
                    <div class="w-4 h-4 rounded bg-purple-500 mr-2"></div>
                    <span>Product</span>
                </div>
                
                <div class="sidebar-item flex items-center px-3 py-1.5 text-linear-text hover:text-white transition-colors rounded-md mx-2 cursor-pointer">
                    <div class="w-4 h-4 rounded bg-blue-500 mr-2"></div>
                    <span>Engineering</span>
                </div>
                
                <div class="sidebar-item flex items-center px-3 py-1.5 text-linear-text hover:text-white transition-colors rounded-md mx-2 cursor-pointer">
                    <div class="w-4 h-4 rounded bg-green-500 mr-2"></div>
                    <span>Design</span>
                </div>
            </div>
        </div>
        
        <!-- User profile -->
        <div class="p-3 border-t border-linear-border flex items-center">
            <div class="w-7 h-7 rounded-full bg-gray-700 flex items-center justify-center text-xs font-bold mr-2">JS</div>
            <div>
                <div class="text-sm font-medium">John Smith</div>
                <div class="text-xs text-linear-text">john@example.com</div>
            </div>
        </div>
    </div>
    
    <!-- Main content -->
    <div class="flex-1 flex flex-col overflow-hidden">
        <!-- Header -->
        <div class="h-14 border-b border-linear-border flex items-center px-4">
            <div class="flex items-center">
                <h1 class="text-xl font-semibold">Issues</h1>
                <div class="ml-4 flex space-x-1">
                    <button class="px-2 py-1 text-sm bg-linear-hover text-linear-text rounded hover:text-white transition-colors">
                        All issues
                    </button>
                    <button class="px-2 py-1 text-sm bg-linear-hover text-linear-text rounded hover:text-white transition-colors">
                        Active
                    </button>
                    <button class="px-2 py-1 text-sm bg-linear-hover text-linear-text rounded hover:text-white transition-colors">
                        Backlog
                    </button>
                </div>
            </div>
            
            <div class="ml-auto flex items-center space-x-2">
                <div class="relative">
                    <input type="text" placeholder="Search..." class="bg-linear-hover text-white px-3 py-1.5 rounded text-sm w-64 focus:outline-none focus:ring-1 focus:ring-linear-accent">
                    <div class="absolute right-3 top-1/2 transform -translate-y-1/2 text-linear-text">
                        <span class="text-xs border border-linear-text rounded px-1">⌘K</span>
                    </div>
                </div>
                
                <button class="p-1.5 rounded hover:bg-linear-hover text-linear-text hover:text-white transition-colors">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"></path>
                    </svg>
                </button>
                
                <button class="bg-linear-accent hover:bg-opacity-90 text-white px-3 py-1.5 rounded text-sm font-medium transition-colors">
                    New Issue
                </button>
            </div>
        </div>
        
        <!-- Content area -->
        <div class="flex-1 overflow-auto p-4">
            <!-- Filters -->
            <div class="flex items-center mb-4 text-sm">
                <div class="flex items-center mr-4">
                    <span class="text-linear-text mr-2">View:</span>
                    <button class="flex items-center bg-linear-hover px-2 py-1 rounded text-white">
                        List
                        <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                    </button>
                </div>
                
                <div class="flex items-center mr-4">
                    <span class="text-linear-text mr-2">Group by:</span>
                    <button class="flex items-center bg-linear-hover px-2 py-1 rounded text-white">
                        Status
                        <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                    </button>
                </div>
                
                <div class="flex items-center">
                    <span class="text-linear-text mr-2">Sort by:</span>
                    <button class="flex items-center bg-linear-hover px-2 py-1 rounded text-white">
                        Priority
                        <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                    </button>
                </div>
                
                <div class="ml-auto flex items-center space-x-2">
                    <button class="p-1 rounded hover:bg-linear-hover text-linear-text hover:text-white transition-colors">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"></path>
                        </svg>
                    </button>
                    
                    <button class="p-1 rounded hover:bg-linear-hover text-linear-text hover:text-white transition-colors">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>
            </div>
            
            <!-- Issue groups -->
            <div class="space-y-6 animate-fade-in">
                <!-- Todo group -->
                <div>
                    <div class="flex items-center mb-2">
                        <div class="w-2 h-2 rounded-full bg-gray-400 mr-2"></div>
                        <h3 class="font-medium">Todo</h3>
                        <span class="ml-2 text-linear-text text-sm">3</span>
                    </div>
                    
                    <div class="space-y-1 animate-slide-in">
                        <!-- Task items -->
                        <div class="task-item group bg-linear-card hover:bg-linear-hover p-3 rounded-md border border-linear-border transition-all cursor-pointer">
                            <div class="flex items-start">
                                <div class="flex-shrink-0 mt-0.5">
                                    <div class="w-4 h-4 rounded-full border border-gray-500"></div>
                                </div>
                                <div class="ml-3 flex-1">
                                    <div class="flex items-center">
                                        <span class="text-xs bg-purple-900 text-purple-300 px-1.5 py-0.5 rounded mr-2">PROD-123</span>
                                        <span class="font-medium">Implement new authentication flow</span>
                                    </div>
                                    <div class="mt-1 text-sm text-linear-text">Update the login and registration screens with the new design</div>
                                </div>
                                <div class="task-actions opacity-0 transition-opacity flex items-center space-x-1 ml-2">
                                    <div class="w-6 h-6 rounded-full bg-yellow-500 flex items-center justify-center text-xs" title="Medium priority">M</div>
                                    <div class="w-6 h-6 rounded-full bg-gray-700 flex items-center justify-center text-xs">JS</div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="task-item group bg-linear-card hover:bg-linear-hover p-3 rounded-md border border-linear-border transition-all cursor-pointer">
                            <div class="flex items-start">
                                <div class="flex-shrink-0 mt-0.5">
                                    <div class="w-4 h-4 rounded-full border border-gray-500"></div>
                                </div>
                                <div class="ml-3 flex-1">
                                    <div class="flex items-center">
                                        <span class="text-xs bg-blue-900 text-blue-300 px-1.5 py-0.5 rounded mr-2">ENG-456</span>
                                        <span class="font-medium">Fix API response caching issue</span>
                                    </div>
                                    <div class="mt-1 text-sm text-linear-text">Responses are not being properly cached according to headers</div>
                                </div>
                                <div class="task-actions opacity-0 transition-opacity flex items-center space-x-1 ml-2">
                                    <div class="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center text-xs" title="High priority">H</div>
                                    <div class="w-6 h-6 rounded-full bg-gray-700 flex items-center justify-center text-xs">JS</div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="task-item group bg-linear-card hover:bg-linear-hover p-3 rounded-md border border-linear-border transition-all cursor-pointer">
                            <div class="flex items-start">
                                <div class="flex-shrink-0 mt-0.5">
                                    <div class="w-4 h-4 rounded-full border border-gray-500"></div>
                                </div>
                                <div class="ml-3 flex-1">
                                    <div class="flex items-center">
                                        <span class="text-xs bg-green-900 text-green-300 px-1.5 py-0.5 rounded mr-2">DES-789</span>
                                        <span class="font-medium">Update dashboard layout for mobile</span>
                                    </div>
                                    <div class="mt-1 text-sm text-linear-text">Current layout breaks on smaller screens</div>
                                </div>
                                <div class="task-actions opacity-0 transition-opacity flex items-center space-x-1 ml-2">
                                    <div class="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-xs" title="Low priority">L</div>
                                    <div class="w-6 h-6 rounded-full bg-gray-700 flex items-center justify-center text-xs">JS</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- In Progress group -->
                <div>
                    <div class="flex items-center mb-2">
                        <div class="w-2 h-2 rounded-full bg-blue-400 mr-2"></div>
                        <h3 class="font-medium">In Progress</h3>
                        <span class="ml-2 text-linear-text text-sm">2</span>
                    </div>
                    
                    <div class="space-y-1 animate-slide-in">
                        <div class="task-item group bg-linear-card hover:bg-linear-hover p-3 rounded-md border border-linear-border transition-all cursor-pointer">
                            <div class="flex items-start">
                                <div class="flex-shrink-0 mt-0.5">
                                    <div class="w-4 h-4 rounded-full border border-blue-500 flex items-center justify-center">
                                        <div class="w-2 h-2 rounded-full bg-blue-500"></div>
                                    </div>
                                </div>
                                <div class="ml-3 flex-1">
                                    <div class="flex items-center">
                                        <span class="text-xs bg-purple-900 text-purple-300 px-1.5 py-0.5 rounded mr-2">PROD-124</span>
                                        <span class="font-medium">Implement dark mode toggle</span>
                                    </div>
                                    <div class="mt-1 text-sm text-linear-text">Add ability to switch between light and dark themes</div>
                                </div>
                                <div class="task-actions opacity-0 transition-opacity flex items-center space-x-1 ml-2">
                                    <div class="w-6 h-6 rounded-full bg-yellow-500 flex items-center justify-center text-xs" title="Medium priority">M</div>
                                    <div class="w-6 h-6 rounded-full bg-gray-700 flex items-center justify-center text-xs">JS</div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="task-item group bg-linear-card hover:bg-linear-hover p-3 rounded-md border border-linear-border transition-all cursor-pointer">
                            <div class="flex items-start">
                                <div class="flex-shrink-0 mt-0.5">
                                    <div class="w-4 h-4 rounded-full border border-blue-500 flex items-center justify-center">
                                        <div class="w-2 h-2 rounded-full bg-blue-500"></div>
                                    </div>
                                </div>
                                <div class="ml-3 flex-1">
                                    <div class="flex items-center">
                                        <span class="text-xs bg-blue-900 text-blue-300 px-1.5 py-0.5 rounded mr-2">ENG-457</span>
                                        <span class="font-medium">Optimize image loading performance</span>
                                    </div>
                                    <div class="mt-1 text-sm text-linear-text">Implement lazy loading and responsive images</div>
                                </div>
                                <div class="task-actions opacity-0 transition-opacity flex items-center space-x-1 ml-2">
                                    <div class="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center text-xs" title="High priority">H</div>
                                    <div class="w-6 h-6 rounded-full bg-gray-700 flex items-center justify-center text-xs">JS</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Done group -->
                <div>
                    <div class="flex items-center mb-2">
                        <div class="w-2 h-2 rounded-full bg-green-400 mr-2"></div>
                        <h3 class="font-medium">Done</h3>
                        <span class="ml-2 text-linear-text text-sm">2</span>
                    </div>
                    
                    <div class="space-y-1 animate-slide-in">
                        <div class="task-item group bg-linear-card hover:bg-linear-hover p-3 rounded-md border border-linear-border transition-all cursor-pointer opacity-70">
                            <div class="flex items-start">
                                <div class="flex-shrink-0 mt-0.5">
                                    <div class="w-4 h-4 rounded-full border border-green-500 flex items-center justify-center">
                                        <svg class="w-3 h-3 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                        </svg>
                                    </div>
                                </div>
                                <div class="ml-3 flex-1">
                                    <div class="flex items-center">
                                        <span class="text-xs bg-purple-900 text-purple-300 px-1.5 py-0.5 rounded mr-2">PROD-122</span>
                                        <span class="font-medium line-through">Update user profile page</span>
                                    </div>
                                    <div class="mt-1 text-sm text-linear-text">Redesign the profile page with new layout</div>
                                </div>
                                <div class="task-actions opacity-0 transition-opacity flex items-center space-x-1 ml-2">
                                    <div class="w-6 h-6 rounded-full bg-yellow-500 flex items-center justify-center text-xs" title="Medium priority">M</div>
                                    <div class="w-6 h-6 rounded-full bg-gray-700 flex items-center justify-center text-xs">JS</div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="task-item group bg-linear-card hover:bg-linear-hover p-3 rounded-md border border-linear-border transition-all cursor-pointer opacity-70">
                            <div class="flex items-start">
                                <div class="flex-shrink-0 mt-0.5">
                                    <div class="w-4 h-4 rounded-full border border-green-500 flex items-center justify-center">
                                        <svg class="w-3 h-3 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                        </svg>
                                    </div>
                                </div>
                                <div class="ml-3 flex-1">
                                    <div class="flex items-center">
                                        <span class="text-xs bg-blue-900 text-blue-300 px-1.5 py-0.5 rounded mr-2">ENG-455</span>
                                        <span class="font-medium line-through">Fix login form validation</span>
                                    </div>
                                    <div class="mt-1 text-sm text-linear-text">Error messages not displaying correctly</div>
                                </div>
                                <div class="task-actions opacity-0 transition-opacity flex items-center space-x-1 ml-2">
                                    <div class="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-xs" title="Low priority">L</div>
                                    <div class="w-6 h-6 rounded-full bg-gray-700 flex items-center justify-center text-xs">JS</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
        <!-- Issue detail panel (hidden by default) -->
    <div class="hidden w-96 border-l border-linear-border bg-linear-bg flex flex-col h-full">
        <!-- Issue header -->
        <div class="p-4 border-b border-linear-border">
            <div class="flex items-center justify-between mb-2">
                <span class="text-xs bg-purple-900 text-purple-300 px-1.5 py-0.5 rounded">PROD-123</span>
                <button class="text-linear-text hover:text-white">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>
            </div>
            <h2 class="text-lg font-medium">Implement new authentication flow</h2>
            <div class="flex items-center mt-3 text-sm">
                <div class="flex items-center mr-4">
                    <div class="w-4 h-4 rounded-full bg-gray-400 mr-1.5"></div>
                    <span>Todo</span>
                </div>
                <div class="flex items-center">
                    <div class="w-4 h-4 rounded-full bg-yellow-500 mr-1.5 flex items-center justify-center text-xs">M</div>
                    <span>Medium</span>
                </div>
            </div>
        </div>
        
        <!-- Issue details -->
        <div class="flex-1 overflow-y-auto">
            <div class="p-4 border-b border-linear-border">
                <div class="flex items-center justify-between mb-2">
                    <h3 class="text-sm font-medium text-linear-text">Description</h3>
                    <button class="text-linear-text hover:text-white text-sm">Edit</button>
                </div>
                <div class="text-sm">
                    <p>Update the login and registration screens with the new design. This includes:</p>
                    <ul class="list-disc pl-5 mt-2 space-y-1">
                        <li>Implementing the new UI components</li>
                        <li>Adding social login options</li>
                        <li>Improving form validation</li>
                        <li>Adding password strength indicator</li>
                    </ul>
                </div>
            </div>
            
            <div class="p-4 border-b border-linear-border">
                <div class="flex items-center justify-between mb-2">
                    <h3 class="text-sm font-medium text-linear-text">Assignee</h3>
                </div>
                <div class="flex items-center">
                    <div class="w-6 h-6 rounded-full bg-gray-700 flex items-center justify-center text-xs mr-2">JS</div>
                    <span class="text-sm">John Smith</span>
                </div>
            </div>
            
            <div class="p-4 border-b border-linear-border">
                <div class="flex items-center justify-between mb-2">
                    <h3 class="text-sm font-medium text-linear-text">Labels</h3>
                    <button class="text-linear-text hover:text-white text-sm">+</button>
                </div>
                <div class="flex flex-wrap gap-2">
                    <div class="bg-linear-hover text-linear-text px-2 py-1 rounded text-xs">frontend</div>
                    <div class="bg-linear-hover text-linear-text px-2 py-1 rounded text-xs">authentication</div>
                    <div class="bg-linear-hover text-linear-text px-2 py-1 rounded text-xs">design-update</div>
                </div>
            </div>
            
            <div class="p-4">
                <div class="flex items-center justify-between mb-2">
                    <h3 class="text-sm font-medium text-linear-text">Activity</h3>
                </div>
                
                <div class="space-y-4">
                    <div class="flex">
                        <div class="flex-shrink-0 mr-3">
                            <div class="w-7 h-7 rounded-full bg-gray-700 flex items-center justify-center text-xs">JS</div>
                        </div>
                        <div class="flex-1">
                            <div class="bg-linear-card p-3 rounded-md border border-linear-border">
                                <div class="text-sm mb-1">
                                    <span class="font-medium">John Smith</span>
                                    <span class="text-linear-text ml-2">2 hours ago</span>
                                </div>
                                <p class="text-sm">I'll start working on this today. Need to check with the design team about the final mockups.</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="flex">
                        <div class="flex-shrink-0 mr-3">
                            <div class="w-7 h-7 rounded-full bg-gray-700 flex items-center justify-center text-xs">AS</div>
                        </div>
                        <div class="flex-1">
                            <div class="bg-linear-card p-3 rounded-md border border-linear-border">
                                <div class="text-sm mb-1">
                                    <span class="font-medium">Alex Smith</span>
                                    <span class="text-linear-text ml-2">yesterday</span>
                                </div>
                                <p class="text-sm">Created this issue and assigned to John.</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Comment input -->
                <div class="mt-4">
                    <textarea placeholder="Add a comment..." class="w-full bg-linear-card border border-linear-border rounded-md p-3 text-sm focus:outline-none focus:ring-1 focus:ring-linear-accent resize-none h-20"></textarea>
                    <div class="flex justify-end mt-2">
                        <button class="bg-linear-accent hover:bg-opacity-90 text-white px-3 py-1.5 rounded text-sm font-medium transition-colors">
                            Comment
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <!-- Quick create issue modal (hidden by default) -->
    <div class="hidden fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div class="bg-linear-bg border border-linear-border rounded-lg w-full max-w-lg animate-fade-in">
            <div class="p-4 border-b border-linear-border flex items-center justify-between">
                <h3 class="font-medium">Create Issue</h3>
                <button class="text-linear-text hover:text-white">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>
            </div>
            
            <div class="p-4">
                <div class="mb-4">
                    <input type="text" placeholder="Issue title" class="w-full bg-linear-card border border-linear-border rounded-md p-3 text-sm focus:outline-none focus:ring-1 focus:ring-linear-accent">
                </div>
                
                <div class="mb-4">
                    <textarea placeholder="Description (optional)" class="w-full bg-linear-card border border-linear-border rounded-md p-3 text-sm focus:outline-none focus:ring-1 focus:ring-linear-accent resize-none h-24"></textarea>
                </div>
                
                <div class="grid grid-cols-2 gap-4 mb-4">
                    <div>
                        <label class="block text-linear-text text-sm mb-1">Status</label>
                        <select class="w-full bg-linear-card border border-linear-border rounded-md p-2 text-sm focus:outline-none focus:ring-1 focus:ring-linear-accent">
                            <option>Todo</option>
                            <option>In Progress</option>
                            <option>Done</option>
                        </select>
                    </div>
                    
                    <div>
                        <label class="block text-linear-text text-sm mb-1">Priority</label>
                        <select class="w-full bg-linear-card border border-linear-border rounded-md p-2 text-sm focus:outline-none focus:ring-1 focus:ring-linear-accent">
                            <option>No priority</option>
                            <option>Low</option>
                            <option>Medium</option>
                            <option>High</option>
                            <option>Urgent</option>
                        </select>
                    </div>
                </div>
                
                <div class="grid grid-cols-2 gap-4 mb-4">
                    <div>
                        <label class="block text-linear-text text-sm mb-1">Assignee</label>
                        <select class="w-full bg-linear-card border border-linear-border rounded-md p-2 text-sm focus:outline-none focus:ring-1 focus:ring-linear-accent">
                            <option>Unassigned</option>
                            <option>John Smith</option>
                            <option>Alex Smith</option>
                        </select>
                    </div>
                    
                    <div>
                        <label class="block text-linear-text text-sm mb-1">Team</label>
                        <select class="w-full bg-linear-card border border-linear-border rounded-md p-2 text-sm focus:outline-none focus:ring-1 focus:ring-linear-accent">
                            <option>Product</option>
                            <option>Engineering</option>
                            <option>Design</option>
                        </select>
                    </div>
                </div>
                
                <div class="flex justify-end">
                    <button class="bg-linear-accent hover:bg-opacity-90 text-white px-4 py-2 rounded text-sm font-medium transition-colors">
                        Create Issue
                    </button>
                </div>
            </div>
        </div>
    </div>
    
    <!-- JavaScript for interactions -->
    <script>
        // This would be expanded in a real implementation
        document.addEventListener('DOMContentLoaded', function() {
            // Example of showing task details when clicking on a task
            const taskItems = document.querySelectorAll('.task-item');
            const detailPanel = document.querySelector('.border-l.border-linear-border.bg-linear-bg');
            
            taskItems.forEach(item => {
                item.addEventListener('click', function() {
                    // In a real implementation, this would load the specific task data
                    detailPanel.classList.remove('hidden');
                });
            });
            
            // Close button for detail panel
            const closeButton = detailPanel.querySelector('button');
            closeButton.addEventListener('click', function() {
                detailPanel.classList.add('hidden');
            });
            
            // New Issue button functionality
            const newIssueButton = document.querySelector('button.bg-linear-accent');
            const modal = document.querySelector('.fixed.inset-0');
            
            newIssueButton.addEventListener('click', function() {
                modal.classList.remove('hidden');
            });
            
            // Close modal
            const closeModal = modal.querySelector('button');
            closeModal.addEventListener('click', function() {
                modal.classList.add('hidden');
            });
            
            // Hover effects for cards
            const cards = document.querySelectorAll('.hover-card');
            cards.forEach(card => {
                card.addEventListener('mouseenter', function() {
                    this.classList.add('transform', 'translate-y-[-2px]', 'shadow-lg');
                });
                
                card.addEventListener('mouseleave', function() {
                    this.classList.remove('transform', 'translate-y-[-2px]', 'shadow-lg');
                });
            });
        });
    </script>
</body>
</html>`
};
