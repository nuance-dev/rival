import { ModelResponse } from "@/types/models";

export const darkModeDashboardGpt4oMini: ModelResponse = {
  id: "gpt-4o-mini-dark-mode-dashboard", // model-id-slug + challenge-id
  modelId: "gpt-4o-mini", // model-id-slug
  prompt: "Design a sleek admin dashboard UI with light and dark mode toggle, featuring an AI analytics graph. In a single-page self-contained HTML.", // The prompt extracted in Step 2
  responseDate: "2025-04-11", // user_provided_date
  type: "website", // Determined from content
  title: "Dark Mode Dashboard", // From the gpt-4o reference file
  description: "GPT-4o mini's response designing a dashboard with a light/dark mode toggle and analytics graph.", // Write a brief description
  content: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin Dashboard</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            transition: background-color 0.5s, color 0.5s;
            margin: 0;
            padding: 0;
        }
        .light-mode {
            background-color: #f8f9fa;
            color: #212529;
        }
        .dark-mode {
            background-color: #343a40;
            color: #f8f9fa;
        }
        .container {
            padding: 20px;
            max-width: 1200px;
            margin: auto;
        }
        h1 {
            text-align: center;
            margin-bottom: 20px;
        }
        .toggle-container {
            display: flex;
            justify-content: flex-end;
            margin-bottom: 20px;
        }
        .toggle {
            cursor: pointer;
            padding: 10px 15px;
            border: none;
            border-radius: 5px;
            background-color: #007bff;
            color: white;
        }
        .graph-container {
            display: flex;
            justify-content: center;
            align-items: center;
        }
        #chart {
            width: 80%;
            height: 400px;
            border: 1px solid #ccc;
            border-radius: 5px;
            margin: 0 auto;
        }
    </style>
</head>
<body class="light-mode">
    <div class="container">
        <div class="toggle-container">
            <button class="toggle" id="modeToggle">Toggle Dark/Light Mode</button>
        </div>
        <h1>Admin Dashboard</h1>
        <div class="graph-container">
            <canvas id="chart"></canvas>
        </div>
    </div>
    
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <script>
        // Toggle between light and dark mode
        const modeToggle = document.getElementById('modeToggle');
        const body = document.body;

        modeToggle.addEventListener('click', () => {
            body.classList.toggle('dark-mode');
            body.classList.toggle('light-mode');
            modeToggle.innerText = body.classList.contains('dark-mode') ? 'Toggle Light Mode' : 'Toggle Dark Mode';
        });

        // Chart.js to create the AI analytics graph
        const ctx = document.getElementById('chart').getContext('2d');
        const chart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [{
                    label: 'AI Analytics',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    data: [65, 59, 80, 81, 56, 55, 40],
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true
                    }
                },
                plugins: {
                    legend: {
                        display: true,
                        position: 'top',
                    }
                }
            }
        });
    </script>
</body>
</html>`
}; 