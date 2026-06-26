/**
 * Tool: x_semantic_search
 *
 * Description: Fetch X posts that are relevant to a semantic search query.
 */
interface XSemanticSearchTool {
    query: string; // A semantic search query to find relevant related posts
    limit?: number; // Number of posts to return. Default to 3, max is 10.
    from_date?: string | null; // Optional: Filter to receive posts from this date onwards. Format: YYYY-MM-DD
    to_date?: string | null; // Optional: Filter to receive posts up to this date. Format: YYYY-MM-DD
    exclude_usernames?: string[] | null; // Optional: Filter to exclude these usernames.
    usernames?: string[] | null; // Optional: Filter to only include these usernames.
    min_score_threshold?: number; // Optional: Minimum relevancy score threshold for posts.
}
