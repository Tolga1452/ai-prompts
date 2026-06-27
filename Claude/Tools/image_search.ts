/**
 * Tool: image_search
 * 
 * Description: Default to using image search for any query where visuals would enhance the user's understanding; skip when the deliverable is primarily textual e.g. for pure text tasks, code, technical support.
 */

interface ImageSearchInput {
  query: string; // Search query to find relevant images
  max_results?: number; // Maximum number of images to return (default: 3, minimum: 3, maximum: 5)
}
