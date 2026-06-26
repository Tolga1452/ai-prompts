/**
 * Tool: imagine_image_to_image
 *
 * Description: Produce an image by editing one input image by applying modifications described in a prompt and return the image. To produce multiple images, emit multiple tool calls with distinct prompts.

* Can also be used to change the aspect ratio of an image. If the user specifies an aspect ratio or orientation change, you must pass in an aspect_ratio.
 */
type ImageAspectRatio =
  | "1:1" // 1:1 for square (icons, profiles)
  | "16:9" // 16:9 for wide (landscapes, cinematic)
  | "9:16" // 9:16 for tall (phone wallpapers, stories)
  | "2:3" // 2:3 for vertical (portraits, posters)
  | "3:2"; // 3:2 for horizontal photos

interface ImagineImageToImageTool {
  prompt: string; // Prompt for the image editing model. The prompt should remain faithful to what the user is likely requesting but must not present incorrect information. Do not generate images promoting hate speech or violence.
  asset_id: string; // Asset ID of the single source image to edit.
  aspect_ratio?: ImageAspectRatio | null; // Aspect ratio of the generated image, only specify it when user asks for a specific aspect ratio. If not specified, the model will use the aspect ratio of the input image. Default null.
  use_thinking?: boolean | null; // Only set this to true when the user explicitly asks to 'think harder' (or equivalent phrasing) for this image-to-image generation. Leave unset otherwise.
}
