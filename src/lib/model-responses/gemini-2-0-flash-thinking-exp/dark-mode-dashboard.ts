import { ModelResponse } from "@/types/models";

export const darkModeDashboardgemini_2_0_flash_thinking_exp: ModelResponse = {
  id: "gemini-2-0-flash-thinking-exp-dark-mode-dashboard",
  modelId: "gemini-2-0-flash-thinking-exp",
  prompt: "Design a sleek admin dashboard UI with light and dark mode toggle, featuring an AI analytics graph. In a single-page self-contained HTML.",
  responseDate: "2025-02-27",
  type: "website",
  title: "Dark Mode Dashboard",
  description: "Gemini 2.0 Flash Thinking Exp's response to the Tests an AI's UI design skills with theming support",
  content: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sleek Admin Dashboard</title>
    <style>
        /* --- Basic Reset and Global Styles --- */
        *, *::before, *::after {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }

        body {
            font-family: sans-serif;
            transition: background-color 0.3s, color 0.3s; /* Smooth theme transition */
            background-color: var(--bg-color);
            color: var(--text-color);
        }

        /* --- Custom Properties for Theming --- */
        :root {
            --primary-color: #3498db; /* Example primary color */
            --accent-color: #e74c3c; /* Example accent color */

            /* Light Mode Colors */
            --bg-color: #f9f9f9;
            --text-color: #333;
            --card-bg: #fff;
            --border-color: #ddd;
            --shadow-color: rgba(0, 0, 0, 0.1);
            --toggle-bg: #eee;
            --toggle-thumb: #fff;
        }

        body.dark-mode {
            /* Dark Mode Colors */
            --bg-color: #1e293b; /* Dark background */
            --text-color: #f0f0f0; /* Light text */
            --card-bg: #2d3748; /* Darker card background */
            --border-color: #4a5568; /* Darker border */
            --shadow-color: rgba(0, 0, 0, 0.3); /* Stronger shadow in dark mode */
            --toggle-bg: #4a5568;
            --toggle-thumb: #ddd;
        }

        /* --- Layout and Dashboard Structure --- */
        .dashboard-container {
            display: flex;
            min-height: 100vh;
        }

        .sidebar {
            width: 250px;
            background-color: var(--card-bg);
            border-right: 1px solid var(--border-color);
            padding: 20px;
            display: flex;
            flex-direction: column;
            gap: 20px;
        }

        .sidebar h2 {
            color: var(--primary-color);
            margin-bottom: 10px;
        }

        .sidebar ul {
            list-style: none;
            padding: 0;
        }

        .sidebar li {
            margin-bottom: 10px;
        }

        .sidebar a {
            display: block;
            padding: 10px 15px;
            text-decoration: none;
            color: var(--text-color);
            border-radius: 5px;
            transition: background-color 0.2s;
        }

        .sidebar a:hover {
            background-color: var(--toggle-bg);
        }

        .content {
            flex-grow: 1;
            padding: 20px;
        }

        .header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 20px;
        }

        .header h1 {
            color: var(--text-color);
        }

        .toggle-container {
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .toggle-label {
            color: var(--text-color);
        }

        .theme-toggle {
            position: relative;
            display: inline-block;
            width: 50px;
            height: 24px;
        }

        .theme-toggle input[type="checkbox"] {
            opacity: 0;
            width: 0;
            height: 0;
        }

        .slider {
            position: absolute;
            cursor: pointer;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: var(--toggle-bg);
            transition: .4s;
            border-radius: 24px;
        }

        .slider:before {
            position: absolute;
            content: "";
            height: 18px;
            width: 18px;
            left: 4px;
            bottom: 3px;
            background-color: var(--toggle-thumb);
            transition: .4s;
            border-radius: 50%;
        }

        input:checked + .slider {
            background-color: var(--primary-color);
        }

        input:focus + .slider {
            box-shadow: 0 0 1px var(--primary-color);
        }

        input:checked + .slider:before {
            transform: translateX(26px);
        }

        /* --- Dashboard Cards and Graph --- */
        .dashboard-cards {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 20px;
            margin-bottom: 20px;
        }

        .card {
            background-color: var(--card-bg);
            border-radius: 8px;
            padding: 20px;
            box-shadow: 0 2px 5px var(--shadow-color);
            border: 1px solid var(--border-color);
        }

        .card h3 {
            margin-bottom: 10px;
            color: var(--text-color);
        }

        .card p {
            color: var(--text-color);
            font-size: 1.2em;
            font-weight: bold;
        }

        .analytics-graph {
            background-color: var(--card-bg);
            border-radius: 8px;
            padding: 20px;
            box-shadow: 0 2px 5px var(--shadow-color);
            border: 1px solid var(--border-color);
        }

        .analytics-graph h2 {
            margin-bottom: 15px;
            color: var(--text-color);
        }

        #aiChart {
            width: 100%;
            height: 300px; /* Adjust height as needed */
        }

        /* --- Responsive Design (Simple) --- */
        @media (max-width: 768px) {
            .dashboard-container {
                flex-direction: column;
            }
            .sidebar {
                width: 100%;
                border-right: none;
                border-bottom: 1px solid var(--border-color);
            }
            .content {
                padding: 10px;
            }
            .dashboard-cards {
                grid-template-columns: 1fr; /* Stack cards on smaller screens */
            }
        }
    </style>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
