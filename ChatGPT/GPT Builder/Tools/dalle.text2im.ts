/**
 * Tool: dalle.text2im
 * 
 * Description: Generates images based on a given text prompt. The tool supports specifying the size and number of images, and allows referencing previous images for modifications.
 * 
 * Input:
 */

interface DalleText2ImInput {
    /**
     * The detailed description of the image to be generated. Should be rich in detail to guide the image generation process.
     */
    prompt: string;
    /**
     * The size of the requested image. Defaults to 1024x1024 (square). Other options include 1792x1024 for wide images and 1024x1792 for full-body portraits.
     */
    size?: "1792x1024" | "1024x1024" | "1024x1792";
    /**
     * The number of images to generate. Defaults to 1 if not specified.
     */
    n?: number;
    /**
     * A list of previously generated image IDs to reference for modifications. This allows the tool to refine or adjust existing images.
     */
    referenced_image_ids?: string[];
};

// Output:

interface DalleText2ImOutput {
    /**
     * An array of generated images, each with its corresponding metadata.
     */
    images: {
        url: string;
        id: string;
    }[];
};
