/**
 * Tool: web.open_url
 * 
 * Description: Opens a specific URL and retrieves its content.
 * 
 * Input:
 */

interface WebOpenUrlInput {
    /**
     * The URL to open and retrieve content from.
     */
    url: string;
};

// Output:

interface WebOpenUrlOutput {
    /**
     * The content retrieved from the specified URL.
     */
    content: string;
};