</head>
<body>

    <div class="dashboard-container">
        <aside class="sidebar">
            <h2>Admin Panel</h2>
            <ul>
                <li><a href="#">Dashboard</a></li>
                <li><a href="#">Users</a></li>
                <li><a href="#">Products</a></li>
                <li><a href="#">Orders</a></li>
                <li><a href="#">Settings</a></li>
            </ul>
        </aside>

        <main class="content">
            <header class="header">
                <h1>Dashboard Overview</h1>
                <div class="toggle-container">
                    <span class="toggle-label">Light</span>
                    <label class="theme-toggle">
                        <input type="checkbox" id="themeSwitcher">
                        <span class="slider"></span>
                    </label>
                    <span class="toggle-label">Dark</span>
                </div>
            </header>

            <section class="dashboard-cards">
                <div class="card">
                    <h3>Total Users</h3>
                    <p>1,250</p>
                </div>
                <div class="card">
                    <h3>New Orders</h3>
                    <p>320</p>
                </div>
                <div class="card">
                    <h3>Revenue</h3>
                    <p>$54,000</p>
                </div>
                <div class="card">
                    <h3>Avg. Session Time</h3>
                    <p>4:30 min</p>
                </div>
            </section>

            <section class="analytics-graph">
                <h2>AI Analytics - Website Traffic</h2>
                <canvas id="aiChart"></canvas>
            </section>
        </main>
    </div>

    <script>
        const themeSwitcher = document.getElementById('themeSwitcher');
        const body = document.body;

        themeSwitcher.addEventListener('change', function() {
            if (this.checked) {
                body.classList.add('dark-mode');
            } else {
                body.classList.remove('dark-mode');
            }
        });

        // Sample Chart Data and Configuration (Replace with your actual AI analytics data)
        const aiChartCanvas = document.getElementById('aiChart').getContext('2d');
        const aiChart = new Chart(aiChartCanvas, {
            type: 'line', // Line graph for analytics
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                datasets: [{
                    label: 'Website Visits',
                    data: [65, 59, 80, 81, 56, 55, 40, 70, 90, 60, 75, 85], // Sample data points
                    borderColor: getComputedStyle(document.documentElement).getPropertyValue('--primary-color').trim(), // Use primary color from CSS variable
                    borderWidth: 2,
                    fill: false // No fill under the line
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true,
                        grid: {
                            color: getComputedStyle(document.documentElement).getPropertyValue('--border-color').trim(), // Match grid color to theme
                        },
                        ticks: {
                            color: getComputedStyle(document.documentElement).getPropertyValue('--text-color').trim(), // Match tick color to theme
                        }
                    },
                    x: {
                        grid: {
                            color: getComputedStyle(document.documentElement).getPropertyValue('--border-color').trim(),
                        },
                        ticks: {
                            color: getComputedStyle(document.documentElement).getPropertyValue('--text-color').trim(),
                        }
                    }
                },
                plugins: {
                    legend: {
                        labels: {
                            color: getComputedStyle(document.documentElement).getPropertyValue('--text-color').trim(), // Match legend color to theme
                        }
                    }
                }
            }
        });
    </script>

</body>
</html>`
};
