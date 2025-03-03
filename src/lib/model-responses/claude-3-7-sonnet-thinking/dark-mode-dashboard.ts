import { ModelResponse } from "@/types/models";
import { sanitizeModelResponseContent } from "@/lib/utils";

export const darkModeDashboardclaude_3_7_sonnet_thinking: ModelResponse = {
  id: "claude-3-7-sonnet-thinking-dark-mode-dashboard",
  modelId: "claude-3-7-sonnet-thinking",
  prompt: "Design a sleek admin dashboard UI with light and dark mode toggle, featuring an AI analytics graph. In a single-page self-contained HTML.",
  responseDate: "2025-02-27",
  type: "website"  ,
  title: "Dark Mode Dashboard"  ,
  description: "Claude 3.7 Sonnet Thinking's response to the Tests an AI's UI design skills with theming support",
  content: sanitizeModelResponseContent(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AI Admin Dashboard</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <style>
        :root {
            --primary-color: #5664d2;
            --text-color: #333;
            --bg-color: #f5f7fb;
            --card-bg: #ffffff;
            --border-color: #e1e5ee;
            --shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
            --chart-color1: rgba(86, 100, 210, 0.8);
            --chart-color2: rgba(54, 162, 235, 0.8);
            --sidebar-width: 250px;
        }

        .dark-mode {
            --primary-color: #6c7ae0;
            --text-color: #e1e1e1;
            --bg-color: #121212;
            --card-bg: #1e1e1e;
            --border-color: #2c2c2c;
            --shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
            --chart-color1: rgba(108, 122, 224, 0.8);
            --chart-color2: rgba(79, 195, 247, 0.8);
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            transition: background-color 0.3s, color 0.3s;
        }

        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background-color: var(--bg-color);
            color: var(--text-color);
            display: flex;
            min-height: 100vh;
        }

        /* Sidebar */
        .sidebar {
            width: var(--sidebar-width);
            background-color: var(--card-bg);
            border-right: 1px solid var(--border-color);
            padding: 1.5rem;
            display: flex;
            flex-direction: column;
            position: fixed;
            height: 100vh;
        }

        .logo {
            display: flex;
            align-items: center;
            margin-bottom: 2rem;
            font-weight: 700;
            font-size: 1.5rem;
            color: var(--primary-color);
        }

        .logo i {
            margin-right: 10px;
            font-size: 1.8rem;
        }

        .sidebar-nav {
            display: flex;
            flex-direction: column;
            flex-grow: 1;
        }

        .nav-item {
            display: flex;
            align-items: center;
            padding: 0.8rem 1rem;
            border-radius: 8px;
            margin-bottom: 0.5rem;
            cursor: pointer;
            font-weight: 500;
            color: var(--text-color);
            text-decoration: none;
        }

        .nav-item.active, .nav-item:hover {
            background-color: var(--primary-color);
            color: white;
        }

        .nav-item i {
            margin-right: 12px;
        }

        .sidebar-footer {
            margin-top: auto;
            display: flex;
            align-items: center;
            padding: 1rem 0;
        }

        .mode-toggle {
            margin-left: auto;
            cursor: pointer;
            background: none;
            border: none;
            color: var(--text-color);
            font-size: 1.2rem;
        }

        /* Main Content */
        .main-content {
            flex: 1;
            margin-left: var(--sidebar-width);
            padding: 2rem;
        }

        .header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 2rem;
        }

        .header h1 {
            font-size: 1.8rem;
            font-weight: 600;
        }

        .user-profile {
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .user-avatar {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background-color: var(--primary-color);
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-weight: 600;
        }

        /* Dashboard Cards */
        .dashboard-cards {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
            gap: 1.5rem;
            margin-bottom: 2rem;
        }

        .card {
            background-color: var(--card-bg);
            border-radius: 12px;
            padding: 1.5rem;
            box-shadow: var(--shadow);
        }

        .stat-card {
            display: flex;
            flex-direction: column;
        }

        .stat-title {
            color: #888;
            font-size: 0.9rem;
            margin-bottom: 10px;
        }

        .stat-value {
            font-size: 1.8rem;
            font-weight: 600;
            margin-bottom: 5px;
        }

        .stat-trend {
            display: flex;
            align-items: center;
            font-size: 0.85rem;
        }

        .trend-up {
            color: #4CAF50;
        }

        .trend-down {
            color: #F44336;
        }

        .trend-icon {
            margin-right: 5px;
        }

        /* Analytics Section */
        .analytics-section {
            margin-top: 2rem;
        }

        .section-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 1rem;
        }

        .chart-container {
            background-color: var(--card-bg);
            border-radius: 12px;
            padding: 1.5rem;
            box-shadow: var(--shadow);
            height: 400px;
        }

        /* Responsive */
        @media (max-width: 768px) {
            .sidebar {
                width: 70px;
                padding: 1rem 0.5rem;
            }

            .logo span, .nav-item span {
                display: none;
            }

            .nav-item {
                justify-content: center;
                padding: 0.8rem;
            }

            .nav-item i {
                margin-right: 0;
                font-size: 1.2rem;
            }

            .main-content {
                margin-left: 70px;
            }

            :root {
                --sidebar-width: 70px;
            }
        }
    </style>
