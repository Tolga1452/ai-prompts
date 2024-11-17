/**
 * Tool: web.open_url
 * 
 * Description: The `web.open_url` tool opens a given URL and displays its content.
 * 
 * Input:
 */

interface WebOpenUrlInput {
    url: string; // The URL to be opened.
};

// Output:

interface WebOpenUrlOutput {
    content: string; // The HTML or text content of the opened URL.
    status: number; // The HTTP status code of the response.
    headers: Record<string, string>; // The headers from the HTTP response.
};
