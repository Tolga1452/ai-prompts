/**
 * Tool: x_user_search
 *
 * Description: Search for an X user given a search query.
 */
interface XUserSearchTool {
    query: string; // The name or account you are searching for
    count?: number; // Number of users to return. default to 3.
}
