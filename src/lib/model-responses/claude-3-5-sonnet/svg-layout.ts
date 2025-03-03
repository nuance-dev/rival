import { ModelResponse } from "@/types/models";

export const svgLayoutclaude_3_5_sonnet: ModelResponse = {
  id: "claude-3-5-sonnet-svg-layout",
  modelId: "claude-3-5-sonnet",
  prompt: "Generate an SVG of a pelican riding a bicycle.",
  responseDate: "2025-02-27",
  type: "svg",
  title: "SVG Layout Challenge",
  description: "Claude 3.5 Sonnet's response to the Tests an AI's ability to generate vector graphics",
  content: `<svg width="400" height="300" xmlns="http://www.w3.org/2000/svg">
  <!-- Bicycle -->
  <circle cx="260" cy="220" r="40" fill="none" stroke="black" stroke-width="3"/> <!-- Back wheel -->
  <circle cx="140" cy="220" r="40" fill="none" stroke="black" stroke-width="3"/> <!-- Front wheel -->
  <path d="M 140,220 L 200,160 L 260,220 L 200,180 L 200,160" fill="none" stroke="black" stroke-width="3"/> <!-- Frame -->
  <line x1="200" y1="160" x2="180" y2="120" stroke="black" stroke-width="3"/> <!-- Handlebar stem -->
  <path d="M 160,120 Q 180,120 200,120" fill="none" stroke="black" stroke-width="3"/> <!-- Handlebar -->
  
  <!-- Pelican -->
  <ellipse cx="200" cy="140" rx="30" ry="25" fill="#f0f0f0"/> <!-- Body -->
  <path d="M 220,130 Q 250,120 260,140" fill="none" stroke="black" stroke-width="3"/> <!-- Wing -->
  <path d="M 220,125 L 240,110 L 260,105" fill="none" stroke="black" stroke-width="3"/> <!-- Long beak -->
  <circle cx="215" cy="115" r="3" fill="black"/> <!-- Eye -->
  
  <!-- Legs -->
  <path d="M 190,160 Q 195,170 200,180" fill="none" stroke="black" stroke-width="2"/>
  <path d="M 200,160 Q 205,170 210,180" fill="none" stroke="black" stroke-width="2"/>
  
  <!-- Pedals -->
  <circle cx="200" cy="180" r="15" fill="none" stroke="black" stroke-width="2"/>
  <line x1="185" y1="180" x2="215" y2="180" stroke="black" stroke-width="3"/>
</svg>`
};
