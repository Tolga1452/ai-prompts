/**
 * Tool: web_search
 *
 * Description: This action allows you to search the web. You can use search operators like site:reddit.com when needed.
 */
interface WebSearchTool {
    query: string; // The search query to look up on the web.
    num_results?: number; // The number of results to return. It is optional, default 10, max is 30.
}
