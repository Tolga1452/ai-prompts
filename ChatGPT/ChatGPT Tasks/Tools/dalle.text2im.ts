/**
 * Tool: dalle.text2im
 * 
 * Description: Create images from a text-only prompt.
 */

interface DalleText2ImInput {
    prompt: string; // The detailed image description.
    size?: "1792x1024" | "1024x1024" | "1024x1792"; // The size of the requested image.
    n?: number; // The number of images to generate. Defaults to 1.
    referenced_image_ids?: string[]; // Referenced image IDs if the user references a previous image.
};
