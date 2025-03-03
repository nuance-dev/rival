import { ModelResponse } from "@/types/models";

export const darkModeDashboardo1: ModelResponse = {
  id: "o1-dark-mode-dashboard",
  modelId: "o1"  ,
  prompt: "Design a sleek admin dashboard UI with light and dark mode toggle, featuring an AI analytics graph. In a single-page self-contained HTML.",
  responseDate: "2025-02-28",
  type: "website"  ,
  title: "Dark Mode Dashboard"  ,
  description: "O1's response to the Tests an AI's UI design skills with theming support",
  content: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>AI Admin Dashboard</title>
  <style>
    /* 
      Global CSS Variables and Resets 
    */
    :root {
      --bg-color: #f0f2f5;
      --text-color: #333;
      --card-bg: #fff;
      --header-bg: #fff;
      --header-shadow: rgba(0, 0, 0, 0.1);
      --sidebar-bg: #fff;
      --accent-color: #7367f0;
      --transition: 0.3s ease;
    }

    /* 
      Dark Mode Variables 
      (Override the light mode variables)
    */
    .dark-mode {
      --bg-color: #212121;
      --text-color: #f3f3f3;
      --card-bg: #2a2a2a;
      --header-bg: #2a2a2a;
      --header-shadow: rgba(255, 255, 255, 0.1);
      --sidebar-bg: #2a2a2a;
    }

    /* 
      Basic Reset 
    */
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    }

    body {
      background: var(--bg-color);
      color: var(--text-color);
      transition: background var(--transition), color var(--transition);
    }

    /* 
      Header Styles 
    */
    header {
      width: 100%;
      height: 60px;
      background: var(--header-bg);
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 20px;
      box-shadow: 0 2px 5px var(--header-shadow);
      transition: background var(--transition), box-shadow var(--transition);
    }

    header .logo {
      font-weight: bold;
      font-size: 1.25rem;
    }

    .toggle-container {
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .toggle-label {
      font-size: 0.9rem;
    }

    /* 
      Light/Dark Mode Toggle Switch 
    */
    .toggle-switch {
      position: relative;
      width: 50px;
      height: 24px;
      background: #ccc;
      border-radius: 34px;
      cursor: pointer;
      transition: background var(--transition);
    }

    .toggle-switch:before {
      content: "";
      position: absolute;
      width: 20px;
      height: 20px;
      left: 2px;
      top: 2px;
      background: #fff;
      border-radius: 50%;
      transition: transform var(--transition);
    }

    /* 
      When the body has .dark-mode, move the toggle knob 
    */
    body.dark-mode .toggle-switch {
      background: var(--accent-color);
    }
    body.dark-mode .toggle-switch:before {
      transform: translateX(26px);
    }

    /* 
      Dashboard Container 
    */
    .dashboard {
      display: flex;
      height: calc(100vh - 60px);
      overflow: hidden;
    }

    /* 
      Sidebar 
    */
    .sidebar {
      width: 200px;
      background: var(--sidebar-bg);
      box-shadow: 2px 0 5px var(--header-shadow);
      transition: background var(--transition), color var(--transition), box-shadow var(--transition);
      padding: 20px;
    }

    .sidebar ul {
      list-style: none;
      margin-top: 30px;
    }

    .sidebar ul li {
      margin-bottom: 20px;
    }

    .sidebar ul li a {
      text-decoration: none;
      color: var(--text-color);
      font-size: 0.95rem;
      transition: color var(--transition);
    }

    .sidebar ul li a:hover {
      color: var(--accent-color);
    }

    /* 
      Main Content 
    */
    .main-content {
      flex: 1;
      padding: 20px;
      overflow-y: auto;
    }

    .card {
      background: var(--card-bg);
      border-radius: 8px;
      box-shadow: 0 2px 5px var(--header-shadow);
      padding: 20px;
      margin-bottom: 20px;
      transition: background var(--transition), box-shadow var(--transition);
    }

    .card h2 {
      margin-bottom: 10px;
      font-size: 1.1rem;
    }

    /* 
      Canvas for the Chart 
    */
    #analyticsChart {
      width: 100%;
      max-width: 100%;
      height: 300px;
    }
  </style>
</head>
<body>

  <!-- Header -->
  <header>
    <div class="logo">AI Admin Dashboard</div>
    <div class="toggle-container">
      <span class="toggle-label">Dark Mode</span>
      <div class="toggle-switch" id="modeToggle"></div>
    </div>
  </header>

  <!-- Dashboard Layout -->
  <div class="dashboard">
    <!-- Sidebar -->
    <div class="sidebar">
      <ul>
        <li><a href="#overview">Overview</a></li>
        <li><a href="#analytics">Analytics</a></li>
        <li><a href="#reports">Reports</a></li>
        <li><a href="#settings">Settings</a></li>
      </ul>
    </div>

    <!-- Main Content -->
    <div class="main-content">
      <div class="card">
        <h2>AI Analytics Overview</h2>
        <canvas id="analyticsChart"></canvas>
      </div>
    </div>
  </div>

  <script>
    // Dark Mode Toggle
    const toggleSwitch = document.getElementById('modeToggle');
    toggleSwitch.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
    });

    // Simple Chart Drawing (Vanilla JS)
    const canvas = document.getElementById('analyticsChart');
    const ctx = canvas.getContext('2d');
    // Resize the canvas to its displayed size
    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;

    // Example Data
    const dataPoints = [12, 25, 18, 32, 45, 38, 60, 48];
    const maxDataValue = Math.max(...dataPoints);
    const padding = 40;
    const chartWidth = canvas.width - padding * 2;
    const chartHeight = canvas.height - padding * 2;

    // Function to plot data
    function drawLineChart() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw axes
      ctx.beginPath();
      ctx.moveTo(padding, padding);
      ctx.lineTo(padding, canvas.height - padding);
      ctx.lineTo(canvas.width - padding, canvas.height - padding);
      ctx.strokeStyle = getComputedStyle(document.body).getPropertyValue('--text-color');
      ctx.lineWidth = 1;
      ctx.stroke();

      // Plot data points
      ctx.beginPath();
      dataPoints.forEach((value, index) => {
        const x = padding + (index * (chartWidth / (dataPoints.length - 1)));
        const y = (canvas.height - padding) - (value / maxDataValue) * chartHeight;
        if (index === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      });
      ctx.strokeStyle = getComputedStyle(document.body).getPropertyValue('--accent-color');
      ctx.lineWidth = 2;
      ctx.stroke();

      // Draw points
      dataPoints.forEach((value, index) => {
        const x = padding + (index * (chartWidth / (dataPoints.length - 1)));
        const y = (canvas.height - padding) - (value / maxDataValue) * chartHeight;
        ctx.beginPath();
        ctx.arc(x, y, 4, 0, Math.PI * 2);
        ctx.fillStyle = getComputedStyle(document.body).getPropertyValue('--accent-color');
        ctx.fill();
      });
    }

    // Draw chart on load
    drawLineChart();

    // Optional: Re-draw on window resize
    window.addEventListener('resize', () => {
      canvas.width = canvas.clientWidth;
      canvas.height = canvas.clientHeight;
      drawLineChart();
    });
  </script>
</body>
</html>
`
};
