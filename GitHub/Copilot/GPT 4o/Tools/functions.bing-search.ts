/**
 * Tool: functions.bing-search
 * 
 * Description: Search the web using the Bing search engine. Returns the top web search results for the user's query. This function is appropriate under the following circumstances: The user's query pertains to recent events or information that is frequently updated. The user's query is about new developments, trends, or technologies. The user's query is extremely specific, detailed, or pertains to a niche subject not likely to be covered in your knowledge base. The user explicitly requests a web search. The user is NOT asking about code in a specific GitHub repository, any other GitHub resource, or a GitHub code search.
 * 
 * Input:
 */

interface BingSearchInput {
    freshness?: string; // An optional string that specifies the freshness of the search results. It can only be one of these values: A date range in the format "YYYY-MM-DD..YYYY-MM-DD". - A specific date in the format "YYYY-MM-DD".
    query: string; // A query string based on the user's request. Follow these guidelines: Rewrite and optimize the query for an effective Bing web search. Prefer using Bing's "site" operator if you know the answer to the user's query can be found on a specific site. Examples: "site:github.com", "(site:github.com OR site:docs.github.com)"
};

// Output:

type BingSearchOutput = any;
