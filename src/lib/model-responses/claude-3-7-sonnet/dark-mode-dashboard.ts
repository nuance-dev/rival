import { ModelResponse } from "@/types/models";

export const darkModeDashboardclaude_3_7_sonnet: ModelResponse = {
  id: "claude-3-7-sonnet-dark-mode-dashboard",
  modelId: "claude-3-7-sonnet",
  prompt: "Design a sleek admin dashboard UI with light and dark mode toggle, featuring an AI analytics graph. In a single-page self-contained HTML.",
  responseDate: "2025-02-26",
  type: "website"  ,
  title: "Dark Mode Dashboard"  ,
  description: "Claude 3.7 Sonnet's response to the Tests an AI's UI design skills with theming support",
  content: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AI Admin Dashboard</title>
    <style>
        :root {
            --bg-primary: #f8f9fa;
            --bg-secondary: #ffffff;
            --text-primary: #212529;
            --text-secondary: #6c757d;
            --accent: #4361ee;
            --border: #dee2e6;
            --shadow: rgba(0, 0, 0, 0.05);
            --chart-grid: #e9ecef;
            --chart-line: #4361ee;
            --chart-point: #4361ee;
            --success: #2ecc71;
            --warning: #f39c12;
            --danger: #e74c3c;
            --info: #3498db;
        }

        [data-theme="dark"] {
            --bg-primary: #121212;
            --bg-secondary: #1e1e1e;
            --text-primary: #f8f9fa;
            --text-secondary: #adb5bd;
            --accent: #6c5ce7;
            --border: #343a40;
            --shadow: rgba(0, 0, 0, 0.2);
            --chart-grid: #343a40;
            --chart-line: #6c5ce7;
            --chart-point: #6c5ce7;
            --success: #2ecc71;
            --warning: #f39c12;
            --danger: #e74c3c;
            --info: #3498db;
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            transition: background-color 0.3s, color 0.3s;
        }

        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background-color: var(--bg-primary);
            color: var(--text-primary);
            line-height: 1.6;
        }

        .dashboard {
            display: grid;
            grid-template-columns: 240px 1fr;
            min-height: 100vh;
        }

        /* Sidebar */
        .sidebar {
            background-color: var(--bg-secondary);
            border-right: 1px solid var(--border);
            padding: 1.5rem;
            display: flex;
            flex-direction: column;
        }

        .logo {
            display: flex;
            align-items: center;
            margin-bottom: 2rem;
            font-weight: 600;
            font-size: 1.25rem;
        }

        .logo svg {
            margin-right: 0.75rem;
            fill: var(--accent);
        }

        .nav-item {
            display: flex;
            align-items: center;
            padding: 0.75rem 1rem;
            border-radius: 0.5rem;
            margin-bottom: 0.5rem;
            cursor: pointer;
            color: var(--text-secondary);
        }

        .nav-item:hover, .nav-item.active {
            background-color: var(--accent);
            color: white;
        }

        .nav-item svg {
            margin-right: 0.75rem;
        }

        .theme-toggle {
            margin-top: auto;
            display: flex;
            align-items: center;
            cursor: pointer;
            color: var(--text-secondary);
        }

        .theme-toggle svg {
            margin-right: 0.75rem;
        }

        /* Main Content */
        .main-content {
            padding: 2rem;
            overflow-y: auto;
        }

        .header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 2rem;
        }

        .search-bar {
            display: flex;
            align-items: center;
            background-color: var(--bg-secondary);
            border-radius: 0.5rem;
            padding: 0.5rem 1rem;
            box-shadow: 0 2px 5px var(--shadow);
        }

        .search-bar input {
            background: transparent;
            border: none;
            outline: none;
            color: var(--text-primary);
            margin-left: 0.5rem;
            width: 250px;
        }

        .user-profile {
            display: flex;
            align-items: center;
        }

        .user-avatar {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background-color: var(--accent);
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-weight: 600;
            margin-right: 0.75rem;
        }

        .user-info {
            display: flex;
            flex-direction: column;
        }

        .user-name {
            font-weight: 600;
        }

        .user-role {
            font-size: 0.85rem;
            color: var(--text-secondary);
        }

        /* Dashboard Cards */
        .cards {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
            gap: 1.5rem;
            margin-bottom: 2rem;
        }

        .card {
            background-color: var(--bg-secondary);
            border-radius: 0.75rem;
            padding: 1.5rem;
            box-shadow: 0 4px 6px var(--shadow);
        }

        .card-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 1rem;
        }

        .card-icon {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .card-title {
            color: var(--text-secondary);
            font-size: 0.875rem;
        }

        .card-value {
            font-size: 1.75rem;
            font-weight: 700;
            margin-bottom: 0.5rem;
        }

        .card-change {
            display: flex;
            align-items: center;
            font-size: 0.875rem;
        }

        .card-change.positive {
            color: var(--success);
        }

        .card-change.negative {
            color: var(--danger);
        }

        /* Chart Section */
        .chart-section {
            background-color: var(--bg-secondary);
            border-radius: 0.75rem;
            padding: 1.5rem;
            box-shadow: 0 4px 6px var(--shadow);
            margin-bottom: 2rem;
        }

        .chart-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 1.5rem;
        }

        .chart-title {
            font-size: 1.25rem;
            font-weight: 600;
        }

        .chart-period {
            display: flex;
            gap: 0.5rem;
        }

        .period-btn {
            padding: 0.5rem 1rem;
            border-radius: 0.5rem;
            background-color: var(--bg-primary);
            border: 1px solid var(--border);
            color: var(--text-secondary);
            cursor: pointer;
        }

        .period-btn.active {
            background-color: var(--accent);
            color: white;
            border-color: var(--accent);
        }

        .chart-container {
            height: 300px;
            position: relative;
        }

        canvas {
            width: 100%;
            height: 100%;
        }

        /* Recent Activity */
        .activity-section {
            background-color: var(--bg-secondary);
            border-radius: 0.75rem;
            padding: 1.5rem;
            box-shadow: 0 4px 6px var(--shadow);
        }

        .activity-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 1.5rem;
        }

        .activity-title {
            font-size: 1.25rem;
            font-weight: 600;
        }

        .view-all {
            color: var(--accent);
            cursor: pointer;
        }

        .activity-list {
            display: flex;
            flex-direction: column;
            gap: 1rem;
        }

        .activity-item {
            display: flex;
            align-items: center;
            padding-bottom: 1rem;
            border-bottom: 1px solid var(--border);
        }

        .activity-item:last-child {
            border-bottom: none;
            padding-bottom: 0;
        }

        .activity-icon {
            width: 36px;
            height: 36px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-right: 1rem;
        }

        .activity-content {
            flex: 1;
        }

        .activity-text {
            margin-bottom: 0.25rem;
        }

        .activity-time {
            font-size: 0.875rem;
            color: var(--text-secondary);
        }

        /* Responsive */
        @media (max-width: 992px) {
            .dashboard {
                grid-template-columns: 1fr;
            }

            .sidebar {
                display: none;
            }
        }

        @media (max-width: 768px) {
            .cards {
                grid-template-columns: 1fr;
            }

            .header {
                flex-direction: column;
                align-items: flex-start;
                gap: 1rem;
            }

            .search-bar {
                width: 100%;
            }

            .search-bar input {
                width: 100%;
            }

            .chart-header {
                flex-direction: column;
                align-items: flex-start;
                gap: 1rem;
            }
        }
    </style>
