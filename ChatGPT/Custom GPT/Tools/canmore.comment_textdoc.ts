/**
 * Tool: canmore.comment_textdoc
 * 
 * Description: Comments on the current textdoc. Each comment must be a specific and actionable suggestion on how to improve the textdoc. For higher level feedback, reply in the chat.
 */

interface CanmoreCommentTextdocInput {
    comments: {
        pattern: string; // A valid Python regular expression to match the section being commented on.
        comment: string; // The text of the comment providing feedback.
    }[]; // An array of comments to apply to the textdoc.
};
