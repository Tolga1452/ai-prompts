/**
 * Tool: canmore.comment_textdoc
 * 
 * Description: Adds comments to the current text document by applying a set of comments that are not part of the document content. Use this function to add comments for the user to review and revise if they choose. Each comment should be a specific and actionable suggestion on how to improve the content based on the user request.
 */

interface CommentTextDocInput {
    comments: Array<{
        pattern: string; // A Python regular expression to identify where the comment should apply.
        comment: string; // The actual comment description or suggestion.
    }>;
};
