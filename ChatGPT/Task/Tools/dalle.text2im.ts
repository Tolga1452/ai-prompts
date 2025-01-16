/**
 * Tool: dalle.text2im
 * 
 * Description: Create images from a text-only prompt.
 */

interface DalleText2ImInput {
    prompt: string; // The detailed image description to generate.
    size?: "1792x1024" | "1024x1024" | "1024x1792"; // The size of the requested image, default is "1024x1024".
    n?: number; // The number of images to generate, default is 1.
    referenced_image_ids?: string[]; // If the user references a previous image, this should contain the gen_id from the dalle image metadata.
};
