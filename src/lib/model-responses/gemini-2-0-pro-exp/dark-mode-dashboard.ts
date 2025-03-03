import { ModelResponse } from "@/types/models";

export const darkModeDashboardgemini_2_0_pro_exp: ModelResponse = {
  id: "gemini-2-0-pro-exp-dark-mode-dashboard",
  modelId: "gemini-2-0-pro-exp",
  prompt: "Design a sleek admin dashboard UI with light and dark mode toggle, featuring an AI analytics graph. In a single-page self-contained HTML.",
  responseDate: "2025-02-27",
  type: "website",
  title: "Dark Mode Dashboard",
  description: "Gemini 2.0 Pro Exp's response to the Tests an AI's UI design skills with theming support",
  content: `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AI Analytics Dashboard</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
        integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <style>
        /* General Styles */
        body {
            font-family: sans-serif;
            margin: 0;
            padding: 0;
            transition: background-color 0.3s, color 0.3s;
        }

        .container {
            display: flex;
            height: 100vh;
        }

        /* Sidebar */
        .sidebar {
            width: 250px;
            background-color: #f0f0f0;
            padding: 20px;
            box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
            transition: background-color 0.3s;
        }
        .sidebar.dark {
            background-color: #333;
        }

        .sidebar h1 {
            margin-bottom: 20px;
            font-size: 1.5em;
            color: #333;  /* Light mode text color */
        }
        .sidebar.dark h1 {
          color: #eee;
        }

        .sidebar ul {
            list-style: none;
            padding: 0;
        }

        .sidebar li {
            margin-bottom: 10px;
        }

        .sidebar a {
            text-decoration: none;
            color: #555;
            display: block;
            padding: 10px;
            border-radius: 5px;
            transition: background-color 0.3s, color 0.3s;
        }
         .sidebar.dark a {
                color: #ccc;
         }

        .sidebar a:hover {
            background-color: #ddd;
            color: #333;
        }
        .sidebar.dark a:hover {
            background-color: #444;
            color:#eee
        }

        .sidebar a.active {
            background-color: #007bff;
            color: white;
        }
        .sidebar.dark .sidebar a.active{
            background-color: #007bff;
            color: white;
        }

        /* Main Content */
        .main-content {
            flex: 1;
            padding: 20px;
            background-color: #fff;
            transition: background-color 0.3s, color 0.3s;
        }
        .main-content.dark {
            background-color: #222;
            color: #eee;
        }
        .main-content.dark .card {
            background-color: #444;
            color: #eee;
        }

        /* Top Bar */
        .top-bar {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 20px;
        }
        .top-bar h2{
            color: #333;
        }
        .top-bar.dark h2{
            color:#eee
        }

        /* Dark Mode Toggle */
        .dark-mode-toggle {
            cursor: pointer;
            display: flex;
            align-items: center;  /* Center the icon vertically */
        }

        .dark-mode-toggle i {
            font-size: 1.2em;
            margin-right: 5px;
        }

        /* Card Styles */
        .card {
            background-color: #f9f9f9;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            padding: 20px;
            margin-bottom: 20px;
            transition: background-color 0.3s, color 0.3s;
        }

        .card h3 {
            margin-top: 0;
            margin-bottom: 10px;
            font-size: 1.2em;
        }

        /* Chart Container */
        #chartContainer {
            height: 300px; /* Fixed height for the chart */
        }
        .chart-container-wrapper{
            height: 350px;
            overflow:hidden;
        }
    </style>
</head>

<body>
    <div class="container">
        <aside class="sidebar">
            <h1>Dashboard</h1>
            <ul>
                <li><a href="#" class="active"><i class="fas fa-home"></i> Home</a></li>
                <li><a href="#"><i class="fas fa-chart-line"></i> Analytics</a></li>
                <li><a href="#"><i class="fas fa-users"></i> Users</a></li>
                <li><a href="#"><i class="fas fa-cog"></i> Settings</a></li>
            </ul>
        </aside>

        <main class="main-content">
            <div class="top-bar">
                <h2>AI Analytics Overview</h2>
                <div class="dark-mode-toggle" id="darkModeToggle">
                    <i class="fas fa-moon"></i>
                    <span>Dark Mode</span>
                </div>
            </div>

            <div class="card">
                <h3>Key Metrics</h3>
                <p>Some key metrics and insights here...</p>
            </div>

            <div class="card chart-container-wrapper">
                <h3>AI Performance</h3>
                 <div id="chartContainer">
                   <canvas id="myChart"></canvas>
                 </div>
            </div>
        </main>
    </div>

    <script>
        // Dark Mode Toggle
        const darkModeToggle = document.getElementById('darkModeToggle');
        const body = document.body;
        const sidebar = document.querySelector('.sidebar');
        const mainContent = document.querySelector('.main-content');
        const topBar = document.querySelector('.top-bar');


        darkModeToggle.addEventListener('click', () => {
            body.classList.toggle('dark'); //Not strictly necessary. For body bg-color
            sidebar.classList.toggle('dark');
            mainContent.classList.toggle('dark');
            topBar.classList.toggle('dark');


            if (body.classList.contains('dark')) {
                darkModeToggle.innerHTML = '<i class="fas fa-sun"></i> Light Mode';
            } else {
                darkModeToggle.innerHTML = '<i class="fas fa-moon"></i> Dark Mode';
            }
        });



      // Chart.js Initialization -  AI Analytics Graph
        const ctx = document.getElementById('myChart').getContext('2d');
        const myChart = new Chart(ctx, {
            type: 'line', // Change chart type as needed (bar, pie, etc.)
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                datasets: [{
                    label: 'AI Model Accuracy',
                    data: [65, 70, 75, 82, 88, 90, 92, 95, 93, 89, 91, 94],
                    borderColor: 'rgba(0, 123, 255, 1)', // Blue
                    backgroundColor: 'rgba(0, 123, 255, 0.2)',
                    borderWidth: 2,
                    fill: true,
                },
                {
                    label: 'User Engagement',
                    data: [20, 35, 45, 50, 65, 70, 75, 68, 72, 80, 85, 90],
                    borderColor: 'rgba(255, 99, 132, 1)',  // Red
                    backgroundColor: 'rgba(255, 99, 132, 0.2)', // Red with transparency
                    borderWidth: 2,
                    fill: true,
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false, //  Allows the chart to fill its container
                scales: {
                    y: {
                        beginAtZero: true
                    }
                },
                plugins: {  //Correct placement of plugins
                    legend: {
                         position: 'top',
                    },
                }

            }
        });

    </script>
</body>

</html>`
};
