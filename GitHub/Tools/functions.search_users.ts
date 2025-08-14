/**
 * Tool: functions.search_users
 * 
 * Description: Find GitHub users by username, real name, or other profile information.
 */

interface SearchUsersTool {
    order?: string; // Sort order.
    page?: number; // Page number for pagination (min 1).
    perPage?: number; // Results per page for pagination (min 1, max 100).
    query: string; // User search query.
    sort?: string; // Sort users by number of followers, repositories, or when the person joined GitHub.
}
