/**
 * Tool: web.search
 * 
 * Description: Issues a new query to a search engine and outputs the response.
 * 
 * Input:
 */

interface WebSearchInput {
    query: string; // The query to be issued to the search engine.
};

// Output:

interface WebSearchOutput {
    results: Array<{
        title: string; // The title of the search result.
        snippet: string; // A brief snippet of the content from the search result.
        url: string; // The URL of the search result.
    }>;
};
