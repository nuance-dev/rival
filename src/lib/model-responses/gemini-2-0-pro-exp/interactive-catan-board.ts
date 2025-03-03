import { ModelResponse } from "@/types/models";
import { sanitizeModelResponseContent } from "@/lib/utils";

export const interactiveCatanBoardgemini_2_0_pro_exp: ModelResponse = {
  id: "gemini-2-0-pro-exp-interactive-catan-board",
  modelId: "gemini-2-0-pro-exp",
  prompt: "Create a web app with an interactive hex grid like Settlers of Catan, where the number of hexes can be adjusted using a slider. In a single-page self-contained HTML.",
  responseDate: "2025-02-27",
  type: "website",
  title: "Interactive Catan Board",
  description: "Gemini 2.0 Pro Exp's response to the Tests an AI's ability to create interactive web elements",
  content: sanitizeModelResponseContent(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Interactive Hex Grid</title>
    <style>
        body {
            font-family: sans-serif;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            min-height: 100vh;
            margin: 0;
            background-color: #f0f0f0;
        }

        #container {
            position: relative; /* Important for hex positioning */
            width: 80%; /* Adjust as needed */
            max-width: 800px; /* Limit max width */
            margin: 20px auto;
            background-color: white;
            border: 1px solid #ccc;
            padding: 20px;
            box-sizing: border-box; /* Include padding in width */
        }

        #hex-grid {
          display: flex;
          flex-wrap: wrap;
          justify-content: center; /* Center the hexes horizontally */
          width: 100%; /* Take full width of container */
        }


        .hex {
            position: relative;  /* For centering text/number */
            width: 100px;       /*  Initial width, adjust as needed */
            height: 115.47px;  /*  Calculated height based on width (sqrt(3)/2 * width) */
            background-color: #ddd; /* Default background */
            margin: -14px; /* Negative margin to create overlap */
            clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
            display: flex;            /* Use flexbox for centering content */
            align-items: center;     /* Center vertically */
            justify-content: center; /* Center horizontally */
            cursor: pointer;
            transition: background-color 0.3s ease;
        }

        .hex:hover {
            background-color: #ccc;
        }

        .hex-number {
            font-size: 24px;
            font-weight: bold;
            color: #333;
        }


        /* Styling for rows to create the staggered effect */
         .hex-row {
              display: flex;        /*  Each row is a flex container */
              /* margin-bottom: -28.8675px;  Negative margin to adjust row spacing */
         }

         .hex-row:nth-child(odd) { /* Offset every odd row */
              margin-left: 50px; /*  Half of the hex width */
         }
         .hex-row:nth-child(even) .hex:first-child{
            margin-left: 0;
         }
        .slider-container {
            margin-bottom: 20px;
            text-align: center;  /* Center the slider and label */
            width: 80%;       /* Match the grid width */
            max-width: 800px;  /* Match the grid max-width */
        }

        input[type=range] {
            width: 100%;
            margin-top: 10px;
        }
         #slider-value {
             font-size: 1.2em;
             font-weight: bold;
         }

    </style>
</head>
<body>
    <h1>Interactive Hex Grid</h1>

    <div class="slider-container">
        <label for="hex-slider">Number of Hexes (per row):</label>
        <input type="range" id="hex-slider" min="3" max="10" value="5">
        <div id="slider-value">5</div> <!-- Display the slider value -->
    </div>


    <div id="container">
        <div id="hex-grid">
            <!-- Hexagons will be generated here -->
        </div>
    </div>

    <script>
        const hexGrid = document.getElementById('hex-grid');
        const hexSlider = document.getElementById('hex-slider');
        const sliderValueDisplay = document.getElementById('slider-value');

        function generateHexGrid(hexesPerRow) {
            hexGrid.innerHTML = ''; // Clear previous grid

            let totalHexes = 3 * hexesPerRow * hexesPerRow - 3 * hexesPerRow + 1;  // Formula for total hexes in Catan-like pattern
            let hexNumber = 1;

              // Calculate the number of rows needed based on a Catan-like pattern.  It's not simply a square grid.
            let numRows = 2 * hexesPerRow - 1;

            for (let row = 0; row < numRows; row++) {
               const hexRow = document.createElement('div');
               hexRow.classList.add('hex-row');

                let hexesInThisRow;
                // Determine the number of hexes in the current row
                if (row < hexesPerRow) {
                   hexesInThisRow = hexesPerRow + row; // Increasing hexes
                } else {
                   hexesInThisRow = 3 * hexesPerRow - 2 - row;  // Decreasing hexes.
                }


               for (let i = 0; i < hexesInThisRow; i++) {
                   const hex = document.createElement('div');
                   hex.classList.add('hex');

                   const hexNumberSpan = document.createElement('span');
                   hexNumberSpan.classList.add('hex-number');
                   hexNumberSpan.textContent = hexNumber++;  // Add a number to the hex
                   hex.appendChild(hexNumberSpan);

                    hex.addEventListener('click', () => {
                        // Simple color change on click.  Expand as needed.
                        const currentColor = hex.style.backgroundColor;
                        hex.style.backgroundColor = currentColor === 'red' ? '#ddd' : 'red';
                    });


                   hexRow.appendChild(hex);
               }
                 hexGrid.appendChild(hexRow);
            }
            adjustHexSizes();  // Call adjustHexSizes after generating the grid

        }
          function adjustHexSizes() {
             const containerWidth = document.getElementById('container').offsetWidth;
             const hexesPerRow = parseInt(hexSlider.value);
             let hexWidth = (containerWidth * 0.9) / (hexesPerRow * 2);  //Calculate initial width, *0.9 for marging
              //Adjust the hex with if it is too large and overflows.  This is a quick fix.  Better to calculate based on rows *and* columns.
              if(hexWidth * 2 * hexesPerRow > containerWidth)
              {
                  hexWidth = (containerWidth * 0.9)/ (hexesPerRow*2);
              }

             const hexHeight = hexWidth * 1.1547;  // Maintain aspect ratio (sqrt(3)/2)

             const hexes = document.querySelectorAll('.hex');
             hexes.forEach(hex => {
                 hex.style.width = hexWidth + "px";
                 hex.style.height = hexHeight + "px";
                 //Adjust font size
                  const hexNumberSpan = hex.querySelector('.hex-number');
                 if (hexNumberSpan) {
                      hexNumberSpan.style.fontSize = (hexWidth * 0.4) + "px"; // Adjust as needed
                 }
             });

              // Adjust margins based on the calculated hex width
             const hexRows = document.querySelectorAll('.hex-row');
             let topMargin = -0.25 * hexHeight;

             hexRows.forEach((row, index) => {
                  // Adjust top margin of rows
                 if(index > 0) //Add top margin for all rows except the top one
                    row.style.marginTop = topMargin + "px";
                 //Adjust left margin for odd rows
                 if(index % 2 == 0){
                    row.style.marginLeft = (hexWidth/2) + "px";
                 } else {
                     row.style.marginLeft = "0px";
                 }
             });
         }

        // Initial grid generation
        generateHexGrid(parseInt(hexSlider.value));

        // Update grid on slider change
        hexSlider.addEventListener('input', () => {
            const hexesPerRow = parseInt(hexSlider.value);
             sliderValueDisplay.textContent = hexesPerRow;
            generateHexGrid(hexesPerRow);
        });

          window.addEventListener('resize', adjustHexSizes); // Adjust sizes on window resize

    </script>
</body>
</html>`)
};
