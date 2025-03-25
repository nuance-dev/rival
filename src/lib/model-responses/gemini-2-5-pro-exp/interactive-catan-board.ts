import { ModelResponse } from "@/types/models";
import { sanitizeModelResponseContent } from "@/lib/utils";

export const interactiveUcatanUboardgemini_2_5_pro_exp: ModelResponse = {
  id: "gemini-2-5-pro-exp-interactive-catan-board",
  modelId: "gemini-2-5-pro-exp",
  prompt: "Create a web app with an interactive hex grid like Settlers of Catan, where the number of hexes can be adjusted using a slider. In a single-page self-contained HTML.",
  responseDate: "2025-03-25",
  type: "text",
  title: "interactive-catan-board",
  description: "Gemini 2.5 Pro Experimental's response",
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
            padding: 20px;
            background-color: #f0f0f0;
        }

        .controls {
            margin-bottom: 20px;
            background-color: #fff;
            padding: 15px;
            border-radius: 8px;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
            display: flex;
            align-items: center;
            gap: 10px; /* Spacing between label, slider, and count */
        }

        label {
            font-weight: bold;
        }

        input[type="range"] {
            width: 200px;
            cursor: pointer;
        }

        #hex-count-display {
            min-width: 30px; /* Ensure space for 3 digits */
            text-align: right;
            font-weight: bold;
            background-color: #e9e9e9;
            padding: 5px 8px;
            border-radius: 4px;
        }

        /* --- Hex Grid Styles --- */
        #hex-grid-container {
            /* Using padding to create space around the grid */
            padding: 10px;
            /* Max width to prevent grid from becoming too wide on large screens */
            max-width: 90vw;
            overflow-x: auto; /* Add scroll if too wide */
        }

        .hex-row {
            clear: left; /* Ensure rows stack vertically */
            margin-bottom: -26px; /* Overlap rows vertically - adjust based on hex size */
        }

        .hex {
            /* Basic Hex Dimensions - Adjust these together */
            --hex-width: 100px;
            --hex-height: calc(var(--hex-width) * 0.866); /* approx sqrt(3)/2 */
            --hex-margin: 2px; /* Gap between hexes */
            --hex-total-width: calc(var(--hex-width) + (2 * var(--hex-margin)));
            --hex-total-height: calc(var(--hex-height) + (2 * var(--hex-margin)));

            /* Calculated border widths */
            --hex-border-size-h: calc(var(--hex-width) / 2);
            --hex-border-size-v: calc(var(--hex-height) / 2);

            /* --- The Hex Shape --- */
            float: left; /* Allows hexes to sit side-by-side */
            position: relative;
            width: var(--hex-width);
            height: var(--hex-height);
            background-color: #6C9; /* Default hex color */
            margin: var(--hex-border-size-v) var(--hex-margin); /* Top/Bottom margin creates vertical space */
            margin-bottom: calc(var(--hex-border-size-v) + var(--hex-margin)); /* Extra bottom margin */
            border-radius: 2px; /* Slight rounding */
            box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
            transition: background-color 0.2s ease;
            cursor: pointer;
        }

        .hex::before,
        .hex::after {
            content: "";
            position: absolute;
            width: 0;
            /* Make borders thick enough to form the points */
            border-left: var(--hex-border-size-h) solid transparent;
            border-right: var(--hex-border-size-h) solid transparent;
            /* Prevent pseudo-elements from capturing clicks */
            pointer-events: none;
            /* Position correctly relative to the hex's calculated center */
             left: 0; /* Align with the main div's left edge */
        }

        .hex::before {
            /* Top triangle */
            bottom: 100%; /* Position above the main rectangle */
            border-bottom: var(--hex-border-size-v) solid #6C9; /* Match background */
        }

        .hex::after {
            /* Bottom triangle */
            top: 100%; /* Position below the main rectangle */
            width: 0;
            border-top: var(--hex-border-size-v) solid #6C9; /* Match background */
        }

        /* --- Grid Layout --- */
        /* Offset every second row */
        .hex-row:nth-child(even) {
            margin-left: calc(var(--hex-total-width) / 2); /* Shift right by half a hex width + margin */
        }

        /* Simple hover effect */
        .hex:hover {
            background-color: #8ed6aa; /* Lighter shade */
        }
        .hex:hover::before {
             border-bottom-color: #8ed6aa;
        }
         .hex:hover::after {
             border-top-color: #8ed6aa;
        }

        /* Simple active effect */
        .hex.active {
             background-color: #4a7c4f; /* Darker shade */
             transform: scale(0.98); /* Slight shrink */
             transition: background-color 0.05s ease, transform 0.05s ease;
        }
        .hex.active::before {
             border-bottom-color: #4a7c4f;
        }
         .hex.active::after {
             border-top-color: #4a7c4f;
        }

    </style>
