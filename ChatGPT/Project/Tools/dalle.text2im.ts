/**
 * Tool: dalle.text2im
 * 
 * Description: The `dalle` tool creates images from a text-only prompt.
 */

interface DalleText2ImInput {
    size?: '1792x1024' | '1024x1024' | '1024x1792'; // The size of the requested image. Use '1024x1024' as the default, '1792x1024' if the user requests a wide image, and '1024x1792' for full-body portraits.
    n?: number; // The number of images to generate. Default is 1.
    prompt: string; // The detailed image description, potentially modified to abide by the dalle policies.
    referenced_image_ids?: string[]; // If the user references a previous image, this field should be populated with the `gen_id` from the dalle image metadata.
};
