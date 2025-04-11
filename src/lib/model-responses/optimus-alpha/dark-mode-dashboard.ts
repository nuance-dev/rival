import { ModelResponse } from "@/types/models";
import { sanitizeModelResponseContent } from "@/lib/utils";

export const darkModeDashboardOptimusAlpha: ModelResponse = {
  id: "optimus-alpha-dark-mode-dashboard",
  modelId: "optimus-alpha",
  prompt: "Design a sleek admin dashboard UI with light and dark mode toggle, featuring an AI analytics graph. In a single-page self-contained HTML.",
  responseDate: "2025-04-11",
  type: "website",
  title: "Dark Mode Dashboard",
  description: "Optimus Alpha's response showcasing UI design skills with theming support.",
  content: sanitizeModelResponseContent(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>AI Analytics Admin Dashboard</title>
  <meta name="viewport" content="width=device-width,initial-scale=1.0">
  <!-- Google Fonts for professional look -->
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@500;600&display=swap" rel="stylesheet">
  <style>
    :root {
      --sidebar-bg: #f7f8fa;
      --sidebar-text: #495566;
      --sidebar-active-bg: #e6eafd;
      --main-bg: #ffffff;
      --card-bg: #f9fafb;
      --primary: #4776e6;
      --primary-dark: #3658b0;
      --text: #22293a;
      --muted: #8992a9;

      --shadow: 0 2px 12px rgba(18,38,63,0.04);

      --transition: .3s cubic-bezier(.4,0,.2,1);
    }

    [data-theme="dark"] {
      --sidebar-bg: #181e26;
      --sidebar-text: #bbc1ce;
      --sidebar-active-bg: #263146;
      --main-bg: #19202a;
      --card-bg: #222b3b;
      --primary: #60a3fa;
      --primary-dark: #4576ba;
      --text: #f6f7fb;
      --muted: #7a869c;
      --shadow: 0 2px 16px 0 rgba(8,16,32,0.19);
    }

    html, body {
      height: 100%;
      margin: 0;
      padding: 0;
      font-family: 'Inter', Arial, sans-serif;
      background: var(--main-bg);
      color: var(--text);
      box-sizing: border-box;
      transition: background var(--transition), color var(--transition);
    }

    body {
      min-height: 100vh;
      display: flex;
      flex-direction: row;
      overflow-x: hidden;
      background: var(--main-bg);
      transition: background var(--transition);
    }

    .sidebar {
      min-width: 220px;
      width: 220px;
      height: 100vh;
      background: var(--sidebar-bg);
      box-shadow: var(--shadow);
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding: 24px 0;
      transition: background var(--transition);
      position: fixed;
      left: 0; top: 0; bottom: 0;
      z-index: 2;
    }

    .sidebar .logo {
      font-size: 1.45rem;
      font-weight: 600;
      color: var(--primary-dark);
      letter-spacing: .03em;
      padding-left: 32px;
      margin-bottom: 38px;
    }

    .nav {
      width: 100%;
      margin-bottom: auto;
    }

    .nav-link {
      display: flex;
      align-items: center;
      padding: 10px 0 10px 32px;
      gap: 12px;
      color: var(--sidebar-text);
      font-size: 1.04rem;
      border-left: 3px solid transparent;
      cursor: pointer;
      text-decoration: none;
      transition: background var(--transition), color var(--transition), border var(--transition);
    }

    .nav-link.active, .nav-link:hover {
      background: var(--sidebar-active-bg);
      border-left: 3px solid var(--primary);
      color: var(--primary);
    }

    .nav-link svg {
      width: 21px;
      height: 21px;
    }

    .sidebar-footer {
      margin-top: 36px;
      width: 100%;
      display: flex;
      justify-content: start;
      padding-left: 32px;
    }

    .toggle {
      display: flex;
      align-items: center;
      gap: 10px;
      font-size: 15px;
      background: none;
      border: none;
      cursor: pointer;
      color: var(--text);
      transition: color var(--transition);
    }
    .toggle svg {
      width: 21px; height: 21px; vertical-align: middle;
    }

    /* MAIN */
    .main {
      margin-left: 220px;
      flex: 1;
      padding: 38px 32px 32px 32px;
      background: var(--main-bg);
      min-height: 100vh;
      transition: background var(--transition);
    }

    .topbar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 44px;
    }
    .topbar h2 {
      margin: 0;
      font-weight: 600;
      font-size: 1.7rem;
      color: var(--text);
      letter-spacing: .01em;
    }

    .user {
      display: flex;
      align-items: center;
      gap: 13px;
      background: var(--card-bg);
      border-radius: 24px;
      padding: 7px 15px 7px 7px;
      box-shadow: var(--shadow);
      font-size: 1rem;
      color: var(--text);
    }
    .user img {
      border-radius: 50%;
      width: 30px;
      height: 30px;
      display: block;
    }
    .user span {
      font-weight: 500;
    }

    /* CARDS */
    .cards {
      display: flex;
      flex-wrap: wrap;
      gap: 32px;
      margin-bottom: 38px;
    }

    .card {
      background: var(--card-bg);
      border-radius: 17px;
      box-shadow: var(--shadow);
      flex: 1 1 240px;
      min-width: 220px;
      max-width: 320px;
      padding: 28px 20px 18px 28px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      transition: background var(--transition), box-shadow var(--transition);
      position: relative;
    }
    .card .card-title {
      font-size: 1rem;
      color: var(--muted);
      margin-bottom: 7px;
      font-weight: 500;
      letter-spacing: .03em;
    }
    .card .card-value {
      font-size: 2.1rem;
      font-weight: 600;
      color: var(--text);
    }
    .card .trend {
      margin-top: 5px;
      font-size: 0.99rem;
      display: flex;
      align-items: center;
      color: var(--primary);
      font-weight: 500;
    }
    .card .trend svg {
      margin-right: 5px;
    }

    /* AI Analytics Graph Card */
    .card-graph {
      flex: 2 1 480px;
      padding: 28px 25px 22px 28px;
      min-width: 340px;
      max-width: 800px;
      display: flex;
      flex-direction: column;
      align-items: stretch;
    }
    .card-graph h3 {
      font-size: 1.1rem;
      margin-bottom: 17px;
      font-weight: 600;
      color: var(--text);
      letter-spacing: .01em;
    }
    .chart-container {
      width: 100%;
      height: 320px;
      max-height: 340px;
      display: flex;
      align-items: center;
      justify-content: center;
      position:relative;
    }

    /* Light/Dark mode chart theme overrides */
    [data-theme="dark"] .card-graph {
      background: var(--card-bg);
    }

    /* RESPONSIVE */
    @media (max-width: 1250px) {
      .cards {
        flex-direction: column;
        gap: 22px;
      }
      .card, .card-graph {
        min-width: 0;
        max-width: 100%;
        width: 100%;
      }
    }
    @media (max-width: 900px) {
      .main { padding: 24px 8px 16px 8px; }
      .sidebar { min-width: 62px; width: 62px; align-items: center;}
      .sidebar .logo, .sidebar-footer {display: none;}
      .nav-link {padding-left: 0; justify-content: center;}
      .nav-link span {display: none;}
    }
    @media (max-width: 600px) {
      .main { margin-left: 0; }
      .sidebar {position: static; height: auto;}
      .topbar {flex-direction: column; gap:20px; align-items:flex-start;}
    }

    /* Scrollbar style for dark mode */
    [data-theme="dark"] ::-webkit-scrollbar {
      width: 8px;
      background: #242c39;
    }
    [data-theme="dark"] ::-webkit-scrollbar-thumb {
      background: #323c4a;
      border-radius: 6px;
    }

  </style>
</head>
<body data-theme="light">
  <!-- SIDEBAR -->
  <nav class="sidebar" role="navigation">
    <div class="logo">AI DASH</div>
    <div class="nav">
      <a class="nav-link active" href="#">
        <svg fill="none" viewBox="0 0 26 26"><rect x="4" y="4" width="18" height="18" rx="4" stroke="currentColor" stroke-width="2"/><rect x="9" y="9" width="8" height="8" rx="2" stroke="currentColor" stroke-width="2"/></svg>
        <span>Dashboard</span>
      </a>
      <a class="nav-link" href="#">
        <svg fill="none" viewBox="0 0 26 26"><circle cx="13" cy="13" r="9" stroke="currentColor" stroke-width="2"/><path d="M13 8v5l3 3" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
        <span>Analytics</span>
      </a>
      <a class="nav-link" href="#">
        <svg fill="none" viewBox="0 0 26 26"><path d="M8 11v5a2 2 0 002 2h6a2 2 0 002-2v-5M17 8a4 4 0 10-8 0" stroke="currentColor" stroke-width="2"/></svg>
        <span>Users</span>
      </a>
      <a class="nav-link" href="#">
        <svg fill="none" viewBox="0 0 26 26"><rect x="6" y="8" width="14" height="10" rx="3" stroke="currentColor" stroke-width="2"/><path d="M13 6v2" stroke="currentColor" stroke-width="2"/><path d="M13 18v2" stroke="currentColor" stroke-width="2"/></svg>
        <span>Settings</span>
      </a>
    </div>
    <div class="sidebar-footer">
      <button class="toggle" id="theme-toggle" aria-label="Toggle light and dark mode">
        <svg id="icon-sun" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="5" stroke="currentColor" stroke-width="2"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
        <svg id="icon-moon" style="display:none" fill="none" viewBox="0 0 24 24"><path d="M21 12.79A9 9 0 01 11.21 3a7 7 0 109.79 9.79z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
        <span id="toggle-text">Dark mode</span>
      </button>
    </div>
  </nav>
  <!-- MAIN -->
  <main class="main">
    <div class="topbar">
      <h2>AI Analytics Dashboard</h2>
      <div class="user">
        <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="User photo">
        <span>Jordan T.</span>
      </div>
    </div>
    <section class="cards">
      <div class="card">
        <div class="card-title">Active Models</div>
        <div class="card-value">14</div>
        <div class="trend" title="Upward trend">
          <svg fill="none" viewBox="0 0 16 16" width="17"><path d="M2 10l4-4 4 4 4-8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>+21%
        </div>
      </div>
      <div class="card">
        <div class="card-title">API Requests (1d)</div>
        <div class="card-value">37,402</div>
        <div class="trend" style="color:#ea4d89" title="Downward trend">
          <svg style="transform:rotate(180deg)" fill="none" viewBox="0 0 16 16" width="17"><path d="M2 10l4-4 4 4 4-8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>-8%
        </div>
      </div>
      <div class="card">
        <div class="card-title">Prediction Accuracy</div>
        <div class="card-value">96.1%</div>
        <div class="trend" title="Upward trend">
          <svg fill="none" viewBox="0 0 16 16" width="17"><path d="M2 10l4-4 4 4 4-8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>+0.8%
        </div>
      </div>
      <div class="card card-graph">
        <h3>AI Model Output Trends</h3>
        <div class="chart-container">
          <canvas id="ai-analytics-chart" width="650" height="320"></canvas>
        </div>
      </div>
    </section>
  </main>
  <!-- Chart.js CDN -->
  <script src="https://cdn.jsdelivr.net/npm/chart.js@4.4.1/dist/chart.umd.min.js"></script>
  <script>
    // Light/Dark Mode Setup
    const themeToggle = document.getElementById('theme-toggle');
    const html = document.documentElement || document.body;
    const iconSun = document.getElementById('icon-sun');
    const iconMoon = document.getElementById('icon-moon');
    const toggleText = document.getElementById('toggle-text');

    function setTheme(mode) {
      html.setAttribute('data-theme', mode);
      if (mode === 'dark') {
        iconSun.style.display = 'none';
        iconMoon.style.display = '';
        toggleText.textContent = 'Light mode';
      } else {
        iconSun.style.display = '';
        iconMoon.style.display = 'none';
        toggleText.textContent = 'Dark mode';
      }
      // Store theme in local storage for persistence
      localStorage.setItem('theme', mode);
      updateChartTheme(mode);
    }

    // initial theme: check localStorage or prefers-color-scheme
    (function initTheme() {
      let theme = localStorage.getItem('theme');
      if (!theme) {
        // Check system preference
        theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      }
      setTheme(theme);
    })();

    themeToggle.addEventListener('click', function() {
      const current = html.getAttribute('data-theme');
      setTheme(current === 'light' ? 'dark' : 'light');
    });

    // AI Analytics Graph - Chart.js
    let aiChart;
    function createAIAnalyticsChart(themeMode) {
      const ctx = document.getElementById('ai-analytics-chart').getContext('2d');
      // Example data (simulate AI outputs)
      const outputSeries = {
        labels: ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [
          {
            label: 'Prediction Volume',
            data: [200, 350, 420, 410, 520, 690, 800, 780, 830, 860, 950, 1180],
            tension: 0.45,
            fill: true,
            borderColor: themeMode === 'dark' ? '#60a3fa' : '#4776e6',
            backgroundColor:  themeMode === 'dark' ?
              'rgba(96, 163, 250, 0.13)' :
              'rgba(71, 118, 230, 0.13)',
            pointBorderColor: '#fff',
            pointBackgroundColor: themeMode === 'dark' ? '#60a3fa' : '#4776e6',
            pointRadius: 5,
            pointHoverRadius: 7,
            pointBorderWidth: 2,
          },
          {
            label: 'Error Rate',
            data: [4, 4.6, 3, 2.7, 2.1, 2, 1.8, 1.59, 2.2, 2.09, 1.8, 1.7],
            type: 'line',
            yAxisID: 'y2',
            borderColor: '#ea4d89',
            backgroundColor: 'transparent',
            tension: 0.22,
            pointBorderColor: '#fff',
            pointBackgroundColor: '#ea4d89',
            pointRadius: 4,
            pointHoverRadius: 6,
            borderDash: [3,3],
          }
        ]
      };

      // Chart theme configs
      let tickText = themeMode === 'dark' ? '#bbc1ce' : '#495566';
      let gridColor = themeMode === 'dark' ? 'rgba(122,134,156,0.13)' : 'rgba(109,126,165,.10)';
      let legendText = themeMode === 'dark' ? '#7a91c2' : '#4d6091';

      return new Chart(ctx, {
        type: 'line',
        data: outputSeries,
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              labels: {
                color: legendText,
                font: { family: 'Inter', weight: '500', size: 15 }
              }
            },
            tooltip: {
              backgroundColor: themeMode === 'dark' ? "#263146" : "#fff",
              titleColor: themeMode === 'dark' ? "#a4b1d6" : "#333e5d",
              bodyColor: themeMode === 'dark' ? "#f6f7fb" : "#173671",
            }
          },
          interaction: {
            intersect: false,
            mode: 'index',
          },
          scales: {
            x: {
              ticks: { color: tickText, font: { family: 'Inter', weight: '500', size: 14 } },
              grid: { color: gridColor },
            },
            y: {
              title: { display: true, text: "Predictions", color: tickText, font: { size:13, weight: 500 } },
              ticks: {
                stepSize: 200,
                color: tickText, font: {size:13}, callback: (v)=>v
              },
              grid: { color: gridColor },
            },
            y2: {
              position: 'right',
              title: { display: true, text: "Error Rate (%)", color: tickText, font: { size:12, weight: 500 } },
              min: 0, max: 10,
              ticks: {
                color: '#ea4d89',
                callback: v=> v+'%',
                font: {size:12},
              },
              grid: { drawOnChartArea: false },
            }
          }
        }
      });
    }

    // Chart initial theme
    function getCurrentTheme() {
      return html.getAttribute('data-theme') === 'dark' ? 'dark':'light';
    }
    function updateChartTheme(mode) {
      if (aiChart) aiChart.destroy();
      aiChart = createAIAnalyticsChart(mode || getCurrentTheme());
    }
    // On page load
    document.addEventListener('DOMContentLoaded', function() {
      aiChart = createAIAnalyticsChart(getCurrentTheme());
    });
  </script>
</body>
</html>
`)
}; 