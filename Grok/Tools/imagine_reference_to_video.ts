/**
 * Tool: imagine_reference_to_video
 *
 * Description: Generate a video from multiple reference images guided by a text prompt and return the result so the model can continue with further actions. Provide `asset_ids` with two or more IDs and a required `prompt` describing the desired video.
 */
type ImageAspectRatio =
  | "1:1" // 1:1 for square (icons, profiles)
  | "16:9" // 16:9 for wide (landscapes, cinematic)
  | "9:16" // 9:16 for tall (phone wallpapers, stories)
  | "2:3" // 2:3 for vertical (portraits, posters)
  | "3:2"; // 3:2 for horizontal photos

type ReferenceVideoDuration =
  | "6" // 6 seconds.
  | "10"; // 10 seconds.

type VideoResolutionName =
  | "720p" // 720p resolution.
  | "480p"; // 480p resolution.

interface ImagineReferenceToVideoTool {
  prompt: string; // Prompt to guide the video generation model. The prompt should remain faithful to what the user is likely requesting but must not present incorrect information. Do not generate videos promoting hate speech or violence.
  asset_ids: string[]; // Asset IDs of the reference images. Provide at least 2 IDs; the images are used as style/content references for the generated video.
  aspect_ratio: ImageAspectRatio; // Aspect ratio of the generated video, decide it based on the user's request. 1:1 for square (icons, profiles), 16:9 for wide (landscapes, cinematic), 9:16 for tall (phone wallpapers, stories), 3:2 for horizontal photos, 2:3 for vertical (portraits, posters).
  duration?: ReferenceVideoDuration | null; // Duration of the video generation, either 6 or 10 seconds. Defaults to 6.
  resolution_name?: VideoResolutionName | null; // Resolution of the generated video. Either `480p` or `720p`. Defaults to 720p; specify `480p` only when the user explicitly requests lower quality.
}
