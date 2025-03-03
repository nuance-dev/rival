import { ModelResponse } from "@/types/models";
import { sanitizeModelResponseContent } from "@/lib/utils";

export const linearAppCloneclaude_3_7_sonnet_thinking: ModelResponse = {
  id: "claude-3-7-sonnet-thinking-linear-app-clone",
  modelId: "claude-3-7-sonnet-thinking",
  prompt: "Recreate the Linear App UI using Tailwind CSS, keeping the layout and animations as close as possible. In a single-page self-contained HTML.",
  responseDate: "2025-02-27",
  type: "website"  ,
  title: "Linear App Clone"  ,
  description: "Claude 3 7 Sonnet Thinking's response to the Tests an AI's ability to replicate an existing UI with Tailwind CSS",
  content: sanitizeModelResponseContent(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Linear UI Clone</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        tailwind.config = {
            darkMode: 'class',
            theme: {
                extend: {
                    colors: {
                        'linear-dark': '#101016',
                        'linear-sidebar': '#151519',
                        'linear-card': '#1d1d23',
                        'linear-hover': '#26262e',
                        'linear-border': '#2c2c35',
                        'linear-text': '#999aa2',
                        'linear-white': '#e5e5e9',
                        'linear-blue': '#5e6ad2',
                        'linear-purple': '#8a63d2',
                        'linear-green': '#3fb950'
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
        /* Custom scrollbar */
        ::-webkit-scrollbar {
            width: 5px;
            height: 5px;
        }
        ::-webkit-scrollbar-track {
            background: transparent;
        }
        ::-webkit-scrollbar-thumb {
            background: #2c2c35;
            border-radius: 5px;
        }
        ::-webkit-scrollbar-thumb:hover {
            background: #3a3a45;
        }

        /* Linear-style transitions */
        .transition-linear {
            transition: all 0.15s ease-in-out;
        }
        
        /* Card hover effect */
        .issue-card {
            transform-origin: center;
            transition: all 0.2s ease;
        }
        .issue-card:hover {
            transform: translateY(-1px);
        }

        /* Status pill transition */
        .status-pill {
            transition: all 0.2s ease;
        }
        .status-pill:hover {
            filter: brightness(1.1);
        }

        /* Custom gradient button */
        .linear-button-gradient {
            background: linear-gradient(90deg, #5e6ad2, #8a63d2);
            transition: all 0.2s ease;
        }
        .linear-button-gradient:hover {
            filter: brightness(1.1);
            transform: translateY(-1px);
        }
    </style>
</head>
<body class="bg-linear-dark text-linear-text antialiased h-screen flex overflow-hidden dark">
    <!-- Top header -->
    <header class="fixed top-0 left-0 right-0 z-10 h-12 border-b border-linear-border bg-linear-dark px-4 flex items-center">
        <div class="flex items-center space-x-4">
            <svg class="w-5 h-5 text-linear-blue" viewBox="0 0 100 100" fill="currentColor">
                <path d="M5 50C5 25.1472 25.1472 5 50 5C74.8528 5 95 25.1472 95 50C95 74.8528 74.8528 95 50 95C25.1472 95 5 74.8528 5 50Z"></path>
            </svg>
            <span class="text-linear-white font-medium">Linear</span>
        </div>
        <div class="ml-auto flex items-center space-x-3">
            <button class="rounded-full bg-linear-sidebar p-2 hover:bg-linear-hover transition-linear">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
            </button>
            <button class="rounded-full bg-linear-sidebar p-2 hover:bg-linear-hover transition-linear">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                    <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                </svg>
            </button>
            <div class="h-7 w-7 rounded-full bg-linear-purple flex items-center justify-center text-white text-xs font-medium">JS</div>
        </div>
    </header>

    <!-- Left sidebar -->
    <nav class="w-56 bg-linear-sidebar border-r border-linear-border h-screen pt-14 flex flex-col">
        <div class="p-3">
            <div class="flex items-center justify-between mb-6 mt-2">
                <div class="text-linear-white font-medium">Acme, Inc</div>
                <button class="text-linear-text hover:text-linear-white transition-linear">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M12 5v14M5 12h14"></path>
                    </svg>
                </button>
            </div>
            
            <ul class="space-y-1">
                <li class="rounded-md hover:bg-linear-hover transition-linear px-2 py-1.5 cursor-pointer">
                    <a href="#" class="flex items-center text-linear-text hover:text-linear-white">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                            <polyline points="9 22 9 12 15 12 15 22"></polyline>
                        </svg>
                        <span>Home</span>
                    </a>
                </li>
                <li class="rounded-md bg-linear-hover transition-linear px-2 py-1.5 cursor-pointer">
                    <a href="#" class="flex items-center text-linear-white">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2 text-linear-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34"></path>
                            <polygon points="18 2 22 6 12 16 8 16 8 12 18 2"></polygon>
                        </svg>
                        <span>Issues</span>
                    </a>
                </li>
                <li class="rounded-md hover:bg-linear-hover transition-linear px-2 py-1.5 cursor-pointer">
                    <a href="#" class="flex items-center text-linear-text hover:text-linear-white">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                            <line x1="16" y1="2" x2="16" y2="6"></line>
                            <line x1="8" y1="2" x2="8" y2="6"></line>
                            <line x1="3" y1="10" x2="21" y2="10"></line>
                        </svg>
                        <span>Roadmap</span>
                    </a>
                </li>
                <li class="rounded-md hover:bg-linear-hover transition-linear px-2 py-1.5 cursor-pointer">
                    <a href="#" class="flex items-center text-linear-text hover:text-linear-white">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <polyline points="9 11 12 14 22 4"></polyline>
                            <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                        </svg>
                        <span>Backlog</span>
                    </a>
                </li>
                <li class="rounded-md hover:bg-linear-hover transition-linear px-2 py-1.5 cursor-pointer">
                    <a href="#" class="flex items-center text-linear-text hover:text-linear-white">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                        </svg>
                        <span>Favorites</span>
                    </a>
                </li>
            </ul>
            
            <div class="mt-6 mb-3">
                <h3 class="text-xs uppercase font-semibold text-linear-text/50 mb-2 px-2">Teams</h3>
                <ul class="space-y-1">
                    <li class="rounded-md hover:bg-linear-hover transition-linear px-2 py-1.5 cursor-pointer">
                        <a href="#" class="flex items-center text-linear-text hover:text-linear-white">
                            <span class="h-4 w-4 rounded bg-linear-blue mr-2 flex-shrink-0"></span>
                            <span>Engineering</span>
                        </a>
                    </li>
                    <li class="rounded-md hover:bg-linear-hover transition-linear px-2 py-1.5 cursor-pointer">
                        <a href="#" class="flex items-center text-linear-text hover:text-linear-white">
                            <span class="h-4 w-4 rounded bg-linear-purple mr-2 flex-shrink-0"></span>
                            <span>Product</span>
                        </a>
                    </li>
                    <li class="rounded-md hover:bg-linear-hover transition-linear px-2 py-1.5 cursor-pointer">
                        <a href="#" class="flex items-center text-linear-text hover:text-linear-white">
                            <span class="h-4 w-4 rounded bg-green-500 mr-2 flex-shrink-0"></span>
                            <span>Design</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        
        <div class="mt-auto p-3 border-t border-linear-border">
            <div class="flex items-center">
                <div class="h-8 w-8 rounded-full bg-linear-purple flex items-center justify-center text-white text-xs font-medium mr-2">JS</div>
                <div>
                    <div class="text-linear-white text-sm">John Smith</div>
                    <div class="text-linear-text text-xs">john@acme.com</div>
                </div>
            </div>
        </div>
    </nav>

    <!-- Main content -->
    <main class="flex-1 overflow-y-auto pt-14">
        <!-- Top section -->
        <div class="p-5 animate-fade-in">
            <div class="flex justify-between items-center mb-6">
                <h1 class="text-linear-white text-2xl font-semibold">Issues</h1>
                <button class="linear-button-gradient text-white px-4 py-1.5 rounded-md text-sm font-medium">
                    New Issue
                </button>
            </div>
            
            <!-- Filter bar -->
            <div class="flex space-x-2 mb-6">
                <div class="flex items-center bg-linear-sidebar rounded-md px-3 py-1.5 text-sm hover:bg-linear-hover transition-linear cursor-pointer">
                    <span>All issues</span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                </div>
                <div class="flex items-center bg-linear-sidebar rounded-md px-3 py-1.5 text-sm hover:bg-linear-hover transition-linear cursor-pointer">
                    <span>Status</span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                </div>
                <div class="flex items-center bg-linear-sidebar rounded-md px-3 py-1.5 text-sm hover:bg-linear-hover transition-linear cursor-pointer">
                    <span>Assignee</span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                </div>
                <div class="ml-auto">
                    <div class="relative">
                        <input type="text" placeholder="Search issues..." class="bg-linear-sidebar rounded-md pl-8 pr-3 py-1.5 text-sm hover:bg-linear-hover focus:bg-linear-hover transition-linear outline-none w-64">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 absolute left-2.5 top-1/2 transform -translate-y-1/2" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <circle cx="11" cy="11" r="8"></circle>
                            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                        </svg>
                    </div>
                </div>
            </div>
            
            <!-- Issues list header -->
            <div class="grid grid-cols-12 gap-4 px-3 py-2 text-xs text-linear-text/50 uppercase font-semibold border-b border-linear-border">
                <div class="col-span-6">Title</div>
                <div class="col-span-2">Status</div>
                <div class="col-span-2">Assignee</div>
                <div class="col-span-2">Priority</div>
            </div>
            
            <!-- Issues list -->
            <div class="space-y-1 mt-1">
                <!-- Issue card 1 -->
                <div class="grid grid-cols-12 gap-4 px-3 py-2.5 rounded-md bg-linear-card hover:bg-linear-hover issue-card animate-slide-in cursor-pointer border border-transparent hover:border-linear-border">
                    <div class="col-span-6 flex items-center">
                        <span class="text-linear-blue mr-2">ENG-1234</span>
                        <span class="text-linear-white">Implement authentication flow</span>
                    </div>
                    <div class="col-span-2">
                        <span class="px-2 py-0.5 rounded-full bg-yellow-500/20 text-yellow-500 text-xs status-pill">In Progress</span>
                    </div>
                    <div class="col-span-2 flex items-center">
                        <div class="h-5 w-5 rounded-full bg-linear-purple flex items-center justify-center text-white text-xs font-medium">JS</div>
                    </div>
                    <div class="col-span-2 flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-orange-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M12 19V5M5 12l7-7 7 7"/>
                        </svg>
                    </div>
                </div>
                
                <!-- Issue card 2 -->
                <div class="grid grid-cols-12 gap-4 px-3 py-2.5 rounded-md bg-linear-card hover:bg-linear-hover issue-card animate-slide-in cursor-pointer border border-transparent hover:border-linear-border" style="animation-delay: 50ms;">
                    <div class="col-span-6 flex items-center">
                        <span class="text-linear-blue mr-2">ENG-1233</span>
                        <span class="text-linear-white">Fix dashboard loading performance</span>
                    </div>
                    <div class="col-span-2">
                        <span class="px-2 py-0.5 rounded-full bg-linear-blue/20 text-linear-blue text-xs status-pill">Todo</span>
                    </div>
                    <div class="col-span-2">
                        <div class="h-5 w-5 rounded-full border border-dashed border-linear-text/30 flex items-center justify-center text-linear-text/50 text-xs">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M12 5v14M5 12h14"></path>
                            </svg>
                        </div>
                    </div>
                    <div class="col-span-2 flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-red-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M12 19V5M5 12l7-7 7 7"/>
                        </svg>
                    </div>
                </div>
                
                <!-- Issue card 3 -->
                <div class="grid grid-cols-12 gap-4 px-3 py-2.5 rounded-md bg-linear-card hover:bg-linear-hover issue-card animate-slide-in cursor-pointer border border-transparent hover:border-linear-border" style="animation-delay: 100ms;">
                    <div class="col-span-6 flex items-center">
                        <span class="text-linear-blue mr-2">ENG-1232</span>
                        <span class="text-linear-white">Implement dark mode toggle</span>
                    </div>
                    <div class="col-span-2">
                        <span class="px-2 py-0.5 rounded-full bg-green-500/20 text-green-500 text-xs status-pill">Done</span>
                    </div>
                    <div class="col-span-2 flex items-center">
                        <div class="h-5 w-5 rounded-full bg-green-500 flex items-center justify-center text-white text-xs font-medium">MK</div>
                    </div>
                    <div class="col-span-2 flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-linear-text" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M12 19V5M5 12l7-7 7 7"/>
                        </svg>
                    </div>
                </div>
                
                <!-- Issue card 4 -->
                <div class="grid grid-cols-12 gap-4 px-3 py-2.5 rounded-md bg-linear-card hover:bg-linear-hover issue-card animate-slide-in cursor-pointer border border-transparent hover:border-linear-border" style="animation-delay: 150ms;">
                    <div class="col-span-6 flex items-center">
                        <span class="text-linear-blue mr-2">ENG-1231</span>
                        <span class="text-linear-white">Update dependencies to latest versions</span>
                    </div>
                    <div class="col-span-2">
                        <span class="px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-500 text-xs status-pill">Backlog</span>
                    </div>
                    <div class="col-span-2">
                        <div class="h-5 w-5 rounded-full border border-dashed border-linear-text/30 flex items-center justify-center text-linear-text/50 text-xs">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M12 5v14M5 12h14"></path>
                            </svg>
                        </div>
                    </div>
                    <div class="col-span-2 flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-linear-text/50" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M12 19V5M5 12l7-7 7 7"/>
                        </svg>
                    </div>
                </div>
                
                <!-- Issue card 5 -->
                <div class="grid grid-cols-12 gap-4 px-3 py-2.5 rounded-md bg-linear-card hover:bg-linear-hover issue-card animate-slide-in cursor-pointer border border-transparent hover:border-linear-border" style="animation-delay: 200ms;">
                    <div class="col-span-6 flex items-center">
                        <span class="text-linear-blue mr-2">ENG-1230</span>
                        <span class="text-linear-white">Implement API pagination</span>
                    </div>
                    <div class="col-span-2">
                        <span class="px-2 py-0.5 rounded-full bg-linear-blue/20 text-linear-blue text-xs status-pill">Todo</span>
                    </div>
                    <div class="col-span-2 flex items-center">
                        <div class="h-5 w-5 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs font-medium">TS</div>
                    </div>
                    <div class="col-span-2 flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-orange-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M12 19V5M5 12l7-7 7 7"/>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    </main>

    <script>
        // Add delaying animation effect to cards
        document.addEventListener('DOMContentLoaded', () => {
            const cards = document.querySelectorAll('.issue-card');
            cards.forEach((card, index) => {
                card.style.animationDelay = index * 50 + 'ms';
            });
        });
    </script>
</body>
</html>`)
};
