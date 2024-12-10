/**
 * Tool: dalle.text2im
 * 
 * Description: Generate an image based on a detailed text prompt and specified dimensions.
 */

interface DalleText2ImInput {
    prompt: string; // The detailed description of the image to generate.
    size?: "1792x1024" | "1024x1024" | "1024x1792"; // The size of the requested image; default is 1024x1024.
    n?: number; // The number of images to generate; default is 1.
    referenced_image_ids?: string[]; // List of image IDs referenced for modification or integration, if applicable.
};
