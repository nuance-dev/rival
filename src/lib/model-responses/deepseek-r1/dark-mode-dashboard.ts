import { ModelResponse } from "@/types/models";

export const darkModeDashboarddeepseek_r1: ModelResponse = {
  id: "deepseek-r1-dark-mode-dashboard",
  modelId: "deepseek-r1",
  prompt: "Design a sleek admin dashboard UI with light and dark mode toggle, featuring an AI analytics graph. In a single-page self-contained HTML.",
  responseDate: "2025-02-27",
  type: "website"  ,
  title: "Dark Mode Dashboard"  ,
  description: "Deepseek R1's response to the Tests an AI's UI design skills with theming support",
  content: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AI Analytics Dashboard</title>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <style>
        :root {
            --primary-bg: #ffffff;
            --secondary-bg: #f5f6fa;
            --text-color: #2d3436;
            --accent-color: #6c5ce7;
            --border-color: #dcdde1;
        }

        [data-theme="dark"] {
            --primary-bg: #2d3436;
            --secondary-bg: #434c5e;
            --text-color: #f5f6fa;
            --accent-color: #a8a4ff;
            --border-color: #4a4a4a;
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Segoe UI', sans-serif;
            transition: background 0.3s ease;
        }

        body {
            background: var(--secondary-bg);
            color: var(--text-color);
            display: flex;
            min-height: 100vh;
        }

        .sidebar {
            width: 250px;
            background: var(--primary-bg);
            padding: 20px;
            height: 100vh;
            border-right: 1px solid var(--border-color);
        }

        .logo {
            font-size: 24px;
            font-weight: bold;
            margin-bottom: 40px;
            color: var(--accent-color);
        }

        .nav-item {
            padding: 12px;
            margin: 8px 0;
            border-radius: 8px;
            cursor: pointer;
            transition: 0.2s;
        }

        .nav-item:hover {
            background: var(--secondary-bg);
        }

        .main-content {
            flex: 1;
            padding: 30px;
        }

        .header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 40px;
        }

        .theme-toggle {
            background: var(--secondary-bg);
            border: none;
            padding: 10px 20px;
            border-radius: 20px;
            cursor: pointer;
            display: flex;
            align-items: center;
            gap: 8px;
            color: var(--text-color);
        }

        .analytics-card {
            background: var(--primary-bg);
            padding: 25px;
            border-radius: 16px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
            margin-bottom: 30px;
        }

        canvas {
            max-height: 500px;
        }

        .grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 20px;
        }
    </style>
</head>
<body data-theme="light">
    <div class="sidebar">
        <div class="logo">AI Dashboard</div>
        <div class="nav-item">Dashboard</div>
        <div class="nav-item">Analytics</div>
        <div class="nav-item">Users</div>
        <div class="nav-item">Settings</div>
    </div>

    <div class="main-content">
        <div class="header">
            <h1>AI Performance Analytics</h1>
            <button class="theme-toggle" onclick="toggleTheme()">
                <span class="toggle-icon">🌓</span>
                <span class="toggle-text">Toggle Theme</span>
            </button>
        </div>

        <div class="analytics-card">
            <canvas id="analyticsChart"></canvas>
        </div>

        <div class="grid">
            <div class="analytics-card">Total Users<br><h2>1,234</h2></div>
            <div class="analytics-card">Accuracy<br><h2>98.7%</h2></div>
            <div class="analytics-card">Processing Time<br><h2>42ms</h2></div>
        </div>
    </div>

    <script>
        function toggleTheme() {
            const body = document.body;
            body.setAttribute('data-theme', 
                body.getAttribute('data-theme') === 'light' ? 'dark' : 'light'
            );
            localStorage.setItem('theme', body.getAttribute('data-theme'));
            updateChartColors();
        }

        // Initialize theme
        const savedTheme = localStorage.getItem('theme') || 'light';
        document.body.setAttribute('data-theme', savedTheme);

        // Chart initialization
        const ctx = document.getElementById('analyticsChart').getContext('2d');
        let chart;

        function createChart() {
            const isDark = document.body.getAttribute('data-theme') === 'dark';
            
            if (chart) chart.destroy();

            chart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                    datasets: [{
                        label: 'AI Performance',
                        data: [65, 78, 82, 75, 88, 95],
                        borderColor: isDark ? '#a8a4ff' : '#6c5ce7',
                        backgroundColor: isDark ? 
                            'rgba(168, 164, 255, 0.2)' : 
                            'rgba(108, 92, 231, 0.2)',
                        tension: 0.4,
                        fill: true
                    }]
                },
                options: {
                    responsive: true,
                    plugins: {
                        legend: {
                            position: 'top',
                            labels: { color: var(--text-color) }
                        }
                    },
                    scales: {
                        y: {
                            grid: { color: var(--border-color) },
                            ticks: { color: var(--text-color) }
                        },
                        x: {
                            grid: { color: var(--border-color) },
                            ticks: { color: var(--text-color) }
                        }
                    }
                }
            });
        }

        function updateChartColors() {
            createChart();
        }

        // Initial chart creation
        createChart();
    </script>
</body>
</html>`
};
