/**
 * Tool: imagine_image_to_video
 *
 * Description: Generate a video from a single source image and return the result so the model can continue with further actions. Provide `asset_id` for the image to animate and optionally a `prompt` to guide the animation. If video requires a new aspect ratio, use imagine_image_to_image first.

Use for quick animations.
 */
type VideoDuration =
  | "6" // 6 seconds.
  | "10" // 10 seconds.
  | "15"; // 15 seconds.

type VideoResolutionName =
  | "720p" // 720p resolution.
  | "480p"; // 480p resolution.

interface ImagineImageToVideoTool {
  asset_id: string; // Asset ID of the source image to animate.
  prompt?: string | null; // Optional prompt to guide the video generation model. The prompt should remain faithful to what the user is likely requesting but must not present incorrect information. Do not generate videos promoting hate speech or violence. If omitted, a natural animation would apply automatically.
  duration?: VideoDuration | null; // Duration of the video generation: 6, 10, or 15 seconds. Default to 6 unless the user requests longer.
  resolution_name?: VideoResolutionName | null; // Resolution of the generated video. Either `480p` or `720p`. Defaults to 720p; specify `480p` only when the user explicitly requests lower quality.
}
