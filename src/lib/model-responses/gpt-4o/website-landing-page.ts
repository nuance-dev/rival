import { ModelResponse } from "@/types/models";

export const wavefrontLandingPage: ModelResponse = {
  id: "gpt4o-website-landing-page",
  modelId: "gpt-4o",
  prompt: `Design a modern, minimal landing page for a music streaming app called "Wavefront" that focuses on indie artists. The landing page should have a hero section, features section, and call-to-action. Use a color scheme of deep purples and teals. In a single-page self-contained HTML.`,
  responseDate: "2025-02-28",
  type: "website"  ,
  title: "Music App Landing Page"  ,
  description: "Modern landing page for a music streaming service"  ,
  content: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Wavefront - Indie Music Streaming</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap" rel="stylesheet">
    <script src="https://kit.fontawesome.com/a076d05399.js" crossorigin="anonymous"></script>
    <style>
        :root {
            --primary: #2D1E6B;
            --secondary: #1BA098;
            --text-light: #f5f5f5;
            --text-dark: #ddd;
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Poppins', sans-serif;
        }

        body {
            background-color: var(--primary);
            color: var(--text-light);
            text-align: center;
        }

        .hero {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background: linear-gradient(135deg, var(--primary), var(--secondary));
            padding: 20px;
            text-align: center;
        }

        .hero h1 {
            font-size: 3rem;
            font-weight: 600;
        }

        .hero p {
            font-size: 1.2rem;
            margin: 10px 0 20px;
        }

        .hero button {
            background: var(--secondary);
            color: var(--text-light);
            border: none;
            padding: 15px 30px;
            font-size: 1.1rem;
            cursor: pointer;
            border-radius: 30px;
            transition: 0.3s ease;
        }

        .hero button:hover {
            background: #157e79;
        }

        .features {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 30px;
            padding: 80px 20px;
            background: var(--primary);
        }

        .feature {
            flex: 1 1 300px;
            max-width: 350px;
            text-align: center;
            padding: 20px;
        }

        .feature i {
            font-size: 2.5rem;
            color: var(--secondary);
            margin-bottom: 15px;
        }

        .feature h3 {
            font-size: 1.5rem;
            margin-bottom: 10px;
        }

        .cta {
            background: var(--secondary);
            padding: 50px 20px;
            color: var(--text-light);
        }

        .cta h2 {
            font-size: 2rem;
            margin-bottom: 20px;
        }

        .cta button {
            background: var(--primary);
            color: var(--text-light);
            border: none;
            padding: 15px 30px;
            font-size: 1.1rem;
            cursor: pointer;
            border-radius: 30px;
            transition: 0.3s ease;
        }

        .cta button:hover {
            background: #1c1451;
        }

        @media (max-width: 768px) {
            .hero h1 {
                font-size: 2.5rem;
            }

            .hero p {
                font-size: 1rem;
            }

            .cta h2 {
                font-size: 1.7rem;
            }
        }
    </style>
</head>
<body>

    <section class="hero">
        <h1>Discover Indie Music Like Never Before</h1>
        <p>Stream handpicked indie tracks and support emerging artists worldwide.</p>
        <button>Start Listening</button>
    </section>

    <section class="features">
        <div class="feature">
            <i class="fas fa-music"></i>
            <h3>Curated Indie Playlists</h3>
            <p>Handcrafted selections featuring the best emerging artists.</p>
        </div>
        <div class="feature">
            <i class="fas fa-headphones"></i>
            <h3>Ad-Free Streaming</h3>
            <p>Enjoy uninterrupted music with a premium experience.</p>
        </div>
        <div class="feature">
            <i class="fas fa-users"></i>
            <h3>Support Independent Artists</h3>
            <p>Every stream directly benefits indie musicians.</p>
        </div>
    </section>

    <section class="cta">
        <h2>Join the Indie Music Revolution</h2>
        <button>Get Started</button>
    </section>

</body>
</html>
`
}; 