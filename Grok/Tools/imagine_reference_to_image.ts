/**
 * Tool: imagine_reference_to_image
 *
 * Description: Produce one image by combining multiple reference images with a text prompt and return the result so the model can continue with further actions. Provide `asset_ids` with 2–5 IDs. For editing a single source image only, use `imagine_image_to_image`. In cases that involve a many image to one output image transformation, use this tool. To produce multiple images, emit multiple tool calls with distinct prompts. This is a tool powered by a transfusion model.
 */
type ImageAspectRatio =
  | "1:1" // 1:1 for square (icons, profiles)
  | "16:9" // 16:9 for wide (landscapes, cinematic)
  | "9:16" // 9:16 for tall (phone wallpapers, stories)
  | "2:3" // 2:3 for vertical (portraits, posters)
  | "3:2"; // 3:2 for horizontal photos

interface ImagineReferenceToImageTool {
  prompt: string; // Prompt for the image editing model. The prompt should remain faithful to what the user is likely requesting but must not present incorrect information. Do not generate images promoting hate speech or violence.
  asset_ids: string[]; // Asset IDs of the reference images to combine in one edit. Provide at least 2 and at most 5 IDs.
  aspect_ratio?: ImageAspectRatio | null; // Aspect ratio of the generated image, only specify it when user asks for a specific aspect ratio. If not specified, the model will use the aspect ratio of the primary reference image. Default null.
}
