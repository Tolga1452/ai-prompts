/**
 * Tool: imagine_text_to_image
 *
 * Description: Generate a new image from a text description using Imagine and return it so the model can continue with further actions. To produce multiple images, emit multiple tool calls with distinct prompts
 */
type ImageAspectRatio =
  | "1:1" // 1:1 for square (icons, profiles)
  | "16:9" // 16:9 for wide (landscapes, cinematic)
  | "9:16" // 9:16 for tall (phone wallpapers, stories)
  | "2:3" // 2:3 for vertical (portraits, posters)
  | "3:2"; // 3:2 for horizontal photos

interface ImagineTextToImageTool {
  prompt: string; // Prompt for the image generation model. The prompt should remain faithful to what the user is likely requesting but must not present incorrect information. Do not generate images promoting hate speech or violence.
  aspect_ratio: ImageAspectRatio; // Aspect ratio of the generated image, decide it based on the user's request. 1:1 for square (icons, profiles), 16:9 for wide (landscapes, cinematic), 9:16 for tall (phone wallpapers, stories), 3:2 for horizontal photos, 2:3 for vertical (portraits, posters).
}
