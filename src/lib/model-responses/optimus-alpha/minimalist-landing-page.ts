import { ModelResponse } from "@/types/models";
import { sanitizeModelResponseContent } from "@/lib/utils";

export const minimalistLandingPageResponse: ModelResponse = {
  id: "optimus-alpha-minimalist-landing-page",
  modelId: "optimus-alpha",
  prompt: "Generate a single-page landing page for a new AI startup that scans your face and tells you your most likely alternate career in another timeline. In a single-page self-contained HTML.",
  responseDate: "2025-04-10",
  title: "Minimalist Landing Page",
  description: "Generates HTML, CSS, and JavaScript for a minimalist landing page.",
  type: "website",
  content: sanitizeModelResponseContent(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Parallel Paths AI - Discover Your Alternate Career!</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        body {
            margin:0;
            padding:0;
            font-family: 'Segoe UI', 'Roboto', Arial, sans-serif;
            background: linear-gradient(120deg, #6ca8f7 0%, #d3cef7 100%);
            color: #222;
            min-height:100vh;
        }
        header {
            text-align:center;
            padding: 2.5em 1em 1em 1em;
        }
        header h1 {
            margin:0 0 0.3em 0;
            font-size:2.6em;
            letter-spacing:-1px;
            color: #224985;
            font-weight: 800;
        }
        header p {
            font-size: 1.23em;
            color: #3a3a57;
            margin-bottom: 1em;
            font-weight: 500;
        }
        .container {
            max-width:400px;
            background:rgba(255,255,255,0.96);
            border-radius: 18px;
            box-shadow:0 8px 36px 0 rgba(42,59,143,0.13);
            margin:2em auto 1.5em auto;
            padding:2em 1.2em 2.4em 1.2em;
            text-align:center;
        }
        .upload-label {
            display:inline-block;
            background: #224985;
            color: #fff;
            padding: 0.7em 2em;
            border-radius: 30px;
            font-size: 1.13em;
            cursor: pointer;
            transition: background 0.2s;
            margin-bottom: 1.2em;
            font-weight:600;
        }
        .upload-label:hover {
            background: #446cd0;
        }
        input[type="file"] {
            display:none;
        }
        #preview {
            display:none;
            width: 120px;
            height: 120px;
            object-fit:cover;
            border-radius:50%;
            margin-bottom:1.1em;
            border:3px solid #6ca8f7;
        }
        #result {
            margin-top:1.5em;
            padding: 1.4em 1em;
            background: #f3eeff;
            border-radius: 14px;
            min-height: 77px;
            display:none;
        }
        #result h2 {
            margin-top:0;
            color: #6644b0;
            font-size: 1.4em;
        }
        #result p {
            margin-bottom:0.1em;
        }
        #scan-btn {
            background: #6ca8f7;
            color: #fff;
            padding:0.7em 2.2em;
            border:none;
            border-radius:30px;
            font-size:1.12em;
            font-weight:600;
            margin-top:0.8em;
            cursor:pointer;
            transition: background 0.19s;
        }
        #scan-btn:hover {
            background: #224985;
        }
        .footer {
            text-align:center;
            color:#5865a1;
            font-size:0.99em;
            margin-bottom:1.1em;
            margin-top:2.3em;
        }
        @media (max-width: 540px) {
            header h1 { font-size: 2em;}
            .container { max-width:98vw; padding:1.2em 0.5em;}
        }
    </style>
