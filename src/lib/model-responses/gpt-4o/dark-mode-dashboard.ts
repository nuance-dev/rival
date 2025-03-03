import { ModelResponse } from "@/types/models";

export const darkModeDashboardgpt_4o: ModelResponse = {
  id: "gpt-4o-dark-mode-dashboard",
  modelId: "gpt-4o",
  prompt: "Design a sleek admin dashboard UI with light and dark mode toggle, featuring an AI analytics graph. In a single-page self-contained HTML.",
  responseDate: "2025-02-28",
  type: "website",
  title: "Dark Mode Dashboard",
  description: "Gpt 4o's response to the Tests an AI's UI design skills with theming support",
  content: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin Dashboard</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
</head>
<body class="bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors">
    <div class="min-h-screen flex flex-col">
        <!-- Navbar -->
        <nav class="p-4 bg-white dark:bg-gray-800 shadow flex justify-between">
            <h1 class="text-xl font-semibold">Admin Dashboard</h1>
            <button id="theme-toggle" class="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded">Toggle Mode</button>
        </nav>

        <!-- Main Content -->
        <div class="p-6">
            <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
                <h2 class="text-lg font-semibold mb-4">AI Analytics</h2>
                <canvas id="analyticsChart"></canvas>
            </div>
        </div>
    </div>

    <script>
        // Theme Toggle
        const themeToggle = document.getElementById('theme-toggle');
        const htmlElement = document.documentElement;

        themeToggle.addEventListener('click', () => {
            htmlElement.classList.toggle('dark');
        });

        // Chart.js AI Analytics Graph
        const ctx = document.getElementById('analyticsChart').getContext('2d');
        new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
                datasets: [{
                    label: 'AI Insights',
                    data: [3, 7, 4, 10, 6, 12, 8],
                    borderColor: 'rgb(75, 192, 192)',
                    tension: 0.3,
                    fill: false
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    x: { grid: { color: 'rgba(255, 255, 255, 0.1)' } },
                    y: { grid: { color: 'rgba(255, 255, 255, 0.1)' } }
                }
            }
        });
    </script>
</body>
</html>
`
};
