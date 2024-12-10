/**
 * Tool: dalle.text2im
 * 
 * Description: Create images from a text-only prompt.
 */

interface Text2ImageInput {
    size?: "1792x1024" | "1024x1024" | "1024x1792"; // The size of the requested image. Defaults to 1024x1024.
    n?: number; // The number of images to generate. Defaults to 1.
    prompt: string; // The detailed image description to generate the image.
    referenced_image_ids?: string[]; // If the user references a previous image, this field should be populated with the gen_id from the dalle image metadata.
};
