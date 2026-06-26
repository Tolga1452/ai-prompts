/**
 * Tool: search_images
 *
 * Description: This tool searches the web for images and saves them to disk. Returns a list of images, each with a title, webpage url, and the file path where it was saved.
 */
interface SearchImagesTool {
    image_description: string; // The description of the image to search for.
    number_of_images?: number; // The number of images to search for. Default to 3, max is 10.
}
