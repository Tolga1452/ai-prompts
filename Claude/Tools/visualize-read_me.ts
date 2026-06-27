/**
 * Tool: visualize:read_me
 * 
 * Description: Returns required context for show_widget (CSS variables, colors, typography, layout rules, examples). Call before your first show_widget call. Call again later if you need a different module. Do NOT mention or narrate this call to the user — it is an internal setup step. Call it silently and proceed directly to the visualization in your response.
 */

interface VisualizeReadMeInput {
  modules: ("diagram" | "mockup" | "interactive" | "data_viz" | "art" | "chart" | "elicitation")[]; // Which module(s) to load. Pick all that fit.
  platform?: "mobile" | "desktop" | "unknown"; // The client platform the widget will render on. Pass 'mobile' when your system prompt indicates a mobile client (narrow ~380px viewport) so SVG viewBox and layout guidance are sized accordingly; otherwise pass 'desktop'. Defaults to 'unknown' (desktop sizing).
}
