/**
 * Tool: functions.bing-search
 * 
 * Description: Search the web using the Bing search engine. Returns the top web search results for the user's query.
 */

interface BingSearchTool {
    freshness?: string; // The date filter for Bing search results. Valid values: "", "month", "week", "day", or a date range.
    query: string; // A query string based on the user's request, rewritten and optimized for Bing web search.
    user_prompt: string; // One specific question within the prompt that requires up-to-date information from a web search.
}
