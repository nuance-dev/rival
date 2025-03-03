import { ModelResponse } from "@/types/models";

export const darkModeDashboardo3_mini: ModelResponse = {
  id: "o3-mini-dark-mode-dashboard",
  modelId: "o3-mini",
  prompt: "Design a sleek admin dashboard UI with light and dark mode toggle, featuring an AI analytics graph. In a single-page self-contained HTML.",
  responseDate: "2025-02-28",
  type: "website"  ,
  title: "Dark Mode Dashboard"  ,
  description: "o3 Mini's response to the Tests an AI's UI design skills with theming support",
  content: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Admin Dashboard</title>
  <!-- Chart.js CDN -->
  <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
  <style>
    /* Base Colors & Variables */
    :root {
      --bg-color: #f4f4f4;
      --text-color: #333;
      --header-bg: #fff;
      --card-bg: #fff;
      --primary-color: #4CAF50;
    }
    /* Global Styles */
    * {
      box-sizing: border-box;
    }
    body {
      background-color: var(--bg-color);
      color: var(--text-color);
      margin: 0;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      transition: background-color 0.3s ease, color 0.3s ease;
    }
    /* Header */
    header {
      background-color: var(--header-bg);
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 20px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
    header h1 {
      margin: 0;
      font-size: 24px;
    }
    /* Container Layout */
    .container {
      display: flex;
      height: calc(100vh - 80px);
    }
    /* Sidebar */
    .sidebar {
      width: 250px;
      background-color: var(--card-bg);
      box-shadow: 2px 0 4px rgba(0, 0, 0, 0.1);
      padding: 20px;
    }
    .sidebar nav a {
      display: block;
      color: var(--text-color);
      text-decoration: none;
      padding: 10px 0;
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
      transition: color 0.2s;
    }
    .sidebar nav a:hover {
      color: var(--primary-color);
    }
    /* Main Content */
    .main-content {
      flex: 1;
      padding: 20px;
      overflow-y: auto;
    }
    .card {
      background-color: var(--card-bg);
      border-radius: 8px;
      padding: 20px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      margin-bottom: 20px;
    }
    .card h2 {
      margin-top: 0;
    }
    /* Button Styles */
    button {
      background-color: var(--primary-color);
      color: white;
      border: none;
      border-radius: 4px;
      padding: 10px 20px;
      cursor: pointer;
      font-size: 14px;
      transition: opacity 0.2s;
    }
    button:hover {
      opacity: 0.9;
    }
    /* Dark Mode Overrides */
    .dark-mode {
      --bg-color: #1e1e1e;
      --text-color: #e0e0e0;
      --header-bg: #2a2a2a;
      --card-bg: #333;
      --primary-color: #2196F3;
    }
  </style>
</head>
<body>
  <header>
    <h1>Admin Dashboard</h1>
    <button id="toggleTheme">Toggle Dark/Light Mode</button>
  </header>
  <div class="container">
    <aside class="sidebar">
      <nav>
        <a href="#">Overview</a>
        <a href="#">Analytics</a>
        <a href="#">Reports</a>
        <a href="#">Settings</a>
      </nav>
    </aside>
    <section class="main-content">
      <div class="card">
        <h2>AI Analytics Graph</h2>
        <canvas id="aiAnalyticsChart" width="400" height="200"></canvas>
      </div>
      <!-- Additional cards or components can be added here -->
    </section>
  </div>
  <script>
    // Toggle Light/Dark Mode
    document.getElementById('toggleTheme').addEventListener('click', function() {
      document.body.classList.toggle('dark-mode');
    });

    // Initialize Chart.js for AI Analytics Graph
    const ctx = document.getElementById('aiAnalyticsChart').getContext('2d');
    const aiAnalyticsChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
          label: 'AI Predictions',
          data: [65, 59, 80, 81, 56, 55],
          fill: true,
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          tension: 0.3
        }]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  </script>
</body>
</html>
`
};
