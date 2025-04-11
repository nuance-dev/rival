import { ModelResponse } from "@/types/models";

export const xboxControllerSvgGpt4oMini: ModelResponse = {
  id: "gpt-4o-mini-xbox-controller-svg", // model-id-slug + challenge-id
  modelId: "gpt-4o-mini", // model-id-slug
  prompt: "Create an SVG art of an Xbox controller with detailed buttons, joysticks, and d-pad. Use a modern, clean design style with subtle gradients.", // The prompt extracted in Step 2
  responseDate: "2025-04-11", // user_provided_date
  type: "svg", // Determined from content
  title: "Xbox Controller SVG Art", // From the gpt-4o reference file
  description: "GPT-4o mini's response to the challenge of creating a detailed SVG illustration of an Xbox controller", // Write a brief description
  content: `<svg
  version="1.1"
  id="Layer_1"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  viewBox="0 0 512 512"
  xml:space="preserve"
  width="512px"
  height="512px"
  fill="#000000"
>
  <g>
    <path
      d="M256,0c-35.3,0-64,28.7-64,64c0,21.1,10.5,39.5,26.6,50.8C187.2,133.6,128,206.3,128,288 c0,52.9,43.1,96,96,96c7.2,0,14.3-1.1,21.2-3.2c13.4,25.6,41.3,43.2,73.8,43.2c44.2,0,80-35.8,80-80 c0-22.7-9.2-43.2-23.9-57.2c16.3-12.7,27.9-31.4,27.9-52C320,28.7,291.3,0,256,0z"
      fill="#1B1B1B"
      stroke="#000000"
      stroke-width="2"
    />
    <linearGradient id="buttonGradient1" x1="0" y1="1" x2="1" y2="0">
      <stop offset="0%" stop-color="#DD6F00" />
      <stop offset="100%" stop-color="#EA8C00" />
    </linearGradient>
    <circle cx="160" cy="256" r="25" fill="url(#buttonGradient1)" />
    <linearGradient id="buttonGradient2" x1="0" y1="1" x2="1" y2="0">
      <stop offset="0%" stop-color="#EE2E00" />
      <stop offset="100%" stop-color="#FF5C00" />
    </linearGradient>
    <circle cx="256" cy="256" r="25" fill="url(#buttonGradient2)" />
    <linearGradient id="buttonGradient3" x1="0" y1="1" x2="1" y2="0">
      <stop offset="0%" stop-color="#3E9C00" />
      <stop offset="100%" stop-color="#5AD500" />
    </linearGradient>
    <circle cx="352" cy="256" r="25" fill="url(#buttonGradient3)" />
    <rect x="455" y="220" width="28" height="28" fill="#FFF" rx="5" />
    <path
      d="M160,345c-18.6,0-33.6-15-33.6-33.6s15-33.6,33.6-33.6s33.6,15,33.6,33.6S178.6,345,160,345z"
      fill="#00A4A4"
    />
    <path
      d="M320,345c-18.6,0-33.6-15-33.6-33.6s15-33.6,33.6-33.6s33.6,15,33.6,33.6S338.6,345,320,345z"
      fill="#00A4A4"
    />
    <path
      d="M256,328c-44.2,0-80-35.8-80-80s35.8-80,80-80s80,35.8,80,80S300.2,328,256,328z"
      fill="#00A4A4"
    />
    <path
      d="M220,220c-7.2,0-14.3-1.1-21.2-3.2C185.6,240.6,154,256,128,256c-21.1,0-39.5,10.5-50.8,26.6C28.7,235.3,0,206.6,0,176 c0-35.3,28.7-64,64-64c35.3,0,64,28.7,64,64c0,21.1-10.5,39.5-26.6,50.8C115.6,211.4,139.3,220,164,220c18.6,0,33.6-15,33.6-33.6 s-15-33.6-33.6-33.6s-33.6,15-33.6,33.6c0,8.3,4.7,15.6,11.6,19.1C168.7,180.8,178.6,184,188,185.4c10.3-5,8-10,8-10 c1.1-5.2,1.7-11.4,1.7-15.4s0-10.2-1.7-15.4c0,0,2.3-3.5-8-10c-9.5,1.4-18.3,4.6-25.2,8.3C207.1,163.4,210.5,175,220,179 c9.5,4.5,20-1.2,20-12c0-7.2-2.4-12.8-6.8-17.2C232.2,169.5,225,150.9,220,140C213.3,113.9,224,88,238,72c8.3-10.7,20-16,32-16c12,0,24.3,5.3,32,16"
      fill="#00B300"
    />
  </g>
</svg>`
}; 