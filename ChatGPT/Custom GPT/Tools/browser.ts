/**
 * Tool: browser
 * 
 * Description: The browser tool allows the AI to perform web browsing tasks, such as searching the web, clicking on links to retrieve web content, and opening specific URLs provided by the user. It is used to fetch real-time information, explore unfamiliar terms, or when the user requests specific web-based tasks.
 * 
 * Input:
 */

interface BrowserInput {
    command: "search" | "mclick" | "open_url";
    query?: string; // Used with the 'search' command to specify the search term.
    recency_days?: number; // Used with the 'search' command to specify the freshness of the results.
    ids?: string[]; // Used with the 'mclick' command to specify IDs of the search results for multi-click retrieval.
    url?: string; // Used with the 'open_url' command to specify the direct URL to open.
};

// Output:

interface BrowserOutput {
    content: string; // The retrieved content from the web, formatted in text, based on the command executed.
};