</head>
<body>
    <header>
        <h1>Parallel Paths AI</h1>
        <p>Ever wondered who you might have become in another universe?<br>
        Upload your photo and let our AI reveal your <b>alternate career!</b></p>
    </header>
    <div class="container">
        <label class="upload-label" for="face-file">Upload Your Face Photo</label>
        <input type="file" id="face-file" accept="image/*" />
        <br>
        <img id="preview" alt="Preview">
        <br>
        <button id="scan-btn" disabled>Find My Alternate Career</button>
        <div id="result"></div>
    </div>
    <div class="footer">
        &copy; 2024 Parallel Paths AI. Explore your multiverse potential.<br>
        <span style="color:#aaafd7; font-size:0.95em;">No photos are stored &ndash; all processing is instant and private.</span>
    </div>
    <script>
    // Example list of "alternate timeline" professions
    const careerPaths = [
        {
            career: "Astrophysicist",
            desc: "In another world, your curiosity for the cosmos led you to unlock the universe's mysteries."
        },
        {
            career: "Wildlife Photographer",
            desc: "Adventurous and patient, you spend your days capturing the untamed beauty of nature's creatures."
        },
        {
            career: "Jazz Musician",
            desc: "Your rhythm and improvisational flair landed you sold-out shows in vibrant jazz clubs across continents."
        },
        {
            career: "Futurist Architect",
            desc: "Visionary and creative, you design extraordinary structures in cities of tomorrow."
        },
        {
            career: "Celebrity Chef",
            desc: "Your flair in the kitchen made you a culinary legend, with flavors that inspire millions."
        },
        {
            career: "Bestselling Novelist",
            desc: "You weaved mesmerizing tales, transporting readers to fantastic worlds with every book."
        },
        {
            career: "Marine Biologist",
            desc: "Your passion for the ocean led to significant discoveries beneath the waves."
        },
        {
            career: "Humanitarian Diplomat",
            desc: "Your empathy and leadership shaped historic peace agreements around the globe."
        },
        {
            career: "Robotics Engineer",
            desc: "You built machines that changed the way humanity lives and works."
        },
        {
            career: "Olympic Athlete",
            desc: "Discipline and drive earned you praise on podiums worldwide."
        },
        {
            career: "Video Game Designer",
            desc: "You crafted immersive worlds, bringing fun and joy to millions of gamers."
        },
        {
            career: "Film Director",
            desc: "With a masterful eye, your films charged emotions and won international acclaim."
        },
        {
            career: "Space Explorer",
            desc: "Braving the unknown, you helped humanity take its first steps on distant planets."
        },
        {
            career: "Stand-up Comedian",
            desc: "Your sharp wit and humor brought joy and laughter to packed audiences everywhere."
        }
    ];

    // For a more "AI" feel, algorithm can use some basic data from the image or just randomize
    function simulateAICareer(imgDataUrl) {
        // Use a basic hash of the image dataUrl to get deterministic yet unique results per image.
        let hash = 0;
        for (let i = 0; i < imgDataUrl.length; i++) {
            hash = ((hash << 5) - hash) + imgDataUrl.charCodeAt(i);
            hash |= 0;
        }
        let idx = Math.abs(hash) % careerPaths.length;
        return careerPaths[idx];
    }

    const fileInput = document.getElementById('face-file');
    const preview = document.getElementById('preview');
    const scanBtn = document.getElementById('scan-btn');
    const resultDiv = document.getElementById('result');
    let imgDataUrl = null;

    fileInput.addEventListener('change', function(event){
        const file = event.target.files[0];
        if(!file) return;
        if(!file.type.startsWith('image/')) {
            alert('Please upload a valid image file (JPEG, PNG, etc).');
            return;
        }
        const reader = new FileReader();
        reader.onload = function(e){
            imgDataUrl = e.target.result;
            preview.src = imgDataUrl;
            preview.style.display = 'block';
            scanBtn.disabled = false;
            resultDiv.style.display='none';
            resultDiv.innerHTML = '';
        };
        reader.readAsDataURL(file);
    });

    scanBtn.addEventListener('click', function(){
        if(!imgDataUrl) return;
        scanBtn.disabled = true;
        resultDiv.style.display='block';
        resultDiv.innerHTML = "<em>Scanning your features across timelines...</em>";

        // Simulate "AI processing"...
        setTimeout(function(){
            const career = simulateAICareer(imgDataUrl);
            resultDiv.innerHTML = '<h2>Your Alternate Timeline Career:</h2><p><b>' + career.career + '</b></p><p>' + career.desc + '</p>';
            scanBtn.disabled = false;
        }, 1550);
    });

    // Clicking label triggers file input
    document.querySelector('.upload-label').addEventListener('click', function(){
        fileInput.click();
    });

    </script>
</body>
</html>`)
};