</head>
<body>
    <!-- Sidebar -->
    <aside class="sidebar">
        <div class="logo">
            <i class="fas fa-brain"></i>
            <span>AI Dashboard</span>
        </div>
        <nav class="sidebar-nav">
            <a href="#" class="nav-item active">
                <i class="fas fa-home"></i>
                <span>Dashboard</span>
            </a>
            <a href="#" class="nav-item">
                <i class="fas fa-chart-line"></i>
                <span>Analytics</span>
            </a>
            <a href="#" class="nav-item">
                <i class="fas fa-robot"></i>
                <span>AI Models</span>
            </a>
            <a href="#" class="nav-item">
                <i class="fas fa-cogs"></i>
                <span>Settings</span>
            </a>
            <a href="#" class="nav-item">
                <i class="fas fa-users"></i>
                <span>Team</span>
            </a>
        </nav>
        <div class="sidebar-footer">
            <button class="mode-toggle" id="mode-toggle">
                <i class="fas fa-moon"></i>
            </button>
        </div>
    </aside>

    <!-- Main Content -->
    <main class="main-content">
        <div class="header">
            <h1>AI Analytics Overview</h1>
            <div class="user-profile">
                <span>Admin User</span>
                <div class="user-avatar">A</div>
            </div>
        </div>

        <!-- Stats Cards -->
        <div class="dashboard-cards">
            <div class="card stat-card">
                <div class="stat-title">Model Accuracy</div>
                <div class="stat-value">94.7%</div>
                <div class="stat-trend trend-up">
                    <i class="fas fa-arrow-up trend-icon"></i>
                    <span>2.3% vs last month</span>
                </div>
            </div>
            <div class="card stat-card">
                <div class="stat-title">Inference Time</div>
                <div class="stat-value">42ms</div>
                <div class="stat-trend trend-down">
                    <i class="fas fa-arrow-down trend-icon"></i>
                    <span>5.1% vs last month</span>
                </div>
            </div>
            <div class="card stat-card">
                <div class="stat-title">Active Users</div>
                <div class="stat-value">8,942</div>
                <div class="stat-trend trend-up">
                    <i class="fas fa-arrow-up trend-icon"></i>
                    <span>12.8% vs last month</span>
                </div>
            </div>
            <div class="card stat-card">
                <div class="stat-title">API Calls</div>
                <div class="stat-value">1.2M</div>
                <div class="stat-trend trend-up">
                    <i class="fas fa-arrow-up trend-icon"></i>
                    <span>8.4% vs last month</span>
                </div>
            </div>
        </div>

        <!-- AI Analytics Graph -->
        <div class="analytics-section">
            <div class="section-header">
                <h2>AI Performance Metrics</h2>
            </div>
            <div class="chart-container">
                <canvas id="aiAnalyticsChart"></canvas>
            </div>
        </div>
    </main>

    <script>
        // Dark/Light Mode Toggle
        const toggleButton = document.getElementById('mode-toggle');
        const toggleIcon = toggleButton.querySelector('i');
        
        toggleButton.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            
            if (document.body.classList.contains('dark-mode')) {
                toggleIcon.classList.remove('fa-moon');
                toggleIcon.classList.add('fa-sun');
            } else {
                toggleIcon.classList.remove('fa-sun');
                toggleIcon.classList.add('fa-moon');
            }
            
            // Update chart colors when theme changes
            updateChartColors();
        });
        
        // Check user preference for dark mode
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            document.body.classList.add('dark-mode');
            toggleIcon.classList.remove('fa-moon');
            toggleIcon.classList.add('fa-sun');
        }
        
        // AI Analytics Chart
        const ctx = document.getElementById('aiAnalyticsChart').getContext('2d');
        let aiChart;
        
        function createChart() {
            aiChart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                    datasets: [{
                        label: 'Model Accuracy',
                        data: [89.2, 89.8, 90.3, 91.5, 91.7, 92.1, 92.8, 93.2, 93.5, 94.1, 94.4, 94.7],
                        borderColor: getComputedStyle(document.documentElement).getPropertyValue('--chart-color1'),
                        backgroundColor: hexToRgba(getComputedStyle(document.documentElement).getPropertyValue('--chart-color1'), 0.1),
                        borderWidth: 2,
                        tension: 0.3,
                        fill: true
                    }, {
                        label: 'User Satisfaction',
                        data: [82.5, 84.1, 85.6, 86.2, 87.8, 88.3, 89.5, 90.1, 91.4, 92.7, 93.2, 93.8],
                        borderColor: getComputedStyle(document.documentElement).getPropertyValue('--chart-color2'),
                        backgroundColor: hexToRgba(getComputedStyle(document.documentElement).getPropertyValue('--chart-color2'), 0.1),
                        borderWidth: 2,
                        tension: 0.3,
                        fill: true
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            position: 'top',
                            labels: {
                                color: getComputedStyle(document.documentElement).getPropertyValue('--text-color')
                            }
                        },
                        tooltip: {
                            mode: 'index',
                            intersect: false
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: false,
                            min: 80,
                            max: 100,
                            grid: {
                                color: hexToRgba(getComputedStyle(document.documentElement).getPropertyValue('--border-color'), 0.5),
                            },
                            ticks: {
                                color: getComputedStyle(document.documentElement).getPropertyValue('--text-color')
                            }
                        },
                        x: {
                            grid: {
                                color: hexToRgba(getComputedStyle(document.documentElement).getPropertyValue('--border-color'), 0.5),
                            },
                            ticks: {
                                color: getComputedStyle(document.documentElement).getPropertyValue('--text-color')
                            }
                        }
                    }
                }
            });
        }
        
        function updateChartColors() {
            if (!aiChart) return;
            
            // Update chart colors based on current theme
            aiChart.options.scales.x.grid.color = hexToRgba(getComputedStyle(document.documentElement).getPropertyValue('--border-color'), 0.5);
            aiChart.options.scales.y.grid.color = hexToRgba(getComputedStyle(document.documentElement).getPropertyValue('--border-color'), 0.5);
            aiChart.options.scales.x.ticks.color = getComputedStyle(document.documentElement).getPropertyValue('--text-color');
            aiChart.options.scales.y.ticks.color = getComputedStyle(document.documentElement).getPropertyValue('--text-color');
            aiChart.options.plugins.legend.labels.color = getComputedStyle(document.documentElement).getPropertyValue('--text-color');
            
            // Update dataset colors
            aiChart.data.datasets[0].borderColor = getComputedStyle(document.documentElement).getPropertyValue('--chart-color1');
            aiChart.data.datasets[0].backgroundColor = hexToRgba(getComputedStyle(document.documentElement).getPropertyValue('--chart-color1'), 0.1);
            aiChart.data.datasets[1].borderColor = getComputedStyle(document.documentElement).getPropertyValue('--chart-color2');
            aiChart.data.datasets[1].backgroundColor = hexToRgba(getComputedStyle(document.documentElement).getPropertyValue('--chart-color2'), 0.1);
            
            aiChart.update();
        }
        
        // Helper function to convert hex to rgba
        function hexToRgba(hex, alpha = 1) {
            if (hex.startsWith('rgba')) return hex;
            
            hex = hex.replace('#', '');
            if (hex.length === 3) {
                hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
            }
            
            const r = parseInt(hex.substring(0, 2), 16);
            const g = parseInt(hex.substring(2, 4), 16);
            const b = parseInt(hex.substring(4, 6), 16);
            
            return 'rgba(' + r + ', ' + g + ', ' + b + ', ' + alpha + ')';
        }
        
        // Initialize the chart
        document.addEventListener('DOMContentLoaded', createChart);
    </script>
</body>
</html>`)
};
