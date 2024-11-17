/**
 * Tool: dalle
 * 
 * Description: The dalle tool allows the AI to generate images based on text descriptions provided by the user. The tool can create images using specified sizes and styles, adhering to certain content policies to ensure appropriate and non-infringing visual content.
 * 
 * Input:
 */

interface DalleInput {
    prompt: string; // A detailed description of the image to be generated.
    size?: "1792x1024" | "1024x1024" | "1024x1792"; // Optional; specifies the dimensions of the image.
    n?: number; // Optional; specifies the number of images to generate, default is 1.
    referenced_image_ids?: string[]; // Optional; array of image IDs that the new image should reference or modify.
};

// Output:

interface DalleOutput {
    images: { // Array of generated images, typically containing only one image unless specified otherwise.
        url: string; // URL to the generated image.
        gen_id: string; // Unique identifier for the generated image, used for referencing in future queries.
    }[];
};
