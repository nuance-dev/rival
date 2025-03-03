import { ModelResponse } from "@/types/models";

export const darkModeDashboardclaude_3_5_sonnet: ModelResponse = {
  id: "claude-3-5-sonnet-dark-mode-dashboard",
  modelId: "claude-3-5-sonnet",
  prompt: "Design a sleek admin dashboard UI with light and dark mode toggle, featuring an AI analytics graph. In a single-page self-contained HTML.",
  responseDate: "2025-02-26",
  type: "website"  ,
  title: "Dark Mode Dashboard"  ,
  description: "Claude 3.5 Sonnet's response to the Tests an AI's UI design skills with theming support",
  content: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AI Analytics Dashboard</title>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <style>
        :root {
            --bg-primary: #ffffff;
            --bg-secondary: #f5f5f5;
            --text-primary: #333333;
            --text-secondary: #666666;
            --accent: #4f46e5;
            --border: #e5e7eb;
        }

        [data-theme="dark"] {
            --bg-primary: #1a1a1a;
            --bg-secondary: #2d2d2d;
            --text-primary: #ffffff;
            --text-secondary: #a0a0a0;
            --accent: #6366f1;
            --border: #404040;
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            transition: background-color 0.3s, color 0.3s;
        }

        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            background-color: var(--bg-primary);
            color: var(--text-primary);
        }

        .dashboard {
            display: grid;
            grid-template-columns: 250px 1fr;
            min-height: 100vh;
        }

        .sidebar {
            background-color: var(--bg-secondary);
            padding: 2rem;
            border-right: 1px solid var(--border);
        }

        .logo {
            font-size: 1.5rem;
            font-weight: bold;
            margin-bottom: 2rem;
            color: var(--accent);
        }

        .nav-item {
            padding: 0.75rem 1rem;
            margin: 0.5rem 0;
            border-radius: 0.5rem;
            cursor: pointer;
            color: var(--text-secondary);
        }

        .nav-item:hover {
            background-color: var(--accent);
            color: white;
        }

        .main-content {
            padding: 2rem;
        }

        .header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 2rem;
        }

        .theme-toggle {
            background: var(--accent);
            color: white;
            border: none;
            padding: 0.5rem 1rem;
            border-radius: 0.5rem;
            cursor: pointer;
        }

        .analytics-card {
            background-color: var(--bg-secondary);
            padding: 1.5rem;
            border-radius: 1rem;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .chart-container {
            height: 400px;
        }
    </style>
</head>
<body>
    <div class="dashboard">
        <div class="sidebar">
            <div class="logo">AI Dashboard</div>
            <div class="nav-item">Dashboard</div>
            <div class="nav-item">Analytics</div>
            <div class="nav-item">Reports</div>
            <div class="nav-item">Settings</div>
        </div>
        <div class="main-content">
            <div class="header">
                <h1>AI Performance Analytics</h1>
                <button class="theme-toggle" onclick="toggleTheme()">Toggle Theme</button>
            </div>
            <div class="analytics-card">
                <canvas id="aiChart"></canvas>
            </div>
        </div>
    </div>

    <script>
        // Theme toggling
        function toggleTheme() {
            document.documentElement.setAttribute('data-theme',
                document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark'
            );
            updateChart();
        }

        // Chart configuration
        const ctx = document.getElementById('aiChart').getContext('2d');
        let chart;

        function updateChart() {
            const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
            const textColor = isDark ? '#ffffff' : '#333333';

            if (chart) {
                chart.destroy();
            }

            chart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                    datasets: [{
                        label: 'AI Performance Score',
                        data: [65, 78, 82, 75, 89, 95],
                        borderColor: '#4f46e5',
                        backgroundColor: 'rgba(79, 70, 229, 0.1)',
                        tension: 0.4,
                        fill: true
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        y: {
                            beginAtZero: true,
                            grid: {
                                color: isDark ? '#404040' : '#e5e7eb'
                            },
                            ticks: {
                                color: textColor
                            }
                        },
                        x: {
                            grid: {
                                color: isDark ? '#404040' : '#e5e7eb'
                            },
                            ticks: {
                                color: textColor
                            }
                        }
                    },
                    plugins: {
                        legend: {
                            labels: {
                                color: textColor
                            }
                        }
                    }
                }
            });
        }

        // Initial chart render
        updateChart();
    </script>
</body>
</html>`
};