</head>
<body>
    <div class="dashboard">
        <!-- Sidebar -->
        <div class="sidebar">
            <div class="logo">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                </svg>
                <span>AI Dashboard</span>
            </div>
            <div class="nav-item active">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                    <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
                <span>Dashboard</span>
            </div>
            <div class="nav-item">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line x1="16" y1="13" x2="8" y2="13"></line>
                    <line x1="16" y1="17" x2="8" y2="17"></line>
                    <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
                <span>Analytics</span>
            </div>
            <div class="nav-item">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                </svg>
                <span>Messages</span>
            </div>
            <div class="nav-item">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
                <span>Users</span>
            </div>
            <div class="nav-item">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="3"></circle>
                    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                </svg>
                <span>Settings</span>
            </div>
            <div class="theme-toggle" id="theme-toggle">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="moon-icon">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="sun-icon" style="display: none;">
                    <circle cx="12" cy="12" r="5"></circle>
                    <line x1="12" y1="1" x2="12" y2="3"></line>
                    <line x1="12" y1="21" x2="12" y2="23"></line>
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                    <line x1="1" y1="12" x2="3" y2="12"></line>
                    <line x1="21" y1="12" x2="23" y2="12"></line>
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                </svg>
                <span class="theme-label">Dark Mode</span>
            </div>
        </div>

        <!-- Main Content -->
        <div class="main-content">
            <div class="header">
                <div class="search-bar">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="11" cy="11" r="8"></circle>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    </svg>
                    <input type="text" placeholder="Search...">
                </div>
                <div class="user-profile">
                    <div class="user-avatar">JD</div>
                    <div class="user-info">
                        <div class="user-name">John Doe</div>
                        <div class="user-role">Admin</div>
                    </div>
                </div>
            </div>

            <!-- Dashboard Cards -->
            <div class="cards">
                <div class="card">
                    <div class="card-header">
                        <div class="card-icon" style="background-color: rgba(52, 152, 219, 0.1); color: var(--info);">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                                <circle cx="9" cy="7" r="4"></circle>
                                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                            </svg>
                        </div>
                    </div>
                    <div class="card-title">Total Users</div>
                    <div class="card-value">8,249</div>
                    <div class="card-change positive">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <polyline points="18 15 12 9 6 15"></polyline>
                        </svg>
                        <span>12.5% from last month</span>
                    </div>
                </div>
                <div class="card">
                    <div class="card-header">
                        <div class="card-icon" style="background-color: rgba(46, 204, 113, 0.1); color: var(--success);">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <line x1="12" y1="1" x2="12" y2="23"></line>
                                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                            </svg>
                        </div>
                    </div>
                    <div class="card-title">Revenue</div>
                    <div class="card-value">$24,780</div>
                    <div class="card-change positive">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <polyline points="18 15 12 9 6 15"></polyline>
                        </svg>
                        <span>8.2% from last month</span>
                    </div>
                </div>
                <div class="card">
                    <div class="card-header">
                        <div class="card-icon" style="background-color: rgba(243, 156, 18, 0.1); color: var(--warning);">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                                <line x1="8" y1="21" x2="16" y2="21"></line>
                                <line x1="12" y1="17" x2="12" y2="21"></line>
                            </svg>
                        </div>
                    </div>
                    <div class="card-title">Active Sessions</div>
                    <div class="card-value">1,352</div>
                    <div class="card-change positive">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <polyline points="18 15 12 9 6 15"></polyline>
                        </svg>
                        <span>4.3% from last week</span>
                    </div>
                </div>
                <div class="card">
                    <div class="card-header">
                        <div class="card-icon" style="background-color: rgba(231, 76, 60, 0.1); color: var(--danger);">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                <polyline points="22 4 12 14.01 9 11.01"></polyline>
                            </svg>
                        </div>
                    </div>
                    <div class="card-title">Completion Rate</div>
                    <div class="card-value">68.2%</div>
                    <div class="card-change negative">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                        <span>2.8% from last week</span>
                    </div>
                </div>
            </div>

            <!-- AI Analytics Chart -->
            <div class="chart-section">
                <div class="chart-header">
                    <div class="chart-title">AI Performance Analytics</div>
                    <div class="chart-period">
                        <button class="period-btn">Day</button>
                        <button class="period-btn active">Week</button>
                        <button class="period-btn">Month</button>
                        <button class="period-btn">Year</button>
                    </div>
                </div>
                <div class="chart-container">
                    <canvas id="aiAnalyticsChart"></canvas>
                </div>
            </div>

            <!-- Recent Activity -->
            <div class="activity-section">
                <div class="activity-header">
                    <div class="activity-title">Recent Activity</div>
                    <div class="view-all">View All</div>
                </div>
                <div class="activity-list">
                    <div class="activity-item">
                        <div class="activity-icon" style="background-color: rgba(52, 152, 219, 0.1); color: var(--info);">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                                <circle cx="9" cy="7" r="4"></circle>
                                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                            </svg>
                        </div>
                        <div class="activity-content">
                            <div class="activity-text">New user <strong>Sarah Johnson</strong> registered</div>
                            <div class="activity-time">2 hours ago</div>
                        </div>
                    </div>
                    <div class="activity-item">
                        <div class="activity-icon" style="background-color: rgba(46, 204, 113, 0.1); color: var(--success);">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                        </div>
                        <div class="activity-content">
                            <div class="activity-text">AI model training <strong>completed successfully</strong></div>
                            <div class="activity-time">5 hours ago</div>
                        </div>
                    </div>
                    <div class="activity-item">
                        <div class="activity-icon" style="background-color: rgba(243, 156, 18, 0.1); color: var(--warning);">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <circle cx="12" cy="12" r="10"></circle>
                                <line x1="12" y1="8" x2="12" y2="12"></line>
                                <line x1="12" y1="16" x2="12.01" y2="16"></line>
                            </svg>
                        </div>
                        <div class="activity-content">
                            <div class="activity-text">System alert: <strong>High server load detected</strong></div>
                            <div class="activity-time">Yesterday</div>
                        </div>
                    </div>
                    <div class="activity-item">
                        <div class="activity-icon" style="background-color: rgba(231, 76, 60, 0.1); color: var(--danger);">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                                <line x1="12" y1="9" x2="12" y2="13"></line>
                                <line x1="12" y1="17" x2="12.01" y2="17"></line>
                            </svg>
                        </div>
                        <div class="activity-content">
                            <div class="activity-text"><strong>Error detected</strong> in prediction algorithm</div>
                            <div class="activity-time">2 days ago</div>
                        </div>
                    </div>
                    <div class="activity-item">
                        <div class="activity-icon" style="background-color: rgba(108, 92, 231, 0.1); color: var(--accent);">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                                <polyline points="14 2 14 8 20 8"></polyline>
                                <line x1="16" y1="13" x2="8" y2="13"></line>
                                <line x1="16" y1="17" x2="8" y2="17"></line>
                                <polyline points="10 9 9 9 8 9"></polyline>
                            </svg>
                        </div>
                        <div class="activity-content">
                            <div class="activity-text">New report <strong>"Q3 Performance"</strong> generated</div>
                            <div class="activity-time">3 days ago</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Chart.js for the analytics graph -->
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    
    <script>
        // Theme Toggle Functionality
        const themeToggle = document.getElementById('theme-toggle');
        const themeLabel = document.querySelector('.theme-label');
        const moonIcon = document.querySelector('.moon-icon');
        const sunIcon = document.querySelector('.sun-icon');
        
        // Check for saved theme preference or use preferred color scheme
        const savedTheme = localStorage.getItem('theme') || 
                          (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
        
        // Apply the saved theme on page load
        document.documentElement.setAttribute('data-theme', savedTheme);
        updateThemeToggle(savedTheme);
        
        // Toggle theme when the button is clicked
        themeToggle.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            
            updateThemeToggle(newTheme);
            updateChart();
        });
        
        function updateThemeToggle(theme) {
            if (theme === 'dark') {
                themeLabel.textContent = 'Light Mode';
                moonIcon.style.display = 'none';
                sunIcon.style.display = 'block';
            } else {
                themeLabel.textContent = 'Dark Mode';
                moonIcon.style.display = 'block';
                sunIcon.style.display = 'none';
            }
        }
        
        // AI Analytics Chart
        let aiAnalyticsChart;
        
        function initChart() {
            const ctx = document.getElementById('aiAnalyticsChart').getContext('2d');
            
            // Get current theme colors
            const style = getComputedStyle(document.documentElement);
            const chartGridColor = style.getPropertyValue('--chart-grid').trim();
            const chartLineColor = style.getPropertyValue('--chart-line').trim();
            const chartPointColor = style.getPropertyValue('--chart-point').trim();
            const textColor = style.getPropertyValue('--text-secondary').trim();
            
            // Chart data
            const data = {
                labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                datasets: [
                    {
                        label: 'Model Accuracy',
                        data: [92, 89, 94, 91, 97, 95, 98],
                        borderColor: chartLineColor,
                        backgroundColor: 'rgba(108, 92, 231, 0.1)',
                        borderWidth: 2,
                        pointBackgroundColor: chartPointColor,
                        pointRadius: 4,
                        tension: 0.3,
                        fill: true
                    },
                    {
                        label: 'Processing Time (ms)',
                        data: [120, 132, 101, 134, 90, 110, 85],
                        borderColor: 'rgba(46, 204, 113, 0.8)',
                        backgroundColor: 'rgba(46, 204, 113, 0.1)',
                        borderWidth: 2,
                        pointBackgroundColor: 'rgba(46, 204, 113, 1)',
                        pointRadius: 4,
                        tension: 0.3,
                        fill: true
                    }
                ]
            };
            
            // Chart options
            const options = {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: false,
                        min: 80,
                        grid: {
                            color: chartGridColor
                        },
                        ticks: {
                            color: textColor
                        }
                    },
                    x: {
                        grid: {
                            color: chartGridColor
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
                    },
                    tooltip: {
                        mode: 'index',
                        intersect: false
                    }
                },
                interaction: {
                    mode: 'nearest',
                    axis: 'x',
                    intersect: false
                }
            };
            
            // Create the chart
            aiAnalyticsChart = new Chart(ctx, {
                type: 'line',
                data: data,
                options: options
            });
        }
        
        function updateChart() {
            if (aiAnalyticsChart) {
                aiAnalyticsChart.destroy();
            }
            initChart();
        }
        
        // Initialize the chart when the page loads
        document.addEventListener('DOMContentLoaded', initChart);
        
        // Period buttons functionality
        const periodBtns = document.querySelectorAll('.period-btn');
        periodBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Remove active class from all buttons
                periodBtns.forEach(b => b.classList.remove('active'));
                // Add active class to clicked button
                btn.classList.add('active');
                
                // Here you would typically update the chart data based on the selected period
                // For demo purposes, we'll just simulate a data change
                if (aiAnalyticsChart) {
                    const period = btn.textContent.toLowerCase();
                    let newData;
                    
                    switch(period) {
                        case 'day':
                            newData = [95, 92, 96, 94, 98, 93, 97];
                            break;
                        case 'month':
                            newData = [88, 90, 92, 94, 93, 95, 97];
                            break;
                        case 'year':
                            newData = [82, 85, 88, 90, 92, 94, 96];
                            break;
                        default: // week
                            newData = [92, 89, 94, 91, 97, 95, 98];
                    }
                    
                    aiAnalyticsChart.data.datasets[0].data = newData;
                    aiAnalyticsChart.update();
                }
            });
        });
    </script>
</body>
</html>`
};
