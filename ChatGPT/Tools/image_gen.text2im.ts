/**
 * Tool: image_gen.text2im
 * 
 * Description:
 * Generates or edits images from text prompts.
 */

interface ImageGenText2ImToolInput {
    prompt?: string | null;
    size?: string | null;
    n?: number | null;
    transparent_background?: boolean | null;
    is_style_transfer?: boolean | null;
    referenced_image_ids?: string[] | null;
}
