/**
 * Tool: generate_image
 *
 * Description: Generate a new image based on a detailed text description, save it to disk, and return the file path. The image is saved to the artifacts/imagine_images/ directory and can be referenced by its file path. This capability is powered by Grok Imagine.\n\nIMPORTANT: Do NOT use this tool for simple one-shot image generation requests. Use the render_generated_image component instead when the user just wants to see a generated image — it streams the result directly without blocking. Only use this tool when:\n- The generated image is a stepping stone to a larger goal — e.g., inserting it into a document, presentation, app, or web page being built with code execution.\n- You want to iterate on the image across multiple rounds of refinement with edit_image.
 */
interface GenerateImageToolInput {
    prompt: string; // Prompt for the image generation model. The prompt should remain faithful to what the user is likely requesting but must not present incorrect information. Do not generate images promoting hate speech or violence.
    orientation?: "portrait" | "landscape"; // Orientation for the generated image.
}
