/**
 * Tool: x_thread_fetch
 *
 * Description: Fetch the content of an X post and the context around it, including parent posts and replies.
 */
interface XThreadFetchTool {
    post_id: string; // The ID of the post to fetch along with its context.
}
