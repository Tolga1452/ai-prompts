/**
 * Tool: edit_image
 *
 * Description: Edit an existing image by applying modifications described in a prompt, save the result to disk, and return the file path. The edited image is saved to the artifacts/imagine_images/ directory. This capability is powered by Grok Imagine.\n\nIMPORTANT: Do NOT use this tool for simple one-shot image edits. Use the render_edited_image component instead when the user just wants to see a modified image — it streams the result directly without blocking. Only use this tool when:\n- The edited image is a stepping stone to a larger goal — e.g., inserting it into a document, presentation, app, or web page being built with code execution.\n- You want to do multiple rounds of iteration on the image.
 */
interface EditImageToolInput {
    prompt: string; // Prompt for the image editing model. The prompt should remain faithful to what the user is likely requesting but must not present incorrect information. Do not generate images promoting hate speech or violence.
    file_path?: string | null; // The path to the image file. It can be absolute path (preferred), or relative path to the persistent shell's current working directory. Provide this OR image_id.
    image_id?: string | null; // The 5-char alphanumeric ID of a previous image in the conversation. Provide this OR file_path.
}
