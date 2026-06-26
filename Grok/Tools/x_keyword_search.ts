/**
 * Tool: x_keyword_search
 *
 * Description: Advanced search tool for X Posts.
 */
interface XKeywordSearchTool {
    query: string; // The search query string for X advanced search. Supports all advanced operators...
    limit?: number; // The number of posts to return. Default to 3, max is 10.
    mode?: string; // Sort by Top or Latest. The default is Top. You must output the mode with a capital first letter.
}
