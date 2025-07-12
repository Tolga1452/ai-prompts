/**
 * Tool: image_gen.text2im
 * 
 * Description: Enables image generation from descriptions and editing of existing images based on specific instructions.
 */

interface ImageGenText2ImTool {
    prompt?: string; // Description or instructions for generating the image.
    size?: string; // Desired size of the generated image, e.g., "1024x1024".
    n?: number; // Number of images to generate.
    transparent_background?: boolean; // Whether the image should have a transparent background.
    referenced_image_ids?: string[]; // IDs of images being referenced for modification or generation.
}
