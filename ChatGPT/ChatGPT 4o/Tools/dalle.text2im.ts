/**
 * Tool: dalle.text2im
 * 
 * Description: The `text2im` tool generates images based on a detailed textual prompt, while adhering to specific guidelines about style, copyright, and artistic attribution.
 */

interface DalleText2ImInput {
    size?: '1792x1024' | '1024x1024' | '1024x1792'; // The size of the requested image. Default is 1024x1024.
    n?: number; // The number of images to generate. Default is 1.
    prompt: string; // The detailed image description, potentially modified to abide by the dalle policies.
    referenced_image_ids?: string[]; // Optional array of image IDs referenced for modifications or inspiration.
};
