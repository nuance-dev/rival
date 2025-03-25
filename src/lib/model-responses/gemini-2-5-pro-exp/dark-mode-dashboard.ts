import { ModelResponse } from "@/types/models";
import { sanitizeModelResponseContent } from "@/lib/utils";

export const darkUmodeUdashboardgemini_2_5_pro_exp: ModelResponse = {
  id: "gemini-2-5-pro-exp-dark-mode-dashboard",
  modelId: "gemini-2-5-pro-exp",
  prompt: "Design a sleek admin dashboard UI with light and dark mode toggle, featuring an AI analytics graph. In a single-page self-contained HTML.",
  responseDate: "2025-03-25",
  type: "website",
  title: "dark-mode-dashboard",
  description: "Gemini 2.5 Pro Experimental's response",
  content: sanitizeModelResponseContent(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sleek Admin Dashboard</title>
    <script src="https://cdn.jsdelivr.net/npm/chart.js@3.7.0/dist/chart.min.js"></script>
    <style>
        /* --- Base & Variables --- */
        :root {
            --font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

            /* Light Mode Colors */
            --bg-primary-light: #f4f7fa;
            --bg-secondary-light: #ffffff;
            --text-primary-light: #2c3e50;
            --text-secondary-light: #5a7184;
            --border-light: #e2e8f0;
            --accent-light: #3498db;
            --accent-hover-light: #2980b9;
            --shadow-light: rgba(0, 0, 0, 0.05);
            --chart-grid-light: rgba(0, 0, 0, 0.1);
            --chart-label-light: #666;

            /* Dark Mode Colors */
            --bg-primary-dark: #1a202c;
            --bg-secondary-dark: #2d3748;
            --text-primary-dark: #e2e8f0;
            --text-secondary-dark: #a0aec0;
            --border-dark: #4a5568;
            --accent-dark: #4299e1;
            --accent-hover-dark: #3182ce;
            --shadow-dark: rgba(0, 0, 0, 0.2);
            --chart-grid-dark: rgba(255, 255, 255, 0.15);
            --chart-label-dark: #ccc;

            /* Default to Light Mode */
            --bg-primary: var(--bg-primary-light);
            --bg-secondary: var(--bg-secondary-light);
            --text-primary: var(--text-primary-light);
            --text-secondary: var(--text-secondary-light);
            --border-color: var(--border-light);
            --accent-color: var(--accent-light);
            --accent-hover: var(--accent-hover-light);
            --shadow-color: var(--shadow-light);
            --chart-grid-color: var(--chart-grid-light);
            --chart-label-color: var(--chart-label-light);
        }

        body.dark-mode {
            --bg-primary: var(--bg-primary-dark);
            --bg-secondary: var(--bg-secondary-dark);
            --text-primary: var(--text-primary-dark);
            --text-secondary: var(--text-secondary-dark);
            --border-color: var(--border-dark);
            --accent-color: var(--accent-dark);
            --accent-hover: var(--accent-hover-dark);
            --shadow-color: var(--shadow-dark);
            --chart-grid-color: var(--chart-grid-dark);
            --chart-label-color: var(--chart-label-dark);
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: var(--font-family);
            background-color: var(--bg-primary);
            color: var(--text-primary);
            display: flex;
            transition: background-color 0.3s ease, color 0.3s ease;
            overflow-x: hidden; /* Prevent horizontal scroll */
        }

        /* --- Layout --- */
        .dashboard {
            display: flex;
            min-height: 100vh;
            width: 100%;
        }

        .sidebar {
            width: 250px;
            background-color: var(--bg-secondary);
            padding: 25px 15px;
            display: flex;
            flex-direction: column;
            border-right: 1px solid var(--border-color);
            transition: background-color 0.3s ease, border-color 0.3s ease;
            position: fixed; /* Fixed sidebar */
            height: 100%;
            z-index: 1000;
        }

        .main-content {
            flex-grow: 1;
            padding: 25px;
            margin-left: 250px; /* Offset for fixed sidebar */
            display: flex;
            flex-direction: column;
            gap: 25px;
        }

        /* --- Sidebar --- */
        .sidebar-header {
            font-size: 1.5rem;
            font-weight: 600;
            color: var(--accent-color);
            margin-bottom: 30px;
            padding-left: 10px;
        }

        .sidebar-nav ul {
            list-style: none;
        }

        .sidebar-nav li a {
            display: flex;
            align-items: center;
            padding: 12px 15px;
            color: var(--text-secondary);
            text-decoration: none;
            border-radius: 6px;
            margin-bottom: 5px;
            transition: background-color 0.2s ease, color 0.2s ease;
        }
         .sidebar-nav li a .icon {
             margin-right: 12px;
             font-size: 1.1em; /* Adjust icon size */
             width: 20px; /* Fixed width for alignment */
             text-align: center;
         }

        .sidebar-nav li a:hover,
        .sidebar-nav li a.active {
            background-color: var(--accent-color);
            color: white; /* Adjust contrast on hover/active */
        }

         .sidebar-nav li a.active .icon,
         .sidebar-nav li a:hover .icon {
             color: white; /* Icon color matches text on hover/active */
         }


        /* --- Header --- */
        .header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            background-color: var(--bg-secondary);
            padding: 15px 25px;
            border-radius: 8px;
            box-shadow: 0 2px 10px var(--shadow-color);
            transition: background-color 0.3s ease, box-shadow 0.3s ease;
            position: sticky; /* Sticky header */
            top: 0;
            z-index: 999;
            margin: -25px -25px 0 -25px; /* Adjust to fill space, accounting for parent padding */
            padding: 15px 25px;
        }

        .search-bar input {
            padding: 8px 12px;
            border: 1px solid var(--border-color);
            border-radius: 6px;
            background-color: var(--bg-primary);
            color: var(--text-primary);
            min-width: 250px;
            transition: background-color 0.3s ease, border-color 0.3s ease, color 0.3s ease;
        }
         .search-bar input:focus {
             outline: none;
             border-color: var(--accent-color);
             box-shadow: 0 0 0 2px rgba(52, 152, 219, 0.3); /* Focus ring */
         }

        .header-actions {
            display: flex;
            align-items: center;
            gap: 20px;
        }

        /* --- Theme Toggle Switch --- */
        .theme-switch-wrapper {
            display: flex;
            align-items: center;
        }
        .theme-switch {
            display: inline-block;
            height: 24px;
            position: relative;
            width: 50px;
            margin-left: 10px;
        }
        .theme-switch input {
            display:none;
        }
        .slider {
            background-color: #ccc;
            bottom: 0;
            cursor: pointer;
            left: 0;
            position: absolute;
            right: 0;
            top: 0;
            transition: .4s;
            border-radius: 34px;
        }
        .slider:before {
            background-color: #fff;
            bottom: 3px;
            content: "";
            height: 18px;
            left: 4px;
            position: absolute;
            transition: .4s;
            width: 18px;
            border-radius: 50%;
        }
        input:checked + .slider {
            background-color: var(--accent-color);
        }
        input:checked + .slider:before {
            transform: translateX(26px);
        }
        .theme-switch-wrapper span {
            font-size: 0.9em;
            color: var(--text-secondary);
        }

        /* --- Widgets --- */
        .widgets {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 20px;
        }

        .widget {
            background-color: var(--bg-secondary);
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 10px var(--shadow-color);
            transition: background-color 0.3s ease, box-shadow 0.3s ease;
        }

        .widget h3 {
            font-size: 0.9rem;
            color: var(--text-secondary);
            margin-bottom: 8px;
            font-weight: 500;
        }

        .widget p {
            font-size: 1.8rem;
            font-weight: 600;
            color: var(--text-primary);
        }

        /* --- Analytics Graph --- */
        .analytics-graph {
            background-color: var(--bg-secondary);
            padding: 25px;
            border-radius: 8px;
            box-shadow: 0 2px 10px var(--shadow-color);
            transition: background-color 0.3s ease, box-shadow 0.3s ease;
            flex-grow: 1; /* Allow graph section to take remaining space */
            display: flex;
            flex-direction: column;
        }

        .analytics-graph h2 {
            margin-bottom: 20px;
            font-size: 1.3rem;
            font-weight: 600;
            color: var(--text-primary);
        }

        .chart-container {
             position: relative;
             height: 100%; /* Fill parent */
             width: 100%;
             flex-grow: 1; /* Ensure container grows */
             min-height: 300px; /* Minimum height for visibility */
        }

        /* --- Responsiveness --- */
        @media (max-width: 768px) {
            .sidebar {
                width: 60px; /* Collapse sidebar */
                padding: 20px 5px;
                align-items: center; /* Center icons */
            }
             .sidebar-header {
                 font-size: 1.2rem; /* Smaller logo/icon */
                 padding-left: 0;
                 text-align: center;
             }
            .sidebar-nav li a span:not(.icon) {
                display: none; /* Hide text labels */
            }
             .sidebar-nav li a {
                 justify-content: center; /* Center icon */
                 padding: 12px 0;
             }
             .sidebar-nav li a .icon {
                 margin-right: 0;
             }

            .main-content {
                margin-left: 60px; /* Adjust margin for collapsed sidebar */
                padding: 15px;
            }
            .header {
                padding: 10px 15px;
                margin: -15px -15px 0 -15px; /* Adjust sticky header margins */
            }
             .search-bar input {
                 min-width: 150px; /* Smaller search bar */
             }
            .widgets {
                grid-template-columns: 1fr; /* Stack widgets */
            }
        }

         @media (max-width: 480px) {
             .header {
                 flex-direction: column;
                 gap: 10px;
                 align-items: stretch;
             }
             .header-actions {
                 justify-content: space-between; /* Space out actions */
             }
             .search-bar {
                 width: 100%;
             }
             .search-bar input {
                 width: 100%;
             }
             .widget p {
                 font-size: 1.5rem;
             }
             .analytics-graph h2 {
                 font-size: 1.1rem;
             }
         }

    </style>
</head>
<body>
    <div class="dashboard">
        <!-- Sidebar -->
        <aside class="sidebar">
            <div class="sidebar-header">
                Admin AI
            </div>
            <nav class="sidebar-nav">
                <ul>
                    <li><a href="#" class="active"><span class="icon">📊</span><span>Dashboard</span></a></li>
                    <li><a href="#"><span class="icon">📈</span><span>Analytics</span></a></li>
                    <li><a href="#"><span class="icon">👤</span><span>Users</span></a></li>
                    <li><a href="#"><span class="icon">⚙️</span><span>Settings</span></a></li>
                    <li><a href="#"><span class="icon">❓</span><span>Support</span></a></li>
                </ul>
            </nav>
        </aside>

        <!-- Main Content -->
        <main class="main-content">
            <!-- Header -->
            <header class="header">
                <div class="search-bar">
                    <input type="text" placeholder="Search...">
                </div>
                <div class="header-actions">
                    <div class="theme-switch-wrapper">
                        <span>☀️</span>
                        <label class="theme-switch" for="theme-checkbox">
                            <input type="checkbox" id="theme-checkbox" />
                            <div class="slider round"></div>
                        </label>
                        <span>🌙</span>
                    </div>
                    <!-- Add other icons like notifications, profile here -->
                </div>
            </header>

            <!-- Widgets -->
            <section class="widgets">
                <div class="widget">
                    <h3>Total Users</h3>
                    <p>1,250</p>
                </div>
                <div class="widget">
                    <h3>Revenue (Monthly)</h3>
                    <p>$15,600</p>
                </div>
                <div class="widget">
                    <h3>Conversion Rate</h3>
                    <p>2.5%</p>
                </div>
                <div class="widget">
                    <h3>AI Tasks Pending</h3>
                    <p>5</p>
                </div>
            </section>

            <!-- AI Analytics Graph -->
            <section class="analytics-graph">
                <h2>AI Predictive User Growth</h2>
                <div class="chart-container">
                    <canvas id="aiAnalyticsChart"></canvas>
                </div>
            </section>

        </main>
    </div>

    <script>
        // --- Theme Toggle ---
        const themeToggle = document.getElementById('theme-checkbox');
        const currentTheme = localStorage.getItem('theme');

        // Apply saved theme on load
        if (currentTheme) {
            document.body.classList.add(currentTheme);
            if (currentTheme === 'dark-mode') {
                themeToggle.checked = true;
            }
        } else {
             // Optional: Detect system preference if no theme is saved
             if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                 document.body.classList.add('dark-mode');
                 themeToggle.checked = true;
                 // Optionally save this detected preference
                 // localStorage.setItem('theme', 'dark-mode');
             }
        }


        // Toggle event listener
        themeToggle.addEventListener('change', function() {
            if (this.checked) {
                document.body.classList.add('dark-mode');
                localStorage.setItem('theme', 'dark-mode');
            } else {
                document.body.classList.remove('dark-mode');
                localStorage.setItem('theme', 'light-mode'); // Use 'light-mode' or just remove item
            }
            // Note: Chart colors might need updating here if dynamic colors are implemented
            // aiChart.options.scales.x.ticks.color = document.body.classList.contains('dark-mode') ? 'var(--chart-label-dark)' : 'var(--chart-label-light)';
            // aiChart.options.scales.y.ticks.color = document.body.classList.contains('dark-mode') ? 'var(--chart-label-dark)' : 'var(--chart-label-light)';
            // aiChart.options.scales.x.grid.color = document.body.classList.contains('dark-mode') ? 'var(--chart-grid-dark)' : 'var(--chart-grid-light)';
            // aiChart.options.scales.y.grid.color = document.body.classList.contains('dark-mode') ? 'var(--chart-grid-dark)' : 'var(--chart-grid-light)';
            // aiChart.update(); // Uncomment and adjust if dynamic chart colors are needed
        });

        // --- Chart.js AI Analytics Graph ---
        const ctx = document.getElementById('aiAnalyticsChart').getContext('2d');

        // Helper function to get CSS variable values (needed for dynamic chart colors)
        // function getCssVariable(variable) {
        //     return getComputedStyle(document.documentElement).getPropertyValue(variable).trim();
        // }

        const aiChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                datasets: [
                    {
                        label: 'Actual User Growth',
                        data: [120, 150, 180, 210, 250, 280, 310, 340, null, null, null, null], // Sample historical data
                        borderColor: 'rgb(54, 162, 235)', // Blue
                        backgroundColor: 'rgba(54, 162, 235, 0.2)',
                        tension: 0.3,
                        fill: false,
                    },
                    {
                        label: 'AI Predicted Growth',
                        data: [null, null, null, null, null, null, 310, 340, 375, 410, 450, 500], // Sample predicted data starting from current
                        borderColor: 'rgb(255, 99, 132)', // Red
                        backgroundColor: 'rgba(255, 99, 132, 0.2)',
                        borderDash: [5, 5], // Dashed line for prediction
                        tension: 0.3,
                        fill: false,
                    }
            ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'top',
                         labels: {
                             // Dynamically set label color based on theme (more complex setup)
                             // color: document.body.classList.contains('dark-mode') ? getCssVariable('--chart-label-dark') : getCssVariable('--chart-label-light')
                             color: '#666' // Default color, adjust or make dynamic
                         }
                    },
                    tooltip: {
                        mode: 'index',
                        intersect: false,
                    },
                },
                scales: {
                    x: {
                        display: true,
                        title: {
                            display: true,
                            text: 'Month',
                            // color: document.body.classList.contains('dark-mode') ? getCssVariable('--chart-label-dark') : getCssVariable('--chart-label-light')
                             color: '#666'
                        },
                        ticks: {
                            // color: document.body.classList.contains('dark-mode') ? getCssVariable('--chart-label-dark') : getCssVariable('--chart-label-light')
                             color: '#666'
                        },
                        grid: {
                            // color: document.body.classList.contains('dark-mode') ? getCssVariable('--chart-grid-dark') : getCssVariable('--chart-grid-light')
                             color: 'rgba(0, 0, 0, 0.1)'
                        }
                    },
                    y: {
                        display: true,
                        title: {
                            display: true,
                            text: 'Number of Users',
                            // color: document.body.classList.contains('dark-mode') ? getCssVariable('--chart-label-dark') : getCssVariable('--chart-label-light')
                             color: '#666'
                        },
                        ticks: {
                            // color: document.body.classList.contains('dark-mode') ? getCssVariable('--chart-label-dark') : getCssVariable('--chart-label-light')
                             color: '#666'
                        },
                        grid: {
                             // color: document.body.classList.contains('dark-mode') ? getCssVariable('--chart-grid-dark') : getCssVariable('--chart-grid-light')
                              color: 'rgba(0, 0, 0, 0.1)'
                        }
                    }
                },
                interaction: {
                    mode: 'nearest',
                    axis: 'x',
                    intersect: false
                }
            }
        });

        // Optional: Add simple active state highlighting for sidebar nav
         document.querySelectorAll('.sidebar-nav a').forEach(link => {
             link.addEventListener('click', function(e) {
                 // e.preventDefault(); // Prevent actual navigation for demo
                 document.querySelector('.sidebar-nav a.active')?.classList.remove('active');
                 this.classList.add('active');
             });
         });

    </script>
</body>
</html>`)
};
