/**
 * Tool: web.search
 * 
 * Description: Performs a search query on the web and returns relevant results.
 * 
 * Input:
 */

interface WebSearchInput {
    /**
     * The search query string that specifies what to look for on the web.
     */
    query: string;
};

// Output:

interface WebSearchOutput {
    /**
     * The list of search results, each containing a title, a snippet, and a URL.
     */
    results: {
        title: string;
        snippet: string;
        url: string;
    }[];
};
