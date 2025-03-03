import { ModelResponse } from "@/types/models";

export const linearAppClonegpt_4o: ModelResponse = {
  id: "gpt-4o-linear-app-clone",
  modelId: "gpt-4o",
  prompt: "Recreate the Linear App UI using Tailwind CSS, keeping the layout and animations as close as possible. In a single-page self-contained HTML.",
  responseDate: "2025-02-28",
  type: "website",
  title: "Linear App Clone",
  description: "Gpt 4o's response to the Tests an AI's ability to replicate an existing UI with Tailwind CSS",
  content: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Linear UI Clone</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        ::-webkit-scrollbar {
            width: 6px;
        }
        ::-webkit-scrollbar-thumb {
            background: #444;
            border-radius: 3px;
        }
    </style>
</head>
<body class="bg-[#181818] text-white font-sans flex h-screen overflow-hidden">
    <!-- Sidebar -->
    <aside class="w-64 bg-[#121212] p-4 flex flex-col space-y-4 border-r border-[#222]">
        <h1 class="text-xl font-bold">Linear</h1>
        <nav class="space-y-2">
            <a href="#" class="block px-3 py-2 bg-[#1e1e1e] rounded-lg transition hover:bg-[#2a2a2a]">Dashboard</a>
            <a href="#" class="block px-3 py-2 rounded-lg transition hover:bg-[#2a2a2a]">Issues</a>
            <a href="#" class="block px-3 py-2 rounded-lg transition hover:bg-[#2a2a2a]">Projects</a>
        </nav>
        <div class="mt-auto">
            <button class="w-full px-3 py-2 bg-[#292929] rounded-lg transition hover:bg-[#3a3a3a]">Settings</button>
        </div>
    </aside>
    
    <!-- Main Content -->
    <main class="flex-1 flex flex-col">
        <!-- Topbar -->
        <header class="px-6 py-4 border-b border-[#222] flex items-center justify-between">
            <h2 class="text-lg font-semibold">Dashboard</h2>
            <button class="px-4 py-2 bg-[#292929] rounded-lg hover:bg-[#3a3a3a]">+ New Issue</button>
        </header>
        
        <!-- Issues List -->
        <section class="p-6 flex-1 overflow-auto">
            <div class="space-y-4">
                <div class="bg-[#1e1e1e] p-4 rounded-lg border border-[#222] hover:border-[#444] transition">
                    <h3 class="font-semibold">Fix login bug</h3>
                    <p class="text-gray-400 text-sm">Assigned to John Doe • 2 days ago</p>
                </div>
                <div class="bg-[#1e1e1e] p-4 rounded-lg border border-[#222] hover:border-[#444] transition">
                    <h3 class="font-semibold">Update UI components</h3>
                    <p class="text-gray-400 text-sm">Assigned to Jane Doe • 5 days ago</p>
                </div>
                <div class="bg-[#1e1e1e] p-4 rounded-lg border border-[#222] hover:border-[#444] transition">
                    <h3 class="font-semibold">Optimize database queries</h3>
                    <p class="text-gray-400 text-sm">Assigned to Mark Smith • 1 week ago</p>
                </div>
            </div>
        </section>
    </main>
</body>
</html>
`
};
