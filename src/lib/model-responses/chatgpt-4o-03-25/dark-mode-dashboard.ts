import { ModelResponse } from "@/types/models";
import { sanitizeModelResponseContent } from "@/lib/utils";

export const darkUmodeUdashboardchatgpt_4o_03_25: ModelResponse = {
  id: "chatgpt-4o-03-25-dark-mode-dashboard",
  modelId: "chatgpt-4o-03-25",
  prompt: "Create a dark-themed and minimal analytics dashboard with clean UI, modern visuals, and a responsive layout. In a single-page self-contained HTML.",
  responseDate: "2025-03-30",
  type: "website",
  title: "dark-mode-dashboard",
  description: "ChatGPT-4o March 2025's response",
  content: sanitizeModelResponseContent(`<!DOCTYPE html>
<html lang="en" class="dark">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Analytics Dashboard</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-900 text-white font-sans">
  <div class="min-h-screen flex flex-col p-6">
    <!-- Header -->
    <header class="flex items-center justify-between mb-6">
      <h1 class="text-2xl font-semibold">Dashboard</h1>
      <button class="text-sm bg-gray-700 px-3 py-1 rounded hover:bg-gray-600">Settings</button>
    </header>

    <!-- Stats Cards -->
    <section class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      <div class="bg-gray-800 p-4 rounded-lg shadow">
        <p class="text-sm text-gray-400">Users</p>
        <p class="text-2xl font-bold mt-1">2,450</p>
      </div>
      <div class="bg-gray-800 p-4 rounded-lg shadow">
        <p class="text-sm text-gray-400">Sessions</p>
        <p class="text-2xl font-bold mt-1">8,129</p>
      </div>
      <div class="bg-gray-800 p-4 rounded-lg shadow">
        <p class="text-sm text-gray-400">Conversion Rate</p>
        <p class="text-2xl font-bold mt-1">4.6%</p>
      </div>
    </section>

    <!-- Chart -->
    <section class="bg-gray-800 p-4 rounded-lg shadow mb-6">
      <p class="text-sm text-gray-400 mb-2">Weekly Traffic</p>
      <canvas id="trafficChart" class="w-full h-64"></canvas>
    </section>

    <!-- Table -->
    <section class="bg-gray-800 p-4 rounded-lg shadow overflow-x-auto">
      <p class="text-sm text-gray-400 mb-2">Top Pages</p>
      <table class="w-full text-sm">
        <thead>
          <tr class="text-left text-gray-400">
            <th class="pb-2">Page</th>
            <th class="pb-2">Visitors</th>
            <th class="pb-2">Bounce Rate</th>
          </tr>
        </thead>
        <tbody class="text-white">
          <tr class="border-t border-gray-700">
            <td class="py-2">/home</td>
            <td>1,200</td>
            <td>32%</td>
          </tr>
          <tr class="border-t border-gray-700">
            <td class="py-2">/pricing</td>
            <td>980</td>
            <td>27%</td>
          </tr>
          <tr class="border-t border-gray-700">
            <td class="py-2">/about</td>
            <td>540</td>
            <td>41%</td>
          </tr>
        </tbody>
      </table>
    </section>
  </div>

  <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
  <script>
    const ctx = document.getElementById('trafficChart').getContext('2d');
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [{
          label: 'Visitors',
          data: [320, 410, 380, 510, 620, 720, 680],
          borderColor: '#38bdf8',
          backgroundColor: 'rgba(56, 189, 248, 0.1)',
          tension: 0.4,
          fill: true
        }]
      },
      options: {
        responsive: true,
        plugins: { legend: { display: false } },
        scales: {
          x: { grid: { color: '#374151' }, ticks: { color: '#9ca3af' } },
          y: { grid: { color: '#374151' }, ticks: { color: '#9ca3af' } }
        }
      }
    });
  </script>
</body>
</html>
`)
}; 