</head>
<body>

    <div class="controls">
        <label for="hex-slider">Number of Hexes:</label>
        <input type="range" id="hex-slider" name="hex-slider" min="1" max="100" value="19" step="1">
        <span id="hex-count-display">19</span>
    </div>

    <div id="hex-grid-container">
        <!-- Hex grid will be generated here by JavaScript -->
    </div>

    <script>
        const slider = document.getElementById('hex-slider');
        const countDisplay = document.getElementById('hex-count-display');
        const gridContainer = document.getElementById('hex-grid-container');

        // --- Generate Hex Grid Function ---
        function generateHexGrid(count) {
            gridContainer.innerHTML = ''; // Clear previous grid
            countDisplay.textContent = count; // Update display

            if (count <= 0) return;

            // --- Simple Layout Logic ---
            // Try to make the grid roughly square-ish/circular
            // This is approximate and doesn't create a perfect Catan shape
            const cols = Math.ceil(Math.sqrt(count * 1.1)); // Adjust factor slightly for better fit
            let hexesPlaced = 0;
            let rowNum = 0;

            while (hexesPlaced < count) {
                const rowDiv = document.createElement('div');
                rowDiv.classList.add('hex-row');
                rowNum++;

                // Determine hexes in this row (can adjust logic for different shapes)
                let hexesInThisRow = 0;
                for (let j = 0; j < cols && hexesPlaced < count; j++) {
                    const hexDiv = document.createElement('div');
                    hexDiv.classList.add('hex');
                    hexDiv.dataset.row = rowNum; // Optional: store row/col info
                    hexDiv.dataset.col = j + 1;

                    // --- Basic Interactivity ---
                    hexDiv.addEventListener('click', () => {
                        // Toggle an 'active' class for feedback
                        hexDiv.classList.add('active');
                        // Update colors to match active state immediately
                        const activeColor = '#4a7c4f';
                        hexDiv.style.backgroundColor = activeColor;
                        const before = hexDiv.pseudoStyle('before');
                        const after = hexDiv.pseudoStyle('after');
                        if(before) before.borderBottomColor = activeColor;
                        if(after) after.borderTopColor = activeColor;

                        // Remove active state after a short delay
                        setTimeout(() => {
                             hexDiv.classList.remove('active');
                             // Reset colors (rely on CSS class rules)
                             hexDiv.style.backgroundColor = '';
                             if(before) before.borderBottomColor = '';
                             if(after) after.borderTopColor = '';
                        }, 150); // 150ms delay
                    });

                    rowDiv.appendChild(hexDiv);
                    hexesPlaced++;
                    hexesInThisRow++;
                }

                if (hexesInThisRow > 0) {
                    gridContainer.appendChild(rowDiv);
                }
            }
             // Recalculate pseudo-element styles if needed after DOM change (especially for click)
            updatePseudoStyles();
        }

        // Helper to access pseudo-element styles (limited capability in JS)
        // NOTE: Direct modification of pseudo-element styles via JS is tricky.
        // It's often better to toggle classes as done above. This helper is more for reading.
        // For *setting* border colors on click, we temporarily override inline style.
        Element.prototype.pseudoStyle = function(pseudoElement) {
            try {
                // Check if pseudoElement starts with ::, add if not.
                const pseudo = pseudoElement.startsWith('::') ? pseudoElement : '::' + pseudoElement;
                return window.getComputedStyle(this, pseudo);
            } catch(e) {
                console.error("Error accessing pseudo-style:", e);
                return null;
            }
        }

        // Helper function to ensure pseudo styles are applied correctly (mainly for the click effect)
        // This forces CSS rules to be re-evaluated.
        function updatePseudoStyles() {
            const hexes = gridContainer.querySelectorAll('.hex');
            // Trigger reflow/repaint which might help update pseudo-elements in some browsers
             gridContainer.style.display = 'none';
             gridContainer.offsetHeight; // No need to store this, just forces reflow
             gridContainer.style.display = '';

             // Re-apply base colors via style attribute initially (needed for direct manipulation later)
             // This ensures the ::before and ::after match the initial color if we change it via JS
             const baseColor = getComputedStyle(document.documentElement).getPropertyValue('--base-hex-color') || '#6C9'; // Get from CSS var or default
             hexes.forEach(hex => {
                const before = hex.pseudoStyle('before');
                const after = hex.pseudoStyle('after');
                 // Note: We can't *set* pseudo styles directly this way.
                 // The click handler sets inline styles temporarily.
             });
        }

        // --- Event Listener ---
        slider.addEventListener('input', (event) => {
            const count = parseInt(event.target.value, 10);
            generateHexGrid(count);
        });

        // --- Initial Grid Generation ---
        // Define the base color as a CSS variable for easier access if needed
        document.documentElement.style.setProperty('--base-hex-color', '#6C9');
        generateHexGrid(parseInt(slider.value, 10));

    </script>

</body>
</html>`)
};
