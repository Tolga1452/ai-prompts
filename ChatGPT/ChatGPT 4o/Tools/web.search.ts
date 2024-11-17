/**
 * Tool: web.search
 * 
 * Description: The `web.search` tool issues a new query to a search engine and provides the response.
 * 
 * Input:
 */

interface WebSearchInput {
    query: string; // The search query string to be issued to the search engine.
};

// Output:

interface WebSearchOutput {
    results: Array<{
        title: string; // The title of the search result.
        snippet: string; // A brief snippet or summary of the search result.
        url: string; // The URL of the search result.
    }>; // An array containing metadata for each search result.
};
